import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetupSettingsButton = (eventData: {
  /**
   * Should the Settings Button be displayed.
   */
  is_visible: boolean
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_setup_settings_button'

/**
 * Updates current state of Settings Button.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-settings-button
 */
const setupSettingsButton: SetupSettingsButton = (eventData) => {
  if (!supportSetupSettingsButton()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupSettingsButton = () =>
  supportCheck(6.10, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupSettingsButton
