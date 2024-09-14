import {
	EventPhoneRequested,
	EventsData,
	MethodRequestPhone,
	NOT_SUPPORTED,
	SenderData,
	TG_DESKTOP,
	TG_PHONE,
	TG_WEB,
	debug,
	listener,
	sender,
} from '../../index'
import { supportCheck } from '../../../utils'

type RequestPhone = (
	eventData?: SenderData[typeof MethodRequestPhone]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Requests access to current user's phone.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-phone
 */
const requestPhone: RequestPhone = async () => {
	if (!supportRequestPhone()) {
		debug(MethodRequestPhone, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodRequestPhone)
	return new Promise((resolve, reject) => {
		listener.once(EventPhoneRequested, data => {
			if (data.status === 'sent') {
				resolve({ status: true })
			}
			resolve({ status: false })
		})
	})
}

/**
 * Method support check
 */
export const supportRequestPhone = () =>
	supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestPhone
