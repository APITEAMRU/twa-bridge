import { TG_PHONE, bridgeCloseScanQrPopup, listener } from "../../solid/index"
import debug from "../../debug"
import sender from "../../sender"
import { supportCheck } from "../../utils"

type OpenScanQrPopup = (eventData: {
  /**
   * Optional. Text to be displayed in the QR scanner.
   */
  text?: string
  /**
   * [Custom] Optional. Сlose QR scanner after receiving data
   */
  is_close?: boolean
}) => Promise<{
  status: boolean | 'not_supported' | 'closed'
  data: {
    data?: string
  }
}>

const eventName = 'web_app_open_scan_qr_popup'

/**
 * Opens a QR scanner. 
 * 
 * When the scanner was closed, the Telegram application creates the scan_qr_popup_closed event. 
 * 
 * When the scanner reads QR, Telegram creates the qr_text_received event.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
const openScanQrPopup: OpenScanQrPopup = async (eventData) => {
  if (!supportOpenScanQrPopup()) { debug(`|${eventName}| not supported`); return { status: 'not_supported', data: { data: undefined } } }

  sender(eventName, eventData)

  return new Promise((resolve, reject) => {
    listener.once('qr_text_received', (data) => {
      /* Closed the QR scanner after reading the data  */
      if (eventData.is_close) { bridgeCloseScanQrPopup() }
      resolve({ status: true, data: data })
    })
    listener.once('scan_qr_popup_closed', () => {
      resolve({ status: 'closed', data: { data: undefined } })
    })
  })
}

/**
 * Method support check
 */
export const supportOpenScanQrPopup = () =>
  supportCheck(6.4, [TG_PHONE])

export default openScanQrPopup
