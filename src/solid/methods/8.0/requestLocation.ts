import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodRequestLocation,
	SenderData,
	EventsData,
	EventLocationRequested,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type RequestLocation = (
	eventData?: SenderData[typeof MethodRequestLocation]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventLocationRequested]
}>

/**
 * Version [8.0]
 *
 * Requests the current user location.
 */
const requestLocation: RequestLocation = async () => {
	if (!supportRequestLocation()) {
		debug(MethodRequestLocation, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventLocationRequested]) => {
			resolve({ status: data.available, data })
			listener.off(EventLocationRequested, callback)
		}
		listener.on(EventLocationRequested, callback)
		sender(MethodRequestLocation)
	})
}

/**
 * Method support check
 */
export const supportRequestLocation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestLocation
