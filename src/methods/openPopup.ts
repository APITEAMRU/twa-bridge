import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type PopupButton = {
  /**
   * Identifier of the button, 0-64 characters.
   */
  id: string

  type: 'default' | 'destructive' | 'ok' | 'close' | 'cancel'
  /**
   * The text to be displayed on the button, 0-64 characters. Ignored when type is ok, close or cancel.
   */
  text: string
}

type OpenPopup = (eventData: {
  /**
   * The text to be displayed in the popup title, 0-64 characters
   */
  title: string
  /**
   * The message to be displayed in the body of the popup, 1-256 characters
   */
  message: string
  /**
   * List of buttons to be displayed in the popup, 1-3 buttons
   */
  buttons: PopupButton[]
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_open_popup'

/**
 * Opens a new popup. When user closes the popup, Telegram creates the popup_closed event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-popup
 */
const openPopup: OpenPopup = (eventData) => {
  if (!supportOpenPopup()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  if (eventData.title.length > 64) { debug('Title too long, maximum length 64 characters') }

  if (eventData.message.length < 1) { debug('Your message is too short, at least 1 character') }
  if (eventData.message.length > 256) { debug('Your message is too long, maximum 256 characters') }

  if (eventData.buttons.length < 1) { debug('You are passing too few buttons, at least 1 button') }
  if (eventData.buttons.length > 3) { debug('You are passing too many buttons, maximum 3 buttons') }
  if (eventData.buttons.find(x => x.text?.match(/^(ok|close|cancel)$/g)) !== undefined) { debug('The button text ignores the following values: "ok, close, cancel"') }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportOpenPopup = () =>
  supportCheck(6.2, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openPopup
