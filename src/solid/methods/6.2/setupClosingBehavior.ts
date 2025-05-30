import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSetupClosingBehavior,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetupClosingBehavior = (
	eventData: SenderData[typeof MethodSetupClosingBehavior]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [6.2]
 *
 * [EN]
 * Method to disable/enable the confirmation dialog while the user is trying to close the widget.
 *
 * [RU]
 * Метод, отключающий/включающий диалоговое окно подтверждения, пока пользователь пытается закрыть мини-приложение.
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
	supportCheck(6.2, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupClosingBehavior
