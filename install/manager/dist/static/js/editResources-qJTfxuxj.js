import{m as T}from"./index-izBQuTOx.js";import{_ as q,az as _,q as s,o as i,c as f,m as e,A as n,F as V,i as v,j as k,v as c,t as I,b as h}from"./index-PSQyWyEH.js";const N={name:"resources",components:{mavonEditor:T.mavonEditor},data(){return{inputValue:"",docker_type_list:[{label:"远程镜像",id:1}],form:{name:"",app:"",cve:[],description:"",image:""}}},created(){let{query:a}=this.$route,t=a.id;t&&this.getItem(t)},methods:{getItem(a){_.get(`/api/admin/vuln/${a}`).then(t=>{let r=t.data;this.form.id=a,this.form.app=r.app,this.form.cve=r.cve||[],this.form.name=r.name,this.form.description=r.description,this.form.image="1",this.form.docker_type=r.docker_type})},goBack(){this.$router.back()},handleSubmit(){this.form.id?_.put(`/api/admin/vuln/${this.form.id}`,this.form).then(a=>{this.$emit("action",!0),this.$message({message:"提交成功",type:"success"}),this.$router.replace({name:"vuln.resource"})}):_.post("/api/admin/vuln",this.form).then(a=>{this.$emit("action",!0),this.$message({message:"提交成功",type:"success"}),this.$router.replace({name:"vuln.resource"})})},removeTag(a){this.form.cve.splice(a,1)},addTags(){this.inputValue&&(this.form.cve.push(this.inputValue),this.inputValue="")}}},S={class:"page-container"},F=["onClick"],j={id:"my-markdown",class:"markdown-body"},z={class:"button-group"};function A(a,t,r,D,l,u){const d=s("el-input"),m=s("el-form-item"),g=s("el-option"),b=s("el-select"),y=s("el-tag"),p=s("el-button"),C=s("mavon-editor"),x=s("el-form"),w=s("el-col"),B=s("el-row"),U=s("el-card");return i(),f("div",S,[e(U,{style:{height:"100%"}},{default:n(()=>[e(B,{gutter:20},{default:n(()=>[e(w,{xs:24,sm:{span:20,offset:2},md:{span:20,offset:2},lg:{span:14,offset:5},xl:{span:12,offset:6}},{default:n(()=>[e(x,{model:l.form,ref:"form",class:"form","label-width":"80px"},{default:n(()=>[e(m,{label:"资源名称",docker_type_list:""},{default:n(()=>[e(d,{modelValue:l.form.name,"onUpdate:modelValue":t[0]||(t[0]=o=>l.form.name=o)},null,8,["modelValue"])]),_:1}),e(m,{label:"组件",docker_type_list:""},{default:n(()=>[e(d,{modelValue:l.form.app,"onUpdate:modelValue":t[1]||(t[1]=o=>l.form.app=o)},null,8,["modelValue"])]),_:1}),e(m,{label:"加载类型",required:""},{default:n(()=>[e(b,{modelValue:l.form.docker_type,"onUpdate:modelValue":t[2]||(t[2]=o=>l.form.docker_type=o)},{default:n(()=>[(i(!0),f(V,null,v(l.docker_type_list,o=>(i(),k(g,{label:o.label,key:o.id,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(m,{label:"CVE"},{default:n(()=>[(i(!0),f(V,null,v(l.form.cve,(o,E)=>(i(),k(y,{key:o},{default:n(()=>[c(I(o)+" ",1),h("span",{class:"close-icon",onClick:L=>u.removeTag(E)},"x",8,F)]),_:2},1024))),128)),e(d,{modelValue:l.inputValue,"onUpdate:modelValue":t[3]||(t[3]=o=>l.inputValue=o),placeholder:"输入标签内容"},null,8,["modelValue"]),e(p,{onClick:u.addTags},{default:n(()=>[c("添加标签")]),_:1},8,["onClick"])]),_:1}),e(m,{label:"镜像名称"},{default:n(()=>[e(d,{modelValue:l.form.image,"onUpdate:modelValue":t[4]||(t[4]=o=>l.form.image=o)},null,8,["modelValue"])]),_:1}),e(m,{label:"描述"},{default:n(()=>[h("div",j,[e(C,{modelValue:l.form.description,"onUpdate:modelValue":t[5]||(t[5]=o=>l.form.description=o)},null,8,["modelValue"])])]),_:1})]),_:1},8,["model"]),h("div",z,[e(p,{type:"primary",onClick:u.handleSubmit},{default:n(()=>[c("提交")]),_:1},8,["onClick"]),e(p,{type:"info",onClick:u.goBack},{default:n(()=>[c("返回")]),_:1},8,["onClick"])])]),_:1})]),_:1})]),_:1})])}const H=q(N,[["render",A],["__scopeId","data-v-89701b51"]]);export{H as default};