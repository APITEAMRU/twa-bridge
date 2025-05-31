import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	listener,
	EventsData,
	SenderData,
	MethodCheckHomeScreen,
	EventHomeScreenChecked,
} from '../../../index'
import { supportCheck } from '../../../../utils'

type CheckHomeScreen = (
	eventData: SenderData[typeof MethodCheckHomeScreen]
) => Promise<{
	status: boolean | typeof NOT_SUPPORTED
	data?: EventsData[typeof EventHomeScreenChecked]
}>

/**
 * Version [8.0]
 *
 * [EN]
 * A method that checks if adding to the home screen is supported and if the Mini App has already been added.
 * Possible values for status are:
 *
 * `unsupported` – the feature is not supported, and it is not possible to add the icon to the home screen,
 *
 * `unknown` – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
 *
 * `added` – the icon has already been added to the home screen,
 *
 * `missed` – the icon has not been added to the home screen.
 *
 * [RU]
 * Метод, который проверяет, поддерживается ли добавление на главный экран и добавлено ли уже мини-приложение.
 * Возможные значения для status:
 *
 * `unsupported` — функция не поддерживается, и невозможно добавить значок на главный экран,
 *
 * `unknown` — функция поддерживается, и значок можно добавить, но невозможно определить, был ли он уже добавлен,
 *
 * `added` — значок уже добавлен на главный экран,
 *
 * `missed` — значок не был добавлен на главный экран.
 */
const checkHomeScreen: CheckHomeScreen = async eventData => {
	if (!supportCheckHomeScreen()) {
		debug(MethodCheckHomeScreen, 1)
		return { status: NOT_SUPPORTED, data: undefined }
	}

	sender(MethodCheckHomeScreen, eventData)
	return new Promise((resolve, reject) => {
		const callback = (data: EventsData[typeof EventHomeScreenChecked]) => {
			data.status = data.status || 'unknown'
			resolve({ status: true, data })
			listener.off(EventHomeScreenChecked, callback)
		}
		listener.on(EventHomeScreenChecked, callback)
	})
}

/**
 * Method support check
 */
export const supportCheckHomeScreen = () =>
	supportCheck(8.0, [TG_DESKTOP, TG_PHONE])

export default checkHomeScreen
