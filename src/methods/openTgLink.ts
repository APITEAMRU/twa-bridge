import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type OpenTgLink = (eventData: {
  /**
   * 	Should be a value taken from the link of this format: https://t.me/{path_full}. 
   * 
   * Can additionally contain query parameters.
   */
  path_full: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_open_tg_link'

/**
 * Opens the Telegram link by its pathname and query parameters. 
 * 
 * The link will be opened in the Telegram app, Mini App will be closed.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-tg-link
 */
const openTgLink: OpenTgLink = (eventData) => {

  /** Requires editing on the telegram side */
  if (eventData.path_full[0] !== '/') eventData.path_full = '/' + eventData.path_full

  if (!supportOpenTgLink()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportOpenTgLink = () =>
  supportCheck(7.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openTgLink
