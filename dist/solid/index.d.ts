import * as solid_js from 'solid-js';
import { Context, Component } from 'solid-js';
import { JSX } from 'solid-js/jsx-runtime';

declare const createIsViewportChanged: () => solid_js.Accessor<{
    height: number;
    width?: number | undefined;
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

type RequestWriteAccess = (eventData?: SenderData[typeof MethodRequestWriteAccess]) => {
    status: boolean | typeof NOT_SUPPORTED;
};
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
declare const getThemeParams: (theme_params: ThemeParams) => Record<string, string>;

type Sender = (eventType: string, eventData?: any) => void;
declare const sender: Sender;

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
    };
    [MethodOpenPopup]: {
        title: string;
        message: string;
        buttons: PopupButton[];
    };
    [MethodOpenTgLink]: {
        path_full: string;
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
        chat_types: ['users', 'bots', 'groups', 'channels'];
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
};

type Debug = (methondName: string, errorId: number) => void;
declare const debug: Debug;

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
    write_access_requested: {
        status: 'allowed';
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

export { ContextTwa, EventBackButtonPressed, EventClipboardTextReceived, EventCustomMethodInvoked, EventInvoiceClosed, EventMainButtonPressed, EventPhoneRequested, EventPopupClosed, EventQrTextReceived, EventReloadIframe, EventScanQrPopupClosed, EventSetCustomStyle, EventSettingsButtonPressed, EventThemeChanged, EventViewportChanged, EventWriteAccessRequested, type EventsData, type GetInitData, MethodClose, MethodCloseScanQrPopup, MethodDataSend, MethodExpand, MethodIframeReady, MethodIframeWillReload, MethodInvokeCustomMethod, MethodOpenInvoice, MethodOpenLink, MethodOpenPopup, MethodOpenScanQrPopup, MethodOpenTgLink, MethodReadTextFromClipboard, MethodReady, MethodRequestPhone, MethodRequestTheme, MethodRequestViewport, MethodRequestWriteAccess, MethodSetBackgroundColor, MethodSetBottomBarColor, MethodSetHeaderColor, MethodSetupBackButton, MethodSetupClosingBehavior, MethodSetupMainButton, MethodSetupSettingsButton, MethodSetupSwipeBehavior, MethodSwitchInlineQuery, MethodTriggerHapticFeedback, NOT_SUPPORTED, type PopupButton, ProviderTWA, type SenderData, TG_DESKTOP, TG_PHONE, TG_WEB, type ThemeParams, close as bridgeClose, closeScanQrPopup as bridgeCloseScanQrPopup, dataSend as bridgeDataSend, expand as bridgeExpand, getInitData as bridgeGetInitData, getThemeParams as bridgeGetThemeParams, iframeReady as bridgeIframeReady, iframeWillReload as bridgeIframeWillReload, invokeCustomMethod as bridgeInvokeCustomMethod, openInvoice as bridgeOpenInvoice, openLink as bridgeOpenLink, openPopup as bridgeOpenPopup, openScanQrPopup as bridgeOpenScanQrPopup, openTgLink as bridgeOpenTgLink, readTextFromClipboard as bridgeReadTextFromClipboard, ready as bridgeReady, requestPhone as bridgeRequestPhone, requestTheme as bridgeRequestTheme, requestViewport as bridgeRequestViewport, requestWriteAccess as bridgeRequestWriteAccess, sender as bridgeSend, sessionStorageGet as bridgeSessionStorageGet, sessionStorageSet as bridgeSessionStorageSet, setBackgroundColor as bridgeSetBackgroundColor, setBottomBarColor as bridgeSetBottomBarColor, setHeaderColor as bridgeSetHeaderColor, setupBackButton as bridgeSetupBackButton, setupClosingBehavior as bridgeSetupClosingBehavior, setupMainButton as bridgeSetupMainButton, setupSettingsButton as bridgeSetupSettingsButton, setupSwipeBehavior as bridgeSetupSwipeBehavior, switchInlineQuery as bridgeSwitchInlineQuery, triggerHapticFeedback as bridgeTriggerHapticFeedback, createIsViewportChanged, debug, getPlatform, listener, sender, supportClose, supportCloseScanQrPopup, supportDataSend, supportExpand, supportIframeReady, supportIframeWillReload, supportInvokeCustomMethod, supportOpenInvoice, supportOpenLink, supportOpenPopup, supportOpenScanQrPopup, supportOpenTgLink, supportReadTextFromClipboard, supportReady, supportRequestPhone, supportRequestTheme, supportRequestViewport, supportRequestWriteAccess, supportSessionStorageGet, supportSessionStorageSet, supportSetBackgroundColor, supportSetBottomBarColor, supportSetHeaderColor, supportSetupBackButton, supportSetupClosingBehavior, supportSetupMainButton, supportSetupSettingsButton, supportSetupSwipeBehavior, supportSwitchInlineQuery, supportTriggerHapticFeedback };
