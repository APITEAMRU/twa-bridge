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
 * EN: A method that closes the native popup for scanning a QR code opened with the `openScanQrPopup` method.
 *
 * Run it if you received valid data in the event `qr_text_received`.
 *
 * RU: Метод, который закрывает собственное всплывающее окно для сканирования QR-кода, открытого с помощью метода `openScanQrPopup`.
 *
 * Запустите его, если вы получили действительные данные в событии `qr_text_received`.
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
export const supportCloseScanQrPopup = () => supportCheck(6.4, [TG_PHONE])

export default closeScanQrPopup
