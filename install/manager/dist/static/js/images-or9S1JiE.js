import{_ as C,aE as x,aF as $,az as h,q as n,o as u,c as b,b as _,m as e,A as a,v as r,F as I,i as L,j as B,t as f,ai as F,aj as S}from"./index-I_cAmrof.js";const z={name:"images",components:{Edit:x,Plus:$},data(){return{pk:null,listTotal:0,list:[]}},created(){this.getList()},methods:{getList(){h.get("/api/admin/docker/images").then(t=>{this.list=t.data})},remove(t,o){let g=this.pk,i;o?i=`${t.repo}:${o}`:i=t.id,h.post("/api/admin/docker/delete_images",{host:g,id:i}).then(d=>{this.$message({message:"删除成功",type:"success"}),this.getList()}).catch(d=>{})}}},E=t=>(F("data-v-3993604c"),t=t(),S(),t),N={class:"page-container"},P={class:"widget"},V=E(()=>_("div",{class:"tool-bar"},"镜像管理",-1)),j={class:"action-bar"},q={class:"small"};function A(t,o,g,i,d,p){const k=n("Plus"),v=n("el-icon"),m=n("el-button"),l=n("el-table-column"),y=n("el-tag"),w=n("el-table");return u(),b("div",N,[_("div",P,[V,_("div",j,[e(m,{onClick:o[0]||(o[0]=s=>t.$router.push({name:"docker.image.add",query:{id:d.pk}})),type:"primary"},{default:a(()=>[e(v,null,{default:a(()=>[e(k)]),_:1}),r(" 添加镜像 ")]),_:1}),e(m,{onClick:o[1]||(o[1]=s=>p.getList()),type:"primary"},{default:a(()=>[r("查询")]),_:1})]),e(w,{data:d.list,class:"table","max-height":"600"},{default:a(()=>[e(l,{label:"short ID",prop:"id",width:"150"}),e(l,{label:"repo",prop:"repo"}),e(l,{label:"tags",prop:"tags"},{default:a(s=>[(u(!0),b(I,null,L(s.row.tags,c=>(u(),B(y,{style:{margin:"0 5px"},closable:"",onClose:D=>p.remove(s.row,c),key:c,class:"tag-item"},{default:a(()=>[r(f(c),1)]),_:2},1032,["onClose"]))),128))]),_:1}),e(l,{label:"size"},{default:a(s=>[_("span",q,f((s.row.size/1e3/1e3).toFixed(1))+"M",1)]),_:1}),e(l,{label:"created",prop:"created"}),e(l,{label:"Action",width:"100"},{default:a(s=>[e(m,{disabled:s.row.tags.length>1,onClick:c=>p.remove(s.row),type:"danger",link:""},{default:a(()=>[r("删除 ")]),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])])])}const M=C(z,[["render",A],["__scopeId","data-v-3993604c"]]);export{M as default};