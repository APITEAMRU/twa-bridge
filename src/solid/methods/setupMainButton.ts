import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetupMainButton,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetupMainButton = (
	eventData: SenderData[typeof MethodSetupMainButton]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates the Main Button settings.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-main-button
 */
const setupMainButton: SetupMainButton = eventData => {
	if (!supportSetupMainButton()) {
		debug(MethodSetupMainButton, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetupMainButton, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupMainButton = () =>
	supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupMainButton
