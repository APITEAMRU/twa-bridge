import { listener } from "../../solid";
import debug from "../../debug";
import sender from "../../sender"
import { supportCheck } from "../../utils"
import { TG_DESKTOP, TG_PHONE, TG_WEB } from "../../utils/getPlatform/getPlatform";

type RequestPhone = () => Promise<{
  status: boolean | 'not_supported'
}>

const eventName = 'web_app_request_phone'

/**
 * Requests access to current user's phone.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-phone
 */
const requestPhone: RequestPhone = async () => {
  if (!supportRequestPhone()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName)
  return new Promise((resolve, reject) => {
    listener.once('phone_requested', (data) => {
      if (data.status === 'sent') { resolve({ status: true }) }
      resolve({ status: false })
    })
  })
}

/**
 * Method support check
 */
export const supportRequestPhone = () =>
  supportCheck(6.9, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default requestPhone
