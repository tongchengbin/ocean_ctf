import{_ as C,aA as x,aB as $,a8 as b,q as f,G as p,H as t,R as a,D as n,p as u,S as c,J as B,K as L,U as P,P as k}from"./index-Dasq562Y.js";const D={name:"images",components:{Edit:x,Plus:$},data(){return{pk:null,listTotal:0,list:[]}},created(){this.getList()},methods:{getList(){b.get("/api/admin/docker/images").then(l=>{this.list=l.data})},remove(l,e){let g=this.pk,i;e?i=`${l.repo}:${e}`:i=l.id,b.post("/api/admin/docker/delete_images",{host:g,id:i}).then(d=>{this.$message({message:"删除成功",type:"success"}),this.getList()}).catch(d=>{})}}},N={class:"page-container"},V={class:"widget"},q={class:"action-bar"},z={class:"small"};function A(l,e,g,i,d,_){const h=n("Plus"),v=n("el-icon"),m=n("el-button"),o=n("el-table-column"),y=n("el-tag"),w=n("el-table");return u(),f("div",N,[p("div",V,[e[5]||(e[5]=p("div",{class:"tool-bar"},"镜像管理",-1)),p("div",q,[t(m,{onClick:e[0]||(e[0]=s=>l.$router.push({name:"docker.image.add",query:{id:d.pk}})),type:"primary"},{default:a(()=>[t(v,null,{default:a(()=>[t(h)]),_:1}),e[2]||(e[2]=c(" 添加镜像 "))]),_:1}),t(m,{onClick:e[1]||(e[1]=s=>_.getList()),type:"primary"},{default:a(()=>e[3]||(e[3]=[c("查询")])),_:1})]),t(w,{data:d.list,class:"table","max-height":"600"},{default:a(()=>[t(o,{label:"short ID",prop:"id",width:"150"}),t(o,{label:"repo",prop:"repo"}),t(o,{label:"tags",prop:"tags"},{default:a(s=>[(u(!0),f(B,null,L(s.row.tags,r=>(u(),P(y,{style:{margin:"0 5px"},closable:"",onClose:E=>_.remove(s.row,r),key:r,class:"tag-item"},{default:a(()=>[c(k(r),1)]),_:2},1032,["onClose"]))),128))]),_:1}),t(o,{label:"size"},{default:a(s=>[p("span",z,k((s.row.size/1e3/1e3).toFixed(1))+"M",1)]),_:1}),t(o,{label:"created",prop:"created"}),t(o,{label:"Action",width:"100"},{default:a(s=>[t(m,{disabled:s.row.tags.length>1,onClick:r=>_.remove(s.row),type:"danger",link:""},{default:a(()=>e[4]||(e[4]=[c("删除 ")])),_:2},1032,["disabled","onClick"])]),_:1})]),_:1},8,["data"])])])}const I=C(D,[["render",A],["__scopeId","data-v-3993604c"]]);export{I as default};
