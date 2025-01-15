import{_ as A,a8 as p,q as w,H as e,R as a,G as h,E as D,U as m,D as i,a9 as L,p as d,J as S,K as j,S as u}from"./index-Dasq562Y.js";import H from"./questionItem-D5jJtCEg.js";const I={name:"Question",components:{questionItem:H},data(){return{qType:[],listQuery:{page:1,page_size:10,subject:null,search:null},loading:!1,chiData:{},showAddQuestion:!1,total:0,listData:[],rid:null,captureName:null}},created(){this.getList(),this.getOptions()},methods:{getOptions(){p.get("/api/admin/ctf/question/type").then(l=>{this.qType=l.data})},handleSyncRemoteCtfRepo(){p.post("/api/admin/ctf/sync_repo").then(l=>{this.$message({message:"任务提交成功",type:"success"})})},getList(){this.loading=!0,p.get("/api/admin/ctf/question",this.listQuery).then(l=>{this.listData=l.results,this.loading=!1,this.total=l.total}).catch(l=>{})},handleSizeChange(l){this.listQuery.page_size=l,this.getList()},handleCurrentChange(l){this.listQuery.page=l,this.getList()},handleCreate(){this.chiData={capture:this.rid},this.showAddQuestion=!0},editHandle(l){this.chiData=l,this.showAddQuestion=!0},deleteHandle(l){p.delete(`/api/admin/ctf/question/${l.id}`).then(t=>{this.$message({message:"删除成功",type:"success"}),this.getList()})},handleAdd(l){this.showAddQuestion=!1,l&&this.getList()},switchActive(l,t){p.post(`/api/admin/ctf/question/${t.id}/set_active`,{active:l}).then(b=>{this.$message({message:"修改成功",type:"success",duration:2e3})})}}},U={class:"main"},B={class:"w-[99/100] mt-2 px-2 pb-2 bg-bg_color"},N={class:"page-r"};function T(l,t,b,R,s,r){const y=i("questionItem"),C=i("el-option"),v=i("el-select"),_=i("el-form-item"),k=i("el-input"),g=i("el-button"),Q=i("el-form"),o=i("el-table-column"),V=i("el-switch"),f=i("el-tag"),q=i("el-table"),x=i("el-pagination"),z=L("loading");return d(),w("div",U,[e(y,{data:s.chiData,show:s.showAddQuestion,onAction:r.handleAdd},null,8,["data","show","onAction"]),e(Q,{class:"search-form bg-bg_color w-[99/100] pl-8 pt-[12px]",inline:!0},{default:a(()=>[e(_,{class:"el-form-item",label:"分类",style:{width:"200px"}},{default:a(()=>[e(v,{modelValue:s.listQuery.subject,"onUpdate:modelValue":t[0]||(t[0]=n=>s.listQuery.subject=n),class:"select",clearable:"",filterable:"",placeholder:"请选择分类"},{default:a(()=>[(d(!0),w(S,null,j(s.qType,n=>(d(),m(C,{key:n,label:n,value:n},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(_,null,{default:a(()=>[e(k,{modelValue:s.listQuery.search,"onUpdate:modelValue":t[1]||(t[1]=n=>s.listQuery.search=n),placeholder:"题目名称"},null,8,["modelValue"])]),_:1}),e(_,null,{default:a(()=>[e(g,{type:"primary",onClick:r.getList},{default:a(()=>t[2]||(t[2]=[u("查询")])),_:1},8,["onClick"]),e(g,{type:"success",onClick:r.handleCreate},{default:a(()=>t[3]||(t[3]=[u("添加")])),_:1},8,["onClick"])]),_:1})]),_:1}),h("div",B,[t[8]||(t[8]=h("div",{class:"flex justify-between w-full h-[60px] p-4"},[h("p",{class:"font-bold truncate"},"题目列表")],-1)),h("div",null,[D((d(),m(q,{fit:"","highlight-current-row":"",stripe:"",data:s.listData},{default:a(()=>[e(o,{align:"center",label:"ID",prop:"id",width:"80"}),e(o,{align:"center",label:"标题",prop:"name",width:"220"}),e(o,{align:"center",label:"类别",prop:"type",width:"180"}),e(o,{align:"center",label:"是否启用",prop:"name",width:"80"},{default:a(n=>[e(V,{modelValue:n.row.active,"onUpdate:modelValue":c=>n.row.active=c,onChange:c=>r.switchActive(c,n.row)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),e(o,{align:"center",label:"是否动态",width:"80"},{default:a(n=>[n.row.active_flag?(d(),m(f,{key:0,effect:"dark"},{default:a(()=>t[4]||(t[4]=[u("是")])),_:1})):(d(),m(f,{key:1,effect:"dark",type:"warning"},{default:a(()=>t[5]||(t[5]=[u("否")])),_:1}))]),_:1}),e(o,{align:"center",label:"积分",prop:"score",width:"80"}),e(o,{align:"center",label:"环境",prop:"resource_name",width:"180"}),e(o,{align:"center",label:"描述",prop:"desc","show-overflow-tooltip":""}),e(o,{align:"center",label:"操作",width:"160"},{default:a(n=>[e(g,{link:"",type:"primary",onClick:c=>r.editHandle(n.row)},{default:a(()=>t[6]||(t[6]=[u("编辑")])),_:2},1032,["onClick"]),e(g,{link:"",type:"danger",onClick:c=>r.deleteHandle(n.row)},{default:a(()=>t[7]||(t[7]=[u("删除")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[z,s.loading]]),h("div",N,[e(x,{"current-page":s.listQuery.page,"page-size":s.listQuery.page_size,"page-sizes":[10,20,30,50],total:s.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:r.handleSizeChange,onCurrentChange:r.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const F=A(I,[["render",T],["__scopeId","data-v-afb43b72"]]);export{F as default};
