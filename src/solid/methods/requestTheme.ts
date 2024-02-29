import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodRequestTheme } from "../index";
import { supportCheck } from "../../utils"

type RequestTheme = () => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Requests current theme from Telegram. 
 * 
 * As a result, Telegram will create theme_changed event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-theme
 */
const requestTheme: RequestTheme = () => {
  if (!supportRequestTheme()) { debug(MethodRequestTheme, 1); return { status: NOT_SUPPORTED } }

  sender(MethodRequestTheme)
  return { status: true }
}

/**
 * Method support check
 */
export const supportRequestTheme = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestTheme
