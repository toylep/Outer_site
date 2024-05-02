(function(){"use strict";var t={596:function(t,e,n){var r=n(751),s=n(641),a=n(953),i=n(839),o=n(250);const c=(0,i.nY)("userStore",{state:()=>({partner:{id:"",image:"Не авторизован",name:"Не авторизован",agreement:"Не авторизован",practice_topics:"Не авторизован"},auth:{username:"Не авторизован",password:"Не авторизован"}}),actions:{setUser(t){this.partner=t},setAuth(t){this.auth=t},async setUserFromServer(){this.auth.username=JSON.parse(localStorage.getItem("auth")).username,null!=this.auth?await o.A.get("/api/users/"+this.auth.username).then((t=>t.data)).then((t=>{this.user=t,localStorage.setItem("user",JSON.stringify(t))})):alert("Вы не авторизованы")},async getUserList(){o.A.get("/api/users/").then((t=>t.data)).then((t=>this.users=t))},async changeAuthority(t){o.A.patch("api/users/"+t).then((t=>t.data)).then((t=>this.users.filter((e=>e.id===t.id))[0]=t))}}});const u={class:"Header"},l=(0,s.Fv)('<a href="https://www.istu.edu/"><button class="logo"><img src="https://www.istu.edu/upload/iblock/f55/logo_1.png" class="logo"></button></a><div class="name"> Производственные партнеры <br> институтов ИРНИТУ </div><div class="icons"><a href="https://t.me/ForStudentIRNITUbot"><button class="hat_butt"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png" style="height:35px;width:35px;"></button></a><a href="https://job.istu.edu/in"><button class="hat_butt"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALBplMxySL51Y_dJZ5FTrLpa1rpD72FebJA&amp;usqp=CAU" style="height:35px;width:35px;margin-left:7px;"></button></a></div>',3),p=[l];var d={__name:"Hat",setup(t){const e=(0,a.KR)(c()),n={username:"Не авторизован",name:"Не авторизован",email:"Не авторизован",is_staff:!1};return(0,s.KC)((()=>{JSON.parse(localStorage.getItem("user"))==n&&e.value.setUserFromServer()})),(t,e)=>((0,s.uX)(),(0,s.CE)("div",u,p))}};const h=d;var m=h,g={__name:"App",setup(t){return(t,e)=>{const n=(0,s.g2)("RouterView");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(m),(0,s.Lk)("body",null,[(0,s.bF)(n)])],64)}}};const v=g;var f=v,b=n(220),y=n(33);const k=(0,i.nY)("instituteStore",{state:()=>({Insts:[]}),actions:{async getInstsFromServer(){o.A.get("/api/out/legacy/faculty").then((t=>{this.Insts=t.data}))}}}),_=(0,i.nY)("practiceStore",{state:()=>({practices:[],inst_id:0}),actions:{async getPracticeFromServer(){o.A.get("/api/out/base/practice",{params:{faculty:await this.getInstId()}}).then((t=>{this.practices=t.data})).catch((t=>{this.practices=[]}))},setInstId(t){this.inst_id=t},getInstId(){return this.inst_id}}}),L={class:"block"},I=["onClick"],w={class:"textInst"},C={style:{"margin-left":"10px","margin-bottom":"15px"}};var F={__name:"Institute",setup(t){const e=k(),n=_();return(0,s.KC)((()=>{e.getInstsFromServer()})),(t,r)=>{const i=(0,s.g2)("router-link");return(0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,a.R1)(e).Insts,(t=>((0,s.uX)(),(0,s.CE)("a",L,[(0,s.bF)(i,{to:{name:"partner"}},{default:(0,s.k6)((()=>[(0,s.Lk)("button",{href:"#",class:"button",style:{"margin-left":"35px"},onClick:e=>(0,a.R1)(n).setInstId(t.id)},[(0,s.Lk)("div",{class:"Institutes",style:(0,y.Tr)({backgroundImage:"url("+t.picture+")"})},[(0,s.Lk)("div",w,[(0,s.Lk)("div",C,(0,y.v_)(t.name),1)])],4)],8,I)])),_:2},1024)])))),256)}}};const S=F;var x=S;const E={class:"container-fluid",style:{"text-align":"center"}};var O={__name:"InstituteView",setup(t){return(t,e)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",E,[(0,s.bF)(x)])]))}};const X=O;var A=X;const j={key:0,style:{"background-color":"crimson"}},T=(0,s.Lk)("h2",null,"Пока тут ничего нет",-1),R=[T],K={class:"card",style:{"margin-top":"2rem"}},P={class:"card-header"},U={class:"card-title"},J=["src"],N={class:"card-body"},Y={class:"card-text"},H={class:"card-body"},M={class:"card-text"},V={class:"list-group list-group-flush"},q={class:"list-group-item"},B={key:0},D={class:"bi bi-globe"},G=["href"],Q={key:1},W={class:"bi bi-file-earmark-arrow-down-fill"};var Z={__name:"PracticeList",setup(t){const e=_();return(0,s.KC)((()=>{e.getPracticeFromServer()})),(t,n)=>((0,s.uX)(),(0,s.CE)("div",null,[0===(0,a.R1)(e).practices.length?((0,s.uX)(),(0,s.CE)("div",j,R)):(0,s.Q3)("",!0),((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)((0,a.R1)(e).practices,(t=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",K,[(0,s.Lk)("div",P,[(0,s.Lk)("h5",U,(0,y.v_)(t.company.name),1)]),(0,s.Lk)("img",{src:t.company.image,class:"card-img-top",alt:"тут должна быть картинка",style:{width:"15rem"}},null,8,J),(0,s.Lk)("div",N,[(0,s.Lk)("p",Y,(0,y.v_)(t.company.agreements),1)]),(0,s.Lk)("div",H,[(0,s.Lk)("p",M,(0,y.v_)(t.name),1)]),(0,s.Lk)("ul",V,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.doc_links,(t=>((0,s.uX)(),(0,s.CE)("li",q,["Веб-сайт"===t.type?((0,s.uX)(),(0,s.CE)("div",B,[(0,s.Lk)("i",D,[(0,s.Lk)("a",{href:t.url},(0,y.v_)(" "+t.type),9,G)])])):((0,s.uX)(),(0,s.CE)("div",Q,[(0,s.Lk)("i",W,(0,y.v_)(t.type),1)]))])))),256))])])])))),256))]))}};const z=Z;var $=z,tt=n.p+"img/hat.a796b6e1.jpeg";const et={class:"card-body"},nt=(0,s.Lk)("h2",{style:{width:"fit-content","background-color":"skyblue","border-radius":"3px"}}," Промышленные партнеры ",-1),rt={href:"#",class:"btn btn-light"};var st={__name:"HatInInstitute",setup(t){return(t,e)=>{const n=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",{class:"card",style:(0,y.Tr)({backgroundImage:"url("+(0,a.R1)(tt)+")"})},[(0,s.Lk)("div",et,[nt,(0,s.Lk)("div",null,[(0,s.Lk)("button",rt,[(0,s.bF)(n,{to:{name:"home"}},{default:(0,s.k6)((()=>[(0,s.eW)("На главную ")])),_:1})])])])],4)}}};const at=st;var it=at;const ot={class:"container-xl"},ct={class:"container"},ut={class:"container-fluid"},lt={class:"col-sm p-3 min-vh-100"};var pt={__name:"PracticeView",setup(t){return(t,e)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",ot,[(0,s.bF)(it)]),(0,s.Lk)("div",ct,[(0,s.Lk)("div",ut,[(0,s.Lk)("div",lt,[(0,s.bF)($)])])])]))}};const dt=pt;var ht=dt;const mt=[{path:"/out",name:"home",component:A},{path:"/out/partner",name:"partner",component:ht},{path:"/in",name:"in"}],gt=(0,b.aE)({history:(0,b.LA)("/"),routes:mt});var vt=gt;n(313),n(454);(0,r.Ef)(f).use(vt).use((0,i.Ey)()).mount("#app")}},e={};function n(r){var s=e[r];if(void 0!==s)return s.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,s,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],s=t[l][1],a=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<i&&(i=a));if(o){t.splice(l--,1);var u=s();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,s,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var s,a,i=r[0],o=r[1],c=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(c)var l=c(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunkouter_site_front"]=self["webpackChunkouter_site_front"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(596)}));r=n.O(r)})();
//# sourceMappingURL=app.f5f39a20.js.map