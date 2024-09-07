import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetBottomBarColor,
} from '../index'
import { supportCheck } from '../../utils'

type SetBottomBarColor = (eventData: {
	/**
	 * The Mini App header color key. Could be either bg_color or secondary_bg_color.
	 */
	color_key?: 'bg_color' | 'secondary_bg_color' | 'bottom_bar_bg_color'
	/**
	 * Color in HEX format.
	 */
	color?: string
}) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates the Mini App header color. This method should accept color_key or color property.
 */
const setBottomBarColor: SetBottomBarColor = eventData => {
	if (!supportSetBottomBarColor()) {
		debug(MethodSetBottomBarColor, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetBottomBarColor, {
		color: eventData.color || eventData.color_key,
	})
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetBottomBarColor = () =>
	supportCheck(710, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setBottomBarColor
