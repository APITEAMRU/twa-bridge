import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodClose } from "../index";
import { supportCheck } from "../../utils"

type Close = () => {
  status: boolean | typeof NOT_SUPPORTED
}

/**
 * Closes Mini App.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close
 */
const close: Close = () => {
  if (!supportClose()) { debug(MethodClose, 1); return { status: NOT_SUPPORTED } }

  sender(MethodClose)
  return { status: true }
}

/**
 * Method support check
 */
export const supportClose = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default close
