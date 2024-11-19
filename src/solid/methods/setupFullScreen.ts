import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestFullscreen,
	MethodExitFullscreen,
} from '../index'
import { supportCheck } from '../../utils'

type SetupFullScreen = (
	eventData?: SenderData[typeof MethodRequestFullscreen]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/** */
const setupFullScreen: SetupFullScreen = eventData => {
	const is_fill = eventData?.is_full || false
	if (!supportSetupFullScreen()) {
		if (is_fill) {
			debug(MethodRequestFullscreen, 1)
		} else debug(MethodExitFullscreen, 1)
		return { status: NOT_SUPPORTED }
	}
	if (is_fill) {
		sender(MethodRequestFullscreen)
	} else sender(MethodExitFullscreen)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupFullScreen = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupFullScreen
