import { TG_WEB, TG_DESKTOP, TG_PHONE } from "../solid/index";
import debug from "../debug"
import sender from "../sender"
import { supportCheck } from "../utils"

type SwitchInlineQuery = (eventData: {
  /**
   * Text which should be inserted in the input after the current bot name. Max length is 256 symbols.
   */
  query: string
  /**
   * List of chat types which could be chosen to send the message. Could be empty list. Values:
   * 
   * users, bots, groups, channels
   */
  chat_types: ['users', 'bots', 'groups', 'channels']
}) => {
  status: boolean | 'not_supported'
}

const eventName = 'web_app_switch_inline_query'

/**
 * Inserts the bot's username and the specified inline query in the current chat's input field. 
 * 
 * Query may be empty, in which case only the bot's username will be inserted. 
 * 
 * The client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-switch-inline-query
 */
const switchInlineQuery: SwitchInlineQuery = (eventData) => {
  if (!supportSwitchInlineQuery()) { debug(`|${eventName}| not supported`); return { status: 'not_supported' } }

  if (eventData.query.length > 256) { debug('EDIT MESSAGE') }
  sender(eventName, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSwitchInlineQuery = () =>
  supportCheck(6.7, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default switchInlineQuery
