!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"6/gD":function(e,i,o){"use strict";o.d(i,"a",(function(){return h}));var r=o("mrSG"),s=o("gcOT"),a=o("8xVP"),u=o("fXoL"),c=o("G/jy"),l=s.c.Camera,h=function(){var e=function(){function e(n){t(this,e),this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(e,n){var i=new FileReader;i.onerror=n,i.onload=function(){e(i.result)},i.readAsDataURL(t)}))},this.serviceImage=new a.a("Image",n)}return n(e,[{key:"init",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"assets/images/pngwing.png";this.url=null!=t?t:"/images/",this.thumb=null!=e&&e,this.path=n,this.photo=new b(n)}},{key:"setImage",value:function(t){this.image=t,this.photo.image=t}},{key:"addNewToGallery",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getPhoto({resultType:s.a.Uri,source:s.b.Camera,quality:100});case 2:return e=t.sent,t.next=5,this.readAsBase64(e);case 5:n=t.sent,this.photos.unshift(new b(null,e.webPath,n,this.url,this.thumb));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"addOneNewToGallery",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getPhoto({resultType:s.a.Uri,source:s.b.Camera,quality:100});case 2:return e=t.sent,t.next=5,this.readAsBase64(e);case 5:n=t.sent,this.photo=new b(e.webPath,n,n,this.url,this.thumb,this.image);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"isLoadPthoto",value:function(){return!!this.photo.data}},{key:"readAsBase64",value:function(t){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.webPath);case 2:return n=e.sent,e.next=5,n.blob();case 5:return i=e.sent,e.next=8,this.convertBlobToBase64(i);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"uploadImage",value:function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Ub(c.a))},e.\u0275prov=u.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),b=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"assets/images/pngwing.png",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;t(this,e),this.id=a?a.id:"",this.webviewPath=i,this.filepath=n,this.data=o,this.url=r,this.thumb=s,this.image=a}return n(e,[{key:"getPath",value:function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}]),e}()},uwJ2:function(e,i,o){"use strict";o.r(i),o.d(i,"ListPageModule",(function(){return k}));var r=o("ofXK"),s=o("3Pt+"),a=o("TEn/"),u=o("tyNb"),c=o("mrSG"),l=o("U6ZO"),h=o("8xVP"),b=o("fXoL"),f=o("G/jy"),d=o("vuFD");function p(t,e){1&t&&(b.Qb(0,"ion-list-header",8),b.Qb(1,"ion-label"),b.tc(2,"Sin registros"),b.Pb(),b.Pb())}function v(t,e){if(1&t){var n=b.Rb();b.Qb(0,"ion-item"),b.Qb(1,"ion-label"),b.Qb(2,"h3"),b.tc(3),b.Pb(),b.Pb(),b.Qb(4,"ion-buttons",9),b.Qb(5,"ion-button",3),b.Yb("click",(function(){b.nc(n);var t=e.$implicit;return b.ac().showEdit(t)})),b.Mb(6,"ion-icon",10),b.Pb(),b.Qb(7,"ion-button",3),b.Yb("click",(function(){b.nc(n);var t=e.$implicit;return b.ac().confirmDelete(t)})),b.Mb(8,"ion-icon",11),b.Pb(),b.Pb(),b.Pb()}if(2&t){var i=e.$implicit;b.yb(3),b.uc(i.name)}}var m,g,w,y=[{path:"",component:(m=function(){function e(n,i,o,r){t(this,e),this.request=n,this.dialogService=i,this.modalController=o,this.dialog=r,this.positionService=new h.a("Position",n)}return n(e,[{key:"ngOnInit",value:function(){this.positionService.api_all()}},{key:"openModal",value:function(){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a});case 2:return(e=t.sent).onDidDismiss().then((function(t){n.positionService.listAddLast(t.data.posicion)})),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"showEdit",value:function(t){return Object(c.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:l.a,componentProps:{id:t.id}});case 2:return(n=e.sent).onDidDismiss().then((function(e){console.log(e),i.positionService.listUpdate(t.id,t)})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este posicion",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;this.positionService.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Position Eliminado",null,"success"),e.positionService.listDelete(t.id))}))}}]),e}(),m.\u0275fac=function(t){return new(t||m)(b.Lb(f.a),b.Lb(d.a),b.Lb(a.nb),b.Lb(d.a))},m.\u0275cmp=b.Fb({type:m,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,e){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",0),b.Mb(3,"ion-back-button",1),b.Pb(),b.Qb(4,"ion-title"),b.tc(5,"Posiciones"),b.Pb(),b.Qb(6,"ion-buttons",2),b.Qb(7,"ion-button",3),b.Yb("click",(function(){return e.openModal()})),b.Mb(8,"ion-icon",4),b.Pb(),b.Pb(),b.Pb(),b.Pb(),b.Qb(9,"ion-content"),b.Qb(10,"ion-refresher",5),b.Yb("ionRefresh",(function(t){return e.positionService.api_all(t)})),b.Mb(11,"ion-refresher-content"),b.Pb(),b.Qb(12,"ion-list"),b.sc(13,p,3,0,"ion-list-header",6),b.sc(14,v,9,1,"ion-item",7),b.Pb(),b.Pb()),2&t&&(b.yb(13),b.fc("ngIf",0==e.positionService.list.length),b.yb(1),b.fc("ngForOf",e.positionService.list))},directives:[a.x,a.jb,a.j,a.f,a.g,a.hb,a.i,a.y,a.r,a.O,a.P,a.H,r.k,r.j,a.I,a.G,a.D],styles:[""]}),m)}],P=((w=function e(){t(this,e)}).\u0275mod=b.Jb({type:w}),w.\u0275inj=b.Ib({factory:function(t){return new(t||w)},imports:[[u.j.forChild(y)],u.j]}),w),k=((g=function e(){t(this,e)}).\u0275mod=b.Jb({type:g}),g.\u0275inj=b.Ib({factory:function(t){return new(t||g)},imports:[[r.b,s.a,a.kb,P]]}),g)}}])}();