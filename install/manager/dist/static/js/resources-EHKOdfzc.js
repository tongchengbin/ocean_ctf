import{_ as A,az as u,q as o,L as D,o as p,c as y,j as _,w as V,b as g,m as t,A as a,v as r,M as H,F as S,i as x,t as I,ai as q,aj as E}from"./index-CmHyWis5.js";import F from"./resourceItem-d20v8TtC.js";import"./index-Y3Umapj1.js";const N={name:"resources",components:{resourceItem:F},data(){return{qType:[],listQuery:{page:1,page_size:10,subject:null,search:null},loading:!1,chiData:{},showAddQuestion:!1,total:0,listData:[],rid:null,captureName:null}},created(){this.getList(),this.getOptions()},methods:{getOptions(){u.get("/api/admin/ctf/question/type").then(e=>{this.qType=e.data})},getList(){this.loading=!0,u.get("/api/admin/vuln",this.listQuery).then(e=>{this.listData=e.data,this.loading=!1,this.total=e.total}).catch(e=>{})},handleSizeChange(e){this.listQuery.page_size=e,this.getList()},handleCurrentChange(e){this.listQuery.page=e,this.getList()},handleUpload(){const e=document.createElement("input");e.type="file",e.addEventListener("change",this.handleFileUpload),e.click()},handleFileUpload(e){const i=e.target.files[0],m=new FormData;m.append("file",i),u.post("/api/admin/vuln/import",m).then(C=>{this.$message.success("导入成功"),this.getList()})},handleCreate(){this.$router.replace({name:"vuln.edit_resource"})},buildHandle(e){u.post(`/api/admin/docker/resource/${e.id}/build`).then(i=>{this.$message.success("任务已提交"),this.getList()})},editHandle(e){this.$router.replace({name:"vuln.edit_resource",query:{id:e.id}})},runHandle(e){u.post(`/api/admin/vuln/${e.id}/run`).then(i=>{this.$message({message:"启动成功",type:"success"}),this.getList()})},deleteHandle(e){u.delete(`/api/admin/vuln/${e.id}`).then(i=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleAdd(e){this.showAddQuestion=!1,e&&this.getList()},switchActive(e,i){u.put(`/api/admin/ctf/question/${i.id}`,{active:e}).then(m=>{this.$message({message:"修改成功",type:"success",duration:2e3})})}}},U=e=>(q("data-v-886b1cae"),e=e(),E(),e),j={class:"page-container"},B={class:"widget"},T=U(()=>g("div",{class:"tool-bar"},"资源",-1)),O={class:"search-group"},M={class:"widget-content"},G={class:"page-r"};function J(e,i,m,C,n,l){const v=o("resourceItem"),k=o("el-input"),f=o("el-form-item"),c=o("el-button"),w=o("el-form"),d=o("el-table-column"),b=o("el-tag"),L=o("el-table"),z=o("el-pagination"),Q=D("loading");return p(),y("div",j,[n.showAddQuestion?(p(),_(v,{key:0,data:n.chiData,show:n.showAddQuestion,onAction:l.handleAdd},null,8,["data","show","onAction"])):V("",!0),g("div",B,[T,g("div",O,[t(w,{inline:""},{default:a(()=>[t(f,null,{default:a(()=>[t(k,{modelValue:n.listQuery.search,"onUpdate:modelValue":i[0]||(i[0]=s=>n.listQuery.search=s),placeholder:"名称、app、CVE"},null,8,["modelValue"])]),_:1}),t(f,null,{default:a(()=>[t(c,{type:"primary",onClick:l.getList},{default:a(()=>[r("查询")]),_:1},8,["onClick"]),t(c,{type:"primary",onClick:l.handleCreate},{default:a(()=>[r("添加")]),_:1},8,["onClick"]),t(c,{type:"primary",onClick:l.handleUpload},{default:a(()=>[r("导入")]),_:1},8,["onClick"])]),_:1})]),_:1})]),g("div",M,[H((p(),_(L,{fit:"","highlight-current-row":"",stripe:"",data:n.listData},{default:a(()=>[t(d,{align:"center",label:"标题",prop:"name",width:"220"}),t(d,{align:"center",label:"组件",prop:"app",width:"220"}),t(d,{align:"center",label:"镜像",prop:"image"}),t(d,{align:"center",label:"状态",prop:"status_name",width:"180"}),t(d,{align:"center",label:"CVE",prop:"cve",width:"220"},{default:a(s=>[(p(!0),y(S,null,x(s.row.cve,h=>(p(),_(b,{style:{margin:"0 2px"},key:h},{default:a(()=>[r(I(h),1)]),_:2},1024))),128))]),_:1}),t(d,{align:"center",label:"添加日期",prop:"date_created","show-overflow-tooltip":""}),t(d,{align:"center",label:"操作",width:"240"},{default:a(s=>[s.row.status===0?(p(),_(c,{key:0,type:"primary",onClick:h=>l.buildHandle(s.row),link:""},{default:a(()=>[r("编译")]),_:2},1032,["onClick"])):(p(),_(c,{key:1,type:"primary",onClick:h=>l.runHandle(s.row),link:""},{default:a(()=>[r("启动")]),_:2},1032,["onClick"])),t(c,{type:"primary",onClick:h=>l.editHandle(s.row),link:""},{default:a(()=>[r("编辑")]),_:2},1032,["onClick"]),t(c,{type:"danger",onClick:h=>l.deleteHandle(s.row),link:""},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[Q,n.loading]]),g("div",G,[t(z,{"current-page":n.listQuery.page,"page-size":n.listQuery.page_size,"page-sizes":[10,20,30,50],total:n.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const W=A(N,[["render",J],["__scopeId","data-v-886b1cae"]]);export{W as default};