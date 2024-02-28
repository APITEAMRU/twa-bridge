import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetupBackButton = (eventData: {
  /**
   * Should the Back Button be visible.
   */
  is_visible: boolean
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_setup_back_button'

/**
 * Updates the Back Button settings.
 * 
 * https://docs.telegram-mini-apps.com/platform/ui/back-button
 */
const setupBackButton: SetupBackButton = (eventData) => {
  if (!supportSetupBackButton()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupBackButton = () =>
  supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupBackButton
