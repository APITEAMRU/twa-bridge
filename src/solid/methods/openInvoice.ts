import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenInvoice,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type OpenInvoice = (eventData: SenderData[typeof MethodOpenInvoice]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Opens an invoice by its specified slug.
 *
 * More information about invoices in this documentation.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-invoice
 */
const openInvoice: OpenInvoice = eventData => {
	if (!supportOpenInvoice()) {
		debug(MethodOpenInvoice, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodOpenInvoice, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportOpenInvoice = () =>
	supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openInvoice
