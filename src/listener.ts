import { EventThemeChanged } from "../src/types/events";
import { getThemeParams } from "./utils";

type EventDispatch<D> = (data: D) => void;

type EmiterVoid<E extends Record<string | number | symbol, unknown>, K extends keyof E> = (
  key: K,
  dispatch: EventDispatch<E[K]>,
  dispatchList?: Array<EventDispatch<E[K]>>
) => void;

type EmiterOnce<E extends Record<string | number | symbol, unknown>, K extends keyof E> = (
  key: K,
  dispatch: EventDispatch<E[K]>,
  dispatchList?: Array<EventDispatch<E[K]>>,
  clb?: (d: E[K]) => void
) => void;

type EmiterEmit<E extends Record<string | number | symbol, unknown>, K extends keyof E> = (
  key: K,
  value: E[K],
  dispatchList?: Array<EventDispatch<E[K]>>
) => void;

type EventMap<E extends Record<string | number | symbol, unknown>, K extends keyof E> = Map<K, Array<EventDispatch<E[K]>>>

type Emiter = <Events extends Record<string | number | symbol, unknown>>(map?: EventMap<Events, keyof Events>) => {
  on: EmiterVoid<Events, keyof Events>,
  off: EmiterVoid<Events, keyof Events>,
  once: EmiterOnce<Events, keyof Events>,
  emit: EmiterEmit<Events, keyof Events>
}
const emiter: ReturnType<Emiter> = ((map = new Map()) => ({
  once: (key, item, dispatchList = map.get(key), clb = (d: any) => {
    item(d);
    dispatchList && dispatchList.splice(dispatchList.indexOf(item) >>> 0, 1);
  }) => dispatchList ? dispatchList.push(clb) : map.set(key, [clb]),
  on: (key, item, dispatchList = map.get(key)) =>
    dispatchList ? dispatchList.push(item) : map.set(key, [item]),
  off: (key, item, dispatchList = map.get(key)) =>
    dispatchList && item ? dispatchList.splice(dispatchList.indexOf(item) >>> 0, 1) : map.set(key, []),
  emit: (key, data, dispatchList = map.get(key) || []) => {
    for (const dispatch of dispatchList) { dispatch(data) }
  }
}))()

/* Types */
export type EventsData = {
  /**
 * User clicked the Back Button.
 */
  "back_button_pressed": undefined

  /**
   * Telegram application attempted to extract text from clipboard.
   */
  "clipboard_text_received": {
    /**
     * Passed during the web_app_read_text_from_clipboard method invocation req_id value.
     */
    req_id: string
    /**
     * Optional. Data extracted from the clipboard. The returned value will have the type string only in the case, application has access to the clipboard.
     */
    data?: string | null
  }

  /**
 * Custom method invocation completed.
 */
  "custom_method_invoked": {
    /**
     * Unique identifier of this invocation.
     */
    req_id: string
    /**
     * Optional. Method invocation successful result.
     */
    result?: unknown
    /**
     * 	Optional. Method invocation error code.
     */
    error?: string
  }

  /**
 * An invoice was closed.
 */
  "invoice_closed": {
    /**
     * Passed during the  web_app_open_invoice  method invocation slug value.
     */
    slug: string
    /**
     * Invoice status. Values:
     * 
     * paid - invoice was paid
     * 
     * failed - invoice failed
     * 
     * pending - invoice is currently pending
     * 
     * cancelled - invoice was cancelled
     */
    status: 'paid' | 'failed' | 'pending' | 'cancelled'
  }

  /**
 * User clicked the Main Button.
 */
  "main_button_pressed": undefined

  /**
 * Application received phone access request status.
 */
  "phone_requested": {
    /**
     * Request status. Can only be sent
     */
    status: 'sent'
  }

  /**
 * Popup was closed.
 */
  "popup_closed": {
    /**
     * Optional. Identifier of the clicked button.
     * 
     * In case, the popup was closed without clicking any button, this property will be omitted.
     */
    button_id?: string
  }

  /**
 * Parent iframe requested current iframe reload.
 */
  "reload_iframe": undefined

  /**
   * The QR scanner scanned some QR and extracted its content.
   */
  "qr_text_received": {
    /**
     * Optional. Data extracted from the QR.
     */
    data?: string
  }

  /**
 * QR scanner was closed.
 */
  "scan_qr_popup_closed": undefined

  /**
 * The event which is usually sent by the Telegram web application. 
 * 
 * Its payload represents <style/> tag html content, a developer could use. The stylesheet described in the payload will help the developer to stylize the app scrollbar (but he is still able to do it himself).
 */
  "set_custom_style": undefined

  /**
 * Occurs when the Settings Button was pressed.
 */
  "settings_button_pressed": undefined

  /**
  * Occurs whenever the theme was changed in the user's Telegram app ( including switching to night mode).
  */
  "theme_changed": {
    /**
     * Map where the key is a theme stylesheet key and value is the corresponding color in #RRGGBB format.
     */
    theme_params: Record<string, string>
  }

  /**
   * Occurs whenever the viewport has been changed. 
   * 
   * For example, when the user started dragging the application or called the expansion method.
   */
  "viewport_changed": {
    /**
     * The viewport height.
     */
    height: number
    /**
     * Optional. The viewport width.
     */
    width?: number
    /**
     * Is the viewport currently expanded.
     */
    is_expanded: boolean
    /**
     * Is the viewport current state stable and not going to change in the next moment.
     */
    is_state_stable: boolean
  }

  /**
  * Application received write access request status.
  */
  "write_access_requested": {
    /**
     * Request status. Can only be allowed.
     */
    status: 'allowed'
  }
}

interface TelegramGameProxy {
  receiveEvent: (event: string, data: string) => void;
}

interface TelegramWebviewProxy {
  postEvent: (event: string, data: string) => void;
}
declare global {
  interface External {
    notify: (event: string) => void
  }
  interface Window {
    TelegramWebviewProxy: TelegramWebviewProxy;
    TelegramGameProxy: TelegramGameProxy;
    TelegramGameProxy_receiveEvent: TelegramGameProxy["receiveEvent"]
    Telegram: {
      WebView: TelegramGameProxy
    }
  }
}

/**
 * Start listener
 */
const start = () => {
  /** Windows Phone */
  window.TelegramGameProxy_receiveEvent = receiveEvent

  /** Android */
  window.Telegram = { WebView: { receiveEvent } }

  /** iOS and Desktop */
  window.TelegramGameProxy = { receiveEvent }

  function receiveEvent(eventName: string, eventData: any) {

    /* Fix colors */
    if (eventName === EventThemeChanged) {
      eventData.theme_params = getThemeParams(eventData.theme_params)
    }

    emiter.emit(eventName, eventData)
    emiter.emit('*', { name: eventName, data: eventData })
  }
}

start()

type Listened = <T extends EventsData, E extends keyof T, D extends T[E]>(eventName: E, callback: (eventData: D) => void) => void

export const on: Listened = (eventName, callback) => {
  emiter.on(eventName, callback as EventDispatch<unknown>)
}

export const off: Listened = (eventName, callback) => {
  emiter.off(eventName, callback as EventDispatch<unknown>)
}

export const once: Listened = (eventName, callback) => {
  emiter.once(eventName, callback as EventDispatch<unknown>)
}

