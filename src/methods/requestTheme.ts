import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"

type RequestTheme = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_request_theme'

/**
 * Requests current theme from Telegram. 
 * 
 * As a result, Telegram will create theme_changed event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-theme
 */
const requestTheme: RequestTheme = () => {
  if (!supportRequestTheme()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportRequestTheme = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestTheme
