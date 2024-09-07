import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	MethodDataSend,
} from '../index'
import { supportCheck } from '../../utils'

type DataSend = (eventData: {
	/**
	 ** EN: Data to send to a bot. Should not have size of more than 4096 bytes.

	 ** RU: Данные для отправки боту. Не должен иметь размер более 4096 байт.
	 */
	data: string
}) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 ** EN: A method used to send data to the bot.
 *
 * When this method is called, a service message is sent to the bot containing the data data of the length up to 4096 bytes, and the Mini App is closed.
 *
 * See the field `web_app_data` in the class Message.
 *
 *! This method is only available for Mini Apps launched via a Keyboard button.
 *
 ** RU: Метод, используемый для отправки данных боту.
 *
 * При вызове этого метода боту отправляется служебное сообщение, содержащее данные длиной до 4096 байт, и мини-приложение закрывается.
 *
 * Смотрите поле `web_app_data` в сообщении класса.
 *
 *! Этот метод доступен только для мини-приложений, запускаемых с помощью кнопки клавиатуры.
 */
const dataSend: DataSend = eventData => {
	if (!supportDataSend()) {
		debug(MethodDataSend, 1)
		return { status: NOT_SUPPORTED }
	}

	sender(MethodDataSend, eventData)
	return { status: true }
}

/**
 * Method support check
 */
export const supportDataSend = () =>
	supportCheck(0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default dataSend
