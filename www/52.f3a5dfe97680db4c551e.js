(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"6/gD":function(t,i,e){"use strict";e.d(i,"a",(function(){return u}));var n=e("mrSG"),o=e("gcOT"),r=e("8xVP"),s=e("fXoL"),c=e("G/jy"),a=o.c.Camera,u=function(){function t(t){this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(i,e){var n=new FileReader;n.onerror=e,n.onload=function(){i(n.result)},n.readAsDataURL(t)}))},this.serviceImage=new r.a("Image",t)}return t.prototype.init=function(t,i,e){void 0===i&&(i=!0),void 0===e&&(e="assets/images/pngwing.png"),this.url=null!=t?t:"/images/",this.thumb=null!=i&&i,this.path=e,this.photo=new l(e)},t.prototype.setImage=function(t){this.image=t,this.photo.image=t},t.prototype.addNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,i;return Object(n.d)(this,(function(e){switch(e.label){case 0:return[4,a.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=e.sent(),[4,this.readAsBase64(t)];case 2:return i=e.sent(),this.photos.unshift(new l(null,t.webPath,i,this.url,this.thumb)),[2]}}))}))},t.prototype.addOneNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,i;return Object(n.d)(this,(function(e){switch(e.label){case 0:return[4,a.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=e.sent(),[4,this.readAsBase64(t)];case 2:return i=e.sent(),this.photo=new l(t.webPath,i,i,this.url,this.thumb,this.image),[2]}}))}))},t.prototype.isLoadPthoto=function(){return!!this.photo.data},t.prototype.readAsBase64=function(t){return Object(n.b)(this,void 0,void 0,(function(){var i;return Object(n.d)(this,(function(e){switch(e.label){case 0:return[4,fetch(t.webPath)];case 1:return[4,e.sent().blob()];case 2:return i=e.sent(),[4,this.convertBlobToBase64(i)];case 3:return[2,e.sent()]}}))}))},t.prototype.uploadImage=function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)},t.\u0275fac=function(i){return new(i||t)(s.Ub(c.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),l=function(){function t(t,i,e,n,o,r){void 0===t&&(t="assets/images/pngwing.png"),void 0===i&&(i=null),void 0===e&&(e=""),void 0===n&&(n=""),void 0===o&&(o=!1),void 0===r&&(r=null),this.id=r?r.id:"",this.webviewPath=i,this.filepath=t,this.data=e,this.url=n,this.thumb=o,this.image=r}return t.prototype.getPath=function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath},t}()},uwJ2:function(t,i,e){"use strict";e.r(i),e.d(i,"ListPageModule",(function(){return v}));var n=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),s=e("tyNb"),c=e("mrSG"),a=e("U6ZO"),u=e("8xVP"),l=e("fXoL"),h=e("G/jy"),b=e("vuFD");function p(t,i){1&t&&(l.Qb(0,"ion-list-header",8),l.Qb(1,"ion-label"),l.vc(2,"Sin registros"),l.Pb(),l.Pb())}function d(t,i){if(1&t){var e=l.Rb();l.Qb(0,"ion-item"),l.Qb(1,"ion-label"),l.Qb(2,"h3"),l.vc(3),l.Pb(),l.Pb(),l.Qb(4,"ion-buttons",9),l.Qb(5,"ion-button",3),l.Yb("click",(function(){l.oc(e);var t=i.$implicit;return l.ac().showEdit(t)})),l.Mb(6,"ion-icon",10),l.Pb(),l.Qb(7,"ion-button",3),l.Yb("click",(function(){l.oc(e);var t=i.$implicit;return l.ac().confirmDelete(t)})),l.Mb(8,"ion-icon",11),l.Pb(),l.Pb(),l.Pb()}if(2&t){var n=i.$implicit;l.yb(3),l.wc(n.name)}}var f=[{path:"",component:function(){function t(t,i,e,n){this.request=t,this.dialogService=i,this.modalController=e,this.dialog=n,this.positionService=new u.a("Position",t)}return t.prototype.ngOnInit=function(){this.positionService.api_all()},t.prototype.openModal=function(){return Object(c.b)(this,void 0,void 0,(function(){var t,i=this;return Object(c.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:a.a})];case 1:return(t=e.sent()).onDidDismiss().then((function(t){i.positionService.listAddLast(t.data.posicion)})),[4,t.present()];case 2:return[2,e.sent()]}}))}))},t.prototype.showEdit=function(t){return Object(c.b)(this,void 0,void 0,(function(){var i,e=this;return Object(c.d)(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:a.a,componentProps:{id:t.id}})];case 1:return(i=n.sent()).onDidDismiss().then((function(i){console.log(i),e.positionService.listUpdate(t.id,t)})),[4,i.present()];case 2:return[2,n.sent()]}}))}))},t.prototype.confirmDelete=function(t){var i=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este posicion",(function(e){i.delete(t)}))},t.prototype.delete=function(t){var i=this;this.positionService.api_delete(t.id).subscribe((function(e){console.log(e),"success"==e.status&&(i.dialog.showToast("Position Eliminado",null,"success"),i.positionService.listDelete(t.id))}))},t.\u0275fac=function(i){return new(i||t)(l.Lb(h.a),l.Lb(b.a),l.Lb(r.nb),l.Lb(b.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,i){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-buttons",0),l.Mb(3,"ion-back-button",1),l.Pb(),l.Qb(4,"ion-title"),l.vc(5,"Posiciones"),l.Pb(),l.Qb(6,"ion-buttons",2),l.Qb(7,"ion-button",3),l.Yb("click",(function(){return i.openModal()})),l.Mb(8,"ion-icon",4),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(9,"ion-content"),l.Qb(10,"ion-refresher",5),l.Yb("ionRefresh",(function(t){return i.positionService.api_all(t)})),l.Mb(11,"ion-refresher-content"),l.Pb(),l.Qb(12,"ion-list"),l.uc(13,p,3,0,"ion-list-header",6),l.uc(14,d,9,1,"ion-item",7),l.Pb(),l.Pb()),2&t&&(l.yb(13),l.gc("ngIf",0==i.positionService.list.length),l.yb(1),l.gc("ngForOf",i.positionService.list))},directives:[r.x,r.jb,r.j,r.f,r.g,r.hb,r.i,r.y,r.r,r.O,r.P,r.H,n.l,n.k,r.I,r.G,r.D],styles:[""]}),t}()}],m=function(){function t(){}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(i){return new(i||t)},imports:[[s.j.forChild(f)],s.j]}),t}(),v=function(){function t(){}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(i){return new(i||t)},imports:[[n.b,o.a,r.kb,m]]}),t}()}}]);