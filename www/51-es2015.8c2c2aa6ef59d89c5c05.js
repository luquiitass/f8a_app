(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"6/gD":function(t,i,e){"use strict";e.d(i,"a",(function(){return l}));var o=e("mrSG"),n=e("gcOT"),s=e("8xVP"),r=e("fXoL"),a=e("G/jy");const{Camera:c}=n.c;let l=(()=>{class t{constructor(t){this.photos=[],this.convertBlobToBase64=t=>new Promise((i,e)=>{const o=new FileReader;o.onerror=e,o.onload=()=>{i(o.result)},o.readAsDataURL(t)}),this.serviceImage=new s.a("Image",t)}init(t,i=!0,e="assets/images/pngwing.png"){this.url=null!=t?t:"/images/",this.thumb=null!=i&&i,this.path=e,this.photo=new h(e)}setImage(t){this.image=t,this.photo.image=t}addNewToGallery(){return Object(o.b)(this,void 0,void 0,(function*(){const t=yield c.getPhoto({resultType:n.a.Uri,source:n.b.Camera,quality:100}),i=yield this.readAsBase64(t);this.photos.unshift(new h(null,t.webPath,i,this.url,this.thumb))}))}addOneNewToGallery(){return Object(o.b)(this,void 0,void 0,(function*(){const t=yield c.getPhoto({resultType:n.a.Uri,source:n.b.Camera,quality:100}),i=yield this.readAsBase64(t);this.photo=new h(t.webPath,i,i,this.url,this.thumb,this.image)}))}isLoadPthoto(){return!!this.photo.data}readAsBase64(t){return Object(o.b)(this,void 0,void 0,(function*(){const i=yield fetch(t.webPath),e=yield i.blob();return yield this.convertBlobToBase64(e)}))}uploadImage(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}return t.\u0275fac=function(i){return new(i||t)(r.Ub(a.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class h{constructor(t="assets/images/pngwing.png",i=null,e="",o="",n=!1,s=null){this.id=s?s.id:"",this.webviewPath=i,this.filepath=t,this.data=e,this.url=o,this.thumb=n,this.image=s}getPath(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}},uwJ2:function(t,i,e){"use strict";e.r(i),e.d(i,"ListPageModule",(function(){return g}));var o=e("ofXK"),n=e("3Pt+"),s=e("TEn/"),r=e("tyNb"),a=e("mrSG"),c=e("U6ZO"),l=e("8xVP"),h=e("fXoL"),b=e("G/jy"),u=e("vuFD");function d(t,i){1&t&&(h.Qb(0,"ion-list-header",8),h.Qb(1,"ion-label"),h.vc(2,"Sin registros"),h.Pb(),h.Pb())}function p(t,i){if(1&t){const t=h.Rb();h.Qb(0,"ion-item"),h.Qb(1,"ion-label"),h.Qb(2,"h3"),h.vc(3),h.Pb(),h.Pb(),h.Qb(4,"ion-buttons",9),h.Qb(5,"ion-button",3),h.Yb("click",(function(){h.oc(t);const e=i.$implicit;return h.ac().showEdit(e)})),h.Mb(6,"ion-icon",10),h.Pb(),h.Qb(7,"ion-button",3),h.Yb("click",(function(){h.oc(t);const e=i.$implicit;return h.ac().confirmDelete(e)})),h.Mb(8,"ion-icon",11),h.Pb(),h.Pb(),h.Pb()}if(2&t){const t=i.$implicit;h.yb(3),h.wc(t.name)}}const m=[{path:"",component:(()=>{class t{constructor(t,i,e,o){this.request=t,this.dialogService=i,this.modalController=e,this.dialog=o,this.positionService=new l.a("Position",t)}ngOnInit(){this.positionService.api_all()}openModal(){return Object(a.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:c.a});return t.onDidDismiss().then(t=>{this.positionService.listAddLast(t.data.posicion)}),yield t.present()}))}showEdit(t){return Object(a.b)(this,void 0,void 0,(function*(){const i=yield this.modalController.create({component:c.a,componentProps:{id:t.id}});return i.onDidDismiss().then(i=>{console.log(i),this.positionService.listUpdate(t.id,t)}),yield i.present()}))}confirmDelete(t){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este posicion",i=>{this.delete(t)})}delete(t){this.positionService.api_delete(t.id).subscribe(i=>{console.log(i),"success"==i.status&&(this.dialog.showToast("Position Eliminado",null,"success"),this.positionService.listDelete(t.id))})}}return t.\u0275fac=function(i){return new(i||t)(h.Lb(b.a),h.Lb(u.a),h.Lb(s.nb),h.Lb(u.a))},t.\u0275cmp=h.Fb({type:t,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,i){1&t&&(h.Qb(0,"ion-header"),h.Qb(1,"ion-toolbar"),h.Qb(2,"ion-buttons",0),h.Mb(3,"ion-back-button",1),h.Pb(),h.Qb(4,"ion-title"),h.vc(5,"Posiciones"),h.Pb(),h.Qb(6,"ion-buttons",2),h.Qb(7,"ion-button",3),h.Yb("click",(function(){return i.openModal()})),h.Mb(8,"ion-icon",4),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(9,"ion-content"),h.Qb(10,"ion-refresher",5),h.Yb("ionRefresh",(function(t){return i.positionService.api_all(t)})),h.Mb(11,"ion-refresher-content"),h.Pb(),h.Qb(12,"ion-list"),h.uc(13,d,3,0,"ion-list-header",6),h.uc(14,p,9,1,"ion-item",7),h.Pb(),h.Pb()),2&t&&(h.yb(13),h.gc("ngIf",0==i.positionService.list.length),h.yb(1),h.gc("ngForOf",i.positionService.list))},directives:[s.x,s.jb,s.j,s.f,s.g,s.hb,s.i,s.y,s.r,s.O,s.P,s.H,o.l,o.k,s.I,s.G,s.D],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(i){return new(i||t)},imports:[[r.j.forChild(m)],r.j]}),t})(),g=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(i){return new(i||t)},imports:[[o.b,n.a,s.kb,f]]}),t})()}}]);