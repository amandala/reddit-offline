(this["webpackJsonpreddit-offline"]=this["webpackJsonpreddit-offline"]||[]).push([[0],{101:function(e,n,t){},102:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(45),i=t.n(r),c=(t(53),t(19)),l=t(46),s=t.n(l),d=t(47),u=a.a.createContext({state:"loading"}),f=a.a.createContext();function g(e,n){switch(n.type){case"stateChange":return{state:n.data};default:throw new Error("Unhandled action type: ".concat(n.type))}}function h(e){var n=e.children,t=a.a.useReducer(g,{state:"loading"}),o=Object(c.a)(t,2),r=o[0],i=o[1];return a.a.createElement(u.Provider,{value:r},a.a.createElement(f.Provider,{value:i},n))}t(101);var v=function(){var e=a.a.useState([]),n=Object(c.a)(e,2),t=(n[0],n[1]);return a.a.useEffect((function(){Object(d.a)("https://www.reddit.com/new.json").get().json((function(e){var n=e.data.children.map((function(e){return e.data.title}));console.log("caching data in local storage for offline use"),localStorage.setItem("data",JSON.stringify(n)),t(n)})).catch((function(e){console.log("ERROR>>",e),console.log("using cached data from local storage"),t(JSON.parse(localStorage.getItem("data")))}))}),[]),a.a.createElement(h,null,a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Hello World"),a.a.createElement("p",null,"It is Wednesday, ma dudes!"),a.a.createElement(s.a,{id:"du-TY1GUFGk"}))))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){console.log("installing service worker ");var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when alltabs for this page are closed "),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use "),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration ",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reddit-offline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/reddit-offline","/service-worker.js");w?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(n,e)}))}}()},48:function(e,n,t){e.exports=t(102)},53:function(e,n,t){}},[[48,1,2]]]);
//# sourceMappingURL=main.438bcae9.chunk.js.map