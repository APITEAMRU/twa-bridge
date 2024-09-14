import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetupSettingsButton,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetupSettingsButton = (
	eventData: SenderData[typeof MethodSetupSettingsButton]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates current state of Settings Button.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-settings-button
 */
const setupSettingsButton: SetupSettingsButton = eventData => {
	if (!supportSetupSettingsButton()) {
		debug(MethodSetupSettingsButton, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetupSettingsButton, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupSettingsButton = () =>
	supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupSettingsButton
