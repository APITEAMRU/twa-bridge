import { TG_WEB, TG_DESKTOP, TG_PHONE, sender } from "../solid/index";
import debug from "../debug";
import { supportCheck } from "../utils"

type Close = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_close'

/**
 * Closes Mini App.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close
 */
const close: Close = () => {
  if (!supportClose()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportClose = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default close
