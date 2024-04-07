import{_ as V,aE as I,aG as N,az as y,q as n,o as _,c as m,b as s,m as e,A as t,v as u,F as E,i as T,t as q,ai as H,aj as S}from"./index-CmHyWis5.js";const B={name:"addImage",components:{Edit:I,Files:N},data(){return{rules:{tag:[{required:!0,max:100,min:2,message:"请输入要构建的镜像名称"}]},selectHub:"DockerHub",imageName:"",buildForm:{tag:""},options:[{value:"DockerHub",label:"DockerHub"}],file:null,output:[],pk:null,content:"",listTotal:0,listData:[],showLog:!1}},created(){this.pk=this.$route.query.id},methods:{getFile(o,l){l.length>1&&l.splice(0,1),this.file=o.raw},build(){this.$refs.build.validate(o=>{if(!o)return!1;let l;this.$refs.tab.currentName==="tar"?(l=new FormData,l.append("type","tar"),l.append("files",this.file)):this.$refs.tab.currentName==="pull"?l={tag:this.imageName}:l={dockerfile:this.content,tag:this.tag},y.post(`/api/admin/docker/image?build_type=${this.$refs.tab.currentName}&tag=${this.buildForm.tag}`,l).then(i=>{this.$message({message:"任务已提交",type:"success"}),this.showLog=!0,this.output=["Internal Server Error for url: http+docker://localhost/v1.44/build?t=test%3A%21&q=False&nocache=False&rm=True&forcerm=False&pull=False"],this.loopResponse(i.data.task)}).catch(i=>{})})},loopResponse(o){let l,i=this,f={index:this.output.length};y.get(`/api/admin/task/${o}/log`,f).then(function(a){i.output=i.output.concat(a.data);let d=document.getElementById("log_output");d.scrollTop=d.scrollHeight,a.end?clearTimeout(l):l=setTimeout(()=>{i.loopResponse(o)},5e3)})}}},p=o=>(H("data-v-9d6be9f8"),o=o(),S(),o),C={class:"container"},A={class:"widget"},L=p(()=>s("i",{class:"el-icon-edit"},null,-1)),R=p(()=>s("i",{class:"el-icon-upload2"},null,-1)),$=p(()=>s("i",{class:"el-icon-edit"},null,-1)),U=p(()=>s("div",{class:"wd-title"},"Actions",-1)),j={class:"action-group"},z={id:"log_output",class:"output",style:{"max-height":"300px",overflow:"auto"}},G={class:"line small"};function P(o,l,i,f,a,d){const w=n("Edit"),h=n("el-icon"),g=n("el-input"),b=n("el-form-item"),v=n("el-form"),r=n("el-tab-pane"),F=n("el-button"),x=n("el-upload"),k=n("el-tabs"),D=n("Files");return _(),m("div",C,[s("div",A,[e(k,{type:"border-card"},{default:t(()=>[e(r,null,{label:t(()=>[e(h,null,{default:t(()=>[e(w)]),_:1}),u("添加镜像")]),default:t(()=>[e(v,{model:a.buildForm,inline:"",ref:"build",rules:a.rules},{default:t(()=>[e(b,{label:"名称",prop:"tag"},{default:t(()=>[e(g,{modelValue:a.buildForm.tag,"onUpdate:modelValue":l[0]||(l[0]=c=>a.buildForm.tag=c),placeholder:"eg. redis:latest"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(k,{value:"dockerfile",ref:"tab"},{default:t(()=>[e(r,{name:"dockerfile"},{label:t(()=>[L,u(" DockerFile")]),default:t(()=>[s("div",null,[e(v,null,{default:t(()=>[e(b,null,{default:t(()=>[e(g,{modelValue:a.content,"onUpdate:modelValue":l[1]||(l[1]=c=>a.content=c),type:"textarea",rows:"10",placeholder:"Define or paste the content of Your Dockerfile here"},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),e(r,{name:"tar"},{label:t(()=>[R,u(" 上传")]),default:t(()=>[s("div",null,[s("div",null,[e(x,{accept:"*.tar","on-change":d.getFile,action:"",ref:"upload","auto-upload":!1},{default:t(()=>[e(F,{type:"primary"},{default:t(()=>[u("选择文件")]),_:1})]),_:1},8,["on-change"])])])]),_:1}),e(r,{name:"pull"},{label:t(()=>[$,u("Pull")]),_:1})]),_:1},512),s("div",null,[U,s("div",j,[e(F,{onClick:d.build,type:"primary"},{default:t(()=>[u("上传/编译")]),_:1},8,["onClick"])])])]),_:1}),e(r,{disabled:!a.showLog},{label:t(()=>[e(h,null,{default:t(()=>[e(D)]),_:1}),u("日志")]),default:t(()=>[s("div",z,[(_(!0),m(E,null,T(a.output,c=>(_(),m("p",G,q(c),1))),256))])]),_:1},8,["disabled"])]),_:1})])])}const J=V(B,[["render",P],["__scopeId","data-v-9d6be9f8"]]);export{J as default};