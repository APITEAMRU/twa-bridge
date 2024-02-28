import * as solid_js from 'solid-js';

type Close = () => {
    status: boolean | 'not_supported';
};
/**
 * Closes Mini App.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close
 */
declare const close: Close;
/**
 * Method support check
 */
declare const supportClose: () => boolean;

type CloseScanQrPopup = () => {
    status: boolean | 'not_supported';
};
/**
 * Closes a QR scanner. The Telegram application creates the scan_qr_popup_closed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
declare const closeScanQrPopup: CloseScanQrPopup;
/**
 * Method support check
 */
declare const supportCloseScanQrPopup: () => boolean;

type DataSend = (eventData: {
    /**
     * Data to send to a bot. Should not have size of more than 4096 bytes.
     */
    data: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Sends data to the bot. When this method is called, a service message is sent to the bot containing the data of the length up to 4096 bytes.
 *
 * Then, Mini App will be closed.
 *
 * To get more information, take a look at web_app_data field in the class Message.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-data-send
 */
declare const dataSend: DataSend;
/**
 * Method support check
 */
declare const supportDataSend: () => boolean;

type Expand = () => {
    status: boolean | 'not_supported';
};
/**
 * Closes Mini App.
 */
declare const expand: Expand;
/**
 * Method support check
 */
declare const supportExpand: () => boolean;

type IframeReady = (eventData: {
    /**
     * Optional. True, if current Mini App supports native reloading.
     */
    reload_supported?: boolean;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Notifies parent iframe about the current frame is ready.
 * This method is only used in the Web version of Telegram.
 * As a result, Mini App will receive set_custom_style event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-ready
 */
declare const iframeReady: IframeReady;
/**
 * Method support check
 */
declare const supportIframeReady: () => boolean;

type IframeWillReload = () => {
    status: boolean | 'not_supported';
};
/**
 * Notifies parent iframe about the current iframe is going to reload.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#iframe-will-reload
 */
declare const iframeWillReload: IframeWillReload;
/**
 * Method support check
 */
declare const supportIframeWillReload: () => boolean;

type InvokeCustomMethod = (eventData: {
    /**
     * Current invocation unique identifier.
     */
    req_id: string;
    /**
     * Method name.
     */
    method: string;
    /**
     * Parameters according to method.
     */
    params: unknown;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-invoke-custom-method
 */
declare const invokeCustomMethod: InvokeCustomMethod;
/**
 * Method support check
 */
declare const supportInvokeCustomMethod: () => boolean;

type OpenInvoice = (eventData: {
    /**
     * Invoice unique identifier.
     */
    slug: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Opens an invoice by its specified slug.
 *
 * More information about invoices in this documentation.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-invoice
 */
declare const openInvoice: OpenInvoice;
/**
 * Method support check
 */
declare const supportOpenInvoice: () => boolean;

type OpenLink = (eventData: {
    /**
     * 	URL to be opened by Telegram application. Should be a full path with https protocol.
     */
    url: string;
    /**
     * Optional. Link will be opened in Instant View mode if possible.
     */
    try_instant_view?: boolean;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Opens link in the default browser.
 *
 * Mini App will not be closed.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-link
 */
declare const openLink: OpenLink;
/**
 * Method support check
 */
declare const supportOpenLink: () => boolean;

type PopupButton = {
    /**
     * Identifier of the button, 0-64 characters.
     */
    id: string;
    type: 'default' | 'destructive' | 'ok' | 'close' | 'cancel';
    /**
     * The text to be displayed on the button, 0-64 characters. Ignored when type is ok, close or cancel.
     */
    text: string;
};
type OpenPopup = (eventData: {
    /**
     * The text to be displayed in the popup title, 0-64 characters
     */
    title: string;
    /**
     * The message to be displayed in the body of the popup, 1-256 characters
     */
    message: string;
    /**
     * List of buttons to be displayed in the popup, 1-3 buttons
     */
    buttons: PopupButton[];
}) => {
    status: boolean | 'not_supported';
};
/**
 * Opens a new popup. When user closes the popup, Telegram creates the popup_closed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-popup
 */
declare const openPopup: OpenPopup;
/**
 * Method support check
 */
declare const supportOpenPopup: () => boolean;

type OpenScanQrPopup = (eventData: {
    /**
     * Optional. Text to be displayed in the QR scanner.
     */
    text?: string;
    /**
     * [Custom] Optional. Сlose QR scanner after receiving data
     */
    is_close?: boolean;
}) => Promise<{
    status: boolean | 'not_supported' | 'closed';
    data: {
        data?: string;
    };
}>;
/**
 * Opens a QR scanner.
 *
 * When the scanner was closed, the Telegram application creates the scan_qr_popup_closed event.
 *
 * When the scanner reads QR, Telegram creates the qr_text_received event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-close-scan-qr-popup
 */
declare const openScanQrPopup: OpenScanQrPopup;
/**
 * Method support check
 */
declare const supportOpenScanQrPopup: () => boolean;

type OpenTgLink = (eventData: {
    /**
     * 	Should be a value taken from the link of this format: https://t.me/{path_full}.
     *
     * Can additionally contain query parameters.
     */
    path_full: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Opens the Telegram link by its pathname and query parameters.
 *
 * The link will be opened in the Telegram app, Mini App will be closed.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-open-tg-link
 */
declare const openTgLink: OpenTgLink;
/**
 * Method support check
 */
declare const supportOpenTgLink: () => boolean;

type ReadTextFromClipboard = (eventData: {
    /**
     * Unique request identifier. Should be any unique string to handle the generated event appropriately.
     */
    req_id: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Reads text from the clipboard.
 *
 * The method accepts a request identifier which is used to appropriately retrieve the method execution result from the clipboard_text_received event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-read-text-from-clipboard
 */
declare const readTextFromClipboard: ReadTextFromClipboard;
/**
 * Method support check
 */
declare const supportReadTextFromClipboard: () => boolean;

type Ready = () => {
    status: boolean | 'not_supported';
};
/**
 * Notifies Telegram about current application is ready to be shown.
 *
 * This method will make Telegram to remove application loader and display Mini App.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-ready
 */
declare const ready: Ready;
/**
 * Method support check
 */
declare const supportReady: () => boolean;

type RequestPhone = () => Promise<{
    status: boolean | 'not_supported';
}>;
/**
 * Requests access to current user's phone.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-phone
 */
declare const requestPhone: RequestPhone;
/**
 * Method support check
 */
declare const supportRequestPhone: () => boolean;

type RequestTheme = () => {
    status: boolean | 'not_supported';
};
/**
 * Requests current theme from Telegram.
 *
 * As a result, Telegram will create theme_changed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-theme
 */
declare const requestTheme: RequestTheme;
/**
 * Method support check
 */
declare const supportRequestTheme: () => boolean;

type RequestViewport = () => {
    status: boolean | 'not_supported';
};
/**
 * Requests current viewport information from Telegram.
 *
 * As a result, Telegram will create viewport_changed event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
declare const requestViewport: RequestViewport;
/**
 * Method support check
 */
declare const supportRequestViewport: () => boolean;

type RequestWriteAccess = () => {
    status: boolean | 'not_supported';
};
/**
 * Requests write message access to current user.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-request-viewport
 */
declare const requestWriteAccess: RequestWriteAccess;
/**
 * Method support check
 */
declare const supportRequestWriteAccess: () => boolean;

type SetBackgroundColor = (eventData: {
    /**
     * The Mini App background color in #RRGGBB format.
     */
    color: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates the Mini App background color.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-background-color
 */
declare const setBackgroundColor: SetBackgroundColor;
/**
 * Method support check
 */
declare const supportSetBackgroundColor: () => boolean;

type SetHeaderColor = (eventData: {
    /**
     * The Mini App header color key. Could be either bg_color or secondary_bg_color.
     */
    color_key: 'bg_color' | 'secondary_bg_color';
    /**
     * Color in RGB format.
     */
    color: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates the Mini App header color. This method should accept color_key or color property.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-set-header-color
 */
declare const setHeaderColor: SetHeaderColor;
/**
 * Method support check
 */
declare const supportSetHeaderColor: () => boolean;

type SetupBackButton = (eventData: {
    /**
     * Should the Back Button be visible.
     */
    is_visible: boolean;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates the Back Button settings.
 *
 * https://docs.telegram-mini-apps.com/platform/ui/back-button
 */
declare const setupBackButton: SetupBackButton;
/**
 * Method support check
 */
declare const supportSetupBackButton: () => boolean;

type SetupClosingBehavior = (eventData: {
    /**
     * Will user be prompted in case, an application is going to be closed.
     */
    need_confirmation: boolean;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates current closing behavior.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-closing-behavior
 */
declare const setupClosingBehavior: SetupClosingBehavior;
/**
 * Method support check
 */
declare const supportSetupClosingBehavior: () => boolean;

type SetupMainButton = (eventData: {
    /**
     * Optional. Should the Main Button be displayed.
     */
    is_visible?: boolean;
    /**
     * Optional. Should the Main Button be enabled.
     */
    is_active?: boolean;
    /**
     * Optional. Should loader inside the Main Button be displayed. Use this property in case, some operation takes time. This loader will make user notified about it.
     */
    is_progress_visible?: boolean;
    /**
     * Optional. Text inside the Main Button.
     */
    text?: string;
    /**
     * Optional. The Main Button background color in #RRGGBB format.
     */
    color?: string;
    /**
     * Optional. The Main Button text color in #RRGGBB format.
     */
    text_color?: string;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates the Main Button settings.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-main-button
 */
declare const setupMainButton: SetupMainButton;
/**
 * Method support check
 */
declare const supportSetupMainButton: () => boolean;

type SetupSettingsButton = (eventData: {
    /**
     * Should the Settings Button be displayed.
     */
    is_visible: boolean;
}) => {
    status: boolean | 'not_supported';
};
/**
 * Updates current state of Settings Button.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-setup-settings-button
 */
declare const setupSettingsButton: SetupSettingsButton;
/**
 * Method support check
 */
declare const supportSetupSettingsButton: () => boolean;

type SwitchInlineQuery = (eventData: {
    /**
     * Text which should be inserted in the input after the current bot name. Max length is 256 symbols.
     */
    query: string;
    /**
     * List of chat types which could be chosen to send the message. Could be empty list. Values:
     *
     * users, bots, groups, channels
     */
    chat_types: ['users', 'bots', 'groups', 'channels'];
}) => {
    status: boolean | 'not_supported';
};
/**
 * Inserts the bot's username and the specified inline query in the current chat's input field.
 *
 * Query may be empty, in which case only the bot's username will be inserted.
 *
 * The client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-switch-inline-query
 */
declare const switchInlineQuery: SwitchInlineQuery;
/**
 * Method support check
 */
declare const supportSwitchInlineQuery: () => boolean;

type TriggerHapticFeedback = (eventData: {
    /**
     * Type of haptic event. Values:
     *
     * impact - when there's a collision involving UI components.
     *
     * notification - when some action execution has been completed.
     *
     * selection_change - when the user changes their selection.
     */
    type: 'impact' | 'notification' | 'selection_change';
    /**
     * Required when type is impact. Values:
     *
     * light - indicates a collision between small or lightweight UI objects
     *
     * medium - indicates a collision between medium-sized or medium-weight UI objects
     *
     * heavy - indicates a collision between large or heavyweight UI objects
     *
     * rigid - indicates a collision between hard or inflexible UI objects
     *
     * soft - indicates a collision between soft or flexible UI objects
     */
    impact_style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
    /**
     * Required when type is notification. Values:
     *
     * error - indicates that a task or action has failed
     *
     * success - indicates that a task or action has completed successfully
     *
     * warning - indicates that a task or action produced a warning
     */
    notification_type: 'error' | 'success' | 'warning';
}) => {
    status: boolean | 'not_supported';
};
/**
 * Generates the haptic feedback event.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/apps-communication/methods#web-app-trigger-haptic-feedback
 */
declare const triggerHapticFeedback: TriggerHapticFeedback;
/**
 * Method support check
 */
declare const supportTriggerHapticFeedback: () => boolean;

type User = {
    /**
     * Optional. True, if this user added the bot to the attachment menu.
     */
    added_to_attachment_menu?: boolean;
    /**
     * Optional. True, if this user allowed the bot to message them.
     */
    allows_write_to_pm?: boolean;
    /**
     * 	Optional. Has the user purchased Telegram Premium.
     */
    is_premium?: boolean;
    /**
     * Bot or user name.
     */
    first_name: string;
    /**
     * Bot or user ID.
     */
    id: number;
    /**
     * 	Optional. Is the user a bot.
     */
    is_bot?: boolean;
    /**
     * Optional. User's last name.
     */
    last_name?: string;
    /**
     * Optional. IETF user's language.
     */
    language_code: string;
    /**
     * Optional. Link to the user's or bot's photo.
     *
     * Photos can have formats .jpeg and .svg.
     *
     * It is returned only for Mini Apps opened through the attachment menu.
     */
    photo_url?: string;
    /**
     * Optional. Login of the bot or user.
     */
    username?: string;
};
type Chat = {
    /**
     * 	Unique chat ID.
     */
    id: number;
    /**
     * Chat type. Values:
     *
     * group, supergroup, channel
     */
    type: 'group' | 'supergroup' | 'channel';
    /**
     * Chat title.
     */
    title: string;
    /**
     * Optional. Chat photo link. The photo can have .jpeg and .svg formats.
     *
     * It is returned only for Mini Apps opened through the attachments menu.
     */
    photo_url?: string;
    /**
     * Optional. Chat user login.
     */
    username?: string;
};
type GetInitData = () => null | {
    /**
     * The date the initialization data was created.
     *
     * Is a number representing a Unix timestamp.
     */
    auth_date: number;
    /**
     * Optional. The number of seconds after which a message can be sent via the method answerWebAppQuery.
     */
    can_send_after?: number;
    /**
     * Optional. An object containing information about the chat with the bot in which the Mini Apps was launched.
     *
     * It is returned only for Mini Apps opened through the attachments menu.
     */
    chat?: Chat;
    /**
     * Optional. The type of chat from which the Mini Apps was opened. Values:
     *
     * sender, private, group, supergroup, channel
     *
     * Returned only for applications opened by direct link.
     */
    chat_type?: 'sender' | 'private' | 'group' | 'supergroup' | 'channel';
    /**
     * Optional. A global identifier indicating the chat from which the Mini Apps was opened.
     *
     * Returned only for applications opened by direct link.
     */
    chat_instance?: string;
    /**
     * Initialization data signature.
     */
    hash: string;
    /**
     * Optional. The unique session ID of the Mini App. Used in the process of sending a message via the method answerWebAppQuery.
     */
    query_id?: string;
    /**
     * Optional. An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu.
     *
     * Returned only for private chats and only for Mini Apps launched via the attachment menu.
     */
    receiver?: User;
    /**
     * Optional. The value of the startattach or startapp query parameter specified in the link. It is returned only for Mini Apps opened through the attachment menu.
     */
    start_param?: string;
    /**
     * Optional. An object containing information about the current user.
     */
    user?: User;
};
/**
 * In the list of launch parameters, initialization data is located in the tgWebAppData parameter.
 *
 * It is a set of data mostly related to a specific user who launched the Mini App.
 *
 * Original: https://docs.telegram-mini-apps.com/platform/launch-parameters/init-data#init-data
 */
declare const getInitData: GetInitData;

declare const createIsViewportChanged: () => solid_js.Accessor<{
    height: number;
    width?: number | undefined;
    is_expanded: boolean;
    is_state_stable: boolean;
}>;

type Sender = (eventType: string, eventData?: any) => void;
/**
 * EDIT
 *
 * window.parent.postMessage(JSON.stringify({ eventType, eventData }), 'https://web.telegram.org');
 * window['TelegramWebviewProxy'].postEvent(eventType, JSON.stringify(eventData));
 */
declare const sender: Sender;

type Debug = (message: string) => void;
declare const debug: Debug;

type EventsData = {
    /**
   * User clicked the Back Button.
   */
    "back_button_pressed": undefined;
    /**
     * Telegram application attempted to extract text from clipboard.
     */
    "clipboard_text_received": {
        /**
         * Passed during the web_app_read_text_from_clipboard method invocation req_id value.
         */
        req_id: string;
        /**
         * Optional. Data extracted from the clipboard. The returned value will have the type string only in the case, application has access to the clipboard.
         */
        data?: string | null;
    };
    /**
   * Custom method invocation completed.
   */
    "custom_method_invoked": {
        /**
         * Unique identifier of this invocation.
         */
        req_id: string;
        /**
         * Optional. Method invocation successful result.
         */
        result?: unknown;
        /**
         * 	Optional. Method invocation error code.
         */
        error?: string;
    };
    /**
   * An invoice was closed.
   */
    "invoice_closed": {
        /**
         * Passed during the  web_app_open_invoice  method invocation slug value.
         */
        slug: string;
        /**
         * Invoice status. Values:
         *
         * paid - invoice was paid
         *
         * failed - invoice failed
         *
         * pending - invoice is currently pending
         *
         * cancelled - invoice was cancelled
         */
        status: 'paid' | 'failed' | 'pending' | 'cancelled';
    };
    /**
   * User clicked the Main Button.
   */
    "main_button_pressed": undefined;
    /**
   * Application received phone access request status.
   */
    "phone_requested": {
        /**
         * Request status. Can only be sent
         */
        status: 'sent';
    };
    /**
   * Popup was closed.
   */
    "popup_closed": {
        /**
         * Optional. Identifier of the clicked button.
         *
         * In case, the popup was closed without clicking any button, this property will be omitted.
         */
        button_id?: string;
    };
    /**
   * Parent iframe requested current iframe reload.
   */
    "reload_iframe": undefined;
    /**
     * The QR scanner scanned some QR and extracted its content.
     */
    "qr_text_received": {
        /**
         * Optional. Data extracted from the QR.
         */
        data?: string;
    };
    /**
   * QR scanner was closed.
   */
    "scan_qr_popup_closed": undefined;
    /**
   * The event which is usually sent by the Telegram web application.
   *
   * Its payload represents <style/> tag html content, a developer could use. The stylesheet described in the payload will help the developer to stylize the app scrollbar (but he is still able to do it himself).
   */
    "set_custom_style": undefined;
    /**
   * Occurs when the Settings Button was pressed.
   */
    "settings_button_pressed": undefined;
    /**
    * Occurs whenever the theme was changed in the user's Telegram app ( including switching to night mode).
    */
    "theme_changed": {
        /**
         * Map where the key is a theme stylesheet key and value is the corresponding color in #RRGGBB format.
         */
        theme_params: Record<string, string>;
    };
    /**
     * Occurs whenever the viewport has been changed.
     *
     * For example, when the user started dragging the application or called the expansion method.
     */
    "viewport_changed": {
        /**
         * The viewport height.
         */
        height: number;
        /**
         * Optional. The viewport width.
         */
        width?: number;
        /**
         * Is the viewport currently expanded.
         */
        is_expanded: boolean;
        /**
         * Is the viewport current state stable and not going to change in the next moment.
         */
        is_state_stable: boolean;
    };
    /**
    * Application received write access request status.
    */
    "write_access_requested": {
        /**
         * Request status. Can only be allowed.
         */
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
        TelegramGameProxy_receiveEvent: TelegramGameProxy["receiveEvent"];
        Telegram: {
            WebView: TelegramGameProxy;
        };
    }
}
declare const listenerStart: () => void;
type Listened = <T extends EventsData, E extends keyof T, D extends T[E]>(eventName: E, callback: (eventData: D) => void) => void;
declare const on: Listened;
declare const off: Listened;
declare const once: Listened;

type listener_EventsData = EventsData;
declare const listener_listenerStart: typeof listenerStart;
declare const listener_off: typeof off;
declare const listener_on: typeof on;
declare const listener_once: typeof once;
declare namespace listener {
  export { type listener_EventsData as EventsData, listener_listenerStart as listenerStart, listener_off as off, listener_on as on, listener_once as once };
}

declare const TG_WEB = "web";
declare const TG_PHONE = "phone";
declare const TG_DESKTOP = "desktop";

export { type EventsData, TG_DESKTOP, TG_PHONE, TG_WEB, close as bridgeClose, closeScanQrPopup as bridgeCloseScanQrPopup, dataSend as bridgeDataSend, expand as bridgeExpand, getInitData as bridgeGetInitData, iframeReady as bridgeIframeReady, iframeWillReload as bridgeIframeWillReload, invokeCustomMethod as bridgeInvokeCustomMethod, openInvoice as bridgeOpenInvoice, openLink as bridgeOpenLink, openPopup as bridgeOpenPopup, openScanQrPopup as bridgeOpenScanQrPopup, openTgLink as bridgeOpenTgLink, readTextFromClipboard as bridgeReadTextFromClipboard, ready as bridgeReady, requestPhone as bridgeRequestPhone, requestTheme as bridgeRequestTheme, requestViewport as bridgeRequestViewport, requestWriteAccess as bridgeRequestWriteAccess, setBackgroundColor as bridgeSetBackgroundColor, setHeaderColor as bridgeSetHeaderColor, setupBackButton as bridgeSetupBackButton, setupClosingBehavior as bridgeSetupClosingBehavior, setupMainButton as bridgeSetupMainButton, setupSettingsButton as bridgeSetupSettingsButton, switchInlineQuery as bridgeSwitchInlineQuery, triggerHapticFeedback as bridgeTriggerHapticFeedback, createIsViewportChanged, debug, listener, sender, supportClose, supportCloseScanQrPopup, supportDataSend, supportExpand, supportIframeReady, supportIframeWillReload, supportInvokeCustomMethod, supportOpenInvoice, supportOpenLink, supportOpenPopup, supportOpenScanQrPopup, supportOpenTgLink, supportReadTextFromClipboard, supportReady, supportRequestPhone, supportRequestTheme, supportRequestViewport, supportRequestWriteAccess, supportSetBackgroundColor, supportSetHeaderColor, supportSetupBackButton, supportSetupClosingBehavior, supportSetupMainButton, supportSetupSettingsButton, supportSwitchInlineQuery, supportTriggerHapticFeedback };
