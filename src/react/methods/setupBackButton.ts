import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodSetupBackButton } from "../index";
import { supportCheck } from "../../utils"

type SetupBackButton = (eventData: {
  /**
   * Should the Back Button be visible.
   */
  is_visible: boolean
}) => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Updates the Back Button settings.
 * 
 * https://docs.telegram-mini-apps.com/platform/ui/back-button
 */
const setupBackButton: SetupBackButton = (eventData) => {
  if (!supportSetupBackButton()) { debug(MethodSetupBackButton, 1); return { status: NOT_SUPPORTED } }

  sender(MethodSetupBackButton, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetupBackButton = () =>
  supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupBackButton
