import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetupSecondaryButton,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetupSecondaryButton = (
	eventData: SenderData[typeof MethodSetupSecondaryButton]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [7.10]
 *
 * Updates the Secondary Button settings.
 */
const setupSecondaryButton: SetupSecondaryButton = eventData => {
	if (!supportSetupSecondaryButton()) {
		debug(MethodSetupSecondaryButton, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodSetupSecondaryButton, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupSecondaryButton = () =>
	supportCheck('7.10', [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupSecondaryButton
