import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodOpenLocationSettings,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type OpenLocationSettings = (
	eventData?: SenderData[typeof MethodOpenLocationSettings]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [8.0]
 *
 * Opens the location access settings for the Mini App.
 */
const openLocationSettings: OpenLocationSettings = () => {
	if (!supportOpenLocationSettings()) {
		debug(MethodOpenLocationSettings, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodOpenLocationSettings)
	return { status: true }
}

/**
 * Method support check
 */
export const supportOpenLocationSettings = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openLocationSettings
