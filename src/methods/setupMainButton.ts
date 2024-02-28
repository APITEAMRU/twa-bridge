import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetupMainButton = (eventData: {
  /**
   * Optional. Should the Main Button be displayed.
   */
  is_visible?: boolean
  /**
   * Optional. Should the Main Button be enabled.
   */
  is_active?: boolean
  /**
   * Optional. Should loader inside the Main Button be displayed. Use this property in case, some operation takes time. This loader will make user notified about it.
   */
  is_progress_visible?: boolean
  /**
   * Optional. Text inside the Main Button.
   */
  text?: string
  /**
   * Optional. The Main Button background color in #RRGGBB format.
   */
  color?: string
  /**
   * Optional. The Main Button text color in #RRGGBB format.
   */
  text_color?: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_setup_main_button'

/**
 * Updates the Main Button settings.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-main-button
 */
const setupMainButton: SetupMainButton = (eventData) => {
  if (!supportSetupMainButton()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupMainButton = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupMainButton
