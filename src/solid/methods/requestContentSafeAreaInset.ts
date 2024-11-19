import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestContentSafeArea,
} from '../index'
import { supportCheck } from '../../utils'

type RequestContentSafeAreaInset = (
	eventData?: SenderData[typeof MethodRequestContentSafeArea]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/** */
const requestContentSafeAreaInset: RequestContentSafeAreaInset = () => {
	if (!supportRequestContentSafeAreaInset()) {
		debug(MethodRequestContentSafeArea, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodRequestContentSafeArea)
	return { status: true }
}

/**
 * Method support check
 */
export const supportRequestContentSafeAreaInset = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestContentSafeAreaInset
