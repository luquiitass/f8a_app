(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{j1ZV:function(i,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("ofXK"),e=n("TEn/"),c=n("tyNb"),s=n("6g0+"),r=n("3Pt+"),a=n("fXoL");let l=(()=>{class i{}return i.\u0275mod=a.Jb({type:i}),i.\u0275inj=a.Ib({factory:function(t){return new(t||i)},imports:[[o.b,e.kb.forRoot(),r.a,c.j,s.b]]}),i})()},zYH4:function(i,t,n){"use strict";n.r(t),n.d(t,"ProfilePageModule",(function(){return I}));var o=n("ofXK"),e=n("3Pt+"),c=n("TEn/"),s=n("tyNb"),r=n("mrSG"),a=n("8xVP"),l=n("fXoL"),b=n("G/jy"),u=n("ChyW"),d=n("vuFD"),p=n("6g0+"),f=n("CimB"),h=n("GSQ0"),g=n("y/q6"),m=n("2Rin"),P=n("rLe3");function k(i,t){if(1&i){const i=l.Rb();l.Qb(0,"ion-button",22),l.Yb("click",(function(){l.nc(i);const t=l.ac(2);return t.openMenuPublication(t.publication)})),l.Mb(1,"ion-icon",23),l.Pb()}}function y(i,t){if(1&i&&(l.Qb(0,"div",24),l.Mb(1,"img",25),l.Pb()),2&i){const i=l.ac(2);l.yb(1),l.fc("src",i.publication.image.urlComplete,l.oc)}}function v(i,t){1&i&&l.Mb(0,"ion-icon",26)}function M(i,t){1&i&&l.Mb(0,"ion-spinner",27)}function Q(i,t){if(1&i){const i=l.Rb();l.Qb(0,"ion-card",1),l.Qb(1,"ion-card-content"),l.sc(2,k,2,0,"ion-button",2),l.Qb(3,"div",3),l.Qb(4,"ion-thumbnail",4),l.Qb(5,"ion-img",5),l.Yb("click",(function(){l.nc(i);const t=l.ac();return t.showPhotoUser(t.publication.user.photo)})),l.Pb(),l.Pb(),l.Qb(6,"div",6),l.Qb(7,"div",7),l.tc(8),l.Pb(),l.Qb(9,"div",8),l.tc(10),l.Pb(),l.Pb(),l.Pb(),l.Qb(11,"div",9),l.Qb(12,"ion-text",10),l.tc(13),l.Pb(),l.Pb(),l.sc(14,y,2,1,"div",11),l.Qb(15,"ion-grid"),l.Qb(16,"ion-row"),l.Qb(17,"ion-col",12),l.Yb("click",(function(){l.nc(i);const t=l.ac();return t.showPublication(t.publication,"likes")})),l.Qb(18,"ion-text",10),l.Mb(19,"ion-icon",13),l.tc(20),l.Pb(),l.Pb(),l.Qb(21,"ion-col",14),l.Yb("click",(function(){l.nc(i);const t=l.ac();return t.showPublication(t.publication,"comments")})),l.Qb(22,"ion-text"),l.Mb(23,"ion-icon",15),l.tc(24),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Mb(25,"div",16),l.Qb(26,"div"),l.Qb(27,"ion-buttons",17),l.Qb(28,"ion-button",18),l.Yb("click",(function(){l.nc(i);const t=l.ac();return t.like(t.publication)})),l.sc(29,v,1,0,"ion-icon",19),l.sc(30,M,1,0,"ion-spinner",20),l.Pb(),l.Qb(31,"ion-button",21),l.Yb("click",(function(){l.nc(i);const t=l.ac();return t.showPublication(t.publication,"comments")})),l.Mb(32,"ion-icon",15),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()}if(2&i){const i=l.ac();l.yb(2),l.fc("ngIf",i.authUser.user.id==i.publication.user_id),l.yb(3),l.fc("src",i.utilPhoto.getPhotoUser(i.publication.user)),l.yb(3),l.wc(" ",i.publication.user.last_name," ",i.publication.user.first_name," "),l.yb(2),l.vc(" ",i.util.getFormarHumans(i.publication.created_at)," "),l.yb(3),l.vc(" ",i.publication.text," "),l.yb(1),l.fc("ngIf",i.publication.image_id),l.yb(6),l.vc(" ",i.publication.likes_count," "),l.yb(4),l.vc(" ",i.publication.comments_count," "),l.yb(4),l.fc("color",i.publication.liked?"danger":"primary")("disabled",!!i.publication.processLike),l.yb(1),l.fc("ngIf",!i.publication.processLike),l.yb(1),l.fc("ngIf",i.publication.processLike)}}let w=(()=>{class i{constructor(i,t,n,o,e,c,s){this.authUser=i,this.util=t,this.modalController=n,this.request=o,this.utilArray=e,this.dialog=c,this.utilPhoto=s,this.publcationModel=new a.a("Publication",o),this.user=i.user}ngOnInit(){}showPhotoUser(i){return Object(r.b)(this,void 0,void 0,(function*(){console.log("show photo ",i);const t=yield this.modalController.create({component:p.c,componentProps:{src:i?i.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return yield t.present()}))}like(i){return Object(r.b)(this,void 0,void 0,(function*(){i.processLike=!0,i.liked?this.publcationModel.api_functionModel(i.id,"removeLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count-=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1}):this.publcationModel.api_functionModel(i.id,"addLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count+=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1})}))}showPublication(i,t="comments",n=null){return Object(r.b)(this,void 0,void 0,(function*(){const n=yield this.modalController.create({component:f.a,componentProps:{id:i.id,segment:t}});return n.onDidDismiss().then(i=>{console.log("update publication");const t=i.data.publication;this.utilArray.listUpdate(this.user.publications,t.id,t)}),yield n.present()}))}openMenuPublication(i){this.dialog.actionSheetEditDelete(()=>{this.editPublication(i)},()=>{this.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",()=>{this.publcationModel.api_delete(i.id).subscribe(t=>{(t.status="success")&&(this.utilArray.listDelete(this.user.publications,i.id),this.dialog.showToast("Publicacion Eliminada",null,"success"))})})})}editPublication(i){return Object(r.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:h.a,componentProps:{id:i.id}});return t.onDidDismiss().then(i=>{if(console.log("update publicacion"),i.data&&i.data.publication){const t=i.data.publication;this.utilArray.listUpdate(this.user.publications,t.id,t)}}),yield t.present()}))}}return i.\u0275fac=function(t){return new(t||i)(l.Lb(g.a),l.Lb(m.a),l.Lb(c.nb),l.Lb(b.a),l.Lb(P.a),l.Lb(d.a),l.Lb(u.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-publication"]],inputs:{publication:"publication"},decls:1,vars:1,consts:[["style","width: 100%;",4,"ngIf"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"ion-text-left",3,"click"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center"],[3,"src"],["name","heart-outline"],["name","lines"]],template:function(i,t){1&i&&l.sc(0,Q,33,13,"ion-card",0),2&i&&l.fc("ngIf",t.publication)},directives:[o.k,c.k,c.l,c.gb,c.z,c.eb,c.w,c.S,c.q,c.y,c.j,c.i,c.ab],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),i})();function x(i,t){if(1&i&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-content"),l.Mb(2,"ion-img",2),l.Pb(),l.Qb(3,"ion-card-header"),l.Qb(4,"ion-card-title"),l.tc(5),l.Pb(),l.Pb(),l.Pb()),2&i){const i=l.ac();l.yb(2),l.fc("src",i.utilPhoto.getPhotoUser(i.user)),l.yb(3),l.vc(" ",i.user.completeName," ")}}function _(i,t){1&i&&l.Mb(0,"app-publication",4),2&i&&l.fc("publication",t.$implicit)}function L(i,t){if(1&i&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.tc(3,"Publicaciones"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.sc(5,_,1,1,"app-publication",3),l.Pb(),l.Pb()),2&i){const i=l.ac();l.yb(5),l.fc("ngForOf",i.user.publications)}}const C=[{path:"",component:(()=>{class i{constructor(i,t,n,o){this.route=i,this.request=t,this.utilPhoto=n,this.dialogService=o,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.userModel=new a.a("User",t)}ngOnInit(){this.init()}init(i=null){return Object(r.b)(this,void 0,void 0,(function*(){this.firstLoading&&(yield this.dialogService.loadingProgres(),this.firstLoading=!1),this.userModel.api_functionModel(this.id,"profilePage").subscribe(t=>{"success"==t.status&&(this.user=t.data),i&&i.target.complete(),console.log(t),this.dialogService.dimissLoaging()},t=>{i&&i.target.complete(),console.log(t),this.dialogService.dimissLoaging()})}))}}return i.\u0275fac=function(t){return new(t||i)(l.Lb(s.a),l.Lb(b.a),l.Lb(u.a),l.Lb(d.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-profile"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],[3,"src"],[3,"publication",4,"ngFor","ngForOf"],[3,"publication"]],template:function(i,t){1&i&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Perfil de usuario"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button"),l.Pb(),l.Pb(),l.Pb(),l.Qb(6,"ion-content"),l.sc(7,x,6,2,"ion-card",1),l.sc(8,L,6,1,"ion-card",1),l.Pb()),2&i&&(l.yb(7),l.fc("ngIf",t.user),l.yb(1),l.fc("ngIf",t.user&&t.user.publications.length>0))},directives:[c.x,c.jb,c.hb,c.j,c.f,c.g,c.r,o.k,c.k,c.l,c.z,c.m,c.o,o.j,w],styles:[".img_profile[_ngcontent-%COMP%]{width:300px;height:300px}.name[_ngcontent-%COMP%]{font-size:large}"]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(t){return new(t||i)},imports:[[s.j.forChild(C)],s.j]}),i})();var j=n("j1ZV");let I=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(t){return new(t||i)},imports:[[o.b,e.a,c.kb,O,j.a]]}),i})()}}]);