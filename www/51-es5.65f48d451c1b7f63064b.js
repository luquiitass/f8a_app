!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{zpEb:function(t,i,r){"use strict";r.r(i),r.d(i,"ListPageModule",(function(){return Q}));var o=r("ofXK"),s=r("3Pt+"),c=r("TEn/"),a=r("tyNb"),u=r("mrSG"),b=r("U9ZX"),l=r("8xVP"),f=r("fXoL"),d=r("G/jy"),h=r("vuFD");function p(e,n){1&e&&(f.Qb(0,"ion-list-header",8),f.Qb(1,"ion-label"),f.tc(2,"Sin registros"),f.Pb(),f.Pb())}function m(e,n){if(1&e){var t=f.Rb();f.Qb(0,"ion-item"),f.Qb(1,"ion-label"),f.Qb(2,"h3"),f.tc(3),f.Pb(),f.Pb(),f.Qb(4,"ion-buttons",9),f.Qb(5,"ion-button",3),f.Yb("click",(function(){f.nc(t);var e=n.$implicit;return f.ac().showEdit(e)})),f.Mb(6,"ion-icon",10),f.Pb(),f.Qb(7,"ion-button",3),f.Yb("click",(function(){f.nc(t);var e=n.$implicit;return f.ac().confirmDelete(e)})),f.Mb(8,"ion-icon",11),f.Pb(),f.Pb(),f.Pb()}if(2&e){var i=n.$implicit;f.yb(3),f.wc("",i.last_name," ",i.first_name,"")}}var v,y,g,P=[{path:"",component:(v=function(){function t(n,i,r,o){e(this,t),this.request=n,this.dialogService=i,this.modalController=r,this.dialog=o,this.userService=new l.a("User",n)}var i,r,o;return i=t,(r=[{key:"ngOnInit",value:function(){this.userService.api_all()}},{key:"openModal",value:function(){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:b.a});case 2:return(n=e.sent).onDidDismiss().then((function(e){t.userService.listAddLast(e.data.user)})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"showEdit",value:function(e){return Object(u.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t,i=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:b.a,componentProps:{id:e.id}});case 2:return(t=n.sent).onDidDismiss().then((function(n){console.log(n),i.userService.listUpdate(e.id,n.data.user)})),n.next=6,t.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"confirmDelete",value:function(e){var n=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este user",(function(t){n.delete(e)}))}},{key:"delete",value:function(e){var n=this;this.userService.api_delete(e.id).subscribe((function(t){console.log(t),"success"==t.status&&(n.dialog.showToast("User Eliminado",null,"success"),n.userService.listDelete(e.id))}))}}])&&n(i.prototype,r),o&&n(i,o),t}(),v.\u0275fac=function(e){return new(e||v)(f.Lb(d.a),f.Lb(h.a),f.Lb(c.hb),f.Lb(h.a))},v.\u0275cmp=f.Fb({type:v,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,n){1&e&&(f.Qb(0,"ion-header"),f.Qb(1,"ion-toolbar"),f.Qb(2,"ion-buttons",0),f.Mb(3,"ion-back-button",1),f.Pb(),f.Qb(4,"ion-title"),f.tc(5,"Usuarios"),f.Pb(),f.Qb(6,"ion-buttons",2),f.Qb(7,"ion-button",3),f.Yb("click",(function(){return n.openModal()})),f.Mb(8,"ion-icon",4),f.Pb(),f.Pb(),f.Pb(),f.Pb(),f.Qb(9,"ion-content"),f.Qb(10,"ion-refresher",5),f.Yb("ionRefresh",(function(e){return n.userService.api_all(e)})),f.Mb(11,"ion-refresher-content"),f.Pb(),f.Qb(12,"ion-list"),f.sc(13,p,3,0,"ion-list-header",6),f.sc(14,m,9,2,"ion-item",7),f.Pb(),f.Pb()),2&e&&(f.yb(13),f.fc("ngIf",0==n.userService.list.length),f.yb(1),f.fc("ngForOf",n.userService.list))},directives:[c.x,c.db,c.j,c.f,c.g,c.bb,c.i,c.y,c.r,c.J,c.K,c.E,o.k,o.j,c.F,c.D,c.B],styles:[""]}),v)}],w=((g=function n(){e(this,n)}).\u0275mod=f.Jb({type:g}),g.\u0275inj=f.Ib({factory:function(e){return new(e||g)},imports:[[a.j.forChild(P)],a.j]}),g),Q=((y=function n(){e(this,n)}).\u0275mod=f.Jb({type:y}),y.\u0275inj=f.Ib({factory:function(e){return new(e||y)},imports:[[o.b,s.a,c.eb,w]]}),y)}}])}();