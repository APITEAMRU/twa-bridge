import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type ReadTextFromClipboard = (eventData: {
  /**
   * Unique request identifier. Should be any unique string to handle the generated event appropriately.
   */
  req_id: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_read_text_from_clipboard'

/**
 * Reads text from the clipboard. 
 * 
 * The method accepts a request identifier which is used to appropriately retrieve the method execution result from the clipboard_text_received event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-read-text-from-clipboard
 */
const readTextFromClipboard: ReadTextFromClipboard = (eventData) => {
  if (!supportReadTextFromClipboard()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportReadTextFromClipboard = () =>
  supportCheck(6.4, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default readTextFromClipboard
