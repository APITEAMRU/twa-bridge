import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetBottomBarColor,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetBottomBarColor = (
	eventData: SenderData[typeof MethodSetBottomBarColor]
) => {
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
		color: eventData?.color || eventData?.color_key,
	})
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetBottomBarColor = () =>
	supportCheck(710, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setBottomBarColor
