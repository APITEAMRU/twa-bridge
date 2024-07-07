export { default as createIsViewportChanged } from './methods/createIsViewportChanged/createIsViewportChanged'

/* Default */
export { default as bridgeClose, supportClose } from './methods/close'
export {
	default as bridgeCloseScanQrPopup,
	supportCloseScanQrPopup,
} from './methods/closeScanQrPopup'
export { default as bridgeDataSend, supportDataSend } from './methods/dataSend'
export { default as bridgeExpand, supportExpand } from './methods/expand'
export {
	default as bridgeIframeReady,
	supportIframeReady,
} from './methods/iframeReady'
export {
	default as bridgeIframeWillReload,
	supportIframeWillReload,
} from './methods/iframeWillReload'
export {
	default as bridgeInvokeCustomMethod,
	supportInvokeCustomMethod,
} from './methods/invokeCustomMethod/invokeCustomMethod'
export {
	default as bridgeOpenInvoice,
	supportOpenInvoice,
} from './methods/openInvoice'
export { default as bridgeOpenLink, supportOpenLink } from './methods/openLink'
export {
	default as bridgeOpenPopup,
	supportOpenPopup,
} from './methods/openPopup'
export {
	default as bridgeOpenScanQrPopup,
	supportOpenScanQrPopup,
} from './methods/openScanQrPopup/openScanQrPopup'
export {
	default as bridgeOpenTgLink,
	supportOpenTgLink,
} from './methods/openTgLink'
export {
	default as bridgeReadTextFromClipboard,
	supportReadTextFromClipboard,
} from './methods/readTextFromClipboard/readTextFromClipboard'
export { default as bridgeReady, supportReady } from './methods/ready'
export {
	default as bridgeRequestPhone,
	supportRequestPhone,
} from './methods/requestPhone/requestPhone'
export {
	default as bridgeRequestTheme,
	supportRequestTheme,
} from './methods/requestTheme'
export {
	default as bridgeRequestViewport,
	supportRequestViewport,
} from './methods/requestViewport'
export {
	default as bridgeRequestWriteAccess,
	supportRequestWriteAccess,
} from './methods/requestWriteAccess'
export {
	default as bridgeSetBackgroundColor,
	supportSetBackgroundColor,
} from './methods/setBackgroundColor'
export {
	default as bridgeSetHeaderColor,
	supportSetHeaderColor,
} from './methods/setHeaderColor'
export {
	default as bridgeSetupBackButton,
	supportSetupBackButton,
} from './methods/setupBackButton'
export {
	default as bridgeSetupClosingBehavior,
	supportSetupClosingBehavior,
} from './methods/setupClosingBehavior'
export {
	default as bridgeSetupMainButton,
	supportSetupMainButton,
} from './methods/setupMainButton'
export {
	default as bridgeSetupSettingsButton,
	supportSetupSettingsButton,
} from './methods/setupSettingsButton'
export {
	default as bridgeSwitchInlineQuery,
	supportSwitchInlineQuery,
} from './methods/switchInlineQuery'
export {
	default as bridgeTriggerHapticFeedback,
	supportTriggerHapticFeedback,
} from './methods/triggerHapticFeedback'

export {
	default as bridgeSessionStorageSet,
	supportSessionStorageSet,
} from './methods/storageSet'
export {
	default as bridgeSessionStorageGet,
	supportSessionStorageGet,
} from './methods/storageGet'
export {
	default as bridgeSetupSwipeBehavior,
	supportSetupSwipeBehavior,
} from './methods/setupSwipeBehavior'

export { default as bridgeGetInitData } from './methods/getInitData'

export { default as sender } from '../sender'
export { default as debug } from '../debug'
export * as listener from '../listener'
export type { EventsData } from '../listener'

export {
	TG_WEB,
	TG_PHONE,
	TG_DESKTOP,
	default as getPlatform,
} from '../utils/getPlatform/getPlatform'

export { NOT_SUPPORTED as NOT_SUPPORTED } from '../utils/supportCheck/supportCheck'

/** types */
export {
	MethodInvokeCustomMethod,
	MethodOpenScanQrPopup,
	MethodReadTextFromClipboard,
	MethodRequestPhone,
	MethodClose,
	MethodCloseScanQrPopup,
	MethodDataSend,
	MethodExpand,
	MethodIframeReady,
	MethodIframeWillReload,
	MethodOpenInvoice,
	MethodOpenLink,
	MethodOpenPopup,
	MethodOpenTgLink,
	MethodReady,
	MethodRequestTheme,
	MethodRequestViewport,
	MethodRequestWriteAccess,
	MethodSetBackgroundColor,
	MethodSetHeaderColor,
	MethodSetupBackButton,
	MethodSetupClosingBehavior,
	MethodSetupMainButton,
	MethodSetupSettingsButton,
	MethodSwitchInlineQuery,
	MethodTriggerHapticFeedback,
	MethodSetupSwipeBehavior,
} from '../types/methods'

export {
	EventBackButtonPressed,
	EventClipboardTextReceived,
	EventCustomMethodInvoked,
	EventInvoiceClosed,
	EventMainButtonPressed,
	EventPhoneRequested,
	EventPopupClosed,
	EventReloadIframe,
	EventQrTextReceived,
	EventScanQrPopupClosed,
	EventSetCustomStyle,
	EventSettingsButtonPressed,
	EventThemeChanged,
	EventViewportChanged,
	EventWriteAccessRequested,
} from '../types/events'
