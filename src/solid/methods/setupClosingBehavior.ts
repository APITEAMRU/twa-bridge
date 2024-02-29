import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodSetupClosingBehavior } from "../index";
import { supportCheck } from "../../utils"

type SetupClosingBehavior = (eventData: {
  /**
   * Will user be prompted in case, an application is going to be closed.
   */
  need_confirmation: boolean
}) => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates current closing behavior.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-closing-behavior
 */
const setupClosingBehavior: SetupClosingBehavior = (eventData) => {
  if (!supportSetupClosingBehavior()) { debug(MethodSetupClosingBehavior, 1); return { status: NOT_SUPPORTED } }

  sender(MethodSetupClosingBehavior, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupClosingBehavior = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupClosingBehavior
