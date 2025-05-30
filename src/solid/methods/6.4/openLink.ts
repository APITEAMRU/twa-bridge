import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenLink,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type OpenLink = (eventData: SenderData[typeof MethodOpenLink]) => {
	status: boolean | typeof NOT_SUPPORTED
}
/**
 * Version [6.4]
 *
 * [EN]
 * Method that opens the link in an external browser. The widget will not be closed.
 *
 * [RU]
 * Метод, который открывает ссылку во внешнем браузере. Мини-приложение не будет закрыто.
 */
const openLink: OpenLink = eventData => {
	if (!supportOpenLink()) {
		debug(MethodOpenLink, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodOpenLink, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportOpenLink = () =>
	supportCheck(6.4, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openLink
