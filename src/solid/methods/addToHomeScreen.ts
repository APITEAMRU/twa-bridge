import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodAddToHomeScreen,
} from '../index'
import { supportCheck } from '../../utils'

type AddToHomeScreen = (
	eventData?: SenderData[typeof MethodAddToHomeScreen]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/** */
const addToHomeScreen: AddToHomeScreen = () => {
	if (!supportAddToHomeScreen()) {
		debug(MethodAddToHomeScreen, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(MethodAddToHomeScreen)
	return { status: true }
}

/**
 * Method support check
 */
export const supportAddToHomeScreen = () =>
	supportCheck(8.0, [TG_DESKTOP, TG_PHONE])

export default addToHomeScreen
