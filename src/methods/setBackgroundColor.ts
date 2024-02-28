import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetBackgroundColor = (eventData: {
  /**
   * The Mini App background color in #RRGGBB format.
   */
  color: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_set_background_color'

/**
 * Updates the Mini App background color.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-background-color
 */
const setBackgroundColor: SetBackgroundColor = (eventData) => {
  if (!supportSetBackgroundColor()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetBackgroundColor = () =>
  supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setBackgroundColor
