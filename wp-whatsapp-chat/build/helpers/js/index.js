(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{FIRST_WP_VERSION_WITH_THUNK_SUPPORT:()=>U,QLWAPP_DEMO_URL:()=>_,QLWAPP_DEVELOPER:()=>R,QLWAPP_DOCUMENTATION_URL:()=>O,QLWAPP_GROUP_URL:()=>w,QLWAPP_MESSAGE_REPLACEMENTS:()=>h,QLWAPP_PLUGIN_DIR:()=>L,QLWAPP_PLUGIN_FILE:()=>l,QLWAPP_PLUGIN_NAME:()=>P,QLWAPP_PLUGIN_URL:()=>f,QLWAPP_PLUGIN_VERSION:()=>i,QLWAPP_PREMIUM_SELL_URL:()=>E,QLWAPP_REVIEW_URL:()=>u,QLWAPP_SUPPORT_URL:()=>d,QLWAPP_TIMEZONE_OPTIONS:()=>A,QLWAPP_WORDPRESS_URL:()=>p,WP_VERSION:()=>c,apiFetch:()=>N,applyThunkMiddleware:()=>D,buildParams:()=>S,capitalizeFirstLetter:()=>m,createNotice:()=>j,customApiFetch:()=>b,decodeEntities:()=>M,decodeHTMLEntities:()=>k,deepMerge:()=>V,displayWithLineBreaks:()=>T,getPluginURL:()=>I,handleApiResponse:()=>G,handleBrowserParams:()=>W,isObjectsEqual:()=>Q,isVersionLessThan:()=>v,onDocumentLoaded:()=>g,truncate:()=>y});const n=window.wp.i18n,r=window.wp.apiFetch;var o=e.n(r);const s=window.wp.notices,a=window.wp.data,{WP_VERSION:c,QLWAPP_PLUGIN_NAME:P,QLWAPP_PLUGIN_VERSION:i,QLWAPP_PLUGIN_FILE:l,QLWAPP_PLUGIN_DIR:L,QLWAPP_WORDPRESS_URL:p,QLWAPP_REVIEW_URL:u,QLWAPP_DEMO_URL:_,QLWAPP_SUPPORT_URL:d,QLWAPP_PREMIUM_SELL_URL:E,QLWAPP_DOCUMENTATION_URL:O,QLWAPP_GROUP_URL:w,QLWAPP_DEVELOPER:R,QLWAPP_PLUGIN_URL:f,QLWAPP_TIMEZONE_OPTIONS:A,QLWAPP_MESSAGE_REPLACEMENTS:h}=window.qlwappHelpers,U="6.0";function g(e){/comp|inter|loaded/.test(document.readyState)?e():document.addEventListener("DOMContentLoaded",e,!1)}const W=()=>{const e=document.location.href,t=new URLSearchParams(e),n=new URL(window.location.href);return{tabParam:t.get("tab"),setBrowserTabParam:e=>{n.searchParams.set("tab",e),window.history.pushState(null,"",n.toString()),window.dispatchEvent(new Event("popstate"))}}},S=e=>{const t=[];for(const n in e)e.hasOwnProperty(n)&&e[n]&&"all"!==e[n]&&t.push(`${n}=${e[n]}`);return t.length>0?`?${t.join("&")}`:""},y=(e,t=15)=>e.length>t?e.slice(0,t)+"...":e;async function b(e){return await o()(e).then((e=>{if(e.code)throw e;return e})).catch((t=>(console.log("error: ",t),console.log("args: ",e),{code:t?.code?t.code:"Unknown",message:t?.message?t.message:"Unknown"})))}const N=b;function I(e){return f+e}function Q(e,t){if(e===t)return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const n=Object.keys(e).sort(),r=Object.keys(t).sort();if(n.length!==r.length)return!1;for(let e=0;e<n.length;e++)if(n[e]!==r[e])return!1;for(const r of n){const n=e[r],o=t[r];if("object"==typeof n&&null!==n&&"object"==typeof o&&null!==o){if(!Q(n,o))return!1}else if(n!==o)return!1}return!0}function m(e){return e.charAt(0).toUpperCase()+e.slice(1)}function M(e){return(e=(e=(e=(e=(e=e.replace(/&quot;/g,'"')).replace(/&amp;/g,"&")).replace(/&lt;/g,"<")).replace(/&gt;/g,">")).replace(/\\u0022/g,'"')).replace(/\\\\"/g,'"')}function T(e){return e.split("\n")}const j=e=>{(0,a.dispatch)(s.store).createSuccessNotice((0,n.sprintf)("%s",e),{type:"snackbar"})},G=e=>e?.code||0===e?.code?(j(`${e.code}: ${e.message}`),!1):e,v=(e,t)=>{const n=e.split(".").map(Number),r=t.split(".").map(Number);for(let e=0;e<r.length;e++){if(n[e]<r[e])return!0;if(n[e]>r[e])return!1}return!1},D=e=>{const t=e.instantiate;return e.instantiate=e=>{const n=t(e);if(!n.store||!n.store.dispatch)throw new Error("The created instance does not contain a valid store.");const r=n.store.dispatch,o=((e,t)=>({registry:t,get dispatch(){return Object.assign((t=>e.store.dispatch(t)),e.getActions())},get select(){return Object.assign((t=>t(e.store.__unstableOriginalGetState())),e.getSelectors())},get resolveSelect(){return e.getResolveSelectors()}}))(n,e);return n.store.dispatch=((e,t)=>n=>"function"==typeof n?n(e):t(n))(o,r),n},e};function V(e,t){const n={};return new Set([...Object.keys(e),...Object.keys(t)]).forEach((r=>{Object.prototype.hasOwnProperty.call(e,r)&&Object.prototype.hasOwnProperty.call(t,r)?!function(e){const t=typeof e;return null!=e&&("object"==t||"function"==t)}(e[r])||Array.isArray(e[r])?n[r]=t[r]:n[r]=V(e[r],t[r]):Object.prototype.hasOwnProperty.call(e,r)?n[r]=e[r]:Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])})),n}function k(e){const t=document.createElement("textarea");return t.innerHTML=e,t.value}(window.qlwapp=window.qlwapp||{}).helpers=t})();