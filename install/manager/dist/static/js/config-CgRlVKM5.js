var d=(t,e,n)=>new Promise((b,o)=>{var p=r=>{try{l(n.next(r))}catch(a){o(a)}},_=r=>{try{l(n.throw(r))}catch(a){o(a)}},l=r=>r.done?b(r.value):Promise.resolve(r.value).then(p,_);l((n=n.apply(t,e)).next())});import{_ as x,a8 as y,ay as c,q as h,G as u,H as i,R as s,D as m,p as w,S as g}from"./index-Dasq562Y.js";const V={name:"ctf",data(){return{form:{remote_vulnerability_repository:"",vulnerability_timeout:180},rules:{vulnerability_timeout:[{required:!0,message:"请输入环境时长",trigger:"blur"},{type:"number",min:1,max:3600,message:"时长必须在1-3600秒之间",trigger:"blur"}],remote_vulnerability_repository:[{required:!0,message:"请输入漏洞仓库地址",trigger:"blur"}]}}},created(){this.getConfig()},methods:{getConfig(){return d(this,null,function*(){try{const t=yield y.get("/api/admin/config");this.form={remote_vulnerability_repository:t.data.remote_vulnerability_repository,vulnerability_timeout:t.data.vulnerability_timeout||180}}catch(t){c.error(t.message||"获取配置失败")}})},handleSubmit(){return d(this,null,function*(){try{yield this.$refs.form.validate(),yield y.post("/api/admin/config",this.form),c({type:"success",message:"保存成功",duration:2e3}),this.getConfig()}catch(t){t!=="cancel"&&c.error(t.message||"保存失败")}})}}},C={class:"main"},k={class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"},q={class:"px-4"};function B(t,e,n,b,o,p){const _=m("el-input-number"),l=m("el-form-item"),r=m("el-input"),a=m("el-button"),v=m("el-form");return w(),h("div",C,[u("div",k,[e[4]||(e[4]=u("div",{class:"flex justify-between w-full h-[60px] p-4"},[u("p",{class:"font-bold truncate"},"漏洞配置")],-1)),u("div",q,[i(v,{ref:"form",model:o.form,rules:o.rules,"label-width":"140px",class:"max-w-[800px]"},{default:s(()=>[i(l,{label:"环境时长",prop:"vulnerability_timeout"},{default:s(()=>[i(_,{modelValue:o.form.vulnerability_timeout,"onUpdate:modelValue":e[0]||(e[0]=f=>o.form.vulnerability_timeout=f),min:1,max:3600,placeholder:"请输入环境时长"},{suffix:s(()=>e[2]||(e[2]=[g("秒")])),_:1},8,["modelValue"])]),_:1}),i(l,{label:"漏洞仓库",prop:"remote_vulnerability_repository"},{default:s(()=>[i(r,{modelValue:o.form.remote_vulnerability_repository,"onUpdate:modelValue":e[1]||(e[1]=f=>o.form.remote_vulnerability_repository=f),placeholder:"请输入漏洞仓库地址",class:"w-[400px]"},null,8,["modelValue"])]),_:1}),i(l,null,{default:s(()=>[i(a,{type:"primary",onClick:p.handleSubmit},{default:s(()=>e[3]||(e[3]=[g(" 保存配置 ")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])])}const E=x(V,[["render",B]]);export{E as default};
