"use strict";var e=require("solid-js"),t=require("solid-js/store");const s="web",o="phone",r="desktop",p=()=>{const e=window.location.hash.slice(1),t=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(t)?o:["tdesktop","macos"].includes(t)?r:s},a="not_supported",n=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s?.replace(".",""))>=Number(String(e)?.replace(".",""))&&-1!==t.indexOf(p())},i=()=>Math.random().toString(36).substring(3,9),u=e=>{var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e+=""))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var s=parseInt(t[1]),o=parseInt(t[2]),r=parseInt(t[3]);return"#"+((s<16?"0":"")+s.toString(16))+((o<16?"0":"")+o.toString(16))+((r<16?"0":"")+r.toString(16))}return!1},d=e=>{const t=window.location.hash.slice(1),s=new URLSearchParams(t),o=JSON.parse(s.get("tgWebAppThemeParams")??""),r=e||o;for(var p of Object.keys(r)){var a=u(r[p]);"string"==typeof a&&(r[p]=a)}return"#1c1c1d"==r?.bg_color&&r?.bg_color==r?.secondary_bg_color&&(r.secondary_bg_color="#2c2c2e"),r},_=e=>c()?(le(ve,e),{status:!0}):(xe(ve,1),{status:a}),c=()=>n(0,[s,r,o]),x=e=>g()?(le(Se,e),{status:!0}):(xe(Se,1),{status:a}),g=()=>n(6.4,[o]),l=e=>h()?(le(fe,e),{status:!0}):(xe(fe,1),{status:a}),h=()=>n(0,[s,r,o]),b=e=>w()?(le(ye,e),{status:!0}):(xe(ye,1),{status:a}),w=()=>n(0,[o]),m=e=>v()?(le(Pe,e),{status:!0}):(xe(Pe,1),{status:a}),v=()=>n(0,[s]),S=()=>f()?(le(Pe),{status:!0}):(xe(Pe,1),{status:a}),f=()=>n(0,[s]),y=async e=>P()?(void 0===e.req_id&&(e.req_id=i()),le(he,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),et(Ue,o))};Ze(Ue,o)}))):(xe(he,1),{status:a}),P=()=>n(6.9,[s,r,o]),M=e=>C()?(le(Ce,e),{status:!0}):(xe(Ce,1),{status:a}),C=()=>n(6.1,[s,r,o]),q=e=>R()?(le(qe,e),{status:!0}):(xe(qe,1),{status:a}),R=()=>n(6.4,[s,r,o]),k=async e=>B()?(e.title.length>64&&xe(Re,3),e.message.length<1&&xe(Re,4),e.message.length>256&&xe(Re,5),e.buttons.length<1&&xe(Re,6),e.buttons.length>3&&xe(Re,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&xe(Re,8),le(Re,e),new Promise(((t,s)=>{const o=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),et(je,o)};Ze(je,o)}))):(xe(Re,1),{status:a}),B=()=>n(6.2,[s,r,o]),O=async e=>T()?(le(be,e),new Promise(((t,s)=>{tt(Fe,(s=>{e.is_close&&x(),t({status:!0,data:s})})),tt(ze,(()=>{t({status:"closed"})}))}))):(xe(be,1),{status:a}),T=()=>n(6.4,[o]),E=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),I()?(le(ke,e),{status:!0}):(xe(ke,1),{status:a})),I=()=>n(7,[s,r,o]),W=async e=>L()?(e||(e={req_id:void 0}),void 0===e.req_id&&(e.req_id=i()),le(we,e),new Promise(((t,s)=>{const o=s=>{s.req_id===e?.req_id&&(t({status:!0,data:s}),et(Je,o))};Ze(Je,o)}))):(xe(we,1),{status:a}),L=()=>n(6.4,[s,r,o]),D=e=>N()?(le(Be,e),{status:!0}):(xe(Be,1),{status:a}),N=()=>n(6.9,[s,r,o]),A=async()=>Q()?(le(me),new Promise(((e,t)=>{tt($e,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(xe(me,1),{status:a}),Q=()=>n(6.9,[s,r,o]),G=e=>H()?(le(Oe,e),{status:!0}):(xe(Oe,1),{status:a}),H=()=>n(0,[s,r,o]),V=e=>J()?(le(Te,e),{status:!0}):(xe(Te,1),{status:a}),J=()=>n(0,[s,r,o]),U=()=>$()?(le(Ee),{status:!0}):(xe(Ee,1),{status:a}),$=()=>n(6.9,[s,r,o]),j=e=>F()?(le(Ie,e),{status:!0}):(xe(Ie,1),{status:a}),F=()=>n(6.1,[s,r,o]),z=e=>K()?(le(We,e),{status:!0}):(xe(We,1),{status:a}),K=()=>n(6.1,[s,r,o]),X=e=>Y()?(le(Le,{color:e?.color||e?.color_key}),{status:!0}):(xe(Le,1),{status:a}),Y=()=>n(710,[s,r,o]),Z=e=>ee()?(le(De,e),{status:!0}):(xe(De,1),{status:a}),ee=()=>n(6.1,[s,r,o]),te=e=>se()?(le(Ne,e),{status:!0}):(xe(Ne,1),{status:a}),se=()=>n(0,[s,r,o]),oe=e=>re()?(le(Ae,e),{status:!0}):(xe(Ae,1),{status:a}),re=()=>n(0,[s,r,o]),pe=e=>ae()?(le(Qe,e),{status:!0}):(xe(Qe,1),{status:a}),ae=()=>n(6.1,[s,r,o]),ne=e=>ie()?(e.query.length>256&&xe(Ge,9),le(Ge,e),{status:!0}):(xe(Ge,1),{status:a}),ie=()=>n(6.7,[s,r,o]),ue=e=>de()?(le(He,e),{status:!0}):(xe(He,1),{status:a}),de=()=>n(6.1,[o]),_e=e=>ce()?(le(Ve,e),{status:!0}):(xe(Ve,1),{status:a}),ce=()=>n(7.7,[s,r,o]);var xe=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};const ge=()=>{const e=window.location.hash.slice(1),t=new URLSearchParams(e).get("tgWebAppData");if(!t)return void xe("getInitData",2);const s=new URLSearchParams(t);let o={};return s.forEach(((e,t)=>{if(o[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{o[t]=JSON.parse(e)}catch{}})),o};var le=(e,t)=>{if(window.TelegramWebviewProxy)window.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:e,eventData:t}));else try{"*",window.parent.postMessage(JSON.stringify({eventType:e,eventData:t}),"*")}catch(e){xe("postMessage Iframe",10)}};const he="web_app_invoke_custom_method",be="web_app_open_scan_qr_popup",we="web_app_read_text_from_clipboard",me="web_app_request_phone",ve="web_app_close",Se="web_app_close_scan_qr_popup",fe="web_app_data_send",ye="web_app_expand",Pe="iframe_ready",Me="iframe_will_reload",Ce="web_app_open_invoice",qe="web_app_open_link",Re="web_app_open_popup",ke="web_app_open_tg_link",Be="web_app_ready",Oe="web_app_request_theme",Te="web_app_request_viewport",Ee="web_app_request_write_access",Ie="web_app_set_background_color",We="web_app_set_header_color",Le="web_app_set_bottom_bar_color",De="web_app_setup_back_button",Ne="web_app_setup_closing_behavior",Ae="web_app_setup_main_button",Qe="web_app_setup_settings_button",Ge="web_app_switch_inline_query",He="web_app_trigger_haptic_feedback",Ve="web_app_setup_swipe_behavior";const Je="clipboard_text_received",Ue="custom_method_invoked",$e="phone_requested",je="popup_closed",Fe="qr_text_received",ze="scan_qr_popup_closed",Ke="theme_changed",Xe="viewport_changed",Ye=((e=new Map)=>({once:(t,s,o=e.get(t),r=(e=>{s(e),o&&o.splice(o.indexOf(s)>>>0,1)}))=>o?o.push(r):e.set(t,[r]),on:(t,s,o=e.get(t))=>o?o.push(s):e.set(t,[s]),off:(t,s,o=e.get(t))=>o&&s?o.splice(o.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,o=e.get(t)||[])=>{for(const e of o)e(s)}}))();(()=>{function e(e,t){e===Ke&&(t.theme_params=d(t.theme_params)),Ye.emit(e,t),Ye.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const Ze=(e,t)=>{Ye.on(e,t)},et=(e,t)=>{Ye.off(e,t)},tt=(e,t)=>{Ye.once(e,t)};var st=Object.freeze({__proto__:null,off:et,on:Ze,once:tt});const ot=e.createContext({viewport:void 0,theme:void 0,init:void 0});exports.ContextTwa=ot,exports.EventBackButtonPressed="back_button_pressed",exports.EventClipboardTextReceived=Je,exports.EventCustomMethodInvoked=Ue,exports.EventInvoiceClosed="invoice_closed",exports.EventMainButtonPressed="main_button_pressed",exports.EventPhoneRequested=$e,exports.EventPopupClosed=je,exports.EventQrTextReceived=Fe,exports.EventReloadIframe="reload_iframe",exports.EventScanQrPopupClosed=ze,exports.EventSetCustomStyle="set_custom_style",exports.EventSettingsButtonPressed="settings_button_pressed",exports.EventThemeChanged=Ke,exports.EventViewportChanged=Xe,exports.EventWriteAccessRequested="write_access_requested",exports.MethodClose=ve,exports.MethodCloseScanQrPopup=Se,exports.MethodDataSend=fe,exports.MethodExpand=ye,exports.MethodIframeReady=Pe,exports.MethodIframeWillReload=Me,exports.MethodInvokeCustomMethod=he,exports.MethodOpenInvoice=Ce,exports.MethodOpenLink=qe,exports.MethodOpenPopup=Re,exports.MethodOpenScanQrPopup=be,exports.MethodOpenTgLink=ke,exports.MethodReadTextFromClipboard=we,exports.MethodReady=Be,exports.MethodRequestPhone=me,exports.MethodRequestTheme=Oe,exports.MethodRequestViewport=Te,exports.MethodRequestWriteAccess=Ee,exports.MethodSetBackgroundColor=Ie,exports.MethodSetBottomBarColor=Le,exports.MethodSetHeaderColor=We,exports.MethodSetupBackButton=De,exports.MethodSetupClosingBehavior=Ne,exports.MethodSetupMainButton=Ae,exports.MethodSetupSettingsButton=Qe,exports.MethodSetupSwipeBehavior=Ve,exports.MethodSwitchInlineQuery=Ge,exports.MethodTriggerHapticFeedback=He,exports.NOT_SUPPORTED=a,exports.ProviderTWA=s=>{const[o,r]=t.createStore({viewport:void 0,theme:void 0,init:void 0});return e.createEffect((()=>{const t=()=>{r("init",ge())};t();const s=e=>{t(),r("viewport",{...e,safe_area_bottom:e.is_expanded&&e.is_state_stable?window.outerHeight-e.height:0})};Ze(Xe,s),V();const o=e=>{t(),r("theme",e)};return Ze(Ke,o),V(),e.onCleanup((()=>{et(Xe,s),et(Ke,o)})),()=>{et(Xe,s),et(Ke,o)}})),ot.Provider({value:o,children:s.children})},exports.TG_DESKTOP=r,exports.TG_PHONE=o,exports.TG_WEB=s,exports.bridgeClose=_,exports.bridgeCloseScanQrPopup=x,exports.bridgeDataSend=l,exports.bridgeExpand=b,exports.bridgeGetInitData=ge,exports.bridgeGetThemeParams=d,exports.bridgeIframeReady=m,exports.bridgeIframeWillReload=S,exports.bridgeInvokeCustomMethod=y,exports.bridgeOpenInvoice=M,exports.bridgeOpenLink=q,exports.bridgeOpenPopup=k,exports.bridgeOpenScanQrPopup=O,exports.bridgeOpenTgLink=E,exports.bridgeReadTextFromClipboard=W,exports.bridgeReady=D,exports.bridgeRequestPhone=A,exports.bridgeRequestTheme=G,exports.bridgeRequestViewport=V,exports.bridgeRequestWriteAccess=U,exports.bridgeSend=le,exports.bridgeSessionStorageGet=({key:e})=>{try{return{is_json:!0,value:JSON.parse(window.sessionStorage.getItem("__telegram__"+e)??""),status:!0}}catch(t){return{is_json:!1,value:window.sessionStorage.getItem("__telegram__"+e)??"",status:!0}}},exports.bridgeSessionStorageSet=({key:e,value:t})=>{try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),{status:!0}}catch(s){return window.sessionStorage.setItem("__telegram__"+e,t),{status:!0}}},exports.bridgeSetBackgroundColor=j,exports.bridgeSetBottomBarColor=X,exports.bridgeSetHeaderColor=z,exports.bridgeSetupBackButton=Z,exports.bridgeSetupClosingBehavior=te,exports.bridgeSetupMainButton=oe,exports.bridgeSetupSettingsButton=pe,exports.bridgeSetupSwipeBehavior=_e,exports.bridgeSwitchInlineQuery=ne,exports.bridgeTriggerHapticFeedback=ue,exports.createIsViewportChanged=()=>{const[t,s]=e.createSignal({height:0,is_expanded:!1,is_state_stable:!1}),o=e=>s(e);return e.onMount((()=>{Ze(Xe,o),le(Te)})),e.onCleanup((()=>{et(Xe,o)})),t},exports.debug=xe,exports.getAppData=()=>{const e=window.location.hash.slice(1);return new URLSearchParams(e).get("tgWebAppData")},exports.getPlatform=p,exports.listener=st,exports.sender=le,exports.supportClose=c,exports.supportCloseScanQrPopup=g,exports.supportDataSend=h,exports.supportExpand=w,exports.supportIframeReady=v,exports.supportIframeWillReload=f,exports.supportInvokeCustomMethod=P,exports.supportOpenInvoice=C,exports.supportOpenLink=R,exports.supportOpenPopup=B,exports.supportOpenScanQrPopup=T,exports.supportOpenTgLink=I,exports.supportReadTextFromClipboard=L,exports.supportReady=N,exports.supportRequestPhone=Q,exports.supportRequestTheme=H,exports.supportRequestViewport=J,exports.supportRequestWriteAccess=$,exports.supportSessionStorageGet=()=>!0,exports.supportSessionStorageSet=()=>!0,exports.supportSetBackgroundColor=F,exports.supportSetBottomBarColor=Y,exports.supportSetHeaderColor=K,exports.supportSetupBackButton=ee,exports.supportSetupClosingBehavior=se,exports.supportSetupMainButton=re,exports.supportSetupSettingsButton=ae,exports.supportSetupSwipeBehavior=ce,exports.supportSwitchInlineQuery=ie,exports.supportTriggerHapticFeedback=de;
