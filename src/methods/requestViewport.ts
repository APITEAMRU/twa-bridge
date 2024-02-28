import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"

type RequestViewport = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_request_viewport'

/**
 * Requests current viewport information from Telegram. 
 * 
 * As a result, Telegram will create viewport_changed event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
const requestViewport: RequestViewport = () => {
  if (!supportRequestViewport()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportRequestViewport = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestViewport
