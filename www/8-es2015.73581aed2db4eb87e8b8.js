(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Jr79:function(i,t,n){"use strict";n.r(t),n.d(t,"PublicationsPageModule",(function(){return D}));var e=n("ofXK"),o=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),s=n("mrSG"),a=n("GSQ0"),b=n("8xVP"),l=n("6g0+"),u=n("CimB"),d=n("fXoL"),p=n("rLe3"),h=n("G/jy"),f=n("2Rin"),m=n("y/q6"),g=n("EbHZ"),P=n("vuFD"),k=n("zYHx");function Q(i,t){1&i&&(d.Qb(0,"ion-list-header",7),d.Qb(1,"ion-label"),d.tc(2,"Sin registros"),d.Pb(),d.Pb())}function y(i,t){if(1&i){const i=d.Rb();d.Qb(0,"ion-button",29),d.Yb("click",(function(){d.nc(i);const t=d.ac().$implicit;return d.ac(2).openMenuPublication(t)})),d.Mb(1,"ion-icon",30),d.Pb()}}function v(i,t){if(1&i&&(d.Qb(0,"div",31),d.Mb(1,"img",32),d.Pb()),2&i){const i=d.ac().$implicit;d.hc("routerLink","/publication/",i.id,"/comments"),d.yb(1),d.fc("src",i.image.urlComplete,d.oc)}}function x(i,t){1&i&&d.Mb(0,"ion-icon",33)}function M(i,t){1&i&&d.Mb(0,"ion-spinner",34)}function w(i,t){if(1&i){const i=d.Rb();d.Qb(0,"ion-item"),d.Qb(1,"ion-card",8),d.Qb(2,"ion-card-content"),d.sc(3,y,2,0,"ion-button",9),d.Qb(4,"div",10),d.Qb(5,"ion-thumbnail",11),d.Qb(6,"ion-img",12),d.Yb("click",(function(){d.nc(i);const n=t.$implicit;return d.ac(2).showPhotoUser(n.user.photo)})),d.Pb(),d.Pb(),d.Qb(7,"div",13),d.Qb(8,"div",14),d.tc(9),d.Pb(),d.Qb(10,"div",15),d.tc(11),d.Pb(),d.Pb(),d.Pb(),d.Qb(12,"div",16),d.Qb(13,"ion-text",17),d.tc(14),d.Pb(),d.Pb(),d.sc(15,v,2,2,"div",18),d.Qb(16,"ion-grid"),d.Qb(17,"ion-row"),d.Qb(18,"ion-col",19),d.Qb(19,"ion-text",17),d.Mb(20,"ion-icon",20),d.tc(21),d.Pb(),d.Pb(),d.Qb(22,"ion-col",21),d.Qb(23,"ion-text"),d.Mb(24,"ion-icon",22),d.tc(25),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Mb(26,"div",23),d.Qb(27,"div"),d.Qb(28,"ion-buttons",24),d.Qb(29,"ion-button",25),d.Yb("click",(function(){d.nc(i);const n=t.$implicit;return d.ac(2).like(n)})),d.sc(30,x,1,0,"ion-icon",26),d.sc(31,M,1,0,"ion-spinner",27),d.Pb(),d.Qb(32,"ion-button",28),d.Mb(33,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()}if(2&i){const i=t.$implicit,n=d.ac(2);d.yb(3),d.fc("ngIf",n.authUser.user.id==i.user_id),d.yb(3),d.fc("src",i.user.photo?i.user.photo.urlCompleteThumb:n.pathImages.images.profile_user),d.yb(1),d.hc("routerLink","/users/",i.user.id,"/profile"),d.yb(2),d.wc(" ",i.user.last_name," ",i.user.first_name," "),d.yb(2),d.vc(" ",n.util.getFormarHumans(i.created_at)," "),d.yb(3),d.vc(" ",i.text," "),d.yb(1),d.fc("ngIf",i.image_id),d.yb(3),d.hc("routerLink","/publication/",i.id,"/likes"),d.yb(3),d.vc(" ",i.likes_count," "),d.yb(1),d.hc("routerLink","/publication/",i.id,"/comments"),d.yb(3),d.vc(" ",i.comments_count," "),d.yb(4),d.fc("color",i.liked?"danger":"primary")("disabled",!!i.processLike),d.yb(1),d.fc("ngIf",!i.processLike),d.yb(1),d.fc("ngIf",i.processLike),d.yb(1),d.hc("routerLink","/publication/",i.id,"/comments")}}function L(i,t){if(1&i){const i=d.Rb();d.Qb(0,"div"),d.Qb(1,"ion-refresher",3),d.Yb("ionRefresh",(function(t){return d.nc(i),d.ac().init(t)})),d.Mb(2,"ion-refresher-content"),d.Pb(),d.Qb(3,"ion-button",4),d.Yb("click",(function(){return d.nc(i),d.ac().openModal()})),d.tc(4,"Nueva Publicaci\xf3n"),d.Pb(),d.Qb(5,"ion-list"),d.sc(6,Q,3,0,"ion-list-header",5),d.sc(7,w,34,17,"ion-item",6),d.Pb(),d.Pb()}if(2&i){const i=d.ac();d.yb(6),d.fc("ngIf",0==i.publications.length),d.yb(1),d.fc("ngForOf",i.publications)}}function _(i,t){1&i&&(d.Qb(0,"ion-card"),d.Qb(1,"ion-card-content"),d.Qb(2,"div",10),d.Qb(3,"ion-avatar",11),d.Mb(4,"ion-skeleton-text",35),d.Pb(),d.Qb(5,"div",36),d.Qb(6,"div",14),d.Mb(7,"ion-skeleton-text",37),d.Pb(),d.Qb(8,"div",15),d.Mb(9,"ion-skeleton-text",38),d.Pb(),d.Pb(),d.Pb(),d.Qb(10,"div",16),d.Qb(11,"ion-text",17),d.Mb(12,"ion-skeleton-text",39),d.Mb(13,"ion-skeleton-text",40),d.Pb(),d.Pb(),d.Qb(14,"div",41),d.Qb(15,"ion-thumbnail",42),d.Mb(16,"ion-skeleton-text",43),d.Pb(),d.Pb(),d.Qb(17,"ion-grid"),d.Qb(18,"ion-row"),d.Qb(19,"ion-col",44),d.Qb(20,"ion-text",17),d.Mb(21,"ion-icon",33),d.Pb(),d.Pb(),d.Qb(22,"ion-col",45),d.Mb(23,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Mb(24,"div",23),d.Qb(25,"div"),d.Qb(26,"ion-buttons",24),d.Qb(27,"ion-button",46),d.Mb(28,"ion-icon",33),d.Pb(),d.Qb(29,"ion-button",46),d.Mb(30,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb())}function C(i,t){if(1&i&&(d.Qb(0,"div"),d.sc(1,_,31,0,"ion-card",6),d.Pb()),2&i){const i=d.ac();d.yb(1),d.fc("ngForOf",i.listSkeleton)}}const O=[{path:"",component:(()=>{class i{constructor(i,t,n,e,o,c,r,s,a,l){this.modalController=i,this.utilArray=t,this.request=n,this.util=e,this.authUser=o,this.navCtrl=c,this.transferData=r,this.router=s,this.dialog=a,this.pathImages=l,this.publications=[],this.firstLoad=!0,this.listSkeleton=new Array(8),this.processLike=!1,this.publcationModel=new b.a("Publication",n)}ngOnInit(){return Object(s.b)(this,void 0,void 0,(function*(){this.user=yield this.authUser.getUser(),this.init()}))}init(i=null,t=!1){return Object(s.b)(this,void 0,void 0,(function*(){let n={};t&&this.dataPaginate&&(n={page:this.dataPaginate.current_page+1}),this.publcationModel.api_function("list",n).subscribe(n=>{if(console.log(n),"success"==n.status)if(this.dataPaginate=n.data,t)for(let i of n.data.data)this.publications.push(i);else this.publications=n.data.data;i&&i.target.complete(),this.firstLoad=!1},t=>{console.log(t),i&&i.target.complete(),this.firstLoad=!1})}))}loadData(i){if(this.dataPaginate&&this.dataPaginate.last_page==this.dataPaginate.current_page)return i.target.complete(),i.target.disabled=!0,void(this.infiniteScroll.disabled=!this.infiniteScroll.disabled);this.init(i,!0)}openModal(){return Object(s.b)(this,void 0,void 0,(function*(){const i=yield this.modalController.create({component:a.a,componentProps:{}});return i.onDidDismiss().then(i=>{console.log("crate publication"),i.data&&i.data.publication&&this.utilArray.listAddFirst(this.publications,i.data.publication)}),yield i.present()}))}showPhotoUser(i){return Object(s.b)(this,void 0,void 0,(function*(){console.log("show photo ",i);const t=yield this.modalController.create({component:l.c,componentProps:{src:i?i.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return yield t.present()}))}like(i){return Object(s.b)(this,void 0,void 0,(function*(){i.processLike=!0,i.liked?this.publcationModel.api_functionModel(i.id,"removeLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count-=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1}):this.publcationModel.api_functionModel(i.id,"addLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count+=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1})}))}showPublication(i,t="comments",n=null){return Object(s.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:u.a,componentProps:{id:i.id,segment:t}});return n.onDidDismiss().then(i=>{console.log("update publication");const t=i.data.publication;this.utilArray.listUpdate(this.publications,t.id,t)}),yield n.present()}))}openMenuPublication(i){this.dialog.actionSheetEditDelete(()=>{this.editPublication(i)},()=>{this.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",()=>{this.publcationModel.api_delete(i.id).subscribe(t=>{(t.status="success")&&(this.utilArray.listDelete(this.publications,i.id),this.dialog.showToast("Publicacion Eliminada",null,"success"))})})})}editPublication(i){return Object(s.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:a.a,componentProps:{id:i.id}});return t.onDidDismiss().then(i=>{if(console.log("update publicacion"),i.data&&i.data.publication){const t=i.data.publication;this.utilArray.listUpdate(this.publications,t.id,t)}}),yield t.present()}))}}return i.\u0275fac=function(t){return new(t||i)(d.Lb(c.lb),d.Lb(p.a),d.Lb(h.a),d.Lb(f.a),d.Lb(m.a),d.Lb(c.mb),d.Lb(g.a),d.Lb(r.g),d.Lb(P.a),d.Lb(k.a))},i.\u0275cmp=d.Fb({type:i,selectors:[["app-publications"]],viewQuery:function(i,t){var n;1&i&&d.xc(c.A,!0),2&i&&d.jc(n=d.Zb())&&(t.infiniteScroll=n.first)},decls:9,vars:2,consts:[[4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["slot","fixed",3,"ionRefresh"],["expand","block","fill","outline",3,"click"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],["routerDirection","forward",1,"user",3,"routerLink"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center","routerDirection","forward",3,"routerLink",4,"ngIf"],["routerDirection","forward",1,"ion-text-left",3,"routerLink"],["name","heart-outline","color","danger"],["routerDirection","forward",1,"ion-text-right",3,"routerLink"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary","routerDirection","forward",2,"width","50%",3,"routerLink"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],["routerDirection","forward",1,"publication-image","ion-text-center",3,"routerLink"],[3,"src"],["name","heart-outline"],["name","lines"],["animated",""],[1,"user"],["animated","",2,"width","150px","height","20px"],["animated","",2,"width","70px"],["animated","",2,"width","100%","height","20px"],["animated","",2,"width","90%","height","20px"],[1,"publication-image","ion-text-center"],[2,"height","200px","width","100%"],["animated","",2,"width","100%","height","100%"],[1,"ion-text-left"],[1,"ion-text-right"],["expand","full",2,"width","50%"]],template:function(i,t){1&i&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-title"),d.tc(3,"publicaciones"),d.Pb(),d.Pb(),d.Pb(),d.Qb(4,"ion-content"),d.sc(5,L,8,2,"div",0),d.sc(6,C,2,1,"div",0),d.Qb(7,"ion-infinite-scroll",1),d.Yb("ionInfinite",(function(i){return t.loadData(i)})),d.Mb(8,"ion-infinite-scroll-content",2),d.Pb(),d.Pb()),2&i&&(d.yb(5),d.fc("ngIf",!t.firstLoad),d.yb(1),d.fc("ngIf",t.firstLoad))},directives:[c.x,c.hb,c.fb,c.r,e.k,c.A,c.B,c.M,c.N,c.i,c.H,e.j,c.I,c.G,c.D,c.k,c.l,c.eb,c.z,c.qb,r.h,c.cb,c.w,c.Q,c.q,c.y,c.j,c.Y,c.e,c.W],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),i})()}];let I=(()=>{class i{}return i.\u0275mod=d.Jb({type:i}),i.\u0275inj=d.Ib({factory:function(t){return new(t||i)},imports:[[r.j.forChild(O)],r.j]}),i})(),D=(()=>{class i{}return i.\u0275mod=d.Jb({type:i}),i.\u0275inj=d.Ib({factory:function(t){return new(t||i)},imports:[[e.b,o.a,c.ib,I,l.b]]}),i})()}}]);