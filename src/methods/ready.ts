import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"

type Ready = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_ready'

/**
 * Notifies Telegram about current application is ready to be shown. 
 * 
 * This method will make Telegram to remove application loader and display Mini App.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-ready
 */
const ready: Ready = () => {
  if (!supportReady()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportReady = () =>
  supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default ready
