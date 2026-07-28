import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodCheckLocation,
	SenderData,
	EventsData,
	EventLocationChecked,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type CheckLocation = (
	eventData?: SenderData[typeof MethodCheckLocation]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventLocationChecked]
}>

/**
 * Version [8.0]
 *
 * Checks whether location services are available and if access was granted.
 */
const checkLocation: CheckLocation = async () => {
	if (!supportCheckLocation()) {
		debug(MethodCheckLocation, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventLocationChecked]) => {
			resolve({ status: true, data })
			listener.off(EventLocationChecked, callback)
		}
		listener.on(EventLocationChecked, callback)
		sender(MethodCheckLocation)
	})
}

/**
 * Method support check
 */
export const supportCheckLocation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default checkLocation
