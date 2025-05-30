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
 * Version [6.1]
 *
 * [EN]
 * Method that opens an invoice using a url link.
 *
 * [RU]
 * Метод, который открывает счет-фактуру с помощью ссылки url.
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
