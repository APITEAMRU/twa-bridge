import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"

type RequestWriteAccess = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_request_write_access'

/**
 * Requests write message access to current user.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
const requestWriteAccess: RequestWriteAccess = () => {
  if (!supportRequestWriteAccess()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportRequestWriteAccess = () =>
  supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestWriteAccess
