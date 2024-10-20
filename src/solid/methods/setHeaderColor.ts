import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetHeaderColor,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetHeaderColor = (eventData: SenderData[typeof MethodSetHeaderColor]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates the Mini App header color. This method should accept color_key or color property.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-header-color
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
