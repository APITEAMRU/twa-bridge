"use strict";var e=require("debug");const t="web",s="phone",o="desktop",r=()=>{const e=window.location.hash.slice(1),r=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(r)?s:["tdesktop","macos"].includes(r)?o:t},p="not_supported",a=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s)>=e&&-1!==t.indexOf(r())},n=()=>Math.random().toString(36).substring(3,9),i=e=>{var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e+=""))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var s=parseInt(t[1]),o=parseInt(t[2]),r=parseInt(t[3]);return"#"+((s<16?"0":"")+s.toString(16))+((o<16?"0":"")+o.toString(16))+((r<16?"0":"")+r.toString(16))}return!1},u=()=>a(0,[t,o,s]),d=()=>_()?(D(te),{status:!0}):(N(te,1),{status:p}),_=()=>a(6.4,[s]),c=()=>a(0,[t,o,s]),x=()=>a(0,[s]),g=()=>a(0,[t]),l=()=>a(0,[t]),b="web_app_invoke_custom_method",h=()=>a(6.9,[t,o,s]),w=()=>a(6.1,[t,o,s]),m=()=>a(6.4,[t,o,s]),v=()=>a(6.2,[t,o,s]),S=()=>a(6.4,[s]),f=()=>a(7,[t,o,s]),y=()=>a(6.4,[t,o,s]),P=()=>a(6.9,[t,o,s]),M=()=>a(6.9,[t,o,s]),q=()=>a(0,[t,o,s]),R=()=>a(0,[t,o,s]),k=()=>a(6.9,[t,o,s]),C=()=>a(6.1,[t,o,s]),O=()=>a(6.1,[t,o,s]),E=()=>a(6.1,[t,o,s]),T=()=>a(0,[t,o,s]),I=()=>a(0,[t,o,s]),B=()=>a(6.1,[t,o,s]),W=()=>a(6.7,[t,o,s]),L=()=>a(6.1,[s]);var N=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};var D=(t,s)=>{if(window.TelegramWebviewProxy)window.TelegramWebviewProxy.postEvent(t,JSON.stringify(s));else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:t,eventData:s}));else try{"*",window.parent.postMessage(JSON.stringify({eventType:t,eventData:s}),"*")}catch(t){e("postMessage Iframe",10)}};const Q="clipboard_text_received",A="custom_method_invoked",G="phone_requested",H="popup_closed",J="qr_text_received",V="scan_qr_popup_closed",$="theme_changed",F=((e=new Map)=>({once:(t,s,o=e.get(t),r=(e=>{s(e),o&&o.splice(o.indexOf(s)>>>0,1)}))=>o?o.push(r):e.set(t,[r]),on:(t,s,o=e.get(t))=>o?o.push(s):e.set(t,[s]),off:(t,s,o=e.get(t))=>o&&s?o.splice(o.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,o=e.get(t)||[])=>{for(const e of o)e(s)}}))();(()=>{function e(e,t){e===$&&(t.theme_params=(e=>{"#1c1c1d"==e.bg_color&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");const t=window.location.hash.slice(1),s=new URLSearchParams(t);var o=JSON.parse(s.get("tgWebAppThemeParams")??"");for(var r in e){var p=i(e[r]);"string"==typeof p&&(o[r]=p)}return o})(t.theme_params)),F.emit(e,t),F.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const U=(e,t)=>{F.on(e,t)},j=(e,t)=>{F.off(e,t)},z=(e,t)=>{F.once(e,t)};var K=Object.freeze({__proto__:null,off:j,on:U,once:z});const X="web_app_open_scan_qr_popup",Y="web_app_read_text_from_clipboard",Z="web_app_request_phone",ee="web_app_close",te="web_app_close_scan_qr_popup",se="web_app_data_send",oe="web_app_expand",re="iframe_ready",pe="web_app_open_invoice",ae="web_app_open_link",ne="web_app_open_popup",ie="web_app_open_tg_link",ue="web_app_ready",de="web_app_request_theme",_e="web_app_request_viewport",ce="web_app_request_write_access",xe="web_app_set_background_color",ge="web_app_set_header_color",le="web_app_setup_back_button",be="web_app_setup_closing_behavior",he="web_app_setup_main_button",we="web_app_setup_settings_button",me="web_app_switch_inline_query",ve="web_app_trigger_haptic_feedback";exports.EventBackButtonPressed="back_button_pressed",exports.EventClipboardTextReceived=Q,exports.EventCustomMethodInvoked=A,exports.EventInvoiceClosed="invoice_closed",exports.EventMainButtonPressed="main_button_pressed",exports.EventPhoneRequested=G,exports.EventPopupClosed=H,exports.EventQrTextReceived=J,exports.EventReloadIframe="reload_iframe",exports.EventScanQrPopupClosed=V,exports.EventSetCustomStyle="set_custom_style",exports.EventSettingsButtonPressed="settings_button_pressed",exports.EventThemeChanged=$,exports.EventViewportChanged="viewport_changed",exports.EventWriteAccessRequested="write_access_requested",exports.MethodClose=ee,exports.MethodCloseScanQrPopup=te,exports.MethodDataSend=se,exports.MethodExpand=oe,exports.MethodIframeReady=re,exports.MethodIframeWillReload="iframe_will_reload",exports.MethodInvokeCustomMethod="web_app_invoke_custom_method",exports.MethodOpenInvoice=pe,exports.MethodOpenLink=ae,exports.MethodOpenPopup=ne,exports.MethodOpenScanQrPopup=X,exports.MethodOpenTgLink=ie,exports.MethodReadTextFromClipboard=Y,exports.MethodReady=ue,exports.MethodRequestPhone=Z,exports.MethodRequestTheme=de,exports.MethodRequestViewport=_e,exports.MethodRequestWriteAccess=ce,exports.MethodSetBackgroundColor=xe,exports.MethodSetHeaderColor=ge,exports.MethodSetupBackButton=le,exports.MethodSetupClosingBehavior=be,exports.MethodSetupMainButton=he,exports.MethodSetupSettingsButton=we,exports.MethodSwitchInlineQuery=me,exports.MethodTriggerHapticFeedback=ve,exports.NOT_SUPPORTED=p,exports.TG_DESKTOP=o,exports.TG_PHONE=s,exports.TG_WEB=t,exports.bridgeClose=()=>u()?(D(ee),{status:!0}):(N(ee,1),{status:p}),exports.bridgeCloseScanQrPopup=d,exports.bridgeDataSend=e=>c()?(D(se,e),{status:!0}):(N(se,1),{status:p}),exports.bridgeExpand=()=>x()?(D(oe),{status:!0}):(N(oe,1),{status:p}),exports.bridgeGetInitData=()=>{const e=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppData");if(null===e)return N("getInitData",2),null;const t=new URLSearchParams(e);let s={};return t.forEach(((e,t)=>{if(s[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{s[t]=JSON.parse(e)}catch{}})),s},exports.bridgeIframeReady=e=>g()?(D(re,e),{status:!0}):(N(re,1),{status:p}),exports.bridgeIframeWillReload=()=>l()?(D(re),{status:!0}):(N(re,1),{status:p}),exports.bridgeInvokeCustomMethod=async e=>h()?(void 0===e.req_id&&(e.req_id=n()),D(b,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),j(A,o))};U(A,o)}))):(N(b,1),{status:p}),exports.bridgeOpenInvoice=e=>w()?(D(pe,e),{status:!0}):(N(pe,1),{status:p}),exports.bridgeOpenLink=e=>m()?(D(ae,e),{status:!0}):(N(ae,1),{status:p}),exports.bridgeOpenPopup=async e=>v()?(e.title.length>64&&N(ne,3),e.message.length<1&&N(ne,4),e.message.length>256&&N(ne,5),e.buttons.length<1&&N(ne,6),e.buttons.length>3&&N(ne,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&N(ne,8),D(ne,e),new Promise(((t,s)=>{const o=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),j(H,o)};U(H,o)}))):(N(ne,1),{status:p}),exports.bridgeOpenScanQrPopup=async e=>S()?(D(X,e),new Promise(((t,s)=>{z(J,(s=>{e.is_close&&d(),t({status:!0,data:s})})),z(V,(()=>{t({status:"closed"})}))}))):(N(X,1),{status:p}),exports.bridgeOpenTgLink=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),f()?(D(ie,e),{status:!0}):(N(ie,1),{status:p})),exports.bridgeReadTextFromClipboard=async e=>y()?(void 0===e.req_id&&(e.req_id=n()),D(Y,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),j(Q,o))};U(Q,o)}))):(N(Y,1),{status:p}),exports.bridgeReady=()=>P()?(D(ue),{status:!0}):(N(ue,1),{status:p}),exports.bridgeRequestPhone=async()=>M()?(D(Z),new Promise(((e,t)=>{z(G,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(N(Z,1),{status:p}),exports.bridgeRequestTheme=()=>q()?(D(de),{status:!0}):(N(de,1),{status:p}),exports.bridgeRequestViewport=()=>R()?(D(_e),{status:!0}):(N(_e,1),{status:p}),exports.bridgeRequestWriteAccess=()=>k()?(D(ce),{status:!0}):(N(ce,1),{status:p}),exports.bridgeSessionStorageGet=({key:e})=>{try{return{value:JSON.parse(window.sessionStorage.getItem("__telegram__"+e)??""),status:!0}}catch(e){}return{status:!1}},exports.bridgeSessionStorageSet=({key:e,value:t})=>{try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),{status:!0}}catch(e){}return{status:!1}},exports.bridgeSetBackgroundColor=e=>C()?(D(xe,e),{status:!0}):(N(xe,1),{status:p}),exports.bridgeSetHeaderColor=e=>O()?(D(ge,e),{status:!0}):(N(ge,1),{status:p}),exports.bridgeSetupBackButton=e=>E()?(D(le,e),{status:!0}):(N(le,1),{status:p}),exports.bridgeSetupClosingBehavior=e=>T()?(D(be,e),{status:!0}):(N(be,1),{status:p}),exports.bridgeSetupMainButton=e=>I()?(D(he,e),{status:!0}):(N(he,1),{status:p}),exports.bridgeSetupSettingsButton=e=>B()?(D(we,e),{status:!0}):(N(we,1),{status:p}),exports.bridgeSwitchInlineQuery=e=>W()?(e.query.length>256&&N(me,9),D(me,e),{status:!0}):(N(me,1),{status:p}),exports.bridgeTriggerHapticFeedback=e=>L()?(D(ve,e),{status:!0}):(N(ve,1),{status:p}),exports.debug=N,exports.getPlatform=r,exports.listener=K,exports.sender=D,exports.supportClose=u,exports.supportCloseScanQrPopup=_,exports.supportDataSend=c,exports.supportExpand=x,exports.supportIframeReady=g,exports.supportIframeWillReload=l,exports.supportInvokeCustomMethod=h,exports.supportOpenInvoice=w,exports.supportOpenLink=m,exports.supportOpenPopup=v,exports.supportOpenScanQrPopup=S,exports.supportOpenTgLink=f,exports.supportReadTextFromClipboard=y,exports.supportReady=P,exports.supportRequestPhone=M,exports.supportRequestTheme=q,exports.supportRequestViewport=R,exports.supportRequestWriteAccess=k,exports.supportSessionStorageGet=()=>!0,exports.supportSessionStorageSet=()=>!0,exports.supportSetBackgroundColor=C,exports.supportSetHeaderColor=O,exports.supportSetupBackButton=E,exports.supportSetupClosingBehavior=T,exports.supportSetupMainButton=I,exports.supportSetupSettingsButton=B,exports.supportSwitchInlineQuery=W,exports.supportTriggerHapticFeedback=L;
