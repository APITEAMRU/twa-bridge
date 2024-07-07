import e from"debug";import{createSignal as t,onMount as s,onCleanup as a}from"solid-js";const r=()=>{const[e,r]=t({height:0,is_expanded:!1,is_state_stable:!1}),o=e=>r(e);return s((()=>{De(We,o),ve(at)})),a((()=>{Je(We,o)})),e},o="web",n="phone",i="desktop",_=()=>{const e=window.location.hash.slice(1),t=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(t)?n:["tdesktop","macos"].includes(t)?i:o},p="not_supported",u=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s)>=e&&-1!==t.indexOf(_())},d=()=>Math.random().toString(36).substring(3,9),c=e=>{var t;if(t=/^\s*#([0-9a-f]{6})\s*$/i.exec(e+=""))return"#"+t[1].toLowerCase();if(t=/^\s*#([0-9a-f])([0-9a-f])([0-9a-f])\s*$/i.exec(e))return("#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]).toLowerCase();if(t=/^\s*rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+\.{0,1}\d*))?\)\s*$/.exec(e)){var s=parseInt(t[1]),a=parseInt(t[2]),r=parseInt(t[3]);return"#"+((s<16?"0":"")+s.toString(16))+((a<16?"0":"")+a.toString(16))+((r<16?"0":"")+r.toString(16))}return!1},g=()=>b()?(ve(Qe),{status:!0}):(he(Qe,1),{status:p}),b=()=>u(0,[o,i,n]),l=()=>w()?(ve(je),{status:!0}):(he(je,1),{status:p}),w=()=>u(6.4,[n]),m=e=>h()?(ve(Fe,e),{status:!0}):(he(Fe,1),{status:p}),h=()=>u(0,[o,i,n]),f=()=>v()?(ve(He),{status:!0}):(he(He,1),{status:p}),v=()=>u(0,[n]),S=e=>y()?(ve(ze,e),{status:!0}):(he(ze,1),{status:p}),y=()=>u(0,[o]),q=()=>x()?(ve(ze),{status:!0}):(he(ze,1),{status:p}),x=()=>u(0,[o]),k="web_app_invoke_custom_method",P=async e=>O()?(void 0===e.req_id&&(e.req_id=d()),ve(k,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),Je(qe,a))};De(qe,a)}))):(he(k,1),{status:p}),O=()=>u(6.9,[o,i,n]),I=e=>R()?(ve(Xe,e),{status:!0}):(he(Xe,1),{status:p}),R=()=>u(6.1,[o,i,n]),T=e=>N()?(ve(Ye,e),{status:!0}):(he(Ye,1),{status:p}),N=()=>u(6.4,[o,i,n]),C=async e=>L()?(e.title.length>64&&he(Ze,3),e.message.length<1&&he(Ze,4),e.message.length>256&&he(Ze,5),e.buttons.length<1&&he(Ze,6),e.buttons.length>3&&he(Ze,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&he(Ze,8),ve(Ze,e),new Promise(((t,s)=>{const a=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),Je(Oe,a)};De(Oe,a)}))):(he(Ze,1),{status:p}),L=()=>u(6.2,[o,i,n]),W=async e=>E()?(ve(Ue,e),new Promise(((t,s)=>{$e(Re,(s=>{e.is_close&&l(),t({status:!0,data:s})})),$e(Te,(()=>{t({status:"closed"})}))}))):(he(Ue,1),{status:p}),E=()=>u(6.4,[n]),B=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),D()?(ve(et,e),{status:!0}):(he(et,1),{status:p})),D=()=>u(7,[o,i,n]),J=async e=>$()?(void 0===e.req_id&&(e.req_id=d()),ve(Ge,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),Je(ye,a))};De(ye,a)}))):(he(Ge,1),{status:p}),$=()=>u(6.4,[o,i,n]),M=()=>A()?(ve(tt),{status:!0}):(he(tt,1),{status:p}),A=()=>u(6.9,[o,i,n]),U=async()=>G()?(ve(Ve),new Promise(((e,t)=>{$e(Pe,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(he(Ve,1),{status:p}),G=()=>u(6.9,[o,i,n]),V=()=>Q()?(ve(st),{status:!0}):(he(st,1),{status:p}),Q=()=>u(0,[o,i,n]),j=()=>F()?(ve(at),{status:!0}):(he(at,1),{status:p}),F=()=>u(0,[o,i,n]),H=()=>z()?(ve(rt),{status:!0}):(he(rt,1),{status:p}),z=()=>u(6.9,[o,i,n]),K=e=>X()?(ve(ot,e),{status:!0}):(he(ot,1),{status:p}),X=()=>u(6.1,[o,i,n]),Y=e=>Z()?(ve(nt,e),{status:!0}):(he(nt,1),{status:p}),Z=()=>u(6.1,[o,i,n]),ee=e=>te()?(ve(it,e),{status:!0}):(he(it,1),{status:p}),te=()=>u(6.1,[o,i,n]),se=e=>ae()?(ve(_t,e),{status:!0}):(he(_t,1),{status:p}),ae=()=>u(0,[o,i,n]),re=e=>oe()?(ve(pt,e),{status:!0}):(he(pt,1),{status:p}),oe=()=>u(0,[o,i,n]),ne=e=>ie()?(ve(ut,e),{status:!0}):(he(ut,1),{status:p}),ie=()=>u(6.1,[o,i,n]),_e=e=>pe()?(e.query.length>256&&he(dt,9),ve(dt,e),{status:!0}):(he(dt,1),{status:p}),pe=()=>u(6.7,[o,i,n]),ue=e=>de()?(ve(ct,e),{status:!0}):(he(ct,1),{status:p}),de=()=>u(6.1,[n]),ce=({key:e,value:t})=>{try{return window.sessionStorage.setItem("__telegram__"+e,JSON.stringify(t)),{status:!0}}catch(e){}return{status:!1}},ge=()=>!0,be=({key:e})=>{try{return{value:JSON.parse(window.sessionStorage.getItem("__telegram__"+e)??""),status:!0}}catch(e){}return{status:!1}},le=()=>!0,we=e=>me()?(ve(gt,e),{status:!0}):(he(gt,1),{status:p}),me=()=>u(7.7,[o,i,n]);var he=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};const fe=()=>{const e=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppData");if(null===e)return he("getInitData",2),null;const t=new URLSearchParams(e);let s={};return t.forEach(((e,t)=>{if(s[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{s[t]=JSON.parse(e)}catch{}})),s};var ve=(t,s)=>{if(window.TelegramWebviewProxy)window.TelegramWebviewProxy.postEvent(t,JSON.stringify(s));else if(window.external&&"notify"in window.external)window.external.notify(JSON.stringify({eventType:t,eventData:s}));else try{"*",window.parent.postMessage(JSON.stringify({eventType:t,eventData:s}),"*")}catch(t){e("postMessage Iframe",10)}};const Se="back_button_pressed",ye="clipboard_text_received",qe="custom_method_invoked",xe="invoice_closed",ke="main_button_pressed",Pe="phone_requested",Oe="popup_closed",Ie="reload_iframe",Re="qr_text_received",Te="scan_qr_popup_closed",Ne="set_custom_style",Ce="settings_button_pressed",Le="theme_changed",We="viewport_changed",Ee="write_access_requested",Be=((e=new Map)=>({once:(t,s,a=e.get(t),r=(e=>{s(e),a&&a.splice(a.indexOf(s)>>>0,1)}))=>a?a.push(r):e.set(t,[r]),on:(t,s,a=e.get(t))=>a?a.push(s):e.set(t,[s]),off:(t,s,a=e.get(t))=>a&&s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,a=e.get(t)||[])=>{for(const e of a)e(s)}}))();(()=>{function e(e,t){e===Le&&(t.theme_params=(e=>{"#1c1c1d"==e.bg_color&&e.bg_color==e.secondary_bg_color&&(e.secondary_bg_color="#2c2c2e");const t=window.location.hash.slice(1),s=new URLSearchParams(t);var a=JSON.parse(s.get("tgWebAppThemeParams")??"");for(var r in e){var o=c(e[r]);"string"==typeof o&&(a[r]=o)}return a})(t.theme_params)),Be.emit(e,t),Be.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const De=(e,t)=>{Be.on(e,t)},Je=(e,t)=>{Be.off(e,t)},$e=(e,t)=>{Be.once(e,t)};var Me=Object.freeze({__proto__:null,off:Je,on:De,once:$e});const Ae="web_app_invoke_custom_method",Ue="web_app_open_scan_qr_popup",Ge="web_app_read_text_from_clipboard",Ve="web_app_request_phone",Qe="web_app_close",je="web_app_close_scan_qr_popup",Fe="web_app_data_send",He="web_app_expand",ze="iframe_ready",Ke="iframe_will_reload",Xe="web_app_open_invoice",Ye="web_app_open_link",Ze="web_app_open_popup",et="web_app_open_tg_link",tt="web_app_ready",st="web_app_request_theme",at="web_app_request_viewport",rt="web_app_request_write_access",ot="web_app_set_background_color",nt="web_app_set_header_color",it="web_app_setup_back_button",_t="web_app_setup_closing_behavior",pt="web_app_setup_main_button",ut="web_app_setup_settings_button",dt="web_app_switch_inline_query",ct="web_app_trigger_haptic_feedback",gt="web_app_setup_swipe_behavior";export{Se as EventBackButtonPressed,ye as EventClipboardTextReceived,qe as EventCustomMethodInvoked,xe as EventInvoiceClosed,ke as EventMainButtonPressed,Pe as EventPhoneRequested,Oe as EventPopupClosed,Re as EventQrTextReceived,Ie as EventReloadIframe,Te as EventScanQrPopupClosed,Ne as EventSetCustomStyle,Ce as EventSettingsButtonPressed,Le as EventThemeChanged,We as EventViewportChanged,Ee as EventWriteAccessRequested,Qe as MethodClose,je as MethodCloseScanQrPopup,Fe as MethodDataSend,He as MethodExpand,ze as MethodIframeReady,Ke as MethodIframeWillReload,Ae as MethodInvokeCustomMethod,Xe as MethodOpenInvoice,Ye as MethodOpenLink,Ze as MethodOpenPopup,Ue as MethodOpenScanQrPopup,et as MethodOpenTgLink,Ge as MethodReadTextFromClipboard,tt as MethodReady,Ve as MethodRequestPhone,st as MethodRequestTheme,at as MethodRequestViewport,rt as MethodRequestWriteAccess,ot as MethodSetBackgroundColor,nt as MethodSetHeaderColor,it as MethodSetupBackButton,_t as MethodSetupClosingBehavior,pt as MethodSetupMainButton,ut as MethodSetupSettingsButton,gt as MethodSetupSwipeBehavior,dt as MethodSwitchInlineQuery,ct as MethodTriggerHapticFeedback,p as NOT_SUPPORTED,i as TG_DESKTOP,n as TG_PHONE,o as TG_WEB,g as bridgeClose,l as bridgeCloseScanQrPopup,m as bridgeDataSend,f as bridgeExpand,fe as bridgeGetInitData,S as bridgeIframeReady,q as bridgeIframeWillReload,P as bridgeInvokeCustomMethod,I as bridgeOpenInvoice,T as bridgeOpenLink,C as bridgeOpenPopup,W as bridgeOpenScanQrPopup,B as bridgeOpenTgLink,J as bridgeReadTextFromClipboard,M as bridgeReady,U as bridgeRequestPhone,V as bridgeRequestTheme,j as bridgeRequestViewport,H as bridgeRequestWriteAccess,be as bridgeSessionStorageGet,ce as bridgeSessionStorageSet,K as bridgeSetBackgroundColor,Y as bridgeSetHeaderColor,ee as bridgeSetupBackButton,se as bridgeSetupClosingBehavior,re as bridgeSetupMainButton,ne as bridgeSetupSettingsButton,we as bridgeSetupSwipeBehavior,_e as bridgeSwitchInlineQuery,ue as bridgeTriggerHapticFeedback,r as createIsViewportChanged,he as debug,_ as getPlatform,Me as listener,ve as sender,b as supportClose,w as supportCloseScanQrPopup,h as supportDataSend,v as supportExpand,y as supportIframeReady,x as supportIframeWillReload,O as supportInvokeCustomMethod,R as supportOpenInvoice,N as supportOpenLink,L as supportOpenPopup,E as supportOpenScanQrPopup,D as supportOpenTgLink,$ as supportReadTextFromClipboard,A as supportReady,G as supportRequestPhone,Q as supportRequestTheme,F as supportRequestViewport,z as supportRequestWriteAccess,le as supportSessionStorageGet,ge as supportSessionStorageSet,X as supportSetBackgroundColor,Z as supportSetHeaderColor,te as supportSetupBackButton,ae as supportSetupClosingBehavior,oe as supportSetupMainButton,ie as supportSetupSettingsButton,me as supportSetupSwipeBehavior,pe as supportSwitchInlineQuery,de as supportTriggerHapticFeedback};
