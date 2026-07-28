import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStartAccelerometer,
	SenderData,
	EventsData,
	EventAccelerometerStarted,
	EventAccelerometerFailed,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StartAccelerometer = (
	eventData?: SenderData[typeof MethodStartAccelerometer]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventAccelerometerFailed]
}>

/**
 * Version [8.0]
 *
 * Starts tracking accelerometer data.
 */
const startAccelerometer: StartAccelerometer = async eventData => {
	if (!supportStartAccelerometer()) {
		debug(MethodStartAccelerometer, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const clear = () => {
			listener.off(EventAccelerometerStarted, started)
			listener.off(EventAccelerometerFailed, failed)
		}
		const started = () => {
			clear()
			resolve({ status: true })
		}
		const failed = (data: EventsData[typeof EventAccelerometerFailed]) => {
			clear()
			resolve({ status: false, data })
		}
		listener.on(EventAccelerometerStarted, started)
		listener.on(EventAccelerometerFailed, failed)
		sender(MethodStartAccelerometer, eventData)
	})
}

/**
 * Method support check
 */
export const supportStartAccelerometer = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default startAccelerometer
