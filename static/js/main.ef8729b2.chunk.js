(this["webpackJsonpreddit-offline"]=this["webpackJsonpreddit-offline"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),i=n.n(r),c=(n(9),n(3)),l=a.a.createContext({state:"loading"}),s=a.a.createContext();function d(e,t){switch(t.type){case"stateChange":return{state:t.data};default:throw new Error("Unhandled action type: ".concat(t.type))}}function u(e){var t=e.children,n=a.a.useReducer(d,{state:"loading"}),o=Object(c.a)(n,2),r=o[0],i=o[1];return a.a.createElement(l.Provider,{value:r},a.a.createElement(s.Provider,{value:i},t))}n(10);var f=function(){var e=localStorage.getItem("loadingState");return a.a.useEffect((function(){console.log(e)})),a.a.createElement(u,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("p",null,"Hello World"))))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){console.log("installing service worker");var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(localStorage.setItem({loadingState:"installed"}),navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),localStorage.setItem({loadingState:"new"}),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),localStorage.setItem({loadingState:"cached"}),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reddit-offline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reddit-offline","/service-worker.js");g?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode."),localStorage.setItem({loadingState:"offline"})}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):h(t,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.ef8729b2.chunk.js.map