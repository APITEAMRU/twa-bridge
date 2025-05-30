import {
	TG_WEB,
	TG_DESKTOP,
	TG_PHONE,
	sender,
	NOT_SUPPORTED,
	debug,
	SenderData,
	MethodRequestFullscreen,
	MethodExitFullscreen,
} from '../../index'
import { supportCheck } from '../../../utils'

type SetupFullScreen = (
	eventData?: SenderData[typeof MethodRequestFullscreen]
) => {
	status: boolean | typeof NOT_SUPPORTED
}

/**
 * Version [8.0]
 *
 * [EN]
 * A method that requests opening the Mini App in fullscreen mode.
 * Although the header is transparent in fullscreen mode, it is recommended that the Mini App sets the header color using the setHeaderColor method.
 * This color helps determine a contrasting color for the status bar and other UI controls.
 *
 *  [RU]
 * Метод, который запрашивает открытие мини-приложения в полноэкранном режиме.
 * Хотя заголовок прозрачен в полноэкранном режиме, рекомендуется, чтобы мини-приложение задавало цвет заголовка с помощью метода setHeaderColor.
 * Этот цвет помогает определить контрастный цвет для строки состояния и других элементов управления пользовательского интерфейса.
 */
const setupFullScreen: SetupFullScreen = eventData => {
	const is_full = eventData?.is_full || false
	if (!supportSetupFullScreen()) {
		debug(is_full ? MethodRequestFullscreen : MethodExitFullscreen, 1)
		return { status: NOT_SUPPORTED }
	}
	sender(is_full ? MethodRequestFullscreen : MethodExitFullscreen)
	return { status: true }
}

/**
 * Method support check
 */
export const supportSetupFullScreen = () =>
	supportCheck(8.0, [TG_WEB, TG_DESKTOP, TG_PHONE])

export default setupFullScreen
