import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"
import { TG_PHONE } from "../utils/getPlatform/getPlatform";

type CloseScanQrPopup = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_close_scan_qr_popup'

/**
 * Closes a QR scanner. The Telegram application creates the scan_qr_popup_closed event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
const closeScanQrPopup: CloseScanQrPopup = () => {
  if (!supportCloseScanQrPopup()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportCloseScanQrPopup = () =>
  supportCheck(6.4, [TG_PHONE])

export default closeScanQrPopup
