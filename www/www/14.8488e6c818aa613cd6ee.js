(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6/gD":function(t,i,n){"use strict";n.d(i,"a",(function(){return u}));var e=n("mrSG"),o=n("gcOT"),r=n("8xVP"),a=n("fXoL"),c=n("G/jy"),s=o.c.Camera,u=function(){function t(t){this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(i,n){var e=new FileReader;e.onerror=n,e.onload=function(){i(e.result)},e.readAsDataURL(t)}))},this.serviceImage=new r.a("Image",t)}return t.prototype.init=function(t,i,n){void 0===i&&(i=!0),void 0===n&&(n="assets/images/pngwing.png"),this.url=null!=t?t:"/images/",this.thumb=null!=i&&i,this.path=n,this.photo=new l(n)},t.prototype.setImage=function(t){this.image=t,this.photo.image=t},t.prototype.addNewToGallery=function(){return Object(e.b)(this,void 0,void 0,(function(){var t,i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,s.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=n.sent(),[4,this.readAsBase64(t)];case 2:return i=n.sent(),this.photos.unshift(new l(null,t.webPath,i,this.url,this.thumb)),[2]}}))}))},t.prototype.addOneNewToGallery=function(){return Object(e.b)(this,void 0,void 0,(function(){var t,i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,s.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=n.sent(),[4,this.readAsBase64(t)];case 2:return i=n.sent(),this.photo=new l(t.webPath,i,i,this.url,this.thumb,this.image),[2]}}))}))},t.prototype.isLoadPthoto=function(){return!!this.photo.data},t.prototype.readAsBase64=function(t){return Object(e.b)(this,void 0,void 0,(function(){var i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,fetch(t.webPath)];case 1:return[4,n.sent().blob()];case 2:return i=n.sent(),[4,this.convertBlobToBase64(i)];case 3:return[2,n.sent()]}}))}))},t.prototype.uploadImage=function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)},t.\u0275fac=function(i){return new(i||t)(a.Ub(c.a))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),l=function(){function t(t,i,n,e,o,r){void 0===t&&(t="assets/images/pngwing.png"),void 0===i&&(i=null),void 0===n&&(n=""),void 0===e&&(e=""),void 0===o&&(o=!1),void 0===r&&(r=null),this.id=r?r.id:"",this.webviewPath=i,this.filepath=t,this.data=n,this.url=e,this.thumb=o,this.image=r}return t.prototype.getPath=function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath},t}()},Jr79:function(t,i,n){"use strict";n.r(i),n.d(i,"PublicationsPageModule",(function(){return D}));var e=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),s=n("GSQ0"),u=n("8xVP"),l=n("6g0+"),b=n("CimB"),d=n("fXoL"),p=n("rLe3"),h=n("G/jy"),f=n("2Rin"),g=n("y/q6"),m=n("EbHZ"),v=n("vuFD"),P=n("zYHx"),y=n("WBL6");function w(t,i){1&t&&(d.Qb(0,"ion-list-header",7),d.Qb(1,"ion-label"),d.vc(2,"Sin registros"),d.Pb(),d.Pb())}function k(t,i){if(1&t){var n=d.Rb();d.Qb(0,"ion-button",29),d.Yb("click",(function(){d.oc(n);var t=d.ac().$implicit;return d.ac(2).openMenuPublication(t)})),d.Mb(1,"ion-icon",30),d.Pb()}}function x(t,i){if(1&t){var n=d.Rb();d.Qb(0,"div",31),d.Yb("click",(function(){d.oc(n);var t=d.ac().$implicit;return d.ac(2).showPublication(t,"comments")})),d.Mb(1,"img",32),d.Pb()}if(2&t){var e=d.ac().$implicit;d.yb(1),d.gc("src",e.image.urlComplete,d.pc)}}function Q(t,i){1&t&&d.Mb(0,"ion-icon",33)}function M(t,i){1&t&&d.Mb(0,"ion-spinner",34)}function O(t,i){if(1&t){var n=d.Rb();d.Qb(0,"ion-item"),d.Qb(1,"ion-card",8),d.Qb(2,"ion-card-content"),d.uc(3,k,2,0,"ion-button",9),d.Qb(4,"div",10),d.Qb(5,"ion-thumbnail",11),d.Qb(6,"ion-img",12),d.Yb("click",(function(){d.oc(n);var t=i.$implicit;return d.ac(2).showPhotoUser(t.user.photo)})),d.Pb(),d.Pb(),d.Qb(7,"div",13),d.Qb(8,"div",14),d.vc(9),d.Pb(),d.Qb(10,"div",15),d.vc(11),d.Pb(),d.Pb(),d.Pb(),d.Qb(12,"div",16),d.Qb(13,"ion-text",17),d.vc(14),d.Pb(),d.Pb(),d.uc(15,x,2,1,"div",18),d.Qb(16,"ion-grid"),d.Qb(17,"ion-row"),d.Qb(18,"ion-col",19),d.Qb(19,"ion-text",17),d.Mb(20,"ion-icon",20),d.vc(21),d.Pb(),d.Pb(),d.Qb(22,"ion-col",21),d.Yb("click",(function(){d.oc(n);var t=i.$implicit;return d.ac(2).showPublication(t,"comments")})),d.Qb(23,"ion-text"),d.Mb(24,"ion-icon",22),d.vc(25),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Mb(26,"div",23),d.Qb(27,"div"),d.Qb(28,"ion-buttons",24),d.Qb(29,"ion-button",25),d.Yb("click",(function(){d.oc(n);var t=i.$implicit;return d.ac(2).like(t)})),d.uc(30,Q,1,0,"ion-icon",26),d.uc(31,M,1,0,"ion-spinner",27),d.Pb(),d.Qb(32,"ion-button",28),d.Yb("click",(function(){d.oc(n);var t=i.$implicit;return d.ac(2).showPublication(t,"comments")})),d.Mb(33,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()}if(2&t){var e=i.$implicit,o=d.ac(2);d.yb(3),d.gc("ngIf",o.authUser.user.id==e.user_id),d.yb(3),d.gc("src",e.user.photo?e.user.photo.urlCompleteThumb:o.pathImages.images.profile_user),d.yb(1),d.ic("routerLink","/users/",e.user.id,"/profile"),d.yb(2),d.yc(" ",e.user.last_name," ",e.user.first_name," "),d.yb(2),d.xc(" ",o.util.getFormarHumans(e.created_at)," "),d.yb(3),d.xc(" ",e.text," "),d.yb(1),d.gc("ngIf",e.image_id),d.yb(3),d.ic("routerLink","/publication/",e.id,"/likes"),d.yb(3),d.xc(" ",e.likes_count," "),d.yb(4),d.xc(" ",e.comments_count," "),d.yb(4),d.gc("color",e.liked?"danger":"primary")("disabled",!!e.processLike),d.yb(1),d.gc("ngIf",!e.processLike),d.yb(1),d.gc("ngIf",e.processLike)}}function L(t,i){if(1&t){var n=d.Rb();d.Qb(0,"div"),d.Qb(1,"ion-refresher",3),d.Yb("ionRefresh",(function(t){return d.oc(n),d.ac().init(t)})),d.Mb(2,"ion-refresher-content"),d.Pb(),d.Qb(3,"ion-button",4),d.Yb("click",(function(){return d.oc(n),d.ac().openModal()})),d.vc(4,"Nueva Publicaci\xf3n"),d.Pb(),d.Qb(5,"ion-list"),d.uc(6,w,3,0,"ion-list-header",5),d.uc(7,O,34,15,"ion-item",6),d.Pb(),d.Pb()}if(2&t){var e=d.ac();d.yb(6),d.gc("ngIf",0==e.publications.length),d.yb(1),d.gc("ngForOf",e.publications)}}function _(t,i){1&t&&(d.Qb(0,"ion-card"),d.Qb(1,"ion-card-content"),d.Qb(2,"div",10),d.Qb(3,"ion-avatar",11),d.Mb(4,"ion-skeleton-text",35),d.Pb(),d.Qb(5,"div",36),d.Qb(6,"div",14),d.Mb(7,"ion-skeleton-text",37),d.Pb(),d.Qb(8,"div",15),d.Mb(9,"ion-skeleton-text",38),d.Pb(),d.Pb(),d.Pb(),d.Qb(10,"div",16),d.Qb(11,"ion-text",17),d.Mb(12,"ion-skeleton-text",39),d.Mb(13,"ion-skeleton-text",40),d.Pb(),d.Pb(),d.Qb(14,"div",41),d.Qb(15,"ion-thumbnail",42),d.Mb(16,"ion-skeleton-text",43),d.Pb(),d.Pb(),d.Qb(17,"ion-grid"),d.Qb(18,"ion-row"),d.Qb(19,"ion-col",44),d.Qb(20,"ion-text",17),d.Mb(21,"ion-icon",33),d.Pb(),d.Pb(),d.Qb(22,"ion-col",45),d.Mb(23,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Mb(24,"div",23),d.Qb(25,"div"),d.Qb(26,"ion-buttons",24),d.Qb(27,"ion-button",46),d.Mb(28,"ion-icon",33),d.Pb(),d.Qb(29,"ion-button",46),d.Mb(30,"ion-icon",22),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb())}function j(t,i){if(1&t&&(d.Qb(0,"div"),d.uc(1,_,31,0,"ion-card",6),d.Pb()),2&t){var n=d.ac();d.yb(1),d.gc("ngForOf",n.listSkeleton)}}var C=[{path:"",component:function(){function t(t,i,n,e,o,r,a,c,s,l){this.modalController=t,this.utilArray=i,this.request=n,this.util=e,this.authUser=o,this.navCtrl=r,this.transferData=a,this.dialog=c,this.pathImages=s,this.reloadGlobal=l,this.publications=[],this.firstLoad=!0,this.listSkeleton=new Array(8),this.processLike=!1,this.publcationModel=new u.a("Publication",n)}return t.prototype.ngOnInit=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,i=this;return Object(c.d)(this,(function(n){switch(n.label){case 0:return t=this,[4,this.authUser.getUser()];case 1:return t.user=n.sent(),this.reloadGlobal.data$.subscribe((function(t){console.log("global reload publication"),t instanceof Object&&"publication_refresh"==t.key&&null!=t.value?(console.log("ver"),i.utilArray.listUpdate(i.publications,t.value.id,t.value)):console.log("no pub")})),this.init(),[2]}}))}))},t.prototype.init=function(t,i){return void 0===t&&(t=null),void 0===i&&(i=!1),Object(c.b)(this,void 0,void 0,(function(){var n,e=this;return Object(c.d)(this,(function(o){return n={},i&&this.dataPaginate&&(n={page:this.dataPaginate.current_page+1}),this.publcationModel.api_function("list",n).subscribe((function(n){var o,r;if(console.log(n),"success"==n.status)if(e.dataPaginate=n.data,i)try{for(var a=Object(c.h)(n.data.data),s=a.next();!s.done;s=a.next())e.publications.push(s.value)}catch(u){o={error:u}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}else e.publications=n.data.data;t&&t.target.complete(),e.firstLoad=!1}),(function(i){console.log(i),t&&t.target.complete(),e.firstLoad=!1})),[2]}))}))},t.prototype.loadData=function(t){if(this.dataPaginate&&this.dataPaginate.last_page==this.dataPaginate.current_page)return t.target.complete(),t.target.disabled=!0,void(this.infiniteScroll.disabled=!this.infiniteScroll.disabled);this.init(t,!0)},t.prototype.openModal=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,i=this;return Object(c.d)(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:s.a,componentProps:{}})];case 1:return(t=n.sent()).onDidDismiss().then((function(t){console.log("crate publication"),t.data&&t.data.publication&&i.utilArray.listAddFirst(i.publications,t.data.publication)})),[4,t.present()];case 2:return[2,n.sent()]}}))}))},t.prototype.showPhotoUser=function(t){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.d)(this,(function(i){switch(i.label){case 0:return console.log("show photo ",t),[4,this.modalController.create({component:l.c,componentProps:{src:t?t.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0})];case 1:return[4,i.sent().present()];case 2:return[2,i.sent()]}}))}))},t.prototype.like=function(t){return Object(c.b)(this,void 0,void 0,(function(){return Object(c.d)(this,(function(i){return t.processLike=!0,t.liked?this.publcationModel.api_functionModel(t.id,"removeLike",{user_id:this.user.id}).subscribe((function(i){"success"==i.status&&(t.liked=!t.liked,t.likes_count-=1),t.processLike=!1}),(function(i){console.error(i),t.processLike=!1})):this.publcationModel.api_functionModel(t.id,"addLike",{user_id:this.user.id}).subscribe((function(i){"success"==i.status&&(t.liked=!t.liked,t.likes_count+=1),t.processLike=!1}),(function(i){console.error(i),t.processLike=!1})),[2]}))}))},t.prototype.showPublication=function(t,i,n){return void 0===i&&(i="comments"),void 0===n&&(n=null),Object(c.b)(this,void 0,void 0,(function(){var n,e=this;return Object(c.d)(this,(function(o){switch(o.label){case 0:return console.log("show publication",t.id),[4,this.modalController.create({component:b.a,componentProps:{id:t.id,segment:i}})];case 1:return(n=o.sent()).onDidDismiss().then((function(t){if(console.log("update publication"),t.data&&t.data.publication)var i=t.data.publication;e.utilArray.listUpdate(e.publications,i.id,i)})),[4,n.present()];case 2:return[2,o.sent()]}}))}))},t.prototype.openMenuPublication=function(t){var i=this;this.dialog.actionSheetEditDelete((function(){i.editPublication(t)}),(function(){i.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",(function(){i.publcationModel.api_delete(t.id).subscribe((function(n){(n.status="success")&&(i.utilArray.listDelete(i.publications,t.id),i.dialog.showToast("Publicacion Eliminada",null,"success"))}))}))}))},t.prototype.editPublication=function(t){return Object(c.b)(this,void 0,void 0,(function(){var i,n=this;return Object(c.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:s.a,componentProps:{id:t.id}})];case 1:return(i=e.sent()).onDidDismiss().then((function(t){if(console.log("update publicacion"),t.data&&t.data.publication){var i=t.data.publication;n.utilArray.listUpdate(n.publications,i.id,i)}})),[4,i.present()];case 2:return[2,e.sent()]}}))}))},t.\u0275fac=function(i){return new(i||t)(d.Lb(r.nb),d.Lb(p.a),d.Lb(h.a),d.Lb(f.a),d.Lb(g.a),d.Lb(r.ob),d.Lb(m.a),d.Lb(v.a),d.Lb(P.a),d.Lb(y.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-publications"]],viewQuery:function(t,i){var n;1&t&&d.zc(r.A,!0),2&t&&d.kc(n=d.Zb())&&(i.infiniteScroll=n.first)},decls:9,vars:2,consts:[[4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["slot","fixed",3,"ionRefresh"],["expand","block","fill","outline",3,"click"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],["routerDirection","forward",1,"user",3,"routerLink"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",3,"click",4,"ngIf"],["routerDirection","forward",1,"ion-text-left",3,"routerLink"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center",3,"click"],[3,"src"],["name","heart-outline"],["name","lines"],["animated",""],[1,"user"],["animated","",2,"width","150px","height","20px"],["animated","",2,"width","70px"],["animated","",2,"width","100%","height","20px"],["animated","",2,"width","90%","height","20px"],[1,"publication-image","ion-text-center"],[2,"height","200px","width","100%"],["animated","",2,"width","100%","height","100%"],[1,"ion-text-left"],[1,"ion-text-right"],["expand","full",2,"width","50%"]],template:function(t,i){1&t&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-title"),d.vc(3,"publicaciones"),d.Pb(),d.Pb(),d.Pb(),d.Qb(4,"ion-content"),d.uc(5,L,8,2,"div",0),d.uc(6,j,2,1,"div",0),d.Qb(7,"ion-infinite-scroll",1),d.Yb("ionInfinite",(function(t){return i.loadData(t)})),d.Mb(8,"ion-infinite-scroll-content",2),d.Pb(),d.Pb()),2&t&&(d.yb(5),d.gc("ngIf",!i.firstLoad),d.yb(1),d.gc("ngIf",i.firstLoad))},directives:[r.x,r.jb,r.hb,r.r,e.l,r.A,r.B,r.O,r.P,r.i,r.H,e.k,r.I,r.G,r.D,r.k,r.l,r.gb,r.z,r.tb,a.h,r.eb,r.w,r.S,r.q,r.y,r.j,r.ab,r.e,r.Y],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),t}()}],I=function(){function t(){}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(i){return new(i||t)},imports:[[a.j.forChild(C)],a.j]}),t}(),D=function(){function t(){}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(i){return new(i||t)},imports:[[e.b,o.a,r.kb,I,l.b]]}),t}()}}]);