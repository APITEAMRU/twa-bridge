import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type InvokeCustomMethod = (eventData: {
  /**
   * Current invocation unique identifier.
   */
  req_id: string
  /**
   * Method name.
   */
  method: string
  /**
   * Parameters according to method.
   */
  params: unknown
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_invoke_custom_method'

/**
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-invoke-custom-method
 */
const invokeCustomMethod: InvokeCustomMethod = (eventData) => {
  if (!supportInvokeCustomMethod()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportInvokeCustomMethod = () =>
  supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default invokeCustomMethod
