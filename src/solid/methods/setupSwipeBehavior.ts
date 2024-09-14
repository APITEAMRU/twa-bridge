import {
	MethodSetupSwipeBehavior,
	NOT_SUPPORTED,
	SenderData,
	TG_DESKTOP,
	TG_PHONE,
	TG_WEB,
	debug,
	sender,
} from '../index'
import { supportCheck } from '../../utils'

type SetupSwipeBehavior = (
	eventData: SenderData[typeof MethodSetupSwipeBehavior]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * sessions storage set.
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
