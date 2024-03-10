import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodOpenTgLink } from "../index";
import { supportCheck } from "../../utils"

type OpenTgLink = (eventData: {
  /**
   * 	Should be a value taken from the link of this format: https://t.me/{path_full}. 
   * 
   * Can additionally contain query parameters.
   */
  path_full: string
}) => {
  status: boolean | typeof NOT_SUPPORTED
}

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

  if (!supportOpenTgLink()) { debug(MethodOpenTgLink, 1); return { status: NOT_SUPPORTED } }

  sender(MethodOpenTgLink, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportOpenTgLink = () =>
  supportCheck(7.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openTgLink
