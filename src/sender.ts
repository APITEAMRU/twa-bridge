
type Sender = (eventType: string, eventData?: any) => void

/** 
 * EDIT
 * 
 * window.parent.postMessage(JSON.stringify({ eventType, eventData }), 'https://web.telegram.org');
 * window['TelegramWebviewProxy'].postEvent(eventType, JSON.stringify(eventData));
 */
const sender: Sender = (eventType, eventData) => {
  if (window.TelegramWebviewProxy) {
    window.TelegramWebviewProxy.postEvent(eventType, JSON.stringify(eventData));
    return;
  } if (window.external && "notify" in window.external) {
    window.external.notify(JSON.stringify({ eventType, eventData }));
    return;
  }
}

export default sender