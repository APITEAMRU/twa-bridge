import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStopAccelerometer,
	SenderData,
	EventAccelerometerStopped,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StopAccelerometer = (
	eventData?: SenderData[typeof MethodStopAccelerometer]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * Stops tracking accelerometer data.
 */
const stopAccelerometer: StopAccelerometer = async () => {
	if (!supportStopAccelerometer()) {
		debug(MethodStopAccelerometer, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		listener.once(EventAccelerometerStopped, () => resolve({ status: true }))
		sender(MethodStopAccelerometer)
	})
}

/**
 * Method support check
 */
export const supportStopAccelerometer = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default stopAccelerometer
