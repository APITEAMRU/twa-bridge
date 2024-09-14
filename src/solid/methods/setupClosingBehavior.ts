import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetupClosingBehavior,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type SetupClosingBehavior = (
	eventData: SenderData[typeof MethodSetupClosingBehavior]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates current closing behavior.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-closing-behavior
 */
const setupClosingBehavior: SetupClosingBehavior = eventData => {
	if (!supportSetupClosingBehavior()) {
		debug(MethodSetupClosingBehavior, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetupClosingBehavior, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupClosingBehavior = () =>
	supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupClosingBehavior
