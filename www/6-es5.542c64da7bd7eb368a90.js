!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Jr79:function(e,i,o){"use strict";o.r(i),o.d(i,"PublicationsPageModule",(function(){return F}));var r=o("ofXK"),c=o("3Pt+"),a=o("TEn/"),s=o("tyNb"),u=o("mrSG"),b=o("GSQ0"),l=o("8xVP"),d=o("6g0+"),p=o("CimB"),f=o("fXoL"),h=o("rLe3"),m=o("G/jy"),g=o("2Rin"),v=o("y/q6"),P=o("EbHZ"),k=o("vuFD"),x=o("zYHx");function Q(t,n){1&t&&(f.Qb(0,"ion-list-header",5),f.Qb(1,"ion-label"),f.tc(2,"Sin registros"),f.Pb(),f.Pb())}function w(t,n){if(1&t){var e=f.Rb();f.Qb(0,"ion-button",27),f.Yb("click",(function(){f.nc(e);var t=f.ac().$implicit;return f.ac(2).openMenuPublication(t)})),f.Mb(1,"ion-icon",28),f.Pb()}}function y(t,n){if(1&t&&(f.Qb(0,"div",29),f.Mb(1,"img",30),f.Pb()),2&t){var e=f.ac().$implicit;f.yb(1),f.fc("src",e.image.urlComplete,f.oc)}}function M(t,n){1&t&&f.Mb(0,"ion-icon",31)}function L(t,n){1&t&&f.Mb(0,"ion-spinner",32)}function _(t,n){if(1&t){var e=f.Rb();f.Qb(0,"ion-item"),f.Qb(1,"ion-card",6),f.Qb(2,"ion-card-content"),f.sc(3,w,2,0,"ion-button",7),f.Qb(4,"div",8),f.Qb(5,"ion-thumbnail",9),f.Qb(6,"ion-img",10),f.Yb("click",(function(){f.nc(e);var t=n.$implicit;return f.ac(2).showPhotoUser(t.user.photo)})),f.Pb(),f.Pb(),f.Qb(7,"div",11),f.Qb(8,"div",12),f.tc(9),f.Pb(),f.Qb(10,"div",13),f.tc(11),f.Pb(),f.Pb(),f.Pb(),f.Qb(12,"div",14),f.Qb(13,"ion-text",15),f.tc(14),f.Pb(),f.Pb(),f.sc(15,y,2,1,"div",16),f.Qb(16,"ion-grid"),f.Qb(17,"ion-row"),f.Qb(18,"ion-col",17),f.Yb("click",(function(){f.nc(e);var t=n.$implicit,i=n.index;return f.ac(2).showPublication(t,"likes",i)})),f.Qb(19,"ion-text",15),f.Mb(20,"ion-icon",18),f.tc(21),f.Pb(),f.Pb(),f.Qb(22,"ion-col",19),f.Yb("click",(function(){f.nc(e);var t=n.$implicit;return f.ac(2).showPublication(t,"comments")})),f.Qb(23,"ion-text"),f.Mb(24,"ion-icon",20),f.tc(25),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Mb(26,"div",21),f.Qb(27,"div"),f.Qb(28,"ion-buttons",22),f.Qb(29,"ion-button",23),f.Yb("click",(function(){f.nc(e);var t=n.$implicit;return f.ac(2).like(t)})),f.sc(30,M,1,0,"ion-icon",24),f.sc(31,L,1,0,"ion-spinner",25),f.Pb(),f.Qb(32,"ion-button",26),f.Yb("click",(function(){f.nc(e);var t=n.$implicit;return f.ac(2).showPublication(t,"comments")})),f.Mb(33,"ion-icon",20),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb()}if(2&t){var i=n.$implicit,o=f.ac(2);f.yb(3),f.fc("ngIf",o.authUser.user.id==i.user_id),f.yb(3),f.fc("src",i.user.photo?i.user.photo.urlCompleteThumb:o.pathImages.images.profile_user),f.yb(3),f.wc(" ",i.user.last_name," ",i.user.first_name," "),f.yb(2),f.vc(" ",o.util.getFormarHumans(i.created_at)," "),f.yb(3),f.vc(" ",i.text," "),f.yb(1),f.fc("ngIf",i.image_id),f.yb(6),f.vc(" ",i.likes_count," "),f.yb(4),f.vc(" ",i.comments_count," "),f.yb(4),f.fc("color",i.liked?"danger":"primary")("disabled",!!i.processLike),f.yb(1),f.fc("ngIf",!i.processLike),f.yb(1),f.fc("ngIf",i.processLike)}}function C(t,n){if(1&t){var e=f.Rb();f.Qb(0,"div"),f.Qb(1,"ion-refresher",1),f.Yb("ionRefresh",(function(t){return f.nc(e),f.ac().init(t)})),f.Mb(2,"ion-refresher-content"),f.Pb(),f.Qb(3,"ion-button",2),f.Yb("click",(function(){return f.nc(e),f.ac().openModal()})),f.tc(4,"Nueva Publicacion"),f.Pb(),f.Qb(5,"ion-list"),f.sc(6,Q,3,0,"ion-list-header",3),f.sc(7,_,34,13,"ion-item",4),f.Pb(),f.Pb()}if(2&t){var i=f.ac();f.yb(6),f.fc("ngIf",0==i.publications.length),f.yb(1),f.fc("ngForOf",i.publications)}}function O(t,n){1&t&&(f.Qb(0,"ion-card"),f.Qb(1,"ion-card-content"),f.Qb(2,"div",8),f.Qb(3,"ion-avatar",9),f.Mb(4,"ion-skeleton-text",33),f.Pb(),f.Qb(5,"div",11),f.Qb(6,"div",12),f.Mb(7,"ion-skeleton-text",34),f.Pb(),f.Qb(8,"div",13),f.Mb(9,"ion-skeleton-text",35),f.Pb(),f.Pb(),f.Pb(),f.Qb(10,"div",14),f.Qb(11,"ion-text",15),f.Mb(12,"ion-skeleton-text",36),f.Mb(13,"ion-skeleton-text",37),f.Pb(),f.Pb(),f.Qb(14,"div",29),f.Qb(15,"ion-thumbnail",38),f.Mb(16,"ion-skeleton-text",39),f.Pb(),f.Pb(),f.Qb(17,"ion-grid"),f.Qb(18,"ion-row"),f.Qb(19,"ion-col",40),f.Qb(20,"ion-text",15),f.Mb(21,"ion-icon",31),f.Pb(),f.Pb(),f.Qb(22,"ion-col",41),f.Mb(23,"ion-icon",20),f.Pb(),f.Pb(),f.Pb(),f.Mb(24,"div",21),f.Qb(25,"div"),f.Qb(26,"ion-buttons",22),f.Qb(27,"ion-button",42),f.Mb(28,"ion-icon",31),f.Pb(),f.Qb(29,"ion-button",42),f.Mb(30,"ion-icon",20),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Pb())}function R(t,n){if(1&t&&(f.Qb(0,"div"),f.sc(1,O,31,0,"ion-card",4),f.Pb()),2&t){var e=f.ac();f.yb(1),f.fc("ngForOf",e.listSkeleton)}}var I,j,D,Y=[{path:"",component:(I=function(){function e(n,i,o,r,c,a,s,u,b,d){t(this,e),this.modalController=n,this.utilArray=i,this.request=o,this.util=r,this.authUser=c,this.navCtrl=a,this.transferData=s,this.router=u,this.dialog=b,this.pathImages=d,this.publications=[],this.firstLoad=!0,this.listSkeleton=new Array(8),this.processLike=!1,this.publcationModel=new l.a("Publication",o)}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.authUser.getUser();case 2:this.user=t.sent,this.init();case 4:case"end":return t.stop()}}),t,this)})))}},{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:this.publcationModel.api_function("list",{}).subscribe((function(n){console.log(n),"success"==n.status&&(e.publications=n.data),t&&t.target.complete(),e.firstLoad=!1}),(function(n){console.log(n),t&&t.target.complete(),e.firstLoad=!1}));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"openModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:b.a,componentProps:{}});case 2:return(n=t.sent).onDidDismiss().then((function(t){console.log("crate puvlivsa"),e.utilArray.listAddFirst(e.publications,t.data.publication)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"showPhotoUser",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("show photo ",t),n.next=3,this.modalController.create({component:d.c,componentProps:{src:t?t.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 3:return e=n.sent,n.next=6,e.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"like",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.processLike=!0,t.liked?this.publcationModel.api_functionModel(t.id,"removeLike",{user_id:this.user.id}).subscribe((function(n){"success"==n.status&&(t.liked=!t.liked,t.likes_count-=1),t.processLike=!1}),(function(n){console.error(n),t.processLike=!1})):this.publcationModel.api_functionModel(t.id,"addLike",{user_id:this.user.id}).subscribe((function(n){"success"==n.status&&(t.liked=!t.liked,t.likes_count+=1),t.processLike=!1}),(function(n){console.error(n),t.processLike=!1}));case 1:case"end":return n.stop()}}),n,this)})))}},{key:"showPublication",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"comments";return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:p.a,componentProps:{id:t.id,segment:n}});case 2:return(i=e.sent).onDidDismiss().then((function(t){console.log("update publication");var n=t.data.publication;o.utilArray.listUpdate(o.publications,n.id,n)})),e.next=6,i.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"openMenuPublication",value:function(t){var n=this;this.dialog.actionSheetEditDelete((function(){n.editPublication(t)}),(function(){n.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",(function(){n.publcationModel.api_delete(t.id).subscribe((function(e){(e.status="success")&&(n.utilArray.listDelete(n.publications,t.id),n.dialog.showToast("Publicacion Eliminada",null,"success"))}))}))}))}},{key:"editPublication",value:function(t){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:b.a,componentProps:{id:t.id}});case 2:return(e=n.sent).onDidDismiss().then((function(t){if(console.log("update publicacion"),t.data&&t.data.publication){var n=t.data.publication;i.utilArray.listUpdate(i.publications,n.id,n)}})),n.next=6,e.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}}])&&n(i.prototype,o),r&&n(i,r),e}(),I.\u0275fac=function(t){return new(t||I)(f.Lb(a.hb),f.Lb(h.a),f.Lb(m.a),f.Lb(g.a),f.Lb(v.a),f.Lb(a.ib),f.Lb(P.a),f.Lb(s.g),f.Lb(k.a),f.Lb(x.a))},I.\u0275cmp=f.Fb({type:I,selectors:[["app-publications"]],decls:7,vars:2,consts:[[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["expand","block","fill","outline",3,"click"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"ion-text-left",3,"click"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center"],[3,"src"],["name","heart-outline"],["name","lines"],["animated",""],["animated","",2,"width","150px","height","20px"],["animated","",2,"width","70px"],["animated","",2,"width","100%","height","20px"],["animated","",2,"width","90%","height","20px"],[2,"height","200px","width","100%"],["animated","",2,"width","100%","height","100%"],[1,"ion-text-left"],[1,"ion-text-right"],["expand","full",2,"width","50%"]],template:function(t,n){1&t&&(f.Qb(0,"ion-header"),f.Qb(1,"ion-toolbar"),f.Qb(2,"ion-title"),f.tc(3,"publications"),f.Pb(),f.Pb(),f.Pb(),f.Qb(4,"ion-content"),f.sc(5,C,8,2,"div",0),f.sc(6,R,2,1,"div",0),f.Pb()),2&t&&(f.yb(5),f.fc("ngIf",!n.firstLoad),f.yb(1),f.fc("ngIf",n.firstLoad))},directives:[a.x,a.db,a.bb,a.r,r.k,a.J,a.K,a.i,a.E,r.j,a.F,a.D,a.B,a.k,a.l,a.ab,a.z,a.Y,a.w,a.M,a.q,a.y,a.j,a.U,a.e,a.S],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),I)}],A=((D=function n(){t(this,n)}).\u0275mod=f.Jb({type:D}),D.\u0275inj=f.Ib({factory:function(t){return new(t||D)},imports:[[s.j.forChild(Y)],s.j]}),D),F=((j=function n(){t(this,n)}).\u0275mod=f.Jb({type:j}),j.\u0275inj=f.Ib({factory:function(t){return new(t||j)},imports:[[r.b,c.a,a.eb,A,d.b]]}),j)}}])}();