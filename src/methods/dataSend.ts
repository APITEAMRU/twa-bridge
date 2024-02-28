import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type DataSend = (eventData: {
  /**
   * Data to send to a bot. Should not have size of more than 4096 bytes.
   */
  data: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_data_send'

/**
 * Sends data to the bot. When this method is called, a service message is sent to the bot containing the data of the length up to 4096 bytes. 
 * 
 * Then, Mini App will be closed.
 * 
 * To get more information, take a look at web_app_data field in the class Message.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-data-send
 */
const dataSend: DataSend = (eventData) => {
  if (!supportDataSend()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportDataSend = () =>
  supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default dataSend
