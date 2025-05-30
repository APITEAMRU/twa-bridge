import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodToggleOrientationLock,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetupOrientation = (
	eventData?: SenderData[typeof MethodToggleOrientationLock]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [8.0]
 *
 * [EN]
 * A method that locks the Mini App’s orientation to its current mode (either portrait or landscape).
 * Once locked, the orientation remains fixed, regardless of device rotation.
 * This is useful if a stable orientation is needed during specific interactions.
 *
 * [RU]
 * Метод, который фиксирует ориентацию мини-приложения в текущем режиме (портретном или альбомном).
 * После блокировки ориентация остается фиксированной, независимо от поворота устройства.
 * Это полезно, если требуется стабильная ориентация во время определенных взаимодействий.
 */
const setupOrientation: SetupOrientation = eventData => {
	if (!supportSetupOrientation()) {
		debug(MethodToggleOrientationLock, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(MethodToggleOrientationLock, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupOrientation = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupOrientation
