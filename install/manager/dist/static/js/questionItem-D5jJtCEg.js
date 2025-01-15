import{_ as q,a8 as d,D as n,p as m,U as f,R as i,H as a,S as _,q as h,K as b,J as v,G as p,P as D}from"./index-Dasq562Y.js";const R={name:"addQuestion",props:{show:Boolean,data:Object},data(){return{visible:!1,resource_list:[],hostOption:[],imageOption:[],capture:null,fileChange:!1,options:[],attachment:[],form:{attachment:[],resource_id:null,name:null,flag:null,desc:null,score:null,type:null,active:!0,active_flag:!1},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:3,max:20,message:"长度在 3 到 20 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类别",trigger:"blur"}],desc:[{required:!0,message:"请填写描述信息",trigger:"blur"},{min:3,max:300,message:"长度在 3 到 300 个字符",trigger:"blur"}],flag:[{validator:this.validateFlagOrResource,trigger:"blur"},{min:3,max:64,message:"长度在 3 到 64 个字符",trigger:"blur"}],resource_id:[{validator:this.validateFlagOrResource,trigger:"blur"}]}}},watch:{show(o){this.visible=o},data:{handler(o){o&&(this.form.id=this.data.id,this.form.name=this.data.name,this.form.flag=this.data.flag,this.form.desc=this.data.desc,this.form.active_flag=this.data.active_flag,this.form.type=this.data.type,this.form.active=this.data.active,this.form.score=this.data.score,this.form.resource_id=this.data.resource_id,this.data.attachment&&this.data.attachment.length>0&&(this.attachment=this.form.attachment))},deep:!0}},created(){this.getOptions(),this.getResourceList(),this.data.id&&(this.form.id=this.data.id,this.form.name=this.data.name,this.form.flag=this.data.flag,this.form.desc=this.data.desc,this.form.active_flag=this.data.active_flag,this.form.type=this.data.type,this.form.active=this.data.active,this.form.score=this.data.score,this.form.resource_id=this.data.resource_id,this.data.attachment.length>0&&(this.attachment=this.form.attachment))},methods:{getOptions(){d.get("/api/admin/ctf/question/type").then(o=>{this.options=o.data})},getResourceList(){d.get("/api/admin/docker/resource",{page_size:99999,status:1,type:"CTF"}).then(o=>{this.resource_list=o.data})},cancel(){this.$emit("action",!1)},submit(){this.form.attachment=[];for(let o=0;o<this.attachment.length;o++)this.form.attachment.push(this.attachment[o].uuid);this.$refs.form.validate((o,e)=>{o?this.form.id?d.put(`/api/admin/ctf/question/${this.form.id}`,this.form).then(s=>{this.$emit("action",!0),this.$message({message:"提交成功",type:"success"})}).catch(s=>{}):d.post("/api/admin/ctf/question",this.form).then(s=>{this.$emit("action",!0)}).catch(s=>{}):this.$message({message:"表单验证失败:"+JSON.stringify(e),type:"error"})})},handleFileClick(){document.getElementById("inputFile").click()},changeActiveFlag(o){},removeFile(o){this.fileChange=!0,this.attachment.splice(o,1)},handleFile(){let e=this.$refs.inputer.files[0],s=new FormData;s.append("file",e),d.post("/api/admin/ctf/upload",s,{headers:{"Content-Type":"multipart/form-data"}}).then(y=>{this.fileChange=!0;let{uuid:l,filename:r}=y;this.attachment.push({uuid:l,filename:r})})},validateFlagOrResource(o,e,s){!this.form.flag&&!this.form.resource_id?s(new Error("Flag 和 Resource ID 至少填写一个")):s()}}},B={style:{width:"300px"}},I={class:"file-item"},N=["href"],E=["onClick"];function L(o,e,s,y,l,r){const c=n("el-input"),u=n("el-form-item"),V=n("el-option"),k=n("el-select"),C=n("el-switch"),F=n("el-col"),w=n("el-row"),g=n("el-button"),x=n("el-form"),O=n("el-dialog");return m(),f(O,{"before-close":r.cancel,"show-close":!0,title:l.form.id?"编辑题目":"添加题目",modelValue:l.visible,"onUpdate:modelValue":e[9]||(e[9]=t=>l.visible=t),width:"40%"},{footer:i(()=>[a(g,{onClick:r.cancel},{default:i(()=>e[11]||(e[11]=[_("取 消")])),_:1},8,["onClick"]),a(g,{type:"primary",onClick:r.submit},{default:i(()=>e[12]||(e[12]=[_("确 定")])),_:1},8,["onClick"])]),default:i(()=>[a(x,{model:l.form,ref:"form",class:"form","label-width":"80px",rules:l.rules},{default:i(()=>[a(u,{label:"名称",prop:"name"},{default:i(()=>[a(c,{modelValue:l.form.name,"onUpdate:modelValue":e[0]||(e[0]=t=>l.form.name=t)},null,8,["modelValue"])]),_:1}),a(u,{label:"类别",prop:"type"},{default:i(()=>[a(k,{modelValue:l.form.type,"onUpdate:modelValue":e[1]||(e[1]=t=>l.form.type=t),filterable:""},{default:i(()=>[(m(!0),h(v,null,b(l.options,t=>(m(),f(V,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(u,{class:"block-input",label:"是否激活"},{default:i(()=>[a(C,{modelValue:l.form.active,"onUpdate:modelValue":e[2]||(e[2]=t=>l.form.active=t)},null,8,["modelValue"])]),_:1}),a(u,{class:"block-input",label:"动态Flag"},{default:i(()=>[a(C,{modelValue:l.form.active_flag,"onUpdate:modelValue":e[3]||(e[3]=t=>l.form.active_flag=t),onChange:r.changeActiveFlag},null,8,["modelValue","onChange"])]),_:1}),l.form.active_flag?(m(),f(u,{key:0,class:"block-input",label:"环境",prop:"resource_id"},{default:i(()=>[a(k,{modelValue:l.form.resource_id,"onUpdate:modelValue":e[4]||(e[4]=t=>l.form.resource_id=t),clearable:"",filterable:""},{default:i(()=>[(m(!0),h(v,null,b(l.resource_list,t=>(m(),f(V,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})):(m(),f(u,{key:1,class:"block-input",label:"Flag",prop:"flag"},{default:i(()=>[a(w,null,{default:i(()=>[a(F,{span:20},{default:i(()=>[a(c,{modelValue:l.form.flag,"onUpdate:modelValue":e[5]||(e[5]=t=>l.form.flag=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})),a(u,{label:"描述",prop:"desc"},{default:i(()=>[a(c,{modelValue:l.form.desc,"onUpdate:modelValue":e[6]||(e[6]=t=>l.form.desc=t),type:"textarea"},null,8,["modelValue"])]),_:1}),a(w,null,{default:i(()=>[a(F,{span:8},{default:i(()=>[a(u,{label:"积分",required:""},{default:i(()=>[a(c,{modelValue:l.form.score,"onUpdate:modelValue":e[7]||(e[7]=t=>l.form.score=t),type:"number"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),a(u,{label:"附件"},{default:i(()=>[p("input",{id:"inputFile",ref:"inputer",style:{display:"none"},type:"file",onChange:e[8]||(e[8]=(...t)=>r.handleFile&&r.handleFile(...t))},null,544),a(g,{type:"primary",onClick:r.handleFileClick},{default:i(()=>e[10]||(e[10]=[_("上传")])),_:1},8,["onClick"]),p("div",B,[(m(!0),h(v,null,b(l.attachment,(t,U)=>(m(),h("div",I,[p("a",{href:t.filename,target:"_blank"},D(t.filename),9,N),p("i",{class:"el-icon-close",onClick:S=>r.removeFile(U)},null,8,E)]))),256))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["before-close","title","modelValue"])}const A=q(R,[["render",L],["__scopeId","data-v-24c18daf"]]);export{A as default};
