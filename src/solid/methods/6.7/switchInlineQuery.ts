import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodSwitchInlineQuery,
	SenderData,
} from '../../index'
import { supportCheck } from '../../../utils'

type SwitchInlineQuery = (
	eventData: SenderData[typeof MethodSwitchInlineQuery]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [6.7]
 *
 * [EN]
 * Method that inserts the bot username and the specified inline query into the current chat's input field.
 * Query may be empty, in which case only the bot username will be inserted.
 * If the optional "chat_types" parameter was passed, the client prompts the user to select the current chat, then opens that chat and enters the bot username and the specified inline query into the input field.
 * You can specify which chat types the user selects.
 * This can be one or more of the following types: `users`, `bots`, `groups`, `channels`.
 *
 * [RU]
 * Метод, который вставляет имя пользователя бота и указанный встроенный запрос в поле ввода текущего чата.
 * Запрос может быть пустым, в этом случае будет вставлено только имя пользователя бота.
 * Если был передан необязательный параметр `chat_types`, клиент предлагает пользователю выбрать определенный чат, затем открывает этот чат и вставляет имя пользователя бота и указанный встроенный запрос в поле ввода.
 * Вы можете указать, какие типы чатов пользователь сможет выбирать.
 * Это может быть один или несколько из следующих типов: `users`, `bots`, `groups`, `channels`.
 */
const switchInlineQuery: SwitchInlineQuery = eventData => {
	if (!supportSwitchInlineQuery()) {
		debug(MethodSwitchInlineQuery, 1)
		return { status: NOT_SUPPORTED }
	}

	if (eventData.query.length > 256) {
		debug(MethodSwitchInlineQuery, 9)
	}
	sender(MethodSwitchInlineQuery, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSwitchInlineQuery = () =>
	supportCheck(6.7, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default switchInlineQuery
