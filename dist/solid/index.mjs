import{createSignal as e,onMount as t,onCleanup as s}from"solid-js";const a=()=>{const[a,n]=e({height:0,is_expanded:!1,is_state_stable:!1}),o=e=>n(e);return t((()=>{be(st,o),de(Ie)})),s((()=>{le(st,o)})),a},n="web",o="phone",r="desktop",i="not_supported",_=(e,t)=>{const s=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppVersion");return Number(s)>=e&&-1!==t.indexOf((()=>{const e=window.location.hash.slice(1),t=new URLSearchParams(e).get("tgWebAppPlatform")??"ios";return["android","ios"].includes(t)?o:["tdesktop","macos"].includes(t)?r:n})())},p=()=>Math.random().toString(36).substring(3,9),u=()=>d()?(de(qe),{status:!0}):(pe(qe,1),{status:i}),d=()=>_(0,[n,r,o]),c=()=>b()?(de(ye),{status:!0}):(pe(ye,1),{status:i}),b=()=>_(6.4,[o]),l=e=>g()?(de(xe,e),{status:!0}):(pe(xe,1),{status:i}),g=()=>_(0,[n,r,o]),w=()=>m()?(de(Se),{status:!0}):(pe(Se,1),{status:i}),m=()=>_(0,[o]),h=e=>f()?(de(ke,e),{status:!0}):(pe(ke,1),{status:i}),f=()=>_(0,[n]),v=()=>q()?(de(ke),{status:!0}):(pe(ke,1),{status:i}),q=()=>_(0,[n]),y="web_app_invoke_custom_method",x=async e=>S()?(void 0===e.req_id&&(e.req_id=p()),de(y,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),le(Qe,a))};be(Qe,a)}))):(pe(y,1),{status:i}),S=()=>_(6.9,[n,r,o]),k=e=>P()?(de(Oe,e),{status:!0}):(pe(Oe,1),{status:i}),P=()=>_(6.1,[n,r,o]),O=e=>R()?(de(Re,e),{status:!0}):(pe(Re,1),{status:i}),R=()=>_(6.4,[n,r,o]),T=async e=>E()?(e.title.length>64&&pe(Te,3),e.message.length<1&&pe(Te,4),e.message.length>256&&pe(Te,5),e.buttons.length<1&&pe(Te,6),e.buttons.length>3&&pe(Te,7),void 0!==e.buttons.find((e=>e.text?.match(/^(ok|close|cancel)$/g)))&&pe(Te,8),de(Te,e),new Promise(((t,s)=>{const a=s=>{t({status:!!e.buttons.find((e=>e.id===s?.button_id)),data:s}),le(ze,a)};be(ze,a)}))):(pe(Te,1),{status:i}),E=()=>_(6.2,[n,r,o]),W=async e=>C()?(de(he,e),new Promise(((t,s)=>{ge(Xe,(s=>{e.is_close&&c(),t({status:!0,data:s})})),ge(Ye,(()=>{t({status:"closed"})}))}))):(pe(he,1),{status:i}),C=()=>_(6.4,[o]),I=e=>("/"!==e.path_full[0]&&(e.path_full="/"+e.path_full),B()?(de(Ee,e),{status:!0}):(pe(Ee,1),{status:i})),B=()=>_(7,[n,r,o]),D=async e=>L()?(void 0===e.req_id&&(e.req_id=p()),de(fe,e),new Promise(((t,s)=>{const a=s=>{s.req_id===e.req_id&&(t({status:!0,data:s}),le(Je,a))};be(Je,a)}))):(pe(fe,1),{status:i}),L=()=>_(6.4,[n,r,o]),N=()=>A()?(de(We),{status:!0}):(pe(We,1),{status:i}),A=()=>_(6.9,[n,r,o]),M=async()=>U()?(de(ve),new Promise(((e,t)=>{ge(He,(t=>{"sent"===t.status&&e({status:!0}),e({status:!1})}))}))):(pe(ve,1),{status:i}),U=()=>_(6.9,[n,r,o]),V=()=>$()?(de(Ce),{status:!0}):(pe(Ce,1),{status:i}),$=()=>_(0,[n,r,o]),G=()=>J()?(de(Ie),{status:!0}):(pe(Ie,1),{status:i}),J=()=>_(0,[n,r,o]),Q=()=>j()?(de(Be),{status:!0}):(pe(Be,1),{status:i}),j=()=>_(6.9,[n,r,o]),F=e=>H()?(de(De,e),{status:!0}):(pe(De,1),{status:i}),H=()=>_(6.1,[n,r,o]),z=e=>K()?(de(Le,e),{status:!0}):(pe(Le,1),{status:i}),K=()=>_(6.1,[n,r,o]),X=e=>Y()?(de(Ne,e),{status:!0}):(pe(Ne,1),{status:i}),Y=()=>_(6.1,[n,r,o]),Z=e=>ee()?(de(Ae,e),{status:!0}):(pe(Ae,1),{status:i}),ee=()=>_(0,[n,r,o]),te=e=>se()?(de(Me,e),{status:!0}):(pe(Me,1),{status:i}),se=()=>_(0,[n,r,o]),ae=e=>ne()?(de(Ue,e),{status:!0}):(pe(Ue,1),{status:i}),ne=()=>_(6.1,[n,r,o]),oe=e=>re()?(e.query.length>256&&pe(Ve,9),de(Ve,e),{status:!0}):(pe(Ve,1),{status:i}),re=()=>_(6.7,[n,r,o]),ie=e=>_e()?(de($e,e),{status:!0}):(pe($e,1),{status:i}),_e=()=>_(6.1,[o]);var pe=(e,t)=>{"development"===process.env.NODE_ENV&&console.error(`[@apiteam/twa-bridge](${e}) = ${t}`)};const ue=()=>{const e=new URLSearchParams(window.location.hash.slice(1)).get("tgWebAppData");if(null===e)return pe("getInitData",2),null;const t=new URLSearchParams(e);let s={};return t.forEach(((e,t)=>{if(s[t]=e,void 0!==t.match(/^(chat|receiver|user)$/g))try{s[t]=JSON.parse(e)}catch{}})),s};var de=(e,t)=>{window.TelegramWebviewProxy?window.TelegramWebviewProxy.postEvent(e,JSON.stringify(t)):window.external&&"notify"in window.external&&window.external.notify(JSON.stringify({eventType:e,eventData:t}))};const ce=((e=new Map)=>({once:(t,s,a=e.get(t),n=(e=>{s(e),a&&a.splice(a.indexOf(s)>>>0,1)}))=>a?a.push(n):e.set(t,[n]),on:(t,s,a=e.get(t))=>a?a.push(s):e.set(t,[s]),off:(t,s,a=e.get(t))=>a&&s?a.splice(a.indexOf(s)>>>0,1):e.set(t,[]),emit:(t,s,a=e.get(t)||[])=>{for(const e of a)e(s)}}))();(()=>{function e(e,t){ce.emit(e,t),ce.emit("*",{name:e,data:t})}window.TelegramGameProxy_receiveEvent=e,window.Telegram={WebView:{receiveEvent:e}},window.TelegramGameProxy={receiveEvent:e}})();const be=(e,t)=>{ce.on(e,t)},le=(e,t)=>{ce.off(e,t)},ge=(e,t)=>{ce.once(e,t)};var we=Object.freeze({__proto__:null,off:le,on:be,once:ge});const me="web_app_invoke_custom_method",he="web_app_open_scan_qr_popup",fe="web_app_read_text_from_clipboard",ve="web_app_request_phone",qe="web_app_close",ye="web_app_close_scan_qr_popup",xe="web_app_data_send",Se="web_app_expand",ke="iframe_ready",Pe="iframe_will_reload",Oe="web_app_open_invoice",Re="web_app_open_link",Te="web_app_open_popup",Ee="web_app_open_tg_link",We="web_app_ready",Ce="web_app_request_theme",Ie="web_app_request_viewport",Be="web_app_request_write_access",De="web_app_set_background_color",Le="web_app_set_header_color",Ne="web_app_setup_back_button",Ae="web_app_setup_closing_behavior",Me="web_app_setup_main_button",Ue="web_app_setup_settings_button",Ve="web_app_switch_inline_query",$e="web_app_trigger_haptic_feedback",Ge="back_button_pressed",Je="clipboard_text_received",Qe="custom_method_invoked",je="invoice_closed",Fe="main_button_pressed",He="phone_requested",ze="popup_closed",Ke="reload_iframe",Xe="qr_text_received",Ye="scan_qr_popup_closed",Ze="set_custom_style",et="settings_button_pressed",tt="theme_changed",st="viewport_changed",at="write_access_requested";export{Ge as EventBackButtonPressed,Je as EventClipboardTextReceived,Qe as EventCustomMethodInvoked,je as EventInvoiceClosed,Fe as EventMainButtonPressed,He as EventPhoneRequested,ze as EventPopupClosed,Xe as EventQrTextReceived,Ke as EventReloadIframe,Ye as EventScanQrPopupClosed,Ze as EventSetCustomStyle,et as EventSettingsButtonPressed,tt as EventThemeChanged,st as EventViewportChanged,at as EventWriteAccessRequested,qe as MethodClose,ye as MethodCloseScanQrPopup,xe as MethodDataSend,Se as MethodExpand,ke as MethodIframeReady,Pe as MethodIframeWillReload,me as MethodInvokeCustomMethod,Oe as MethodOpenInvoice,Re as MethodOpenLink,Te as MethodOpenPopup,he as MethodOpenScanQrPopup,Ee as MethodOpenTgLink,fe as MethodReadTextFromClipboard,We as MethodReady,ve as MethodRequestPhone,Ce as MethodRequestTheme,Ie as MethodRequestViewport,Be as MethodRequestWriteAccess,De as MethodSetBackgroundColor,Le as MethodSetHeaderColor,Ne as MethodSetupBackButton,Ae as MethodSetupClosingBehavior,Me as MethodSetupMainButton,Ue as MethodSetupSettingsButton,Ve as MethodSwitchInlineQuery,$e as MethodTriggerHapticFeedback,i as NOT_SUPPORTED,r as TG_DESKTOP,o as TG_PHONE,n as TG_WEB,u as bridgeClose,c as bridgeCloseScanQrPopup,l as bridgeDataSend,w as bridgeExpand,ue as bridgeGetInitData,h as bridgeIframeReady,v as bridgeIframeWillReload,x as bridgeInvokeCustomMethod,k as bridgeOpenInvoice,O as bridgeOpenLink,T as bridgeOpenPopup,W as bridgeOpenScanQrPopup,I as bridgeOpenTgLink,D as bridgeReadTextFromClipboard,N as bridgeReady,M as bridgeRequestPhone,V as bridgeRequestTheme,G as bridgeRequestViewport,Q as bridgeRequestWriteAccess,F as bridgeSetBackgroundColor,z as bridgeSetHeaderColor,X as bridgeSetupBackButton,Z as bridgeSetupClosingBehavior,te as bridgeSetupMainButton,ae as bridgeSetupSettingsButton,oe as bridgeSwitchInlineQuery,ie as bridgeTriggerHapticFeedback,a as createIsViewportChanged,pe as debug,we as listener,de as sender,d as supportClose,b as supportCloseScanQrPopup,g as supportDataSend,m as supportExpand,f as supportIframeReady,q as supportIframeWillReload,S as supportInvokeCustomMethod,P as supportOpenInvoice,R as supportOpenLink,E as supportOpenPopup,C as supportOpenScanQrPopup,B as supportOpenTgLink,L as supportReadTextFromClipboard,A as supportReady,U as supportRequestPhone,$ as supportRequestTheme,J as supportRequestViewport,j as supportRequestWriteAccess,H as supportSetBackgroundColor,K as supportSetHeaderColor,Y as supportSetupBackButton,ee as supportSetupClosingBehavior,se as supportSetupMainButton,ne as supportSetupSettingsButton,re as supportSwitchInlineQuery,_e as supportTriggerHapticFeedback};
