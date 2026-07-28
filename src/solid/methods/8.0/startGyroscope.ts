import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodStartGyroscope,
	SenderData,
	EventsData,
	EventGyroscopeStarted,
	EventGyroscopeFailed,
	listener,
} from '../../index'
import { supportCheck } from '../../../utils'

type StartGyroscope = (
	eventData?: SenderData[typeof MethodStartGyroscope]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventGyroscopeFailed]
}>

/**
 * Version [8.0]
 *
 * Starts tracking gyroscope data.
 */
const startGyroscope: StartGyroscope = async eventData => {
	if (!supportStartGyroscope()) {
		debug(MethodStartGyroscope, 1)
		return { status: NOT_SUPPORTED }
	}

	return new Promise((resolve, reject) => {
		const clear = () => {
			listener.off(EventGyroscopeStarted, started)
			listener.off(EventGyroscopeFailed, failed)
		}
		const started = () => {
			clear()
			resolve({ status: true })
		}
		const failed = (data: EventsData[typeof EventGyroscopeFailed]) => {
			clear()
			resolve({ status: false, data })
		}
		listener.on(EventGyroscopeStarted, started)
		listener.on(EventGyroscopeFailed, failed)
		sender(MethodStartGyroscope, eventData)
	})
}

/**
 * Method support check
 */
export const supportStartGyroscope = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default startGyroscope
