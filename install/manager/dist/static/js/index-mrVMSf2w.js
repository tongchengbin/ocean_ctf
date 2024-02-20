import{ap as commonjsGlobal}from"./index-QZ57AMr5.js";var mavonEditor={exports:{}};(function(module,exports){(function(d,h){module.exports=h()})(commonjsGlobal,function(){return function(d){function h(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return d[t].call(r.exports,r,r.exports,h),r.l=!0,r.exports}var s={};return h.m=d,h.c=s,h.i=function(t){return t},h.d=function(t,r,e){h.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},h.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return h.d(r,"a",r),r},h.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},h.p="",h(h.s=68)}([function(d,h,s){function t(E){return Object.prototype.toString.call(E)}function r(E){return t(E)==="[object String]"}function e(E,q){return x.call(E,q)}function i(E){return Array.prototype.slice.call(arguments,1).forEach(function(q){if(q){if(typeof q!="object")throw new TypeError(q+"must be object");Object.keys(q).forEach(function(O){E[O]=q[O]})}}),E}function n(E,q,O){return[].concat(E.slice(0,q),O,E.slice(q+1))}function a(E){return!(E>=55296&&E<=57343)&&!(E>=64976&&E<=65007)&&(65535&E)!=65535&&(65535&E)!=65534&&!(E>=0&&E<=8)&&E!==11&&!(E>=14&&E<=31)&&!(E>=127&&E<=159)&&!(E>1114111)}function u(E){if(E>65535){E-=65536;var q=55296+(E>>10),O=56320+(1023&E);return String.fromCharCode(q,O)}return String.fromCharCode(E)}function c(E,q){var O=0;return e(T,q)?T[q]:q.charCodeAt(0)===35&&A.test(q)&&(O=q[1].toLowerCase()==="x"?parseInt(q.slice(2),16):parseInt(q.slice(1),10),a(O))?u(O):E}function o(E){return E.indexOf("\\")<0?E:E.replace(k,"$1")}function l(E){return E.indexOf("\\")<0&&E.indexOf("&")<0?E:E.replace(y,function(q,O,P){return O||c(q,P)})}function p(E){return S[E]}function _(E){return L.test(E)?E.replace(j,p):E}function f(E){return E.replace(M,"\\$&")}function b(E){switch(E){case 9:case 32:return!0}return!1}function m(E){if(E>=8192&&E<=8202)return!0;switch(E){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function g(E){return $.test(E)}function w(E){switch(E){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function v(E){return E=E.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(E=E.replace(/ẞ/g,"ß")),E.toLowerCase().toUpperCase()}var x=Object.prototype.hasOwnProperty,k=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,C=/&([a-z#][a-z0-9]{1,31});/gi,y=new RegExp(k.source+"|"+C.source,"gi"),A=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,T=s(52),L=/[&<>"]/,j=/[&<>"]/g,S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},M=/[.?*+^$[\]\\(){}|-]/g,$=s(34);h.lib={},h.lib.mdurl=s(56),h.lib.ucmicro=s(196),h.assign=i,h.isString=r,h.has=e,h.unescapeMd=o,h.unescapeAll=l,h.isValidEntityCode=a,h.fromCodePoint=u,h.escapeHtml=_,h.arrayReplaceAt=n,h.isSpace=b,h.isWhiteSpace=m,h.isMdAsciiPunct=w,h.isPunctChar=g,h.escapeRE=f,h.normalizeReference=v},function(d,h){var s=d.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=s)},function(d,h){var s={}.hasOwnProperty;d.exports=function(t,r){return s.call(t,r)}},function(d,h,s){d.exports=!s(11)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(d,h,s){var t=s(5),r=s(13);d.exports=s(3)?function(e,i,n){return t.f(e,i,r(1,n))}:function(e,i,n){return e[i]=n,e}},function(d,h,s){var t=s(9),r=s(42),e=s(28),i=Object.defineProperty;h.f=s(3)?Object.defineProperty:function(n,a,u){if(t(n),a=e(a,!0),t(u),r)try{return i(n,a,u)}catch{}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(n[a]=u.value),n}},function(d,h,s){var t=s(88),r=s(19);d.exports=function(e){return t(r(e))}},function(d,h,s){var t=s(26)("wks"),r=s(14),e=s(1).Symbol,i=typeof e=="function";(d.exports=function(n){return t[n]||(t[n]=i&&e[n]||(i?e:r)("Symbol."+n))}).store=t},function(d,h){d.exports=function(s){return typeof s=="object"?s!==null:typeof s=="function"}},function(d,h,s){var t=s(8);d.exports=function(r){if(!t(r))throw TypeError(r+" is not an object!");return r}},function(d,h){var s=d.exports={version:"2.6.11"};typeof __e=="number"&&(__e=s)},function(d,h){d.exports=function(s){try{return!!s()}catch{return!0}}},function(d,h){d.exports=!0},function(d,h){d.exports=function(s,t){return{enumerable:!(1&s),configurable:!(2&s),writable:!(4&s),value:t}}},function(d,h){var s=0,t=Math.random();d.exports=function(r){return"Symbol(".concat(r===void 0?"":r,")_",(++s+t).toString(36))}},function(d,h){function s(r,e){var i=r[1]||"",n=r[3];if(!n)return i;if(e&&typeof btoa=="function"){var a=t(n);return[i].concat(n.sources.map(function(u){return"/*# sourceURL="+n.sourceRoot+u+" */"})).concat([a]).join(`
`)}return[i].join(`
`)}function t(r){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"}d.exports=function(r){var e=[];return e.toString=function(){return this.map(function(i){var n=s(i,r);return i[2]?"@media "+i[2]+"{"+n+"}":n}).join("")},e.i=function(i,n){typeof i=="string"&&(i=[[null,i,""]]);for(var a={},u=0;u<this.length;u++){var c=this[u][0];typeof c=="number"&&(a[c]=!0)}for(u=0;u<i.length;u++){var o=i[u];typeof o[0]=="number"&&a[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(d,h){d.exports=function(s,t,r,e,i){var n,a=s=s||{},u=typeof s.default;u!=="object"&&u!=="function"||(n=s,a=s.default);var c=typeof a=="function"?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),e&&(c._scopeId=e);var o;if(i?(o=function(_){_=_||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,_||typeof __VUE_SSR_CONTEXT__>"u"||(_=__VUE_SSR_CONTEXT__),r&&r.call(this,_),_&&_._registeredComponents&&_._registeredComponents.add(i)},c._ssrRegister=o):r&&(o=r),o){var l=c.functional,p=l?c.render:c.beforeCreate;l?c.render=function(_,f){return o.call(f),p(_,f)}:c.beforeCreate=p?[].concat(p,o):[o]}return{esModule:n,exports:a,options:c}}},function(d,h,s){function t(v){for(var x=0;x<v.length;x++){var k=v[x],C=c[k.id];if(C){C.refs++;for(var y=0;y<C.parts.length;y++)C.parts[y](k.parts[y]);for(;y<k.parts.length;y++)C.parts.push(e(k.parts[y]));C.parts.length>k.parts.length&&(C.parts.length=k.parts.length)}else{for(var A=[],y=0;y<k.parts.length;y++)A.push(e(k.parts[y]));c[k.id]={id:k.id,refs:1,parts:A}}}}function r(){var v=document.createElement("style");return v.type="text/css",o.appendChild(v),v}function e(v){var x,k,C=document.querySelector("style["+m+'~="'+v.id+'"]');if(C){if(_)return f;C.parentNode.removeChild(C)}if(g){var y=p++;C=l||(l=r()),x=i.bind(null,C,y,!1),k=i.bind(null,C,y,!0)}else C=r(),x=n.bind(null,C),k=function(){C.parentNode.removeChild(C)};return x(v),function(A){if(A){if(A.css===v.css&&A.media===v.media&&A.sourceMap===v.sourceMap)return;x(v=A)}else k()}}function i(v,x,k,C){var y=k?"":C.css;if(v.styleSheet)v.styleSheet.cssText=w(x,y);else{var A=document.createTextNode(y),T=v.childNodes;T[x]&&v.removeChild(T[x]),T.length?v.insertBefore(A,T[x]):v.appendChild(A)}}function n(v,x){var k=x.css,C=x.media,y=x.sourceMap;if(C&&v.setAttribute("media",C),b.ssrId&&v.setAttribute(m,x.id),y&&(k+=`
/*# sourceURL=`+y.sources[0]+" */",k+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(y))))+" */"),v.styleSheet)v.styleSheet.cssText=k;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(k))}}var a=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=s(206),c={},o=a&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,_=!1,f=function(){},b=null,m="data-vue-ssr-id",g=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());d.exports=function(v,x,k,C){_=k,b=C||{};var y=u(v,x);return t(y),function(A){for(var T=[],L=0;L<y.length;L++){var j=y[L],S=c[j.id];S.refs--,T.push(S)}A?(y=u(v,A),t(y)):y=[];for(var L=0;L<T.length;L++){var S=T[L];if(S.refs===0){for(var M=0;M<S.parts.length;M++)S.parts[M]();delete c[S.id]}}}};var w=function(){var v=[];return function(x,k){return v[x]=k,v.filter(Boolean).join(`
`)}}()},function(d,h,s){function t(u){return u&&u.__esModule?u:{default:u}}h.__esModule=!0;var r=s(79),e=t(r),i=s(78),n=t(i),a=typeof n.default=="function"&&typeof e.default=="symbol"?function(u){return typeof u}:function(u){return u&&typeof n.default=="function"&&u.constructor===n.default&&u!==n.default.prototype?"symbol":typeof u};h.default=typeof n.default=="function"&&a(e.default)==="symbol"?function(u){return u===void 0?"undefined":a(u)}:function(u){return u&&typeof n.default=="function"&&u.constructor===n.default&&u!==n.default.prototype?"symbol":u===void 0?"undefined":a(u)}},function(d,h){d.exports=function(s){if(s==null)throw TypeError("Can't call method on  "+s);return s}},function(d,h){d.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(d,h){d.exports={}},function(d,h,s){var t=s(47),r=s(20);d.exports=Object.keys||function(e){return t(e,r)}},function(d,h){h.f={}.propertyIsEnumerable},function(d,h,s){var t=s(5).f,r=s(2),e=s(7)("toStringTag");d.exports=function(i,n,a){i&&!r(i=a?i:i.prototype,e)&&t(i,e,{configurable:!0,value:n})}},function(d,h,s){var t=s(26)("keys"),r=s(14);d.exports=function(e){return t[e]||(t[e]=r(e))}},function(d,h,s){var t=s(10),r=s(1),e=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(d.exports=function(i,n){return e[i]||(e[i]=n!==void 0?n:{})})("versions",[]).push({version:t.version,mode:s(12)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(d,h){var s=Math.ceil,t=Math.floor;d.exports=function(r){return isNaN(r=+r)?0:(r>0?t:s)(r)}},function(d,h,s){var t=s(8);d.exports=function(r,e){if(!t(r))return r;var i,n;if(e&&typeof(i=r.toString)=="function"&&!t(n=i.call(r))||typeof(i=r.valueOf)=="function"&&!t(n=i.call(r))||!e&&typeof(i=r.toString)=="function"&&!t(n=i.call(r)))return n;throw TypeError("Can't convert object to primitive value")}},function(d,h,s){var t=s(1),r=s(10),e=s(12),i=s(30),n=s(5).f;d.exports=function(a){var u=r.Symbol||(r.Symbol=e?{}:t.Symbol||{});a.charAt(0)=="_"||a in u||n(u,a,{value:i.f(a)})}},function(d,h,s){h.f=s(7)},function(d,h,s){function t(n,a){return new e(a).process(n)}var r=s(50),e=s(111);h=d.exports=t,h.FilterCSS=e;for(var i in r)h[i]=r[i];typeof window<"u"&&(window.filterCSS=d.exports)},function(d,h,s){function t(){this.__rules__=[],this.__cache__=null}t.prototype.__find__=function(r){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===r)return e;return-1},t.prototype.__compile__=function(){var r=this,e=[""];r.__rules__.forEach(function(i){i.enabled&&i.alt.forEach(function(n){e.indexOf(n)<0&&e.push(n)})}),r.__cache__={},e.forEach(function(i){r.__cache__[i]=[],r.__rules__.forEach(function(n){n.enabled&&(i&&n.alt.indexOf(i)<0||r.__cache__[i].push(n.fn))})})},t.prototype.at=function(r,e,i){var n=this.__find__(r),a=i||{};if(n===-1)throw new Error("Parser rule not found: "+r);this.__rules__[n].fn=e,this.__rules__[n].alt=a.alt||[],this.__cache__=null},t.prototype.before=function(r,e,i,n){var a=this.__find__(r),u=n||{};if(a===-1)throw new Error("Parser rule not found: "+r);this.__rules__.splice(a,0,{name:e,enabled:!0,fn:i,alt:u.alt||[]}),this.__cache__=null},t.prototype.after=function(r,e,i,n){var a=this.__find__(r),u=n||{};if(a===-1)throw new Error("Parser rule not found: "+r);this.__rules__.splice(a+1,0,{name:e,enabled:!0,fn:i,alt:u.alt||[]}),this.__cache__=null},t.prototype.push=function(r,e,i){var n=i||{};this.__rules__.push({name:r,enabled:!0,fn:e,alt:n.alt||[]}),this.__cache__=null},t.prototype.enable=function(r,e){Array.isArray(r)||(r=[r]);var i=[];return r.forEach(function(n){var a=this.__find__(n);if(a<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[a].enabled=!0,i.push(n)},this),this.__cache__=null,i},t.prototype.enableOnly=function(r,e){Array.isArray(r)||(r=[r]),this.__rules__.forEach(function(i){i.enabled=!1}),this.enable(r,e)},t.prototype.disable=function(r,e){Array.isArray(r)||(r=[r]);var i=[];return r.forEach(function(n){var a=this.__find__(n);if(a<0){if(e)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[a].enabled=!1,i.push(n)},this),this.__cache__=null,i},t.prototype.getRules=function(r){return this.__cache__===null&&this.__compile__(),this.__cache__[r]||[]},d.exports=t},function(d,h,s){function t(r,e,i){this.type=r,this.tag=e,this.attrs=null,this.map=null,this.nesting=i,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}t.prototype.attrIndex=function(r){var e,i,n;if(!this.attrs)return-1;for(e=this.attrs,i=0,n=e.length;i<n;i++)if(e[i][0]===r)return i;return-1},t.prototype.attrPush=function(r){this.attrs?this.attrs.push(r):this.attrs=[r]},t.prototype.attrSet=function(r,e){var i=this.attrIndex(r),n=[r,e];i<0?this.attrPush(n):this.attrs[i]=n},t.prototype.attrGet=function(r){var e=this.attrIndex(r),i=null;return e>=0&&(i=this.attrs[e][1]),i},t.prototype.attrJoin=function(r,e){var i=this.attrIndex(r);i<0?this.attrPush([r,e]):this.attrs[i][1]=this.attrs[i][1]+" "+e},d.exports=t},function(d,h){d.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},function(d,h){d.exports={indexOf:function(s,t){var r,e;if(Array.prototype.indexOf)return s.indexOf(t);for(r=0,e=s.length;r<e;r++)if(s[r]===t)return r;return-1},forEach:function(s,t,r){var e,i;if(Array.prototype.forEach)return s.forEach(t,r);for(e=0,i=s.length;e<i;e++)t.call(r,s[e],e,s)},trim:function(s){return String.prototype.trim?s.trim():s.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(s){var t=/\s|\n|\t/,r=t.exec(s);return r?r.index:-1}}},function(d,h,s){function t(e){s(203)}var r=s(16)(s(65),s(200),t,"data-v-548e2160",null);r.options.__file="D:\\work\\songwang\\yuangongji\\mavonEditor\\src\\components\\md-toolbar-left.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return e!=="default"&&e.substr(0,2)!=="__"})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] md-toolbar-left.vue: functional components are not supported with templates, they should use render functions."),d.exports=r.exports},function(d,h,s){var t=s(16)(s(66),s(198),null,null,null);t.options.__file="D:\\work\\songwang\\yuangongji\\mavonEditor\\src\\components\\md-toolbar-right.vue",t.esModule&&Object.keys(t.esModule).some(function(r){return r!=="default"&&r.substr(0,2)!=="__"})&&console.error("named exports are not supported in *.vue files."),t.options.functional&&console.error("[vue-loader] md-toolbar-right.vue: functional components are not supported with templates, they should use render functions."),d.exports=t.exports},function(d,h,s){function t(o,l,p){var _=c.prefix,f=c.subfix,b=p.selectionStart,m=p.selectionEnd,g=p.value,w=g.substring(0,b);w+=_+o+`
`,w+=l,w+=f,w+=g.substring(m,g.length),p.value=w,p.selectionStart=b+_.length+(o?0:1),p.selectionEnd=p.selectionStart+o.length+l.length}function r(o){var l=c.prefix,p=c.subfix,_=c.defaultLanguageText,f=o.selectionStart,b=o.selectionEnd,m=o.value,g=m.substring(f,b);if(m.substring(f-1,f)===`
`)l+=`
`;else if(p=`
`+p,l+_+p===m.substring(f-l.length,b+p.length)){var w=m.substring(0,f-l.length);return w+=m.substring(b+p.length,m.length),o.value=w,o.selectionStart=f-l.length,void(o.selectionEnd=o.selectionStart)}var v=m.substring(0,f-l.length);v+=g,v+=m.substring(b+p.length,m.length),o.value=v,o.selectionStart=f-l.length,o.selectionEnd=o.selectionStart+g.length}function e(o){return typeof o.selectionStart=="number"&&typeof o.selectionEnd=="number"}function i(o){var l=o.selectionStart,p=o.selectionEnd,_=o.value,f=c.prefix,b=c.subfix;return _.substring(l-1,l)===`
`?f+=`
`:b=`
`+b,_.substring(l-f.length,l)===f&&_.substring(p,p+b.length)===b}function n(o,l,p,_,f){return o!=="*"||l!=="*"||p.substring(_-2,_-1)!=="*"||p.substring(f+1,f+2)!=="*"}function a(o,l){typeof l!="function"&&(l=function(){});var p=document.querySelectorAll("script[src='"+o+"']");if(p.length>0)return p[0].addEventListener("load",function(){l()}),void l();var _=document.createElement("script"),f=document.getElementsByTagName("head")[0];_.type="text/javascript",_.charset="UTF-8",_.src=o,_.addEventListener?_.addEventListener("load",function(){l()},!1):_.attachEvent&&_.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&l()}),f.appendChild(_)}function u(o,l,p){if(typeof l!="function"&&(l=function(){}),document.querySelectorAll("link[href='"+o+"']").length>0)return void l();if(p){var _=document.querySelectorAll("link#"+p);if(_.length)return void(_[0].href=o)}var f=document.createElement("link"),b=document.getElementsByTagName("head")[0];f.rel="stylesheet",f.href=o,p&&(f.id=p),f.addEventListener?f.addEventListener("load",function(){l()},!1):f.attachEvent&&f.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&l()}),b.appendChild(f)}Object.defineProperty(h,"__esModule",{value:!0}),h.loadScript=a,h.loadLink=u;var c=(h.insertTextAtCaret=function(o,l,p){var _=l.prefix,f=l.subfix,b=l.str;if(l.type,o.focus(),e(o)){var m=o.selectionStart,g=o.selectionEnd,w=o.value;m===g?(o.value=w.substring(0,m)+_+b+f+w.substring(g,w.length),o.selectionStart=m+_.length,o.selectionEnd=m+(b.length+_.length)):w.substring(m-_.length,m)===_&&w.substring(g,g+f.length)===f&&n(_,f,w,m,g)?(o.value=w.substring(0,m-_.length)+w.substring(m,g)+w.substring(g+f.length,w.length),o.selectionStart=m-_.length,o.selectionEnd=g-_.length):(o.value=w.substring(0,m)+_+w.substring(m,g)+f+w.substring(g,w.length),o.selectionStart=m+_.length,o.selectionEnd=m+(g-m+_.length))}else alert("Error: Browser version is too low");p.d_value=o.value,o.focus()},{prefix:"```",subfix:"\n```\n",defaultLanguageText:"language"});h.insertCodeBlock=function(o){var l=o.getTextareaDom();if(!e(l))return void alert("Error: Browser version is too low");var p=c.defaultLanguageText,_=l.selectionStart,f=l.selectionEnd,b=l.value;if(_===f)t(p,"",l);else if(i(l))r(l);else{var m=b.substring(_,f);t("",m,l)}o.d_value=l.value,l.focus()},h.insertOl=function(o){var l=o.getTextareaDom();if(e(l)){var p=l.selectionStart,_=l.selectionEnd,f=l.value;if(p===_)l.value=f.substring(0,p)+"1. "+f.substring(_,f.length),l.selectionEnd=l.selectionStart=p+3;else{for(var b=p;b>0&&f.substring(b-1,b)!==`
`;)b--;for(var m=f.substring(b,_),g=m.split(`
`),w=0;w<g.length;w++)g[w]=w+1+". "+g[w];var v=g.join(`
`);l.value=f.substring(0,b)+v+f.substring(_,f.length),l.selectionStart=b,l.selectionEnd=_+v.length-m.length}}else alert("Error: Browser version is too low");o.d_value=l.value,l.focus()},h.removeLine=function(o){var l=o.getTextareaDom();if(e(l)){for(var p=l.selectionStart,_=l.selectionEnd,f=l.value,b=p;b>0&&f.substring(b-1,b)!==`
`;)b--;for(var m=_;m<f.length&&f.substring(m,m+1)!==`
`;)m++;m<f.length&&m++,l.value=f.substring(0,b)+f.substring(m,f.length),l.selectionEnd=l.selectionStart=b===0?0:b-1}else alert("Error: Browser version is too low");o.d_value=l.value,l.focus()},h.insertUl=function(o){var l=o.getTextareaDom();if(e(l)){var p=l.selectionStart,_=l.selectionEnd,f=l.value;if(p===_)l.value=f.substring(0,p)+"- "+f.substring(_,f.length),l.selectionEnd=l.selectionStart=p+2;else{for(var b=p;b>0&&f.substring(b-1,b)!==`
`;)b--;var m=f.substring(b,_),g=m.replace(/\n/g,`
- `);g="- "+g,l.value=f.substring(0,b)+g+f.substring(_,f.length),l.selectionStart=b,l.selectionEnd=_+g.length-m.length}}else alert("Error: Browser version is too low");o.d_value=l.value,l.focus()},h.insertTab=function(o,l){l=l?new Array(l).fill(" ").join(""):"	";var p=o.getTextareaDom();if(e(p)){var _=p.selectionStart,f=p.selectionEnd,b=p.value,m=b.substring(0,_).split(`
`).pop();if(m.match(/^\s*[0-9]+\.\s+\S*/)){var g=m.replace(/(\d+)/,1);p.value=b.substring(0,_-g.length)+l+g+b.substring(f,b.length)}else m.match(/^\s*-\s+\S*/)?p.value=b.substring(0,_-m.length)+l+m+b.substring(f,b.length):p.value=b.substring(0,_)+l+b.substring(f,b.length);p.selectionStart=p.selectionEnd=_+l.length}else alert("Error: Browser version is too low");o.d_value=p.value,p.focus()},h.unInsertTab=function(o,l){var p=new RegExp(l?"\\s{"+l+"}":"	");console.log("regTab:",p);var _=o.getTextareaDom();if(e(_)){var f=_.selectionStart,b=_.selectionEnd,m=_.value,g=m.substring(0,f).split(`
`).pop();g.search(p)>=0&&(_.value=m.substring(0,f-g.length)+g.replace(p,"")+m.substring(b,m.length),_.selectionStart=_.selectionEnd=f-(l||1))}else alert("Error: Browser version is too low");o.d_value=_.value,_.focus()},h.insertEnter=function(o,l){var p=o.getTextareaDom();if(e(p)){var _=p.selectionStart,f=p.selectionEnd,b=p.value,m=b.substring(0,_).split(`
`).pop(),g=m.match(/^\s*(?:[0-9]+\.|-)\s+\S+/);if(g){l.preventDefault();var w=g.shift().match(/^\s*(?:[0-9]+\.|-)\s/).shift();if(w.search(/-/)>=0)p.value=b.substring(0,_)+`
`+w+b.substring(f,b.length),p.selectionStart=p.selectionEnd=_+w.length+1;else{var v=w.replace(/(\d+)/,parseInt(w)+1);p.value=b.substring(0,_)+`
`+v+b.substring(f,b.length),p.selectionStart=p.selectionEnd=_+v.length+1}}else{var x=m.match(/^\s*(?:[0-9]+\.|-)\s+$/);if(x){l.preventDefault();var k=x.shift().length;p.value=b.substring(0,_-k)+`
`+b.substring(f,b.length),p.selectionStart=p.selectionEnd=_-k}}}else alert("Error: Browser version is too low");o.d_value=p.value,p.focus()},h.getNavigation=function(o,l){var p=void 0;p=o.$refs.navigationContent,p.innerHTML=o.d_render;var _=p.children;if(_.length)for(var f=0;f<_.length;f++)(function(b,m,g){/^H[1-6]{1}$/.exec(b.tagName)?b.onclick=function(){var w=o.$refs.vShowContent,v=o.$refs.vNoteEdit;o.s_subfield?o.s_preview_switch&&(v.scrollTop=w.children[m].offsetTop*(v.scrollHeight-v.offsetHeight)/(w.scrollHeight-w.offsetHeight)):o.s_preview_switch&&(w.scrollTop=w.children[m].offsetTop)}:b.style.display="none"})(_[f],f)},h.scrollLink=function(o,l){var p=o.srcElement?o.srcElement:o.target,_=p.scrollTop/(p.scrollHeight-p.offsetHeight);l.edit_scroll_height>=0&&p.scrollHeight!==l.edit_scroll_height&&p.scrollHeight-p.offsetHeight-p.scrollTop<=30&&(l.$refs.vNoteEdit.scrollTop=p.scrollHeight-p.offsetHeight,_=1),l.edit_scroll_height=p.scrollHeight,l.$refs.vShowContent.scrollHeight>l.$refs.vShowContent.offsetHeight&&(l.$refs.vShowContent.scrollTop=(l.$refs.vShowContent.scrollHeight-l.$refs.vShowContent.offsetHeight)*_)},h.fullscreenchange=function(o){o.$el.addEventListener("fullscreenchange",function(l){o.$toolbar_right_read_change_status()},!1),o.$el.addEventListener("mozfullscreenchange",function(l){o.$toolbar_right_read_change_status()},!1),o.$el.addEventListener("webkitfullscreenchange",function(l){o.$toolbar_right_read_change_status()},!1),o.$el.addEventListener("msfullscreenchange",function(l){o.$toolbar_right_read_change_status()},!1)},h.windowResize=function(o){function l(){o.$el.clientWidth>768?o.s_subfield=o.subfield:o.s_subfield=!1}l(),window.addEventListener("resize",l)},h.ImagePreviewListener=function(o){o.$refs.vShowContent.addEventListener("click",function(l){l=l||window.event;var p=l.srcElement?l.srcElement:l.target;p.tagName==="IMG"&&(o.imageClick!=null?o.imageClick(p):o.d_preview_imgsrc=p.src)})}},function(d,h){var s={}.toString;d.exports=function(t){return s.call(t).slice(8,-1)}},function(d,h,s){var t=s(8),r=s(1).document,e=t(r)&&t(r.createElement);d.exports=function(i){return e?r.createElement(i):{}}},function(d,h,s){var t=s(1),r=s(10),e=s(85),i=s(4),n=s(2),a=function(u,c,o){var l,p,_,f=u&a.F,b=u&a.G,m=u&a.S,g=u&a.P,w=u&a.B,v=u&a.W,x=b?r:r[c]||(r[c]={}),k=x.prototype,C=b?t:m?t[c]:(t[c]||{}).prototype;b&&(o=c);for(l in o)(p=!f&&C&&C[l]!==void 0)&&n(x,l)||(_=p?C[l]:o[l],x[l]=b&&typeof C[l]!="function"?o[l]:w&&p?e(_,t):v&&C[l]==_?function(y){var A=function(T,L,j){if(this instanceof y){switch(arguments.length){case 0:return new y;case 1:return new y(T);case 2:return new y(T,L)}return new y(T,L,j)}return y.apply(this,arguments)};return A.prototype=y.prototype,A}(_):g&&typeof _=="function"?e(Function.call,_):_,g&&((x.virtual||(x.virtual={}))[l]=_,u&a.R&&k&&!k[l]&&i(k,l,_)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,d.exports=a},function(d,h,s){d.exports=!s(3)&&!s(11)(function(){return Object.defineProperty(s(40)("div"),"a",{get:function(){return 7}}).a!=7})},function(d,h,s){var t=s(12),r=s(41),e=s(48),i=s(4),n=s(21),a=s(90),u=s(24),c=s(96),o=s(7)("iterator"),l=!([].keys&&"next"in[].keys()),p=function(){return this};d.exports=function(_,f,b,m,g,w,v){a(b,f,m);var x,k,C,y=function(q){if(!l&&q in j)return j[q];switch(q){case"keys":case"values":return function(){return new b(this,q)}}return function(){return new b(this,q)}},A=f+" Iterator",T=g=="values",L=!1,j=_.prototype,S=j[o]||j["@@iterator"]||g&&j[g],M=S||y(g),$=g?T?y("entries"):M:void 0,E=f=="Array"&&j.entries||S;if(E&&(C=c(E.call(new _)))!==Object.prototype&&C.next&&(u(C,A,!0),t||typeof C[o]=="function"||i(C,o,p)),T&&S&&S.name!=="values"&&(L=!0,M=function(){return S.call(this)}),t&&!v||!l&&!L&&j[o]||i(j,o,M),n[f]=M,n[A]=p,g)if(x={values:T?M:y("values"),keys:w?M:y("keys"),entries:$},v)for(k in x)k in j||e(j,k,x[k]);else r(r.P+r.F*(l||L),f,x);return x}},function(d,h,s){var t=s(9),r=s(93),e=s(20),i=s(25)("IE_PROTO"),n=function(){},a=function(){var u,c=s(40)("iframe"),o=e.length;for(c.style.display="none",s(87).appendChild(c),c.src="javascript:",u=c.contentWindow.document,u.open(),u.write("<script>document.F=Object<\/script>"),u.close(),a=u.F;o--;)delete a.prototype[e[o]];return a()};d.exports=Object.create||function(u,c){var o;return u!==null?(n.prototype=t(u),o=new n,n.prototype=null,o[i]=u):o=a(),c===void 0?o:r(o,c)}},function(d,h,s){var t=s(47),r=s(20).concat("length","prototype");h.f=Object.getOwnPropertyNames||function(e){return t(e,r)}},function(d,h){h.f=Object.getOwnPropertySymbols},function(d,h,s){var t=s(2),r=s(6),e=s(84)(!1),i=s(25)("IE_PROTO");d.exports=function(n,a){var u,c=r(n),o=0,l=[];for(u in c)u!=i&&t(c,u)&&l.push(u);for(;a.length>o;)t(c,u=a[o++])&&(~e(l,u)||l.push(u));return l}},function(d,h,s){d.exports=s(4)},function(d,h,s){var t=s(19);d.exports=function(r){return Object(t(r))}},function(d,h){function s(){var n={};return n["align-content"]=!1,n["align-items"]=!1,n["align-self"]=!1,n["alignment-adjust"]=!1,n["alignment-baseline"]=!1,n.all=!1,n["anchor-point"]=!1,n.animation=!1,n["animation-delay"]=!1,n["animation-direction"]=!1,n["animation-duration"]=!1,n["animation-fill-mode"]=!1,n["animation-iteration-count"]=!1,n["animation-name"]=!1,n["animation-play-state"]=!1,n["animation-timing-function"]=!1,n.azimuth=!1,n["backface-visibility"]=!1,n.background=!0,n["background-attachment"]=!0,n["background-clip"]=!0,n["background-color"]=!0,n["background-image"]=!0,n["background-origin"]=!0,n["background-position"]=!0,n["background-repeat"]=!0,n["background-size"]=!0,n["baseline-shift"]=!1,n.binding=!1,n.bleed=!1,n["bookmark-label"]=!1,n["bookmark-level"]=!1,n["bookmark-state"]=!1,n.border=!0,n["border-bottom"]=!0,n["border-bottom-color"]=!0,n["border-bottom-left-radius"]=!0,n["border-bottom-right-radius"]=!0,n["border-bottom-style"]=!0,n["border-bottom-width"]=!0,n["border-collapse"]=!0,n["border-color"]=!0,n["border-image"]=!0,n["border-image-outset"]=!0,n["border-image-repeat"]=!0,n["border-image-slice"]=!0,n["border-image-source"]=!0,n["border-image-width"]=!0,n["border-left"]=!0,n["border-left-color"]=!0,n["border-left-style"]=!0,n["border-left-width"]=!0,n["border-radius"]=!0,n["border-right"]=!0,n["border-right-color"]=!0,n["border-right-style"]=!0,n["border-right-width"]=!0,n["border-spacing"]=!0,n["border-style"]=!0,n["border-top"]=!0,n["border-top-color"]=!0,n["border-top-left-radius"]=!0,n["border-top-right-radius"]=!0,n["border-top-style"]=!0,n["border-top-width"]=!0,n["border-width"]=!0,n.bottom=!1,n["box-decoration-break"]=!0,n["box-shadow"]=!0,n["box-sizing"]=!0,n["box-snap"]=!0,n["box-suppress"]=!0,n["break-after"]=!0,n["break-before"]=!0,n["break-inside"]=!0,n["caption-side"]=!1,n.chains=!1,n.clear=!0,n.clip=!1,n["clip-path"]=!1,n["clip-rule"]=!1,n.color=!0,n["color-interpolation-filters"]=!0,n["column-count"]=!1,n["column-fill"]=!1,n["column-gap"]=!1,n["column-rule"]=!1,n["column-rule-color"]=!1,n["column-rule-style"]=!1,n["column-rule-width"]=!1,n["column-span"]=!1,n["column-width"]=!1,n.columns=!1,n.contain=!1,n.content=!1,n["counter-increment"]=!1,n["counter-reset"]=!1,n["counter-set"]=!1,n.crop=!1,n.cue=!1,n["cue-after"]=!1,n["cue-before"]=!1,n.cursor=!1,n.direction=!1,n.display=!0,n["display-inside"]=!0,n["display-list"]=!0,n["display-outside"]=!0,n["dominant-baseline"]=!1,n.elevation=!1,n["empty-cells"]=!1,n.filter=!1,n.flex=!1,n["flex-basis"]=!1,n["flex-direction"]=!1,n["flex-flow"]=!1,n["flex-grow"]=!1,n["flex-shrink"]=!1,n["flex-wrap"]=!1,n.float=!1,n["float-offset"]=!1,n["flood-color"]=!1,n["flood-opacity"]=!1,n["flow-from"]=!1,n["flow-into"]=!1,n.font=!0,n["font-family"]=!0,n["font-feature-settings"]=!0,n["font-kerning"]=!0,n["font-language-override"]=!0,n["font-size"]=!0,n["font-size-adjust"]=!0,n["font-stretch"]=!0,n["font-style"]=!0,n["font-synthesis"]=!0,n["font-variant"]=!0,n["font-variant-alternates"]=!0,n["font-variant-caps"]=!0,n["font-variant-east-asian"]=!0,n["font-variant-ligatures"]=!0,n["font-variant-numeric"]=!0,n["font-variant-position"]=!0,n["font-weight"]=!0,n.grid=!1,n["grid-area"]=!1,n["grid-auto-columns"]=!1,n["grid-auto-flow"]=!1,n["grid-auto-rows"]=!1,n["grid-column"]=!1,n["grid-column-end"]=!1,n["grid-column-start"]=!1,n["grid-row"]=!1,n["grid-row-end"]=!1,n["grid-row-start"]=!1,n["grid-template"]=!1,n["grid-template-areas"]=!1,n["grid-template-columns"]=!1,n["grid-template-rows"]=!1,n["hanging-punctuation"]=!1,n.height=!0,n.hyphens=!1,n.icon=!1,n["image-orientation"]=!1,n["image-resolution"]=!1,n["ime-mode"]=!1,n["initial-letters"]=!1,n["inline-box-align"]=!1,n["justify-content"]=!1,n["justify-items"]=!1,n["justify-self"]=!1,n.left=!1,n["letter-spacing"]=!0,n["lighting-color"]=!0,n["line-box-contain"]=!1,n["line-break"]=!1,n["line-grid"]=!1,n["line-height"]=!1,n["line-snap"]=!1,n["line-stacking"]=!1,n["line-stacking-ruby"]=!1,n["line-stacking-shift"]=!1,n["line-stacking-strategy"]=!1,n["list-style"]=!0,n["list-style-image"]=!0,n["list-style-position"]=!0,n["list-style-type"]=!0,n.margin=!0,n["margin-bottom"]=!0,n["margin-left"]=!0,n["margin-right"]=!0,n["margin-top"]=!0,n["marker-offset"]=!1,n["marker-side"]=!1,n.marks=!1,n.mask=!1,n["mask-box"]=!1,n["mask-box-outset"]=!1,n["mask-box-repeat"]=!1,n["mask-box-slice"]=!1,n["mask-box-source"]=!1,n["mask-box-width"]=!1,n["mask-clip"]=!1,n["mask-image"]=!1,n["mask-origin"]=!1,n["mask-position"]=!1,n["mask-repeat"]=!1,n["mask-size"]=!1,n["mask-source-type"]=!1,n["mask-type"]=!1,n["max-height"]=!0,n["max-lines"]=!1,n["max-width"]=!0,n["min-height"]=!0,n["min-width"]=!0,n["move-to"]=!1,n["nav-down"]=!1,n["nav-index"]=!1,n["nav-left"]=!1,n["nav-right"]=!1,n["nav-up"]=!1,n["object-fit"]=!1,n["object-position"]=!1,n.opacity=!1,n.order=!1,n.orphans=!1,n.outline=!1,n["outline-color"]=!1,n["outline-offset"]=!1,n["outline-style"]=!1,n["outline-width"]=!1,n.overflow=!1,n["overflow-wrap"]=!1,n["overflow-x"]=!1,n["overflow-y"]=!1,n.padding=!0,n["padding-bottom"]=!0,n["padding-left"]=!0,n["padding-right"]=!0,n["padding-top"]=!0,n.page=!1,n["page-break-after"]=!1,n["page-break-before"]=!1,n["page-break-inside"]=!1,n["page-policy"]=!1,n.pause=!1,n["pause-after"]=!1,n["pause-before"]=!1,n.perspective=!1,n["perspective-origin"]=!1,n.pitch=!1,n["pitch-range"]=!1,n["play-during"]=!1,n.position=!1,n["presentation-level"]=!1,n.quotes=!1,n["region-fragment"]=!1,n.resize=!1,n.rest=!1,n["rest-after"]=!1,n["rest-before"]=!1,n.richness=!1,n.right=!1,n.rotation=!1,n["rotation-point"]=!1,n["ruby-align"]=!1,n["ruby-merge"]=!1,n["ruby-position"]=!1,n["shape-image-threshold"]=!1,n["shape-outside"]=!1,n["shape-margin"]=!1,n.size=!1,n.speak=!1,n["speak-as"]=!1,n["speak-header"]=!1,n["speak-numeral"]=!1,n["speak-punctuation"]=!1,n["speech-rate"]=!1,n.stress=!1,n["string-set"]=!1,n["tab-size"]=!1,n["table-layout"]=!1,n["text-align"]=!0,n["text-align-last"]=!0,n["text-combine-upright"]=!0,n["text-decoration"]=!0,n["text-decoration-color"]=!0,n["text-decoration-line"]=!0,n["text-decoration-skip"]=!0,n["text-decoration-style"]=!0,n["text-emphasis"]=!0,n["text-emphasis-color"]=!0,n["text-emphasis-position"]=!0,n["text-emphasis-style"]=!0,n["text-height"]=!0,n["text-indent"]=!0,n["text-justify"]=!0,n["text-orientation"]=!0,n["text-overflow"]=!0,n["text-shadow"]=!0,n["text-space-collapse"]=!0,n["text-transform"]=!0,n["text-underline-position"]=!0,n["text-wrap"]=!0,n.top=!1,n.transform=!1,n["transform-origin"]=!1,n["transform-style"]=!1,n.transition=!1,n["transition-delay"]=!1,n["transition-duration"]=!1,n["transition-property"]=!1,n["transition-timing-function"]=!1,n["unicode-bidi"]=!1,n["vertical-align"]=!1,n.visibility=!1,n["voice-balance"]=!1,n["voice-duration"]=!1,n["voice-family"]=!1,n["voice-pitch"]=!1,n["voice-range"]=!1,n["voice-rate"]=!1,n["voice-stress"]=!1,n["voice-volume"]=!1,n.volume=!1,n["white-space"]=!1,n.widows=!1,n.width=!0,n["will-change"]=!1,n["word-break"]=!0,n["word-spacing"]=!0,n["word-wrap"]=!0,n["wrap-flow"]=!1,n["wrap-through"]=!1,n["writing-mode"]=!1,n["z-index"]=!1,n}function t(n,a,u){}function r(n,a,u){}function e(n,a){return i.test(a)?"":a}var i=/javascript\s*\:/gim;h.whiteList=s(),h.getDefaultWhiteList=s,h.onAttr=t,h.onIgnoreAttr=r,h.safeAttrValue=e},function(d,h){d.exports={indexOf:function(s,t){var r,e;if(Array.prototype.indexOf)return s.indexOf(t);for(r=0,e=s.length;r<e;r++)if(s[r]===t)return r;return-1},forEach:function(s,t,r){var e,i;if(Array.prototype.forEach)return s.forEach(t,r);for(e=0,i=s.length;e<i;e++)t.call(r,s[e],e,s)},trim:function(s){return String.prototype.trim?s.trim():s.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(s){return String.prototype.trimRight?s.trimRight():s.replace(/(\s*$)/g,"")}}},function(d,h,s){d.exports=s(113)},function(d,h,s){var t=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,r="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",e=new RegExp("^(?:"+t+"|"+r+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),i=new RegExp("^(?:"+t+"|"+r+")");d.exports.HTML_TAG_RE=e,d.exports.HTML_OPEN_CLOSE_TAG_RE=i},function(d,h,s){function t(r,e){var i,n,a,u,c,o,l=e.length;for(i=l-1;i>=0;i--)n=e[i],n.marker!==95&&n.marker!==42||n.end!==-1&&(a=e[n.end],o=i>0&&e[i-1].end===n.end+1&&e[i-1].token===n.token-1&&e[n.end+1].token===a.token+1&&e[i-1].marker===n.marker,c=String.fromCharCode(n.marker),u=r.tokens[n.token],u.type=o?"strong_open":"em_open",u.tag=o?"strong":"em",u.nesting=1,u.markup=o?c+c:c,u.content="",u=r.tokens[a.token],u.type=o?"strong_close":"em_close",u.tag=o?"strong":"em",u.nesting=-1,u.markup=o?c+c:c,u.content="",o&&(r.tokens[e[i-1].token].content="",r.tokens[e[n.end+1].token].content="",i--))}d.exports.tokenize=function(r,e){var i,n,a,u=r.pos,c=r.src.charCodeAt(u);if(e||c!==95&&c!==42)return!1;for(n=r.scanDelims(r.pos,c===42),i=0;i<n.length;i++)a=r.push("text","",0),a.content=String.fromCharCode(c),r.delimiters.push({marker:c,length:n.length,jump:i,token:r.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return r.pos+=n.length,!0},d.exports.postProcess=function(r){var e,i=r.tokens_meta,n=r.tokens_meta.length;for(t(r,r.delimiters),e=0;e<n;e++)i[e]&&i[e].delimiters&&t(r,i[e].delimiters)}},function(d,h,s){function t(r,e){var i,n,a,u,c,o=[],l=e.length;for(i=0;i<l;i++)a=e[i],a.marker===126&&a.end!==-1&&(u=e[a.end],c=r.tokens[a.token],c.type="s_open",c.tag="s",c.nesting=1,c.markup="~~",c.content="",c=r.tokens[u.token],c.type="s_close",c.tag="s",c.nesting=-1,c.markup="~~",c.content="",r.tokens[u.token-1].type==="text"&&r.tokens[u.token-1].content==="~"&&o.push(u.token-1));for(;o.length;){for(i=o.pop(),n=i+1;n<r.tokens.length&&r.tokens[n].type==="s_close";)n++;n--,i!==n&&(c=r.tokens[n],r.tokens[n]=r.tokens[i],r.tokens[i]=c)}}d.exports.tokenize=function(r,e){var i,n,a,u,c,o=r.pos,l=r.src.charCodeAt(o);if(e||l!==126||(n=r.scanDelims(r.pos,!0),u=n.length,c=String.fromCharCode(l),u<2))return!1;for(u%2&&(a=r.push("text","",0),a.content=c,u--),i=0;i<u;i+=2)a=r.push("text","",0),a.content=c+c,r.delimiters.push({marker:l,length:0,jump:i,token:r.tokens.length-1,end:-1,open:n.can_open,close:n.can_close});return r.pos+=n.length,!0},d.exports.postProcess=function(r){var e,i=r.tokens_meta,n=r.tokens_meta.length;for(t(r,r.delimiters),e=0;e<n;e++)i[e]&&i[e].delimiters&&t(r,i[e].delimiters)}},function(d,h,s){d.exports.encode=s(183),d.exports.decode=s(182),d.exports.format=s(184),d.exports.parse=s(185)},function(d,h){d.exports=/[\0-\x1F\x7F-\x9F]/},function(d,h){d.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},function(d,h){d.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},function(d,h,s){function t(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}function r(D,z,F){}function e(D,z,F){}function i(D,z,F){}function n(D,z,F){}function a(D){return D.replace(A,"&lt;").replace(T,"&gt;")}function u(D,z,F,R){if(F=f(F),z==="href"||z==="src"){if((F=C.trim(F))==="#")return"#";if(F.substr(0,7)!=="http://"&&F.substr(0,8)!=="https://"&&F.substr(0,7)!=="mailto:"&&F.substr(0,4)!=="tel:"&&F[0]!=="#"&&F[0]!=="/")return""}else if(z==="background"){if(E.lastIndex=0,E.test(F))return""}else if(z==="style"){if(q.lastIndex=0,q.test(F)||(O.lastIndex=0,O.test(F)&&(E.lastIndex=0,E.test(F))))return"";R!==!1&&(R=R||y,F=R.process(F))}return F=b(F)}function c(D){return D.replace(L,"&quot;")}function o(D){return D.replace(j,'"')}function l(D){return D.replace(S,function(z,F){return F[0]==="x"||F[0]==="X"?String.fromCharCode(parseInt(F.substr(1),16)):String.fromCharCode(parseInt(F,10))})}function p(D){return D.replace(M,":").replace($," ")}function _(D){for(var z="",F=0,R=D.length;F<R;F++)z+=D.charCodeAt(F)<32?" ":D.charAt(F);return C.trim(z)}function f(D){return D=o(D),D=l(D),D=p(D),D=_(D)}function b(D){return D=c(D),D=a(D)}function m(){return""}function g(D,z){function F(H){return!!R||C.indexOf(D,H)!==-1}typeof z!="function"&&(z=function(){});var R=!Array.isArray(D),B=[],U=!1;return{onIgnoreTag:function(H,G,V){if(F(H)){if(V.isClosing){var K="[/removed]",Q=V.position+K.length;return B.push([U!==!1?U:V.position,Q]),U=!1,K}return U||(U=V.position),"[removed]"}return z(H,G,V)},remove:function(H){var G="",V=0;return C.forEach(B,function(K){G+=H.slice(V,K[0]),V=K[1]}),G+=H.slice(V)}}}function w(D){return D.replace(P,"")}function v(D){var z=D.split("");return z=z.filter(function(F){var R=F.charCodeAt(0);return R!==127&&(!(R<=31)||R===10||R===13)}),z.join("")}var x=s(31).FilterCSS,k=s(31).getDefaultWhiteList,C=s(35),y=new x,A=/</g,T=/>/g,L=/"/g,j=/&quot;/g,S=/&#([a-zA-Z0-9]*);?/gim,M=/&colon;?/gim,$=/&newline;?/gim,E=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,q=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,O=/u\s*r\s*l\s*\(.*/gi,P=/<!--[\s\S]*?-->/g;h.whiteList=t(),h.getDefaultWhiteList=t,h.onTag=r,h.onIgnoreTag=e,h.onTagAttr=i,h.onIgnoreTagAttr=n,h.safeAttrValue=u,h.escapeHtml=a,h.escapeQuote=c,h.unescapeQuote=o,h.escapeHtmlEntities=l,h.escapeDangerHtml5Entities=p,h.clearNonPrintableCharacter=_,h.friendlyAttrValue=f,h.escapeAttrValue=b,h.onIgnoreTagStripAll=m,h.StripTagBody=g,h.stripCommentTag=w,h.stripBlankChar=v,h.cssFilter=y,h.getDefaultCSSWhiteList=k},function(d,h,s){function t(p){var _=o.spaceIndex(p);if(_===-1)var f=p.slice(1,-1);else var f=p.slice(1,_+1);return f=o.trim(f).toLowerCase(),f.slice(0,1)==="/"&&(f=f.slice(1)),f.slice(-1)==="/"&&(f=f.slice(0,-1)),f}function r(p){return p.slice(0,2)==="</"}function e(p,_,f){"user strict";var b="",m=0,g=!1,w=!1,v=0,x=p.length,k="",C="";for(v=0;v<x;v++){var y=p.charAt(v);if(g===!1){if(y==="<"){g=v;continue}}else if(w===!1){if(y==="<"){b+=f(p.slice(m,v)),g=v,m=v;continue}if(y===">"){b+=f(p.slice(m,g)),C=p.slice(g,v+1),k=t(C),b+=_(g,b.length,k,C,r(C)),m=v+1,g=!1;continue}if((y==='"'||y==="'")&&p.charAt(v-1)==="="){w=y;continue}}else if(y===w){w=!1;continue}}return m<p.length&&(b+=f(p.substr(m))),b}function i(p,_){"user strict";function f(y,A){if(y=o.trim(y),y=y.replace(l,"").toLowerCase(),!(y.length<1)){var T=_(y,A||"");T&&m.push(T)}}for(var b=0,m=[],g=!1,w=p.length,v=0;v<w;v++){var x,k,C=p.charAt(v);if(g!==!1||C!=="=")if(g===!1||v!==b||C!=='"'&&C!=="'"||p.charAt(v-1)!=="="){if(/\s|\n|\t/.test(C)){if(p=p.replace(/\s|\n|\t/g," "),g===!1){if((k=n(p,v))===-1){x=o.trim(p.slice(b,v)),f(x),g=!1,b=v+1;continue}v=k-1;continue}if((k=a(p,v-1))===-1){x=o.trim(p.slice(b,v)),x=c(x),f(g,x),g=!1,b=v+1;continue}}}else{if((k=p.indexOf(C,v+1))===-1)break;x=o.trim(p.slice(b+1,k)),f(g,x),g=!1,v=k,b=v+1}else g=p.slice(b,v),b=v+1}return b<p.length&&(g===!1?f(p.slice(b)):f(g,c(o.trim(p.slice(b))))),o.trim(m.join(" "))}function n(p,_){for(;_<p.length;_++){var f=p[_];if(f!==" ")return f==="="?_:-1}}function a(p,_){for(;_>0;_--){var f=p[_];if(f!==" ")return f==="="?_:-1}}function u(p){return p[0]==='"'&&p[p.length-1]==='"'||p[0]==="'"&&p[p.length-1]==="'"}function c(p){return u(p)?p.substr(1,p.length-2):p}var o=s(35),l=/[^a-zA-Z0-9_:\.\-]/gim;h.parseTag=e,h.parseAttr=i},function(d,h,s){function t(e){s(204),s(205)}var r=s(16)(s(67),s(201),t,"data-v-7a63e4b3",null);r.options.__file="D:\\work\\songwang\\yuangongji\\mavonEditor\\src\\mavon-editor.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return e!=="default"&&e.substr(0,2)!=="__"})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] mavon-editor.vue: functional components are not supported with templates, they should use render functions."),d.exports=r.exports},function(d,h,s){var t=s(197),r={autoTextarea:t,install:function(e){e.component("auto-textarea",t)}};d.exports=r},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0}),h.default={data:function(){var t=this;return{temp_value:function(){return t.value}(),s_autofocus:function(){if(t.autofocus)return"autofocus"}()}},created:function(){},props:{fullHeight:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},value:{type:String,default:""},placeholder:{type:String,default:""},border:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},onchange:{type:Function,default:null},fontSize:{type:String,default:"14px"},lineHeight:{type:String,default:"18px"}},methods:{change:function(t){this.onchange&&this.onchange(this.temp_value,t)}},watch:{value:function(t,r){this.temp_value=t},temp_value:function(t,r){this.$emit("input",t)}}}},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0}),h.default={name:"s-md-toolbar-left",props:{editable:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},toolbars:{type:Object,required:!0},d_words:{type:Object,required:!0},image_filter:{type:Function,default:null}},data:function(){return{img_file:[[0,null]],img_timer:null,header_timer:null,s_img_dropdown_open:!1,s_header_dropdown_open:!1,s_img_link_open:!1,trigger:null,num:0,link_text:"",link_addr:"",link_type:"link"}},methods:{$imgLinkAdd:function(){this.$emit("toolbar_left_addlink",this.link_type,this.link_text,this.link_addr),this.s_img_link_open=!1},$toggle_imgLinkAdd:function(t){var r=this;this.link_type=t,this.link_text=this.link_addr="",this.s_img_link_open=!0,this.$nextTick(function(){r.$refs.linkTextInput.focus()}),this.s_img_dropdown_open=!1},$imgFileListClick:function(t){this.$emit("imgTouch",this.img_file[t])},$changeUrl:function(t,r){this.img_file[t][0]=r},$imgFileAdd:function(t){this.img_file.push([++this.num,t]),this.$emit("imgAdd",this.num,t),this.s_img_dropdown_open=!1},$imgFilesAdd:function(t){for(var r=typeof this.image_filter=="function",e=0;e<t.length;e++)r&&this.image_filter(t[e])===!0?this.$imgFileAdd(t[e]):!r&&t[e].type.match(/^image\//i)&&this.$imgFileAdd(t[e])},$imgAdd:function(t){this.$imgFilesAdd(t.target.files),t.target.value=""},$imgDel:function(t){this.$emit("imgDel",this.img_file[t]),this.img_file.splice(t,1),this.num--,this.s_img_dropdown_open=!1},isEqualName:function(t,r){return!(!this.img_file[r][1]||this.img_file[r][1].name!==t&&this.img_file[r][1]._name!==t)},$imgDelByFilename:function(t){for(var r=0;this.img_file.length>r;){if(this.img_file[r][1]===t||this.isEqualName(t,r))return this.$imgDel(r),!0;r+=1}return!1},$imgAddByFilename:function(t,r){for(var e=0;e<this.img_file.length;e++)if(this.img_file[e][0]===t)return!1;return this.img_file[0][0]=t,this.img_file[0][1]=r,this.img_file[0][2]=t,this.img_file.unshift(["./"+this.num,null]),this.$emit("imgAdd",this.img_file[1][0],r,!1),!0},$imgAddByUrl:function(t,r){for(var e=0;e<this.img_file.length;e++)if(this.img_file[e][0]===t)return!1;return this.img_file[0][0]=t,this.img_file[0][1]=r,this.img_file.unshift(["./"+this.num,null]),!0},$imgUpdateByFilename:function(t,r){for(var e=0;e<this.img_file.length;e++)if(this.img_file[e][0]===t||this.isEqualName(t,e))return this.img_file[e][1]=r,this.$emit("imgAdd",t,r,!1),!0;return!1},$mouseenter_img_dropdown:function(){this.editable&&(clearTimeout(this.img_timer),this.s_img_dropdown_open=!0)},$mouseleave_img_dropdown:function(){var t=this;this.img_timer=setTimeout(function(){t.s_img_dropdown_open=!1},200)},$mouseenter_header_dropdown:function(){this.editable&&(clearTimeout(this.header_timer),this.s_header_dropdown_open=!0)},$mouseleave_header_dropdown:function(){var t=this;this.header_timer=setTimeout(function(){t.s_header_dropdown_open=!1},200)},$clicks:function(t){this.editable&&this.$emit("toolbar_left_click",t)},$click_header:function(t){this.$emit("toolbar_left_click",t),this.s_header_dropdown_open=!1},handleClose:function(t){this.s_img_dropdown_open=!1}},watch:{s_img_link_open:function(t){this.$parent.$el.style.zIndex=t?1501:1500}}}},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0}),h.default={name:"s-md-toolbar-right",props:{s_subfield:{type:Boolean,required:!0},toolbars:{type:Object,required:!0},s_preview_switch:{type:Boolean,required:!0},s_fullScreen:{type:Boolean,required:!0},s_html_code:{type:Boolean,required:!0},s_navigation:{type:Boolean,required:!0},d_words:{type:Object,required:!0}},methods:{$clicks:function(t){this.$emit("toolbar_right_click",t)}}}},function(module,exports,__webpack_require__){function _interopRequireDefault(d){return d&&d.__esModule?d:{default:d}}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__(18),_typeof3=_interopRequireDefault(_typeof2),_autoTextarea=__webpack_require__(63),_keydownListen=__webpack_require__(72),_langHljsCss=__webpack_require__(70),_langHljsCss2=_interopRequireDefault(_langHljsCss),_extraFunction=__webpack_require__(38),_util=__webpack_require__(77),_toolbar_left_click2=__webpack_require__(75),_toolbar_right_click2=__webpack_require__(76),_config=__webpack_require__(69),_markdown=__webpack_require__(74),_markdown2=_interopRequireDefault(_markdown),_mdToolbarLeft=__webpack_require__(36),_mdToolbarLeft2=_interopRequireDefault(_mdToolbarLeft),_mdToolbarRight=__webpack_require__(37),_mdToolbarRight2=_interopRequireDefault(_mdToolbarRight);__webpack_require__(115),__webpack_require__(114),exports.default={mixins:[_markdown2.default],props:{scrollStyle:{type:Boolean,default:!0},boxShadow:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!0},fontSize:{type:String,default:"14px"},toolbarsBackground:{type:String,default:"#ffffff"},editorBackground:{type:String,default:"#ffffff"},previewBackground:{type:String,default:"#fbfbfb"},boxShadowStyle:{type:String,default:"0 2px 12px 0 rgba(0, 0, 0, 0.1)"},help:{type:String,default:null},value:{type:String,default:""},language:{type:String,default:"zh-CN"},subfield:{type:Boolean,default:!0},navigation:{type:Boolean,default:!1},defaultOpen:{type:String,default:null},editable:{type:Boolean,default:!0},toolbarsFlag:{type:Boolean,default:!0},toolbars:{type:Object,default:function(){return _config.CONFIG.toolbars}},html:{type:Boolean,default:!0},xssOptions:{type:[Object,Boolean],default:function(){return{}}},codeStyle:{type:String,default:function(){return"github"}},placeholder:{type:String,default:null},ishljs:{type:Boolean,default:!0},externalLink:{type:[Object,Boolean],default:!0},imageFilter:{type:Function,default:null},imageClick:{type:Function,default:null},tabSize:{type:Number,default:0},shortCut:{type:Boolean,default:!0}},data:function(){var d=this;return{s_right_click_menu_show:!1,right_click_menu_top:0,right_click_menu_left:0,s_subfield:function(){return d.subfield}(),s_autofocus:!0,s_navigation:function(){return d.navigation}(),s_scrollStyle:function(){return d.scrollStyle}(),d_value:"",d_render:"",s_preview_switch:function(){var h=d.defaultOpen;return h||(h=d.subfield?"preview":"edit"),h==="preview"}(),s_fullScreen:!1,s_help:!1,s_html_code:!1,d_help:null,d_words:null,edit_scroll_height:-1,s_readmodel:!1,s_table_enter:!1,d_history:function(){var h=[];return h.push(d.value),h}(),d_history_index:0,currentTimeout:"",d_image_file:[],d_preview_imgsrc:null,s_external_link:{markdown_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"},hljs_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"},hljs_lang:function(h){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/languages/"+h+".min.js"},hljs_css:function(h){return _langHljsCss2.default[h]?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/"+h+".min.css":""},katex_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js"},katex_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css"}},p_external_link:{},textarea_selectionEnd:0,textarea_selectionEnds:[0],_xssHandler:null}},created:function(){var d=this;this.initLanguage(),this.initExternalFuc(),this.$nextTick(function(){d.editableTextarea()})},mounted:function(){var d=this;this.$el.addEventListener("paste",function(h){d.$paste(h)}),this.$el.addEventListener("drop",function(h){d.$drag(h)}),(0,_keydownListen.keydownListen)(this),(0,_extraFunction.ImagePreviewListener)(this),this.autofocus&&this.getTextareaDom().focus(),(0,_extraFunction.fullscreenchange)(this),this.d_value=this.value||"",document.body.appendChild(this.$refs.help),this.loadExternalLink("markdown_css","css"),this.loadExternalLink("katex_css","css"),this.loadExternalLink("katex_js","js",function(){d.iRender(!0)}),this.loadExternalLink("hljs_js","js",function(){d.iRender(!0)}),d.codeStyleChange(d.codeStyle,!0)},beforeDestroy:function(){document.body.removeChild(this.$refs.help)},getMarkdownIt:function(){var d=this.mixins[0].data().markdownIt;return d||(d=(0,_markdown.initMarkdown)()),d},methods:{loadExternalLink:function(d,h,s){if(typeof this.p_external_link[d]!="function")return void(this.p_external_link[d]!==!1&&console.error("external_link."+d,"is not a function, if you want to disabled this error log, set external_link."+d,"to function or false"));var t={css:_extraFunction.loadLink,js:_extraFunction.loadScript};t.hasOwnProperty(h)&&t[h](this.p_external_link[d](),s)},initExternalFuc:function(){for(var d=this,h=["markdown_css","hljs_js","hljs_css","hljs_lang","katex_js","katex_css"],s=(0,_typeof3.default)(d.externalLink),t=s==="object",r=s==="boolean",e=0;e<h.length;e++)r&&!d.externalLink||t&&d.externalLink[h[e]]===!1?d.p_external_link[h[e]]=!1:t&&typeof d.externalLink[h[e]]=="function"?d.p_external_link[h[e]]=d.externalLink[h[e]]:d.p_external_link[h[e]]=d.s_external_link[h[e]]},textAreaFocus:function(){this.$refs.vNoteTextarea.$refs.vTextarea.focus()},$drag:function(d){var h=d.dataTransfer;if(h){var s=h.files;s.length>0&&(d.preventDefault(),this.$refs.toolbar_left.$imgFilesAdd(s))}},$paste:function(d){var h=d.clipboardData;if(h){var s=h.items;if(!s)return;for(var t=h.types||[],r=null,e=0;e<t.length;e++)if(t[e]==="Files"){r=s[e];break}if(r&&r.kind==="file"){(0,_util.stopEvent)(d);var i=r.getAsFile();this.$refs.toolbar_left.$imgFilesAdd([i])}}},$imgTouch:function(d){},$imgDel:function(d){this.markdownIt.image_del(d[1]);var h=d[0],s=new RegExp("\\!\\["+d[1]._name+"\\]\\("+h+"\\)","g");this.d_value=this.d_value.replace(s,""),this.iRender(),this.$emit("imgDel",d)},$imgAdd:function(d,h,s){s===void 0&&(s=!0);var t=this;if(this.__rFilter==null&&(this.__rFilter=/^image\//i),this.__oFReader=new FileReader,this.__oFReader.onload=function(e){t.markdownIt.image_add(d,e.target.result),h.miniurl=e.target.result,s===!0&&(h._name=h.name.replace(/[\[\]\(\)\+\{\}&\|\\\*^%$#@\-]/g,""),t.insertText(t.getTextareaDom(),{prefix:"!["+h._name+"]("+d+")",subfix:"",str:""}),t.$nextTick(function(){t.$emit("imgAdd",d,h)}))},h){var r=h;this.__rFilter.test(r.type)&&this.__oFReader.readAsDataURL(r)}},$imgUpdateByUrl:function(d,h){var s=this;this.markdownIt.image_add(d,h),this.$nextTick(function(){s.d_render=this.markdownIt.render(this.d_value)})},$imgAddByUrl:function(d,h){return!!this.$refs.toolbar_left.$imgAddByUrl(d,h)&&(this.$imgUpdateByUrl(d,h),!0)},$img2Url:function $img2Url(fileIndex,url){var reg_str="/(!\\[[^\\[]*?\\](?=\\())\\(\\s*("+fileIndex+")\\s*\\)/g",reg=eval(reg_str);this.d_value=this.d_value.replace(reg,"$1("+url+")"),this.$refs.toolbar_left.$changeUrl(fileIndex,url),this.iRender()},$imglst2Url:function(d){if(d instanceof Array)for(var h=0;h<d.length;h++)this.$img2Url(d[h][0],d[h][1])},toolbar_left_click:function(d){(0,_toolbar_left_click2.toolbar_left_click)(d,this)},toolbar_left_addlink:function(d,h,s){(0,_toolbar_left_click2.toolbar_left_addlink)(d,h,s,this)},toolbar_right_click:function(d){(0,_toolbar_right_click2.toolbar_right_click)(d,this)},getNavigation:function(d,h){return(0,_extraFunction.getNavigation)(d,h)},change:function(d,h){this.$emit("change",d,h)},fullscreen:function(d,h){this.$emit("fullScreen",d,h)},readmodel:function(d,h){this.$emit("readModel",d,h)},previewtoggle:function(d,h){this.$emit("previewToggle",d,h)},subfieldtoggle:function(d,h){this.$emit("subfieldToggle",d,h)},htmlcode:function(d,h){this.$emit("htmlCode",d,h)},helptoggle:function(d,h){this.$emit("helpToggle",d,h)},save:function(d,h){this.$emit("save",d,h)},navigationtoggle:function(d,h){this.$emit("navigationToggle",d,h)},$toolbar_right_read_change_status:function(){this.s_readmodel=!this.s_readmodel,this.readmodel&&this.readmodel(this.s_readmodel,this.d_value),this.s_readmodel&&this.toolbars.navigation&&this.getNavigation(this,!0)},$v_edit_scroll:function(d){(0,_extraFunction.scrollLink)(d,this)},getTextareaDom:function(){return this.$refs.vNoteTextarea.$refs.vTextarea},insertText:function(d,h){var s=h.prefix,t=h.subfix,r=h.str,e=h.type;(0,_extraFunction.insertTextAtCaret)(d,{prefix:s,subfix:t,str:r,type:e},this)},insertTab:function(){(0,_extraFunction.insertTab)(this,this.tabSize)},insertOl:function(){(0,_extraFunction.insertOl)(this)},removeLine:function(){(0,_extraFunction.removeLine)(this)},insertUl:function(){(0,_extraFunction.insertUl)(this)},unInsertTab:function(){(0,_extraFunction.unInsertTab)(this,this.tabSize)},insertCodeBlock:function(){(0,_extraFunction.insertCodeBlock)(this)},insertEnter:function(d){(0,_extraFunction.insertEnter)(this,d)},saveHistory:function(){this.d_history.splice(this.d_history_index+1,this.d_history.length),this.d_history.push(this.d_value),this.textarea_selectionEnds.splice(this.d_history_index+1,this.textarea_selectionEnds.length),this.textarea_selectionEnds.push(this.textarea_selectionEnd),this.d_history_index=this.d_history.length-1},saveSelectionEndsHistory:function(){var d=this.$refs.vNoteTextarea&&this.$refs.vNoteTextarea.$el.querySelector("textarea");this.textarea_selectionEnd=d?d.selectionEnd:this.textarea_selectionEnd},initLanguage:function(){var d=_config.CONFIG.langList.indexOf(this.language)>=0?this.language:"zh-CN",h=this;h.$render(_config.CONFIG["help_"+d],function(s){h.d_help=s}),this.d_words=_config.CONFIG["words_"+d]},editableTextarea:function(){var d=this.$refs.vNoteTextarea.$refs.vTextarea;this.editable?d.removeAttribute("disabled"):d.setAttribute("disabled","disabled")},codeStyleChange:function(d,h){if(h=h||!1,typeof this.p_external_link.hljs_css!="function")return void(this.p_external_link.hljs_css!==!1&&console.error("external_link.hljs_css is not a function, if you want to disabled this error log, set external_link.hljs_css to function or false"));var s=this.p_external_link.hljs_css(d);s.length===0&&h&&(console.warn("hljs color scheme",d,"do not exist, loading default github"),s=this.p_external_link.hljs_css("github")),s.length>0?(0,_extraFunction.loadLink)(s,null,"md-code-style"):console.warn("hljs color scheme",d,"do not exist, hljs color scheme will not change")},iRender:function(d){var h=this;this.$render(h.d_value,function(s){h.d_render=s,d||h.change&&h.change(h.d_value,h.d_render),h.s_navigation&&(0,_extraFunction.getNavigation)(h,!1),h.$emit("input",h.d_value),h.d_value!==h.d_history[h.d_history_index]&&(window.clearTimeout(h.currentTimeout),h.currentTimeout=setTimeout(function(){h.saveHistory()},500))})},$emptyHistory:function(){this.d_history=[this.d_value],this.d_history_index=0}},watch:{d_value:function(d,h){this.saveSelectionEndsHistory(),this.iRender()},value:function(d,h){d!==this.d_value&&(this.d_value=d)},subfield:function(d,h){this.s_subfield=d},d_history_index:function(){this.d_history_index>20&&(this.d_history.shift(),this.d_history_index=this.d_history_index-1),this.d_value=this.d_history[this.d_history_index]},language:function(d){this.initLanguage()},editable:function(){this.editableTextarea()},defaultOpen:function(d){var h=d;return h||(h=this.subfield?"preview":"edit"),this.s_preview_switch=h==="preview",this.s_preview_switch},codeStyle:function(d){this.codeStyleChange(d)}},components:{"v-autoTextarea":_autoTextarea.autoTextarea,"v-md-toolbar-left":_mdToolbarLeft2.default,"v-md-toolbar-right":_mdToolbarRight2.default}}},function(d,h,s){var t=s(62),r={markdownIt:t.mixins[0].data().markdownIt,mavonEditor:t,LeftToolbar:s(36),RightToolbar:s(37),install:function(e){e.component("mavon-editor",t)}};d.exports=r},function(d,h,s){function t(D){return D&&D.__esModule?D:{default:D}}Object.defineProperty(h,"__esModule",{value:!0}),h.CONFIG=void 0;var r=s(193),e=t(r),i=s(194),n=t(i),a=s(188),u=t(a),c=s(189),o=t(c),l=s(191),p=t(l),_=s(192),f=t(_),b=s(187),m=t(b),g=s(190),w=t(g),v=s(217),x=t(v),k=s(218),C=t(k),y=s(212),A=t(y),T=s(213),L=t(T),j=s(215),S=t(j),M=s(216),$=t(M),E=s(211),q=t(E),O=s(214),P=t(O);h.CONFIG={"help_zh-CN":e.default,"help_zh-TW":n.default,"help_pt-BR":p.default,help_en:u.default,help_fr:o.default,help_ru:f.default,help_de:m.default,help_ja:w.default,"words_zh-CN":x.default,"words_zh-TW":C.default,"words_pt-BR":S.default,words_en:A.default,words_fr:L.default,words_ru:$.default,words_de:q.default,words_ja:P.default,langList:["en","zh-CN","zh-TW","fr","pt-BR","ru","de","ja"],toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,undo:!0,redo:!0,trash:!0,save:!0,alignleft:!0,aligncenter:!0,alignright:!0,navigation:!0,subfield:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,preview:!0}}},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0}),h.default={agate:1,androidstudio:1,"arduino-light":1,arta:1,ascetic:1,"atom-one-dark":1,"atom-one-light":1,"brown-paper":1,"codepen-embed":1,"color-brewer":1,dark:1,default:1,docco:1,far:1,foundation:1,github:1,googlecode:1,grayscale:1,hybrid:1,idea:1,"ir-black":1,magula:1,"mono-blue":1,"monokai-sublime":1,monokai:1,obsidian:1,"paraiso-dark":1,"paraiso-light":1,pojoaque:1,purebasic:1,rainbow:1,routeros:1,"school-book":1,sunburst:1,"tomorrow-night-blue":1,"tomorrow-night-bright":1,vs:1,vs2015:1,xcode:1,xt256:1,"a11y-dark":1,"a11y-light":1,"an-old-hope":1,"atom-one-dark-reasonable":1,"brown-pap":1,devibeans:1,"github-dark":1,"github-dark-dimmed":1,gml:1,"gradient-dark":1,"gradient-light":1,"isbl-editor-dark":1,"isbl-editor-light":1,"kimbie-dark":1,"kimbie-light":1,lightfair:1,lioshi:1,"night-owl":1,"nnfx-dark":1,"nnfx-light":1,nord:1,pojo:1,"qtcreator-dark":1,"qtcreator-light":1,"shades-of-purple":1,srcery:1,"stackoverflow-dark":1,"stackoverflow-light":1}},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0}),h.default={"1c":"1c",abnf:"abnf",accesslog:"accesslog",actionscript:"actionscript",as:"actionscript",ada:"ada",apache:"apache",apacheconf:"apache",applescript:"applescript",osascript:"applescript",arduino:"arduino",armasm:"armasm",arm:"armasm",asciidoc:"asciidoc",adoc:"asciidoc",aspectj:"aspectj",autohotkey:"autohotkey",ahk:"autohotkey",autoit:"autoit",avrasm:"avrasm",awk:"awk",axapta:"axapta",bash:"bash",sh:"bash",zsh:"bash",basic:"basic",bnf:"bnf",brainfuck:"brainfuck",bf:"brainfuck",cal:"cal",capnproto:"capnproto",capnp:"capnproto",ceylon:"ceylon",clean:"clean",icl:"clean",dcl:"clean","clojure-repl":"clojure-repl",clojure:"clojure",clj:"clojure",cmake:"cmake","cmake.in":"cmake",coffeescript:"coffeescript",coffee:"coffeescript",cson:"coffeescript",iced:"coffeescript",coq:"coq",cos:"cos",cls:"cos",cpp:"cpp",c:"cpp",cc:"cpp",h:"cpp","c++":"cpp","h++":"cpp",hpp:"cpp",crmsh:"crmsh",crm:"crmsh",pcmk:"crmsh",crystal:"crystal",cr:"crystal",cs:"cs",csharp:"cs",csp:"csp",css:"css",d:"d",dart:"dart",delphi:"delphi",dpr:"delphi",dfm:"delphi",pas:"delphi",pascal:"delphi",freepascal:"delphi",lazarus:"delphi",lpr:"delphi",lfm:"delphi",diff:"diff",patch:"diff",django:"django",jinja:"django",dns:"dns",bind:"dns",zone:"dns",dockerfile:"dockerfile",docker:"dockerfile",dos:"dos",bat:"dos",cmd:"dos",dsconfig:"dsconfig",dts:"dts",dust:"dust",dst:"dust",ebnf:"ebnf",elixir:"elixir",elm:"elm",erb:"erb","erlang-repl":"erlang-repl",erlang:"erlang",erl:"erlang",excel:"excel",xlsx:"excel",xls:"excel",fix:"fix",flix:"flix",fortran:"fortran",f90:"fortran",f95:"fortran",fsharp:"fsharp",fs:"fsharp",gams:"gams",gms:"gams",gauss:"gauss",gss:"gauss",gcode:"gcode",nc:"gcode",gherkin:"gherkin",feature:"gherkin",glsl:"glsl",go:"go",golang:"go",golo:"golo",gradle:"gradle",groovy:"groovy",haml:"haml",handlebars:"handlebars",hbs:"handlebars","html.hbs":"handlebars","html.handlebars":"handlebars",haskell:"haskell",hs:"haskell",haxe:"haxe",hx:"haxe",hsp:"hsp",htmlbars:"htmlbars",http:"http",https:"http",hy:"hy",hylang:"hy",inform7:"inform7",i7:"inform7",ini:"ini",toml:"ini",irpf90:"irpf90",java:"java",jsp:"java",javascript:"javascript",js:"javascript",jsx:"javascript","jboss-cli":"jboss-cli","wildfly-cli":"jboss-cli",json:"json","julia-repl":"julia-repl",julia:"julia",kotlin:"kotlin",lasso:"lasso",ls:"livescript",lassoscript:"lasso",ldif:"ldif",leaf:"leaf",less:"less",lisp:"lisp",livecodeserver:"livecodeserver",livescript:"livescript",llvm:"llvm",lsl:"lsl",lua:"lua",makefile:"makefile",mk:"makefile",mak:"makefile",markdown:"markdown",md:"markdown",mkdown:"markdown",mkd:"markdown",mathematica:"mathematica",mma:"mathematica",matlab:"matlab",maxima:"maxima",mel:"mel",mercury:"mercury",m:"mercury",moo:"mercury",mipsasm:"mipsasm",mips:"mipsasm",mizar:"mizar",mojolicious:"mojolicious",monkey:"monkey",moonscript:"moonscript",moon:"moonscript",n1ql:"n1ql",nginx:"nginx",nginxconf:"nginx",nimrod:"nimrod",nim:"nimrod",nix:"nix",nixos:"nix",nsis:"nsis",objectivec:"objectivec",mm:"objectivec",objc:"objectivec","obj-c":"objectivec",ocaml:"ocaml",ml:"sml",openscad:"openscad",scad:"openscad",oxygene:"oxygene",parser3:"parser3",perl:"perl",pl:"perl",pm:"perl",pf:"pf","pf.conf":"pf",php:"php",php3:"php",php4:"php",php5:"php",php6:"php",pony:"pony",powershell:"powershell",ps:"powershell",processing:"processing",profile:"profile",prolog:"prolog",protobuf:"protobuf",puppet:"puppet",pp:"puppet",purebasic:"purebasic",pb:"purebasic",pbi:"purebasic",python:"python",py:"python",gyp:"python",q:"q",k:"q",kdb:"q",qml:"qml",qt:"qml",r:"r",rib:"rib",roboconf:"roboconf",graph:"roboconf",instances:"roboconf",routeros:"routeros",mikrotik:"routeros",rsl:"rsl",ruby:"ruby",rb:"ruby",gemspec:"ruby",podspec:"ruby",thor:"ruby",irb:"ruby",ruleslanguage:"ruleslanguage",rust:"rust",rs:"rust",scala:"scala",scheme:"scheme",scilab:"scilab",sci:"scilab",scss:"scss",shell:"shell",console:"shell",smali:"smali",smalltalk:"smalltalk",st:"smalltalk",sml:"sml",sqf:"sqf",sql:"sql",stan:"stan",stata:"stata",do:"stata",ado:"stata",step21:"step21",p21:"step21",step:"step21",stp:"step21",stylus:"stylus",styl:"stylus",subunit:"subunit",swift:"swift",taggerscript:"taggerscript",tap:"tap",tcl:"tcl",tk:"tcl",tex:"tex",thrift:"thrift",tp:"tp",twig:"twig",craftcms:"twig",typescript:"typescript",ts:"typescript",vala:"vala",vbnet:"vbnet",vb:"vbnet","vbscript-html":"vbscript-html",vbscript:"vbscript",vbs:"vbscript",verilog:"verilog",v:"verilog",sv:"verilog",svh:"verilog",vhdl:"vhdl",vim:"vim",x86asm:"x86asm",xl:"xl",tao:"xl",xml:"xml",html:"xml",xhtml:"xml",rss:"xml",atom:"xml",xjb:"xml",xsd:"xml",xsl:"xml",plist:"xml",xquery:"xquery",xpath:"xquery",xq:"xquery",yaml:"yaml",yml:"yaml",YAML:"yaml",zephir:"zephir",zep:"zephir"}},function(d,h,s){Object.defineProperty(h,"__esModule",{value:!0});var t={F8:119,F9:120,F10:121,F11:122,F12:123,B:66,I:73,H:72,U:85,D:68,M:77,Q:81,O:79,L:76,S:83,Z:90,Y:89,C:67,T:84,R:82,DELETE:8,TAB:9,ENTER:13,ONE:97,TWO:98,THREE:99,FOUR:100,FIVE:101,SIX:102,_ONE:49,_TWO:50,_THREE:51,_FOUR:52,_FIVE:53,_SIX:54};h.keydownListen=function(r){r.shortCut&&r.$el.addEventListener("keydown",function(e){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)if(!e.ctrlKey&&!e.metaKey||e.altKey||e.shiftKey){if((e.ctrlKey||e.metaKey)&&e.altKey&&!e.shiftKey)switch(e.keyCode){case t.S:e.preventDefault(),r.toolbar_left_click("superscript");break;case t.U:e.preventDefault(),r.toolbar_left_click("ul");break;case t.L:e.preventDefault(),r.toolbar_left_click("imagelink");break;case t.C:e.preventDefault(),r.toolbar_left_click("code");break;case t.T:e.preventDefault(),r.toolbar_left_click("table")}else if((e.ctrlKey||e.metaKey)&&e.shiftKey&&!e.altKey)switch(e.keyCode){case t.S:e.preventDefault(),r.toolbar_left_click("subscript");break;case t.D:e.preventDefault(),r.toolbar_left_click("strikethrough");break;case t.L:e.preventDefault(),r.toolbar_left_click("alignleft");break;case t.R:e.preventDefault(),r.toolbar_left_click("alignright");break;case t.C:e.preventDefault(),r.toolbar_left_click("aligncenter")}else if(!e.ctrlKey&&!e.metaKey&&e.shiftKey&&!e.altKey)switch(e.keyCode){case t.TAB:r.$refs.toolbar_left.s_img_link_open||(e.preventDefault(),r.unInsertTab())}}else switch(e.keyCode){case t.B:e.preventDefault(),r.toolbar_left_click("bold");break;case t.I:e.preventDefault(),r.toolbar_left_click("italic");break;case t.H:e.preventDefault(),r.toolbar_left_click("header");break;case t.U:e.preventDefault(),r.toolbar_left_click("underline");break;case t.D:e.preventDefault(),r.toolbar_left_click("removeLine");break;case t.M:e.preventDefault(),r.toolbar_left_click("mark");break;case t.Q:e.preventDefault(),r.toolbar_left_click("quote");break;case t.O:e.preventDefault(),r.toolbar_left_click("ol");break;case t.L:e.preventDefault(),r.toolbar_left_click("link");break;case t.S:e.preventDefault(),r.toolbar_left_click("save");break;case t.Z:e.preventDefault(),r.toolbar_left_click("undo");break;case t.Y:e.preventDefault(),r.toolbar_left_click("redo");break;case t.DELETE:e.preventDefault(),r.toolbar_left_click("trash");break;case t.ONE:e.preventDefault(),r.toolbar_left_click("header1");break;case t.TWO:e.preventDefault(),r.toolbar_left_click("header2");break;case t.THREE:e.preventDefault(),r.toolbar_left_click("header3");break;case t.FOUR:e.preventDefault(),r.toolbar_left_click("header4");break;case t.FIVE:e.preventDefault(),r.toolbar_left_click("header5");break;case t.SIX:e.preventDefault(),r.toolbar_left_click("header6");break;case t._ONE:e.preventDefault(),r.toolbar_left_click("header1");break;case t._TWO:e.preventDefault(),r.toolbar_left_click("header2");break;case t._THREE:e.preventDefault(),r.toolbar_left_click("header3");break;case t._FOUR:e.preventDefault(),r.toolbar_left_click("header4");break;case t._FIVE:e.preventDefault(),r.toolbar_left_click("header5");break;case t._SIX:e.preventDefault(),r.toolbar_left_click("header6")}else switch(e.keyCode){case t.F8:r.toolbars.navigation&&(e.preventDefault(),r.toolbar_right_click("navigation"));break;case t.F9:r.toolbars.preview&&(e.preventDefault(),r.toolbar_right_click("preview"));break;case t.F10:r.toolbars.fullscreen&&(e.preventDefault(),r.toolbar_right_click("fullscreen"));break;case t.F11:r.toolbars.readmodel&&(e.preventDefault(),r.toolbar_right_click("read"));break;case t.F12:r.toolbars.subfield&&(e.preventDefault(),r.toolbar_right_click("subfield"));break;case t.TAB:r.$refs.toolbar_left.s_img_link_open||(e.preventDefault(),r.insertTab());break;case t.ENTER:r.$refs.toolbar_left.s_img_link_open?(e.preventDefault(),r.$refs.toolbar_left.$imgLinkAdd()):r.insertEnter(e)}})}},function(d,h,s){function t(n){i&&r(n.tokens,["inline","html_block"])}function r(n,a){for(var u=void 0,c=void 0,o=0;o<n.length;o++)a.indexOf(n[o].type)!==-1&&(u=n[o].content,c=n[o].children,n[o].content=i.process(u),c&&c.length&&u!==n[o].content&&r(c,["html_inline"]))}Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(n,a){n.options.html&&(i=new e.FilterXSS(a),n.core.ruler.push("mavoneditor_sanitizer",t))};var e=s(209),i=void 0},function(d,h,s){function t($){return $&&$.__esModule?$:{default:$}}function r(){var $=new p(l),E=$.renderer.rules.link_open||function(q,O,P,D,z){return z.renderToken(q,O,P)};return $.renderer.rules.link_open=function(q,O,P,D,z){var F=q[O].attrIndex("href");if(q[O].attrs[F][1].startsWith("#"))return E(q,O,P,D,z);var R=q[O].attrIndex("target");return R<0?q[O].attrPush(["target","_blank"]):q[O].attrs[R][1]="_blank",E(q,O,P,D,z)},$.use(A,M).use(_).use(b).use(f).use(C).use(C,"hljs-left").use(C,"hljs-center").use(C,"hljs-right").use(m).use(g).use(w).use(v).use(x).use(C).use(L).use(T).use(k).use(y),$}Object.defineProperty(h,"__esModule",{value:!0});var e=s(18),i=t(e);h.initMarkdown=r;var n=s(71),a=t(n),u=s(38),c=s(73),o=t(c),l={html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"lang-",linkify:!1,typographer:!0,quotes:"“”‘’"},p=s(137),_=s(121),f=s(133),b=s(134),m=s(120),g=s(118),w=s(127),v=s(130),x=s(132),k=s(135),C=s(119),y=s(136),A=s(128),T=s(131),L=s(129),j={},S=[],M={hljs:"auto",highlighted:!0,langCheck:function($){$&&a.default[$]&&!j[$]&&(j[$]=1,S.push(a.default[$]))}};h.default={data:function(){return{markdownIt:null}},created:function(){this.markdownIt=r(),this.html?(0,i.default)(this.xssOptions)==="object"&&this.markdownIt.use(o.default,this.xssOptions):(this.markdownIt.set({html:!1}),this.xssOptions=!1)},mounted:function(){M.highlighted=this.ishljs},methods:{$render:function($,E){var q=this;j={},S=[];var O=this.markdownIt.render($);this.ishljs&&S.length>0&&q.$_render($,E,O),E(O)},$_render:function($,E,q){for(var O=this,P=0,D=0;D<S.length;D++){var z=O.p_external_link.hljs_lang(S[D]);(0,u.loadScript)(z,function(){(P+=1)===S.length&&(q=this.markdownIt.render($),E(q))})}}},watch:{ishljs:function($){M.highlighted=$}}}},function(d,h,s){function t(o){o.d_history_index>0&&o.d_history_index--,o.$nextTick(function(){var l=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=l,o.getTextareaDom().selectionEnd=l}),o.getTextareaDom().focus()}function r(o){o.d_history_index<o.d_history.length-1&&o.d_history_index++,o.$nextTick(function(){var l=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=l,o.getTextareaDom().selectionEnd=l}),o.getTextareaDom().focus()}function e(o){o.d_value="",o.getTextareaDom().focus()}function i(o){o.save(o.d_value,o.d_render)}function n(o){o.insertOl()}function a(o){o.insertUl()}function u(o){o.removeLine()}function c(o){o.insertCodeBlock()}Object.defineProperty(h,"__esModule",{value:!0}),h.toolbar_left_addlink=function(o,l,p,_){var f={prefix:o==="link"?"["+l+"](":"!["+l+"](",subfix:")",str:p};_.insertText(_.getTextareaDom(),f)},h.toolbar_left_click=function(o,l){var p={bold:{prefix:"**",subfix:"**",str:l.d_words.tl_bold},italic:{prefix:"*",subfix:"*",str:l.d_words.tl_italic},header:{prefix:"# ",subfix:"",str:l.d_words.tl_header},header1:{prefix:"# ",subfix:"",str:l.d_words.tl_header_one},header2:{prefix:"## ",subfix:"",str:l.d_words.tl_header_two},header3:{prefix:"### ",subfix:"",str:l.d_words.tl_header_three},header4:{prefix:"#### ",subfix:"",str:l.d_words.tl_header_four},header5:{prefix:"##### ",subfix:"",str:l.d_words.tl_header_five},header6:{prefix:"###### ",subfix:"",str:l.d_words.tl_header_six},underline:{prefix:"++",subfix:"++",str:l.d_words.tl_underline},strikethrough:{prefix:"~~",subfix:"~~",str:l.d_words.tl_strikethrough},mark:{prefix:"==",subfix:"==",str:l.d_words.tl_mark},superscript:{prefix:"^",subfix:"^",str:l.d_words.tl_superscript},subscript:{prefix:"~",subfix:"~",str:l.d_words.tl_subscript},quote:{prefix:"> ",subfix:"",str:l.d_words.tl_quote},link:{prefix:"[](",subfix:")",str:l.d_words.tl_link},imagelink:{prefix:"![](",subfix:")",str:l.d_words.tl_image},table:{prefix:"",subfix:"",str:`|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
`},aligncenter:{prefix:`::: hljs-center

`,subfix:`

:::
`,str:l.d_words.tl_aligncenter},alignright:{prefix:`::: hljs-right

`,subfix:`

:::
`,str:l.d_words.tl_alignright},alignleft:{prefix:`::: hljs-left

`,subfix:`

:::
`,str:l.d_words.tl_alignleft}};p.hasOwnProperty(o)&&l.insertText(l.getTextareaDom(),p[o]);var _={undo:t,redo:r,trash:e,save:i,ol:n,ul:a,removeLine:u,code:c};_.hasOwnProperty(o)&&_[o](l)}},function(d,h,s){function t(c){c.s_html_code=!c.s_html_code,c.htmlcode&&c.htmlcode(c.s_html_code,c.d_value)}function r(c){c.s_help=!c.s_help,c.helptoggle&&c.helptoggle(c.s_help,c.d_value)}function e(c){var o=c.$refs.vReadModel;o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}function i(c){c.s_preview_switch=!c.s_preview_switch,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value)}function n(c){c.s_fullScreen=!c.s_fullScreen,c.fullscreen&&c.fullscreen(c.s_fullScreen,c.d_value)}function a(c){c.s_subfield=!c.s_subfield,c.s_preview_switch=c.s_subfield,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value),c.subfieldtoggle&&c.subfieldtoggle(c.s_subfield,c.d_value)}function u(c){c.s_navigation=!c.s_navigation,c.s_navigation&&(c.s_preview_switch=!0),c.navigationtoggle&&c.navigationtoggle(c.s_navigation,c.d_value),c.s_navigation&&c.getNavigation(c,!1)}Object.defineProperty(h,"__esModule",{value:!0}),h.toolbar_right_click=function(c,o){var l={help:r,html:t,read:e,preview:i,fullscreen:n,navigation:u,subfield:a};l.hasOwnProperty(c)&&l[c](o)}},function(d,h,s){function t(a,u){for(var c in u){var o=(0,n.default)(u[c]);!a[c]||o!=="Object"&&o!=="object"?a[c]=u[c]:a[c]=t(a[c],u[c])}return a}function r(){var a=window.location.search,u={},c=/[?&][^?&]+=[^?&]+/g,o=a.match(c);return o&&o.forEach(function(l){var p=l.substring(1).split("="),_=decodeURIComponent(p[0]),f=decodeURIComponent(p[1]);u[_]=f}),u}function e(a){a&&(a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation())}Object.defineProperty(h,"__esModule",{value:!0});var i=s(18),n=function(a){return a&&a.__esModule?a:{default:a}}(i);h.p_ObjectCopy_DEEP=t,h.p_urlParse=r,h.stopEvent=e},function(d,h,s){d.exports={default:s(80),__esModule:!0}},function(d,h,s){d.exports={default:s(81),__esModule:!0}},function(d,h,s){s(103),s(101),s(104),s(105),d.exports=s(10).Symbol},function(d,h,s){s(102),s(106),d.exports=s(30).f("iterator")},function(d,h){d.exports=function(s){if(typeof s!="function")throw TypeError(s+" is not a function!");return s}},function(d,h){d.exports=function(){}},function(d,h,s){var t=s(6),r=s(99),e=s(98);d.exports=function(i){return function(n,a,u){var c,o=t(n),l=r(o.length),p=e(u,l);if(i&&a!=a){for(;l>p;)if((c=o[p++])!=c)return!0}else for(;l>p;p++)if((i||p in o)&&o[p]===a)return i||p||0;return!i&&-1}}},function(d,h,s){var t=s(82);d.exports=function(r,e,i){if(t(r),e===void 0)return r;switch(i){case 1:return function(n){return r.call(e,n)};case 2:return function(n,a){return r.call(e,n,a)};case 3:return function(n,a,u){return r.call(e,n,a,u)}}return function(){return r.apply(e,arguments)}}},function(d,h,s){var t=s(22),r=s(46),e=s(23);d.exports=function(i){var n=t(i),a=r.f;if(a)for(var u,c=a(i),o=e.f,l=0;c.length>l;)o.call(i,u=c[l++])&&n.push(u);return n}},function(d,h,s){var t=s(1).document;d.exports=t&&t.documentElement},function(d,h,s){var t=s(39);d.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return t(r)=="String"?r.split(""):Object(r)}},function(d,h,s){var t=s(39);d.exports=Array.isArray||function(r){return t(r)=="Array"}},function(d,h,s){var t=s(44),r=s(13),e=s(24),i={};s(4)(i,s(7)("iterator"),function(){return this}),d.exports=function(n,a,u){n.prototype=t(i,{next:r(1,u)}),e(n,a+" Iterator")}},function(d,h){d.exports=function(s,t){return{value:t,done:!!s}}},function(d,h,s){var t=s(14)("meta"),r=s(8),e=s(2),i=s(5).f,n=0,a=Object.isExtensible||function(){return!0},u=!s(11)(function(){return a(Object.preventExtensions({}))}),c=function(f){i(f,t,{value:{i:"O"+ ++n,w:{}}})},o=function(f,b){if(!r(f))return typeof f=="symbol"?f:(typeof f=="string"?"S":"P")+f;if(!e(f,t)){if(!a(f))return"F";if(!b)return"E";c(f)}return f[t].i},l=function(f,b){if(!e(f,t)){if(!a(f))return!0;if(!b)return!1;c(f)}return f[t].w},p=function(f){return u&&_.NEED&&a(f)&&!e(f,t)&&c(f),f},_=d.exports={KEY:t,NEED:!1,fastKey:o,getWeak:l,onFreeze:p}},function(d,h,s){var t=s(5),r=s(9),e=s(22);d.exports=s(3)?Object.defineProperties:function(i,n){r(i);for(var a,u=e(n),c=u.length,o=0;c>o;)t.f(i,a=u[o++],n[a]);return i}},function(d,h,s){var t=s(23),r=s(13),e=s(6),i=s(28),n=s(2),a=s(42),u=Object.getOwnPropertyDescriptor;h.f=s(3)?u:function(c,o){if(c=e(c),o=i(o,!0),a)try{return u(c,o)}catch{}if(n(c,o))return r(!t.f.call(c,o),c[o])}},function(d,h,s){var t=s(6),r=s(45).f,e={}.toString,i=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],n=function(a){try{return r(a)}catch{return i.slice()}};d.exports.f=function(a){return i&&e.call(a)=="[object Window]"?n(a):r(t(a))}},function(d,h,s){var t=s(2),r=s(49),e=s(25)("IE_PROTO"),i=Object.prototype;d.exports=Object.getPrototypeOf||function(n){return n=r(n),t(n,e)?n[e]:typeof n.constructor=="function"&&n instanceof n.constructor?n.constructor.prototype:n instanceof Object?i:null}},function(d,h,s){var t=s(27),r=s(19);d.exports=function(e){return function(i,n){var a,u,c=String(r(i)),o=t(n),l=c.length;return o<0||o>=l?e?"":void 0:(a=c.charCodeAt(o),a<55296||a>56319||o+1===l||(u=c.charCodeAt(o+1))<56320||u>57343?e?c.charAt(o):a:e?c.slice(o,o+2):u-56320+(a-55296<<10)+65536)}}},function(d,h,s){var t=s(27),r=Math.max,e=Math.min;d.exports=function(i,n){return i=t(i),i<0?r(i+n,0):e(i,n)}},function(d,h,s){var t=s(27),r=Math.min;d.exports=function(e){return e>0?r(t(e),9007199254740991):0}},function(d,h,s){var t=s(83),r=s(91),e=s(21),i=s(6);d.exports=s(43)(Array,"Array",function(n,a){this._t=i(n),this._i=0,this._k=a},function(){var n=this._t,a=this._k,u=this._i++;return!n||u>=n.length?(this._t=void 0,r(1)):a=="keys"?r(0,u):a=="values"?r(0,n[u]):r(0,[u,n[u]])},"values"),e.Arguments=e.Array,t("keys"),t("values"),t("entries")},function(d,h){},function(d,h,s){var t=s(97)(!0);s(43)(String,"String",function(r){this._t=String(r),this._i=0},function(){var r,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(r=t(e,i),this._i+=r.length,{value:r,done:!1})})},function(d,h,s){var t=s(1),r=s(2),e=s(3),i=s(41),n=s(48),a=s(92).KEY,u=s(11),c=s(26),o=s(24),l=s(14),p=s(7),_=s(30),f=s(29),b=s(86),m=s(89),g=s(9),w=s(8),v=s(49),x=s(6),k=s(28),C=s(13),y=s(44),A=s(95),T=s(94),L=s(46),j=s(5),S=s(22),M=T.f,$=j.f,E=A.f,q=t.Symbol,O=t.JSON,P=O&&O.stringify,D=p("_hidden"),z=p("toPrimitive"),F={}.propertyIsEnumerable,R=c("symbol-registry"),B=c("symbols"),U=c("op-symbols"),H=Object.prototype,G=typeof q=="function"&&!!L.f,V=t.QObject,K=!V||!V.prototype||!V.prototype.findChild,Q=e&&u(function(){return y($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a!=7})?function(I,N,W){var X=M(H,N);X&&delete H[N],$(I,N,W),X&&I!==H&&$(H,N,X)}:$,J=function(I){var N=B[I]=y(q.prototype);return N._k=I,N},Y=G&&typeof q.iterator=="symbol"?function(I){return typeof I=="symbol"}:function(I){return I instanceof q},Z=function(I,N,W){return I===H&&Z(U,N,W),g(I),N=k(N,!0),g(W),r(B,N)?(W.enumerable?(r(I,D)&&I[D][N]&&(I[D][N]=!1),W=y(W,{enumerable:C(0,!1)})):(r(I,D)||$(I,D,C(1,{})),I[D][N]=!0),Q(I,N,W)):$(I,N,W)},nt=function(I,N){g(I);for(var W,X=b(N=x(N)),tt=0,ot=X.length;ot>tt;)Z(I,W=X[tt++],N[W]);return I},et=function(I,N){return N===void 0?y(I):nt(y(I),N)},rt=function(I){var N=F.call(this,I=k(I,!0));return!(this===H&&r(B,I)&&!r(U,I))&&(!(N||!r(this,I)||!r(B,I)||r(this,D)&&this[D][I])||N)},at=function(I,N){if(I=x(I),N=k(N,!0),I!==H||!r(B,N)||r(U,N)){var W=M(I,N);return!W||!r(B,N)||r(I,D)&&I[D][N]||(W.enumerable=!0),W}},st=function(I){for(var N,W=E(x(I)),X=[],tt=0;W.length>tt;)r(B,N=W[tt++])||N==D||N==a||X.push(N);return X},lt=function(I){for(var N,W=I===H,X=E(W?U:x(I)),tt=[],ot=0;X.length>ot;)!r(B,N=X[ot++])||W&&!r(H,N)||tt.push(B[N]);return tt};G||(q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor!");var I=l(arguments.length>0?arguments[0]:void 0),N=function(W){this===H&&N.call(U,W),r(this,D)&&r(this[D],I)&&(this[D][I]=!1),Q(this,I,C(1,W))};return e&&K&&Q(H,I,{configurable:!0,set:N}),J(I)},n(q.prototype,"toString",function(){return this._k}),T.f=at,j.f=Z,s(45).f=A.f=st,s(23).f=rt,L.f=lt,e&&!s(12)&&n(H,"propertyIsEnumerable",rt,!0),_.f=function(I){return J(p(I))}),i(i.G+i.W+i.F*!G,{Symbol:q});for(var ct="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ut=0;ct.length>ut;)p(ct[ut++]);for(var pt=S(p.store),dt=0;pt.length>dt;)f(pt[dt++]);i(i.S+i.F*!G,"Symbol",{for:function(I){return r(R,I+="")?R[I]:R[I]=q(I)},keyFor:function(I){if(!Y(I))throw TypeError(I+" is not a symbol!");for(var N in R)if(R[N]===I)return N},useSetter:function(){K=!0},useSimple:function(){K=!1}}),i(i.S+i.F*!G,"Object",{create:et,defineProperty:Z,defineProperties:nt,getOwnPropertyDescriptor:at,getOwnPropertyNames:st,getOwnPropertySymbols:lt});var ht=u(function(){L.f(1)});i(i.S+i.F*ht,"Object",{getOwnPropertySymbols:function(I){return L.f(v(I))}}),O&&i(i.S+i.F*(!G||u(function(){var I=q();return P([I])!="[null]"||P({a:I})!="{}"||P(Object(I))!="{}"})),"JSON",{stringify:function(I){for(var N,W,X=[I],tt=1;arguments.length>tt;)X.push(arguments[tt++]);if(W=N=X[1],(w(N)||I!==void 0)&&!Y(I))return m(N)||(N=function(ot,it){if(typeof W=="function"&&(it=W.call(this,ot,it)),!Y(it))return it}),X[1]=N,P.apply(O,X)}}),q.prototype[z]||s(4)(q.prototype,z,q.prototype.valueOf),o(q,"Symbol"),o(Math,"Math",!0),o(t.JSON,"JSON",!0)},function(d,h,s){s(29)("asyncIterator")},function(d,h,s){s(29)("observable")},function(d,h,s){s(100);for(var t=s(1),r=s(4),e=s(21),i=s(7)("toStringTag"),n="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<n.length;a++){var u=n[a],c=t[u],o=c&&c.prototype;o&&!o[i]&&r(o,i,u),e[u]=e.Array}},function(d,h,s){h=d.exports=s(15)(!1),h.push([d.i,`
.auto-textarea-wrapper {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  line-height: normal;
}
.auto-textarea-wrapper .auto-textarea-block {
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word !important;
  visibility: hidden;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
}
.auto-textarea-wrapper .auto-textarea-input {
  font-family: Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  color: #2c3e50;
}
.auto-textarea-wrapper .auto-textarea-input.no-border {
  outline: 0 none;
  border: none !important;
}
.auto-textarea-wrapper .auto-textarea-input.no-resize {
  resize: none;
}
`,""])},function(d,h,s){h=d.exports=s(15)(!1),h.push([d.i,`
.op-icon.dropdown-wrapper.dropdown[data-v-548e2160] {
  position: relative;
}
.op-icon.dropdown-wrapper.dropdown[type=button][data-v-548e2160] {
  -webkit-appearance: unset;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown[data-v-548e2160] {
  position: absolute;
  display: block;
  background: #fff;
  top: 32px;
  left: -45px;
  min-width: 130px;
  z-index: 1600;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-548e2160]:first-child {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-548e2160]:last-child {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.op-header[data-v-548e2160] {
  left: -30px;
  min-width: 90px;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter-active[data-v-548e2160],
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-548e2160] {
  opacity: 1;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter[data-v-548e2160],
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-548e2160] {
  opacity: 0;
}
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition[data-v-548e2160],
.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition .dropdown-item[data-v-548e2160] {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-548e2160] {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #606266;
  position: relative;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-548e2160]:hover {
  color: #303133;
  background-color: #e9e9eb;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-item input[data-v-548e2160] {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images[data-v-548e2160] {
  box-sizing: border-box;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-548e2160] {
  position: absolute;
  top: -1px;
  right: 5px;
  font-size: 14px;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-548e2160]:hover {
  color: #f56c6c;
  background-color: transparent;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images span[data-v-548e2160] {
  display: inline-block;
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images:hover .image-show[data-v-548e2160] {
  display: block !important;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show[data-v-548e2160] {
  display: none;
  position: absolute;
  left: -128px;
  top: 0;
  width: 120px;
  height: 90px;
  object-fit: contain;
  border: 1px solid #f2f6fc;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show.transition[data-v-548e2160] {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.op-icon.dropdown-wrapper.dropdown .dropdown-images.transition[data-v-548e2160] {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.add-image-link-wrapper[data-v-548e2160] {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1600;
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
}
.add-image-link-wrapper.fade-enter-active[data-v-548e2160],
.add-image-link-wrapper.fade-leave-active[data-v-548e2160] {
  opacity: 1;
}
.add-image-link-wrapper.fade-enter[data-v-548e2160],
.add-image-link-wrapper.fade-leave-active[data-v-548e2160] {
  opacity: 0;
}
.add-image-link-wrapper .add-image-link[data-v-548e2160] {
  position: fixed;
  box-sizing: border-box;
  text-align: center;
  width: 24%;
  left: 38%;
  height: auto;
  padding: 40px;
  top: 25%;
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
  z-index: 3;
  background: #fff;
  border-radius: 2px;
}
@media only screen and (max-width: 1500px) {
.add-image-link-wrapper .add-image-link[data-v-548e2160] {
    width: 34%;
    left: 33%;
}
}
@media only screen and (max-width: 1000px) {
.add-image-link-wrapper .add-image-link[data-v-548e2160] {
    width: 50%;
    left: 25%;
}
}
@media only screen and (max-width: 600px) {
.add-image-link-wrapper .add-image-link[data-v-548e2160] {
    width: 80%;
    left: 10%;
}
}
.add-image-link-wrapper .add-image-link i[data-v-548e2160] {
  font-size: 24px;
  position: absolute;
  right: 8px;
  top: 6px;
  color: rgba(0,0,0,0.7);
  cursor: pointer;
}
.add-image-link-wrapper .add-image-link .title[data-v-548e2160] {
  font-size: 20px;
  margin-bottom: 30px;
  margin-top: 10px;
  font-weight: 500 !important;
}
.add-image-link-wrapper .add-image-link .input-wrapper[data-v-548e2160] {
  margin-top: 10px;
  width: 80%;
  border: 1px solid #eeece8;
  text-align: left;
  margin-left: 10%;
  height: 35px;
}
.add-image-link-wrapper .add-image-link .input-wrapper input[data-v-548e2160] {
  height: 32px;
  line-height: 32px;
  font-size: 15px;
  width: 90%;
  margin-left: 8px;
  border: none;
  outline: none;
}
.add-image-link-wrapper .add-image-link .op-btn[data-v-548e2160] {
  width: 100px;
  height: 35px;
  display: inline-block;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 35px;
  opacity: 0.9;
  border-radius: 2px;
  letter-spacing: 1px;
  font-size: 15px;
}
.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-548e2160] {
  background: #2185d0;
  color: #fff;
  margin-left: 5%;
}
.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-548e2160]:hover {
  opacity: 1;
}
.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-548e2160] {
  border: 1px solid #bcbcbc;
  color: #bcbcbc;
}
.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-548e2160]:hover {
  color: #000;
}
`,""])},function(d,h,s){h=d.exports=s(15)(!1),h.push([d.i,`
textarea:disabled {
  background-color: #fff;
}
.v-note-wrapper {
  position: relative;
  min-width: 300px;
  min-height: 300px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: #fff;
  z-index: 1500;
  text-align: left;
  border: 1px solid #f2f6fc;
  border-radius: 4px;
}
.v-note-wrapper.fullscreen {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 0;
  height: auto;
  z-index: 1501;
}
.v-note-wrapper .v-note-op {
  padding: 1px;
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  white-space: pre-line;
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  min-height: 40px;
  -webkit-user-select: none;
      -ms-user-select: none;
          user-select: none;
  border-bottom: 1px solid #f2f6fc;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
  z-index: 1;
}
.v-note-wrapper .v-note-op .v-left-item,
.v-note-wrapper .v-note-op .v-right-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  min-height: 40px;
  box-sizing: border-box;
}
.v-note-wrapper .v-note-op .v-left-item .op-icon-divider,
.v-note-wrapper .v-note-op .v-right-item .op-icon-divider {
  height: 40px;
  border-left: 1px solid #e5e5e5;
  margin: 0 6px 0 4px;
}
.v-note-wrapper .v-note-op .v-left-item .op-icon,
.v-note-wrapper .v-note-op .v-right-item .op-icon {
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  height: 28px;
  width: 28px;
  margin: 6px 0 5px 0px;
  font-size: 14px;
  padding: 4.5px 6px 5px 3.5px;
  color: #757575;
  border-radius: 5px;
  text-align: center;
  background: none;
  border: none;
  outline: none;
  line-height: 1;
}
.v-note-wrapper .v-note-op .v-left-item .op-icon.dropdown-wrapper,
.v-note-wrapper .v-note-op .v-right-item .op-icon.dropdown-wrapper {
  line-height: 18px;
}
.v-note-wrapper .v-note-op .v-left-item .op-icon.selected,
.v-note-wrapper .v-note-op .v-right-item .op-icon.selected {
  color: rgba(0,0,0,0.8);
  background: #eaeaea;
}
.v-note-wrapper .v-note-op .v-left-item .op-icon:hover,
.v-note-wrapper .v-note-op .v-right-item .op-icon:hover {
  color: rgba(0,0,0,0.8);
  background: #e9e9eb;
}
.v-note-wrapper .v-note-op .v-left-item.transition .op-icon,
.v-note-wrapper .v-note-op .v-right-item.transition .op-icon {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.v-note-wrapper .v-note-op .v-right-item {
  text-align: right;
  padding-right: 6px;
  max-width: 30%;
}
.v-note-wrapper .v-note-op .v-left-item {
  text-align: left;
  padding-left: 6px;
}
.v-note-wrapper .v-note-panel {
  position: relative;
  border-top: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  width: 50%;
  padding: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  cursor: text;
  border-bottom-left-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar {
  width: 6px;
  background-color: #e5e5e5;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb {
  background-color: #b7b7b7;
  border-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:active {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 0px #808080 inset;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style-border-radius::-webkit-scrollbar {
  border-bottom-right-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.transition {
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-edit {
  width: 100%;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  overflow-y: auto;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-show {
  width: 0;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 0;
      -ms-flex: 0 0 0px;
          flex: 0 0 0;
  display: none;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-div {
  width: 100%;
  padding: 20px 25px;
  box-sizing: border-box;
  outline: 0 none;
  border: none !important;
  color: #2c3e50;
  font-size: 16px;
}
.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper {
  width: 100%;
  padding: 8px 25px 15px 25px;
}
.v-note-wrapper .v-note-panel .v-note-show {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
      -ms-flex: 0 0 50%;
          flex: 0 0 50%;
  width: 50%;
  overflow-y: auto;
  padding: 0 0;
  -webkit-transition: all 0.2s linear 0s;
  transition: all 0.2s linear 0s;
}
.v-note-wrapper .v-note-panel .v-note-show.single-show {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
          flex: 0 0 100%;
  width: 100%;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html {
  width: 100%;
  height: 100%;
  padding: 8px 25px 15px 25px;
  overflow-y: auto;
  box-sizing: border-box;
  overflow-x: hidden;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar {
  width: 6px;
  background-color: #e5e5e5;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb {
  background-color: #b7b7b7;
  border-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:hover,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:active,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:active {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-track,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 0px #808080 inset;
}
.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style-border-radius::-webkit-scrollbar,
.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style-border-radius::-webkit-scrollbar {
  border-bottom-right-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  width: 250px;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: rgba(255,255,255,0.98);
  border-left: 1px solid #f2f6fc;
  border-right: 1px solid #f2f6fc;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition {
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
}
@media only screen and (max-width: 768px) {
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper {
    width: 50%;
}
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter-active,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active {
  height: 100%;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active {
  height: 0;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #f2f6fc;
  -webkit-box-flex: 0;
  -webkit-flex: none;
      -ms-flex: none;
          flex: none;
  line-height: 50px;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 12px 0 18px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close {
  float: right;
  color: #606266;
  font-size: 18px;
  cursor: pointer;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close:hover {
  color: #303133;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content {
  overflow-y: auto;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding: 8px 0;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar {
  width: 6px;
  background-color: #e5e5e5;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb {
  background-color: #b7b7b7;
  border-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:active {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 0px #808080 inset;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style-border-radius::-webkit-scrollbar {
  border-bottom-right-radius: 4px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6 {
  margin: 2px 0;
  font-weight: 500;
  font-size: 17px;
  color: #2185d0;
  cursor: pointer;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 12px;
  border-bottom: none;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1:hover,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2:hover,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3:hover,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4:hover,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5:hover,
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6:hover {
  color: #483d8b;
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2 {
  padding-left: 27px;
  font-size: 17px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3 {
  padding-left: 42px;
  font-size: 17px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4 {
  padding-left: 58px;
  font-size: 15px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5 {
  padding-left: 72px;
  font-size: 15px;
}
.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6 {
  padding-left: 87px;
  font-size: 15px;
}
.v-note-wrapper .v-note-read-model {
  position: relative;
  display: none;
  width: 100%;
  height: 100%;
  background: #fbfbfb;
  padding: 30px 8% 50px 8%;
  overflow-y: auto;
  box-sizing: border-box;
}
.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar {
  width: 6px;
  background-color: #e5e5e5;
}
.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb {
  background-color: #b7b7b7;
  border-radius: 4px;
}
.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:active {
  background-color: #a1a1a1;
}
.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 0px #808080 inset;
}
.v-note-wrapper .v-note-read-model.scroll-style-border-radius::-webkit-scrollbar {
  border-bottom-right-radius: 4px;
}
.v-note-wrapper .v-note-read-model.show {
  display: block;
}
.v-note-wrapper.shadow {
  border: none;
}
.v-note-help-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1600;
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
}
.v-note-help-wrapper.fade-enter-active,
.v-note-help-wrapper.fade-leave-active {
  opacity: 1;
}
.v-note-help-wrapper.fade-enter,
.v-note-help-wrapper.fade-leave-active {
  opacity: 0;
}
.v-note-help-wrapper .v-note-help-content {
  position: relative;
  width: 60%;
  max-width: 800px;
  margin: 30px auto;
  height: 90%;
  min-width: 320px;
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
  z-index: 3;
  border: 1px solid #f2f6fc;
}
.v-note-help-wrapper .v-note-help-content.shadow {
  border: none;
  box-shadow: 0 0px 5px rgba(0,0,0,0.157), 0 0px 5px rgba(0,0,0,0.227);
}
.v-note-help-wrapper .v-note-help-content i {
  font-size: 28px;
  position: absolute;
  right: 15px;
  top: 8px;
  color: rgba(0,0,0,0.7);
  cursor: pointer;
}
.v-note-help-wrapper .v-note-help-content i:hover {
  color: #000;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show {
  width: 100%;
  height: 100%;
  font-size: 18px;
  background: #fbfbfb;
  overflow-y: auto;
  padding: 2% 6%;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar {
  width: 6px;
  background-color: #e5e5e5;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb {
  background-color: #b7b7b7;
  border-radius: 4px;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:hover {
  background-color: #a1a1a1;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:active {
  background-color: #a1a1a1;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-track {
  -webkit-box-shadow: 0 0 0px #808080 inset;
}
.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style-border-radius::-webkit-scrollbar {
  border-bottom-right-radius: 4px;
}
.v-note-img-wrapper {
  position: fixed;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  z-index: 1600;
  -webkit-transition: all 0.1s linear 0s;
  transition: all 0.1s linear 0s;
}
.v-note-img-wrapper.fade-enter-active,
.v-note-img-wrapper.fade-leave-active {
  opacity: 1;
}
.v-note-img-wrapper.fade-enter,
.v-note-img-wrapper.fade-leave-active {
  opacity: 0;
}
.v-note-img-wrapper img {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
          flex: 0 0 auto;
  z-index: 3;
}
.v-note-img-wrapper i {
  font-size: 28px;
  position: absolute;
  right: 15px;
  top: 8px;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
}
.v-note-img-wrapper i:hover {
  color: #fff;
}
`,""])},function(d,h,s){h=d.exports=s(15)(!1),h.push([d.i,`
.auto-textarea-wrapper[data-v-7a63e4b3] {
    height: 100%;
}
`,""])},function(d,h,s){function t(a){return a==null}function r(a){var u={};for(var c in a)u[c]=a[c];return u}function e(a){a=r(a||{}),a.whiteList=a.whiteList||i.whiteList,a.onAttr=a.onAttr||i.onAttr,a.onIgnoreAttr=a.onIgnoreAttr||i.onIgnoreAttr,a.safeAttrValue=a.safeAttrValue||i.safeAttrValue,this.options=a}var i=s(50),n=s(112);s(51),e.prototype.process=function(a){if(a=a||"",!(a=a.toString()))return"";var u=this,c=u.options,o=c.whiteList,l=c.onAttr,p=c.onIgnoreAttr,_=c.safeAttrValue;return n(a,function(f,b,m,g,w){var v=o[m],x=!1;if(v===!0?x=v:typeof v=="function"?x=v(g):v instanceof RegExp&&(x=v.test(g)),x!==!0&&(x=!1),g=_(m,g)){var k={position:b,sourcePosition:f,source:w,isWhite:x};if(x){var C=l(m,g,k);return t(C)?m+":"+g:C}var C=p(m,g,k);return t(C)?void 0:C}})},d.exports=e},function(d,h,s){function t(e,i){function n(){if(!u){var f=r.trim(e.slice(c,o)),b=f.indexOf(":");if(b!==-1){var m=r.trim(f.slice(0,b)),g=r.trim(f.slice(b+1));if(m){var w=i(c,l.length,m,g,f);w&&(l+=w+"; ")}}}c=o+1}e=r.trimRight(e),e[e.length-1]!==";"&&(e+=";");for(var a=e.length,u=!1,c=0,o=0,l="";o<a;o++){var p=e[o];if(p==="/"&&e[o+1]==="*"){var _=e.indexOf("*/",o+2);if(_===-1)break;o=_+1,c=o+1,u=!1}else p==="("?u=!0:p===")"?u=!1:p===";"?u||n():p===`
`&&n()}return r.trim(l)}var r=s(51);d.exports=t},function(d,h){d.exports={Aacute:"Á",aacute:"á",Abreve:"Ă",abreve:"ă",ac:"∾",acd:"∿",acE:"∾̳",Acirc:"Â",acirc:"â",acute:"´",Acy:"А",acy:"а",AElig:"Æ",aelig:"æ",af:"⁡",Afr:"𝔄",afr:"𝔞",Agrave:"À",agrave:"à",alefsym:"ℵ",aleph:"ℵ",Alpha:"Α",alpha:"α",Amacr:"Ā",amacr:"ā",amalg:"⨿",amp:"&",AMP:"&",andand:"⩕",And:"⩓",and:"∧",andd:"⩜",andslope:"⩘",andv:"⩚",ang:"∠",ange:"⦤",angle:"∠",angmsdaa:"⦨",angmsdab:"⦩",angmsdac:"⦪",angmsdad:"⦫",angmsdae:"⦬",angmsdaf:"⦭",angmsdag:"⦮",angmsdah:"⦯",angmsd:"∡",angrt:"∟",angrtvb:"⊾",angrtvbd:"⦝",angsph:"∢",angst:"Å",angzarr:"⍼",Aogon:"Ą",aogon:"ą",Aopf:"𝔸",aopf:"𝕒",apacir:"⩯",ap:"≈",apE:"⩰",ape:"≊",apid:"≋",apos:"'",ApplyFunction:"⁡",approx:"≈",approxeq:"≊",Aring:"Å",aring:"å",Ascr:"𝒜",ascr:"𝒶",Assign:"≔",ast:"*",asymp:"≈",asympeq:"≍",Atilde:"Ã",atilde:"ã",Auml:"Ä",auml:"ä",awconint:"∳",awint:"⨑",backcong:"≌",backepsilon:"϶",backprime:"‵",backsim:"∽",backsimeq:"⋍",Backslash:"∖",Barv:"⫧",barvee:"⊽",barwed:"⌅",Barwed:"⌆",barwedge:"⌅",bbrk:"⎵",bbrktbrk:"⎶",bcong:"≌",Bcy:"Б",bcy:"б",bdquo:"„",becaus:"∵",because:"∵",Because:"∵",bemptyv:"⦰",bepsi:"϶",bernou:"ℬ",Bernoullis:"ℬ",Beta:"Β",beta:"β",beth:"ℶ",between:"≬",Bfr:"𝔅",bfr:"𝔟",bigcap:"⋂",bigcirc:"◯",bigcup:"⋃",bigodot:"⨀",bigoplus:"⨁",bigotimes:"⨂",bigsqcup:"⨆",bigstar:"★",bigtriangledown:"▽",bigtriangleup:"△",biguplus:"⨄",bigvee:"⋁",bigwedge:"⋀",bkarow:"⤍",blacklozenge:"⧫",blacksquare:"▪",blacktriangle:"▴",blacktriangledown:"▾",blacktriangleleft:"◂",blacktriangleright:"▸",blank:"␣",blk12:"▒",blk14:"░",blk34:"▓",block:"█",bne:"=⃥",bnequiv:"≡⃥",bNot:"⫭",bnot:"⌐",Bopf:"𝔹",bopf:"𝕓",bot:"⊥",bottom:"⊥",bowtie:"⋈",boxbox:"⧉",boxdl:"┐",boxdL:"╕",boxDl:"╖",boxDL:"╗",boxdr:"┌",boxdR:"╒",boxDr:"╓",boxDR:"╔",boxh:"─",boxH:"═",boxhd:"┬",boxHd:"╤",boxhD:"╥",boxHD:"╦",boxhu:"┴",boxHu:"╧",boxhU:"╨",boxHU:"╩",boxminus:"⊟",boxplus:"⊞",boxtimes:"⊠",boxul:"┘",boxuL:"╛",boxUl:"╜",boxUL:"╝",boxur:"└",boxuR:"╘",boxUr:"╙",boxUR:"╚",boxv:"│",boxV:"║",boxvh:"┼",boxvH:"╪",boxVh:"╫",boxVH:"╬",boxvl:"┤",boxvL:"╡",boxVl:"╢",boxVL:"╣",boxvr:"├",boxvR:"╞",boxVr:"╟",boxVR:"╠",bprime:"‵",breve:"˘",Breve:"˘",brvbar:"¦",bscr:"𝒷",Bscr:"ℬ",bsemi:"⁏",bsim:"∽",bsime:"⋍",bsolb:"⧅",bsol:"\\",bsolhsub:"⟈",bull:"•",bullet:"•",bump:"≎",bumpE:"⪮",bumpe:"≏",Bumpeq:"≎",bumpeq:"≏",Cacute:"Ć",cacute:"ć",capand:"⩄",capbrcup:"⩉",capcap:"⩋",cap:"∩",Cap:"⋒",capcup:"⩇",capdot:"⩀",CapitalDifferentialD:"ⅅ",caps:"∩︀",caret:"⁁",caron:"ˇ",Cayleys:"ℭ",ccaps:"⩍",Ccaron:"Č",ccaron:"č",Ccedil:"Ç",ccedil:"ç",Ccirc:"Ĉ",ccirc:"ĉ",Cconint:"∰",ccups:"⩌",ccupssm:"⩐",Cdot:"Ċ",cdot:"ċ",cedil:"¸",Cedilla:"¸",cemptyv:"⦲",cent:"¢",centerdot:"·",CenterDot:"·",cfr:"𝔠",Cfr:"ℭ",CHcy:"Ч",chcy:"ч",check:"✓",checkmark:"✓",Chi:"Χ",chi:"χ",circ:"ˆ",circeq:"≗",circlearrowleft:"↺",circlearrowright:"↻",circledast:"⊛",circledcirc:"⊚",circleddash:"⊝",CircleDot:"⊙",circledR:"®",circledS:"Ⓢ",CircleMinus:"⊖",CirclePlus:"⊕",CircleTimes:"⊗",cir:"○",cirE:"⧃",cire:"≗",cirfnint:"⨐",cirmid:"⫯",cirscir:"⧂",ClockwiseContourIntegral:"∲",CloseCurlyDoubleQuote:"”",CloseCurlyQuote:"’",clubs:"♣",clubsuit:"♣",colon:":",Colon:"∷",Colone:"⩴",colone:"≔",coloneq:"≔",comma:",",commat:"@",comp:"∁",compfn:"∘",complement:"∁",complexes:"ℂ",cong:"≅",congdot:"⩭",Congruent:"≡",conint:"∮",Conint:"∯",ContourIntegral:"∮",copf:"𝕔",Copf:"ℂ",coprod:"∐",Coproduct:"∐",copy:"©",COPY:"©",copysr:"℗",CounterClockwiseContourIntegral:"∳",crarr:"↵",cross:"✗",Cross:"⨯",Cscr:"𝒞",cscr:"𝒸",csub:"⫏",csube:"⫑",csup:"⫐",csupe:"⫒",ctdot:"⋯",cudarrl:"⤸",cudarrr:"⤵",cuepr:"⋞",cuesc:"⋟",cularr:"↶",cularrp:"⤽",cupbrcap:"⩈",cupcap:"⩆",CupCap:"≍",cup:"∪",Cup:"⋓",cupcup:"⩊",cupdot:"⊍",cupor:"⩅",cups:"∪︀",curarr:"↷",curarrm:"⤼",curlyeqprec:"⋞",curlyeqsucc:"⋟",curlyvee:"⋎",curlywedge:"⋏",curren:"¤",curvearrowleft:"↶",curvearrowright:"↷",cuvee:"⋎",cuwed:"⋏",cwconint:"∲",cwint:"∱",cylcty:"⌭",dagger:"†",Dagger:"‡",daleth:"ℸ",darr:"↓",Darr:"↡",dArr:"⇓",dash:"‐",Dashv:"⫤",dashv:"⊣",dbkarow:"⤏",dblac:"˝",Dcaron:"Ď",dcaron:"ď",Dcy:"Д",dcy:"д",ddagger:"‡",ddarr:"⇊",DD:"ⅅ",dd:"ⅆ",DDotrahd:"⤑",ddotseq:"⩷",deg:"°",Del:"∇",Delta:"Δ",delta:"δ",demptyv:"⦱",dfisht:"⥿",Dfr:"𝔇",dfr:"𝔡",dHar:"⥥",dharl:"⇃",dharr:"⇂",DiacriticalAcute:"´",DiacriticalDot:"˙",DiacriticalDoubleAcute:"˝",DiacriticalGrave:"`",DiacriticalTilde:"˜",diam:"⋄",diamond:"⋄",Diamond:"⋄",diamondsuit:"♦",diams:"♦",die:"¨",DifferentialD:"ⅆ",digamma:"ϝ",disin:"⋲",div:"÷",divide:"÷",divideontimes:"⋇",divonx:"⋇",DJcy:"Ђ",djcy:"ђ",dlcorn:"⌞",dlcrop:"⌍",dollar:"$",Dopf:"𝔻",dopf:"𝕕",Dot:"¨",dot:"˙",DotDot:"⃜",doteq:"≐",doteqdot:"≑",DotEqual:"≐",dotminus:"∸",dotplus:"∔",dotsquare:"⊡",doublebarwedge:"⌆",DoubleContourIntegral:"∯",DoubleDot:"¨",DoubleDownArrow:"⇓",DoubleLeftArrow:"⇐",DoubleLeftRightArrow:"⇔",DoubleLeftTee:"⫤",DoubleLongLeftArrow:"⟸",DoubleLongLeftRightArrow:"⟺",DoubleLongRightArrow:"⟹",DoubleRightArrow:"⇒",DoubleRightTee:"⊨",DoubleUpArrow:"⇑",DoubleUpDownArrow:"⇕",DoubleVerticalBar:"∥",DownArrowBar:"⤓",downarrow:"↓",DownArrow:"↓",Downarrow:"⇓",DownArrowUpArrow:"⇵",DownBreve:"̑",downdownarrows:"⇊",downharpoonleft:"⇃",downharpoonright:"⇂",DownLeftRightVector:"⥐",DownLeftTeeVector:"⥞",DownLeftVectorBar:"⥖",DownLeftVector:"↽",DownRightTeeVector:"⥟",DownRightVectorBar:"⥗",DownRightVector:"⇁",DownTeeArrow:"↧",DownTee:"⊤",drbkarow:"⤐",drcorn:"⌟",drcrop:"⌌",Dscr:"𝒟",dscr:"𝒹",DScy:"Ѕ",dscy:"ѕ",dsol:"⧶",Dstrok:"Đ",dstrok:"đ",dtdot:"⋱",dtri:"▿",dtrif:"▾",duarr:"⇵",duhar:"⥯",dwangle:"⦦",DZcy:"Џ",dzcy:"џ",dzigrarr:"⟿",Eacute:"É",eacute:"é",easter:"⩮",Ecaron:"Ě",ecaron:"ě",Ecirc:"Ê",ecirc:"ê",ecir:"≖",ecolon:"≕",Ecy:"Э",ecy:"э",eDDot:"⩷",Edot:"Ė",edot:"ė",eDot:"≑",ee:"ⅇ",efDot:"≒",Efr:"𝔈",efr:"𝔢",eg:"⪚",Egrave:"È",egrave:"è",egs:"⪖",egsdot:"⪘",el:"⪙",Element:"∈",elinters:"⏧",ell:"ℓ",els:"⪕",elsdot:"⪗",Emacr:"Ē",emacr:"ē",empty:"∅",emptyset:"∅",EmptySmallSquare:"◻",emptyv:"∅",EmptyVerySmallSquare:"▫",emsp13:" ",emsp14:" ",emsp:" ",ENG:"Ŋ",eng:"ŋ",ensp:" ",Eogon:"Ę",eogon:"ę",Eopf:"𝔼",eopf:"𝕖",epar:"⋕",eparsl:"⧣",eplus:"⩱",epsi:"ε",Epsilon:"Ε",epsilon:"ε",epsiv:"ϵ",eqcirc:"≖",eqcolon:"≕",eqsim:"≂",eqslantgtr:"⪖",eqslantless:"⪕",Equal:"⩵",equals:"=",EqualTilde:"≂",equest:"≟",Equilibrium:"⇌",equiv:"≡",equivDD:"⩸",eqvparsl:"⧥",erarr:"⥱",erDot:"≓",escr:"ℯ",Escr:"ℰ",esdot:"≐",Esim:"⩳",esim:"≂",Eta:"Η",eta:"η",ETH:"Ð",eth:"ð",Euml:"Ë",euml:"ë",euro:"€",excl:"!",exist:"∃",Exists:"∃",expectation:"ℰ",exponentiale:"ⅇ",ExponentialE:"ⅇ",fallingdotseq:"≒",Fcy:"Ф",fcy:"ф",female:"♀",ffilig:"ﬃ",fflig:"ﬀ",ffllig:"ﬄ",Ffr:"𝔉",ffr:"𝔣",filig:"ﬁ",FilledSmallSquare:"◼",FilledVerySmallSquare:"▪",fjlig:"fj",flat:"♭",fllig:"ﬂ",fltns:"▱",fnof:"ƒ",Fopf:"𝔽",fopf:"𝕗",forall:"∀",ForAll:"∀",fork:"⋔",forkv:"⫙",Fouriertrf:"ℱ",fpartint:"⨍",frac12:"½",frac13:"⅓",frac14:"¼",frac15:"⅕",frac16:"⅙",frac18:"⅛",frac23:"⅔",frac25:"⅖",frac34:"¾",frac35:"⅗",frac38:"⅜",frac45:"⅘",frac56:"⅚",frac58:"⅝",frac78:"⅞",frasl:"⁄",frown:"⌢",fscr:"𝒻",Fscr:"ℱ",gacute:"ǵ",Gamma:"Γ",gamma:"γ",Gammad:"Ϝ",gammad:"ϝ",gap:"⪆",Gbreve:"Ğ",gbreve:"ğ",Gcedil:"Ģ",Gcirc:"Ĝ",gcirc:"ĝ",Gcy:"Г",gcy:"г",Gdot:"Ġ",gdot:"ġ",ge:"≥",gE:"≧",gEl:"⪌",gel:"⋛",geq:"≥",geqq:"≧",geqslant:"⩾",gescc:"⪩",ges:"⩾",gesdot:"⪀",gesdoto:"⪂",gesdotol:"⪄",gesl:"⋛︀",gesles:"⪔",Gfr:"𝔊",gfr:"𝔤",gg:"≫",Gg:"⋙",ggg:"⋙",gimel:"ℷ",GJcy:"Ѓ",gjcy:"ѓ",gla:"⪥",gl:"≷",glE:"⪒",glj:"⪤",gnap:"⪊",gnapprox:"⪊",gne:"⪈",gnE:"≩",gneq:"⪈",gneqq:"≩",gnsim:"⋧",Gopf:"𝔾",gopf:"𝕘",grave:"`",GreaterEqual:"≥",GreaterEqualLess:"⋛",GreaterFullEqual:"≧",GreaterGreater:"⪢",GreaterLess:"≷",GreaterSlantEqual:"⩾",GreaterTilde:"≳",Gscr:"𝒢",gscr:"ℊ",gsim:"≳",gsime:"⪎",gsiml:"⪐",gtcc:"⪧",gtcir:"⩺",gt:">",GT:">",Gt:"≫",gtdot:"⋗",gtlPar:"⦕",gtquest:"⩼",gtrapprox:"⪆",gtrarr:"⥸",gtrdot:"⋗",gtreqless:"⋛",gtreqqless:"⪌",gtrless:"≷",gtrsim:"≳",gvertneqq:"≩︀",gvnE:"≩︀",Hacek:"ˇ",hairsp:" ",half:"½",hamilt:"ℋ",HARDcy:"Ъ",hardcy:"ъ",harrcir:"⥈",harr:"↔",hArr:"⇔",harrw:"↭",Hat:"^",hbar:"ℏ",Hcirc:"Ĥ",hcirc:"ĥ",hearts:"♥",heartsuit:"♥",hellip:"…",hercon:"⊹",hfr:"𝔥",Hfr:"ℌ",HilbertSpace:"ℋ",hksearow:"⤥",hkswarow:"⤦",hoarr:"⇿",homtht:"∻",hookleftarrow:"↩",hookrightarrow:"↪",hopf:"𝕙",Hopf:"ℍ",horbar:"―",HorizontalLine:"─",hscr:"𝒽",Hscr:"ℋ",hslash:"ℏ",Hstrok:"Ħ",hstrok:"ħ",HumpDownHump:"≎",HumpEqual:"≏",hybull:"⁃",hyphen:"‐",Iacute:"Í",iacute:"í",ic:"⁣",Icirc:"Î",icirc:"î",Icy:"И",icy:"и",Idot:"İ",IEcy:"Е",iecy:"е",iexcl:"¡",iff:"⇔",ifr:"𝔦",Ifr:"ℑ",Igrave:"Ì",igrave:"ì",ii:"ⅈ",iiiint:"⨌",iiint:"∭",iinfin:"⧜",iiota:"℩",IJlig:"Ĳ",ijlig:"ĳ",Imacr:"Ī",imacr:"ī",image:"ℑ",ImaginaryI:"ⅈ",imagline:"ℐ",imagpart:"ℑ",imath:"ı",Im:"ℑ",imof:"⊷",imped:"Ƶ",Implies:"⇒",incare:"℅",in:"∈",infin:"∞",infintie:"⧝",inodot:"ı",intcal:"⊺",int:"∫",Int:"∬",integers:"ℤ",Integral:"∫",intercal:"⊺",Intersection:"⋂",intlarhk:"⨗",intprod:"⨼",InvisibleComma:"⁣",InvisibleTimes:"⁢",IOcy:"Ё",iocy:"ё",Iogon:"Į",iogon:"į",Iopf:"𝕀",iopf:"𝕚",Iota:"Ι",iota:"ι",iprod:"⨼",iquest:"¿",iscr:"𝒾",Iscr:"ℐ",isin:"∈",isindot:"⋵",isinE:"⋹",isins:"⋴",isinsv:"⋳",isinv:"∈",it:"⁢",Itilde:"Ĩ",itilde:"ĩ",Iukcy:"І",iukcy:"і",Iuml:"Ï",iuml:"ï",Jcirc:"Ĵ",jcirc:"ĵ",Jcy:"Й",jcy:"й",Jfr:"𝔍",jfr:"𝔧",jmath:"ȷ",Jopf:"𝕁",jopf:"𝕛",Jscr:"𝒥",jscr:"𝒿",Jsercy:"Ј",jsercy:"ј",Jukcy:"Є",jukcy:"є",Kappa:"Κ",kappa:"κ",kappav:"ϰ",Kcedil:"Ķ",kcedil:"ķ",Kcy:"К",kcy:"к",Kfr:"𝔎",kfr:"𝔨",kgreen:"ĸ",KHcy:"Х",khcy:"х",KJcy:"Ќ",kjcy:"ќ",Kopf:"𝕂",kopf:"𝕜",Kscr:"𝒦",kscr:"𝓀",lAarr:"⇚",Lacute:"Ĺ",lacute:"ĺ",laemptyv:"⦴",lagran:"ℒ",Lambda:"Λ",lambda:"λ",lang:"⟨",Lang:"⟪",langd:"⦑",langle:"⟨",lap:"⪅",Laplacetrf:"ℒ",laquo:"«",larrb:"⇤",larrbfs:"⤟",larr:"←",Larr:"↞",lArr:"⇐",larrfs:"⤝",larrhk:"↩",larrlp:"↫",larrpl:"⤹",larrsim:"⥳",larrtl:"↢",latail:"⤙",lAtail:"⤛",lat:"⪫",late:"⪭",lates:"⪭︀",lbarr:"⤌",lBarr:"⤎",lbbrk:"❲",lbrace:"{",lbrack:"[",lbrke:"⦋",lbrksld:"⦏",lbrkslu:"⦍",Lcaron:"Ľ",lcaron:"ľ",Lcedil:"Ļ",lcedil:"ļ",lceil:"⌈",lcub:"{",Lcy:"Л",lcy:"л",ldca:"⤶",ldquo:"“",ldquor:"„",ldrdhar:"⥧",ldrushar:"⥋",ldsh:"↲",le:"≤",lE:"≦",LeftAngleBracket:"⟨",LeftArrowBar:"⇤",leftarrow:"←",LeftArrow:"←",Leftarrow:"⇐",LeftArrowRightArrow:"⇆",leftarrowtail:"↢",LeftCeiling:"⌈",LeftDoubleBracket:"⟦",LeftDownTeeVector:"⥡",LeftDownVectorBar:"⥙",LeftDownVector:"⇃",LeftFloor:"⌊",leftharpoondown:"↽",leftharpoonup:"↼",leftleftarrows:"⇇",leftrightarrow:"↔",LeftRightArrow:"↔",Leftrightarrow:"⇔",leftrightarrows:"⇆",leftrightharpoons:"⇋",leftrightsquigarrow:"↭",LeftRightVector:"⥎",LeftTeeArrow:"↤",LeftTee:"⊣",LeftTeeVector:"⥚",leftthreetimes:"⋋",LeftTriangleBar:"⧏",LeftTriangle:"⊲",LeftTriangleEqual:"⊴",LeftUpDownVector:"⥑",LeftUpTeeVector:"⥠",LeftUpVectorBar:"⥘",LeftUpVector:"↿",LeftVectorBar:"⥒",LeftVector:"↼",lEg:"⪋",leg:"⋚",leq:"≤",leqq:"≦",leqslant:"⩽",lescc:"⪨",les:"⩽",lesdot:"⩿",lesdoto:"⪁",lesdotor:"⪃",lesg:"⋚︀",lesges:"⪓",lessapprox:"⪅",lessdot:"⋖",lesseqgtr:"⋚",lesseqqgtr:"⪋",LessEqualGreater:"⋚",LessFullEqual:"≦",LessGreater:"≶",lessgtr:"≶",LessLess:"⪡",lesssim:"≲",LessSlantEqual:"⩽",LessTilde:"≲",lfisht:"⥼",lfloor:"⌊",Lfr:"𝔏",lfr:"𝔩",lg:"≶",lgE:"⪑",lHar:"⥢",lhard:"↽",lharu:"↼",lharul:"⥪",lhblk:"▄",LJcy:"Љ",ljcy:"љ",llarr:"⇇",ll:"≪",Ll:"⋘",llcorner:"⌞",Lleftarrow:"⇚",llhard:"⥫",lltri:"◺",Lmidot:"Ŀ",lmidot:"ŀ",lmoustache:"⎰",lmoust:"⎰",lnap:"⪉",lnapprox:"⪉",lne:"⪇",lnE:"≨",lneq:"⪇",lneqq:"≨",lnsim:"⋦",loang:"⟬",loarr:"⇽",lobrk:"⟦",longleftarrow:"⟵",LongLeftArrow:"⟵",Longleftarrow:"⟸",longleftrightarrow:"⟷",LongLeftRightArrow:"⟷",Longleftrightarrow:"⟺",longmapsto:"⟼",longrightarrow:"⟶",LongRightArrow:"⟶",Longrightarrow:"⟹",looparrowleft:"↫",looparrowright:"↬",lopar:"⦅",Lopf:"𝕃",lopf:"𝕝",loplus:"⨭",lotimes:"⨴",lowast:"∗",lowbar:"_",LowerLeftArrow:"↙",LowerRightArrow:"↘",loz:"◊",lozenge:"◊",lozf:"⧫",lpar:"(",lparlt:"⦓",lrarr:"⇆",lrcorner:"⌟",lrhar:"⇋",lrhard:"⥭",lrm:"‎",lrtri:"⊿",lsaquo:"‹",lscr:"𝓁",Lscr:"ℒ",lsh:"↰",Lsh:"↰",lsim:"≲",lsime:"⪍",lsimg:"⪏",lsqb:"[",lsquo:"‘",lsquor:"‚",Lstrok:"Ł",lstrok:"ł",ltcc:"⪦",ltcir:"⩹",lt:"<",LT:"<",Lt:"≪",ltdot:"⋖",lthree:"⋋",ltimes:"⋉",ltlarr:"⥶",ltquest:"⩻",ltri:"◃",ltrie:"⊴",ltrif:"◂",ltrPar:"⦖",lurdshar:"⥊",luruhar:"⥦",lvertneqq:"≨︀",lvnE:"≨︀",macr:"¯",male:"♂",malt:"✠",maltese:"✠",Map:"⤅",map:"↦",mapsto:"↦",mapstodown:"↧",mapstoleft:"↤",mapstoup:"↥",marker:"▮",mcomma:"⨩",Mcy:"М",mcy:"м",mdash:"—",mDDot:"∺",measuredangle:"∡",MediumSpace:" ",Mellintrf:"ℳ",Mfr:"𝔐",mfr:"𝔪",mho:"℧",micro:"µ",midast:"*",midcir:"⫰",mid:"∣",middot:"·",minusb:"⊟",minus:"−",minusd:"∸",minusdu:"⨪",MinusPlus:"∓",mlcp:"⫛",mldr:"…",mnplus:"∓",models:"⊧",Mopf:"𝕄",mopf:"𝕞",mp:"∓",mscr:"𝓂",Mscr:"ℳ",mstpos:"∾",Mu:"Μ",mu:"μ",multimap:"⊸",mumap:"⊸",nabla:"∇",Nacute:"Ń",nacute:"ń",nang:"∠⃒",nap:"≉",napE:"⩰̸",napid:"≋̸",napos:"ŉ",napprox:"≉",natural:"♮",naturals:"ℕ",natur:"♮",nbsp:" ",nbump:"≎̸",nbumpe:"≏̸",ncap:"⩃",Ncaron:"Ň",ncaron:"ň",Ncedil:"Ņ",ncedil:"ņ",ncong:"≇",ncongdot:"⩭̸",ncup:"⩂",Ncy:"Н",ncy:"н",ndash:"–",nearhk:"⤤",nearr:"↗",neArr:"⇗",nearrow:"↗",ne:"≠",nedot:"≐̸",NegativeMediumSpace:"​",NegativeThickSpace:"​",NegativeThinSpace:"​",NegativeVeryThinSpace:"​",nequiv:"≢",nesear:"⤨",nesim:"≂̸",NestedGreaterGreater:"≫",NestedLessLess:"≪",NewLine:`
`,nexist:"∄",nexists:"∄",Nfr:"𝔑",nfr:"𝔫",ngE:"≧̸",nge:"≱",ngeq:"≱",ngeqq:"≧̸",ngeqslant:"⩾̸",nges:"⩾̸",nGg:"⋙̸",ngsim:"≵",nGt:"≫⃒",ngt:"≯",ngtr:"≯",nGtv:"≫̸",nharr:"↮",nhArr:"⇎",nhpar:"⫲",ni:"∋",nis:"⋼",nisd:"⋺",niv:"∋",NJcy:"Њ",njcy:"њ",nlarr:"↚",nlArr:"⇍",nldr:"‥",nlE:"≦̸",nle:"≰",nleftarrow:"↚",nLeftarrow:"⇍",nleftrightarrow:"↮",nLeftrightarrow:"⇎",nleq:"≰",nleqq:"≦̸",nleqslant:"⩽̸",nles:"⩽̸",nless:"≮",nLl:"⋘̸",nlsim:"≴",nLt:"≪⃒",nlt:"≮",nltri:"⋪",nltrie:"⋬",nLtv:"≪̸",nmid:"∤",NoBreak:"⁠",NonBreakingSpace:" ",nopf:"𝕟",Nopf:"ℕ",Not:"⫬",not:"¬",NotCongruent:"≢",NotCupCap:"≭",NotDoubleVerticalBar:"∦",NotElement:"∉",NotEqual:"≠",NotEqualTilde:"≂̸",NotExists:"∄",NotGreater:"≯",NotGreaterEqual:"≱",NotGreaterFullEqual:"≧̸",NotGreaterGreater:"≫̸",NotGreaterLess:"≹",NotGreaterSlantEqual:"⩾̸",NotGreaterTilde:"≵",NotHumpDownHump:"≎̸",NotHumpEqual:"≏̸",notin:"∉",notindot:"⋵̸",notinE:"⋹̸",notinva:"∉",notinvb:"⋷",notinvc:"⋶",NotLeftTriangleBar:"⧏̸",NotLeftTriangle:"⋪",NotLeftTriangleEqual:"⋬",NotLess:"≮",NotLessEqual:"≰",NotLessGreater:"≸",NotLessLess:"≪̸",NotLessSlantEqual:"⩽̸",NotLessTilde:"≴",NotNestedGreaterGreater:"⪢̸",NotNestedLessLess:"⪡̸",notni:"∌",notniva:"∌",notnivb:"⋾",notnivc:"⋽",NotPrecedes:"⊀",NotPrecedesEqual:"⪯̸",NotPrecedesSlantEqual:"⋠",NotReverseElement:"∌",NotRightTriangleBar:"⧐̸",NotRightTriangle:"⋫",NotRightTriangleEqual:"⋭",NotSquareSubset:"⊏̸",NotSquareSubsetEqual:"⋢",NotSquareSuperset:"⊐̸",NotSquareSupersetEqual:"⋣",NotSubset:"⊂⃒",NotSubsetEqual:"⊈",NotSucceeds:"⊁",NotSucceedsEqual:"⪰̸",NotSucceedsSlantEqual:"⋡",NotSucceedsTilde:"≿̸",NotSuperset:"⊃⃒",NotSupersetEqual:"⊉",NotTilde:"≁",NotTildeEqual:"≄",NotTildeFullEqual:"≇",NotTildeTilde:"≉",NotVerticalBar:"∤",nparallel:"∦",npar:"∦",nparsl:"⫽⃥",npart:"∂̸",npolint:"⨔",npr:"⊀",nprcue:"⋠",nprec:"⊀",npreceq:"⪯̸",npre:"⪯̸",nrarrc:"⤳̸",nrarr:"↛",nrArr:"⇏",nrarrw:"↝̸",nrightarrow:"↛",nRightarrow:"⇏",nrtri:"⋫",nrtrie:"⋭",nsc:"⊁",nsccue:"⋡",nsce:"⪰̸",Nscr:"𝒩",nscr:"𝓃",nshortmid:"∤",nshortparallel:"∦",nsim:"≁",nsime:"≄",nsimeq:"≄",nsmid:"∤",nspar:"∦",nsqsube:"⋢",nsqsupe:"⋣",nsub:"⊄",nsubE:"⫅̸",nsube:"⊈",nsubset:"⊂⃒",nsubseteq:"⊈",nsubseteqq:"⫅̸",nsucc:"⊁",nsucceq:"⪰̸",nsup:"⊅",nsupE:"⫆̸",nsupe:"⊉",nsupset:"⊃⃒",nsupseteq:"⊉",nsupseteqq:"⫆̸",ntgl:"≹",Ntilde:"Ñ",ntilde:"ñ",ntlg:"≸",ntriangleleft:"⋪",ntrianglelefteq:"⋬",ntriangleright:"⋫",ntrianglerighteq:"⋭",Nu:"Ν",nu:"ν",num:"#",numero:"№",numsp:" ",nvap:"≍⃒",nvdash:"⊬",nvDash:"⊭",nVdash:"⊮",nVDash:"⊯",nvge:"≥⃒",nvgt:">⃒",nvHarr:"⤄",nvinfin:"⧞",nvlArr:"⤂",nvle:"≤⃒",nvlt:"<⃒",nvltrie:"⊴⃒",nvrArr:"⤃",nvrtrie:"⊵⃒",nvsim:"∼⃒",nwarhk:"⤣",nwarr:"↖",nwArr:"⇖",nwarrow:"↖",nwnear:"⤧",Oacute:"Ó",oacute:"ó",oast:"⊛",Ocirc:"Ô",ocirc:"ô",ocir:"⊚",Ocy:"О",ocy:"о",odash:"⊝",Odblac:"Ő",odblac:"ő",odiv:"⨸",odot:"⊙",odsold:"⦼",OElig:"Œ",oelig:"œ",ofcir:"⦿",Ofr:"𝔒",ofr:"𝔬",ogon:"˛",Ograve:"Ò",ograve:"ò",ogt:"⧁",ohbar:"⦵",ohm:"Ω",oint:"∮",olarr:"↺",olcir:"⦾",olcross:"⦻",oline:"‾",olt:"⧀",Omacr:"Ō",omacr:"ō",Omega:"Ω",omega:"ω",Omicron:"Ο",omicron:"ο",omid:"⦶",ominus:"⊖",Oopf:"𝕆",oopf:"𝕠",opar:"⦷",OpenCurlyDoubleQuote:"“",OpenCurlyQuote:"‘",operp:"⦹",oplus:"⊕",orarr:"↻",Or:"⩔",or:"∨",ord:"⩝",order:"ℴ",orderof:"ℴ",ordf:"ª",ordm:"º",origof:"⊶",oror:"⩖",orslope:"⩗",orv:"⩛",oS:"Ⓢ",Oscr:"𝒪",oscr:"ℴ",Oslash:"Ø",oslash:"ø",osol:"⊘",Otilde:"Õ",otilde:"õ",otimesas:"⨶",Otimes:"⨷",otimes:"⊗",Ouml:"Ö",ouml:"ö",ovbar:"⌽",OverBar:"‾",OverBrace:"⏞",OverBracket:"⎴",OverParenthesis:"⏜",para:"¶",parallel:"∥",par:"∥",parsim:"⫳",parsl:"⫽",part:"∂",PartialD:"∂",Pcy:"П",pcy:"п",percnt:"%",period:".",permil:"‰",perp:"⊥",pertenk:"‱",Pfr:"𝔓",pfr:"𝔭",Phi:"Φ",phi:"φ",phiv:"ϕ",phmmat:"ℳ",phone:"☎",Pi:"Π",pi:"π",pitchfork:"⋔",piv:"ϖ",planck:"ℏ",planckh:"ℎ",plankv:"ℏ",plusacir:"⨣",plusb:"⊞",pluscir:"⨢",plus:"+",plusdo:"∔",plusdu:"⨥",pluse:"⩲",PlusMinus:"±",plusmn:"±",plussim:"⨦",plustwo:"⨧",pm:"±",Poincareplane:"ℌ",pointint:"⨕",popf:"𝕡",Popf:"ℙ",pound:"£",prap:"⪷",Pr:"⪻",pr:"≺",prcue:"≼",precapprox:"⪷",prec:"≺",preccurlyeq:"≼",Precedes:"≺",PrecedesEqual:"⪯",PrecedesSlantEqual:"≼",PrecedesTilde:"≾",preceq:"⪯",precnapprox:"⪹",precneqq:"⪵",precnsim:"⋨",pre:"⪯",prE:"⪳",precsim:"≾",prime:"′",Prime:"″",primes:"ℙ",prnap:"⪹",prnE:"⪵",prnsim:"⋨",prod:"∏",Product:"∏",profalar:"⌮",profline:"⌒",profsurf:"⌓",prop:"∝",Proportional:"∝",Proportion:"∷",propto:"∝",prsim:"≾",prurel:"⊰",Pscr:"𝒫",pscr:"𝓅",Psi:"Ψ",psi:"ψ",puncsp:" ",Qfr:"𝔔",qfr:"𝔮",qint:"⨌",qopf:"𝕢",Qopf:"ℚ",qprime:"⁗",Qscr:"𝒬",qscr:"𝓆",quaternions:"ℍ",quatint:"⨖",quest:"?",questeq:"≟",quot:'"',QUOT:'"',rAarr:"⇛",race:"∽̱",Racute:"Ŕ",racute:"ŕ",radic:"√",raemptyv:"⦳",rang:"⟩",Rang:"⟫",rangd:"⦒",range:"⦥",rangle:"⟩",raquo:"»",rarrap:"⥵",rarrb:"⇥",rarrbfs:"⤠",rarrc:"⤳",rarr:"→",Rarr:"↠",rArr:"⇒",rarrfs:"⤞",rarrhk:"↪",rarrlp:"↬",rarrpl:"⥅",rarrsim:"⥴",Rarrtl:"⤖",rarrtl:"↣",rarrw:"↝",ratail:"⤚",rAtail:"⤜",ratio:"∶",rationals:"ℚ",rbarr:"⤍",rBarr:"⤏",RBarr:"⤐",rbbrk:"❳",rbrace:"}",rbrack:"]",rbrke:"⦌",rbrksld:"⦎",rbrkslu:"⦐",Rcaron:"Ř",rcaron:"ř",Rcedil:"Ŗ",rcedil:"ŗ",rceil:"⌉",rcub:"}",Rcy:"Р",rcy:"р",rdca:"⤷",rdldhar:"⥩",rdquo:"”",rdquor:"”",rdsh:"↳",real:"ℜ",realine:"ℛ",realpart:"ℜ",reals:"ℝ",Re:"ℜ",rect:"▭",reg:"®",REG:"®",ReverseElement:"∋",ReverseEquilibrium:"⇋",ReverseUpEquilibrium:"⥯",rfisht:"⥽",rfloor:"⌋",rfr:"𝔯",Rfr:"ℜ",rHar:"⥤",rhard:"⇁",rharu:"⇀",rharul:"⥬",Rho:"Ρ",rho:"ρ",rhov:"ϱ",RightAngleBracket:"⟩",RightArrowBar:"⇥",rightarrow:"→",RightArrow:"→",Rightarrow:"⇒",RightArrowLeftArrow:"⇄",rightarrowtail:"↣",RightCeiling:"⌉",RightDoubleBracket:"⟧",RightDownTeeVector:"⥝",RightDownVectorBar:"⥕",RightDownVector:"⇂",RightFloor:"⌋",rightharpoondown:"⇁",rightharpoonup:"⇀",rightleftarrows:"⇄",rightleftharpoons:"⇌",rightrightarrows:"⇉",rightsquigarrow:"↝",RightTeeArrow:"↦",RightTee:"⊢",RightTeeVector:"⥛",rightthreetimes:"⋌",RightTriangleBar:"⧐",RightTriangle:"⊳",RightTriangleEqual:"⊵",RightUpDownVector:"⥏",RightUpTeeVector:"⥜",RightUpVectorBar:"⥔",RightUpVector:"↾",RightVectorBar:"⥓",RightVector:"⇀",ring:"˚",risingdotseq:"≓",rlarr:"⇄",rlhar:"⇌",rlm:"‏",rmoustache:"⎱",rmoust:"⎱",rnmid:"⫮",roang:"⟭",roarr:"⇾",robrk:"⟧",ropar:"⦆",ropf:"𝕣",Ropf:"ℝ",roplus:"⨮",rotimes:"⨵",RoundImplies:"⥰",rpar:")",rpargt:"⦔",rppolint:"⨒",rrarr:"⇉",Rrightarrow:"⇛",rsaquo:"›",rscr:"𝓇",Rscr:"ℛ",rsh:"↱",Rsh:"↱",rsqb:"]",rsquo:"’",rsquor:"’",rthree:"⋌",rtimes:"⋊",rtri:"▹",rtrie:"⊵",rtrif:"▸",rtriltri:"⧎",RuleDelayed:"⧴",ruluhar:"⥨",rx:"℞",Sacute:"Ś",sacute:"ś",sbquo:"‚",scap:"⪸",Scaron:"Š",scaron:"š",Sc:"⪼",sc:"≻",sccue:"≽",sce:"⪰",scE:"⪴",Scedil:"Ş",scedil:"ş",Scirc:"Ŝ",scirc:"ŝ",scnap:"⪺",scnE:"⪶",scnsim:"⋩",scpolint:"⨓",scsim:"≿",Scy:"С",scy:"с",sdotb:"⊡",sdot:"⋅",sdote:"⩦",searhk:"⤥",searr:"↘",seArr:"⇘",searrow:"↘",sect:"§",semi:";",seswar:"⤩",setminus:"∖",setmn:"∖",sext:"✶",Sfr:"𝔖",sfr:"𝔰",sfrown:"⌢",sharp:"♯",SHCHcy:"Щ",shchcy:"щ",SHcy:"Ш",shcy:"ш",ShortDownArrow:"↓",ShortLeftArrow:"←",shortmid:"∣",shortparallel:"∥",ShortRightArrow:"→",ShortUpArrow:"↑",shy:"­",Sigma:"Σ",sigma:"σ",sigmaf:"ς",sigmav:"ς",sim:"∼",simdot:"⩪",sime:"≃",simeq:"≃",simg:"⪞",simgE:"⪠",siml:"⪝",simlE:"⪟",simne:"≆",simplus:"⨤",simrarr:"⥲",slarr:"←",SmallCircle:"∘",smallsetminus:"∖",smashp:"⨳",smeparsl:"⧤",smid:"∣",smile:"⌣",smt:"⪪",smte:"⪬",smtes:"⪬︀",SOFTcy:"Ь",softcy:"ь",solbar:"⌿",solb:"⧄",sol:"/",Sopf:"𝕊",sopf:"𝕤",spades:"♠",spadesuit:"♠",spar:"∥",sqcap:"⊓",sqcaps:"⊓︀",sqcup:"⊔",sqcups:"⊔︀",Sqrt:"√",sqsub:"⊏",sqsube:"⊑",sqsubset:"⊏",sqsubseteq:"⊑",sqsup:"⊐",sqsupe:"⊒",sqsupset:"⊐",sqsupseteq:"⊒",square:"□",Square:"□",SquareIntersection:"⊓",SquareSubset:"⊏",SquareSubsetEqual:"⊑",SquareSuperset:"⊐",SquareSupersetEqual:"⊒",SquareUnion:"⊔",squarf:"▪",squ:"□",squf:"▪",srarr:"→",Sscr:"𝒮",sscr:"𝓈",ssetmn:"∖",ssmile:"⌣",sstarf:"⋆",Star:"⋆",star:"☆",starf:"★",straightepsilon:"ϵ",straightphi:"ϕ",strns:"¯",sub:"⊂",Sub:"⋐",subdot:"⪽",subE:"⫅",sube:"⊆",subedot:"⫃",submult:"⫁",subnE:"⫋",subne:"⊊",subplus:"⪿",subrarr:"⥹",subset:"⊂",Subset:"⋐",subseteq:"⊆",subseteqq:"⫅",SubsetEqual:"⊆",subsetneq:"⊊",subsetneqq:"⫋",subsim:"⫇",subsub:"⫕",subsup:"⫓",succapprox:"⪸",succ:"≻",succcurlyeq:"≽",Succeeds:"≻",SucceedsEqual:"⪰",SucceedsSlantEqual:"≽",SucceedsTilde:"≿",succeq:"⪰",succnapprox:"⪺",succneqq:"⪶",succnsim:"⋩",succsim:"≿",SuchThat:"∋",sum:"∑",Sum:"∑",sung:"♪",sup1:"¹",sup2:"²",sup3:"³",sup:"⊃",Sup:"⋑",supdot:"⪾",supdsub:"⫘",supE:"⫆",supe:"⊇",supedot:"⫄",Superset:"⊃",SupersetEqual:"⊇",suphsol:"⟉",suphsub:"⫗",suplarr:"⥻",supmult:"⫂",supnE:"⫌",supne:"⊋",supplus:"⫀",supset:"⊃",Supset:"⋑",supseteq:"⊇",supseteqq:"⫆",supsetneq:"⊋",supsetneqq:"⫌",supsim:"⫈",supsub:"⫔",supsup:"⫖",swarhk:"⤦",swarr:"↙",swArr:"⇙",swarrow:"↙",swnwar:"⤪",szlig:"ß",Tab:"	",target:"⌖",Tau:"Τ",tau:"τ",tbrk:"⎴",Tcaron:"Ť",tcaron:"ť",Tcedil:"Ţ",tcedil:"ţ",Tcy:"Т",tcy:"т",tdot:"⃛",telrec:"⌕",Tfr:"𝔗",tfr:"𝔱",there4:"∴",therefore:"∴",Therefore:"∴",Theta:"Θ",theta:"θ",thetasym:"ϑ",thetav:"ϑ",thickapprox:"≈",thicksim:"∼",ThickSpace:"  ",ThinSpace:" ",thinsp:" ",thkap:"≈",thksim:"∼",THORN:"Þ",thorn:"þ",tilde:"˜",Tilde:"∼",TildeEqual:"≃",TildeFullEqual:"≅",TildeTilde:"≈",timesbar:"⨱",timesb:"⊠",times:"×",timesd:"⨰",tint:"∭",toea:"⤨",topbot:"⌶",topcir:"⫱",top:"⊤",Topf:"𝕋",topf:"𝕥",topfork:"⫚",tosa:"⤩",tprime:"‴",trade:"™",TRADE:"™",triangle:"▵",triangledown:"▿",triangleleft:"◃",trianglelefteq:"⊴",triangleq:"≜",triangleright:"▹",trianglerighteq:"⊵",tridot:"◬",trie:"≜",triminus:"⨺",TripleDot:"⃛",triplus:"⨹",trisb:"⧍",tritime:"⨻",trpezium:"⏢",Tscr:"𝒯",tscr:"𝓉",TScy:"Ц",tscy:"ц",TSHcy:"Ћ",tshcy:"ћ",Tstrok:"Ŧ",tstrok:"ŧ",twixt:"≬",twoheadleftarrow:"↞",twoheadrightarrow:"↠",Uacute:"Ú",uacute:"ú",uarr:"↑",Uarr:"↟",uArr:"⇑",Uarrocir:"⥉",Ubrcy:"Ў",ubrcy:"ў",Ubreve:"Ŭ",ubreve:"ŭ",Ucirc:"Û",ucirc:"û",Ucy:"У",ucy:"у",udarr:"⇅",Udblac:"Ű",udblac:"ű",udhar:"⥮",ufisht:"⥾",Ufr:"𝔘",ufr:"𝔲",Ugrave:"Ù",ugrave:"ù",uHar:"⥣",uharl:"↿",uharr:"↾",uhblk:"▀",ulcorn:"⌜",ulcorner:"⌜",ulcrop:"⌏",ultri:"◸",Umacr:"Ū",umacr:"ū",uml:"¨",UnderBar:"_",UnderBrace:"⏟",UnderBracket:"⎵",UnderParenthesis:"⏝",Union:"⋃",UnionPlus:"⊎",Uogon:"Ų",uogon:"ų",Uopf:"𝕌",uopf:"𝕦",UpArrowBar:"⤒",uparrow:"↑",UpArrow:"↑",Uparrow:"⇑",UpArrowDownArrow:"⇅",updownarrow:"↕",UpDownArrow:"↕",Updownarrow:"⇕",UpEquilibrium:"⥮",upharpoonleft:"↿",upharpoonright:"↾",uplus:"⊎",UpperLeftArrow:"↖",UpperRightArrow:"↗",upsi:"υ",Upsi:"ϒ",upsih:"ϒ",Upsilon:"Υ",upsilon:"υ",UpTeeArrow:"↥",UpTee:"⊥",upuparrows:"⇈",urcorn:"⌝",urcorner:"⌝",urcrop:"⌎",Uring:"Ů",uring:"ů",urtri:"◹",Uscr:"𝒰",uscr:"𝓊",utdot:"⋰",Utilde:"Ũ",utilde:"ũ",utri:"▵",utrif:"▴",uuarr:"⇈",Uuml:"Ü",uuml:"ü",uwangle:"⦧",vangrt:"⦜",varepsilon:"ϵ",varkappa:"ϰ",varnothing:"∅",varphi:"ϕ",varpi:"ϖ",varpropto:"∝",varr:"↕",vArr:"⇕",varrho:"ϱ",varsigma:"ς",varsubsetneq:"⊊︀",varsubsetneqq:"⫋︀",varsupsetneq:"⊋︀",varsupsetneqq:"⫌︀",vartheta:"ϑ",vartriangleleft:"⊲",vartriangleright:"⊳",vBar:"⫨",Vbar:"⫫",vBarv:"⫩",Vcy:"В",vcy:"в",vdash:"⊢",vDash:"⊨",Vdash:"⊩",VDash:"⊫",Vdashl:"⫦",veebar:"⊻",vee:"∨",Vee:"⋁",veeeq:"≚",vellip:"⋮",verbar:"|",Verbar:"‖",vert:"|",Vert:"‖",VerticalBar:"∣",VerticalLine:"|",VerticalSeparator:"❘",VerticalTilde:"≀",VeryThinSpace:" ",Vfr:"𝔙",vfr:"𝔳",vltri:"⊲",vnsub:"⊂⃒",vnsup:"⊃⃒",Vopf:"𝕍",vopf:"𝕧",vprop:"∝",vrtri:"⊳",Vscr:"𝒱",vscr:"𝓋",vsubnE:"⫋︀",vsubne:"⊊︀",vsupnE:"⫌︀",vsupne:"⊋︀",Vvdash:"⊪",vzigzag:"⦚",Wcirc:"Ŵ",wcirc:"ŵ",wedbar:"⩟",wedge:"∧",Wedge:"⋀",wedgeq:"≙",weierp:"℘",Wfr:"𝔚",wfr:"𝔴",Wopf:"𝕎",wopf:"𝕨",wp:"℘",wr:"≀",wreath:"≀",Wscr:"𝒲",wscr:"𝓌",xcap:"⋂",xcirc:"◯",xcup:"⋃",xdtri:"▽",Xfr:"𝔛",xfr:"𝔵",xharr:"⟷",xhArr:"⟺",Xi:"Ξ",xi:"ξ",xlarr:"⟵",xlArr:"⟸",xmap:"⟼",xnis:"⋻",xodot:"⨀",Xopf:"𝕏",xopf:"𝕩",xoplus:"⨁",xotime:"⨂",xrarr:"⟶",xrArr:"⟹",Xscr:"𝒳",xscr:"𝓍",xsqcup:"⨆",xuplus:"⨄",xutri:"△",xvee:"⋁",xwedge:"⋀",Yacute:"Ý",yacute:"ý",YAcy:"Я",yacy:"я",Ycirc:"Ŷ",ycirc:"ŷ",Ycy:"Ы",ycy:"ы",yen:"¥",Yfr:"𝔜",yfr:"𝔶",YIcy:"Ї",yicy:"ї",Yopf:"𝕐",yopf:"𝕪",Yscr:"𝒴",yscr:"𝓎",YUcy:"Ю",yucy:"ю",yuml:"ÿ",Yuml:"Ÿ",Zacute:"Ź",zacute:"ź",Zcaron:"Ž",zcaron:"ž",Zcy:"З",zcy:"з",Zdot:"Ż",zdot:"ż",zeetrf:"ℨ",ZeroWidthSpace:"​",Zeta:"Ζ",zeta:"ζ",zfr:"𝔷",Zfr:"ℨ",ZHcy:"Ж",zhcy:"ж",zigrarr:"⇝",zopf:"𝕫",Zopf:"ℤ",Zscr:"𝒵",zscr:"𝓏",zwj:"‍",zwnj:"‌"}},function(d,h){},function(d,h){},function(d,h,s){function t(k){return Array.prototype.slice.call(arguments,1).forEach(function(C){C&&Object.keys(C).forEach(function(y){k[y]=C[y]})}),k}function r(k){return Object.prototype.toString.call(k)}function e(k){return r(k)==="[object String]"}function i(k){return r(k)==="[object Object]"}function n(k){return r(k)==="[object RegExp]"}function a(k){return r(k)==="[object Function]"}function u(k){return k.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function c(k){return Object.keys(k||{}).reduce(function(C,y){return C||g.hasOwnProperty(y)},!1)}function o(k){k.__index__=-1,k.__text_cache__=""}function l(k){return function(C,y){var A=C.slice(y);return k.test(A)?A.match(k)[0].length:0}}function p(){return function(k,C){C.normalize(k)}}function _(k){function C(S){return S.replace("%TLDS%",A.src_tlds)}function y(S,M){throw new Error('(LinkifyIt) Invalid schema "'+S+'": '+M)}var A=k.re=s(117)(k.__opts__),T=k.__tlds__.slice();k.onCompile(),k.__tlds_replaced__||T.push(v),T.push(A.src_xn),A.src_tlds=T.join("|"),A.email_fuzzy=RegExp(C(A.tpl_email_fuzzy),"i"),A.link_fuzzy=RegExp(C(A.tpl_link_fuzzy),"i"),A.link_no_ip_fuzzy=RegExp(C(A.tpl_link_no_ip_fuzzy),"i"),A.host_fuzzy_test=RegExp(C(A.tpl_host_fuzzy_test),"i");var L=[];k.__compiled__={},Object.keys(k.__schemas__).forEach(function(S){var M=k.__schemas__[S];if(M!==null){var $={validate:null,link:null};return k.__compiled__[S]=$,i(M)?(n(M.validate)?$.validate=l(M.validate):a(M.validate)?$.validate=M.validate:y(S,M),void(a(M.normalize)?$.normalize=M.normalize:M.normalize?y(S,M):$.normalize=p())):e(M)?void L.push(S):void y(S,M)}}),L.forEach(function(S){k.__compiled__[k.__schemas__[S]]&&(k.__compiled__[S].validate=k.__compiled__[k.__schemas__[S]].validate,k.__compiled__[S].normalize=k.__compiled__[k.__schemas__[S]].normalize)}),k.__compiled__[""]={validate:null,normalize:p()};var j=Object.keys(k.__compiled__).filter(function(S){return S.length>0&&k.__compiled__[S]}).map(u).join("|");k.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+A.src_ZPCc+"))("+j+")","i"),k.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+A.src_ZPCc+"))("+j+")","ig"),k.re.pretest=RegExp("("+k.re.schema_test.source+")|("+k.re.host_fuzzy_test.source+")|@","i"),o(k)}function f(k,C){var y=k.__index__,A=k.__last_index__,T=k.__text_cache__.slice(y,A);this.schema=k.__schema__.toLowerCase(),this.index=y+C,this.lastIndex=A+C,this.raw=T,this.text=T,this.url=T}function b(k,C){var y=new f(k,C);return k.__compiled__[y.schema].normalize(y,k),y}function m(k,C){if(!(this instanceof m))return new m(k,C);C||c(k)&&(C=k,k={}),this.__opts__=t({},g,C),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=t({},w,k),this.__compiled__={},this.__tlds__=x,this.__tlds_replaced__=!1,this.re={},_(this)}var g={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},w={"http:":{validate:function(k,C,y){var A=k.slice(C);return y.re.http||(y.re.http=new RegExp("^\\/\\/"+y.re.src_auth+y.re.src_host_port_strict+y.re.src_path,"i")),y.re.http.test(A)?A.match(y.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(k,C,y){var A=k.slice(C);return y.re.no_http||(y.re.no_http=new RegExp("^"+y.re.src_auth+"(?:localhost|(?:(?:"+y.re.src_domain+")\\.)+"+y.re.src_domain_root+")"+y.re.src_port+y.re.src_host_terminator+y.re.src_path,"i")),y.re.no_http.test(A)?C>=3&&k[C-3]===":"||C>=3&&k[C-3]==="/"?0:A.match(y.re.no_http)[0].length:0}},"mailto:":{validate:function(k,C,y){var A=k.slice(C);return y.re.mailto||(y.re.mailto=new RegExp("^"+y.re.src_email_name+"@"+y.re.src_host_strict,"i")),y.re.mailto.test(A)?A.match(y.re.mailto)[0].length:0}}},v="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",x="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");m.prototype.add=function(k,C){return this.__schemas__[k]=C,_(this),this},m.prototype.set=function(k){return this.__opts__=t(this.__opts__,k),this},m.prototype.test=function(k){if(this.__text_cache__=k,this.__index__=-1,!k.length)return!1;var C,y,A,T,L,j,S,M;if(this.re.schema_test.test(k)){for(S=this.re.schema_search,S.lastIndex=0;(C=S.exec(k))!==null;)if(T=this.testSchemaAt(k,C[2],S.lastIndex)){this.__schema__=C[2],this.__index__=C.index+C[1].length,this.__last_index__=C.index+C[0].length+T;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(M=k.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||M<this.__index__)&&(y=k.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(L=y.index+y[1].length,(this.__index__<0||L<this.__index__)&&(this.__schema__="",this.__index__=L,this.__last_index__=y.index+y[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&k.indexOf("@")>=0&&(A=k.match(this.re.email_fuzzy))!==null&&(L=A.index+A[1].length,j=A.index+A[0].length,(this.__index__<0||L<this.__index__||L===this.__index__&&j>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=L,this.__last_index__=j)),this.__index__>=0},m.prototype.pretest=function(k){return this.re.pretest.test(k)},m.prototype.testSchemaAt=function(k,C,y){return this.__compiled__[C.toLowerCase()]?this.__compiled__[C.toLowerCase()].validate(k,y,this):0},m.prototype.match=function(k){var C=0,y=[];this.__index__>=0&&this.__text_cache__===k&&(y.push(b(this,C)),C=this.__last_index__);for(var A=C?k.slice(C):k;this.test(A);)y.push(b(this,C)),A=A.slice(this.__last_index__),C+=this.__last_index__;return y.length?y:null},m.prototype.tlds=function(k,C){return k=Array.isArray(k)?k:[k],C?(this.__tlds__=this.__tlds__.concat(k).sort().filter(function(y,A,T){return y!==T[A-1]}).reverse(),_(this),this):(this.__tlds__=k.slice(),this.__tlds_replaced__=!0,_(this),this)},m.prototype.normalize=function(k){k.schema||(k.url="http://"+k.url),k.schema!=="mailto:"||/^mailto:/i.test(k.url)||(k.url="mailto:"+k.url)},m.prototype.onCompile=function(){},d.exports=m},function(d,h,s){d.exports=function(t){var r={};return r.src_Any=s(59).source,r.src_Cc=s(57).source,r.src_Z=s(58).source,r.src_P=s(34).source,r.src_ZPCc=[r.src_Z,r.src_P,r.src_Cc].join("|"),r.src_ZCc=[r.src_Z,r.src_Cc].join("|"),r.src_pseudo_letter="(?:(?![><｜]|"+r.src_ZPCc+")"+r.src_Any+")",r.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",r.src_auth="(?:(?:(?!"+r.src_ZCc+"|[@/\\[\\]()]).)+@)?",r.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",r.src_host_terminator="(?=$|[><｜]|"+r.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+r.src_ZPCc+"))",r.src_path="(?:[/?#](?:(?!"+r.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!`+r.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+r.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+r.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+r.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+r.src_ZCc+"|[']).)+\\'|\\'(?="+r.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+r.src_ZCc+"|[.]).|"+(t&&t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+r.src_ZCc+").|\\!(?!"+r.src_ZCc+"|[!]).|\\?(?!"+r.src_ZCc+"|[?]).)+|\\/)?",r.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',r.src_xn="xn--[a-z0-9\\-]{1,59}",r.src_domain_root="(?:"+r.src_xn+"|"+r.src_pseudo_letter+"{1,63})",r.src_domain="(?:"+r.src_xn+"|(?:"+r.src_pseudo_letter+")|(?:"+r.src_pseudo_letter+"(?:-|"+r.src_pseudo_letter+"){0,61}"+r.src_pseudo_letter+"))",r.src_host="(?:(?:(?:(?:"+r.src_domain+")\\.)*"+r.src_domain+"))",r.tpl_host_fuzzy="(?:"+r.src_ip4+"|(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%)))",r.tpl_host_no_ip_fuzzy="(?:(?:(?:"+r.src_domain+")\\.)+(?:%TLDS%))",r.src_host_strict=r.src_host+r.src_host_terminator,r.tpl_host_fuzzy_strict=r.tpl_host_fuzzy+r.src_host_terminator,r.src_host_port_strict=r.src_host+r.src_port+r.src_host_terminator,r.tpl_host_port_fuzzy_strict=r.tpl_host_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_port_no_ip_fuzzy_strict=r.tpl_host_no_ip_fuzzy+r.src_port+r.src_host_terminator,r.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+r.src_ZPCc+"|>|$))",r.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+r.src_ZCc+")("+r.src_email_name+"@"+r.tpl_host_fuzzy_strict+")",r.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+r.src_ZPCc+"))((?![$+<=>^`|｜])"+r.tpl_host_port_fuzzy_strict+r.src_path+")",r.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+r.src_ZPCc+"))((?![$+<=>^`|｜])"+r.tpl_host_port_no_ip_fuzzy_strict+r.src_path+")",r}},function(d,h,s){d.exports=function(t){function r(o,l,p,_){var f,b,m,g,w,v=o.bMarks[l]+o.tShift[l],x=o.eMarks[l];if(v+2>=x||o.src.charCodeAt(v++)!==42||o.src.charCodeAt(v++)!==91)return!1;for(g=v;v<x;v++){if((m=o.src.charCodeAt(v))===91)return!1;if(m===93){w=v;break}m===92&&v++}return!(w<0||o.src.charCodeAt(w+1)!==58)&&(!!_||(f=o.src.slice(g,w).replace(/\\(.)/g,"$1"),b=o.src.slice(w+2,x).trim(),f.length!==0&&b.length!==0&&(o.env.abbreviations||(o.env.abbreviations={}),o.env.abbreviations[":"+f]===void 0&&(o.env.abbreviations[":"+f]=b),o.line=l+1,!0)))}function e(o){var l,p,_,f,b,m,g,w,v,x,k,C,y,A=o.tokens;if(o.env.abbreviations){for(C=new RegExp("(?:"+Object.keys(o.env.abbreviations).map(function(T){return T.substr(1)}).sort(function(T,L){return L.length-T.length}).map(i).join("|")+")"),k="(^|"+u+"|"+c+"|["+a.split("").map(i).join("")+"])("+Object.keys(o.env.abbreviations).map(function(T){return T.substr(1)}).sort(function(T,L){return L.length-T.length}).map(i).join("|")+")($|"+u+"|"+c+"|["+a.split("").map(i).join("")+"])",v=new RegExp(k,"g"),p=0,_=A.length;p<_;p++)if(A[p].type==="inline"){for(f=A[p].children,l=f.length-1;l>=0;l--)if(y=f[l],y.type==="text"&&(w=0,m=y.content,v.lastIndex=0,g=[],C.test(m))){for(;x=v.exec(m);)(x.index>0||x[1].length>0)&&(b=new o.Token("text","",0),b.content=m.slice(w,x.index+x[1].length),g.push(b)),b=new o.Token("abbr_open","abbr",1),b.attrs=[["title",o.env.abbreviations[":"+x[2]]]],g.push(b),b=new o.Token("text","",0),b.content=x[2],g.push(b),b=new o.Token("abbr_close","abbr",-1),g.push(b),v.lastIndex-=x[3].length,w=v.lastIndex;g.length&&(w<m.length&&(b=new o.Token("text","",0),b.content=m.slice(w),g.push(b)),A[p].children=f=n(f,l,g))}}}}var i=t.utils.escapeRE,n=t.utils.arrayReplaceAt,a=" \r\n$+<=>^`|~",u=t.utils.lib.ucmicro.P.source,c=t.utils.lib.ucmicro.Z.source;t.block.ruler.before("reference","abbr_def",r,{alt:["paragraph","reference"]}),t.core.ruler.after("linkify","abbr_replace",e)}},function(d,h,s){d.exports=function(t,r,e){function i(f){return f.trim().split(" ",2)[0]===r}function n(f,b,m,g,w){return f[b].nesting===1&&f[b].attrPush(["class",r]),w.renderToken(f,b,m,g,w)}function a(f,b,m,g){var w,v,x,k,C,y,A,T,L=!1,j=f.bMarks[b]+f.tShift[b],S=f.eMarks[b];if(o!==f.src.charCodeAt(j))return!1;for(w=j+1;w<=S&&c[(w-j)%l]===f.src[w];w++);if((x=Math.floor((w-j)/l))<u||(w-=(w-j)%l,k=f.src.slice(j,w),C=f.src.slice(w,S),!p(C)))return!1;if(g)return!0;for(v=b;!(++v>=m)&&(j=f.bMarks[v]+f.tShift[v],S=f.eMarks[v],!(j<S&&f.sCount[v]<f.blkIndent));)if(o===f.src.charCodeAt(j)&&!(f.sCount[v]-f.blkIndent>=4)){for(w=j+1;w<=S&&c[(w-j)%l]===f.src[w];w++);if(!(Math.floor((w-j)/l)<x||(w-=(w-j)%l,(w=f.skipSpaces(w))<S))){L=!0;break}}return A=f.parentType,T=f.lineMax,f.parentType="container",f.lineMax=v,y=f.push("container_"+r+"_open","div",1),y.markup=k,y.block=!0,y.info=C,y.map=[b,v],f.md.block.tokenize(f,b+1,v),y=f.push("container_"+r+"_close","div",-1),y.markup=f.src.slice(j,w),y.block=!0,f.parentType=A,f.lineMax=T,f.line=v+(L?1:0),!0}e=e||{};var u=3,c=e.marker||":",o=c.charCodeAt(0),l=c.length,p=e.validate||i,_=e.render||n;t.block.ruler.before("fence","container_"+r,a,{alt:["paragraph","reference","blockquote","list"]}),t.renderer.rules["container_"+r+"_open"]=_,t.renderer.rules["container_"+r+"_close"]=_}},function(d,h,s){d.exports=function(t){function r(a,u){var c,o,l=a.bMarks[u]+a.tShift[u],p=a.eMarks[u];return l>=p||(o=a.src.charCodeAt(l++))!==126&&o!==58?-1:(c=a.skipSpaces(l),l===c||c>=p?-1:l)}function e(a,u){var c,o,l=a.level+2;for(c=u+2,o=a.tokens.length-2;c<o;c++)a.tokens[c].level===l&&a.tokens[c].type==="paragraph_open"&&(a.tokens[c+2].hidden=!0,a.tokens[c].hidden=!0,c+=2)}function i(a,u,c,o){var l,p,_,f,b,m,g,w,v,x,k,C,y,A,T,L,j,S,M,$;if(o)return!(a.ddIndent<0)&&r(a,u)>=0;if((v=u+1)>=c||a.isEmpty(v)&&++v>=c||a.sCount[v]<a.blkIndent||(p=r(a,v))<0)return!1;g=a.tokens.length,M=!0,$=a.push("dl_open","dl",1),$.map=m=[u,0],f=u,_=v;t:for(;;){for(S=!1,$=a.push("dt_open","dt",1),$.map=[f,f],$=a.push("inline","",0),$.map=[f,f],$.content=a.getLines(f,f+1,a.blkIndent,!1).trim(),$.children=[],$=a.push("dt_close","dt",-1);;){for($=a.push("dd_open","dd",1),$.map=b=[v,0],j=p,w=a.eMarks[_],x=a.sCount[_]+p-(a.bMarks[_]+a.tShift[_]);j<w&&(l=a.src.charCodeAt(j),n(l));)l===9?x+=4-x%4:x++,j++;if(p=j,L=a.tight,k=a.ddIndent,C=a.blkIndent,T=a.tShift[_],A=a.sCount[_],y=a.parentType,a.blkIndent=a.ddIndent=a.sCount[_]+2,a.tShift[_]=p-a.bMarks[_],a.sCount[_]=x,a.tight=!0,a.parentType="deflist",a.md.block.tokenize(a,_,c,!0),a.tight&&!S||(M=!1),S=a.line-_>1&&a.isEmpty(a.line-1),a.tShift[_]=T,a.sCount[_]=A,a.tight=L,a.parentType=y,a.blkIndent=C,a.ddIndent=k,$=a.push("dd_close","dd",-1),b[1]=v=a.line,v>=c||a.sCount[v]<a.blkIndent)break t;if((p=r(a,v))<0)break;_=v}if(v>=c||(f=v,a.isEmpty(f))||a.sCount[f]<a.blkIndent||(_=f+1)>=c||(a.isEmpty(_)&&_++,_>=c)||a.sCount[_]<a.blkIndent||(p=r(a,_))<0)break}return $=a.push("dl_close","dl",-1),m[1]=v,a.line=v,M&&e(a,g),!0}var n=t.utils.isSpace;t.block.ruler.before("paragraph","deflist",i,{alt:["paragraph","reference"]})}},function(d,h,s){var t=s(122),r=s(123),e=s(125),i=s(126),n=s(124);d.exports=function(a,u){var c={defs:t,shortcuts:r,enabled:[]},o=n(a.utils.assign({},c,u||{}));a.renderer.rules.emoji=e,a.core.ruler.push("emoji",i(a,o.defs,o.shortcuts,o.scanRE,o.replaceRE))}},function(d,h){d.exports={100:"💯",1234:"🔢",grinning:"😀",smiley:"😃",smile:"😄",grin:"😁",laughing:"😆",satisfied:"😆",sweat_smile:"😅",joy:"😂",rofl:"🤣",relaxed:"☺️",blush:"😊",innocent:"😇",slightly_smiling_face:"🙂",upside_down_face:"🙃",wink:"😉",relieved:"😌",heart_eyes:"😍",kissing_heart:"😘",kissing:"😗",kissing_smiling_eyes:"😙",kissing_closed_eyes:"😚",yum:"😋",stuck_out_tongue_winking_eye:"😜",stuck_out_tongue_closed_eyes:"😝",stuck_out_tongue:"😛",money_mouth_face:"🤑",hugs:"🤗",nerd_face:"🤓",sunglasses:"😎",clown_face:"🤡",cowboy_hat_face:"🤠",smirk:"😏",unamused:"😒",disappointed:"😞",pensive:"😔",worried:"😟",confused:"😕",slightly_frowning_face:"🙁",frowning_face:"☹️",persevere:"😣",confounded:"😖",tired_face:"😫",weary:"😩",triumph:"😤",angry:"😠",rage:"😡",pout:"😡",no_mouth:"😶",neutral_face:"😐",expressionless:"😑",hushed:"😯",frowning:"😦",anguished:"😧",open_mouth:"😮",astonished:"😲",dizzy_face:"😵",flushed:"😳",scream:"😱",fearful:"😨",cold_sweat:"😰",cry:"😢",disappointed_relieved:"😥",drooling_face:"🤤",sob:"😭",sweat:"😓",sleepy:"😪",sleeping:"😴",roll_eyes:"🙄",thinking:"🤔",lying_face:"🤥",grimacing:"😬",zipper_mouth_face:"🤐",nauseated_face:"🤢",sneezing_face:"🤧",mask:"😷",face_with_thermometer:"🤒",face_with_head_bandage:"🤕",smiling_imp:"😈",imp:"👿",japanese_ogre:"👹",japanese_goblin:"👺",hankey:"💩",poop:"💩",shit:"💩",ghost:"👻",skull:"💀",skull_and_crossbones:"☠️",alien:"👽",space_invader:"👾",robot:"🤖",jack_o_lantern:"🎃",smiley_cat:"😺",smile_cat:"😸",joy_cat:"😹",heart_eyes_cat:"😻",smirk_cat:"😼",kissing_cat:"😽",scream_cat:"🙀",crying_cat_face:"😿",pouting_cat:"😾",open_hands:"👐",raised_hands:"🙌",clap:"👏",pray:"🙏",handshake:"🤝","+1":"👍",thumbsup:"👍","-1":"👎",thumbsdown:"👎",fist_oncoming:"👊",facepunch:"👊",punch:"👊",fist_raised:"✊",fist:"✊",fist_left:"🤛",fist_right:"🤜",crossed_fingers:"🤞",v:"✌️",metal:"🤘",ok_hand:"👌",point_left:"👈",point_right:"👉",point_up_2:"👆",point_down:"👇",point_up:"☝️",hand:"✋",raised_hand:"✋",raised_back_of_hand:"🤚",raised_hand_with_fingers_splayed:"🖐",vulcan_salute:"🖖",wave:"👋",call_me_hand:"🤙",muscle:"💪",middle_finger:"🖕",fu:"🖕",writing_hand:"✍️",selfie:"🤳",nail_care:"💅",ring:"💍",lipstick:"💄",kiss:"💋",lips:"👄",tongue:"👅",ear:"👂",nose:"👃",footprints:"👣",eye:"👁",eyes:"👀",speaking_head:"🗣",bust_in_silhouette:"👤",busts_in_silhouette:"👥",baby:"👶",boy:"👦",girl:"👧",man:"👨",woman:"👩",blonde_woman:"👱‍♀",blonde_man:"👱",person_with_blond_hair:"👱",older_man:"👴",older_woman:"👵",man_with_gua_pi_mao:"👲",woman_with_turban:"👳‍♀",man_with_turban:"👳",policewoman:"👮‍♀",policeman:"👮",cop:"👮",construction_worker_woman:"👷‍♀",construction_worker_man:"👷",construction_worker:"👷",guardswoman:"💂‍♀",guardsman:"💂",female_detective:"🕵️‍♀️",male_detective:"🕵",detective:"🕵",woman_health_worker:"👩‍⚕",man_health_worker:"👨‍⚕",woman_farmer:"👩‍🌾",man_farmer:"👨‍🌾",woman_cook:"👩‍🍳",man_cook:"👨‍🍳",woman_student:"👩‍🎓",man_student:"👨‍🎓",woman_singer:"👩‍🎤",man_singer:"👨‍🎤",woman_teacher:"👩‍🏫",man_teacher:"👨‍🏫",woman_factory_worker:"👩‍🏭",man_factory_worker:"👨‍🏭",woman_technologist:"👩‍💻",man_technologist:"👨‍💻",woman_office_worker:"👩‍💼",man_office_worker:"👨‍💼",woman_mechanic:"👩‍🔧",man_mechanic:"👨‍🔧",woman_scientist:"👩‍🔬",man_scientist:"👨‍🔬",woman_artist:"👩‍🎨",man_artist:"👨‍🎨",woman_firefighter:"👩‍🚒",man_firefighter:"👨‍🚒",woman_pilot:"👩‍✈",man_pilot:"👨‍✈",woman_astronaut:"👩‍🚀",man_astronaut:"👨‍🚀",woman_judge:"👩‍⚖",man_judge:"👨‍⚖",mrs_claus:"🤶",santa:"🎅",princess:"👸",prince:"🤴",bride_with_veil:"👰",man_in_tuxedo:"🤵",angel:"👼",pregnant_woman:"🤰",bowing_woman:"🙇‍♀",bowing_man:"🙇",bow:"🙇",tipping_hand_woman:"💁",information_desk_person:"💁",sassy_woman:"💁",tipping_hand_man:"💁‍♂",sassy_man:"💁‍♂",no_good_woman:"🙅",no_good:"🙅",ng_woman:"🙅",no_good_man:"🙅‍♂",ng_man:"🙅‍♂",ok_woman:"🙆",ok_man:"🙆‍♂",raising_hand_woman:"🙋",raising_hand:"🙋",raising_hand_man:"🙋‍♂",woman_facepalming:"🤦‍♀",man_facepalming:"🤦‍♂",woman_shrugging:"🤷‍♀",man_shrugging:"🤷‍♂",pouting_woman:"🙎",person_with_pouting_face:"🙎",pouting_man:"🙎‍♂",frowning_woman:"🙍",person_frowning:"🙍",frowning_man:"🙍‍♂",haircut_woman:"💇",haircut:"💇",haircut_man:"💇‍♂",massage_woman:"💆",massage:"💆",massage_man:"💆‍♂",business_suit_levitating:"🕴",dancer:"💃",man_dancing:"🕺",dancing_women:"👯",dancers:"👯",dancing_men:"👯‍♂",walking_woman:"🚶‍♀",walking_man:"🚶",walking:"🚶",running_woman:"🏃‍♀",running_man:"🏃",runner:"🏃",running:"🏃",couple:"👫",two_women_holding_hands:"👭",two_men_holding_hands:"👬",couple_with_heart_woman_man:"💑",couple_with_heart:"💑",couple_with_heart_woman_woman:"👩‍❤️‍👩",couple_with_heart_man_man:"👨‍❤️‍👨",couplekiss_man_woman:"💏",couplekiss_woman_woman:"👩‍❤️‍💋‍👩",couplekiss_man_man:"👨‍❤️‍💋‍👨",family_man_woman_boy:"👪",family:"👪",family_man_woman_girl:"👨‍👩‍👧",family_man_woman_girl_boy:"👨‍👩‍👧‍👦",family_man_woman_boy_boy:"👨‍👩‍👦‍👦",family_man_woman_girl_girl:"👨‍👩‍👧‍👧",family_woman_woman_boy:"👩‍👩‍👦",family_woman_woman_girl:"👩‍👩‍👧",family_woman_woman_girl_boy:"👩‍👩‍👧‍👦",family_woman_woman_boy_boy:"👩‍👩‍👦‍👦",family_woman_woman_girl_girl:"👩‍👩‍👧‍👧",family_man_man_boy:"👨‍👨‍👦",family_man_man_girl:"👨‍👨‍👧",family_man_man_girl_boy:"👨‍👨‍👧‍👦",family_man_man_boy_boy:"👨‍👨‍👦‍👦",family_man_man_girl_girl:"👨‍👨‍👧‍👧",family_woman_boy:"👩‍👦",family_woman_girl:"👩‍👧",family_woman_girl_boy:"👩‍👧‍👦",family_woman_boy_boy:"👩‍👦‍👦",family_woman_girl_girl:"👩‍👧‍👧",family_man_boy:"👨‍👦",family_man_girl:"👨‍👧",family_man_girl_boy:"👨‍👧‍👦",family_man_boy_boy:"👨‍👦‍👦",family_man_girl_girl:"👨‍👧‍👧",womans_clothes:"👚",shirt:"👕",tshirt:"👕",jeans:"👖",necktie:"👔",dress:"👗",bikini:"👙",kimono:"👘",high_heel:"👠",sandal:"👡",boot:"👢",mans_shoe:"👞",shoe:"👞",athletic_shoe:"👟",womans_hat:"👒",tophat:"🎩",mortar_board:"🎓",crown:"👑",rescue_worker_helmet:"⛑",school_satchel:"🎒",pouch:"👝",purse:"👛",handbag:"👜",briefcase:"💼",eyeglasses:"👓",dark_sunglasses:"🕶",closed_umbrella:"🌂",open_umbrella:"☂️",dog:"🐶",cat:"🐱",mouse:"🐭",hamster:"🐹",rabbit:"🐰",fox_face:"🦊",bear:"🐻",panda_face:"🐼",koala:"🐨",tiger:"🐯",lion:"🦁",cow:"🐮",pig:"🐷",pig_nose:"🐽",frog:"🐸",monkey_face:"🐵",see_no_evil:"🙈",hear_no_evil:"🙉",speak_no_evil:"🙊",monkey:"🐒",chicken:"🐔",penguin:"🐧",bird:"🐦",baby_chick:"🐤",hatching_chick:"🐣",hatched_chick:"🐥",duck:"🦆",eagle:"🦅",owl:"🦉",bat:"🦇",wolf:"🐺",boar:"🐗",horse:"🐴",unicorn:"🦄",bee:"🐝",honeybee:"🐝",bug:"🐛",butterfly:"🦋",snail:"🐌",shell:"🐚",beetle:"🐞",ant:"🐜",spider:"🕷",spider_web:"🕸",turtle:"🐢",snake:"🐍",lizard:"🦎",scorpion:"🦂",crab:"🦀",squid:"🦑",octopus:"🐙",shrimp:"🦐",tropical_fish:"🐠",fish:"🐟",blowfish:"🐡",dolphin:"🐬",flipper:"🐬",shark:"🦈",whale:"🐳",whale2:"🐋",crocodile:"🐊",leopard:"🐆",tiger2:"🐅",water_buffalo:"🐃",ox:"🐂",cow2:"🐄",deer:"🦌",dromedary_camel:"🐪",camel:"🐫",elephant:"🐘",rhinoceros:"🦏",gorilla:"🦍",racehorse:"🐎",pig2:"🐖",goat:"🐐",ram:"🐏",sheep:"🐑",dog2:"🐕",poodle:"🐩",cat2:"🐈",rooster:"🐓",turkey:"🦃",dove:"🕊",rabbit2:"🐇",mouse2:"🐁",rat:"🐀",chipmunk:"🐿",feet:"🐾",paw_prints:"🐾",dragon:"🐉",dragon_face:"🐲",cactus:"🌵",christmas_tree:"🎄",evergreen_tree:"🌲",deciduous_tree:"🌳",palm_tree:"🌴",seedling:"🌱",herb:"🌿",shamrock:"☘️",four_leaf_clover:"🍀",bamboo:"🎍",tanabata_tree:"🎋",leaves:"🍃",fallen_leaf:"🍂",maple_leaf:"🍁",mushroom:"🍄",ear_of_rice:"🌾",bouquet:"💐",tulip:"🌷",rose:"🌹",wilted_flower:"🥀",sunflower:"🌻",blossom:"🌼",cherry_blossom:"🌸",hibiscus:"🌺",earth_americas:"🌎",earth_africa:"🌍",earth_asia:"🌏",full_moon:"🌕",waning_gibbous_moon:"🌖",last_quarter_moon:"🌗",waning_crescent_moon:"🌘",new_moon:"🌑",waxing_crescent_moon:"🌒",first_quarter_moon:"🌓",moon:"🌔",waxing_gibbous_moon:"🌔",new_moon_with_face:"🌚",full_moon_with_face:"🌝",sun_with_face:"🌞",first_quarter_moon_with_face:"🌛",last_quarter_moon_with_face:"🌜",crescent_moon:"🌙",dizzy:"💫",star:"⭐️",star2:"🌟",sparkles:"✨",zap:"⚡️",fire:"🔥",boom:"💥",collision:"💥",comet:"☄",sunny:"☀️",sun_behind_small_cloud:"🌤",partly_sunny:"⛅️",sun_behind_large_cloud:"🌥",sun_behind_rain_cloud:"🌦",rainbow:"🌈",cloud:"☁️",cloud_with_rain:"🌧",cloud_with_lightning_and_rain:"⛈",cloud_with_lightning:"🌩",cloud_with_snow:"🌨",snowman_with_snow:"☃️",snowman:"⛄️",snowflake:"❄️",wind_face:"🌬",dash:"💨",tornado:"🌪",fog:"🌫",ocean:"🌊",droplet:"💧",sweat_drops:"💦",umbrella:"☔️",green_apple:"🍏",apple:"🍎",pear:"🍐",tangerine:"🍊",orange:"🍊",mandarin:"🍊",lemon:"🍋",banana:"🍌",watermelon:"🍉",grapes:"🍇",strawberry:"🍓",melon:"🍈",cherries:"🍒",peach:"🍑",pineapple:"🍍",kiwi_fruit:"🥝",avocado:"🥑",tomato:"🍅",eggplant:"🍆",cucumber:"🥒",carrot:"🥕",corn:"🌽",hot_pepper:"🌶",potato:"🥔",sweet_potato:"🍠",chestnut:"🌰",peanuts:"🥜",honey_pot:"🍯",croissant:"🥐",bread:"🍞",baguette_bread:"🥖",cheese:"🧀",egg:"🥚",fried_egg:"🍳",bacon:"🥓",pancakes:"🥞",fried_shrimp:"🍤",poultry_leg:"🍗",meat_on_bone:"🍖",pizza:"🍕",hotdog:"🌭",hamburger:"🍔",fries:"🍟",stuffed_flatbread:"🥙",taco:"🌮",burrito:"🌯",green_salad:"🥗",shallow_pan_of_food:"🥘",spaghetti:"🍝",ramen:"🍜",stew:"🍲",fish_cake:"🍥",sushi:"🍣",bento:"🍱",curry:"🍛",rice:"🍚",rice_ball:"🍙",rice_cracker:"🍘",oden:"🍢",dango:"🍡",shaved_ice:"🍧",ice_cream:"🍨",icecream:"🍦",cake:"🍰",birthday:"🎂",custard:"🍮",lollipop:"🍭",candy:"🍬",chocolate_bar:"🍫",popcorn:"🍿",doughnut:"🍩",cookie:"🍪",milk_glass:"🥛",baby_bottle:"🍼",coffee:"☕️",tea:"🍵",sake:"🍶",beer:"🍺",beers:"🍻",clinking_glasses:"🥂",wine_glass:"🍷",tumbler_glass:"🥃",cocktail:"🍸",tropical_drink:"🍹",champagne:"🍾",spoon:"🥄",fork_and_knife:"🍴",plate_with_cutlery:"🍽",soccer:"⚽️",basketball:"🏀",football:"🏈",baseball:"⚾️",tennis:"🎾",volleyball:"🏐",rugby_football:"🏉","8ball":"🎱",ping_pong:"🏓",badminton:"🏸",goal_net:"🥅",ice_hockey:"🏒",field_hockey:"🏑",cricket:"🏏",golf:"⛳️",bow_and_arrow:"🏹",fishing_pole_and_fish:"🎣",boxing_glove:"🥊",martial_arts_uniform:"🥋",ice_skate:"⛸",ski:"🎿",skier:"⛷",snowboarder:"🏂",weight_lifting_woman:"🏋️‍♀️",weight_lifting_man:"🏋",person_fencing:"🤺",women_wrestling:"🤼‍♀",men_wrestling:"🤼‍♂",woman_cartwheeling:"🤸‍♀",man_cartwheeling:"🤸‍♂",basketball_woman:"⛹️‍♀️",basketball_man:"⛹",woman_playing_handball:"🤾‍♀",man_playing_handball:"🤾‍♂",golfing_woman:"🏌️‍♀️",golfing_man:"🏌",surfing_woman:"🏄‍♀",surfing_man:"🏄",surfer:"🏄",swimming_woman:"🏊‍♀",swimming_man:"🏊",swimmer:"🏊",woman_playing_water_polo:"🤽‍♀",man_playing_water_polo:"🤽‍♂",rowing_woman:"🚣‍♀",rowing_man:"🚣",rowboat:"🚣",horse_racing:"🏇",biking_woman:"🚴‍♀",biking_man:"🚴",bicyclist:"🚴",mountain_biking_woman:"🚵‍♀",mountain_biking_man:"🚵",mountain_bicyclist:"🚵",running_shirt_with_sash:"🎽",medal_sports:"🏅",medal_military:"🎖","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉",trophy:"🏆",rosette:"🏵",reminder_ribbon:"🎗",ticket:"🎫",tickets:"🎟",circus_tent:"🎪",woman_juggling:"🤹‍♀",man_juggling:"🤹‍♂",performing_arts:"🎭",art:"🎨",clapper:"🎬",microphone:"🎤",headphones:"🎧",musical_score:"🎼",musical_keyboard:"🎹",drum:"🥁",saxophone:"🎷",trumpet:"🎺",guitar:"🎸",violin:"🎻",game_die:"🎲",dart:"🎯",bowling:"🎳",video_game:"🎮",slot_machine:"🎰",car:"🚗",red_car:"🚗",taxi:"🚕",blue_car:"🚙",bus:"🚌",trolleybus:"🚎",racing_car:"🏎",police_car:"🚓",ambulance:"🚑",fire_engine:"🚒",minibus:"🚐",truck:"🚚",articulated_lorry:"🚛",tractor:"🚜",kick_scooter:"🛴",bike:"🚲",motor_scooter:"🛵",motorcycle:"🏍",rotating_light:"🚨",oncoming_police_car:"🚔",oncoming_bus:"🚍",oncoming_automobile:"🚘",oncoming_taxi:"🚖",aerial_tramway:"🚡",mountain_cableway:"🚠",suspension_railway:"🚟",railway_car:"🚃",train:"🚋",mountain_railway:"🚞",monorail:"🚝",bullettrain_side:"🚄",bullettrain_front:"🚅",light_rail:"🚈",steam_locomotive:"🚂",train2:"🚆",metro:"🚇",tram:"🚊",station:"🚉",helicopter:"🚁",small_airplane:"🛩",airplane:"✈️",flight_departure:"🛫",flight_arrival:"🛬",rocket:"🚀",artificial_satellite:"🛰",seat:"💺",canoe:"🛶",boat:"⛵️",sailboat:"⛵️",motor_boat:"🛥",speedboat:"🚤",passenger_ship:"🛳",ferry:"⛴",ship:"🚢",anchor:"⚓️",construction:"🚧",fuelpump:"⛽️",busstop:"🚏",vertical_traffic_light:"🚦",traffic_light:"🚥",world_map:"🗺",moyai:"🗿",statue_of_liberty:"🗽",fountain:"⛲️",tokyo_tower:"🗼",european_castle:"🏰",japanese_castle:"🏯",stadium:"🏟",ferris_wheel:"🎡",roller_coaster:"🎢",carousel_horse:"🎠",parasol_on_ground:"⛱",beach_umbrella:"🏖",desert_island:"🏝",mountain:"⛰",mountain_snow:"🏔",mount_fuji:"🗻",volcano:"🌋",desert:"🏜",camping:"🏕",tent:"⛺️",railway_track:"🛤",motorway:"🛣",building_construction:"🏗",factory:"🏭",house:"🏠",house_with_garden:"🏡",houses:"🏘",derelict_house:"🏚",office:"🏢",department_store:"🏬",post_office:"🏣",european_post_office:"🏤",hospital:"🏥",bank:"🏦",hotel:"🏨",convenience_store:"🏪",school:"🏫",love_hotel:"🏩",wedding:"💒",classical_building:"🏛",church:"⛪️",mosque:"🕌",synagogue:"🕍",kaaba:"🕋",shinto_shrine:"⛩",japan:"🗾",rice_scene:"🎑",national_park:"🏞",sunrise:"🌅",sunrise_over_mountains:"🌄",stars:"🌠",sparkler:"🎇",fireworks:"🎆",city_sunrise:"🌇",city_sunset:"🌆",cityscape:"🏙",night_with_stars:"🌃",milky_way:"🌌",bridge_at_night:"🌉",foggy:"🌁",watch:"⌚️",iphone:"📱",calling:"📲",computer:"💻",keyboard:"⌨️",desktop_computer:"🖥",printer:"🖨",computer_mouse:"🖱",trackball:"🖲",joystick:"🕹",clamp:"🗜",minidisc:"💽",floppy_disk:"💾",cd:"💿",dvd:"📀",vhs:"📼",camera:"📷",camera_flash:"📸",video_camera:"📹",movie_camera:"🎥",film_projector:"📽",film_strip:"🎞",telephone_receiver:"📞",phone:"☎️",telephone:"☎️",pager:"📟",fax:"📠",tv:"📺",radio:"📻",studio_microphone:"🎙",level_slider:"🎚",control_knobs:"🎛",stopwatch:"⏱",timer_clock:"⏲",alarm_clock:"⏰",mantelpiece_clock:"🕰",hourglass:"⌛️",hourglass_flowing_sand:"⏳",satellite:"📡",battery:"🔋",electric_plug:"🔌",bulb:"💡",flashlight:"🔦",candle:"🕯",wastebasket:"🗑",oil_drum:"🛢",money_with_wings:"💸",dollar:"💵",yen:"💴",euro:"💶",pound:"💷",moneybag:"💰",credit_card:"💳",gem:"💎",balance_scale:"⚖️",wrench:"🔧",hammer:"🔨",hammer_and_pick:"⚒",hammer_and_wrench:"🛠",pick:"⛏",nut_and_bolt:"🔩",gear:"⚙️",chains:"⛓",gun:"🔫",bomb:"💣",hocho:"🔪",knife:"🔪",dagger:"🗡",crossed_swords:"⚔️",shield:"🛡",smoking:"🚬",coffin:"⚰️",funeral_urn:"⚱️",amphora:"🏺",crystal_ball:"🔮",prayer_beads:"📿",barber:"💈",alembic:"⚗️",telescope:"🔭",microscope:"🔬",hole:"🕳",pill:"💊",syringe:"💉",thermometer:"🌡",toilet:"🚽",potable_water:"🚰",shower:"🚿",bathtub:"🛁",bath:"🛀",bellhop_bell:"🛎",key:"🔑",old_key:"🗝",door:"🚪",couch_and_lamp:"🛋",bed:"🛏",sleeping_bed:"🛌",framed_picture:"🖼",shopping:"🛍",shopping_cart:"🛒",gift:"🎁",balloon:"🎈",flags:"🎏",ribbon:"🎀",confetti_ball:"🎊",tada:"🎉",dolls:"🎎",izakaya_lantern:"🏮",lantern:"🏮",wind_chime:"🎐",email:"✉️",envelope:"✉️",envelope_with_arrow:"📩",incoming_envelope:"📨","e-mail":"📧",love_letter:"💌",inbox_tray:"📥",outbox_tray:"📤",package:"📦",label:"🏷",mailbox_closed:"📪",mailbox:"📫",mailbox_with_mail:"📬",mailbox_with_no_mail:"📭",postbox:"📮",postal_horn:"📯",scroll:"📜",page_with_curl:"📃",page_facing_up:"📄",bookmark_tabs:"📑",bar_chart:"📊",chart_with_upwards_trend:"📈",chart_with_downwards_trend:"📉",spiral_notepad:"🗒",spiral_calendar:"🗓",calendar:"📆",date:"📅",card_index:"📇",card_file_box:"🗃",ballot_box:"🗳",file_cabinet:"🗄",clipboard:"📋",file_folder:"📁",open_file_folder:"📂",card_index_dividers:"🗂",newspaper_roll:"🗞",newspaper:"📰",notebook:"📓",notebook_with_decorative_cover:"📔",ledger:"📒",closed_book:"📕",green_book:"📗",blue_book:"📘",orange_book:"📙",books:"📚",book:"📖",open_book:"📖",bookmark:"🔖",link:"🔗",paperclip:"📎",paperclips:"🖇",triangular_ruler:"📐",straight_ruler:"📏",pushpin:"📌",round_pushpin:"📍",scissors:"✂️",pen:"🖊",fountain_pen:"🖋",black_nib:"✒️",paintbrush:"🖌",crayon:"🖍",memo:"📝",pencil:"📝",pencil2:"✏️",mag:"🔍",mag_right:"🔎",lock_with_ink_pen:"🔏",closed_lock_with_key:"🔐",lock:"🔒",unlock:"🔓",heart:"❤️",yellow_heart:"💛",green_heart:"💚",blue_heart:"💙",purple_heart:"💜",black_heart:"🖤",broken_heart:"💔",heavy_heart_exclamation:"❣️",two_hearts:"💕",revolving_hearts:"💞",heartbeat:"💓",heartpulse:"💗",sparkling_heart:"💖",cupid:"💘",gift_heart:"💝",heart_decoration:"💟",peace_symbol:"☮️",latin_cross:"✝️",star_and_crescent:"☪️",om:"🕉",wheel_of_dharma:"☸️",star_of_david:"✡️",six_pointed_star:"🔯",menorah:"🕎",yin_yang:"☯️",orthodox_cross:"☦️",place_of_worship:"🛐",ophiuchus:"⛎",aries:"♈️",taurus:"♉️",gemini:"♊️",cancer:"♋️",leo:"♌️",virgo:"♍️",libra:"♎️",scorpius:"♏️",sagittarius:"♐️",capricorn:"♑️",aquarius:"♒️",pisces:"♓️",id:"🆔",atom_symbol:"⚛️",accept:"🉑",radioactive:"☢️",biohazard:"☣️",mobile_phone_off:"📴",vibration_mode:"📳",eight_pointed_black_star:"✴️",vs:"🆚",white_flower:"💮",ideograph_advantage:"🉐",secret:"㊙️",congratulations:"㊗️",u6e80:"🈵",a:"🅰️",b:"🅱️",ab:"🆎",cl:"🆑",o2:"🅾️",sos:"🆘",x:"❌",o:"⭕️",stop_sign:"🛑",no_entry:"⛔️",name_badge:"📛",no_entry_sign:"🚫",anger:"💢",hotsprings:"♨️",no_pedestrians:"🚷",do_not_litter:"🚯",no_bicycles:"🚳","non-potable_water":"🚱",underage:"🔞",no_mobile_phones:"📵",no_smoking:"🚭",exclamation:"❗️",heavy_exclamation_mark:"❗️",grey_exclamation:"❕",question:"❓",grey_question:"❔",bangbang:"‼️",interrobang:"⁉️",low_brightness:"🔅",high_brightness:"🔆",part_alternation_mark:"〽️",warning:"⚠️",children_crossing:"🚸",trident:"🔱",fleur_de_lis:"⚜️",beginner:"🔰",recycle:"♻️",white_check_mark:"✅",chart:"💹",sparkle:"❇️",eight_spoked_asterisk:"✳️",negative_squared_cross_mark:"❎",globe_with_meridians:"🌐",diamond_shape_with_a_dot_inside:"💠",m:"Ⓜ️",cyclone:"🌀",zzz:"💤",atm:"🏧",wc:"🚾",wheelchair:"♿️",parking:"🅿️",sa:"🈂️",passport_control:"🛂",customs:"🛃",baggage_claim:"🛄",left_luggage:"🛅",mens:"🚹",womens:"🚺",baby_symbol:"🚼",restroom:"🚻",put_litter_in_its_place:"🚮",cinema:"🎦",signal_strength:"📶",koko:"🈁",symbols:"🔣",information_source:"ℹ️",abc:"🔤",abcd:"🔡",capital_abcd:"🔠",ng:"🆖",ok:"🆗",up:"🆙",cool:"🆒",new:"🆕",free:"🆓",zero:"0️⃣",one:"1️⃣",two:"2️⃣",three:"3️⃣",four:"4️⃣",five:"5️⃣",six:"6️⃣",seven:"7️⃣",eight:"8️⃣",nine:"9️⃣",keycap_ten:"🔟",hash:"#️⃣",asterisk:"*️⃣",arrow_forward:"▶️",pause_button:"⏸",play_or_pause_button:"⏯",stop_button:"⏹",record_button:"⏺",next_track_button:"⏭",previous_track_button:"⏮",fast_forward:"⏩",rewind:"⏪",arrow_double_up:"⏫",arrow_double_down:"⏬",arrow_backward:"◀️",arrow_up_small:"🔼",arrow_down_small:"🔽",arrow_right:"➡️",arrow_left:"⬅️",arrow_up:"⬆️",arrow_down:"⬇️",arrow_upper_right:"↗️",arrow_lower_right:"↘️",arrow_lower_left:"↙️",arrow_upper_left:"↖️",arrow_up_down:"↕️",left_right_arrow:"↔️",arrow_right_hook:"↪️",leftwards_arrow_with_hook:"↩️",arrow_heading_up:"⤴️",arrow_heading_down:"⤵️",twisted_rightwards_arrows:"🔀",repeat:"🔁",repeat_one:"🔂",arrows_counterclockwise:"🔄",arrows_clockwise:"🔃",musical_note:"🎵",notes:"🎶",heavy_plus_sign:"➕",heavy_minus_sign:"➖",heavy_division_sign:"➗",heavy_multiplication_x:"✖️",heavy_dollar_sign:"💲",currency_exchange:"💱",tm:"™️",copyright:"©️",registered:"®️",wavy_dash:"〰️",curly_loop:"➰",loop:"➿",end:"🔚",back:"🔙",on:"🔛",top:"🔝",soon:"🔜",heavy_check_mark:"✔️",ballot_box_with_check:"☑️",radio_button:"🔘",white_circle:"⚪️",black_circle:"⚫️",red_circle:"🔴",large_blue_circle:"🔵",small_red_triangle:"🔺",small_red_triangle_down:"🔻",small_orange_diamond:"🔸",small_blue_diamond:"🔹",large_orange_diamond:"🔶",large_blue_diamond:"🔷",white_square_button:"🔳",black_square_button:"🔲",black_small_square:"▪️",white_small_square:"▫️",black_medium_small_square:"◾️",white_medium_small_square:"◽️",black_medium_square:"◼️",white_medium_square:"◻️",black_large_square:"⬛️",white_large_square:"⬜️",speaker:"🔈",mute:"🔇",sound:"🔉",loud_sound:"🔊",bell:"🔔",no_bell:"🔕",mega:"📣",loudspeaker:"📢",eye_speech_bubble:"👁‍🗨",speech_balloon:"💬",thought_balloon:"💭",right_anger_bubble:"🗯",spades:"♠️",clubs:"♣️",hearts:"♥️",diamonds:"♦️",black_joker:"🃏",flower_playing_cards:"🎴",mahjong:"🀄️",clock1:"🕐",clock2:"🕑",clock3:"🕒",clock4:"🕓",clock5:"🕔",clock6:"🕕",clock7:"🕖",clock8:"🕗",clock9:"🕘",clock10:"🕙",clock11:"🕚",clock12:"🕛",clock130:"🕜",clock230:"🕝",clock330:"🕞",clock430:"🕟",clock530:"🕠",clock630:"🕡",clock730:"🕢",clock830:"🕣",clock930:"🕤",clock1030:"🕥",clock1130:"🕦",clock1230:"🕧",white_flag:"🏳️",black_flag:"🏴",checkered_flag:"🏁",triangular_flag_on_post:"🚩",rainbow_flag:"🏳️‍🌈",afghanistan:"🇦🇫",aland_islands:"🇦🇽",albania:"🇦🇱",algeria:"🇩🇿",american_samoa:"🇦🇸",andorra:"🇦🇩",angola:"🇦🇴",anguilla:"🇦🇮",antarctica:"🇦🇶",antigua_barbuda:"🇦🇬",argentina:"🇦🇷",armenia:"🇦🇲",aruba:"🇦🇼",australia:"🇦🇺",austria:"🇦🇹",azerbaijan:"🇦🇿",bahamas:"🇧🇸",bahrain:"🇧🇭",bangladesh:"🇧🇩",barbados:"🇧🇧",belarus:"🇧🇾",belgium:"🇧🇪",belize:"🇧🇿",benin:"🇧🇯",bermuda:"🇧🇲",bhutan:"🇧🇹",bolivia:"🇧🇴",caribbean_netherlands:"🇧🇶",bosnia_herzegovina:"🇧🇦",botswana:"🇧🇼",brazil:"🇧🇷",british_indian_ocean_territory:"🇮🇴",british_virgin_islands:"🇻🇬",brunei:"🇧🇳",bulgaria:"🇧🇬",burkina_faso:"🇧🇫",burundi:"🇧🇮",cape_verde:"🇨🇻",cambodia:"🇰🇭",cameroon:"🇨🇲",canada:"🇨🇦",canary_islands:"🇮🇨",cayman_islands:"🇰🇾",central_african_republic:"🇨🇫",chad:"🇹🇩",chile:"🇨🇱",cn:"🇨🇳",christmas_island:"🇨🇽",cocos_islands:"🇨🇨",colombia:"🇨🇴",comoros:"🇰🇲",congo_brazzaville:"🇨🇬",congo_kinshasa:"🇨🇩",cook_islands:"🇨🇰",costa_rica:"🇨🇷",cote_divoire:"🇨🇮",croatia:"🇭🇷",cuba:"🇨🇺",curacao:"🇨🇼",cyprus:"🇨🇾",czech_republic:"🇨🇿",denmark:"🇩🇰",djibouti:"🇩🇯",dominica:"🇩🇲",dominican_republic:"🇩🇴",ecuador:"🇪🇨",egypt:"🇪🇬",el_salvador:"🇸🇻",equatorial_guinea:"🇬🇶",eritrea:"🇪🇷",estonia:"🇪🇪",ethiopia:"🇪🇹",eu:"🇪🇺",european_union:"🇪🇺",falkland_islands:"🇫🇰",faroe_islands:"🇫🇴",fiji:"🇫🇯",finland:"🇫🇮",fr:"🇫🇷",french_guiana:"🇬🇫",french_polynesia:"🇵🇫",french_southern_territories:"🇹🇫",gabon:"🇬🇦",gambia:"🇬🇲",georgia:"🇬🇪",de:"🇩🇪",ghana:"🇬🇭",gibraltar:"🇬🇮",greece:"🇬🇷",greenland:"🇬🇱",grenada:"🇬🇩",guadeloupe:"🇬🇵",guam:"🇬🇺",guatemala:"🇬🇹",guernsey:"🇬🇬",guinea:"🇬🇳",guinea_bissau:"🇬🇼",guyana:"🇬🇾",haiti:"🇭🇹",honduras:"🇭🇳",hong_kong:"🇭🇰",hungary:"🇭🇺",iceland:"🇮🇸",india:"🇮🇳",indonesia:"🇮🇩",iran:"🇮🇷",iraq:"🇮🇶",ireland:"🇮🇪",isle_of_man:"🇮🇲",israel:"🇮🇱",it:"🇮🇹",jamaica:"🇯🇲",jp:"🇯🇵",crossed_flags:"🎌",jersey:"🇯🇪",jordan:"🇯🇴",kazakhstan:"🇰🇿",kenya:"🇰🇪",kiribati:"🇰🇮",kosovo:"🇽🇰",kuwait:"🇰🇼",kyrgyzstan:"🇰🇬",laos:"🇱🇦",latvia:"🇱🇻",lebanon:"🇱🇧",lesotho:"🇱🇸",liberia:"🇱🇷",libya:"🇱🇾",liechtenstein:"🇱🇮",lithuania:"🇱🇹",luxembourg:"🇱🇺",macau:"🇲🇴",macedonia:"🇲🇰",madagascar:"🇲🇬",malawi:"🇲🇼",malaysia:"🇲🇾",maldives:"🇲🇻",mali:"🇲🇱",malta:"🇲🇹",marshall_islands:"🇲🇭",martinique:"🇲🇶",mauritania:"🇲🇷",mauritius:"🇲🇺",mayotte:"🇾🇹",mexico:"🇲🇽",micronesia:"🇫🇲",moldova:"🇲🇩",monaco:"🇲🇨",mongolia:"🇲🇳",montenegro:"🇲🇪",montserrat:"🇲🇸",morocco:"🇲🇦",mozambique:"🇲🇿",myanmar:"🇲🇲",namibia:"🇳🇦",nauru:"🇳🇷",nepal:"🇳🇵",netherlands:"🇳🇱",new_caledonia:"🇳🇨",new_zealand:"🇳🇿",nicaragua:"🇳🇮",niger:"🇳🇪",nigeria:"🇳🇬",niue:"🇳🇺",norfolk_island:"🇳🇫",northern_mariana_islands:"🇲🇵",north_korea:"🇰🇵",norway:"🇳🇴",oman:"🇴🇲",pakistan:"🇵🇰",palau:"🇵🇼",palestinian_territories:"🇵🇸",panama:"🇵🇦",papua_new_guinea:"🇵🇬",paraguay:"🇵🇾",peru:"🇵🇪",philippines:"🇵🇭",pitcairn_islands:"🇵🇳",poland:"🇵🇱",portugal:"🇵🇹",puerto_rico:"🇵🇷",qatar:"🇶🇦",reunion:"🇷🇪",romania:"🇷🇴",ru:"🇷🇺",rwanda:"🇷🇼",st_barthelemy:"🇧🇱",st_helena:"🇸🇭",st_kitts_nevis:"🇰🇳",st_lucia:"🇱🇨",st_pierre_miquelon:"🇵🇲",st_vincent_grenadines:"🇻🇨",samoa:"🇼🇸",san_marino:"🇸🇲",sao_tome_principe:"🇸🇹",saudi_arabia:"🇸🇦",senegal:"🇸🇳",serbia:"🇷🇸",seychelles:"🇸🇨",sierra_leone:"🇸🇱",singapore:"🇸🇬",sint_maarten:"🇸🇽",slovakia:"🇸🇰",slovenia:"🇸🇮",solomon_islands:"🇸🇧",somalia:"🇸🇴",south_africa:"🇿🇦",south_georgia_south_sandwich_islands:"🇬🇸",kr:"🇰🇷",south_sudan:"🇸🇸",es:"🇪🇸",sri_lanka:"🇱🇰",sudan:"🇸🇩",suriname:"🇸🇷",swaziland:"🇸🇿",sweden:"🇸🇪",switzerland:"🇨🇭",syria:"🇸🇾",taiwan:"🇹🇼",tajikistan:"🇹🇯",tanzania:"🇹🇿",thailand:"🇹🇭",timor_leste:"🇹🇱",togo:"🇹🇬",tokelau:"🇹🇰",tonga:"🇹🇴",trinidad_tobago:"🇹🇹",tunisia:"🇹🇳",tr:"🇹🇷",turkmenistan:"🇹🇲",turks_caicos_islands:"🇹🇨",tuvalu:"🇹🇻",uganda:"🇺🇬",ukraine:"🇺🇦",united_arab_emirates:"🇦🇪",gb:"🇬🇧",uk:"🇬🇧",us:"🇺🇸",us_virgin_islands:"🇻🇮",uruguay:"🇺🇾",uzbekistan:"🇺🇿",vanuatu:"🇻🇺",vatican_city:"🇻🇦",venezuela:"🇻🇪",vietnam:"🇻🇳",wallis_futuna:"🇼🇫",western_sahara:"🇪🇭",yemen:"🇾🇪",zambia:"🇿🇲",zimbabwe:"🇿🇼"}},function(d,h,s){d.exports={angry:[">:(",">:-("],blush:[':")',':-")'],broken_heart:["</3","<\\3"],confused:[":/",":-/"],cry:[":'(",":'-(",":,(",":,-("],frowning:[":(",":-("],heart:["<3"],imp:["]:(","]:-("],innocent:["o:)","O:)","o:-)","O:-)","0:)","0:-)"],joy:[":')",":'-)",":,)",":,-)",":'D",":'-D",":,D",":,-D"],kissing:[":*",":-*"],laughing:["x-)","X-)"],neutral_face:[":|",":-|"],open_mouth:[":o",":-o",":O",":-O"],rage:[":@",":-@"],smile:[":D",":-D"],smiley:[":)",":-)"],smiling_imp:["]:)","]:-)"],sob:[":,'(",":,'-(",";(",";-("],stuck_out_tongue:[":P",":-P"],sunglasses:["8-)","B-)"],sweat:[",:(",",:-("],sweat_smile:[",:)",",:-)"],unamused:[":s",":-S",":z",":-Z",":$",":-$"],wink:[";)",";-)"]}},function(d,h,s){function t(r){return r.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}d.exports=function(r){var e,i=r.defs;r.enabled.length&&(i=Object.keys(i).reduce(function(c,o){return r.enabled.indexOf(o)>=0&&(c[o]=i[o]),c},{})),e=Object.keys(r.shortcuts).reduce(function(c,o){return i[o]?Array.isArray(r.shortcuts[o])?(r.shortcuts[o].forEach(function(l){c[l]=o}),c):(c[r.shortcuts[o]]=o,c):c},{});var n=Object.keys(i).map(function(c){return":"+c+":"}).concat(Object.keys(e)).sort().reverse().map(function(c){return t(c)}).join("|"),a=RegExp(n),u=RegExp(n,"g");return{defs:i,shortcuts:e,scanRE:a,replaceRE:u}}},function(d,h,s){d.exports=function(t,r){return t[r].content}},function(d,h,s){d.exports=function(t,r,e,i,n){function a(l,p,_){var f,b=0,m=[];return l.replace(n,function(g,w,v){var x;if(e.hasOwnProperty(g)){if(x=e[g],w>0&&!o.test(v[w-1])||w+g.length<v.length&&!o.test(v[w+g.length]))return}else x=g.slice(1,-1);w>b&&(f=new _("text","",0),f.content=l.slice(b,w),m.push(f)),f=new _("emoji","",0),f.markup=x,f.content=r[x],m.push(f),b=w+g.length}),b<l.length&&(f=new _("text","",0),f.content=l.slice(b),m.push(f)),m}var u=t.utils.arrayReplaceAt,c=t.utils.lib.ucmicro,o=new RegExp([c.Z.source,c.P.source,c.Cc.source].join("|"));return function(l){var p,_,f,b,m,g=l.tokens,w=0;for(_=0,f=g.length;_<f;_++)if(g[_].type==="inline")for(b=g[_].children,p=b.length-1;p>=0;p--)m=b[p],m.type!=="link_open"&&m.type!=="link_close"||m.info==="auto"&&(w-=m.nesting),m.type==="text"&&w===0&&i.test(m.content)&&(g[_].children=b=u(b,p,a(m.content,m.level,l.Token)))}}},function(d,h,s){function t(o,l,p,_){var f=Number(o[l].meta.id+1).toString(),b="";return typeof _.docId=="string"&&(b="-"+_.docId+"-"),b+f}function r(o,l){var p=Number(o[l].meta.id+1).toString();return o[l].meta.subId>0&&(p+=":"+o[l].meta.subId),"["+p+"]"}function e(o,l,p,_,f){var b=f.rules.footnote_anchor_name(o,l,p,_,f),m=f.rules.footnote_caption(o,l,p,_,f),g=b;return o[l].meta.subId>0&&(g+=":"+o[l].meta.subId),'<sup class="footnote-ref"><a href="#fn'+b+'" id="fnref'+g+'">'+m+"</a></sup>"}function i(o,l,p){return(p.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`)+`<section class="footnotes">
<ol class="footnotes-list">
`}function n(){return`</ol>
</section>
`}function a(o,l,p,_,f){var b=f.rules.footnote_anchor_name(o,l,p,_,f);return o[l].meta.subId>0&&(b+=":"+o[l].meta.subId),'<li id="fn'+b+'" class="footnote-item">'}function u(){return`</li>
`}function c(o,l,p,_,f){var b=f.rules.footnote_anchor_name(o,l,p,_,f);return o[l].meta.subId>0&&(b+=":"+o[l].meta.subId),' <a href="#fnref'+b+'" class="footnote-backref">↩︎</a>'}d.exports=function(o){function l(g,w,v,x){var k,C,y,A,T,L,j,S,M,$,E,q=g.bMarks[w]+g.tShift[w],O=g.eMarks[w];if(q+4>O||g.src.charCodeAt(q)!==91||g.src.charCodeAt(q+1)!==94)return!1;for(T=q+2;T<O;T++){if(g.src.charCodeAt(T)===32)return!1;if(g.src.charCodeAt(T)===93)break}if(T===q+2||T+1>=O||g.src.charCodeAt(++T)!==58)return!1;if(x)return!0;for(T++,g.env.footnotes||(g.env.footnotes={}),g.env.footnotes.refs||(g.env.footnotes.refs={}),L=g.src.slice(q+2,T-2),g.env.footnotes.refs[":"+L]=-1,j=new g.Token("footnote_reference_open","",1),j.meta={label:L},j.level=g.level++,g.tokens.push(j),k=g.bMarks[w],C=g.tShift[w],y=g.sCount[w],A=g.parentType,E=T,S=M=g.sCount[w]+T-(g.bMarks[w]+g.tShift[w]);T<O&&($=g.src.charCodeAt(T),m($));)$===9?M+=4-M%4:M++,T++;return g.tShift[w]=T-E,g.sCount[w]=M-S,g.bMarks[w]=E,g.blkIndent+=4,g.parentType="footnote",g.sCount[w]<g.blkIndent&&(g.sCount[w]+=g.blkIndent),g.md.block.tokenize(g,w,v,!0),g.parentType=A,g.blkIndent-=4,g.tShift[w]=C,g.sCount[w]=y,g.bMarks[w]=k,j=new g.Token("footnote_reference_close","",-1),j.level=--g.level,g.tokens.push(j),!0}function p(g,w){var v,x,k,C,y,A=g.posMax,T=g.pos;return!(T+2>=A)&&g.src.charCodeAt(T)===94&&g.src.charCodeAt(T+1)===91&&(v=T+2,!((x=b(g,T+1))<0)&&(w||(g.env.footnotes||(g.env.footnotes={}),g.env.footnotes.list||(g.env.footnotes.list=[]),k=g.env.footnotes.list.length,g.md.inline.parse(g.src.slice(v,x),g.md,g.env,y=[]),C=g.push("footnote_ref","",0),C.meta={id:k},g.env.footnotes.list[k]={content:g.src.slice(v,x),tokens:y}),g.pos=x+1,g.posMax=A,!0))}function _(g,w){var v,x,k,C,y,A=g.posMax,T=g.pos;if(T+3>A||!g.env.footnotes||!g.env.footnotes.refs||g.src.charCodeAt(T)!==91||g.src.charCodeAt(T+1)!==94)return!1;for(x=T+2;x<A;x++){if(g.src.charCodeAt(x)===32||g.src.charCodeAt(x)===10)return!1;if(g.src.charCodeAt(x)===93)break}return x!==T+2&&!(x>=A)&&(x++,v=g.src.slice(T+2,x-1),g.env.footnotes.refs[":"+v]!==void 0&&(w||(g.env.footnotes.list||(g.env.footnotes.list=[]),g.env.footnotes.refs[":"+v]<0?(k=g.env.footnotes.list.length,g.env.footnotes.list[k]={label:v,count:0},g.env.footnotes.refs[":"+v]=k):k=g.env.footnotes.refs[":"+v],C=g.env.footnotes.list[k].count,g.env.footnotes.list[k].count++,y=g.push("footnote_ref","",0),y.meta={id:k,subId:C,label:v}),g.pos=x,g.posMax=A,!0))}function f(g){var w,v,x,k,C,y,A,T,L,j,S=!1,M={};if(g.env.footnotes&&(g.tokens=g.tokens.filter(function($){return $.type==="footnote_reference_open"?(S=!0,L=[],j=$.meta.label,!1):$.type==="footnote_reference_close"?(S=!1,M[":"+j]=L,!1):(S&&L.push($),!S)}),g.env.footnotes.list)){for(y=g.env.footnotes.list,A=new g.Token("footnote_block_open","",1),g.tokens.push(A),w=0,v=y.length;w<v;w++){for(A=new g.Token("footnote_open","",1),A.meta={id:w,label:y[w].label},g.tokens.push(A),y[w].tokens?(T=[],A=new g.Token("paragraph_open","p",1),A.block=!0,T.push(A),A=new g.Token("inline","",0),A.children=y[w].tokens,A.content=y[w].content,T.push(A),A=new g.Token("paragraph_close","p",-1),A.block=!0,T.push(A)):y[w].label&&(T=M[":"+y[w].label]),g.tokens=g.tokens.concat(T),C=g.tokens[g.tokens.length-1].type==="paragraph_close"?g.tokens.pop():null,k=y[w].count>0?y[w].count:1,x=0;x<k;x++)A=new g.Token("footnote_anchor","",0),A.meta={id:w,subId:x,label:y[w].label},g.tokens.push(A);C&&g.tokens.push(C),A=new g.Token("footnote_close","",-1),g.tokens.push(A)}A=new g.Token("footnote_block_close","",-1),g.tokens.push(A)}}var b=o.helpers.parseLinkLabel,m=o.utils.isSpace;o.renderer.rules.footnote_ref=e,o.renderer.rules.footnote_block_open=i,o.renderer.rules.footnote_block_close=n,o.renderer.rules.footnote_open=a,o.renderer.rules.footnote_close=u,o.renderer.rules.footnote_anchor=c,o.renderer.rules.footnote_caption=r,o.renderer.rules.footnote_anchor_name=t,o.block.ruler.before("reference","footnote_def",l,{alt:["paragraph","reference"]}),o.inline.ruler.after("image","footnote_inline",p),o.inline.ruler.after("footnote_inline","footnote_ref",_),o.core.ruler.after("inline","footnote_tail",f)}},function(d,h){var s=function(t,r){r=r||{},r.highlighted===void 0&&(r.highlighted=!0),r.hljs===void 0&&(r.hljs="auto"),typeof r.langCheck!="function"&&(r.langCheck=function(){}),t.options.highlight=function(e,i){var n=r.hljs;if(r.hljs==="auto"&&(n=window.hljs),r.highlighted&&i&&n){if(n.getLanguage(i))return'<pre><div class="hljs"><code class="'+t.options.langPrefix+i+'">'+n.highlight(i,e,!0).value+"</code></div></pre>";typeof r.langCheck=="function"&&r.langCheck(i)}return'<pre><code class="'+t.options.langPrefix+i+'">'+t.utils.escapeHtml(e)+"</code></pre>"}};d.exports=s},function(d,h){d.exports=function(s,t){s.image_add=function(e,i){s.__image instanceof Object||(s.__image={}),s.__image[e]=i},s.image_del=function(e){s.__image instanceof Object||(s.__image={}),delete s.__image[e]};var r=s.renderer.rules.image;s.renderer.rules.image=function(e,i,n,a,u){var c=e[i].attrs;if(s.__image instanceof Object){for(var o=0;o<c.length;o++)if(c[o][0]=="src"&&s.__image.hasOwnProperty(e[i].attrs[o][1])){c.push(["rel",c[o][1]]),c[o][1]=s.__image[e[i].attrs[o][1]];break}}return r(e,i,n,a,u)}}},function(d,h,s){d.exports=function(t){function r(i,n){var a,u,c,o,l,p=i.pos,_=i.src.charCodeAt(p);if(n||_!==43||(u=i.scanDelims(i.pos,!0),o=u.length,l=String.fromCharCode(_),o<2))return!1;for(o%2&&(c=i.push("text","",0),c.content=l,o--),a=0;a<o;a+=2)c=i.push("text","",0),c.content=l+l,i.delimiters.push({marker:_,jump:a,token:i.tokens.length-1,level:i.level,end:-1,open:u.can_open,close:u.can_close});return i.pos+=u.length,!0}function e(i){var n,a,u,c,o,l=[],p=i.delimiters,_=i.delimiters.length;for(n=0;n<_;n++)u=p[n],u.marker===43&&u.end!==-1&&(c=p[u.end],o=i.tokens[u.token],o.type="ins_open",o.tag="ins",o.nesting=1,o.markup="++",o.content="",o=i.tokens[c.token],o.type="ins_close",o.tag="ins",o.nesting=-1,o.markup="++",o.content="",i.tokens[c.token-1].type==="text"&&i.tokens[c.token-1].content==="+"&&l.push(c.token-1));for(;l.length;){for(n=l.pop(),a=n+1;a<i.tokens.length&&i.tokens[a].type==="ins_close";)a++;a--,n!==a&&(o=i.tokens[a],i.tokens[a]=i.tokens[n],i.tokens[n]=o)}}t.inline.ruler.before("emphasis","ins",r),t.inline.ruler2.before("emphasis","ins",e)}},function(d,h,s){function t(n,a){var u,c,o=n.posMax,l=!0,p=!0;return u=a>0?n.src.charCodeAt(a-1):-1,c=a+1<=o?n.src.charCodeAt(a+1):-1,(u===32||u===9||c>=48&&c<=57)&&(p=!1),c!==32&&c!==9||(l=!1),{can_open:l,can_close:p}}function r(n,a){if(!i&&window.katex&&(i=window.katex),!i)return!1;var u,c,o,l,p;if(n.src[n.pos]!=="$")return!1;if(l=t(n,n.pos),!l.can_open)return a||(n.pending+="$"),n.pos+=1,!0;for(u=n.pos+1,c=u;(c=n.src.indexOf("$",c))!==-1;){for(p=c-1;n.src[p]==="\\";)p-=1;if((c-p)%2==1)break;c+=1}return c===-1?(a||(n.pending+="$"),n.pos=u,!0):c-u==0?(a||(n.pending+="$$"),n.pos=u+1,!0):(l=t(n,c),l.can_close?(a||(o=n.push("math_inline","math",0),o.markup="$",o.content=n.src.slice(u,c)),n.pos=c+1,!0):(a||(n.pending+="$"),n.pos=u,!0))}function e(n,a,u,c){if(!i&&window.katex&&(i=window.katex),!i)return!1;var o,l,p,_,f,b=!1,m=n.bMarks[a]+n.tShift[a],g=n.eMarks[a];if(m+2>g||n.src.slice(m,m+2)!=="$$")return!1;if(m+=2,o=n.src.slice(m,g),c)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),b=!0),p=a;!b&&!(++p>=u)&&(m=n.bMarks[p]+n.tShift[p],g=n.eMarks[p],!(m<g&&n.tShift[p]<n.blkIndent));)n.src.slice(m,g).trim().slice(-2)==="$$"&&(_=n.src.slice(0,g).lastIndexOf("$$"),l=n.src.slice(m,_),b=!0);return n.line=p+1,f=n.push("math_block","math",0),f.block=!0,f.content=(o&&o.trim()?o+`
`:"")+n.getLines(a+1,p,n.tShift[a],!0)+(l&&l.trim()?l:""),f.map=[a,n.line],f.markup="$$",!0}var i=null;d.exports=function(n,a){a=a||{};var u=function(p){!i&&window.katex&&(i=window.katex),a.displayMode=!1;try{return i.renderToString(p,a)}catch(_){return a.throwOnError&&console.log(_),p}},c=function(p,_){return u(p[_].content)},o=function(p){!i&&window.katex&&(i=window.katex),a.displayMode=!0;try{return"<p>"+i.renderToString(p,a)+"</p>"}catch(_){return a.throwOnError&&console.log(_),p}},l=function(p,_){return o(p[_].content)+`
`};n.inline.ruler.after("escape","math_inline",r),n.block.ruler.after("blockquote","math_block",e,{alt:["paragraph","reference","blockquote","list"]}),n.renderer.rules.math_inline=c,n.renderer.rules.math_block=l}},function(d,h,s){d.exports=function(t){function r(i,n){var a,u,c,o,l,p=i.pos,_=i.src.charCodeAt(p);if(n||_!==61||(u=i.scanDelims(i.pos,!0),o=u.length,l=String.fromCharCode(_),o<2))return!1;for(o%2&&(c=i.push("text","",0),c.content=l,o--),a=0;a<o;a+=2)c=i.push("text","",0),c.content=l+l,i.delimiters.push({marker:_,jump:a,token:i.tokens.length-1,level:i.level,end:-1,open:u.can_open,close:u.can_close});return i.pos+=u.length,!0}function e(i){var n,a,u,c,o,l=[],p=i.delimiters,_=i.delimiters.length;for(n=0;n<_;n++)u=p[n],u.marker===61&&u.end!==-1&&(c=p[u.end],o=i.tokens[u.token],o.type="mark_open",o.tag="mark",o.nesting=1,o.markup="==",o.content="",o=i.tokens[c.token],o.type="mark_close",o.tag="mark",o.nesting=-1,o.markup="==",o.content="",i.tokens[c.token-1].type==="text"&&i.tokens[c.token-1].content==="="&&l.push(c.token-1));for(;l.length;){for(n=l.pop(),a=n+1;a<i.tokens.length&&i.tokens[a].type==="mark_close";)a++;a--,n!==a&&(o=i.tokens[a],i.tokens[a]=i.tokens[n],i.tokens[n]=o)}}t.inline.ruler.before("emphasis","mark",r),t.inline.ruler2.before("emphasis","mark",e)}},function(d,h,s){function t(e,i){var n,a,u,c=e.posMax,o=e.pos;if(e.src.charCodeAt(o)!==126||i||o+2>=c)return!1;for(e.pos=o+1;e.pos<c;){if(e.src.charCodeAt(e.pos)===126){n=!0;break}e.md.inline.skipToken(e)}return n&&o+1!==e.pos?(a=e.src.slice(o+1,e.pos),a.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=o,!1):(e.posMax=e.pos,e.pos=o+1,u=e.push("sub_open","sub",1),u.markup="~",u=e.push("text","",0),u.content=a.replace(r,"$1"),u=e.push("sub_close","sub",-1),u.markup="~",e.pos=e.posMax+1,e.posMax=c,!0)):(e.pos=o,!1)}var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;d.exports=function(e){e.inline.ruler.after("emphasis","sub",t)}},function(d,h,s){function t(e,i){var n,a,u,c=e.posMax,o=e.pos;if(e.src.charCodeAt(o)!==94||i||o+2>=c)return!1;for(e.pos=o+1;e.pos<c;){if(e.src.charCodeAt(e.pos)===94){n=!0;break}e.md.inline.skipToken(e)}return n&&o+1!==e.pos?(a=e.src.slice(o+1,e.pos),a.match(/(^|[^\\])(\\\\)*\s/)?(e.pos=o,!1):(e.posMax=e.pos,e.pos=o+1,u=e.push("sup_open","sup",1),u.markup="^",u=e.push("text","",0),u.content=a.replace(r,"$1"),u=e.push("sup_close","sup",-1),u.markup="^",e.pos=e.posMax+1,e.posMax=c,!0)):(e.pos=o,!1)}var r=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;d.exports=function(e){e.inline.ruler.after("emphasis","sup",t)}},function(d,h){function s(m,g,w){var v=m.attrIndex(g),x=[g,w];v<0?m.attrPush(x):m.attrs[v]=x}function t(m,g){for(var w=m[g].level-1,v=g-1;v>=0;v--)if(m[v].level===w)return v;return-1}function r(m,g){return c(m[g])&&o(m[g-1])&&l(m[g-2])&&p(m[g])}function e(m,g){if(m.children.unshift(i(m,g)),m.children[1].content=m.children[1].content.slice(3),m.content=m.content.slice(3),f)if(b){m.children.pop();var w="task-item-"+Math.ceil(1e7*Math.random()-1e3);m.children[0].content=m.children[0].content.slice(0,-1)+' id="'+w+'">',m.children.push(u(m.content,w,g))}else m.children.unshift(n(g)),m.children.push(a(g))}function i(m,g){var w=new g("html_inline","",0),v=_?' disabled="" ':"";return m.content.indexOf("[ ] ")===0?w.content='<input class="task-list-item-checkbox"'+v+'type="checkbox">':m.content.indexOf("[x] ")!==0&&m.content.indexOf("[X] ")!==0||(w.content='<input class="task-list-item-checkbox" checked=""'+v+'type="checkbox">'),w}function n(m){var g=new m("html_inline","",0);return g.content="<label>",g}function a(m){var g=new m("html_inline","",0);return g.content="</label>",g}function u(m,g,w){var v=new w("html_inline","",0);return v.content='<label class="task-list-item-label" for="'+g+'">'+m+"</label>",v.attrs=[{for:g}],v}function c(m){return m.type==="inline"}function o(m){return m.type==="paragraph_open"}function l(m){return m.type==="list_item_open"}function p(m){return m.content.indexOf("[ ] ")===0||m.content.indexOf("[x] ")===0||m.content.indexOf("[X] ")===0}var _=!0,f=!1,b=!1;d.exports=function(m,g){g&&(_=!g.enabled,f=!!g.label,b=!!g.labelAfter),m.core.ruler.after("inline","github-task-lists",function(w){for(var v=w.tokens,x=2;x<v.length;x++)r(v,x)&&(e(v[x],w.Token),s(v[x-2],"class","task-list-item"+(_?"":" enabled")),s(v[t(v,x-2)],"class","contains-task-list"))})}},function(d,h,s){d.exports=function(t){function r(u,c){for(;u.src.indexOf(`
`)>=0&&u.src.indexOf(`
`)<u.src.indexOf("@[toc]");)u.tokens.slice(-1)[0].type==="softbreak"&&(u.src=u.src.split(`
`).slice(1).join(`
`),u.pos=0);var o;if(u.src.charCodeAt(u.pos)!==64||u.src.charCodeAt(u.pos+1)!==91)return!1;var l=i.exec(u.src);if(!l||(l=l.filter(function(b){return b}),l.length<1)||c)return!1;o=u.push("toc_open","toc",1),o.markup="@[toc]",o=u.push("toc_body","",0);var p=n;l.length>1&&(p=l.pop()),o.content=p,o=u.push("toc_close","toc",-1);var _=0,f=u.src.indexOf(`
`);return _=f!==-1?u.pos+f:u.pos+u.posMax+1,u.pos=_,!0}var e,i=/^@\[toc\](?:\((?:\s+)?([^\)]+)(?:\s+)?\)?)?(?:\s+?)?$/im,n="Table of Contents",a=function(u){return u.replace(/[^\w\s]/gi,"").split(" ").join("_")};t.renderer.rules.heading_open=function(u,c){var o=u[c].tag,l=u[c+1];return l.type==="inline"?"<"+o+'><a id="'+(a(l.content)+"_"+l.map[0])+'"></a>':"</h1>"},t.renderer.rules.toc_open=function(u,c){return""},t.renderer.rules.toc_close=function(u,c){return""},t.renderer.rules.toc_body=function(u,c){for(var o=[],l=e.tokens,p=l.length,_=0;_<p;_++)if(l[_].type==="heading_close"){var f=l[_],b=l[_-1];b.type==="inline"&&o.push({level:+f.tag.substr(1,1),anchor:a(b.content)+"_"+b.map[0],content:b.content})}var m=0,g=o.map(function(w){var v=[];if(w.level>m)for(var x=w.level-m,k=0;k<x;k++)v.push("<ul>"),m++;else if(w.level<m)for(var x=m-w.level,k=0;k<x;k++)v.push("</ul>"),m--;return v=v.concat(['<li><a href="#',w.anchor,'">',w.content,"</a></li>"]),v.join("")});return"<h3>"+u[c].content+"</h3>"+g.join("")+new Array(m+1).join("</ul>")},t.core.ruler.push("grab_state",function(u){e=u}),t.inline.ruler.after("emphasis","toc",r)}},function(d,h,s){d.exports=s(143)},function(d,h,s){d.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(d,h,s){h.parseLinkLabel=s(141),h.parseLinkDestination=s(140),h.parseLinkTitle=s(142)},function(d,h,s){var t=s(0).unescapeAll;d.exports=function(r,e,i){var n,a,u=e,c={ok:!1,pos:0,lines:0,str:""};if(r.charCodeAt(e)===60){for(e++;e<i;){if((n=r.charCodeAt(e))===10)return c;if(n===62)return c.pos=e+1,c.str=t(r.slice(u+1,e)),c.ok=!0,c;n===92&&e+1<i?e+=2:e++}return c}for(a=0;e<i&&(n=r.charCodeAt(e))!==32&&!(n<32||n===127);)if(n===92&&e+1<i)e+=2;else{if(n===40&&a++,n===41){if(a===0)break;a--}e++}return u===e||a!==0||(c.str=t(r.slice(u,e)),c.lines=0,c.pos=e,c.ok=!0),c}},function(d,h,s){d.exports=function(t,r,e){var i,n,a,u,c=-1,o=t.posMax,l=t.pos;for(t.pos=r+1,i=1;t.pos<o;){if((a=t.src.charCodeAt(t.pos))===93&&--i===0){n=!0;break}if(u=t.pos,t.md.inline.skipToken(t),a===91){if(u===t.pos-1)i++;else if(e)return t.pos=l,-1}}return n&&(c=t.pos),t.pos=l,c}},function(d,h,s){var t=s(0).unescapeAll;d.exports=function(r,e,i){var n,a,u=0,c=e,o={ok:!1,pos:0,lines:0,str:""};if(e>=i||(a=r.charCodeAt(e))!==34&&a!==39&&a!==40)return o;for(e++,a===40&&(a=41);e<i;){if((n=r.charCodeAt(e))===a)return o.pos=e+1,o.lines=u,o.str=t(r.slice(c+1,e)),o.ok=!0,o;n===10?u++:n===92&&e+1<i&&(e++,r.charCodeAt(e)===10&&u++),e++}return o}},function(d,h,s){function t(v){var x=v.trim().toLowerCase();return!m.test(x)||!!g.test(x)}function r(v){var x=_.parse(v,!0);if(x.hostname&&(!x.protocol||w.indexOf(x.protocol)>=0))try{x.hostname=f.toASCII(x.hostname)}catch{}return _.encode(_.format(x))}function e(v){var x=_.parse(v,!0);if(x.hostname&&(!x.protocol||w.indexOf(x.protocol)>=0))try{x.hostname=f.toUnicode(x.hostname)}catch{}return _.decode(_.format(x))}function i(v,x){if(!(this instanceof i))return new i(v,x);x||n.isString(v)||(x=v||{},v="default"),this.inline=new l,this.block=new o,this.core=new c,this.renderer=new u,this.linkify=new p,this.validateLink=t,this.normalizeLink=r,this.normalizeLinkText=e,this.utils=n,this.helpers=n.assign({},a),this.options={},this.configure(v),x&&this.set(x)}var n=s(0),a=s(139),u=s(150),c=s(145),o=s(144),l=s(146),p=s(116),_=s(56),f=s(186),b={default:s(148),zero:s(149),commonmark:s(147)},m=/^(vbscript|javascript|file|data):/,g=/^data:image\/(gif|png|jpeg|webp);/,w=["http:","https:","mailto:"];i.prototype.set=function(v){return n.assign(this.options,v),this},i.prototype.configure=function(v){var x,k=this;if(n.isString(v)&&(x=v,!(v=b[x])))throw new Error('Wrong `markdown-it` preset "'+x+'", check name');if(!v)throw new Error("Wrong `markdown-it` preset, can't be empty");return v.options&&k.set(v.options),v.components&&Object.keys(v.components).forEach(function(C){v.components[C].rules&&k[C].ruler.enableOnly(v.components[C].rules),v.components[C].rules2&&k[C].ruler2.enableOnly(v.components[C].rules2)}),this},i.prototype.enable=function(v,x){var k=[];Array.isArray(v)||(v=[v]),["core","block","inline"].forEach(function(y){k=k.concat(this[y].ruler.enable(v,!0))},this),k=k.concat(this.inline.ruler2.enable(v,!0));var C=v.filter(function(y){return k.indexOf(y)<0});if(C.length&&!x)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+C);return this},i.prototype.disable=function(v,x){var k=[];Array.isArray(v)||(v=[v]),["core","block","inline"].forEach(function(y){k=k.concat(this[y].ruler.disable(v,!0))},this),k=k.concat(this.inline.ruler2.disable(v,!0));var C=v.filter(function(y){return k.indexOf(y)<0});if(C.length&&!x)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+C);return this},i.prototype.use=function(v){var x=[this].concat(Array.prototype.slice.call(arguments,1));return v.apply(v,x),this},i.prototype.parse=function(v,x){if(typeof v!="string")throw new Error("Input data should be a String");var k=new this.core.State(v,this,x);return this.core.process(k),k.tokens},i.prototype.render=function(v,x){return x=x||{},this.renderer.render(this.parse(v,x),this.options,x)},i.prototype.parseInline=function(v,x){var k=new this.core.State(v,this,x);return k.inlineMode=!0,this.core.process(k),k.tokens},i.prototype.renderInline=function(v,x){return x=x||{},this.renderer.render(this.parseInline(v,x),this.options,x)},d.exports=i},function(d,h,s){function t(){this.ruler=new r;for(var i=0;i<e.length;i++)this.ruler.push(e[i][0],e[i][1],{alt:(e[i][2]||[]).slice()})}var r=s(32),e=[["table",s(162),["paragraph","reference"]],["code",s(152)],["fence",s(153),["paragraph","reference","blockquote","list"]],["blockquote",s(151),["paragraph","reference","blockquote","list"]],["hr",s(155),["paragraph","reference","blockquote","list"]],["list",s(158),["paragraph","reference","blockquote"]],["reference",s(160)],["heading",s(154),["paragraph","reference","blockquote"]],["lheading",s(157)],["html_block",s(156),["paragraph","reference","blockquote"]],["paragraph",s(159)]];t.prototype.tokenize=function(i,n,a){for(var u,c=this.ruler.getRules(""),o=c.length,l=n,p=!1,_=i.md.options.maxNesting;l<a&&(i.line=l=i.skipEmptyLines(l),!(l>=a))&&!(i.sCount[l]<i.blkIndent);){if(i.level>=_){i.line=a;break}for(u=0;u<o&&!c[u](i,l,a,!1);u++);i.tight=!p,i.isEmpty(i.line-1)&&(p=!0),(l=i.line)<a&&i.isEmpty(l)&&(p=!0,l++,i.line=l)}},t.prototype.parse=function(i,n,a,u){var c;i&&(c=new this.State(i,n,a,u),this.tokenize(c,c.line,c.lineMax))},t.prototype.State=s(161),d.exports=t},function(d,h,s){function t(){this.ruler=new r;for(var i=0;i<e.length;i++)this.ruler.push(e[i][0],e[i][1])}var r=s(32),e=[["normalize",s(166)],["block",s(163)],["inline",s(164)],["linkify",s(165)],["replacements",s(167)],["smartquotes",s(168)]];t.prototype.process=function(i){var n,a,u;for(u=this.ruler.getRules(""),n=0,a=u.length;n<a;n++)u[n](i)},t.prototype.State=s(169),d.exports=t},function(d,h,s){function t(){var n;for(this.ruler=new r,n=0;n<e.length;n++)this.ruler.push(e[n][0],e[n][1]);for(this.ruler2=new r,n=0;n<i.length;n++)this.ruler2.push(i[n][0],i[n][1])}var r=s(32),e=[["text",s(180)],["newline",s(178)],["escape",s(174)],["backticks",s(171)],["strikethrough",s(55).tokenize],["emphasis",s(54).tokenize],["link",s(177)],["image",s(176)],["autolink",s(170)],["html_inline",s(175)],["entity",s(173)]],i=[["balance_pairs",s(172)],["strikethrough",s(55).postProcess],["emphasis",s(54).postProcess],["text_collapse",s(181)]];t.prototype.skipToken=function(n){var a,u,c=n.pos,o=this.ruler.getRules(""),l=o.length,p=n.md.options.maxNesting,_=n.cache;if(_[c]!==void 0)return void(n.pos=_[c]);if(n.level<p)for(u=0;u<l&&(n.level++,a=o[u](n,!0),n.level--,!a);u++);else n.pos=n.posMax;a||n.pos++,_[c]=n.pos},t.prototype.tokenize=function(n){for(var a,u,c=this.ruler.getRules(""),o=c.length,l=n.posMax,p=n.md.options.maxNesting;n.pos<l;){if(n.level<p)for(u=0;u<o&&!(a=c[u](n,!1));u++);if(a){if(n.pos>=l)break}else n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()},t.prototype.parse=function(n,a,u,c){var o,l,p,_=new this.State(n,a,u,c);for(this.tokenize(_),l=this.ruler2.getRules(""),p=l.length,o=0;o<p;o++)l[o](_)},t.prototype.State=s(179),d.exports=t},function(d,h,s){d.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},function(d,h,s){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},function(d,h,s){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},function(d,h,s){function t(){this.rules=r({},n)}var r=s(0).assign,e=s(0).unescapeAll,i=s(0).escapeHtml,n={};n.code_inline=function(a,u,c,o,l){var p=a[u];return"<code"+l.renderAttrs(p)+">"+i(a[u].content)+"</code>"},n.code_block=function(a,u,c,o,l){var p=a[u];return"<pre"+l.renderAttrs(p)+"><code>"+i(a[u].content)+`</code></pre>
`},n.fence=function(a,u,c,o,l){var p,_,f,b,m=a[u],g=m.info?e(m.info).trim():"",w="";return g&&(w=g.split(/\s+/g)[0]),p=c.highlight&&c.highlight(m.content,w)||i(m.content),p.indexOf("<pre")===0?p+`
`:g?(_=m.attrIndex("class"),f=m.attrs?m.attrs.slice():[],_<0?f.push(["class",c.langPrefix+w]):f[_][1]+=" "+c.langPrefix+w,b={attrs:f},"<pre><code"+l.renderAttrs(b)+">"+p+`</code></pre>
`):"<pre><code"+l.renderAttrs(m)+">"+p+`</code></pre>
`},n.image=function(a,u,c,o,l){var p=a[u];return p.attrs[p.attrIndex("alt")][1]=l.renderInlineAsText(p.children,c,o),l.renderToken(a,u,c)},n.hardbreak=function(a,u,c){return c.xhtmlOut?`<br />
`:`<br>
`},n.softbreak=function(a,u,c){return c.breaks?c.xhtmlOut?`<br />
`:`<br>
`:`
`},n.text=function(a,u){return i(a[u].content)},n.html_block=function(a,u){return a[u].content},n.html_inline=function(a,u){return a[u].content},t.prototype.renderAttrs=function(a){var u,c,o;if(!a.attrs)return"";for(o="",u=0,c=a.attrs.length;u<c;u++)o+=" "+i(a.attrs[u][0])+'="'+i(a.attrs[u][1])+'"';return o},t.prototype.renderToken=function(a,u,c){var o,l="",p=!1,_=a[u];return _.hidden?"":(_.block&&_.nesting!==-1&&u&&a[u-1].hidden&&(l+=`
`),l+=(_.nesting===-1?"</":"<")+_.tag,l+=this.renderAttrs(_),_.nesting===0&&c.xhtmlOut&&(l+=" /"),_.block&&(p=!0,_.nesting===1&&u+1<a.length&&(o=a[u+1],(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===_.tag)&&(p=!1))),l+=p?`>
`:">")},t.prototype.renderInline=function(a,u,c){for(var o,l="",p=this.rules,_=0,f=a.length;_<f;_++)o=a[_].type,p[o]!==void 0?l+=p[o](a,_,u,c,this):l+=this.renderToken(a,_,u);return l},t.prototype.renderInlineAsText=function(a,u,c){for(var o="",l=0,p=a.length;l<p;l++)a[l].type==="text"?o+=a[l].content:a[l].type==="image"&&(o+=this.renderInlineAsText(a[l].children,u,c));return o},t.prototype.render=function(a,u,c){var o,l,p,_="",f=this.rules;for(o=0,l=a.length;o<l;o++)p=a[o].type,p==="inline"?_+=this.renderInline(a[o].children,u,c):f[p]!==void 0?_+=f[a[o].type](a,o,u,c,this):_+=this.renderToken(a,o,u,c);return _},d.exports=t},function(d,h,s){var t=s(0).isSpace;d.exports=function(r,e,i,n){var a,u,c,o,l,p,_,f,b,m,g,w,v,x,k,C,y,A,T,L,j=r.lineMax,S=r.bMarks[e]+r.tShift[e],M=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4||r.src.charCodeAt(S++)!==62)return!1;if(n)return!0;for(o=b=r.sCount[e]+S-(r.bMarks[e]+r.tShift[e]),r.src.charCodeAt(S)===32?(S++,o++,b++,a=!1,C=!0):r.src.charCodeAt(S)===9?(C=!0,(r.bsCount[e]+b)%4==3?(S++,o++,b++,a=!1):a=!0):C=!1,m=[r.bMarks[e]],r.bMarks[e]=S;S<M&&(u=r.src.charCodeAt(S),t(u));)u===9?b+=4-(b+r.bsCount[e]+(a?1:0))%4:b++,S++;for(g=[r.bsCount[e]],r.bsCount[e]=r.sCount[e]+1+(C?1:0),p=S>=M,x=[r.sCount[e]],r.sCount[e]=b-o,k=[r.tShift[e]],r.tShift[e]=S-r.bMarks[e],A=r.md.block.ruler.getRules("blockquote"),v=r.parentType,r.parentType="blockquote",L=!1,f=e+1;f<i&&(r.sCount[f]<r.blkIndent&&(L=!0),S=r.bMarks[f]+r.tShift[f],M=r.eMarks[f],!(S>=M));f++)if(r.src.charCodeAt(S++)!==62||L){if(p)break;for(y=!1,c=0,l=A.length;c<l;c++)if(A[c](r,f,i,!0)){y=!0;break}if(y){r.lineMax=f,r.blkIndent!==0&&(m.push(r.bMarks[f]),g.push(r.bsCount[f]),k.push(r.tShift[f]),x.push(r.sCount[f]),r.sCount[f]-=r.blkIndent);break}m.push(r.bMarks[f]),g.push(r.bsCount[f]),k.push(r.tShift[f]),x.push(r.sCount[f]),r.sCount[f]=-1}else{for(o=b=r.sCount[f]+S-(r.bMarks[f]+r.tShift[f]),r.src.charCodeAt(S)===32?(S++,o++,b++,a=!1,C=!0):r.src.charCodeAt(S)===9?(C=!0,(r.bsCount[f]+b)%4==3?(S++,o++,b++,a=!1):a=!0):C=!1,m.push(r.bMarks[f]),r.bMarks[f]=S;S<M&&(u=r.src.charCodeAt(S),t(u));)u===9?b+=4-(b+r.bsCount[f]+(a?1:0))%4:b++,S++;p=S>=M,g.push(r.bsCount[f]),r.bsCount[f]=r.sCount[f]+1+(C?1:0),x.push(r.sCount[f]),r.sCount[f]=b-o,k.push(r.tShift[f]),r.tShift[f]=S-r.bMarks[f]}for(w=r.blkIndent,r.blkIndent=0,T=r.push("blockquote_open","blockquote",1),T.markup=">",T.map=_=[e,0],r.md.block.tokenize(r,e,f),T=r.push("blockquote_close","blockquote",-1),T.markup=">",r.lineMax=j,r.parentType=v,_[1]=r.line,c=0;c<k.length;c++)r.bMarks[c+e]=m[c],r.tShift[c+e]=k[c],r.sCount[c+e]=x[c],r.bsCount[c+e]=g[c];return r.blkIndent=w,!0}},function(d,h,s){d.exports=function(t,r,e){var i,n,a;if(t.sCount[r]-t.blkIndent<4)return!1;for(n=i=r+1;i<e;)if(t.isEmpty(i))i++;else{if(!(t.sCount[i]-t.blkIndent>=4))break;i++,n=i}return t.line=n,a=t.push("code_block","code",0),a.content=t.getLines(r,n,4+t.blkIndent,!0),a.map=[r,t.line],!0}},function(d,h,s){d.exports=function(t,r,e,i){var n,a,u,c,o,l,p,_=!1,f=t.bMarks[r]+t.tShift[r],b=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||f+3>b||(n=t.src.charCodeAt(f))!==126&&n!==96||(o=f,f=t.skipChars(f,n),(a=f-o)<3)||(p=t.src.slice(o,f),u=t.src.slice(f,b),n===96&&u.indexOf(String.fromCharCode(n))>=0))return!1;if(i)return!0;for(c=r;!(++c>=e)&&(f=o=t.bMarks[c]+t.tShift[c],b=t.eMarks[c],!(f<b&&t.sCount[c]<t.blkIndent));)if(t.src.charCodeAt(f)===n&&!(t.sCount[c]-t.blkIndent>=4||(f=t.skipChars(f,n))-o<a||(f=t.skipSpaces(f))<b)){_=!0;break}return a=t.sCount[r],t.line=c+(_?1:0),l=t.push("fence","code",0),l.info=u,l.content=t.getLines(r+1,c,a,!0),l.markup=p,l.map=[r,t.line],!0}},function(d,h,s){var t=s(0).isSpace;d.exports=function(r,e,i,n){var a,u,c,o,l=r.bMarks[e]+r.tShift[e],p=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4||(a=r.src.charCodeAt(l))!==35||l>=p)return!1;for(u=1,a=r.src.charCodeAt(++l);a===35&&l<p&&u<=6;)u++,a=r.src.charCodeAt(++l);return!(u>6||l<p&&!t(a))&&(!!n||(p=r.skipSpacesBack(p,l),c=r.skipCharsBack(p,35,l),c>l&&t(r.src.charCodeAt(c-1))&&(p=c),r.line=e+1,o=r.push("heading_open","h"+String(u),1),o.markup="########".slice(0,u),o.map=[e,r.line],o=r.push("inline","",0),o.content=r.src.slice(l,p).trim(),o.map=[e,r.line],o.children=[],o=r.push("heading_close","h"+String(u),-1),o.markup="########".slice(0,u),!0))}},function(d,h,s){var t=s(0).isSpace;d.exports=function(r,e,i,n){var a,u,c,o,l=r.bMarks[e]+r.tShift[e],p=r.eMarks[e];if(r.sCount[e]-r.blkIndent>=4||(a=r.src.charCodeAt(l++))!==42&&a!==45&&a!==95)return!1;for(u=1;l<p;){if((c=r.src.charCodeAt(l++))!==a&&!t(c))return!1;c===a&&u++}return!(u<3)&&(!!n||(r.line=e+1,o=r.push("hr","hr",0),o.map=[e,r.line],o.markup=Array(u+1).join(String.fromCharCode(a)),!0))}},function(d,h,s){var t=s(138),r=s(53).HTML_OPEN_CLOSE_TAG_RE,e=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+t.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(r.source+"\\s*$"),/^$/,!1]];d.exports=function(i,n,a,u){var c,o,l,p,_=i.bMarks[n]+i.tShift[n],f=i.eMarks[n];if(i.sCount[n]-i.blkIndent>=4||!i.md.options.html||i.src.charCodeAt(_)!==60)return!1;for(p=i.src.slice(_,f),c=0;c<e.length&&!e[c][0].test(p);c++);if(c===e.length)return!1;if(u)return e[c][2];if(o=n+1,!e[c][1].test(p)){for(;o<a&&!(i.sCount[o]<i.blkIndent);o++)if(_=i.bMarks[o]+i.tShift[o],f=i.eMarks[o],p=i.src.slice(_,f),e[c][1].test(p)){p.length!==0&&o++;break}}return i.line=o,l=i.push("html_block","",0),l.map=[n,o],l.content=i.getLines(n,o,i.blkIndent,!0),!0}},function(d,h,s){d.exports=function(t,r,e){var i,n,a,u,c,o,l,p,_,f,b=r+1,m=t.md.block.ruler.getRules("paragraph");if(t.sCount[r]-t.blkIndent>=4)return!1;for(f=t.parentType,t.parentType="paragraph";b<e&&!t.isEmpty(b);b++)if(!(t.sCount[b]-t.blkIndent>3)){if(t.sCount[b]>=t.blkIndent&&(o=t.bMarks[b]+t.tShift[b],l=t.eMarks[b],o<l&&((_=t.src.charCodeAt(o))===45||_===61)&&(o=t.skipChars(o,_),(o=t.skipSpaces(o))>=l))){p=_===61?1:2;break}if(!(t.sCount[b]<0)){for(n=!1,a=0,u=m.length;a<u;a++)if(m[a](t,b,e,!0)){n=!0;break}if(n)break}}return!!p&&(i=t.getLines(r,b,t.blkIndent,!1).trim(),t.line=b+1,c=t.push("heading_open","h"+String(p),1),c.markup=String.fromCharCode(_),c.map=[r,t.line],c=t.push("inline","",0),c.content=i,c.map=[r,t.line-1],c.children=[],c=t.push("heading_close","h"+String(p),-1),c.markup=String.fromCharCode(_),t.parentType=f,!0)}},function(d,h,s){function t(n,a){var u,c,o,l;return c=n.bMarks[a]+n.tShift[a],o=n.eMarks[a],u=n.src.charCodeAt(c++),u!==42&&u!==45&&u!==43||c<o&&(l=n.src.charCodeAt(c),!i(l))?-1:c}function r(n,a){var u,c=n.bMarks[a]+n.tShift[a],o=c,l=n.eMarks[a];if(o+1>=l||(u=n.src.charCodeAt(o++))<48||u>57)return-1;for(;;){if(o>=l)return-1;u=n.src.charCodeAt(o++);{if(!(u>=48&&u<=57)){if(u===41||u===46)break;return-1}if(o-c>=10)return-1}}return o<l&&(u=n.src.charCodeAt(o),!i(u))?-1:o}function e(n,a){var u,c,o=n.level+2;for(u=a+2,c=n.tokens.length-2;u<c;u++)n.tokens[u].level===o&&n.tokens[u].type==="paragraph_open"&&(n.tokens[u+2].hidden=!0,n.tokens[u].hidden=!0,u+=2)}var i=s(0).isSpace;d.exports=function(n,a,u,c){var o,l,p,_,f,b,m,g,w,v,x,k,C,y,A,T,L,j,S,M,$,E,q,O,P,D,z,F,R=!1,B=!0;if(n.sCount[a]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[a]-n.listIndent>=4&&n.sCount[a]<n.blkIndent)return!1;if(c&&n.parentType==="paragraph"&&n.tShift[a]>=n.blkIndent&&(R=!0),(q=r(n,a))>=0){if(m=!0,P=n.bMarks[a]+n.tShift[a],C=Number(n.src.substr(P,q-P-1)),R&&C!==1)return!1}else{if(!((q=t(n,a))>=0))return!1;m=!1}if(R&&n.skipSpaces(q)>=n.eMarks[a])return!1;if(k=n.src.charCodeAt(q-1),c)return!0;for(x=n.tokens.length,m?(F=n.push("ordered_list_open","ol",1),C!==1&&(F.attrs=[["start",C]])):F=n.push("bullet_list_open","ul",1),F.map=v=[a,0],F.markup=String.fromCharCode(k),A=a,O=!1,z=n.md.block.ruler.getRules("list"),j=n.parentType,n.parentType="list";A<u;){for(E=q,y=n.eMarks[A],b=T=n.sCount[A]+q-(n.bMarks[a]+n.tShift[a]);E<y;){if((o=n.src.charCodeAt(E))===9)T+=4-(T+n.bsCount[A])%4;else{if(o!==32)break;T++}E++}if(l=E,f=l>=y?1:T-b,f>4&&(f=1),_=b+f,F=n.push("list_item_open","li",1),F.markup=String.fromCharCode(k),F.map=g=[a,0],$=n.tight,M=n.tShift[a],S=n.sCount[a],L=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=_,n.tight=!0,n.tShift[a]=l-n.bMarks[a],n.sCount[a]=T,l>=y&&n.isEmpty(a+1)?n.line=Math.min(n.line+2,u):n.md.block.tokenize(n,a,u,!0),n.tight&&!O||(B=!1),O=n.line-a>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=L,n.tShift[a]=M,n.sCount[a]=S,n.tight=$,F=n.push("list_item_close","li",-1),F.markup=String.fromCharCode(k),A=a=n.line,g[1]=A,l=n.bMarks[a],A>=u||n.sCount[A]<n.blkIndent||n.sCount[a]-n.blkIndent>=4)break;for(D=!1,p=0,w=z.length;p<w;p++)if(z[p](n,A,u,!0)){D=!0;break}if(D)break;if(m){if((q=r(n,A))<0)break}else if((q=t(n,A))<0)break;if(k!==n.src.charCodeAt(q-1))break}return F=m?n.push("ordered_list_close","ol",-1):n.push("bullet_list_close","ul",-1),F.markup=String.fromCharCode(k),v[1]=A,n.line=A,n.parentType=j,B&&e(n,x),!0}},function(d,h,s){d.exports=function(t,r){var e,i,n,a,u,c,o=r+1,l=t.md.block.ruler.getRules("paragraph"),p=t.lineMax;for(c=t.parentType,t.parentType="paragraph";o<p&&!t.isEmpty(o);o++)if(!(t.sCount[o]-t.blkIndent>3||t.sCount[o]<0)){for(i=!1,n=0,a=l.length;n<a;n++)if(l[n](t,o,p,!0)){i=!0;break}if(i)break}return e=t.getLines(r,o,t.blkIndent,!1).trim(),t.line=o,u=t.push("paragraph_open","p",1),u.map=[r,t.line],u=t.push("inline","",0),u.content=e,u.map=[r,t.line],u.children=[],u=t.push("paragraph_close","p",-1),t.parentType=c,!0}},function(d,h,s){var t=s(0).normalizeReference,r=s(0).isSpace;d.exports=function(e,i,n,a){var u,c,o,l,p,_,f,b,m,g,w,v,x,k,C,y,A=0,T=e.bMarks[i]+e.tShift[i],L=e.eMarks[i],j=i+1;if(e.sCount[i]-e.blkIndent>=4||e.src.charCodeAt(T)!==91)return!1;for(;++T<L;)if(e.src.charCodeAt(T)===93&&e.src.charCodeAt(T-1)!==92){if(T+1===L||e.src.charCodeAt(T+1)!==58)return!1;break}for(l=e.lineMax,C=e.md.block.ruler.getRules("reference"),g=e.parentType,e.parentType="reference";j<l&&!e.isEmpty(j);j++)if(!(e.sCount[j]-e.blkIndent>3||e.sCount[j]<0)){for(k=!1,_=0,f=C.length;_<f;_++)if(C[_](e,j,l,!0)){k=!0;break}if(k)break}for(x=e.getLines(i,j,e.blkIndent,!1).trim(),L=x.length,T=1;T<L;T++){if((u=x.charCodeAt(T))===91)return!1;if(u===93){m=T;break}(u===10||u===92&&++T<L&&x.charCodeAt(T)===10)&&A++}if(m<0||x.charCodeAt(m+1)!==58)return!1;for(T=m+2;T<L;T++)if((u=x.charCodeAt(T))===10)A++;else if(!r(u))break;if(w=e.md.helpers.parseLinkDestination(x,T,L),!w.ok||(p=e.md.normalizeLink(w.str),!e.md.validateLink(p)))return!1;for(T=w.pos,A+=w.lines,c=T,o=A,v=T;T<L;T++)if((u=x.charCodeAt(T))===10)A++;else if(!r(u))break;for(w=e.md.helpers.parseLinkTitle(x,T,L),T<L&&v!==T&&w.ok?(y=w.str,T=w.pos,A+=w.lines):(y="",T=c,A=o);T<L&&(u=x.charCodeAt(T),r(u));)T++;if(T<L&&x.charCodeAt(T)!==10&&y)for(y="",T=c,A=o;T<L&&(u=x.charCodeAt(T),r(u));)T++;return!(T<L&&x.charCodeAt(T)!==10)&&!!(b=t(x.slice(1,m)))&&(!!a||(e.env.references===void 0&&(e.env.references={}),e.env.references[b]===void 0&&(e.env.references[b]={title:y,href:p}),e.parentType=g,e.line=i+A+1,!0))}},function(d,h,s){function t(i,n,a,u){var c,o,l,p,_,f,b,m;for(this.src=i,this.md=n,this.env=a,this.tokens=u,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,m=!1,l=p=f=b=0,_=o.length;p<_;p++){if(c=o.charCodeAt(p),!m){if(e(c)){f++,c===9?b+=4-b%4:b++;continue}m=!0}c!==10&&p!==_-1||(c!==10&&p++,this.bMarks.push(l),this.eMarks.push(p),this.tShift.push(f),this.sCount.push(b),this.bsCount.push(0),m=!1,f=0,b=0,l=p+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}var r=s(33),e=s(0).isSpace;t.prototype.push=function(i,n,a){var u=new r(i,n,a);return u.block=!0,a<0&&this.level--,u.level=this.level,a>0&&this.level++,this.tokens.push(u),u},t.prototype.isEmpty=function(i){return this.bMarks[i]+this.tShift[i]>=this.eMarks[i]},t.prototype.skipEmptyLines=function(i){for(var n=this.lineMax;i<n&&!(this.bMarks[i]+this.tShift[i]<this.eMarks[i]);i++);return i},t.prototype.skipSpaces=function(i){for(var n,a=this.src.length;i<a&&(n=this.src.charCodeAt(i),e(n));i++);return i},t.prototype.skipSpacesBack=function(i,n){if(i<=n)return i;for(;i>n;)if(!e(this.src.charCodeAt(--i)))return i+1;return i},t.prototype.skipChars=function(i,n){for(var a=this.src.length;i<a&&this.src.charCodeAt(i)===n;i++);return i},t.prototype.skipCharsBack=function(i,n,a){if(i<=a)return i;for(;i>a;)if(n!==this.src.charCodeAt(--i))return i+1;return i},t.prototype.getLines=function(i,n,a,u){var c,o,l,p,_,f,b,m=i;if(i>=n)return"";for(f=new Array(n-i),c=0;m<n;m++,c++){for(o=0,b=p=this.bMarks[m],_=m+1<n||u?this.eMarks[m]+1:this.eMarks[m];p<_&&o<a;){if(l=this.src.charCodeAt(p),e(l))l===9?o+=4-(o+this.bsCount[m])%4:o++;else{if(!(p-b<this.tShift[m]))break;o++}p++}f[c]=o>a?new Array(o-a+1).join(" ")+this.src.slice(p,_):this.src.slice(p,_)}return f.join("")},t.prototype.Token=r,d.exports=t},function(d,h,s){function t(i,n){var a=i.bMarks[n]+i.blkIndent,u=i.eMarks[n];return i.src.substr(a,u-a)}function r(i){var n,a=[],u=0,c=i.length,o=0,l=0,p=!1,_=0;for(n=i.charCodeAt(u);u<c;)n===96?p?(p=!1,_=u):o%2==0&&(p=!0,_=u):n!==124||o%2!=0||p||(a.push(i.substring(l,u)),l=u+1),n===92?o++:o=0,u++,u===c&&p&&(p=!1,u=_+1),n=i.charCodeAt(u);return a.push(i.substring(l)),a}var e=s(0).isSpace;d.exports=function(i,n,a,u){var c,o,l,p,_,f,b,m,g,w,v,x;if(n+2>a||(_=n+1,i.sCount[_]<i.blkIndent)||i.sCount[_]-i.blkIndent>=4||(l=i.bMarks[_]+i.tShift[_])>=i.eMarks[_]||(c=i.src.charCodeAt(l++))!==124&&c!==45&&c!==58)return!1;for(;l<i.eMarks[_];){if((c=i.src.charCodeAt(l))!==124&&c!==45&&c!==58&&!e(c))return!1;l++}for(o=t(i,n+1),f=o.split("|"),g=[],p=0;p<f.length;p++){if(!(w=f[p].trim())){if(p===0||p===f.length-1)continue;return!1}if(!/^:?-+:?$/.test(w))return!1;w.charCodeAt(w.length-1)===58?g.push(w.charCodeAt(0)===58?"center":"right"):w.charCodeAt(0)===58?g.push("left"):g.push("")}if(o=t(i,n).trim(),o.indexOf("|")===-1||i.sCount[n]-i.blkIndent>=4||(f=r(o.replace(/^\||\|$/g,"")),(b=f.length)>g.length))return!1;if(u)return!0;for(m=i.push("table_open","table",1),m.map=v=[n,0],m=i.push("thead_open","thead",1),m.map=[n,n+1],m=i.push("tr_open","tr",1),m.map=[n,n+1],p=0;p<f.length;p++)m=i.push("th_open","th",1),m.map=[n,n+1],g[p]&&(m.attrs=[["style","text-align:"+g[p]]]),m=i.push("inline","",0),m.content=f[p].trim(),m.map=[n,n+1],m.children=[],m=i.push("th_close","th",-1);for(m=i.push("tr_close","tr",-1),m=i.push("thead_close","thead",-1),m=i.push("tbody_open","tbody",1),m.map=x=[n+2,0],_=n+2;_<a&&!(i.sCount[_]<i.blkIndent)&&(o=t(i,_).trim(),o.indexOf("|")!==-1)&&!(i.sCount[_]-i.blkIndent>=4);_++){for(f=r(o.replace(/^\||\|$/g,"")),m=i.push("tr_open","tr",1),p=0;p<b;p++)m=i.push("td_open","td",1),g[p]&&(m.attrs=[["style","text-align:"+g[p]]]),m=i.push("inline","",0),m.content=f[p]?f[p].trim():"",m.children=[],m=i.push("td_close","td",-1);m=i.push("tr_close","tr",-1)}return m=i.push("tbody_close","tbody",-1),m=i.push("table_close","table",-1),v[1]=x[1]=_,i.line=_,!0}},function(d,h,s){d.exports=function(t){var r;t.inlineMode?(r=new t.Token("inline","",0),r.content=t.src,r.map=[0,1],r.children=[],t.tokens.push(r)):t.md.block.parse(t.src,t.md,t.env,t.tokens)}},function(d,h,s){d.exports=function(t){var r,e,i,n=t.tokens;for(e=0,i=n.length;e<i;e++)r=n[e],r.type==="inline"&&t.md.inline.parse(r.content,t.md,t.env,r.children)}},function(d,h,s){function t(i){return/^<a[>\s]/i.test(i)}function r(i){return/^<\/a\s*>/i.test(i)}var e=s(0).arrayReplaceAt;d.exports=function(i){var n,a,u,c,o,l,p,_,f,b,m,g,w,v,x,k,C,y=i.tokens;if(i.md.options.linkify){for(a=0,u=y.length;a<u;a++)if(y[a].type==="inline"&&i.md.linkify.pretest(y[a].content))for(c=y[a].children,w=0,n=c.length-1;n>=0;n--)if(l=c[n],l.type!=="link_close"){if(l.type==="html_inline"&&(t(l.content)&&w>0&&w--,r(l.content)&&w++),!(w>0)&&l.type==="text"&&i.md.linkify.test(l.content)){for(f=l.content,C=i.md.linkify.match(f),p=[],g=l.level,m=0,_=0;_<C.length;_++)v=C[_].url,x=i.md.normalizeLink(v),i.md.validateLink(x)&&(k=C[_].text,k=C[_].schema?C[_].schema!=="mailto:"||/^mailto:/i.test(k)?i.md.normalizeLinkText(k):i.md.normalizeLinkText("mailto:"+k).replace(/^mailto:/,""):i.md.normalizeLinkText("http://"+k).replace(/^http:\/\//,""),b=C[_].index,b>m&&(o=new i.Token("text","",0),o.content=f.slice(m,b),o.level=g,p.push(o)),o=new i.Token("link_open","a",1),o.attrs=[["href",x]],o.level=g++,o.markup="linkify",o.info="auto",p.push(o),o=new i.Token("text","",0),o.content=k,o.level=g,p.push(o),o=new i.Token("link_close","a",-1),o.level=--g,o.markup="linkify",o.info="auto",p.push(o),m=C[_].lastIndex);m<f.length&&(o=new i.Token("text","",0),o.content=f.slice(m),o.level=g,p.push(o)),y[a].children=c=e(c,n,p)}}else for(n--;c[n].level!==l.level&&c[n].type!=="link_open";)n--}}},function(d,h,s){var t=/\r\n?|\n/g,r=/\0/g;d.exports=function(e){var i;i=e.src.replace(t,`
`),i=i.replace(r,"�"),e.src=i}},function(d,h,s){function t(c,o){return u[o.toLowerCase()]}function r(c){var o,l,p=0;for(o=c.length-1;o>=0;o--)l=c[o],l.type!=="text"||p||(l.content=l.content.replace(a,t)),l.type==="link_open"&&l.info==="auto"&&p--,l.type==="link_close"&&l.info==="auto"&&p++}function e(c){var o,l,p=0;for(o=c.length-1;o>=0;o--)l=c[o],l.type!=="text"||p||i.test(l.content)&&(l.content=l.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),l.type==="link_open"&&l.info==="auto"&&p--,l.type==="link_close"&&l.info==="auto"&&p++}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,n=/\((c|tm|r|p)\)/i,a=/\((c|tm|r|p)\)/gi,u={c:"©",r:"®",p:"§",tm:"™"};d.exports=function(c){var o;if(c.md.options.typographer)for(o=c.tokens.length-1;o>=0;o--)c.tokens[o].type==="inline"&&(n.test(c.tokens[o].content)&&r(c.tokens[o].children),i.test(c.tokens[o].content)&&e(c.tokens[o].children))}},function(d,h,s){function t(o,l,p){return o.substr(0,l)+p+o.substr(l+1)}function r(o,l){var p,_,f,b,m,g,w,v,x,k,C,y,A,T,L,j,S,M,$,E,q;for($=[],p=0;p<o.length;p++){for(_=o[p],w=o[p].level,S=$.length-1;S>=0&&!($[S].level<=w);S--);if($.length=S+1,_.type==="text"){f=_.content,m=0,g=f.length;t:for(;m<g&&(u.lastIndex=m,b=u.exec(f));){if(L=j=!0,m=b.index+1,M=b[0]==="'",x=32,b.index-1>=0)x=f.charCodeAt(b.index-1);else for(S=p-1;S>=0&&o[S].type!=="softbreak"&&o[S].type!=="hardbreak";S--)if(o[S].type==="text"){x=o[S].content.charCodeAt(o[S].content.length-1);break}if(k=32,m<g)k=f.charCodeAt(m);else for(S=p+1;S<o.length&&o[S].type!=="softbreak"&&o[S].type!=="hardbreak";S++)if(o[S].type==="text"){k=o[S].content.charCodeAt(0);break}if(C=n(x)||i(String.fromCharCode(x)),y=n(k)||i(String.fromCharCode(k)),A=e(x),T=e(k),T?L=!1:y&&(A||C||(L=!1)),A?j=!1:C&&(T||y||(j=!1)),k===34&&b[0]==='"'&&x>=48&&x<=57&&(j=L=!1),L&&j&&(L=!1,j=y),L||j){if(j){for(S=$.length-1;S>=0&&(v=$[S],!($[S].level<w));S--)if(v.single===M&&$[S].level===w){v=$[S],M?(E=l.md.options.quotes[2],q=l.md.options.quotes[3]):(E=l.md.options.quotes[0],q=l.md.options.quotes[1]),_.content=t(_.content,b.index,q),o[v.token].content=t(o[v.token].content,v.pos,E),m+=q.length-1,v.token===p&&(m+=E.length-1),f=_.content,g=f.length,$.length=S;continue t}}L?$.push({token:p,pos:b.index,single:M,level:w}):j&&M&&(_.content=t(_.content,b.index,c))}else M&&(_.content=t(_.content,b.index,c))}}}}var e=s(0).isWhiteSpace,i=s(0).isPunctChar,n=s(0).isMdAsciiPunct,a=/['"]/,u=/['"]/g,c="’";d.exports=function(o){var l;if(o.md.options.typographer)for(l=o.tokens.length-1;l>=0;l--)o.tokens[l].type==="inline"&&a.test(o.tokens[l].content)&&r(o.tokens[l].children,o)}},function(d,h,s){function t(e,i,n){this.src=e,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=i}var r=s(33);t.prototype.Token=r,d.exports=t},function(d,h,s){var t=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,r=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;d.exports=function(e,i){var n,a,u,c,o,l,p=e.pos;return e.src.charCodeAt(p)===60&&(n=e.src.slice(p),!(n.indexOf(">")<0)&&(r.test(n)?(a=n.match(r),c=a[0].slice(1,-1),o=e.md.normalizeLink(c),!!e.md.validateLink(o)&&(i||(l=e.push("link_open","a",1),l.attrs=[["href",o]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(c),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=a[0].length,!0)):!!t.test(n)&&(u=n.match(t),c=u[0].slice(1,-1),o=e.md.normalizeLink("mailto:"+c),!!e.md.validateLink(o)&&(i||(l=e.push("link_open","a",1),l.attrs=[["href",o]],l.markup="autolink",l.info="auto",l=e.push("text","",0),l.content=e.md.normalizeLinkText(c),l=e.push("link_close","a",-1),l.markup="autolink",l.info="auto"),e.pos+=u[0].length,!0))))}},function(d,h,s){d.exports=function(t,r){var e,i,n,a,u,c,o=t.pos;if(t.src.charCodeAt(o)!==96)return!1;for(e=o,o++,i=t.posMax;o<i&&t.src.charCodeAt(o)===96;)o++;for(n=t.src.slice(e,o),a=u=o;(a=t.src.indexOf("`",u))!==-1;){for(u=a+1;u<i&&t.src.charCodeAt(u)===96;)u++;if(u-a===n.length)return r||(c=t.push("code_inline","code",0),c.markup=n,c.content=t.src.slice(o,a).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),t.pos=u,!0}return r||(t.pending+=n),t.pos+=n.length,!0}},function(d,h,s){function t(r,e){var i,n,a,u,c,o,l,p,_={},f=e.length;for(i=0;i<f;i++)if(a=e[i],a.length=a.length||0,a.close){for(_.hasOwnProperty(a.marker)||(_[a.marker]=[-1,-1,-1]),c=_[a.marker][a.length%3],o=-1,n=i-a.jump-1;n>c;n-=u.jump+1)if(u=e[n],u.marker===a.marker&&(o===-1&&(o=n),u.open&&u.end<0&&u.level===a.level&&(l=!1,(u.close||a.open)&&(u.length+a.length)%3==0&&(u.length%3==0&&a.length%3==0||(l=!0)),!l))){p=n>0&&!e[n-1].open?e[n-1].jump+1:0,a.jump=i-n+p,a.open=!1,u.end=i,u.jump=p,u.close=!1,o=-1;break}o!==-1&&(_[a.marker][(a.length||0)%3]=o)}}d.exports=function(r){var e,i=r.tokens_meta,n=r.tokens_meta.length;for(t(r,r.delimiters),e=0;e<n;e++)i[e]&&i[e].delimiters&&t(r,i[e].delimiters)}},function(d,h,s){var t=s(52),r=s(0).has,e=s(0).isValidEntityCode,i=s(0).fromCodePoint,n=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,a=/^&([a-z][a-z0-9]{1,31});/i;d.exports=function(u,c){var o,l,p=u.pos,_=u.posMax;if(u.src.charCodeAt(p)!==38)return!1;if(p+1<_){if(u.src.charCodeAt(p+1)===35){if(l=u.src.slice(p).match(n))return c||(o=l[1][0].toLowerCase()==="x"?parseInt(l[1].slice(1),16):parseInt(l[1],10),u.pending+=i(e(o)?o:65533)),u.pos+=l[0].length,!0}else if((l=u.src.slice(p).match(a))&&r(t,l[1]))return c||(u.pending+=t[l[1]]),u.pos+=l[0].length,!0}return c||(u.pending+="&"),u.pos++,!0}},function(d,h,s){for(var t=s(0).isSpace,r=[],e=0;e<256;e++)r.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(i){r[i.charCodeAt(0)]=1}),d.exports=function(i,n){var a,u=i.pos,c=i.posMax;if(i.src.charCodeAt(u)!==92)return!1;if(++u<c){if((a=i.src.charCodeAt(u))<256&&r[a]!==0)return n||(i.pending+=i.src[u]),i.pos+=2,!0;if(a===10){for(n||i.push("hardbreak","br",0),u++;u<c&&(a=i.src.charCodeAt(u),t(a));)u++;return i.pos=u,!0}}return n||(i.pending+="\\"),i.pos++,!0}},function(d,h,s){function t(e){var i=32|e;return i>=97&&i<=122}var r=s(53).HTML_TAG_RE;d.exports=function(e,i){var n,a,u,c,o=e.pos;return!!e.md.options.html&&(u=e.posMax,!(e.src.charCodeAt(o)!==60||o+2>=u)&&!((n=e.src.charCodeAt(o+1))!==33&&n!==63&&n!==47&&!t(n))&&!!(a=e.src.slice(o).match(r))&&(i||(c=e.push("html_inline","",0),c.content=e.src.slice(o,o+a[0].length)),e.pos+=a[0].length,!0))}},function(d,h,s){var t=s(0).normalizeReference,r=s(0).isSpace;d.exports=function(e,i){var n,a,u,c,o,l,p,_,f,b,m,g,w,v="",x=e.pos,k=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(l=e.pos+2,(o=e.md.helpers.parseLinkLabel(e,e.pos+1,!1))<0))return!1;if((p=o+1)<k&&e.src.charCodeAt(p)===40){for(p++;p<k&&(a=e.src.charCodeAt(p),r(a)||a===10);p++);if(p>=k)return!1;for(w=p,f=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),f.ok&&(v=e.md.normalizeLink(f.str),e.md.validateLink(v)?p=f.pos:v=""),w=p;p<k&&(a=e.src.charCodeAt(p),r(a)||a===10);p++);if(f=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<k&&w!==p&&f.ok)for(b=f.str,p=f.pos;p<k&&(a=e.src.charCodeAt(p),r(a)||a===10);p++);else b="";if(p>=k||e.src.charCodeAt(p)!==41)return e.pos=x,!1;p++}else{if(e.env.references===void 0)return!1;if(p<k&&e.src.charCodeAt(p)===91?(w=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?c=e.src.slice(w,p++):p=o+1):p=o+1,c||(c=e.src.slice(l,o)),!(_=e.env.references[t(c)]))return e.pos=x,!1;v=_.href,b=_.title}return i||(u=e.src.slice(l,o),e.md.inline.parse(u,e.md,e.env,g=[]),m=e.push("image","img",0),m.attrs=n=[["src",v],["alt",""]],m.children=g,m.content=u,b&&n.push(["title",b])),e.pos=p,e.posMax=k,!0}},function(d,h,s){var t=s(0).normalizeReference,r=s(0).isSpace;d.exports=function(e,i){var n,a,u,c,o,l,p,_,f,b,m="",g=e.pos,w=e.posMax,v=e.pos,x=!0;if(e.src.charCodeAt(e.pos)!==91||(o=e.pos+1,(c=e.md.helpers.parseLinkLabel(e,e.pos,!0))<0))return!1;if((l=c+1)<w&&e.src.charCodeAt(l)===40){for(x=!1,l++;l<w&&(a=e.src.charCodeAt(l),r(a)||a===10);l++);if(l>=w)return!1;for(v=l,p=e.md.helpers.parseLinkDestination(e.src,l,e.posMax),p.ok&&(m=e.md.normalizeLink(p.str),e.md.validateLink(m)?l=p.pos:m=""),v=l;l<w&&(a=e.src.charCodeAt(l),r(a)||a===10);l++);if(p=e.md.helpers.parseLinkTitle(e.src,l,e.posMax),l<w&&v!==l&&p.ok)for(f=p.str,l=p.pos;l<w&&(a=e.src.charCodeAt(l),r(a)||a===10);l++);else f="";(l>=w||e.src.charCodeAt(l)!==41)&&(x=!0),l++}if(x){if(e.env.references===void 0)return!1;if(l<w&&e.src.charCodeAt(l)===91?(v=l+1,l=e.md.helpers.parseLinkLabel(e,l),l>=0?u=e.src.slice(v,l++):l=c+1):l=c+1,u||(u=e.src.slice(o,c)),!(_=e.env.references[t(u)]))return e.pos=g,!1;m=_.href,f=_.title}return i||(e.pos=o,e.posMax=c,b=e.push("link_open","a",1),b.attrs=n=[["href",m]],f&&n.push(["title",f]),e.md.inline.tokenize(e),b=e.push("link_close","a",-1)),e.pos=l,e.posMax=w,!0}},function(d,h,s){var t=s(0).isSpace;d.exports=function(r,e){var i,n,a=r.pos;if(r.src.charCodeAt(a)!==10)return!1;for(i=r.pending.length-1,n=r.posMax,e||(i>=0&&r.pending.charCodeAt(i)===32?i>=1&&r.pending.charCodeAt(i-1)===32?(r.pending=r.pending.replace(/ +$/,""),r.push("hardbreak","br",0)):(r.pending=r.pending.slice(0,-1),r.push("softbreak","br",0)):r.push("softbreak","br",0)),a++;a<n&&t(r.src.charCodeAt(a));)a++;return r.pos=a,!0}},function(d,h,s){function t(a,u,c,o){this.src=a,this.env=c,this.md=u,this.tokens=o,this.tokens_meta=Array(o.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[]}var r=s(33),e=s(0).isWhiteSpace,i=s(0).isPunctChar,n=s(0).isMdAsciiPunct;t.prototype.pushPending=function(){var a=new r("text","",0);return a.content=this.pending,a.level=this.pendingLevel,this.tokens.push(a),this.pending="",a},t.prototype.push=function(a,u,c){this.pending&&this.pushPending();var o=new r(a,u,c),l=null;return c<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),o.level=this.level,c>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],l={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(o),this.tokens_meta.push(l),o},t.prototype.scanDelims=function(a,u){var c,o,l,p,_,f,b,m,g,w=a,v=!0,x=!0,k=this.posMax,C=this.src.charCodeAt(a);for(c=a>0?this.src.charCodeAt(a-1):32;w<k&&this.src.charCodeAt(w)===C;)w++;return l=w-a,o=w<k?this.src.charCodeAt(w):32,b=n(c)||i(String.fromCharCode(c)),g=n(o)||i(String.fromCharCode(o)),f=e(c),m=e(o),m?v=!1:g&&(f||b||(v=!1)),f?x=!1:b&&(m||g||(x=!1)),u?(p=v,_=x):(p=v&&(!x||b),_=x&&(!v||g)),{can_open:p,can_close:_,length:l}},t.prototype.Token=r,d.exports=t},function(d,h,s){function t(r){switch(r){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}d.exports=function(r,e){for(var i=r.pos;i<r.posMax&&!t(r.src.charCodeAt(i));)i++;return i!==r.pos&&(e||(r.pending+=r.src.slice(r.pos,i)),r.pos=i,!0)}},function(d,h,s){d.exports=function(t){var r,e,i=0,n=t.tokens,a=t.tokens.length;for(r=e=0;r<a;r++)n[r].nesting<0&&i--,n[r].level=i,n[r].nesting>0&&i++,n[r].type==="text"&&r+1<a&&n[r+1].type==="text"?n[r+1].content=n[r].content+n[r+1].content:(r!==e&&(n[e]=n[r]),e++);r!==e&&(n.length=e)}},function(d,h,s){function t(i){var n,a,u=e[i];if(u)return u;for(u=e[i]=[],n=0;n<128;n++)a=String.fromCharCode(n),u.push(a);for(n=0;n<i.length;n++)a=i.charCodeAt(n),u[a]="%"+("0"+a.toString(16).toUpperCase()).slice(-2);return u}function r(i,n){var a;return typeof n!="string"&&(n=r.defaultChars),a=t(n),i.replace(/(%[a-f0-9]{2})+/gi,function(u){var c,o,l,p,_,f,b,m="";for(c=0,o=u.length;c<o;c+=3)l=parseInt(u.slice(c+1,c+3),16),l<128?m+=a[l]:(224&l)==192&&c+3<o&&(192&(p=parseInt(u.slice(c+4,c+6),16)))==128?(b=l<<6&1984|63&p,m+=b<128?"��":String.fromCharCode(b),c+=3):(240&l)==224&&c+6<o&&(p=parseInt(u.slice(c+4,c+6),16),_=parseInt(u.slice(c+7,c+9),16),(192&p)==128&&(192&_)==128)?(b=l<<12&61440|p<<6&4032|63&_,m+=b<2048||b>=55296&&b<=57343?"���":String.fromCharCode(b),c+=6):(248&l)==240&&c+9<o&&(p=parseInt(u.slice(c+4,c+6),16),_=parseInt(u.slice(c+7,c+9),16),f=parseInt(u.slice(c+10,c+12),16),(192&p)==128&&(192&_)==128&&(192&f)==128)?(b=l<<18&1835008|p<<12&258048|_<<6&4032|63&f,b<65536||b>1114111?m+="����":(b-=65536,m+=String.fromCharCode(55296+(b>>10),56320+(1023&b))),c+=9):m+="�";return m})}var e={};r.defaultChars=";/?:@&=+$,#",r.componentChars="",d.exports=r},function(d,h,s){function t(i){var n,a,u=e[i];if(u)return u;for(u=e[i]=[],n=0;n<128;n++)a=String.fromCharCode(n),/^[0-9a-z]$/i.test(a)?u.push(a):u.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<i.length;n++)u[i.charCodeAt(n)]=i[n];return u}function r(i,n,a){var u,c,o,l,p,_="";for(typeof n!="string"&&(a=n,n=r.defaultChars),a===void 0&&(a=!0),p=t(n),u=0,c=i.length;u<c;u++)if(o=i.charCodeAt(u),a&&o===37&&u+2<c&&/^[0-9a-f]{2}$/i.test(i.slice(u+1,u+3)))_+=i.slice(u,u+3),u+=2;else if(o<128)_+=p[o];else if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&u+1<c&&(l=i.charCodeAt(u+1))>=56320&&l<=57343){_+=encodeURIComponent(i[u]+i[u+1]),u++;continue}_+="%EF%BF%BD"}else _+=encodeURIComponent(i[u]);return _}var e={};r.defaultChars=";/?:@&=+$,-_.!~*'()#",r.componentChars="-_.!~*'()",d.exports=r},function(d,h,s){d.exports=function(t){var r="";return r+=t.protocol||"",r+=t.slashes?"//":"",r+=t.auth?t.auth+"@":"",t.hostname&&t.hostname.indexOf(":")!==-1?r+="["+t.hostname+"]":r+=t.hostname||"",r+=t.port?":"+t.port:"",r+=t.pathname||"",r+=t.search||"",r+=t.hash||""}},function(d,h,s){function t(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function r(m,g){if(m&&m instanceof t)return m;var w=new t;return w.parse(m,g),w}var e=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,n=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,a=["<",">",'"',"`"," ","\r",`
`,"	"],u=["{","}","|","\\","^","`"].concat(a),c=["'"].concat(u),o=["%","/","?",";","#"].concat(c),l=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},b={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};t.prototype.parse=function(m,g){var w,v,x,k,C,y=m;if(y=y.trim(),!g&&m.split("#").length===1){var A=n.exec(y);if(A)return this.pathname=A[1],A[2]&&(this.search=A[2]),this}var T=e.exec(y);if(T&&(T=T[0],x=T.toLowerCase(),this.protocol=T,y=y.substr(T.length)),(g||T||y.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(C=y.substr(0,2)==="//")||T&&f[T]||(y=y.substr(2),this.slashes=!0)),!f[T]&&(C||T&&!b[T])){var L=-1;for(w=0;w<l.length;w++)(k=y.indexOf(l[w]))!==-1&&(L===-1||k<L)&&(L=k);var j,S;for(S=L===-1?y.lastIndexOf("@"):y.lastIndexOf("@",L),S!==-1&&(j=y.slice(0,S),y=y.slice(S+1),this.auth=j),L=-1,w=0;w<o.length;w++)(k=y.indexOf(o[w]))!==-1&&(L===-1||k<L)&&(L=k);L===-1&&(L=y.length),y[L-1]===":"&&L--;var M=y.slice(0,L);y=y.slice(L),this.parseHost(M),this.hostname=this.hostname||"";var $=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!$){var E=this.hostname.split(/\./);for(w=0,v=E.length;w<v;w++){var q=E[w];if(q&&!q.match(p)){for(var O="",P=0,D=q.length;P<D;P++)q.charCodeAt(P)>127?O+="x":O+=q[P];if(!O.match(p)){var z=E.slice(0,w),F=E.slice(w+1),R=q.match(_);R&&(z.push(R[1]),F.unshift(R[2])),F.length&&(y=F.join(".")+y),this.hostname=z.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),$&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var B=y.indexOf("#");B!==-1&&(this.hash=y.substr(B),y=y.slice(0,B));var U=y.indexOf("?");return U!==-1&&(this.search=y.substr(U),y=y.slice(0,U)),y&&(this.pathname=y),b[x]&&this.hostname&&!this.pathname&&(this.pathname=""),this},t.prototype.parseHost=function(m){var g=i.exec(m);g&&(g=g[0],g!==":"&&(this.port=g.substr(1)),m=m.substr(0,m.length-g.length)),m&&(this.hostname=m)},d.exports=r},function(d,h,s){(function(t,r){var e;(function(i){function n(D){throw new RangeError(E[D])}function a(D,z){for(var F=D.length,R=[];F--;)R[F]=z(D[F]);return R}function u(D,z){var F=D.split("@"),R="";return F.length>1&&(R=F[0]+"@",D=F[1]),D=D.replace($,"."),R+a(D.split("."),z).join(".")}function c(D){for(var z,F,R=[],B=0,U=D.length;B<U;)z=D.charCodeAt(B++),z>=55296&&z<=56319&&B<U?(F=D.charCodeAt(B++),(64512&F)==56320?R.push(((1023&z)<<10)+(1023&F)+65536):(R.push(z),B--)):R.push(z);return R}function o(D){return a(D,function(z){var F="";return z>65535&&(z-=65536,F+=P(z>>>10&1023|55296),z=56320|1023&z),F+=P(z)}).join("")}function l(D){return D-48<10?D-22:D-65<26?D-65:D-97<26?D-97:x}function p(D,z){return D+22+75*(D<26)-((z!=0)<<5)}function _(D,z,F){var R=0;for(D=F?O(D/A):D>>1,D+=O(D/z);D>q*C>>1;R+=x)D=O(D/q);return O(R+(q+1)*D/(D+y))}function f(D){var z,F,R,B,U,H,G,V,K,Q,J=[],Y=D.length,Z=0,nt=L,et=T;for(F=D.lastIndexOf(j),F<0&&(F=0),R=0;R<F;++R)D.charCodeAt(R)>=128&&n("not-basic"),J.push(D.charCodeAt(R));for(B=F>0?F+1:0;B<Y;){for(U=Z,H=1,G=x;B>=Y&&n("invalid-input"),V=l(D.charCodeAt(B++)),(V>=x||V>O((v-Z)/H))&&n("overflow"),Z+=V*H,K=G<=et?k:G>=et+C?C:G-et,!(V<K);G+=x)Q=x-K,H>O(v/Q)&&n("overflow"),H*=Q;z=J.length+1,et=_(Z-U,z,U==0),O(Z/z)>v-nt&&n("overflow"),nt+=O(Z/z),Z%=z,J.splice(Z++,0,nt)}return o(J)}function b(D){var z,F,R,B,U,H,G,V,K,Q,J,Y,Z,nt,et,rt=[];for(D=c(D),Y=D.length,z=L,F=0,U=T,H=0;H<Y;++H)(J=D[H])<128&&rt.push(P(J));for(R=B=rt.length,B&&rt.push(j);R<Y;){for(G=v,H=0;H<Y;++H)(J=D[H])>=z&&J<G&&(G=J);for(Z=R+1,G-z>O((v-F)/Z)&&n("overflow"),F+=(G-z)*Z,z=G,H=0;H<Y;++H)if(J=D[H],J<z&&++F>v&&n("overflow"),J==z){for(V=F,K=x;Q=K<=U?k:K>=U+C?C:K-U,!(V<Q);K+=x)et=V-Q,nt=x-Q,rt.push(P(p(Q+et%nt,0))),V=O(et/nt);rt.push(P(p(V,0))),U=_(F,Z,R==B),F=0,++R}++F,++z}return rt.join("")}function m(D){return u(D,function(z){return S.test(z)?f(z.slice(4).toLowerCase()):z})}function g(D){return u(D,function(z){return M.test(z)?"xn--"+b(z):z})}typeof h=="object"&&h&&h.nodeType,typeof t=="object"&&t&&t.nodeType;var w,v=2147483647,x=36,k=1,C=26,y=38,A=700,T=72,L=128,j="-",S=/^xn--/,M=/[^\x20-\x7E]/,$=/[\x2E\u3002\uFF0E\uFF61]/g,E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},q=x-k,O=Math.floor,P=String.fromCharCode;w={version:"1.4.1",ucs2:{decode:c,encode:o},decode:f,encode:b,toASCII:g,toUnicode:m},(e=(function(){return w}).call(h,s,h,t))!==void 0&&(t.exports=e)})()}).call(h,s(208)(d),s(207))},function(d,h){d.exports=`@[toc](Catalog)

Markdown Handbuch
===
> Details: [http://commonmark.org/help/](http://commonmark.org/help/)

## **Fett**
\`\`\`
**fett**
__fett__
\`\`\`
## *Kursiv*
\`\`\`
*kursiv*
_kursiv_
\`\`\`
## Überschriften
\`\`\`
# h1 #
h1
====
## h2 ##
h2
----
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
\`\`\`
## Trennlinien
\`\`\`
***
---
\`\`\`
****
## ^Hoch^gestellt & ~Tief~gestellt
\`\`\`
hochgestellt x^2^
tiefgestellt H~2~0
\`\`\`
## ++Unterstrichen++ & ~~Durchgestrichen~~
\`\`\`
++unterstrichen++
~~durchgestrichen~~
\`\`\`
## ==Markiert==
\`\`\`
==markiert==
\`\`\`
## Zitat

\`\`\`
> zitat 1
>> zitat 2
>>> zitat 3
...
\`\`\`

## Liste
\`\`\`
ol
1.
2.
3.
...

ul
-
-
...
\`\`\`

## Todo Liste

- [x] aufgabe 1
- [ ] aufgabe 2

\`\`\`
- [x] aufgabe 1
- [ ] aufgabe 2
\`\`\`

## Link
\`\`\`
Text Link
[Text](www.baidu.com)

Link mit Bild
![Text](http://www.image.com)
\`\`\`
## Code
\\\`\`\` Typ

Codeblock

\\\`\`\`

\\\` code \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`

## Tabelle
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| links | mitte | rechts |
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| links | mitte | rechts |
| ---------------------- | ------------- | ----------------- |
## Fußnote
\`\`\`
hallo[^hallo]
\`\`\`

Schau zum unteren Rand[^hallo]

[^hallo]: fussnote

## Emojis
Details: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$ Mathematik

Formeln lassen sich darstellen z.b. ：$x_i + y_i = z_i$ und $\\sum_{i=1}^n a_i=0$
Formeln können auf einer eigenen Zeile gerendert werden
$$\\sum_{i=1}^n a_i=0$$
Details: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## Layout

::: hljs-left
\`::: hljs-left\`
\`links\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`mitte\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`rechts\`
\`:::\`
:::

## Liste von Definitionen

Term 1

:   Definition 1

Term 2 mit *inline markup*

:   Definition 2

        { ein wenig code, teil von Definition 2 }

    Dritter Absatz von Definition 2.

\`\`\`
Term 1

:   Definition 1

Term 2 mit *inline markup*

:   Definition 2

        { ein wenig code, teil von Definition 2 }

    Dritter Absatz von Definition 2.

\`\`\`

## Abkürzungen
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
Die HTML Spezifikation
wird gepflegt vom W3C.
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
Die HTML Spezifikation
wird gepflegt vom W3C.
\`\`\`
`},function(d,h){d.exports=`@[toc](Catalog)

Markdown Guide
===
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)

## **Bold**
\`\`\`
**bold**
__bold__
\`\`\`
## *Italic*
\`\`\`
*italic*
_italic_
\`\`\`
## Header
\`\`\`
# h1 #
h1
====
## h2 ##
h2
----
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
\`\`\`
## Dividing line
\`\`\`
***
---
\`\`\`
****
## ^Super^script & ~Sub~script
\`\`\`
super x^2^
sub H~2~0
\`\`\`
## ++Underline++ & ~~Strikethrough~~
\`\`\`
++underline++
~~strikethrough~~
\`\`\`
## ==Mark==
\`\`\`
==mark==
\`\`\`
## Quote

\`\`\`
> quote 1
>> quote 2
>>> quote 3
...
\`\`\`

## List
\`\`\`
ol
1.
2.
3.
...

ul
-
-
...
\`\`\`

## Todo List

- [x] task 1
- [ ] task 2

\`\`\`
- [x] task 1
- [ ] task 2
\`\`\`

## Link
\`\`\`
Text Link
[Text](www.baidu.com)

Image Link
![Text](http://www.image.com)
\`\`\`
## Code
\\\`\`\` type

code block

\\\`\`\`

\\\` code \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`

## Table
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
| ---------------------- | ------------- | ----------------- |
## Footnote
\`\`\`
hello[^hello]
\`\`\`

Look at the bottom[^hello]

[^hello]: footnote

## Emojis
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$ Mathematics

We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$
We can also single-line rendering
$$\\sum_{i=1}^n a_i=0$$
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## Layout

::: hljs-left
\`::: hljs-left\`
\`left\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`center\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`right\`
\`:::\`
:::

## deflist

Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`

## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
`},function(d,h){d.exports=`@[toc](Catalogue)

Guide Markdown
==============
> Détail : [http://commonmark.org/help/](http://commonmark.org/help/)

## **Bold**
\`\`\`
**bold**
__bold__
\`\`\`
## *Italic*
\`\`\`
*italic*
_italic_
\`\`\`
## Header
\`\`\`
# h1 #
h1
====
## h2 ##
h2
----
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
\`\`\`
## Dividing line
\`\`\`
***
---
\`\`\`
****
## ^Super^script & ~Sub~script
\`\`\`
super x^2^
sub H~2~0
\`\`\`
## ++Underline++ & ~~Strikethrough~~
\`\`\`
++underline++
~~strikethrough~~
\`\`\`
## ==Mark==
\`\`\`
==mark==
\`\`\`
## Quote

\`\`\`
> quote 1
>> quote 2
>>> quote 3
...
\`\`\`

## List
\`\`\`
ol
1.
2.
3.
...

ul
-
-
...
\`\`\`
## Link

## Todo List

- [x] Équipe 1
- [ ] Équipe 2

\`\`\`
- [x] Équipe 1
- [ ] Équipe 2
\`\`\`

\`\`\`
Text Link
[Text](www.baidu.com)

Image Link
![Text](http://www.image.com)
\`\`\`
## Code
\\\`\`\` type

code block

\\\`\`\`

\\\` code \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`

## Table
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
| ---------------------- | ------------- | ----------------- |
## Footnote
\`\`\`
hello[^hello]
\`\`\`

Look at the bottom[^hello]

[^hello]: footnote

## Emojis
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$ Mathematics

We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$
We can also single-line rendering
$$\\sum_{i=1}^n a_i=0$$
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## Layout

::: hljs-left
\`::: hljs-left\`
\`left\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`center\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`right\`
\`:::\`
:::

## deflist

Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`

## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
`},function(d,h){d.exports=`@[toc](目次)

Markdown 文法ガイド
===
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)

## **太字**
\`\`\`
**太字**
__太字__
\`\`\`
## *斜体*
\`\`\`
*斜体*
_斜体_
\`\`\`
## 見出し
\`\`\`
# h1 #
h1
====
## h2 ##
h2
----
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
\`\`\`
## 横線
\`\`\`
***
---
\`\`\`
****
## ^上付き^文字 & ~下付き~文字
\`\`\`
super x^2^
sub H~2~0
\`\`\`
## ++下線++ & ~~取り消し線~~
\`\`\`
++underline++
~~strikethrough~~
\`\`\`
## ==蛍光ペン==
\`\`\`
==mark==
\`\`\`
## 引用

\`\`\`
> quote 1
>> quote 2
>>> quote 3
...
\`\`\`

## リスト
\`\`\`
番号付きリスト
1.
2.
3.
...

箇条書きリスト
-
-
...
\`\`\`

## Todoリスト

- [x] task 1
- [ ] task 2

\`\`\`
- [x] task 1
- [ ] task 2
\`\`\`

## リンク
\`\`\`
Text Link
[Text](www.baidu.com)

Image Link
![Text](http://www.image.com)
\`\`\`
## コード
\\\`\`\` type

code block

\\\`\`\`

\\\` code \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`

## 表
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| left | center | right |
| ---------------------- | ------------- | ----------------- |

## 脚注
\`\`\`
hello[^hello]
\`\`\`

Look at the bottom[^hello]

[^hello]: footnote

## 絵文字
> Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$ 数式
> Detailed: [KaTeXマニュアル](http://www.intmath.com/cg5/katex-mathjax-comparison.php)、[KaTeX function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)、[LaTeXマニュアル](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  
We can also single-line rendering
$$\\sum_{i=1}^n a_i=0$$

## レイアウト

::: hljs-left
\`::: hljs-left\`
\`left\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`center\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`right\`
\`:::\`
:::

## 定義リスト

Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`
Term 1

:   Definition 1

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

\`\`\`

## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
is maintained by the W3C.
\`\`\`
`},function(d,h){d.exports=`@[toc](Directory)

Guia Markdown
===
> Detalhes: [http://commonmark.org/help/](http://commonmark.org/help/)

## **Negrito**
\`\`\`
**negrito**
__negrito__
\`\`\`
## *Itálico*
\`\`\`
*itálico*
_itálico_
\`\`\`
## Cabeçalho
\`\`\`
# h1 #
h1
====
## h2 ##
h2
----
### h3 ###
#### h4 ####
##### h5 #####
###### h6 ######
\`\`\`
## Linha Divisora
\`\`\`
***
---
\`\`\`
****
## ^Sobre^scrito & ~Sub~scrito
\`\`\`
sobre x^2^
sub H~2~0
\`\`\`
## ++Sublinhar++ & ~~Tachar~~
\`\`\`
++sublinhar++
~~tachar~~
\`\`\`
## ==Marcador==
\`\`\`
==marcador==
\`\`\`
## Citação

\`\`\`
> citação 1
>> citação 2
>>> citação 3
...
\`\`\`

## Listas
\`\`\`
lista Numerada
1.
2.
3.
...

lista com marcadores
-
-
...
\`\`\`

## Todo Listas

- [x] Tarefa 1
- [ ] Tarefa 2

\`\`\`
- [x] Tarefa 1
- [ ] Tarefa 2
\`\`\`

## Link
\`\`\`
Link Texto
[Text](www.baidu.com)

Link Imagem
![Text](http://www.image.com)
\`\`\`
## Código
\\\`\`\` tipo

bloco de código

\\\`\`\`

\\\` código \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`

## Tabela
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| esquerda | centro | direita |
\`\`\`
| th1 | th2 | th3 |
| :--  | :--: | ----: |
| esquerda | centro | direita |
| ---------------------- | ------------- | ----------------- |
## Rodapé
\`\`\`
olá[^olá]
\`\`\`

Olhe para baixo[^olá]

[^olá]: rodapé

## Emojis
Detalhes: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$ Mathematics

Podemos mostrar fórmulas por exemplo：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$
Podemos também mostrar em uma única linha:
$$\\sum_{i=1}^n a_i=0$$
Detalhes: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## Layout

::: hljs-left
\`::: hljs-left\`
\`esquerda\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`centro\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`direita\`
\`:::\`
:::

## Definições

Termo 1

:   Definição 1

Termo 2 com *markup inline*

:   Definição 2

        { um pouco de código, parte da Definição 2 }

    Terceiro parágrafo da definição 2.

\`\`\`
Termo 1

:   Definição 1

Termo 2 com *markup inline*

:   Definição 2

        { um pouco de código, parte da Definição 2 }

    Terceiro parágrafo da definição 2.

\`\`\`

## Abreviações
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
A especificação HTML
é mantida pela W3C.
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
The HTML specification
é mantida pela W3C.
\`\`\`
`},function(d,h){d.exports=`@[toc](Catalog)  
  
Markdown помощь  
===  
> Подробнее: [http://commonmark.org/help/](http://commonmark.org/help/)  
  
## **Полужирный**  
\`\`\`  
**Полужирный**  
__Полужирный__  
\`\`\`  
## *Курсив*  
\`\`\`  
*Курсив*  
_Курсив_  
\`\`\`  
## Заголовок  
\`\`\`  
# h1 #  
h1  
====  
## h2 ##  
h2  
----  
### h3 ###  
#### h4 ####  
##### h5 #####  
###### h6 ######  
\`\`\`  
## Разделительная линия  
\`\`\`  
***  
---  
\`\`\`  
****  
## ^Верхний^индекс & ~Нижний~индекс  
\`\`\`  
верхний x^2^  
нижний H~2~0  
\`\`\`  
## ++Подчеркнутый++ & ~~Зачеркнутый~~  
\`\`\`  
++Подчеркнутый++  
~~Зачеркнутый~~  
\`\`\`  
## ==Отметка==  
\`\`\`  
==Отметка==  
\`\`\`  
## Цитата  
  
\`\`\`  
> Цитата  
>> Цитата 2  
>>> Цитата 3  
...  
\`\`\`  
  
## Список  
\`\`\`  
ol  
1.  
2.  
3.  
...  
  
ul  
-  
-  
...  
\`\`\`  
  
## Список задач  
  
- [x] Задача 1  
- [ ] Задача 2  
  
\`\`\`  
- [x] Задача 1  
- [ ] Задача 2  
\`\`\`  
  
## Ссылка  
\`\`\`  
Ссылка  
[Текст](www.baidu.com)  
  
Ссылка изображения  
![Текст](http://www.image.com)  
\`\`\`  
## Код  
\\\`\`\` type  
  
code block  
  
\\\`\`\`  
  
\\\` code \\\`  
  
\`\`\`c++  
int main()  
{  
 printf("hello world!");}  
\`\`\`  
\`code\`  
  
## Таблица  
\`\`\`  
| th1 | th2 | th3 |  
| :--  | :--: | ----: |  
| left | center | right |  
\`\`\`  
| th1 | th2 | th3 |  
| :--  | :--: | ----: |  
| left | center | right |  
| ---------------------- | ------------- | ----------------- |  
## Сноска  
\`\`\`  
Привет[^Привет]  
\`\`\`  
  
Тут что-то непонятное[^Привет]  
  
[^Привет]: А тут объяснение  
  
## Emojis  
Подробнее: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)  
\`\`\`  
:laughing:  
:blush:  
:smiley:  
:)  
...  
\`\`\`  
:laughing::blush::smiley::)  
  
## $\\KaTeX$ Mathematics  
  
Можно выводить такие формулы：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  
А также в одну строку:
$$\\sum_{i=1}^n a_i=0$$  
Подробнее: 
- [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)
- [katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)
- [latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)  
  
## Разметка
  
::: hljs-left  
\`::: hljs-left\`  
\`left\`  
\`:::\`  
:::  
  
::: hljs-center  
\`::: hljs-center\`  
\`center\`  
\`:::\`  
:::  
  
::: hljs-right  
\`::: hljs-right\`  
\`right\`  
\`:::\`  
:::  
  
## Список определений
  
Термин 1  
  
:   Определение 1  
  
Термин  2 с использованием *разметки*
  
:   Определение 2  
  
 { Какой-нибудь код, часть определения 2 }  
 Третий параграф определения 2.  
\`\`\`  
Термин 1  
  
:   Определение 1  
  
Термин  2 с использованием *разметки*
  
:   Определение 2  
  
 { Какой-нибудь код, часть определения 2 }  
 Третий параграф определения 2.  
\`\`\`  
  
## Сокращения
*[HTML]: Hyper Text Markup Language  
*[W3C]:  World Wide Web Consortium  
The HTML specification  
is maintained by the W3C.  
\`\`\`  
*[HTML]: Hyper Text Markup Language  
*[W3C]:  World Wide Web Consortium  
The HTML specification  
is maintained by the W3C.  
\`\`\`
`},function(d,h){d.exports=`@[toc](目录)

Markdown 语法简介
=============
> [语法详解](http://commonmark.org/help/)

## **目录**
\`\`\`
@[toc](目录)
\`\`\`

## **粗体**
\`\`\`
**粗体**
__粗体__
\`\`\`
## *斜体*
\`\`\`
*斜体*
_斜体_
\`\`\`
## 标题
\`\`\`
# 一级标题 #
一级标题
====
## 二级标题 ##
二级标题
----
### 三级标题 ###
#### 四级标题 ####
##### 五级标题 #####
###### 六级标题 ######
\`\`\`
## 分割线
\`\`\`
***
---
\`\`\`
****
## ^上^角~下~标
\`\`\`
上角标 x^2^
下角标 H~2~0
\`\`\`
## ++下划线++ ~~中划线~~
\`\`\`
++下划线++
~~中划线~~
\`\`\`
## ==标记==
\`\`\`
==标记==
\`\`\`
## 段落引用
\`\`\`
> 一级
>> 二级
>>> 三级
...
\`\`\`

## 列表
\`\`\`
有序列表
1.
2.
3.
...
无序列表
-
-
...
\`\`\`

## 任务列表

- [x] 已完成任务
- [ ] 未完成任务

\`\`\`
- [x] 已完成任务
- [ ] 未完成任务
\`\`\`

## 链接
\`\`\`
[链接](www.baidu.com)
![图片描述](http://www.image.com)
\`\`\`
## 代码段落
\\\`\`\` type

代码段落

\\\`\`\`

\\\` 代码块 \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`
## 表格(table)
\`\`\`
| 标题1 | 标题2 | 标题3 |
| :--  | :--: | ----: |
| 左对齐 | 居中 | 右对齐 |
| ---------------------- | ------------- | ----------------- |
\`\`\`
| 标题1 | 标题2 | 标题3 |
| :--  | :--: | ----: |
| 左对齐 | 居中 | 右对齐 |
| ---------------------- | ------------- | ----------------- |
## 脚注(footnote)
\`\`\`
hello[^hello]
\`\`\`

见底部脚注[^hello]

[^hello]: 一个注脚

## 表情(emoji)
[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$公式

我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$
我们也可以单行渲染
$$\\sum_{i=1}^n a_i=0$$
具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## 布局

::: hljs-left
\`::: hljs-left\`
\`居左\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`居中\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`居右\`
\`:::\`
:::

## 定义

术语一

:   定义一

包含有*行内标记*的术语二

:   定义二

        {一些定义二的文字或代码}

    定义二的第三段

\`\`\`
术语一

:   定义一

包含有*行内标记*的术语二

:   定义二

        {一些定义二的文字或代码}

    定义二的第三段

\`\`\`

## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 规范由 W3C 维护
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 规范由 W3C 维护
\`\`\`

`},function(d,h){d.exports=`@[toc](目錄)

Markdown 語法簡介
=============
> [語法詳解](http://commonmark.org/help/)

## **粗體**
\`\`\`
**粗體**
__粗體__
\`\`\`
## *斜體*
\`\`\`
*斜體*
_斜體_
\`\`\`
## 標題
\`\`\`
# 一級標題 #
一級標題
====
## 二級標題 ##
二級標題
----
### 三級標題 ###
#### 四級標題 ####
##### 五級標題 #####
###### 六級標題 ######
\`\`\`
## 分割線
\`\`\`
***
---
\`\`\`
****
## ^上^角~下~標
\`\`\`
上角標 x^2^
下角標 H~2~0
\`\`\`
## ++下劃線++ ~~中劃線~~
\`\`\`
++下劃線++
~~中劃線~~
\`\`\`
## ==標記==
\`\`\`
==標記==
\`\`\`
## 段落引用
\`\`\`
> 一級
>> 二級
>>> 三級
...
\`\`\`

## 列表
\`\`\`
有序列表
1.
2.
3.
...
無序列表
-
-
...
\`\`\`

## 任務列表

- [x] 已完成任務
- [ ] 未完成任務

\`\`\`
- [x] 已完成任務
- [ ] 未完成任務
\`\`\`

## 鏈接
\`\`\`
[鏈接](www.baidu.com)
![圖片描述](http://www.image.com)
\`\`\`
## 代碼段落
\\\`\`\` type

代碼段落

\\\`\`\`

\\\` 代碼塊 \\\`

\`\`\`c++
int main()
{
    printf("hello world!");
}
\`\`\`
\`code\`
## 表格(table)
\`\`\`
| 標題1 | 標題2 | 標題3 |
| :--  | :--: | ----: |
| 左對齊 | 居中 | 右對齊 |
| ---------------------- | ------------- | ----------------- |
\`\`\`
| 標題1 | 標題2 | 標題3 |
| :--  | :--: | ----: |
| 左對齊 | 居中 | 右對齊 |
| ---------------------- | ------------- | ----------------- |
## 腳註(footnote)
\`\`\`
hello[^hello]
\`\`\`

見底部腳註[^hello]

[^hello]: 一個註腳

## 表情(emoji)
[參考網站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)
\`\`\`
:laughing:
:blush:
:smiley:
:)
...
\`\`\`
:laughing::blush::smiley::)

## $\\KaTeX$公式

我們可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$
我們也可以單行渲染
$$\\sum_{i=1}^n a_i=0$$
具體可參照[katex文檔](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函數](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文檔](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)

## 布局

::: hljs-left
\`::: hljs-left\`
\`居左\`
\`:::\`
:::

::: hljs-center
\`::: hljs-center\`
\`居中\`
\`:::\`
:::

::: hljs-right
\`::: hljs-right\`
\`居右\`
\`:::\`
:::

## 定義

術語一

:   定義一

包含有*行內標記*的術語二

:   定義二

        {一些定義二的文字或代碼}

    定義二的第三段

\`\`\`
術語一

:   定義一

包含有*行內標記*的術語二

:   定義二

        {一些定義二的文字或代碼}

    定義二的第三段

\`\`\`

## abbr
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 規範由 W3C 維護
\`\`\`
*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
HTML 規範由 W3C 維護
\`\`\`

`},function(d,h){d.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},function(d,h,s){h.Any=s(59),h.Cc=s(57),h.Cf=s(195),h.P=s(34),h.Z=s(58)},function(d,h,s){function t(e){s(202)}var r=s(16)(s(64),s(199),t,null,null);r.options.__file="D:\\work\\songwang\\yuangongji\\mavonEditor\\node_modules\\auto-textarea\\auto-textarea.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return e!=="default"&&e.substr(0,2)!=="__"})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] auto-textarea.vue: functional components are not supported with templates, they should use render functions."),d.exports=r.exports},function(d,h,s){d.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"v-right-item"},[t._t("right-toolbar-before"),t._v(" "),t.toolbars.navigation?e("button",{directives:[{name:"show",rawName:"v-show",value:!t.s_navigation,expression:"!s_navigation"}],staticClass:"op-icon fa fa-mavon-bars",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_navigation_on+" (F8)"},on:{click:function(i){return t.$clicks("navigation")}}}):t._e(),t._v(" "),t.toolbars.navigation?e("button",{directives:[{name:"show",rawName:"v-show",value:t.s_navigation,expression:"s_navigation"}],staticClass:"op-icon fa fa-mavon-bars selected",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_navigation_off+" (F8)"},on:{click:function(i){return t.$clicks("navigation")}}}):t._e(),t._v(" "),t.toolbars.preview?e("button",{directives:[{name:"show",rawName:"v-show",value:t.s_preview_switch,expression:"s_preview_switch"}],staticClass:"op-icon fa fa-mavon-eye-slash selected",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_edit+" (F9)"},on:{click:function(i){return t.$clicks("preview")}}}):t._e(),t._v(" "),t.toolbars.preview?e("button",{directives:[{name:"show",rawName:"v-show",value:!t.s_preview_switch,expression:"!s_preview_switch"}],staticClass:"op-icon fa fa-mavon-eye",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_preview+" (F9)"},on:{click:function(i){return t.$clicks("preview")}}}):t._e(),t._v(" "),t.toolbars.fullscreen?e("button",{directives:[{name:"show",rawName:"v-show",value:!t.s_fullScreen,expression:"!s_fullScreen"}],staticClass:"op-icon fa fa-mavon-arrows-alt",attrs:{type:"button",title:t.d_words.tl_fullscreen_on+" (F10)","aria-hidden":"true"},on:{click:function(i){return t.$clicks("fullscreen")}}}):t._e(),t._v(" "),t.toolbars.fullscreen?e("button",{directives:[{name:"show",rawName:"v-show",value:t.s_fullScreen,expression:"s_fullScreen"}],staticClass:"op-icon fa fa-mavon-compress selected",attrs:{type:"button",title:t.d_words.tl_fullscreen_off+" (F10)","aria-hidden":"true"},on:{click:function(i){return t.$clicks("fullscreen")}}}):t._e(),t._v(" "),t.toolbars.readmodel?e("button",{staticClass:"op-icon fa fa-mavon-window-maximize",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_read+" (F11)"},on:{click:function(i){return t.$clicks("read")}}}):t._e(),t._v(" "),t.toolbars.subfield?e("button",{staticClass:"op-icon fa fa-mavon-columns",class:{selected:t.s_subfield},attrs:{type:"button","aria-hidden":"true",title:(t.s_subfield?t.d_words.tl_single_column:t.d_words.tl_double_column)+" (F12)"},on:{click:function(i){return t.$clicks("subfield")}}}):t._e(),t._v(" "),t.toolbars.help&&t.toolbars.htmlcode&&t.toolbars.readmodel&&t.toolbars.fullscreen&&t.toolbars.subfield&&t.toolbars.navigation?e("span",{staticClass:"op-icon-divider"}):t._e(),t._v(" "),t.toolbars.htmlcode?e("button",{directives:[{name:"show",rawName:"v-show",value:!t.s_html_code,expression:"!s_html_code"}],staticClass:"op-icon fa fa-mavon-code",attrs:{type:"button",title:t.d_words.tl_html_on,"aria-hidden":"true"},on:{click:function(i){return t.$clicks("html")}}}):t._e(),t._v(" "),t.toolbars.htmlcode?e("button",{directives:[{name:"show",rawName:"v-show",value:t.s_html_code,expression:"s_html_code"}],staticClass:"op-icon fa fa-mavon-code selected",attrs:{type:"button",title:t.d_words.tl_html_off,"aria-hidden":"true"},on:{click:function(i){return t.$clicks("html")}}}):t._e(),t._v(" "),t.toolbars.help?e("button",{staticClass:"op-icon fa fa-mavon-question-circle",staticStyle:{"font-size":"17px",padding:"5px 6px 5px 3px"},attrs:{type:"button",title:t.d_words.tl_help,"aria-hidden":"true"},on:{click:function(i){return t.$clicks("help")}}}):t._e(),t._v(" "),t._t("right-toolbar-after")],2)},staticRenderFns:[]},d.exports.render._withStripped=!0},function(d,h,s){d.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"auto-textarea-wrapper",style:{fontSize:t.fontSize,lineHeight:t.lineHeight,height:t.fullHeight?"100%":"auto"}},[e("pre",{staticClass:"auto-textarea-block",style:{fontSize:t.fontSize,lineHeight:t.lineHeight,minHeight:t.fullHeight?"100%":"auto"}},[e("br"),t._v(t._s(t.temp_value)+" ")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.temp_value,expression:"temp_value"}],ref:"vTextarea",staticClass:"auto-textarea-input",class:{"no-border":!t.border,"no-resize":!t.resize},style:{fontSize:t.fontSize,lineHeight:t.lineHeight},attrs:{autofocus:t.s_autofocus,spellcheck:"false",placeholder:t.placeholder},domProps:{value:t.temp_value},on:{keyup:t.change,input:function(i){i.target.composing||(t.temp_value=i.target.value)}}})])},staticRenderFns:[]},d.exports.render._withStripped=!0},function(d,h,s){d.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"v-left-item"},[t._t("left-toolbar-before"),t._v(" "),t.toolbars.bold?e("button",{staticClass:"op-icon fa fa-mavon-bold",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_bold+" (ctrl+b)"},on:{click:function(i){return t.$clicks("bold")}}}):t._e(),t._v(" "),t.toolbars.italic?e("button",{staticClass:"op-icon fa fa-mavon-italic",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_italic+" (ctrl+i)"},on:{click:function(i){return t.$clicks("italic")}}}):t._e(),t._v(" "),t.toolbars.header?e("div",{staticClass:"op-icon fa fa-mavon-header dropdown dropdown-wrapper",class:{selected:t.s_header_dropdown_open},attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_header+" (ctrl+h)"},on:{mouseleave:t.$mouseleave_header_dropdown,mouseenter:t.$mouseenter_header_dropdown}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.s_header_dropdown_open,expression:"s_header_dropdown_open"}],staticClass:"op-header popup-dropdown",class:{transition:t.transition},on:{mouseenter:t.$mouseenter_header_dropdown,mouseleave:t.$mouseleave_header_dropdown}},[e("div",{staticClass:"dropdown-item",attrs:{title:"#"},on:{click:function(i){return i.stopPropagation(),t.$click_header("header1")}}},[e("span",[t._v(t._s(t.d_words.tl_header_one))])]),t._v(" "),e("div",{staticClass:"dropdown-item",attrs:{title:"## "},on:{click:function(i){return i.stopPropagation(),t.$click_header("header2")}}},[e("span",[t._v(t._s(t.d_words.tl_header_two))])]),t._v(" "),e("div",{staticClass:"dropdown-item",attrs:{title:"### "},on:{click:function(i){return i.stopPropagation(),t.$click_header("header3")}}},[e("span",[t._v(t._s(t.d_words.tl_header_three))])]),t._v(" "),e("div",{staticClass:"dropdown-item",attrs:{title:"#### "},on:{click:function(i){return i.stopPropagation(),t.$click_header("header4")}}},[e("span",[t._v(t._s(t.d_words.tl_header_four))])]),t._v(" "),e("div",{staticClass:"dropdown-item",attrs:{title:"##### "},on:{click:function(i){return i.stopPropagation(),t.$click_header("header5")}}},[e("span",[t._v(t._s(t.d_words.tl_header_five))])]),t._v(" "),e("div",{staticClass:"dropdown-item",attrs:{title:"###### "},on:{click:function(i){return i.stopPropagation(),t.$click_header("header6")}}},[e("span",[t._v(t._s(t.d_words.tl_header_six))])])])])],1):t._e(),t._v(" "),t.toolbars.header||t.toolbars.italic||t.toolbars.bold?e("span",{staticClass:"op-icon-divider"}):t._e(),t._v(" "),t.toolbars.underline?e("button",{staticClass:"op-icon fa fa-mavon-underline",attrs:{disabled:!t.editable,type:"button",title:t.d_words.tl_underline+" (ctrl+u)","aria-hidden":"true"},on:{click:function(i){return t.$clicks("underline")}}}):t._e(),t._v(" "),t.toolbars.strikethrough?e("button",{staticClass:"op-icon fa fa-mavon-strikethrough",attrs:{disabled:!t.editable,type:"button",title:t.d_words.tl_strikethrough+" (ctrl+shift+d)","aria-hidden":"true"},on:{click:function(i){return t.$clicks("strikethrough")}}}):t._e(),t._v(" "),t.toolbars.mark?e("button",{staticClass:"op-icon fa fa-mavon-thumb-tack",attrs:{disabled:!t.editable,type:"button",title:t.d_words.tl_mark+" (ctrl+m)","aria-hidden":"true"},on:{click:function(i){return t.$clicks("mark")}}}):t._e(),t._v(" "),t.toolbars.superscript?e("button",{staticClass:"op-icon fa fa-mavon-superscript",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_superscript+" (ctrl+alt+s)"},on:{click:function(i){return t.$clicks("superscript")}}}):t._e(),t._v(" "),t.toolbars.subscript?e("button",{staticClass:"op-icon fa fa-mavon-subscript",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_subscript+" (ctrl+shift+s)"},on:{click:function(i){return t.$clicks("subscript")}}}):t._e(),t._v(" "),t.toolbars.alignleft?e("button",{staticClass:"op-icon fa fa-mavon-align-left",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_alignleft+" (ctrl+l)"},on:{click:function(i){return t.$clicks("alignleft")}}}):t._e(),t._v(" "),t.toolbars.aligncenter?e("button",{staticClass:"op-icon fa fa-mavon-align-center",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_aligncenter+" (ctrl+e)"},on:{click:function(i){return t.$clicks("aligncenter")}}}):t._e(),t._v(" "),t.toolbars.alignright?e("button",{staticClass:"op-icon fa fa-mavon-align-right",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_alignright+" (ctrl+r)"},on:{click:function(i){return t.$clicks("alignright")}}}):t._e(),t._v(" "),t.toolbars.superscript||t.toolbars.subscript||t.toolbars.underline||t.toolbars.strikethrough||t.toolbars.mark?e("span",{staticClass:"op-icon-divider"}):t._e(),t._v(" "),t.toolbars.quote?e("button",{staticClass:"op-icon fa fa-mavon-quote-left",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_quote+" (ctrl+q)"},on:{click:function(i){return t.$clicks("quote")}}}):t._e(),t._v(" "),t.toolbars.ol?e("button",{staticClass:"op-icon fa fa-mavon-list-ol",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_ol+" (ctrl+o)"},on:{click:function(i){return t.$clicks("ol")}}}):t._e(),t._v(" "),t.toolbars.ul?e("button",{staticClass:"op-icon fa fa-mavon-list-ul",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_ul+" (ctrl+alt+u)"},on:{click:function(i){return t.$clicks("ul")}}}):t._e(),t._v(" "),t.toolbars.ul||t.toolbars.ol||t.toolbars.quote?e("span",{staticClass:"op-icon-divider"}):t._e(),t._v(" "),t.toolbars.link?e("button",{staticClass:"op-icon fa fa-mavon-link",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_link+" (ctrl+l)"},on:{click:function(i){return i.stopPropagation(),t.$toggle_imgLinkAdd("link")}}}):t._e(),t._v(" "),t.toolbars.imagelink?e("div",{staticClass:"op-icon fa fa-mavon-picture-o dropdown dropdown-wrapper",class:{selected:t.s_img_dropdown_open},attrs:{disabled:!t.editable,type:"button","aria-hidden":"true"},on:{mouseleave:t.$mouseleave_img_dropdown,mouseenter:t.$mouseenter_img_dropdown}},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.s_img_dropdown_open,expression:"s_img_dropdown_open"}],staticClass:"op-image popup-dropdown",class:{transition:t.transition},on:{mouseleave:t.$mouseleave_img_dropdown,mouseenter:t.$mouseenter_img_dropdown}},[e("div",{staticClass:"dropdown-item",on:{click:function(i){return i.stopPropagation(),t.$toggle_imgLinkAdd("imagelink")}}},[e("span",[t._v(t._s(t.d_words.tl_image))])]),t._v(" "),e("div",{staticClass:"dropdown-item",staticStyle:{overflow:"hidden"}},[e("input",{attrs:{type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",multiple:"multiple"},on:{change:function(i){return t.$imgAdd(i)}}}),t._v(t._s(t.d_words.tl_upload)+`
                `)]),t._v(" "),t._l(t.img_file,function(i,n){return i&&i[1]?e("div",{key:n,staticClass:"dropdown-item dropdown-images",attrs:{title:i[1].name},on:{click:function(a){return a.stopPropagation(),t.$imgFileListClick(n)}}},[e("span",[t._v(t._s(i[1].name))]),t._v(" "),e("button",{staticClass:"op-icon fa fa-mavon-times",attrs:{slot:"right",type:"button","aria-hidden":"true",title:t.d_words.tl_upload_remove},on:{click:function(a){return a.stopPropagation(),t.$imgDel(n)}},slot:"right"}),t._v(" "),e("img",{staticClass:"image-show",class:{transition:t.transition},attrs:{src:i[1].miniurl,alt:"none"}})]):t._e()})],2)])],1):t._e(),t._v(" "),t.toolbars.code?e("button",{staticClass:"op-icon fa fa-mavon-code",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_code+" (ctrl+alt+c)"},on:{click:function(i){return t.$clicks("code")}}}):t._e(),t._v(" "),t.toolbars.table?e("button",{staticClass:"op-icon fa fa-mavon-table",attrs:{disabled:!t.editable,type:"button","aria-hidden":"true",title:t.d_words.tl_table+" (ctrl+alt+t)"},on:{click:function(i){return t.$clicks("table")}}}):t._e(),t._v(" "),t.toolbars.link||t.toolbars.imagelink||t.toolbars.code||t.toolbars.table?e("span",{staticClass:"op-icon-divider"}):t._e(),t._v(" "),t.toolbars.undo?e("button",{staticClass:"op-icon fa fa-mavon-undo",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_undo+" (ctrl+z)"},on:{click:function(i){return t.$clicks("undo")}}}):t._e(),t._v(" "),t.toolbars.redo?e("button",{staticClass:"op-icon fa fa-mavon-repeat",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_redo+" (ctrl+y)"},on:{click:function(i){return t.$clicks("redo")}}}):t._e(),t._v(" "),t.toolbars.trash?e("button",{staticClass:"op-icon fa fa-mavon-trash-o",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_trash+" (ctrl+breakspace)"},on:{click:function(i){return t.$clicks("trash")}}}):t._e(),t._v(" "),t.toolbars.save?e("button",{staticClass:"op-icon fa fa-mavon-floppy-o",attrs:{type:"button","aria-hidden":"true",title:t.d_words.tl_save+" (ctrl+s)"},on:{click:function(i){return t.$clicks("save")}}}):t._e(),t._v(" "),t._t("left-toolbar-after"),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.s_img_link_open?e("div",{staticClass:"add-image-link-wrapper"},[e("div",{staticClass:"add-image-link"},[e("i",{staticClass:"fa fa-mavon-times",attrs:{"aria-hidden":"true"},on:{click:function(i){i.stopPropagation(),i.preventDefault(),t.s_img_link_open=!1}}}),t._v(" "),e("h3",{staticClass:"title"},[t._v(t._s(t.link_type=="link"?t.d_words.tl_popup_link_title:t.d_words.tl_popup_img_link_title))]),t._v(" "),e("div",{staticClass:"link-text input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.link_text,expression:"link_text"}],ref:"linkTextInput",attrs:{type:"text",placeholder:t.link_type=="link"?t.d_words.tl_popup_link_text:t.d_words.tl_popup_img_link_text},domProps:{value:t.link_text},on:{input:function(i){i.target.composing||(t.link_text=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"link-addr input-wrapper"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.link_addr,expression:"link_addr"}],attrs:{type:"text",placeholder:t.link_type=="link"?t.d_words.tl_popup_link_addr:t.d_words.tl_popup_img_link_addr},domProps:{value:t.link_addr},on:{input:function(i){i.target.composing||(t.link_addr=i.target.value)}}})]),t._v(" "),e("div",{staticClass:"op-btn cancel",on:{click:function(i){i.stopPropagation(),t.s_img_link_open=!1}}},[t._v(t._s(t.d_words.tl_popup_link_cancel))]),t._v(" "),e("div",{staticClass:"op-btn sure",on:{click:function(i){return i.stopPropagation(),t.$imgLinkAdd()}}},[t._v(t._s(t.d_words.tl_popup_link_sure))])])]):t._e()])],2)},staticRenderFns:[]},d.exports.render._withStripped=!0},function(d,h,s){d.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"v-note-wrapper markdown-body",class:[{fullscreen:t.s_fullScreen,shadow:t.boxShadow}],style:{"box-shadow":t.boxShadow?t.boxShadowStyle:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.toolbarsFlag,expression:"toolbarsFlag"}],staticClass:"v-note-op",style:{background:t.toolbarsBackground}},[e("v-md-toolbar-left",{ref:"toolbar_left",class:{transition:t.transition},attrs:{editable:t.editable,transition:t.transition,d_words:t.d_words,toolbars:t.toolbars,image_filter:t.imageFilter},on:{toolbar_left_click:t.toolbar_left_click,toolbar_left_addlink:t.toolbar_left_addlink,imgAdd:t.$imgAdd,imgDel:t.$imgDel,imgTouch:t.$imgTouch}},[t._t("left-toolbar-before",null,{slot:"left-toolbar-before"}),t._v(" "),t._t("left-toolbar-after",null,{slot:"left-toolbar-after"})],2),t._v(" "),e("v-md-toolbar-right",{ref:"toolbar_right",class:{transition:t.transition},attrs:{d_words:t.d_words,toolbars:t.toolbars,s_subfield:t.s_subfield,s_preview_switch:t.s_preview_switch,s_fullScreen:t.s_fullScreen,s_html_code:t.s_html_code,s_navigation:t.s_navigation},on:{toolbar_right_click:t.toolbar_right_click}},[t._t("right-toolbar-before",null,{slot:"right-toolbar-before"}),t._v(" "),t._t("right-toolbar-after",null,{slot:"right-toolbar-after"})],2)],1),t._v(" "),e("div",{staticClass:"v-note-panel"},[e("div",{ref:"vNoteEdit",staticClass:"v-note-edit divarea-wrapper",class:{"scroll-style":t.s_scrollStyle,"scroll-style-border-radius":t.s_scrollStyle&&!t.s_preview_switch&&!t.s_html_code,"single-edit":!t.s_preview_switch&&!t.s_html_code,"single-show":!t.s_subfield&&t.s_preview_switch||!t.s_subfield&&t.s_html_code,transition:t.transition},on:{scroll:t.$v_edit_scroll,click:t.textAreaFocus}},[e("div",{staticClass:"content-input-wrapper",style:{"background-color":t.editorBackground}},[e("v-autoTextarea",{ref:"vNoteTextarea",staticClass:"content-input",style:{"background-color":t.editorBackground},attrs:{placeholder:t.placeholder?t.placeholder:t.d_words.start_editor,fontSize:t.fontSize,lineHeight:"1.5",fullHeight:""},model:{value:t.d_value,callback:function(i){t.d_value=i},expression:"d_value"}})],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.s_preview_switch||t.s_html_code,expression:"s_preview_switch || s_html_code"}],staticClass:"v-note-show",class:{"single-show":!t.s_subfield&&t.s_preview_switch||!t.s_subfield&&t.s_html_code}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.s_html_code,expression:"!s_html_code"}],ref:"vShowContent",staticClass:"v-show-content",class:{"scroll-style":t.s_scrollStyle,"scroll-style-border-radius":t.s_scrollStyle},style:{"background-color":t.previewBackground},domProps:{innerHTML:t._s(t.d_render)}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.s_html_code,expression:"s_html_code"}],staticClass:"v-show-content-html",class:{"scroll-style":t.s_scrollStyle,"scroll-style-border-radius":t.s_scrollStyle},style:{"background-color":t.previewBackground}},[t._v(`
                `+t._s(t.d_render)+`
            `)])]),t._v(" "),e("transition",{attrs:{name:"slideTop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.s_navigation,expression:"s_navigation"}],staticClass:"v-note-navigation-wrapper",class:{transition:t.transition}},[e("div",{staticClass:"v-note-navigation-title"},[t._v(`
                    `+t._s(t.d_words.navigation_title)),e("i",{staticClass:"fa fa-mavon-times v-note-navigation-close",attrs:{"aria-hidden":"true"},on:{click:function(i){return t.toolbar_right_click("navigation")}}})]),t._v(" "),e("div",{ref:"navigationContent",staticClass:"v-note-navigation-content",class:{"scroll-style":t.s_scrollStyle}})])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{ref:"help"},[t.s_help?e("div",{staticClass:"v-note-help-wrapper",on:{click:function(i){return i.target!==i.currentTarget?null:t.toolbar_right_click("help")}}},[e("div",{staticClass:"v-note-help-content markdown-body",class:{shadow:t.boxShadow}},[e("i",{staticClass:"fa fa-mavon-times",attrs:{"aria-hidden":"true"},on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.toolbar_right_click("help")}}}),t._v(" "),e("div",{staticClass:"scroll-style v-note-help-show",domProps:{innerHTML:t._s(t.d_help)}})])]):t._e()])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.d_preview_imgsrc?e("div",{staticClass:"v-note-img-wrapper",on:{click:function(i){t.d_preview_imgsrc=null}}},[e("img",{attrs:{src:t.d_preview_imgsrc,alt:"none"}})]):t._e()]),t._v(" "),e("div",{ref:"vReadModel",staticClass:"v-note-read-model scroll-style",class:{show:t.s_readmodel}},[e("div",{ref:"vNoteReadContent",staticClass:"v-note-read-content",domProps:{innerHTML:t._s(t.d_render)}})])],1)},staticRenderFns:[]},d.exports.render._withStripped=!0},function(d,h,s){var t=s(107);typeof t=="string"&&(t=[[d.i,t,""]]),t.locals&&(d.exports=t.locals),s(17)("c0faed68",t,!1,{})},function(d,h,s){var t=s(108);typeof t=="string"&&(t=[[d.i,t,""]]),t.locals&&(d.exports=t.locals),s(17)("118de024",t,!1,{})},function(d,h,s){var t=s(109);typeof t=="string"&&(t=[[d.i,t,""]]),t.locals&&(d.exports=t.locals),s(17)("2f84471f",t,!1,{})},function(d,h,s){var t=s(110);typeof t=="string"&&(t=[[d.i,t,""]]),t.locals&&(d.exports=t.locals),s(17)("6daa4aa0",t,!1,{})},function(d,h){d.exports=function(s,t){for(var r=[],e={},i=0;i<t.length;i++){var n=t[i],a=n[0],u=n[1],c=n[2],o=n[3],l={id:s+":"+i,css:u,media:c,sourceMap:o};e[a]?e[a].parts.push(l):r.push(e[a]={id:a,parts:[l]})}return r}},function(d,h){var s;s=function(){return this}();try{s=s||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(s=window)}d.exports=s},function(d,h){d.exports=function(s){return s.webpackPolyfill||(s.deprecate=function(){},s.paths=[],s.children||(s.children=[]),Object.defineProperty(s,"loaded",{enumerable:!0,get:function(){return s.l}}),Object.defineProperty(s,"id",{enumerable:!0,get:function(){return s.i}}),s.webpackPolyfill=1),s}},function(d,h,s){function t(a,u){return new i(u).process(a)}var r=s(60),e=s(61),i=s(210);h=d.exports=t,h.filterXSS=t,h.FilterXSS=i;for(var n in r)h[n]=r[n];for(var n in e)h[n]=e[n];typeof window<"u"&&(window.filterXSS=d.exports),function(){return typeof self<"u"&&typeof DedicatedWorkerGlobalScope<"u"&&self instanceof DedicatedWorkerGlobalScope}()&&(self.filterXSS=d.exports)},function(d,h,s){function t(p){return p==null}function r(p){var _=l.spaceIndex(p);if(_===-1)return{html:"",closing:p[p.length-2]==="/"};p=l.trim(p.slice(_+1,-1));var f=p[p.length-1]==="/";return f&&(p=l.trim(p.slice(0,-1))),{html:p,closing:f}}function e(p){var _={};for(var f in p)_[f]=p[f];return _}function i(p){p=e(p||{}),p.stripIgnoreTag&&(p.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),p.onIgnoreTag=a.onIgnoreTagStripAll),p.whiteList=p.whiteList||a.whiteList,p.onTag=p.onTag||a.onTag,p.onTagAttr=p.onTagAttr||a.onTagAttr,p.onIgnoreTag=p.onIgnoreTag||a.onIgnoreTag,p.onIgnoreTagAttr=p.onIgnoreTagAttr||a.onIgnoreTagAttr,p.safeAttrValue=p.safeAttrValue||a.safeAttrValue,p.escapeHtml=p.escapeHtml||a.escapeHtml,this.options=p,p.css===!1?this.cssFilter=!1:(p.css=p.css||{},this.cssFilter=new n(p.css))}var n=s(31).FilterCSS,a=s(60),u=s(61),c=u.parseTag,o=u.parseAttr,l=s(35);i.prototype.process=function(p){if(p=p||"",!(p=p.toString()))return"";var _=this,f=_.options,b=f.whiteList,m=f.onTag,g=f.onIgnoreTag,w=f.onTagAttr,v=f.onIgnoreTagAttr,x=f.safeAttrValue,k=f.escapeHtml,C=_.cssFilter;f.stripBlankChar&&(p=a.stripBlankChar(p)),f.allowCommentTag||(p=a.stripCommentTag(p));var y=!1;if(f.stripIgnoreTagBody){var y=a.StripTagBody(f.stripIgnoreTagBody,g);g=y.onIgnoreTag}var A=c(p,function(T,L,j,S,M){var $={sourcePosition:T,position:L,isClosing:M,isWhite:b.hasOwnProperty(j)},P=m(j,S,$);if(!t(P))return P;if($.isWhite){if($.isClosing)return"</"+j+">";var E=r(S),q=b[j],O=o(E.html,function(z,F){var R=l.indexOf(q,z)!==-1,B=w(j,z,F,R);if(!t(B))return B;if(R)return F=x(j,z,F,C),F?z+'="'+F+'"':z;var B=v(j,z,F,R);return t(B)?void 0:B}),S="<"+j;return O&&(S+=" "+O),E.closing&&(S+=" /"),S+=">"}var P=g(j,S,$);return t(P)?k(S):P},k);return y&&(A=y.remove(A)),A},d.exports=i},function(d,h){d.exports={start_editor:"Bearbeitung beginnen...",navigation_title:"Navigation",tl_bold:"Fett",tl_italic:"Kursiv",tl_header:"Überschrift",tl_header_one:"Überschrift 1",tl_header_two:"Überschrift 2",tl_header_three:"Überschrift 3",tl_header_four:"Überschrift 4",tl_header_five:"Überschrift 5",tl_header_six:"Überschrift 6",tl_underline:"Unterstrichen",tl_strikethrough:"Durchgestrichen",tl_mark:"Markiert",tl_superscript:"Hochgestellt",tl_subscript:"Tiefgestellt",tl_quote:"Zitat",tl_ol:"Ol",tl_ul:"Ul",tl_link:"Link",tl_image:"Link mit Bild",tl_code:"Code",tl_table:"Tabelle",tl_undo:"Rückgängig",tl_redo:"Wiederherstellen",tl_trash:"Mülleimer",tl_save:"Speichern",tl_navigation_on:"Navigation AN",tl_navigation_off:"Navigation AUS",tl_preview:"Vorschau",tl_aligncenter:"Text zentrieren",tl_alignleft:"Nach links ausrichten",tl_alignright:"Nach rechts ausrichten",tl_edit:"Bearbeiten",tl_single_column:"Einspaltig",tl_double_column:"Zweispaltig",tl_fullscreen_on:"Vollbild AN",tl_fullscreen_off:"Vollbild AUS",tl_read:"Lesemodus",tl_html_on:"HTML AN",tl_html_off:"HTML AUS",tl_help:"Markdown Handbuch",tl_upload:"Bilder-Upload",tl_upload_remove:"Entfernen",tl_popup_link_title:"Link hinzufügen",tl_popup_link_text:"Text des Links",tl_popup_link_addr:"Linkziel",tl_popup_img_link_title:"Bild hinzufügen",tl_popup_img_link_text:"Text des Bildes",tl_popup_img_link_addr:"Link auf Bild",tl_popup_link_sure:"Ja",tl_popup_link_cancel:"Abbruch"}},function(d,h){d.exports={start_editor:"Begin editing...",navigation_title:"Navigation",tl_bold:"Bold",tl_italic:"Italic",tl_header:"Header",tl_header_one:"Header 1",tl_header_two:"Header 2",tl_header_three:"Header 3",tl_header_four:"Header 4",tl_header_five:"Header 5",tl_header_six:"Header 6",tl_underline:"Underline",tl_strikethrough:"Strikethrough",tl_mark:"Mark",tl_superscript:"Superscript",tl_subscript:"Subscript",tl_quote:"Quote",tl_ol:"Ol",tl_ul:"Ul",tl_link:"Link",tl_image:"Image Link",tl_code:"Code",tl_table:"Table",tl_undo:"Undo",tl_redo:"Redo",tl_trash:"Trash",tl_save:"Save",tl_navigation_on:"Navigation ON",tl_navigation_off:"Navigation OFF",tl_preview:"Preview",tl_aligncenter:"Center text",tl_alignleft:"Clamp text to the left",tl_alignright:"Clamp text to the right",tl_edit:"Edit",tl_single_column:"Single Column",tl_double_column:"Double Columns",tl_fullscreen_on:"FullScreen ON",tl_fullscreen_off:"FullScreen OFF",tl_read:"Read Model",tl_html_on:"HTML ON",tl_html_off:"HTML OFF",tl_help:"Markdown Guide",tl_upload:"Upload Images",tl_upload_remove:"Remove",tl_popup_link_title:"Add Link",tl_popup_link_text:"Link text",tl_popup_link_addr:"Link address",tl_popup_img_link_title:"Add Image",tl_popup_img_link_text:"Image Text",tl_popup_img_link_addr:"Image Link",tl_popup_link_sure:"Sure",tl_popup_link_cancel:"Cancel"}},function(d,h){d.exports={start_editor:"Début d'édition...",navigation_title:"Navigation",tl_bold:"Gras",tl_italic:"Italique",tl_header:"Entête",tl_header_one:"Entête 1",tl_header_two:"Entête 2",tl_header_three:"Entête 3",tl_header_four:"Entête 4",tl_header_five:"Entête 5",tl_header_six:"Entête 6",tl_underline:"Souligné",tl_strikethrough:"Barré",tl_mark:"Mark",tl_superscript:"Exposant",tl_subscript:"Sous-exposant",tl_quote:"Quote",tl_ol:"Liste ",tl_ul:"Puce",tl_link:"Lien",tl_image:"Image Lien",tl_code:"Code",tl_table:"Table",tl_undo:"Annuler",tl_redo:"Refaire",tl_trash:"Supprimer",tl_save:"Sauver",tl_navigation_on:"Activer la navigation",tl_navigation_off:"Désactiver le navigation",tl_preview:"Previsualisé",tl_aligncenter:"Center le texte",tl_alignleft:"Férer le texte à gauche",tl_alignright:"Férer le texte à droite",tl_edit:"Editer",tl_single_column:"Seule Colonne",tl_double_column:"Colonnes Doubles",tl_fullscreen_on:"Activer le mode plein écran",tl_fullscreen_off:"Désactiver le mode plein écran",tl_read:"Lire le modèle",tl_html_on:"Activer le mode HTML",tl_html_off:"Désactiver le mode HTML",tl_help:"Guide Markdown",tl_upload:"Télécharger les images",tl_upload_remove:"Supprimer",tl_popup_link_title:"Ajouter un lien",tl_popup_link_text:"Description",tl_popup_link_addr:"Link",tl_popup_img_link_title:"Ajouter une image",tl_popup_img_link_text:"Description",tl_popup_img_link_addr:"Link",tl_popup_link_sure:"sûr",tl_popup_link_cancel:"Annuler"}},function(d,h){d.exports={start_editor:"編集を始めてね！",navigation_title:"ナビゲーション",tl_bold:"太字",tl_italic:"斜体",tl_header:"見出し",tl_header_one:"見出し1",tl_header_two:"見出し2",tl_header_three:"見出し3",tl_header_four:"見出し4",tl_header_five:"見出し5",tl_header_six:"見出し6",tl_underline:"下線",tl_strikethrough:"取り消し線",tl_mark:"蛍光ペン",tl_superscript:"上付き文字",tl_subscript:"下付き文字",tl_quote:"引用",tl_ol:"番号付きリスト",tl_ul:"箇条書きリスト",tl_link:"ハイパーリンク",tl_image:"画像のリンク",tl_code:"コードの挿入",tl_table:"表の挿入",tl_undo:"戻る",tl_redo:"進む",tl_trash:"削除",tl_save:"保存",tl_navigation_on:"ナビゲーションを表示",tl_navigation_off:"ナビゲーションを非表示",tl_preview:"プレビュー",tl_aligncenter:"中央揃え",tl_alignleft:"左揃え",tl_alignright:"右揃え",tl_edit:"編集",tl_single_column:"一列",tl_double_column:"二列",tl_fullscreen_on:"全画面表示",tl_fullscreen_off:"全画面表示の終了",tl_read:"モデルの読み込み",tl_html_on:"HTMLで表示",tl_html_off:"HTML表示の終了",tl_help:"ヘルプ",tl_upload:"画像をアップロード",tl_upload_remove:"画像の削除",tl_popup_link_title:"リンクの追加",tl_popup_link_text:"リンクテキスト",tl_popup_link_addr:"リンク先のURL",tl_popup_img_link_title:"画像の追加",tl_popup_img_link_text:"画像タイトル",tl_popup_img_link_addr:"画像URL",tl_popup_link_sure:"OK",tl_popup_link_cancel:"戻る"}},function(d,h){d.exports={start_editor:"Começar edição...",navigation_title:"Navegação",tl_bold:"Negrito",tl_italic:"Itálico",tl_header:"Cabeçalho",tl_header_one:"Cabeçalho 1",tl_header_two:"Cabeçalho 2",tl_header_three:"Cabeçalho 3",tl_header_four:"Cabeçalho 4",tl_header_five:"Cabeçalho 5",tl_header_six:"Cabeçalho 6",tl_underline:"Sublinhar",tl_strikethrough:"Tachar",tl_mark:"Marcação",tl_superscript:"Sobrescrito",tl_subscript:"Subscrito",tl_quote:"Citação",tl_ol:"Lista Numerada",tl_ul:"Lista com marcadores",tl_link:"Link",tl_image:"Link de imagem",tl_code:"Código",tl_table:"Tabela",tl_undo:"Desfazer",tl_redo:"Refazer",tl_trash:"Lixo",tl_save:"Salvar",tl_navigation_on:"Mostrar Navegação",tl_navigation_off:"Esconder Navegação",tl_preview:"Preview",tl_aligncenter:"Alinhar no centro",tl_alignleft:"Alinhar à esquerda",tl_alignright:"Alinhar à direita",tl_edit:"Editar",tl_single_column:"Coluna Única",tl_double_column:"Duas Colunas",tl_fullscreen_on:"Ligar Tela Cheia",tl_fullscreen_off:"Desligar Tela Cheia",tl_read:"Modo de Leitura",tl_html_on:"Ligar HTML",tl_html_off:"Desligar HTML",tl_help:"Guia Markdown",tl_upload:"Upload de Imagens",tl_upload_remove:"Remover",tl_popup_link_title:"Adicionar Link",tl_popup_link_text:"Descrição",tl_popup_link_addr:"Link",tl_popup_img_link_title:"Adicionar fotos",tl_popup_img_link_text:"Descrição",tl_popup_img_link_addr:"Link",tl_popup_link_sure:"Confirmar",tl_popup_link_cancel:"Cancelar"}},function(d,h){d.exports={start_editor:"Начните редактирование...",navigation_title:"Навигация",tl_bold:"Полужирный",tl_italic:"Курсив",tl_header:"Заголовки",tl_header_one:"Заголовок 1",tl_header_two:"Заголовок 2",tl_header_three:"Заголовок 3",tl_header_four:"Заголовок 4",tl_header_five:"Заголовок 5",tl_header_six:"Заголовок 6",tl_underline:"Подчеркнутый",tl_strikethrough:"Зачеркнутый",tl_mark:"Отметка",tl_superscript:"Верхний индекс",tl_subscript:"Нижний индекс",tl_quote:"Цитата",tl_ol:"Нумерованный список",tl_ul:"Список",tl_link:"Ссылка",tl_image:"Ссылка изображения",tl_code:"Код",tl_table:"Таблица",tl_undo:"Отменить",tl_redo:"Вернуть",tl_trash:"Удалить",tl_save:"Сохранить",tl_navigation_on:"Показать навигацию",tl_navigation_off:"Скрыть навигацию",tl_preview:"Предпросмотр",tl_aligncenter:"Выровнять по центру",tl_alignleft:"Выровнять по левому краю",tl_alignright:"Выровнять по правому краю",tl_edit:"Редактор",tl_single_column:"Одно поле",tl_double_column:"Два поля",tl_fullscreen_on:"Полноэкранный режим",tl_fullscreen_off:"Выключить полноэкранный режим",tl_read:"Режим чтения",tl_html_on:"Показать HTML",tl_html_off:"Убрать HTML",tl_help:"Markdown помощь",tl_upload:"Загрузить изображение",tl_upload_remove:"Удалить",tl_popup_link_title:"Добавить ссылку",tl_popup_link_text:"Текст ссылки",tl_popup_link_addr:"Адрес ссылки",tl_popup_img_link_title:"Локальное изображение",tl_popup_img_link_text:"Текст изображения",tl_popup_img_link_addr:"Ссылка изображения",tl_popup_link_sure:"Добавить",tl_popup_link_cancel:"Отменить"}},function(d,h){d.exports={start_editor:"开始编辑...",navigation_title:"导航目录",tl_bold:"粗体",tl_italic:"斜体",tl_header:"标题",tl_header_one:"一级标题",tl_header_two:"二级标题",tl_header_three:"三级标题",tl_header_four:"四级标题",tl_header_five:"五级标题",tl_header_six:"六级标题",tl_underline:"下划线",tl_strikethrough:"中划线",tl_mark:"标记",tl_superscript:"上角标",tl_subscript:"下角标",tl_quote:"段落引用",tl_ol:"有序列表",tl_ul:"无序列表",tl_link:"链接",tl_image:"添加图片链接",tl_code:"代码块",tl_table:"表格",tl_undo:"上一步",tl_redo:"下一步",tl_trash:"清空",tl_save:"保存",tl_navigation_on:"开启标题导航",tl_navigation_off:"关闭标题导航",tl_preview:"预览",tl_aligncenter:"居中",tl_alignleft:"居左",tl_alignright:"居右",tl_edit:"编辑",tl_single_column:"单栏",tl_double_column:"双栏",tl_fullscreen_on:"全屏编辑",tl_fullscreen_off:"退出全屏",tl_read:"沉浸式阅读",tl_html_on:"查看html文本",tl_html_off:"返回markdown文本",tl_help:"markdown语法帮助",tl_upload:"上传图片",tl_upload_remove:"删除",tl_popup_link_title:"添加链接",tl_popup_link_text:"链接描述",tl_popup_link_addr:"链接地址",tl_popup_img_link_title:"添加图片",tl_popup_img_link_text:"图片描述",tl_popup_img_link_addr:"图片链接",tl_popup_link_sure:"确定",tl_popup_link_cancel:"取消"}},function(d,h){d.exports={start_editor:"開始編輯...",navigation_title:"導航目錄",tl_bold:"粗體",tl_italic:"斜體",tl_header:"標題",tl_header_one:"一級標題",tl_header_two:"二級標題",tl_header_three:"三級標題",tl_header_four:"四級標題",tl_header_five:"五級標題",tl_header_six:"六級標題",tl_underline:"下劃線",tl_strikethrough:"中劃線",tl_mark:"標記",tl_superscript:"上角標",tl_subscript:"下角標",tl_quote:"段落引用",tl_ol:"有序列表",tl_ul:"無序列表",tl_link:"鏈接",tl_image:"添加圖片鏈接",tl_code:"代碼塊",tl_table:"表格",tl_undo:"上一步",tl_redo:"下一步",tl_trash:"清空",tl_save:"保存",tl_navigation_on:"開啟標題導航",tl_navigation_off:"關閉標題導航",tl_preview:"預覽",tl_aligncenter:"居中",tl_alignleft:"居左",tl_alignright:"居右",tl_edit:"編輯",tl_single_column:"單欄",tl_double_column:"雙欄",tl_fullscreen_on:"全屏編輯",tl_fullscreen_off:"退出全屏",tl_read:"沈浸式閱讀",tl_html_on:"查看html文本",tl_html_off:"返回markdown文本",tl_help:"markdown語法幫助",tl_upload:"上傳圖片",tl_upload_remove:"刪除",tl_popup_link_title:"添加鏈接",tl_popup_link_text:"鏈接描述",tl_popup_link_addr:"鏈接地址",tl_popup_img_link_title:"添加圖片",tl_popup_img_link_text:"圖片描述",tl_popup_img_link_addr:"圖片鏈接",tl_popup_link_sure:"確定",tl_popup_link_cancel:"取消"}}])})})(mavonEditor);var mavonEditorExports=mavonEditor.exports;export{mavonEditorExports as m};
