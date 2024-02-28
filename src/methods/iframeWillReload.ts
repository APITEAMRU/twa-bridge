import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"
import { TG_WEB } from "../utils/getPlatform/getPlatform";

type IframeWillReload = () => {
  status: boolean | 'not_supported'
}

const eventName = 'iframe_will_reload'

/**
 * Notifies parent iframe about the current iframe is going to reload.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-will-reload
 */
const iframeWillReload: IframeWillReload = () => {
  if (!supportIframeWillReload()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportIframeWillReload = () =>
  supportCheck(0, [TG_WEB])

export default iframeWillReload
