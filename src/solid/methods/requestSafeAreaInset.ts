import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestSafeArea,
} from '../index'
import { supportCheck } from '../../utils'

type RequestSafeAreaInset = (
	eventData?: SenderData[typeof MethodRequestSafeArea]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/** */
const requestSafeAreaInset: RequestSafeAreaInset = () => {
	if (!supportRequestSafeAreaInset()) {
		debug(MethodRequestSafeArea, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodRequestSafeArea)
	return { status: true }
}

/**
 * Method support check
 */
export const supportRequestSafeAreaInset = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestSafeAreaInset
