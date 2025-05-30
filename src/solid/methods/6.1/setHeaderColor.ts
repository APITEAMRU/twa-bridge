import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetHeaderColor,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetHeaderColor = (eventData: SenderData[typeof MethodSetHeaderColor]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [6.1]
 *
 * [EN]
 * A method that sets the app header color in the #RRGGBB format.
 * You can also use keywords `bg_color` and `secondary_bg_color`.
 *
 * [RU]
 * Метод, который устанавливает цвет заголовка приложения в формате #RRGGBB.
 * Вы также можете использовать ключевые слова `bg_color` и `secondary_bg_color`.
 */
const setHeaderColor: SetHeaderColor = eventData => {
	if (!supportSetHeaderColor()) {
		debug(MethodSetHeaderColor, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetHeaderColor, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetHeaderColor = () =>
	supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setHeaderColor
