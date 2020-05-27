(this["webpackJsonpreddit-offline"]=this["webpackJsonpreddit-offline"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){},14:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(4),i=t.n(r),c=(t(11),t(2)),l=t(5),s=o.a.createContext({state:"loading"}),d=o.a.createContext();function u(e,n){switch(n.type){case"stateChange":return{state:n.data};default:throw new Error("Unhandled action type: ".concat(n.type))}}function f(e){var n=e.children,t=o.a.useReducer(u,{state:"loading"}),a=Object(c.a)(t,2),r=a[0],i=a[1];return o.a.createElement(s.Provider,{value:r},o.a.createElement(d.Provider,{value:i},n))}t(13);var g=function(){var e=o.a.useState([]),n=Object(c.a)(e,2),t=n[0],a=n[1];return o.a.useEffect((function(){Object(l.a)("https://www.reddit.com/new.json").get().json((function(e){var n=e.data.children.map((function(e){return{title:e.data.title,url:e.data.url}}));console.log("caching data in local storage for offline use"),localStorage.setItem("data",JSON.stringify(n)),a(n)})).catch((function(e){console.log("ERROR>>",e),console.log("using cached data from local storage"),a(JSON.parse(localStorage.getItem("data")))}))}),[]),o.a.createElement(f,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-div"},o.a.createElement("div",{className:"App-content"},o.a.createElement("div",null,o.a.createElement("h1",null,"Reddit: New"),t?null:"Loading...",o.a.createElement("ul",null,t&&t.map((function(e){return o.a.createElement("li",{key:e.url},o.a.createElement("a",{href:e.url},o.a.createElement("p",null,e.title)))}))))))))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){console.log("installing service worker ");var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when alltabs for this page are closed "),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use "),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration ",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reddit-offline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/reddit-offline","/service-worker.js");h?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):v(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(n,e)}))}}()},6:function(e,n,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.b94b0ef3.chunk.js.map