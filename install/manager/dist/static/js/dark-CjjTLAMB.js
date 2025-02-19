var j=(t,e,a)=>new Promise((o,i)=>{var p=n=>{try{c(a.next(n))}catch(d){i(d)}},T=n=>{try{c(a.throw(n))}catch(d){i(d)}},c=n=>n.done?o(n.value):Promise.resolve(n.value).then(p,T);c((a=a.apply(t,e)).next())});import{ae as O,c as C,aE as $,x as L,s as K,d as V,N as y,b as S,g as k,a7 as ee,r as B,aF as te,l as D,aG as oe,aH as ae,aI as se,aJ as re,u as le,h as ne,aK as ie,aL as ue,y as he,f as ce,Z as de,W as N,aB as M,w as me,aM as pe,p as X,q as Y,G as R}from"./index-DGNIR5hM.js";function fe(){const{$storage:t,$config:e}=O(),a=()=>{var p,T,c,n,d,f,b,A,w,g,r,l,h,m,u;$().multiTagsCache&&(!t.tags||t.tags.length===0)&&(t.tags=L),t.layout||(t.layout={layout:(p=e==null?void 0:e.Layout)!=null?p:"vertical",theme:(T=e==null?void 0:e.Theme)!=null?T:"light",darkMode:(c=e==null?void 0:e.DarkMode)!=null?c:!1,sidebarStatus:(n=e==null?void 0:e.SidebarStatus)!=null?n:!0,epThemeColor:(d=e==null?void 0:e.EpThemeColor)!=null?d:"#409EFF",themeColor:(f=e==null?void 0:e.Theme)!=null?f:"light",overallStyle:(b=e==null?void 0:e.OverallStyle)!=null?b:"light"}),t.configure||(t.configure={grey:(A=e==null?void 0:e.Grey)!=null?A:!1,weak:(w=e==null?void 0:e.Weak)!=null?w:!1,hideTabs:(g=e==null?void 0:e.HideTabs)!=null?g:!1,hideFooter:(r=e.HideFooter)!=null?r:!0,showLogo:(l=e==null?void 0:e.ShowLogo)!=null?l:!0,showModel:(h=e==null?void 0:e.ShowModel)!=null?h:"smart",multiTagsCache:(m=e==null?void 0:e.MultiTagsCache)!=null?m:!1,stretch:(u=e==null?void 0:e.Stretch)!=null?u:!1})},o=C(()=>t==null?void 0:t.layout.layout),i=C(()=>t.layout);return{layout:o,layoutTheme:i,initStorage:a}}const ge=V({id:"pure-app",state:()=>{var t,e,a,o;return{sidebar:{opened:(e=(t=y().getItem(`${S()}layout`))==null?void 0:t.sidebarStatus)!=null?e:k().SidebarStatus,withoutAnimation:!1,isClickCollapse:!1},layout:(o=(a=y().getItem(`${S()}layout`))==null?void 0:a.layout)!=null?o:k().Layout,device:ee()?"mobile":"desktop",viewportSize:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}},getters:{getSidebarStatus(t){return t.sidebar.opened},getDevice(t){return t.device},getViewportWidth(t){return t.viewportSize.width},getViewportHeight(t){return t.viewportSize.height}},actions:{TOGGLE_SIDEBAR(t,e){const a=y().getItem(`${S()}layout`);t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!0,a.sidebarStatus=!0):!t&&e?(this.sidebar.withoutAnimation=!0,this.sidebar.opened=!1,a.sidebarStatus=!1):!t&&!e&&(this.sidebar.withoutAnimation=!1,this.sidebar.opened=!this.sidebar.opened,this.sidebar.isClickCollapse=!this.sidebar.opened,a.sidebarStatus=this.sidebar.opened),y().setItem(`${S()}layout`,a)},toggleSideBar(t,e){return j(this,null,function*(){yield this.TOGGLE_SIDEBAR(t,e)})},toggleDevice(t){this.device=t},setLayout(t){this.layout=t},setViewportSize(t){this.viewportSize=t},setSortSwap(t){this.sortSwap=t}}});function G(){return ge(K)}const ve=V({id:"pure-epTheme",state:()=>{var t,e,a,o;return{epThemeColor:(e=(t=y().getItem(`${S()}layout`))==null?void 0:t.epThemeColor)!=null?e:k().EpThemeColor,epTheme:(o=(a=y().getItem(`${S()}layout`))==null?void 0:a.theme)!=null?o:k().Theme}},getters:{getEpThemeColor(t){return t.epThemeColor},fill(t){return t.epTheme==="light"?"#409eff":t.epTheme==="yellow"?"#d25f00":"#fff"}},actions:{setEpThemeColor(t){const e=y().getItem(`${S()}layout`);this.epTheme=e==null?void 0:e.theme,this.epThemeColor=t,e&&(e.epThemeColor=t,y().setItem(`${S()}layout`,e))}}});function H(){return ve(K)}function Me(){var w,g;const{layoutTheme:t,layout:e}=fe(),a=B([{color:"#ffffff",themeColor:"light"},{color:"#1b2a47",themeColor:"default"},{color:"#722ed1",themeColor:"saucePurple"},{color:"#eb2f96",themeColor:"pink"},{color:"#f5222d",themeColor:"dusk"},{color:"#fa541c",themeColor:"volcano"},{color:"#13c2c2",themeColor:"mingQing"},{color:"#52c41a",themeColor:"auroraGreen"}]),{$storage:o}=O(),i=B((w=o==null?void 0:o.layout)==null?void 0:w.darkMode),p=B((g=o==null?void 0:o.layout)==null?void 0:g.overallStyle),T=document.documentElement;function c(r,l,h){const m=h||document.body;let{className:u}=m;u=u.replace(l,"").trim(),m.className=r?`${u} ${l}`:u}function n(r=(h=>(h=k().Theme)!=null?h:"light")(),l=!0){var u,E;t.value.theme=r,document.documentElement.setAttribute("data-theme",r);const m=o.layout.themeColor;if(o.layout={layout:e.value,theme:r,darkMode:i.value,sidebarStatus:(u=o.layout)==null?void 0:u.sidebarStatus,epThemeColor:(E=o.layout)==null?void 0:E.epThemeColor,themeColor:l?r:m,overallStyle:p.value},r==="default"||r==="light")f(k().EpThemeColor);else{const z=a.value.find(W=>W.themeColor===r);f(z.color)}}function d(r,l,h){document.documentElement.style.setProperty(`--el-color-primary-${r}-${l}`,i.value?se(h,l/10):re(h,l/10))}const f=r=>{H().setEpThemeColor(r),document.documentElement.style.setProperty("--el-color-primary",r);for(let l=1;l<=2;l++)d("dark",l,r);for(let l=1;l<=9;l++)d("light",l,r)};function b(r){p.value=r,H().epTheme==="light"&&i.value?n("default",!1):n(H().epTheme,!1),i.value?document.documentElement.classList.add("dark"):(o.layout.themeColor==="light"&&n("light",!1),document.documentElement.classList.remove("dark"))}function A(){te(),y().clear();const{Grey:r,Weak:l,MultiTagsCache:h,EpThemeColor:m,Layout:u}=k();G().setLayout(u),f(m),D().multiTagsCacheChange(h),c(r,"html-grey",document.querySelector("html")),c(l,"html-weakness",document.querySelector("html")),oe.push("/login"),D().handleTags("equal",[...L]),ae()}return{body:T,dataTheme:i,overallStyle:p,layoutTheme:t,themeColors:a,onReset:A,toggleClass:c,dataThemeChange:b,setEpThemeColor:f,setLayoutThemeColor:n}}function Ce(t){return{all:t=t||new Map,on:function(e,a){var o=t.get(e);o?o.push(a):t.set(e,[a])},off:function(e,a){var o=t.get(e);o&&(a?o.splice(o.indexOf(a)>>>0,1):t.set(e,[]))},emit:function(e,a){var o=t.get(e);o&&o.slice().map(function(i){i(a)}),(o=t.get("*"))&&o.slice().map(function(i){i(e,a)})}}}const U=Ce(),ye="data:image/jpeg;base64,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",ke="The current routing configuration is incorrect, please check the configuration";function Ee(){var Q,P;const t=le(),e=ne(),a=G(),o=e.options.routes,{isFullscreen:i,toggle:p}=ie(),{wholeMenus:T}=ue(he()),c=(P=(Q=k())==null?void 0:Q.TooltipEffect)!=null?P:"light",n=C(()=>({width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",overflow:"hidden"})),d=C(()=>{var s,v;return N((s=M())==null?void 0:s.avatar)?ye:(v=M())==null?void 0:v.avatar}),f=C(()=>{var s,v,F;return N((s=M())==null?void 0:s.username)?(v=M())==null?void 0:v.username:(F=M())==null?void 0:F.nickname}),b=C(()=>f.value?{marginRight:"10px"}:""),A=C(()=>!a.getSidebarStatus),w=C(()=>a.getDevice),{$storage:g,$config:r}=O(),l=C(()=>{var s;return(s=g==null?void 0:g.layout)==null?void 0:s.layout}),h=C(()=>r.Title);function m(s){const v=k().Title;v?document.title=`${s.title} | ${v}`:document.title=s.title}function u(){M().logOut()}function E(){var s;e.push((s=me())==null?void 0:s.path)}function z(){U.emit("openPanel")}function W(){a.toggleSideBar()}function q(s){s==null||s.handleResize()}function I(s){var x;if(!s.children)return console.error(ke);const v=/^http(s?):\/\//,F=(x=s.children[0])==null?void 0:x.path;return v.test(F)?s.path+"/"+F:F}function J(s){T.value.length===0||Z(s)||U.emit("changLayoutRoute",s)}function Z(s){return pe.includes(s)}function _(){return new URL("/manager/logo.svg",import.meta.url).href}return{route:t,title:h,device:w,layout:l,logout:u,routers:o,$storage:g,isFullscreen:i,Fullscreen:ce,ExitFullscreen:de,toggle:p,backTopMenu:E,onPanel:z,getDivStyle:n,changeTitle:m,toggleSideBar:W,menuSelect:J,handleResize:q,resolvePath:I,getLogo:_,isCollapse:A,pureApp:a,username:f,userAvatar:d,avatarsStyle:b,tooltipEffect:c}}const Te={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"};function Se(t,e){return X(),Y("svg",Te,e[0]||(e[0]=[R("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),R("path",{d:"M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12M11 1h2v3h-2zm0 19h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414zm2.121-14.85 1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414zM23 11v2h-3v-2zM4 11v2H1v-2z"},null,-1)]))}const Re={render:Se},we={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"};function be(t,e){return X(),Y("svg",we,e[0]||(e[0]=[R("path",{fill:"none",d:"M0 0h24v24H0z"},null,-1),R("path",{d:"M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981"},null,-1)]))}const ze={render:be};export{Ee as a,Me as b,G as c,Re as d,U as e,ze as f,fe as g,H as u};
