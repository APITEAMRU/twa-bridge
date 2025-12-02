import * as solid_js from 'solid-js';
import { Context, JSX, Component } from 'solid-js';

declare const createIsViewportChanged: () => solid_js.Accessor<{
    height: number;
    width?: number;
    is_expanded: boolean;
    is_state_stable: boolean;
}>;

type Close = (eventData?: SenderData[typeof MethodClose]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const close: Close;
declare const supportClose: () => boolean;

type CloseScanQrPopup = (eventData?: SenderData[typeof MethodCloseScanQrPopup]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const closeScanQrPopup: CloseScanQrPopup;
declare const supportCloseScanQrPopup: () => boolean;

type DataSend = (eventData: SenderData[typeof MethodDataSend]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const dataSend: DataSend;
declare const supportDataSend: () => boolean;

type Expand = (props?: SenderData[typeof MethodExpand]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const expand: Expand;
declare const supportExpand: () => boolean;

type IframeReady = (eventData: SenderData[typeof MethodIframeReady]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const iframeReady: IframeReady;
declare const supportIframeReady: () => boolean;

type IframeWillReload = (eventData: SenderData[typeof MethodIframeReady]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const iframeWillReload: IframeWillReload;
declare const supportIframeWillReload: () => boolean;

type InvokeCustomMethod = (eventData: SenderData[typeof MethodInvokeCustomMethod]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
    data?: EventsData[typeof EventCustomMethodInvoked];
}>;
declare const invokeCustomMethod: InvokeCustomMethod;
declare const supportInvokeCustomMethod: () => boolean;

type OpenInvoice = (eventData: SenderData[typeof MethodOpenInvoice]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const openInvoice: OpenInvoice;
declare const supportOpenInvoice: () => boolean;

type OpenLink = (eventData: SenderData[typeof MethodOpenLink]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const openLink: OpenLink;
declare const supportOpenLink: () => boolean;

type OpenPopup = (eventData: SenderData[typeof MethodOpenPopup]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
    data?: EventsData['popup_closed'];
}>;
declare const openPopup: OpenPopup;
declare const supportOpenPopup: () => boolean;

type OpenScanQrPopup = (eventData: SenderData[typeof MethodOpenScanQrPopup]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED | 'closed';
    data?: EventsData[typeof EventQrTextReceived];
}>;
declare const openScanQrPopup: OpenScanQrPopup;
declare const supportOpenScanQrPopup: () => boolean;

type OpenTgLink = (eventData: SenderData[typeof MethodOpenTgLink]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const openTgLink: OpenTgLink;
declare const supportOpenTgLink: () => boolean;

type ReadTextFromClipboard = (eventData?: SenderData[typeof MethodReadTextFromClipboard]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
    data?: EventsData[typeof EventClipboardTextReceived];
}>;
declare const readTextFromClipboard: ReadTextFromClipboard;
declare const supportReadTextFromClipboard: () => boolean;

type Ready = (eventData?: SenderData[typeof MethodReady]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const ready: Ready;
declare const supportReady: () => boolean;

type RequestPhone = (eventData?: SenderData[typeof MethodRequestPhone]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const requestPhone: RequestPhone;
declare const supportRequestPhone: () => boolean;

type RequestTheme = (eventData?: SenderData[typeof MethodRequestTheme]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const requestTheme: RequestTheme;
declare const supportRequestTheme: () => boolean;

type RequestViewport = (eventData?: SenderData[typeof MethodRequestViewport]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const requestViewport: RequestViewport;
declare const supportRequestViewport: () => boolean;

type RequestWriteAccess = (eventData?: SenderData[typeof MethodRequestWriteAccess]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const requestWriteAccess: RequestWriteAccess;
declare const supportRequestWriteAccess: () => boolean;

type SetBackgroundColor = (eventData: SenderData[typeof MethodSetBackgroundColor]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setBackgroundColor: SetBackgroundColor;
declare const supportSetBackgroundColor: () => boolean;

type SetHeaderColor = (eventData: SenderData[typeof MethodSetHeaderColor]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setHeaderColor: SetHeaderColor;
declare const supportSetHeaderColor: () => boolean;

type SetBottomBarColor = (eventData: SenderData[typeof MethodSetBottomBarColor]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setBottomBarColor: SetBottomBarColor;
declare const supportSetBottomBarColor: () => boolean;

type SetupBackButton = (eventData: SenderData[typeof MethodSetupBackButton]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupBackButton: SetupBackButton;
declare const supportSetupBackButton: () => boolean;

type SetupClosingBehavior = (eventData: SenderData[typeof MethodSetupClosingBehavior]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupClosingBehavior: SetupClosingBehavior;
declare const supportSetupClosingBehavior: () => boolean;

type SetupMainButton = (eventData: SenderData[typeof MethodSetupMainButton]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupMainButton: SetupMainButton;
declare const supportSetupMainButton: () => boolean;

type SetupSettingsButton = (eventData: SenderData[typeof MethodSetupSettingsButton]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupSettingsButton: SetupSettingsButton;
declare const supportSetupSettingsButton: () => boolean;

type SwitchInlineQuery = (eventData: SenderData[typeof MethodSwitchInlineQuery]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const switchInlineQuery: SwitchInlineQuery;
declare const supportSwitchInlineQuery: () => boolean;

type TriggerHapticFeedback = (eventData: SenderData[typeof MethodTriggerHapticFeedback]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const triggerHapticFeedback: TriggerHapticFeedback;
declare const supportTriggerHapticFeedback: () => boolean;

type SessionStorageSet = ({ key, value }: {
    key: string;
    value: any;
}) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const sessionStorageSet: SessionStorageSet;
declare const supportSessionStorageSet: () => boolean;

type SessionStorageGet = ({ key }: {
    key: string;
}) => {
    is_json: boolean;
    status: boolean | typeof NOT_SUPPORTED;
    value?: any;
};
declare const sessionStorageGet: SessionStorageGet;
declare const supportSessionStorageGet: () => boolean;

type SetupSwipeBehavior = (eventData: SenderData[typeof MethodSetupSwipeBehavior]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupSwipeBehavior: SetupSwipeBehavior;
declare const supportSetupSwipeBehavior: () => boolean;

type ShareToStory = (eventData?: SenderData[typeof MethodShareToStory]) => {
    status: boolean | typeof NOT_SUPPORTED;
    error_id?: number;
};
declare const shareToStory: ShareToStory;
declare const supportShareToStory: () => boolean;

type CheckHomeScreen = (eventData: SenderData[typeof MethodCheckHomeScreen]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
    data?: EventsData[typeof EventHomeScreenChecked];
}>;
declare const checkHomeScreen: CheckHomeScreen;
declare const supportCheckHomeScreen: () => boolean;

type AddToHomeScreen = (eventData?: SenderData[typeof MethodAddToHomeScreen]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const addToHomeScreen: AddToHomeScreen;
declare const supportAddToHomeScreen: () => boolean;

type RequestSafeAreaInset = (eventData?: SenderData[typeof MethodRequestSafeArea]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const requestSafeAreaInset: RequestSafeAreaInset;
declare const supportRequestSafeAreaInset: () => boolean;

type RequestContentSafeAreaInset = (eventData?: SenderData[typeof MethodRequestContentSafeArea]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const requestContentSafeAreaInset: RequestContentSafeAreaInset;
declare const supportRequestContentSafeAreaInset: () => boolean;

type SetupFullScreen = (eventData?: SenderData[typeof MethodRequestFullscreen]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupFullScreen: SetupFullScreen;
declare const supportSetupFullScreen: () => boolean;

type SetupOrientation = (eventData?: SenderData[typeof MethodToggleOrientationLock]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
declare const setupOrientation: SetupOrientation;
declare const supportSetupOrientation: () => boolean;

type RequestEmojiStatus = (eventData?: SenderData[typeof MethodRequestEmojiStatusAccess]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const requestEmojiStatus: RequestEmojiStatus;
declare const supportRequestEmojiStatus: () => boolean;

type SetEmojiStatus = (eventData?: SenderData[typeof MethodSetEmojiStatus]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const setEmojiStatus: SetEmojiStatus;
declare const supportSetEmojiStatus: () => boolean;

type ShareMessage = (eventData?: SenderData[typeof MethodSendPreparedMessage]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const shareMessage: ShareMessage;
declare const supportShareMessage: () => boolean;

type DownloadFile = (eventData?: SenderData[typeof MethodRequestFileDownload]) => Promise<{
    status: boolean | typeof NOT_SUPPORTED;
}>;
declare const downloadFile: DownloadFile;
declare const supportDownloadFile: () => boolean;

declare const MethodInvokeCustomMethod = "web_app_invoke_custom_method";
declare const MethodOpenScanQrPopup = "web_app_open_scan_qr_popup";
declare const MethodReadTextFromClipboard = "web_app_read_text_from_clipboard";
declare const MethodRequestPhone = "web_app_request_phone";
declare const MethodClose = "web_app_close";
declare const MethodCloseScanQrPopup = "web_app_close_scan_qr_popup";
declare const MethodDataSend = "web_app_data_send";
declare const MethodExpand = "web_app_expand";
declare const MethodIframeReady = "iframe_ready";
declare const MethodIframeWillReload = "iframe_will_reload";
declare const MethodOpenInvoice = "web_app_open_invoice";
declare const MethodOpenLink = "web_app_open_link";
declare const MethodOpenPopup = "web_app_open_popup";
declare const MethodOpenTgLink = "web_app_open_tg_link";
declare const MethodReady = "web_app_ready";
declare const MethodRequestTheme = "web_app_request_theme";
declare const MethodRequestViewport = "web_app_request_viewport";
declare const MethodRequestWriteAccess = "web_app_request_write_access";
declare const MethodSetBackgroundColor = "web_app_set_background_color";
declare const MethodSetHeaderColor = "web_app_set_header_color";
declare const MethodSetBottomBarColor = "web_app_set_bottom_bar_color";
declare const MethodSetupBackButton = "web_app_setup_back_button";
declare const MethodSetupClosingBehavior = "web_app_setup_closing_behavior";
declare const MethodSetupMainButton = "web_app_setup_main_button";
declare const MethodSetupSettingsButton = "web_app_setup_settings_button";
declare const MethodSwitchInlineQuery = "web_app_switch_inline_query";
declare const MethodTriggerHapticFeedback = "web_app_trigger_haptic_feedback";
declare const MethodSetupSwipeBehavior = "web_app_setup_swipe_behavior";
declare const MethodShareToStory = "web_app_share_to_story";
declare const MethodRequestSafeArea = "web_app_request_safe_area";
declare const MethodRequestContentSafeArea = "web_app_request_content_safe_area";
declare const MethodRequestFullscreen = "web_app_request_fullscreen";
declare const MethodExitFullscreen = "web_app_exit_fullscreen";
declare const MethodToggleOrientationLock = "web_app_toggle_orientation_lock";
declare const MethodAddToHomeScreen = "web_app_add_to_home_screen";
declare const MethodCheckHomeScreen = "web_app_check_home_screen";
declare const MethodSendPreparedMessage = "web_app_send_prepared_message";
declare const MethodSetEmojiStatus = "web_app_set_emoji_status";
declare const MethodRequestEmojiStatusAccess = "web_app_request_emoji_status_access";
declare const MethodRequestFileDownload = "web_app_request_file_download";
declare const MethodBiometryOpenSettings = "web_app_biometry_open_settings";
declare const MethodBiometryRequestAccess = "web_app_biometry_request_access";
declare const MethodBiometryRequestAuth = "web_app_biometry_request_auth";
declare const MethodBiometryUpdateToken = "web_app_biometry_update_token";
declare enum Method {
    InvokeCustomMethod = "web_app_invoke_custom_method",
    OpenScanQrPopup = "web_app_open_scan_qr_popup",
    ReadTextFromClipboard = "web_app_read_text_from_clipboard",
    RequestPhone = "web_app_request_phone",
    Close = "web_app_close",
    CloseScanQrPopup = "web_app_close_scan_qr_popup",
    DataSend = "web_app_data_send",
    Expand = "web_app_expand",
    IframeReady = "iframe_ready",
    IframeWillReload = "iframe_will_reload",
    OpenInvoice = "web_app_open_invoice",
    OpenLink = "web_app_open_link",
    OpenPopup = "web_app_open_popup",
    OpenTgLink = "web_app_open_tg_link",
    Ready = "web_app_ready",
    RequestTheme = "web_app_request_theme",
    RequestViewport = "web_app_request_viewport",
    RequestWriteAccess = "web_app_request_write_access",
    SetBackgroundColor = "web_app_set_background_color",
    SetHeaderColor = "web_app_set_header_color",
    SetBottomBarColor = "web_app_set_bottom_bar_color",
    SetupBackButton = "web_app_setup_back_button",
    SetupClosingBehavior = "web_app_setup_closing_behavior",
    SetupMainButton = "web_app_setup_main_button",
    SetupSettingsButton = "web_app_setup_settings_button",
    SwitchInlineQuery = "web_app_switch_inline_query",
    TriggerHapticFeedback = "web_app_trigger_haptic_feedback",
    SetupSwipeBehavior = "web_app_setup_swipe_behavior",
    ShareToStory = "web_app_share_to_story",
    RequestSafeArea = "web_app_request_safe_area",
    RequestContentSafeArea = "web_app_request_content_safe_area",
    RequestFullscreen = "web_app_request_fullscreen",
    ExitFullscreen = "web_app_exit_fullscreen",
    ToggleOrientationLock = "web_app_toggle_orientation_lock",
    AddToHomeScreen = "web_app_add_to_home_screen",
    CheckHomeScreen = "web_app_check_home_screen",
    SendPreparedMessage = "web_app_send_prepared_message",
    SetEmojiStatus = "web_app_set_emoji_status",
    RequestEmojiStatusAccess = "web_app_request_emoji_status_access",
    RequestFileDownload = "web_app_request_file_download"
}
type PopupButton = {
    id: string;
    type: 'default' | 'destructive' | 'ok' | 'close' | 'cancel';
    text: string;
};
type SenderData = {
    [MethodInvokeCustomMethod]: {
        req_id?: string;
        method: string;
        params: unknown;
    };
    [MethodOpenScanQrPopup]: {
        text?: string;
        is_close?: boolean;
    };
    [MethodReadTextFromClipboard]: {
        req_id?: string;
    };
    [MethodRequestPhone]: undefined;
    [MethodClose]: undefined;
    [MethodCloseScanQrPopup]: undefined;
    [MethodDataSend]: {
        data: string;
    };
    [MethodExpand]: undefined;
    [MethodIframeReady]: {
        reload_supported?: boolean;
    };
    [MethodIframeWillReload]: undefined;
    [MethodOpenInvoice]: {
        slug: string;
    };
    [MethodOpenLink]: {
        url: string;
        try_instant_view?: boolean;
        try_browser?: boolean;
    };
    [MethodOpenPopup]: {
        title: string;
        message: string;
        buttons: PopupButton[];
    };
    [MethodOpenTgLink]: {
        path_full: string;
        force_request?: boolean;
    };
    [MethodReady]: undefined;
    [MethodRequestTheme]: undefined;
    [MethodRequestViewport]: undefined;
    [MethodRequestWriteAccess]: undefined;
    [MethodSetBackgroundColor]: {
        color: string;
    };
    [MethodSetHeaderColor]: {
        color_key: 'bg_color' | 'secondary_bg_color';
        color?: undefined;
    } | {
        color: string;
        color_key?: undefined;
    };
    [MethodSetBottomBarColor]: {
        color_key: 'bg_color' | 'secondary_bg_color' | 'bottom_bar_bg_color';
        color?: undefined;
    } | {
        color: string;
        color_key?: undefined;
    };
    [MethodSetupBackButton]: {
        is_visible: boolean;
    };
    [MethodSetupClosingBehavior]: {
        need_confirmation: boolean;
    };
    [MethodSetupMainButton]: {
        is_visible?: boolean;
        is_active?: boolean;
        is_progress_visible?: boolean;
        text?: string;
        color?: string;
        text_color?: string;
    };
    [MethodSetupSettingsButton]: {
        is_visible: boolean;
    };
    [MethodSwitchInlineQuery]: {
        query: string;
        chat_types: ('users' | 'bots' | 'groups' | 'channels')[];
    };
    [MethodTriggerHapticFeedback]: {
        type: 'impact';
        impact_style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
    } | {
        type: 'notification';
        notification_type: 'error' | 'success' | 'warning';
    } | {
        type: 'selection_change';
        impact_style?: undefined;
        notification_type?: undefined;
    };
    [MethodSetupSwipeBehavior]: {
        allow_vertical_swipe: boolean;
    };
    [MethodShareToStory]: {
        media: string;
        text?: string;
        widget_link?: {
            url: string;
            name?: string;
        };
    };
    [MethodRequestSafeArea]: undefined;
    [MethodRequestContentSafeArea]: undefined;
    [MethodRequestFullscreen]: {
        is_full: boolean;
    };
    [MethodExitFullscreen]: {
        is_full: boolean;
    };
    [MethodToggleOrientationLock]: {
        locked: boolean;
    };
    [MethodAddToHomeScreen]: undefined;
    [MethodCheckHomeScreen]: undefined;
    [MethodSendPreparedMessage]: {
        msg_id: number;
    };
    [MethodSetEmojiStatus]: {
        custom_emoji_id: string;
        duration?: number;
    };
    [MethodRequestEmojiStatusAccess]: undefined;
    [MethodRequestFileDownload]: {
        url: string;
        file_name: string;
    };
    [MethodBiometryRequestAccess]: {
        reason?: string;
    };
    [MethodBiometryRequestAuth]: {
        reason?: string;
    };
    [MethodBiometryUpdateToken]: {
        token: string;
    };
    [MethodBiometryOpenSettings]: undefined;
};

type Store = {
    isInited: boolean;
    isBiometricAvailable: boolean;
    isAccessGranted: boolean;
    isAccessRequested: boolean;
    isBiometricTokenSaved: boolean;
    biometricType: EventsData[typeof EventBiometryInfoReceived]['type'];
    deviceId: EventsData[typeof EventBiometryInfoReceived]['device_id'];
};
type BiometricManager = {
    isInited: Store['isInited'];
    isBiometricAvailable: Store['isBiometricAvailable'];
    isAccessGranted: Store['isAccessGranted'];
    isAccessRequested: Store['isAccessRequested'];
    isBiometricTokenSaved: Store['isBiometricTokenSaved'];
    biometricType: Store['biometricType'];
    deviceId: Store['deviceId'];
    init: () => Promise<{
        status: boolean | typeof NOT_SUPPORTED;
        data?: Store;
    }>;
    requestAccess: (eventData: SenderData[typeof MethodBiometryRequestAccess]) => Promise<{
        status: boolean | typeof NOT_SUPPORTED;
        data?: Store;
    }>;
    authenticate: (eventData: SenderData[typeof MethodBiometryRequestAuth]) => Promise<{
        status: boolean | typeof NOT_SUPPORTED;
        data?: EventsData[typeof EventBiometryAuthRequested];
    }>;
    updateToken: (eventData: SenderData[typeof MethodBiometryUpdateToken]) => Promise<{
        status: boolean | typeof NOT_SUPPORTED;
        data?: EventsData[typeof EventBiometryTokenUpdated];
    }>;
    openSettings: (eventData: SenderData[typeof MethodBiometryOpenSettings]) => {
        status: boolean | typeof NOT_SUPPORTED;
    };
};
declare const BiometricManager: BiometricManager;

declare const supportBiometricManager: () => boolean;

type User = {
    added_to_attachment_menu?: boolean;
    allows_write_to_pm?: boolean;
    is_premium?: boolean;
    first_name: string;
    id: number;
    is_bot?: boolean;
    last_name?: string;
    language_code: string;
    photo_url?: string;
    username?: string;
};
type Chat = {
    id: number;
    type: 'group' | 'supergroup' | 'channel';
    title: string;
    photo_url?: string;
    username?: string;
};
type GetInitData = {
    auth_date: number;
    can_send_after?: number;
    chat?: Chat;
    chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
    chat_instance?: string;
    hash: string;
    query_id?: string;
    receiver?: User;
    start_param?: string;
    user?: User;
} | undefined;
declare const getInitData: () => GetInitData;

type ThemeParams = {
    bg_color: string;
    text_color: string;
    hint_color: string;
    link_color: string;
    button_color: string;
    button_text_color: string;
    secondary_bg_color: string;
    header_bg_color: string;
    bottom_bar_bg_color: string;
    accent_text_color: string;
    section_bg_color: string;
    section_header_text_color: string;
    section_separator_color: string;
    subtitle_text_color: string;
    destructive_text_color: string;
};
declare const getThemeParams: (theme_params?: ThemeParams) => ThemeParams;

type Sender = (eventType: string, eventData?: any) => void;
declare const sender: Sender;

declare const EventBackButtonPressed = "back_button_pressed";
declare const EventClipboardTextReceived = "clipboard_text_received";
declare const EventCustomMethodInvoked = "custom_method_invoked";
declare const EventInvoiceClosed = "invoice_closed";
declare const EventMainButtonPressed = "main_button_pressed";
declare const EventPhoneRequested = "phone_requested";
declare const EventPopupClosed = "popup_closed";
declare const EventReloadIframe = "reload_iframe";
declare const EventQrTextReceived = "qr_text_received";
declare const EventScanQrPopupClosed = "scan_qr_popup_closed";
declare const EventSetCustomStyle = "set_custom_style";
declare const EventSettingsButtonPressed = "settings_button_pressed";
declare const EventThemeChanged = "theme_changed";
declare const EventViewportChanged = "viewport_changed";
declare const EventWriteAccessRequested = "write_access_requested";
declare const EventSafeAreaChanged = "safe_area_changed";
declare const EventContentSafeAreaChanged = "content_safe_area_changed";
declare const EventPreparedMessageSent = "prepared_message_sent";
declare const EventPreparedMessageFailed = "prepared_message_failed";
declare const EventEmojiStatusSet = "emoji_status_set";
declare const EventEmojiStatusFailed = "emoji_status_failed";
declare const EventEmojiStatusAccessRequested = "emoji_status_access_requested";
declare const EventFileDownloadRequested = "file_download_requested";
declare const EventAccelerometerChanged = "accelerometer_changed";
declare const EventAccelerometerFailed = "accelerometer_failed";
declare const EventAccelerometerStarted = "accelerometer_started";
declare const EventAccelerometerStopped = "accelerometer_stopped";
declare const EventBiometryAuthRequested = "biometry_auth_requested";
declare const EventBiometryInfoReceived = "biometry_info_received";
declare const EventBiometryTokenUpdated = "biometry_token_updated";
declare const EventDeviceOrientationChanged = "device_orientation_changed";
declare const EventDeviceOrientationFailed = "device_orientation_failed";
declare const EventDeviceOrientationStarted = "device_orientation_started";
declare const EventDeviceOrientationStopped = "device_orientation_stopped";
declare const EventFullscreenChanged = "fullscreen_changed";
declare const EventFullscreenFailed = "fullscreen_failed";
declare const EventGyroscopeChanged = "gyroscope_changed";
declare const EventGyroscopeFailed = "gyroscope_failed";
declare const EventGyroscopeStarted = "gyroscope_started";
declare const EventGyroscopeStopped = "gyroscope_stopped";
declare const EventHomeScreenAdded = "home_screen_added";
declare const EventHomeScreenChecked = "home_screen_checked";
declare const EventHomeScreenFailed = "home_screen_failed";
declare const EventLocationChecked = "location_checked";
declare const EventLocationRequested = "location_requested";
declare const EventSecondaryButtonPressed = "secondary_button_pressed";
declare const EventVisibilityChanged = "visibility_changed";

type GetPlatform = () => 'phone' | 'web' | 'desktop';
declare const TG_WEB = "web";
declare const TG_PHONE = "phone";
declare const TG_DESKTOP = "desktop";
declare const getPlatform: GetPlatform;

declare const NOT_SUPPORTED = "not_supported";

type EventsData = {
    back_button_pressed: undefined;
    clipboard_text_received: {
        req_id: string;
        data?: string | null;
    };
    custom_method_invoked: {
        req_id: string;
        result?: unknown;
        error?: string;
    };
    invoice_closed: {
        slug: string;
        status: 'paid' | 'failed' | 'pending' | 'cancelled';
    };
    main_button_pressed: undefined;
    phone_requested: {
        status: 'sent';
    };
    popup_closed: {
        button_id?: string;
    };
    reload_iframe: undefined;
    qr_text_received: {
        data?: string;
    };
    scan_qr_popup_closed: undefined;
    set_custom_style: undefined;
    settings_button_pressed: undefined;
    theme_changed: {
        theme_params: ThemeParams;
    };
    viewport_changed: {
        height: number;
        width?: number;
        is_expanded: boolean;
        is_state_stable: boolean;
    };
    [EventHomeScreenChecked]: {
        status: 'unsupported' | 'unknown' | 'added' | 'missed';
    };
    [EventSafeAreaChanged]: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    [EventContentSafeAreaChanged]: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    };
    [EventPreparedMessageSent]: undefined;
    [EventPreparedMessageFailed]: undefined;
    [EventEmojiStatusSet]: undefined;
    [EventEmojiStatusFailed]: undefined;
    [EventEmojiStatusAccessRequested]: {
        status: 'allowed';
    };
    [EventFileDownloadRequested]: {
        status: 'downloading';
    };
    [EventWriteAccessRequested]: {
        status: 'allowed';
    };
    [EventBiometryInfoReceived]: {
        available: boolean;
        access_requested: boolean;
        access_granted: boolean;
        device_id: string;
        token_saved: boolean;
        type: 'face' | 'finger' | 'unknown';
    };
    [EventBiometryTokenUpdated]: {
        status: 'updated' | 'removed';
    };
    [EventBiometryAuthRequested]: {
        status: 'failed';
        token: undefined;
    } | {
        status: 'authorized';
        token: string;
    };
};
interface TelegramGameProxy {
    receiveEvent: (event: string, data: string) => void;
}
interface TelegramWebviewProxy {
    postEvent: (event: string, data: string) => void;
}
declare global {
    interface External {
        notify: (event: string) => void;
    }
    interface Window {
        TelegramWebviewProxy: TelegramWebviewProxy;
        TelegramGameProxy: TelegramGameProxy;
        TelegramGameProxy_receiveEvent: TelegramGameProxy['receiveEvent'];
        Telegram: {
            WebView: TelegramGameProxy;
        };
    }
}
type Listened = <T extends EventsData, E extends keyof T, D extends T[E]>(eventName: E, callback: (eventData: D) => void) => void;
declare const on: Listened;
declare const off: Listened;
declare const once: Listened;

type listener_EventsData = EventsData;
declare const listener_off: typeof off;
declare const listener_on: typeof on;
declare const listener_once: typeof once;
declare namespace listener {
  export { type listener_EventsData as EventsData, listener_off as off, listener_on as on, listener_once as once };
}

type Debug = (methondName: string, errorId: number) => void;
declare const debug: Debug;

declare const getAppData: () => string | null;

type Value = {
    viewport?: EventsData[typeof EventViewportChanged] & {
        safe_area_bottom: number;
    };
    theme?: EventsData[typeof EventThemeChanged];
    init?: GetInitData;
};
declare const ContextTwa: Context<Value>;
interface ProviderTWA extends JSX.HTMLAttributes<HTMLDivElement> {
}
declare const ProviderTWA: Component<ProviderTWA>;

export { BiometricManager, ContextTwa, EventAccelerometerChanged, EventAccelerometerFailed, EventAccelerometerStarted, EventAccelerometerStopped, EventBackButtonPressed, EventBiometryAuthRequested, EventBiometryInfoReceived, EventBiometryTokenUpdated, EventClipboardTextReceived, EventContentSafeAreaChanged, EventCustomMethodInvoked, EventDeviceOrientationChanged, EventDeviceOrientationFailed, EventDeviceOrientationStarted, EventDeviceOrientationStopped, EventEmojiStatusAccessRequested, EventEmojiStatusFailed, EventEmojiStatusSet, EventFileDownloadRequested, EventFullscreenChanged, EventFullscreenFailed, EventGyroscopeChanged, EventGyroscopeFailed, EventGyroscopeStarted, EventGyroscopeStopped, EventHomeScreenAdded, EventHomeScreenChecked, EventHomeScreenFailed, EventInvoiceClosed, EventLocationChecked, EventLocationRequested, EventMainButtonPressed, EventPhoneRequested, EventPopupClosed, EventPreparedMessageFailed, EventPreparedMessageSent, EventQrTextReceived, EventReloadIframe, EventSafeAreaChanged, EventScanQrPopupClosed, EventSecondaryButtonPressed, EventSetCustomStyle, EventSettingsButtonPressed, EventThemeChanged, EventViewportChanged, EventVisibilityChanged, EventWriteAccessRequested, type EventsData, type GetInitData, Method, MethodAddToHomeScreen, MethodCheckHomeScreen, MethodClose, MethodCloseScanQrPopup, MethodDataSend, MethodExitFullscreen, MethodExpand, MethodIframeReady, MethodIframeWillReload, MethodInvokeCustomMethod, MethodOpenInvoice, MethodOpenLink, MethodOpenPopup, MethodOpenScanQrPopup, MethodOpenTgLink, MethodReadTextFromClipboard, MethodReady, MethodRequestContentSafeArea, MethodRequestEmojiStatusAccess, MethodRequestFileDownload, MethodRequestFullscreen, MethodRequestPhone, MethodRequestSafeArea, MethodRequestTheme, MethodRequestViewport, MethodRequestWriteAccess, MethodSendPreparedMessage, MethodSetBackgroundColor, MethodSetBottomBarColor, MethodSetEmojiStatus, MethodSetHeaderColor, MethodSetupBackButton, MethodSetupClosingBehavior, MethodSetupMainButton, MethodSetupSettingsButton, MethodSetupSwipeBehavior, MethodShareToStory, MethodSwitchInlineQuery, MethodToggleOrientationLock, MethodTriggerHapticFeedback, NOT_SUPPORTED, type PopupButton, ProviderTWA, type SenderData, TG_DESKTOP, TG_PHONE, TG_WEB, type ThemeParams, addToHomeScreen as bridgeAddToHomeScreen, checkHomeScreen as bridgeCheckHomeScreen, close as bridgeClose, closeScanQrPopup as bridgeCloseScanQrPopup, dataSend as bridgeDataSend, downloadFile as bridgeDownloadFile, expand as bridgeExpand, getInitData as bridgeGetInitData, getThemeParams as bridgeGetThemeParams, iframeReady as bridgeIframeReady, iframeWillReload as bridgeIframeWillReload, invokeCustomMethod as bridgeInvokeCustomMethod, openInvoice as bridgeOpenInvoice, openLink as bridgeOpenLink, openPopup as bridgeOpenPopup, openScanQrPopup as bridgeOpenScanQrPopup, openTgLink as bridgeOpenTgLink, readTextFromClipboard as bridgeReadTextFromClipboard, ready as bridgeReady, requestContentSafeAreaInset as bridgeRequestContentSafeAreaInset, requestEmojiStatus as bridgeRequestEmojiStatus, requestPhone as bridgeRequestPhone, requestSafeAreaInset as bridgeRequestSafeAreaInset, requestTheme as bridgeRequestTheme, requestViewport as bridgeRequestViewport, requestWriteAccess as bridgeRequestWriteAccess, sender as bridgeSend, sessionStorageGet as bridgeSessionStorageGet, sessionStorageSet as bridgeSessionStorageSet, setBackgroundColor as bridgeSetBackgroundColor, setBottomBarColor as bridgeSetBottomBarColor, setEmojiStatus as bridgeSetEmojiStatus, setHeaderColor as bridgeSetHeaderColor, setupBackButton as bridgeSetupBackButton, setupClosingBehavior as bridgeSetupClosingBehavior, setupFullScreen as bridgeSetupFullScreen, setupMainButton as bridgeSetupMainButton, setupOrientation as bridgeSetupOrientation, setupSettingsButton as bridgeSetupSettingsButton, setupSwipeBehavior as bridgeSetupSwipeBehavior, shareMessage as bridgeShareMessage, shareToStory as bridgeShareToStory, switchInlineQuery as bridgeSwitchInlineQuery, triggerHapticFeedback as bridgeTriggerHapticFeedback, createIsViewportChanged, debug, getAppData, getPlatform, listener, sender, supportAddToHomeScreen, supportBiometricManager, supportCheckHomeScreen, supportClose, supportCloseScanQrPopup, supportDataSend, supportDownloadFile, supportExpand, supportIframeReady, supportIframeWillReload, supportInvokeCustomMethod, supportOpenInvoice, supportOpenLink, supportOpenPopup, supportOpenScanQrPopup, supportOpenTgLink, supportReadTextFromClipboard, supportReady, supportRequestContentSafeAreaInset, supportRequestEmojiStatus, supportRequestPhone, supportRequestSafeAreaInset, supportRequestTheme, supportRequestViewport, supportRequestWriteAccess, supportSessionStorageGet, supportSessionStorageSet, supportSetBackgroundColor, supportSetBottomBarColor, supportSetEmojiStatus, supportSetHeaderColor, supportSetupBackButton, supportSetupClosingBehavior, supportSetupFullScreen, supportSetupMainButton, supportSetupOrientation, supportSetupSettingsButton, supportSetupSwipeBehavior, supportShareMessage, supportShareToStory, supportSwitchInlineQuery, supportTriggerHapticFeedback };
