(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
 * 
 *         SimpleBar.js - v2.5.1
 *         Scrollbars, simpler.
 *         https://grsmto.github.io/simplebar/
 *         
 *         Made by Adrien Grsmto from a fork by Jonathan Nicol
 *         Under MIT License
 *       
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleBar=e():t.SimpleBar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=27)}([function(t,e,n){var r=n(23)("wks"),i=n(12),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))}).store=r},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(5),i=n(11);t.exports=n(7)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6),i=n(33),o=n(34),s=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(10);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports={}},function(t,e,n){var r=n(23)("keys"),i=n(12);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e,n){var r=n(1),i=n(3),o=n(4),s=n(18),c=n(19),a=function(t,e,n){var u,l,f,h,d=t&a.F,p=t&a.G,v=t&a.S,b=t&a.P,y=t&a.B,m=p?r:v?r[e]||(r[e]={}):(r[e]||{}).prototype,g=p?i:i[e]||(i[e]={}),O=g.prototype||(g.prototype={});p&&(n=e);for(u in n)l=!d&&m&&void 0!==m[u],f=(l?m:n)[u],h=y&&l?c(f,r):b&&"function"==typeof f?c(Function.call,f):f,m&&s(m,u,f,t&a.U),g[u]!=f&&o(g,u,h),b&&O[u]!=f&&(O[u]=f)};r.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(10),i=n(1).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,n){var r=n(1),i=n(4),o=n(2),s=n(12)("src"),c=Function.toString,a=(""+c).split("toString");n(3).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){var u="function"==typeof n;u&&(o(n,"name")||i(n,"name",e)),t[e]!==n&&(u&&(o(n,s)||i(n,s,t[e]?""+t[e]:a.join(String(e)))),t===r?t[e]=n:c?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||c.call(this)})},function(t,e,n){var r=n(35);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(41),i=n(9);t.exports=function(t){return r(i(t))}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(8),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(5).f,i=n(2),o=n(0)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(9);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n(28);var c=r(n(53)),a=r(n(54)),u=r(n(56));n(57),Object.assign=n(58);var l=function(){function t(e,n){i(this,t),this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.options=Object.assign({},t.defaultOptions,n),this.classNames=this.options.classNames,this.scrollbarWidth=(0,c.default)(),this.offsetSize=20,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,a.default)(this.recalculate,100,{leading:!0,trailing:!1}),this.init()}return s(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.initDOM(),this.scrollbarX=this.trackX.querySelector(".".concat(this.classNames.scrollbar)),this.scrollbarY=this.trackY.querySelector(".".concat(this.classNames.scrollbar)),this.scrollContentEl.style.paddingRight="".concat(this.scrollbarWidth||this.offsetSize,"px"),this.scrollContentEl.style.marginBottom="-".concat(2*this.scrollbarWidth||this.offsetSize,"px"),this.contentEl.style.paddingBottom="".concat(this.scrollbarWidth||this.offsetSize,"px"),0!==this.scrollbarWidth&&(this.contentEl.style.marginRight="-".concat(this.scrollbarWidth,"px")),this.recalculate(),this.initListeners()}},{key:"initDOM",value:function(){var t=this;if(Array.from(this.el.children).filter(function(e){return e.classList.contains(t.classNames.scrollContent)}).length)this.trackX=this.el.querySelector(".".concat(this.classNames.track,".horizontal")),this.trackY=this.el.querySelector(".".concat(this.classNames.track,".vertical")),this.scrollContentEl=this.el.querySelector(".".concat(this.classNames.scrollContent)),this.contentEl=this.el.querySelector(".".concat(this.classNames.content));else{for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}if(!this.trackX||!this.trackY){var e=document.createElement("div"),n=document.createElement("div");e.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),e.appendChild(n),this.trackX=e.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=e.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild)}this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new u.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect()}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,r="y"===e?t.pageY:t.pageX;this.dragOffset[e]=r-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var e,n,r;t.preventDefault(),"y"===this.currentAxis?(e=t.pageY,n=this.trackY,r=this.scrollContentEl):(e=t.pageX,n=this.trackX,r=this.contentEl);var i=e-n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/n[this.sizeAttr[this.currentAxis]],s=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=s}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t,e,n,r,i,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";"x"===o?(t=this.trackX,e=this.scrollbarX,n=this.contentEl[this.scrollOffsetAttr[o]],r=this.contentSizeX,i=this.scrollbarXSize):(t=this.trackY,e=this.scrollbarY,n=this.scrollContentEl[this.scrollOffsetAttr[o]],r=this.contentSizeY,i=this.scrollbarYSize);var s=i/r,c=n/(r-i),a=Math.max(~~(s*(i-2))-2,this.options.scrollbarMinSize),u=~~((i-4-a)*c+2);this.isVisible[o]=i<r,this.isVisible[o]?(t.style.visibility="visible","x"===o?(e.style.left="".concat(u,"px"),e.style.width="".concat(a,"px")):(e.style.top="".concat(u,"px"),e.style.height="".concat(a,"px"))):t.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.contentSizeX=this.contentEl[this.scrollSizeAttr.x],this.contentSizeY=this.contentEl[this.scrollSizeAttr.y]-(this.scrollbarWidth||this.offsetSize),this.scrollbarXSize=this.trackX[this.sizeAttr.x],this.scrollbarYSize=this.trackY[this.sizeAttr.y],this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y"))}},{key:"getScrollElement",value:function(){return this.scrollContentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.from(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.from(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(e){return Object.keys(t.htmlAttributes).reduce(function(n,r){var i=t.htmlAttributes[r];return e.hasAttribute(i)&&(n[r]=JSON.parse(e.getAttribute(i)||!0)),n},{})}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{autoHide:!0,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:25}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-autohide",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();e.default=l,l.initHtmlApi()},function(t,e,n){n(29),n(46),t.exports=n(3).Array.from},function(t,e,n){"use strict";var r=n(30)(!0);n(31)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(8),i=n(9);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):s-56320+(o-55296<<10)+65536)}}},function(t,e,n){"use strict";var r=n(32),i=n(15),o=n(18),s=n(4),c=n(2),a=n(13),u=n(36),l=n(25),f=n(45),h=n(0)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,v,b,y,m){u(n,e,v);var g,O,E,_=function(t){if(!d&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==b,S=!1,A=t.prototype,k=A[h]||A["@@iterator"]||b&&A[b],j=k||_(b),M=b?w?_("entries"):j:void 0,L="Array"==e?A.entries||k:k;if(L&&(E=f(L.call(new t)))!==Object.prototype&&E.next&&(l(E,x,!0),r||c(E,h)||s(E,h,p)),w&&k&&"values"!==k.name&&(S=!0,j=function(){return k.call(this)}),r&&!m||!d&&!S&&A[h]||s(A,h,j),a[e]=j,a[x]=p,b)if(g={values:w?j:_("values"),keys:y?j:_("keys"),entries:M},m)for(O in g)O in A||o(A,O,g[O]);else i(i.P+i.F*(d||S),e,g);return g}},function(t,e){t.exports=!1},function(t,e,n){t.exports=!n(7)&&!n(16)(function(){return 7!=Object.defineProperty(n(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(10);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var r=n(37),i=n(11),o=n(25),s={};n(4)(s,n(0)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){var r=n(6),i=n(38),o=n(24),s=n(14)("IE_PROTO"),c=function(){},a=function(){var t,e=n(17)("iframe"),r=o.length;for(e.style.display="none",n(44).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[o[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c.prototype=r(t),n=new c,c.prototype=null,n[s]=t):n=a(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(5),i=n(6),o=n(39);t.exports=n(7)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e,n){var r=n(40),i=n(24);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(2),i=n(20),o=n(42)(!1),s=n(14)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},function(t,e,n){var r=n(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(20),i=n(22),o=n(43);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=i(a.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if((c=a[l++])!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(8),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(2),i=n(26),o=n(14)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){"use strict";var r=n(19),i=n(15),o=n(26),s=n(47),c=n(48),a=n(22),u=n(49),l=n(50);i(i.S+i.F*!n(52)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=0,m=l(h);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>y;y++)u(n,y,b?v(h[y],y):h[y]);else for(f=m.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(6);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&r(o.call(t)),e}}},function(t,e,n){var r=n(13),i=n(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){"use strict";var r=n(5),i=n(11);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){var r=n(51),i=n(0)("iterator"),o=n(13);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){var r=n(21),i=n(0)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(0)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(t){}return n}},function(t,e,n){var r,i,o;/*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
!function(n,s){i=[],r=s,void 0!==(o="function"==typeof r?r.apply(e,i):r)&&(t.exports=o)}(0,function(){"use strict";function t(){if("undefined"==typeof document)return 0;var t,e=document.body,n=document.createElement("div"),r=n.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}return t})},function(t,e,n){(function(e){function n(t,e,n){function i(e){var n=v,r=b;return v=b=void 0,w=e,m=t.apply(r,n)}function o(t){return w=t,g=setTimeout(l,e),S?i(t):m}function a(t){var n=t-x,r=t-w,i=e-n;return A?E(i,y-r):i}function u(t){var n=t-x,r=t-w;return void 0===x||n>=e||n<0||A&&r>=y}function l(){var t=_();if(u(t))return f(t);g=setTimeout(l,a(t))}function f(t){return g=void 0,k&&v?i(t):(v=b=void 0,m)}function h(){void 0!==g&&clearTimeout(g),w=0,v=x=b=g=void 0}function d(){return void 0===g?m:f(_())}function p(){var t=_(),n=u(t);if(v=arguments,b=this,x=t,n){if(void 0===g)return o(x);if(A)return g=setTimeout(l,e),i(x)}return void 0===g&&(g=setTimeout(l,e)),m}var v,b,y,m,g,x,w=0,S=!1,A=!1,k=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(S=!!n.leading,A="maxWait"in n,y=A?O(s(n.maxWait)||0,e):y,k="trailing"in n?!!n.trailing:k),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&g.call(t)==u}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?a:+t}var c="Expected a function",a=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),m=Object.prototype,g=m.toString,O=Math.max,E=Math.min,_=function(){return y.Date.now()};t.exports=n}).call(e,n(55))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){return parseFloat(t)||0}function i(t){return Array.prototype.slice.call(arguments,1).reduce(function(e,n){return e+r(t["border-"+n+"-width"])},0)}function o(t){for(var e=["top","right","bottom","left"],n={},i=0,o=e;i<o.length;i+=1){var s=o[i],c=t["padding-"+s];n[s]=r(c)}return n}function s(t){var e=t.getBBox();return f(0,0,e.width,e.height)}function c(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _;var s=getComputedStyle(t),c=o(s),u=c.left+c.right,l=c.top+c.bottom,h=r(s.width),d=r(s.height);if("border-box"===s.boxSizing&&(Math.round(h+u)!==e&&(h-=i(s,"left","right")+u),Math.round(d+l)!==n&&(d-=i(s,"top","bottom")+l)),!a(t)){var p=Math.round(h+u)-e,v=Math.round(d+l)-n;1!==Math.abs(p)&&(h-=p),1!==Math.abs(v)&&(d-=v)}return f(c.left,c.top,h,d)}function a(t){return t===document.documentElement}function u(t){return d?x(t)?s(t):c(t):_}function l(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return E(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function f(t,e,n,r){return{x:t,y:e,width:n,height:r}}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"undefined"!=typeof Map?Map:function(){function e(){this.__entries__=[]}var n={size:{}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n+=1){var i=r[n];t.call(e,i[1],i[0])}},Object.defineProperties(e.prototype,n),e}()}(),d="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,p=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),v=2,b=function(t,e){function n(){o&&(o=!1,t()),s&&i()}function r(){p(n)}function i(){var t=Date.now();if(o){if(t-c<v)return;s=!0}else o=!0,s=!1,setTimeout(r,e);c=t}var o=!1,s=!1,c=0;return i},y=["top","right","bottom","left","width","height","size","weight"],m="undefined"!=typeof navigator&&/Trident\/.*rv:11/.test(navigator.userAgent),g="undefined"!=typeof MutationObserver&&!m,O=function(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b(this.refresh.bind(this),20)};O.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},O.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},O.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},O.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},O.prototype.connect_=function(){d&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),g?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},O.prototype.disconnect_=function(){d&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},O.prototype.onTransitionEnd_=function(t){var e=t.propertyName;y.some(function(t){return!!~e.indexOf(t)})&&this.refresh()},O.getInstance=function(){return this.instance_||(this.instance_=new O),this.instance_},O.instance_=null;var E=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},_=f(0,0,0,0),x=function(){return"undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),w=function(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=f(0,0,0,0),this.target=t};w.prototype.isActive=function(){var t=u(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var S=function(t,e){var n=l(e);E(this,{target:t,contentRect:n})},A=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeObservations_=[],this.observations_=new h,this.callback_=t,this.controller_=e,this.callbackCtx_=n};A.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new w(t)),this.controller_.addObserver(this),this.controller_.refresh())}},A.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},A.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},A.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},A.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new S(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},A.prototype.clearActive=function(){this.activeObservations_.splice(0)},A.prototype.hasActive=function(){return this.activeObservations_.length>0};var k="undefined"!=typeof WeakMap?new WeakMap:new h,j=function(t){if(!(this instanceof j))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=O.getInstance(),n=new A(t,e,this);k.set(this,n)};["observe","unobserve","disconnect"].forEach(function(t){j.prototype[t]=function(){return(e=k.get(this))[t].apply(e,arguments);var e}});var M=function(){return"undefined"!=typeof ResizeObserver?ResizeObserver:j}();e.default=M},function(t,e){},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,c,a=r(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var l in n)o.call(n,l)&&(a[l]=n[l]);if(i){c=i(n);for(var f=0;f<c.length;f++)s.call(n,c[f])&&(a[c[f]]=n[c[f]])}}return a}}]).default});
},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require("6r38Q7"))
},{"6r38Q7":4}],4:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],5:[function(require,module,exports){
(function (__dirname){
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }()), require("path"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "path"], factory);
	else if(typeof exports === 'object')
		exports["Twig"] = factory((function webpackLoadOptionalExternalModule() { try { return require("fs"); } catch(e) {} }()), require("path"));
	else
		root["Twig"] = factory(root["fs"], root["path"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Twig.js
	 *
	 * @copyright 2011-2016 John Roepke and the Twig.js Contributors
	 * @license   Available under the BSD 2-Clause License
	 * @link      https://github.com/twigjs/twig.js
	 */

	var Twig = {
	    VERSION: '0.10.2'
	};

	__webpack_require__(1)(Twig);
	__webpack_require__(2)(Twig);
	__webpack_require__(3)(Twig);
	__webpack_require__(5)(Twig);
	__webpack_require__(6)(Twig);
	__webpack_require__(7)(Twig);
	__webpack_require__(17)(Twig);
	__webpack_require__(18)(Twig);
	__webpack_require__(21)(Twig);
	__webpack_require__(22)(Twig);
	__webpack_require__(23)(Twig);
	__webpack_require__(24)(Twig);
	__webpack_require__(25)(Twig);
	__webpack_require__(26)(Twig);
	__webpack_require__(27)(Twig);

	module.exports = Twig.exports;


/***/ },
/* 1 */
/***/ function(module, exports) {

	// ## twig.core.js
	//
	// This file handles template level tokenizing, compiling and parsing.
	module.exports = function (Twig) {
	    "use strict";

	    Twig.trace = false;
	    Twig.debug = false;

	    // Default caching to true for the improved performance it offers
	    Twig.cache = true;

	    Twig.noop = function() {};

	    Twig.placeholders = {
	        parent: "{{|PARENT|}}"
	    };

	    /**
	     * Fallback for Array.indexOf for IE8 et al
	     */
	    Twig.indexOf = function (arr, searchElement /*, fromIndex */ ) {
	        if (Array.prototype.hasOwnProperty("indexOf")) {
	            return arr.indexOf(searchElement);
	        }
	        if (arr === void 0 || arr === null) {
	            throw new TypeError();
	        }
	        var t = Object(arr);
	        var len = t.length >>> 0;
	        if (len === 0) {
	            return -1;
	        }
	        var n = 0;
	        if (arguments.length > 0) {
	            n = Number(arguments[1]);
	            if (n !== n) { // shortcut for verifying if it's NaN
	                n = 0;
	            } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
	                n = (n > 0 || -1) * Math.floor(Math.abs(n));
	            }
	        }
	        if (n >= len) {
	            // console.log("indexOf not found1 ", JSON.stringify(searchElement), JSON.stringify(arr));
	            return -1;
	        }
	        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
	        for (; k < len; k++) {
	            if (k in t && t[k] === searchElement) {
	                return k;
	            }
	        }
	        if (arr == searchElement) {
	            return 0;
	        }
	        // console.log("indexOf not found2 ", JSON.stringify(searchElement), JSON.stringify(arr));

	        return -1;
	    }

	    Twig.forEach = function (arr, callback, thisArg) {
	        if (Array.prototype.forEach ) {
	            return arr.forEach(callback, thisArg);
	        }

	        var T, k;

	        if ( arr == null ) {
	          throw new TypeError( " this is null or not defined" );
	        }

	        // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
	        var O = Object(arr);

	        // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
	        // 3. Let len be ToUint32(lenValue).
	        var len = O.length >>> 0; // Hack to convert O.length to a UInt32

	        // 4. If IsCallable(callback) is false, throw a TypeError exception.
	        // See: http://es5.github.com/#x9.11
	        if ( {}.toString.call(callback) != "[object Function]" ) {
	          throw new TypeError( callback + " is not a function" );
	        }

	        // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
	        if ( thisArg ) {
	          T = thisArg;
	        }

	        // 6. Let k be 0
	        k = 0;

	        // 7. Repeat, while k < len
	        while( k < len ) {

	          var kValue;

	          // a. Let Pk be ToString(k).
	          //   This is implicit for LHS operands of the in operator
	          // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
	          //   This step can be combined with c
	          // c. If kPresent is true, then
	          if ( k in O ) {

	            // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
	            kValue = O[ k ];

	            // ii. Call the Call internal method of callback with T as the this value and
	            // argument list containing kValue, k, and O.
	            callback.call( T, kValue, k, O );
	          }
	          // d. Increase k by 1.
	          k++;
	        }
	        // 8. return undefined
	    };

	    Twig.merge = function(target, source, onlyChanged) {
	        Twig.forEach(Object.keys(source), function (key) {
	            if (onlyChanged && !(key in target)) {
	                return;
	            }

	            target[key] = source[key]
	        });

	        return target;
	    };

	    /**
	     * Exception thrown by twig.js.
	     */
	    Twig.Error = function(message, file) {
	       this.message = message;
	       this.name = "TwigException";
	       this.type = "TwigException";
	       this.file = file;
	    };

	    /**
	     * Get the string representation of a Twig error.
	     */
	    Twig.Error.prototype.toString = function() {
	        var output = this.name + ": " + this.message;

	        return output;
	    };

	    /**
	     * Wrapper for logging to the console.
	     */
	    Twig.log = {
	        trace: function() {if (Twig.trace && console) {console.log(Array.prototype.slice.call(arguments));}},
	        debug: function() {if (Twig.debug && console) {console.log(Array.prototype.slice.call(arguments));}}
	    };


	    if (typeof console !== "undefined") {
	        if (typeof console.error !== "undefined") {
	            Twig.log.error = function() {
	                console.error.apply(console, arguments);
	            }
	        } else if (typeof console.log !== "undefined") {
	            Twig.log.error = function() {
	                console.log.apply(console, arguments);
	            }
	        }
	    } else {
	        Twig.log.error = function(){};
	    }

	    /**
	     * Wrapper for child context objects in Twig.
	     *
	     * @param {Object} context Values to initialize the context with.
	     */
	    Twig.ChildContext = function(context) {
	        var ChildContext = function ChildContext() {};
	        ChildContext.prototype = context;
	        return new ChildContext();
	    };

	    /**
	     * Container for methods related to handling high level template tokens
	     *      (for example: {{ expression }}, {% logic %}, {# comment #}, raw data)
	     */
	    Twig.token = {};

	    /**
	     * Token types.
	     */
	    Twig.token.type = {
	        output:                 'output',
	        logic:                  'logic',
	        comment:                'comment',
	        raw:                    'raw',
	        output_whitespace_pre:  'output_whitespace_pre',
	        output_whitespace_post: 'output_whitespace_post',
	        output_whitespace_both: 'output_whitespace_both',
	        logic_whitespace_pre:   'logic_whitespace_pre',
	        logic_whitespace_post:  'logic_whitespace_post',
	        logic_whitespace_both:  'logic_whitespace_both'
	    };

	    /**
	     * Token syntax definitions.
	     */
	    Twig.token.definitions = [
	        {
	            type: Twig.token.type.raw,
	            open: '{% raw %}',
	            close: '{% endraw %}'
	        },
	        {
	            type: Twig.token.type.raw,
	            open: '{% verbatim %}',
	            close: '{% endverbatim %}'
	        },
	        // *Whitespace type tokens*
	        //
	        // These typically take the form `{{- expression -}}` or `{{- expression }}` or `{{ expression -}}`.
	        {
	            type: Twig.token.type.output_whitespace_pre,
	            open: '{{-',
	            close: '}}'
	        },
	        {
	            type: Twig.token.type.output_whitespace_post,
	            open: '{{',
	            close: '-}}'
	        },
	        {
	            type: Twig.token.type.output_whitespace_both,
	            open: '{{-',
	            close: '-}}'
	        },
	        {
	            type: Twig.token.type.logic_whitespace_pre,
	            open: '{%-',
	            close: '%}'
	        },
	        {
	            type: Twig.token.type.logic_whitespace_post,
	            open: '{%',
	            close: '-%}'
	        },
	        {
	            type: Twig.token.type.logic_whitespace_both,
	            open: '{%-',
	            close: '-%}'
	        },
	        // *Output type tokens*
	        //
	        // These typically take the form `{{ expression }}`.
	        {
	            type: Twig.token.type.output,
	            open: '{{',
	            close: '}}'
	        },
	        // *Logic type tokens*
	        //
	        // These typically take a form like `{% if expression %}` or `{% endif %}`
	        {
	            type: Twig.token.type.logic,
	            open: '{%',
	            close: '%}'
	        },
	        // *Comment type tokens*
	        //
	        // These take the form `{# anything #}`
	        {
	            type: Twig.token.type.comment,
	            open: '{#',
	            close: '#}'
	        }
	    ];


	    /**
	     * What characters start "strings" in token definitions. We need this to ignore token close
	     * strings inside an expression.
	     */
	    Twig.token.strings = ['"', "'"];

	    Twig.token.findStart = function (template) {
	        var output = {
	                position: null,
	                close_position: null,
	                def: null
	            },
	            i,
	            token_template,
	            first_key_position,
	            close_key_position;

	        for (i=0;i<Twig.token.definitions.length;i++) {
	            token_template = Twig.token.definitions[i];
	            first_key_position = template.indexOf(token_template.open);
	            close_key_position = template.indexOf(token_template.close);

	            Twig.log.trace("Twig.token.findStart: ", "Searching for ", token_template.open, " found at ", first_key_position);

	            //Special handling for mismatched tokens
	            if (first_key_position >= 0) {
	                //This token matches the template
	                if (token_template.open.length !== token_template.close.length) {
	                    //This token has mismatched closing and opening tags
	                    if (close_key_position < 0) {
	                        //This token's closing tag does not match the template
	                        continue;
	                    }
	                }
	            }
	            // Does this token occur before any other types?
	            if (first_key_position >= 0 && (output.position === null || first_key_position < output.position)) {
	                output.position = first_key_position;
	                output.def = token_template;
	                output.close_position = close_key_position;
	            } else if (first_key_position >= 0 && output.position !== null && first_key_position === output.position) {
	                /*This token exactly matches another token,
	                greedily match to check if this token has a greater specificity*/
	                if (token_template.open.length > output.def.open.length) {
	                    //This token's opening tag is more specific than the previous match
	                    output.position = first_key_position;
	                    output.def = token_template;
	                    output.close_position = close_key_position;
	                } else if (token_template.open.length === output.def.open.length) {
	                    if (token_template.close.length > output.def.close.length) {
	                        //This token's opening tag is as specific as the previous match,
	                        //but the closing tag has greater specificity
	                        if (close_key_position >= 0 && close_key_position < output.close_position) {
	                            //This token's closing tag exists in the template,
	                            //and it occurs sooner than the previous match
	                            output.position = first_key_position;
	                            output.def = token_template;
	                            output.close_position = close_key_position;
	                        }
	                    } else if (close_key_position >= 0 && close_key_position < output.close_position) {
	                        //This token's closing tag is not more specific than the previous match,
	                        //but it occurs sooner than the previous match
	                        output.position = first_key_position;
	                        output.def = token_template;
	                        output.close_position = close_key_position;
	                    }
	                }
	            }
	        }

	        delete output['close_position'];

	        return output;
	    };

	    Twig.token.findEnd = function (template, token_def, start) {
	        var end = null,
	            found = false,
	            offset = 0,

	            // String position variables
	            str_pos = null,
	            str_found = null,
	            pos = null,
	            end_offset = null,
	            this_str_pos = null,
	            end_str_pos = null,

	            // For loop variables
	            i,
	            l;

	        while (!found) {
	            str_pos = null;
	            str_found = null;
	            pos = template.indexOf(token_def.close, offset);

	            if (pos >= 0) {
	                end = pos;
	                found = true;
	            } else {
	                // throw an exception
	                throw new Twig.Error("Unable to find closing bracket '" + token_def.close +
	                                "'" + " opened near template position " + start);
	            }

	            // Ignore quotes within comments; just look for the next comment close sequence,
	            // regardless of what comes before it. https://github.com/justjohn/twig.js/issues/95
	            if (token_def.type === Twig.token.type.comment) {
	              break;
	            }
	            // Ignore quotes within raw tag
	            // Fixes #283
	            if (token_def.type === Twig.token.type.raw) {
	                break;
	            }

	            l = Twig.token.strings.length;
	            for (i = 0; i < l; i += 1) {
	                this_str_pos = template.indexOf(Twig.token.strings[i], offset);

	                if (this_str_pos > 0 && this_str_pos < pos &&
	                        (str_pos === null || this_str_pos < str_pos)) {
	                    str_pos = this_str_pos;
	                    str_found = Twig.token.strings[i];
	                }
	            }

	            // We found a string before the end of the token, now find the string's end and set the search offset to it
	            if (str_pos !== null) {
	                end_offset = str_pos + 1;
	                end = null;
	                found = false;
	                while (true) {
	                    end_str_pos = template.indexOf(str_found, end_offset);
	                    if (end_str_pos < 0) {
	                        throw "Unclosed string in template";
	                    }
	                    // Ignore escaped quotes
	                    if (template.substr(end_str_pos - 1, 1) !== "\\") {
	                        offset = end_str_pos + 1;
	                        break;
	                    } else {
	                        end_offset = end_str_pos + 1;
	                    }
	                }
	            }
	        }
	        return end;
	    };

	    /**
	     * Convert a template into high-level tokens.
	     */
	    Twig.tokenize = function (template) {
	        var tokens = [],
	            // An offset for reporting errors locations in the template.
	            error_offset = 0,

	            // The start and type of the first token found in the template.
	            found_token = null,
	            // The end position of the matched token.
	            end = null;

	        while (template.length > 0) {
	            // Find the first occurance of any token type in the template
	            found_token = Twig.token.findStart(template);

	            Twig.log.trace("Twig.tokenize: ", "Found token: ", found_token);

	            if (found_token.position !== null) {
	                // Add a raw type token for anything before the start of the token
	                if (found_token.position > 0) {
	                    tokens.push({
	                        type: Twig.token.type.raw,
	                        value: template.substring(0, found_token.position)
	                    });
	                }
	                template = template.substr(found_token.position + found_token.def.open.length);
	                error_offset += found_token.position + found_token.def.open.length;

	                // Find the end of the token
	                end = Twig.token.findEnd(template, found_token.def, error_offset);

	                Twig.log.trace("Twig.tokenize: ", "Token ends at ", end);

	                tokens.push({
	                    type:  found_token.def.type,
	                    value: template.substring(0, end).trim()
	                });

	                if (template.substr( end + found_token.def.close.length, 1 ) === "\n") {
	                    switch (found_token.def.type) {
	                        case "logic_whitespace_pre":
	                        case "logic_whitespace_post":
	                        case "logic_whitespace_both":
	                        case "logic":
	                            // Newlines directly after logic tokens are ignored
	                            end += 1;
	                            break;
	                    }
	                }

	                template = template.substr(end + found_token.def.close.length);

	                // Increment the position in the template
	                error_offset += end + found_token.def.close.length;

	            } else {
	                // No more tokens -> add the rest of the template as a raw-type token
	                tokens.push({
	                    type: Twig.token.type.raw,
	                    value: template
	                });
	                template = '';
	            }
	        }

	        return tokens;
	    };


	    Twig.compile = function (tokens) {
	        try {

	            // Output and intermediate stacks
	            var output = [],
	                stack = [],
	                // The tokens between open and close tags
	                intermediate_output = [],

	                token = null,
	                logic_token = null,
	                unclosed_token = null,
	                // Temporary previous token.
	                prev_token = null,
	                // Temporary previous output.
	                prev_output = null,
	                // Temporary previous intermediate output.
	                prev_intermediate_output = null,
	                // The previous token's template
	                prev_template = null,
	                // Token lookahead
	                next_token = null,
	                // The output token
	                tok_output = null,

	                // Logic Token values
	                type = null,
	                open = null,
	                next = null;

	            var compile_output = function(token) {
	                Twig.expression.compile.apply(this, [token]);
	                if (stack.length > 0) {
	                    intermediate_output.push(token);
	                } else {
	                    output.push(token);
	                }
	            };

	            var compile_logic = function(token) {
	                // Compile the logic token
	                logic_token = Twig.logic.compile.apply(this, [token]);

	                type = logic_token.type;
	                open = Twig.logic.handler[type].open;
	                next = Twig.logic.handler[type].next;

	                Twig.log.trace("Twig.compile: ", "Compiled logic token to ", logic_token,
	                                                 " next is: ", next, " open is : ", open);

	                // Not a standalone token, check logic stack to see if this is expected
	                if (open !== undefined && !open) {
	                    prev_token = stack.pop();
	                    prev_template = Twig.logic.handler[prev_token.type];

	                    if (Twig.indexOf(prev_template.next, type) < 0) {
	                        throw new Error(type + " not expected after a " + prev_token.type);
	                    }

	                    prev_token.output = prev_token.output || [];

	                    prev_token.output = prev_token.output.concat(intermediate_output);
	                    intermediate_output = [];

	                    tok_output = {
	                        type: Twig.token.type.logic,
	                        token: prev_token
	                    };
	                    if (stack.length > 0) {
	                        intermediate_output.push(tok_output);
	                    } else {
	                        output.push(tok_output);
	                    }
	                }

	                // This token requires additional tokens to complete the logic structure.
	                if (next !== undefined && next.length > 0) {
	                    Twig.log.trace("Twig.compile: ", "Pushing ", logic_token, " to logic stack.");

	                    if (stack.length > 0) {
	                        // Put any currently held output into the output list of the logic operator
	                        // currently at the head of the stack before we push a new one on.
	                        prev_token = stack.pop();
	                        prev_token.output = prev_token.output || [];
	                        prev_token.output = prev_token.output.concat(intermediate_output);
	                        stack.push(prev_token);
	                        intermediate_output = [];
	                    }

	                    // Push the new logic token onto the logic stack
	                    stack.push(logic_token);

	                } else if (open !== undefined && open) {
	                    tok_output = {
	                        type: Twig.token.type.logic,
	                        token: logic_token
	                    };
	                    // Standalone token (like {% set ... %}
	                    if (stack.length > 0) {
	                        intermediate_output.push(tok_output);
	                    } else {
	                        output.push(tok_output);
	                    }
	                }
	            };

	            while (tokens.length > 0) {
	                token = tokens.shift();
	                prev_output = output[output.length - 1];
	                prev_intermediate_output = intermediate_output[intermediate_output.length - 1];
	                next_token = tokens[0];
	                Twig.log.trace("Compiling token ", token);
	                switch (token.type) {
	                    case Twig.token.type.raw:
	                        if (stack.length > 0) {
	                            intermediate_output.push(token);
	                        } else {
	                            output.push(token);
	                        }
	                        break;

	                    case Twig.token.type.logic:
	                        compile_logic.call(this, token);
	                        break;

	                    // Do nothing, comments should be ignored
	                    case Twig.token.type.comment:
	                        break;

	                    case Twig.token.type.output:
	                        compile_output.call(this, token);
	                        break;

	                    //Kill whitespace ahead and behind this token
	                    case Twig.token.type.logic_whitespace_pre:
	                    case Twig.token.type.logic_whitespace_post:
	                    case Twig.token.type.logic_whitespace_both:
	                    case Twig.token.type.output_whitespace_pre:
	                    case Twig.token.type.output_whitespace_post:
	                    case Twig.token.type.output_whitespace_both:
	                        if (token.type !== Twig.token.type.output_whitespace_post && token.type !== Twig.token.type.logic_whitespace_post) {
	                            if (prev_output) {
	                                //If the previous output is raw, pop it off
	                                if (prev_output.type === Twig.token.type.raw) {
	                                    output.pop();

	                                    //If the previous output is not just whitespace, trim it
	                                    if (prev_output.value.match(/^\s*$/) === null) {
	                                        prev_output.value = prev_output.value.trim();
	                                        //Repush the previous output
	                                        output.push(prev_output);
	                                    }
	                                }
	                            }

	                            if (prev_intermediate_output) {
	                                //If the previous intermediate output is raw, pop it off
	                                if (prev_intermediate_output.type === Twig.token.type.raw) {
	                                    intermediate_output.pop();

	                                    //If the previous output is not just whitespace, trim it
	                                    if (prev_intermediate_output.value.match(/^\s*$/) === null) {
	                                        prev_intermediate_output.value = prev_intermediate_output.value.trim();
	                                        //Repush the previous intermediate output
	                                        intermediate_output.push(prev_intermediate_output);
	                                    }
	                                }
	                            }
	                        }

	                        //Compile this token
	                        switch (token.type) {
	                            case Twig.token.type.output_whitespace_pre:
	                            case Twig.token.type.output_whitespace_post:
	                            case Twig.token.type.output_whitespace_both:
	                                compile_output.call(this, token);
	                                break;
	                            case Twig.token.type.logic_whitespace_pre:
	                            case Twig.token.type.logic_whitespace_post:
	                            case Twig.token.type.logic_whitespace_both:
	                                compile_logic.call(this, token);
	                                break;
	                        }

	                        if (token.type !== Twig.token.type.output_whitespace_pre && token.type !== Twig.token.type.logic_whitespace_pre) {
	                            if (next_token) {
	                                //If the next token is raw, shift it out
	                                if (next_token.type === Twig.token.type.raw) {
	                                    tokens.shift();

	                                    //If the next token is not just whitespace, trim it
	                                    if (next_token.value.match(/^\s*$/) === null) {
	                                        next_token.value = next_token.value.trim();
	                                        //Unshift the next token
	                                        tokens.unshift(next_token);
	                                    }
	                                }
	                            }
	                        }

	                        break;
	                }

	                Twig.log.trace("Twig.compile: ", " Output: ", output,
	                                                 " Logic Stack: ", stack,
	                                                 " Pending Output: ", intermediate_output );
	            }

	            // Verify that there are no logic tokens left in the stack.
	            if (stack.length > 0) {
	                unclosed_token = stack.pop();
	                throw new Error("Unable to find an end tag for " + unclosed_token.type +
	                                ", expecting one of " + unclosed_token.next);
	            }
	            return output;
	        } catch (ex) {
	            if (this.options.rethrow) {
	                if (ex.type == 'TwigException' && !ex.file) {
	                    ex.file = this.id;
	                }

	                throw ex
	            }
	            else {
	                Twig.log.error("Error compiling twig template " + this.id + ": ");
	                if (ex.stack) {
	                    Twig.log.error(ex.stack);
	                } else {
	                    Twig.log.error(ex.toString());
	                }
	            }
	        }
	    };

	    /**
	     * Parse a compiled template.
	     *
	     * @param {Array} tokens The compiled tokens.
	     * @param {Object} context The render context.
	     *
	     * @return {string} The parsed template.
	     */
	    Twig.parse = function (tokens, context, allow_async) {
	        var that = this,
	            output = [],

	            // Store any error that might be thrown by the promise chain.
	            err = null,

	            // This will be set to is_async if template renders synchronously
	            is_async = true,
	            promise = null,

	            // Track logic chains
	            chain = true;


	        function handleException(ex) {
	            if (that.options.rethrow) {
	                if (typeof ex === 'string') {
	                    ex = new Twig.Error(ex)
	                }

	                if (ex.type == 'TwigException' && !ex.file) {
	                    ex.file = that.id;
	                }

	                throw ex;
	            }
	            else {
	                Twig.log.error("Error parsing twig template " + that.id + ": ");
	                if (ex.stack) {
	                    Twig.log.error(ex.stack);
	                } else {
	                    Twig.log.error(ex.toString());
	                }

	                if (Twig.debug) {
	                    return ex.toString();
	                }
	            }
	        }

	        promise = Twig.async.forEach(tokens, function parseToken(token) {
	            Twig.log.debug("Twig.parse: ", "Parsing token: ", token);

	            switch (token.type) {
	                case Twig.token.type.raw:
	                    output.push(Twig.filters.raw(token.value));
	                    break;

	                case Twig.token.type.logic:
	                    var logic_token = token.token;

	                    return Twig.logic.parseAsync.apply(that, [logic_token, context, chain])
	                    .then(function(logic) {
	                        if (logic.chain !== undefined) {
	                            chain = logic.chain;
	                        }
	                        if (logic.context !== undefined) {
	                            context = logic.context;
	                        }
	                        if (logic.output !== undefined) {
	                            output.push(logic.output);
	                        }
	                    });
	                    break;

	                case Twig.token.type.comment:
	                    // Do nothing, comments should be ignored
	                    break;

	                //Fall through whitespace to output
	                case Twig.token.type.output_whitespace_pre:
	                case Twig.token.type.output_whitespace_post:
	                case Twig.token.type.output_whitespace_both:
	                case Twig.token.type.output:
	                    Twig.log.debug("Twig.parse: ", "Output token: ", token.stack);
	                    // Parse the given expression in the given context
	                    return Twig.expression.parseAsync.apply(that, [token.stack, context])
	                    .then(function(o) {
	                        output.push(o);
	                    });
	            }
	        })
	        .then(function() {
	            output = Twig.output.apply(that, [output]);
	            is_async = false;
	            return output;
	        })
	        .catch(function(e) {
	            if (allow_async)
	                handleException(e);

	            err = e;
	        });

	        // If `allow_async` we will always return a promise since we do not
	        // know in advance if we are going to run asynchronously or not.
	        if (allow_async)
	            return promise;

	        // Handle errors here if we fail synchronously.
	        if (err !== null)
	            return handleException(err);

	        // If `allow_async` is not true we should not allow the user
	        // to use asynchronous functions or filters.
	        if (is_async)
	            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');

	        return output;
	    };

	    /**
	     * Tokenize and compile a string template.
	     *
	     * @param {string} data The template.
	     *
	     * @return {Array} The compiled tokens.
	     */
	    Twig.prepare = function(data) {
	        var tokens, raw_tokens;

	        // Tokenize
	        Twig.log.debug("Twig.prepare: ", "Tokenizing ", data);
	        raw_tokens = Twig.tokenize.apply(this, [data]);

	        // Compile
	        Twig.log.debug("Twig.prepare: ", "Compiling ", raw_tokens);
	        tokens = Twig.compile.apply(this, [raw_tokens]);

	        Twig.log.debug("Twig.prepare: ", "Compiled ", tokens);

	        return tokens;
	    };

	    /**
	     * Join the output token's stack and escape it if needed
	     *
	     * @param {Array} Output token's stack
	     *
	     * @return {string|String} Autoescaped output
	     */
	    Twig.output = function(output) {
	        if (!this.options.autoescape) {
	            return output.join("");
	        }

	        var strategy = 'html';
	        if(typeof this.options.autoescape == 'string')
	            strategy = this.options.autoescape;

	        // [].map would be better but it's not supported by IE8-
	        var escaped_output = [];
	        Twig.forEach(output, function (str) {
	            if (str && (str.twig_markup !== true && str.twig_markup != strategy)) {
	                str = Twig.filters.escape(str, [ strategy ]);
	            }
	            escaped_output.push(str);
	        });
	        return Twig.Markup(escaped_output.join(""));
	    }

	    // Namespace for template storage and retrieval
	    Twig.Templates = {
	        /**
	         * Registered template loaders - use Twig.Templates.registerLoader to add supported loaders
	         * @type {Object}
	         */
	        loaders: {},

	        /**
	         * Registered template parsers - use Twig.Templates.registerParser to add supported parsers
	         * @type {Object}
	         */
	        parsers: {},

	        /**
	         * Cached / loaded templates
	         * @type {Object}
	         */
	        registry: {}
	    };

	    /**
	     * Is this id valid for a twig template?
	     *
	     * @param {string} id The ID to check.
	     *
	     * @throws {Twig.Error} If the ID is invalid or used.
	     * @return {boolean} True if the ID is valid.
	     */
	    Twig.validateId = function(id) {
	        if (id === "prototype") {
	            throw new Twig.Error(id + " is not a valid twig identifier");
	        } else if (Twig.cache && Twig.Templates.registry.hasOwnProperty(id)) {
	            throw new Twig.Error("There is already a template with the ID " + id);
	        }
	        return true;
	    }

	    /**
	     * Register a template loader
	     *
	     * @example
	     * Twig.extend(function(Twig) {
	     *    Twig.Templates.registerLoader('custom_loader', function(location, params, callback, error_callback) {
	     *        // ... load the template ...
	     *        params.data = loadedTemplateData;
	     *        // create and return the template
	     *        var template = new Twig.Template(params);
	     *        if (typeof callback === 'function') {
	     *            callback(template);
	     *        }
	     *        return template;
	     *    });
	     * });
	     *
	     * @param {String} method_name The method this loader is intended for (ajax, fs)
	     * @param {Function} func The function to execute when loading the template
	     * @param {Object|undefined} scope Optional scope parameter to bind func to
	     *
	     * @throws Twig.Error
	     *
	     * @return {void}
	     */
	    Twig.Templates.registerLoader = function(method_name, func, scope) {
	        if (typeof func !== 'function') {
	            throw new Twig.Error('Unable to add loader for ' + method_name + ': Invalid function reference given.');
	        }
	        if (scope) {
	            func = func.bind(scope);
	        }
	        this.loaders[method_name] = func;
	    };

	    /**
	     * Remove a registered loader
	     *
	     * @param {String} method_name The method name for the loader you wish to remove
	     *
	     * @return {void}
	     */
	    Twig.Templates.unRegisterLoader = function(method_name) {
	        if (this.isRegisteredLoader(method_name)) {
	            delete this.loaders[method_name];
	        }
	    };

	    /**
	     * See if a loader is registered by its method name
	     *
	     * @param {String} method_name The name of the loader you are looking for
	     *
	     * @return {boolean}
	     */
	    Twig.Templates.isRegisteredLoader = function(method_name) {
	        return this.loaders.hasOwnProperty(method_name);
	    };

	    /**
	     * Register a template parser
	     *
	     * @example
	     * Twig.extend(function(Twig) {
	     *    Twig.Templates.registerParser('custom_parser', function(params) {
	     *        // this template source can be accessed in params.data
	     *        var template = params.data
	     *
	     *        // ... custom process that modifies the template
	     *
	     *        // return the parsed template
	     *        return template;
	     *    });
	     * });
	     *
	     * @param {String} method_name The method this parser is intended for (twig, source)
	     * @param {Function} func The function to execute when parsing the template
	     * @param {Object|undefined} scope Optional scope parameter to bind func to
	     *
	     * @throws Twig.Error
	     *
	     * @return {void}
	     */
	    Twig.Templates.registerParser = function(method_name, func, scope) {
	        if (typeof func !== 'function') {
	            throw new Twig.Error('Unable to add parser for ' + method_name + ': Invalid function regerence given.');
	        }

	        if (scope) {
	            func = func.bind(scope);
	        }

	        this.parsers[method_name] = func;
	    };

	    /**
	     * Remove a registered parser
	     *
	     * @param {String} method_name The method name for the parser you wish to remove
	     *
	     * @return {void}
	     */
	    Twig.Templates.unRegisterParser = function(method_name) {
	        if (this.isRegisteredParser(method_name)) {
	            delete this.parsers[method_name];
	        }
	    };

	    /**
	     * See if a parser is registered by its method name
	     *
	     * @param {String} method_name The name of the parser you are looking for
	     *
	     * @return {boolean}
	     */
	    Twig.Templates.isRegisteredParser = function(method_name) {
	        return this.parsers.hasOwnProperty(method_name);
	    };

	    /**
	     * Save a template object to the store.
	     *
	     * @param {Twig.Template} template   The twig.js template to store.
	     */
	    Twig.Templates.save = function(template) {
	        if (template.id === undefined) {
	            throw new Twig.Error("Unable to save template with no id");
	        }
	        Twig.Templates.registry[template.id] = template;
	    };

	    /**
	     * Load a previously saved template from the store.
	     *
	     * @param {string} id   The ID of the template to load.
	     *
	     * @return {Twig.Template} A twig.js template stored with the provided ID.
	     */
	    Twig.Templates.load = function(id) {
	        if (!Twig.Templates.registry.hasOwnProperty(id)) {
	            return null;
	        }
	        return Twig.Templates.registry[id];
	    };

	    /**
	     * Load a template from a remote location using AJAX and saves in with the given ID.
	     *
	     * Available parameters:
	     *
	     *      async:       Should the HTTP request be performed asynchronously.
	     *                      Defaults to true.
	     *      method:      What method should be used to load the template
	     *                      (fs or ajax)
	     *      parser:      What method should be used to parse the template
	     *                      (twig or source)
	     *      precompiled: Has the template already been compiled.
	     *
	     * @param {string} location  The remote URL to load as a template.
	     * @param {Object} params The template parameters.
	     * @param {function} callback  A callback triggered when the template finishes loading.
	     * @param {function} error_callback  A callback triggered if an error occurs loading the template.
	     *
	     *
	     */
	    Twig.Templates.loadRemote = function(location, params, callback, error_callback) {
	        var loader;

	        // Default to async
	        if (params.async === undefined) {
	            params.async = true;
	        }

	        // Default to the URL so the template is cached.
	        if (params.id === undefined) {
	            params.id = location;
	        }

	        // Check for existing template
	        if (Twig.cache && Twig.Templates.registry.hasOwnProperty(params.id)) {
	            // A template is already saved with the given id.
	            if (typeof callback === 'function') {
	                callback(Twig.Templates.registry[params.id]);
	            }
	            // TODO: if async, return deferred promise
	            return Twig.Templates.registry[params.id];
	        }

	        //if the parser name hasn't been set, default it to twig
	        params.parser = params.parser || 'twig';

	        // Assume 'fs' if the loader is not defined
	        loader = this.loaders[params.method] || this.loaders.fs;
	        return loader.apply(this, arguments);
	    };

	    // Determine object type
	    function is(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    }

	    /**
	     * Create a new twig.js template.
	     *
	     * Parameters: {
	     *      data:   The template, either pre-compiled tokens or a string template
	     *      id:     The name of this template
	     *      blocks: Any pre-existing block from a child template
	     * }
	     *
	     * @param {Object} params The template parameters.
	     */
	    Twig.Template = function ( params ) {
	        var data = params.data,
	            id = params.id,
	            blocks = params.blocks,
	            macros = params.macros || {},
	            base = params.base,
	            path = params.path,
	            url = params.url,
	            name = params.name,
	            method = params.method,
	            // parser options
	            options = params.options;

	        // # What is stored in a Twig.Template
	        //
	        // The Twig Template hold several chucks of data.
	        //
	        //     {
	        //          id:     The token ID (if any)
	        //          tokens: The list of tokens that makes up this template.
	        //          blocks: The list of block this template contains.
	        //          base:   The base template (if any)
	        //            options:  {
	        //                Compiler/parser options
	        //
	        //                strict_variables: true/false
	        //                    Should missing variable/keys emit an error message. If false, they default to null.
	        //            }
	        //     }
	        //

	        this.id     = id;
	        this.method = method;
	        this.base   = base;
	        this.path   = path;
	        this.url    = url;
	        this.name   = name;
	        this.macros = macros;
	        this.options = options;

	        this.reset(blocks);

	        if (is('String', data)) {
	            this.tokens = Twig.prepare.apply(this, [data]);
	        } else {
	            this.tokens = data;
	        }

	        if (id !== undefined) {
	            Twig.Templates.save(this);
	        }
	    };

	    Twig.Template.prototype.reset = function(blocks) {
	        Twig.log.debug("Twig.Template.reset", "Reseting template " + this.id);
	        this.blocks = {};
	        this.importedBlocks = [];
	        this.originalBlockTokens = {};
	        this.child = {
	            blocks: blocks || {}
	        };
	        this.extend = null;
	    };

	    Twig.Template.prototype.render = function (context, params, allow_async) {
	        params = params || {};

	        var that = this,

	            // Store any error that might be thrown by the promise chain.
	            err = null,

	            // This will be set to is_async if template renders synchronously
	            is_async = true,
	            promise = null,

	            result,
	            url;

	        this.context = context || {};

	        // Clear any previous state
	        this.reset();
	        if (params.blocks) {
	            this.blocks = params.blocks;
	        }
	        if (params.macros) {
	            this.macros = params.macros;
	        }

	        var cb = function(output) {
	            // Does this template extend another
	            if (that.extend) {
	                var ext_template;

	                // check if the template is provided inline
	                if ( that.options.allowInlineIncludes ) {
	                    ext_template = Twig.Templates.load(that.extend);
	                    if ( ext_template ) {
	                        ext_template.options = that.options;
	                    }
	                }

	                // check for the template file via include
	                if (!ext_template) {
	                    url = Twig.path.parsePath(that, that.extend);

	                    ext_template = Twig.Templates.loadRemote(url, {
	                        method: that.getLoaderMethod(),
	                        base: that.base,
	                        async:  false,
	                        id:     url,
	                        options: that.options
	                    });
	                }

	                that.parent = ext_template;

	                return that.parent.renderAsync(that.context, {
	                    blocks: that.blocks
	                });
	            }

	            if (params.output == 'blocks') {
	                return that.blocks;
	            } else if (params.output == 'macros') {
	                return that.macros;
	            } else {
	                return output;
	            }
	        };

	        promise = Twig.parseAsync.apply(this, [this.tokens, this.context])
	        .then(cb)
	        .then(function(v) {
	            is_async = false;
	            result = v;
	            return v;
	        })
	        .catch(function(e) {
	            if (allow_async)
	                throw e;

	            err = e;
	        })

	        // If `allow_async` we will always return a promise since we do not
	        // know in advance if we are going to run asynchronously or not.
	        if (allow_async)
	            return promise;

	        // Handle errors here if we fail synchronously.
	        if (err !== null)
	            throw err;

	        // If `allow_async` is not true we should not allow the user
	        // to use asynchronous functions or filters.
	        if (is_async)
	            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');

	        return result;
	    };

	    Twig.Template.prototype.importFile = function(file) {
	        var url, sub_template;
	        if (!this.url && this.options.allowInlineIncludes) {
	            file = this.path ? Twig.path.parsePath(this, file) : file;
	            sub_template = Twig.Templates.load(file);

	            if (!sub_template) {
	                sub_template = Twig.Templates.loadRemote(url, {
	                    id: file,
	                    method: this.getLoaderMethod(),
	                    async: false,
	                    path: file,
	                    options: this.options
	                });

	                if (!sub_template) {
	                    throw new Twig.Error("Unable to find the template " + file);
	                }
	            }

	            sub_template.options = this.options;

	            return sub_template;
	        }

	        url = Twig.path.parsePath(this, file);

	        // Load blocks from an external file
	        sub_template = Twig.Templates.loadRemote(url, {
	            method: this.getLoaderMethod(),
	            base: this.base,
	            async: false,
	            options: this.options,
	            id: url
	        });

	        return sub_template;
	    };

	    Twig.Template.prototype.importBlocks = function(file, override) {
	        var sub_template = this.importFile(file),
	            context = this.context,
	            that = this,
	            key;

	        override = override || false;

	        sub_template.render(context);

	        // Mixin blocks
	        Twig.forEach(Object.keys(sub_template.blocks), function(key) {
	            if (override || that.blocks[key] === undefined) {
	                that.blocks[key] = sub_template.blocks[key];
	                that.importedBlocks.push(key);
	            }
	        });
	    };

	    Twig.Template.prototype.importMacros = function(file) {
	        var url = Twig.path.parsePath(this, file);

	        // load remote template
	        var remoteTemplate = Twig.Templates.loadRemote(url, {
	            method: this.getLoaderMethod(),
	            async: false,
	            id: url
	        });

	        return remoteTemplate;
	    };

	    Twig.Template.prototype.getLoaderMethod = function() {
	        if (this.path) {
	            return 'fs';
	        }
	        if (this.url) {
	            return 'ajax';
	        }
	        return this.method || 'fs';
	    };

	    Twig.Template.prototype.compile = function(options) {
	        // compile the template into raw JS
	        return Twig.compiler.compile(this, options);
	    };

	    /**
	     * Create safe output
	     *
	     * @param {string} Content safe to output
	     *
	     * @return {String} Content wrapped into a String
	     */

	    Twig.Markup = function(content, strategy) {
	        if(typeof strategy == 'undefined') {
	            strategy = true;
	        }

	        if (typeof content === 'string' && content.length > 0) {
	            content = new String(content);
	            content.twig_markup = strategy;
	        }
	        return content;
	    };

	    return Twig;

	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	// ## twig.compiler.js
	//
	// This file handles compiling templates into JS
	module.exports = function (Twig) {
	    /**
	     * Namespace for compilation.
	     */
	    Twig.compiler = {
	        module: {}
	    };

	    // Compile a Twig Template to output.
	    Twig.compiler.compile = function(template, options) {
	        // Get tokens
	        var tokens = JSON.stringify(template.tokens)
	            , id = template.id
	            , output;

	        if (options.module) {
	            if (Twig.compiler.module[options.module] === undefined) {
	                throw new Twig.Error("Unable to find module type " + options.module);
	            }
	            output = Twig.compiler.module[options.module](id, tokens, options.twig);
	        } else {
	            output = Twig.compiler.wrap(id, tokens);
	        }
	        return output;
	    };

	    Twig.compiler.module = {
	        amd: function(id, tokens, pathToTwig) {
	            return 'define(["' + pathToTwig + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + Twig.compiler.wrap(id, tokens) + '\n\treturn templates;\n});';
	        }
	        , node: function(id, tokens) {
	            return 'var twig = require("twig").twig;\n'
	                + 'exports.template = ' + Twig.compiler.wrap(id, tokens)
	        }
	        , cjs2: function(id, tokens, pathToTwig) {
	            return 'module.declare([{ twig: "' + pathToTwig + '" }], function (require, exports, module) {\n'
	                        + '\tvar twig = require("twig").twig;\n'
	                        + '\texports.template = ' + Twig.compiler.wrap(id, tokens)
	                    + '\n});'
	        }
	    };

	    Twig.compiler.wrap = function(id, tokens) {
	        return 'twig({id:"'+id.replace('"', '\\"')+'", data:'+tokens+', precompiled: true});\n';
	    };

	    return Twig;
	};


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// ## twig.expression.js
	//
	// This file handles tokenizing, compiling and parsing expressions.
	module.exports = function (Twig) {
	    "use strict";

	    function parseParams(thisArg, params, context) {
	        if (params)
	            return Twig.expression.parseAsync.apply(thisArg, [params, context]);

	        return Twig.Promise.resolve(false);
	    }

	    /**
	     * Namespace for expression handling.
	     */
	    Twig.expression = { };

	    __webpack_require__(4)(Twig);

	    /**
	     * Reserved word that can't be used as variable names.
	     */
	    Twig.expression.reservedWords = [
	        "true", "false", "null", "TRUE", "FALSE", "NULL", "_context", "and", "b-and", "or", "b-or", "b-xor", "in", "not in", "if"
	    ];

	    /**
	     * The type of tokens used in expressions.
	     */
	    Twig.expression.type = {
	        comma:      'Twig.expression.type.comma',
	        operator: {
	            unary:  'Twig.expression.type.operator.unary',
	            binary: 'Twig.expression.type.operator.binary'
	        },
	        string:     'Twig.expression.type.string',
	        bool:       'Twig.expression.type.bool',
	        slice:      'Twig.expression.type.slice',
	        array: {
	            start:  'Twig.expression.type.array.start',
	            end:    'Twig.expression.type.array.end'
	        },
	        object: {
	            start:  'Twig.expression.type.object.start',
	            end:    'Twig.expression.type.object.end'
	        },
	        parameter: {
	            start:  'Twig.expression.type.parameter.start',
	            end:    'Twig.expression.type.parameter.end'
	        },
	        subexpression: {
	            start:  'Twig.expression.type.subexpression.start',
	            end:    'Twig.expression.type.subexpression.end'
	        },
	        key: {
	            period:   'Twig.expression.type.key.period',
	            brackets: 'Twig.expression.type.key.brackets'
	        },
	        filter:     'Twig.expression.type.filter',
	        _function:  'Twig.expression.type._function',
	        variable:   'Twig.expression.type.variable',
	        number:     'Twig.expression.type.number',
	        _null:     'Twig.expression.type.null',
	        context:    'Twig.expression.type.context',
	        test:       'Twig.expression.type.test'
	    };

	    Twig.expression.set = {
	        // What can follow an expression (in general)
	        operations: [
	            Twig.expression.type.filter,
	            Twig.expression.type.operator.unary,
	            Twig.expression.type.operator.binary,
	            Twig.expression.type.array.end,
	            Twig.expression.type.object.end,
	            Twig.expression.type.parameter.end,
	            Twig.expression.type.subexpression.end,
	            Twig.expression.type.comma,
	            Twig.expression.type.test
	        ],
	        expressions: [
	            Twig.expression.type._function,
	            Twig.expression.type.bool,
	            Twig.expression.type.string,
	            Twig.expression.type.variable,
	            Twig.expression.type.number,
	            Twig.expression.type._null,
	            Twig.expression.type.context,
	            Twig.expression.type.parameter.start,
	            Twig.expression.type.array.start,
	            Twig.expression.type.object.start,
	            Twig.expression.type.subexpression.start,
	            Twig.expression.type.operator.unary
	        ]
	    };

	    // Most expressions allow a '.' or '[' after them, so we provide a convenience set
	    Twig.expression.set.operations_extended = Twig.expression.set.operations.concat([
	                    Twig.expression.type.key.period,
	                    Twig.expression.type.key.brackets,
	                    Twig.expression.type.slice]);

	    // Some commonly used compile and parse functions.
	    Twig.expression.fn = {
	        compile: {
	            push: function(token, stack, output) {
	                output.push(token);
	            },
	            push_both: function(token, stack, output) {
	                output.push(token);
	                stack.push(token);
	            }
	        },
	        parse: {
	            push: function(token, stack, context) {
	                stack.push(token);
	            },
	            push_value: function(token, stack, context) {
	                stack.push(token.value);
	            }
	        }
	    };

	    // The regular expressions and compile/parse logic used to match tokens in expressions.
	    //
	    // Properties:
	    //
	    //      type:  The type of expression this matches
	    //
	    //      regex: One or more regular expressions that matche the format of the token.
	    //
	    //      next:  Valid tokens that can occur next in the expression.
	    //
	    // Functions:
	    //
	    //      compile: A function that compiles the raw regular expression match into a token.
	    //
	    //      parse:   A function that parses the compiled token into output.
	    //
	    Twig.expression.definitions = [
	        {
	            type: Twig.expression.type.test,
	            regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*(\s?as)?)/,
	            next: Twig.expression.set.operations.concat([Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.filter   = token.match[2];
	                token.modifier = token.match[1];
	                delete token.match;
	                delete token.value;
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var value = stack.pop();

	                return parseParams(this, token.params, context)
	                .then(function(params) {
	                    var result = Twig.test(token.filter, value, params);

	                    if (token.modifier == 'not') {
	                        stack.push(!result);
	                    } else {
	                        stack.push(result);
	                    }
	                });
	            }
	        },
	        {
	            type: Twig.expression.type.comma,
	            // Match a comma
	            regex: /^,/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end, Twig.expression.type.object.end]),
	            compile: function(token, stack, output) {
	                var i = stack.length - 1,
	                    stack_token;

	                delete token.match;
	                delete token.value;

	                // pop tokens off the stack until the start of the object
	                for(;i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token.type === Twig.expression.type.object.start
	                            || stack_token.type === Twig.expression.type.parameter.start
	                            || stack_token.type === Twig.expression.type.array.start) {
	                        stack.push(stack_token);
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            }
	        },
	        {
	            /**
	             * Match a number (integer or decimal)
	             */
	            type: Twig.expression.type.number,
	            // match a number
	            regex: /^\-?\d+(\.\d+)?/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                token.value = Number(token.value);
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            type: Twig.expression.type.operator.binary,
	            // Match any of ?:, +, *, /, -, %, ~, <, <=, >, >=, !=, ==, **, ?, :, and, b-and, or, b-or, b-xor, in, not in
	            // and, or, in, not in can be followed by a space or parenthesis
	            regex: /(^\?\:|^(b\-and)|^(b\-or)|^(b\-xor)|^[\+\-~%\?]|^[\:](?!\d\])|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^(and)[\(|\s+]|^(or)[\(|\s+]|^(in)[\(|\s+]|^(not in)[\(|\s+]|^\.\.)/,
	            next: Twig.expression.set.expressions,
	            transform: function(match, tokens) {
	                switch(match[0]) {
	                    case 'and(':
	                    case 'or(':
	                    case 'in(':
	                    case 'not in(':
	                        //Strip off the ( if it exists
	                        tokens[tokens.length - 1].value = match[2];
	                        return match[0];
	                        break;
	                    default:
	                        return '';
	                }
	            },
	            compile: function(token, stack, output) {
	                delete token.match;

	                token.value = token.value.trim();
	                var value = token.value,
	                    operator = Twig.expression.operator.lookup(value, token);

	                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);

	                while (stack.length > 0 &&
	                       (stack[stack.length-1].type == Twig.expression.type.operator.unary || stack[stack.length-1].type == Twig.expression.type.operator.binary) &&
	                            (
	                                (operator.associativity === Twig.expression.operator.leftToRight &&
	                                 operator.precidence    >= stack[stack.length-1].precidence) ||

	                                (operator.associativity === Twig.expression.operator.rightToLeft &&
	                                 operator.precidence    >  stack[stack.length-1].precidence)
	                            )
	                       ) {
	                     var temp = stack.pop();
	                     output.push(temp);
	                }

	                if (value === ":") {
	                    // Check if this is a ternary or object key being set
	                    if (stack[stack.length - 1] && stack[stack.length-1].value === "?") {
	                        // Continue as normal for a ternary
	                    } else {
	                        // This is not a ternary so we push the token to the output where it can be handled
	                        //   when the assocated object is closed.
	                        var key_token = output.pop();

	                        if (key_token.type === Twig.expression.type.string ||
	                                key_token.type === Twig.expression.type.variable) {
	                            token.key = key_token.value;
	                        } else if (key_token.type === Twig.expression.type.number) {
	                            // Convert integer keys into string keys
	                            token.key = key_token.value.toString();
	                        } else if (key_token.expression &&
	                            (key_token.type === Twig.expression.type.parameter.end ||
	                            key_token.type == Twig.expression.type.subexpression.end)) {
	                            token.params = key_token.params;
	                        } else {
	                            throw new Twig.Error("Unexpected value before ':' of " + key_token.type + " = " + key_token.value);
	                        }

	                        output.push(token);
	                        return;
	                    }
	                } else {
	                    stack.push(operator);
	                }
	            },
	            parse: function(token, stack, context) {
	                if (token.key) {
	                    // handle ternary ':' operator
	                    stack.push(token);
	                } else if (token.params) {
	                    // handle "{(expression):value}"
	                    return Twig.expression.parseAsync.apply(this, [token.params, context])
	                    .then(function(key) {
	                        token.key = key;
	                        stack.push(token);

	                        //If we're in a loop, we might need token.params later, especially in this form of "(expression):value"
	                        if (!context.loop) {
	                            delete(token.params);
	                        }
	                    });
	                } else {
	                    Twig.expression.operator.parse(token.value, stack);
	                }
	            }
	        },
	        {
	            type: Twig.expression.type.operator.unary,
	            // Match any of not
	            regex: /(^not\s+)/,
	            next: Twig.expression.set.expressions,
	            compile: function(token, stack, output) {
	                delete token.match;

	                token.value = token.value.trim();
	                var value = token.value,
	                    operator = Twig.expression.operator.lookup(value, token);

	                Twig.log.trace("Twig.expression.compile: ", "Operator: ", operator, " from ", value);

	                while (stack.length > 0 &&
	                       (stack[stack.length-1].type == Twig.expression.type.operator.unary || stack[stack.length-1].type == Twig.expression.type.operator.binary) &&
	                            (
	                                (operator.associativity === Twig.expression.operator.leftToRight &&
	                                 operator.precidence    >= stack[stack.length-1].precidence) ||

	                                (operator.associativity === Twig.expression.operator.rightToLeft &&
	                                 operator.precidence    >  stack[stack.length-1].precidence)
	                            )
	                       ) {
	                     var temp = stack.pop();
	                     output.push(temp);
	                }

	                stack.push(operator);
	            },
	            parse: function(token, stack, context) {
	                Twig.expression.operator.parse(token.value, stack);
	            }
	        },
	        {
	            /**
	             * Match a string. This is anything between a pair of single or double quotes.
	             */
	            type: Twig.expression.type.string,
	            // See: http://blog.stevenlevithan.com/archives/match-quoted-string
	            regex: /^(["'])(?:(?=(\\?))\2[\s\S])*?\1/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var value = token.value;
	                delete token.match

	                // Remove the quotes from the string
	                if (value.substring(0, 1) === '"') {
	                    value = value.replace('\\"', '"');
	                } else {
	                    value = value.replace("\\'", "'");
	                }
	                token.value = value.substring(1, value.length-1).replace( /\\n/g, "\n" ).replace( /\\r/g, "\r" );
	                Twig.log.trace("Twig.expression.compile: ", "String value: ", token.value);
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            /**
	             * Match a subexpression set start.
	             */
	            type: Twig.expression.type.subexpression.start,
	            regex: /^\(/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.subexpression.end]),
	            compile: function(token, stack, output) {
	                token.value = '(';
	                output.push(token);
	                stack.push(token);
	            },
	            parse: Twig.expression.fn.parse.push
	        },
	        {
	            /**
	             * Match a subexpression set end.
	             */
	            type: Twig.expression.type.subexpression.end,
	            regex: /^\)/,
	            next: Twig.expression.set.operations_extended,
	            validate: function(match, tokens) {
	                // Iterate back through previous tokens to ensure we follow a subexpression start
	                var i = tokens.length - 1,
	                    found_subexpression_start = false,
	                    next_subexpression_start_invalid = false,
	                    unclosed_parameter_count = 0;

	                while(!found_subexpression_start && i >= 0) {
	                    var token = tokens[i];

	                    found_subexpression_start = token.type === Twig.expression.type.subexpression.start;

	                    // If we have previously found a subexpression end, then this subexpression start is the start of
	                    // that subexpression, not the subexpression we are searching for
	                    if (found_subexpression_start && next_subexpression_start_invalid) {
	                        next_subexpression_start_invalid = false;
	                        found_subexpression_start = false;
	                    }

	                    // Count parameter tokens to ensure we dont return truthy for a parameter opener
	                    if (token.type === Twig.expression.type.parameter.start) {
	                        unclosed_parameter_count++;
	                    } else if (token.type === Twig.expression.type.parameter.end) {
	                        unclosed_parameter_count--;
	                    } else if (token.type === Twig.expression.type.subexpression.end) {
	                        next_subexpression_start_invalid = true;
	                    }

	                    i--;
	                }

	                // If we found unclosed parameters, return false
	                // If we didnt find subexpression start, return false
	                // Otherwise return true

	                return (found_subexpression_start && (unclosed_parameter_count === 0));
	            },
	            compile: function(token, stack, output) {
	                // This is basically a copy of parameter end compilation
	                var stack_token,
	                    end_token = token;

	                stack_token = stack.pop();
	                while(stack.length > 0 && stack_token.type != Twig.expression.type.subexpression.start) {
	                    output.push(stack_token);
	                    stack_token = stack.pop();
	                }

	                // Move contents of parens into preceding filter
	                var param_stack = [];
	                while(token.type !== Twig.expression.type.subexpression.start) {
	                    // Add token to arguments stack
	                    param_stack.unshift(token);
	                    token = output.pop();
	                }

	                param_stack.unshift(token);

	                var is_expression = false;

	                //If the token at the top of the *stack* is a function token, pop it onto the output queue.
	                // Get the token preceding the parameters
	                stack_token = stack[stack.length-1];

	                if (stack_token === undefined ||
	                    (stack_token.type !== Twig.expression.type._function &&
	                    stack_token.type !== Twig.expression.type.filter &&
	                    stack_token.type !== Twig.expression.type.test &&
	                    stack_token.type !== Twig.expression.type.key.brackets)) {

	                    end_token.expression = true;

	                    // remove start and end token from stack
	                    param_stack.pop();
	                    param_stack.shift();

	                    end_token.params = param_stack;

	                    output.push(end_token);
	                } else {
	                    // This should never be hit
	                    end_token.expression = false;
	                    stack_token.params = param_stack;
	                }
	            },
	            parse: function(token, stack, context) {
	                var new_array = [],
	                    array_ended = false,
	                    value = null;

	                if (token.expression) {
	                    return Twig.expression.parseAsync.apply(this, [token.params, context])
	                    .then(function(value) {
	                        stack.push(value);
	                    });
	                } else {
	                    throw new Twig.Error("Unexpected subexpression end when token is not marked as an expression");
	                }
	            }
	        },
	        {
	            /**
	             * Match a parameter set start.
	             */
	            type: Twig.expression.type.parameter.start,
	            regex: /^\(/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.parameter.end]),
	            validate: function(match, tokens) {
	                var last_token = tokens[tokens.length - 1];
	                // We can't use the regex to test if we follow a space because expression is trimmed
	                return last_token && (Twig.indexOf(Twig.expression.reservedWords, last_token.value.trim()) < 0);
	            },
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },
	        {
	            /**
	             * Match a parameter set end.
	             */
	            type: Twig.expression.type.parameter.end,
	            regex: /^\)/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var stack_token,
	                    end_token = token;

	                stack_token = stack.pop();
	                while(stack.length > 0 && stack_token.type != Twig.expression.type.parameter.start) {
	                    output.push(stack_token);
	                    stack_token = stack.pop();
	                }

	                // Move contents of parens into preceding filter
	                var param_stack = [];
	                while(token.type !== Twig.expression.type.parameter.start) {
	                    // Add token to arguments stack
	                    param_stack.unshift(token);
	                    token = output.pop();
	                }
	                param_stack.unshift(token);

	                var is_expression = false;

	                // Get the token preceding the parameters
	                token = output[output.length-1];

	                if (token === undefined ||
	                    (token.type !== Twig.expression.type._function &&
	                    token.type !== Twig.expression.type.filter &&
	                    token.type !== Twig.expression.type.test &&
	                    token.type !== Twig.expression.type.key.brackets)) {

	                    end_token.expression = true;

	                    // remove start and end token from stack
	                    param_stack.pop();
	                    param_stack.shift();

	                    end_token.params = param_stack;

	                    output.push(end_token);

	                } else {
	                    end_token.expression = false;
	                    token.params = param_stack;
	                }
	            },
	            parse: function(token, stack, context) {
	                var new_array = [],
	                    array_ended = false,
	                    value = null;

	                if (token.expression) {
	                    return Twig.expression.parseAsync.apply(this, [token.params, context])
	                    .then(function(value) {
	                        stack.push(value);
	                    });
	                } else {

	                    while (stack.length > 0) {
	                        value = stack.pop();
	                        // Push values into the array until the start of the array
	                        if (value && value.type && value.type == Twig.expression.type.parameter.start) {
	                            array_ended = true;
	                            break;
	                        }
	                        new_array.unshift(value);
	                    }

	                    if (!array_ended) {
	                        throw new Twig.Error("Expected end of parameter set.");
	                    }

	                    stack.push(new_array);
	                }
	            }
	        },
	        {
	            type: Twig.expression.type.slice,
	            regex: /^\[(\d*\:\d*)\]/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var sliceRange = token.match[1].split(':');

	                //sliceStart can be undefined when we pass parameters to the slice filter later
	                var sliceStart = (sliceRange[0]) ? parseInt(sliceRange[0]) : undefined;
	                var sliceEnd = (sliceRange[1]) ? parseInt(sliceRange[1]) : undefined;

	                token.value = 'slice';
	                token.params = [sliceStart, sliceEnd];

	                //sliceEnd can't be undefined as the slice filter doesn't check for this, but it does check the length
	                //of the params array, so just shorten it.
	                if (!sliceEnd) {
	                    token.params = [sliceStart];
	                }

	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var input = stack.pop(),
	                    params = token.params;

	                stack.push(Twig.filter.apply(this, [token.value, input, params]));
	            }
	        },
	        {
	            /**
	             * Match an array start.
	             */
	            type: Twig.expression.type.array.start,
	            regex: /^\[/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.array.end]),
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },
	        {
	            /**
	             * Match an array end.
	             */
	            type: Twig.expression.type.array.end,
	            regex: /^\]/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var i = stack.length - 1,
	                    stack_token;
	                // pop tokens off the stack until the start of the object
	                for(;i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token.type === Twig.expression.type.array.start) {
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var new_array = [],
	                    array_ended = false,
	                    value = null;

	                while (stack.length > 0) {
	                    value = stack.pop();
	                    // Push values into the array until the start of the array
	                    if (value.type && value.type == Twig.expression.type.array.start) {
	                        array_ended = true;
	                        break;
	                    }
	                    new_array.unshift(value);
	                }
	                if (!array_ended) {
	                    throw new Twig.Error("Expected end of array.");
	                }

	                stack.push(new_array);
	            }
	        },
	        // Token that represents the start of a hash map '}'
	        //
	        // Hash maps take the form:
	        //    { "key": 'value', "another_key": item }
	        //
	        // Keys must be quoted (either single or double) and values can be any expression.
	        {
	            type: Twig.expression.type.object.start,
	            regex: /^\{/,
	            next: Twig.expression.set.expressions.concat([Twig.expression.type.object.end]),
	            compile: Twig.expression.fn.compile.push_both,
	            parse: Twig.expression.fn.parse.push
	        },

	        // Token that represents the end of a Hash Map '}'
	        //
	        // This is where the logic for building the internal
	        // representation of a hash map is defined.
	        {
	            type: Twig.expression.type.object.end,
	            regex: /^\}/,
	            next: Twig.expression.set.operations_extended,
	            compile: function(token, stack, output) {
	                var i = stack.length-1,
	                    stack_token;

	                // pop tokens off the stack until the start of the object
	                for(;i >= 0; i--) {
	                    stack_token = stack.pop();
	                    if (stack_token && stack_token.type === Twig.expression.type.object.start) {
	                        break;
	                    }
	                    output.push(stack_token);
	                }
	                output.push(token);
	            },
	            parse: function(end_token, stack, context) {
	                var new_object = {},
	                    object_ended = false,
	                    token = null,
	                    token_key = null,
	                    has_value = false,
	                    value = null;

	                while (stack.length > 0) {
	                    token = stack.pop();
	                    // Push values into the array until the start of the object
	                    if (token && token.type && token.type === Twig.expression.type.object.start) {
	                        object_ended = true;
	                        break;
	                    }
	                    if (token && token.type && (token.type === Twig.expression.type.operator.binary || token.type === Twig.expression.type.operator.unary) && token.key) {
	                        if (!has_value) {
	                            throw new Twig.Error("Missing value for key '" + token.key + "' in object definition.");
	                        }
	                        new_object[token.key] = value;

	                        // Preserve the order that elements are added to the map
	                        // This is necessary since JavaScript objects don't
	                        // guarantee the order of keys
	                        if (new_object._keys === undefined) new_object._keys = [];
	                        new_object._keys.unshift(token.key);

	                        // reset value check
	                        value = null;
	                        has_value = false;

	                    } else {
	                        has_value = true;
	                        value = token;
	                    }
	                }
	                if (!object_ended) {
	                    throw new Twig.Error("Unexpected end of object.");
	                }

	                stack.push(new_object);
	            }
	        },

	        // Token representing a filter
	        //
	        // Filters can follow any expression and take the form:
	        //    expression|filter(optional, args)
	        //
	        // Filter parsing is done in the Twig.filters namespace.
	        {
	            type: Twig.expression.type.filter,
	            // match a | then a letter or _, then any number of letters, numbers, _ or -
	            regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
	            next: Twig.expression.set.operations_extended.concat([
	                    Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.value = token.match[1];
	                output.push(token);
	            },
	            parse: function(token, stack, context) {
	                var that = this,
	                    input = stack.pop();

	                return parseParams(this, token.params, context)
	                .then(function(params) {
	                    return Twig.filter.apply(that, [token.value, input, params]);
	                })
	                .then(function(value) {
	                    stack.push(value);
	                });
	            }
	        },
	        {
	            type: Twig.expression.type._function,
	            // match any letter or _, then any number of letters, numbers, _ or - followed by (
	            regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
	            next: Twig.expression.type.parameter.start,
	            validate: function(match, tokens) {
	                // Make sure this function is not a reserved word
	                return match[1] && (Twig.indexOf(Twig.expression.reservedWords, match[1]) < 0);
	            },
	            transform: function(match, tokens) {
	                return '(';
	            },
	            compile: function(token, stack, output) {
	                var fn = token.match[1];
	                token.fn = fn;
	                // cleanup token
	                delete token.match;
	                delete token.value;

	                output.push(token);
	            },
	            parse: function(token, stack, context) {

	                var that = this,
	                    fn = token.fn,
	                    value;

	                return parseParams(this, token.params, context)
	                .then(function(params) {
	                    if (Twig.functions[fn]) {
	                        // Get the function from the built-in functions
	                        value = Twig.functions[fn].apply(that, params);

	                    } else if (typeof context[fn] == 'function') {
	                        // Get the function from the user/context defined functions
	                        value = context[fn].apply(context, params);

	                    } else {
	                        throw new Twig.Error(fn + ' function does not exist and is not defined in the context');
	                    }

	                    return value;
	                })
	                .then(function(result) {
	                    stack.push(result);
	                });
	            }
	        },

	        // Token representing a variable.
	        //
	        // Variables can contain letters, numbers, underscores and
	        // dashes, but must start with a letter or underscore.
	        //
	        // Variables are retrieved from the render context and take
	        // the value of 'undefined' if the given variable doesn't
	        // exist in the context.
	        {
	            type: Twig.expression.type.variable,
	            // match any letter or _, then any number of letters, numbers, _ or -
	            regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
	            next: Twig.expression.set.operations_extended.concat([
	                    Twig.expression.type.parameter.start]),
	            compile: Twig.expression.fn.compile.push,
	            validate: function(match, tokens) {
	                return (Twig.indexOf(Twig.expression.reservedWords, match[0]) < 0);
	            },
	            parse: function(token, stack, context) {
	                // Get the variable from the context
	                return Twig.expression.resolveAsync.apply(this, [context[token.value], context])
	                .then(function(value) {
	                    stack.push(value);
	                });
	            }
	        },
	        {
	            type: Twig.expression.type.key.period,
	            regex: /^\.([a-zA-Z0-9_]+)/,
	            next: Twig.expression.set.operations_extended.concat([
	                    Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                token.key = token.match[1];
	                delete token.match;
	                delete token.value;

	                output.push(token);
	            },
	            parse: function(token, stack, context, next_token) {
	                var that = this,
	                    key = token.key,
	                    object = stack.pop(),
	                    value;

	                return parseParams(this, token.params, context)
	                .then(function(params) {
	                    if (object === null || object === undefined) {
	                        if (that.options.strict_variables) {
	                            throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
	                        } else {
	                            value = undefined;
	                        }
	                    } else {
	                        var capitalize = function (value) {
	                            return value.substr(0, 1).toUpperCase() + value.substr(1);
	                        };

	                        // Get the variable from the context
	                        if (typeof object === 'object' && key in object) {
	                            value = object[key];
	                        } else if (object["get" + capitalize(key)] !== undefined) {
	                            value = object["get" + capitalize(key)];
	                        } else if (object["is" + capitalize(key)] !== undefined) {
	                            value = object["is" + capitalize(key)];
	                        } else {
	                            value = undefined;
	                        }
	                    }

	                    // When resolving an expression we need to pass next_token in case the expression is a function
	                    return Twig.expression.resolveAsync.apply(that, [value, context, params, next_token, object]);
	                })
	                .then(function(result) {
	                    stack.push(result);
	                });
	            }
	        },
	        {
	            type: Twig.expression.type.key.brackets,
	            regex: /^\[([^\]\:]*)\]/,
	            next: Twig.expression.set.operations_extended.concat([
	                    Twig.expression.type.parameter.start]),
	            compile: function(token, stack, output) {
	                var match = token.match[1];
	                delete token.value;
	                delete token.match;

	                // The expression stack for the key
	                token.stack = Twig.expression.compile({
	                    value: match
	                }).stack;

	                output.push(token);
	            },
	            parse: function(token, stack, context, next_token) {
	                // Evaluate key
	                var that = this,
	                    params = null,
	                    object,
	                    value;

	                return parseParams(this, token.params, context)
	                .then(function(parameters) {
	                    params = parameters;
	                    return Twig.expression.parseAsync.apply(that, [token.stack, context]);
	                })
	                .then(function(key) {
	                    object = stack.pop();

	                    if (object === null || object === undefined) {
	                        if (that.options.strict_variables) {
	                            throw new Twig.Error("Can't access a key " + key + " on an null or undefined object.");
	                        } else {
	                            return null;
	                        }
	                    }

	                    // Get the variable from the context
	                    if (typeof object === 'object' && key in object) {
	                        value = object[key];
	                    } else {
	                        value = null;
	                    }

	                    // When resolving an expression we need to pass next_token in case the expression is a function
	                    return Twig.expression.resolveAsync.apply(that, [value, object, params, next_token]);
	                })
	                .then(function(result) {
	                    stack.push(result);
	                });
	            }
	        },
	        {
	            /**
	             * Match a null value.
	             */
	            type: Twig.expression.type._null,
	            // match a number
	            regex: /^(null|NULL|none|NONE)/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                delete token.match;
	                token.value = null;
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        },
	        {
	            /**
	             * Match the context
	             */
	            type: Twig.expression.type.context,
	            regex: /^_context/,
	            next: Twig.expression.set.operations_extended.concat([
	                    Twig.expression.type.parameter.start]),
	            compile: Twig.expression.fn.compile.push,
	            parse: function(token, stack, context) {
	                stack.push(context);
	            }
	        },
	        {
	            /**
	             * Match a boolean
	             */
	            type: Twig.expression.type.bool,
	            regex: /^(true|TRUE|false|FALSE)/,
	            next: Twig.expression.set.operations,
	            compile: function(token, stack, output) {
	                token.value = (token.match[0].toLowerCase( ) === "true");
	                delete token.match;
	                output.push(token);
	            },
	            parse: Twig.expression.fn.parse.push_value
	        }
	    ];

	    /**
	     * Resolve a context value.
	     *
	     * If the value is a function, it is executed with a context parameter.
	     *
	     * @param {string} key The context object key.
	     * @param {Object} context The render context.
	     */
	    Twig.expression.resolveAsync = function(value, context, params, next_token, object) {
	        if (typeof value == 'function') {
	            var promise = Twig.Promise.resolve(params);

	            /*
	            If value is a function, it will have been impossible during the compile stage to determine that a following
	            set of parentheses were parameters for this function.

	            Those parentheses will have therefore been marked as an expression, with their own parameters, which really
	            belong to this function.

	            Those parameters will also need parsing in case they are actually an expression to pass as parameters.
	             */
	            if (next_token && next_token.type === Twig.expression.type.parameter.end) {
	                //When parsing these parameters, we need to get them all back, not just the last item on the stack.
	                var tokens_are_parameters = true;

	                promise = promise.then(function() {
	                    return next_token.params && Twig.expression.parseAsync.apply(this, [next_token.params, context, tokens_are_parameters]);
	                })
	                .then(function(p) {
	                    //Clean up the parentheses tokens on the next loop
	                    next_token.cleanup = true;

	                    return p;
	                });
	            }

	            return promise.then(function(params) {
	                return value.apply(object || context, params || []);
	            });
	        } else {
	            return Twig.Promise.resolve(value);
	        }
	    };

	    Twig.expression.resolve = function(value, context, params, next_token, object) {
	        var is_async = true,
	            result;

	        Twig.expression.resolveAsync.apply(this, [value, context, params, next_token, object])
	        .then(function(r) {
	            is_async = false;
	            result = r;
	        });

	        if (is_async)
	            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');

	        return result;
	    }

	    /**
	     * Registry for logic handlers.
	     */
	    Twig.expression.handler = {};

	    /**
	     * Define a new expression type, available at Twig.logic.type.{type}
	     *
	     * @param {string} type The name of the new type.
	     */
	    Twig.expression.extendType = function (type) {
	        Twig.expression.type[type] = "Twig.expression.type." + type;
	    };

	    /**
	     * Extend the expression parsing functionality with a new definition.
	     *
	     * Token definitions follow this format:
	     *  {
	     *      type:     One of Twig.expression.type.[type], either pre-defined or added using
	     *                    Twig.expression.extendType
	     *
	     *      next:     Array of types from Twig.expression.type that can follow this token,
	     *
	     *      regex:    A regex or array of regex's that should match the token.
	     *
	     *      compile: function(token, stack, output) called when this token is being compiled.
	     *                   Should return an object with stack and output set.
	     *
	     *      parse:   function(token, stack, context) called when this token is being parsed.
	     *                   Should return an object with stack and context set.
	     *  }
	     *
	     * @param {Object} definition A token definition.
	     */
	    Twig.expression.extend = function (definition) {
	        if (!definition.type) {
	            throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
	        }
	        Twig.expression.handler[definition.type] = definition;
	    };

	    // Extend with built-in expressions
	    while (Twig.expression.definitions.length > 0) {
	        Twig.expression.extend(Twig.expression.definitions.shift());
	    }

	    /**
	     * Break an expression into tokens defined in Twig.expression.definitions.
	     *
	     * @param {string} expression The string to tokenize.
	     *
	     * @return {Array} An array of tokens.
	     */
	    Twig.expression.tokenize = function (expression) {
	        var tokens = [],
	            // Keep an offset of the location in the expression for error messages.
	            exp_offset = 0,
	            // The valid next tokens of the previous token
	            next = null,
	            // Match information
	            type, regex, regex_array,
	            // The possible next token for the match
	            token_next,
	            // Has a match been found from the definitions
	            match_found, invalid_matches = [], match_function;

	        match_function = function () {
	            var match = Array.prototype.slice.apply(arguments),
	                string = match.pop(),
	                offset = match.pop();

	            Twig.log.trace("Twig.expression.tokenize",
	                           "Matched a ", type, " regular expression of ", match);

	            if (next && Twig.indexOf(next, type) < 0) {
	                invalid_matches.push(
	                    type + " cannot follow a " + tokens[tokens.length - 1].type +
	                           " at template:" + exp_offset + " near '" + match[0].substring(0, 20) +
	                           "...'"
	                );
	                // Not a match, don't change the expression
	                return match[0];
	            }

	            // Validate the token if a validation function is provided
	            if (Twig.expression.handler[type].validate &&
	                    !Twig.expression.handler[type].validate(match, tokens)) {
	                return match[0];
	            }

	            invalid_matches = [];

	            tokens.push({
	                type:  type,
	                value: match[0],
	                match: match
	            });

	            match_found = true;
	            next = token_next;
	            exp_offset += match[0].length;

	            // Does the token need to return output back to the expression string
	            // e.g. a function match of cycle( might return the '(' back to the expression
	            // This allows look-ahead to differentiate between token types (e.g. functions and variable names)
	            if (Twig.expression.handler[type].transform) {
	                return Twig.expression.handler[type].transform(match, tokens);
	            }
	            return '';
	        };

	        Twig.log.debug("Twig.expression.tokenize", "Tokenizing expression ", expression);

	        while (expression.length > 0) {
	            expression = expression.trim();
	            for (type in Twig.expression.handler) {
	                if (Twig.expression.handler.hasOwnProperty(type)) {
	                    token_next = Twig.expression.handler[type].next;
	                    regex = Twig.expression.handler[type].regex;
	                    Twig.log.trace("Checking type ", type, " on ", expression);
	                    if (regex instanceof Array) {
	                        regex_array = regex;
	                    } else {
	                        regex_array = [regex];
	                    }

	                    match_found = false;
	                    while (regex_array.length > 0) {
	                        regex = regex_array.pop();
	                        expression = expression.replace(regex, match_function);
	                    }
	                    // An expression token has been matched. Break the for loop and start trying to
	                    //  match the next template (if expression isn't empty.)
	                    if (match_found) {
	                        break;
	                    }
	                }
	            }
	            if (!match_found) {
	                if (invalid_matches.length > 0) {
	                    throw new Twig.Error(invalid_matches.join(" OR "));
	                } else {
	                    throw new Twig.Error("Unable to parse '" + expression + "' at template position" + exp_offset);
	                }
	            }
	        }

	        Twig.log.trace("Twig.expression.tokenize", "Tokenized to ", tokens);
	        return tokens;
	    };

	    /**
	     * Compile an expression token.
	     *
	     * @param {Object} raw_token The uncompiled token.
	     *
	     * @return {Object} The compiled token.
	     */
	    Twig.expression.compile = function (raw_token) {
	        var expression = raw_token.value,
	            // Tokenize expression
	            tokens = Twig.expression.tokenize(expression),
	            token = null,
	            output = [],
	            stack = [],
	            token_template = null;

	        Twig.log.trace("Twig.expression.compile: ", "Compiling ", expression);

	        // Push tokens into RPN stack using the Shunting-yard algorithm
	        // See http://en.wikipedia.org/wiki/Shunting_yard_algorithm

	        while (tokens.length > 0) {
	            token = tokens.shift();
	            token_template = Twig.expression.handler[token.type];

	            Twig.log.trace("Twig.expression.compile: ", "Compiling ", token);

	            // Compile the template
	            token_template.compile && token_template.compile(token, stack, output);

	            Twig.log.trace("Twig.expression.compile: ", "Stack is", stack);
	            Twig.log.trace("Twig.expression.compile: ", "Output is", output);
	        }

	        while(stack.length > 0) {
	            output.push(stack.pop());
	        }

	        Twig.log.trace("Twig.expression.compile: ", "Final output is", output);

	        raw_token.stack = output;
	        delete raw_token.value;

	        return raw_token;
	    };


	    /**
	     * Parse an RPN expression stack within a context.
	     *
	     * @param {Array} tokens An array of compiled expression tokens.
	     * @param {Object} context The render context to parse the tokens with.
	     *
	     * @return {Object} The result of parsing all the tokens. The result
	     *                  can be anything, String, Array, Object, etc... based on
	     *                  the given expression.
	     */
	    Twig.expression.parse = function (tokens, context, tokens_are_parameters, allow_async) {
	        var that = this;

	        // If the token isn't an array, make it one.
	        if (!(tokens instanceof Array)) {
	            tokens = [tokens];
	        }

	        // The output stack
	        var stack = [],
	            next_token,
	            output = null,
	            promise = null,
	            is_async = true,
	            token_template = null,
	            loop_token_fixups = [];

	        promise = Twig.async.forEach(tokens, function (token, index) {
	            //If the token is marked for cleanup, we don't need to parse it
	            if (token.cleanup) {
	                return;
	            }

	            var result = null;

	            //Determine the token that follows this one so that we can pass it to the parser
	            if (tokens.length > index + 1) {
	                next_token = tokens[index + 1];
	            }

	            token_template = Twig.expression.handler[token.type];

	            if (token_template.parse)
	                result = token_template.parse.apply(that, [token, stack, context, next_token]);

	            //Store any binary tokens for later if we are in a loop.
	            if (context.loop && token.type === Twig.expression.type.operator.binary) {
	                loop_token_fixups.push(token);
	            }

	            return result;
	        })
	        .then(function() {
	            //Check every fixup and remove "key" as long as they still have "params". This covers the use case where
	            //a ":" operator is used in a loop with a "(expression):" statement. We need to be able to evaluate the expression
	            Twig.forEach(loop_token_fixups, function (loop_token_fixup) {
	                if (loop_token_fixup.params && loop_token_fixup.key) {
	                    delete loop_token_fixup["key"];
	                }
	            });

	            //If parse has been called with a set of tokens that are parameters, we need to return the whole stack,
	            //wrapped in an Array.
	            if (tokens_are_parameters) {
	                var params = [];
	                while (stack.length > 0) {
	                    params.unshift(stack.pop());
	                }

	                stack.push(params);
	            }

	            if (allow_async)
	                return Twig.Promise.resolve(stack.pop());
	        })
	        .then(function(v) {
	            is_async = false;
	            return v;
	        });

	        if (allow_async)
	            return promise;

	        if (is_async)
	            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');

	        // Pop the final value off the stack
	        return stack.pop();
	    };

	    return Twig;

	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	// ## twig.expression.operator.js
	//
	// This file handles operator lookups and parsing.
	module.exports = function (Twig) {
	    "use strict";

	    /**
	     * Operator associativity constants.
	     */
	    Twig.expression.operator = {
	        leftToRight: 'leftToRight',
	        rightToLeft: 'rightToLeft'
	    };

	    var containment = function(a, b) {
	        if (b === undefined || b === null) {
	            return null;
	        } else if (b.indexOf !== undefined) {
	            // String
	            return a === b || a !== '' && b.indexOf(a) > -1;
	        } else {
	            var el;
	            for (el in b) {
	                if (b.hasOwnProperty(el) && b[el] === a) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    };

	    /**
	     * Get the precidence and associativity of an operator. These follow the order that C/C++ use.
	     * See http://en.wikipedia.org/wiki/Operators_in_C_and_C++ for the table of values.
	     */
	    Twig.expression.operator.lookup = function (operator, token) {
	        switch (operator) {
	            case "..":
	                token.precidence = 20;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case ',':
	                token.precidence = 18;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            // Ternary
	            case '?:':
	            case '?':
	            case ':':
	                token.precidence = 16;
	                token.associativity = Twig.expression.operator.rightToLeft;
	                break;

	            case 'or':
	                token.precidence = 14;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'and':
	                token.precidence = 13;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'b-or':
	                token.precidence = 12;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'b-xor':
	                token.precidence = 11;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'b-and':
	                token.precidence = 10;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '==':
	            case '!=':
	                token.precidence = 9;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '<':
	            case '<=':
	            case '>':
	            case '>=':
	            case 'not in':
	            case 'in':
	                token.precidence = 8;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '~': // String concatination
	            case '+':
	            case '-':
	                token.precidence = 6;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case '//':
	            case '**':
	            case '*':
	            case '/':
	            case '%':
	                token.precidence = 5;
	                token.associativity = Twig.expression.operator.leftToRight;
	                break;

	            case 'not':
	                token.precidence = 3;
	                token.associativity = Twig.expression.operator.rightToLeft;
	                break;

	            default:
	                throw new Twig.Error("Failed to lookup operator: " + operator + " is an unknown operator.");
	        }
	        token.operator = operator;
	        return token;
	    };

	    /**
	     * Handle operations on the RPN stack.
	     *
	     * Returns the updated stack.
	     */
	    Twig.expression.operator.parse = function (operator, stack) {
	        Twig.log.trace("Twig.expression.operator.parse: ", "Handling ", operator);
	        var a, b, c;

	        if (operator === '?') {
	            c = stack.pop();
	        }

	        b = stack.pop();
	        if (operator !== 'not') {
	            a = stack.pop();
	        }

	        if (operator !== 'in' && operator !== 'not in') {
	            if (a && Array.isArray(a)) {
	                a = a.length;
	            }

	            if (b && Array.isArray(b)) {
	                b = b.length;
	            }
	        }

	        switch (operator) {
	            case ':':
	                // Ignore
	                break;

	            case '?:':
	                if (Twig.lib.boolval(a)) {
	                    stack.push(a);
	                } else {
	                    stack.push(b);
	                }
	                break;
	            case '?':
	                if (a === undefined) {
	                    //An extended ternary.
	                    a = b;
	                    b = c;
	                    c = undefined;
	                }

	                if (Twig.lib.boolval(a)) {
	                    stack.push(b);
	                } else {
	                    stack.push(c);
	                }
	                break;

	            case '+':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(a + b);
	                break;

	            case '-':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(a - b);
	                break;

	            case '*':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(a * b);
	                break;

	            case '/':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(a / b);
	                break;

	            case '//':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(Math.floor(a / b));
	                break;

	            case '%':
	                b = parseFloat(b);
	                a = parseFloat(a);
	                stack.push(a % b);
	                break;

	            case '~':
	                stack.push( (a != null ? a.toString() : "")
	                          + (b != null ? b.toString() : "") );
	                break;

	            case 'not':
	            case '!':
	                stack.push(!Twig.lib.boolval(b));
	                break;

	            case '<':
	                stack.push(a < b);
	                break;

	            case '<=':
	                stack.push(a <= b);
	                break;

	            case '>':
	                stack.push(a > b);
	                break;

	            case '>=':
	                stack.push(a >= b);
	                break;

	            case '===':
	                stack.push(a === b);
	                break;

	            case '==':
	                stack.push(a == b);
	                break;

	            case '!==':
	                stack.push(a !== b);
	                break;

	            case '!=':
	                stack.push(a != b);
	                break;

	            case 'or':
	                stack.push(a || b);
	                break;

	            case 'b-or':
	                stack.push(a | b);
	                break;

	            case 'b-xor':
	                stack.push(a ^ b);
	                break;

	            case 'and':
	                stack.push(a && b);
	                break;

	            case 'b-and':
	                stack.push(a & b);
	                break;

	            case '**':
	                stack.push(Math.pow(a, b));
	                break;

	            case 'not in':
	                stack.push( !containment(a, b) );
	                break;

	            case 'in':
	                stack.push( containment(a, b) );
	                break;

	            case '..':
	                stack.push( Twig.functions.range(a, b) );
	                break;

	            default:
	                debugger;
	                throw new Twig.Error("Failed to parse operator: " + operator + " is an unknown operator.");
	        }
	    };

	    return Twig;

	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	// ## twig.filters.js
	//
	// This file handles parsing filters.
	module.exports = function (Twig) {

	    // Determine object type
	    function is(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    }

	    Twig.filters = {
	        // String Filters
	        upper:  function(value) {
	            if ( typeof value !== "string" ) {
	               return value;
	            }

	            return value.toUpperCase();
	        },
	        lower: function(value) {
	            if ( typeof value !== "string" ) {
	               return value;
	            }

	            return value.toLowerCase();
	        },
	        capitalize: function(value) {
	            if ( typeof value !== "string" ) {
	                 return value;
	            }

	            return value.substr(0, 1).toUpperCase() + value.toLowerCase().substr(1);
	        },
	        title: function(value) {
	            if ( typeof value !== "string" ) {
	               return value;
	            }

	            return value.toLowerCase().replace( /(^|\s)([a-z])/g , function(m, p1, p2){
	                return p1 + p2.toUpperCase();
	            });
	        },
	        length: function(value) {
	            if (Twig.lib.is("Array", value) || typeof value === "string") {
	                return value.length;
	            } else if (Twig.lib.is("Object", value)) {
	                if (value._keys === undefined) {
	                    return Object.keys(value).length;
	                } else {
	                    return value._keys.length;
	                }
	            } else {
	                return 0;
	            }
	        },

	        // Array/Object Filters
	        reverse: function(value) {
	            if (is("Array", value)) {
	                return value.reverse();
	            } else if (is("String", value)) {
	                return value.split("").reverse().join("");
	            } else if (is("Object", value)) {
	                var keys = value._keys || Object.keys(value).reverse();
	                value._keys = keys;
	                return value;
	            }
	        },
	        sort: function(value) {
	            if (is("Array", value)) {
	                return value.sort();
	            } else if (is('Object', value)) {
	                // Sorting objects isn't obvious since the order of
	                // returned keys isn't guaranteed in JavaScript.
	                // Because of this we use a "hidden" key called _keys to
	                // store the keys in the order we want to return them.

	                delete value._keys;
	                var keys = Object.keys(value),
	                    sorted_keys = keys.sort(function(a, b) {
	                        var a1, a2;

	                        // if a and b are comparable, we're fine :-)
	                        if((value[a] > value[b]) == !(value[a] <= value[b])) {
	                            return value[a] > value[b] ? 1 :
				           value[a] < value[b] ? -1 :
					   0;
	                        }
	                        // if a and b can be parsed as numbers, we can compare
	                        // their numeric value
	                        else if(!isNaN(a1 = parseFloat(value[a])) &&
	                                !isNaN(b1 = parseFloat(value[b]))) {
	                            return a1 > b1 ? 1 :
				           a1 < b1 ? -1 :
					   0;
	                        }
	                        // if one of the values is a string, we convert the
	                        // other value to string as well
	                        else if(typeof value[a] == 'string') {
	                            return value[a] > value[b].toString() ? 1 :
	                                   value[a] < value[b].toString() ? -1 :
					   0;
	                        }
	                        else if(typeof value[b] == 'string') {
	                            return value[a].toString() > value[b] ? 1 :
	                                   value[a].toString() < value[b] ? -1 :
					   0;
	                        }
	                        // everything failed - return 'null' as sign, that
	                        // the values are not comparable
	                        else {
	                            return null;
	                        }
	                    });
	                value._keys = sorted_keys;
	                return value;
	            }
	        },
	        keys: function(value) {
	            if (value === undefined || value === null){
	                return;
	           }

	            var keyset = value._keys || Object.keys(value),
	                output = [];

	            Twig.forEach(keyset, function(key) {
	                if (key === "_keys") return; // Ignore the _keys property
	                if (value.hasOwnProperty(key)) {
	                    output.push(key);
	                }
	            });
	            return output;
	        },
	        url_encode: function(value) {
	            if (value === undefined || value === null){
	                return;
	            }

	            var result = encodeURIComponent(value);
	            result = result.replace("'", "%27");
	            return result;
	        },
	        join: function(value, params) {
	            if (value === undefined || value === null){
	                return;
	            }

	            var join_str = "",
	                output = [],
	                keyset = null;

	            if (params && params[0]) {
	                join_str = params[0];
	            }
	            if (is("Array", value)) {
	                output = value;
	            } else {
	                keyset = value._keys || Object.keys(value);
	                Twig.forEach(keyset, function(key) {
	                    if (key === "_keys") return; // Ignore the _keys property
	                    if (value.hasOwnProperty(key)) {
	                        output.push(value[key]);
	                    }
	                });
	            }
	            return output.join(join_str);
	        },
	        "default": function(value, params) {
	            if (params !== undefined && params.length > 1) {
	                throw new Twig.Error("default filter expects one argument");
	            }
	            if (value === undefined || value === null || value === '' ) {
	                if (params === undefined) {
	                    return '';
	                }

	                return params[0];
	            } else {
	                return value;
	            }
	        },
	        json_encode: function(value) {
	            if(value === undefined || value === null) {
	                return "null";
	            }
	            else if ((typeof value == 'object') && (is("Array", value))) {
	                output = [];

	                Twig.forEach(value, function(v) {
	                    output.push(Twig.filters.json_encode(v));
	                });

	                return "[" + output.join(",") + "]";
	            }
	            else if (typeof value == 'object') {
	                var keyset = value._keys || Object.keys(value),
	                output = [];

	                Twig.forEach(keyset, function(key) {
	                    output.push(JSON.stringify(key) + ":" + Twig.filters.json_encode(value[key]));
	                });

	                return "{" + output.join(",") + "}";
	            }
	            else {
	                return JSON.stringify(value);
	            }
	        },
	        merge: function(value, params) {
	            var obj = [],
	                arr_index = 0,
	                keyset = [];

	            // Check to see if all the objects being merged are arrays
	            if (!is("Array", value)) {
	                // Create obj as an Object
	                obj = { };
	            } else {
	                Twig.forEach(params, function(param) {
	                    if (!is("Array", param)) {
	                        obj = { };
	                    }
	                });
	            }
	            if (!is("Array", obj)) {
	                obj._keys = [];
	            }

	            if (is("Array", value)) {
	                Twig.forEach(value, function(val) {
	                    if (obj._keys) obj._keys.push(arr_index);
	                    obj[arr_index] = val;
	                    arr_index++;
	                });
	            } else {
	                keyset = value._keys || Object.keys(value);
	                Twig.forEach(keyset, function(key) {
	                    obj[key] = value[key];
	                    obj._keys.push(key);

	                    // Handle edge case where a number index in an object is greater than
	                    //   the array counter. In such a case, the array counter is increased
	                    //   one past the index.
	                    //
	                    // Example {{ ["a", "b"]|merge({"4":"value"}, ["c", "d"])
	                    // Without this, d would have an index of "4" and overwrite the value
	                    //   of "value"
	                    var int_key = parseInt(key, 10);
	                    if (!isNaN(int_key) && int_key >= arr_index) {
	                        arr_index = int_key + 1;
	                    }
	                });
	            }

	            // mixin the merge arrays
	            Twig.forEach(params, function(param) {
	                if (is("Array", param)) {
	                    Twig.forEach(param, function(val) {
	                        if (obj._keys) obj._keys.push(arr_index);
	                        obj[arr_index] = val;
	                        arr_index++;
	                    });
	                } else {
	                    keyset = param._keys || Object.keys(param);
	                    Twig.forEach(keyset, function(key) {
	                        if (!obj[key]) obj._keys.push(key);
	                        obj[key] = param[key];

	                        var int_key = parseInt(key, 10);
	                        if (!isNaN(int_key) && int_key >= arr_index) {
	                            arr_index = int_key + 1;
	                        }
	                    });
	                }
	            });
	            if (params.length === 0) {
	                throw new Twig.Error("Filter merge expects at least one parameter");
	            }

	            return obj;
	        },
	        date: function(value, params) {
	            var date = Twig.functions.date(value);
	            var format = params && params.length ? params[0] : 'F j, Y H:i';
	            return Twig.lib.date(format, date);
	        },

	        date_modify: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            if (params === undefined || params.length !== 1) {
	                throw new Twig.Error("date_modify filter expects 1 argument");
	            }

	            var modifyText = params[0], time;

	            if (Twig.lib.is("Date", value)) {
	                time = Twig.lib.strtotime(modifyText, value.getTime() / 1000);
	            }
	            if (Twig.lib.is("String", value)) {
	                time = Twig.lib.strtotime(modifyText, Twig.lib.strtotime(value));
	            }
	            if (Twig.lib.is("Number", value)) {
	                time = Twig.lib.strtotime(modifyText, value);
	            }

	            return new Date(time * 1000);
	        },

	        replace: function(value, params) {
	            if (value === undefined||value === null){
	                return;
	            }

	            var pairs = params[0],
	                tag;
	            for (tag in pairs) {
	                if (pairs.hasOwnProperty(tag) && tag !== "_keys") {
	                    value = Twig.lib.replaceAll(value, tag, pairs[tag]);
	                }
	            }
	            return value;
	        },

	        format: function(value, params) {
	            if (value === undefined || value === null){
	                return;
	            }

	            return Twig.lib.vsprintf(value, params);
	        },

	        striptags: function(value) {
	            if (value === undefined || value === null){
	                return;
	            }

	            return Twig.lib.strip_tags(value);
	        },

	        escape: function(value, params) {
	            if (value === undefined|| value === null){
	                return;
	            }

	            var strategy = "html";
	            if(params && params.length && params[0] !== true)
	                strategy = params[0];

	            if(strategy == "html") {
	                var raw_value = value.toString().replace(/&/g, "&amp;")
	                            .replace(/</g, "&lt;")
	                            .replace(/>/g, "&gt;")
	                            .replace(/"/g, "&quot;")
	                            .replace(/'/g, "&#039;");
	                return Twig.Markup(raw_value, 'html');
	            } else if(strategy == "js") {
	                var raw_value = value.toString();
	                var result = "";

	                for(var i = 0; i < raw_value.length; i++) {
	                    if(raw_value[i].match(/^[a-zA-Z0-9,\._]$/))
	                        result += raw_value[i];
	                    else {
	                        var char_code = raw_value.charCodeAt(i);

	                        if(char_code < 0x80)
	                            result += "\\x" + char_code.toString(16).toUpperCase();
	                        else
	                            result += Twig.lib.sprintf("\\u%04s", char_code.toString(16).toUpperCase());
	                    }
	                }

	                return Twig.Markup(result, 'js');
	            } else if(strategy == "css") {
	                var raw_value = value.toString();
	                var result = "";

	                for(var i = 0; i < raw_value.length; i++) {
	                    if(raw_value[i].match(/^[a-zA-Z0-9]$/))
	                        result += raw_value[i];
	                    else {
	                        var char_code = raw_value.charCodeAt(i);
	                        result += "\\" + char_code.toString(16).toUpperCase() + " ";
	                    }
	                }

	                return Twig.Markup(result, 'css');
	            } else if(strategy == "url") {
	                var result = Twig.filters.url_encode(value);
	                return Twig.Markup(result, 'url');
	            } else if(strategy == "html_attr") {
	                var raw_value = value.toString();
	                var result = "";

	                for(var i = 0; i < raw_value.length; i++) {
	                    if(raw_value[i].match(/^[a-zA-Z0-9,\.\-_]$/))
	                        result += raw_value[i];
	                    else if(raw_value[i].match(/^[&<>"]$/))
	                        result += raw_value[i].replace(/&/g, "&amp;")
	                                .replace(/</g, "&lt;")
	                                .replace(/>/g, "&gt;")
	                                .replace(/"/g, "&quot;");
	                    else {
	                        var char_code = raw_value.charCodeAt(i);

	                        // The following replaces characters undefined in HTML with
	                        // the hex entity for the Unicode replacement character.
	                        if(char_code <= 0x1f && char_code != 0x09 && char_code != 0x0a && char_code != 0x0d)
	                            result += "&#xFFFD;";
	                        else if(char_code < 0x80)
	                            result += Twig.lib.sprintf("&#x%02s;", char_code.toString(16).toUpperCase());
	                        else
	                            result += Twig.lib.sprintf("&#x%04s;", char_code.toString(16).toUpperCase());
	                    }
	                }

	                return Twig.Markup(result, 'html_attr');
	            } else {
	                throw new Twig.Error("escape strategy unsupported");
	            }
	        },

	        /* Alias of escape */
	        "e": function(value, params) {
	            return Twig.filters.escape(value, params);
	        },

	        nl2br: function(value) {
	            if (value === undefined || value === null){
	                return;
	            }
	            var linebreak_tag = "BACKSLASH_n_replace",
	                br = "<br />" + linebreak_tag;

	            value = Twig.filters.escape(value)
	                        .replace(/\r\n/g, br)
	                        .replace(/\r/g, br)
	                        .replace(/\n/g, br);

	            value = Twig.lib.replaceAll(value, linebreak_tag, "\n");

	            return Twig.Markup(value);
	        },

	        /**
	         * Adapted from: http://phpjs.org/functions/number_format:481
	         */
	        number_format: function(value, params) {
	            var number = value,
	                decimals = (params && params[0]) ? params[0] : undefined,
	                dec      = (params && params[1] !== undefined) ? params[1] : ".",
	                sep      = (params && params[2] !== undefined) ? params[2] : ",";

	            number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	            var n = !isFinite(+number) ? 0 : +number,
	                prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
	                s = '',
	                toFixedFix = function (n, prec) {
	                    var k = Math.pow(10, prec);
	                    return '' + Math.round(n * k) / k;
	                };
	            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	            s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	            if (s[0].length > 3) {
	                s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
	            }
	            if ((s[1] || '').length < prec) {
	                s[1] = s[1] || '';
	                s[1] += new Array(prec - s[1].length + 1).join('0');
	            }
	            return s.join(dec);
	        },

	        trim: function(value, params) {
	            if (value === undefined|| value === null){
	                return;
	            }

	            var str = Twig.filters.escape( '' + value ),
	                whitespace;
	            if ( params && params[0] ) {
	                whitespace = '' + params[0];
	            } else {
	                whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	            }
	            for (var i = 0; i < str.length; i++) {
	                if (whitespace.indexOf(str.charAt(i)) === -1) {
	                    str = str.substring(i);
	                    break;
	                }
	            }
	            for (i = str.length - 1; i >= 0; i--) {
	                if (whitespace.indexOf(str.charAt(i)) === -1) {
	                    str = str.substring(0, i + 1);
	                    break;
	                }
	            }
	            return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
	        },

	        truncate: function (value, params) {
	            var length = 30,
	                preserve = false,
	                separator = '...';

	            value =  value + '';
	            if (params) {
	                if (params[0]) {
	                    length = params[0];
	                }
	                if (params[1]) {
	                    preserve = params[1];
	                }
	                if (params[2]) {
	                    separator = params[2];
	                }
	            }

	            if (value.length > length) {

	                if (preserve) {
	                    length = value.indexOf(' ', length);
	                    if (length === -1) {
	                        return value;
	                    }
	                }

	                value =  value.substr(0, length) + separator;
	            }

	            return value;
	        },

	        slice: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            if (params === undefined || params.length < 1) {
	                throw new Twig.Error("slice filter expects at least 1 argument");
	            }

	            // default to start of string
	            var start = params[0] || 0;
	            // default to length of string
	            var length = params.length > 1 ? params[1] : value.length;
	            // handle negative start values
	            var startIndex = start >= 0 ? start : Math.max( value.length + start, 0 );

	            if (Twig.lib.is("Array", value)) {
	                var output = [];
	                for (var i = startIndex; i < startIndex + length && i < value.length; i++) {
	                    output.push(value[i]);
	                }
	                return output;
	            } else if (Twig.lib.is("String", value)) {
	                return value.substr(startIndex, length);
	            } else {
	                throw new Twig.Error("slice filter expects value to be an array or string");
	            }
	        },

	        abs: function(value) {
	            if (value === undefined || value === null) {
	                return;
	            }

	            return Math.abs(value);
	        },

	        first: function(value) {
	            if (is("Array", value)) {
	                return value[0];
	            } else if (is("Object", value)) {
	                if ('_keys' in value) {
	                    return value[value._keys[0]];
	                }
	            } else if ( typeof value === "string" ) {
	                return value.substr(0, 1);
	            }

	            return;
	        },

	        split: function(value, params) {
	            if (value === undefined || value === null) {
	                return;
	            }
	            if (params === undefined || params.length < 1 || params.length > 2) {
	                throw new Twig.Error("split filter expects 1 or 2 argument");
	            }
	            if (Twig.lib.is("String", value)) {
	                var delimiter = params[0],
	                    limit = params[1],
	                    split = value.split(delimiter);

	                if (limit === undefined) {

	                    return split;

	                } else if (limit < 0) {

	                    return value.split(delimiter, split.length + limit);

	                } else {

	                    var limitedSplit = [];

	                    if (delimiter == '') {
	                        // empty delimiter
	                        // "aabbcc"|split('', 2)
	                        //     -> ['aa', 'bb', 'cc']

	                        while(split.length > 0) {
	                            var temp = "";
	                            for (var i=0; i<limit && split.length > 0; i++) {
	                                temp += split.shift();
	                            }
	                            limitedSplit.push(temp);
	                        }

	                    } else {
	                        // non-empty delimiter
	                        // "one,two,three,four,five"|split(',', 3)
	                        //     -> ['one', 'two', 'three,four,five']

	                        for (var i=0; i<limit-1 && split.length > 0; i++) {
	                            limitedSplit.push(split.shift());
	                        }

	                        if (split.length > 0) {
	                            limitedSplit.push(split.join(delimiter));
	                        }
	                    }

	                    return limitedSplit;
	                }

	            } else {
	                throw new Twig.Error("split filter expects value to be a string");
	            }
	        },
	        last: function(value) {
	            if (Twig.lib.is('Object', value)) {
	                var keys;

	                if (value._keys === undefined) {
	                    keys = Object.keys(value);
	                } else {
	                    keys = value._keys;
	                }

	                return value[keys[keys.length - 1]];
	            }

	            // string|array
	            return value[value.length - 1];
	        },
	        raw: function(value) {
	            return Twig.Markup(value);
	        },
	        batch: function(items, params) {
	            var size = params.shift(),
	                fill = params.shift(),
	                result,
	                last,
	                missing;

	            if (!Twig.lib.is("Array", items)) {
	                throw new Twig.Error("batch filter expects items to be an array");
	            }

	            if (!Twig.lib.is("Number", size)) {
	                throw new Twig.Error("batch filter expects size to be a number");
	            }

	            size = Math.ceil(size);

	            result = Twig.lib.chunkArray(items, size);

	            if (fill && items.length % size != 0) {
	                last = result.pop();
	                missing = size - last.length;

	                while (missing--) {
	                    last.push(fill);
	                }

	                result.push(last);
	            }

	            return result;
	        },
	        round: function(value, params) {
	            params = params || [];

	            var precision = params.length > 0 ? params[0] : 0,
	                method = params.length > 1 ? params[1] : "common";

	            value = parseFloat(value);

	            if(precision && !Twig.lib.is("Number", precision)) {
	                throw new Twig.Error("round filter expects precision to be a number");
	            }

	            if (method === "common") {
	                return Twig.lib.round(value, precision);
	            }

	            if(!Twig.lib.is("Function", Math[method])) {
	                throw new Twig.Error("round filter expects method to be 'floor', 'ceil', or 'common'");
	            }

	            return Math[method](value * Math.pow(10, precision)) / Math.pow(10, precision);
	        }
	    };

	    Twig.filter = function(filter, value, params) {
	        if (!Twig.filters[filter]) {
	            throw "Unable to find filter " + filter;
	        }
	        return Twig.filters[filter].apply(this, [value, params]);
	    };

	    Twig.filter.extend = function(filter, definition) {
	        Twig.filters[filter] = definition;
	    };

	    return Twig;

	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	// ## twig.functions.js
	//
	// This file handles parsing filters.
	module.exports = function (Twig) {
	    /**
	     * @constant
	     * @type {string}
	     */
	    var TEMPLATE_NOT_FOUND_MESSAGE = 'Template "{name}" is not defined.';

	    // Determine object type
	    function is(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    }

	    Twig.functions = {
	        //  attribute, block, constant, date, dump, parent, random,.

	        // Range function from http://phpjs.org/functions/range:499
	        // Used under an MIT License
	        range: function (low, high, step) {
	            // http://kevin.vanzonneveld.net
	            // +   original by: Waldo Malqui Silva
	            // *     example 1: range ( 0, 12 );
	            // *     returns 1: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	            // *     example 2: range( 0, 100, 10 );
	            // *     returns 2: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
	            // *     example 3: range( 'a', 'i' );
	            // *     returns 3: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
	            // *     example 4: range( 'c', 'a' );
	            // *     returns 4: ['c', 'b', 'a']
	            var matrix = [];
	            var inival, endval, plus;
	            var walker = step || 1;
	            var chars = false;

	            if (!isNaN(low) && !isNaN(high)) {
	                inival = parseInt(low, 10);
	                endval = parseInt(high, 10);
	            } else if (isNaN(low) && isNaN(high)) {
	                chars = true;
	                inival = low.charCodeAt(0);
	                endval = high.charCodeAt(0);
	            } else {
	                inival = (isNaN(low) ? 0 : low);
	                endval = (isNaN(high) ? 0 : high);
	            }

	            plus = ((inival > endval) ? false : true);
	            if (plus) {
	                while (inival <= endval) {
	                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
	                    inival += walker;
	                }
	            } else {
	                while (inival >= endval) {
	                    matrix.push(((chars) ? String.fromCharCode(inival) : inival));
	                    inival -= walker;
	                }
	            }

	            return matrix;
	        },
	        cycle: function(arr, i) {
	            var pos = i % arr.length;
	            return arr[pos];
	        },
	        dump: function() {
	            var EOL = '\n',
	                indentChar = '  ',
	                indentTimes = 0,
	                out = '',
	                args = Array.prototype.slice.call(arguments),
	                indent = function(times) {
	                    var ind  = '';
	                    while (times > 0) {
	                        times--;
	                        ind += indentChar;
	                    }
	                    return ind;
	                },
	                displayVar = function(variable) {
	                    out += indent(indentTimes);
	                    if (typeof(variable) === 'object') {
	                        dumpVar(variable);
	                    } else if (typeof(variable) === 'function') {
	                        out += 'function()' + EOL;
	                    } else if (typeof(variable) === 'string') {
	                        out += 'string(' + variable.length + ') "' + variable + '"' + EOL;
	                    } else if (typeof(variable) === 'number') {
	                        out += 'number(' + variable + ')' + EOL;
	                    } else if (typeof(variable) === 'boolean') {
	                        out += 'bool(' + variable + ')' + EOL;
	                    }
	                },
	                dumpVar = function(variable) {
	                    var i;
	                    if (variable === null) {
	                        out += 'NULL' + EOL;
	                    } else if (variable === undefined) {
	                        out += 'undefined' + EOL;
	                    } else if (typeof variable === 'object') {
	                        out += indent(indentTimes) + typeof(variable);
	                        indentTimes++;
	                        out += '(' + (function(obj) {
	                            var size = 0, key;
	                            for (key in obj) {
	                                if (obj.hasOwnProperty(key)) {
	                                    size++;
	                                }
	                            }
	                            return size;
	                        })(variable) + ') {' + EOL;
	                        for (i in variable) {
	                            out += indent(indentTimes) + '[' + i + ']=> ' + EOL;
	                            displayVar(variable[i]);
	                        }
	                        indentTimes--;
	                        out += indent(indentTimes) + '}' + EOL;
	                    } else {
	                        displayVar(variable);
	                    }
	                };

	            // handle no argument case by dumping the entire render context
	            if (args.length == 0) args.push(this.context);

	            Twig.forEach(args, function(variable) {
	                dumpVar(variable);
	            });

	            return out;
	        },
	        date: function(date, time) {
	            var dateObj;
	            if (date === undefined || date === null || date === "") {
	                dateObj = new Date();
	            } else if (Twig.lib.is("Date", date)) {
	                dateObj = date;
	            } else if (Twig.lib.is("String", date)) {
	                if (date.match(/^[0-9]+$/)) {
	                    dateObj = new Date(date * 1000);
	                }
	                else {
	                    dateObj = new Date(Twig.lib.strtotime(date) * 1000);
	                }
	            } else if (Twig.lib.is("Number", date)) {
	                // timestamp
	                dateObj = new Date(date * 1000);
	            } else {
	                throw new Twig.Error("Unable to parse date " + date);
	            }
	            return dateObj;
	        },
	        block: function(block) {
	            if (this.originalBlockTokens[block]) {
	                return Twig.logic.parse.apply(this, [this.originalBlockTokens[block], this.context]).output;
	            } else {
	                return this.blocks[block];
	            }
	        },
	        parent: function() {
	            // Add a placeholder
	            return Twig.placeholders.parent;
	        },
	        attribute: function(object, method, params) {
	            if (Twig.lib.is('Object', object)) {
	                if (object.hasOwnProperty(method)) {
	                    if (typeof object[method] === "function") {
	                        return object[method].apply(undefined, params);
	                    }
	                    else {
	                        return object[method];
	                    }
	                }
	            }
	            // Array will return element 0-index
	            return object[method] || undefined;
	        },
	        max: function(values) {
	            if(Twig.lib.is("Object", values)) {
	                delete values["_keys"];
	                return Twig.lib.max(values);
	            }

	            return Twig.lib.max.apply(null, arguments);
	        },
	        min: function(values) {
	            if(Twig.lib.is("Object", values)) {
	                delete values["_keys"];
	                return Twig.lib.min(values);
	            }

	            return Twig.lib.min.apply(null, arguments);
	        },
	        template_from_string: function(template) {
	            if (template === undefined) {
	                template = '';
	            }
	            return Twig.Templates.parsers.twig({
	                options: this.options,
	                data: template
	            });
	        },
	        random: function(value) {
	            var LIMIT_INT31 = 0x80000000;

	            function getRandomNumber(n) {
	                var random = Math.floor(Math.random() * LIMIT_INT31);
	                var limits = [0, n];
	                var min = Math.min.apply(null, limits),
	                    max = Math.max.apply(null, limits);
	                return min + Math.floor((max - min + 1) * random / LIMIT_INT31);
	            }

	            if(Twig.lib.is("Number", value)) {
	                return getRandomNumber(value);
	            }

	            if(Twig.lib.is("String", value)) {
	                return value.charAt(getRandomNumber(value.length-1));
	            }

	            if(Twig.lib.is("Array", value)) {
	                return value[getRandomNumber(value.length-1)];
	            }

	            if(Twig.lib.is("Object", value)) {
	                var keys = Object.keys(value);
	                return value[keys[getRandomNumber(keys.length-1)]];
	            }

	            return getRandomNumber(LIMIT_INT31-1);
	        },

	        /**
	         * Returns the content of a template without rendering it
	         * @param {string} name
	         * @param {boolean} [ignore_missing=false]
	         * @returns {string}
	         */
	        source: function(name, ignore_missing) {
	            var templateSource;
	            var templateFound = false;
	            var isNodeEnvironment = typeof module !== 'undefined' && typeof module.exports !== 'undefined' && typeof window === 'undefined';
	            var loader;
	            var path;

	            //if we are running in a node.js environment, set the loader to 'fs' and ensure the
	            // path is relative to the CWD of the running script
	            //else, set the loader to 'ajax' and set the path to the value of name
	            if (isNodeEnvironment) {
	                loader = 'fs';
	                path = __dirname + '/' + name;
	            } else {
	                loader = 'ajax';
	                path = name;
	            }

	            //build the params object
	            var params = {
	                id: name,
	                path: path,
	                method: loader,
	                parser: 'source',
	                async: false,
	                fetchTemplateSource: true
	            };

	            //default ignore_missing to false
	            if (typeof ignore_missing === 'undefined') {
	                ignore_missing = false;
	            }

	            //try to load the remote template
	            //
	            //on exception, log it
	            try {
	                templateSource = Twig.Templates.loadRemote(name, params);

	                //if the template is undefined or null, set the template to an empty string and do NOT flip the
	                // boolean indicating we found the template
	                //
	                //else, all is good! flip the boolean indicating we found the template
	                if (typeof templateSource === 'undefined' || templateSource === null) {
	                    templateSource = '';
	                } else {
	                    templateFound = true;
	                }
	            } catch (e) {
	                Twig.log.debug('Twig.functions.source: ', 'Problem loading template  ', e);
	            }

	            //if the template was NOT found AND we are not ignoring missing templates, return the same message
	            // that is returned by the PHP implementation of the twig source() function
	            //
	            //else, return the template source
	            if (!templateFound && !ignore_missing) {
	                return TEMPLATE_NOT_FOUND_MESSAGE.replace('{name}', name);
	            } else {
	                return templateSource;
	            }
	        }
	    };

	    Twig._function = function(_function, value, params) {
	        if (!Twig.functions[_function]) {
	            throw "Unable to find function " + _function;
	        }
	        return Twig.functions[_function](value, params);
	    };

	    Twig._function.extend = function(_function, definition) {
	        Twig.functions[_function] = definition;
	    };

	    return Twig;

	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// ## twig.lib.js
	//
	// This file contains 3rd party libraries used within twig.
	//
	// Copies of the licenses for the code included here can be found in the
	// LICENSES.md file.
	//

	module.exports = function(Twig) {

	    // Namespace for libraries
	    Twig.lib = { };

	    Twig.lib.sprintf = __webpack_require__(8);
	    Twig.lib.vsprintf = __webpack_require__(9);
	    Twig.lib.round = __webpack_require__(10);
	    Twig.lib.max = __webpack_require__(11);
	    Twig.lib.min = __webpack_require__(12);
	    Twig.lib.strip_tags = __webpack_require__(13);
	    Twig.lib.strtotime = __webpack_require__(14);
	    Twig.lib.date = __webpack_require__(15);
	    Twig.lib.boolval = __webpack_require__(16);

	    Twig.lib.is = function(type, obj) {
	        var clas = Object.prototype.toString.call(obj).slice(8, -1);
	        return obj !== undefined && obj !== null && clas === type;
	    };

	    // shallow-copy an object
	    Twig.lib.copy = function(src) {
	        var target = {},
	            key;
	        for (key in src)
	            target[key] = src[key];

	        return target;
	    };

	    Twig.lib.extend = function (src, add) {
	        var keys = Object.keys(add),
	            i;

	        i = keys.length;

	        while (i--) {
	            src[keys[i]] = add[keys[i]];
	        }

	        return src;
	    };

	    Twig.lib.replaceAll = function(string, search, replace) {
	        return string.split(search).join(replace);
	    };

	    // chunk an array (arr) into arrays of (size) items, returns an array of arrays, or an empty array on invalid input
	    Twig.lib.chunkArray = function (arr, size) {
	        var returnVal = [],
	            x = 0,
	            len = arr.length;

	        if (size < 1 || !Twig.lib.is("Array", arr)) {
	            return [];
	        }

	        while (x < len) {
	            returnVal.push(arr.slice(x, x += size));
	        }

	        return returnVal;
	    };

	    return Twig;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function sprintf() {
	  //  discuss at: http://locutus.io/php/sprintf/
	  // original by: Ash Searle (http://hexmen.com/blog/)
	  // improved by: Michael White (http://getsprink.com)
	  // improved by: Jack
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: Dj
	  // improved by: Allidylls
	  //    input by: Paulo Freitas
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //   example 1: sprintf("%01.2f", 123.1)
	  //   returns 1: '123.10'
	  //   example 2: sprintf("[%10s]", 'monkey')
	  //   returns 2: '[    monkey]'
	  //   example 3: sprintf("[%'#10s]", 'monkey')
	  //   returns 3: '[####monkey]'
	  //   example 4: sprintf("%d", 123456789012345)
	  //   returns 4: '123456789012345'
	  //   example 5: sprintf('%-03s', 'E')
	  //   returns 5: 'E00'

	  var regex = /%%|%(\d+\$)?([-+'#0 ]*)(\*\d+\$|\*|\d+)?(?:\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g;
	  var a = arguments;
	  var i = 0;
	  var format = a[i++];

	  var _pad = function _pad(str, len, chr, leftJustify) {
	    if (!chr) {
	      chr = ' ';
	    }
	    var padding = str.length >= len ? '' : new Array(1 + len - str.length >>> 0).join(chr);
	    return leftJustify ? str + padding : padding + str;
	  };

	  var justify = function justify(value, prefix, leftJustify, minWidth, zeroPad, customPadChar) {
	    var diff = minWidth - value.length;
	    if (diff > 0) {
	      if (leftJustify || !zeroPad) {
	        value = _pad(value, minWidth, customPadChar, leftJustify);
	      } else {
	        value = [value.slice(0, prefix.length), _pad('', diff, '0', true), value.slice(prefix.length)].join('');
	      }
	    }
	    return value;
	  };

	  var _formatBaseX = function _formatBaseX(value, base, prefix, leftJustify, minWidth, precision, zeroPad) {
	    // Note: casts negative numbers to positive ones
	    var number = value >>> 0;
	    prefix = prefix && number && {
	      '2': '0b',
	      '8': '0',
	      '16': '0x'
	    }[base] || '';
	    value = prefix + _pad(number.toString(base), precision || 0, '0', false);
	    return justify(value, prefix, leftJustify, minWidth, zeroPad);
	  };

	  // _formatString()
	  var _formatString = function _formatString(value, leftJustify, minWidth, precision, zeroPad, customPadChar) {
	    if (precision !== null && precision !== undefined) {
	      value = value.slice(0, precision);
	    }
	    return justify(value, '', leftJustify, minWidth, zeroPad, customPadChar);
	  };

	  // doFormat()
	  var doFormat = function doFormat(substring, valueIndex, flags, minWidth, precision, type) {
	    var number, prefix, method, textTransform, value;

	    if (substring === '%%') {
	      return '%';
	    }

	    // parse flags
	    var leftJustify = false;
	    var positivePrefix = '';
	    var zeroPad = false;
	    var prefixBaseX = false;
	    var customPadChar = ' ';
	    var flagsl = flags.length;
	    var j;
	    for (j = 0; j < flagsl; j++) {
	      switch (flags.charAt(j)) {
	        case ' ':
	          positivePrefix = ' ';
	          break;
	        case '+':
	          positivePrefix = '+';
	          break;
	        case '-':
	          leftJustify = true;
	          break;
	        case "'":
	          customPadChar = flags.charAt(j + 1);
	          break;
	        case '0':
	          zeroPad = true;
	          customPadChar = '0';
	          break;
	        case '#':
	          prefixBaseX = true;
	          break;
	      }
	    }

	    // parameters may be null, undefined, empty-string or real valued
	    // we want to ignore null, undefined and empty-string values
	    if (!minWidth) {
	      minWidth = 0;
	    } else if (minWidth === '*') {
	      minWidth = +a[i++];
	    } else if (minWidth.charAt(0) === '*') {
	      minWidth = +a[minWidth.slice(1, -1)];
	    } else {
	      minWidth = +minWidth;
	    }

	    // Note: undocumented perl feature:
	    if (minWidth < 0) {
	      minWidth = -minWidth;
	      leftJustify = true;
	    }

	    if (!isFinite(minWidth)) {
	      throw new Error('sprintf: (minimum-)width must be finite');
	    }

	    if (!precision) {
	      precision = 'fFeE'.indexOf(type) > -1 ? 6 : type === 'd' ? 0 : undefined;
	    } else if (precision === '*') {
	      precision = +a[i++];
	    } else if (precision.charAt(0) === '*') {
	      precision = +a[precision.slice(1, -1)];
	    } else {
	      precision = +precision;
	    }

	    // grab value using valueIndex if required?
	    value = valueIndex ? a[valueIndex.slice(0, -1)] : a[i++];

	    switch (type) {
	      case 's':
	        return _formatString(value + '', leftJustify, minWidth, precision, zeroPad, customPadChar);
	      case 'c':
	        return _formatString(String.fromCharCode(+value), leftJustify, minWidth, precision, zeroPad);
	      case 'b':
	        return _formatBaseX(value, 2, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
	      case 'o':
	        return _formatBaseX(value, 8, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
	      case 'x':
	        return _formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
	      case 'X':
	        return _formatBaseX(value, 16, prefixBaseX, leftJustify, minWidth, precision, zeroPad).toUpperCase();
	      case 'u':
	        return _formatBaseX(value, 10, prefixBaseX, leftJustify, minWidth, precision, zeroPad);
	      case 'i':
	      case 'd':
	        number = +value || 0;
	        // Plain Math.round doesn't just truncate
	        number = Math.round(number - number % 1);
	        prefix = number < 0 ? '-' : positivePrefix;
	        value = prefix + _pad(String(Math.abs(number)), precision, '0', false);
	        return justify(value, prefix, leftJustify, minWidth, zeroPad);
	      case 'e':
	      case 'E':
	      case 'f': // @todo: Should handle locales (as per setlocale)
	      case 'F':
	      case 'g':
	      case 'G':
	        number = +value;
	        prefix = number < 0 ? '-' : positivePrefix;
	        method = ['toExponential', 'toFixed', 'toPrecision']['efg'.indexOf(type.toLowerCase())];
	        textTransform = ['toString', 'toUpperCase']['eEfFgG'.indexOf(type) % 2];
	        value = prefix + Math.abs(number)[method](precision);
	        return justify(value, prefix, leftJustify, minWidth, zeroPad)[textTransform]();
	      default:
	        return substring;
	    }
	  };

	  return format.replace(regex, doFormat);
	};
	//# sourceMappingURL=sprintf.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = function vsprintf(format, args) {
	  //  discuss at: http://locutus.io/php/vsprintf/
	  // original by: ejsanders
	  //   example 1: vsprintf('%04d-%02d-%02d', [1988, 8, 1])
	  //   returns 1: '1988-08-01'

	  var sprintf = __webpack_require__(8);

	  return sprintf.apply(this, [format].concat(args));
	};
	//# sourceMappingURL=vsprintf.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function round(value, precision, mode) {
	  //  discuss at: http://locutus.io/php/round/
	  // original by: Philip Peterson
	  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
	  //  revised by: T.Wild
	  //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
	  //    input by: Greenseed
	  //    input by: meo
	  //    input by: William
	  //    input by: Josep Sanz (http://www.ws3.es/)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  //      note 1: Great work. Ideas for improvement:
	  //      note 1: - code more compliant with developer guidelines
	  //      note 1: - for implementing PHP constant arguments look at
	  //      note 1: the pathinfo() function, it offers the greatest
	  //      note 1: flexibility & compatibility possible
	  //   example 1: round(1241757, -3)
	  //   returns 1: 1242000
	  //   example 2: round(3.6)
	  //   returns 2: 4
	  //   example 3: round(2.835, 2)
	  //   returns 3: 2.84
	  //   example 4: round(1.1749999999999, 2)
	  //   returns 4: 1.17
	  //   example 5: round(58551.799999999996, 2)
	  //   returns 5: 58551.8

	  var m, f, isHalf, sgn; // helper variables
	  // making sure precision is integer
	  precision |= 0;
	  m = Math.pow(10, precision);
	  value *= m;
	  // sign of the number
	  sgn = value > 0 | -(value < 0);
	  isHalf = value % 1 === 0.5 * sgn;
	  f = Math.floor(value);

	  if (isHalf) {
	    switch (mode) {
	      case 'PHP_ROUND_HALF_DOWN':
	        // rounds .5 toward zero
	        value = f + (sgn < 0);
	        break;
	      case 'PHP_ROUND_HALF_EVEN':
	        // rouds .5 towards the next even integer
	        value = f + f % 2 * sgn;
	        break;
	      case 'PHP_ROUND_HALF_ODD':
	        // rounds .5 towards the next odd integer
	        value = f + !(f % 2);
	        break;
	      default:
	        // rounds .5 away from zero
	        value = f + (sgn > 0);
	    }
	  }

	  return (isHalf ? value : Math.round(value)) / m;
	};
	//# sourceMappingURL=round.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function max() {
	  //  discuss at: http://locutus.io/php/max/
	  // original by: Onno Marsman (https://twitter.com/onnomarsman)
	  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
	  // improved by: Jack
	  //      note 1: Long code cause we're aiming for maximum PHP compatibility
	  //   example 1: max(1, 3, 5, 6, 7)
	  //   returns 1: 7
	  //   example 2: max([2, 4, 5])
	  //   returns 2: 5
	  //   example 3: max(0, 'hello')
	  //   returns 3: 0
	  //   example 4: max('hello', 0)
	  //   returns 4: 'hello'
	  //   example 5: max(-1, 'hello')
	  //   returns 5: 'hello'
	  //   example 6: max([2, 4, 8], [2, 5, 7])
	  //   returns 6: [2, 5, 7]

	  var ar;
	  var retVal;
	  var i = 0;
	  var n = 0;
	  var argv = arguments;
	  var argc = argv.length;
	  var _obj2Array = function _obj2Array(obj) {
	    if (Object.prototype.toString.call(obj) === '[object Array]') {
	      return obj;
	    } else {
	      var ar = [];
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ar.push(obj[i]);
	        }
	      }
	      return ar;
	    }
	  };
	  var _compare = function _compare(current, next) {
	    var i = 0;
	    var n = 0;
	    var tmp = 0;
	    var nl = 0;
	    var cl = 0;

	    if (current === next) {
	      return 0;
	    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
	      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
	        current = _obj2Array(current);
	        next = _obj2Array(next);
	        cl = current.length;
	        nl = next.length;
	        if (nl > cl) {
	          return 1;
	        } else if (nl < cl) {
	          return -1;
	        }
	        for (i = 0, n = cl; i < n; ++i) {
	          tmp = _compare(current[i], next[i]);
	          if (tmp === 1) {
	            return 1;
	          } else if (tmp === -1) {
	            return -1;
	          }
	        }
	        return 0;
	      }
	      return -1;
	    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
	      return 1;
	    } else if (isNaN(next) && !isNaN(current)) {
	      if (current === 0) {
	        return 0;
	      }
	      return current < 0 ? 1 : -1;
	    } else if (isNaN(current) && !isNaN(next)) {
	      if (next === 0) {
	        return 0;
	      }
	      return next > 0 ? 1 : -1;
	    }

	    if (next === current) {
	      return 0;
	    }

	    return next > current ? 1 : -1;
	  };

	  if (argc === 0) {
	    throw new Error('At least one value should be passed to max()');
	  } else if (argc === 1) {
	    if (_typeof(argv[0]) === 'object') {
	      ar = _obj2Array(argv[0]);
	    } else {
	      throw new Error('Wrong parameter count for max()');
	    }
	    if (ar.length === 0) {
	      throw new Error('Array must contain at least one element for max()');
	    }
	  } else {
	    ar = argv;
	  }

	  retVal = ar[0];
	  for (i = 1, n = ar.length; i < n; ++i) {
	    if (_compare(retVal, ar[i]) === 1) {
	      retVal = ar[i];
	    }
	  }

	  return retVal;
	};
	//# sourceMappingURL=max.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports = function min() {
	  //  discuss at: http://locutus.io/php/min/
	  // original by: Onno Marsman (https://twitter.com/onnomarsman)
	  //  revised by: Onno Marsman (https://twitter.com/onnomarsman)
	  // improved by: Jack
	  //      note 1: Long code cause we're aiming for maximum PHP compatibility
	  //   example 1: min(1, 3, 5, 6, 7)
	  //   returns 1: 1
	  //   example 2: min([2, 4, 5])
	  //   returns 2: 2
	  //   example 3: min(0, 'hello')
	  //   returns 3: 0
	  //   example 4: min('hello', 0)
	  //   returns 4: 'hello'
	  //   example 5: min(-1, 'hello')
	  //   returns 5: -1
	  //   example 6: min([2, 4, 8], [2, 5, 7])
	  //   returns 6: [2, 4, 8]

	  var ar;
	  var retVal;
	  var i = 0;
	  var n = 0;
	  var argv = arguments;
	  var argc = argv.length;
	  var _obj2Array = function _obj2Array(obj) {
	    if (Object.prototype.toString.call(obj) === '[object Array]') {
	      return obj;
	    }
	    var ar = [];
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ar.push(obj[i]);
	      }
	    }
	    return ar;
	  };

	  var _compare = function _compare(current, next) {
	    var i = 0;
	    var n = 0;
	    var tmp = 0;
	    var nl = 0;
	    var cl = 0;

	    if (current === next) {
	      return 0;
	    } else if ((typeof current === 'undefined' ? 'undefined' : _typeof(current)) === 'object') {
	      if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
	        current = _obj2Array(current);
	        next = _obj2Array(next);
	        cl = current.length;
	        nl = next.length;
	        if (nl > cl) {
	          return 1;
	        } else if (nl < cl) {
	          return -1;
	        }
	        for (i = 0, n = cl; i < n; ++i) {
	          tmp = _compare(current[i], next[i]);
	          if (tmp === 1) {
	            return 1;
	          } else if (tmp === -1) {
	            return -1;
	          }
	        }
	        return 0;
	      }
	      return -1;
	    } else if ((typeof next === 'undefined' ? 'undefined' : _typeof(next)) === 'object') {
	      return 1;
	    } else if (isNaN(next) && !isNaN(current)) {
	      if (current === 0) {
	        return 0;
	      }
	      return current < 0 ? 1 : -1;
	    } else if (isNaN(current) && !isNaN(next)) {
	      if (next === 0) {
	        return 0;
	      }
	      return next > 0 ? 1 : -1;
	    }

	    if (next === current) {
	      return 0;
	    }

	    return next > current ? 1 : -1;
	  };

	  if (argc === 0) {
	    throw new Error('At least one value should be passed to min()');
	  } else if (argc === 1) {
	    if (_typeof(argv[0]) === 'object') {
	      ar = _obj2Array(argv[0]);
	    } else {
	      throw new Error('Wrong parameter count for min()');
	    }

	    if (ar.length === 0) {
	      throw new Error('Array must contain at least one element for min()');
	    }
	  } else {
	    ar = argv;
	  }

	  retVal = ar[0];

	  for (i = 1, n = ar.length; i < n; ++i) {
	    if (_compare(retVal, ar[i]) === -1) {
	      retVal = ar[i];
	    }
	  }

	  return retVal;
	};
	//# sourceMappingURL=min.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function strip_tags(input, allowed) {
	  // eslint-disable-line camelcase
	  //  discuss at: http://locutus.io/php/strip_tags/
	  // original by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: Luke Godfrey
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  //    input by: Pul
	  //    input by: Alex
	  //    input by: Marc Palau
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: Bobby Drake
	  //    input by: Evertjan Garretsen
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: Eric Nagel
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: Tomasz Wesolowski
	  //  revised by: Rafał Kukawski (http://blog.kukawski.pl)
	  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>')
	  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
	  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>')
	  //   returns 2: '<p>Kevin van Zonneveld</p>'
	  //   example 3: strip_tags("<a href='http://kvz.io'>Kevin van Zonneveld</a>", "<a>")
	  //   returns 3: "<a href='http://kvz.io'>Kevin van Zonneveld</a>"
	  //   example 4: strip_tags('1 < 5 5 > 1')
	  //   returns 4: '1 < 5 5 > 1'
	  //   example 5: strip_tags('1 <br/> 1')
	  //   returns 5: '1  1'
	  //   example 6: strip_tags('1 <br/> 1', '<br>')
	  //   returns 6: '1 <br/> 1'
	  //   example 7: strip_tags('1 <br/> 1', '<br><br/>')
	  //   returns 7: '1 <br/> 1'

	  // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	  allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

	  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	  var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

	  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
	    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	  });
	};
	//# sourceMappingURL=strip_tags.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function strtotime(text, now) {
	  //  discuss at: http://locutus.io/php/strtotime/
	  // original by: Caio Ariede (http://caioariede.com)
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: Caio Ariede (http://caioariede.com)
	  // improved by: A. Matías Quezada (http://amatiasq.com)
	  // improved by: preuter
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  // improved by: Mirko Faber
	  //    input by: David
	  // bugfixed by: Wagner B. Soares
	  // bugfixed by: Artur Tchernychev
	  // bugfixed by: Stephan Bösch-Plepelits (http://github.com/plepe)
	  //      note 1: Examples all have a fixed timestamp to prevent
	  //      note 1: tests to fail because of variable time(zones)
	  //   example 1: strtotime('+1 day', 1129633200)
	  //   returns 1: 1129719600
	  //   example 2: strtotime('+1 week 2 days 4 hours 2 seconds', 1129633200)
	  //   returns 2: 1130425202
	  //   example 3: strtotime('last month', 1129633200)
	  //   returns 3: 1127041200
	  //   example 4: strtotime('2009-05-04 08:30:00 GMT')
	  //   returns 4: 1241425800
	  //   example 5: strtotime('2009-05-04 08:30:00+00')
	  //   returns 5: 1241425800
	  //   example 6: strtotime('2009-05-04 08:30:00+02:00')
	  //   returns 6: 1241418600
	  //   example 7: strtotime('2009-05-04T08:30:00Z')
	  //   returns 7: 1241425800

	  var parsed;
	  var match;
	  var today;
	  var year;
	  var date;
	  var days;
	  var ranges;
	  var len;
	  var times;
	  var regex;
	  var i;
	  var fail = false;

	  if (!text) {
	    return fail;
	  }

	  // Unecessary spaces
	  text = text.replace(/^\s+|\s+$/g, '').replace(/\s{2,}/g, ' ').replace(/[\t\r\n]/g, '').toLowerCase();

	  // in contrast to php, js Date.parse function interprets:
	  // dates given as yyyy-mm-dd as in timezone: UTC,
	  // dates with "." or "-" as MDY instead of DMY
	  // dates with two-digit years differently
	  // etc...etc...
	  // ...therefore we manually parse lots of common date formats
	  var pattern = new RegExp(['^(\\d{1,4})', '([\\-\\.\\/:])', '(\\d{1,2})', '([\\-\\.\\/:])', '(\\d{1,4})', '(?:\\s(\\d{1,2}):(\\d{2})?:?(\\d{2})?)?', '(?:\\s([A-Z]+)?)?$'].join(''));
	  match = text.match(pattern);

	  if (match && match[2] === match[4]) {
	    if (match[1] > 1901) {
	      switch (match[2]) {
	        case '-':
	          // YYYY-M-D
	          if (match[3] > 12 || match[5] > 31) {
	            return fail;
	          }

	          return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	        case '.':
	          // YYYY.M.D is not parsed by strtotime()
	          return fail;
	        case '/':
	          // YYYY/M/D
	          if (match[3] > 12 || match[5] > 31) {
	            return fail;
	          }

	          return new Date(match[1], parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	      }
	    } else if (match[5] > 1901) {
	      switch (match[2]) {
	        case '-':
	          // D-M-YYYY
	          if (match[3] > 12 || match[1] > 31) {
	            return fail;
	          }

	          return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	        case '.':
	          // D.M.YYYY
	          if (match[3] > 12 || match[1] > 31) {
	            return fail;
	          }

	          return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	        case '/':
	          // M/D/YYYY
	          if (match[1] > 12 || match[3] > 31) {
	            return fail;
	          }

	          return new Date(match[5], parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	      }
	    } else {
	      switch (match[2]) {
	        case '-':
	          // YY-M-D
	          if (match[3] > 12 || match[5] > 31 || match[1] < 70 && match[1] > 38) {
	            return fail;
	          }

	          year = match[1] >= 0 && match[1] <= 38 ? +match[1] + 2000 : match[1];
	          return new Date(year, parseInt(match[3], 10) - 1, match[5], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	        case '.':
	          // D.M.YY or H.MM.SS
	          if (match[5] >= 70) {
	            // D.M.YY
	            if (match[3] > 12 || match[1] > 31) {
	              return fail;
	            }

	            return new Date(match[5], parseInt(match[3], 10) - 1, match[1], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	          }
	          if (match[5] < 60 && !match[6]) {
	            // H.MM.SS
	            if (match[1] > 23 || match[3] > 59) {
	              return fail;
	            }

	            today = new Date();
	            return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0, match[9] || 0) / 1000;
	          }

	          // invalid format, cannot be parsed
	          return fail;
	        case '/':
	          // M/D/YY
	          if (match[1] > 12 || match[3] > 31 || match[5] < 70 && match[5] > 38) {
	            return fail;
	          }

	          year = match[5] >= 0 && match[5] <= 38 ? +match[5] + 2000 : match[5];
	          return new Date(year, parseInt(match[1], 10) - 1, match[3], match[6] || 0, match[7] || 0, match[8] || 0, match[9] || 0) / 1000;
	        case ':':
	          // HH:MM:SS
	          if (match[1] > 23 || match[3] > 59 || match[5] > 59) {
	            return fail;
	          }

	          today = new Date();
	          return new Date(today.getFullYear(), today.getMonth(), today.getDate(), match[1] || 0, match[3] || 0, match[5] || 0) / 1000;
	      }
	    }
	  }

	  // other formats and "now" should be parsed by Date.parse()
	  if (text === 'now') {
	    return now === null || isNaN(now) ? new Date().getTime() / 1000 | 0 : now | 0;
	  }
	  if (!isNaN(parsed = Date.parse(text))) {
	    return parsed / 1000 | 0;
	  }
	  // Browsers !== Chrome have problems parsing ISO 8601 date strings, as they do
	  // not accept lower case characters, space, or shortened time zones.
	  // Therefore, fix these problems and try again.
	  // Examples:
	  //   2015-04-15 20:33:59+02
	  //   2015-04-15 20:33:59z
	  //   2015-04-15t20:33:59+02:00
	  pattern = new RegExp(['^([0-9]{4}-[0-9]{2}-[0-9]{2})', '[ t]', '([0-9]{2}:[0-9]{2}:[0-9]{2}(\\.[0-9]+)?)', '([\\+-][0-9]{2}(:[0-9]{2})?|z)'].join(''));
	  match = text.match(pattern);
	  if (match) {
	    // @todo: time zone information
	    if (match[4] === 'z') {
	      match[4] = 'Z';
	    } else if (match[4].match(/^([+-][0-9]{2})$/)) {
	      match[4] = match[4] + ':00';
	    }

	    if (!isNaN(parsed = Date.parse(match[1] + 'T' + match[2] + match[4]))) {
	      return parsed / 1000 | 0;
	    }
	  }

	  date = now ? new Date(now * 1000) : new Date();
	  days = {
	    'sun': 0,
	    'mon': 1,
	    'tue': 2,
	    'wed': 3,
	    'thu': 4,
	    'fri': 5,
	    'sat': 6
	  };
	  ranges = {
	    'yea': 'FullYear',
	    'mon': 'Month',
	    'day': 'Date',
	    'hou': 'Hours',
	    'min': 'Minutes',
	    'sec': 'Seconds'
	  };

	  function lastNext(type, range, modifier) {
	    var diff;
	    var day = days[range];

	    if (typeof day !== 'undefined') {
	      diff = day - date.getDay();

	      if (diff === 0) {
	        diff = 7 * modifier;
	      } else if (diff > 0 && type === 'last') {
	        diff -= 7;
	      } else if (diff < 0 && type === 'next') {
	        diff += 7;
	      }

	      date.setDate(date.getDate() + diff);
	    }
	  }

	  function process(val) {
	    // @todo: Reconcile this with regex using \s, taking into account
	    // browser issues with split and regexes
	    var splt = val.split(' ');
	    var type = splt[0];
	    var range = splt[1].substring(0, 3);
	    var typeIsNumber = /\d+/.test(type);
	    var ago = splt[2] === 'ago';
	    var num = (type === 'last' ? -1 : 1) * (ago ? -1 : 1);

	    if (typeIsNumber) {
	      num *= parseInt(type, 10);
	    }

	    if (ranges.hasOwnProperty(range) && !splt[1].match(/^mon(day|\.)?$/i)) {
	      return date['set' + ranges[range]](date['get' + ranges[range]]() + num);
	    }

	    if (range === 'wee') {
	      return date.setDate(date.getDate() + num * 7);
	    }

	    if (type === 'next' || type === 'last') {
	      lastNext(type, range, num);
	    } else if (!typeIsNumber) {
	      return false;
	    }

	    return true;
	  }

	  times = '(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec' + '|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?' + '|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)';
	  regex = '([+-]?\\d+\\s' + times + '|' + '(last|next)\\s' + times + ')(\\sago)?';

	  match = text.match(new RegExp(regex, 'gi'));
	  if (!match) {
	    return fail;
	  }

	  for (i = 0, len = match.length; i < len; i++) {
	    if (!process(match[i])) {
	      return fail;
	    }
	  }

	  return date.getTime() / 1000;
	};
	//# sourceMappingURL=strtotime.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function date(format, timestamp) {
	  //  discuss at: http://locutus.io/php/date/
	  // original by: Carlos R. L. Rodrigues (http://www.jsfromhell.com)
	  // original by: gettimeofday
	  //    parts by: Peter-Paul Koch (http://www.quirksmode.org/js/beat.html)
	  // improved by: Kevin van Zonneveld (http://kvz.io)
	  // improved by: MeEtc (http://yass.meetcweb.com)
	  // improved by: Brad Touesnard
	  // improved by: Tim Wiel
	  // improved by: Bryan Elliott
	  // improved by: David Randall
	  // improved by: Theriault (https://github.com/Theriault)
	  // improved by: Theriault (https://github.com/Theriault)
	  // improved by: Brett Zamir (http://brett-zamir.me)
	  // improved by: Theriault (https://github.com/Theriault)
	  // improved by: Thomas Beaucourt (http://www.webapp.fr)
	  // improved by: JT
	  // improved by: Theriault (https://github.com/Theriault)
	  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
	  // improved by: Theriault (https://github.com/Theriault)
	  //    input by: Brett Zamir (http://brett-zamir.me)
	  //    input by: majak
	  //    input by: Alex
	  //    input by: Martin
	  //    input by: Alex Wilson
	  //    input by: Haravikk
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: majak
	  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
	  // bugfixed by: Brett Zamir (http://brett-zamir.me)
	  // bugfixed by: omid (http://locutus.io/php/380:380#comment_137122)
	  // bugfixed by: Chris (http://www.devotis.nl/)
	  //      note 1: Uses global: locutus to store the default timezone
	  //      note 1: Although the function potentially allows timezone info
	  //      note 1: (see notes), it currently does not set
	  //      note 1: per a timezone specified by date_default_timezone_set(). Implementers might use
	  //      note 1: $locutus.currentTimezoneOffset and
	  //      note 1: $locutus.currentTimezoneDST set by that function
	  //      note 1: in order to adjust the dates in this function
	  //      note 1: (or our other date functions!) accordingly
	  //   example 1: date('H:m:s \\m \\i\\s \\m\\o\\n\\t\\h', 1062402400)
	  //   returns 1: '07:09:40 m is month'
	  //   example 2: date('F j, Y, g:i a', 1062462400)
	  //   returns 2: 'September 2, 2003, 12:26 am'
	  //   example 3: date('Y W o', 1062462400)
	  //   returns 3: '2003 36 2003'
	  //   example 4: var $x = date('Y m d', (new Date()).getTime() / 1000)
	  //   example 4: $x = $x + ''
	  //   example 4: var $result = $x.length // 2009 01 09
	  //   returns 4: 10
	  //   example 5: date('W', 1104534000)
	  //   returns 5: '52'
	  //   example 6: date('B t', 1104534000)
	  //   returns 6: '999 31'
	  //   example 7: date('W U', 1293750000.82); // 2010-12-31
	  //   returns 7: '52 1293750000'
	  //   example 8: date('W', 1293836400); // 2011-01-01
	  //   returns 8: '52'
	  //   example 9: date('W Y-m-d', 1293974054); // 2011-01-02
	  //   returns 9: '52 2011-01-02'
	  //        test: skip-1 skip-2 skip-5

	  var jsdate, f;
	  // Keep this here (works, but for code commented-out below for file size reasons)
	  // var tal= [];
	  var txtWords = ['Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	  // trailing backslash -> (dropped)
	  // a backslash followed by any character (including backslash) -> the character
	  // empty string -> empty string
	  var formatChr = /\\?(.?)/gi;
	  var formatChrCb = function formatChrCb(t, s) {
	    return f[t] ? f[t]() : s;
	  };
	  var _pad = function _pad(n, c) {
	    n = String(n);
	    while (n.length < c) {
	      n = '0' + n;
	    }
	    return n;
	  };
	  f = {
	    // Day
	    d: function d() {
	      // Day of month w/leading 0; 01..31
	      return _pad(f.j(), 2);
	    },
	    D: function D() {
	      // Shorthand day name; Mon...Sun
	      return f.l().slice(0, 3);
	    },
	    j: function j() {
	      // Day of month; 1..31
	      return jsdate.getDate();
	    },
	    l: function l() {
	      // Full day name; Monday...Sunday
	      return txtWords[f.w()] + 'day';
	    },
	    N: function N() {
	      // ISO-8601 day of week; 1[Mon]..7[Sun]
	      return f.w() || 7;
	    },
	    S: function S() {
	      // Ordinal suffix for day of month; st, nd, rd, th
	      var j = f.j();
	      var i = j % 10;
	      if (i <= 3 && parseInt(j % 100 / 10, 10) === 1) {
	        i = 0;
	      }
	      return ['st', 'nd', 'rd'][i - 1] || 'th';
	    },
	    w: function w() {
	      // Day of week; 0[Sun]..6[Sat]
	      return jsdate.getDay();
	    },
	    z: function z() {
	      // Day of year; 0..365
	      var a = new Date(f.Y(), f.n() - 1, f.j());
	      var b = new Date(f.Y(), 0, 1);
	      return Math.round((a - b) / 864e5);
	    },

	    // Week
	    W: function W() {
	      // ISO-8601 week number
	      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
	      var b = new Date(a.getFullYear(), 0, 4);
	      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
	    },

	    // Month
	    F: function F() {
	      // Full month name; January...December
	      return txtWords[6 + f.n()];
	    },
	    m: function m() {
	      // Month w/leading 0; 01...12
	      return _pad(f.n(), 2);
	    },
	    M: function M() {
	      // Shorthand month name; Jan...Dec
	      return f.F().slice(0, 3);
	    },
	    n: function n() {
	      // Month; 1...12
	      return jsdate.getMonth() + 1;
	    },
	    t: function t() {
	      // Days in month; 28...31
	      return new Date(f.Y(), f.n(), 0).getDate();
	    },

	    // Year
	    L: function L() {
	      // Is leap year?; 0 or 1
	      var j = f.Y();
	      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
	    },
	    o: function o() {
	      // ISO-8601 year
	      var n = f.n();
	      var W = f.W();
	      var Y = f.Y();
	      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
	    },
	    Y: function Y() {
	      // Full year; e.g. 1980...2010
	      return jsdate.getFullYear();
	    },
	    y: function y() {
	      // Last two digits of year; 00...99
	      return f.Y().toString().slice(-2);
	    },

	    // Time
	    a: function a() {
	      // am or pm
	      return jsdate.getHours() > 11 ? 'pm' : 'am';
	    },
	    A: function A() {
	      // AM or PM
	      return f.a().toUpperCase();
	    },
	    B: function B() {
	      // Swatch Internet time; 000..999
	      var H = jsdate.getUTCHours() * 36e2;
	      // Hours
	      var i = jsdate.getUTCMinutes() * 60;
	      // Minutes
	      // Seconds
	      var s = jsdate.getUTCSeconds();
	      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
	    },
	    g: function g() {
	      // 12-Hours; 1..12
	      return f.G() % 12 || 12;
	    },
	    G: function G() {
	      // 24-Hours; 0..23
	      return jsdate.getHours();
	    },
	    h: function h() {
	      // 12-Hours w/leading 0; 01..12
	      return _pad(f.g(), 2);
	    },
	    H: function H() {
	      // 24-Hours w/leading 0; 00..23
	      return _pad(f.G(), 2);
	    },
	    i: function i() {
	      // Minutes w/leading 0; 00..59
	      return _pad(jsdate.getMinutes(), 2);
	    },
	    s: function s() {
	      // Seconds w/leading 0; 00..59
	      return _pad(jsdate.getSeconds(), 2);
	    },
	    u: function u() {
	      // Microseconds; 000000-999000
	      return _pad(jsdate.getMilliseconds() * 1000, 6);
	    },

	    // Timezone
	    e: function e() {
	      // Timezone identifier; e.g. Atlantic/Azores, ...
	      // The following works, but requires inclusion of the very large
	      // timezone_abbreviations_list() function.
	      /*              return that.date_default_timezone_get();
	       */
	      var msg = 'Not supported (see source code of date() for timezone on how to add support)';
	      throw new Error(msg);
	    },
	    I: function I() {
	      // DST observed?; 0 or 1
	      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
	      // If they are not equal, then DST is observed.
	      var a = new Date(f.Y(), 0);
	      // Jan 1
	      var c = Date.UTC(f.Y(), 0);
	      // Jan 1 UTC
	      var b = new Date(f.Y(), 6);
	      // Jul 1
	      // Jul 1 UTC
	      var d = Date.UTC(f.Y(), 6);
	      return a - c !== b - d ? 1 : 0;
	    },
	    O: function O() {
	      // Difference to GMT in hour format; e.g. +0200
	      var tzo = jsdate.getTimezoneOffset();
	      var a = Math.abs(tzo);
	      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
	    },
	    P: function P() {
	      // Difference to GMT w/colon; e.g. +02:00
	      var O = f.O();
	      return O.substr(0, 3) + ':' + O.substr(3, 2);
	    },
	    T: function T() {
	      // The following works, but requires inclusion of the very
	      // large timezone_abbreviations_list() function.
	      /*              var abbr, i, os, _default;
	      if (!tal.length) {
	        tal = that.timezone_abbreviations_list();
	      }
	      if ($locutus && $locutus.default_timezone) {
	        _default = $locutus.default_timezone;
	        for (abbr in tal) {
	          for (i = 0; i < tal[abbr].length; i++) {
	            if (tal[abbr][i].timezone_id === _default) {
	              return abbr.toUpperCase();
	            }
	          }
	        }
	      }
	      for (abbr in tal) {
	        for (i = 0; i < tal[abbr].length; i++) {
	          os = -jsdate.getTimezoneOffset() * 60;
	          if (tal[abbr][i].offset === os) {
	            return abbr.toUpperCase();
	          }
	        }
	      }
	      */
	      return 'UTC';
	    },
	    Z: function Z() {
	      // Timezone offset in seconds (-43200...50400)
	      return -jsdate.getTimezoneOffset() * 60;
	    },

	    // Full Date/Time
	    c: function c() {
	      // ISO-8601 date.
	      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
	    },
	    r: function r() {
	      // RFC 2822
	      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
	    },
	    U: function U() {
	      // Seconds since UNIX epoch
	      return jsdate / 1000 | 0;
	    }
	  };

	  var _date = function _date(format, timestamp) {
	    jsdate = timestamp === undefined ? new Date() // Not provided
	    : timestamp instanceof Date ? new Date(timestamp) // JS Date()
	    : new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
	    ;
	    return format.replace(formatChr, formatChrCb);
	  };

	  return _date(format, timestamp);
	};
	//# sourceMappingURL=date.js.map

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function boolval(mixedVar) {
	  // original by: Will Rowe
	  //   example 1: boolval(true)
	  //   returns 1: true
	  //   example 2: boolval(false)
	  //   returns 2: false
	  //   example 3: boolval(0)
	  //   returns 3: false
	  //   example 4: boolval(0.0)
	  //   returns 4: false
	  //   example 5: boolval('')
	  //   returns 5: false
	  //   example 6: boolval('0')
	  //   returns 6: false
	  //   example 7: boolval([])
	  //   returns 7: false
	  //   example 8: boolval('')
	  //   returns 8: false
	  //   example 9: boolval(null)
	  //   returns 9: false
	  //   example 10: boolval(undefined)
	  //   returns 10: false
	  //   example 11: boolval('true')
	  //   returns 11: true

	  if (mixedVar === false) {
	    return false;
	  }

	  if (mixedVar === 0 || mixedVar === 0.0) {
	    return false;
	  }

	  if (mixedVar === '' || mixedVar === '0') {
	    return false;
	  }

	  if (Array.isArray(mixedVar) && mixedVar.length === 0) {
	    return false;
	  }

	  if (mixedVar === null || mixedVar === undefined) {
	    return false;
	  }

	  return true;
	};
	//# sourceMappingURL=boolval.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(Twig) {
	    'use strict';

	    Twig.Templates.registerLoader('ajax', function(location, params, callback, error_callback) {
	        var template,
	            xmlhttp,
	            precompiled = params.precompiled,
	            parser = this.parsers[params.parser] || this.parser.twig;

	        if (typeof XMLHttpRequest === "undefined") {
	            throw new Twig.Error('Unsupported platform: Unable to do ajax requests ' +
	                                 'because there is no "XMLHTTPRequest" implementation');
	        }

	        xmlhttp = new XMLHttpRequest();
	        xmlhttp.onreadystatechange = function() {
	            var data = null;

	            if(xmlhttp.readyState === 4) {
	                if (xmlhttp.status === 200 || (window.cordova && xmlhttp.status == 0)) {
	                    Twig.log.debug("Got template ", xmlhttp.responseText);

	                    if (precompiled === true) {
	                        data = JSON.parse(xmlhttp.responseText);
	                    } else {
	                        data = xmlhttp.responseText;
	                    }

	                    params.url = location;
	                    params.data = data;

	                    template = parser.call(this, params);

	                    if (typeof callback === 'function') {
	                        callback(template);
	                    }
	                } else {
	                    if (typeof error_callback === 'function') {
	                        error_callback(xmlhttp);
	                    }
	                }
	            }
	        };
	        xmlhttp.open("GET", location, !!params.async);
	        xmlhttp.send();

	        if (params.async) {
	            // TODO: return deferred promise
	            return true;
	        } else {
	            return template;
	        }
	    });

	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(Twig) {
	    'use strict';

	    var fs, path;

	    try {
	    	// require lib dependencies at runtime
	    	fs = __webpack_require__(19);
	    	path = __webpack_require__(20);
	    } catch (e) {
	    	// NOTE: this is in a try/catch to avoid errors cross platform
	    }

	    Twig.Templates.registerLoader('fs', function(location, params, callback, error_callback) {
	        var template,
	            data = null,
	            precompiled = params.precompiled,
	            parser = this.parsers[params.parser] || this.parser.twig;

	        if (!fs || !path) {
	            throw new Twig.Error('Unsupported platform: Unable to load from file ' +
	                                 'because there is no "fs" or "path" implementation');
	        }

	        var loadTemplateFn = function(err, data) {
	            if (err) {
	                if (typeof error_callback === 'function') {
	                    error_callback(err);
	                }
	                return;
	            }

	            if (precompiled === true) {
	                data = JSON.parse(data);
	            }

	            params.data = data;
	            params.path = params.path || location;

	            // template is in data
	            template = parser.call(this, params);

	            if (typeof callback === 'function') {
	                callback(template);
	            }
	        };
	        params.path = params.path || location;

	        if (params.async) {
	            fs.stat(params.path, function (err, stats) {
	                if (err || !stats.isFile()) {
	                    if (typeof error_callback === 'function') {
	                        error_callback(new Twig.Error('Unable to find template file ' + params.path));
	                    }
	                    return;
	                }
	                fs.readFile(params.path, 'utf8', loadTemplateFn);
	            });
	            // TODO: return deferred promise
	            return true;
	        } else {
	            try {
	                if (!fs.statSync(params.path).isFile()) {
	                    throw new Twig.Error('Unable to find template file ' + params.path);
	                }
	            } catch (err) {
	                throw new Twig.Error('Unable to find template file ' + params.path);
	            }
	            data = fs.readFileSync(params.path, 'utf8');
	            loadTemplateFn(undefined, data);
	            return template
	        }
	    });

	};


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 21 */
/***/ function(module, exports) {

	// ## twig.logic.js
	//
	// This file handles tokenizing, compiling and parsing logic tokens. {% ... %}
	module.exports = function (Twig) {
	    "use strict";

	    /**
	     * Namespace for logic handling.
	     */
	    Twig.logic = {};

	    /**
	     * Logic token types.
	     */
	    Twig.logic.type = {
	        if_:       'Twig.logic.type.if',
	        endif:     'Twig.logic.type.endif',
	        for_:      'Twig.logic.type.for',
	        endfor:    'Twig.logic.type.endfor',
	        else_:     'Twig.logic.type.else',
	        elseif:    'Twig.logic.type.elseif',
	        set:       'Twig.logic.type.set',
	        setcapture:'Twig.logic.type.setcapture',
	        endset:    'Twig.logic.type.endset',
	        filter:    'Twig.logic.type.filter',
	        endfilter: 'Twig.logic.type.endfilter',
	        shortblock: 'Twig.logic.type.shortblock',
	        block:     'Twig.logic.type.block',
	        endblock:  'Twig.logic.type.endblock',
	        extends_:  'Twig.logic.type.extends',
	        use:       'Twig.logic.type.use',
	        include:   'Twig.logic.type.include',
	        spaceless: 'Twig.logic.type.spaceless',
	        endspaceless: 'Twig.logic.type.endspaceless',
	        macro:     'Twig.logic.type.macro',
	        endmacro:  'Twig.logic.type.endmacro',
	        import_:   'Twig.logic.type.import',
	        from:      'Twig.logic.type.from',
	        embed:     'Twig.logic.type.embed',
	        endembed:  'Twig.logic.type.endembed'
	    };


	    // Regular expressions for handling logic tokens.
	    //
	    // Properties:
	    //
	    //      type:  The type of expression this matches
	    //
	    //      regex: A regular expression that matches the format of the token
	    //
	    //      next:  What logic tokens (if any) pop this token off the logic stack. If empty, the
	    //             logic token is assumed to not require an end tag and isn't push onto the stack.
	    //
	    //      open:  Does this tag open a logic expression or is it standalone. For example,
	    //             {% endif %} cannot exist without an opening {% if ... %} tag, so open = false.
	    //
	    //  Functions:
	    //
	    //      compile: A function that handles compiling the token into an output token ready for
	    //               parsing with the parse function.
	    //
	    //      parse:   A function that parses the compiled token into output (HTML / whatever the
	    //               template represents).
	    Twig.logic.definitions = [
	        {
	            /**
	             * If type logic tokens.
	             *
	             *  Format: {% if expression %}
	             */
	            type: Twig.logic.type.if_,
	            regex: /^if\s+([\s\S]+)$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.elseif,
	                Twig.logic.type.endif
	            ],
	            open: true,
	            compile: function (token) {
	                var expression = token.match[1];
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this;

	                return Twig.expression.parseAsync.apply(this, [token.stack, context])
	                .then(function(result) {
	                    chain = true;

	                    if (Twig.lib.boolval(result)) {
	                        chain = false;

	                        return Twig.parseAsync.apply(that, [token.output, context]);
	                    }

	                    return '';
	                })
	                .then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * Else if type logic tokens.
	             *
	             *  Format: {% elseif expression %}
	             */
	            type: Twig.logic.type.elseif,
	            regex: /^elseif\s+([^\s].*)$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.elseif,
	                Twig.logic.type.endif
	            ],
	            open: false,
	            compile: function (token) {
	                var expression = token.match[1];
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this;

	                return Twig.expression.parseAsync.apply(this, [token.stack, context])
	                .then(function(result) {
	                    if (chain && Twig.lib.boolval(result)) {
	                        chain = false;

	                        return Twig.parseAsync.apply(that, [token.output, context]);
	                    }

	                    return '';
	                })
	                .then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    }
	                });
	            }
	        },
	        {
	            /**
	             * Else if type logic tokens.
	             *
	             *  Format: {% elseif expression %}
	             */
	            type: Twig.logic.type.else_,
	            regex: /^else$/,
	            next: [
	                Twig.logic.type.endif,
	                Twig.logic.type.endfor
	            ],
	            open: false,
	            parse: function (token, context, chain) {
	                var promise = Twig.Promise.resolve('');

	                if (chain) {
	                    promise = Twig.parseAsync.apply(this, [token.output, context]);
	                }

	                return promise.then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * End if type logic tokens.
	             *
	             *  Format: {% endif %}
	             */
	            type: Twig.logic.type.endif,
	            regex: /^endif$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * For type logic tokens.
	             *
	             *  Format: {% for expression %}
	             */
	            type: Twig.logic.type.for_,
	            regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
	            next: [
	                Twig.logic.type.else_,
	                Twig.logic.type.endfor
	            ],
	            open: true,
	            compile: function (token) {
	                var key_value = token.match[1],
	                    expression = token.match[2],
	                    conditional = token.match[3],
	                    kv_split = null;

	                token.key_var = null;
	                token.value_var = null;

	                if (key_value.indexOf(",") >= 0) {
	                    kv_split = key_value.split(',');
	                    if (kv_split.length === 2) {
	                        token.key_var = kv_split[0].trim();
	                        token.value_var = kv_split[1].trim();
	                    } else {
	                        throw new Twig.Error("Invalid expression in for loop: " + key_value);
	                    }
	                } else {
	                    token.value_var = key_value;
	                }

	                // Valid expressions for a for loop
	                //   for item     in expression
	                //   for key,item in expression

	                // Compile the expression.
	                token.expression = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                // Compile the conditional (if available)
	                if (conditional) {
	                    token.conditional = Twig.expression.compile.apply(this, [{
	                        type:  Twig.expression.type.expression,
	                        value: conditional
	                    }]).stack;
	                }

	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, continue_chain) {
	                // Parse expression
	                var output = [],
	                    len,
	                    index = 0,
	                    keyset,
	                    that = this,
	                    conditional = token.conditional,
	                    buildLoop = function(index, len) {
	                        var isConditional = conditional !== undefined;
	                        return {
	                            index: index+1,
	                            index0: index,
	                            revindex: isConditional?undefined:len-index,
	                            revindex0: isConditional?undefined:len-index-1,
	                            first: (index === 0),
	                            last: isConditional?undefined:(index === len-1),
	                            length: isConditional?undefined:len,
	                            parent: context
	                        };
	                    },
	                    // run once for each iteration of the loop
	                    loop = function(key, value) {
	                        var inner_context = Twig.ChildContext(context);

	                        inner_context[token.value_var] = value;

	                        if (token.key_var) {
	                            inner_context[token.key_var] = key;
	                        }

	                        // Loop object
	                        inner_context.loop = buildLoop(index, len);

	                        var promise = conditional === undefined ?
	                            Twig.Promise.resolve(true) :
	                            Twig.expression.parseAsync.apply(that, [conditional, inner_context]);

	                        promise.then(function(condition) {
	                            if (!condition)
	                                return;

	                            return Twig.parseAsync.apply(that, [token.output, inner_context])
	                            .then(function(o) {
	                                output.push(o);
	                                index += 1;
	                            });
	                        })
	                        .then(function() {
	                            // Delete loop-related variables from the context
	                            delete inner_context['loop'];
	                            delete inner_context[token.value_var];
	                            delete inner_context[token.key_var];

	                            // Merge in values that exist in context but have changed
	                            // in inner_context.
	                            Twig.merge(context, inner_context, true);
	                        });
	                    };


	                return Twig.expression.parseAsync.apply(this, [token.expression, context])
	                .then(function(result) {
	                    if (Twig.lib.is('Array', result)) {
	                        len = result.length;
	                        Twig.async.forEach(result, function (value) {
	                            var key = index;

	                            return loop(key, value);
	                        });
	                    } else if (Twig.lib.is('Object', result)) {
	                        if (result._keys !== undefined) {
	                            keyset = result._keys;
	                        } else {
	                            keyset = Object.keys(result);
	                        }
	                        len = keyset.length;
	                        Twig.forEach(keyset, function(key) {
	                            // Ignore the _keys property, it's internal to twig.js
	                            if (key === "_keys") return;

	                            loop(key,  result[key]);
	                        });
	                    }

	                    // Only allow else statements if no output was generated
	                    continue_chain = (output.length === 0);

	                    return {
	                        chain: continue_chain,
	                        output: Twig.output.apply(that, [output])
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * End if type logic tokens.
	             *
	             *  Format: {% endif %}
	             */
	            type: Twig.logic.type.endfor,
	            regex: /^endfor$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * Set type logic tokens.
	             *
	             *  Format: {% set key = expression %}
	             */
	            type: Twig.logic.type.set,
	            regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*([\s\S]+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var key = token.match[1].trim(),
	                    expression = token.match[2],
	                    // Compile the expression.
	                    expression_stack  = Twig.expression.compile.apply(this, [{
	                        type:  Twig.expression.type.expression,
	                        value: expression
	                    }]).stack;

	                token.key = key;
	                token.expression = expression_stack;

	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, continue_chain) {
	                var key = token.key;

	                return Twig.expression.parseAsync.apply(this, [token.expression, context])
	                .then(function(value) {
	                    if (value === context) {
	                        /*  If storing the context in a variable, it needs to be a clone of the current state of context.
	                            Otherwise we have a context with infinite recursion.
	                            Fixes #341
	                        */
	                        value = Twig.lib.copy(value);
	                    }

	                    context[key] = value;

	                    return {
	                        chain: continue_chain,
	                        context: context
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * Set capture type logic tokens.
	             *
	             *  Format: {% set key %}
	             */
	            type: Twig.logic.type.setcapture,
	            regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
	            next: [
	                Twig.logic.type.endset
	            ],
	            open: true,
	            compile: function (token) {
	                var key = token.match[1].trim();

	                token.key = key;

	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, continue_chain) {
	                var that = this,
	                    key = token.key;

	                return Twig.parseAsync.apply(this, [token.output, context])
	                .then(function(value) {
	                    // set on both the global and local context
	                    that.context[key] = value;
	                    context[key] = value;

	                    return {
	                        chain: continue_chain,
	                        context: context
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * End set type block logic tokens.
	             *
	             *  Format: {% endset %}
	             */
	            type: Twig.logic.type.endset,
	            regex: /^endset$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * Filter logic tokens.
	             *
	             *  Format: {% filter upper %} or {% filter lower|escape %}
	             */
	            type: Twig.logic.type.filter,
	            regex: /^filter\s+(.+)$/,
	            next: [
	                Twig.logic.type.endfilter
	            ],
	            open: true,
	            compile: function (token) {
	                var expression = "|" + token.match[1].trim();
	                // Compile the expression.
	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;
	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                return Twig.parseAsync.apply(this, [token.output, context])
	                .then(function(unfiltered) {
	                    var stack = [{
	                        type: Twig.expression.type.string,
	                        value: unfiltered
	                    }].concat(token.stack);

	                    return Twig.expression.parseAsync.apply(that, [stack, context]);
	                })
	                .then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    }
	                });
	            }
	        },
	        {
	            /**
	             * End filter logic tokens.
	             *
	             *  Format: {% endfilter %}
	             */
	            type: Twig.logic.type.endfilter,
	            regex: /^endfilter$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% block title %}
	             */
	            type: Twig.logic.type.block,
	            regex: /^block\s+([a-zA-Z0-9_]+)$/,
	            next: [
	                Twig.logic.type.endblock
	            ],
	            open: true,
	            compile: function (token) {
	                token.block = token.match[1].trim();
	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this,
	                    block_output,
	                    output,
	                    promise = Twig.Promise.resolve(),
	                    isImported = Twig.indexOf(this.importedBlocks, token.block) > -1,
	                    hasParent = this.blocks[token.block] && Twig.indexOf(this.blocks[token.block], Twig.placeholders.parent) > -1;

	                // Don't override previous blocks unless they're imported with "use"
	                // Loops should be exempted as well.
	                if (this.blocks[token.block] === undefined || isImported || hasParent || context.loop || token.overwrite) {
	                    if (token.expression) {
	                        promise = Twig.expression.parseAsync.apply(this, [token.output, context])
	                        .then(function(value) {
	                            return Twig.expression.parseAsync.apply(that, [{
	                                type: Twig.expression.type.string,
	                                value: value
	                            }, context]);
	                        });
	                    } else {
	                        promise = Twig.parseAsync.apply(this, [token.output, context])
	                        .then(function(value) {
	                            return Twig.expression.parseAsync.apply(that, [{
	                                type: Twig.expression.type.string,
	                                value: value
	                            }, context]);
	                        });
	                    }

	                    promise = promise.then(function(block_output) {
	                        if (isImported) {
	                            // once the block is overridden, remove it from the list of imported blocks
	                            that.importedBlocks.splice(that.importedBlocks.indexOf(token.block), 1);
	                        }

	                        if (hasParent) {
	                            that.blocks[token.block] = Twig.Markup(that.blocks[token.block].replace(Twig.placeholders.parent, block_output));
	                        } else {
	                            that.blocks[token.block] = block_output;
	                        }

	                        that.originalBlockTokens[token.block] = {
	                            type: token.type,
	                            block: token.block,
	                            output: token.output,
	                            overwrite: true
	                        };
	                    });
	                }

	                return promise.then(function() {
	                    // Check if a child block has been set from a template extending this one.
	                    if (that.child.blocks[token.block]) {
	                        output = that.child.blocks[token.block];
	                    } else {
	                        output = that.blocks[token.block];
	                    }

	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * Block shorthand logic tokens.
	             *
	             *  Format: {% block title expression %}
	             */
	            type: Twig.logic.type.shortblock,
	            regex: /^block\s+([a-zA-Z0-9_]+)\s+(.+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                token.expression = token.match[2].trim();

	                token.output = Twig.expression.compile({
	                    type: Twig.expression.type.expression,
	                    value: token.expression
	                }).stack;

	                token.block = token.match[1].trim();
	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                return Twig.logic.handler[Twig.logic.type.block].parse.apply(this, arguments);
	            }
	        },
	        {
	            /**
	             * End block logic tokens.
	             *
	             *  Format: {% endblock %}
	             */
	            type: Twig.logic.type.endblock,
	            regex: /^endblock(?:\s+([a-zA-Z0-9_]+))?$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% extends "template.twig" %}
	             */
	            type: Twig.logic.type.extends_,
	            regex: /^extends\s+(.+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var expression = token.match[1].trim();
	                delete token.match;

	                token.stack   = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function (token, context, chain) {
	                var template,
	                    that = this,
	                    innerContext = Twig.ChildContext(context);

	                // Resolve filename
	                return Twig.expression.parseAsync.apply(this, [token.stack, context])
	                .then(function(file) {
	                    // Set parent template
	                    that.extend = file;

	                    if (file instanceof Twig.Template) {
	                        template = file;
	                    } else {
	                        // Import file
	                        template = that.importFile(file);
	                    }

	                    // Render the template in case it puts anything in its context
	                    return template.renderAsync(innerContext);
	                })
	                .then(function() {
	                    // Extend the parent context with the extended context
	                    Twig.lib.extend(context, innerContext);

	                    return {
	                        chain: chain,
	                        output: ''
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% use "template.twig" %}
	             */
	            type: Twig.logic.type.use,
	            regex: /^use\s+(.+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var expression = token.match[1].trim();
	                delete token.match;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this;

	                // Resolve filename
	                return Twig.expression.parseAsync.apply(this, [token.stack, context])
	                .then(function(file) {
	                    // Import blocks
	                    that.importBlocks(file);

	                    return {
	                        chain: chain,
	                        output: ''
	                    };
	                });
	            }
	        },
	        {
	            /**
	             * Block logic tokens.
	             *
	             *  Format: {% includes "template.twig" [with {some: 'values'} only] %}
	             */
	            type: Twig.logic.type.include,
	            regex: /^include\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var match = token.match,
	                    expression = match[1].trim(),
	                    ignoreMissing = match[2] !== undefined,
	                    withContext = match[3],
	                    only = ((match[4] !== undefined) && match[4].length);

	                delete token.match;

	                token.only = only;
	                token.ignoreMissing = ignoreMissing;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                if (withContext !== undefined) {
	                    token.withStack = Twig.expression.compile.apply(this, [{
	                        type:  Twig.expression.type.expression,
	                        value: withContext.trim()
	                    }]).stack;
	                }

	                return token;
	            },
	            parse: function (token, context, chain) {
	                // Resolve filename
	                var innerContext = {},
	                    i,
	                    template,
	                    that = this,
	                    promise = Twig.Promise.resolve();

	                if (!token.only) {
	                    innerContext = Twig.ChildContext(context);
	                }

	                if (token.withStack !== undefined) {
	                    promise = Twig.expression.parseAsync.apply(this, [token.withStack, context])
	                    .then(function(withContext) {
	                        for (i in withContext) {
	                            if (withContext.hasOwnProperty(i))
	                                innerContext[i] = withContext[i];
	                        }
	                    });
	                }

	                return promise
	                .then(function() {
	                    return Twig.expression.parseAsync.apply(that, [token.stack, context]);
	                })
	                .then(function(file) {
	                    if (file instanceof Twig.Template) {
	                        template = file;
	                    } else {
	                        // Import file
	                        try {
	                            template = that.importFile(file);
	                        } catch (err) {
	                            if (token.ignoreMissing) {
	                                return '';
	                            }

	                            throw err;
	                        }
	                    }

	                    return template.renderAsync(innerContext);
	                })
	                .then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },
	        {
	            type: Twig.logic.type.spaceless,
	            regex: /^spaceless$/,
	            next: [
	                Twig.logic.type.endspaceless
	            ],
	            open: true,

	            // Parse the html and return it without any spaces between tags
	            parse: function (token, context, chain) {
	                // Parse the output without any filter
	                return Twig.parseAsync.apply(this, [token.output, context])
	                .then(function(unfiltered) {
	                    var // A regular expression to find closing and opening tags with spaces between them
	                        rBetweenTagSpaces = />\s+</g,
	                        // Replace all space between closing and opening html tags
	                        output = unfiltered.replace(rBetweenTagSpaces,'><').trim();
	                        // Rewrap output as a Twig.Markup
	                        output = Twig.Markup(output);
	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },

	        // Add the {% endspaceless %} token
	        {
	            type: Twig.logic.type.endspaceless,
	            regex: /^endspaceless$/,
	            next: [ ],
	            open: false
	        },
	        {
	            /**
	             * Macro logic tokens.
	             *
	             * Format: {% maro input(name, value, type, size) %}
	             *
	             */
	            type: Twig.logic.type.macro,
	            regex: /^macro\s+([a-zA-Z0-9_]+)\s*\(\s*((?:[a-zA-Z0-9_]+(?:,\s*)?)*)\s*\)$/,
	            next: [
	                Twig.logic.type.endmacro
	            ],
	            open: true,
	            compile: function (token) {
	                var macroName = token.match[1],
	                    parameters = token.match[2].split(/[\s,]+/);

	                //TODO: Clean up duplicate check
	                for (var i=0; i<parameters.length; i++) {
	                    for (var j=0; j<parameters.length; j++){
	                        if (parameters[i] === parameters[j] && i !== j) {
	                            throw new Twig.Error("Duplicate arguments for parameter: "+ parameters[i]);
	                        }
	                    }
	                }

	                token.macroName = macroName;
	                token.parameters = parameters;

	                delete token.match;
	                return token;
	            },
	            parse: function (token, context, chain) {
	                var template = this;
	                this.macros[token.macroName] = function() {
	                    // Pass global context and other macros
	                    var macroContext = {
	                        _self: template.macros
	                    }
	                    // Add parameters from context to macroContext
	                    for (var i=0; i<token.parameters.length; i++) {
	                        var prop = token.parameters[i];
	                        if(typeof arguments[i] !== 'undefined') {
	                            macroContext[prop] = arguments[i];
	                        } else {
	                            macroContext[prop] = undefined;
	                        }
	                    }

	                    // Render
	                    return Twig.parseAsync.apply(template, [token.output, macroContext]);
	                };

	                return {
	                    chain: chain,
	                    output: ''
	                };

	            }
	        },
	        {
	            /**
	             * End macro logic tokens.
	             *
	             * Format: {% endmacro %}
	             */
	             type: Twig.logic.type.endmacro,
	             regex: /^endmacro$/,
	             next: [ ],
	             open: false
	        },
	        {
	            /*
	            * import logic tokens.
	            *
	            * Format: {% import "template.twig" as form %}
	            */
	            type: Twig.logic.type.import_,
	            regex: /^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var expression = token.match[1].trim(),
	                    contextName = token.match[2].trim();
	                delete token.match;

	                token.expression = expression;
	                token.contextName = contextName;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this,
	                    output = { chain: chain, output: '' };

	                if (token.expression === '_self') {
	                    context[token.contextName] = this.macros;
	                    return Twig.Promise.resolve(output);
	                }

	                return Twig.expression.parseAsync.apply(this, [token.stack, context])
	                .then(function(file) {
	                    return that.importFile(file || token.expression);
	                })
	                .then(function(template) {
	                    context[token.contextName] = template.renderAsync({}, {output: 'macros'});

	                    return output;
	                });
	            }
	        },
	        {
	            /*
	            * from logic tokens.
	            *
	            * Format: {% from "template.twig" import func as form %}
	            */
	            type: Twig.logic.type.from,
	            regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
	            next: [ ],
	            open: true,
	            compile: function (token) {
	                var expression = token.match[1].trim(),
	                    macroExpressions = token.match[2].trim().split(/\s*,\s*/),
	                    macroNames = {};

	                for (var i=0; i<macroExpressions.length; i++) {
	                    var res = macroExpressions[i];

	                    // match function as variable
	                    var macroMatch = res.match(/^([a-zA-Z0-9_]+)\s+as\s+([a-zA-Z0-9_]+)$/);
	                    if (macroMatch) {
	                        macroNames[macroMatch[1].trim()] = macroMatch[2].trim();
	                    }
	                    else if (res.match(/^([a-zA-Z0-9_]+)$/)) {
	                        macroNames[res] = res;
	                    }
	                    else {
	                        // ignore import
	                    }

	                }

	                delete token.match;

	                token.expression = expression;
	                token.macroNames = macroNames;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type: Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                return token;
	            },
	            parse: function (token, context, chain) {
	                var that = this,
	                    promise = Twig.Promise.resolve(this.macros);

	                if (token.expression !== "_self") {
	                    promise = Twig.expression.parseAsync.apply(this, [token.stack, context])
	                    .then(function(file) {
	                        return that.importFile(file || token.expression);
	                    })
	                    .then(function(template) {
	                        return template.renderAsync({}, {output: 'macros'});
	                    });
	                }

	                return promise
	                .then(function(macros) {
	                    for (var macroName in token.macroNames) {
	                        if (macros.hasOwnProperty(macroName)) {
	                            context[token.macroNames[macroName]] = macros[macroName];
	                        }
	                    }

	                    return {
	                        chain: chain,
	                        output: ''
	                    }
	                });
	            }
	        },
	        {
	            /**
	             * The embed tag combines the behaviour of include and extends.
	             * It allows you to include another template's contents, just like include does.
	             *
	             *  Format: {% embed "template.twig" [with {some: 'values'} only] %}
	             */
	            type: Twig.logic.type.embed,
	            regex: /^embed\s+(.+?)(?:\s|$)(ignore missing(?:\s|$))?(?:with\s+([\S\s]+?))?(?:\s|$)(only)?$/,
	            next: [
	                Twig.logic.type.endembed
	            ],
	            open: true,
	            compile: function (token) {
	                var match = token.match,
	                    expression = match[1].trim(),
	                    ignoreMissing = match[2] !== undefined,
	                    withContext = match[3],
	                    only = ((match[4] !== undefined) && match[4].length);

	                delete token.match;

	                token.only = only;
	                token.ignoreMissing = ignoreMissing;

	                token.stack = Twig.expression.compile.apply(this, [{
	                    type:  Twig.expression.type.expression,
	                    value: expression
	                }]).stack;

	                if (withContext !== undefined) {
	                    token.withStack = Twig.expression.compile.apply(this, [{
	                        type:  Twig.expression.type.expression,
	                        value: withContext.trim()
	                    }]).stack;
	                }

	                return token;
	            },
	            parse: function (token, context, chain) {
	                // Resolve filename
	                var innerContext = {},
	                    that = this,
	                    i,
	                    template,
	                    promise = Twig.Promise.resolve();

	                if (!token.only) {
	                    for (i in context) {
	                        if (context.hasOwnProperty(i))
	                            innerContext[i] = context[i];
	                    }
	                }

	                if (token.withStack !== undefined) {
	                    promise = Twig.expression.parseAsync.apply(this, [token.withStack, context])
	                    .then(function(withContext) {
	                        for (i in withContext) {
	                            if (withContext.hasOwnProperty(i))
	                                innerContext[i] = withContext[i];
	                        }
	                    });
	                }

	                return promise.then(function() {
	                    return Twig.expression.parseAsync.apply(that, [token.stack, innerContext]);
	                })
	                .then(function(file) {
	                    if (file instanceof Twig.Template) {
	                        template = file;
	                    } else {
	                        // Import file
	                        try {
	                            template = that.importFile(file);
	                        } catch (err) {
	                            if (token.ignoreMissing) {
	                                return '';
	                            }

	                            throw err;
	                        }
	                    }

	                    // reset previous blocks
	                    that.blocks = {};

	                    // parse tokens. output will be not used
	                    return Twig.parseAsync.apply(that, [token.output, innerContext])
	                    .then(function() {
	                        // render tempalte with blocks defined in embed block
	                        return template.renderAsync(innerContext, {'blocks':that.blocks});
	                    });
	                })
	                .then(function(output) {
	                    return {
	                        chain: chain,
	                        output: output
	                    };
	                });
	            }
	        },
	        /* Add the {% endembed %} token
	         *
	         */
	        {
	            type: Twig.logic.type.endembed,
	            regex: /^endembed$/,
	            next: [ ],
	            open: false
	        }

	    ];


	    /**
	     * Registry for logic handlers.
	     */
	    Twig.logic.handler = {};

	    /**
	     * Define a new token type, available at Twig.logic.type.{type}
	     */
	    Twig.logic.extendType = function (type, value) {
	        value = value || ("Twig.logic.type" + type);
	        Twig.logic.type[type] = value;
	    };

	    /**
	     * Extend the logic parsing functionality with a new token definition.
	     *
	     * // Define a new tag
	     * Twig.logic.extend({
	     *     type: Twig.logic.type.{type},
	     *     // The pattern to match for this token
	     *     regex: ...,
	     *     // What token types can follow this token, leave blank if any.
	     *     next: [ ... ]
	     *     // Create and return compiled version of the token
	     *     compile: function(token) { ... }
	     *     // Parse the compiled token with the context provided by the render call
	     *     //   and whether this token chain is complete.
	     *     parse: function(token, context, chain) { ... }
	     * });
	     *
	     * @param {Object} definition The new logic expression.
	     */
	    Twig.logic.extend = function (definition) {

	        if (!definition.type) {
	            throw new Twig.Error("Unable to extend logic definition. No type provided for " + definition);
	        } else {
	            Twig.logic.extendType(definition.type);
	        }
	        Twig.logic.handler[definition.type] = definition;
	    };

	    // Extend with built-in expressions
	    while (Twig.logic.definitions.length > 0) {
	        Twig.logic.extend(Twig.logic.definitions.shift());
	    }

	    /**
	     * Compile a logic token into an object ready for parsing.
	     *
	     * @param {Object} raw_token An uncompiled logic token.
	     *
	     * @return {Object} A compiled logic token, ready for parsing.
	     */
	    Twig.logic.compile = function (raw_token) {
	        var expression = raw_token.value.trim(),
	            token = Twig.logic.tokenize.apply(this, [expression]),
	            token_template = Twig.logic.handler[token.type];

	        // Check if the token needs compiling
	        if (token_template.compile) {
	            token = token_template.compile.apply(this, [token]);
	            Twig.log.trace("Twig.logic.compile: ", "Compiled logic token to ", token);
	        }

	        return token;
	    };

	    /**
	     * Tokenize logic expressions. This function matches token expressions against regular
	     * expressions provided in token definitions provided with Twig.logic.extend.
	     *
	     * @param {string} expression the logic token expression to tokenize
	     *                (i.e. what's between {% and %})
	     *
	     * @return {Object} The matched token with type set to the token type and match to the regex match.
	     */
	    Twig.logic.tokenize = function (expression) {
	        var token = {},
	            token_template_type = null,
	            token_type = null,
	            token_regex = null,
	            regex_array = null,
	            regex = null,
	            match = null;

	        // Ignore whitespace around expressions.
	        expression = expression.trim();

	        for (token_template_type in Twig.logic.handler) {
	            if (Twig.logic.handler.hasOwnProperty(token_template_type)) {
	                // Get the type and regex for this template type
	                token_type = Twig.logic.handler[token_template_type].type;
	                token_regex = Twig.logic.handler[token_template_type].regex;

	                // Handle multiple regular expressions per type.
	                regex_array = [];
	                if (token_regex instanceof Array) {
	                    regex_array = token_regex;
	                } else {
	                    regex_array.push(token_regex);
	                }

	                // Check regular expressions in the order they were specified in the definition.
	                while (regex_array.length > 0) {
	                    regex = regex_array.shift();
	                    match = regex.exec(expression.trim());
	                    if (match !== null) {
	                        token.type  = token_type;
	                        token.match = match;
	                        Twig.log.trace("Twig.logic.tokenize: ", "Matched a ", token_type, " regular expression of ", match);
	                        return token;
	                    }
	                }
	            }
	        }

	        // No regex matches
	        throw new Twig.Error("Unable to parse '" + expression.trim() + "'");
	    };

	    /**
	     * Parse a logic token within a given context.
	     *
	     * What are logic chains?
	     *      Logic chains represent a series of tokens that are connected,
	     *          for example:
	     *          {% if ... %} {% else %} {% endif %}
	     *
	     *      The chain parameter is used to signify if a chain is open of closed.
	     *      open:
	     *          More tokens in this chain should be parsed.
	     *      closed:
	     *          This token chain has completed parsing and any additional
	     *          tokens (else, elseif, etc...) should be ignored.
	     *
	     * @param {Object} token The compiled token.
	     * @param {Object} context The render context.
	     * @param {boolean} chain Is this an open logic chain. If false, that means a
	     *                        chain is closed and no further cases should be parsed.
	     */
	    Twig.logic.parse = function (token, context, chain, allow_async) {
	        var output = '',
	            promise,
	            is_async = true,
	            token_template;

	        context = context || { };

	        Twig.log.debug("Twig.logic.parse: ", "Parsing logic token ", token);

	        token_template = Twig.logic.handler[token.type];

	        if (token_template.parse) {
	            output = token_template.parse.apply(this, [token, context, chain]);
	        }

	        promise = Twig.isPromise(output) ? output : Twig.Promise.resolve(output);

	        promise.then(function(o) {
	            is_async = false;
	            output = o;
	        });

	        if (allow_async)
	            return promise || Twig.Promise.resolve(output);

	        if (is_async)
	            throw new Twig.Error('You are using Twig.js in sync mode in combination with async extensions.');

	        return output;
	    };

	    return Twig;

	};


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function(Twig) {
	    'use strict';

	    Twig.Templates.registerParser('source', function(params) {
	        return params.data || '';
	    });
	};


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(Twig) {
	    'use strict';

	    Twig.Templates.registerParser('twig', function(params) {
	        return new Twig.Template(params);
	    });
	};


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	// ## twig.path.js
	//
	// This file handles path parsing
	module.exports = function (Twig) {
	    "use strict";

	    /**
	     * Namespace for path handling.
	     */
	    Twig.path = {};

	    /**
	     * Generate the canonical version of a url based on the given base path and file path and in
	     * the previously registered namespaces.
	     *
	     * @param  {string} template The Twig Template
	     * @param  {string} file     The file path, may be relative and may contain namespaces.
	     *
	     * @return {string}          The canonical version of the path
	     */
	     Twig.path.parsePath = function(template, file) {
	        var namespaces = null,
	            file = file || "";

	        if (typeof template === 'object' && typeof template.options === 'object') {
	            namespaces = template.options.namespaces;
	        }

	        if (typeof namespaces === 'object' && (file.indexOf('::') > 0) || file.indexOf('@') >= 0){
	            for (var k in namespaces){
	                if (namespaces.hasOwnProperty(k)) {
	                    file = file.replace(k + '::', namespaces[k]);
	                    file = file.replace('@' + k, namespaces[k]);
	                }
	            }

	            return file;
	        }

	        return Twig.path.relativePath(template, file);
	    };

	    /**
	     * Generate the relative canonical version of a url based on the given base path and file path.
	     *
	     * @param {Twig.Template} template The Twig.Template.
	     * @param {string} file The file path, relative to the base path.
	     *
	     * @return {string} The canonical version of the path.
	     */
	    Twig.path.relativePath = function(template, file) {
	        var base,
	            base_path,
	            sep_chr = "/",
	            new_path = [],
	            file = file || "",
	            val;

	        if (template.url) {
	            if (typeof template.base !== 'undefined') {
	                base = template.base + ((template.base.charAt(template.base.length-1) === '/') ? '' : '/');
	            } else {
	                base = template.url;
	            }
	        } else if (template.path) {
	            // Get the system-specific path separator
	            var path = __webpack_require__(20),
	                sep = path.sep || sep_chr,
	                relative = new RegExp("^\\.{1,2}" + sep.replace("\\", "\\\\"));
	            file = file.replace(/\//g, sep);

	            if (template.base !== undefined && file.match(relative) == null) {
	                file = file.replace(template.base, '');
	                base = template.base + sep;
	            } else {
	                base = path.normalize(template.path);
	            }

	            base = base.replace(sep+sep, sep);
	            sep_chr = sep;
	        } else if ((template.name || template.id) && template.method && template.method !== 'fs' && template.method !== 'ajax') {
	            // Custom registered loader
	            base = template.base || template.name || template.id;
	        } else {
	            throw new Twig.Error("Cannot extend an inline template.");
	        }

	        base_path = base.split(sep_chr);

	        // Remove file from url
	        base_path.pop();
	        base_path = base_path.concat(file.split(sep_chr));

	        while (base_path.length > 0) {
	            val = base_path.shift();
	            if (val == ".") {
	                // Ignore
	            } else if (val == ".." && new_path.length > 0 && new_path[new_path.length-1] != "..") {
	                new_path.pop();
	            } else {
	                new_path.push(val);
	            }
	        }

	        return new_path.join(sep_chr);
	    };

	    return Twig;
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	// ## twig.tests.js
	//
	// This file handles expression tests. (is empty, is not defined, etc...)
	module.exports = function (Twig) {
	    "use strict";
	    Twig.tests = {
	        empty: function(value) {
	            if (value === null || value === undefined) return true;
	            // Handler numbers
	            if (typeof value === "number") return false; // numbers are never "empty"
	            // Handle strings and arrays
	            if (value.length && value.length > 0) return false;
	            // Handle objects
	            for (var key in value) {
	                if (value.hasOwnProperty(key)) return false;
	            }
	            return true;
	        },
	        odd: function(value) {
	            return value % 2 === 1;
	        },
	        even: function(value) {
	            return value % 2 === 0;
	        },
	        divisibleby: function(value, params) {
	            return value % params[0] === 0;
	        },
	        defined: function(value) {
	            return value !== undefined;
	        },
	        none: function(value) {
	            return value === null;
	        },
	        'null': function(value) {
	            return this.none(value); // Alias of none
	        },
	        'same as': function(value, params) {
	            return value === params[0];
	        },
	        sameas: function(value, params) {
	            console.warn('`sameas` is deprecated use `same as`');
	            return Twig.tests['same as'](value, params);
	        },
	        iterable: function(value) {
	            return value && (Twig.lib.is("Array", value) || Twig.lib.is("Object", value));
	        }
	        /*
	        constant ?
	         */
	    };

	    Twig.test = function(test, value, params) {
	        if (!Twig.tests[test]) {
	            throw "Test " + test + " is not defined.";
	        }
	        return Twig.tests[test](value, params);
	    };

	    Twig.test.extend = function(test, definition) {
	        Twig.tests[test] = definition;
	    };

	    return Twig;
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	// ## twig.async.js
	//
	// This file handles asynchronous tasks within twig.
	module.exports = function (Twig) {
	    "use strict";

	    Twig.parseAsync = function (tokens, context) {
	        return Twig.parse.apply(this, [tokens, context, true]);
	    }

	    Twig.expression.parseAsync = function (tokens, context, tokens_are_parameters) {
	        return Twig.expression.parse.apply(this, [tokens, context, tokens_are_parameters, true]);
	    }

	    Twig.logic.parseAsync = function (token, context, chain) {
	        return Twig.logic.parse.apply(this, [token, context, chain, true]);
	    }

	    Twig.Template.prototype.renderAsync = function (context, params) {
	        return this.render(context, params, true);
	    }

	    Twig.async = {};

	    /**
	     * Checks for `thenable` objects
	     */
	    Twig.isPromise = function(obj) {
	        return obj && (typeof obj.then == 'function');
	    }

	    /**
	     * An alternate implementation of a Promise that does not fully follow
	     * the spec, but instead works fully synchronous while still being
	     * thenable.
	     *
	     * These promises can be mixed with regular promises at which point
	     * the synchronous behaviour is lost.
	     */
	    Twig.Promise = function(executor) {
	        // State
	        var state = 'unknown';
	        var value = null;
	        var handlers = null;

	        function changeState(newState, v) {
	            state = newState;
	            value = v;
	            notify();
	        };
	        function onResolve(v) { changeState('resolve', v); }
	        function onReject(e) { changeState('reject', e); }

	        function notify() {
	            if (!handlers) return;

	            Twig.forEach(handlers, function(h) {
	                append(h.resolve, h.reject);
	            });
	            handlers = null;
	        }

	        function append(onResolved, onRejected) {
	            var h = {
	                resolve: onResolved,
	                reject: onRejected
	            };

	            // The promise has yet to be rejected or resolved.
	            if (state == 'unknown') {
	                handlers = handlers || [];
	                return handlers.push(h);
	            }

	            // The state has been changed to either resolve, or reject
	            // which means we should call the handler.
	            if (h[state])
	                h[state](value);
	        }

	        function run(fn, resolve, reject) {
	            var done = false;
	            try {
	                fn(function(v) {
	                    if (done) return;
	                    done = true;
	                    resolve(v);
	                }, function(e) {
	                    if (done) return;
	                    done = true;
	                    reject(e);
	                });
	            } catch(e) {
	                done = true;
	                reject(e);
	            }
	        }

	        function ready(result) {
	            try {
	                if (!Twig.isPromise(result)) {
	                    return onResolve(result);
	                }

	                run(result.then.bind(result), ready, onReject);
	            } catch (e) {
	                onReject(e);
	            }
	        }

	        run(executor, ready, onReject);

	        return {
	            then: function(onResolved, onRejected) {
	                var hasResolved = typeof onResolved == 'function';
	                var hasRejected = typeof onRejected == 'function';

	                return new Twig.Promise(function(resolve, reject) {
	                    append(function(result) {
	                        if (hasResolved) {
	                            try {
	                                resolve(onResolved(result));
	                            } catch (e) {
	                                reject(e);
	                            }
	                        } else {
	                            resolve(result);
	                        }
	                    }, function(err) {
	                        if (hasRejected) {
	                            try {
	                                resolve(onRejected(err));
	                            } catch (e) {
	                                reject(e);
	                            }
	                        } else {
	                            reject(err);
	                        }
	                    });
	                });
	            },
	            catch: function(onRejected) {
	                return this.then(null, onRejected);
	            }
	        };
	    }

	    Twig.Promise.resolve = function(value) {
	        return new Twig.Promise(function(resolve) {
	            resolve(value);
	        });
	    };

	    Twig.Promise.reject = function(e) {
	        return new Twig.Promise(function(resolve, reject) {
	            reject(e);
	        });
	    };

	    Twig.Promise.all = function(promises) {
	        var results = [];

	        return Twig.async.forEach(promises, function(p, index) {
	            if (!Twig.isPromise(p)) {
	                results[index] = p;
	                return;
	            }

	            return p.then(function(v) {
	                results[index] = v;
	            });
	        })
	        .then(function() {
	            return results;
	        });
	    };

	    /**
	    * Go over each item in a fashion compatible with Twig.forEach,
	    * allow the function to return a promise or call the third argument
	    * to signal it is finished.
	    *
	    * Each item in the array will be called sequentially.
	    */
	    Twig.async.forEach = function forEachAsync(arr, callback) {
	        var arg_index = 0;
	        var callbacks = {};
	        var promise = new Twig.Promise(function(resolve, reject) {
	            callbacks = {
	                resolve: resolve,
	                reject: reject
	            };
	        });

	        function fail(err) {
	            callbacks.reject(err);
	        }

	        function next(value) {
	            if (!Twig.isPromise(value))
	                return iterate();

	            value.then(next, fail);
	        }

	        function iterate() {
	            var index = arg_index++;

	            if (index == arr.length) {
	                callbacks.resolve();
	                return;
	            }

	            next(callback(arr[index], index));
	        }

	        iterate();

	        return promise;
	    };

	    return Twig;

	};


/***/ },
/* 27 */
/***/ function(module, exports) {

	// ## twig.exports.js
	//
	// This file provides extension points and other hooks into the twig functionality.

	module.exports = function (Twig) {
	    "use strict";
	    Twig.exports = {
	        VERSION: Twig.VERSION
	    };

	    /**
	     * Create and compile a twig.js template.
	     *
	     * @param {Object} param Paramteres for creating a Twig template.
	     *
	     * @return {Twig.Template} A Twig template ready for rendering.
	     */
	    Twig.exports.twig = function twig(params) {
	        'use strict';
	        var id = params.id,
	            options = {
	                strict_variables: params.strict_variables || false,
	                // TODO: turn autoscape on in the next major version
	                autoescape: params.autoescape != null && params.autoescape || false,
	                allowInlineIncludes: params.allowInlineIncludes || false,
	                rethrow: params.rethrow || false,
	                namespaces: params.namespaces
	            };

	        if (Twig.cache && id) {
	            Twig.validateId(id);
	        }

	        if (params.debug !== undefined) {
	            Twig.debug = params.debug;
	        }
	        if (params.trace !== undefined) {
	            Twig.trace = params.trace;
	        }

	        if (params.data !== undefined) {
	            return Twig.Templates.parsers.twig({
	                data: params.data,
	                path: params.hasOwnProperty('path') ? params.path : undefined,
	                module: params.module,
	                id:   id,
	                options: options
	            });

	        } else if (params.ref !== undefined) {
	            if (params.id !== undefined) {
	                throw new Twig.Error("Both ref and id cannot be set on a twig.js template.");
	            }
	            return Twig.Templates.load(params.ref);
	        
	        } else if (params.method !== undefined) {
	            if (!Twig.Templates.isRegisteredLoader(params.method)) {
	                throw new Twig.Error('Loader for "' + params.method + '" is not defined.');
	            }
	            return Twig.Templates.loadRemote(params.name || params.href || params.path || id || undefined, {
	                id: id,
	                method: params.method,
	                parser: params.parser || 'twig',
	                base: params.base,
	                module: params.module,
	                precompiled: params.precompiled,
	                async: params.async,
	                options: options

	            }, params.load, params.error);

	        } else if (params.href !== undefined) {
	            return Twig.Templates.loadRemote(params.href, {
	                id: id,
	                method: 'ajax',
	                parser: params.parser || 'twig',
	                base: params.base,
	                module: params.module,
	                precompiled: params.precompiled,
	                async: params.async,
	                options: options

	            }, params.load, params.error);

	        } else if (params.path !== undefined) {
	            return Twig.Templates.loadRemote(params.path, {
	                id: id,
	                method: 'fs',
	                parser: params.parser || 'twig',
	                base: params.base,
	                module: params.module,
	                precompiled: params.precompiled,
	                async: params.async,
	                options: options

	            }, params.load, params.error);
	        }
	    };

	    // Extend Twig with a new filter.
	    Twig.exports.extendFilter = function(filter, definition) {
	        Twig.filter.extend(filter, definition);
	    };

	    // Extend Twig with a new function.
	    Twig.exports.extendFunction = function(fn, definition) {
	        Twig._function.extend(fn, definition);
	    };

	    // Extend Twig with a new test.
	    Twig.exports.extendTest = function(test, definition) {
	        Twig.test.extend(test, definition);
	    };

	    // Extend Twig with a new definition.
	    Twig.exports.extendTag = function(definition) {
	        Twig.logic.extend(definition);
	    };

	    // Provide an environment for extending Twig core.
	    // Calls fn with the internal Twig object.
	    Twig.exports.extend = function(fn) {
	        fn(Twig);
	    };


	    /**
	     * Provide an extension for use with express 2.
	     *
	     * @param {string} markup The template markup.
	     * @param {array} options The express options.
	     *
	     * @return {string} The rendered template.
	     */
	    Twig.exports.compile = function(markup, options) {
	        var id = options.filename,
	            path = options.filename,
	            template;

	        // Try to load the template from the cache
	        template = new Twig.Template({
	            data: markup,
	            path: path,
	            id: id,
	            options: options.settings['twig options']
	        }); // Twig.Templates.load(id) ||

	        return function(context) {
	            return template.render(context);
	        };
	    };

	    /**
	     * Provide an extension for use with express 3.
	     *
	     * @param {string} path The location of the template file on disk.
	     * @param {Object|Function} The options or callback.
	     * @param {Function} fn callback.
	     * 
	     * @throws Twig.Error
	     */
	    Twig.exports.renderFile = function(path, options, fn) {
	        // handle callback in options
	        if (typeof options === 'function') {
	            fn = options;
	            options = {};
	        }

	        options = options || {};

	        var settings = options.settings || {};

	        var params = {
	            path: path,
	            base: settings.views,
	            load: function(template) {
	                // render and return template as a simple string, see https://github.com/twigjs/twig.js/pull/348 for more information
	                fn(null, '' + template.render(options));
	            }
	        };

	        // mixin any options provided to the express app.
	        var view_options = settings['twig options'];

	        if (view_options) {
	            for (var option in view_options) {
	                if (view_options.hasOwnProperty(option)) {
	                    params[option] = view_options[option];
	                }
	            }
	        }

	        Twig.exports.twig(params);
	    };

	    // Express 3 handler
	    Twig.exports.__express = Twig.exports.renderFile;

	    /**
	     * Shoud Twig.js cache templates.
	     * Disable during development to see changes to templates without
	     * reloading, and disable in production to improve performance.
	     *
	     * @param {boolean} cache
	     */
	    Twig.exports.cache = function(cache) {
	        Twig.cache = cache;
	    };

	    //We need to export the path module so we can effectively test it
	    Twig.exports.path = Twig.path;

	    //Export our filters.
	    //Resolves #307
	    Twig.exports.filters = Twig.filters;

	    return Twig;
	};


/***/ }
/******/ ])
});
;
}).call(this,"/..\\..\\..\\..\\node_modules\\twig")
},{"fs":2,"path":3}],6:[function(require,module,exports){
'use strict';

var _SimpleBar = require('SimpleBar');

var _SimpleBar2 = _interopRequireDefault(_SimpleBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
    var twig = require('twig');
    var $body = $('body');

    // index vars
    var $hours = $('.js-hours'),
        $hoursCurrentItem = $('.js-hours-current'),
        $hoursItem = $('.js-hours-item'),
        $calendarContainer = $('.js-calendar-container'),
        $calendarToogle = $('.js-calendar-toggle'),
        $calendarPrevDay = $('.js-calendar-prev'),
        $calendarNextDay = $('.js-calendar-next'),
        $tooltip = $('.js-tooltip'),
        $tooltipWrapper = $('.js-tooltip-wrapper'),
        $tooltipTriangle = $('.js-tooltip-triangle'),
        $eventItem = $('.js-event-item'),
        $eventRow = $('.js-main-events-row'),
        $eventRoom = $('.js-main-events-room'),
        $schedule = $('.js-schedule'),
        $eventsRoom = $('.js-events-room'),
        $eventsFloor = $('.js-events-floor'),
        $colLeft = $('.js-col-left'),
        $addEventBtn = $('.js-add-event-btn'),
        $editEventBtn = $('.js-edit-event-btn');

    //poup vars
    var $popup = $('.js-popup');

    var currentTime = new Date(),
        currentHour = currentTime.getHours(),
        currentMinute = currentTime.getMinutes();

    var _oneHour = 6.25,
        _oneMinute = _oneHour / 60,
        _startPoint = 8 * _oneHour;

    var _colLeftWidth;

    var scheduleScrollFlag = false;

    //newevent vars
    var $dropdowmContainer, $dropdownItem, $dropdowmInput, $dropdownSelect, $dropdownSelectOption, $membersItem, $removeMemberBtn, $calendarContainer, $neweventFrom, $neweventSaveBtn, $editeventSaveBtn, $deleteEventBtn, $popupDeleteCanselBtn, $popupDeleteSaveBtn, $removeRoom, $roomRecommendBlock, $roomCurrentBlock, $roomRecommendItem, $roomRecommendReplaceItem, scrollBar;

    function init() {
        updateIndexVars();
        bindEvents();
        bindCalendarIndexEvents();
        setCurrentTime();

        var datepickekerOptions = $.extend({}, $.datepicker.regional["ru"], {
            showOtherMonths: true,
            selectOtherMonths: true,
            defaultDate: new Date(),
            onSelect: function onSelect(date, obj) {

                var selectDate = obj.selectedDay + '-' + obj.selectedMonth + '-' + obj.selectedYear;
                var currentDate = obj.currentDay + '-' + obj.currentMonth + '-' + obj.currentYear;

                $calendarToogle.html(date).removeClass('open');
                $calendarContainer.datepicker('hide').hide();

                changeSchedule($calendarContainer.datepicker('getDate'));
            }
        });

        $calendarContainer.datepicker(datepickekerOptions);
    }

    function neweventInit() {
        updateNeweventVars();
        bindNeweventEvents();

        scrollBar = new _SimpleBar2.default($dropdowmContainer[0], {
            autoHide: false
        });

        var datepickekerOptions = $.extend({}, $.datepicker.regional["ru"], {
            showOn: "both",
            buttonImage: "../../../styles/blocks/newevent/images/calendar.svg",
            defaultDate: new Date($('#datepicker').val()),
            buttonImageOnly: true,
            showOtherMonths: true,
            selectOtherMonths: true,
            beforeShow: function beforeShow(textbox, instance) {
                $neweventFrom.find($calendarContainer).append($(instance.dpDiv)).show();
            },
            onClose: function onClose() {
                $neweventFrom.find($calendarContainer).hide();
            }
        });

        $('#datepicker').datepicker(datepickekerOptions);
    }

    function updateNeweventVars() {
        $dropdowmContainer = $('#js-dropdown-container');
        $dropdownItem = $('.js-dropdown-item');
        $dropdowmInput = $('.js-dropdown-input');
        $dropdownSelect = $('.js-newevent-select');
        $dropdownSelectOption = $dropdownSelect.find('option');
        $membersItem = $('.js-members-item');
        $removeMemberBtn = $('.js-remove-member');
        $calendarContainer = $('.js-calendar-container');
        $neweventFrom = $('.js-newevent-form');

        $neweventSaveBtn = $('.js-create-event-btn');
        $editeventSaveBtn = $('.js-saveedit-event-btn');
        $deleteEventBtn = $('.js-delete-event-btn');

        $popupDeleteCanselBtn = $('.js-popup-delete-cansel-btn');
        $popupDeleteSaveBtn = $('.js-popup-delete-save-btn');

        $removeRoom = $('.js-newevent-remove-room');
        $roomRecommendBlock = $('.js-room-recommend');
        $roomCurrentBlock = $('.js-room-current');
        $roomRecommendItem = $('.js-room-recommend-item');
        $roomRecommendReplaceItem = $('.js-room-recommend-replace');
    }

    function bindNeweventEvents() {
        $('body').on('click', '.js-room-recommend-replace', function (e) {
            e.preventDefault();
            $('.js-room-recommend-replace').removeClass('active');

            var eventBusyId = $(this).data('eventbusy-id');
            var roomEmptyId = $(this).data('roomempty-id');
            var roomToNew = $(this).data('room-to-new');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $neweventFrom.find('input[name="room_replace"]').val(eventBusyId + '_' + roomEmptyId);
                $neweventFrom.find('input[name="newevent_room"]').val(roomToNew);
            } else {
                $(this).removeClass('active');
                $neweventFrom.find('input[name="room_replace"]').val('');
                $neweventFrom.find('input[name="newevent_room"]').val('');
            }
        });

        $('.js-newevent-time-start').on('blur', function () {
            console.log('start blur');
            var validate = validateForm();

            if (validate) {

                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        });

        $('.js-newevent-time-end').on('blur', function () {
            console.log('end blur');
            var validate = validateForm();

            if (validate) {
                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        });

        $dropdownSelect.on('change', function () {
            console.log('users change');
            var validate = validateForm();

            if (validate) {
                var data = getNeweventData();
                console.log(data);
                getRecommendation(data);
            }
        });

        $('body').on('click', '.js-room-recommend-item', function (e) {
            console.log('js-room-recommend-item click');
            e.preventDefault();
            $roomRecommendItem.removeClass('active');

            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $neweventFrom.find('input[name="newevent_room"]').val($(this).data('room-id'));
            } else {
                $(this).removeClass('active');
                $neweventFrom.find('input[name="newevent_room"]').val('');
            }
        });
        $removeRoom.on('click', function (e) {
            e.preventDefault();

            $roomCurrentBlock.hide();
            $roomRecommendBlock.removeClass('hidden');

            $neweventFrom.find('input[name="newevent_room"]').val('');
        });

        $neweventSaveBtn.on('click', function (e) {
            e.preventDefault();
            var data = getNeweventData();
            console.log('neweventSave data', data);
            //validateForm($neweventFrom);

            $.ajax({
                url: '/createevent',
                type: 'POST',
                data: data,
                success: function success(data) {
                    var scheduleHtml = data.scheduleHtml,
                        poupHtml = data.popupHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html(poupHtml).addClass('small'); //.show();
                    updateIndexVars();
                    bindEvents();
                }
            });
        });

        $editeventSaveBtn.on('click', function (e) {
            e.preventDefault();
            var data = getNeweventData();
            console.log(data);
            $.ajax({
                url: '/editeventSave',
                type: 'POST',
                data: data,
                success: function success(data) {
                    var scheduleHtml = data.scheduleHtml,
                        poupHtml = data.popupHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html(poupHtml).addClass('small'); //.show();
                    updateIndexVars();
                    bindEvents();
                }
            });
        });

        $deleteEventBtn.on('click', function (e) {
            e.preventDefault();

            var eventID = $neweventFrom.find('input[name="event_id"]').val();

            $('.js-popup-wrapper').addClass('active');
            $('.js-popup-delete').show().find('input[name="event_id"]').val(eventID);
        });

        $popupDeleteCanselBtn.on('click', function (e) {
            e.preventDefault();

            $('.js-popup-wrapper').removeClass('active');
            $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
        });

        $popupDeleteSaveBtn.on('click', function (e) {
            e.preventDefault();

            var eventId = $(this).closest('.js-popup-delete').find('input[name="event_id"]').val();
            console.log(eventId);

            $.ajax({
                url: '/deleteEvent',
                type: 'POST',
                data: { eventId: eventId },
                success: function success(data) {
                    var scheduleHtml = data.scheduleHtml;

                    $('.js-schedule-wrapper').html(scheduleHtml);

                    $popup.html('').hide();
                    $('.js-popup-wrapper').removeClass('active');
                    $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
                    updateIndexVars();
                    bindEvents();
                }
            });

            $('.js-popup-wrapper').removeClass('active');
            $('.js-popup-delete').hide().find('input[name="event_id"]').val('');
        });

        $dropdowmInput.on('click', function () {
            $dropdowmContainer.addClass('active');
        });

        $(document).mouseup(function (e) {
            if (!$dropdowmContainer.is(e.target) && $dropdowmContainer.has(e.target).length === 0) {
                $dropdowmContainer.removeClass('active');
            }
        });

        $dropdownItem.on('click', function (e) {
            e.preventDefault();
            getMember($(this).data('id'));
            $(this).addClass('hidden');
        });

        $removeMemberBtn.on('click', function (e) {
            e.preventDefault();
            removemembers($(this).parent().data('id'));
            $(this).parent().addClass('hidden');
        });

        $dropdowmInput.on('click keyup paste', liveSearch);
    }

    // -- newevent Functions -- //
    function getRecommendation(data) {
        $.ajax({
            url: '/getRecommendation',
            type: 'POST',
            data: data,
            beforeSend: function beforeSend() {
                console.log('before send', data);
            },
            success: function success(data) {
                //console.log('data getRecommendation',data);
                $('.js-room-recommend').html(data.recommendHtml).removeClass('hidden');
                $('.js-room-current').addClass('hidden');
                $neweventFrom.find('input[name="newevent_room"]').val('');
                // closeTooltip();
                // $body.addClass('overflow');
                // $('.js-popup').html(data.html).show();
                // neweventInit();
            }
        });
    }

    function validateForm() {
        var timeRegExp = /^(([0,1][0-9])|(2[0-3])):[0-5][0-9]$/;

        var $eventStart = $neweventFrom.find('input[name="newevent_start"]');
        var $eventEnd = $neweventFrom.find('input[name="newevent_end"]');
        var $eventRoom = $neweventFrom.find('input[name="newevent_room"]');
        var $eventTitle = $neweventFrom.find('input[name="newevent_topic"]');
        var status = 0;

        if (!timeRegExp.test($eventStart.val())) {
            $eventStart.addClass('error');
        } else {
            $eventStart.removeClass('error');
            status++;
        }

        if (!timeRegExp.test($eventEnd.val())) {
            $eventEnd.addClass('error');
        } else {
            $eventEnd.removeClass('error');
            status++;
        }

        // if ($eventRoom.val() === '') {
        //     alert('вы не выбрали переговорку');
        // } else {
        //     status++;
        // }

        // if ($eventTitle.val() === '') {
        //     $eventTitle.addClass('error');
        //     alert('вы не указали тему встречи');
        // } else {
        //     $eventTitle.removeClass('error');
        //     status++;
        // }

        if (status === 2) {
            return true;
        } else {
            return false;
        }
    }

    function getNeweventData() {
        var data = {};
        data.eventId = $neweventFrom.find('input[name="event_id"]').val();
        data.eventTitle = $neweventFrom.find('input[name="newevent_topic"]').val();
        data.members = [];
        $neweventFrom.find('.js-newevent-select-option').map(function (i, elem) {
            if ($(elem).is(":selected")) {
                data.members.push({ id: $(elem).val(), homeFloor: $(elem).data('floor') });
            }
        });

        var DATE = new Date($('#datepicker').datepicker("getDate"));
        var year = DATE.getFullYear(),
            month = DATE.getMonth() < 10 ? 0 + '' + (DATE.getMonth() + 1) : DATE.getMonth(),
            date = DATE.getDate();

        var $roomReplace = $neweventFrom.find('input[name="room_replace"]'),
            busyEventId,
            emptyRoomId;

        if ($roomReplace.length > 0 && $roomReplace.val() != '') {
            busyEventId = $roomReplace.val().split('_')[0], emptyRoomId = $roomReplace.val().split('_')[1];

            data.roomReplace = {
                busyEventId: busyEventId,
                emptyRoomId: emptyRoomId
            };
        }

        var timeStart = $neweventFrom.find('input[name="newevent_start"]').val(),
            timeEnd = $neweventFrom.find('input[name="newevent_end"]').val();

        data.dateStart = year + '-' + month + '-' + date + 'T' + timeStart + ':00.000Z';
        data.dateEnd = year + '-' + month + '-' + date + 'T' + timeEnd + ':00.000Z';

        data.room = $neweventFrom.find('input[name="newevent_room"]').val();

        return data;
    }

    function getMember(id) {
        $(this).addClass('hidden');

        $dropdownSelectOption.filter(function () {
            return $(this).val() == id;
        }).attr('selected', 'selected');

        $dropdownSelect.trigger('change');

        $membersItem.filter(function () {
            return $(this).data('id') == id;
        }).removeClass('hidden');

        $dropdowmContainer.removeClass('active');
        $dropdowmInput.val('');
    }

    function removemembers(id) {
        $dropdownSelectOption.filter(function () {
            return $(this).val() == id;
        }).attr('selected', false);
        $dropdownSelect.trigger('change');

        $dropdownItem.filter(function () {
            return $(this).data('id') == id;
        }).removeClass('hidden');
    }

    function liveSearch() {
        var filter = $dropdowmInput.val();

        $dropdownItem.each(function () {
            if ($(this).text().search(new RegExp(filter, "i")) < 0) {
                $(this).fadeOut();
            } else {
                $(this).show();
            }
        });

        scrollBar.recalculate();
    }
    // -- newevent Functions -- //

    function updateIndexVars() {
        _colLeftWidth = $colLeft.outerWidth(true);

        $hours = $('.js-hours');
        $hoursCurrentItem = $('.js-hours-current');
        $hoursItem = $('.js-hours-item');
        $calendarContainer = $('.js-calendar-container');
        $calendarToogle = $('.js-calendar-toggle');
        $calendarPrevDay = $('.js-calendar-prev');
        $calendarNextDay = $('.js-calendar-next');
        $tooltip = $('.js-tooltip');
        $tooltipWrapper = $('.js-tooltip-wrapper');
        $tooltipTriangle = $('.js-tooltip-triangle');
        $eventItem = $('.js-event-item');
        $eventRow = $('.js-main-events-row'), $eventRoom = $('.js-main-events-room'), $schedule = $('.js-schedule');
        $eventsRoom = $('.js-events-room');
        $eventsFloor = $('.js-events-floor');
        $colLeft = $('.js-col-left');

        $addEventBtn = $('.js-add-event-btn'), $editEventBtn = $('.js-edit-event-btn');
    }

    function bindCalendarIndexEvents() {
        $calendarNextDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() + 1000 * 60 * 60 * 24);
            console.log(date);
            $calendarContainer.datepicker("setDate", date);
            $('.ui-datepicker-current-day').click();
            $calendarContainer.datepicker("refresh");
        });

        $calendarPrevDay.on("click", function () {
            var date = $calendarContainer.datepicker('getDate');
            date.setTime(date.getTime() - 1000 * 60 * 60 * 24);
            $calendarContainer.datepicker("setDate", date);
            $('.ui-datepicker-current-day').click();
            $calendarContainer.datepicker("refresh");
        });

        $calendarToogle.on('click', function () {
            if (!$(this).hasClass('open')) {
                $(this).addClass('open');
                $calendarContainer.datepicker('show').show();
            } else {
                $(this).removeClass('open');
                $calendarContainer.datepicker('hide').hide();
            }
        });

        $(document).mouseup(function (e) {
            if (!$calendarToogle.is(e.target) && $calendarContainer.has(e.target).length === 0) {
                $calendarToogle.removeClass('open');
                $calendarContainer.datepicker('hide').hide();
            }
        });
    }

    function bindEvents() {
        $eventItem.on('mouseover', function () {
            var roomId = $(this).closest($eventRow).data('room-id');
            $eventRoom.filter('[data-room-id="' + roomId + '"]').addClass('active');
        });

        $eventItem.on('mouseout', function () {
            var roomId = $(this).closest($eventRow).data('room-id');
            $eventRoom.filter('[data-room-id="' + roomId + '"]').removeClass('active');
        });

        $eventItem.on('click', function () {
            console.log('$eventItem click');
            var position = getEventItemPosition($(this));
            var eventId = $(this).data('eventid');
            var $this = $(this);

            var data = {
                eventId: eventId
            };

            if ($this.hasClass('busy')) {
                if ($this.hasClass('active')) {
                    console.log('close');
                    closeTooltip();
                } else {
                    console.log('open');

                    $.ajax({
                        url: '/tooltip',
                        type: 'POST',
                        data: data,
                        success: function success(data) {
                            console.log(data);
                            $tooltipWrapper.html(data.html).addClass('active');
                            $eventItem.removeClass('active');
                            $this.addClass('active');
                            openTooltip(position);

                            updateIndexVars();

                            $editEventBtn.on('click', function (e) {
                                console.log('editeventbtn click');
                                e.preventDefault();
                                var eventId = $(this).parent().data('eventid');
                                var from = $(this).data('from');

                                $.ajax({
                                    url: '/editevent',
                                    type: 'POST',
                                    data: { eventId: eventId, from: from },
                                    success: function success(data) {
                                        console.log('data edit', data);
                                        closeTooltip();
                                        $body.addClass('overflow');
                                        $('.js-popup').html(data.html).show();
                                        neweventInit();
                                    }
                                });
                            });
                        }
                    });
                }
            }
        });

        $addEventBtn.on('click', function (e) {
            e.preventDefault();
            var $this = $(this),
                $thisParent = $(this).parent();

            if (!$this.hasClass('busy')) {
                console.log('$addEventBtn click');
                var from = $this.data('from');
                var data = {
                    from: from
                };

                data.dateStart = $this.data('timestart'), data.dateEnd = $this.data('timeend'), data.roomId = $this.data('roomid');

                $.ajax({
                    url: '/newevent',
                    type: 'POST',
                    data: data,
                    success: function success(data) {
                        console.log('data add', data);
                        $body.addClass('overflow');
                        $('.js-popup').html(data.html).show();
                        closeTooltip();
                        neweventInit();
                    }
                });
            }
        });

        //popup buttons action
        $('body').on('click', '.js-popup-close', function (e) {
            e.preventDefault();
            $popup.removeClass('small').html('');
            $body.removeClass('overflow');
        });

        $(document).mouseup(function (e) {
            if (!$eventItem.is(e.target) && $eventItem.has(e.target).length === 0 && !$editEventBtn.is(e.target)) {
                $eventItem.removeClass('active');
                closeTooltip();
            } /*else if ($editEventBtn.is(e.target)) {
                $editEventBtn.trigger('click');
              }*/
        });

        $schedule.on('scroll', function () {
            var scrollLeft = $(this).scrollLeft();
            closeTooltip();
            if (scrollLeft > _colLeftWidth && !scheduleScrollFlag) {
                $eventsRoom.show();
                $eventsFloor.show();
                scheduleScrollFlag = true;
            } else if (scrollLeft <= _colLeftWidth && scheduleScrollFlag) {
                $eventsRoom.hide();
                $eventsFloor.hide();
                scheduleScrollFlag = false;
            }

            $eventsRoom.css({
                left: scrollLeft - _colLeftWidth + 5 + 'px'
            });

            $eventsFloor.css({
                left: scrollLeft - _colLeftWidth + 5 + 'px'
            });
        });

        $(window).on('resize', function () {
            updateIndexVars();
            closeTooltip();
        });
    }

    //index functions

    function changeSchedule(date) {
        $.ajax({
            url: '/getFloors',
            type: 'POST',
            data: { date: date },
            success: function success(data) {
                console.log(data);
                var scheduleHtml = data.scheduleHtml;

                $('.js-schedule-wrapper').html(scheduleHtml);

                updateIndexVars();
                bindEvents();
                setCurrentTime();
            }
        });
    }

    function setCurrentTime() {
        if (currentHour > 8 && currentHour < 23) {

            $hoursCurrentItem.css({ left: currentHour * _oneHour + currentMinute * _oneMinute - _startPoint + '%' }).show();

            $hoursItem.map(function (key, item) {
                var $item = $(item),
                    _itemTime = $(item).data('time').split(':')[0];

                if (currentHour >= _itemTime) {
                    $item.addClass('past');
                }
            });
        }
    }

    function getEventItemPosition($item) {
        var top = $item.offset().top,
            left = $item.offset().left,
            width = $item.outerWidth(true),
            height = $item.outerHeight(true);

        return { top: top, left: left, width: width };
    }

    function openTooltip(position) {
        $('.js-tooltip').css({
            top: position.top + 26 + 'px',
            left: position.left + position.width / 2 - 338 / 2 + 'px'
        });
        if ($(window).width() < 415) {

            if (position.left + position.width > $(window).width()) {
                $('.js-tooltip-triangle').css({
                    left: position.left + 20 + 'px'
                });
            } else {
                $('.js-tooltip-triangle').css({
                    left: position.left + position.width / 2 - 4 + 'px'
                });
            }
        }

        $tooltip.fadeIn(200);
    }

    function closeTooltip() {
        $tooltipWrapper.html('').removeClass('active');;
        $eventItem.removeClass('active');
    }

    init();
});
},{"SimpleBar":1,"twig":5}]},{},[6])