import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type OpenLink = (eventData: {
  /**
   * 	URL to be opened by Telegram application. Should be a full path with https protocol.
   */
  url: string
  /**
   * Optional. Link will be opened in Instant View mode if possible.
   */
  try_instant_view?: boolean
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_open_link'

/**
 * Opens link in the default browser. 
 * 
 * Mini App will not be closed.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-link
 */
const openLink: OpenLink = (eventData) => {
  if (!supportOpenLink()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportOpenLink = () =>
  supportCheck(6.4, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openLink
