import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodToggleOrientationLock,
} from '../index'
import { supportCheck } from '../../utils'

type SetupOrientation = (
	eventData?: SenderData[typeof MethodToggleOrientationLock]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/** */
const setupOrientation: SetupOrientation = eventData => {
	if (!supportSetupOrientation()) {
		debug(MethodToggleOrientationLock, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(MethodToggleOrientationLock)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupOrientation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupOrientation
