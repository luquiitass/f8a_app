(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"6/gD":function(t,i,n){"use strict";n.d(i,"a",(function(){return u}));var e=n("mrSG"),o=n("gcOT"),c=n("8xVP"),r=n("fXoL"),s=n("G/jy"),a=o.c.Camera,u=function(){function t(t){this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(i,n){var e=new FileReader;e.onerror=n,e.onload=function(){i(e.result)},e.readAsDataURL(t)}))},this.serviceImage=new c.a("Image",t)}return t.prototype.init=function(t,i,n){void 0===i&&(i=!0),void 0===n&&(n="assets/images/pngwing.png"),this.url=null!=t?t:"/images/",this.thumb=null!=i&&i,this.path=n,this.photo=new l(n)},t.prototype.setImage=function(t){this.image=t,this.photo.image=t},t.prototype.addNewToGallery=function(){return Object(e.b)(this,void 0,void 0,(function(){var t,i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,a.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=n.sent(),[4,this.readAsBase64(t)];case 2:return i=n.sent(),this.photos.unshift(new l(null,t.webPath,i,this.url,this.thumb)),[2]}}))}))},t.prototype.addOneNewToGallery=function(){return Object(e.b)(this,void 0,void 0,(function(){var t,i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,a.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=n.sent(),[4,this.readAsBase64(t)];case 2:return i=n.sent(),this.photo=new l(t.webPath,i,i,this.url,this.thumb,this.image),[2]}}))}))},t.prototype.isLoadPthoto=function(){return!!this.photo.data},t.prototype.readAsBase64=function(t){return Object(e.b)(this,void 0,void 0,(function(){var i;return Object(e.d)(this,(function(n){switch(n.label){case 0:return[4,fetch(t.webPath)];case 1:return[4,n.sent().blob()];case 2:return i=n.sent(),[4,this.convertBlobToBase64(i)];case 3:return[2,n.sent()]}}))}))},t.prototype.uploadImage=function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)},t.\u0275fac=function(i){return new(i||t)(r.Ub(s.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),l=function(){function t(t,i,n,e,o,c){void 0===t&&(t="assets/images/pngwing.png"),void 0===i&&(i=null),void 0===n&&(n=""),void 0===e&&(e=""),void 0===o&&(o=!1),void 0===c&&(c=null),this.id=c?c.id:"",this.webviewPath=i,this.filepath=t,this.data=n,this.url=e,this.thumb=o,this.image=c}return t.prototype.getPath=function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath},t}()},j1ZV:function(t,i,n){"use strict";n.d(i,"a",(function(){return u}));var e=n("ofXK"),o=n("TEn/"),c=n("tyNb"),r=n("6g0+"),s=n("3Pt+"),a=n("fXoL"),u=function(){function t(){}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(i){return new(i||t)},imports:[[e.b,o.kb.forRoot(),s.a,c.j,r.b]]}),t}()},zYH4:function(t,i,n){"use strict";n.r(i),n.d(i,"ProfilePageModule",(function(){return I}));var e=n("ofXK"),o=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),s=n("mrSG"),a=n("8xVP"),u=n("fXoL"),l=n("G/jy"),b=n("ChyW"),p=n("vuFD"),d=n("6g0+"),h=n("CimB"),f=n("GSQ0"),g=n("y/q6"),m=n("2Rin"),v=n("rLe3");function P(t,i){if(1&t){var n=u.Rb();u.Qb(0,"ion-button",22),u.Yb("click",(function(){u.oc(n);var t=u.ac(2);return t.openMenuPublication(t.publication)})),u.Mb(1,"ion-icon",23),u.Pb()}}function y(t,i){if(1&t&&(u.Qb(0,"div",24),u.Mb(1,"img",25),u.Pb()),2&t){var n=u.ac(2);u.yb(1),u.gc("src",n.publication.image.urlComplete,u.pc)}}function w(t,i){1&t&&u.Mb(0,"ion-icon",26)}function k(t,i){1&t&&u.Mb(0,"ion-spinner",27)}function M(t,i){if(1&t){var n=u.Rb();u.Qb(0,"ion-card",1),u.Qb(1,"ion-card-content"),u.uc(2,P,2,0,"ion-button",2),u.Qb(3,"div",3),u.Qb(4,"ion-thumbnail",4),u.Qb(5,"ion-img",5),u.Yb("click",(function(){u.oc(n);var t=u.ac();return t.showPhotoUser(t.publication.user.photo)})),u.Pb(),u.Pb(),u.Qb(6,"div",6),u.Qb(7,"div",7),u.vc(8),u.Pb(),u.Qb(9,"div",8),u.vc(10),u.Pb(),u.Pb(),u.Pb(),u.Qb(11,"div",9),u.Qb(12,"ion-text",10),u.vc(13),u.Pb(),u.Pb(),u.uc(14,y,2,1,"div",11),u.Qb(15,"ion-grid"),u.Qb(16,"ion-row"),u.Qb(17,"ion-col",12),u.Yb("click",(function(){u.oc(n);var t=u.ac();return t.showPublication(t.publication,"likes")})),u.Qb(18,"ion-text",10),u.Mb(19,"ion-icon",13),u.vc(20),u.Pb(),u.Pb(),u.Qb(21,"ion-col",14),u.Yb("click",(function(){u.oc(n);var t=u.ac();return t.showPublication(t.publication,"comments")})),u.Qb(22,"ion-text"),u.Mb(23,"ion-icon",15),u.vc(24),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Mb(25,"div",16),u.Qb(26,"div"),u.Qb(27,"ion-buttons",17),u.Qb(28,"ion-button",18),u.Yb("click",(function(){u.oc(n);var t=u.ac();return t.like(t.publication)})),u.uc(29,w,1,0,"ion-icon",19),u.uc(30,k,1,0,"ion-spinner",20),u.Pb(),u.Qb(31,"ion-button",21),u.Yb("click",(function(){u.oc(n);var t=u.ac();return t.showPublication(t.publication,"comments")})),u.Mb(32,"ion-icon",15),u.Pb(),u.Pb(),u.Pb(),u.Pb(),u.Pb()}if(2&t){var e=u.ac();u.yb(2),u.gc("ngIf",e.authUser.user.id==e.publication.user_id),u.yb(3),u.gc("src",e.utilPhoto.getPhotoUser(e.publication.user)),u.yb(3),u.yc(" ",e.publication.user.last_name," ",e.publication.user.first_name," "),u.yb(2),u.xc(" ",e.util.getFormarHumans(e.publication.created_at)," "),u.yb(3),u.xc(" ",e.publication.text," "),u.yb(1),u.gc("ngIf",e.publication.image_id),u.yb(6),u.xc(" ",e.publication.likes_count," "),u.yb(4),u.xc(" ",e.publication.comments_count," "),u.yb(4),u.gc("color",e.publication.liked?"danger":"primary")("disabled",!!e.publication.processLike),u.yb(1),u.gc("ngIf",!e.publication.processLike),u.yb(1),u.gc("ngIf",e.publication.processLike)}}var x=function(){function t(t,i,n,e,o,c,r){this.authUser=t,this.util=i,this.modalController=n,this.request=e,this.utilArray=o,this.dialog=c,this.utilPhoto=r,this.publcationModel=new a.a("Publication",e),this.user=t.user}return t.prototype.ngOnInit=function(){},t.prototype.showPhotoUser=function(t){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(i){switch(i.label){case 0:return console.log("show photo ",t),[4,this.modalController.create({component:d.c,componentProps:{src:t?t.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0})];case 1:return[4,i.sent().present()];case 2:return[2,i.sent()]}}))}))},t.prototype.like=function(t){return Object(s.b)(this,void 0,void 0,(function(){return Object(s.d)(this,(function(i){return t.processLike=!0,t.liked?this.publcationModel.api_functionModel(t.id,"removeLike",{user_id:this.user.id}).subscribe((function(i){"success"==i.status&&(t.liked=!t.liked,t.likes_count-=1),t.processLike=!1}),(function(i){console.error(i),t.processLike=!1})):this.publcationModel.api_functionModel(t.id,"addLike",{user_id:this.user.id}).subscribe((function(i){"success"==i.status&&(t.liked=!t.liked,t.likes_count+=1),t.processLike=!1}),(function(i){console.error(i),t.processLike=!1})),[2]}))}))},t.prototype.showPublication=function(t,i,n){return void 0===i&&(i="comments"),void 0===n&&(n=null),Object(s.b)(this,void 0,void 0,(function(){var n,e=this;return Object(s.d)(this,(function(o){switch(o.label){case 0:return[4,this.modalController.create({component:h.a,componentProps:{id:t.id,segment:i}})];case 1:return(n=o.sent()).onDidDismiss().then((function(t){console.log("update publication");var i=t.data.publication;e.utilArray.listUpdate(e.user.publications,i.id,i)})),[4,n.present()];case 2:return[2,o.sent()]}}))}))},t.prototype.openMenuPublication=function(t){var i=this;this.dialog.actionSheetEditDelete((function(){i.editPublication(t)}),(function(){i.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",(function(){i.publcationModel.api_delete(t.id).subscribe((function(n){(n.status="success")&&(i.utilArray.listDelete(i.user.publications,t.id),i.dialog.showToast("Publicacion Eliminada",null,"success"))}))}))}))},t.prototype.editPublication=function(t){return Object(s.b)(this,void 0,void 0,(function(){var i,n=this;return Object(s.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:f.a,componentProps:{id:t.id}})];case 1:return(i=e.sent()).onDidDismiss().then((function(t){if(console.log("update publicacion"),t.data&&t.data.publication){var i=t.data.publication;n.utilArray.listUpdate(n.user.publications,i.id,i)}})),[4,i.present()];case 2:return[2,e.sent()]}}))}))},t.\u0275fac=function(i){return new(i||t)(u.Lb(g.a),u.Lb(m.a),u.Lb(c.nb),u.Lb(l.a),u.Lb(v.a),u.Lb(p.a),u.Lb(b.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-publication"]],inputs:{publication:"publication"},decls:1,vars:1,consts:[["style","width: 100%;",4,"ngIf"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"ion-text-left",3,"click"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center"],[3,"src"],["name","heart-outline"],["name","lines"]],template:function(t,i){1&t&&u.uc(0,M,33,13,"ion-card",0),2&t&&u.gc("ngIf",i.publication)},directives:[e.l,c.k,c.l,c.gb,c.z,c.eb,c.w,c.S,c.q,c.y,c.j,c.i,c.ab],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),t}();function O(t,i){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-content"),u.Mb(2,"ion-img",2),u.Pb(),u.Qb(3,"ion-card-header"),u.Qb(4,"ion-card-title"),u.vc(5),u.Pb(),u.Pb(),u.Pb()),2&t){var n=u.ac();u.yb(2),u.gc("src",n.utilPhoto.getPhotoUser(n.user)),u.yb(3),u.xc(" ",n.user.completeName," ")}}function Q(t,i){1&t&&u.Mb(0,"app-publication",4),2&t&&u.gc("publication",i.$implicit)}function L(t,i){if(1&t&&(u.Qb(0,"ion-card"),u.Qb(1,"ion-card-header"),u.Qb(2,"ion-card-title"),u.vc(3,"Publicaciones"),u.Pb(),u.Pb(),u.Qb(4,"ion-card-content"),u.uc(5,Q,1,1,"app-publication",3),u.Pb(),u.Pb()),2&t){var n=u.ac();u.yb(5),u.gc("ngForOf",n.user.publications)}}var _=[{path:"",component:function(){function t(t,i,n,e){this.route=t,this.request=i,this.utilPhoto=n,this.dialogService=e,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.userModel=new a.a("User",i)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(t){return void 0===t&&(t=null),Object(s.b)(this,void 0,void 0,(function(){var i=this;return Object(s.d)(this,(function(n){switch(n.label){case 0:return this.firstLoading?[4,this.dialogService.loadingProgres()]:[3,2];case 1:n.sent(),this.firstLoading=!1,n.label=2;case 2:return this.userModel.api_functionModel(this.id,"profilePage").subscribe((function(n){"success"==n.status&&(i.user=n.data),t&&t.target.complete(),console.log(n),i.dialogService.dimissLoaging()}),(function(n){t&&t.target.complete(),console.log(n),i.dialogService.dimissLoaging()})),[2]}}))}))},t.\u0275fac=function(i){return new(i||t)(u.Lb(r.a),u.Lb(l.a),u.Lb(b.a),u.Lb(p.a))},t.\u0275cmp=u.Fb({type:t,selectors:[["app-profile"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],[3,"src"],[3,"publication",4,"ngFor","ngForOf"],[3,"publication"]],template:function(t,i){1&t&&(u.Qb(0,"ion-header"),u.Qb(1,"ion-toolbar"),u.Qb(2,"ion-title"),u.vc(3,"Perfil de usuario"),u.Pb(),u.Qb(4,"ion-buttons",0),u.Mb(5,"ion-back-button"),u.Pb(),u.Pb(),u.Pb(),u.Qb(6,"ion-content"),u.uc(7,O,6,2,"ion-card",1),u.uc(8,L,6,1,"ion-card",1),u.Pb()),2&t&&(u.yb(7),u.gc("ngIf",i.user),u.yb(1),u.gc("ngIf",i.user&&i.user.publications.length>0))},directives:[c.x,c.jb,c.hb,c.j,c.f,c.g,c.r,e.l,c.k,c.l,c.z,c.m,c.o,e.k,x],styles:[".img_profile[_ngcontent-%COMP%]{width:300px;height:300px}.name[_ngcontent-%COMP%]{font-size:large}"]}),t}()}],C=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(i){return new(i||t)},imports:[[r.j.forChild(_)],r.j]}),t}(),j=n("j1ZV"),I=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(i){return new(i||t)},imports:[[e.b,o.a,c.kb,C,j.a]]}),t}()}}]);