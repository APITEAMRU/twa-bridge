import e from"debug";import{createSignal as t,onMount as s,onCleanup as a}from"solid-js";const r=()=>{const[e,r]=t({height:0,is_expanded:!1,is_state_stable:!1}),o=e=>r(e);return s((()=>{We(Ne,o),me(et)})),a((()=>{Ee(Ne,o)})),e},o="web",n="phone",i="desktop",_="not_supported",p=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s)>=e&&-1!==t.indexOf((()=>{const e=window.location.hash.slice(1),t=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(t)?n:["tdesktop","macos"].includes(t)?i:o})())},u=()=>Math.random().toString(36).substring(3,9),d=e=>{var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e+=""))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var s=parseInt(t[1]),a=parseInt(t[2]),r=parseInt(t[3]);return"#"+((s<16?"0":"")+s.toString(16))+((a<16?"0":"")+a.toString(16))+((r<16?"0":"")+r.toString(16))}return!1},c=()=>g()?(me(Ue),{status:!0}):(le(Ue,1),{status:_}),g=()=>p(0,[o,i,n]),b=()=>l()?(me(Ge),{status:!0}):(le(Ge,1),{status:_}),l=()=>p(6.4,[n]),w=e=>m()?(me(Ve,e),{status:!0}):(le(Ve,1),{status:_}),m=()=>p(0,[o,i,n]),h=()=>f()?(me(Qe),{status:!0}):(le(Qe,1),{status:_}),f=()=>p(0,[n]),v=e=>y()?(me(je,e),{status:!0}):(le(je,1),{status:_}),y=()=>p(0,[o]),S=()=>q()?(me(je),{status:!0}):(le(je,1),{status:_}),q=()=>p(0,[o]),x="web_app_invoke_custom_method",k=async e=>P()?(void 0===e.req_id&&(e.req_id=u()),me(x,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),Ee(ve,a))};We(ve,a)}))):(le(x,1),{status:_}),P=()=>p(6.9,[o,i,n]),O=e=>I()?(me(He,e),{status:!0}):(le(He,1),{status:_}),I=()=>p(6.1,[o,i,n]),R=e=>T()?(me(ze,e),{status:!0}):(le(ze,1),{status:_}),T=()=>p(6.4,[o,i,n]),N=async e=>C()?(e.title.length>64&&le(Ke,3),e.message.length<1&&le(Ke,4),e.message.length>256&&le(Ke,5),e.buttons.length<1&&le(Ke,6),e.buttons.length>3&&le(Ke,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&le(Ke,8),me(Ke,e),new Promise(((t,s)=>{const a=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),Ee(xe,a)};We(xe,a)}))):(le(Ke,1),{status:_}),C=()=>p(6.2,[o,i,n]),L=async e=>W()?(me(Be,e),new Promise(((t,s)=>{De(Pe,(s=>{e.is_close&&b(),t({status:!0,data:s})})),De(Oe,(()=>{t({status:"closed"})}))}))):(le(Be,1),{status:_}),W=()=>p(6.4,[n]),E=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),D()?(me(Xe,e),{status:!0}):(le(Xe,1),{status:_})),D=()=>p(7,[o,i,n]),J=async e=>$()?(void 0===e.req_id&&(e.req_id=u()),me(Me,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),Ee(fe,a))};We(fe,a)}))):(le(Me,1),{status:_}),$=()=>p(6.4,[o,i,n]),B=()=>M()?(me(Ye),{status:!0}):(le(Ye,1),{status:_}),M=()=>p(6.9,[o,i,n]),A=async()=>U()?(me(Ae),new Promise(((e,t)=>{De(qe,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(le(Ae,1),{status:_}),U=()=>p(6.9,[o,i,n]),G=()=>V()?(me(Ze),{status:!0}):(le(Ze,1),{status:_}),V=()=>p(0,[o,i,n]),Q=()=>j()?(me(et),{status:!0}):(le(et,1),{status:_}),j=()=>p(0,[o,i,n]),F=()=>H()?(me(tt),{status:!0}):(le(tt,1),{status:_}),H=()=>p(6.9,[o,i,n]),z=e=>K()?(me(st,e),{status:!0}):(le(st,1),{status:_}),K=()=>p(6.1,[o,i,n]),X=e=>Y()?(me(at,e),{status:!0}):(le(at,1),{status:_}),Y=()=>p(6.1,[o,i,n]),Z=e=>ee()?(me(rt,e),{status:!0}):(le(rt,1),{status:_}),ee=()=>p(6.1,[o,i,n]),te=e=>se()?(me(ot,e),{status:!0}):(le(ot,1),{status:_}),se=()=>p(0,[o,i,n]),ae=e=>re()?(me(nt,e),{status:!0}):(le(nt,1),{status:_}),re=()=>p(0,[o,i,n]),oe=e=>ne()?(me(it,e),{status:!0}):(le(it,1),{status:_}),ne=()=>p(6.1,[o,i,n]),ie=e=>_e()?(e.query.length>256&&le(_t,9),me(_t,e),{status:!0}):(le(_t,1),{status:_}),_e=()=>p(6.7,[o,i,n]),pe=e=>ue()?(me(pt,e),{status:!0}):(le(pt,1),{status:_}),ue=()=>p(6.1,[n]),de=({key:e,value:t})=>{try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),{status:!0}}catch(e){}return{status:!1}},ce=()=>!0,ge=({key:e})=>{try{return{value:JSON.parse(window.sessionStorage.getItem("__telegram__"+e)??""),status:!0}}catch(e){}return{status:!1}},be=()=>!0;var le=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};const we=()=>{const e=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppData");if(null===e)return le("getInitData",2),null;const t=new URLSearchParams(e);let s={};return t.forEach(((e,t)=>{if(s[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{s[t]=JSON.parse(e)}catch{}})),s};var me=(t,s)=>{if(window.TelegramWebviewProxy)window.TelegramWebviewProxy.postEvent(t,JSON.stringify(s));else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:t,eventData:s}));else try{"*",window.parent.postMessage(JSON.stringify({eventType:t,eventData:s}),"*")}catch(t){e("postMessage Iframe",10)}};const he="back_button_pressed",fe="clipboard_text_received",ve="custom_method_invoked",ye="invoice_closed",Se="main_button_pressed",qe="phone_requested",xe="popup_closed",ke="reload_iframe",Pe="qr_text_received",Oe="scan_qr_popup_closed",Ie="set_custom_style",Re="settings_button_pressed",Te="theme_changed",Ne="viewport_changed",Ce="write_access_requested",Le=((e=new Map)=>({once:(t,s,a=e.get(t),r=(e=>{s(e),a&&a.splice(a.indexOf(s)>>>0,1)}))=>a?a.push(r):e.set(t,[r]),on:(t,s,a=e.get(t))=>a?a.push(s):e.set(t,[s]),off:(t,s,a=e.get(t))=>a&&s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,a=e.get(t)||[])=>{for(const e of a)e(s)}}))();(()=>{function e(e,t){e===Te&&(t.theme_params=(e=>{"#1c1c1d"==e.bg_color&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");const t=window.location.hash.slice(1),s=new URLSearchParams(t);var a=JSON.parse(s.get("tgWebAppThemeParams")??"");for(var r in e){var o=d(e[r]);"string"==typeof o&&(a[r]=o)}return a})(t.theme_params)),Le.emit(e,t),Le.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const We=(e,t)=>{Le.on(e,t)},Ee=(e,t)=>{Le.off(e,t)},De=(e,t)=>{Le.once(e,t)};var Je=Object.freeze({__proto__:null,off:Ee,on:We,once:De});const $e="web_app_invoke_custom_method",Be="web_app_open_scan_qr_popup",Me="web_app_read_text_from_clipboard",Ae="web_app_request_phone",Ue="web_app_close",Ge="web_app_close_scan_qr_popup",Ve="web_app_data_send",Qe="web_app_expand",je="iframe_ready",Fe="iframe_will_reload",He="web_app_open_invoice",ze="web_app_open_link",Ke="web_app_open_popup",Xe="web_app_open_tg_link",Ye="web_app_ready",Ze="web_app_request_theme",et="web_app_request_viewport",tt="web_app_request_write_access",st="web_app_set_background_color",at="web_app_set_header_color",rt="web_app_setup_back_button",ot="web_app_setup_closing_behavior",nt="web_app_setup_main_button",it="web_app_setup_settings_button",_t="web_app_switch_inline_query",pt="web_app_trigger_haptic_feedback";export{he as EventBackButtonPressed,fe as EventClipboardTextReceived,ve as EventCustomMethodInvoked,ye as EventInvoiceClosed,Se as EventMainButtonPressed,qe as EventPhoneRequested,xe as EventPopupClosed,Pe as EventQrTextReceived,ke as EventReloadIframe,Oe as EventScanQrPopupClosed,Ie as EventSetCustomStyle,Re as EventSettingsButtonPressed,Te as EventThemeChanged,Ne as EventViewportChanged,Ce as EventWriteAccessRequested,Ue as MethodClose,Ge as MethodCloseScanQrPopup,Ve as MethodDataSend,Qe as MethodExpand,je as MethodIframeReady,Fe as MethodIframeWillReload,$e as MethodInvokeCustomMethod,He as MethodOpenInvoice,ze as MethodOpenLink,Ke as MethodOpenPopup,Be as MethodOpenScanQrPopup,Xe as MethodOpenTgLink,Me as MethodReadTextFromClipboard,Ye as MethodReady,Ae as MethodRequestPhone,Ze as MethodRequestTheme,et as MethodRequestViewport,tt as MethodRequestWriteAccess,st as MethodSetBackgroundColor,at as MethodSetHeaderColor,rt as MethodSetupBackButton,ot as MethodSetupClosingBehavior,nt as MethodSetupMainButton,it as MethodSetupSettingsButton,_t as MethodSwitchInlineQuery,pt as MethodTriggerHapticFeedback,_ as NOT_SUPPORTED,i as TG_DESKTOP,n as TG_PHONE,o as TG_WEB,c as bridgeClose,b as bridgeCloseScanQrPopup,w as bridgeDataSend,h as bridgeExpand,we as bridgeGetInitData,v as bridgeIframeReady,S as bridgeIframeWillReload,k as bridgeInvokeCustomMethod,O as bridgeOpenInvoice,R as bridgeOpenLink,N as bridgeOpenPopup,L as bridgeOpenScanQrPopup,E as bridgeOpenTgLink,J as bridgeReadTextFromClipboard,B as bridgeReady,A as bridgeRequestPhone,G as bridgeRequestTheme,Q as bridgeRequestViewport,F as bridgeRequestWriteAccess,ge as bridgeSessionStorageGet,de as bridgeSessionStorageSet,z as bridgeSetBackgroundColor,X as bridgeSetHeaderColor,Z as bridgeSetupBackButton,te as bridgeSetupClosingBehavior,ae as bridgeSetupMainButton,oe as bridgeSetupSettingsButton,ie as bridgeSwitchInlineQuery,pe as bridgeTriggerHapticFeedback,r as createIsViewportChanged,le as debug,Je as listener,me as sender,g as supportClose,l as supportCloseScanQrPopup,m as supportDataSend,f as supportExpand,y as supportIframeReady,q as supportIframeWillReload,P as supportInvokeCustomMethod,I as supportOpenInvoice,T as supportOpenLink,C as supportOpenPopup,W as supportOpenScanQrPopup,D as supportOpenTgLink,$ as supportReadTextFromClipboard,M as supportReady,U as supportRequestPhone,V as supportRequestTheme,j as supportRequestViewport,H as supportRequestWriteAccess,be as supportSessionStorageGet,ce as supportSessionStorageSet,K as supportSetBackgroundColor,Y as supportSetHeaderColor,ee as supportSetupBackButton,se as supportSetupClosingBehavior,re as supportSetupMainButton,ne as supportSetupSettingsButton,_e as supportSwitchInlineQuery,ue as supportTriggerHapticFeedback};
