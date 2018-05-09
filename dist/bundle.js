!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n(8),n(7)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),u=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,c=0,d=[],f=n(2);function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(m(r.parts[a],t))}else{var u=[];for(a=0;a<r.parts.length;a++)u.push(m(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:u}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function h(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=u(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function m(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=s||(s=v(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(u=i[a.id]).refs--,r.push(u)}e&&l(p(e,t),t);for(o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}};var w,g=(w=[],function(e,t){return w[e]=t,w.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'body{font-family: Arial, Helvetica, sans-serif;}\r\nul{list-style-type: none;}\r\nbutton{\r\n    margin-left: 5px;\r\n    background-color: white;\r\n    color: black;\r\n    border: 1px solid #555555;\r\n    border-radius: 10px;    \r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;    \r\n    -webkit-transition-duration: 0.4s; /* Safari */\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n}\r\nbutton:hover{background-color: #555555;color: white;}\r\n\r\n#app{width: 26em;}\r\n#app input[type="text"]{\r\n    /* Clear the user\'s operating system\'s theme */\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n\r\n    /* Apply own styles */\r\n    transition: all 0.30s ease-in-out;\r\n    -webkit-transition: all 0.30s ease-in-out;\r\n    -moz-transition: all 0.30s ease-in-out;\r\n    -o-transition: all 0.30s ease-in-out;\r\n    outline: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    font-size: 1.1em;\r\n\r\n    width: 95%;\r\n    height: 2em;\r\n}\r\n#app input[type="text"]:focus{border: 1px solid #0094ff;box-shadow: 0 0 5px #0094ff;}\r\n#app input[type="checkbox"]{width: 1.3em;height: 1.3em;position: relative;}\r\n#app > div:first-child{padding: 15px;margin:0;position: relative;user-select: none;-moz-user-select: none;-ms-user-select: none;-webkit-user-select: none;background: #f8f8f8;border: thin solid #cbcbcb;border-radius: 5px;}\r\n#app > div > p:first-child {font-size: 2em;font-weight: bold;text-align: center;}\r\n#app > div > input {padding-left: 0.5em;padding-right: 0.5em;}\r\n#app > div > div > button {padding: 0.5em; border-radius: 20px;}\r\n\r\n.strike-text{text-decoration: line-through; color: #999999;}',""])},function(e,t,n){var r=n(5);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(r,o);r.locals&&(e.exports=r.locals)},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return s}),n.d(t,"combineReducers",function(){return d}),n.d(t,"bindActionCreators",function(){return l}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return p}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return o});var r=n(0),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function u(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,n){var a;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,d=t,f=[],l=f,p=!1;function h(){l===f&&(l=f.slice())}function b(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return d}function v(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=l.indexOf(e);l.splice(n,1)}}}function y(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,d=c(d,e)}finally{p=!1}for(var t=f=l,n=0;n<t.length;n++){(0,t[n])()}return e}return y({type:o.INIT}),(a={dispatch:y,subscribe:v,getState:b,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,y({type:o.REPLACE})}})[r.a]=function(){var e,t=v;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(b())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},a}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function d(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var a=Object.keys(n);var u=void 0;try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){u=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(u)throw u;for(var r=!1,o={},i=0;i<a.length;i++){var s=a[i],d=n[s],f=e[s],l=d(f,t);if(void 0===l){var p=c(s,t);throw new Error(p)}o[s]=l,r=r||l!==f}return r?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return f(e,t);if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":i(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var a=n[o],u=e[a];"function"==typeof u&&(r[a]=f(u,t))}return r}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=e.apply(void 0,r),u=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},s={getState:i.getState,dispatch:function(){return u.apply(void 0,arguments)}},c=t.map(function(e){return e(s)});return u=p.apply(void 0,c)(i.dispatch),a({},i,{dispatch:u})}}}},function(e,t,n){var r,o,i=this&&this.__assign||Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};void 0===(o=function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}.apply(t,r=[n,t]))||(e.exports=o),r=[n,t,n(9),n(6)],void 0===(o=function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=document.getElementById("txtInput"),o=document.getElementById("dspResults"),a=function(){return function(e){var t=this;this.handleRemove=function(e){var n={type:"REMOVE_TASK",task:{id:e}};t.store.dispatch(n)},this.handleRemoveCompleted=function(){t.store.dispatch({type:"REMOVE_COMPLETED"})},this.handleCheck=function(e){var n={type:"CHECKED",task:{id:e}};t.store.dispatch(n)},this.renderContent=function(){var e=t.store.getState(),n=document.createElement("ul");if(e.map(function(e){var r=document.createElement("li"),o=document.createElement("input");o.setAttribute("type","checkbox"),o.addEventListener("click",function(){return t.handleCheck(e.id)});var i=document.createTextNode(e.description),a=document.createElement("button");a.appendChild(document.createTextNode("Remove")),a.addEventListener("click",function(){return t.handleRemove(e.id)}),e.isDone&&(r.classList.add("strike-text"),o.setAttribute("checked","")),r.appendChild(o),r.appendChild(i),r.appendChild(a),n.appendChild(r)}),o.innerHTML="",e.filter(function(e){return e.isDone}).length>0){var r=document.createElement("button");r.appendChild(document.createTextNode("Remove completed")),r.setAttribute("type","button"),r.addEventListener("click",t.handleRemoveCompleted),o.appendChild(n),o.appendChild(r)}else o.appendChild(n)},this.store=e}}(),u=n.createStore(function(e,t){switch(void 0===e&&(e=[]),t.type){case"ADD_TASK":return e.concat(t.task);case"REMOVE_TASK":return e.filter(function(e){return e.id!==t.task.id});case"CHECKED":var n=e.findIndex(function(e){return e.id===t.task.id});return e.map(function(e,t){return t===n?i({},e,{isDone:!e.isDone}):e});case"REMOVE_COMPLETED":return e.filter(function(e){return!e.isDone});default:return e}}),s=new a(u);u.subscribe(s.renderContent),r.focus(),r.addEventListener("keydown",function(e){var t=r.value.trim();if(13===e.keyCode&&t.length>0){var n={type:"ADD_TASK",task:{id:Date.now(),description:t,isDone:!1}};u.dispatch(n),r.value="",r.focus()}})}.apply(t,r))||(e.exports=o)}]);
//# sourceMappingURL=bundle.js.map