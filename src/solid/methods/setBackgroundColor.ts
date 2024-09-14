import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetBackgroundColor,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetBackgroundColor = (
	eventData: SenderData[typeof MethodSetBackgroundColor]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates the Mini App background color.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-background-color
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
