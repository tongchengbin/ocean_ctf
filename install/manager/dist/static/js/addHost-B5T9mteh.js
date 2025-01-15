import{_ as H,a8 as u,D as d,p as V,U as b,R as l,G as f,H as t,S as h}from"./index-Dasq562Y.js";const v={name:"addHost",props:{checkHost:{type:Object,default:{}},show:{type:Boolean,default:!0}},mounted(){},data(){return{form:{active:this.checkHost&&this.checkHost.active,ip:this.checkHost&&this.checkHost.ip,name:this.checkHost&&this.checkHost.name,addr:this.checkHost&&this.checkHost.addr,remark:this.checkHost&&this.checkHost.remark}}},methods:{success(n){if(n)if(this.checkHost.id){let e=this.form;e.id=this.checkHost.id,u.put(`/api/admin/docker/host/${e.id}`,e).then(i=>{this.$message({message:"修改成功",type:"success"}),this.$emit("success",!0)}).catch(i=>{})}else u.post("/api/admin/docker/host",this.form).then(e=>{this.$message({message:"添加成功",type:"success"}),this.$emit("success",!0)}).catch(e=>{});else this.$emit("success",!1)}}},g={slot:"footer",class:"dialog-footer"};function w(n,e,i,x,o,r){const m=d("el-input"),a=d("el-form-item"),p=d("el-switch"),k=d("el-form"),c=d("el-button"),_=d("el-dialog");return V(),b(_,{width:"500px",center:"",visible:i.show,title:i.checkHost.id?"编辑主机":"添加主机"},{default:l(()=>[f("div",null,[t(k,{"label-position":"right","label-width":"100px"},{default:l(()=>[t(a,{label:"主机名称"},{default:l(()=>[t(m,{modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.name=s)},null,8,["modelValue"])]),_:1}),t(a,{label:"IP"},{default:l(()=>[t(m,{modelValue:o.form.ip,"onUpdate:modelValue":e[1]||(e[1]=s=>o.form.ip=s),disabled:!!i.checkHost.id},null,8,["modelValue","disabled"])]),_:1}),t(a,{label:"Docker API"},{default:l(()=>[t(m,{modelValue:o.form.addr,"onUpdate:modelValue":e[2]||(e[2]=s=>o.form.addr=s),disabled:!!i.checkHost.id},null,8,["modelValue","disabled"])]),_:1}),t(a,{label:"是否启用"},{default:l(()=>[t(p,{modelValue:o.form.active,"onUpdate:modelValue":e[3]||(e[3]=s=>o.form.active=s)},null,8,["modelValue"])]),_:1}),t(a,{label:"备注"},{default:l(()=>[t(m,{modelValue:o.form.remark,"onUpdate:modelValue":e[4]||(e[4]=s=>o.form.remark=s)},null,8,["modelValue"])]),_:1})]),_:1})]),f("span",g,[t(c,{onClick:e[5]||(e[5]=s=>r.success(0))},{default:l(()=>e[7]||(e[7]=[h("取 消")])),_:1}),t(c,{type:"primary",onClick:e[6]||(e[6]=s=>r.success(1))},{default:l(()=>e[8]||(e[8]=[h("确 定")])),_:1})])]),_:1},8,["visible","title"])}const U=H(v,[["render",w]]);export{U as default};
