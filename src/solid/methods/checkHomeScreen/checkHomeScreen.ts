import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	listener,
	EventsData,
	SenderData,
	MethodCheckHomeScreen,
	EventCheckHomeScreen,
} from '../../index'
import { supportCheck } from '../../../utils'

type CheckHomeScreen = (
	eventData: SenderData[typeof MethodCheckHomeScreen]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventCheckHomeScreen]
}>

/** */
const checkHomeScreen: CheckHomeScreen = async eventData => {
	if (!supportCheckHomeScreen()) {
		debug(MethodCheckHomeScreen, 1)
		return { status: NOT_SUPPORTED, data: undefined }
	}

	sender(MethodCheckHomeScreen, eventData)
	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventCheckHomeScreen]) => {
			resolve({ status: true, data })
			listener.off(EventCheckHomeScreen, callback)
		}
		listener.on(EventCheckHomeScreen, callback)
	})
}

/**
 * Method support check
 */
export const supportCheckHomeScreen = () =>
	supportCheck(8.0, [TG_DESKTOP, TG_PHONE])

export default checkHomeScreen
