import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, listener, EventsData, EventCustomMethodInvoked } from "../../index";
import { randomReqId, supportCheck } from "../../../utils"

type InvokeCustomMethod = (eventData: {
  /**
   * Current invocation unique identifier.
   * 
   * Default: () => randomReqId
   */
  req_id?: string
  /**
   * Method name.
   */
  method: string
  /**
   * Parameters according to method.
   */
  params: unknown
}) => Promise<{
  status: boolean | typeof NOT_SUPPORTED,
  data?: EventsData[typeof EventCustomMethodInvoked]
}>

const eventName = 'web_app_invoke_custom_method'

/**
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-invoke-custom-method
 */
const invokeCustomMethod: InvokeCustomMethod = async (eventData) => {
  if (!supportInvokeCustomMethod()) { debug(eventName, 1); return { status: NOT_SUPPORTED } }
  if (eventData.req_id === undefined) eventData.req_id = randomReqId()

  sender(eventName, eventData)
  return new Promise((resolve, reject) => {
    const callback = (data: EventsData[typeof EventCustomMethodInvoked]) => {
      if (data.req_id === eventData.req_id) {
        resolve({ status: true, data: data })
        listener.off(EventCustomMethodInvoked, callback)
      }
    }
    listener.on(EventCustomMethodInvoked, callback)
  })
}

/**
 * Method support check
 */
export const supportInvokeCustomMethod = () =>
  supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default invokeCustomMethod
