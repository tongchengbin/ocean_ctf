import{_ as H,r as p,$ as A,h as F,q as r,M as N,o as S,c as Q,m as a,b as h,A as n,v as _,N as j,j as R,w as B,J as g,aj as D,ak as I}from"./index-QDrcbRr8.js";import T from"./resourceForm-8MBCFgEz.js";/* empty css              */const q={name:"resources",components:{resourceForm:T},setup(u,{emit:d}){const v=p([]),e=p(!1),w=p({}),m=p(!1),f=p(0),y=p([]),i=A({type:"CTF",page:1,page_size:10,subject:null,search:null}),l=async()=>{const t=await g.get("/api/admin/ctf/question/type");v.value=t.data},o=async()=>{e.value=!0;const t=await g.get("/api/admin/docker/resource",i);y.value=t.data,f.value=t.total,e.value=!1},s=async()=>{await g.post("/api/admin/ctf/sync_repo"),d("action",{message:"任务提交成功",type:"success"})},k=t=>{i.page_size=t,o()},b=t=>{i.page=t,o()},z=()=>{m.value=!0},c=async t=>{await g.post(`/api/admin/docker/resource/${t.id}/build`),d("action",{message:"任务已提交",type:"success"}),await o()},C=t=>{m.value=!0,w.value=t},V=async t=>{await g.delete(`/api/admin/docker/resource/${t.id}`),d("action",{message:"删除成功",type:"success"}),await o()},x=t=>{m.value=!1,t&&o()};return F(()=>{o(),l()}),{qType:v,listQuery:i,loading:e,currentRow:w,showResourceForm:m,total:f,listData:y,getList:o,handleSyncRemoteCtfRepo:s,handleSizeChange:k,handleCurrentChange:b,handleCreate:z,buildHandle:c,editHandle:C,deleteHandle:V,handleAdd:x}}},L=u=>(D("data-v-a512ff58"),u=u(),I(),u),M={class:"page-container"},E={class:"widget"},J=L(()=>h("div",{class:"tool-bar"},"CTF环境资源",-1)),O={class:"search-group"},U={class:"widget-content"},G={class:"page-r"};function K(u,d,v,e,w,m){const f=r("resource-form"),y=r("el-input"),i=r("el-form-item"),l=r("el-button"),o=r("el-form"),s=r("el-table-column"),k=r("el-table"),b=r("el-pagination"),z=N("loading");return S(),Q("div",M,[a(f,{data:e.currentRow,open:e.showResourceForm,onAction:e.handleAdd},null,8,["data","open","onAction"]),h("div",E,[J,h("div",O,[a(o,{inline:""},{default:n(()=>[a(i,null,{default:n(()=>[a(y,{modelValue:e.listQuery.search,"onUpdate:modelValue":d[0]||(d[0]=c=>e.listQuery.search=c),placeholder:"名称"},null,8,["modelValue"])]),_:1}),a(i,null,{default:n(()=>[a(l,{type:"primary",onClick:e.getList},{default:n(()=>[_("查询")]),_:1},8,["onClick"]),a(l,{type:"primary",onClick:e.handleCreate},{default:n(()=>[_("添加")]),_:1},8,["onClick"]),a(l,{type:"primary",onClick:e.handleSyncRemoteCtfRepo},{default:n(()=>[_("同步仓库资源")]),_:1},8,["onClick"])]),_:1})]),_:1})]),h("div",U,[j((S(),R(k,{fit:"","highlight-current-row":"",stripe:"",data:e.listData},{default:n(()=>[a(s,{align:"center",label:"标题",prop:"name",width:"220"}),a(s,{align:"center",label:"镜像",prop:"image"}),a(s,{align:"center",label:"加载方式",prop:"docker_type_name",width:"180"}),a(s,{align:"center",label:"状态",prop:"status_name",width:"180"}),a(s,{align:"center",label:"添加日期",prop:"date_created","show-overflow-tooltip":""}),a(s,{align:"center",label:"操作",width:"240"},{default:n(c=>[c.row.status===0?(S(),R(l,{key:0,type:"primary",onClick:C=>e.buildHandle(c.row),link:""},{default:n(()=>[_("编译")]),_:2},1032,["onClick"])):B("",!0),a(l,{type:"primary",onClick:C=>e.editHandle(c.row),link:""},{default:n(()=>[_("编辑")]),_:2},1032,["onClick"]),a(l,{type:"danger",onClick:C=>e.deleteHandle(c.row),link:""},{default:n(()=>[_("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[z,e.loading]]),h("div",G,[a(b,{"current-page":e.listQuery.page,"page-size":e.listQuery.page_size,"page-sizes":[10,20,30,50],total:e.total,background:"",layout:"total, sizes, prev, pager, next, jumper",onSizeChange:e.handleSizeChange,onCurrentChange:e.handleCurrentChange},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])])])])])}const Y=H(q,[["render",K],["__scopeId","data-v-a512ff58"]]);export{Y as default};