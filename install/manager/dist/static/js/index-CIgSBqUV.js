import v from"./Timeline-BzaEi9QX.js";import x from"./Account-Dy7L0lJh.js";import g from"./RestPass-CsTXOUe5.js";import h from"./UserCard-CioXNAP7.js";import{_ as V,a8 as T,q as U,G as t,H as e,R as s,D as o,p as w,P as u}from"./index-Dasq562Y.js";const B={name:"Profile",components:{RestPass:g,UserCard:h,Timeline:v,Account:x},data(){return{user:{username:"",role_name:""},activeTab:"sec"}},created(){this.getUser()},methods:{getUser(){T.get("/api/admin/userinfo").then(r=>{this.user=r})}}},C={class:"page-container"},P={class:"user-profile"},k={class:"box-center"},A={class:"user-name text-center"},D={class:"user-role text-center text-muted"};function N(r,n,R,q,a,y){const p=o("el-avatar"),l=o("el-card"),c=o("el-col"),d=o("account"),_=o("el-tab-pane"),i=o("rest-pass"),m=o("el-tabs"),f=o("el-row");return w(),U("div",C,[t("div",null,[e(f,{gutter:20},{default:s(()=>[e(c,{span:6,xs:24},{default:s(()=>[e(l,null,{default:s(()=>[n[2]||(n[2]=t("div",{slot:"header",class:"clearfix"},[t("span",null,"About Me")],-1)),t("div",P,[n[1]||(n[1]=t("div",{class:"box-center"},null,-1)),t("div",k,[e(p,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}),t("div",A,u(a.user.username),1),t("div",D,u(a.user.role_name),1)])])]),_:1})]),_:1}),e(c,{span:18,xs:24},{default:s(()=>[e(l,null,{default:s(()=>[e(m,{modelValue:a.activeTab,"onUpdate:modelValue":n[0]||(n[0]=b=>a.activeTab=b)},{default:s(()=>[e(_,{label:"账户信息",name:"account"},{default:s(()=>[e(d,{user:a.user},null,8,["user"])]),_:1}),e(_,{label:"安全",name:"sec"},{default:s(()=>[e(i,{user:a.user},null,8,["user"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})])])}const S=V(B,[["render",N],["__scopeId","data-v-e61bc00c"]]);export{S as default};
