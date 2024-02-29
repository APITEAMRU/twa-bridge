import { TG_PHONE, sender, NOT_SUPPORTED, debug, MethodTriggerHapticFeedback } from "../index";
import { supportCheck } from "../../utils"

type TriggerHapticFeedback = (eventData: {
  /**
   * Type of haptic event. Values:
   * 
   * impact - when there's a collision involving UI components.
   * 
   * notification - when some action execution has been completed.
   * 
   * selection_change - when the user changes their selection.
   */
  type: 'impact' | 'notification' | 'selection_change'
  /**
   * Required when type is impact. Values:
   * 
   * light - indicates a collision between small or lightweight UI objects
   * 
   * medium - indicates a collision between medium-sized or medium-weight UI objects
   * 
   * heavy - indicates a collision between large or heavyweight UI objects
   * 
   * rigid - indicates a collision between hard or inflexible UI objects
   * 
   * soft - indicates a collision between soft or flexible UI objects
   */
  impact_style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
  /**
   * Required when type is notification. Values:
   * 
   * error - indicates that a task or action has failed
   * 
   * success - indicates that a task or action has completed successfully
   * 
   * warning - indicates that a task or action produced a warning
   */
  notification_type: 'error' | 'success' | 'warning'
}) => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Generates the haptic feedback event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-trigger-haptic-feedback
 */
const triggerHapticFeedback: TriggerHapticFeedback = (eventData) => {
  if (!supportTriggerHapticFeedback()) { debug(MethodTriggerHapticFeedback, 1); return { status: NOT_SUPPORTED } }

  sender(MethodTriggerHapticFeedback, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportTriggerHapticFeedback = () =>
  supportCheck(6.1, [TG_PHONE])

export default triggerHapticFeedback
