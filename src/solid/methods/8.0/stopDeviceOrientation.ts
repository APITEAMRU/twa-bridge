import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStopDeviceOrientation,
	SenderData,
	EventDeviceOrientationStopped,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StopDeviceOrientation = (
	eventData?: SenderData[typeof MethodStopDeviceOrientation]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * Stops tracking device orientation data.
 */
const stopDeviceOrientation: StopDeviceOrientation = async () => {
	if (!supportStopDeviceOrientation()) {
		debug(MethodStopDeviceOrientation, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		listener.once(EventDeviceOrientationStopped, () => resolve({ status: true }))
		sender(MethodStopDeviceOrientation)
	})
}

/**
 * Method support check
 */
export const supportStopDeviceOrientation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default stopDeviceOrientation
