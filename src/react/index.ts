
/* Default */
export { default as bridgeClose } from './methods/close'
export { supportClose as supportClose } from './methods/close'

export { default as bridgeCloseScanQrPopup } from './methods/closeScanQrPopup'
export { supportCloseScanQrPopup as supportCloseScanQrPopup } from './methods/closeScanQrPopup'

export { default as bridgeDataSend } from './methods/dataSend'
export { supportDataSend as supportDataSend } from './methods/dataSend'

export { default as bridgeExpand } from './methods/expand'
export { supportExpand as supportExpand } from './methods/expand'

export { default as bridgeIframeReady } from './methods/iframeReady'
export { supportIframeReady as supportIframeReady } from './methods/iframeReady'

export { default as bridgeIframeWillReload } from './methods/iframeWillReload'
export { supportIframeWillReload as supportIframeWillReload } from './methods/iframeWillReload'

export { default as bridgeInvokeCustomMethod } from './methods/invokeCustomMethod/invokeCustomMethod'
export { supportInvokeCustomMethod as supportInvokeCustomMethod } from './methods/invokeCustomMethod/invokeCustomMethod'

export { default as bridgeOpenInvoice } from './methods/openInvoice'
export { supportOpenInvoice as supportOpenInvoice } from './methods/openInvoice'

export { default as bridgeOpenLink } from './methods/openLink'
export { supportOpenLink as supportOpenLink } from './methods/openLink'

export { default as bridgeOpenPopup } from './methods/openPopup'
export { supportOpenPopup as supportOpenPopup } from './methods/openPopup'

export { default as bridgeOpenScanQrPopup } from './methods/openScanQrPopup/openScanQrPopup'
export { supportOpenScanQrPopup as supportOpenScanQrPopup } from './methods/openScanQrPopup/openScanQrPopup'

export { default as bridgeOpenTgLink } from './methods/openTgLink'
export { supportOpenTgLink as supportOpenTgLink } from './methods/openTgLink'

export { default as bridgeReadTextFromClipboard } from './methods/readTextFromClipboard/readTextFromClipboard'
export { supportReadTextFromClipboard as supportReadTextFromClipboard } from './methods/readTextFromClipboard/readTextFromClipboard'

export { default as bridgeReady } from './methods/ready'
export { supportReady as supportReady } from './methods/ready'

export { default as bridgeRequestPhone } from './methods/requestPhone/requestPhone'
export { supportRequestPhone as supportRequestPhone } from './methods/requestPhone/requestPhone'

export { default as bridgeRequestTheme } from './methods/requestTheme'
export { supportRequestTheme as supportRequestTheme } from './methods/requestTheme'

export { default as bridgeRequestViewport } from './methods/requestViewport'
export { supportRequestViewport as supportRequestViewport } from './methods/requestViewport'

export { default as bridgeRequestWriteAccess } from './methods/requestWriteAccess'
export { supportRequestWriteAccess as supportRequestWriteAccess } from './methods/requestWriteAccess'

export { default as bridgeSetBackgroundColor } from './methods/setBackgroundColor'
export { supportSetBackgroundColor as supportSetBackgroundColor } from './methods/setBackgroundColor'

export { default as bridgeSetHeaderColor } from './methods/setHeaderColor'
export { supportSetHeaderColor as supportSetHeaderColor } from './methods/setHeaderColor'

export { default as bridgeSetupBackButton } from './methods/setupBackButton'
export { supportSetupBackButton as supportSetupBackButton } from './methods/setupBackButton'

export { default as bridgeSetupClosingBehavior } from './methods/setupClosingBehavior'
export { supportSetupClosingBehavior as supportSetupClosingBehavior } from './methods/setupClosingBehavior'

export { default as bridgeSetupMainButton } from './methods/setupMainButton'
export { supportSetupMainButton as supportSetupMainButton } from './methods/setupMainButton'

export { default as bridgeSetupSettingsButton } from './methods/setupSettingsButton'
export { supportSetupSettingsButton as supportSetupSettingsButton } from './methods/setupSettingsButton'

export { default as bridgeSwitchInlineQuery } from './methods/switchInlineQuery'
export { supportSwitchInlineQuery as supportSwitchInlineQuery } from './methods/switchInlineQuery'

export { default as bridgeTriggerHapticFeedback } from './methods/triggerHapticFeedback'
export { supportTriggerHapticFeedback as supportTriggerHapticFeedback } from './methods/triggerHapticFeedback'

export { default as bridgeGetInitData } from './methods/getInitData'

export { default as sender } from '../sender'
export { default as debug } from '../debug'
export * as listener from '../listener'
export type { EventsData } from '../listener'

export { TG_WEB as TG_WEB } from '../utils/getPlatform/getPlatform'
export { TG_PHONE as TG_PHONE } from '../utils/getPlatform/getPlatform'
export { TG_DESKTOP as TG_DESKTOP } from '../utils/getPlatform/getPlatform'

export { NOT_SUPPORTED as NOT_SUPPORTED } from '../utils/supportCheck/supportCheck'

/** types */
export { MethodInvokeCustomMethod as MethodInvokeCustomMethod } from '../types/methods'
export { MethodOpenScanQrPopup as MethodOpenScanQrPopup } from '../types/methods'
export { MethodReadTextFromClipboard as MethodReadTextFromClipboard } from '../types/methods'
export { MethodRequestPhone as MethodRequestPhone } from '../types/methods'
export { MethodClose as MethodClose } from '../types/methods'
export { MethodCloseScanQrPopup as MethodCloseScanQrPopup } from '../types/methods'
export { MethodDataSend as MethodDataSend } from '../types/methods'
export { MethodExpand as MethodExpand } from '../types/methods'
export { MethodIframeReady as MethodIframeReady } from '../types/methods'
export { MethodIframeWillReload as MethodIframeWillReload } from '../types/methods'
export { MethodOpenInvoice as MethodOpenInvoice } from '../types/methods'
export { MethodOpenLink as MethodOpenLink } from '../types/methods'
export { MethodOpenPopup as MethodOpenPopup } from '../types/methods'
export { MethodOpenTgLink as MethodOpenTgLink } from '../types/methods'
export { MethodReady as MethodReady } from '../types/methods'
export { MethodRequestTheme as MethodRequestTheme } from '../types/methods'
export { MethodRequestViewport as MethodRequestViewport } from '../types/methods'
export { MethodRequestWriteAccess as MethodRequestWriteAccess } from '../types/methods'
export { MethodSetBackgroundColor as MethodSetBackgroundColor } from '../types/methods'
export { MethodSetHeaderColor as MethodSetHeaderColor } from '../types/methods'
export { MethodSetupBackButton as MethodSetupBackButton } from '../types/methods'
export { MethodSetupClosingBehavior as MethodSetupClosingBehavior } from '../types/methods'
export { MethodSetupMainButton as MethodSetupMainButton } from '../types/methods'
export { MethodSetupSettingsButton as MethodSetupSettingsButton } from '../types/methods'
export { MethodSwitchInlineQuery as MethodSwitchInlineQuery } from '../types/methods'
export { MethodTriggerHapticFeedback as MethodTriggerHapticFeedback } from '../types/methods'

export { EventBackButtonPressed as EventBackButtonPressed } from '../types/events'
export { EventClipboardTextReceived as EventClipboardTextReceived } from '../types/events'
export { EventCustomMethodInvoked as EventCustomMethodInvoked } from '../types/events'
export { EventInvoiceClosed as EventInvoiceClosed } from '../types/events'
export { EventMainButtonPressed as EventMainButtonPressed } from '../types/events'
export { EventPhoneRequested as EventPhoneRequested } from '../types/events'
export { EventPopupClosed as EventPopupClosed } from '../types/events'
export { EventReloadIframe as EventReloadIframe } from '../types/events'
export { EventQrTextReceived as EventQrTextReceived } from '../types/events'
export { EventScanQrPopupClosed as EventScanQrPopupClosed } from '../types/events'
export { EventSetCustomStyle as EventSetCustomStyle } from '../types/events'
export { EventSettingsButtonPressed as EventSettingsButtonPressed } from '../types/events'
export { EventThemeChanged as EventThemeChanged } from '../types/events'
export { EventViewportChanged as EventViewportChanged } from '../types/events'
export { EventWriteAccessRequested as EventWriteAccessRequested } from '../types/events'
