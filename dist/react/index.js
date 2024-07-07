"use strict";var e=require("debug");const t="web",s="phone",o="desktop",r=()=>{const e=window.location.hash.slice(1),r=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(r)?s:["tdesktop","macos"].includes(r)?o:t},p="not_supported",a=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s)>=e&&-1!==t.indexOf(r())},n=()=>Math.random().toString(36).substring(3,9),i=e=>{var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e+=""))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var s=parseInt(t[1]),o=parseInt(t[2]),r=parseInt(t[3]);return"#"+((s<16?"0":"")+s.toString(16))+((o<16?"0":"")+o.toString(16))+((r<16?"0":"")+r.toString(16))}return!1},u=()=>a(0,[t,o,s]),d=()=>_()?(Q(se),{status:!0}):(D(se,1),{status:p}),_=()=>a(6.4,[s]),c=()=>a(0,[t,o,s]),x=()=>a(0,[s]),g=()=>a(0,[t]),l=()=>a(0,[t]),b="web_app_invoke_custom_method",h=()=>a(6.9,[t,o,s]),w=()=>a(6.1,[t,o,s]),m=()=>a(6.4,[t,o,s]),v=()=>a(6.2,[t,o,s]),S=()=>a(6.4,[s]),f=()=>a(7,[t,o,s]),y=()=>a(6.4,[t,o,s]),M=()=>a(6.9,[t,o,s]),P=()=>a(6.9,[t,o,s]),q=()=>a(0,[t,o,s]),R=()=>a(0,[t,o,s]),k=()=>a(6.9,[t,o,s]),C=()=>a(6.1,[t,o,s]),O=()=>a(6.1,[t,o,s]),E=()=>a(6.1,[t,o,s]),T=()=>a(0,[t,o,s]),B=()=>a(0,[t,o,s]),I=()=>a(6.1,[t,o,s]),W=()=>a(6.7,[t,o,s]),L=()=>a(6.1,[s]),N=()=>a(7.7,[t,o,s]);var D=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};var Q=(t,s)=>{if(window.TelegramWebviewProxy)window.TelegramWebviewProxy.postEvent(t,JSON.stringify(s));else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:t,eventData:s}));else try{"*",window.parent.postMessage(JSON.stringify({eventType:t,eventData:s}),"*")}catch(t){e("postMessage Iframe",10)}};const A="clipboard_text_received",G="custom_method_invoked",H="phone_requested",J="popup_closed",V="qr_text_received",$="scan_qr_popup_closed",F="theme_changed",U=((e=new Map)=>({once:(t,s,o=e.get(t),r=(e=>{s(e),o&&o.splice(o.indexOf(s)>>>0,1)}))=>o?o.push(r):e.set(t,[r]),on:(t,s,o=e.get(t))=>o?o.push(s):e.set(t,[s]),off:(t,s,o=e.get(t))=>o&&s?o.splice(o.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,o=e.get(t)||[])=>{for(const e of o)e(s)}}))();(()=>{function e(e,t){e===F&&(t.theme_params=(e=>{"#1c1c1d"==e.bg_color&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");const t=window.location.hash.slice(1),s=new URLSearchParams(t);var o=JSON.parse(s.get("tgWebAppThemeParams")??"");for(var r in e){var p=i(e[r]);"string"==typeof p&&(o[r]=p)}return o})(t.theme_params)),U.emit(e,t),U.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const j=(e,t)=>{U.on(e,t)},z=(e,t)=>{U.off(e,t)},K=(e,t)=>{U.once(e,t)};var X=Object.freeze({__proto__:null,off:z,on:j,once:K});const Y="web_app_open_scan_qr_popup",Z="web_app_read_text_from_clipboard",ee="web_app_request_phone",te="web_app_close",se="web_app_close_scan_qr_popup",oe="web_app_data_send",re="web_app_expand",pe="iframe_ready",ae="web_app_open_invoice",ne="web_app_open_link",ie="web_app_open_popup",ue="web_app_open_tg_link",de="web_app_ready",_e="web_app_request_theme",ce="web_app_request_viewport",xe="web_app_request_write_access",ge="web_app_set_background_color",le="web_app_set_header_color",be="web_app_setup_back_button",he="web_app_setup_closing_behavior",we="web_app_setup_main_button",me="web_app_setup_settings_button",ve="web_app_switch_inline_query",Se="web_app_trigger_haptic_feedback",fe="web_app_setup_swipe_behavior";exports.EventBackButtonPressed="back_button_pressed",exports.EventClipboardTextReceived=A,exports.EventCustomMethodInvoked=G,exports.EventInvoiceClosed="invoice_closed",exports.EventMainButtonPressed="main_button_pressed",exports.EventPhoneRequested=H,exports.EventPopupClosed=J,exports.EventQrTextReceived=V,exports.EventReloadIframe="reload_iframe",exports.EventScanQrPopupClosed=$,exports.EventSetCustomStyle="set_custom_style",exports.EventSettingsButtonPressed="settings_button_pressed",exports.EventThemeChanged=F,exports.EventViewportChanged="viewport_changed",exports.EventWriteAccessRequested="write_access_requested",exports.MethodClose=te,exports.MethodCloseScanQrPopup=se,exports.MethodDataSend=oe,exports.MethodExpand=re,exports.MethodIframeReady=pe,exports.MethodIframeWillReload="iframe_will_reload",exports.MethodInvokeCustomMethod="web_app_invoke_custom_method",exports.MethodOpenInvoice=ae,exports.MethodOpenLink=ne,exports.MethodOpenPopup=ie,exports.MethodOpenScanQrPopup=Y,exports.MethodOpenTgLink=ue,exports.MethodReadTextFromClipboard=Z,exports.MethodReady=de,exports.MethodRequestPhone=ee,exports.MethodRequestTheme=_e,exports.MethodRequestViewport=ce,exports.MethodRequestWriteAccess=xe,exports.MethodSetBackgroundColor=ge,exports.MethodSetHeaderColor=le,exports.MethodSetupBackButton=be,exports.MethodSetupClosingBehavior=he,exports.MethodSetupMainButton=we,exports.MethodSetupSettingsButton=me,exports.MethodSetupSwipeBehavior=fe,exports.MethodSwitchInlineQuery=ve,exports.MethodTriggerHapticFeedback=Se,exports.NOT_SUPPORTED=p,exports.TG_DESKTOP=o,exports.TG_PHONE=s,exports.TG_WEB=t,exports.bridgeClose=()=>u()?(Q(te),{status:!0}):(D(te,1),{status:p}),exports.bridgeCloseScanQrPopup=d,exports.bridgeDataSend=e=>c()?(Q(oe,e),{status:!0}):(D(oe,1),{status:p}),exports.bridgeExpand=()=>x()?(Q(re),{status:!0}):(D(re,1),{status:p}),exports.bridgeGetInitData=()=>{const e=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppData");if(null===e)return D("getInitData",2),null;const t=new URLSearchParams(e);let s={};return t.forEach(((e,t)=>{if(s[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{s[t]=JSON.parse(e)}catch{}})),s},exports.bridgeIframeReady=e=>g()?(Q(pe,e),{status:!0}):(D(pe,1),{status:p}),exports.bridgeIframeWillReload=()=>l()?(Q(pe),{status:!0}):(D(pe,1),{status:p}),exports.bridgeInvokeCustomMethod=async e=>h()?(void 0===e.req_id&&(e.req_id=n()),Q(b,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),z(G,o))};j(G,o)}))):(D(b,1),{status:p}),exports.bridgeOpenInvoice=e=>w()?(Q(ae,e),{status:!0}):(D(ae,1),{status:p}),exports.bridgeOpenLink=e=>m()?(Q(ne,e),{status:!0}):(D(ne,1),{status:p}),exports.bridgeOpenPopup=async e=>v()?(e.title.length>64&&D(ie,3),e.message.length<1&&D(ie,4),e.message.length>256&&D(ie,5),e.buttons.length<1&&D(ie,6),e.buttons.length>3&&D(ie,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&D(ie,8),Q(ie,e),new Promise(((t,s)=>{const o=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),z(J,o)};j(J,o)}))):(D(ie,1),{status:p}),exports.bridgeOpenScanQrPopup=async e=>S()?(Q(Y,e),new Promise(((t,s)=>{K(V,(s=>{e.is_close&&d(),t({status:!0,data:s})})),K($,(()=>{t({status:"closed"})}))}))):(D(Y,1),{status:p}),exports.bridgeOpenTgLink=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),f()?(Q(ue,e),{status:!0}):(D(ue,1),{status:p})),exports.bridgeReadTextFromClipboard=async e=>y()?(void 0===e.req_id&&(e.req_id=n()),Q(Z,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),z(A,o))};j(A,o)}))):(D(Z,1),{status:p}),exports.bridgeReady=()=>M()?(Q(de),{status:!0}):(D(de,1),{status:p}),exports.bridgeRequestPhone=async()=>P()?(Q(ee),new Promise(((e,t)=>{K(H,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(D(ee,1),{status:p}),exports.bridgeRequestTheme=()=>q()?(Q(_e),{status:!0}):(D(_e,1),{status:p}),exports.bridgeRequestViewport=()=>R()?(Q(ce),{status:!0}):(D(ce,1),{status:p}),exports.bridgeRequestWriteAccess=()=>k()?(Q(xe),{status:!0}):(D(xe,1),{status:p}),exports.bridgeSessionStorageGet=({key:e})=>{try{return{value:JSON.parse(window.sessionStorage.getItem("__telegram__"+e)??""),status:!0}}catch(e){}return{status:!1}},exports.bridgeSessionStorageSet=({key:e,value:t})=>{try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),{status:!0}}catch(e){}return{status:!1}},exports.bridgeSetBackgroundColor=e=>C()?(Q(ge,e),{status:!0}):(D(ge,1),{status:p}),exports.bridgeSetHeaderColor=e=>O()?(Q(le,e),{status:!0}):(D(le,1),{status:p}),exports.bridgeSetupBackButton=e=>E()?(Q(be,e),{status:!0}):(D(be,1),{status:p}),exports.bridgeSetupClosingBehavior=e=>T()?(Q(he,e),{status:!0}):(D(he,1),{status:p}),exports.bridgeSetupMainButton=e=>B()?(Q(we,e),{status:!0}):(D(we,1),{status:p}),exports.bridgeSetupSettingsButton=e=>I()?(Q(me,e),{status:!0}):(D(me,1),{status:p}),exports.bridgeSetupSwipeBehavior=e=>N()?(Q(fe,e),{status:!0}):(D(fe,1),{status:p}),exports.bridgeSwitchInlineQuery=e=>W()?(e.query.length>256&&D(ve,9),Q(ve,e),{status:!0}):(D(ve,1),{status:p}),exports.bridgeTriggerHapticFeedback=e=>L()?(Q(Se,e),{status:!0}):(D(Se,1),{status:p}),exports.debug=D,exports.getPlatform=r,exports.listener=X,exports.sender=Q,exports.supportClose=u,exports.supportCloseScanQrPopup=_,exports.supportDataSend=c,exports.supportExpand=x,exports.supportIframeReady=g,exports.supportIframeWillReload=l,exports.supportInvokeCustomMethod=h,exports.supportOpenInvoice=w,exports.supportOpenLink=m,exports.supportOpenPopup=v,exports.supportOpenScanQrPopup=S,exports.supportOpenTgLink=f,exports.supportReadTextFromClipboard=y,exports.supportReady=M,exports.supportRequestPhone=P,exports.supportRequestTheme=q,exports.supportRequestViewport=R,exports.supportRequestWriteAccess=k,exports.supportSessionStorageGet=()=>!0,exports.supportSessionStorageSet=()=>!0,exports.supportSetBackgroundColor=C,exports.supportSetHeaderColor=O,exports.supportSetupBackButton=E,exports.supportSetupClosingBehavior=T,exports.supportSetupMainButton=B,exports.supportSetupSettingsButton=I,exports.supportSetupSwipeBehavior=N,exports.supportSwitchInlineQuery=W,exports.supportTriggerHapticFeedback=L;
