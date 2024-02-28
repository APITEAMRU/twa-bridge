import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"
import { TG_WEB } from "../utils/getPlatform/getPlatform"

type IframeReady = (eventData: {
  /**
   * Optional. True, if current Mini App supports native reloading.
   */
  reload_supported?: boolean
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'iframe_ready'

/**
 * Notifies parent iframe about the current frame is ready.
 * This method is only used in the Web version of Telegram.
 * As a result, Mini App will receive set_custom_style event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-ready
 */
const iframeReady: IframeReady = (eventData) => {
  if (!supportIframeReady()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportIframeReady = () =>
  supportCheck(0, [TG_WEB])

export default iframeReady
