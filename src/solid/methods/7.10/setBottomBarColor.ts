import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetBottomBarColor,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetBottomBarColor = (
	eventData: SenderData[typeof MethodSetBottomBarColor]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [7.10]
 *
 *  [EN]
 * Method that sets the color of the bottom bar of the application in the format #RRGGBB.
 * You can also use the keywords `bg_color`, `secondary_bg_color` and `bottom_bar_bg_color`.
 * This color is also applied to the navigation bar on Android.
 *
 * [RU]
 * Метод, который устанавливает цвет нижней панели приложения в формате #RRGGBB.
 * Вы также можете использовать ключевые слова `bg_color`, `secondary_bg_color` и `bottom_bar_bg_color`.
 * Этот цвет также применяется к панели навигации на Android.
 */
const setBottomBarColor: SetBottomBarColor = eventData => {
	if (!supportSetBottomBarColor()) {
		debug(MethodSetBottomBarColor, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetBottomBarColor, {
		color: eventData?.color || eventData?.color_key,
	})
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetBottomBarColor = () =>
	supportCheck(7.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setBottomBarColor
