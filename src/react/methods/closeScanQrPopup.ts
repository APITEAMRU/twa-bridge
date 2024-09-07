import {
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodCloseScanQrPopup,
} from '../index'
import { supportCheck } from '../../utils'

type CloseScanQrPopup = () => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Closes a QR scanner. The Telegram application creates the scan_qr_popup_closed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
const closeScanQrPopup: CloseScanQrPopup = () => {
	if (!supportCloseScanQrPopup()) {
		debug(MethodCloseScanQrPopup, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodCloseScanQrPopup)
	return { status: true }
}

/**
 * Method support check
 */
export const supportCloseScanQrPopup = () => supportCheck(64, [TG_PHONE])

export default closeScanQrPopup
