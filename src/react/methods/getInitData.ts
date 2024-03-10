import debug from "../../debug"

type User = {
  /**
   * Optional. True, if this user added the bot to the attachment menu.
   */
  added_to_attachment_menu?: boolean
  /**
   * Optional. True, if this user allowed the bot to message them.
   */
  allows_write_to_pm?: boolean
  /**
   * 	Optional. Has the user purchased Telegram Premium.
   */
  is_premium?: boolean
  /**
   * Bot or user name.
   */
  first_name: string
  /**
   * Bot or user ID.
   */
  id: number
  /**
   * 	Optional. Is the user a bot.
   */
  is_bot?: boolean
  /**
   * Optional. User's last name.
   */
  last_name?: string
  /**
   * Optional. IETF user's language.
   */
  language_code: string
  /**
   * Optional. Link to the user's or bot's photo. 
   * 
   * Photos can have formats .jpeg and .svg. 
   * 
   * It is returned only for Mini Apps opened through the attachment menu.
   */
  photo_url?: string
  /**
   * Optional. Login of the bot or user.
   */
  username?: string
}

type Chat = {
  /**
   * 	Unique chat ID.
   */
  id: number
  /**
   * Chat type. Values:
   * 
   * group, supergroup, channel
   */
  type: 'group' | 'supergroup' | 'channel'
  /**
   * Chat title.
   */
  title: string
  /**
   * Optional. Chat photo link. The photo can have .jpeg and .svg formats. 
   * 
   * It is returned only for Mini Apps opened through the attachments menu.
   */
  photo_url?: string
  /**
   * Optional. Chat user login.
   */
  username?: string
}

type GetInitData = () => null | {
  /**
   * The date the initialization data was created. 
   * 
   * Is a number representing a Unix timestamp.
   */
  auth_date: number
  /**
   * Optional. The number of seconds after which a message can be sent via the method answerWebAppQuery.
   */
  can_send_after?: number
  /**
   * Optional. An object containing information about the chat with the bot in which the Mini Apps was launched. 
   * 
   * It is returned only for Mini Apps opened through the attachments menu.
   */
  chat?: Chat
  /**
   * Optional. The type of chat from which the Mini Apps was opened. Values:
   * 
   * sender, private, group, supergroup, channel
   * 
   * Returned only for applications opened by direct link.
   */
  chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel'
  /**
   * Optional. A global identifier indicating the chat from which the Mini Apps was opened. 
   * 
   * Returned only for applications opened by direct link.
   */
  chat_instance?: string
  /**
   * Initialization data signature.
   */
  hash: string
  /**
   * Optional. The unique session ID of the Mini App. Used in the process of sending a message via the method answerWebAppQuery.
   */
  query_id?: string
  /**
   * Optional. An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. 
   * 
   * Returned only for private chats and only for Mini Apps launched via the attachment menu.
   */
  receiver?: User
  /**
   * Optional. The value of the startattach or startapp query parameter specified in the link. It is returned only for Mini Apps opened through the attachment menu.
   */
  start_param?: string
  /**
   * Optional. An object containing information about the current user.
   */
  user?: User
}

/**
 * In the list of launch parameters, initialization data is located in the tgWebAppData parameter. 
 * 
 * It is a set of data mostly related to a specific user who launched the Mini App.
 * 
 * Original: https://docs.telegram-mini-apps.com/platform/launch-parameters/init-data#init-data
 */
const getInitData: GetInitData = () => {
  const initDataRaw = new URLSearchParams(window.location.hash.slice(1))
    .get('tgWebAppData')

  if (initDataRaw === null) { debug('getInitData', 2); return null }

  const initData = new URLSearchParams(initDataRaw);

  let data: Record<string, string> = {};

  /** EDIT */
  initData.forEach((value, key) => {
    data[key] = value
    if (key.match(/^(chat|receiver|user)$/g) !== undefined) {
      try { data[key] = JSON.parse(value) } catch { }
    }
  })

  return data as any
}

export default getInitData
