import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStopGyroscope,
	SenderData,
	EventGyroscopeStopped,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StopGyroscope = (
	eventData?: SenderData[typeof MethodStopGyroscope]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
}>

/**
 * Version [8.0]
 *
 * Stops tracking gyroscope data.
 */
const stopGyroscope: StopGyroscope = async () => {
	if (!supportStopGyroscope()) {
		debug(MethodStopGyroscope, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		listener.once(EventGyroscopeStopped, () => resolve({ status: true }))
		sender(MethodStopGyroscope)
	})
}

/**
 * Method support check
 */
export const supportStopGyroscope = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default stopGyroscope
