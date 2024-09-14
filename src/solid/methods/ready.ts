import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodReady,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type Ready = (eventData?: SenderData[typeof MethodReady]) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Notifies Telegram about current application is ready to be shown.
 *
 * This method will make Telegram to remove application loader and display Mini App.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-ready
 */
const ready: Ready = eventData => {
	if (!supportReady()) {
		debug(MethodReady, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodReady, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportReady = () =>
	supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default ready
