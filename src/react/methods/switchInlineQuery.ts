import { TG_WEB, TG_DESKTOP, TG_PHONE, sender, NOT_SUPPORTED, debug, MethodSwitchInlineQuery } from "../index";
import { supportCheck } from "../../utils"

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
  status: boolean | typeof NOT_SUPPORTED
}

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
  if (!supportSwitchInlineQuery()) { debug(MethodSwitchInlineQuery, 1); return { status: NOT_SUPPORTED } }

  if (eventData.query.length > 256) { debug(MethodSwitchInlineQuery, 9) }
  sender(MethodSwitchInlineQuery, eventData)
  return { status: true }
}

/**
 * Method support check
 */
export const supportSwitchInlineQuery = () =>
  supportCheck(6.7, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default switchInlineQuery
