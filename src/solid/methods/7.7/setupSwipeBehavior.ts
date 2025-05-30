import {
	MethodSetupSwipeBehavior,
	NOT_SUPPORTED,
	SenderData,
	TG_DESKTOP,
	TG_PHONE,
	TG_WEB,
	debug,
	sender,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetupSwipeBehavior = (
	eventData: SenderData[typeof MethodSetupSwipeBehavior]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [7.7]
 *
 * [EN]
 * A method that enables/disables vertical swipes for closing or minimizing the Mini App.
 *
 * [RU]
 * Метод, который включает и выключает вертикальные свайпы для закрытия или сворачивания Mini App.
 */
const setupSwipeBehavior: SetupSwipeBehavior = eventData => {
	if (!supportSetupSwipeBehavior()) {
		debug(MethodSetupSwipeBehavior, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(MethodSetupSwipeBehavior, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupSwipeBehavior = () =>
	supportCheck(7.7, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupSwipeBehavior
