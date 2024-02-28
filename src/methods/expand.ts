import debug from "../debug";
import sender from "../sender"
import { supportCheck } from "../utils"
import { TG_PHONE } from "../utils/getPlatform/getPlatform";

type Expand = () => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_expand'

/**
 * Closes Mini App.
 */
const expand: Expand = () => {
  if (!supportExpand()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return { status: true }
}

/**
 * Method support check
 */
export const supportExpand = () =>
  supportCheck(0, [TG_PHONE])

export default expand
