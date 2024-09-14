import sender from './sender'
import {
	bridgeClose,
	bridgeCloseScanQrPopup,
	bridgeDataSend,
	bridgeExpand,
	bridgeIframeReady,
	bridgeIframeWillReload,
	bridgeInvokeCustomMethod,
	bridgeOpenScanQrPopup,
	bridgeReadTextFromClipboard,
	bridgeRequestPhone,
	bridgeOpenInvoice,
	bridgeOpenLink,
	bridgeOpenPopup,
	bridgeOpenTgLink,
	bridgeReady,
	bridgeRequestTheme,
	bridgeRequestWriteAccess,
	bridgeRequestViewport,
	bridgeSetBackgroundColor,
	bridgeSetHeaderColor,
	bridgeSetBottomBarColor,
	bridgeSetupBackButton,
	bridgeSetupClosingBehavior,
	bridgeSetupMainButton,
	bridgeSetupSettingsButton,
	bridgeSwitchInlineQuery,
	bridgeTriggerHapticFeedback,
	bridgeSetupSwipeBehavior,
} from './solid'
import {
	MethodClose,
	MethodCloseScanQrPopup,
	MethodDataSend,
	MethodExpand,
	MethodIframeReady,
	MethodIframeWillReload,
	MethodInvokeCustomMethod,
	MethodOpenInvoice,
	MethodOpenLink,
	MethodOpenPopup,
	MethodOpenScanQrPopup,
	MethodOpenTgLink,
	MethodReadTextFromClipboard,
	MethodReady,
	MethodRequestPhone,
	MethodRequestTheme,
	MethodRequestViewport,
	MethodRequestWriteAccess,
	MethodSetBackgroundColor,
	MethodSetBottomBarColor,
	MethodSetHeaderColor,
	MethodSetupBackButton,
	MethodSetupClosingBehavior,
	MethodSetupMainButton,
	MethodSetupSettingsButton,
	MethodSetupSwipeBehavior,
	MethodSwitchInlineQuery,
	MethodTriggerHapticFeedback,
	type SenderData,
} from './types/methods'

const entries = {
	[MethodInvokeCustomMethod]: bridgeInvokeCustomMethod,
	[MethodOpenScanQrPopup]: bridgeOpenScanQrPopup,
	[MethodReadTextFromClipboard]: bridgeReadTextFromClipboard,
	[MethodRequestPhone]: bridgeRequestPhone,
	[MethodClose]: bridgeClose,
	[MethodCloseScanQrPopup]: bridgeCloseScanQrPopup,
	[MethodDataSend]: bridgeDataSend,
	[MethodExpand]: bridgeExpand,
	[MethodIframeReady]: bridgeIframeReady,
	[MethodIframeWillReload]: bridgeIframeWillReload,
	[MethodOpenInvoice]: bridgeOpenInvoice,
	[MethodOpenLink]: bridgeOpenLink,
	[MethodOpenPopup]: bridgeOpenPopup,
	[MethodOpenTgLink]: bridgeOpenTgLink,
	[MethodReady]: bridgeReady,
	[MethodRequestTheme]: bridgeRequestTheme,
	[MethodRequestViewport]: bridgeRequestViewport,
	[MethodRequestWriteAccess]: bridgeRequestWriteAccess,
	[MethodSetBackgroundColor]: bridgeSetBackgroundColor,
	[MethodSetHeaderColor]: bridgeSetHeaderColor,
	[MethodSetBottomBarColor]: bridgeSetBottomBarColor,
	[MethodSetupBackButton]: bridgeSetupBackButton,
	[MethodSetupClosingBehavior]: bridgeSetupClosingBehavior,
	[MethodSetupMainButton]: bridgeSetupMainButton,
	[MethodSetupSettingsButton]: bridgeSetupSettingsButton,
	[MethodSwitchInlineQuery]: bridgeSwitchInlineQuery,
	[MethodTriggerHapticFeedback]: bridgeTriggerHapticFeedback,
	[MethodSetupSwipeBehavior]: bridgeSetupSwipeBehavior,
}

export const send = async <
	T extends SenderData,
	E extends keyof T,
	D extends T[E]
>(
	name: E,
	data?: D
) => {
	const callback = entries[name as typeof MethodOpenScanQrPopup]
	if (!!callback) {
		return await callback(data as any)
	} else return await sender(name as string, data)
}

export default sender
