(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"6/gD":function(i,t,e){"use strict";e.d(t,"a",(function(){return l}));var o=e("mrSG"),n=e("gcOT"),s=e("8xVP"),c=e("fXoL"),a=e("G/jy");const{Camera:r}=n.c;let l=(()=>{class i{constructor(i){this.photos=[],this.convertBlobToBase64=i=>new Promise((t,e)=>{const o=new FileReader;o.onerror=e,o.onload=()=>{t(o.result)},o.readAsDataURL(i)}),this.serviceImage=new s.a("Image",i)}init(i,t=!0,e="assets/images/pngwing.png"){this.url=null!=i?i:"/images/",this.thumb=null!=t&&t,this.path=e,this.photo=new u(e)}setImage(i){this.image=i,this.photo.image=i}addNewToGallery(){return Object(o.b)(this,void 0,void 0,(function*(){const i=yield r.getPhoto({resultType:n.a.Uri,source:n.b.Camera,quality:100}),t=yield this.readAsBase64(i);this.photos.unshift(new u(null,i.webPath,t,this.url,this.thumb))}))}addOneNewToGallery(){return Object(o.b)(this,void 0,void 0,(function*(){const i=yield r.getPhoto({resultType:n.a.Uri,source:n.b.Camera,quality:100}),t=yield this.readAsBase64(i);this.photo=new u(i.webPath,t,t,this.url,this.thumb,this.image)}))}isLoadPthoto(){return!!this.photo.data}readAsBase64(i){return Object(o.b)(this,void 0,void 0,(function*(){const t=yield fetch(i.webPath),e=yield t.blob();return yield this.convertBlobToBase64(e)}))}uploadImage(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}return i.\u0275fac=function(t){return new(t||i)(c.Ub(a.a))},i.\u0275prov=c.Hb({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();class u{constructor(i="assets/images/pngwing.png",t=null,e="",o="",n=!1,s=null){this.id=s?s.id:"",this.webviewPath=t,this.filepath=i,this.data=e,this.url=o,this.thumb=n,this.image=s}getPath(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}},j1ZV:function(i,t,e){"use strict";e.d(t,"a",(function(){return l}));var o=e("ofXK"),n=e("TEn/"),s=e("tyNb"),c=e("6g0+"),a=e("3Pt+"),r=e("fXoL");let l=(()=>{class i{}return i.\u0275mod=r.Jb({type:i}),i.\u0275inj=r.Ib({factory:function(t){return new(t||i)},imports:[[o.b,n.kb.forRoot(),a.a,s.j,c.b]]}),i})()},zYH4:function(i,t,e){"use strict";e.r(t),e.d(t,"ProfilePageModule",(function(){return j}));var o=e("ofXK"),n=e("3Pt+"),s=e("TEn/"),c=e("tyNb"),a=e("mrSG"),r=e("8xVP"),l=e("fXoL"),u=e("G/jy"),b=e("ChyW"),d=e("vuFD"),p=e("6g0+"),h=e("CimB"),g=e("GSQ0"),m=e("y/q6"),f=e("2Rin"),P=e("rLe3");function y(i,t){if(1&i){const i=l.Rb();l.Qb(0,"ion-button",22),l.Yb("click",(function(){l.oc(i);const t=l.ac(2);return t.openMenuPublication(t.publication)})),l.Mb(1,"ion-icon",23),l.Pb()}}function v(i,t){if(1&i&&(l.Qb(0,"div",24),l.Mb(1,"img",25),l.Pb()),2&i){const i=l.ac(2);l.yb(1),l.gc("src",i.publication.image.urlComplete,l.pc)}}function k(i,t){1&i&&l.Mb(0,"ion-icon",26)}function w(i,t){1&i&&l.Mb(0,"ion-spinner",27)}function M(i,t){if(1&i){const i=l.Rb();l.Qb(0,"ion-card",1),l.Qb(1,"ion-card-content"),l.uc(2,y,2,0,"ion-button",2),l.Qb(3,"div",3),l.Qb(4,"ion-thumbnail",4),l.Qb(5,"ion-img",5),l.Yb("click",(function(){l.oc(i);const t=l.ac();return t.showPhotoUser(t.publication.user.photo)})),l.Pb(),l.Pb(),l.Qb(6,"div",6),l.Qb(7,"div",7),l.vc(8),l.Pb(),l.Qb(9,"div",8),l.vc(10),l.Pb(),l.Pb(),l.Pb(),l.Qb(11,"div",9),l.Qb(12,"ion-text",10),l.vc(13),l.Pb(),l.Pb(),l.uc(14,v,2,1,"div",11),l.Qb(15,"ion-grid"),l.Qb(16,"ion-row"),l.Qb(17,"ion-col",12),l.Yb("click",(function(){l.oc(i);const t=l.ac();return t.showPublication(t.publication,"likes")})),l.Qb(18,"ion-text",10),l.Mb(19,"ion-icon",13),l.vc(20),l.Pb(),l.Pb(),l.Qb(21,"ion-col",14),l.Yb("click",(function(){l.oc(i);const t=l.ac();return t.showPublication(t.publication,"comments")})),l.Qb(22,"ion-text"),l.Mb(23,"ion-icon",15),l.vc(24),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Mb(25,"div",16),l.Qb(26,"div"),l.Qb(27,"ion-buttons",17),l.Qb(28,"ion-button",18),l.Yb("click",(function(){l.oc(i);const t=l.ac();return t.like(t.publication)})),l.uc(29,k,1,0,"ion-icon",19),l.uc(30,w,1,0,"ion-spinner",20),l.Pb(),l.Qb(31,"ion-button",21),l.Yb("click",(function(){l.oc(i);const t=l.ac();return t.showPublication(t.publication,"comments")})),l.Mb(32,"ion-icon",15),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb()}if(2&i){const i=l.ac();l.yb(2),l.gc("ngIf",i.authUser.user.id==i.publication.user_id),l.yb(3),l.gc("src",i.utilPhoto.getPhotoUser(i.publication.user)),l.yb(3),l.yc(" ",i.publication.user.last_name," ",i.publication.user.first_name," "),l.yb(2),l.xc(" ",i.util.getFormarHumans(i.publication.created_at)," "),l.yb(3),l.xc(" ",i.publication.text," "),l.yb(1),l.gc("ngIf",i.publication.image_id),l.yb(6),l.xc(" ",i.publication.likes_count," "),l.yb(4),l.xc(" ",i.publication.comments_count," "),l.yb(4),l.gc("color",i.publication.liked?"danger":"primary")("disabled",!!i.publication.processLike),l.yb(1),l.gc("ngIf",!i.publication.processLike),l.yb(1),l.gc("ngIf",i.publication.processLike)}}let x=(()=>{class i{constructor(i,t,e,o,n,s,c){this.authUser=i,this.util=t,this.modalController=e,this.request=o,this.utilArray=n,this.dialog=s,this.utilPhoto=c,this.publcationModel=new r.a("Publication",o),this.user=i.user}ngOnInit(){}showPhotoUser(i){return Object(a.b)(this,void 0,void 0,(function*(){console.log("show photo ",i);const t=yield this.modalController.create({component:p.c,componentProps:{src:i?i.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});return yield t.present()}))}like(i){return Object(a.b)(this,void 0,void 0,(function*(){i.processLike=!0,i.liked?this.publcationModel.api_functionModel(i.id,"removeLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count-=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1}):this.publcationModel.api_functionModel(i.id,"addLike",{user_id:this.user.id}).subscribe(t=>{"success"==t.status&&(i.liked=!i.liked,i.likes_count+=1),i.processLike=!1},t=>{console.error(t),i.processLike=!1})}))}showPublication(i,t="comments",e=null){return Object(a.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:h.a,componentProps:{id:i.id,segment:t}});return e.onDidDismiss().then(i=>{console.log("update publication");const t=i.data.publication;this.utilArray.listUpdate(this.user.publications,t.id,t)}),yield e.present()}))}openMenuPublication(i){this.dialog.actionSheetEditDelete(()=>{this.editPublication(i)},()=>{this.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",()=>{this.publcationModel.api_delete(i.id).subscribe(t=>{(t.status="success")&&(this.utilArray.listDelete(this.user.publications,i.id),this.dialog.showToast("Publicacion Eliminada",null,"success"))})})})}editPublication(i){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:g.a,componentProps:{id:i.id}});return t.onDidDismiss().then(i=>{if(console.log("update publicacion"),i.data&&i.data.publication){const t=i.data.publication;this.utilArray.listUpdate(this.user.publications,t.id,t)}}),yield t.present()}))}}return i.\u0275fac=function(t){return new(t||i)(l.Lb(m.a),l.Lb(f.a),l.Lb(s.nb),l.Lb(u.a),l.Lb(P.a),l.Lb(d.a),l.Lb(b.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-publication"]],inputs:{publication:"publication"},decls:1,vars:1,consts:[["style","width: 100%;",4,"ngIf"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"ion-text-left",3,"click"],["name","heart-outline","color","danger"],[1,"ion-text-right",3,"click"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary",2,"width","50%",3,"click"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"publication-image","ion-text-center"],[3,"src"],["name","heart-outline"],["name","lines"]],template:function(i,t){1&i&&l.uc(0,M,33,13,"ion-card",0),2&i&&l.gc("ngIf",t.publication)},directives:[o.l,s.k,s.l,s.gb,s.z,s.eb,s.w,s.S,s.q,s.y,s.j,s.i,s.ab],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),i})();function Q(i,t){if(1&i&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-content"),l.Mb(2,"ion-img",2),l.Pb(),l.Qb(3,"ion-card-header"),l.Qb(4,"ion-card-title"),l.vc(5),l.Pb(),l.Pb(),l.Pb()),2&i){const i=l.ac();l.yb(2),l.gc("src",i.utilPhoto.getPhotoUser(i.user)),l.yb(3),l.xc(" ",i.user.completeName," ")}}function L(i,t){1&i&&l.Mb(0,"app-publication",4),2&i&&l.gc("publication",t.$implicit)}function _(i,t){if(1&i&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-header"),l.Qb(2,"ion-card-title"),l.vc(3,"Publicaciones"),l.Pb(),l.Pb(),l.Qb(4,"ion-card-content"),l.uc(5,L,1,1,"app-publication",3),l.Pb(),l.Pb()),2&i){const i=l.ac();l.yb(5),l.gc("ngForOf",i.user.publications)}}const C=[{path:"",component:(()=>{class i{constructor(i,t,e,o){this.route=i,this.request=t,this.utilPhoto=e,this.dialogService=o,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.userModel=new r.a("User",t)}ngOnInit(){this.init()}init(i=null){return Object(a.b)(this,void 0,void 0,(function*(){this.firstLoading&&(yield this.dialogService.loadingProgres(),this.firstLoading=!1),this.userModel.api_functionModel(this.id,"profilePage").subscribe(t=>{"success"==t.status&&(this.user=t.data),i&&i.target.complete(),console.log(t),this.dialogService.dimissLoaging()},t=>{i&&i.target.complete(),console.log(t),this.dialogService.dimissLoaging()})}))}}return i.\u0275fac=function(t){return new(t||i)(l.Lb(c.a),l.Lb(u.a),l.Lb(b.a),l.Lb(d.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-profile"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],[3,"src"],[3,"publication",4,"ngFor","ngForOf"],[3,"publication"]],template:function(i,t){1&i&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.vc(3,"Perfil de usuario"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button"),l.Pb(),l.Pb(),l.Pb(),l.Qb(6,"ion-content"),l.uc(7,Q,6,2,"ion-card",1),l.uc(8,_,6,1,"ion-card",1),l.Pb()),2&i&&(l.yb(7),l.gc("ngIf",t.user),l.yb(1),l.gc("ngIf",t.user&&t.user.publications.length>0))},directives:[s.x,s.jb,s.hb,s.j,s.f,s.g,s.r,o.l,s.k,s.l,s.z,s.m,s.o,o.k,x],styles:[".img_profile[_ngcontent-%COMP%]{width:300px;height:300px}.name[_ngcontent-%COMP%]{font-size:large}"]}),i})()}];let O=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(t){return new(t||i)},imports:[[c.j.forChild(C)],c.j]}),i})();var I=e("j1ZV");let j=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(t){return new(t||i)},imports:[[o.b,n.a,s.kb,O,I.a]]}),i})()}}]);