import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetupClosingBehavior = (eventData: {
  /**
   * Will user be prompted in case, an application is going to be closed.
   */
  need_confirmation: boolean
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_setup_closing_behavior'

/**
 * Updates current closing behavior.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-closing-behavior
 */
const setupClosingBehavior: SetupClosingBehavior = (eventData) => {
  if (!supportSetupClosingBehavior()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupClosingBehavior = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupClosingBehavior
