import {
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodTriggerHapticFeedback,
	SenderData,
} from '../index'
import { supportCheck } from '../../utils'

type TriggerHapticFeedback = (
	eventData: SenderData[typeof MethodTriggerHapticFeedback]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Generates the haptic feedback event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-trigger-haptic-feedback
 */
const triggerHapticFeedback: TriggerHapticFeedback = eventData => {
	if (!supportTriggerHapticFeedback()) {
		debug(MethodTriggerHapticFeedback, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodTriggerHapticFeedback, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportTriggerHapticFeedback = () => supportCheck(6.1, [TG_PHONE])

export default triggerHapticFeedback
