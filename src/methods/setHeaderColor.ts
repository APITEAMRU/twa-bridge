import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SetHeaderColor = (eventData: {
  /**
   * The Mini App header color key. Could be either bg_color or secondary_bg_color.
   */
  color_key: 'bg_color' | 'secondary_bg_color'
  /**
   * Color in RGB format.
   */
  color: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_set_header_color'

/**
 * Updates the Mini App header color. This method should accept color_key or color property.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-header-color
 */
const setHeaderColor: SetHeaderColor = (eventData) => {
  if (!supportSetHeaderColor()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSetHeaderColor = () =>
  supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setHeaderColor
