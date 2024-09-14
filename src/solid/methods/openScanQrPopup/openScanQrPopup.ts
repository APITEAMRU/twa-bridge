import {
	EventQrTextReceived,
	EventScanQrPopupClosed,
	EventsData,
	MethodOpenScanQrPopup,
	NOT_SUPPORTED,
	SenderData,
	TG_PHONE,
	bridgeCloseScanQrPopup,
	debug,
	listener,
	sender,
} from '../../index'
import { supportCheck } from '../../../utils'

type OpenScanQrPopup = (
	eventData: SenderData[typeof MethodOpenScanQrPopup]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED | 'closed'
	data?: EventsData[typeof EventQrTextReceived]
}>

/**
 * Opens a QR scanner.
 *
 * When the scanner was closed, the Telegram application creates the scan_qr_popup_closed event.
 *
 * When the scanner reads QR, Telegram creates the qr_text_received event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
const openScanQrPopup: OpenScanQrPopup = async eventData => {
	if (!supportOpenScanQrPopup()) {
		debug(MethodOpenScanQrPopup, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodOpenScanQrPopup, eventData)

	return new Promise((resolve, reject) => {
		listener.once(EventQrTextReceived, data => {
			/* Closed the QR scanner after reading the data  */
			if (eventData.is_close) {
				bridgeCloseScanQrPopup()
			}
			resolve({ status: true, data: data })
		})
		listener.once(EventScanQrPopupClosed, () => {
			resolve({ status: 'closed' })
		})
	})
}

/**
 * Method support check
 */
export const supportOpenScanQrPopup = () => supportCheck(6.4, [TG_PHONE])

export default openScanQrPopup
