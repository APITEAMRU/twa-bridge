import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodRequestWriteAccess,
} from '../index'
import { supportCheck } from '../../utils'

type RequestWriteAccess = () => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Requests write message access to current user.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
const requestWriteAccess: RequestWriteAccess = () => {
	if (!supportRequestWriteAccess()) {
		debug(MethodRequestWriteAccess, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodRequestWriteAccess)
	return { status: true }
}

/**
 * Method support check
 */
export const supportRequestWriteAccess = () =>
	supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestWriteAccess
