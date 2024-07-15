import{_ as v,J as u,aA as m,q as i,M as D,o as f,c as E,b as d,m as e,A as a,v as c,N as z,j as R,t as x}from"./index-4T4wOeym.js";const V={name:"role",data(){return{listQuery:{page:1,page_size:10},loading:!1,list:[],total:0,editForm:{},currentRow:{name:""},currentEdit:!1}},created(){this.fetchData()},methods:{fetchData(){this.loading=!0,u.get("/api/admin/role").then(t=>{this.loading=!1;const{data:r}=t;this.list=r}).catch(t=>{this.loading=!1})},handleSizeChange(t){this.listQuery.page_size=t,this.fetchData()},handleCurrentChange(t){this.listQuery.page=t,this.fetchData()},handleCreate(){this.currentEdit=!0,this.currentRow={}},handleEdit(){this.currentEdit=!1,this.fetchData()},itemEdit(t){this.currentRow=t,this.currentEdit=!0},itemDelete(t){u.delete(`/api/admin/role/${t.id}`).then(r=>{m.success("删除成功"),this.fetchData()})},cancel(){this.currentEdit=!1},submit(){this.currentRow&&this.currentRow.id?u.put("/api/admin/role",this.currentRow).then(t=>{this.$message({message:"操作成功",type:"success"}),this.currentEdit=!1,this.fetchData()}).catch(t=>{}):u.post("/api/admin/role",this.currentRow).then(t=>{m.success("删除成功"),this.currentEdit=!1,this.fetchData()}).catch(t=>{})}}},Q={class:"page-container"},S={class:"widget"},B=d("div",{class:"tool-bar"},"角色管理",-1),N={class:"search-group"},A={class:""},j={class:"page-r"};function F(t,r,M,U,l,n){const o=i("el-button"),p=i("el-form-item"),_=i("el-form"),h=i("el-table-column"),g=i("el-table"),C=i("el-pagination"),w=i("el-input"),k=i("el-dialog"),y=D("loading");return f(),E("div",Q,[d("div",S,[B,d("div",N,[e(_,{inline:""},{default:a(()=>[e(p,null,{default:a(()=>[e(o,{type:"primary",onClick:n.fetchData},{default:a(()=>[c("查询")]),_:1},8,["onClick"]),e(o,{type:"primary",onClick:n.handleCreate},{default:a(()=>[c("添加")]),_:1},8,["onClick"])]),_:1})]),_:1})]),d("div",A,[z((f(),R(g,{data:l.list,"highlight-current-row":""},{default:a(()=>[e(h,{label:"角色ID",prop:"id"}),e(h,{label:"角色名",prop:"name"}),e(h,{prop:"Action",width:"150"},{default:a(s=>[e(o,{type:"primary",onClick:b=>n.itemEdit(s.row),link:""},{default:a(()=>[c("编辑")]),_:2},1032,["onClick"]),e(o,{type:"danger",onClick:b=>n.itemDelete(s.row),link:""},{default:a(()=>[c("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[y,l.loading]]),d("div",j,[e(C,{"current-page":l.listQuery.page,"page-size":l.listQuery.page_size,"page-sizes":[10,20,30,50],total:l.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:n.handleSizeChange,onCurrentChange:n.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])]),e(k,{center:"",modelValue:l.currentEdit,"onUpdate:modelValue":r[1]||(r[1]=s=>l.currentEdit=s),title:l.currentRow.id?"编辑角色":"新增角色",width:"500px"},{footer:a(()=>[e(o,{onClick:n.cancel},{default:a(()=>[c("取消")]),_:1},8,["onClick"]),e(o,{type:"primary",onClick:n.submit},{default:a(()=>[c(x(l.currentRow.id?"更新":"提交"),1)]),_:1},8,["onClick"])]),default:a(()=>[e(_,{ref:"dataForm",model:l.currentRow,"label-position":"left","label-width":"80px","label-suffix":":",style:{margin:"auto auto","font-size":"13px"}},{default:a(()=>[e(p,{label:"角色名",prop:"name"},{default:a(()=>[e(w,{modelValue:l.currentRow.name,"onUpdate:modelValue":r[0]||(r[0]=s=>l.currentRow.name=s)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])])}const I=v(V,[["render",F]]);export{I as default};