import{_ as E,az as _,aA as C,q as o,L as D,o as p,c as f,b as d,m as l,A as i,v as r,M as Q,j as y,t as h,F as S,i as U,ai as A,aj as B}from"./index-CmHyWis5.js";import I from"./editAdmin-nsiP_uQa.js";const j={name:"Account",components:{EditAdmin:I},data(){return{isEdit:!1,editForm:{},TeamOptions:[],list:null,total:0,listLoading:!0,listQuery:{search:null,page:1,page_size:10},roles:[],RolesData:[],formData:{email:null,id:null,username:null,confirm_password:null,password:null}}},created(){this.getList()},methods:{getList(){this.listLoading=!0,_.get("/api/admin/admin",this.listQuery).then(t=>{this.list=t.data,this.total=t.total,this.listLoading=!1})},getRole(){_.get("/api/admin/role").then(t=>{this.roles=t.data})},handleDelete(t){_.delete(`/api/admin/admin/${t.id}`).then(s=>{C.success("删除成功"),this.getList()})},handleSizeChange(t){this.listQuery.page_size=t,this.getList()},handleCurrentChange(t){this.listQuery.page=t,this.getList()},handleFilter(){this.getList()},handleCreate(t){this.getRole(),this.isEdit=!0,this.editForm=t||{}},handleEdit(t){this.isEdit=!1,t&&this.getList()},handleUpdate(t){this.formData=t,this.isEdit=!0},submit(){this.editForm.id?_.put(`/api/admin/admin/${this.editForm.id}`,this.editForm).then(t=>{this.$message({message:"操作成功",type:"success"}),this.getList()}).catch(t=>{}).finally(()=>{this.isEdit=!1}):_.post("/api/admin/admin",this.editForm).then(t=>{C.success("添加成功"),this.getList()}).catch(t=>{}).finally(()=>{this.isEdit=!1})}}},q=t=>(A("data-v-92f1aa42"),t=t(),B(),t),N={class:"page-container"},R={class:"widget"},M=q(()=>d("div",{class:"tool-bar"},"管理员列表",-1)),T={class:"search-group"},O={class:"widget-body"},G={key:1},H={class:"page-r"};function J(t,s,K,P,a,n){const g=o("el-input"),u=o("el-form-item"),m=o("el-button"),w=o("el-form"),c=o("el-table-column"),b=o("el-tag"),v=o("el-table"),F=o("el-pagination"),V=o("el-option"),k=o("el-select"),L=o("el-dialog"),x=D("loading");return p(),f("div",N,[d("div",R,[M,d("div",T,[l(w,{inline:""},{default:i(()=>[l(u,null,{default:i(()=>[l(g,{modelValue:a.listQuery.search,"onUpdate:modelValue":s[0]||(s[0]=e=>a.listQuery.search=e),style:{width:"200px"},placeholder:"用户名/邮箱"},null,8,["modelValue"])]),_:1}),l(u,null,{default:i(()=>[l(m,{type:"primary",onClick:n.handleFilter},{default:i(()=>[r("查询")]),_:1},8,["onClick"]),l(m,{type:"primary",onClick:s[1]||(s[1]=e=>n.handleCreate({}))},{default:i(()=>[r("添加")]),_:1})]),_:1})]),_:1})]),d("div",O,[Q((p(),y(v,{data:a.list,"highlight-current-row":""},{default:i(()=>[l(c,{align:"center",type:"index",width:"80",label:"序号",fixed:"left"}),l(c,{label:"用户名",width:"150px",align:"center"},{default:i(e=>[e.row.is_captain?(p(),y(b,{key:0,effect:"dark"},{default:i(()=>[r(h(e.row.username),1)]),_:2},1024)):(p(),f("span",G,h(e.row.username),1))]),_:1}),l(c,{align:"center",label:"角色"},{default:i(e=>[d("span",null,h(e.row.role_name),1)]),_:1}),l(c,{label:"上次登陆时间",width:"160",align:"center"},{default:i(e=>[d("span",null,h(e.row.login_time),1)]),_:1}),l(c,{align:"center",label:"操作",width:"200"},{default:i(e=>[l(m,{type:"primary",onClick:z=>n.handleCreate(e.row),link:""},{default:i(()=>[r("编辑")]),_:2},1032,["onClick"]),l(m,{type:"danger",onClick:z=>n.handleDelete(e.row),link:""},{default:i(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[x,a.listLoading]]),d("div",H,[l(F,{background:"","current-page":a.listQuery.page,"page-sizes":[5,10,30],"page-size":a.listQuery.page_size,layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])]),l(L,{center:"",modelValue:a.isEdit,"onUpdate:modelValue":s[7]||(s[7]=e=>a.isEdit=e),title:a.editForm.id?"编辑":"新增管理员",onClose:s[8]||(s[8]=e=>t.$emit("handleEdit",!1)),width:"700"},{footer:i(()=>[l(m,{onClick:s[6]||(s[6]=e=>n.handleEdit(!1))},{default:i(()=>[r("取消")]),_:1}),l(m,{type:"primary",onClick:n.submit},{default:i(()=>[r(h(a.formData.id?"更新":"提交"),1)]),_:1},8,["onClick"])]),default:i(()=>[l(w,{ref:"dataForm",model:a.editForm,"label-position":"left","label-width":"80px","label-suffix":":",style:{width:"500px",margin:"auto auto","font-size":"13px"}},{default:i(()=>[l(u,{label:"用户名",prop:"username",required:""},{default:i(()=>[l(g,{modelValue:a.editForm.username,"onUpdate:modelValue":s[2]||(s[2]=e=>a.editForm.username=e)},null,8,["modelValue"])]),_:1}),l(u,{class:"el-form-item",label:"角色",required:""},{default:i(()=>[l(k,{modelValue:a.editForm.role,"onUpdate:modelValue":s[3]||(s[3]=e=>a.editForm.role=e),class:"select",clearable:""},{default:i(()=>[(p(!0),f(S,null,U(a.roles,e=>(p(),y(V,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(u,{label:"密    码",prop:"password"},{default:i(()=>[l(g,{modelValue:a.editForm.password,"onUpdate:modelValue":s[4]||(s[4]=e=>a.editForm.password=e),type:"password"},null,8,["modelValue"])]),_:1}),l(u,{label:"确认密码",prop:"confirm_password",style:{"font-size":"12px"}},{default:i(()=>[l(g,{modelValue:a.editForm.confirm_password,"onUpdate:modelValue":s[5]||(s[5]=e=>a.editForm.confirm_password=e),type:"password"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])])}const Y=E(j,[["render",J],["__scopeId","data-v-92f1aa42"]]);export{Y as default};