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
export {
	default as bridgeOpenLink,
	supportOpenLink,
} from './methods/6.4/openLink'
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
} from './methods/7.0/openTgLink'
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
} from './methods/6.1/setBackgroundColor'
export {
	default as bridgeSetHeaderColor,
	supportSetHeaderColor,
} from './methods/6.1/setHeaderColor'
export {
	default as bridgeSetBottomBarColor,
	supportSetBottomBarColor,
} from './methods/7.10/setBottomBarColor'
export {
	default as bridgeSetupBackButton,
	supportSetupBackButton,
} from './methods/setupBackButton'
export {
	default as bridgeSetupClosingBehavior,
	supportSetupClosingBehavior,
} from './methods/6.2/setupClosingBehavior'
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
} from './methods/6.7/switchInlineQuery'
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
} from './methods/7.7/setupSwipeBehavior'
export {
	default as bridgeShareToStory,
	supportShareToStory,
} from './methods/7.8/shareToStory'
export {
	default as bridgeCheckHomeScreen,
	supportCheckHomeScreen,
} from './methods/8.0/checkHomeScreen/checkHomeScreen'
export {
	default as bridgeAddToHomeScreen,
	supportAddToHomeScreen,
} from './methods/8.0/addToHomeScreen'
export {
	default as bridgeRequestSafeAreaInset,
	supportRequestSafeAreaInset,
} from './methods/requestSafeAreaInset'
export {
	default as bridgeRequestContentSafeAreaInset,
	supportRequestContentSafeAreaInset,
} from './methods/requestContentSafeAreaInset'
export {
	default as bridgeSetupFullScreen,
	supportSetupFullScreen,
} from './methods/8.0/setupFullScreen'
export {
	default as bridgeSetupOrientation,
	supportSetupOrientation,
} from './methods/8.0/setupOrientation'
export {
	default as bridgeRequestEmojiStatus,
	supportRequestEmojiStatus,
} from './methods/8.0/requestEmojiStatus/requestEmojiStatus'
export {
	default as bridgeSetEmojiStatus,
	supportSetEmojiStatus,
} from './methods/8.0/setEmojiStatus/setEmojiStatus'
export {
	default as bridgeShareMessage,
	supportShareMessage,
} from './methods/8.0/shareMessage/shareMessage'
export {
	default as bridgeDownloadFile,
	supportDownloadFile,
} from './methods/8.0/downloadFile/downloadFile'

export {
	default as bridgeGetInitData,
	type GetInitData,
} from './methods/getInitData'
export {
	default as bridgeGetThemeParams,
	type ThemeParams,
} from '../utils/themeParams/themeParams'

export { default as sender } from '../sender'
export { default as bridgeSend } from '../send'
export { default as debug } from '../debug'
export * as listener from '../listener'
export type { EventsData } from '../listener'

export { getAppData } from './helper'

export {
	default as ProviderTWA,
	ContextTwa,
} from './components/ProviderTWA/ProviderTWA'

/* helpers */
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
	MethodSetBottomBarColor,
	MethodSetupBackButton,
	MethodSetupClosingBehavior,
	MethodSetupMainButton,
	MethodSetupSettingsButton,
	MethodSwitchInlineQuery,
	MethodTriggerHapticFeedback,
	MethodSetupSwipeBehavior,
	MethodShareToStory,
	MethodRequestSafeArea,
	MethodRequestContentSafeArea,
	MethodRequestFullscreen,
	MethodExitFullscreen,
	MethodToggleOrientationLock,
	MethodAddToHomeScreen,
	MethodCheckHomeScreen,
	MethodSendPreparedMessage,
	MethodSetEmojiStatus,
	MethodRequestEmojiStatusAccess,
	MethodRequestFileDownload,
	type SenderData,
	type PopupButton,
	Method,
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
	EventSafeAreaChanged,
	EventContentSafeAreaChanged,
	EventCheckHomeScreen,
	EventPreparedMessageFailed,
	EventPreparedMessageSent,
	EventEmojiStatusSet,
	EventEmojiStatusFailed,
	EventEmojiStatusAccessRequested,
	EventFileDownloadRequested,
} from '../types/events'
