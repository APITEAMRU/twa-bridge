export const MethodInvokeCustomMethod = 'web_app_invoke_custom_method'
export const MethodOpenScanQrPopup = 'web_app_open_scan_qr_popup'
export const MethodReadTextFromClipboard = 'web_app_read_text_from_clipboard'
export const MethodRequestPhone = 'web_app_request_phone'
export const MethodClose = 'web_app_close'
export const MethodCloseScanQrPopup = 'web_app_close_scan_qr_popup'
export const MethodDataSend = 'web_app_data_send'
export const MethodExpand = 'web_app_expand'
export const MethodIframeReady = 'iframe_ready'
export const MethodIframeWillReload = 'iframe_will_reload'
export const MethodOpenInvoice = 'web_app_open_invoice'
export const MethodOpenLink = 'web_app_open_link'
export const MethodOpenPopup = 'web_app_open_popup'
export const MethodOpenTgLink = 'web_app_open_tg_link'
export const MethodReady = 'web_app_ready'
export const MethodRequestTheme = 'web_app_request_theme'
export const MethodRequestViewport = 'web_app_request_viewport'
export const MethodRequestWriteAccess = 'web_app_request_write_access'
export const MethodSetBackgroundColor = 'web_app_set_background_color'
export const MethodSetHeaderColor = 'web_app_set_header_color'
export const MethodSetBottomBarColor = 'web_app_set_bottom_bar_color'
export const MethodSetupBackButton = 'web_app_setup_back_button'
export const MethodSetupClosingBehavior = 'web_app_setup_closing_behavior'
export const MethodSetupMainButton = 'web_app_setup_main_button'
export const MethodSetupSettingsButton = 'web_app_setup_settings_button'
export const MethodSwitchInlineQuery = 'web_app_switch_inline_query'
export const MethodTriggerHapticFeedback = 'web_app_trigger_haptic_feedback'
export const MethodSetupSwipeBehavior = 'web_app_setup_swipe_behavior'
export const MethodShareToStory = 'web_app_share_to_story'
export const MethodRequestSafeArea = 'web_app_request_safe_area'
export const MethodRequestContentSafeArea = 'web_app_request_content_safe_area'

export const MethodRequestFullscreen = 'web_app_request_fullscreen'
export const MethodExitFullscreen = 'web_app_exit_fullscreen'

export const MethodToggleOrientationLock = 'web_app_toggle_orientation_lock'
export const MethodAddToHomeScreen = 'web_app_add_to_home_screen'
export const MethodCheckHomeScreen = 'web_app_check_home_screen'

export const MethodSendPreparedMessage = 'web_app_send_prepared_message'
export const MethodSetEmojiStatus = 'web_app_set_emoji_status'
export const MethodRequestEmojiStatusAccess =
	'web_app_request_emoji_status_access'
export const MethodRequestFileDownload = 'web_app_request_file_download'

export const MethodBiometryGetInfo = 'web_app_biometry_get_info'
export const MethodBiometryOpenSettings = 'web_app_biometry_open_settings'
export const MethodBiometryRequestAccess = 'web_app_biometry_request_access'
export const MethodBiometryRequestAuth = 'web_app_biometry_request_auth'
export const MethodBiometryUpdateToken = 'web_app_biometry_update_token'

export const MethodCheckLocation = 'web_app_check_location'
export const MethodOpenLocationSettings = 'web_app_open_location_settings'
export const MethodRequestLocation = 'web_app_request_location'

export const MethodStartAccelerometer = 'web_app_start_accelerometer'
export const MethodStartDeviceOrientation = 'web_app_start_device_orientation'
export const MethodStartGyroscope = 'web_app_start_gyroscope'
export const MethodStopAccelerometer = 'web_app_stop_accelerometer'
export const MethodStopDeviceOrientation = 'web_app_stop_device_orientation'
export const MethodStopGyroscope = 'web_app_stop_gyroscope'
export const MethodSetupSecondaryButton = 'web_app_setup_secondary_button'

export enum Method {
	InvokeCustomMethod = MethodInvokeCustomMethod,
	OpenScanQrPopup = MethodOpenScanQrPopup,
	ReadTextFromClipboard = MethodReadTextFromClipboard,
	RequestPhone = MethodRequestPhone,
	Close = MethodClose,
	CloseScanQrPopup = MethodCloseScanQrPopup,
	DataSend = MethodDataSend,
	Expand = MethodExpand,
	IframeReady = MethodIframeReady,
	IframeWillReload = MethodIframeWillReload,
	OpenInvoice = MethodOpenInvoice,
	OpenLink = MethodOpenLink,
	OpenPopup = MethodOpenPopup,
	OpenTgLink = MethodOpenTgLink,
	Ready = MethodReady,
	RequestTheme = MethodRequestTheme,
	RequestViewport = MethodRequestViewport,
	RequestWriteAccess = MethodRequestWriteAccess,
	SetBackgroundColor = MethodSetBackgroundColor,
	SetHeaderColor = MethodSetHeaderColor,
	SetBottomBarColor = MethodSetBottomBarColor,
	SetupBackButton = MethodSetupBackButton,
	SetupClosingBehavior = MethodSetupClosingBehavior,
	SetupMainButton = MethodSetupMainButton,
	SetupSettingsButton = MethodSetupSettingsButton,
	SwitchInlineQuery = MethodSwitchInlineQuery,
	TriggerHapticFeedback = MethodTriggerHapticFeedback,
	SetupSwipeBehavior = MethodSetupSwipeBehavior,
	ShareToStory = MethodShareToStory,
	RequestSafeArea = MethodRequestSafeArea,
	RequestContentSafeArea = MethodRequestContentSafeArea,
	RequestFullscreen = MethodRequestFullscreen,
	ExitFullscreen = MethodExitFullscreen,
	ToggleOrientationLock = MethodToggleOrientationLock,
	AddToHomeScreen = MethodAddToHomeScreen,
	CheckHomeScreen = MethodCheckHomeScreen,
	SendPreparedMessage = MethodSendPreparedMessage,
	SetEmojiStatus = MethodSetEmojiStatus,
	RequestEmojiStatusAccess = MethodRequestEmojiStatusAccess,
	RequestFileDownload = MethodRequestFileDownload,
}

export type PopupButton = {
	/**
	 * Identifier of the button, 0-64 characters.
	 */
	id: string

	type: 'default' | 'destructive' | 'ok' | 'close' | 'cancel'
	/**
	 * The text to be displayed on the button, 0-64 characters. Ignored when type is ok, close or cancel.
	 */
	text: string
}

export type SenderData = {
	[MethodInvokeCustomMethod]: {
		/**
		 * Current invocation unique identifier.
		 *
		 * Default: () => randomReqId
		 */
		req_id?: string
		/**
		 * Method name.
		 */
		method: string
		/**
		 * Parameters according to method.
		 */
		params: unknown
	}
	[MethodOpenScanQrPopup]: {
		/**
		 * Optional. Text to be displayed in the QR scanner.
		 */
		text?: string
		/**
		 * [Custom] Optional. Сlose QR scanner after receiving data
		 */
		is_close?: boolean
	}
	[MethodReadTextFromClipboard]: {
		/**
		 * Unique request identifier. Should be any unique string to handle the generated event appropriately.
		 *
		 * Default: () => randomReqId
		 */
		req_id?: string
	}
	[MethodRequestPhone]: undefined
	[MethodClose]: undefined
	[MethodCloseScanQrPopup]: undefined
	[MethodDataSend]: {
		/**
	  ** EN: Data to send to a bot. Should not have size of more than 4096 bytes.

	  ** RU: Данные для отправки боту. Не должен иметь размер более 4096 байт.
	  */
		data: string
	}
	[MethodExpand]: undefined
	[MethodIframeReady]: {
		/**
		 * Optional. True, if current Mini App supports native reloading.
		 */
		reload_supported?: boolean
	}
	[MethodIframeWillReload]: undefined
	[MethodOpenInvoice]: {
		/**
		 * Invoice unique identifier.
		 */
		slug: string
	}
	[MethodOpenLink]: {
		/**
		 * 	URL to be opened by Telegram application. Should be a full path with https protocol.
		 */
		url: string
		/**
		 * Version [6.4]
		 *
		 * Optional. Link will be opened in Instant View mode if possible.
		 */
		try_instant_view?: boolean
		/**
		 * Version [7.6]
		 *
		 * Optional. ADD_DESCRIPTION
		 */
		try_browser?: boolean
	}
	[MethodOpenPopup]: {
		/**
		 * The text to be displayed in the popup title, 0-64 characters
		 */
		title: string
		/**
		 * The message to be displayed in the body of the popup, 1-256 characters
		 */
		message: string
		/**
		 * List of buttons to be displayed in the popup, 1-3 buttons
		 */
		buttons: PopupButton[]
	}
	[MethodOpenTgLink]: {
		/**
		 * Should be a value taken from the link of this format: https://t.me/{path_full}.
		 *
		 * Can additionally contain query parameters.
		 */
		path_full: string
		/**
		 * Optional.
		 */
		force_request?: boolean
	}
	[MethodReady]: undefined
	[MethodRequestTheme]: undefined
	[MethodRequestViewport]: undefined
	[MethodRequestWriteAccess]: undefined
	[MethodSetBackgroundColor]: {
		/**
		 * The Mini App background color in #RRGGBB format.
		 */
		color: string
	}
	[MethodSetHeaderColor]:
		| {
				/**
				 * The Mini App header color key. Could be either bg_color or secondary_bg_color.
				 */
				color_key: 'bg_color' | 'secondary_bg_color'
				color?: undefined
		  }
		| {
				/**
				 * Color in HEX format.
				 */
				color: string
				color_key?: undefined
		  }
	[MethodSetBottomBarColor]:
		| {
				/**
				 * The Mini App header color key. Could be either bg_color or secondary_bg_color.
				 */
				color_key: 'bg_color' | 'secondary_bg_color' | 'bottom_bar_bg_color'
				color?: undefined
		  }
		| {
				/**
				 * Color in HEX format.
				 */
				color: string
				color_key?: undefined
		  }
	[MethodSetupBackButton]: {
		/**
		 * Should the Back Button be visible.
		 */
		is_visible: boolean
	}
	[MethodSetupClosingBehavior]: {
		/**
		 * Will user be prompted in case, an application is going to be closed.
		 */
		need_confirmation: boolean
	}
	[MethodSetupMainButton]: {
		/**
		 * Optional. Should the Main Button be displayed.
		 */
		is_visible?: boolean
		/**
		 * Optional. Should the Main Button be enabled.
		 */
		is_active?: boolean
		/**
		 * Optional. Should loader inside the Main Button be displayed. Use this property in case, some operation takes time. This loader will make user notified about it.
		 */
		is_progress_visible?: boolean
		/**
		 * Optional. Text inside the Main Button.
		 */
		text?: string
		/**
		 * Optional. The Main Button background color in #RRGGBB format.
		 */
		color?: string
		/**
		 * Optional. The Main Button text color in #RRGGBB format.
		 */
		text_color?: string
	}
	[MethodSetupSettingsButton]: {
		/**
		 * Should the Settings Button be displayed.
		 */
		is_visible: boolean
	}
	[MethodSwitchInlineQuery]: {
		/**
		 * Text which should be inserted in the input after the current bot name. Max length is 256 symbols.
		 */
		query: string
		/**
		 * List of chat types which could be chosen to send the message. Could be empty list. Values:
		 *
		 * users, bots, groups, channels
		 */
		chat_types: ('users' | 'bots' | 'groups' | 'channels')[]
	}
	[MethodTriggerHapticFeedback]:
		| {
				/**
				 * Type of haptic event. Values:
				 *
				 * impact - when there's a collision involving UI components.
				 */
				type: 'impact'
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
				impact_style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'
		  }
		| {
				/**
				 * Type of haptic event. Values:
				 *
				 * notification - when some action execution has been completed.
				 */
				type: 'notification'
				/**
				 * Required when type is notification. Values:
				 *
				 * error - indicates that a task or action has failed
				 *
				 * success - indicates that a task or action has completed successfully
				 *
				 * warning - indicates that a task or action produced a warning
				 */
				notification_type: 'error' | 'success' | 'warning'
		  }
		| {
				/**
				 * selection_change - when the user changes their selection.
				 */
				type: 'selection_change'
				impact_style?: undefined
				notification_type?: undefined
		  }
	[MethodSetupSwipeBehavior]: {
		allow_vertical_swipe: boolean
	}

	[MethodShareToStory]: {
		media: string
		/**
		 * Text which should be inserted in the input after the current bot name. Max length is 2048 symbols.
		 */
		text?: string
		widget_link?: {
			/**
			 * The URL to be included in the story.
			 */
			url: string
			/**
			 * Optional. The name to be displayed for the widget link, 0-48 characters.
			 */
			name?: string
		}
	}
	[MethodRequestSafeArea]: undefined
	[MethodRequestContentSafeArea]: undefined
	[MethodRequestFullscreen]: {
		is_full: boolean
	}
	[MethodExitFullscreen]: {
		is_full: boolean
	}

	[MethodToggleOrientationLock]: {
		locked: boolean
	}

	[MethodAddToHomeScreen]: undefined
	[MethodCheckHomeScreen]: undefined

	[MethodSendPreparedMessage]: {
		msg_id: number
	}
	[MethodSetEmojiStatus]: {
		custom_emoji_id: string
		/**
		 * Optional. The duration for which the status will remain set, in seconds.
		 */
		duration?: number
	}
	[MethodRequestEmojiStatusAccess]: undefined
	[MethodRequestFileDownload]: {
		/**
		 * The HTTPS URL of the file to be downloaded.
		 */
		url: string
		/**
		 * The suggested name for the downloaded file.
		 */
		file_name: string
	}
	[MethodBiometryRequestAccess]: {
		/**
		 * Optional. The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters.
		 */
		reason?: string
	}
	[MethodBiometryRequestAuth]: {
		/**
		 * Optional. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.
		 */
		reason?: string
	}
	[MethodBiometryUpdateToken]: {
		/**
		 * Token to store. Has max length of 1024 symbols.
		 */
		token: string
	}
	[MethodBiometryOpenSettings]: undefined
}
