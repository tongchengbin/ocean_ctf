import{aJ as getAugmentedNamespace,aK as vue_runtime_esmBundler}from"./index-570ffed7.js";var mavonEditor={exports:{}};const require$$0=getAugmentedNamespace(vue_runtime_esmBundler);(function(module,exports){(function(d,f){module.exports=f(require$$0)})(window,function(__WEBPACK_EXTERNAL_MODULE__0__){return function(d){var f={};function i(e){if(f[e])return f[e].exports;var t=f[e]={i:e,l:!1,exports:{}};return d[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}return i.m=d,i.c=f,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t||4&t&&typeof e=="object"&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&typeof e!="string")for(var n in e)i.d(r,n,(function(s){return e[s]}).bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=79)}([function(d,f){d.exports=__WEBPACK_EXTERNAL_MODULE__0__},function(d,f,i){var e=Object.prototype.hasOwnProperty;function t(g,k){return e.call(g,k)}function r(g){return!(g>=55296&&g<=57343)&&!(g>=64976&&g<=65007)&&(65535&g)!=65535&&(65535&g)!=65534&&!(g>=0&&g<=8)&&g!==11&&!(g>=14&&g<=31)&&!(g>=127&&g<=159)&&!(g>1114111)}function n(g){if(g>65535){var k=55296+((g-=65536)>>10),w=56320+(1023&g);return String.fromCharCode(k,w)}return String.fromCharCode(g)}var s=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,l=new RegExp(s.source+"|"+/&([a-z#][a-z0-9]{1,31});/gi.source,"gi"),a=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,c=i(62),o=/[&<>"]/,u=/[&<>"]/g,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function p(g){return h[g]}var _=/[.?*+^$[\]\\(){}|-]/g,m=i(40);f.lib={},f.lib.mdurl=i(63),f.lib.ucmicro=i(145),f.assign=function(g){var k=Array.prototype.slice.call(arguments,1);return k.forEach(function(w){if(w){if(typeof w!="object")throw new TypeError(w+"must be object");Object.keys(w).forEach(function(v){g[v]=w[v]})}}),g},f.isString=function(g){return function(k){return Object.prototype.toString.call(k)}(g)==="[object String]"},f.has=t,f.unescapeMd=function(g){return g.indexOf("\\")<0?g:g.replace(s,"$1")},f.unescapeAll=function(g){return g.indexOf("\\")<0&&g.indexOf("&")<0?g:g.replace(l,function(k,w,v){return w||function(b,y){var S=0;return t(c,y)?c[y]:y.charCodeAt(0)===35&&a.test(y)&&r(S=y[1].toLowerCase()==="x"?parseInt(y.slice(2),16):parseInt(y.slice(1),10))?n(S):b}(k,v)})},f.isValidEntityCode=r,f.fromCodePoint=n,f.escapeHtml=function(g){return o.test(g)?g.replace(u,p):g},f.arrayReplaceAt=function(g,k,w){return[].concat(g.slice(0,k),w,g.slice(k+1))},f.isSpace=function(g){switch(g){case 9:case 32:return!0}return!1},f.isWhiteSpace=function(g){if(g>=8192&&g<=8202)return!0;switch(g){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1},f.isMdAsciiPunct=function(g){switch(g){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}},f.isPunctChar=function(g){return m.test(g)},f.escapeRE=function(g){return g.replace(_,"\\$&")},f.normalizeReference=function(g){return g=g.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(g=g.replace(/ẞ/g,"ß")),g.toLowerCase().toUpperCase()}},function(d,f){var i=d.exports=typeof window<"u"&&window.Math==Math?window:typeof self<"u"&&self.Math==Math?self:Function("return this")();typeof __g=="number"&&(__g=i)},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default=(e,t)=>{const r=e.__vccOpts||e;for(const[n,s]of t)r[n]=s;return r}},function(d,f){var i={}.hasOwnProperty;d.exports=function(e,t){return i.call(e,t)}},function(d,f,i){var e=i(6),t=i(16);d.exports=i(7)?function(r,n,s){return e.f(r,n,t(1,s))}:function(r,n,s){return r[n]=s,r}},function(d,f,i){var e=i(14),t=i(47),r=i(28),n=Object.defineProperty;f.f=i(7)?Object.defineProperty:function(s,l,a){if(e(s),l=r(l,!0),e(a),t)try{return n(s,l,a)}catch{}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(s[l]=a.value),s}},function(d,f,i){d.exports=!i(15)(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})},function(d,f,i){var e=i(89),t=i(27);d.exports=function(r){return e(t(r))}},function(d,f,i){var e=i(32)("wks"),t=i(17),r=i(2).Symbol,n=typeof r=="function";(d.exports=function(s){return e[s]||(e[s]=n&&r[s]||(n?r:t)("Symbol."+s))}).store=e},function(d,f){d.exports=function(i){return typeof i=="object"?i!==null:typeof i=="function"}},function(module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0});var _typeof2=__webpack_require__(25),_typeof3=_interopRequireDefault(_typeof2),_keydownListen=__webpack_require__(110),_langHljsCss=__webpack_require__(111),_langHljsCss2=_interopRequireDefault(_langHljsCss),_langHljs=__webpack_require__(56);_interopRequireDefault(_langHljs);var _extraFunction=__webpack_require__(57),_util=__webpack_require__(112),_toolbar_left_click2=__webpack_require__(113),_toolbar_right_click2=__webpack_require__(114),_config=__webpack_require__(115),_markdown=__webpack_require__(132),_markdown2=_interopRequireDefault(_markdown),_mdToolbarLeft=__webpack_require__(70),_mdToolbarLeft2=_interopRequireDefault(_mdToolbarLeft),_mdToolbarRight=__webpack_require__(72),_mdToolbarRight2=_interopRequireDefault(_mdToolbarRight),_autoTextarea=__webpack_require__(216),_autoTextarea2=_interopRequireDefault(_autoTextarea);function _interopRequireDefault(d){return d&&d.__esModule?d:{default:d}}__webpack_require__(222),__webpack_require__(231),exports.default={emits:["imgDel","change","fullScreen","readModel","previewToggle","subfieldToggle","htmlCode","helpToggle","save","navigationToggle","update:modelValue"],mixins:[_markdown2.default],props:{scrollStyle:{type:Boolean,default:!0},boxShadow:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!0},fontSize:{type:String,default:"14px"},toolbarsBackground:{type:String,default:"#ffffff"},editorBackground:{type:String,default:"#ffffff"},previewBackground:{type:String,default:"#fbfbfb"},boxShadowStyle:{type:String,default:"0 2px 12px 0 rgba(0, 0, 0, 0.1)"},help:{type:String,default:null},modelValue:{type:String,default:""},language:{type:String,default:"zh-CN"},subfield:{type:Boolean,default:!0},navigation:{type:Boolean,default:!1},defaultOpen:{type:String,default:null},editable:{type:Boolean,default:!0},toolbarsFlag:{type:Boolean,default:!0},toolbars:{type:Object,default:function(){return _config.CONFIG.toolbars}},html:{type:Boolean,default:!0},xssOptions:{type:[Object,Boolean],default:function(){return{}}},codeStyle:{type:String,default:function(){return"github"}},placeholder:{type:String,default:null},ishljs:{type:Boolean,default:!0},externalLink:{type:[Object,Boolean],default:!0},imageFilter:{type:Function,default:null},imageClick:{type:Function,default:null},tabSize:{type:Number,default:0},shortCut:{type:Boolean,default:!0}},data:function(){var d,f,i=this;return{s_right_click_menu_show:!1,right_click_menu_top:0,right_click_menu_left:0,s_subfield:i.subfield,s_autofocus:!0,s_navigation:i.navigation,s_scrollStyle:i.scrollStyle,d_value:"",d_render:"",s_preview_switch:(f=i.defaultOpen,f||(f=i.subfield?"preview":"edit"),f==="preview"),s_fullScreen:!1,s_help:!1,s_html_code:!1,d_help:null,d_words:null,edit_scroll_height:-1,s_readmodel:!1,s_table_enter:!1,d_history:(d=[],d.push(i.modelValue),d),d_history_index:0,currentTimeout:"",d_image_file:[],d_preview_imgsrc:null,s_external_link:{markdown_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.9.0/github-markdown.min.css"},hljs_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/highlight.min.js"},hljs_lang:function(e){return"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/languages/"+e+".min.js"},hljs_css:function(e){return _langHljsCss2.default[e]?"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.3.1/styles/"+e+".min.css":""},katex_js:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.js"},katex_css:function(){return"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.8.3/katex.min.css"}},p_external_link:{},textarea_selectionEnd:0,textarea_selectionEnds:[0],_xssHandler:null}},created:function(){var d=this;this.initLanguage(),this.initExternalFuc(),this.$nextTick(function(){d.editableTextarea()})},mounted:function(){var d=this;this.$el.addEventListener("paste",function(f){d.$paste(f)}),this.$el.addEventListener("drop",function(f){d.$drag(f)}),(0,_keydownListen.keydownListen)(this),(0,_extraFunction.ImagePreviewListener)(this),this.autofocus&&this.getTextareaDom().focus(),(0,_extraFunction.fullscreenchange)(this),this.d_value=this.modelValue||"",document.body.appendChild(this.$refs.help),this.loadExternalLink("markdown_css","css"),this.loadExternalLink("katex_css","css"),this.loadExternalLink("katex_js","js",function(){d.iRender(!0)}),this.loadExternalLink("hljs_js","js",function(){d.iRender(!0)}),(0,_typeof3.default)(d.externalLink)==="object"&&typeof d.externalLink.markdown_css=="function"||d.codeStyleChange(d.codeStyle,!0)},beforeUnmount:function(){document.body.removeChild(this.$refs.help)},getMarkdownIt:function(){var d=this.mixins[0].data().markdownIt;return d||(d=(0,_markdown.initMarkdown)()),d},methods:{loadExternalLink:function(d,f,i){if(typeof this.p_external_link[d]=="function"){var e={css:_extraFunction.loadLink,js:_extraFunction.loadScript};e.hasOwnProperty(f)&&e[f](this.p_external_link[d](),i)}else this.p_external_link[d]!==!1&&console.error("external_link."+d,"is not a function, if you want to disabled this error log, set external_link."+d,"to function or false")},initExternalFuc:function(){for(var d=["markdown_css","hljs_js","hljs_css","hljs_lang","katex_js","katex_css"],f=(0,_typeof3.default)(this.externalLink),i=f==="object",e=f==="boolean",t=0;t<d.length;t++)e&&!this.externalLink||i&&this.externalLink[d[t]]===!1?this.p_external_link[d[t]]=!1:i&&typeof this.externalLink[d[t]]=="function"?this.p_external_link[d[t]]=this.externalLink[d[t]]:this.p_external_link[d[t]]=this.s_external_link[d[t]]},textAreaFocus:function(){this.$refs.vNoteTextarea.$refs.vTextarea.focus()},$drag:function(d){var f=d.dataTransfer;if(f){var i=f.files;i.length>0&&(d.preventDefault(),this.$refs.toolbar_left.$imgFilesAdd(i))}},$paste:function(d){var f=d.clipboardData;if(f){var i=f.items;if(!i)return;for(var e=f.types||[],t=null,r=0;r<e.length;r++)if(e[r]==="Files"){t=i[r];break}if(t&&t.kind==="file"){(0,_util.stopEvent)(d);var n=t.getAsFile();this.$refs.toolbar_left.$imgFilesAdd([n])}}},$imgTouch:function(d){},$imgDel:function(d){this.markdownIt.image_del(d[1]);var f=d[0],i=new RegExp("\\!\\["+d[1]._name+"\\]\\("+f+"\\)","g");this.d_value=this.d_value.replace(i,""),this.iRender(),this.$emit("imgDel",d)},$imgAdd:function(d,f,i){i===void 0&&(i=!0);var e=this;if(this.__rFilter==null&&(this.__rFilter=/^image\//i),this.__oFReader=new FileReader,this.__oFReader.onload=function(r){e.markdownIt.image_add(d,r.target.result),f.miniurl=r.target.result,i===!0&&(f._name=f.name.replace(/[\[\]\(\)\+\{\}&\|\\\*^%$#@\-]/g,""),e.insertText(e.getTextareaDom(),{prefix:"!["+f._name+"]("+d+")",subfix:"",str:""}),e.$nextTick(function(){e.$emit("imgAdd",d,f)}))},f){var t=f;this.__rFilter.test(t.type)&&this.__oFReader.readAsDataURL(t)}},$imgUpdateByUrl:function(d,f){var i=this;this.markdownIt.image_add(d,f),this.$nextTick(function(){i.d_render=this.markdownIt.render(this.d_value)})},$imgAddByUrl:function(d,f){return!!this.$refs.toolbar_left.$imgAddByUrl(d,f)&&(this.$imgUpdateByUrl(d,f),!0)},$img2Url:function $img2Url(fileIndex,url){var reg_str="/(!\\[[^\\[]*?\\](?=\\())\\(\\s*("+fileIndex+")\\s*\\)/g",reg=eval(reg_str);this.d_value=this.d_value.replace(reg,"$1("+url+")"),this.$refs.toolbar_left.$changeUrl(fileIndex,url),this.iRender()},$imglst2Url:function(d){if(d instanceof Array)for(var f=0;f<d.length;f++)this.$img2Url(d[f][0],d[f][1])},toolbar_left_click:function(d){(0,_toolbar_left_click2.toolbar_left_click)(d,this)},toolbar_left_addlink:function(d,f,i){(0,_toolbar_left_click2.toolbar_left_addlink)(d,f,i,this)},toolbar_right_click:function(d){(0,_toolbar_right_click2.toolbar_right_click)(d,this)},getNavigation:function(d,f){return(0,_extraFunction.getNavigation)(d,f)},change:function(d,f){this.$emit("change",d,f)},fullscreen:function(d,f){this.$emit("fullScreen",d,f)},readmodel:function(d,f){this.$emit("readModel",d,f)},previewtoggle:function(d,f){this.$emit("previewToggle",d,f)},subfieldtoggle:function(d,f){this.$emit("subfieldToggle",d,f)},htmlcode:function(d,f){this.$emit("htmlCode",d,f)},helptoggle:function(d,f){this.$emit("helpToggle",d,f)},save:function(d,f){this.$emit("save",d,f)},navigationtoggle:function(d,f){this.$emit("navigationToggle",d,f)},$toolbar_right_read_change_status:function(){this.s_readmodel=!this.s_readmodel,this.readmodel&&this.readmodel(this.s_readmodel,this.d_value),this.s_readmodel&&this.toolbars.navigation&&this.getNavigation(this,!0)},$v_edit_scroll:function(d){(0,_extraFunction.scrollLink)(d,this)},getTextareaDom:function(){return this.$refs.vNoteTextarea.$refs.vTextarea},insertText:function(d,f){var i=f.prefix,e=f.subfix,t=f.str,r=f.type;(0,_extraFunction.insertTextAtCaret)(d,{prefix:i,subfix:e,str:t,type:r},this)},insertTab:function(){(0,_extraFunction.insertTab)(this,this.tabSize)},insertOl:function(){(0,_extraFunction.insertOl)(this)},removeLine:function(){(0,_extraFunction.removeLine)(this)},insertUl:function(){(0,_extraFunction.insertUl)(this)},unInsertTab:function(){(0,_extraFunction.unInsertTab)(this,this.tabSize)},insertCodeBlock:function(){(0,_extraFunction.insertCodeBlock)(this)},insertEnter:function(d){(0,_extraFunction.insertEnter)(this,d)},saveHistory:function(){this.d_history.splice(this.d_history_index+1,this.d_history.length),this.d_history.push(this.d_value),this.textarea_selectionEnds.splice(this.d_history_index+1,this.textarea_selectionEnds.length),this.textarea_selectionEnds.push(this.textarea_selectionEnd),this.d_history_index=this.d_history.length-1},saveSelectionEndsHistory:function(){var d=this.$refs.vNoteTextarea&&this.$refs.vNoteTextarea.$el.querySelector("textarea");this.textarea_selectionEnd=d?d.selectionEnd:this.textarea_selectionEnd},initLanguage:function(){var d=_config.CONFIG.langList.indexOf(this.language)>=0?this.language:"zh-CN",f=this;f.$render(_config.CONFIG["help_"+d],function(i){f.d_help=i}),this.d_words=_config.CONFIG["words_"+d]},editableTextarea:function(){var d=this.$refs.vNoteTextarea.$refs.vTextarea;this.editable?d.removeAttribute("disabled"):d.setAttribute("disabled","disabled")},codeStyleChange:function(d,f){if(f=f||!1,typeof this.p_external_link.hljs_css=="function"){var i=this.p_external_link.hljs_css(d);i.length===0&&f&&(console.warn("hljs color scheme",d,"do not exist, loading default github"),i=this.p_external_link.hljs_css("github")),i.length>0?(0,_extraFunction.loadLink)(i,null,"md-code-style"):console.warn("hljs color scheme",d,"do not exist, hljs color scheme will not change")}else this.p_external_link.hljs_css!==!1&&console.error("external_link.hljs_css is not a function, if you want to disabled this error log, set external_link.hljs_css to function or false")},iRender:function(d){var f=this;this.$render(f.d_value,function(i){f.d_render=i,d||f.change&&f.change(f.d_value,f.d_render),f.s_navigation&&(0,_extraFunction.getNavigation)(f,!1),f.$emit("update:modelValue",f.d_value),f.d_value!==f.d_history[f.d_history_index]&&(window.clearTimeout(f.currentTimeout),f.currentTimeout=setTimeout(function(){f.saveHistory()},500))})},$emptyHistory:function(){this.d_history=[this.d_value],this.d_history_index=0}},watch:{d_value:function(d,f){this.saveSelectionEndsHistory(),this.iRender()},modelValue:function(d,f){d!==this.d_value&&(this.d_value=d)},subfield:function(d,f){this.s_subfield=d},d_history_index:function(){this.d_history_index>20&&(this.d_history.shift(),this.d_history_index=this.d_history_index-1),this.d_value=this.d_history[this.d_history_index]},language:function(d){this.initLanguage()},editable:function(){this.editableTextarea()},defaultOpen:function(d){var f=d;return f||(f=this.subfield?"preview":"edit"),this.s_preview_switch=f==="preview",this.s_preview_switch},codeStyle:function(d){this.codeStyleChange(d)}},components:{"v-autoTextarea":_autoTextarea2.default,"v-md-toolbar-left":_mdToolbarLeft2.default,"v-md-toolbar-right":_mdToolbarRight2.default}}},function(d,f){d.exports=!0},function(d,f){var i=d.exports={version:"2.6.12"};typeof __e=="number"&&(__e=i)},function(d,f,i){var e=i(10);d.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(d,f){d.exports=function(i){try{return!!i()}catch{return!0}}},function(d,f){d.exports=function(i,e){return{enumerable:!(1&i),configurable:!(2&i),writable:!(4&i),value:e}}},function(d,f){var i=0,e=Math.random();d.exports=function(t){return"Symbol(".concat(t===void 0?"":t,")_",(++i+e).toString(36))}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default={emits:["toolbar_left_addlink","imgTouch","imgAdd","imgDel","imgAdd","imgAdd","toolbar_left_click","toolbar_left_click"],name:"s-md-toolbar-left",props:{editable:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},toolbars:{type:Object,required:!0},d_words:{type:Object,required:!0},image_filter:{type:Function,default:null}},data:function(){return{img_file:[[0,null]],img_timer:null,header_timer:null,s_img_dropdown_open:!1,s_header_dropdown_open:!1,s_img_link_open:!1,trigger:null,num:0,link_text:"",link_addr:"",link_type:"link"}},methods:{$imgLinkAdd:function(){this.$emit("toolbar_left_addlink",this.link_type,this.link_text,this.link_addr),this.s_img_link_open=!1},$toggle_imgLinkAdd:function(e){var t=this;this.link_type=e,this.link_text=this.link_addr="",this.s_img_link_open=!0,this.$nextTick(function(){t.$refs.linkTextInput.focus()}),this.s_img_dropdown_open=!1},$imgFileListClick:function(e){this.$emit("imgTouch",this.img_file[e])},$changeUrl:function(e,t){this.img_file[e][0]=t},$imgFileAdd:function(e){this.img_file.push([++this.num,e]),this.$emit("imgAdd",this.num,e),this.s_img_dropdown_open=!1},$imgFilesAdd:function(e){for(var t=typeof this.image_filter=="function",r=0;r<e.length;r++)(t&&this.image_filter(e[r])===!0||!t&&e[r].type.match(/^image\//i))&&this.$imgFileAdd(e[r])},$imgAdd:function(e){this.$imgFilesAdd(e.target.files),e.target.value=""},$imgDel:function(e){this.$emit("imgDel",this.img_file[e]),this.img_file.splice(e,1),this.num--,this.s_img_dropdown_open=!1},isEqualName:function(e,t){return!(!this.img_file[t][1]||this.img_file[t][1].name!==e&&this.img_file[t][1]._name!==e)},$imgDelByFilename:function(e){for(var t=0;this.img_file.length>t;){if(this.img_file[t][1]===e||this.isEqualName(e,t))return this.$imgDel(t),!0;t+=1}return!1},$imgAddByFilename:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e)return!1;return this.img_file[0][0]=e,this.img_file[0][1]=t,this.img_file[0][2]=e,this.img_file.unshift(["./"+this.num,null]),this.$emit("imgAdd",this.img_file[1][0],t,!1),!0},$imgAddByUrl:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e)return!1;return this.img_file[0][0]=e,this.img_file[0][1]=t,this.img_file.unshift(["./"+this.num,null]),!0},$imgUpdateByFilename:function(e,t){for(var r=0;r<this.img_file.length;r++)if(this.img_file[r][0]===e||this.isEqualName(e,r))return this.img_file[r][1]=t,this.$emit("imgAdd",e,t,!1),!0;return!1},$mouseenter_img_dropdown:function(){this.editable&&(clearTimeout(this.img_timer),this.s_img_dropdown_open=!0)},$mouseleave_img_dropdown:function(){var e=this;this.img_timer=setTimeout(function(){e.s_img_dropdown_open=!1},200)},$mouseenter_header_dropdown:function(){this.editable&&(clearTimeout(this.header_timer),this.s_header_dropdown_open=!0)},$mouseleave_header_dropdown:function(){var e=this;this.header_timer=setTimeout(function(){e.s_header_dropdown_open=!1},200)},$clicks:function(e){this.editable&&this.$emit("toolbar_left_click",e)},$click_header:function(e){this.$emit("toolbar_left_click",e),this.s_header_dropdown_open=!1},handleClose:function(e){this.s_img_dropdown_open=!1}},watch:{s_img_link_open:function(e){this.$parent.$el.style.zIndex=e?1501:1500}}}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default={emits:["toolbar_right_click"],name:"s-md-toolbar-right",props:{s_subfield:{type:Boolean,required:!0},toolbars:{type:Object,required:!0},s_preview_switch:{type:Boolean,required:!0},s_fullScreen:{type:Boolean,required:!0},s_html_code:{type:Boolean,required:!0},s_navigation:{type:Boolean,required:!0},d_words:{type:Object,required:!0}},methods:{$clicks:function(e){this.$emit("toolbar_right_click",e)}}}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default={emits:["update:modelValue"],data:function(){var e=this;return{temp_value:e.modelValue,s_autofocus:function(){if(e.autofocus)return"autofocus"}()}},created:function(){},props:{fullHeight:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},modelValue:{type:String,default:""},placeholder:{type:String,default:""},border:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},onchange:{type:Function,default:null},fontSize:{type:String,default:"14px"},lineHeight:{type:String,default:"18px"}},methods:{change:function(e){this.onchange&&this.onchange(this.temp_value,e)}},watch:{modelValue:function(e,t){this.temp_value=e},temp_value:function(e,t){this.$emit("update:modelValue",e)}}}},function(d,f,i){i.r(f);var e=i(11),t=i.n(e);for(var r in i.d(f,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(f,n,function(){return e[n]})}(r)},function(d,f,i){i.r(f);var e=i(18),t=i.n(e);for(var r in i.d(f,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(f,n,function(){return e[n]})}(r)},function(d,f,i){i.r(f);var e=i(19),t=i.n(e);for(var r in i.d(f,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(f,n,function(){return e[n]})}(r)},function(d,f,i){i.r(f);var e=i(20),t=i.n(e);for(var r in i.d(f,"default",function(){return t.a}),e)["default"].indexOf(r)<0&&function(n){i.d(f,n,function(){return e[n]})}(r)},function(d,f,i){f.__esModule=!0;var e=n(i(81)),t=n(i(99)),r=typeof t.default=="function"&&typeof e.default=="symbol"?function(s){return typeof s}:function(s){return s&&typeof t.default=="function"&&s.constructor===t.default&&s!==t.default.prototype?"symbol":typeof s};function n(s){return s&&s.__esModule?s:{default:s}}f.default=typeof t.default=="function"&&r(e.default)==="symbol"?function(s){return s===void 0?"undefined":r(s)}:function(s){return s&&typeof t.default=="function"&&s.constructor===t.default&&s!==t.default.prototype?"symbol":s===void 0?"undefined":r(s)}},function(d,f){var i=Math.ceil,e=Math.floor;d.exports=function(t){return isNaN(t=+t)?0:(t>0?e:i)(t)}},function(d,f){d.exports=function(i){if(i==null)throw TypeError("Can't call method on  "+i);return i}},function(d,f,i){var e=i(10);d.exports=function(t,r){if(!e(t))return t;var n,s;if(r&&typeof(n=t.toString)=="function"&&!e(s=n.call(t))||typeof(n=t.valueOf)=="function"&&!e(s=n.call(t))||!r&&typeof(n=t.toString)=="function"&&!e(s=n.call(t)))return s;throw TypeError("Can't convert object to primitive value")}},function(d,f){d.exports={}},function(d,f,i){var e=i(51),t=i(33);d.exports=Object.keys||function(r){return e(r,t)}},function(d,f,i){var e=i(32)("keys"),t=i(17);d.exports=function(r){return e[r]||(e[r]=t(r))}},function(d,f,i){var e=i(13),t=i(2),r=t["__core-js_shared__"]||(t["__core-js_shared__"]={});(d.exports=function(n,s){return r[n]||(r[n]=s!==void 0?s:{})})("versions",[]).push({version:e.version,mode:i(12)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(d,f){d.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(d,f,i){var e=i(6).f,t=i(4),r=i(9)("toStringTag");d.exports=function(n,s,l){n&&!t(n=l?n:n.prototype,r)&&e(n,r,{configurable:!0,value:s})}},function(d,f,i){f.f=i(9)},function(d,f,i){var e=i(2),t=i(13),r=i(12),n=i(35),s=i(6).f;d.exports=function(l){var a=t.Symbol||(t.Symbol=r?{}:e.Symbol||{});l.charAt(0)=="_"||l in a||s(a,l,{value:n.f(l)})}},function(d,f){f.f={}.propertyIsEnumerable},function(d,f,i){var e=i(59),t=i(135);for(var r in(f=d.exports=function(n,s){return new t(s).process(n)}).FilterCSS=t,e)f[r]=e[r];typeof window<"u"&&(window.filterCSS=d.exports)},function(d,f){d.exports={indexOf:function(i,e){var t,r;if(Array.prototype.indexOf)return i.indexOf(e);for(t=0,r=i.length;t<r;t++)if(i[t]===e)return t;return-1},forEach:function(i,e,t){var r,n;if(Array.prototype.forEach)return i.forEach(e,t);for(r=0,n=i.length;r<n;r++)e.call(t,i[r],r,i)},trim:function(i){return String.prototype.trim?i.trim():i.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(i){var e=/\s|\n|\t/.exec(i);return e?e.index:-1}}},function(d,f){d.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/},function(d,f,i){function e(){this.__rules__=[],this.__cache__=null}e.prototype.__find__=function(t){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===t)return r;return-1},e.prototype.__compile__=function(){var t=this,r=[""];t.__rules__.forEach(function(n){n.enabled&&n.alt.forEach(function(s){r.indexOf(s)<0&&r.push(s)})}),t.__cache__={},r.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(s){s.enabled&&(n&&s.alt.indexOf(n)<0||t.__cache__[n].push(s.fn))})})},e.prototype.at=function(t,r,n){var s=this.__find__(t),l=n||{};if(s===-1)throw new Error("Parser rule not found: "+t);this.__rules__[s].fn=r,this.__rules__[s].alt=l.alt||[],this.__cache__=null},e.prototype.before=function(t,r,n,s){var l=this.__find__(t),a=s||{};if(l===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(l,0,{name:r,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},e.prototype.after=function(t,r,n,s){var l=this.__find__(t),a=s||{};if(l===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(l+1,0,{name:r,enabled:!0,fn:n,alt:a.alt||[]}),this.__cache__=null},e.prototype.push=function(t,r,n){var s=n||{};this.__rules__.push({name:t,enabled:!0,fn:r,alt:s.alt||[]}),this.__cache__=null},e.prototype.enable=function(t,r){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(s){var l=this.__find__(s);if(l<0){if(r)return;throw new Error("Rules manager: invalid rule name "+s)}this.__rules__[l].enabled=!0,n.push(s)},this),this.__cache__=null,n},e.prototype.enableOnly=function(t,r){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,r)},e.prototype.disable=function(t,r){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(s){var l=this.__find__(s);if(l<0){if(r)return;throw new Error("Rules manager: invalid rule name "+s)}this.__rules__[l].enabled=!1,n.push(s)},this),this.__cache__=null,n},e.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]},d.exports=e},function(d,f,i){function e(t,r,n){this.type=t,this.tag=r,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}e.prototype.attrIndex=function(t){var r,n,s;if(!this.attrs)return-1;for(n=0,s=(r=this.attrs).length;n<s;n++)if(r[n][0]===t)return n;return-1},e.prototype.attrPush=function(t){this.attrs?this.attrs.push(t):this.attrs=[t]},e.prototype.attrSet=function(t,r){var n=this.attrIndex(t),s=[t,r];n<0?this.attrPush(s):this.attrs[n]=s},e.prototype.attrGet=function(t){var r=this.attrIndex(t),n=null;return r>=0&&(n=this.attrs[r][1]),n},e.prototype.attrJoin=function(t,r){var n=this.attrIndex(t);n<0?this.attrPush([t,r]):this.attrs[n][1]=this.attrs[n][1]+" "+r},d.exports=e},function(d,f,i){d.exports=function(e){var t=[];return t.toString=function(){return this.map(function(r){var n=function(s,l){var a=s[1]||"",c=s[3];if(!c)return a;if(l&&typeof btoa=="function"){var o=(h=c,p=btoa(unescape(encodeURIComponent(JSON.stringify(h)))),_="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p),"/*# ".concat(_," */")),u=c.sources.map(function(m){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(m," */")});return[a].concat(u).concat([o]).join(`
`)}var h,p,_;return[a].join(`
`)}(r,e);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n}).join("")},t.i=function(r,n,s){typeof r=="string"&&(r=[[null,r,""]]);var l={};if(s)for(var a=0;a<this.length;a++){var c=this[a][0];c!=null&&(l[c]=!0)}for(var o=0;o<r.length;o++){var u=[].concat(r[o]);s&&l[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(d,f,i){function e(b,y){for(var S=[],j={},O=0;O<y.length;O++){var x=y[O],E=x[0],C={id:b+":"+O,css:x[1],media:x[2],sourceMap:x[3]};j[E]?j[E].parts.push(C):S.push(j[E]={id:E,parts:[C]})}return S}i.r(f),i.d(f,"default",function(){return h});var t=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!t)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},n=t&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,a=!1,c=function(){},o=null,u=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(b,y,S,j){a=S,o=j||{};var O=e(b,y);return p(O),function(x){for(var E=[],C=0;C<O.length;C++){var T=O[C];(D=r[T.id]).refs--,E.push(D)}for(x?p(O=e(b,x)):O=[],C=0;C<E.length;C++){var D;if((D=E[C]).refs===0){for(var $=0;$<D.parts.length;$++)D.parts[$]();delete r[D.id]}}}}function p(b){for(var y=0;y<b.length;y++){var S=b[y],j=r[S.id];if(j){j.refs++;for(var O=0;O<j.parts.length;O++)j.parts[O](S.parts[O]);for(;O<S.parts.length;O++)j.parts.push(m(S.parts[O]));j.parts.length>S.parts.length&&(j.parts.length=S.parts.length)}else{var x=[];for(O=0;O<S.parts.length;O++)x.push(m(S.parts[O]));r[S.id]={id:S.id,refs:1,parts:x}}}}function _(){var b=document.createElement("style");return b.type="text/css",n.appendChild(b),b}function m(b){var y,S,j=document.querySelector('style[data-vue-ssr-id~="'+b.id+'"]');if(j){if(a)return c;j.parentNode.removeChild(j)}if(u){var O=l++;j=s||(s=_()),y=w.bind(null,j,O,!1),S=w.bind(null,j,O,!0)}else j=_(),y=v.bind(null,j),S=function(){j.parentNode.removeChild(j)};return y(b),function(x){if(x){if(x.css===b.css&&x.media===b.media&&x.sourceMap===b.sourceMap)return;y(b=x)}else S()}}var g,k=(g=[],function(b,y){return g[b]=y,g.filter(Boolean).join(`
`)});function w(b,y,S,j){var O=S?"":j.css;if(b.styleSheet)b.styleSheet.cssText=k(y,O);else{var x=document.createTextNode(O),E=b.childNodes;E[y]&&b.removeChild(E[y]),E.length?b.insertBefore(x,E[y]):b.appendChild(x)}}function v(b,y){var S=y.css,j=y.media,O=y.sourceMap;if(j&&b.setAttribute("media",j),o.ssrId&&b.setAttribute("data-vue-ssr-id",y.id),O&&(S+=`
/*# sourceURL=`+O.sources[0]+" */",S+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(O))))+" */"),b.styleSheet)b.styleSheet.cssText=S;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(S))}}},function(d,f,i){var e=i(12),t=i(46),r=i(49),n=i(5),s=i(29),l=i(87),a=i(34),c=i(94),o=i(9)("iterator"),u=!([].keys&&"next"in[].keys()),h=function(){return this};d.exports=function(p,_,m,g,k,w,v){l(m,_,g);var b,y,S,j=function(z){if(!u&&z in C)return C[z];switch(z){case"keys":case"values":return function(){return new m(this,z)}}return function(){return new m(this,z)}},O=_+" Iterator",x=k=="values",E=!1,C=p.prototype,T=C[o]||C["@@iterator"]||k&&C[k],D=T||j(k),$=k?x?j("entries"):D:void 0,N=_=="Array"&&C.entries||T;if(N&&(S=c(N.call(new p)))!==Object.prototype&&S.next&&(a(S,O,!0),e||typeof S[o]=="function"||n(S,o,h)),x&&T&&T.name!=="values"&&(E=!0,D=function(){return T.call(this)}),e&&!v||!u&&!E&&C[o]||n(C,o,D),s[_]=D,s[O]=h,k)if(b={values:x?D:j("values"),keys:w?D:j("keys"),entries:$},v)for(y in b)y in C||r(C,y,b[y]);else t(t.P+t.F*(u||E),_,b);return b}},function(d,f,i){var e=i(2),t=i(13),r=i(85),n=i(5),s=i(4),l=function(a,c,o){var u,h,p,_=a&l.F,m=a&l.G,g=a&l.S,k=a&l.P,w=a&l.B,v=a&l.W,b=m?t:t[c]||(t[c]={}),y=b.prototype,S=m?e:g?e[c]:(e[c]||{}).prototype;for(u in m&&(o=c),o)(h=!_&&S&&S[u]!==void 0)&&s(b,u)||(p=h?S[u]:o[u],b[u]=m&&typeof S[u]!="function"?o[u]:w&&h?r(p,e):v&&S[u]==p?function(j){var O=function(x,E,C){if(this instanceof j){switch(arguments.length){case 0:return new j;case 1:return new j(x);case 2:return new j(x,E)}return new j(x,E,C)}return j.apply(this,arguments)};return O.prototype=j.prototype,O}(p):k&&typeof p=="function"?r(Function.call,p):p,k&&((b.virtual||(b.virtual={}))[u]=p,a&l.R&&y&&!y[u]&&n(y,u,p)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,d.exports=l},function(d,f,i){d.exports=!i(7)&&!i(15)(function(){return Object.defineProperty(i(48)("div"),"a",{get:function(){return 7}}).a!=7})},function(d,f,i){var e=i(10),t=i(2).document,r=e(t)&&e(t.createElement);d.exports=function(n){return r?t.createElement(n):{}}},function(d,f,i){d.exports=i(5)},function(d,f,i){var e=i(14),t=i(88),r=i(33),n=i(31)("IE_PROTO"),s=function(){},l=function(){var a,c=i(48)("iframe"),o=r.length;for(c.style.display="none",i(93).appendChild(c),c.src="javascript:",(a=c.contentWindow.document).open(),a.write("<script>document.F=Object<\/script>"),a.close(),l=a.F;o--;)delete l.prototype[r[o]];return l()};d.exports=Object.create||function(a,c){var o;return a!==null?(s.prototype=e(a),o=new s,s.prototype=null,o[n]=a):o=l(),c===void 0?o:t(o,c)}},function(d,f,i){var e=i(4),t=i(8),r=i(90)(!1),n=i(31)("IE_PROTO");d.exports=function(s,l){var a,c=t(s),o=0,u=[];for(a in c)a!=n&&e(c,a)&&u.push(a);for(;l.length>o;)e(c,a=l[o++])&&(~r(u,a)||u.push(a));return u}},function(d,f){var i={}.toString;d.exports=function(e){return i.call(e).slice(8,-1)}},function(d,f,i){var e=i(27);d.exports=function(t){return Object(e(t))}},function(d,f){f.f=Object.getOwnPropertySymbols},function(d,f,i){var e=i(51),t=i(33).concat("length","prototype");f.f=Object.getOwnPropertyNames||function(r){return e(r,t)}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default={"1c":"1c",abnf:"abnf",accesslog:"accesslog",actionscript:"actionscript",as:"actionscript",ada:"ada",apache:"apache",apacheconf:"apache",applescript:"applescript",osascript:"applescript",arduino:"arduino",armasm:"armasm",arm:"armasm",asciidoc:"asciidoc",adoc:"asciidoc",aspectj:"aspectj",autohotkey:"autohotkey",ahk:"autohotkey",autoit:"autoit",avrasm:"avrasm",awk:"awk",axapta:"axapta",bash:"bash",sh:"bash",zsh:"bash",basic:"basic",bnf:"bnf",brainfuck:"brainfuck",bf:"brainfuck",cal:"cal",capnproto:"capnproto",capnp:"capnproto",ceylon:"ceylon",clean:"clean",icl:"clean",dcl:"clean","clojure-repl":"clojure-repl",clojure:"clojure",clj:"clojure",cmake:"cmake","cmake.in":"cmake",coffeescript:"coffeescript",coffee:"coffeescript",cson:"coffeescript",iced:"coffeescript",coq:"coq",cos:"cos",cls:"cos",cpp:"cpp",c:"cpp",cc:"cpp",h:"cpp","c++":"cpp","h++":"cpp",hpp:"cpp",crmsh:"crmsh",crm:"crmsh",pcmk:"crmsh",crystal:"crystal",cr:"crystal",cs:"cs",csharp:"cs",csp:"csp",css:"css",d:"d",dart:"dart",delphi:"delphi",dpr:"delphi",dfm:"delphi",pas:"delphi",pascal:"delphi",freepascal:"delphi",lazarus:"delphi",lpr:"delphi",lfm:"delphi",diff:"diff",patch:"diff",django:"django",jinja:"django",dns:"dns",bind:"dns",zone:"dns",dockerfile:"dockerfile",docker:"dockerfile",dos:"dos",bat:"dos",cmd:"dos",dsconfig:"dsconfig",dts:"dts",dust:"dust",dst:"dust",ebnf:"ebnf",elixir:"elixir",elm:"elm",erb:"erb","erlang-repl":"erlang-repl",erlang:"erlang",erl:"erlang",excel:"excel",xlsx:"excel",xls:"excel",fix:"fix",flix:"flix",fortran:"fortran",f90:"fortran",f95:"fortran",fsharp:"fsharp",fs:"fsharp",gams:"gams",gms:"gams",gauss:"gauss",gss:"gauss",gcode:"gcode",nc:"gcode",gherkin:"gherkin",feature:"gherkin",glsl:"glsl",go:"go",golang:"go",golo:"golo",gradle:"gradle",groovy:"groovy",haml:"haml",handlebars:"handlebars",hbs:"handlebars","html.hbs":"handlebars","html.handlebars":"handlebars",haskell:"haskell",hs:"haskell",haxe:"haxe",hx:"haxe",hsp:"hsp",htmlbars:"htmlbars",http:"http",https:"http",hy:"hy",hylang:"hy",inform7:"inform7",i7:"inform7",ini:"ini",toml:"ini",irpf90:"irpf90",java:"java",jsp:"java",javascript:"javascript",js:"javascript",jsx:"javascript","jboss-cli":"jboss-cli","wildfly-cli":"jboss-cli",json:"json","julia-repl":"julia-repl",julia:"julia",kotlin:"kotlin",lasso:"lasso",ls:"livescript",lassoscript:"lasso",ldif:"ldif",leaf:"leaf",less:"less",lisp:"lisp",livecodeserver:"livecodeserver",livescript:"livescript",llvm:"llvm",lsl:"lsl",lua:"lua",makefile:"makefile",mk:"makefile",mak:"makefile",markdown:"markdown",md:"markdown",mkdown:"markdown",mkd:"markdown",mathematica:"mathematica",mma:"mathematica",matlab:"matlab",maxima:"maxima",mel:"mel",mercury:"mercury",m:"mercury",moo:"mercury",mipsasm:"mipsasm",mips:"mipsasm",mizar:"mizar",mojolicious:"mojolicious",monkey:"monkey",moonscript:"moonscript",moon:"moonscript",n1ql:"n1ql",nginx:"nginx",nginxconf:"nginx",nimrod:"nimrod",nim:"nimrod",nix:"nix",nixos:"nix",nsis:"nsis",objectivec:"objectivec",mm:"objectivec",objc:"objectivec","obj-c":"objectivec",ocaml:"ocaml",ml:"sml",openscad:"openscad",scad:"openscad",oxygene:"oxygene",parser3:"parser3",perl:"perl",pl:"perl",pm:"perl",pf:"pf","pf.conf":"pf",php:"php",php3:"php",php4:"php",php5:"php",php6:"php",pony:"pony",powershell:"powershell",ps:"powershell",processing:"processing",profile:"profile",prolog:"prolog",protobuf:"protobuf",puppet:"puppet",pp:"puppet",purebasic:"purebasic",pb:"purebasic",pbi:"purebasic",python:"python",py:"python",gyp:"python",q:"q",k:"q",kdb:"q",qml:"qml",qt:"qml",r:"r",rib:"rib",roboconf:"roboconf",graph:"roboconf",instances:"roboconf",routeros:"routeros",mikrotik:"routeros",rsl:"rsl",ruby:"ruby",rb:"ruby",gemspec:"ruby",podspec:"ruby",thor:"ruby",irb:"ruby",ruleslanguage:"ruleslanguage",rust:"rust",rs:"rust",scala:"scala",scheme:"scheme",scilab:"scilab",sci:"scilab",scss:"scss",shell:"shell",console:"shell",smali:"smali",smalltalk:"smalltalk",st:"smalltalk",sml:"sml",sqf:"sqf",sql:"sql",stan:"stan",stata:"stata",do:"stata",ado:"stata",step21:"step21",p21:"step21",step:"step21",stp:"step21",stylus:"stylus",styl:"stylus",subunit:"subunit",swift:"swift",taggerscript:"taggerscript",tap:"tap",tcl:"tcl",tk:"tcl",tex:"tex",thrift:"thrift",tp:"tp",twig:"twig",craftcms:"twig",typescript:"typescript",ts:"typescript",vala:"vala",vbnet:"vbnet",vb:"vbnet","vbscript-html":"vbscript-html",vbscript:"vbscript",vbs:"vbscript",verilog:"verilog",v:"verilog",sv:"verilog",svh:"verilog",vhdl:"vhdl",vim:"vim",x86asm:"x86asm",xl:"xl",tao:"xl",xml:"xml",html:"xml",xhtml:"xml",rss:"xml",atom:"xml",xjb:"xml",xsd:"xml",xsl:"xml",plist:"xml",xquery:"xquery",xpath:"xquery",xq:"xquery",yaml:"yaml",yml:"yaml",YAML:"yaml",zephir:"zephir",zep:"zephir"}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.loadScript=function(l,a){typeof a!="function"&&(a=function(){});var c=document.querySelectorAll("script[src='"+l+"']");if(c.length>0)return c[0].addEventListener("load",function(){a()}),void a();var o=document.createElement("script"),u=document.getElementsByTagName("head")[0];o.type="text/javascript",o.charset="UTF-8",o.src=l,o.addEventListener?o.addEventListener("load",function(){a()},!1):o.attachEvent&&o.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&a()}),u.appendChild(o)},f.loadLink=function(l,a,c){if(typeof a!="function"&&(a=function(){}),document.querySelectorAll("link[href='"+l+"']").length>0)return void a();if(c){var o=document.querySelectorAll("link#"+c);if(o.length)return void(o[0].href=l)}var u=document.createElement("link"),h=document.getElementsByTagName("head")[0];u.rel="stylesheet",u.href=l,c&&(u.id=c),u.addEventListener?u.addEventListener("load",function(){a()},!1):u.attachEvent&&u.attachEvent("onreadystatechange",function(){window.event.srcElement.readyState==="loaded"&&a()}),h.appendChild(u)},f.insertTextAtCaret=function(l,a,c){var o=a.prefix,u=a.subfix,h=a.str;if(a.type,l.focus(),s(l)){var p=l.selectionStart,_=l.selectionEnd,m=l.value;p===_?(l.value=m.substring(0,p)+o+h+u+m.substring(_,m.length),l.selectionStart=p+o.length,l.selectionEnd=p+(h.length+o.length)):m.substring(p-o.length,p)===o&&m.substring(_,_+u.length)===u&&function(g,k,w,v,b){return!(g==="*"&&k==="*"&&w.substring(v-2,v-1)==="*"&&w.substring(b+1,b+2)==="*")}(o,u,m,p,_)?(l.value=m.substring(0,p-o.length)+m.substring(p,_)+m.substring(_+u.length,m.length),l.selectionStart=p-o.length,l.selectionEnd=_-o.length):(l.value=m.substring(0,p)+o+m.substring(p,_)+u+m.substring(_,m.length),l.selectionStart=p+o.length,l.selectionEnd=p+(_-p+o.length))}else alert("Error: Browser version is too low");c.d_value=l.value,l.focus()};var e="```",t="\n```\n",r="language";f.insertCodeBlock=function(l){var a=l.getTextareaDom();if(s(a)){var c=r,o=a.selectionStart,u=a.selectionEnd,h=a.value;o===u?n(c,"",a):function(p){var _=p.selectionStart,m=p.selectionEnd,g=p.value,k=e,w=t;return g.substring(_-1,_)===`
`?k+=`
`:w=`
`+w,g.substring(_-k.length,_)===k&&g.substring(m,m+w.length)===w}(a)?function(p){var _=e,m=t,g=r,k=p.selectionStart,w=p.selectionEnd,v=p.value,b=v.substring(k,w);if(v.substring(k-1,k)===`
`)_+=`
`;else if(_+g+(m=`
`+m)===v.substring(k-_.length,w+m.length)){var y=v.substring(0,k-_.length);return y+=v.substring(w+m.length,v.length),p.value=y,p.selectionStart=k-_.length,void(p.selectionEnd=p.selectionStart)}var S=v.substring(0,k-_.length);S+=b,S+=v.substring(w+m.length,v.length),p.value=S,p.selectionStart=k-_.length,p.selectionEnd=p.selectionStart+b.length}(a):n("",h.substring(o,u),a),l.d_value=a.value,a.focus()}else alert("Error: Browser version is too low")};function n(l,a,c){var o=e,u=t,h=c.selectionStart,p=c.selectionEnd,_=c.value,m=_.substring(0,h);m+=o+l+`
`,m+=a,m+=u,m+=_.substring(p,_.length),c.value=m,c.selectionStart=h+o.length+(l?0:1),c.selectionEnd=c.selectionStart+l.length+a.length}function s(l){return typeof l.selectionStart=="number"&&typeof l.selectionEnd=="number"}f.insertOl=function(l){var a=l.getTextareaDom();if(s(a)){var c=a.selectionStart,o=a.selectionEnd,u=a.value;if(c===o)a.value=u.substring(0,c)+"1. "+u.substring(o,u.length),a.selectionEnd=a.selectionStart=c+3;else{for(var h=c;h>0&&u.substring(h-1,h)!==`
`;)h--;for(var p=u.substring(h,o),_=p.split(`
`),m=0;m<_.length;m++)_[m]=m+1+". "+_[m];var g=_.join(`
`);a.value=u.substring(0,h)+g+u.substring(o,u.length),a.selectionStart=h,a.selectionEnd=o+g.length-p.length}}else alert("Error: Browser version is too low");l.d_value=a.value,a.focus()},f.removeLine=function(l){var a=l.getTextareaDom();if(s(a)){for(var c=a.selectionStart,o=a.selectionEnd,u=a.value,h=c;h>0&&u.substring(h-1,h)!==`
`;)h--;for(var p=o;p<u.length&&u.substring(p,p+1)!==`
`;)p++;p<u.length&&p++,a.value=u.substring(0,h)+u.substring(p,u.length),a.selectionEnd=a.selectionStart=h===0?0:h-1}else alert("Error: Browser version is too low");l.d_value=a.value,a.focus()},f.insertUl=function(l){var a=l.getTextareaDom();if(s(a)){var c=a.selectionStart,o=a.selectionEnd,u=a.value;if(c===o)a.value=u.substring(0,c)+"- "+u.substring(o,u.length),a.selectionEnd=a.selectionStart=c+2;else{for(var h=c;h>0&&u.substring(h-1,h)!==`
`;)h--;var p=u.substring(h,o),_=p.replace(/\n/g,`
- `);_="- "+_,a.value=u.substring(0,h)+_+u.substring(o,u.length),a.selectionStart=h,a.selectionEnd=o+_.length-p.length}}else alert("Error: Browser version is too low");l.d_value=a.value,a.focus()},f.insertTab=function(l,a){a=a?new Array(a).fill(" ").join(""):"	";var c=l.getTextareaDom();if(s(c)){var o=c.selectionStart,u=c.selectionEnd,h=c.value,p=h.substring(0,o).split(`
`).pop();if(p.match(/^\s*[0-9]+\.\s+\S*/)){var _=p.replace(/(\d+)/,1);c.value=h.substring(0,o-_.length)+a+_+h.substring(u,h.length)}else p.match(/^\s*-\s+\S*/)?c.value=h.substring(0,o-p.length)+a+p+h.substring(u,h.length):c.value=h.substring(0,o)+a+h.substring(u,h.length);c.selectionStart=c.selectionEnd=o+a.length}else alert("Error: Browser version is too low");l.d_value=c.value,c.focus()},f.unInsertTab=function(l,a){var c=new RegExp(a?"\\s{"+a+"}":"	");console.log("regTab:",c);var o=l.getTextareaDom();if(s(o)){var u=o.selectionStart,h=o.selectionEnd,p=o.value,_=p.substring(0,u).split(`
`).pop();_.search(c)>=0&&(o.value=p.substring(0,u-_.length)+_.replace(c,"")+p.substring(h,p.length),o.selectionStart=o.selectionEnd=u-(a||1))}else alert("Error: Browser version is too low");l.d_value=o.value,o.focus()},f.insertEnter=function(l,a){var c=l.getTextareaDom();if(s(c)){var o=c.selectionStart,u=c.selectionEnd,h=c.value,p=h.substring(0,o).split(`
`).pop(),_=p.match(/^\s*(?:[0-9]+\.|-)\s+\S+/);if(_){a.preventDefault();var m=_.shift().match(/^\s*(?:[0-9]+\.|-)\s/).shift();if(m.search(/-/)>=0)c.value=h.substring(0,o)+`
`+m+h.substring(u,h.length),c.selectionStart=c.selectionEnd=o+m.length+1;else{var g=m.replace(/(\d+)/,parseInt(m)+1);c.value=h.substring(0,o)+`
`+g+h.substring(u,h.length),c.selectionStart=c.selectionEnd=o+g.length+1}}else{var k=p.match(/^\s*(?:[0-9]+\.|-)\s+$/);if(k){a.preventDefault();var w=k.shift().length;c.value=h.substring(0,o-w)+`
`+h.substring(u,h.length),c.selectionStart=c.selectionEnd=o-w}}}else alert("Error: Browser version is too low");l.d_value=c.value,c.focus()},f.getNavigation=function(l,a){var c=void 0;(c=l.$refs.navigationContent).innerHTML=l.d_render;var o=c.children;if(o.length)for(var u=0;u<o.length;u++)h(o[u],u);function h(p,_,m){/^H[1-6]{1}$/.exec(p.tagName)?p.onclick=function(){var g=l.$refs.vShowContent,k=l.$refs.vNoteEdit;l.s_subfield?l.s_preview_switch&&(k.scrollTop=g.children[_].offsetTop*(k.scrollHeight-k.offsetHeight)/(g.scrollHeight-g.offsetHeight)):l.s_preview_switch&&(g.scrollTop=g.children[_].offsetTop)}:p.style.display="none"}},f.scrollLink=function(l,a){var c=l.srcElement?l.srcElement:l.target,o=c.scrollTop/(c.scrollHeight-c.offsetHeight);a.edit_scroll_height>=0&&c.scrollHeight!==a.edit_scroll_height&&c.scrollHeight-c.offsetHeight-c.scrollTop<=30&&(a.$refs.vNoteEdit.scrollTop=c.scrollHeight-c.offsetHeight,o=1),a.edit_scroll_height=c.scrollHeight,a.$refs.vShowContent.scrollHeight>a.$refs.vShowContent.offsetHeight&&(a.$refs.vShowContent.scrollTop=(a.$refs.vShowContent.scrollHeight-a.$refs.vShowContent.offsetHeight)*o)},f.fullscreenchange=function(l){l.$el.addEventListener("fullscreenchange",function(a){l.$toolbar_right_read_change_status()},!1),l.$el.addEventListener("mozfullscreenchange",function(a){l.$toolbar_right_read_change_status()},!1),l.$el.addEventListener("webkitfullscreenchange",function(a){l.$toolbar_right_read_change_status()},!1),l.$el.addEventListener("msfullscreenchange",function(a){l.$toolbar_right_read_change_status()},!1)},f.windowResize=function(l){function a(){l.$el.clientWidth>768?l.s_subfield=l.subfield:l.s_subfield=!1}a(),window.addEventListener("resize",a)},f.ImagePreviewListener=function(l){l.$refs.vShowContent.addEventListener("click",function(a){var c=(a=a||window.event).srcElement?a.srcElement:a.target;c.tagName==="IMG"&&(l.imageClick!=null?l.imageClick(c):l.d_preview_imgsrc=c.src)})}},function(d,f,i){var e=i(38).FilterCSS,t=i(38).getDefaultWhiteList,r=i(39);function n(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]}}var s=new e;function l(x){return x.replace(a,"&lt;").replace(c,"&gt;")}var a=/</g,c=/>/g,o=/"/g,u=/&quot;/g,h=/&#([a-zA-Z0-9]*);?/gim,p=/&colon;?/gim,_=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,g=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,k=/u\s*r\s*l\s*\(.*/gi;function w(x){return x.replace(o,"&quot;")}function v(x){return x.replace(u,'"')}function b(x){return x.replace(h,function(E,C){return C[0]==="x"||C[0]==="X"?String.fromCharCode(parseInt(C.substr(1),16)):String.fromCharCode(parseInt(C,10))})}function y(x){return x.replace(p,":").replace(_," ")}function S(x){for(var E="",C=0,T=x.length;C<T;C++)E+=x.charCodeAt(C)<32?" ":x.charAt(C);return r.trim(E)}function j(x){return x=S(x=y(x=b(x=v(x))))}function O(x){return x=l(x=w(x))}f.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","crossorigin","loop","muted","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],figcaption:[],figure:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],strike:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","crossorigin","loop","muted","playsinline","poster","preload","src","height","width"]},f.getDefaultWhiteList=n,f.onTag=function(x,E,C){},f.onIgnoreTag=function(x,E,C){},f.onTagAttr=function(x,E,C){},f.onIgnoreTagAttr=function(x,E,C){},f.safeAttrValue=function(x,E,C,T){if(C=j(C),E==="href"||E==="src"){if((C=r.trim(C))==="#")return"#";if(C.substr(0,7)!=="http://"&&C.substr(0,8)!=="https://"&&C.substr(0,7)!=="mailto:"&&C.substr(0,4)!=="tel:"&&C.substr(0,11)!=="data:image/"&&C.substr(0,6)!=="ftp://"&&C.substr(0,2)!=="./"&&C.substr(0,3)!=="../"&&C[0]!=="#"&&C[0]!=="/")return""}else if(E==="background"){if(m.lastIndex=0,m.test(C))return""}else if(E==="style"){if(g.lastIndex=0,g.test(C)||(k.lastIndex=0,k.test(C)&&(m.lastIndex=0,m.test(C))))return"";T!==!1&&(C=(T=T||s).process(C))}return C=O(C)},f.escapeHtml=l,f.escapeQuote=w,f.unescapeQuote=v,f.escapeHtmlEntities=b,f.escapeDangerHtml5Entities=y,f.clearNonPrintableCharacter=S,f.friendlyAttrValue=j,f.escapeAttrValue=O,f.onIgnoreTagStripAll=function(){return""},f.StripTagBody=function(x,E){typeof E!="function"&&(E=function(){});var C=!Array.isArray(x),T=[],D=!1;return{onIgnoreTag:function($,N,z){if(function(V){return!!C||r.indexOf(x,V)!==-1}($)){if(z.isClosing){var H="[/removed]",P=z.position+H.length;return T.push([D!==!1?D:z.position,P]),D=!1,H}return D||(D=z.position),"[removed]"}return E($,N,z)},remove:function($){var N="",z=0;return r.forEach(T,function(H){N+=$.slice(z,H[0]),z=H[1]}),N+=$.slice(z)}}},f.stripCommentTag=function(x){for(var E="",C=0;C<x.length;){var T=x.indexOf("<!--",C);if(T===-1){E+=x.slice(C);break}E+=x.slice(C,T);var D=x.indexOf("-->",T);if(D===-1)break;C=D+3}return E},f.stripBlankChar=function(x){var E=x.split("");return(E=E.filter(function(C){var T=C.charCodeAt(0);return T!==127&&(!(T<=31)||T===10||T===13)})).join("")},f.cssFilter=s,f.getDefaultCSSWhiteList=t},function(d,f){function i(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var e=/javascript\s*\:/gim;f.whiteList=i(),f.getDefaultWhiteList=i,f.onAttr=function(t,r,n){},f.onIgnoreAttr=function(t,r,n){},f.safeAttrValue=function(t,r){return e.test(r)?"":r}},function(d,f){d.exports={indexOf:function(i,e){var t,r;if(Array.prototype.indexOf)return i.indexOf(e);for(t=0,r=i.length;t<r;t++)if(i[t]===e)return t;return-1},forEach:function(i,e,t){var r,n;if(Array.prototype.forEach)return i.forEach(e,t);for(r=0,n=i.length;r<n;r++)e.call(t,i[r],r,i)},trim:function(i){return String.prototype.trim?i.trim():i.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(i){return String.prototype.trimRight?i.trimRight():i.replace(/(\s*$)/g,"")}}},function(d,f,i){var e=i(39);function t(o){var u,h=e.spaceIndex(o);return u=h===-1?o.slice(1,-1):o.slice(1,h+1),(u=e.trim(u).toLowerCase()).slice(0,1)==="/"&&(u=u.slice(1)),u.slice(-1)==="/"&&(u=u.slice(0,-1)),u}function r(o){return o.slice(0,2)==="</"}var n=/[^a-zA-Z0-9\\_:.-]/gim;function s(o,u){for(;u<o.length;u++){var h=o[u];if(h!==" ")return h==="="?u:-1}}function l(o,u){for(;u<o.length;u++){var h=o[u];if(h!==" ")return h==="'"||h==='"'?u:-1}}function a(o,u){for(;u>0;u--){var h=o[u];if(h!==" ")return h==="="?u:-1}}function c(o){return function(u){return u[0]==='"'&&u[u.length-1]==='"'||u[0]==="'"&&u[u.length-1]==="'"}(o)?o.substr(1,o.length-2):o}f.parseTag=function(o,u,h){var p="",_=0,m=!1,g=!1,k=0,w=o.length,v="",b="";e:for(k=0;k<w;k++){var y=o.charAt(k);if(m===!1){if(y==="<"){m=k;continue}}else if(g===!1){if(y==="<"){p+=h(o.slice(_,k)),m=k,_=k;continue}if(y===">"||k===w-1){p+=h(o.slice(_,m)),v=t(b=o.slice(m,k+1)),p+=u(m,p.length,v,b,r(b)),_=k+1,m=!1;continue}if(y==='"'||y==="'")for(var S=1,j=o.charAt(k-S);j.trim()===""||j==="=";){if(j==="="){g=y;continue e}j=o.charAt(k-++S)}}else if(y===g){g=!1;continue}}return _<w&&(p+=h(o.substr(_))),p},f.parseAttr=function(o,u){var h=0,p=0,_=[],m=!1,g=o.length;function k(y,S){if(!((y=(y=e.trim(y)).replace(n,"").toLowerCase()).length<1)){var j=u(y,S||"");j&&_.push(j)}}for(var w=0;w<g;w++){var v,b=o.charAt(w);if(m!==!1||b!=="=")if(m===!1||w!==p){if(/\s|\n|\t/.test(b)){if(o=o.replace(/\s|\n|\t/g," "),m===!1){if((v=s(o,w))===-1){k(e.trim(o.slice(h,w))),m=!1,h=w+1;continue}w=v-1;continue}if((v=a(o,w-1))===-1){k(m,c(e.trim(o.slice(h,w)))),m=!1,h=w+1;continue}}}else{if((v=o.indexOf(b,w+1))===-1)break;k(m,e.trim(o.slice(p+1,v))),m=!1,h=(w=v)+1}else m=o.slice(h,w),h=w+1,p=o.charAt(h)==='"'||o.charAt(h)==="'"?h:l(o,w+1)}return h<o.length&&(m===!1?k(o.slice(h)):k(m,c(e.trim(o.slice(h))))),e.trim(_.join(" "))}},function(d,f,i){d.exports=i(140)},function(d,f,i){d.exports.encode=i(141),d.exports.decode=i(142),d.exports.format=i(143),d.exports.parse=i(144)},function(d,f){d.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/},function(d,f){d.exports=/[\0-\x1F\x7F-\x9F]/},function(d,f){d.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},function(d,f,i){var e=`<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`,t="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",r=new RegExp("^(?:"+e+"|"+t+"|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?].*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"),n=new RegExp("^(?:"+e+"|"+t+")");d.exports.HTML_TAG_RE=r,d.exports.HTML_OPEN_CLOSE_TAG_RE=n},function(d,f,i){function e(t,r){var n,s,l,a,c,o=[],u=r.length;for(n=0;n<u;n++)(l=r[n]).marker===126&&l.end!==-1&&(a=r[l.end],(c=t.tokens[l.token]).type="s_open",c.tag="s",c.nesting=1,c.markup="~~",c.content="",(c=t.tokens[a.token]).type="s_close",c.tag="s",c.nesting=-1,c.markup="~~",c.content="",t.tokens[a.token-1].type==="text"&&t.tokens[a.token-1].content==="~"&&o.push(a.token-1));for(;o.length;){for(s=(n=o.pop())+1;s<t.tokens.length&&t.tokens[s].type==="s_close";)s++;n!==--s&&(c=t.tokens[s],t.tokens[s]=t.tokens[n],t.tokens[n]=c)}}d.exports.tokenize=function(t,r){var n,s,l,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==126||(l=(s=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),l<2))return!1;for(l%2&&(t.push("text","",0).content=a,l--),n=0;n<l;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,length:0,jump:n,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0},d.exports.postProcess=function(t){var r,n=t.tokens_meta,s=t.tokens_meta.length;for(e(t,t.delimiters),r=0;r<s;r++)n[r]&&n[r].delimiters&&e(t,n[r].delimiters)}},function(d,f,i){function e(t,r){var n,s,l,a,c,o;for(n=r.length-1;n>=0;n--)(s=r[n]).marker!==95&&s.marker!==42||s.end!==-1&&(l=r[s.end],o=n>0&&r[n-1].end===s.end+1&&r[n-1].token===s.token-1&&r[s.end+1].token===l.token+1&&r[n-1].marker===s.marker,c=String.fromCharCode(s.marker),(a=t.tokens[s.token]).type=o?"strong_open":"em_open",a.tag=o?"strong":"em",a.nesting=1,a.markup=o?c+c:c,a.content="",(a=t.tokens[l.token]).type=o?"strong_close":"em_close",a.tag=o?"strong":"em",a.nesting=-1,a.markup=o?c+c:c,a.content="",o&&(t.tokens[r[n-1].token].content="",t.tokens[r[s.end+1].token].content="",n--))}d.exports.tokenize=function(t,r){var n,s,l=t.pos,a=t.src.charCodeAt(l);if(r||a!==95&&a!==42)return!1;for(s=t.scanDelims(t.pos,a===42),n=0;n<s.length;n++)t.push("text","",0).content=String.fromCharCode(a),t.delimiters.push({marker:a,length:s.length,jump:n,token:t.tokens.length-1,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0},d.exports.postProcess=function(t){var r,n=t.tokens_meta,s=t.tokens_meta.length;for(e(t,t.delimiters),r=0;r<s;r++)n[r]&&n[r].delimiters&&e(t,n[r].delimiters)}},function(d,f,i){i.r(f);var e=i(76),t=i(22);for(var r in t)["default"].indexOf(r)<0&&function(l){i.d(f,l,function(){return t[l]})}(r);i(214);var n=i(3);const s=i.n(n)()(t.default,[["render",e.a],["__scopeId","data-v-218640b4"]]);f.default=s},function(d,f,i){var e=i(215);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("74ee9320",e,!1,{})},function(d,f,i){i.r(f);var e=i(77),t=i(23);for(var r in t)["default"].indexOf(r)<0&&function(l){i.d(f,l,function(){return t[l]})}(r);var n=i(3);const s=i.n(n)()(t.default,[["render",e.a]]);f.default=s},function(d,f,i){var e=i(218);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("4958985a",e,!1,{})},function(d,f,i){var e=i(220);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[d.i,e,""]]),e.locals&&(d.exports=e.locals),(0,i(44).default)("200b97d3",e,!1,{})},function(d,f,i){i.d(f,"a",function(){return o});var e=i(0);const t={class:"v-note-panel"},r=["innerHTML"],n={class:"v-note-navigation-title"},s={ref:"help"},l=["innerHTML"],a=["src"],c=["innerHTML"];function o(u,h,p,_,m,g){const k=Object(e.resolveComponent)("v-md-toolbar-left"),w=Object(e.resolveComponent)("v-md-toolbar-right"),v=Object(e.resolveComponent)("v-autoTextarea");return Object(e.openBlock)(),Object(e.createElementBlock)("div",{class:Object(e.normalizeClass)([[{fullscreen:m.s_fullScreen,shadow:p.boxShadow}],"v-note-wrapper markdown-body"]),style:Object(e.normalizeStyle)({"box-shadow":p.boxShadow?p.boxShadowStyle:""})},[Object(e.createCommentVNode)("工具栏"),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:"v-note-op",style:Object(e.normalizeStyle)({background:p.toolbarsBackground})},[Object(e.createVNode)(k,{ref:"toolbar_left",editable:p.editable,transition:p.transition,d_words:m.d_words,onToolbar_left_click:g.toolbar_left_click,onToolbar_left_addlink:g.toolbar_left_addlink,toolbars:p.toolbars,onImgAdd:g.$imgAdd,onImgDel:g.$imgDel,onImgTouch:g.$imgTouch,image_filter:p.imageFilter,class:Object(e.normalizeClass)({transition:p.transition})},{"left-toolbar-before":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"left-toolbar-before",{},void 0,!0)]),"left-toolbar-after":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"left-toolbar-after",{},void 0,!0)]),_:3},8,["editable","transition","d_words","onToolbar_left_click","onToolbar_left_addlink","toolbars","onImgAdd","onImgDel","onImgTouch","image_filter","class"]),Object(e.createVNode)(w,{ref:"toolbar_right",d_words:m.d_words,onToolbar_right_click:g.toolbar_right_click,toolbars:p.toolbars,s_subfield:m.s_subfield,s_preview_switch:m.s_preview_switch,s_fullScreen:m.s_fullScreen,s_html_code:m.s_html_code,s_navigation:m.s_navigation,class:Object(e.normalizeClass)({transition:p.transition})},{"right-toolbar-before":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"right-toolbar-before",{},void 0,!0)]),"right-toolbar-after":Object(e.withCtx)(()=>[Object(e.renderSlot)(u.$slots,"right-toolbar-after",{},void 0,!0)]),_:3},8,["d_words","onToolbar_right_click","toolbars","s_subfield","s_preview_switch","s_fullScreen","s_html_code","s_navigation","class"])],4),[[e.vShow,p.toolbarsFlag]]),Object(e.createCommentVNode)("编辑展示区域"),Object(e.createElementVNode)("div",t,[Object(e.createCommentVNode)("编辑区"),Object(e.createElementVNode)("div",{ref:"vNoteEdit",onScroll:h[1]||(h[1]=(...b)=>g.$v_edit_scroll&&g.$v_edit_scroll(...b)),class:Object(e.normalizeClass)(["v-note-edit divarea-wrapper",{"scroll-style":m.s_scrollStyle,"scroll-style-border-radius":m.s_scrollStyle&&!m.s_preview_switch&&!m.s_html_code,"single-edit":!m.s_preview_switch&&!m.s_html_code,"single-show":!m.s_subfield&&m.s_preview_switch||!m.s_subfield&&m.s_html_code,transition:p.transition}]),onClick:h[2]||(h[2]=(...b)=>g.textAreaFocus&&g.textAreaFocus(...b))},[Object(e.createElementVNode)("div",{class:"content-input-wrapper",style:Object(e.normalizeStyle)({"background-color":p.editorBackground})},[Object(e.createCommentVNode)(" 双栏 "),Object(e.createVNode)(v,{ref:"vNoteTextarea",placeholder:p.placeholder?p.placeholder:m.d_words.start_editor,class:"content-input",fontSize:p.fontSize,lineHeight:"1.5",modelValue:m.d_value,"onUpdate:modelValue":h[0]||(h[0]=b=>m.d_value=b),fullHeight:"",style:Object(e.normalizeStyle)({"background-color":p.editorBackground})},null,8,["placeholder","fontSize","modelValue","style"])],4)],34),Object(e.createCommentVNode)("展示区"),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{"single-show":!m.s_subfield&&m.s_preview_switch||!m.s_subfield&&m.s_html_code},"v-note-show"])},[Object(e.withDirectives)(Object(e.createElementVNode)("div",{ref:"vShowContent",innerHTML:m.d_render,class:Object(e.normalizeClass)([{"scroll-style":m.s_scrollStyle,"scroll-style-border-radius":m.s_scrollStyle},"v-show-content"]),style:Object(e.normalizeStyle)({"background-color":p.previewBackground})},null,14,r),[[e.vShow,!m.s_html_code]]),Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{"scroll-style":m.s_scrollStyle,"scroll-style-border-radius":m.s_scrollStyle},"v-show-content-html"]),style:Object(e.normalizeStyle)({"background-color":p.previewBackground})},Object(e.toDisplayString)(m.d_render),7),[[e.vShow,m.s_html_code]])],2),[[e.vShow,m.s_preview_switch||m.s_html_code]]),Object(e.createCommentVNode)("标题导航"),Object(e.createVNode)(e.Transition,{name:"slideTop",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["v-note-navigation-wrapper",{transition:p.transition}])},[Object(e.createElementVNode)("div",n,[Object(e.createTextVNode)(Object(e.toDisplayString)(m.d_words.navigation_title),1),Object(e.createElementVNode)("i",{onClick:h[3]||(h[3]=b=>g.toolbar_right_click("navigation")),class:"fa fa-mavon-times v-note-navigation-close","aria-hidden":"true"})]),Object(e.createElementVNode)("div",{ref:"navigationContent",class:Object(e.normalizeClass)(["v-note-navigation-content",{"scroll-style":m.s_scrollStyle}])},null,2)],2),[[e.vShow,m.s_navigation]])]),_:1})]),Object(e.createCommentVNode)("帮助文档"),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[Object(e.createElementVNode)("div",s,[m.s_help?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,onClick:h[5]||(h[5]=Object(e.withModifiers)(b=>g.toolbar_right_click("help"),["self"])),class:"v-note-help-wrapper"},[Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["v-note-help-content markdown-body",{shadow:p.boxShadow}])},[Object(e.createElementVNode)("i",{onClick:h[4]||(h[4]=Object(e.withModifiers)(b=>g.toolbar_right_click("help"),["stop","prevent"])),class:"fa fa-mavon-times","aria-hidden":"true"}),Object(e.createElementVNode)("div",{class:"scroll-style v-note-help-show",innerHTML:m.d_help},null,8,l)],2)])):Object(e.createCommentVNode)("v-if",!0)],512)]),_:1}),Object(e.createCommentVNode)(" 预览图片 "),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[m.d_preview_imgsrc?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,onClick:h[6]||(h[6]=b=>m.d_preview_imgsrc=null),class:"v-note-img-wrapper"},[Object(e.createElementVNode)("img",{src:m.d_preview_imgsrc,alt:"none"},null,8,a)])):Object(e.createCommentVNode)("v-if",!0)]),_:1}),Object(e.createCommentVNode)("阅读模式"),Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)([{show:m.s_readmodel},"v-note-read-model scroll-style"]),ref:"vReadModel"},[Object(e.createElementVNode)("div",{ref:"vNoteReadContent",class:"v-note-read-content",innerHTML:m.d_render},null,8,c)],2)],6)}},function(d,f,i){i.d(f,"a",function(){return K});var e=i(0);const t={class:"v-left-item"},r=["disabled","title"],n=["disabled","title"],s=["disabled","title"],l={key:3,class:"op-icon-divider"},a=["disabled","title"],c=["disabled","title"],o=["disabled","title"],u=["disabled","title"],h=["disabled","title"],p=["disabled","title"],_=["disabled","title"],m=["disabled","title"],g={key:12,class:"op-icon-divider"},k=["disabled","title"],w=["disabled","title"],v=["disabled","title"],b={key:16,class:"op-icon-divider"},y=["disabled","title"],S=["disabled"],j={class:"dropdown-item",style:{overflow:"hidden"}},O=["title","onClick"],x=["onClick","title"],E=["src"],C=["disabled","title"],T=["disabled","title"],D={key:21,class:"op-icon-divider"},$=["title"],N=["title"],z=["title"],H=["title"],P={key:0,class:"add-image-link-wrapper"},V={class:"add-image-link"},W={class:"title"},F={class:"link-text input-wrapper"},L=["placeholder"],G={class:"link-addr input-wrapper"},Z=["placeholder"];function K(Q,q,A,ne,X,R){return Object(e.openBlock)(),Object(e.createElementBlock)("div",t,[Object(e.renderSlot)(Q.$slots,"left-toolbar-before",{},void 0,!0),A.toolbars.bold?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:0,disabled:!A.editable,type:"button",onClick:q[0]||(q[0]=B=>R.$clicks("bold")),class:"op-icon fa fa-mavon-bold","aria-hidden":"true",title:A.d_words.tl_bold+" (ctrl+b)"},null,8,r)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.italic?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:1,disabled:!A.editable,type:"button",onClick:q[1]||(q[1]=B=>R.$clicks("italic")),class:"op-icon fa fa-mavon-italic","aria-hidden":"true",title:A.d_words.tl_italic+" (ctrl+i)"},null,8,n)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.header?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:2,class:Object(e.normalizeClass)([{selected:X.s_header_dropdown_open},"op-icon fa fa-mavon-header dropdown dropdown-wrapper"]),disabled:!A.editable,type:"button",onMouseleave:q[10]||(q[10]=(...B)=>R.$mouseleave_header_dropdown&&R.$mouseleave_header_dropdown(...B)),onMouseenter:q[11]||(q[11]=(...B)=>R.$mouseenter_header_dropdown&&R.$mouseenter_header_dropdown(...B)),"aria-hidden":"true",title:A.d_words.tl_header+" (ctrl+h)"},[Object(e.createVNode)(e.Transition,{name:"fade",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["op-header popup-dropdown",{transition:A.transition}]),onMouseenter:q[8]||(q[8]=(...B)=>R.$mouseenter_header_dropdown&&R.$mouseenter_header_dropdown(...B)),onMouseleave:q[9]||(q[9]=(...B)=>R.$mouseleave_header_dropdown&&R.$mouseleave_header_dropdown(...B))},[Object(e.createElementVNode)("div",{title:"#",class:"dropdown-item",onClick:q[2]||(q[2]=Object(e.withModifiers)(B=>R.$click_header("header1"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_one),1)]),Object(e.createElementVNode)("div",{title:"## ",class:"dropdown-item",onClick:q[3]||(q[3]=Object(e.withModifiers)(B=>R.$click_header("header2"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_two),1)]),Object(e.createElementVNode)("div",{title:"### ",class:"dropdown-item",onClick:q[4]||(q[4]=Object(e.withModifiers)(B=>R.$click_header("header3"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_three),1)]),Object(e.createElementVNode)("div",{title:"#### ",class:"dropdown-item",onClick:q[5]||(q[5]=Object(e.withModifiers)(B=>R.$click_header("header4"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_four),1)]),Object(e.createElementVNode)("div",{title:"##### ",class:"dropdown-item",onClick:q[6]||(q[6]=Object(e.withModifiers)(B=>R.$click_header("header5"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_five),1)]),Object(e.createElementVNode)("div",{title:"###### ",class:"dropdown-item",onClick:q[7]||(q[7]=Object(e.withModifiers)(B=>R.$click_header("header6"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_header_six),1)])],34),[[e.vShow,X.s_header_dropdown_open]])]),_:1})],42,s)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.header||A.toolbars.italic||A.toolbars.bold?(Object(e.openBlock)(),Object(e.createElementBlock)("span",l)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.underline?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:4,disabled:!A.editable,type:"button",onClick:q[12]||(q[12]=B=>R.$clicks("underline")),class:"op-icon fa fa-mavon-underline",title:A.d_words.tl_underline+" (ctrl+u)","aria-hidden":"true"},null,8,a)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.strikethrough?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:5,disabled:!A.editable,type:"button",onClick:q[13]||(q[13]=B=>R.$clicks("strikethrough")),class:"op-icon fa fa-mavon-strikethrough",title:A.d_words.tl_strikethrough+" (ctrl+shift+d)","aria-hidden":"true"},null,8,c)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.mark?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:6,disabled:!A.editable,type:"button",onClick:q[14]||(q[14]=B=>R.$clicks("mark")),class:"op-icon fa fa-mavon-thumb-tack",title:A.d_words.tl_mark+" (ctrl+m)","aria-hidden":"true"},null,8,o)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.superscript?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:7,disabled:!A.editable,type:"button",onClick:q[15]||(q[15]=B=>R.$clicks("superscript")),class:"op-icon fa fa-mavon-superscript","aria-hidden":"true",title:A.d_words.tl_superscript+" (ctrl+alt+s)"},null,8,u)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.subscript?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:8,disabled:!A.editable,type:"button",onClick:q[16]||(q[16]=B=>R.$clicks("subscript")),class:"op-icon fa fa-mavon-subscript","aria-hidden":"true",title:A.d_words.tl_subscript+" (ctrl+shift+s)"},null,8,h)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.alignleft?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:9,disabled:!A.editable,type:"button",onClick:q[17]||(q[17]=B=>R.$clicks("alignleft")),class:"op-icon fa fa-mavon-align-left","aria-hidden":"true",title:A.d_words.tl_alignleft+" (ctrl+l)"},null,8,p)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.aligncenter?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:10,disabled:!A.editable,type:"button",onClick:q[18]||(q[18]=B=>R.$clicks("aligncenter")),class:"op-icon fa fa-mavon-align-center","aria-hidden":"true",title:A.d_words.tl_aligncenter+" (ctrl+e)"},null,8,_)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.alignright?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:11,disabled:!A.editable,type:"button",onClick:q[19]||(q[19]=B=>R.$clicks("alignright")),class:"op-icon fa fa-mavon-align-right","aria-hidden":"true",title:A.d_words.tl_alignright+" (ctrl+r)"},null,8,m)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.superscript||A.toolbars.subscript||A.toolbars.underline||A.toolbars.strikethrough||A.toolbars.mark?(Object(e.openBlock)(),Object(e.createElementBlock)("span",g)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.quote?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:13,disabled:!A.editable,type:"button",onClick:q[20]||(q[20]=B=>R.$clicks("quote")),class:"op-icon fa fa-mavon-quote-left","aria-hidden":"true",title:A.d_words.tl_quote+" (ctrl+q)"},null,8,k)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ol?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:14,disabled:!A.editable,type:"button",onClick:q[21]||(q[21]=B=>R.$clicks("ol")),class:"op-icon fa fa-mavon-list-ol","aria-hidden":"true",title:A.d_words.tl_ol+" (ctrl+o)"},null,8,w)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ul?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:15,disabled:!A.editable,type:"button",onClick:q[22]||(q[22]=B=>R.$clicks("ul")),class:"op-icon fa fa-mavon-list-ul","aria-hidden":"true",title:A.d_words.tl_ul+" (ctrl+alt+u)"},null,8,v)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.ul||A.toolbars.ol||A.toolbars.quote?(Object(e.openBlock)(),Object(e.createElementBlock)("span",b)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.link?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:17,disabled:!A.editable,type:"button",onClick:q[23]||(q[23]=Object(e.withModifiers)(B=>R.$toggle_imgLinkAdd("link"),["stop"])),class:"op-icon fa fa-mavon-link","aria-hidden":"true",title:A.d_words.tl_link+" (ctrl+l)"},null,8,y)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.imagelink?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:18,disabled:!A.editable,class:Object(e.normalizeClass)([{selected:X.s_img_dropdown_open},"op-icon fa fa-mavon-picture-o dropdown dropdown-wrapper"]),type:"button",onMouseleave:q[28]||(q[28]=(...B)=>R.$mouseleave_img_dropdown&&R.$mouseleave_img_dropdown(...B)),onMouseenter:q[29]||(q[29]=(...B)=>R.$mouseenter_img_dropdown&&R.$mouseenter_img_dropdown(...B)),"aria-hidden":"true"},[Object(e.createVNode)(e.Transition,{name:"fade",persisted:""},{default:Object(e.withCtx)(()=>[Object(e.withDirectives)(Object(e.createElementVNode)("div",{class:Object(e.normalizeClass)(["op-image popup-dropdown",{transition:A.transition}]),onMouseleave:q[26]||(q[26]=(...B)=>R.$mouseleave_img_dropdown&&R.$mouseleave_img_dropdown(...B)),onMouseenter:q[27]||(q[27]=(...B)=>R.$mouseenter_img_dropdown&&R.$mouseenter_img_dropdown(...B))},[Object(e.createElementVNode)("div",{class:"dropdown-item",onClick:q[24]||(q[24]=Object(e.withModifiers)(B=>R.$toggle_imgLinkAdd("imagelink"),["stop"]))},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(A.d_words.tl_image),1)]),Object(e.createElementVNode)("div",j,[Object(e.createElementVNode)("input",{type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg",onChange:q[25]||(q[25]=B=>R.$imgAdd(B)),multiple:"multiple"},null,32),Object(e.createTextVNode)(Object(e.toDisplayString)(A.d_words.tl_upload),1)]),(Object(e.openBlock)(!0),Object(e.createElementBlock)(e.Fragment,null,Object(e.renderList)(X.img_file,(B,ee)=>(Object(e.openBlock)(),Object(e.createElementBlock)(e.Fragment,{key:ee},[B&&B[1]?(Object(e.openBlock)(),Object(e.createElementBlock)("div",{key:0,class:"dropdown-item dropdown-images",title:B[1].name,onClick:Object(e.withModifiers)(re=>R.$imgFileListClick(ee),["stop"])},[Object(e.createElementVNode)("span",null,Object(e.toDisplayString)(B[1].name),1),Object(e.createElementVNode)("button",{type:"button",onClick:Object(e.withModifiers)(re=>R.$imgDel(ee),["stop"]),class:"op-icon fa fa-mavon-times","aria-hidden":"true",title:A.d_words.tl_upload_remove},null,8,x),Object(e.createCommentVNode)(" 缩略图展示 "),Object(e.createElementVNode)("img",{class:Object(e.normalizeClass)(["image-show",{transition:A.transition}]),src:B[1].miniurl,alt:"none"},null,10,E)],8,O)):Object(e.createCommentVNode)("v-if",!0)],64))),128))],34),[[e.vShow,X.s_img_dropdown_open]])]),_:1})],42,S)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.code?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:19,disabled:!A.editable,type:"button",onClick:q[30]||(q[30]=B=>R.$clicks("code")),class:"op-icon fa fa-mavon-code","aria-hidden":"true",title:A.d_words.tl_code+" (ctrl+alt+c)"},null,8,C)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.table?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:20,disabled:!A.editable,type:"button",onClick:q[31]||(q[31]=B=>R.$clicks("table")),class:"op-icon fa fa-mavon-table","aria-hidden":"true",title:A.d_words.tl_table+" (ctrl+alt+t)"},null,8,T)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.link||A.toolbars.imagelink||A.toolbars.code||A.toolbars.table?(Object(e.openBlock)(),Object(e.createElementBlock)("span",D)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.undo?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:22,type:"button",onClick:q[32]||(q[32]=B=>R.$clicks("undo")),class:"op-icon fa fa-mavon-undo","aria-hidden":"true",title:A.d_words.tl_undo+" (ctrl+z)"},null,8,$)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.redo?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:23,type:"button",onClick:q[33]||(q[33]=B=>R.$clicks("redo")),class:"op-icon fa fa-mavon-repeat","aria-hidden":"true",title:A.d_words.tl_redo+" (ctrl+y)"},null,8,N)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.trash?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:24,type:"button",onClick:q[34]||(q[34]=B=>R.$clicks("trash")),class:"op-icon fa fa-mavon-trash-o","aria-hidden":"true",title:A.d_words.tl_trash+" (ctrl+breakspace)"},null,8,z)):Object(e.createCommentVNode)("v-if",!0),A.toolbars.save?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:25,type:"button",onClick:q[35]||(q[35]=B=>R.$clicks("save")),class:"op-icon fa fa-mavon-floppy-o","aria-hidden":"true",title:A.d_words.tl_save+" (ctrl+s)"},null,8,H)):Object(e.createCommentVNode)("v-if",!0),Object(e.renderSlot)(Q.$slots,"left-toolbar-after",{},void 0,!0),Object(e.createCommentVNode)(" 添加image链接 "),Object(e.createVNode)(e.Transition,{name:"fade"},{default:Object(e.withCtx)(()=>[X.s_img_link_open?(Object(e.openBlock)(),Object(e.createElementBlock)("div",P,[Object(e.createElementVNode)("div",V,[Object(e.createElementVNode)("i",{onClick:q[36]||(q[36]=Object(e.withModifiers)(B=>X.s_img_link_open=!1,["stop","prevent"])),class:"fa fa-mavon-times","aria-hidden":"true"}),Object(e.createElementVNode)("h3",W,Object(e.toDisplayString)(X.link_type=="link"?A.d_words.tl_popup_link_title:A.d_words.tl_popup_img_link_title),1),Object(e.createElementVNode)("div",F,[Object(e.withDirectives)(Object(e.createElementVNode)("input",{ref:"linkTextInput",type:"text","onUpdate:modelValue":q[37]||(q[37]=B=>X.link_text=B),placeholder:X.link_type=="link"?A.d_words.tl_popup_link_text:A.d_words.tl_popup_img_link_text},null,8,L),[[e.vModelText,X.link_text]])]),Object(e.createElementVNode)("div",G,[Object(e.withDirectives)(Object(e.createElementVNode)("input",{type:"text","onUpdate:modelValue":q[38]||(q[38]=B=>X.link_addr=B),placeholder:X.link_type=="link"?A.d_words.tl_popup_link_addr:A.d_words.tl_popup_img_link_addr},null,8,Z),[[e.vModelText,X.link_addr]])]),Object(e.createElementVNode)("div",{class:"op-btn cancel",onClick:q[39]||(q[39]=Object(e.withModifiers)(B=>X.s_img_link_open=!1,["stop"]))},Object(e.toDisplayString)(A.d_words.tl_popup_link_cancel),1),Object(e.createElementVNode)("div",{class:"op-btn sure",onClick:q[40]||(q[40]=Object(e.withModifiers)(B=>R.$imgLinkAdd(),["stop"]))},Object(e.toDisplayString)(A.d_words.tl_popup_link_sure),1)])])):Object(e.createCommentVNode)("v-if",!0)]),_:1})])}},function(d,f,i){i.d(f,"a",function(){return g});var e=i(0);const t={class:"v-right-item"},r=["title"],n=["title"],s=["title"],l=["title"],a=["title"],c=["title"],o=["title"],u=["title"],h={key:8,class:"op-icon-divider"},p=["title"],_=["title"],m=["title"];function g(k,w,v,b,y,S){return Object(e.openBlock)(),Object(e.createElementBlock)("div",t,[Object(e.renderSlot)(k.$slots,"right-toolbar-before"),v.toolbars.navigation?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:0,type:"button",onClick:w[0]||(w[0]=j=>S.$clicks("navigation")),class:"op-icon fa fa-mavon-bars","aria-hidden":"true",title:v.d_words.tl_navigation_on+" (F8)"},null,8,r)),[[e.vShow,!v.s_navigation]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.navigation?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:1,type:"button",onClick:w[1]||(w[1]=j=>S.$clicks("navigation")),class:"op-icon fa fa-mavon-bars selected","aria-hidden":"true",title:v.d_words.tl_navigation_off+" (F8)"},null,8,n)),[[e.vShow,v.s_navigation]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.preview?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:2,type:"button",onClick:w[2]||(w[2]=j=>S.$clicks("preview")),class:"op-icon fa fa-mavon-eye-slash selected","aria-hidden":"true",title:v.d_words.tl_edit+" (F9)"},null,8,s)),[[e.vShow,v.s_preview_switch]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.preview?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:3,type:"button",onClick:w[3]||(w[3]=j=>S.$clicks("preview")),class:"op-icon fa fa-mavon-eye","aria-hidden":"true",title:v.d_words.tl_preview+" (F9)"},null,8,l)),[[e.vShow,!v.s_preview_switch]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.fullscreen?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:4,type:"button",onClick:w[4]||(w[4]=j=>S.$clicks("fullscreen")),class:"op-icon fa fa-mavon-arrows-alt",title:v.d_words.tl_fullscreen_on+" (F10)","aria-hidden":"true"},null,8,a)),[[e.vShow,!v.s_fullScreen]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.fullscreen?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:5,type:"button",onClick:w[5]||(w[5]=j=>S.$clicks("fullscreen")),class:"op-icon fa fa-mavon-compress selected",title:v.d_words.tl_fullscreen_off+" (F10)","aria-hidden":"true"},null,8,c)),[[e.vShow,v.s_fullScreen]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.readmodel?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:6,type:"button",onClick:w[6]||(w[6]=j=>S.$clicks("read")),class:"op-icon fa fa-mavon-window-maximize","aria-hidden":"true",title:v.d_words.tl_read+" (F11)"},null,8,o)):Object(e.createCommentVNode)("v-if",!0),v.toolbars.subfield?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:7,type:"button",onClick:w[7]||(w[7]=j=>S.$clicks("subfield")),class:Object(e.normalizeClass)(["op-icon fa fa-mavon-columns",{selected:v.s_subfield}]),"aria-hidden":"true",title:(v.s_subfield?v.d_words.tl_single_column:v.d_words.tl_double_column)+" (F12)"},null,10,u)):Object(e.createCommentVNode)("v-if",!0),v.toolbars.help&&v.toolbars.htmlcode&&v.toolbars.readmodel&&v.toolbars.fullscreen&&v.toolbars.subfield&&v.toolbars.navigation?(Object(e.openBlock)(),Object(e.createElementBlock)("span",h)):Object(e.createCommentVNode)("v-if",!0),v.toolbars.htmlcode?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:9,type:"button",onClick:w[8]||(w[8]=j=>S.$clicks("html")),class:"op-icon fa fa-mavon-code",title:v.d_words.tl_html_on,"aria-hidden":"true"},null,8,p)),[[e.vShow,!v.s_html_code]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.htmlcode?Object(e.withDirectives)((Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:10,type:"button",onClick:w[9]||(w[9]=j=>S.$clicks("html")),class:"op-icon fa fa-mavon-code selected",title:v.d_words.tl_html_off,"aria-hidden":"true"},null,8,_)),[[e.vShow,v.s_html_code]]):Object(e.createCommentVNode)("v-if",!0),v.toolbars.help?(Object(e.openBlock)(),Object(e.createElementBlock)("button",{key:11,type:"button",onClick:w[10]||(w[10]=j=>S.$clicks("help")),class:"op-icon fa fa-mavon-question-circle",style:{"font-size":"17px",padding:"5px 6px 5px 3px"},title:v.d_words.tl_help,"aria-hidden":"true"},null,8,m)):Object(e.createCommentVNode)("v-if",!0),Object(e.renderSlot)(k.$slots,"right-toolbar-after")])}},function(d,f,i){i.d(f,"a",function(){return n});var e=i(0);const t=Object(e.createElementVNode)("br",null,null,-1),r=["autofocus","placeholder"];function n(s,l,a,c,o,u){return Object(e.openBlock)(),Object(e.createElementBlock)("div",{style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight,height:a.fullHeight?"100%":"auto"}),class:"auto-textarea-wrapper"},[Object(e.createElementVNode)("pre",{style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight,minHeight:a.fullHeight?"100%":"auto"}),class:"auto-textarea-block"},[t,Object(e.createTextVNode)(Object(e.toDisplayString)(o.temp_value)+" ",1)],4),Object(e.withDirectives)(Object(e.createElementVNode)("textarea",{ref:"vTextarea",autofocus:o.s_autofocus,onKeyup:l[0]||(l[0]=(...h)=>u.change&&u.change(...h)),spellcheck:"false",placeholder:a.placeholder,"onUpdate:modelValue":l[1]||(l[1]=h=>o.temp_value=h),style:Object(e.normalizeStyle)({fontSize:a.fontSize,lineHeight:a.lineHeight}),class:Object(e.normalizeClass)([{"no-border":!a.border,"no-resize":!a.resize},"auto-textarea-input"])},`\r
      `,46,r),[[e.vModelText,o.temp_value]])],4)}},function(d,f,i){var e=i(80).default,t={markdownIt:e.mixins[0].data().markdownIt,mavonEditor:e,LeftToolbar:i(70).default,RightToolbar:i(72).default,install:function(r){r.component("mavon-editor",e)}};d.exports=t},function(d,f,i){i.r(f);var e=i(75),t=i(21);for(var r in t)["default"].indexOf(r)<0&&function(l){i.d(f,l,function(){return t[l]})}(r);i(219),i(221);var n=i(3);const s=i.n(n)()(t.default,[["render",e.a],["__scopeId","data-v-33c11741"]]);f.default=s},function(d,f,i){d.exports={default:i(82),__esModule:!0}},function(d,f,i){i(83),i(95),d.exports=i(35).f("iterator")},function(d,f,i){var e=i(84)(!0);i(45)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,n=this._i;return n>=r.length?{value:void 0,done:!0}:(t=e(r,n),this._i+=t.length,{value:t,done:!1})})},function(d,f,i){var e=i(26),t=i(27);d.exports=function(r){return function(n,s){var l,a,c=String(t(n)),o=e(s),u=c.length;return o<0||o>=u?r?"":void 0:(l=c.charCodeAt(o))<55296||l>56319||o+1===u||(a=c.charCodeAt(o+1))<56320||a>57343?r?c.charAt(o):l:r?c.slice(o,o+2):a-56320+(l-55296<<10)+65536}}},function(d,f,i){var e=i(86);d.exports=function(t,r,n){if(e(t),r===void 0)return t;switch(n){case 1:return function(s){return t.call(r,s)};case 2:return function(s,l){return t.call(r,s,l)};case 3:return function(s,l,a){return t.call(r,s,l,a)}}return function(){return t.apply(r,arguments)}}},function(d,f){d.exports=function(i){if(typeof i!="function")throw TypeError(i+" is not a function!");return i}},function(d,f,i){var e=i(50),t=i(16),r=i(34),n={};i(5)(n,i(9)("iterator"),function(){return this}),d.exports=function(s,l,a){s.prototype=e(n,{next:t(1,a)}),r(s,l+" Iterator")}},function(d,f,i){var e=i(6),t=i(14),r=i(30);d.exports=i(7)?Object.defineProperties:function(n,s){t(n);for(var l,a=r(s),c=a.length,o=0;c>o;)e.f(n,l=a[o++],s[l]);return n}},function(d,f,i){var e=i(52);d.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return e(t)=="String"?t.split(""):Object(t)}},function(d,f,i){var e=i(8),t=i(91),r=i(92);d.exports=function(n){return function(s,l,a){var c,o=e(s),u=t(o.length),h=r(a,u);if(n&&l!=l){for(;u>h;)if((c=o[h++])!=c)return!0}else for(;u>h;h++)if((n||h in o)&&o[h]===l)return n||h||0;return!n&&-1}}},function(d,f,i){var e=i(26),t=Math.min;d.exports=function(r){return r>0?t(e(r),9007199254740991):0}},function(d,f,i){var e=i(26),t=Math.max,r=Math.min;d.exports=function(n,s){return(n=e(n))<0?t(n+s,0):r(n,s)}},function(d,f,i){var e=i(2).document;d.exports=e&&e.documentElement},function(d,f,i){var e=i(4),t=i(53),r=i(31)("IE_PROTO"),n=Object.prototype;d.exports=Object.getPrototypeOf||function(s){return s=t(s),e(s,r)?s[r]:typeof s.constructor=="function"&&s instanceof s.constructor?s.constructor.prototype:s instanceof Object?n:null}},function(d,f,i){i(96);for(var e=i(2),t=i(5),r=i(29),n=i(9)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<s.length;l++){var a=s[l],c=e[a],o=c&&c.prototype;o&&!o[n]&&t(o,n,a),r[a]=r.Array}},function(d,f,i){var e=i(97),t=i(98),r=i(29),n=i(8);d.exports=i(45)(Array,"Array",function(s,l){this._t=n(s),this._i=0,this._k=l},function(){var s=this._t,l=this._k,a=this._i++;return!s||a>=s.length?(this._t=void 0,t(1)):t(0,l=="keys"?a:l=="values"?s[a]:[a,s[a]])},"values"),r.Arguments=r.Array,e("keys"),e("values"),e("entries")},function(d,f){d.exports=function(){}},function(d,f){d.exports=function(i,e){return{value:e,done:!!i}}},function(d,f,i){d.exports={default:i(100),__esModule:!0}},function(d,f,i){i(101),i(107),i(108),i(109),d.exports=i(13).Symbol},function(d,f,i){var e=i(2),t=i(4),r=i(7),n=i(46),s=i(49),l=i(102).KEY,a=i(15),c=i(32),o=i(34),u=i(17),h=i(9),p=i(35),_=i(36),m=i(103),g=i(104),k=i(14),w=i(10),v=i(53),b=i(8),y=i(28),S=i(16),j=i(50),O=i(105),x=i(106),E=i(54),C=i(6),T=i(30),D=x.f,$=C.f,N=O.f,z=e.Symbol,H=e.JSON,P=H&&H.stringify,V=h("_hidden"),W=h("toPrimitive"),F={}.propertyIsEnumerable,L=c("symbol-registry"),G=c("symbols"),Z=c("op-symbols"),K=Object.prototype,Q=typeof z=="function"&&!!E.f,q=e.QObject,A=!q||!q.prototype||!q.prototype.findChild,ne=r&&a(function(){return j($({},"a",{get:function(){return $(this,"a",{value:7}).a}})).a!=7})?function(M,I,U){var J=D(K,I);J&&delete K[I],$(M,I,U),J&&M!==K&&$(K,I,J)}:$,X=function(M){var I=G[M]=j(z.prototype);return I._k=M,I},R=Q&&typeof z.iterator=="symbol"?function(M){return typeof M=="symbol"}:function(M){return M instanceof z},B=function(M,I,U){return M===K&&B(Z,I,U),k(M),I=y(I,!0),k(U),t(G,I)?(U.enumerable?(t(M,V)&&M[V][I]&&(M[V][I]=!1),U=j(U,{enumerable:S(0,!1)})):(t(M,V)||$(M,V,S(1,{})),M[V][I]=!0),ne(M,I,U)):$(M,I,U)},ee=function(M,I){k(M);for(var U,J=m(I=b(I)),Y=0,te=J.length;te>Y;)B(M,U=J[Y++],I[U]);return M},re=function(M){var I=F.call(this,M=y(M,!0));return!(this===K&&t(G,M)&&!t(Z,M))&&(!(I||!t(this,M)||!t(G,M)||t(this,V)&&this[V][M])||I)},ie=function(M,I){if(M=b(M),I=y(I,!0),M!==K||!t(G,I)||t(Z,I)){var U=D(M,I);return!U||!t(G,I)||t(M,V)&&M[V][I]||(U.enumerable=!0),U}},ae=function(M){for(var I,U=N(b(M)),J=[],Y=0;U.length>Y;)t(G,I=U[Y++])||I==V||I==l||J.push(I);return J},le=function(M){for(var I,U=M===K,J=N(U?Z:b(M)),Y=[],te=0;J.length>te;)!t(G,I=J[te++])||U&&!t(K,I)||Y.push(G[I]);return Y};Q||(s((z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor!");var M=u(arguments.length>0?arguments[0]:void 0),I=function(U){this===K&&I.call(Z,U),t(this,V)&&t(this[V],M)&&(this[V][M]=!1),ne(this,M,S(1,U))};return r&&A&&ne(K,M,{configurable:!0,set:I}),X(M)}).prototype,"toString",function(){return this._k}),x.f=ie,C.f=B,i(55).f=O.f=ae,i(37).f=re,E.f=le,r&&!i(12)&&s(K,"propertyIsEnumerable",re,!0),p.f=function(M){return X(h(M))}),n(n.G+n.W+n.F*!Q,{Symbol:z});for(var se="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ce=0;se.length>ce;)h(se[ce++]);for(var ue=T(h.store),pe=0;ue.length>pe;)_(ue[pe++]);n(n.S+n.F*!Q,"Symbol",{for:function(M){return t(L,M+="")?L[M]:L[M]=z(M)},keyFor:function(M){if(!R(M))throw TypeError(M+" is not a symbol!");for(var I in L)if(L[I]===M)return I},useSetter:function(){A=!0},useSimple:function(){A=!1}}),n(n.S+n.F*!Q,"Object",{create:function(M,I){return I===void 0?j(M):ee(j(M),I)},defineProperty:B,defineProperties:ee,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ae,getOwnPropertySymbols:le});var de=a(function(){E.f(1)});n(n.S+n.F*de,"Object",{getOwnPropertySymbols:function(M){return E.f(v(M))}}),H&&n(n.S+n.F*(!Q||a(function(){var M=z();return P([M])!="[null]"||P({a:M})!="{}"||P(Object(M))!="{}"})),"JSON",{stringify:function(M){for(var I,U,J=[M],Y=1;arguments.length>Y;)J.push(arguments[Y++]);if(U=I=J[1],(w(I)||M!==void 0)&&!R(M))return g(I)||(I=function(te,oe){if(typeof U=="function"&&(oe=U.call(this,te,oe)),!R(oe))return oe}),J[1]=I,P.apply(H,J)}}),z.prototype[W]||i(5)(z.prototype,W,z.prototype.valueOf),o(z,"Symbol"),o(Math,"Math",!0),o(e.JSON,"JSON",!0)},function(d,f,i){var e=i(17)("meta"),t=i(10),r=i(4),n=i(6).f,s=0,l=Object.isExtensible||function(){return!0},a=!i(15)(function(){return l(Object.preventExtensions({}))}),c=function(u){n(u,e,{value:{i:"O"+ ++s,w:{}}})},o=d.exports={KEY:e,NEED:!1,fastKey:function(u,h){if(!t(u))return typeof u=="symbol"?u:(typeof u=="string"?"S":"P")+u;if(!r(u,e)){if(!l(u))return"F";if(!h)return"E";c(u)}return u[e].i},getWeak:function(u,h){if(!r(u,e)){if(!l(u))return!0;if(!h)return!1;c(u)}return u[e].w},onFreeze:function(u){return a&&o.NEED&&l(u)&&!r(u,e)&&c(u),u}}},function(d,f,i){var e=i(30),t=i(54),r=i(37);d.exports=function(n){var s=e(n),l=t.f;if(l)for(var a,c=l(n),o=r.f,u=0;c.length>u;)o.call(n,a=c[u++])&&s.push(a);return s}},function(d,f,i){var e=i(52);d.exports=Array.isArray||function(t){return e(t)=="Array"}},function(d,f,i){var e=i(8),t=i(55).f,r={}.toString,n=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];d.exports.f=function(s){return n&&r.call(s)=="[object Window]"?function(l){try{return t(l)}catch{return n.slice()}}(s):t(e(s))}},function(d,f,i){var e=i(37),t=i(16),r=i(8),n=i(28),s=i(4),l=i(47),a=Object.getOwnPropertyDescriptor;f.f=i(7)?a:function(c,o){if(c=r(c),o=n(o,!0),l)try{return a(c,o)}catch{}if(s(c,o))return t(!e.f.call(c,o),c[o])}},function(d,f){},function(d,f,i){i(36)("asyncIterator")},function(d,f,i){i(36)("observable")},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0});var e=119,t=120,r=121,n=122,s=123,l=66,a=73,c=72,o=85,u=68,h=77,p=81,_=79,m=76,g=83,k=90,w=89,v=67,b=84,y=82,S=8,j=9,O=13,x=97,E=98,C=99,T=100,D=101,$=102,N=49,z=50,H=51,P=52,V=53,W=54;f.keydownListen=function(F){F.shortCut&&F.$el.addEventListener("keydown",function(L){if(L.ctrlKey||L.metaKey||L.altKey||L.shiftKey)if(!L.ctrlKey&&!L.metaKey||L.altKey||L.shiftKey){if((L.ctrlKey||L.metaKey)&&L.altKey&&!L.shiftKey)switch(L.keyCode){case g:L.preventDefault(),F.toolbar_left_click("superscript");break;case o:L.preventDefault(),F.toolbar_left_click("ul");break;case m:L.preventDefault(),F.toolbar_left_click("imagelink");break;case v:L.preventDefault(),F.toolbar_left_click("code");break;case b:L.preventDefault(),F.toolbar_left_click("table")}else if((L.ctrlKey||L.metaKey)&&L.shiftKey&&!L.altKey)switch(L.keyCode){case g:L.preventDefault(),F.toolbar_left_click("subscript");break;case u:L.preventDefault(),F.toolbar_left_click("strikethrough");break;case m:L.preventDefault(),F.toolbar_left_click("alignleft");break;case y:L.preventDefault(),F.toolbar_left_click("alignright");break;case v:L.preventDefault(),F.toolbar_left_click("aligncenter")}else if(!L.ctrlKey&&!L.metaKey&&L.shiftKey&&!L.altKey)switch(L.keyCode){case j:F.$refs.toolbar_left.s_img_link_open||(L.preventDefault(),F.unInsertTab())}}else switch(L.keyCode){case l:L.preventDefault(),F.toolbar_left_click("bold");break;case a:L.preventDefault(),F.toolbar_left_click("italic");break;case c:L.preventDefault(),F.toolbar_left_click("header");break;case o:L.preventDefault(),F.toolbar_left_click("underline");break;case u:L.preventDefault(),F.toolbar_left_click("removeLine");break;case h:L.preventDefault(),F.toolbar_left_click("mark");break;case p:L.preventDefault(),F.toolbar_left_click("quote");break;case _:L.preventDefault(),F.toolbar_left_click("ol");break;case m:L.preventDefault(),F.toolbar_left_click("link");break;case g:L.preventDefault(),F.toolbar_left_click("save");break;case k:L.preventDefault(),F.toolbar_left_click("undo");break;case w:L.preventDefault(),F.toolbar_left_click("redo");break;case S:L.preventDefault(),F.toolbar_left_click("trash");break;case x:L.preventDefault(),F.toolbar_left_click("header1");break;case E:L.preventDefault(),F.toolbar_left_click("header2");break;case C:L.preventDefault(),F.toolbar_left_click("header3");break;case T:L.preventDefault(),F.toolbar_left_click("header4");break;case D:L.preventDefault(),F.toolbar_left_click("header5");break;case $:L.preventDefault(),F.toolbar_left_click("header6");break;case N:L.preventDefault(),F.toolbar_left_click("header1");break;case z:L.preventDefault(),F.toolbar_left_click("header2");break;case H:L.preventDefault(),F.toolbar_left_click("header3");break;case P:L.preventDefault(),F.toolbar_left_click("header4");break;case V:L.preventDefault(),F.toolbar_left_click("header5");break;case W:L.preventDefault(),F.toolbar_left_click("header6")}else switch(L.keyCode){case e:F.toolbars.navigation&&(L.preventDefault(),F.toolbar_right_click("navigation"));break;case t:F.toolbars.preview&&(L.preventDefault(),F.toolbar_right_click("preview"));break;case r:F.toolbars.fullscreen&&(L.preventDefault(),F.toolbar_right_click("fullscreen"));break;case n:F.toolbars.readmodel&&(L.preventDefault(),F.toolbar_right_click("read"));break;case s:F.toolbars.subfield&&(L.preventDefault(),F.toolbar_right_click("subfield"));break;case j:F.$refs.toolbar_left.s_img_link_open||(L.preventDefault(),F.insertTab());break;case O:F.$refs.toolbar_left.s_img_link_open?(L.preventDefault(),F.$refs.toolbar_left.$imgLinkAdd()):F.insertEnter(L)}})}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default={agate:1,androidstudio:1,"arduino-light":1,arta:1,ascetic:1,"atom-one-dark":1,"atom-one-light":1,"brown-paper":1,"codepen-embed":1,"color-brewer":1,dark:1,default:1,docco:1,far:1,foundation:1,github:1,googlecode:1,grayscale:1,hybrid:1,idea:1,"ir-black":1,magula:1,"mono-blue":1,"monokai-sublime":1,monokai:1,obsidian:1,"paraiso-dark":1,"paraiso-light":1,pojoaque:1,purebasic:1,rainbow:1,routeros:1,"school-book":1,sunburst:1,"tomorrow-night-blue":1,"tomorrow-night-bright":1,vs:1,vs2015:1,xcode:1,xt256:1,"a11y-dark":1,"a11y-light":1,"an-old-hope":1,"atom-one-dark-reasonable":1,"brown-pap":1,devibeans:1,"github-dark":1,"github-dark-dimmed":1,gml:1,"gradient-dark":1,"gradient-light":1,"isbl-editor-dark":1,"isbl-editor-light":1,"kimbie-dark":1,"kimbie-light":1,lightfair:1,lioshi:1,"night-owl":1,"nnfx-dark":1,"nnfx-light":1,nord:1,pojo:1,"qtcreator-dark":1,"qtcreator-light":1,"shades-of-purple":1,srcery:1,"stackoverflow-dark":1,"stackoverflow-light":1}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0});var e,t=i(25),r=(e=t)&&e.__esModule?e:{default:e};f.p_ObjectCopy_DEEP=function n(s,l){for(var a in l){var c=(0,r.default)(l[a]);!s[a]||c!=="Object"&&c!=="object"?s[a]=l[a]:s[a]=n(s[a],l[a])}return s},f.p_urlParse=function(){var n=window.location.search,s={},l=n.match(/[?&][^?&]+=[^?&]+/g);return l&&l.forEach(function(a){var c=a.substring(1).split("="),o=decodeURIComponent(c[0]),u=decodeURIComponent(c[1]);s[o]=u}),s},f.stopEvent=function(n){n&&(n.preventDefault&&n.preventDefault(),n.stopPropagation&&n.stopPropagation())}},function(d,f,i){function e(o){o.d_history_index>0&&o.d_history_index--,o.$nextTick(function(){var u=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=u,o.getTextareaDom().selectionEnd=u}),o.getTextareaDom().focus()}function t(o){o.d_history_index<o.d_history.length-1&&o.d_history_index++,o.$nextTick(function(){var u=o.textarea_selectionEnds[o.d_history_index];o.getTextareaDom().selectionStart=u,o.getTextareaDom().selectionEnd=u}),o.getTextareaDom().focus()}function r(o){o.d_value="",o.getTextareaDom().focus()}function n(o){o.save(o.d_value,o.d_render)}function s(o){o.insertOl()}function l(o){o.insertUl()}function a(o){o.removeLine()}function c(o){o.insertCodeBlock()}Object.defineProperty(f,"__esModule",{value:!0}),f.toolbar_left_addlink=function(o,u,h,p){var _={prefix:o==="link"?"["+u+"](":"!["+u+"](",subfix:")",str:h};p.insertText(p.getTextareaDom(),_)},f.toolbar_left_click=function(o,u){var h={bold:{prefix:"**",subfix:"**",str:u.d_words.tl_bold},italic:{prefix:"*",subfix:"*",str:u.d_words.tl_italic},header:{prefix:"# ",subfix:"",str:u.d_words.tl_header},header1:{prefix:"# ",subfix:"",str:u.d_words.tl_header_one},header2:{prefix:"## ",subfix:"",str:u.d_words.tl_header_two},header3:{prefix:"### ",subfix:"",str:u.d_words.tl_header_three},header4:{prefix:"#### ",subfix:"",str:u.d_words.tl_header_four},header5:{prefix:"##### ",subfix:"",str:u.d_words.tl_header_five},header6:{prefix:"###### ",subfix:"",str:u.d_words.tl_header_six},underline:{prefix:"++",subfix:"++",str:u.d_words.tl_underline},strikethrough:{prefix:"~~",subfix:"~~",str:u.d_words.tl_strikethrough},mark:{prefix:"==",subfix:"==",str:u.d_words.tl_mark},superscript:{prefix:"^",subfix:"^",str:u.d_words.tl_superscript},subscript:{prefix:"~",subfix:"~",str:u.d_words.tl_subscript},quote:{prefix:"> ",subfix:"",str:u.d_words.tl_quote},link:{prefix:"[](",subfix:")",str:u.d_words.tl_link},imagelink:{prefix:"![](",subfix:")",str:u.d_words.tl_image},table:{prefix:"",subfix:"",str:`|column1|column2|column3|
|-|-|-|
|content1|content2|content3|
`},aligncenter:{prefix:`::: hljs-center

`,subfix:`

:::
`,str:u.d_words.tl_aligncenter},alignright:{prefix:`::: hljs-right

`,subfix:`

:::
`,str:u.d_words.tl_alignright},alignleft:{prefix:`::: hljs-left

`,subfix:`

:::
`,str:u.d_words.tl_alignleft}};h.hasOwnProperty(o)&&u.insertText(u.getTextareaDom(),h[o]);var p={undo:e,redo:t,trash:r,save:n,ol:s,ul:l,removeLine:a,code:c};p.hasOwnProperty(o)&&p[o](u)}},function(d,f,i){function e(c){c.s_html_code=!c.s_html_code,c.htmlcode&&c.htmlcode(c.s_html_code,c.d_value)}function t(c){c.s_help=!c.s_help,c.helptoggle&&c.helptoggle(c.s_help,c.d_value)}function r(c){var o=c.$refs.vReadModel;o.requestFullscreen?o.requestFullscreen():o.mozRequestFullScreen?o.mozRequestFullScreen():o.webkitRequestFullscreen?o.webkitRequestFullscreen():o.msRequestFullscreen&&o.msRequestFullscreen()}function n(c){c.s_preview_switch=!c.s_preview_switch,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value)}function s(c){c.s_fullScreen=!c.s_fullScreen,c.fullscreen&&c.fullscreen(c.s_fullScreen,c.d_value)}function l(c){c.s_subfield=!c.s_subfield,c.s_preview_switch=c.s_subfield,c.previewtoggle&&c.previewtoggle(c.s_preview_switch,c.d_value),c.subfieldtoggle&&c.subfieldtoggle(c.s_subfield,c.d_value)}function a(c){c.s_navigation=!c.s_navigation,c.s_navigation&&(c.s_preview_switch=!0),c.navigationtoggle&&c.navigationtoggle(c.s_navigation,c.d_value),c.s_navigation&&c.getNavigation(c,!1)}Object.defineProperty(f,"__esModule",{value:!0}),f.toolbar_right_click=function(c,o){var u={help:t,html:e,read:r,preview:n,fullscreen:s,navigation:a,subfield:l};u.hasOwnProperty(c)&&u[c](o)}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.CONFIG=void 0;var e=w(i(116)),t=w(i(117)),r=w(i(118)),n=w(i(119)),s=w(i(120)),l=w(i(121)),a=w(i(122)),c=w(i(123)),o=w(i(124)),u=w(i(125)),h=w(i(126)),p=w(i(127)),_=w(i(128)),m=w(i(129)),g=w(i(130)),k=w(i(131));function w(v){return v&&v.__esModule?v:{default:v}}f.CONFIG={"help_zh-CN":e.default,"help_zh-TW":t.default,"help_pt-BR":s.default,help_en:r.default,help_fr:n.default,help_ru:l.default,help_de:a.default,help_ja:c.default,"words_zh-CN":o.default,"words_zh-TW":u.default,"words_pt-BR":_.default,words_en:h.default,words_fr:p.default,words_ru:m.default,words_de:g.default,words_ja:k.default,langList:["en","zh-CN","zh-TW","fr","pt-BR","ru","de","ja"],toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,undo:!0,redo:!0,trash:!0,save:!0,alignleft:!0,aligncenter:!0,alignright:!0,navigation:!0,subfield:!0,fullscreen:!0,readmodel:!0,htmlcode:!0,help:!0,preview:!0}}},function(d,f){d.exports=`@[toc](目录)\r
\r
Markdown 语法简介\r
=============\r
> [语法详解](http://commonmark.org/help/)\r
\r
## **目录**\r
\`\`\`\r
@[toc](目录)\r
\`\`\`\r
\r
## **粗体**\r
\`\`\`\r
**粗体**\r
__粗体__\r
\`\`\`\r
## *斜体*\r
\`\`\`\r
*斜体*\r
_斜体_\r
\`\`\`\r
## 标题\r
\`\`\`\r
# 一级标题 #\r
一级标题\r
====\r
## 二级标题 ##\r
二级标题\r
----\r
### 三级标题 ###\r
#### 四级标题 ####\r
##### 五级标题 #####\r
###### 六级标题 ######\r
\`\`\`\r
## 分割线\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上^角~下~标\r
\`\`\`\r
上角标 x^2^\r
下角标 H~2~0\r
\`\`\`\r
## ++下划线++ ~~中划线~~\r
\`\`\`\r
++下划线++\r
~~中划线~~\r
\`\`\`\r
## ==标记==\r
\`\`\`\r
==标记==\r
\`\`\`\r
## 段落引用\r
\`\`\`\r
> 一级\r
>> 二级\r
>>> 三级\r
...\r
\`\`\`\r
\r
## 列表\r
\`\`\`\r
有序列表\r
1.\r
2.\r
3.\r
...\r
无序列表\r
-\r
-\r
...\r
\`\`\`\r
\r
## 任务列表\r
\r
- [x] 已完成任务\r
- [ ] 未完成任务\r
\r
\`\`\`\r
- [x] 已完成任务\r
- [ ] 未完成任务\r
\`\`\`\r
\r
## 链接\r
\`\`\`\r
[链接](www.baidu.com)\r
![图片描述](http://www.image.com)\r
\`\`\`\r
## 代码段落\r
\\\`\`\` type\r
\r
代码段落\r
\r
\\\`\`\`\r
\r
\\\` 代码块 \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
## 表格(table)\r
\`\`\`\r
| 标题1 | 标题2 | 标题3 |\r
| :--  | :--: | ----: |\r
| 左对齐 | 居中 | 右对齐 |\r
| ---------------------- | ------------- | ----------------- |\r
\`\`\`\r
| 标题1 | 标题2 | 标题3 |\r
| :--  | :--: | ----: |\r
| 左对齐 | 居中 | 右对齐 |\r
| ---------------------- | ------------- | ----------------- |\r
## 脚注(footnote)\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
见底部脚注[^hello]\r
\r
[^hello]: 一个注脚\r
\r
## 表情(emoji)\r
[参考网站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$公式\r
\r
我们可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\r
我们也可以单行渲染\r
$$\\sum_{i=1}^n a_i=0$$\r
具体可参照[katex文档](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函数](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文档](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## 布局\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`居左\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`居中\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`居右\`\r
\`:::\`\r
:::\r
\r
## 定义\r
\r
术语一\r
\r
:   定义一\r
\r
包含有*行内标记*的术语二\r
\r
:   定义二\r
\r
        {一些定义二的文字或代码}\r
\r
    定义二的第三段\r
\r
\`\`\`\r
术语一\r
\r
:   定义一\r
\r
包含有*行内标记*的术语二\r
\r
:   定义二\r
\r
        {一些定义二的文字或代码}\r
\r
    定义二的第三段\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 规范由 W3C 维护\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 规范由 W3C 维护\r
\`\`\`\r
\r
`},function(d,f){d.exports=`@[toc](目錄)\r
\r
Markdown 語法簡介\r
=============\r
> [語法詳解](http://commonmark.org/help/)\r
\r
## **粗體**\r
\`\`\`\r
**粗體**\r
__粗體__\r
\`\`\`\r
## *斜體*\r
\`\`\`\r
*斜體*\r
_斜體_\r
\`\`\`\r
## 標題\r
\`\`\`\r
# 一級標題 #\r
一級標題\r
====\r
## 二級標題 ##\r
二級標題\r
----\r
### 三級標題 ###\r
#### 四級標題 ####\r
##### 五級標題 #####\r
###### 六級標題 ######\r
\`\`\`\r
## 分割線\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上^角~下~標\r
\`\`\`\r
上角標 x^2^\r
下角標 H~2~0\r
\`\`\`\r
## ++下劃線++ ~~中劃線~~\r
\`\`\`\r
++下劃線++\r
~~中劃線~~\r
\`\`\`\r
## ==標記==\r
\`\`\`\r
==標記==\r
\`\`\`\r
## 段落引用\r
\`\`\`\r
> 一級\r
>> 二級\r
>>> 三級\r
...\r
\`\`\`\r
\r
## 列表\r
\`\`\`\r
有序列表\r
1.\r
2.\r
3.\r
...\r
無序列表\r
-\r
-\r
...\r
\`\`\`\r
\r
## 任務列表\r
\r
- [x] 已完成任務\r
- [ ] 未完成任務\r
\r
\`\`\`\r
- [x] 已完成任務\r
- [ ] 未完成任務\r
\`\`\`\r
\r
## 鏈接\r
\`\`\`\r
[鏈接](www.baidu.com)\r
![圖片描述](http://www.image.com)\r
\`\`\`\r
## 代碼段落\r
\\\`\`\` type\r
\r
代碼段落\r
\r
\\\`\`\`\r
\r
\\\` 代碼塊 \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
## 表格(table)\r
\`\`\`\r
| 標題1 | 標題2 | 標題3 |\r
| :--  | :--: | ----: |\r
| 左對齊 | 居中 | 右對齊 |\r
| ---------------------- | ------------- | ----------------- |\r
\`\`\`\r
| 標題1 | 標題2 | 標題3 |\r
| :--  | :--: | ----: |\r
| 左對齊 | 居中 | 右對齊 |\r
| ---------------------- | ------------- | ----------------- |\r
## 腳註(footnote)\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
見底部腳註[^hello]\r
\r
[^hello]: 一個註腳\r
\r
## 表情(emoji)\r
[參考網站: https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$公式\r
\r
我們可以渲染公式例如：$x_i + y_i = z_i$和$\\sum_{i=1}^n a_i=0$\r
我們也可以單行渲染\r
$$\\sum_{i=1}^n a_i=0$$\r
具體可參照[katex文檔](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex支持的函數](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex文檔](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## 布局\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`居左\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`居中\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`居右\`\r
\`:::\`\r
:::\r
\r
## 定義\r
\r
術語一\r
\r
:   定義一\r
\r
包含有*行內標記*的術語二\r
\r
:   定義二\r
\r
        {一些定義二的文字或代碼}\r
\r
    定義二的第三段\r
\r
\`\`\`\r
術語一\r
\r
:   定義一\r
\r
包含有*行內標記*的術語二\r
\r
:   定義二\r
\r
        {一些定義二的文字或代碼}\r
\r
    定義二的第三段\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 規範由 W3C 維護\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
HTML 規範由 W3C 維護\r
\`\`\`\r
\r
`},function(d,f){d.exports=`@[toc](Catalog)\r
\r
Markdown Guide\r
===\r
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Bold**\r
\`\`\`\r
**bold**\r
__bold__\r
\`\`\`\r
## *Italic*\r
\`\`\`\r
*italic*\r
_italic_\r
\`\`\`\r
## Header\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Dividing line\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Super^script & ~Sub~script\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Underline++ & ~~Strikethrough~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==Mark==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## Quote\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## List\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo List\r
\r
- [x] task 1\r
- [ ] task 2\r
\r
\`\`\`\r
- [x] task 1\r
- [ ] task 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Table\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
## Footnote\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## Emojis\r
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## deflist\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d,f){d.exports=`@[toc](Catalogue)\r
\r
Guide Markdown\r
==============\r
> Détail : [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Bold**\r
\`\`\`\r
**bold**\r
__bold__\r
\`\`\`\r
## *Italic*\r
\`\`\`\r
*italic*\r
_italic_\r
\`\`\`\r
## Header\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Dividing line\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Super^script & ~Sub~script\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Underline++ & ~~Strikethrough~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==Mark==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## Quote\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## List\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
## Link\r
\r
## Todo List\r
\r
- [x] Équipe 1\r
- [ ] Équipe 2\r
\r
\`\`\`\r
- [x] Équipe 1\r
- [ ] Équipe 2\r
\`\`\`\r
\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Table\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
## Footnote\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## Emojis\r
Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
Detailed: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## deflist\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d,f){d.exports=`@[toc](Directory)\r
\r
Guia Markdown\r
===\r
> Detalhes: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Negrito**\r
\`\`\`\r
**negrito**\r
__negrito__\r
\`\`\`\r
## *Itálico*\r
\`\`\`\r
*itálico*\r
_itálico_\r
\`\`\`\r
## Cabeçalho\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Linha Divisora\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Sobre^scrito & ~Sub~scrito\r
\`\`\`\r
sobre x^2^\r
sub H~2~0\r
\`\`\`\r
## ++Sublinhar++ & ~~Tachar~~\r
\`\`\`\r
++sublinhar++\r
~~tachar~~\r
\`\`\`\r
## ==Marcador==\r
\`\`\`\r
==marcador==\r
\`\`\`\r
## Citação\r
\r
\`\`\`\r
> citação 1\r
>> citação 2\r
>>> citação 3\r
...\r
\`\`\`\r
\r
## Listas\r
\`\`\`\r
lista Numerada\r
1.\r
2.\r
3.\r
...\r
\r
lista com marcadores\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo Listas\r
\r
- [x] Tarefa 1\r
- [ ] Tarefa 2\r
\r
\`\`\`\r
- [x] Tarefa 1\r
- [ ] Tarefa 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Link Texto\r
[Text](www.baidu.com)\r
\r
Link Imagem\r
![Text](http://www.image.com)\r
\`\`\`\r
## Código\r
\\\`\`\` tipo\r
\r
bloco de código\r
\r
\\\`\`\`\r
\r
\\\` código \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Tabela\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| esquerda | centro | direita |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| esquerda | centro | direita |\r
| ---------------------- | ------------- | ----------------- |\r
## Rodapé\r
\`\`\`\r
olá[^olá]\r
\`\`\`\r
\r
Olhe para baixo[^olá]\r
\r
[^olá]: rodapé\r
\r
## Emojis\r
Detalhes: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematics\r
\r
Podemos mostrar fórmulas por exemplo：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$\r
Podemos também mostrar em uma única linha:\r
$$\\sum_{i=1}^n a_i=0$$\r
Detalhes: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`esquerda\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`centro\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`direita\`\r
\`:::\`\r
:::\r
\r
## Definições\r
\r
Termo 1\r
\r
:   Definição 1\r
\r
Termo 2 com *markup inline*\r
\r
:   Definição 2\r
\r
        { um pouco de código, parte da Definição 2 }\r
\r
    Terceiro parágrafo da definição 2.\r
\r
\`\`\`\r
Termo 1\r
\r
:   Definição 1\r
\r
Termo 2 com *markup inline*\r
\r
:   Definição 2\r
\r
        { um pouco de código, parte da Definição 2 }\r
\r
    Terceiro parágrafo da definição 2.\r
\r
\`\`\`\r
\r
## Abreviações\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
A especificação HTML\r
é mantida pela W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
é mantida pela W3C.\r
\`\`\`\r
`},function(d,f){d.exports=`@[toc](Catalog)  \r
  \r
Markdown помощь  \r
===  \r
> Подробнее: [http://commonmark.org/help/](http://commonmark.org/help/)  \r
  \r
## **Полужирный**  \r
\`\`\`  \r
**Полужирный**  \r
__Полужирный__  \r
\`\`\`  \r
## *Курсив*  \r
\`\`\`  \r
*Курсив*  \r
_Курсив_  \r
\`\`\`  \r
## Заголовок  \r
\`\`\`  \r
# h1 #  \r
h1  \r
====  \r
## h2 ##  \r
h2  \r
----  \r
### h3 ###  \r
#### h4 ####  \r
##### h5 #####  \r
###### h6 ######  \r
\`\`\`  \r
## Разделительная линия  \r
\`\`\`  \r
***  \r
---  \r
\`\`\`  \r
****  \r
## ^Верхний^индекс & ~Нижний~индекс  \r
\`\`\`  \r
верхний x^2^  \r
нижний H~2~0  \r
\`\`\`  \r
## ++Подчеркнутый++ & ~~Зачеркнутый~~  \r
\`\`\`  \r
++Подчеркнутый++  \r
~~Зачеркнутый~~  \r
\`\`\`  \r
## ==Отметка==  \r
\`\`\`  \r
==Отметка==  \r
\`\`\`  \r
## Цитата  \r
  \r
\`\`\`  \r
> Цитата  \r
>> Цитата 2  \r
>>> Цитата 3  \r
...  \r
\`\`\`  \r
  \r
## Список  \r
\`\`\`  \r
ol  \r
1.  \r
2.  \r
3.  \r
...  \r
  \r
ul  \r
-  \r
-  \r
...  \r
\`\`\`  \r
  \r
## Список задач  \r
  \r
- [x] Задача 1  \r
- [ ] Задача 2  \r
  \r
\`\`\`  \r
- [x] Задача 1  \r
- [ ] Задача 2  \r
\`\`\`  \r
  \r
## Ссылка  \r
\`\`\`  \r
Ссылка  \r
[Текст](www.baidu.com)  \r
  \r
Ссылка изображения  \r
![Текст](http://www.image.com)  \r
\`\`\`  \r
## Код  \r
\\\`\`\` type  \r
  \r
code block  \r
  \r
\\\`\`\`  \r
  \r
\\\` code \\\`  \r
  \r
\`\`\`c++  \r
int main()  \r
{  \r
 printf("hello world!");}  \r
\`\`\`  \r
\`code\`  \r
  \r
## Таблица  \r
\`\`\`  \r
| th1 | th2 | th3 |  \r
| :--  | :--: | ----: |  \r
| left | center | right |  \r
\`\`\`  \r
| th1 | th2 | th3 |  \r
| :--  | :--: | ----: |  \r
| left | center | right |  \r
| ---------------------- | ------------- | ----------------- |  \r
## Сноска  \r
\`\`\`  \r
Привет[^Привет]  \r
\`\`\`  \r
  \r
Тут что-то непонятное[^Привет]  \r
  \r
[^Привет]: А тут объяснение  \r
  \r
## Emojis  \r
Подробнее: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)  \r
\`\`\`  \r
:laughing:  \r
:blush:  \r
:smiley:  \r
:)  \r
...  \r
\`\`\`  \r
:laughing::blush::smiley::)  \r
  \r
## $\\KaTeX$ Mathematics  \r
  \r
Можно выводить такие формулы：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  \r
А также в одну строку:\r
$$\\sum_{i=1}^n a_i=0$$  \r
Подробнее: \r
- [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)\r
- [katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)\r
- [latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)  \r
  \r
## Разметка\r
  \r
::: hljs-left  \r
\`::: hljs-left\`  \r
\`left\`  \r
\`:::\`  \r
:::  \r
  \r
::: hljs-center  \r
\`::: hljs-center\`  \r
\`center\`  \r
\`:::\`  \r
:::  \r
  \r
::: hljs-right  \r
\`::: hljs-right\`  \r
\`right\`  \r
\`:::\`  \r
:::  \r
  \r
## Список определений\r
  \r
Термин 1  \r
  \r
:   Определение 1  \r
  \r
Термин  2 с использованием *разметки*\r
  \r
:   Определение 2  \r
  \r
 { Какой-нибудь код, часть определения 2 }  \r
 Третий параграф определения 2.  \r
\`\`\`  \r
Термин 1  \r
  \r
:   Определение 1  \r
  \r
Термин  2 с использованием *разметки*\r
  \r
:   Определение 2  \r
  \r
 { Какой-нибудь код, часть определения 2 }  \r
 Третий параграф определения 2.  \r
\`\`\`  \r
  \r
## Сокращения\r
*[HTML]: Hyper Text Markup Language  \r
*[W3C]:  World Wide Web Consortium  \r
The HTML specification  \r
is maintained by the W3C.  \r
\`\`\`  \r
*[HTML]: Hyper Text Markup Language  \r
*[W3C]:  World Wide Web Consortium  \r
The HTML specification  \r
is maintained by the W3C.  \r
\`\`\`\r
`},function(d,f){d.exports=`@[toc](Catalog)\r
\r
Markdown Handbuch\r
===\r
> Details: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **Fett**\r
\`\`\`\r
**fett**\r
__fett__\r
\`\`\`\r
## *Kursiv*\r
\`\`\`\r
*kursiv*\r
_kursiv_\r
\`\`\`\r
## Überschriften\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## Trennlinien\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^Hoch^gestellt & ~Tief~gestellt\r
\`\`\`\r
hochgestellt x^2^\r
tiefgestellt H~2~0\r
\`\`\`\r
## ++Unterstrichen++ & ~~Durchgestrichen~~\r
\`\`\`\r
++unterstrichen++\r
~~durchgestrichen~~\r
\`\`\`\r
## ==Markiert==\r
\`\`\`\r
==markiert==\r
\`\`\`\r
## Zitat\r
\r
\`\`\`\r
> zitat 1\r
>> zitat 2\r
>>> zitat 3\r
...\r
\`\`\`\r
\r
## Liste\r
\`\`\`\r
ol\r
1.\r
2.\r
3.\r
...\r
\r
ul\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todo Liste\r
\r
- [x] aufgabe 1\r
- [ ] aufgabe 2\r
\r
\`\`\`\r
- [x] aufgabe 1\r
- [ ] aufgabe 2\r
\`\`\`\r
\r
## Link\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Link mit Bild\r
![Text](http://www.image.com)\r
\`\`\`\r
## Code\r
\\\`\`\` Typ\r
\r
Codeblock\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## Tabelle\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| links | mitte | rechts |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| links | mitte | rechts |\r
| ---------------------- | ------------- | ----------------- |\r
## Fußnote\r
\`\`\`\r
hallo[^hallo]\r
\`\`\`\r
\r
Schau zum unteren Rand[^hallo]\r
\r
[^hallo]: fussnote\r
\r
## Emojis\r
Details: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ Mathematik\r
\r
Formeln lassen sich darstellen z.b. ：$x_i + y_i = z_i$ und $\\sum_{i=1}^n a_i=0$\r
Formeln können auf einer eigenen Zeile gerendert werden\r
$$\\sum_{i=1}^n a_i=0$$\r
Details: [katex](http://www.intmath.com/cg5/katex-mathjax-comparison.php)和[katex function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)以及[latex](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
## Layout\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`links\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`mitte\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`rechts\`\r
\`:::\`\r
:::\r
\r
## Liste von Definitionen\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 mit *inline markup*\r
\r
:   Definition 2\r
\r
        { ein wenig code, teil von Definition 2 }\r
\r
    Dritter Absatz von Definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 mit *inline markup*\r
\r
:   Definition 2\r
\r
        { ein wenig code, teil von Definition 2 }\r
\r
    Dritter Absatz von Definition 2.\r
\r
\`\`\`\r
\r
## Abkürzungen\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
Die HTML Spezifikation\r
wird gepflegt vom W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
Die HTML Spezifikation\r
wird gepflegt vom W3C.\r
\`\`\`\r
`},function(d,f){d.exports=`@[toc](目次)\r
\r
Markdown 文法ガイド\r
===\r
> Detailed: [http://commonmark.org/help/](http://commonmark.org/help/)\r
\r
## **太字**\r
\`\`\`\r
**太字**\r
__太字__\r
\`\`\`\r
## *斜体*\r
\`\`\`\r
*斜体*\r
_斜体_\r
\`\`\`\r
## 見出し\r
\`\`\`\r
# h1 #\r
h1\r
====\r
## h2 ##\r
h2\r
----\r
### h3 ###\r
#### h4 ####\r
##### h5 #####\r
###### h6 ######\r
\`\`\`\r
## 横線\r
\`\`\`\r
***\r
---\r
\`\`\`\r
****\r
## ^上付き^文字 & ~下付き~文字\r
\`\`\`\r
super x^2^\r
sub H~2~0\r
\`\`\`\r
## ++下線++ & ~~取り消し線~~\r
\`\`\`\r
++underline++\r
~~strikethrough~~\r
\`\`\`\r
## ==蛍光ペン==\r
\`\`\`\r
==mark==\r
\`\`\`\r
## 引用\r
\r
\`\`\`\r
> quote 1\r
>> quote 2\r
>>> quote 3\r
...\r
\`\`\`\r
\r
## リスト\r
\`\`\`\r
番号付きリスト\r
1.\r
2.\r
3.\r
...\r
\r
箇条書きリスト\r
-\r
-\r
...\r
\`\`\`\r
\r
## Todoリスト\r
\r
- [x] task 1\r
- [ ] task 2\r
\r
\`\`\`\r
- [x] task 1\r
- [ ] task 2\r
\`\`\`\r
\r
## リンク\r
\`\`\`\r
Text Link\r
[Text](www.baidu.com)\r
\r
Image Link\r
![Text](http://www.image.com)\r
\`\`\`\r
## コード\r
\\\`\`\` type\r
\r
code block\r
\r
\\\`\`\`\r
\r
\\\` code \\\`\r
\r
\`\`\`c++\r
int main()\r
{\r
    printf("hello world!");\r
}\r
\`\`\`\r
\`code\`\r
\r
## 表\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
\`\`\`\r
| th1 | th2 | th3 |\r
| :--  | :--: | ----: |\r
| left | center | right |\r
| ---------------------- | ------------- | ----------------- |\r
\r
## 脚注\r
\`\`\`\r
hello[^hello]\r
\`\`\`\r
\r
Look at the bottom[^hello]\r
\r
[^hello]: footnote\r
\r
## 絵文字\r
> Detailed: [https://www.webpagefx.com/tools/emoji-cheat-sheet/](https://www.webpagefx.com/tools/emoji-cheat-sheet/)\r
\`\`\`\r
:laughing:\r
:blush:\r
:smiley:\r
:)\r
...\r
\`\`\`\r
:laughing::blush::smiley::)\r
\r
## $\\KaTeX$ 数式\r
> Detailed: [KaTeXマニュアル](http://www.intmath.com/cg5/katex-mathjax-comparison.php)、[KaTeX function](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)、[LaTeXマニュアル](https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference)\r
\r
We can render formulas for example：$x_i + y_i = z_i$ and $\\sum_{i=1}^n a_i=0$  \r
We can also single-line rendering\r
$$\\sum_{i=1}^n a_i=0$$\r
\r
## レイアウト\r
\r
::: hljs-left\r
\`::: hljs-left\`\r
\`left\`\r
\`:::\`\r
:::\r
\r
::: hljs-center\r
\`::: hljs-center\`\r
\`center\`\r
\`:::\`\r
:::\r
\r
::: hljs-right\r
\`::: hljs-right\`\r
\`right\`\r
\`:::\`\r
:::\r
\r
## 定義リスト\r
\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
Term 1\r
\r
:   Definition 1\r
\r
Term 2 with *inline markup*\r
\r
:   Definition 2\r
\r
        { some code, part of Definition 2 }\r
\r
    Third paragraph of definition 2.\r
\r
\`\`\`\r
\r
## abbr\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
*[HTML]: Hyper Text Markup Language\r
*[W3C]:  World Wide Web Consortium\r
The HTML specification\r
is maintained by the W3C.\r
\`\`\`\r
`},function(d){d.exports=JSON.parse('{"start_editor":"开始编辑...","navigation_title":"导航目录","tl_bold":"粗体","tl_italic":"斜体","tl_header":"标题","tl_header_one":"一级标题","tl_header_two":"二级标题","tl_header_three":"三级标题","tl_header_four":"四级标题","tl_header_five":"五级标题","tl_header_six":"六级标题","tl_underline":"下划线","tl_strikethrough":"中划线","tl_mark":"标记","tl_superscript":"上角标","tl_subscript":"下角标","tl_quote":"段落引用","tl_ol":"有序列表","tl_ul":"无序列表","tl_link":"链接","tl_image":"添加图片链接","tl_code":"代码块","tl_table":"表格","tl_undo":"上一步","tl_redo":"下一步","tl_trash":"清空","tl_save":"保存","tl_navigation_on":"开启标题导航","tl_navigation_off":"关闭标题导航","tl_preview":"预览","tl_aligncenter":"居中","tl_alignleft":"居左","tl_alignright":"居右","tl_edit":"编辑","tl_single_column":"单栏","tl_double_column":"双栏","tl_fullscreen_on":"全屏编辑","tl_fullscreen_off":"退出全屏","tl_read":"沉浸式阅读","tl_html_on":"查看html文本","tl_html_off":"返回markdown文本","tl_help":"markdown语法帮助","tl_upload":"上传图片","tl_upload_remove":"删除","tl_popup_link_title":"添加链接","tl_popup_link_text":"链接描述","tl_popup_link_addr":"链接地址","tl_popup_img_link_title":"添加图片","tl_popup_img_link_text":"图片描述","tl_popup_img_link_addr":"图片链接","tl_popup_link_sure":"确定","tl_popup_link_cancel":"取消"}')},function(d){d.exports=JSON.parse('{"start_editor":"開始編輯...","navigation_title":"導航目錄","tl_bold":"粗體","tl_italic":"斜體","tl_header":"標題","tl_header_one":"一級標題","tl_header_two":"二級標題","tl_header_three":"三級標題","tl_header_four":"四級標題","tl_header_five":"五級標題","tl_header_six":"六級標題","tl_underline":"下劃線","tl_strikethrough":"中劃線","tl_mark":"標記","tl_superscript":"上角標","tl_subscript":"下角標","tl_quote":"段落引用","tl_ol":"有序列表","tl_ul":"無序列表","tl_link":"鏈接","tl_image":"添加圖片鏈接","tl_code":"代碼塊","tl_table":"表格","tl_undo":"上一步","tl_redo":"下一步","tl_trash":"清空","tl_save":"保存","tl_navigation_on":"開啟標題導航","tl_navigation_off":"關閉標題導航","tl_preview":"預覽","tl_aligncenter":"居中","tl_alignleft":"居左","tl_alignright":"居右","tl_edit":"編輯","tl_single_column":"單欄","tl_double_column":"雙欄","tl_fullscreen_on":"全屏編輯","tl_fullscreen_off":"退出全屏","tl_read":"沈浸式閱讀","tl_html_on":"查看html文本","tl_html_off":"返回markdown文本","tl_help":"markdown語法幫助","tl_upload":"上傳圖片","tl_upload_remove":"刪除","tl_popup_link_title":"添加鏈接","tl_popup_link_text":"鏈接描述","tl_popup_link_addr":"鏈接地址","tl_popup_img_link_title":"添加圖片","tl_popup_img_link_text":"圖片描述","tl_popup_img_link_addr":"圖片鏈接","tl_popup_link_sure":"確定","tl_popup_link_cancel":"取消"}')},function(d){d.exports=JSON.parse('{"start_editor":"Begin editing...","navigation_title":"Navigation","tl_bold":"Bold","tl_italic":"Italic","tl_header":"Header","tl_header_one":"Header 1","tl_header_two":"Header 2","tl_header_three":"Header 3","tl_header_four":"Header 4","tl_header_five":"Header 5","tl_header_six":"Header 6","tl_underline":"Underline","tl_strikethrough":"Strikethrough","tl_mark":"Mark","tl_superscript":"Superscript","tl_subscript":"Subscript","tl_quote":"Quote","tl_ol":"Ol","tl_ul":"Ul","tl_link":"Link","tl_image":"Image Link","tl_code":"Code","tl_table":"Table","tl_undo":"Undo","tl_redo":"Redo","tl_trash":"Trash","tl_save":"Save","tl_navigation_on":"Navigation ON","tl_navigation_off":"Navigation OFF","tl_preview":"Preview","tl_aligncenter":"Center text","tl_alignleft":"Clamp text to the left","tl_alignright":"Clamp text to the right","tl_edit":"Edit","tl_single_column":"Single Column","tl_double_column":"Double Columns","tl_fullscreen_on":"FullScreen ON","tl_fullscreen_off":"FullScreen OFF","tl_read":"Read Model","tl_html_on":"HTML ON","tl_html_off":"HTML OFF","tl_help":"Markdown Guide","tl_upload":"Upload Images","tl_upload_remove":"Remove","tl_popup_link_title":"Add Link","tl_popup_link_text":"Link text","tl_popup_link_addr":"Link address","tl_popup_img_link_title":"Add Image","tl_popup_img_link_text":"Image Text","tl_popup_img_link_addr":"Image Link","tl_popup_link_sure":"Sure","tl_popup_link_cancel":"Cancel"}')},function(d){d.exports=JSON.parse(`{"start_editor":"Début d'édition...","navigation_title":"Navigation","tl_bold":"Gras","tl_italic":"Italique","tl_header":"Entête","tl_header_one":"Entête 1","tl_header_two":"Entête 2","tl_header_three":"Entête 3","tl_header_four":"Entête 4","tl_header_five":"Entête 5","tl_header_six":"Entête 6","tl_underline":"Souligné","tl_strikethrough":"Barré","tl_mark":"Mark","tl_superscript":"Exposant","tl_subscript":"Sous-exposant","tl_quote":"Quote","tl_ol":"Liste ","tl_ul":"Puce","tl_link":"Lien","tl_image":"Image Lien","tl_code":"Code","tl_table":"Table","tl_undo":"Annuler","tl_redo":"Refaire","tl_trash":"Supprimer","tl_save":"Sauver","tl_navigation_on":"Activer la navigation","tl_navigation_off":"Désactiver le navigation","tl_preview":"Previsualisé","tl_aligncenter":"Center le texte","tl_alignleft":"Férer le texte à gauche","tl_alignright":"Férer le texte à droite","tl_edit":"Editer","tl_single_column":"Seule Colonne","tl_double_column":"Colonnes Doubles","tl_fullscreen_on":"Activer le mode plein écran","tl_fullscreen_off":"Désactiver le mode plein écran","tl_read":"Lire le modèle","tl_html_on":"Activer le mode HTML","tl_html_off":"Désactiver le mode HTML","tl_help":"Guide Markdown","tl_upload":"Télécharger les images","tl_upload_remove":"Supprimer","tl_popup_link_title":"Ajouter un lien","tl_popup_link_text":"Description","tl_popup_link_addr":"Link","tl_popup_img_link_title":"Ajouter une image","tl_popup_img_link_text":"Description","tl_popup_img_link_addr":"Link","tl_popup_link_sure":"sûr","tl_popup_link_cancel":"Annuler"}`)},function(d){d.exports=JSON.parse('{"start_editor":"Começar edição...","navigation_title":"Navegação","tl_bold":"Negrito","tl_italic":"Itálico","tl_header":"Cabeçalho","tl_header_one":"Cabeçalho 1","tl_header_two":"Cabeçalho 2","tl_header_three":"Cabeçalho 3","tl_header_four":"Cabeçalho 4","tl_header_five":"Cabeçalho 5","tl_header_six":"Cabeçalho 6","tl_underline":"Sublinhar","tl_strikethrough":"Tachar","tl_mark":"Marcação","tl_superscript":"Sobrescrito","tl_subscript":"Subscrito","tl_quote":"Citação","tl_ol":"Lista Numerada","tl_ul":"Lista com marcadores","tl_link":"Link","tl_image":"Link de imagem","tl_code":"Código","tl_table":"Tabela","tl_undo":"Desfazer","tl_redo":"Refazer","tl_trash":"Lixo","tl_save":"Salvar","tl_navigation_on":"Mostrar Navegação","tl_navigation_off":"Esconder Navegação","tl_preview":"Preview","tl_aligncenter":"Alinhar no centro","tl_alignleft":"Alinhar à esquerda","tl_alignright":"Alinhar à direita","tl_edit":"Editar","tl_single_column":"Coluna Única","tl_double_column":"Duas Colunas","tl_fullscreen_on":"Ligar Tela Cheia","tl_fullscreen_off":"Desligar Tela Cheia","tl_read":"Modo de Leitura","tl_html_on":"Ligar HTML","tl_html_off":"Desligar HTML","tl_help":"Guia Markdown","tl_upload":"Upload de Imagens","tl_upload_remove":"Remover","tl_popup_link_title":"Adicionar Link","tl_popup_link_text":"Descrição","tl_popup_link_addr":"Link","tl_popup_img_link_title":"Adicionar fotos","tl_popup_img_link_text":"Descrição","tl_popup_img_link_addr":"Link","tl_popup_link_sure":"Confirmar","tl_popup_link_cancel":"Cancelar"}')},function(d){d.exports=JSON.parse('{"start_editor":"Начните редактирование...","navigation_title":"Навигация","tl_bold":"Полужирный","tl_italic":"Курсив","tl_header":"Заголовки","tl_header_one":"Заголовок 1","tl_header_two":"Заголовок 2","tl_header_three":"Заголовок 3","tl_header_four":"Заголовок 4","tl_header_five":"Заголовок 5","tl_header_six":"Заголовок 6","tl_underline":"Подчеркнутый","tl_strikethrough":"Зачеркнутый","tl_mark":"Отметка","tl_superscript":"Верхний индекс","tl_subscript":"Нижний индекс","tl_quote":"Цитата","tl_ol":"Нумерованный список","tl_ul":"Список","tl_link":"Ссылка","tl_image":"Ссылка изображения","tl_code":"Код","tl_table":"Таблица","tl_undo":"Отменить","tl_redo":"Вернуть","tl_trash":"Удалить","tl_save":"Сохранить","tl_navigation_on":"Показать навигацию","tl_navigation_off":"Скрыть навигацию","tl_preview":"Предпросмотр","tl_aligncenter":"Выровнять по центру","tl_alignleft":"Выровнять по левому краю","tl_alignright":"Выровнять по правому краю","tl_edit":"Редактор","tl_single_column":"Одно поле","tl_double_column":"Два поля","tl_fullscreen_on":"Полноэкранный режим","tl_fullscreen_off":"Выключить полноэкранный режим","tl_read":"Режим чтения","tl_html_on":"Показать HTML","tl_html_off":"Убрать HTML","tl_help":"Markdown помощь","tl_upload":"Загрузить изображение","tl_upload_remove":"Удалить","tl_popup_link_title":"Добавить ссылку","tl_popup_link_text":"Текст ссылки","tl_popup_link_addr":"Адрес ссылки","tl_popup_img_link_title":"Локальное изображение","tl_popup_img_link_text":"Текст изображения","tl_popup_img_link_addr":"Ссылка изображения","tl_popup_link_sure":"Добавить","tl_popup_link_cancel":"Отменить"}')},function(d){d.exports=JSON.parse('{"start_editor":"Bearbeitung beginnen...","navigation_title":"Navigation","tl_bold":"Fett","tl_italic":"Kursiv","tl_header":"Überschrift","tl_header_one":"Überschrift 1","tl_header_two":"Überschrift 2","tl_header_three":"Überschrift 3","tl_header_four":"Überschrift 4","tl_header_five":"Überschrift 5","tl_header_six":"Überschrift 6","tl_underline":"Unterstrichen","tl_strikethrough":"Durchgestrichen","tl_mark":"Markiert","tl_superscript":"Hochgestellt","tl_subscript":"Tiefgestellt","tl_quote":"Zitat","tl_ol":"Ol","tl_ul":"Ul","tl_link":"Link","tl_image":"Link mit Bild","tl_code":"Code","tl_table":"Tabelle","tl_undo":"Rückgängig","tl_redo":"Wiederherstellen","tl_trash":"Mülleimer","tl_save":"Speichern","tl_navigation_on":"Navigation AN","tl_navigation_off":"Navigation AUS","tl_preview":"Vorschau","tl_aligncenter":"Text zentrieren","tl_alignleft":"Nach links ausrichten","tl_alignright":"Nach rechts ausrichten","tl_edit":"Bearbeiten","tl_single_column":"Einspaltig","tl_double_column":"Zweispaltig","tl_fullscreen_on":"Vollbild AN","tl_fullscreen_off":"Vollbild AUS","tl_read":"Lesemodus","tl_html_on":"HTML AN","tl_html_off":"HTML AUS","tl_help":"Markdown Handbuch","tl_upload":"Bilder-Upload","tl_upload_remove":"Entfernen","tl_popup_link_title":"Link hinzufügen","tl_popup_link_text":"Text des Links","tl_popup_link_addr":"Linkziel","tl_popup_img_link_title":"Bild hinzufügen","tl_popup_img_link_text":"Text des Bildes","tl_popup_img_link_addr":"Link auf Bild","tl_popup_link_sure":"Ja","tl_popup_link_cancel":"Abbruch"}')},function(d){d.exports=JSON.parse('{"start_editor":"編集を始めてね！","navigation_title":"ナビゲーション","tl_bold":"太字","tl_italic":"斜体","tl_header":"見出し","tl_header_one":"見出し1","tl_header_two":"見出し2","tl_header_three":"見出し3","tl_header_four":"見出し4","tl_header_five":"見出し5","tl_header_six":"見出し6","tl_underline":"下線","tl_strikethrough":"取り消し線","tl_mark":"蛍光ペン","tl_superscript":"上付き文字","tl_subscript":"下付き文字","tl_quote":"引用","tl_ol":"番号付きリスト","tl_ul":"箇条書きリスト","tl_link":"ハイパーリンク","tl_image":"画像のリンク","tl_code":"コードの挿入","tl_table":"表の挿入","tl_undo":"戻る","tl_redo":"進む","tl_trash":"削除","tl_save":"保存","tl_navigation_on":"ナビゲーションを表示","tl_navigation_off":"ナビゲーションを非表示","tl_preview":"プレビュー","tl_aligncenter":"中央揃え","tl_alignleft":"左揃え","tl_alignright":"右揃え","tl_edit":"編集","tl_single_column":"一列","tl_double_column":"二列","tl_fullscreen_on":"全画面表示","tl_fullscreen_off":"全画面表示の終了","tl_read":"モデルの読み込み","tl_html_on":"HTMLで表示","tl_html_off":"HTML表示の終了","tl_help":"ヘルプ","tl_upload":"画像をアップロード","tl_upload_remove":"画像の削除","tl_popup_link_title":"リンクの追加","tl_popup_link_text":"リンクテキスト","tl_popup_link_addr":"リンク先のURL","tl_popup_img_link_title":"画像の追加","tl_popup_img_link_text":"画像タイトル","tl_popup_img_link_addr":"画像URL","tl_popup_link_sure":"OK","tl_popup_link_cancel":"戻る"}')},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0});var e=s(i(25));f.initMarkdown=E;var t=s(i(56)),r=i(57),n=s(i(133));function s(C){return C&&C.__esModule?C:{default:C}}var l={html:!0,xhtmlOut:!0,breaks:!0,langPrefix:"lang-",linkify:!1,typographer:!0,quotes:"“”‘’"},a=i(138),c=i(195),o=i(201),u=i(202),h=i(203),p=i(204),_=i(205),m=i(206),g=i(207),k=i(208),w=i(209),v=i(210),b=i(211),y=i(212),S=i(213),j={},O=[],x={hljs:"auto",highlighted:!0,langCheck:function(C){C&&t.default[C]&&!j[C]&&(j[C]=1,O.push(t.default[C]))}};function E(){var C=new a(l),T=C.renderer.rules.link_open||function(D,$,N,z,H){return H.renderToken(D,$,N)};return C.renderer.rules.link_open=function(D,$,N,z,H){var P=D[$].attrIndex("href");if(D[$].attrs[P][1].startsWith("#"))return T(D,$,N,z,H);var V=D[$].attrIndex("target");return V<0?D[$].attrPush(["target","_blank"]):D[$].attrs[V][1]="_blank",T(D,$,N,z,H)},C.use(b,x).use(c).use(u).use(o).use(w).use(w,"hljs-left").use(w,"hljs-center").use(w,"hljs-right").use(h).use(p).use(_).use(m).use(g).use(w).use(S).use(y).use(k).use(v),C}f.default={data:function(){return{markdownIt:null}},created:function(){this.markdownIt=E(),this.html?(0,e.default)(this.xssOptions)==="object"&&this.markdownIt.use(n.default,this.xssOptions):(this.markdownIt.set({html:!1}),this.xssOptions=!1)},mounted:function(){x.highlighted=this.ishljs},methods:{$render:function(C,T){j={},O=[];var D=this.markdownIt.render(C);this.ishljs&&O.length>0&&this.$_render(C,T,D),T(D)},$_render:function(C,T,D){for(var $=0,N=0;N<O.length;N++){var z=this.p_external_link.hljs_lang(O[N]);(0,r.loadScript)(z,function(){($+=1)===O.length&&(D=this.markdownIt.render(C),T(D))})}}},watch:{ishljs:function(C){x.highlighted=C}}}},function(d,f,i){Object.defineProperty(f,"__esModule",{value:!0}),f.default=function(n,s){n.options.html&&(t=new e.FilterXSS(s),n.core.ruler.push("mavoneditor_sanitizer",r))};var e=i(134),t=void 0;function r(n){t&&function s(l,a){for(var c=void 0,o=void 0,u=0;u<l.length;u++)a.indexOf(l[u].type)!==-1&&(c=l[u].content,o=l[u].children,l[u].content=t.process(c),o&&o.length&&c!==l[u].content&&s(o,["html_inline"]))}(n.tokens,["inline","html_block"])}},function(d,f,i){var e=i(58),t=i(61),r=i(137);function n(s,l){return new r(l).process(s)}(f=d.exports=n).filterXSS=n,f.FilterXSS=r,function(){for(var s in e)f[s]=e[s];for(var l in t)f[l]=t[l]}(),typeof window<"u"&&(window.filterXSS=d.exports),typeof self<"u"&&typeof DedicatedWorkerGlobalScope<"u"&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=d.exports)},function(d,f,i){var e=i(59),t=i(136);i(60);function r(s){return s==null}function n(s){(s=function(l){var a={};for(var c in l)a[c]=l[c];return a}(s||{})).whiteList=s.whiteList||e.whiteList,s.onAttr=s.onAttr||e.onAttr,s.onIgnoreAttr=s.onIgnoreAttr||e.onIgnoreAttr,s.safeAttrValue=s.safeAttrValue||e.safeAttrValue,this.options=s}n.prototype.process=function(s){if(!(s=(s=s||"").toString()))return"";var l=this.options,a=l.whiteList,c=l.onAttr,o=l.onIgnoreAttr,u=l.safeAttrValue;return t(s,function(h,p,_,m,g){var k=a[_],w=!1;if(k===!0?w=k:typeof k=="function"?w=k(m):k instanceof RegExp&&(w=k.test(m)),w!==!0&&(w=!1),m=u(_,m)){var v,b={position:p,sourcePosition:h,source:g,isWhite:w};return w?r(v=c(_,m,b))?_+":"+m:v:r(v=o(_,m,b))?void 0:v}})},d.exports=n},function(d,f,i){var e=i(60);d.exports=function(t,r){(t=e.trimRight(t))[t.length-1]!==";"&&(t+=";");var n=t.length,s=!1,l=0,a=0,c="";function o(){if(!s){var p=e.trim(t.slice(l,a)),_=p.indexOf(":");if(_!==-1){var m=e.trim(p.slice(0,_)),g=e.trim(p.slice(_+1));if(m){var k=r(l,c.length,m,g,p);k&&(c+=k+"; ")}}}l=a+1}for(;a<n;a++){var u=t[a];if(u==="/"&&t[a+1]==="*"){var h=t.indexOf("*/",a+2);if(h===-1)break;l=(a=h+1)+1,s=!1}else u==="("?s=!0:u===")"?s=!1:u===";"?s||o():u===`
`&&o()}return e.trim(c)}},function(d,f,i){var e=i(38).FilterCSS,t=i(58),r=i(61),n=r.parseTag,s=r.parseAttr,l=i(39);function a(o){return o==null}function c(o){(o=function(u){var h={};for(var p in u)h[p]=u[p];return h}(o||{})).stripIgnoreTag&&(o.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),o.onIgnoreTag=t.onIgnoreTagStripAll),o.whiteList||o.allowList?o.whiteList=function(u){var h={};for(var p in u)Array.isArray(u[p])?h[p.toLowerCase()]=u[p].map(function(_){return _.toLowerCase()}):h[p.toLowerCase()]=u[p];return h}(o.whiteList||o.allowList):o.whiteList=t.whiteList,o.onTag=o.onTag||t.onTag,o.onTagAttr=o.onTagAttr||t.onTagAttr,o.onIgnoreTag=o.onIgnoreTag||t.onIgnoreTag,o.onIgnoreTagAttr=o.onIgnoreTagAttr||t.onIgnoreTagAttr,o.safeAttrValue=o.safeAttrValue||t.safeAttrValue,o.escapeHtml=o.escapeHtml||t.escapeHtml,this.options=o,o.css===!1?this.cssFilter=!1:(o.css=o.css||{},this.cssFilter=new e(o.css))}c.prototype.process=function(o){if(!(o=(o=o||"").toString()))return"";var u=this.options,h=u.whiteList,p=u.onTag,_=u.onIgnoreTag,m=u.onTagAttr,g=u.onIgnoreTagAttr,k=u.safeAttrValue,w=u.escapeHtml,v=this.cssFilter;u.stripBlankChar&&(o=t.stripBlankChar(o)),u.allowCommentTag||(o=t.stripCommentTag(o));var b=!1;u.stripIgnoreTagBody&&(b=t.StripTagBody(u.stripIgnoreTagBody,_),_=b.onIgnoreTag);var y=n(o,function(S,j,O,x,E){var C={sourcePosition:S,position:j,isClosing:E,isWhite:Object.prototype.hasOwnProperty.call(h,O)},T=p(O,x,C);if(!a(T))return T;if(C.isWhite){if(C.isClosing)return"</"+O+">";var D=function(z){var H=l.spaceIndex(z);if(H===-1)return{html:"",closing:z[z.length-2]==="/"};var P=(z=l.trim(z.slice(H+1,-1)))[z.length-1]==="/";return P&&(z=l.trim(z.slice(0,-1))),{html:z,closing:P}}(x),$=h[O],N=s(D.html,function(z,H){var P=l.indexOf($,z)!==-1,V=m(O,z,H,P);return a(V)?P?(H=k(O,z,H,v))?z+'="'+H+'"':z:a(V=g(O,z,H,P))?void 0:V:V});return x="<"+O,N&&(x+=" "+N),D.closing&&(x+=" /"),x+=">"}return a(T=_(O,x,C))?w(x):T},w);return b&&(y=b.remove(y)),y},d.exports=c},function(d,f,i){d.exports=i(139)},function(d,f,i){var e=i(1),t=i(147),r=i(151),n=i(152),s=i(160),l=i(174),a=i(187),c=i(63),o=i(189),u={default:i(192),zero:i(193),commonmark:i(194)},h=/^(vbscript|javascript|file|data):/,p=/^data:image\/(gif|png|jpeg|webp);/;function _(v){var b=v.trim().toLowerCase();return!h.test(b)||!!p.test(b)}var m=["http:","https:","mailto:"];function g(v){var b=c.parse(v,!0);if(b.hostname&&(!b.protocol||m.indexOf(b.protocol)>=0))try{b.hostname=o.toASCII(b.hostname)}catch{}return c.encode(c.format(b))}function k(v){var b=c.parse(v,!0);if(b.hostname&&(!b.protocol||m.indexOf(b.protocol)>=0))try{b.hostname=o.toUnicode(b.hostname)}catch{}return c.decode(c.format(b))}function w(v,b){if(!(this instanceof w))return new w(v,b);b||e.isString(v)||(b=v||{},v="default"),this.inline=new l,this.block=new s,this.core=new n,this.renderer=new r,this.linkify=new a,this.validateLink=_,this.normalizeLink=g,this.normalizeLinkText=k,this.utils=e,this.helpers=e.assign({},t),this.options={},this.configure(v),b&&this.set(b)}w.prototype.set=function(v){return e.assign(this.options,v),this},w.prototype.configure=function(v){var b,y=this;if(e.isString(v)&&!(v=u[b=v]))throw new Error('Wrong `markdown-it` preset "'+b+'", check name');if(!v)throw new Error("Wrong `markdown-it` preset, can't be empty");return v.options&&y.set(v.options),v.components&&Object.keys(v.components).forEach(function(S){v.components[S].rules&&y[S].ruler.enableOnly(v.components[S].rules),v.components[S].rules2&&y[S].ruler2.enableOnly(v.components[S].rules2)}),this},w.prototype.enable=function(v,b){var y=[];Array.isArray(v)||(v=[v]),["core","block","inline"].forEach(function(j){y=y.concat(this[j].ruler.enable(v,!0))},this),y=y.concat(this.inline.ruler2.enable(v,!0));var S=v.filter(function(j){return y.indexOf(j)<0});if(S.length&&!b)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+S);return this},w.prototype.disable=function(v,b){var y=[];Array.isArray(v)||(v=[v]),["core","block","inline"].forEach(function(j){y=y.concat(this[j].ruler.disable(v,!0))},this),y=y.concat(this.inline.ruler2.disable(v,!0));var S=v.filter(function(j){return y.indexOf(j)<0});if(S.length&&!b)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+S);return this},w.prototype.use=function(v){var b=[this].concat(Array.prototype.slice.call(arguments,1));return v.apply(v,b),this},w.prototype.parse=function(v,b){if(typeof v!="string")throw new Error("Input data should be a String");var y=new this.core.State(v,this,b);return this.core.process(y),y.tokens},w.prototype.render=function(v,b){return b=b||{},this.renderer.render(this.parse(v,b),this.options,b)},w.prototype.parseInline=function(v,b){var y=new this.core.State(v,this,b);return y.inlineMode=!0,this.core.process(y),y.tokens},w.prototype.renderInline=function(v,b){return b=b||{},this.renderer.render(this.parseInline(v,b),this.options,b)},d.exports=w},function(d){d.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},function(d,f,i){var e={};function t(r,n,s){var l,a,c,o,u,h="";for(typeof n!="string"&&(s=n,n=t.defaultChars),s===void 0&&(s=!0),u=function(p){var _,m,g=e[p];if(g)return g;for(g=e[p]=[],_=0;_<128;_++)m=String.fromCharCode(_),/^[0-9a-z]$/i.test(m)?g.push(m):g.push("%"+("0"+_.toString(16).toUpperCase()).slice(-2));for(_=0;_<p.length;_++)g[p.charCodeAt(_)]=p[_];return g}(n),l=0,a=r.length;l<a;l++)if(c=r.charCodeAt(l),s&&c===37&&l+2<a&&/^[0-9a-f]{2}$/i.test(r.slice(l+1,l+3)))h+=r.slice(l,l+3),l+=2;else if(c<128)h+=u[c];else if(c>=55296&&c<=57343){if(c>=55296&&c<=56319&&l+1<a&&(o=r.charCodeAt(l+1))>=56320&&o<=57343){h+=encodeURIComponent(r[l]+r[l+1]),l++;continue}h+="%EF%BF%BD"}else h+=encodeURIComponent(r[l]);return h}t.defaultChars=";/?:@&=+$,-_.!~*'()#",t.componentChars="-_.!~*'()",d.exports=t},function(d,f,i){var e={};function t(r,n){var s;return typeof n!="string"&&(n=t.defaultChars),s=function(l){var a,c,o=e[l];if(o)return o;for(o=e[l]=[],a=0;a<128;a++)c=String.fromCharCode(a),o.push(c);for(a=0;a<l.length;a++)o[c=l.charCodeAt(a)]="%"+("0"+c.toString(16).toUpperCase()).slice(-2);return o}(n),r.replace(/(%[a-f0-9]{2})+/gi,function(l){var a,c,o,u,h,p,_,m="";for(a=0,c=l.length;a<c;a+=3)(o=parseInt(l.slice(a+1,a+3),16))<128?m+=s[o]:(224&o)==192&&a+3<c&&(192&(u=parseInt(l.slice(a+4,a+6),16)))==128?(m+=(_=o<<6&1984|63&u)<128?"��":String.fromCharCode(_),a+=3):(240&o)==224&&a+6<c&&(u=parseInt(l.slice(a+4,a+6),16),h=parseInt(l.slice(a+7,a+9),16),(192&u)==128&&(192&h)==128)?(m+=(_=o<<12&61440|u<<6&4032|63&h)<2048||_>=55296&&_<=57343?"���":String.fromCharCode(_),a+=6):(248&o)==240&&a+9<c&&(u=parseInt(l.slice(a+4,a+6),16),h=parseInt(l.slice(a+7,a+9),16),p=parseInt(l.slice(a+10,a+12),16),(192&u)==128&&(192&h)==128&&(192&p)==128)?((_=o<<18&1835008|u<<12&258048|h<<6&4032|63&p)<65536||_>1114111?m+="����":(_-=65536,m+=String.fromCharCode(55296+(_>>10),56320+(1023&_))),a+=9):m+="�";return m})}t.defaultChars=";/?:@&=+$,#",t.componentChars="",d.exports=t},function(d,f,i){d.exports=function(e){var t="";return t+=e.protocol||"",t+=e.slashes?"//":"",t+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?t+="["+e.hostname+"]":t+=e.hostname||"",t+=e.port?":"+e.port:"",t+=e.pathname||"",t+=e.search||"",t+=e.hash||""}},function(d,f,i){function e(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var t=/^([a-z0-9.+-]+:)/i,r=/:[0-9]*$/,n=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,s=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r",`
`,"	"]),l=["'"].concat(s),a=["%","/","?",";","#"].concat(l),c=["/","?","#"],o=/^[+a-z0-9A-Z_-]{0,63}$/,u=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,h={javascript:!0,"javascript:":!0},p={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};e.prototype.parse=function(_,m){var g,k,w,v,b,y=_;if(y=y.trim(),!m&&_.split("#").length===1){var S=n.exec(y);if(S)return this.pathname=S[1],S[2]&&(this.search=S[2]),this}var j=t.exec(y);if(j&&(w=(j=j[0]).toLowerCase(),this.protocol=j,y=y.substr(j.length)),(m||j||y.match(/^\/\/[^@\/]+@[^@\/]+/))&&(!(b=y.substr(0,2)==="//")||j&&h[j]||(y=y.substr(2),this.slashes=!0)),!h[j]&&(b||j&&!p[j])){var O,x,E=-1;for(g=0;g<c.length;g++)(v=y.indexOf(c[g]))!==-1&&(E===-1||v<E)&&(E=v);for((x=E===-1?y.lastIndexOf("@"):y.lastIndexOf("@",E))!==-1&&(O=y.slice(0,x),y=y.slice(x+1),this.auth=O),E=-1,g=0;g<a.length;g++)(v=y.indexOf(a[g]))!==-1&&(E===-1||v<E)&&(E=v);E===-1&&(E=y.length),y[E-1]===":"&&E--;var C=y.slice(0,E);y=y.slice(E),this.parseHost(C),this.hostname=this.hostname||"";var T=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!T){var D=this.hostname.split(/\./);for(g=0,k=D.length;g<k;g++){var $=D[g];if($&&!$.match(o)){for(var N="",z=0,H=$.length;z<H;z++)$.charCodeAt(z)>127?N+="x":N+=$[z];if(!N.match(o)){var P=D.slice(0,g),V=D.slice(g+1),W=$.match(u);W&&(P.push(W[1]),V.unshift(W[2])),V.length&&(y=V.join(".")+y),this.hostname=P.join(".");break}}}}this.hostname.length>255&&(this.hostname=""),T&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var F=y.indexOf("#");F!==-1&&(this.hash=y.substr(F),y=y.slice(0,F));var L=y.indexOf("?");return L!==-1&&(this.search=y.substr(L),y=y.slice(0,L)),y&&(this.pathname=y),p[w]&&this.hostname&&!this.pathname&&(this.pathname=""),this},e.prototype.parseHost=function(_){var m=r.exec(_);m&&((m=m[0])!==":"&&(this.port=m.substr(1)),_=_.substr(0,_.length-m.length)),_&&(this.hostname=_)},d.exports=function(_,m){if(_&&_ instanceof e)return _;var g=new e;return g.parse(_,m),g}},function(d,f,i){f.Any=i(64),f.Cc=i(65),f.Cf=i(146),f.P=i(40),f.Z=i(66)},function(d,f){d.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},function(d,f,i){f.parseLinkLabel=i(148),f.parseLinkDestination=i(149),f.parseLinkTitle=i(150)},function(d,f,i){d.exports=function(e,t,r){var n,s,l,a,c=-1,o=e.posMax,u=e.pos;for(e.pos=t+1,n=1;e.pos<o;){if((l=e.src.charCodeAt(e.pos))===93&&--n===0){s=!0;break}if(a=e.pos,e.md.inline.skipToken(e),l===91){if(a===e.pos-1)n++;else if(r)return e.pos=u,-1}}return s&&(c=e.pos),e.pos=u,c}},function(d,f,i){var e=i(1).unescapeAll;d.exports=function(t,r,n){var s,l,a=r,c={ok:!1,pos:0,lines:0,str:""};if(t.charCodeAt(r)===60){for(r++;r<n;){if((s=t.charCodeAt(r))===10)return c;if(s===62)return c.pos=r+1,c.str=e(t.slice(a+1,r)),c.ok=!0,c;s===92&&r+1<n?r+=2:r++}return c}for(l=0;r<n&&(s=t.charCodeAt(r))!==32&&!(s<32||s===127);)if(s===92&&r+1<n)r+=2;else{if(s===40&&l++,s===41){if(l===0)break;l--}r++}return a===r||l!==0||(c.str=e(t.slice(a,r)),c.lines=0,c.pos=r,c.ok=!0),c}},function(d,f,i){var e=i(1).unescapeAll;d.exports=function(t,r,n){var s,l,a=0,c=r,o={ok:!1,pos:0,lines:0,str:""};if(r>=n||(l=t.charCodeAt(r))!==34&&l!==39&&l!==40)return o;for(r++,l===40&&(l=41);r<n;){if((s=t.charCodeAt(r))===l)return o.pos=r+1,o.lines=a,o.str=e(t.slice(c+1,r)),o.ok=!0,o;s===10?a++:s===92&&r+1<n&&(r++,t.charCodeAt(r)===10&&a++),r++}return o}},function(d,f,i){var e=i(1).assign,t=i(1).unescapeAll,r=i(1).escapeHtml,n={};function s(){this.rules=e({},n)}n.code_inline=function(l,a,c,o,u){var h=l[a];return"<code"+u.renderAttrs(h)+">"+r(l[a].content)+"</code>"},n.code_block=function(l,a,c,o,u){var h=l[a];return"<pre"+u.renderAttrs(h)+"><code>"+r(l[a].content)+`</code></pre>
`},n.fence=function(l,a,c,o,u){var h,p,_,m,g=l[a],k=g.info?t(g.info).trim():"",w="";return k&&(w=k.split(/\s+/g)[0]),(h=c.highlight&&c.highlight(g.content,w)||r(g.content)).indexOf("<pre")===0?h+`
`:k?(p=g.attrIndex("class"),_=g.attrs?g.attrs.slice():[],p<0?_.push(["class",c.langPrefix+w]):_[p][1]+=" "+c.langPrefix+w,m={attrs:_},"<pre><code"+u.renderAttrs(m)+">"+h+`</code></pre>
`):"<pre><code"+u.renderAttrs(g)+">"+h+`</code></pre>
`},n.image=function(l,a,c,o,u){var h=l[a];return h.attrs[h.attrIndex("alt")][1]=u.renderInlineAsText(h.children,c,o),u.renderToken(l,a,c)},n.hardbreak=function(l,a,c){return c.xhtmlOut?`<br />
`:`<br>
`},n.softbreak=function(l,a,c){return c.breaks?c.xhtmlOut?`<br />
`:`<br>
`:`
`},n.text=function(l,a){return r(l[a].content)},n.html_block=function(l,a){return l[a].content},n.html_inline=function(l,a){return l[a].content},s.prototype.renderAttrs=function(l){var a,c,o;if(!l.attrs)return"";for(o="",a=0,c=l.attrs.length;a<c;a++)o+=" "+r(l.attrs[a][0])+'="'+r(l.attrs[a][1])+'"';return o},s.prototype.renderToken=function(l,a,c){var o,u="",h=!1,p=l[a];return p.hidden?"":(p.block&&p.nesting!==-1&&a&&l[a-1].hidden&&(u+=`
`),u+=(p.nesting===-1?"</":"<")+p.tag,u+=this.renderAttrs(p),p.nesting===0&&c.xhtmlOut&&(u+=" /"),p.block&&(h=!0,p.nesting===1&&a+1<l.length&&((o=l[a+1]).type==="inline"||o.hidden||o.nesting===-1&&o.tag===p.tag)&&(h=!1)),u+=h?`>
`:">")},s.prototype.renderInline=function(l,a,c){for(var o,u="",h=this.rules,p=0,_=l.length;p<_;p++)h[o=l[p].type]!==void 0?u+=h[o](l,p,a,c,this):u+=this.renderToken(l,p,a);return u},s.prototype.renderInlineAsText=function(l,a,c){for(var o="",u=0,h=l.length;u<h;u++)l[u].type==="text"?o+=l[u].content:l[u].type==="image"&&(o+=this.renderInlineAsText(l[u].children,a,c));return o},s.prototype.render=function(l,a,c){var o,u,h,p="",_=this.rules;for(o=0,u=l.length;o<u;o++)(h=l[o].type)==="inline"?p+=this.renderInline(l[o].children,a,c):_[h]!==void 0?p+=_[l[o].type](l,o,a,c,this):p+=this.renderToken(l,o,a,c);return p},d.exports=s},function(d,f,i){var e=i(41),t=[["normalize",i(153)],["block",i(154)],["inline",i(155)],["linkify",i(156)],["replacements",i(157)],["smartquotes",i(158)]];function r(){this.ruler=new e;for(var n=0;n<t.length;n++)this.ruler.push(t[n][0],t[n][1])}r.prototype.process=function(n){var s,l,a;for(s=0,l=(a=this.ruler.getRules("")).length;s<l;s++)a[s](n)},r.prototype.State=i(159),d.exports=r},function(d,f,i){var e=/\r\n?|\n/g,t=/\0/g;d.exports=function(r){var n;n=(n=r.src.replace(e,`
`)).replace(t,"�"),r.src=n}},function(d,f,i){d.exports=function(e){var t;e.inlineMode?((t=new e.Token("inline","",0)).content=e.src,t.map=[0,1],t.children=[],e.tokens.push(t)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},function(d,f,i){d.exports=function(e){var t,r,n,s=e.tokens;for(r=0,n=s.length;r<n;r++)(t=s[r]).type==="inline"&&e.md.inline.parse(t.content,e.md,e.env,t.children)}},function(d,f,i){var e=i(1).arrayReplaceAt;function t(r){return/^<\/a\s*>/i.test(r)}d.exports=function(r){var n,s,l,a,c,o,u,h,p,_,m,g,k,w,v,b,y,S,j=r.tokens;if(r.md.options.linkify){for(s=0,l=j.length;s<l;s++)if(j[s].type==="inline"&&r.md.linkify.pretest(j[s].content))for(k=0,n=(a=j[s].children).length-1;n>=0;n--)if((o=a[n]).type!=="link_close"){if(o.type==="html_inline"&&(S=o.content,/^<a[>\s]/i.test(S)&&k>0&&k--,t(o.content)&&k++),!(k>0)&&o.type==="text"&&r.md.linkify.test(o.content)){for(p=o.content,y=r.md.linkify.match(p),u=[],g=o.level,m=0,h=0;h<y.length;h++)w=y[h].url,v=r.md.normalizeLink(w),r.md.validateLink(v)&&(b=y[h].text,b=y[h].schema?y[h].schema!=="mailto:"||/^mailto:/i.test(b)?r.md.normalizeLinkText(b):r.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):r.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,""),(_=y[h].index)>m&&((c=new r.Token("text","",0)).content=p.slice(m,_),c.level=g,u.push(c)),(c=new r.Token("link_open","a",1)).attrs=[["href",v]],c.level=g++,c.markup="linkify",c.info="auto",u.push(c),(c=new r.Token("text","",0)).content=b,c.level=g,u.push(c),(c=new r.Token("link_close","a",-1)).level=--g,c.markup="linkify",c.info="auto",u.push(c),m=y[h].lastIndex);m<p.length&&((c=new r.Token("text","",0)).content=p.slice(m),c.level=g,u.push(c)),j[s].children=a=e(a,n,u)}}else for(n--;a[n].level!==o.level&&a[n].type!=="link_open";)n--}}},function(d,f,i){var e=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,t=/\((c|tm|r|p)\)/i,r=/\((c|tm|r|p)\)/gi,n={c:"©",r:"®",p:"§",tm:"™"};function s(c,o){return n[o.toLowerCase()]}function l(c){var o,u,h=0;for(o=c.length-1;o>=0;o--)(u=c[o]).type!=="text"||h||(u.content=u.content.replace(r,s)),u.type==="link_open"&&u.info==="auto"&&h--,u.type==="link_close"&&u.info==="auto"&&h++}function a(c){var o,u,h=0;for(o=c.length-1;o>=0;o--)(u=c[o]).type!=="text"||h||e.test(u.content)&&(u.content=u.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1—$2").replace(/(^|\s)--(\s|$)/gm,"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1–$2")),u.type==="link_open"&&u.info==="auto"&&h--,u.type==="link_close"&&u.info==="auto"&&h++}d.exports=function(c){var o;if(c.md.options.typographer)for(o=c.tokens.length-1;o>=0;o--)c.tokens[o].type==="inline"&&(t.test(c.tokens[o].content)&&l(c.tokens[o].children),e.test(c.tokens[o].content)&&a(c.tokens[o].children))}},function(d,f,i){var e=i(1).isWhiteSpace,t=i(1).isPunctChar,r=i(1).isMdAsciiPunct,n=/['"]/,s=/['"]/g;function l(c,o,u){return c.substr(0,o)+u+c.substr(o+1)}function a(c,o){var u,h,p,_,m,g,k,w,v,b,y,S,j,O,x,E,C,T,D,$,N;for(D=[],u=0;u<c.length;u++){for(h=c[u],k=c[u].level,C=D.length-1;C>=0&&!(D[C].level<=k);C--);if(D.length=C+1,h.type==="text"){m=0,g=(p=h.content).length;e:for(;m<g&&(s.lastIndex=m,_=s.exec(p));){if(x=E=!0,m=_.index+1,T=_[0]==="'",v=32,_.index-1>=0)v=p.charCodeAt(_.index-1);else for(C=u-1;C>=0&&c[C].type!=="softbreak"&&c[C].type!=="hardbreak";C--)if(c[C].type==="text"){v=c[C].content.charCodeAt(c[C].content.length-1);break}if(b=32,m<g)b=p.charCodeAt(m);else for(C=u+1;C<c.length&&c[C].type!=="softbreak"&&c[C].type!=="hardbreak";C++)if(c[C].type==="text"){b=c[C].content.charCodeAt(0);break}if(y=r(v)||t(String.fromCharCode(v)),S=r(b)||t(String.fromCharCode(b)),j=e(v),(O=e(b))?x=!1:S&&(j||y||(x=!1)),j?E=!1:y&&(O||S||(E=!1)),b===34&&_[0]==='"'&&v>=48&&v<=57&&(E=x=!1),x&&E&&(x=!1,E=S),x||E){if(E){for(C=D.length-1;C>=0&&(w=D[C],!(D[C].level<k));C--)if(w.single===T&&D[C].level===k){w=D[C],T?($=o.md.options.quotes[2],N=o.md.options.quotes[3]):($=o.md.options.quotes[0],N=o.md.options.quotes[1]),h.content=l(h.content,_.index,N),c[w.token].content=l(c[w.token].content,w.pos,$),m+=N.length-1,w.token===u&&(m+=$.length-1),g=(p=h.content).length,D.length=C;continue e}}x?D.push({token:u,pos:_.index,single:T,level:k}):E&&T&&(h.content=l(h.content,_.index,"’"))}else T&&(h.content=l(h.content,_.index,"’"))}}}}d.exports=function(c){var o;if(c.md.options.typographer)for(o=c.tokens.length-1;o>=0;o--)c.tokens[o].type==="inline"&&n.test(c.tokens[o].content)&&a(c.tokens[o].children,c)}},function(d,f,i){var e=i(42);function t(r,n,s){this.src=r,this.env=s,this.tokens=[],this.inlineMode=!1,this.md=n}t.prototype.Token=e,d.exports=t},function(d,f,i){var e=i(41),t=[["table",i(161),["paragraph","reference"]],["code",i(162)],["fence",i(163),["paragraph","reference","blockquote","list"]],["blockquote",i(164),["paragraph","reference","blockquote","list"]],["hr",i(165),["paragraph","reference","blockquote","list"]],["list",i(166),["paragraph","reference","blockquote"]],["reference",i(167)],["heading",i(168),["paragraph","reference","blockquote"]],["lheading",i(169)],["html_block",i(170),["paragraph","reference","blockquote"]],["paragraph",i(172)]];function r(){this.ruler=new e;for(var n=0;n<t.length;n++)this.ruler.push(t[n][0],t[n][1],{alt:(t[n][2]||[]).slice()})}r.prototype.tokenize=function(n,s,l){for(var a,c=this.ruler.getRules(""),o=c.length,u=s,h=!1,p=n.md.options.maxNesting;u<l&&(n.line=u=n.skipEmptyLines(u),!(u>=l))&&!(n.sCount[u]<n.blkIndent);){if(n.level>=p){n.line=l;break}for(a=0;a<o&&!c[a](n,u,l,!1);a++);n.tight=!h,n.isEmpty(n.line-1)&&(h=!0),(u=n.line)<l&&n.isEmpty(u)&&(h=!0,u++,n.line=u)}},r.prototype.parse=function(n,s,l,a){var c;n&&(c=new this.State(n,s,l,a),this.tokenize(c,c.line,c.lineMax))},r.prototype.State=i(173),d.exports=r},function(d,f,i){var e=i(1).isSpace;function t(n,s){var l=n.bMarks[s]+n.blkIndent,a=n.eMarks[s];return n.src.substr(l,a-l)}function r(n){var s,l=[],a=0,c=n.length,o=0,u=0,h=!1,p=0;for(s=n.charCodeAt(a);a<c;)s===96?h?(h=!1,p=a):o%2==0&&(h=!0,p=a):s!==124||o%2!=0||h||(l.push(n.substring(u,a)),u=a+1),s===92?o++:o=0,++a===c&&h&&(h=!1,a=p+1),s=n.charCodeAt(a);return l.push(n.substring(u)),l}d.exports=function(n,s,l,a){var c,o,u,h,p,_,m,g,k,w,v,b;if(s+2>l||(p=s+1,n.sCount[p]<n.blkIndent)||n.sCount[p]-n.blkIndent>=4||(u=n.bMarks[p]+n.tShift[p])>=n.eMarks[p]||(c=n.src.charCodeAt(u++))!==124&&c!==45&&c!==58)return!1;for(;u<n.eMarks[p];){if((c=n.src.charCodeAt(u))!==124&&c!==45&&c!==58&&!e(c))return!1;u++}for(_=(o=t(n,s+1)).split("|"),k=[],h=0;h<_.length;h++){if(!(w=_[h].trim())){if(h===0||h===_.length-1)continue;return!1}if(!/^:?-+:?$/.test(w))return!1;w.charCodeAt(w.length-1)===58?k.push(w.charCodeAt(0)===58?"center":"right"):w.charCodeAt(0)===58?k.push("left"):k.push("")}if((o=t(n,s).trim()).indexOf("|")===-1||n.sCount[s]-n.blkIndent>=4||(m=(_=r(o.replace(/^\||\|$/g,""))).length)>k.length)return!1;if(a)return!0;for((g=n.push("table_open","table",1)).map=v=[s,0],(g=n.push("thead_open","thead",1)).map=[s,s+1],(g=n.push("tr_open","tr",1)).map=[s,s+1],h=0;h<_.length;h++)(g=n.push("th_open","th",1)).map=[s,s+1],k[h]&&(g.attrs=[["style","text-align:"+k[h]]]),(g=n.push("inline","",0)).content=_[h].trim(),g.map=[s,s+1],g.children=[],g=n.push("th_close","th",-1);for(g=n.push("tr_close","tr",-1),g=n.push("thead_close","thead",-1),(g=n.push("tbody_open","tbody",1)).map=b=[s+2,0],p=s+2;p<l&&!(n.sCount[p]<n.blkIndent)&&(o=t(n,p).trim()).indexOf("|")!==-1&&!(n.sCount[p]-n.blkIndent>=4);p++){for(_=r(o.replace(/^\||\|$/g,"")),g=n.push("tr_open","tr",1),h=0;h<m;h++)g=n.push("td_open","td",1),k[h]&&(g.attrs=[["style","text-align:"+k[h]]]),(g=n.push("inline","",0)).content=_[h]?_[h].trim():"",g.children=[],g=n.push("td_close","td",-1);g=n.push("tr_close","tr",-1)}return g=n.push("tbody_close","tbody",-1),g=n.push("table_close","table",-1),v[1]=b[1]=p,n.line=p,!0}},function(d,f,i){d.exports=function(e,t,r){var n,s,l;if(e.sCount[t]-e.blkIndent<4)return!1;for(s=n=t+1;n<r;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;s=++n}return e.line=s,(l=e.push("code_block","code",0)).content=e.getLines(t,s,4+e.blkIndent,!0),l.map=[t,e.line],!0}},function(d,f,i){d.exports=function(e,t,r,n){var s,l,a,c,o,u,h,p=!1,_=e.bMarks[t]+e.tShift[t],m=e.eMarks[t];if(e.sCount[t]-e.blkIndent>=4||_+3>m||(s=e.src.charCodeAt(_))!==126&&s!==96||(o=_,(l=(_=e.skipChars(_,s))-o)<3)||(h=e.src.slice(o,_),a=e.src.slice(_,m),s===96&&a.indexOf(String.fromCharCode(s))>=0))return!1;if(n)return!0;for(c=t;!(++c>=r)&&!((_=o=e.bMarks[c]+e.tShift[c])<(m=e.eMarks[c])&&e.sCount[c]<e.blkIndent);)if(e.src.charCodeAt(_)===s&&!(e.sCount[c]-e.blkIndent>=4||(_=e.skipChars(_,s))-o<l||(_=e.skipSpaces(_))<m)){p=!0;break}return l=e.sCount[t],e.line=c+(p?1:0),(u=e.push("fence","code",0)).info=a,u.content=e.getLines(t+1,c,l,!0),u.markup=h,u.map=[t,e.line],!0}},function(d,f,i){var e=i(1).isSpace;d.exports=function(t,r,n,s){var l,a,c,o,u,h,p,_,m,g,k,w,v,b,y,S,j,O,x,E,C=t.lineMax,T=t.bMarks[r]+t.tShift[r],D=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||t.src.charCodeAt(T++)!==62)return!1;if(s)return!0;for(o=m=t.sCount[r]+T-(t.bMarks[r]+t.tShift[r]),t.src.charCodeAt(T)===32?(T++,o++,m++,l=!1,S=!0):t.src.charCodeAt(T)===9?(S=!0,(t.bsCount[r]+m)%4==3?(T++,o++,m++,l=!1):l=!0):S=!1,g=[t.bMarks[r]],t.bMarks[r]=T;T<D&&(a=t.src.charCodeAt(T),e(a));)a===9?m+=4-(m+t.bsCount[r]+(l?1:0))%4:m++,T++;for(k=[t.bsCount[r]],t.bsCount[r]=t.sCount[r]+1+(S?1:0),h=T>=D,b=[t.sCount[r]],t.sCount[r]=m-o,y=[t.tShift[r]],t.tShift[r]=T-t.bMarks[r],O=t.md.block.ruler.getRules("blockquote"),v=t.parentType,t.parentType="blockquote",E=!1,_=r+1;_<n&&(t.sCount[_]<t.blkIndent&&(E=!0),!((T=t.bMarks[_]+t.tShift[_])>=(D=t.eMarks[_])));_++)if(t.src.charCodeAt(T++)!==62||E){if(h)break;for(j=!1,c=0,u=O.length;c<u;c++)if(O[c](t,_,n,!0)){j=!0;break}if(j){t.lineMax=_,t.blkIndent!==0&&(g.push(t.bMarks[_]),k.push(t.bsCount[_]),y.push(t.tShift[_]),b.push(t.sCount[_]),t.sCount[_]-=t.blkIndent);break}g.push(t.bMarks[_]),k.push(t.bsCount[_]),y.push(t.tShift[_]),b.push(t.sCount[_]),t.sCount[_]=-1}else{for(o=m=t.sCount[_]+T-(t.bMarks[_]+t.tShift[_]),t.src.charCodeAt(T)===32?(T++,o++,m++,l=!1,S=!0):t.src.charCodeAt(T)===9?(S=!0,(t.bsCount[_]+m)%4==3?(T++,o++,m++,l=!1):l=!0):S=!1,g.push(t.bMarks[_]),t.bMarks[_]=T;T<D&&(a=t.src.charCodeAt(T),e(a));)a===9?m+=4-(m+t.bsCount[_]+(l?1:0))%4:m++,T++;h=T>=D,k.push(t.bsCount[_]),t.bsCount[_]=t.sCount[_]+1+(S?1:0),b.push(t.sCount[_]),t.sCount[_]=m-o,y.push(t.tShift[_]),t.tShift[_]=T-t.bMarks[_]}for(w=t.blkIndent,t.blkIndent=0,(x=t.push("blockquote_open","blockquote",1)).markup=">",x.map=p=[r,0],t.md.block.tokenize(t,r,_),(x=t.push("blockquote_close","blockquote",-1)).markup=">",t.lineMax=C,t.parentType=v,p[1]=t.line,c=0;c<y.length;c++)t.bMarks[c+r]=g[c],t.tShift[c+r]=y[c],t.sCount[c+r]=b[c],t.bsCount[c+r]=k[c];return t.blkIndent=w,!0}},function(d,f,i){var e=i(1).isSpace;d.exports=function(t,r,n,s){var l,a,c,o,u=t.bMarks[r]+t.tShift[r],h=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||(l=t.src.charCodeAt(u++))!==42&&l!==45&&l!==95)return!1;for(a=1;u<h;){if((c=t.src.charCodeAt(u++))!==l&&!e(c))return!1;c===l&&a++}return!(a<3)&&(s||(t.line=r+1,(o=t.push("hr","hr",0)).map=[r,t.line],o.markup=Array(a+1).join(String.fromCharCode(l))),!0)}},function(d,f,i){var e=i(1).isSpace;function t(n,s){var l,a,c,o;return a=n.bMarks[s]+n.tShift[s],c=n.eMarks[s],(l=n.src.charCodeAt(a++))!==42&&l!==45&&l!==43||a<c&&(o=n.src.charCodeAt(a),!e(o))?-1:a}function r(n,s){var l,a=n.bMarks[s]+n.tShift[s],c=a,o=n.eMarks[s];if(c+1>=o||(l=n.src.charCodeAt(c++))<48||l>57)return-1;for(;;){if(c>=o)return-1;if(!((l=n.src.charCodeAt(c++))>=48&&l<=57)){if(l===41||l===46)break;return-1}if(c-a>=10)return-1}return c<o&&(l=n.src.charCodeAt(c),!e(l))?-1:c}d.exports=function(n,s,l,a){var c,o,u,h,p,_,m,g,k,w,v,b,y,S,j,O,x,E,C,T,D,$,N,z,H,P,V,W,F=!1,L=!0;if(n.sCount[s]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[s]-n.listIndent>=4&&n.sCount[s]<n.blkIndent)return!1;if(a&&n.parentType==="paragraph"&&n.tShift[s]>=n.blkIndent&&(F=!0),(N=r(n,s))>=0){if(m=!0,H=n.bMarks[s]+n.tShift[s],y=Number(n.src.substr(H,N-H-1)),F&&y!==1)return!1}else{if(!((N=t(n,s))>=0))return!1;m=!1}if(F&&n.skipSpaces(N)>=n.eMarks[s])return!1;if(b=n.src.charCodeAt(N-1),a)return!0;for(v=n.tokens.length,m?(W=n.push("ordered_list_open","ol",1),y!==1&&(W.attrs=[["start",y]])):W=n.push("bullet_list_open","ul",1),W.map=w=[s,0],W.markup=String.fromCharCode(b),j=s,z=!1,V=n.md.block.ruler.getRules("list"),E=n.parentType,n.parentType="list";j<l;){for($=N,S=n.eMarks[j],_=O=n.sCount[j]+N-(n.bMarks[s]+n.tShift[s]);$<S;){if((c=n.src.charCodeAt($))===9)O+=4-(O+n.bsCount[j])%4;else{if(c!==32)break;O++}$++}if((p=(o=$)>=S?1:O-_)>4&&(p=1),h=_+p,(W=n.push("list_item_open","li",1)).markup=String.fromCharCode(b),W.map=g=[s,0],D=n.tight,T=n.tShift[s],C=n.sCount[s],x=n.listIndent,n.listIndent=n.blkIndent,n.blkIndent=h,n.tight=!0,n.tShift[s]=o-n.bMarks[s],n.sCount[s]=O,o>=S&&n.isEmpty(s+1)?n.line=Math.min(n.line+2,l):n.md.block.tokenize(n,s,l,!0),n.tight&&!z||(L=!1),z=n.line-s>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=x,n.tShift[s]=T,n.sCount[s]=C,n.tight=D,(W=n.push("list_item_close","li",-1)).markup=String.fromCharCode(b),j=s=n.line,g[1]=j,o=n.bMarks[s],j>=l||n.sCount[j]<n.blkIndent||n.sCount[s]-n.blkIndent>=4)break;for(P=!1,u=0,k=V.length;u<k;u++)if(V[u](n,j,l,!0)){P=!0;break}if(P)break;if(m){if((N=r(n,j))<0)break}else if((N=t(n,j))<0)break;if(b!==n.src.charCodeAt(N-1))break}return(W=m?n.push("ordered_list_close","ol",-1):n.push("bullet_list_close","ul",-1)).markup=String.fromCharCode(b),w[1]=j,n.line=j,n.parentType=E,L&&function(G,Z){var K,Q,q=G.level+2;for(K=Z+2,Q=G.tokens.length-2;K<Q;K++)G.tokens[K].level===q&&G.tokens[K].type==="paragraph_open"&&(G.tokens[K+2].hidden=!0,G.tokens[K].hidden=!0,K+=2)}(n,v),!0}},function(d,f,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n,s,l){var a,c,o,u,h,p,_,m,g,k,w,v,b,y,S,j,O=0,x=r.bMarks[n]+r.tShift[n],E=r.eMarks[n],C=n+1;if(r.sCount[n]-r.blkIndent>=4||r.src.charCodeAt(x)!==91)return!1;for(;++x<E;)if(r.src.charCodeAt(x)===93&&r.src.charCodeAt(x-1)!==92){if(x+1===E||r.src.charCodeAt(x+1)!==58)return!1;break}for(u=r.lineMax,S=r.md.block.ruler.getRules("reference"),k=r.parentType,r.parentType="reference";C<u&&!r.isEmpty(C);C++)if(!(r.sCount[C]-r.blkIndent>3||r.sCount[C]<0)){for(y=!1,p=0,_=S.length;p<_;p++)if(S[p](r,C,u,!0)){y=!0;break}if(y)break}for(E=(b=r.getLines(n,C,r.blkIndent,!1).trim()).length,x=1;x<E;x++){if((a=b.charCodeAt(x))===91)return!1;if(a===93){g=x;break}(a===10||a===92&&++x<E&&b.charCodeAt(x)===10)&&O++}if(g<0||b.charCodeAt(g+1)!==58)return!1;for(x=g+2;x<E;x++)if((a=b.charCodeAt(x))===10)O++;else if(!t(a))break;if(!(w=r.md.helpers.parseLinkDestination(b,x,E)).ok||(h=r.md.normalizeLink(w.str),!r.md.validateLink(h)))return!1;for(c=x=w.pos,o=O+=w.lines,v=x;x<E;x++)if((a=b.charCodeAt(x))===10)O++;else if(!t(a))break;for(w=r.md.helpers.parseLinkTitle(b,x,E),x<E&&v!==x&&w.ok?(j=w.str,x=w.pos,O+=w.lines):(j="",x=c,O=o);x<E&&(a=b.charCodeAt(x),t(a));)x++;if(x<E&&b.charCodeAt(x)!==10&&j)for(j="",x=c,O=o;x<E&&(a=b.charCodeAt(x),t(a));)x++;return!(x<E&&b.charCodeAt(x)!==10)&&!!(m=e(b.slice(1,g)))&&(l||(r.env.references===void 0&&(r.env.references={}),r.env.references[m]===void 0&&(r.env.references[m]={title:j,href:h}),r.parentType=k,r.line=n+O+1),!0)}},function(d,f,i){var e=i(1).isSpace;d.exports=function(t,r,n,s){var l,a,c,o,u=t.bMarks[r]+t.tShift[r],h=t.eMarks[r];if(t.sCount[r]-t.blkIndent>=4||(l=t.src.charCodeAt(u))!==35||u>=h)return!1;for(a=1,l=t.src.charCodeAt(++u);l===35&&u<h&&a<=6;)a++,l=t.src.charCodeAt(++u);return!(a>6||u<h&&!e(l))&&(s||(h=t.skipSpacesBack(h,u),(c=t.skipCharsBack(h,35,u))>u&&e(t.src.charCodeAt(c-1))&&(h=c),t.line=r+1,(o=t.push("heading_open","h"+String(a),1)).markup="########".slice(0,a),o.map=[r,t.line],(o=t.push("inline","",0)).content=t.src.slice(u,h).trim(),o.map=[r,t.line],o.children=[],(o=t.push("heading_close","h"+String(a),-1)).markup="########".slice(0,a)),!0)}},function(d,f,i){d.exports=function(e,t,r){var n,s,l,a,c,o,u,h,p,_,m=t+1,g=e.md.block.ruler.getRules("paragraph");if(e.sCount[t]-e.blkIndent>=4)return!1;for(_=e.parentType,e.parentType="paragraph";m<r&&!e.isEmpty(m);m++)if(!(e.sCount[m]-e.blkIndent>3)){if(e.sCount[m]>=e.blkIndent&&(o=e.bMarks[m]+e.tShift[m])<(u=e.eMarks[m])&&((p=e.src.charCodeAt(o))===45||p===61)&&(o=e.skipChars(o,p),(o=e.skipSpaces(o))>=u)){h=p===61?1:2;break}if(!(e.sCount[m]<0)){for(s=!1,l=0,a=g.length;l<a;l++)if(g[l](e,m,r,!0)){s=!0;break}if(s)break}}return!!h&&(n=e.getLines(t,m,e.blkIndent,!1).trim(),e.line=m+1,(c=e.push("heading_open","h"+String(h),1)).markup=String.fromCharCode(p),c.map=[t,e.line],(c=e.push("inline","",0)).content=n,c.map=[t,e.line-1],c.children=[],(c=e.push("heading_close","h"+String(h),-1)).markup=String.fromCharCode(p),e.parentType=_,!0)}},function(d,f,i){var e=i(171),t=i(67).HTML_OPEN_CLOSE_TAG_RE,r=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+e.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(t.source+"\\s*$"),/^$/,!1]];d.exports=function(n,s,l,a){var c,o,u,h,p=n.bMarks[s]+n.tShift[s],_=n.eMarks[s];if(n.sCount[s]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(p)!==60)return!1;for(h=n.src.slice(p,_),c=0;c<r.length&&!r[c][0].test(h);c++);if(c===r.length)return!1;if(a)return r[c][2];if(o=s+1,!r[c][1].test(h)){for(;o<l&&!(n.sCount[o]<n.blkIndent);o++)if(p=n.bMarks[o]+n.tShift[o],_=n.eMarks[o],h=n.src.slice(p,_),r[c][1].test(h)){h.length!==0&&o++;break}}return n.line=o,(u=n.push("html_block","",0)).map=[s,o],u.content=n.getLines(s,o,n.blkIndent,!0),!0}},function(d,f,i){d.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},function(d,f,i){d.exports=function(e,t){var r,n,s,l,a,c,o=t+1,u=e.md.block.ruler.getRules("paragraph"),h=e.lineMax;for(c=e.parentType,e.parentType="paragraph";o<h&&!e.isEmpty(o);o++)if(!(e.sCount[o]-e.blkIndent>3||e.sCount[o]<0)){for(n=!1,s=0,l=u.length;s<l;s++)if(u[s](e,o,h,!0)){n=!0;break}if(n)break}return r=e.getLines(t,o,e.blkIndent,!1).trim(),e.line=o,(a=e.push("paragraph_open","p",1)).map=[t,e.line],(a=e.push("inline","",0)).content=r,a.map=[t,e.line],a.children=[],a=e.push("paragraph_close","p",-1),e.parentType=c,!0}},function(d,f,i){var e=i(42),t=i(1).isSpace;function r(n,s,l,a){var c,o,u,h,p,_,m,g;for(this.src=n,this.md=s,this.env=l,this.tokens=a,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",g=!1,u=h=_=m=0,p=(o=this.src).length;h<p;h++){if(c=o.charCodeAt(h),!g){if(t(c)){_++,c===9?m+=4-m%4:m++;continue}g=!0}c!==10&&h!==p-1||(c!==10&&h++,this.bMarks.push(u),this.eMarks.push(h),this.tShift.push(_),this.sCount.push(m),this.bsCount.push(0),g=!1,_=0,m=0,u=h+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}r.prototype.push=function(n,s,l){var a=new e(n,s,l);return a.block=!0,l<0&&this.level--,a.level=this.level,l>0&&this.level++,this.tokens.push(a),a},r.prototype.isEmpty=function(n){return this.bMarks[n]+this.tShift[n]>=this.eMarks[n]},r.prototype.skipEmptyLines=function(n){for(var s=this.lineMax;n<s&&!(this.bMarks[n]+this.tShift[n]<this.eMarks[n]);n++);return n},r.prototype.skipSpaces=function(n){for(var s,l=this.src.length;n<l&&(s=this.src.charCodeAt(n),t(s));n++);return n},r.prototype.skipSpacesBack=function(n,s){if(n<=s)return n;for(;n>s;)if(!t(this.src.charCodeAt(--n)))return n+1;return n},r.prototype.skipChars=function(n,s){for(var l=this.src.length;n<l&&this.src.charCodeAt(n)===s;n++);return n},r.prototype.skipCharsBack=function(n,s,l){if(n<=l)return n;for(;n>l;)if(s!==this.src.charCodeAt(--n))return n+1;return n},r.prototype.getLines=function(n,s,l,a){var c,o,u,h,p,_,m,g=n;if(n>=s)return"";for(_=new Array(s-n),c=0;g<s;g++,c++){for(o=0,m=h=this.bMarks[g],p=g+1<s||a?this.eMarks[g]+1:this.eMarks[g];h<p&&o<l;){if(u=this.src.charCodeAt(h),t(u))u===9?o+=4-(o+this.bsCount[g])%4:o++;else{if(!(h-m<this.tShift[g]))break;o++}h++}_[c]=o>l?new Array(o-l+1).join(" ")+this.src.slice(h,p):this.src.slice(h,p)}return _.join("")},r.prototype.Token=e,d.exports=r},function(d,f,i){var e=i(41),t=[["text",i(175)],["newline",i(176)],["escape",i(177)],["backticks",i(178)],["strikethrough",i(68).tokenize],["emphasis",i(69).tokenize],["link",i(179)],["image",i(180)],["autolink",i(181)],["html_inline",i(182)],["entity",i(183)]],r=[["balance_pairs",i(184)],["strikethrough",i(68).postProcess],["emphasis",i(69).postProcess],["text_collapse",i(185)]];function n(){var s;for(this.ruler=new e,s=0;s<t.length;s++)this.ruler.push(t[s][0],t[s][1]);for(this.ruler2=new e,s=0;s<r.length;s++)this.ruler2.push(r[s][0],r[s][1])}n.prototype.skipToken=function(s){var l,a,c=s.pos,o=this.ruler.getRules(""),u=o.length,h=s.md.options.maxNesting,p=s.cache;if(p[c]===void 0){if(s.level<h)for(a=0;a<u&&(s.level++,l=o[a](s,!0),s.level--,!l);a++);else s.pos=s.posMax;l||s.pos++,p[c]=s.pos}else s.pos=p[c]},n.prototype.tokenize=function(s){for(var l,a,c=this.ruler.getRules(""),o=c.length,u=s.posMax,h=s.md.options.maxNesting;s.pos<u;){if(s.level<h)for(a=0;a<o&&!(l=c[a](s,!1));a++);if(l){if(s.pos>=u)break}else s.pending+=s.src[s.pos++]}s.pending&&s.pushPending()},n.prototype.parse=function(s,l,a,c){var o,u,h,p=new this.State(s,l,a,c);for(this.tokenize(p),h=(u=this.ruler2.getRules("")).length,o=0;o<h;o++)u[o](p)},n.prototype.State=i(186),d.exports=n},function(d,f,i){function e(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}d.exports=function(t,r){for(var n=t.pos;n<t.posMax&&!e(t.src.charCodeAt(n));)n++;return n!==t.pos&&(r||(t.pending+=t.src.slice(t.pos,n)),t.pos=n,!0)}},function(d,f,i){var e=i(1).isSpace;d.exports=function(t,r){var n,s,l=t.pos;if(t.src.charCodeAt(l)!==10)return!1;for(n=t.pending.length-1,s=t.posMax,r||(n>=0&&t.pending.charCodeAt(n)===32?n>=1&&t.pending.charCodeAt(n-1)===32?(t.pending=t.pending.replace(/ +$/,""),t.push("hardbreak","br",0)):(t.pending=t.pending.slice(0,-1),t.push("softbreak","br",0)):t.push("softbreak","br",0)),l++;l<s&&e(t.src.charCodeAt(l));)l++;return t.pos=l,!0}},function(d,f,i){for(var e=i(1).isSpace,t=[],r=0;r<256;r++)t.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){t[n.charCodeAt(0)]=1}),d.exports=function(n,s){var l,a=n.pos,c=n.posMax;if(n.src.charCodeAt(a)!==92)return!1;if(++a<c){if((l=n.src.charCodeAt(a))<256&&t[l]!==0)return s||(n.pending+=n.src[a]),n.pos+=2,!0;if(l===10){for(s||n.push("hardbreak","br",0),a++;a<c&&(l=n.src.charCodeAt(a),e(l));)a++;return n.pos=a,!0}}return s||(n.pending+="\\"),n.pos++,!0}},function(d,f,i){d.exports=function(e,t){var r,n,s,l,a,c,o=e.pos;if(e.src.charCodeAt(o)!==96)return!1;for(r=o,o++,n=e.posMax;o<n&&e.src.charCodeAt(o)===96;)o++;for(s=e.src.slice(r,o),l=a=o;(l=e.src.indexOf("`",a))!==-1;){for(a=l+1;a<n&&e.src.charCodeAt(a)===96;)a++;if(a-l===s.length)return t||((c=e.push("code_inline","code",0)).markup=s,c.content=e.src.slice(o,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=a,!0}return t||(e.pending+=s),e.pos+=s.length,!0}},function(d,f,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n){var s,l,a,c,o,u,h,p,_,m="",g=r.pos,k=r.posMax,w=r.pos,v=!0;if(r.src.charCodeAt(r.pos)!==91||(o=r.pos+1,(c=r.md.helpers.parseLinkLabel(r,r.pos,!0))<0))return!1;if((u=c+1)<k&&r.src.charCodeAt(u)===40){for(v=!1,u++;u<k&&(l=r.src.charCodeAt(u),t(l)||l===10);u++);if(u>=k)return!1;for(w=u,(h=r.md.helpers.parseLinkDestination(r.src,u,r.posMax)).ok&&(m=r.md.normalizeLink(h.str),r.md.validateLink(m)?u=h.pos:m=""),w=u;u<k&&(l=r.src.charCodeAt(u),t(l)||l===10);u++);if(h=r.md.helpers.parseLinkTitle(r.src,u,r.posMax),u<k&&w!==u&&h.ok)for(_=h.str,u=h.pos;u<k&&(l=r.src.charCodeAt(u),t(l)||l===10);u++);else _="";(u>=k||r.src.charCodeAt(u)!==41)&&(v=!0),u++}if(v){if(r.env.references===void 0)return!1;if(u<k&&r.src.charCodeAt(u)===91?(w=u+1,(u=r.md.helpers.parseLinkLabel(r,u))>=0?a=r.src.slice(w,u++):u=c+1):u=c+1,a||(a=r.src.slice(o,c)),!(p=r.env.references[e(a)]))return r.pos=g,!1;m=p.href,_=p.title}return n||(r.pos=o,r.posMax=c,r.push("link_open","a",1).attrs=s=[["href",m]],_&&s.push(["title",_]),r.md.inline.tokenize(r),r.push("link_close","a",-1)),r.pos=u,r.posMax=k,!0}},function(d,f,i){var e=i(1).normalizeReference,t=i(1).isSpace;d.exports=function(r,n){var s,l,a,c,o,u,h,p,_,m,g,k,w,v="",b=r.pos,y=r.posMax;if(r.src.charCodeAt(r.pos)!==33||r.src.charCodeAt(r.pos+1)!==91||(u=r.pos+2,(o=r.md.helpers.parseLinkLabel(r,r.pos+1,!1))<0))return!1;if((h=o+1)<y&&r.src.charCodeAt(h)===40){for(h++;h<y&&(l=r.src.charCodeAt(h),t(l)||l===10);h++);if(h>=y)return!1;for(w=h,(_=r.md.helpers.parseLinkDestination(r.src,h,r.posMax)).ok&&(v=r.md.normalizeLink(_.str),r.md.validateLink(v)?h=_.pos:v=""),w=h;h<y&&(l=r.src.charCodeAt(h),t(l)||l===10);h++);if(_=r.md.helpers.parseLinkTitle(r.src,h,r.posMax),h<y&&w!==h&&_.ok)for(m=_.str,h=_.pos;h<y&&(l=r.src.charCodeAt(h),t(l)||l===10);h++);else m="";if(h>=y||r.src.charCodeAt(h)!==41)return r.pos=b,!1;h++}else{if(r.env.references===void 0)return!1;if(h<y&&r.src.charCodeAt(h)===91?(w=h+1,(h=r.md.helpers.parseLinkLabel(r,h))>=0?c=r.src.slice(w,h++):h=o+1):h=o+1,c||(c=r.src.slice(u,o)),!(p=r.env.references[e(c)]))return r.pos=b,!1;v=p.href,m=p.title}return n||(a=r.src.slice(u,o),r.md.inline.parse(a,r.md,r.env,k=[]),(g=r.push("image","img",0)).attrs=s=[["src",v],["alt",""]],g.children=k,g.content=a,m&&s.push(["title",m])),r.pos=h,r.posMax=y,!0}},function(d,f,i){var e=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,t=/^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;d.exports=function(r,n){var s,l,a,c,o,u,h=r.pos;return r.src.charCodeAt(h)===60&&!((s=r.src.slice(h)).indexOf(">")<0)&&(t.test(s)?(c=(l=s.match(t))[0].slice(1,-1),o=r.md.normalizeLink(c),!!r.md.validateLink(o)&&(n||((u=r.push("link_open","a",1)).attrs=[["href",o]],u.markup="autolink",u.info="auto",(u=r.push("text","",0)).content=r.md.normalizeLinkText(c),(u=r.push("link_close","a",-1)).markup="autolink",u.info="auto"),r.pos+=l[0].length,!0)):!!e.test(s)&&(c=(a=s.match(e))[0].slice(1,-1),o=r.md.normalizeLink("mailto:"+c),!!r.md.validateLink(o)&&(n||((u=r.push("link_open","a",1)).attrs=[["href",o]],u.markup="autolink",u.info="auto",(u=r.push("text","",0)).content=r.md.normalizeLinkText(c),(u=r.push("link_close","a",-1)).markup="autolink",u.info="auto"),r.pos+=a[0].length,!0)))}},function(d,f,i){var e=i(67).HTML_TAG_RE;d.exports=function(t,r){var n,s,l,a=t.pos;return!!t.md.options.html&&(l=t.posMax,!(t.src.charCodeAt(a)!==60||a+2>=l)&&!((n=t.src.charCodeAt(a+1))!==33&&n!==63&&n!==47&&!function(c){var o=32|c;return o>=97&&o<=122}(n))&&!!(s=t.src.slice(a).match(e))&&(r||(t.push("html_inline","",0).content=t.src.slice(a,a+s[0].length)),t.pos+=s[0].length,!0))}},function(d,f,i){var e=i(62),t=i(1).has,r=i(1).isValidEntityCode,n=i(1).fromCodePoint,s=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,l=/^&([a-z][a-z0-9]{1,31});/i;d.exports=function(a,c){var o,u,h=a.pos,p=a.posMax;if(a.src.charCodeAt(h)!==38)return!1;if(h+1<p){if(a.src.charCodeAt(h+1)===35){if(u=a.src.slice(h).match(s))return c||(o=u[1][0].toLowerCase()==="x"?parseInt(u[1].slice(1),16):parseInt(u[1],10),a.pending+=r(o)?n(o):n(65533)),a.pos+=u[0].length,!0}else if((u=a.src.slice(h).match(l))&&t(e,u[1]))return c||(a.pending+=e[u[1]]),a.pos+=u[0].length,!0}return c||(a.pending+="&"),a.pos++,!0}},function(d,f,i){function e(t,r){var n,s,l,a,c,o,u,h,p={},_=r.length;for(n=0;n<_;n++)if((l=r[n]).length=l.length||0,l.close){for(p.hasOwnProperty(l.marker)||(p[l.marker]=[-1,-1,-1]),c=p[l.marker][l.length%3],o=-1,s=n-l.jump-1;s>c;s-=a.jump+1)if((a=r[s]).marker===l.marker&&(o===-1&&(o=s),a.open&&a.end<0&&a.level===l.level&&(u=!1,(a.close||l.open)&&(a.length+l.length)%3==0&&(a.length%3==0&&l.length%3==0||(u=!0)),!u))){h=s>0&&!r[s-1].open?r[s-1].jump+1:0,l.jump=n-s+h,l.open=!1,a.end=n,a.jump=h,a.close=!1,o=-1;break}o!==-1&&(p[l.marker][(l.length||0)%3]=o)}}d.exports=function(t){var r,n=t.tokens_meta,s=t.tokens_meta.length;for(e(0,t.delimiters),r=0;r<s;r++)n[r]&&n[r].delimiters&&e(0,n[r].delimiters)}},function(d,f,i){d.exports=function(e){var t,r,n=0,s=e.tokens,l=e.tokens.length;for(t=r=0;t<l;t++)s[t].nesting<0&&n--,s[t].level=n,s[t].nesting>0&&n++,s[t].type==="text"&&t+1<l&&s[t+1].type==="text"?s[t+1].content=s[t].content+s[t+1].content:(t!==r&&(s[r]=s[t]),r++);t!==r&&(s.length=r)}},function(d,f,i){var e=i(42),t=i(1).isWhiteSpace,r=i(1).isPunctChar,n=i(1).isMdAsciiPunct;function s(l,a,c,o){this.src=l,this.env=c,this.md=a,this.tokens=o,this.tokens_meta=Array(o.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[]}s.prototype.pushPending=function(){var l=new e("text","",0);return l.content=this.pending,l.level=this.pendingLevel,this.tokens.push(l),this.pending="",l},s.prototype.push=function(l,a,c){this.pending&&this.pushPending();var o=new e(l,a,c),u=null;return c<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),o.level=this.level,c>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],u={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(o),this.tokens_meta.push(u),o},s.prototype.scanDelims=function(l,a){var c,o,u,h,p,_,m,g,k,w=l,v=!0,b=!0,y=this.posMax,S=this.src.charCodeAt(l);for(c=l>0?this.src.charCodeAt(l-1):32;w<y&&this.src.charCodeAt(w)===S;)w++;return u=w-l,o=w<y?this.src.charCodeAt(w):32,m=n(c)||r(String.fromCharCode(c)),k=n(o)||r(String.fromCharCode(o)),_=t(c),(g=t(o))?v=!1:k&&(_||m||(v=!1)),_?b=!1:m&&(g||k||(b=!1)),a?(h=v,p=b):(h=v&&(!b||m),p=b&&(!v||k)),{can_open:h,can_close:p,length:u}},s.prototype.Token=e,d.exports=s},function(d,f,i){function e(p){var _=Array.prototype.slice.call(arguments,1);return _.forEach(function(m){m&&Object.keys(m).forEach(function(g){p[g]=m[g]})}),p}function t(p){return Object.prototype.toString.call(p)}function r(p){return t(p)==="[object Function]"}function n(p){return p.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var s={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},l={"http:":{validate:function(p,_,m){var g=p.slice(_);return m.re.http||(m.re.http=new RegExp("^\\/\\/"+m.re.src_auth+m.re.src_host_port_strict+m.re.src_path,"i")),m.re.http.test(g)?g.match(m.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(p,_,m){var g=p.slice(_);return m.re.no_http||(m.re.no_http=new RegExp("^"+m.re.src_auth+"(?:localhost|(?:(?:"+m.re.src_domain+")\\.)+"+m.re.src_domain_root+")"+m.re.src_port+m.re.src_host_terminator+m.re.src_path,"i")),m.re.no_http.test(g)?_>=3&&p[_-3]===":"||_>=3&&p[_-3]==="/"?0:g.match(m.re.no_http)[0].length:0}},"mailto:":{validate:function(p,_,m){var g=p.slice(_);return m.re.mailto||(m.re.mailto=new RegExp("^"+m.re.src_email_name+"@"+m.re.src_host_strict,"i")),m.re.mailto.test(g)?g.match(m.re.mailto)[0].length:0}}},a="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function c(p){var _=p.re=i(188)(p.__opts__),m=p.__tlds__.slice();function g(b){return b.replace("%TLDS%",_.src_tlds)}p.onCompile(),p.__tlds_replaced__||m.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"),m.push(_.src_xn),_.src_tlds=m.join("|"),_.email_fuzzy=RegExp(g(_.tpl_email_fuzzy),"i"),_.link_fuzzy=RegExp(g(_.tpl_link_fuzzy),"i"),_.link_no_ip_fuzzy=RegExp(g(_.tpl_link_no_ip_fuzzy),"i"),_.host_fuzzy_test=RegExp(g(_.tpl_host_fuzzy_test),"i");var k=[];function w(b,y){throw new Error('(LinkifyIt) Invalid schema "'+b+'": '+y)}p.__compiled__={},Object.keys(p.__schemas__).forEach(function(b){var y=p.__schemas__[b];if(y!==null){var S={validate:null,link:null};if(p.__compiled__[b]=S,t(y)==="[object Object]")return function(j){return t(j)==="[object RegExp]"}(y.validate)?S.validate=function(j){return function(O,x){var E=O.slice(x);return j.test(E)?E.match(j)[0].length:0}}(y.validate):r(y.validate)?S.validate=y.validate:w(b,y),void(r(y.normalize)?S.normalize=y.normalize:y.normalize?w(b,y):S.normalize=function(j,O){O.normalize(j)});(function(j){return t(j)==="[object String]"})(y)?k.push(b):w(b,y)}}),k.forEach(function(b){p.__compiled__[p.__schemas__[b]]&&(p.__compiled__[b].validate=p.__compiled__[p.__schemas__[b]].validate,p.__compiled__[b].normalize=p.__compiled__[p.__schemas__[b]].normalize)}),p.__compiled__[""]={validate:null,normalize:function(b,y){y.normalize(b)}};var v=Object.keys(p.__compiled__).filter(function(b){return b.length>0&&p.__compiled__[b]}).map(n).join("|");p.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+v+")","i"),p.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+_.src_ZPCc+"))("+v+")","ig"),p.re.pretest=RegExp("("+p.re.schema_test.source+")|("+p.re.host_fuzzy_test.source+")|@","i"),function(b){b.__index__=-1,b.__text_cache__=""}(p)}function o(p,_){var m=p.__index__,g=p.__last_index__,k=p.__text_cache__.slice(m,g);this.schema=p.__schema__.toLowerCase(),this.index=m+_,this.lastIndex=g+_,this.raw=k,this.text=k,this.url=k}function u(p,_){var m=new o(p,_);return p.__compiled__[m.schema].normalize(m,p),m}function h(p,_){if(!(this instanceof h))return new h(p,_);var m;_||(m=p,Object.keys(m||{}).reduce(function(g,k){return g||s.hasOwnProperty(k)},!1)&&(_=p,p={})),this.__opts__=e({},s,_),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=e({},l,p),this.__compiled__={},this.__tlds__=a,this.__tlds_replaced__=!1,this.re={},c(this)}h.prototype.add=function(p,_){return this.__schemas__[p]=_,c(this),this},h.prototype.set=function(p){return this.__opts__=e(this.__opts__,p),this},h.prototype.test=function(p){if(this.__text_cache__=p,this.__index__=-1,!p.length)return!1;var _,m,g,k,w,v,b,y;if(this.re.schema_test.test(p)){for((b=this.re.schema_search).lastIndex=0;(_=b.exec(p))!==null;)if(k=this.testSchemaAt(p,_[2],b.lastIndex)){this.__schema__=_[2],this.__index__=_.index+_[1].length,this.__last_index__=_.index+_[0].length+k;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(y=p.search(this.re.host_fuzzy_test))>=0&&(this.__index__<0||y<this.__index__)&&(m=p.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(w=m.index+m[1].length,(this.__index__<0||w<this.__index__)&&(this.__schema__="",this.__index__=w,this.__last_index__=m.index+m[0].length)),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&p.indexOf("@")>=0&&(g=p.match(this.re.email_fuzzy))!==null&&(w=g.index+g[1].length,v=g.index+g[0].length,(this.__index__<0||w<this.__index__||w===this.__index__&&v>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=w,this.__last_index__=v)),this.__index__>=0},h.prototype.pretest=function(p){return this.re.pretest.test(p)},h.prototype.testSchemaAt=function(p,_,m){return this.__compiled__[_.toLowerCase()]?this.__compiled__[_.toLowerCase()].validate(p,m,this):0},h.prototype.match=function(p){var _=0,m=[];this.__index__>=0&&this.__text_cache__===p&&(m.push(u(this,_)),_=this.__last_index__);for(var g=_?p.slice(_):p;this.test(g);)m.push(u(this,_)),g=g.slice(this.__last_index__),_+=this.__last_index__;return m.length?m:null},h.prototype.tlds=function(p,_){return p=Array.isArray(p)?p:[p],_?(this.__tlds__=this.__tlds__.concat(p).sort().filter(function(m,g,k){return m!==k[g-1]}).reverse(),c(this),this):(this.__tlds__=p.slice(),this.__tlds_replaced__=!0,c(this),this)},h.prototype.normalize=function(p){p.schema||(p.url="http://"+p.url),p.schema!=="mailto:"||/^mailto:/i.test(p.url)||(p.url="mailto:"+p.url)},h.prototype.onCompile=function(){},d.exports=h},function(d,f,i){d.exports=function(e){var t={};return t.src_Any=i(64).source,t.src_Cc=i(65).source,t.src_Z=i(66).source,t.src_P=i(40).source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|"),t.src_pseudo_letter="(?:(?![><｜]|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|[><｜]|"+t.src_ZPCc+")(?!-|_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+`|[><｜]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!"+t.src_ZCc+"|[.]).|"+(e&&e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+"\\,(?!"+t.src_ZCc+").|\\!(?!"+t.src_ZCc+"|[!]).|\\?(?!"+t.src_ZCc+"|[?]).)+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy='(^|[><｜]|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}},function(d,f,i){(function(e,t){var r;/*! https://mths.be/punycode v1.4.1 by @mathias */(function(n){f&&f.nodeType,e&&e.nodeType;var s=typeof t=="object"&&t;s.global!==s&&s.window!==s&&s.self;var l,a=2147483647,c=/^xn--/,o=/[^\x20-\x7E]/,u=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,_=String.fromCharCode;function m(O){throw new RangeError(h[O])}function g(O,x){for(var E=O.length,C=[];E--;)C[E]=x(O[E]);return C}function k(O,x){var E=O.split("@"),C="";return E.length>1&&(C=E[0]+"@",O=E[1]),C+g((O=O.replace(u,".")).split("."),x).join(".")}function w(O){for(var x,E,C=[],T=0,D=O.length;T<D;)(x=O.charCodeAt(T++))>=55296&&x<=56319&&T<D?(64512&(E=O.charCodeAt(T++)))==56320?C.push(((1023&x)<<10)+(1023&E)+65536):(C.push(x),T--):C.push(x);return C}function v(O){return g(O,function(x){var E="";return x>65535&&(E+=_((x-=65536)>>>10&1023|55296),x=56320|1023&x),E+=_(x)}).join("")}function b(O,x){return O+22+75*(O<26)-((x!=0)<<5)}function y(O,x,E){var C=0;for(O=E?p(O/700):O>>1,O+=p(O/x);O>455;C+=36)O=p(O/35);return p(C+36*O/(O+38))}function S(O){var x,E,C,T,D,$,N,z,H,P,V,W=[],F=O.length,L=0,G=128,Z=72;for((E=O.lastIndexOf("-"))<0&&(E=0),C=0;C<E;++C)O.charCodeAt(C)>=128&&m("not-basic"),W.push(O.charCodeAt(C));for(T=E>0?E+1:0;T<F;){for(D=L,$=1,N=36;T>=F&&m("invalid-input"),((z=(V=O.charCodeAt(T++))-48<10?V-22:V-65<26?V-65:V-97<26?V-97:36)>=36||z>p((a-L)/$))&&m("overflow"),L+=z*$,!(z<(H=N<=Z?1:N>=Z+26?26:N-Z));N+=36)$>p(a/(P=36-H))&&m("overflow"),$*=P;Z=y(L-D,x=W.length+1,D==0),p(L/x)>a-G&&m("overflow"),G+=p(L/x),L%=x,W.splice(L++,0,G)}return v(W)}function j(O){var x,E,C,T,D,$,N,z,H,P,V,W,F,L,G,Z=[];for(W=(O=w(O)).length,x=128,E=0,D=72,$=0;$<W;++$)(V=O[$])<128&&Z.push(_(V));for(C=T=Z.length,T&&Z.push("-");C<W;){for(N=a,$=0;$<W;++$)(V=O[$])>=x&&V<N&&(N=V);for(N-x>p((a-E)/(F=C+1))&&m("overflow"),E+=(N-x)*F,x=N,$=0;$<W;++$)if((V=O[$])<x&&++E>a&&m("overflow"),V==x){for(z=E,H=36;!(z<(P=H<=D?1:H>=D+26?26:H-D));H+=36)G=z-P,L=36-P,Z.push(_(b(P+G%L,0))),z=p(G/L);Z.push(_(b(z,0))),D=y(E,F,C==T),E=0,++C}++E,++x}return Z.join("")}l={version:"1.4.1",ucs2:{decode:w,encode:v},decode:S,encode:j,toASCII:function(O){return k(O,function(x){return o.test(x)?"xn--"+j(x):x})},toUnicode:function(O){return k(O,function(x){return c.test(x)?S(x.slice(4).toLowerCase()):x})}},(r=(function(){return l}).call(f,i,f,e))===void 0||(e.exports=r)})()}).call(this,i(190)(d),i(191))},function(d,f){d.exports=function(i){return i.webpackPolyfill||(i.deprecate=function(){},i.paths=[],i.children||(i.children=[]),Object.defineProperty(i,"loaded",{enumerable:!0,get:function(){return i.l}}),Object.defineProperty(i,"id",{enumerable:!0,get:function(){return i.i}}),i.webpackPolyfill=1),i}},function(d,f){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch{typeof window=="object"&&(i=window)}d.exports=i},function(d,f,i){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}},function(d,f,i){d.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},function(d,f,i){d.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},function(d,f,i){var e=i(196),t=i(197),r=i(198),n=i(199),s=i(200);d.exports=function(l,a){var c={defs:e,shortcuts:t,enabled:[]},o=s(l.utils.assign({},c,a||{}));l.renderer.rules.emoji=r,l.core.ruler.push("emoji",n(l,o.defs,o.shortcuts,o.scanRE,o.replaceRE))}},function(d){d.exports=JSON.parse('{"100":"💯","1234":"🔢","grinning":"😀","smiley":"😃","smile":"😄","grin":"😁","laughing":"😆","satisfied":"😆","sweat_smile":"😅","joy":"😂","rofl":"🤣","relaxed":"☺️","blush":"😊","innocent":"😇","slightly_smiling_face":"🙂","upside_down_face":"🙃","wink":"😉","relieved":"😌","heart_eyes":"😍","kissing_heart":"😘","kissing":"😗","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","yum":"😋","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","stuck_out_tongue":"😛","money_mouth_face":"🤑","hugs":"🤗","nerd_face":"🤓","sunglasses":"😎","clown_face":"🤡","cowboy_hat_face":"🤠","smirk":"😏","unamused":"😒","disappointed":"😞","pensive":"😔","worried":"😟","confused":"😕","slightly_frowning_face":"🙁","frowning_face":"☹️","persevere":"😣","confounded":"😖","tired_face":"😫","weary":"😩","triumph":"😤","angry":"😠","rage":"😡","pout":"😡","no_mouth":"😶","neutral_face":"😐","expressionless":"😑","hushed":"😯","frowning":"😦","anguished":"😧","open_mouth":"😮","astonished":"😲","dizzy_face":"😵","flushed":"😳","scream":"😱","fearful":"😨","cold_sweat":"😰","cry":"😢","disappointed_relieved":"😥","drooling_face":"🤤","sob":"😭","sweat":"😓","sleepy":"😪","sleeping":"😴","roll_eyes":"🙄","thinking":"🤔","lying_face":"🤥","grimacing":"😬","zipper_mouth_face":"🤐","nauseated_face":"🤢","sneezing_face":"🤧","mask":"😷","face_with_thermometer":"🤒","face_with_head_bandage":"🤕","smiling_imp":"😈","imp":"👿","japanese_ogre":"👹","japanese_goblin":"👺","hankey":"💩","poop":"💩","shit":"💩","ghost":"👻","skull":"💀","skull_and_crossbones":"☠️","alien":"👽","space_invader":"👾","robot":"🤖","jack_o_lantern":"🎃","smiley_cat":"😺","smile_cat":"😸","joy_cat":"😹","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","scream_cat":"🙀","crying_cat_face":"😿","pouting_cat":"😾","open_hands":"👐","raised_hands":"🙌","clap":"👏","pray":"🙏","handshake":"🤝","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","fist_oncoming":"👊","facepunch":"👊","punch":"👊","fist_raised":"✊","fist":"✊","fist_left":"🤛","fist_right":"🤜","crossed_fingers":"🤞","v":"✌️","metal":"🤘","ok_hand":"👌","point_left":"👈","point_right":"👉","point_up_2":"👆","point_down":"👇","point_up":"☝️","hand":"✋","raised_hand":"✋","raised_back_of_hand":"🤚","raised_hand_with_fingers_splayed":"🖐","vulcan_salute":"🖖","wave":"👋","call_me_hand":"🤙","muscle":"💪","middle_finger":"🖕","fu":"🖕","writing_hand":"✍️","selfie":"🤳","nail_care":"💅","ring":"💍","lipstick":"💄","kiss":"💋","lips":"👄","tongue":"👅","ear":"👂","nose":"👃","footprints":"👣","eye":"👁","eyes":"👀","speaking_head":"🗣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","baby":"👶","boy":"👦","girl":"👧","man":"👨","woman":"👩","blonde_woman":"👱‍♀","blonde_man":"👱","person_with_blond_hair":"👱","older_man":"👴","older_woman":"👵","man_with_gua_pi_mao":"👲","woman_with_turban":"👳‍♀","man_with_turban":"👳","policewoman":"👮‍♀","policeman":"👮","cop":"👮","construction_worker_woman":"👷‍♀","construction_worker_man":"👷","construction_worker":"👷","guardswoman":"💂‍♀","guardsman":"💂","female_detective":"🕵️‍♀️","male_detective":"🕵","detective":"🕵","woman_health_worker":"👩‍⚕","man_health_worker":"👨‍⚕","woman_farmer":"👩‍🌾","man_farmer":"👨‍🌾","woman_cook":"👩‍🍳","man_cook":"👨‍🍳","woman_student":"👩‍🎓","man_student":"👨‍🎓","woman_singer":"👩‍🎤","man_singer":"👨‍🎤","woman_teacher":"👩‍🏫","man_teacher":"👨‍🏫","woman_factory_worker":"👩‍🏭","man_factory_worker":"👨‍🏭","woman_technologist":"👩‍💻","man_technologist":"👨‍💻","woman_office_worker":"👩‍💼","man_office_worker":"👨‍💼","woman_mechanic":"👩‍🔧","man_mechanic":"👨‍🔧","woman_scientist":"👩‍🔬","man_scientist":"👨‍🔬","woman_artist":"👩‍🎨","man_artist":"👨‍🎨","woman_firefighter":"👩‍🚒","man_firefighter":"👨‍🚒","woman_pilot":"👩‍✈","man_pilot":"👨‍✈","woman_astronaut":"👩‍🚀","man_astronaut":"👨‍🚀","woman_judge":"👩‍⚖","man_judge":"👨‍⚖","mrs_claus":"🤶","santa":"🎅","princess":"👸","prince":"🤴","bride_with_veil":"👰","man_in_tuxedo":"🤵","angel":"👼","pregnant_woman":"🤰","bowing_woman":"🙇‍♀","bowing_man":"🙇","bow":"🙇","tipping_hand_woman":"💁","information_desk_person":"💁","sassy_woman":"💁","tipping_hand_man":"💁‍♂","sassy_man":"💁‍♂","no_good_woman":"🙅","no_good":"🙅","ng_woman":"🙅","no_good_man":"🙅‍♂","ng_man":"🙅‍♂","ok_woman":"🙆","ok_man":"🙆‍♂","raising_hand_woman":"🙋","raising_hand":"🙋","raising_hand_man":"🙋‍♂","woman_facepalming":"🤦‍♀","man_facepalming":"🤦‍♂","woman_shrugging":"🤷‍♀","man_shrugging":"🤷‍♂","pouting_woman":"🙎","person_with_pouting_face":"🙎","pouting_man":"🙎‍♂","frowning_woman":"🙍","person_frowning":"🙍","frowning_man":"🙍‍♂","haircut_woman":"💇","haircut":"💇","haircut_man":"💇‍♂","massage_woman":"💆","massage":"💆","massage_man":"💆‍♂","business_suit_levitating":"🕴","dancer":"💃","man_dancing":"🕺","dancing_women":"👯","dancers":"👯","dancing_men":"👯‍♂","walking_woman":"🚶‍♀","walking_man":"🚶","walking":"🚶","running_woman":"🏃‍♀","running_man":"🏃","runner":"🏃","running":"🏃","couple":"👫","two_women_holding_hands":"👭","two_men_holding_hands":"👬","couple_with_heart_woman_man":"💑","couple_with_heart":"💑","couple_with_heart_woman_woman":"👩‍❤️‍👩","couple_with_heart_man_man":"👨‍❤️‍👨","couplekiss_man_woman":"💏","couplekiss_woman_woman":"👩‍❤️‍💋‍👩","couplekiss_man_man":"👨‍❤️‍💋‍👨","family_man_woman_boy":"👪","family":"👪","family_man_woman_girl":"👨‍👩‍👧","family_man_woman_girl_boy":"👨‍👩‍👧‍👦","family_man_woman_boy_boy":"👨‍👩‍👦‍👦","family_man_woman_girl_girl":"👨‍👩‍👧‍👧","family_woman_woman_boy":"👩‍👩‍👦","family_woman_woman_girl":"👩‍👩‍👧","family_woman_woman_girl_boy":"👩‍👩‍👧‍👦","family_woman_woman_boy_boy":"👩‍👩‍👦‍👦","family_woman_woman_girl_girl":"👩‍👩‍👧‍👧","family_man_man_boy":"👨‍👨‍👦","family_man_man_girl":"👨‍👨‍👧","family_man_man_girl_boy":"👨‍👨‍👧‍👦","family_man_man_boy_boy":"👨‍👨‍👦‍👦","family_man_man_girl_girl":"👨‍👨‍👧‍👧","family_woman_boy":"👩‍👦","family_woman_girl":"👩‍👧","family_woman_girl_boy":"👩‍👧‍👦","family_woman_boy_boy":"👩‍👦‍👦","family_woman_girl_girl":"👩‍👧‍👧","family_man_boy":"👨‍👦","family_man_girl":"👨‍👧","family_man_girl_boy":"👨‍👧‍👦","family_man_boy_boy":"👨‍👦‍👦","family_man_girl_girl":"👨‍👧‍👧","womans_clothes":"👚","shirt":"👕","tshirt":"👕","jeans":"👖","necktie":"👔","dress":"👗","bikini":"👙","kimono":"👘","high_heel":"👠","sandal":"👡","boot":"👢","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","womans_hat":"👒","tophat":"🎩","mortar_board":"🎓","crown":"👑","rescue_worker_helmet":"⛑","school_satchel":"🎒","pouch":"👝","purse":"👛","handbag":"👜","briefcase":"💼","eyeglasses":"👓","dark_sunglasses":"🕶","closed_umbrella":"🌂","open_umbrella":"☂️","dog":"🐶","cat":"🐱","mouse":"🐭","hamster":"🐹","rabbit":"🐰","fox_face":"🦊","bear":"🐻","panda_face":"🐼","koala":"🐨","tiger":"🐯","lion":"🦁","cow":"🐮","pig":"🐷","pig_nose":"🐽","frog":"🐸","monkey_face":"🐵","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","monkey":"🐒","chicken":"🐔","penguin":"🐧","bird":"🐦","baby_chick":"🐤","hatching_chick":"🐣","hatched_chick":"🐥","duck":"🦆","eagle":"🦅","owl":"🦉","bat":"🦇","wolf":"🐺","boar":"🐗","horse":"🐴","unicorn":"🦄","bee":"🐝","honeybee":"🐝","bug":"🐛","butterfly":"🦋","snail":"🐌","shell":"🐚","beetle":"🐞","ant":"🐜","spider":"🕷","spider_web":"🕸","turtle":"🐢","snake":"🐍","lizard":"🦎","scorpion":"🦂","crab":"🦀","squid":"🦑","octopus":"🐙","shrimp":"🦐","tropical_fish":"🐠","fish":"🐟","blowfish":"🐡","dolphin":"🐬","flipper":"🐬","shark":"🦈","whale":"🐳","whale2":"🐋","crocodile":"🐊","leopard":"🐆","tiger2":"🐅","water_buffalo":"🐃","ox":"🐂","cow2":"🐄","deer":"🦌","dromedary_camel":"🐪","camel":"🐫","elephant":"🐘","rhinoceros":"🦏","gorilla":"🦍","racehorse":"🐎","pig2":"🐖","goat":"🐐","ram":"🐏","sheep":"🐑","dog2":"🐕","poodle":"🐩","cat2":"🐈","rooster":"🐓","turkey":"🦃","dove":"🕊","rabbit2":"🐇","mouse2":"🐁","rat":"🐀","chipmunk":"🐿","feet":"🐾","paw_prints":"🐾","dragon":"🐉","dragon_face":"🐲","cactus":"🌵","christmas_tree":"🎄","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","seedling":"🌱","herb":"🌿","shamrock":"☘️","four_leaf_clover":"🍀","bamboo":"🎍","tanabata_tree":"🎋","leaves":"🍃","fallen_leaf":"🍂","maple_leaf":"🍁","mushroom":"🍄","ear_of_rice":"🌾","bouquet":"💐","tulip":"🌷","rose":"🌹","wilted_flower":"🥀","sunflower":"🌻","blossom":"🌼","cherry_blossom":"🌸","hibiscus":"🌺","earth_americas":"🌎","earth_africa":"🌍","earth_asia":"🌏","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","new_moon_with_face":"🌚","full_moon_with_face":"🌝","sun_with_face":"🌞","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","crescent_moon":"🌙","dizzy":"💫","star":"⭐️","star2":"🌟","sparkles":"✨","zap":"⚡️","fire":"🔥","boom":"💥","collision":"💥","comet":"☄","sunny":"☀️","sun_behind_small_cloud":"🌤","partly_sunny":"⛅️","sun_behind_large_cloud":"🌥","sun_behind_rain_cloud":"🌦","rainbow":"🌈","cloud":"☁️","cloud_with_rain":"🌧","cloud_with_lightning_and_rain":"⛈","cloud_with_lightning":"🌩","cloud_with_snow":"🌨","snowman_with_snow":"☃️","snowman":"⛄️","snowflake":"❄️","wind_face":"🌬","dash":"💨","tornado":"🌪","fog":"🌫","ocean":"🌊","droplet":"💧","sweat_drops":"💦","umbrella":"☔️","green_apple":"🍏","apple":"🍎","pear":"🍐","tangerine":"🍊","orange":"🍊","mandarin":"🍊","lemon":"🍋","banana":"🍌","watermelon":"🍉","grapes":"🍇","strawberry":"🍓","melon":"🍈","cherries":"🍒","peach":"🍑","pineapple":"🍍","kiwi_fruit":"🥝","avocado":"🥑","tomato":"🍅","eggplant":"🍆","cucumber":"🥒","carrot":"🥕","corn":"🌽","hot_pepper":"🌶","potato":"🥔","sweet_potato":"🍠","chestnut":"🌰","peanuts":"🥜","honey_pot":"🍯","croissant":"🥐","bread":"🍞","baguette_bread":"🥖","cheese":"🧀","egg":"🥚","fried_egg":"🍳","bacon":"🥓","pancakes":"🥞","fried_shrimp":"🍤","poultry_leg":"🍗","meat_on_bone":"🍖","pizza":"🍕","hotdog":"🌭","hamburger":"🍔","fries":"🍟","stuffed_flatbread":"🥙","taco":"🌮","burrito":"🌯","green_salad":"🥗","shallow_pan_of_food":"🥘","spaghetti":"🍝","ramen":"🍜","stew":"🍲","fish_cake":"🍥","sushi":"🍣","bento":"🍱","curry":"🍛","rice":"🍚","rice_ball":"🍙","rice_cracker":"🍘","oden":"🍢","dango":"🍡","shaved_ice":"🍧","ice_cream":"🍨","icecream":"🍦","cake":"🍰","birthday":"🎂","custard":"🍮","lollipop":"🍭","candy":"🍬","chocolate_bar":"🍫","popcorn":"🍿","doughnut":"🍩","cookie":"🍪","milk_glass":"🥛","baby_bottle":"🍼","coffee":"☕️","tea":"🍵","sake":"🍶","beer":"🍺","beers":"🍻","clinking_glasses":"🥂","wine_glass":"🍷","tumbler_glass":"🥃","cocktail":"🍸","tropical_drink":"🍹","champagne":"🍾","spoon":"🥄","fork_and_knife":"🍴","plate_with_cutlery":"🍽","soccer":"⚽️","basketball":"🏀","football":"🏈","baseball":"⚾️","tennis":"🎾","volleyball":"🏐","rugby_football":"🏉","8ball":"🎱","ping_pong":"🏓","badminton":"🏸","goal_net":"🥅","ice_hockey":"🏒","field_hockey":"🏑","cricket":"🏏","golf":"⛳️","bow_and_arrow":"🏹","fishing_pole_and_fish":"🎣","boxing_glove":"🥊","martial_arts_uniform":"🥋","ice_skate":"⛸","ski":"🎿","skier":"⛷","snowboarder":"🏂","weight_lifting_woman":"🏋️‍♀️","weight_lifting_man":"🏋","person_fencing":"🤺","women_wrestling":"🤼‍♀","men_wrestling":"🤼‍♂","woman_cartwheeling":"🤸‍♀","man_cartwheeling":"🤸‍♂","basketball_woman":"⛹️‍♀️","basketball_man":"⛹","woman_playing_handball":"🤾‍♀","man_playing_handball":"🤾‍♂","golfing_woman":"🏌️‍♀️","golfing_man":"🏌","surfing_woman":"🏄‍♀","surfing_man":"🏄","surfer":"🏄","swimming_woman":"🏊‍♀","swimming_man":"🏊","swimmer":"🏊","woman_playing_water_polo":"🤽‍♀","man_playing_water_polo":"🤽‍♂","rowing_woman":"🚣‍♀","rowing_man":"🚣","rowboat":"🚣","horse_racing":"🏇","biking_woman":"🚴‍♀","biking_man":"🚴","bicyclist":"🚴","mountain_biking_woman":"🚵‍♀","mountain_biking_man":"🚵","mountain_bicyclist":"🚵","running_shirt_with_sash":"🎽","medal_sports":"🏅","medal_military":"🎖","1st_place_medal":"🥇","2nd_place_medal":"🥈","3rd_place_medal":"🥉","trophy":"🏆","rosette":"🏵","reminder_ribbon":"🎗","ticket":"🎫","tickets":"🎟","circus_tent":"🎪","woman_juggling":"🤹‍♀","man_juggling":"🤹‍♂","performing_arts":"🎭","art":"🎨","clapper":"🎬","microphone":"🎤","headphones":"🎧","musical_score":"🎼","musical_keyboard":"🎹","drum":"🥁","saxophone":"🎷","trumpet":"🎺","guitar":"🎸","violin":"🎻","game_die":"🎲","dart":"🎯","bowling":"🎳","video_game":"🎮","slot_machine":"🎰","car":"🚗","red_car":"🚗","taxi":"🚕","blue_car":"🚙","bus":"🚌","trolleybus":"🚎","racing_car":"🏎","police_car":"🚓","ambulance":"🚑","fire_engine":"🚒","minibus":"🚐","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","kick_scooter":"🛴","bike":"🚲","motor_scooter":"🛵","motorcycle":"🏍","rotating_light":"🚨","oncoming_police_car":"🚔","oncoming_bus":"🚍","oncoming_automobile":"🚘","oncoming_taxi":"🚖","aerial_tramway":"🚡","mountain_cableway":"🚠","suspension_railway":"🚟","railway_car":"🚃","train":"🚋","mountain_railway":"🚞","monorail":"🚝","bullettrain_side":"🚄","bullettrain_front":"🚅","light_rail":"🚈","steam_locomotive":"🚂","train2":"🚆","metro":"🚇","tram":"🚊","station":"🚉","helicopter":"🚁","small_airplane":"🛩","airplane":"✈️","flight_departure":"🛫","flight_arrival":"🛬","rocket":"🚀","artificial_satellite":"🛰","seat":"💺","canoe":"🛶","boat":"⛵️","sailboat":"⛵️","motor_boat":"🛥","speedboat":"🚤","passenger_ship":"🛳","ferry":"⛴","ship":"🚢","anchor":"⚓️","construction":"🚧","fuelpump":"⛽️","busstop":"🚏","vertical_traffic_light":"🚦","traffic_light":"🚥","world_map":"🗺","moyai":"🗿","statue_of_liberty":"🗽","fountain":"⛲️","tokyo_tower":"🗼","european_castle":"🏰","japanese_castle":"🏯","stadium":"🏟","ferris_wheel":"🎡","roller_coaster":"🎢","carousel_horse":"🎠","parasol_on_ground":"⛱","beach_umbrella":"🏖","desert_island":"🏝","mountain":"⛰","mountain_snow":"🏔","mount_fuji":"🗻","volcano":"🌋","desert":"🏜","camping":"🏕","tent":"⛺️","railway_track":"🛤","motorway":"🛣","building_construction":"🏗","factory":"🏭","house":"🏠","house_with_garden":"🏡","houses":"🏘","derelict_house":"🏚","office":"🏢","department_store":"🏬","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","hotel":"🏨","convenience_store":"🏪","school":"🏫","love_hotel":"🏩","wedding":"💒","classical_building":"🏛","church":"⛪️","mosque":"🕌","synagogue":"🕍","kaaba":"🕋","shinto_shrine":"⛩","japan":"🗾","rice_scene":"🎑","national_park":"🏞","sunrise":"🌅","sunrise_over_mountains":"🌄","stars":"🌠","sparkler":"🎇","fireworks":"🎆","city_sunrise":"🌇","city_sunset":"🌆","cityscape":"🏙","night_with_stars":"🌃","milky_way":"🌌","bridge_at_night":"🌉","foggy":"🌁","watch":"⌚️","iphone":"📱","calling":"📲","computer":"💻","keyboard":"⌨️","desktop_computer":"🖥","printer":"🖨","computer_mouse":"🖱","trackball":"🖲","joystick":"🕹","clamp":"🗜","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","vhs":"📼","camera":"📷","camera_flash":"📸","video_camera":"📹","movie_camera":"🎥","film_projector":"📽","film_strip":"🎞","telephone_receiver":"📞","phone":"☎️","telephone":"☎️","pager":"📟","fax":"📠","tv":"📺","radio":"📻","studio_microphone":"🎙","level_slider":"🎚","control_knobs":"🎛","stopwatch":"⏱","timer_clock":"⏲","alarm_clock":"⏰","mantelpiece_clock":"🕰","hourglass":"⌛️","hourglass_flowing_sand":"⏳","satellite":"📡","battery":"🔋","electric_plug":"🔌","bulb":"💡","flashlight":"🔦","candle":"🕯","wastebasket":"🗑","oil_drum":"🛢","money_with_wings":"💸","dollar":"💵","yen":"💴","euro":"💶","pound":"💷","moneybag":"💰","credit_card":"💳","gem":"💎","balance_scale":"⚖️","wrench":"🔧","hammer":"🔨","hammer_and_pick":"⚒","hammer_and_wrench":"🛠","pick":"⛏","nut_and_bolt":"🔩","gear":"⚙️","chains":"⛓","gun":"🔫","bomb":"💣","hocho":"🔪","knife":"🔪","dagger":"🗡","crossed_swords":"⚔️","shield":"🛡","smoking":"🚬","coffin":"⚰️","funeral_urn":"⚱️","amphora":"🏺","crystal_ball":"🔮","prayer_beads":"📿","barber":"💈","alembic":"⚗️","telescope":"🔭","microscope":"🔬","hole":"🕳","pill":"💊","syringe":"💉","thermometer":"🌡","toilet":"🚽","potable_water":"🚰","shower":"🚿","bathtub":"🛁","bath":"🛀","bellhop_bell":"🛎","key":"🔑","old_key":"🗝","door":"🚪","couch_and_lamp":"🛋","bed":"🛏","sleeping_bed":"🛌","framed_picture":"🖼","shopping":"🛍","shopping_cart":"🛒","gift":"🎁","balloon":"🎈","flags":"🎏","ribbon":"🎀","confetti_ball":"🎊","tada":"🎉","dolls":"🎎","izakaya_lantern":"🏮","lantern":"🏮","wind_chime":"🎐","email":"✉️","envelope":"✉️","envelope_with_arrow":"📩","incoming_envelope":"📨","e-mail":"📧","love_letter":"💌","inbox_tray":"📥","outbox_tray":"📤","package":"📦","label":"🏷","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","scroll":"📜","page_with_curl":"📃","page_facing_up":"📄","bookmark_tabs":"📑","bar_chart":"📊","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","spiral_notepad":"🗒","spiral_calendar":"🗓","calendar":"📆","date":"📅","card_index":"📇","card_file_box":"🗃","ballot_box":"🗳","file_cabinet":"🗄","clipboard":"📋","file_folder":"📁","open_file_folder":"📂","card_index_dividers":"🗂","newspaper_roll":"🗞","newspaper":"📰","notebook":"📓","notebook_with_decorative_cover":"📔","ledger":"📒","closed_book":"📕","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","book":"📖","open_book":"📖","bookmark":"🔖","link":"🔗","paperclip":"📎","paperclips":"🖇","triangular_ruler":"📐","straight_ruler":"📏","pushpin":"📌","round_pushpin":"📍","scissors":"✂️","pen":"🖊","fountain_pen":"🖋","black_nib":"✒️","paintbrush":"🖌","crayon":"🖍","memo":"📝","pencil":"📝","pencil2":"✏️","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","lock":"🔒","unlock":"🔓","heart":"❤️","yellow_heart":"💛","green_heart":"💚","blue_heart":"💙","purple_heart":"💜","black_heart":"🖤","broken_heart":"💔","heavy_heart_exclamation":"❣️","two_hearts":"💕","revolving_hearts":"💞","heartbeat":"💓","heartpulse":"💗","sparkling_heart":"💖","cupid":"💘","gift_heart":"💝","heart_decoration":"💟","peace_symbol":"☮️","latin_cross":"✝️","star_and_crescent":"☪️","om":"🕉","wheel_of_dharma":"☸️","star_of_david":"✡️","six_pointed_star":"🔯","menorah":"🕎","yin_yang":"☯️","orthodox_cross":"☦️","place_of_worship":"🛐","ophiuchus":"⛎","aries":"♈️","taurus":"♉️","gemini":"♊️","cancer":"♋️","leo":"♌️","virgo":"♍️","libra":"♎️","scorpius":"♏️","sagittarius":"♐️","capricorn":"♑️","aquarius":"♒️","pisces":"♓️","id":"🆔","atom_symbol":"⚛️","accept":"🉑","radioactive":"☢️","biohazard":"☣️","mobile_phone_off":"📴","vibration_mode":"📳","eight_pointed_black_star":"✴️","vs":"🆚","white_flower":"💮","ideograph_advantage":"🉐","secret":"㊙️","congratulations":"㊗️","u6e80":"🈵","a":"🅰️","b":"🅱️","ab":"🆎","cl":"🆑","o2":"🅾️","sos":"🆘","x":"❌","o":"⭕️","stop_sign":"🛑","no_entry":"⛔️","name_badge":"📛","no_entry_sign":"🚫","anger":"💢","hotsprings":"♨️","no_pedestrians":"🚷","do_not_litter":"🚯","no_bicycles":"🚳","non-potable_water":"🚱","underage":"🔞","no_mobile_phones":"📵","no_smoking":"🚭","exclamation":"❗️","heavy_exclamation_mark":"❗️","grey_exclamation":"❕","question":"❓","grey_question":"❔","bangbang":"‼️","interrobang":"⁉️","low_brightness":"🔅","high_brightness":"🔆","part_alternation_mark":"〽️","warning":"⚠️","children_crossing":"🚸","trident":"🔱","fleur_de_lis":"⚜️","beginner":"🔰","recycle":"♻️","white_check_mark":"✅","chart":"💹","sparkle":"❇️","eight_spoked_asterisk":"✳️","negative_squared_cross_mark":"❎","globe_with_meridians":"🌐","diamond_shape_with_a_dot_inside":"💠","m":"Ⓜ️","cyclone":"🌀","zzz":"💤","atm":"🏧","wc":"🚾","wheelchair":"♿️","parking":"🅿️","sa":"🈂️","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","mens":"🚹","womens":"🚺","baby_symbol":"🚼","restroom":"🚻","put_litter_in_its_place":"🚮","cinema":"🎦","signal_strength":"📶","koko":"🈁","symbols":"🔣","information_source":"ℹ️","abc":"🔤","abcd":"🔡","capital_abcd":"🔠","ng":"🆖","ok":"🆗","up":"🆙","cool":"🆒","new":"🆕","free":"🆓","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","keycap_ten":"🔟","hash":"#️⃣","asterisk":"*️⃣","arrow_forward":"▶️","pause_button":"⏸","play_or_pause_button":"⏯","stop_button":"⏹","record_button":"⏺","next_track_button":"⏭","previous_track_button":"⏮","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","arrow_backward":"◀️","arrow_up_small":"🔼","arrow_down_small":"🔽","arrow_right":"➡️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","arrow_upper_left":"↖️","arrow_up_down":"↕️","left_right_arrow":"↔️","arrow_right_hook":"↪️","leftwards_arrow_with_hook":"↩️","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_counterclockwise":"🔄","arrows_clockwise":"🔃","musical_note":"🎵","notes":"🎶","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","heavy_multiplication_x":"✖️","heavy_dollar_sign":"💲","currency_exchange":"💱","tm":"™️","copyright":"©️","registered":"®️","wavy_dash":"〰️","curly_loop":"➰","loop":"➿","end":"🔚","back":"🔙","on":"🔛","top":"🔝","soon":"🔜","heavy_check_mark":"✔️","ballot_box_with_check":"☑️","radio_button":"🔘","white_circle":"⚪️","black_circle":"⚫️","red_circle":"🔴","large_blue_circle":"🔵","small_red_triangle":"🔺","small_red_triangle_down":"🔻","small_orange_diamond":"🔸","small_blue_diamond":"🔹","large_orange_diamond":"🔶","large_blue_diamond":"🔷","white_square_button":"🔳","black_square_button":"🔲","black_small_square":"▪️","white_small_square":"▫️","black_medium_small_square":"◾️","white_medium_small_square":"◽️","black_medium_square":"◼️","white_medium_square":"◻️","black_large_square":"⬛️","white_large_square":"⬜️","speaker":"🔈","mute":"🔇","sound":"🔉","loud_sound":"🔊","bell":"🔔","no_bell":"🔕","mega":"📣","loudspeaker":"📢","eye_speech_bubble":"👁‍🗨","speech_balloon":"💬","thought_balloon":"💭","right_anger_bubble":"🗯","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","black_joker":"🃏","flower_playing_cards":"🎴","mahjong":"🀄️","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","white_flag":"🏳️","black_flag":"🏴","checkered_flag":"🏁","triangular_flag_on_post":"🚩","rainbow_flag":"🏳️‍🌈","afghanistan":"🇦🇫","aland_islands":"🇦🇽","albania":"🇦🇱","algeria":"🇩🇿","american_samoa":"🇦🇸","andorra":"🇦🇩","angola":"🇦🇴","anguilla":"🇦🇮","antarctica":"🇦🇶","antigua_barbuda":"🇦🇬","argentina":"🇦🇷","armenia":"🇦🇲","aruba":"🇦🇼","australia":"🇦🇺","austria":"🇦🇹","azerbaijan":"🇦🇿","bahamas":"🇧🇸","bahrain":"🇧🇭","bangladesh":"🇧🇩","barbados":"🇧🇧","belarus":"🇧🇾","belgium":"🇧🇪","belize":"🇧🇿","benin":"🇧🇯","bermuda":"🇧🇲","bhutan":"🇧🇹","bolivia":"🇧🇴","caribbean_netherlands":"🇧🇶","bosnia_herzegovina":"🇧🇦","botswana":"🇧🇼","brazil":"🇧🇷","british_indian_ocean_territory":"🇮🇴","british_virgin_islands":"🇻🇬","brunei":"🇧🇳","bulgaria":"🇧🇬","burkina_faso":"🇧🇫","burundi":"🇧🇮","cape_verde":"🇨🇻","cambodia":"🇰🇭","cameroon":"🇨🇲","canada":"🇨🇦","canary_islands":"🇮🇨","cayman_islands":"🇰🇾","central_african_republic":"🇨🇫","chad":"🇹🇩","chile":"🇨🇱","cn":"🇨🇳","christmas_island":"🇨🇽","cocos_islands":"🇨🇨","colombia":"🇨🇴","comoros":"🇰🇲","congo_brazzaville":"🇨🇬","congo_kinshasa":"🇨🇩","cook_islands":"🇨🇰","costa_rica":"🇨🇷","cote_divoire":"🇨🇮","croatia":"🇭🇷","cuba":"🇨🇺","curacao":"🇨🇼","cyprus":"🇨🇾","czech_republic":"🇨🇿","denmark":"🇩🇰","djibouti":"🇩🇯","dominica":"🇩🇲","dominican_republic":"🇩🇴","ecuador":"🇪🇨","egypt":"🇪🇬","el_salvador":"🇸🇻","equatorial_guinea":"🇬🇶","eritrea":"🇪🇷","estonia":"🇪🇪","ethiopia":"🇪🇹","eu":"🇪🇺","european_union":"🇪🇺","falkland_islands":"🇫🇰","faroe_islands":"🇫🇴","fiji":"🇫🇯","finland":"🇫🇮","fr":"🇫🇷","french_guiana":"🇬🇫","french_polynesia":"🇵🇫","french_southern_territories":"🇹🇫","gabon":"🇬🇦","gambia":"🇬🇲","georgia":"🇬🇪","de":"🇩🇪","ghana":"🇬🇭","gibraltar":"🇬🇮","greece":"🇬🇷","greenland":"🇬🇱","grenada":"🇬🇩","guadeloupe":"🇬🇵","guam":"🇬🇺","guatemala":"🇬🇹","guernsey":"🇬🇬","guinea":"🇬🇳","guinea_bissau":"🇬🇼","guyana":"🇬🇾","haiti":"🇭🇹","honduras":"🇭🇳","hong_kong":"🇭🇰","hungary":"🇭🇺","iceland":"🇮🇸","india":"🇮🇳","indonesia":"🇮🇩","iran":"🇮🇷","iraq":"🇮🇶","ireland":"🇮🇪","isle_of_man":"🇮🇲","israel":"🇮🇱","it":"🇮🇹","jamaica":"🇯🇲","jp":"🇯🇵","crossed_flags":"🎌","jersey":"🇯🇪","jordan":"🇯🇴","kazakhstan":"🇰🇿","kenya":"🇰🇪","kiribati":"🇰🇮","kosovo":"🇽🇰","kuwait":"🇰🇼","kyrgyzstan":"🇰🇬","laos":"🇱🇦","latvia":"🇱🇻","lebanon":"🇱🇧","lesotho":"🇱🇸","liberia":"🇱🇷","libya":"🇱🇾","liechtenstein":"🇱🇮","lithuania":"🇱🇹","luxembourg":"🇱🇺","macau":"🇲🇴","macedonia":"🇲🇰","madagascar":"🇲🇬","malawi":"🇲🇼","malaysia":"🇲🇾","maldives":"🇲🇻","mali":"🇲🇱","malta":"🇲🇹","marshall_islands":"🇲🇭","martinique":"🇲🇶","mauritania":"🇲🇷","mauritius":"🇲🇺","mayotte":"🇾🇹","mexico":"🇲🇽","micronesia":"🇫🇲","moldova":"🇲🇩","monaco":"🇲🇨","mongolia":"🇲🇳","montenegro":"🇲🇪","montserrat":"🇲🇸","morocco":"🇲🇦","mozambique":"🇲🇿","myanmar":"🇲🇲","namibia":"🇳🇦","nauru":"🇳🇷","nepal":"🇳🇵","netherlands":"🇳🇱","new_caledonia":"🇳🇨","new_zealand":"🇳🇿","nicaragua":"🇳🇮","niger":"🇳🇪","nigeria":"🇳🇬","niue":"🇳🇺","norfolk_island":"🇳🇫","northern_mariana_islands":"🇲🇵","north_korea":"🇰🇵","norway":"🇳🇴","oman":"🇴🇲","pakistan":"🇵🇰","palau":"🇵🇼","palestinian_territories":"🇵🇸","panama":"🇵🇦","papua_new_guinea":"🇵🇬","paraguay":"🇵🇾","peru":"🇵🇪","philippines":"🇵🇭","pitcairn_islands":"🇵🇳","poland":"🇵🇱","portugal":"🇵🇹","puerto_rico":"🇵🇷","qatar":"🇶🇦","reunion":"🇷🇪","romania":"🇷🇴","ru":"🇷🇺","rwanda":"🇷🇼","st_barthelemy":"🇧🇱","st_helena":"🇸🇭","st_kitts_nevis":"🇰🇳","st_lucia":"🇱🇨","st_pierre_miquelon":"🇵🇲","st_vincent_grenadines":"🇻🇨","samoa":"🇼🇸","san_marino":"🇸🇲","sao_tome_principe":"🇸🇹","saudi_arabia":"🇸🇦","senegal":"🇸🇳","serbia":"🇷🇸","seychelles":"🇸🇨","sierra_leone":"🇸🇱","singapore":"🇸🇬","sint_maarten":"🇸🇽","slovakia":"🇸🇰","slovenia":"🇸🇮","solomon_islands":"🇸🇧","somalia":"🇸🇴","south_africa":"🇿🇦","south_georgia_south_sandwich_islands":"🇬🇸","kr":"🇰🇷","south_sudan":"🇸🇸","es":"🇪🇸","sri_lanka":"🇱🇰","sudan":"🇸🇩","suriname":"🇸🇷","swaziland":"🇸🇿","sweden":"🇸🇪","switzerland":"🇨🇭","syria":"🇸🇾","taiwan":"🇹🇼","tajikistan":"🇹🇯","tanzania":"🇹🇿","thailand":"🇹🇭","timor_leste":"🇹🇱","togo":"🇹🇬","tokelau":"🇹🇰","tonga":"🇹🇴","trinidad_tobago":"🇹🇹","tunisia":"🇹🇳","tr":"🇹🇷","turkmenistan":"🇹🇲","turks_caicos_islands":"🇹🇨","tuvalu":"🇹🇻","uganda":"🇺🇬","ukraine":"🇺🇦","united_arab_emirates":"🇦🇪","gb":"🇬🇧","uk":"🇬🇧","us":"🇺🇸","us_virgin_islands":"🇻🇮","uruguay":"🇺🇾","uzbekistan":"🇺🇿","vanuatu":"🇻🇺","vatican_city":"🇻🇦","venezuela":"🇻🇪","vietnam":"🇻🇳","wallis_futuna":"🇼🇫","western_sahara":"🇪🇭","yemen":"🇾🇪","zambia":"🇿🇲","zimbabwe":"🇿🇼"}')},function(d,f,i){d.exports={angry:[">:(",">:-("],blush:[':")',':-")'],broken_heart:["</3","<\\3"],confused:[":/",":-/"],cry:[":'(",":'-(",":,(",":,-("],frowning:[":(",":-("],heart:["<3"],imp:["]:(","]:-("],innocent:["o:)","O:)","o:-)","O:-)","0:)","0:-)"],joy:[":')",":'-)",":,)",":,-)",":'D",":'-D",":,D",":,-D"],kissing:[":*",":-*"],laughing:["x-)","X-)"],neutral_face:[":|",":-|"],open_mouth:[":o",":-o",":O",":-O"],rage:[":@",":-@"],smile:[":D",":-D"],smiley:[":)",":-)"],smiling_imp:["]:)","]:-)"],sob:[":,'(",":,'-(",";(",";-("],stuck_out_tongue:[":P",":-P"],sunglasses:["8-)","B-)"],sweat:[",:(",",:-("],sweat_smile:[",:)",",:-)"],unamused:[":s",":-S",":z",":-Z",":$",":-$"],wink:[";)",";-)"]}},function(d,f,i){d.exports=function(e,t){return e[t].content}},function(d,f,i){d.exports=function(e,t,r,n,s){var l=e.utils.arrayReplaceAt,a=e.utils.lib.ucmicro,c=new RegExp([a.Z.source,a.P.source,a.Cc.source].join("|"));function o(u,h,p){var _,m=0,g=[];return u.replace(s,function(k,w,v){var b;if(r.hasOwnProperty(k)){if(b=r[k],w>0&&!c.test(v[w-1])||w+k.length<v.length&&!c.test(v[w+k.length]))return}else b=k.slice(1,-1);w>m&&((_=new p("text","",0)).content=u.slice(m,w),g.push(_)),(_=new p("emoji","",0)).markup=b,_.content=t[b],g.push(_),m=w+k.length}),m<u.length&&((_=new p("text","",0)).content=u.slice(m),g.push(_)),g}return function(u){var h,p,_,m,g,k=u.tokens,w=0;for(p=0,_=k.length;p<_;p++)if(k[p].type==="inline")for(h=(m=k[p].children).length-1;h>=0;h--)(g=m[h]).type!=="link_open"&&g.type!=="link_close"||g.info==="auto"&&(w-=g.nesting),g.type==="text"&&w===0&&n.test(g.content)&&(k[p].children=m=l(m,h,o(g.content,g.level,u.Token)))}}},function(d,f,i){d.exports=function(e){var t,r=e.defs;e.enabled.length&&(r=Object.keys(r).reduce(function(a,c){return e.enabled.indexOf(c)>=0&&(a[c]=r[c]),a},{})),t=Object.keys(e.shortcuts).reduce(function(a,c){return r[c]?Array.isArray(e.shortcuts[c])?(e.shortcuts[c].forEach(function(o){a[o]=c}),a):(a[e.shortcuts[c]]=c,a):a},{});var n=Object.keys(r).map(function(a){return":"+a+":"}).concat(Object.keys(t)).sort().reverse().map(function(a){return a.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}).join("|"),s=RegExp(n),l=RegExp(n,"g");return{defs:r,shortcuts:t,scanRE:s,replaceRE:l}}},function(d,f,i){var e=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function t(r,n){var s,l,a=r.posMax,c=r.pos;if(r.src.charCodeAt(c)!==126||n||c+2>=a)return!1;for(r.pos=c+1;r.pos<a;){if(r.src.charCodeAt(r.pos)===126){s=!0;break}r.md.inline.skipToken(r)}return s&&c+1!==r.pos?(l=r.src.slice(c+1,r.pos)).match(/(^|[^\\])(\\\\)*\s/)?(r.pos=c,!1):(r.posMax=r.pos,r.pos=c+1,r.push("sub_open","sub",1).markup="~",r.push("text","",0).content=l.replace(e,"$1"),r.push("sub_close","sub",-1).markup="~",r.pos=r.posMax+1,r.posMax=a,!0):(r.pos=c,!1)}d.exports=function(r){r.inline.ruler.after("emphasis","sub",t)}},function(d,f,i){var e=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function t(r,n){var s,l,a=r.posMax,c=r.pos;if(r.src.charCodeAt(c)!==94||n||c+2>=a)return!1;for(r.pos=c+1;r.pos<a;){if(r.src.charCodeAt(r.pos)===94){s=!0;break}r.md.inline.skipToken(r)}return s&&c+1!==r.pos?(l=r.src.slice(c+1,r.pos)).match(/(^|[^\\])(\\\\)*\s/)?(r.pos=c,!1):(r.posMax=r.pos,r.pos=c+1,r.push("sup_open","sup",1).markup="^",r.push("text","",0).content=l.replace(e,"$1"),r.push("sup_close","sup",-1).markup="^",r.pos=r.posMax+1,r.posMax=a,!0):(r.pos=c,!1)}d.exports=function(r){r.inline.ruler.after("emphasis","sup",t)}},function(d,f,i){d.exports=function(e){var t=e.utils.isSpace;function r(n,s){var l,a,c=n.bMarks[s]+n.tShift[s],o=n.eMarks[s];return c>=o||(a=n.src.charCodeAt(c++))!==126&&a!==58||c===(l=n.skipSpaces(c))||l>=o?-1:c}e.block.ruler.before("paragraph","deflist",function(n,s,l,a){var c,o,u,h,p,_,m,g,k,w,v,b,y,S,j,O,x,E,C,T;if(a)return!(n.ddIndent<0)&&r(n,s)>=0;if((k=s+1)>=l||n.isEmpty(k)&&++k>=l||n.sCount[k]<n.blkIndent||(o=r(n,k))<0)return!1;m=n.tokens.length,C=!0,(T=n.push("dl_open","dl",1)).map=_=[s,0],h=s,u=k;e:for(;;){for(E=!1,(T=n.push("dt_open","dt",1)).map=[h,h],(T=n.push("inline","",0)).map=[h,h],T.content=n.getLines(h,h+1,n.blkIndent,!1).trim(),T.children=[],T=n.push("dt_close","dt",-1);;){for((T=n.push("dd_open","dd",1)).map=p=[k,0],x=o,g=n.eMarks[u],w=n.sCount[u]+o-(n.bMarks[u]+n.tShift[u]);x<g&&(c=n.src.charCodeAt(x),t(c));)c===9?w+=4-w%4:w++,x++;if(o=x,O=n.tight,v=n.ddIndent,b=n.blkIndent,j=n.tShift[u],S=n.sCount[u],y=n.parentType,n.blkIndent=n.ddIndent=n.sCount[u]+2,n.tShift[u]=o-n.bMarks[u],n.sCount[u]=w,n.tight=!0,n.parentType="deflist",n.md.block.tokenize(n,u,l,!0),n.tight&&!E||(C=!1),E=n.line-u>1&&n.isEmpty(n.line-1),n.tShift[u]=j,n.sCount[u]=S,n.tight=O,n.parentType=y,n.blkIndent=b,n.ddIndent=v,T=n.push("dd_close","dd",-1),p[1]=k=n.line,k>=l||n.sCount[k]<n.blkIndent)break e;if((o=r(n,k))<0)break;u=k}if(k>=l||(h=k,n.isEmpty(h))||n.sCount[h]<n.blkIndent||(u=h+1)>=l||(n.isEmpty(u)&&u++,u>=l)||n.sCount[u]<n.blkIndent||(o=r(n,u))<0)break}return T=n.push("dl_close","dl",-1),_[1]=k,n.line=k,C&&function(D,$){var N,z,H=D.level+2;for(N=$+2,z=D.tokens.length-2;N<z;N++)D.tokens[N].level===H&&D.tokens[N].type==="paragraph_open"&&(D.tokens[N+2].hidden=!0,D.tokens[N].hidden=!0,N+=2)}(n,m),!0},{alt:["paragraph","reference","blockquote"]})}},function(d,f,i){d.exports=function(e){var t=e.utils.escapeRE,r=e.utils.arrayReplaceAt,n=e.utils.lib.ucmicro.P.source,s=e.utils.lib.ucmicro.Z.source;e.block.ruler.before("reference","abbr_def",function(l,a,c,o){var u,h,p,_,m,g=l.bMarks[a]+l.tShift[a],k=l.eMarks[a];if(g+2>=k||l.src.charCodeAt(g++)!==42||l.src.charCodeAt(g++)!==91)return!1;for(_=g;g<k;g++){if((p=l.src.charCodeAt(g))===91)return!1;if(p===93){m=g;break}p===92&&g++}return!(m<0||l.src.charCodeAt(m+1)!==58)&&(!!o||(u=l.src.slice(_,m).replace(/\\(.)/g,"$1"),h=l.src.slice(m+2,k).trim(),u.length!==0&&h.length!==0&&(l.env.abbreviations||(l.env.abbreviations={}),l.env.abbreviations[":"+u]===void 0&&(l.env.abbreviations[":"+u]=h),l.line=a+1,!0)))},{alt:["paragraph","reference"]}),e.core.ruler.after("linkify","abbr_replace",function(l){var a,c,o,u,h,p,_,m,g,k,w,v,b,y=l.tokens;if(l.env.abbreviations){for(v=new RegExp("(?:"+Object.keys(l.env.abbreviations).map(function(S){return S.substr(1)}).sort(function(S,j){return j.length-S.length}).map(t).join("|")+")"),w="(^|"+n+"|"+s+"|["+" \r\n$+<=>^`|~".split("").map(t).join("")+"])("+Object.keys(l.env.abbreviations).map(function(S){return S.substr(1)}).sort(function(S,j){return j.length-S.length}).map(t).join("|")+")($|"+n+"|"+s+"|["+" \r\n$+<=>^`|~".split("").map(t).join("")+"])",g=new RegExp(w,"g"),c=0,o=y.length;c<o;c++)if(y[c].type==="inline"){for(a=(u=y[c].children).length-1;a>=0;a--)if((b=u[a]).type==="text"&&(m=0,p=b.content,g.lastIndex=0,_=[],v.test(p))){for(;k=g.exec(p);)(k.index>0||k[1].length>0)&&((h=new l.Token("text","",0)).content=p.slice(m,k.index+k[1].length),_.push(h)),(h=new l.Token("abbr_open","abbr",1)).attrs=[["title",l.env.abbreviations[":"+k[2]]]],_.push(h),(h=new l.Token("text","",0)).content=k[2],_.push(h),h=new l.Token("abbr_close","abbr",-1),_.push(h),g.lastIndex-=k[3].length,m=g.lastIndex;_.length&&(m<p.length&&((h=new l.Token("text","",0)).content=p.slice(m),_.push(h)),y[c].children=u=r(u,a,_))}}}})}},function(d,f,i){function e(o,u,h,p){var _=Number(o[u].meta.id+1).toString(),m="";return typeof p.docId=="string"&&(m="-"+p.docId+"-"),m+_}function t(o,u){var h=Number(o[u].meta.id+1).toString();return o[u].meta.subId>0&&(h+=":"+o[u].meta.subId),"["+h+"]"}function r(o,u,h,p,_){var m=_.rules.footnote_anchor_name(o,u,h,p,_),g=_.rules.footnote_caption(o,u,h,p,_),k=m;return o[u].meta.subId>0&&(k+=":"+o[u].meta.subId),'<sup class="footnote-ref"><a href="#fn'+m+'" id="fnref'+k+'">'+g+"</a></sup>"}function n(o,u,h){return(h.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`)+`<section class="footnotes">
<ol class="footnotes-list">
`}function s(){return`</ol>
</section>
`}function l(o,u,h,p,_){var m=_.rules.footnote_anchor_name(o,u,h,p,_);return o[u].meta.subId>0&&(m+=":"+o[u].meta.subId),'<li id="fn'+m+'" class="footnote-item">'}function a(){return`</li>
`}function c(o,u,h,p,_){var m=_.rules.footnote_anchor_name(o,u,h,p,_);return o[u].meta.subId>0&&(m+=":"+o[u].meta.subId),' <a href="#fnref'+m+'" class="footnote-backref">↩︎</a>'}d.exports=function(o){var u=o.helpers.parseLinkLabel,h=o.utils.isSpace;o.renderer.rules.footnote_ref=r,o.renderer.rules.footnote_block_open=n,o.renderer.rules.footnote_block_close=s,o.renderer.rules.footnote_open=l,o.renderer.rules.footnote_close=a,o.renderer.rules.footnote_anchor=c,o.renderer.rules.footnote_caption=t,o.renderer.rules.footnote_anchor_name=e,o.block.ruler.before("reference","footnote_def",function(p,_,m,g){var k,w,v,b,y,S,j,O,x,E,C,T=p.bMarks[_]+p.tShift[_],D=p.eMarks[_];if(T+4>D||p.src.charCodeAt(T)!==91||p.src.charCodeAt(T+1)!==94)return!1;for(y=T+2;y<D;y++){if(p.src.charCodeAt(y)===32)return!1;if(p.src.charCodeAt(y)===93)break}if(y===T+2||y+1>=D||p.src.charCodeAt(++y)!==58)return!1;if(g)return!0;for(y++,p.env.footnotes||(p.env.footnotes={}),p.env.footnotes.refs||(p.env.footnotes.refs={}),S=p.src.slice(T+2,y-2),p.env.footnotes.refs[":"+S]=-1,(j=new p.Token("footnote_reference_open","",1)).meta={label:S},j.level=p.level++,p.tokens.push(j),k=p.bMarks[_],w=p.tShift[_],v=p.sCount[_],b=p.parentType,C=y,O=x=p.sCount[_]+y-(p.bMarks[_]+p.tShift[_]);y<D&&(E=p.src.charCodeAt(y),h(E));)E===9?x+=4-x%4:x++,y++;return p.tShift[_]=y-C,p.sCount[_]=x-O,p.bMarks[_]=C,p.blkIndent+=4,p.parentType="footnote",p.sCount[_]<p.blkIndent&&(p.sCount[_]+=p.blkIndent),p.md.block.tokenize(p,_,m,!0),p.parentType=b,p.blkIndent-=4,p.tShift[_]=w,p.sCount[_]=v,p.bMarks[_]=k,(j=new p.Token("footnote_reference_close","",-1)).level=--p.level,p.tokens.push(j),!0},{alt:["paragraph","reference"]}),o.inline.ruler.after("image","footnote_inline",function(p,_){var m,g,k,w,v=p.posMax,b=p.pos;return!(b+2>=v)&&p.src.charCodeAt(b)===94&&p.src.charCodeAt(b+1)===91&&(m=b+2,!((g=u(p,b+1))<0)&&(_||(p.env.footnotes||(p.env.footnotes={}),p.env.footnotes.list||(p.env.footnotes.list=[]),k=p.env.footnotes.list.length,p.md.inline.parse(p.src.slice(m,g),p.md,p.env,w=[]),p.push("footnote_ref","",0).meta={id:k},p.env.footnotes.list[k]={content:p.src.slice(m,g),tokens:w}),p.pos=g+1,p.posMax=v,!0))}),o.inline.ruler.after("footnote_inline","footnote_ref",function(p,_){var m,g,k,w,v=p.posMax,b=p.pos;if(b+3>v||!p.env.footnotes||!p.env.footnotes.refs||p.src.charCodeAt(b)!==91||p.src.charCodeAt(b+1)!==94)return!1;for(g=b+2;g<v;g++){if(p.src.charCodeAt(g)===32||p.src.charCodeAt(g)===10)return!1;if(p.src.charCodeAt(g)===93)break}return g!==b+2&&!(g>=v)&&(g++,m=p.src.slice(b+2,g-1),p.env.footnotes.refs[":"+m]!==void 0&&(_||(p.env.footnotes.list||(p.env.footnotes.list=[]),p.env.footnotes.refs[":"+m]<0?(k=p.env.footnotes.list.length,p.env.footnotes.list[k]={label:m,count:0},p.env.footnotes.refs[":"+m]=k):k=p.env.footnotes.refs[":"+m],w=p.env.footnotes.list[k].count,p.env.footnotes.list[k].count++,p.push("footnote_ref","",0).meta={id:k,subId:w,label:m}),p.pos=g,p.posMax=v,!0))}),o.core.ruler.after("inline","footnote_tail",function(p){var _,m,g,k,w,v,b,y,S,j,O=!1,x={};if(p.env.footnotes&&(p.tokens=p.tokens.filter(function(E){return E.type==="footnote_reference_open"?(O=!0,S=[],j=E.meta.label,!1):E.type==="footnote_reference_close"?(O=!1,x[":"+j]=S,!1):(O&&S.push(E),!O)}),p.env.footnotes.list)){for(v=p.env.footnotes.list,b=new p.Token("footnote_block_open","",1),p.tokens.push(b),_=0,m=v.length;_<m;_++){for((b=new p.Token("footnote_open","",1)).meta={id:_,label:v[_].label},p.tokens.push(b),v[_].tokens?(y=[],(b=new p.Token("paragraph_open","p",1)).block=!0,y.push(b),(b=new p.Token("inline","",0)).children=v[_].tokens,b.content=v[_].content,y.push(b),(b=new p.Token("paragraph_close","p",-1)).block=!0,y.push(b)):v[_].label&&(y=x[":"+v[_].label]),y&&(p.tokens=p.tokens.concat(y)),w=p.tokens[p.tokens.length-1].type==="paragraph_close"?p.tokens.pop():null,k=v[_].count>0?v[_].count:1,g=0;g<k;g++)(b=new p.Token("footnote_anchor","",0)).meta={id:_,subId:g,label:v[_].label},p.tokens.push(b);w&&p.tokens.push(w),b=new p.Token("footnote_close","",-1),p.tokens.push(b)}b=new p.Token("footnote_block_close","",-1),p.tokens.push(b)}})}},function(d,f,i){d.exports=function(e){e.inline.ruler.before("emphasis","ins",function(t,r){var n,s,l,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==43||(l=(s=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),l<2))return!1;for(l%2&&(t.push("text","",0).content=a,l--),n=0;n<l;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,jump:n,token:t.tokens.length-1,level:t.level,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0}),e.inline.ruler2.before("emphasis","ins",function(t){var r,n,s,l,a,c=[],o=t.delimiters,u=t.delimiters.length;for(r=0;r<u;r++)(s=o[r]).marker===43&&s.end!==-1&&(l=o[s.end],(a=t.tokens[s.token]).type="ins_open",a.tag="ins",a.nesting=1,a.markup="++",a.content="",(a=t.tokens[l.token]).type="ins_close",a.tag="ins",a.nesting=-1,a.markup="++",a.content="",t.tokens[l.token-1].type==="text"&&t.tokens[l.token-1].content==="+"&&c.push(l.token-1));for(;c.length;){for(n=(r=c.pop())+1;n<t.tokens.length&&t.tokens[n].type==="ins_close";)n++;r!==--n&&(a=t.tokens[n],t.tokens[n]=t.tokens[r],t.tokens[r]=a)}})}},function(d,f,i){d.exports=function(e){e.inline.ruler.before("emphasis","mark",function(t,r){var n,s,l,a,c=t.pos,o=t.src.charCodeAt(c);if(r||o!==61||(l=(s=t.scanDelims(t.pos,!0)).length,a=String.fromCharCode(o),l<2))return!1;for(l%2&&(t.push("text","",0).content=a,l--),n=0;n<l;n+=2)t.push("text","",0).content=a+a,t.delimiters.push({marker:o,jump:n,token:t.tokens.length-1,level:t.level,end:-1,open:s.can_open,close:s.can_close});return t.pos+=s.length,!0}),e.inline.ruler2.before("emphasis","mark",function(t){var r,n,s,l,a,c=[],o=t.delimiters,u=t.delimiters.length;for(r=0;r<u;r++)(s=o[r]).marker===61&&s.end!==-1&&(l=o[s.end],(a=t.tokens[s.token]).type="mark_open",a.tag="mark",a.nesting=1,a.markup="==",a.content="",(a=t.tokens[l.token]).type="mark_close",a.tag="mark",a.nesting=-1,a.markup="==",a.content="",t.tokens[l.token-1].type==="text"&&t.tokens[l.token-1].content==="="&&c.push(l.token-1));for(;c.length;){for(n=(r=c.pop())+1;n<t.tokens.length&&t.tokens[n].type==="mark_close";)n++;r!==--n&&(a=t.tokens[n],t.tokens[n]=t.tokens[r],t.tokens[r]=a)}})}},function(d,f){var i=!0,e=!1,t=!1;function r(a,c,o){var u=a.attrIndex(c),h=[c,o];u<0?a.attrPush(h):a.attrs[u]=h}function n(a,c){for(var o=a[c].level-1,u=c-1;u>=0;u--)if(a[u].level===o)return u;return-1}function s(a,c){return a[c].type==="inline"&&function(o){return o.type==="paragraph_open"}(a[c-1])&&function(o){return o.type==="list_item_open"}(a[c-2])&&function(o){return o.content.indexOf("[ ] ")===0||o.content.indexOf("[x] ")===0||o.content.indexOf("[X] ")===0}(a[c])}function l(a,c){if(a.children.unshift(function(u,h){var p=new h("html_inline","",0),_=i?' disabled="" ':"";return u.content.indexOf("[ ] ")===0?p.content='<input class="task-list-item-checkbox"'+_+'type="checkbox">':u.content.indexOf("[x] ")!==0&&u.content.indexOf("[X] ")!==0||(p.content='<input class="task-list-item-checkbox" checked=""'+_+'type="checkbox">'),p}(a,c)),a.children[1].content=a.children[1].content.slice(3),a.content=a.content.slice(3),e)if(t){a.children.pop();var o="task-item-"+Math.ceil(1e7*Math.random()-1e3);a.children[0].content=a.children[0].content.slice(0,-1)+' id="'+o+'">',a.children.push(function(u,h,p){var _=new p("html_inline","",0);return _.content='<label class="task-list-item-label" for="'+h+'">'+u+"</label>",_.attrs=[{for:h}],_}(a.content,o,c))}else a.children.unshift(function(u){var h=new u("html_inline","",0);return h.content="<label>",h}(c)),a.children.push(function(u){var h=new u("html_inline","",0);return h.content="</label>",h}(c))}d.exports=function(a,c){c&&(i=!c.enabled,e=!!c.label,t=!!c.labelAfter),a.core.ruler.after("inline","github-task-lists",function(o){for(var u=o.tokens,h=2;h<u.length;h++)s(u,h)&&(l(u[h],o.Token),r(u[h-2],"class","task-list-item"+(i?"":" enabled")),r(u[n(u,h-2)],"class","contains-task-list"))})}},function(d,f,i){d.exports=function(e,t,r){var n=(r=r||{}).marker||":",s=n.charCodeAt(0),l=n.length,a=r.validate||function(o){return o.trim().split(" ",2)[0]===t},c=r.render||function(o,u,h,p,_){return o[u].nesting===1&&o[u].attrPush(["class",t]),_.renderToken(o,u,h,p,_)};e.block.ruler.before("fence","container_"+t,function(o,u,h,p){var _,m,g,k,w,v,b,y,S=!1,j=o.bMarks[u]+o.tShift[u],O=o.eMarks[u];if(s!==o.src.charCodeAt(j))return!1;for(_=j+1;_<=O&&n[(_-j)%l]===o.src[_];_++);if((g=Math.floor((_-j)/l))<3||(_-=(_-j)%l,k=o.src.slice(j,_),w=o.src.slice(_,O),!a(w)))return!1;if(p)return!0;for(m=u;!(++m>=h)&&!((j=o.bMarks[m]+o.tShift[m])<(O=o.eMarks[m])&&o.sCount[m]<o.blkIndent);)if(s===o.src.charCodeAt(j)&&!(o.sCount[m]-o.blkIndent>=4)){for(_=j+1;_<=O&&n[(_-j)%l]===o.src[_];_++);if(!(Math.floor((_-j)/l)<g||(_-=(_-j)%l,(_=o.skipSpaces(_))<O))){S=!0;break}}return b=o.parentType,y=o.lineMax,o.parentType="container",o.lineMax=m,(v=o.push("container_"+t+"_open","div",1)).markup=k,v.block=!0,v.info=w,v.map=[u,m],o.md.block.tokenize(o,u+1,m),(v=o.push("container_"+t+"_close","div",-1)).markup=o.src.slice(j,_),v.block=!0,o.parentType=b,o.lineMax=y,o.line=m+(S?1:0),!0},{alt:["paragraph","reference","blockquote","list"]}),e.renderer.rules["container_"+t+"_open"]=c,e.renderer.rules["container_"+t+"_close"]=c}},function(d,f,i){d.exports=function(e){var t,r=/^@\[toc\](?:\((?:\s+)?([^\)]+)(?:\s+)?\)?)?(?:\s+?)?$/im,n=function(s){return s.replace(/[^\w\s]/gi,"").split(" ").join("_")};e.renderer.rules.heading_open=function(s,l){var a=s[l].tag,c=s[l+1];return c.type==="inline"?"<"+a+'><a id="'+(n(c.content)+"_"+c.map[0])+'"></a>':"</h1>"},e.renderer.rules.toc_open=function(s,l){return""},e.renderer.rules.toc_close=function(s,l){return""},e.renderer.rules.toc_body=function(s,l){for(var a=[],c=t.tokens,o=c.length,u=0;u<o;u++)if(c[u].type==="heading_close"){var h=c[u],p=c[u-1];p.type==="inline"&&a.push({level:+h.tag.substr(1,1),anchor:n(p.content)+"_"+p.map[0],content:p.content})}var _=0,m=a.map(function(g){var k=[];if(g.level>_)for(var w=g.level-_,v=0;v<w;v++)k.push("<ul>"),_++;else if(g.level<_)for(w=_-g.level,v=0;v<w;v++)k.push("</ul>"),_--;return(k=k.concat(['<li><a href="#',g.anchor,'">',g.content,"</a></li>"])).join("")});return"<h3>"+s[l].content+"</h3>"+m.join("")+new Array(_+1).join("</ul>")},e.core.ruler.push("grab_state",function(s){t=s}),e.inline.ruler.after("emphasis","toc",function(s,l){for(;s.src.indexOf(`
`)>=0&&s.src.indexOf(`
`)<s.src.indexOf("@[toc]");)s.tokens.slice(-1)[0].type==="softbreak"&&(s.src=s.src.split(`
`).slice(1).join(`
`),s.pos=0);var a;if(s.src.charCodeAt(s.pos)!==64||s.src.charCodeAt(s.pos+1)!==91)return!1;var c=r.exec(s.src);if(!c||(c=c.filter(function(p){return p})).length<1||l)return!1;(a=s.push("toc_open","toc",1)).markup="@[toc]",a=s.push("toc_body","",0);var o="Table of Contents";c.length>1&&(o=c.pop()),a.content=o,a=s.push("toc_close","toc",-1);var u=0,h=s.src.indexOf(`
`);return u=h!==-1?s.pos+h:s.pos+s.posMax+1,s.pos=u,!0})}},function(d,f){d.exports=function(i,e){(e=e||{}).highlighted===void 0&&(e.highlighted=!0),e.hljs===void 0&&(e.hljs="auto"),typeof e.langCheck!="function"&&(e.langCheck=function(){}),i.options.highlight=function(t,r){var n=e.hljs;if(e.hljs==="auto"&&(n=window.hljs),e.highlighted&&r&&n){if(n.getLanguage(r))return'<pre><div class="hljs"><code class="'+i.options.langPrefix+r+'">'+n.highlight(r,t,!0).value+"</code></div></pre>";typeof e.langCheck=="function"&&e.langCheck(r)}return'<pre><code class="'+i.options.langPrefix+r+'">'+i.utils.escapeHtml(t)+"</code></pre>"}}},function(d,f,i){var e=null;function t(s,l){var a,c,o=s.posMax,u=!0,h=!0;return a=l>0?s.src.charCodeAt(l-1):-1,c=l+1<=o?s.src.charCodeAt(l+1):-1,(a===32||a===9||c>=48&&c<=57)&&(h=!1),c!==32&&c!==9||(u=!1),{can_open:u,can_close:h}}function r(s,l){if(!e&&window.katex&&(e=window.katex),!e)return!1;var a,c,o,u;if(s.src[s.pos]!=="$")return!1;if(!t(s,s.pos).can_open)return l||(s.pending+="$"),s.pos+=1,!0;for(c=a=s.pos+1;(c=s.src.indexOf("$",c))!==-1;){for(u=c-1;s.src[u]==="\\";)u-=1;if((c-u)%2==1)break;c+=1}return c===-1?(l||(s.pending+="$"),s.pos=a,!0):c-a==0?(l||(s.pending+="$$"),s.pos=a+1,!0):t(s,c).can_close?(l||((o=s.push("math_inline","math",0)).markup="$",o.content=s.src.slice(a,c)),s.pos=c+1,!0):(l||(s.pending+="$"),s.pos=a,!0)}function n(s,l,a,c){if(!e&&window.katex&&(e=window.katex),!e)return!1;var o,u,h,p,_,m=!1,g=s.bMarks[l]+s.tShift[l],k=s.eMarks[l];if(g+2>k||s.src.slice(g,g+2)!=="$$")return!1;if(g+=2,o=s.src.slice(g,k),c)return!0;for(o.trim().slice(-2)==="$$"&&(o=o.trim().slice(0,-2),m=!0),h=l;!m&&!(++h>=a)&&!((g=s.bMarks[h]+s.tShift[h])<(k=s.eMarks[h])&&s.tShift[h]<s.blkIndent);)s.src.slice(g,k).trim().slice(-2)==="$$"&&(p=s.src.slice(0,k).lastIndexOf("$$"),u=s.src.slice(g,p),m=!0);return s.line=h+1,(_=s.push("math_block","math",0)).block=!0,_.content=(o&&o.trim()?o+`
`:"")+s.getLines(l+1,h,s.tShift[l],!0)+(u&&u.trim()?u:""),_.map=[l,s.line],_.markup="$$",!0}d.exports=function(s,l){l=l||{},s.inline.ruler.after("escape","math_inline",r),s.block.ruler.after("blockquote","math_block",n,{alt:["paragraph","reference","blockquote","list"]}),s.renderer.rules.math_inline=function(a,c){return function(o){!e&&window.katex&&(e=window.katex),l.displayMode=!1;try{return e.renderToString(o,l)}catch(u){return l.throwOnError&&console.log(u),o}}(a[c].content)},s.renderer.rules.math_block=function(a,c){return function(o){!e&&window.katex&&(e=window.katex),l.displayMode=!0;try{return"<p>"+e.renderToString(o,l)+"</p>"}catch(u){return l.throwOnError&&console.log(u),o}}(a[c].content)+`
`}}},function(d,f){d.exports=function(i,e){i.image_add=function(r,n){i.__image instanceof Object||(i.__image={}),i.__image[r]=n},i.image_del=function(r){i.__image instanceof Object||(i.__image={}),delete i.__image[r]};var t=i.renderer.rules.image;i.renderer.rules.image=function(r,n,s,l,a){var c=r[n].attrs;if(i.__image instanceof Object){for(var o=0;o<c.length;o++)if(c[o][0]=="src"&&i.__image.hasOwnProperty(r[n].attrs[o][1])){c.push(["rel",c[o][1]]),c[o][1]=i.__image[r[n].attrs[o][1]];break}}return t(r,n,s,l,a)}}},function(d,f,i){i(71)},function(d,f,i){(f=i(43)(!1)).push([d.i,".op-icon.dropdown-wrapper.dropdown[data-v-218640b4]{position:relative}.op-icon.dropdown-wrapper.dropdown[type=button][data-v-218640b4]{-webkit-appearance:unset}.op-icon.dropdown-wrapper.dropdown .popup-dropdown[data-v-218640b4]{position:absolute;display:block;background:#fff;top:32px;left:-45px;min-width:130px;z-index:1600;border:1px solid #ebeef5;border-radius:4px;box-shadow:0 2px 12px 0 rgba(0,0,0,0.1)}.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-218640b4]:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown .dropdown-item[data-v-218640b4]:last-child{border-bottom-left-radius:3px;border-bottom-right-radius:3px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.op-header[data-v-218640b4]{left:-30px;min-width:90px}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter-active[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-218640b4]{opacity:1}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-enter[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.fade-leave-active[data-v-218640b4]{opacity:0}.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition[data-v-218640b4],.op-icon.dropdown-wrapper.dropdown .popup-dropdown.transition .dropdown-item[data-v-218640b4]{transition:all .2s linear 0s}.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-218640b4]{height:40px;line-height:40px;font-size:14px;color:#606266;position:relative}.op-icon.dropdown-wrapper.dropdown .dropdown-item[data-v-218640b4]:hover{color:#303133;background-color:#e9e9eb}.op-icon.dropdown-wrapper.dropdown .dropdown-item input[data-v-218640b4]{position:absolute;font-size:100px;right:0;top:0;opacity:0;cursor:pointer}.op-icon.dropdown-wrapper.dropdown .dropdown-images[data-v-218640b4]{box-sizing:border-box}.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-218640b4]{position:absolute;top:-1px;right:5px;font-size:14px}.op-icon.dropdown-wrapper.dropdown .dropdown-images button[data-v-218640b4]:hover{color:#f56c6c;background-color:transparent}.op-icon.dropdown-wrapper.dropdown .dropdown-images span[data-v-218640b4]{display:inline-block;width:80px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.op-icon.dropdown-wrapper.dropdown .dropdown-images:hover .image-show[data-v-218640b4]{display:block !important}.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show[data-v-218640b4]{display:none;position:absolute;left:-128px;top:0;width:120px;height:90px;object-fit:contain;border:1px solid #f2f6fc}.op-icon.dropdown-wrapper.dropdown .dropdown-images .image-show.transition[data-v-218640b4]{transition:all .2s linear 0s}.op-icon.dropdown-wrapper.dropdown .dropdown-images.transition[data-v-218640b4]{transition:all .2s linear 0s}.add-image-link-wrapper[data-v-218640b4]{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.add-image-link-wrapper.fade-enter-active[data-v-218640b4],.add-image-link-wrapper.fade-leave-active[data-v-218640b4]{opacity:1}.add-image-link-wrapper.fade-enter[data-v-218640b4],.add-image-link-wrapper.fade-leave-active[data-v-218640b4]{opacity:0}.add-image-link-wrapper .add-image-link[data-v-218640b4]{position:fixed;box-sizing:border-box;text-align:center;width:24%;left:38%;height:auto;padding:40px;top:25%;transition:all .1s linear 0s;z-index:3;background:#fff;border-radius:2px}@media only screen and (max-width:1500px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:34%;left:33%}}@media only screen and (max-width:1000px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:50%;left:25%}}@media only screen and (max-width:600px){.add-image-link-wrapper .add-image-link[data-v-218640b4]{width:80%;left:10%}}.add-image-link-wrapper .add-image-link i[data-v-218640b4]{font-size:24px;position:absolute;right:8px;top:6px;color:rgba(0,0,0,0.7);cursor:pointer}.add-image-link-wrapper .add-image-link .title[data-v-218640b4]{font-size:20px;margin-bottom:30px;margin-top:10px;font-weight:500 !important}.add-image-link-wrapper .add-image-link .input-wrapper[data-v-218640b4]{margin-top:10px;width:80%;border:1px solid #eeece8;text-align:left;margin-left:10%;height:35px}.add-image-link-wrapper .add-image-link .input-wrapper input[data-v-218640b4]{height:32px;line-height:32px;font-size:15px;width:90%;margin-left:8px;border:none;outline:none}.add-image-link-wrapper .add-image-link .op-btn[data-v-218640b4]{width:100px;height:35px;display:inline-block;margin-top:30px;cursor:pointer;text-align:center;line-height:35px;opacity:.9;border-radius:2px;letter-spacing:1px;font-size:15px}.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-218640b4]{background:#2185d0;color:#fff;margin-left:5%}.add-image-link-wrapper .add-image-link .op-btn.sure[data-v-218640b4]:hover{opacity:1}.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-218640b4]{border:1px solid #bcbcbc;color:#bcbcbc}.add-image-link-wrapper .add-image-link .op-btn.cancel[data-v-218640b4]:hover{color:#000}",""]),d.exports=f},function(d,f,i){i.r(f);var e=i(78),t=i(24);for(var r in t)["default"].indexOf(r)<0&&function(l){i.d(f,l,function(){return t[l]})}(r);i(217);var n=i(3);const s=i.n(n)()(t.default,[["render",e.a]]);f.default=s},function(d,f,i){i(73)},function(d,f,i){(f=i(43)(!1)).push([d.i,'.auto-textarea-wrapper{position:relative;width:100%;margin:0;padding:0;line-height:normal}.auto-textarea-wrapper .auto-textarea-block{display:block;white-space:pre-wrap;word-wrap:break-word !important;visibility:hidden;overflow:hidden;margin:0;padding:0;box-sizing:border-box;font-size:100%}.auto-textarea-wrapper .auto-textarea-input{font-family:Menlo,"Ubuntu Mono",Consolas,"Courier New","Microsoft Yahei","Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;overflow-y:hidden;color:#2c3e50}.auto-textarea-wrapper .auto-textarea-input.no-border{outline:0 none;border:none !important}.auto-textarea-wrapper .auto-textarea-input.no-resize{resize:none}',""]),d.exports=f},function(d,f,i){i(74)},function(d,f,i){(f=i(43)(!1)).push([d.i,"textarea:disabled{background-color:#fff}.v-note-wrapper{position:relative;min-width:300px;min-height:300px;display:flex;flex-direction:column;background-color:#fff;z-index:1500;text-align:left;border:1px solid #f2f6fc;border-radius:4px}.v-note-wrapper.fullscreen{position:fixed;left:0;right:0;bottom:0;top:0;margin:0;height:auto;z-index:1501}.v-note-wrapper .v-note-op{padding:1px;width:100%;display:flex;white-space:pre-line;flex:none;min-height:40px;user-select:none;border-bottom:1px solid #f2f6fc;border-radius:4px 4px 0 0;background-color:#fff;z-index:1}.v-note-wrapper .v-note-op .v-left-item,.v-note-wrapper .v-note-op .v-right-item{flex:1;min-height:40px;box-sizing:border-box}.v-note-wrapper .v-note-op .v-left-item .op-icon-divider,.v-note-wrapper .v-note-op .v-right-item .op-icon-divider{height:40px;border-left:1px solid #e5e5e5;margin:0 6px 0 4px}.v-note-wrapper .v-note-op .v-left-item .op-icon,.v-note-wrapper .v-note-op .v-right-item .op-icon{box-sizing:border-box;display:inline-block;cursor:pointer;height:28px;width:28px;margin:6px 0 5px 0;font-size:14px;padding:4.5px 6px 5px 3.5px;color:#757575;border-radius:5px;text-align:center;background:none;border:none;outline:none;line-height:1}.v-note-wrapper .v-note-op .v-left-item .op-icon.dropdown-wrapper,.v-note-wrapper .v-note-op .v-right-item .op-icon.dropdown-wrapper{line-height:18px}.v-note-wrapper .v-note-op .v-left-item .op-icon.selected,.v-note-wrapper .v-note-op .v-right-item .op-icon.selected{color:rgba(0,0,0,0.8);background:#eaeaea}.v-note-wrapper .v-note-op .v-left-item .op-icon:hover,.v-note-wrapper .v-note-op .v-right-item .op-icon:hover{color:rgba(0,0,0,0.8);background:#e9e9eb}.v-note-wrapper .v-note-op .v-left-item.transition .op-icon,.v-note-wrapper .v-note-op .v-right-item.transition .op-icon{transition:all .2s linear 0s}.v-note-wrapper .v-note-op .v-right-item{text-align:right;padding-right:6px;max-width:30%}.v-note-wrapper .v-note-op .v-left-item{text-align:left;padding-left:6px}.v-note-wrapper .v-note-panel{position:relative;border-top:none;display:flex;flex:1;width:100%;box-sizing:border-box;overflow:hidden}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper{flex:0 0 50%;width:50%;padding:0;overflow-y:scroll;overflow-x:hidden;box-sizing:border-box;cursor:text;border-bottom-left-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.transition{transition:all .2s linear 0s}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-edit{width:100%;flex:0 0 100%;overflow-y:auto}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper.single-show{width:0;flex:0 0 0;display:none}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-div{width:100%;padding:20px 25px;box-sizing:border-box;outline:0 none;border:none !important;color:#2c3e50;font-size:16px}.v-note-wrapper .v-note-panel .v-note-edit.divarea-wrapper .content-input-wrapper{width:100%;padding:8px 25px 15px 25px}.v-note-wrapper .v-note-panel .v-note-show{flex:0 0 50%;width:50%;overflow-y:auto;padding:0 0;transition:all .2s linear 0s}.v-note-wrapper .v-note-panel .v-note-show.single-show{flex:0 0 100%;width:100%}.v-note-wrapper .v-note-panel .v-note-show .v-show-content,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html{width:100%;height:100%;padding:8px 25px 15px 25px;overflow-y:auto;box-sizing:border-box;overflow-x:hidden}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:hover,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-thumb:active,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style::-webkit-scrollbar-track,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-show .v-show-content.scroll-style-border-radius::-webkit-scrollbar,.v-note-wrapper .v-note-panel .v-note-show .v-show-content-html.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper{display:flex;position:absolute;width:250px;right:0;top:0;bottom:0;height:100%;flex-direction:column;background-color:rgba(255,255,255,0.98);border-left:1px solid #f2f6fc;border-right:1px solid #f2f6fc}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.transition{transition:all .1s linear 0s}@media only screen and (max-width:768px){.v-note-wrapper .v-note-panel .v-note-navigation-wrapper{width:50%}}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter-active,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active{height:100%}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-enter,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper.slideTop-leave-active{height:0}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title{height:50px;width:100%;border-bottom:1px solid #f2f6fc;flex:none;line-height:50px;font-size:16px;box-sizing:border-box;padding:0 12px 0 18px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close{float:right;color:#606266;font-size:18px;cursor:pointer}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-title .v-note-navigation-close:hover{color:#303133}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content{overflow-y:auto;flex:1;padding:8px 0}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6{margin:2px 0;font-weight:500;font-size:17px;color:#2185d0;cursor:pointer;line-height:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 12px;border-bottom:none}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h1:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5:hover,.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6:hover{color:#483d8b;text-decoration-line:underline}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h2{padding-left:27px;font-size:17px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h3{padding-left:42px;font-size:17px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h4{padding-left:58px;font-size:15px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h5{padding-left:72px;font-size:15px}.v-note-wrapper .v-note-panel .v-note-navigation-wrapper .v-note-navigation-content h6{padding-left:87px;font-size:15px}.v-note-wrapper .v-note-read-model{position:relative;display:none;width:100%;height:100%;background:#fbfbfb;padding:30px 8% 50px 8%;overflow-y:auto;box-sizing:border-box}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-wrapper .v-note-read-model.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-wrapper .v-note-read-model.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-wrapper .v-note-read-model.show{display:block}.v-note-wrapper.shadow{border:none}.v-note-help-wrapper{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.v-note-help-wrapper.fade-enter-active,.v-note-help-wrapper.fade-leave-active{opacity:1}.v-note-help-wrapper.fade-enter,.v-note-help-wrapper.fade-leave-active{opacity:0}.v-note-help-wrapper .v-note-help-content{position:relative;width:60%;max-width:800px;margin:30px auto;height:90%;min-width:320px;transition:all .1s linear 0s;z-index:3;border:1px solid #f2f6fc}.v-note-help-wrapper .v-note-help-content.shadow{border:none;box-shadow:0 0 5px rgba(0,0,0,0.157),0 0 5px rgba(0,0,0,0.227)}.v-note-help-wrapper .v-note-help-content i{font-size:28px;position:absolute;right:15px;top:8px;color:rgba(0,0,0,0.7);cursor:pointer}.v-note-help-wrapper .v-note-help-content i:hover{color:#000}.v-note-help-wrapper .v-note-help-content .v-note-help-show{width:100%;height:100%;font-size:18px;background:#fbfbfb;overflow-y:auto;padding:2% 6%}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar{width:6px;background-color:#e5e5e5}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb{background-color:#b7b7b7;border-radius:4px}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-thumb:active{background-color:#a1a1a1}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style::-webkit-scrollbar-track{-webkit-box-shadow:0 0 0 #808080 inset}.v-note-help-wrapper .v-note-help-content .v-note-help-show.scroll-style-border-radius::-webkit-scrollbar{border-bottom-right-radius:4px}.v-note-img-wrapper{position:fixed;display:flex;justify-content:center;align-items:center;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.7);z-index:1600;transition:all .1s linear 0s}.v-note-img-wrapper.fade-enter-active,.v-note-img-wrapper.fade-leave-active{opacity:1}.v-note-img-wrapper.fade-enter,.v-note-img-wrapper.fade-leave-active{opacity:0}.v-note-img-wrapper img{flex:0 0 auto;z-index:3}.v-note-img-wrapper i{font-size:28px;position:absolute;right:15px;top:8px;color:rgba(255,255,255,0.7);cursor:pointer}.v-note-img-wrapper i:hover{color:#fff}",""]),d.exports=f},function(d,f,i){i(233)},function(d,f){},,,,,,,,,function(d,f){},,function(d,f){}])})})(mavonEditor);var mavonEditorExports=mavonEditor.exports;const index="";export{mavonEditorExports as m};
