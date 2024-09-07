import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodReady,
} from '../index'
import { supportCheck } from '../../utils'

type Ready = () => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Notifies Telegram about current application is ready to be shown.
 *
 * This method will make Telegram to remove application loader and display Mini App.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-ready
 */
const ready: Ready = () => {
	if (!supportReady()) {
		debug(MethodReady, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodReady)
	return { status: true }
}

/**
 * Method support check
 */
export const supportReady = () =>
	supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default ready
