(this["webpackJsonpreddit-offline"]=this["webpackJsonpreddit-offline"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),c=(n(11),n(2)),l=n(5),s=o.a.createContext({state:"loading"}),d=o.a.createContext();function u(e,t){switch(t.type){case"stateChange":return{state:t.data};default:throw new Error("Unhandled action type: ".concat(t.type))}}function f(e){var t=e.children,n=o.a.useReducer(u,{state:"loading"}),a=Object(c.a)(n,2),r=a[0],i=a[1];return o.a.createElement(s.Provider,{value:r},o.a.createElement(d.Provider,{value:i},t))}n(13);var g=function(){var e=o.a.useState([]),t=Object(c.a)(e,2),n=(t[0],t[1]);return o.a.useEffect((function(){Object(l.a)("https://www.reddit.com/new.json").get().json((function(e){var t=e.data.children.map((function(e){return{title:e.data.title,url:e.data.url}}));console.log("caching data in local storage for offline use"),localStorage.setItem("data",JSON.stringify(t)),n(t)})).catch((function(e){console.log("ERROR>>",e),console.log("using cached data from local storage"),n(JSON.parse(localStorage.getItem("data")))}))}),[]),o.a.createElement(f,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-div"},o.a.createElement("div",{className:"App-content"},o.a.createElement("div",{className:"App-centered"},o.a.createElement("h1",null,"Hello World"),o.a.createElement("p",null,"Let's build a PWA!"),o.a.createElement("img",{src:"/reddit-offline/appgif.gif",alt:"Make an app"}))))))},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){console.log("installing service worker ");var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when alltabs for this page are closed "),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use "),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration ",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/reddit-offline",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/reddit-offline","/service-worker.js");h?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):p(t,e)}))}}()},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.9ad9ca36.chunk.js.map