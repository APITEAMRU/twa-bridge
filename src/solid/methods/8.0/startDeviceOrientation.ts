import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStartDeviceOrientation,
	SenderData,
	EventsData,
	EventDeviceOrientationStarted,
	EventDeviceOrientationFailed,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StartDeviceOrientation = (
	eventData?: SenderData[typeof MethodStartDeviceOrientation]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventDeviceOrientationFailed]
}>

/**
 * Version [8.0]
 *
 * Starts tracking device orientation data.
 */
const startDeviceOrientation: StartDeviceOrientation = async eventData => {
	if (!supportStartDeviceOrientation()) {
		debug(MethodStartDeviceOrientation, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const clear = () => {
			listener.off(EventDeviceOrientationStarted, started)
			listener.off(EventDeviceOrientationFailed, failed)
		}
		const started = () => {
			clear()
			resolve({ status: true })
		}
		const failed = (
			data: EventsData[typeof EventDeviceOrientationFailed]
		) => {
			clear()
			resolve({ status: false, data })
		}
		listener.on(EventDeviceOrientationStarted, started)
		listener.on(EventDeviceOrientationFailed, failed)
		sender(MethodStartDeviceOrientation, eventData)
	})
}

/**
 * Method support check
 */
export const supportStartDeviceOrientation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default startDeviceOrientation
