import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodRequestWriteAccess,
	SenderData,
	EventsData,
	EventWriteAccessRequested,
	listener,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type RequestWriteAccess = (
	eventData?: SenderData[typeof MethodRequestWriteAccess]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * A method that shows a native popup requesting permission for the bot to send messages to the user.
 * If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
const requestWriteAccess: RequestWriteAccess = () => {
	return new Promise((resolve, reject) => {
		if (!supportRequestWriteAccess()) {
			debug(MethodRequestWriteAccess, 1)
			resolve({ status: NOT_SUPPORTED })
			return
		}

		const callback = (data: EventsData[typeof EventWriteAccessRequested]) => {
			resolve({ status: data.status === 'allowed' })
			listener.off(EventWriteAccessRequested, callback)
		}
		listener.on(EventWriteAccessRequested, callback)
		sender(MethodRequestWriteAccess)
	})
}

/**
 * Method support check
 */
export const supportRequestWriteAccess = () =>
	supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestWriteAccess
