import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodHideKeyboard,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type HideKeyboard = (
	eventData?: SenderData[typeof MethodHideKeyboard]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [9.1]
 *
 * Hides the on-screen keyboard.
 */
const hideKeyboard: HideKeyboard = () => {
	if (!supportHideKeyboard()) {
		debug(MethodHideKeyboard, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodHideKeyboard)
	return { status: true }
}

/**
 * Method support check
 */
export const supportHideKeyboard = () =>
	supportCheck(9.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default hideKeyboard
