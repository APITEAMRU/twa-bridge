import { TG_PHONE, sender, NOT_SUPPORTED, debug, MethodExpand } from "../index";
import { supportCheck } from "../../utils"

type Expand = () => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Closes Mini App.
 */
const expand: Expand = () => {
  if (!supportExpand()) { debug(MethodExpand, 1); return { status: NOT_SUPPORTED } }

  sender(MethodExpand)
  return { status: true }
}

/**
 * Method support check
 */
export const supportExpand = () =>
  supportCheck(0, [TG_PHONE])

export default expand
