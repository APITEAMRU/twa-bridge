import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type OpenInvoice = (eventData: {
  /**
   * Invoice unique identifier.
   */
  slug: string
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_open_invoice'

/**
 * Opens an invoice by its specified slug. 
 * 
 * More information about invoices in this documentation.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-invoice
 */
const openInvoice: OpenInvoice = (eventData) => {
  if (!supportOpenInvoice()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportOpenInvoice = () =>
  supportCheck(6.1, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default openInvoice
