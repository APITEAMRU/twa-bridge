import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodAddToHomeScreen,
} from '../../index'
import { supportCheck } from '../../../utils'

type AddToHomeScreen = (
	eventData?: SenderData[typeof MethodAddToHomeScreen]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [8.0]
 *
 * [EN]
 * A method that prompts the user to add the Mini App to the home screen.
 * After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device.
 * Note that if the device cannot determine the installation status, the event may not be received even if the icon has been added.
 *
 * [RU]
 * Метод, который предлагает пользователю добавить мини-приложение на главный экран.
 * После успешного добавления значка будет вызвано событие homeScreenAdded, если оно поддерживается устройством.
 * Обратите внимание, что если устройство не может определить статус установки, событие может не быть получено, даже если значок был добавлен.
 */
const addToHomeScreen: AddToHomeScreen = () => {
	if (!supportAddToHomeScreen()) {
		debug(MethodAddToHomeScreen, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(MethodAddToHomeScreen)
	return { status: true }
}

/**
 * Method support check
 */
export const supportAddToHomeScreen = () =>
	supportCheck(8.0, [TG_DESKTOP, TG_PHONE])

export default addToHomeScreen
