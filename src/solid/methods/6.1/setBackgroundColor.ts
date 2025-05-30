import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetBackgroundColor,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetBackgroundColor = (
	eventData: SenderData[typeof MethodSetBackgroundColor]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [6.1]
 *
 * [EN]
 * Method that sets the background color of the application in #RRGGBB format.
 * You can also use the `bg_color` and `secondary_bg_color` keywords.
 *
 * [RU]
 * Метод, который устанавливает цвет фона приложения в формате #RRGGBB.
 * Вы также можете использовать ключевые слова `bg_color` и `secondary_bg_color`.
 */
const setBackgroundColor: SetBackgroundColor = eventData => {
	if (!supportSetBackgroundColor()) {
		debug(MethodSetBackgroundColor, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetBackgroundColor, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetBackgroundColor = () =>
	supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setBackgroundColor
