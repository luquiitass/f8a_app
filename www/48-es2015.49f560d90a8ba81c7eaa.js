(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{gnoQ:function(t,e,n){"use strict";n.r(e),n.d(e,"ListPageModule",(function(){return P}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),r=n("tyNb"),c=n("mrSG"),b=n("rBWs"),a=n("8xVP"),l=n("fXoL"),u=n("G/jy"),d=n("vuFD");function m(t,e){1&t&&(l.Qb(0,"ion-list-header",8),l.Qb(1,"ion-label"),l.tc(2,"Sin registros"),l.Pb(),l.Pb())}function f(t,e){if(1&t){const t=l.Rb();l.Qb(0,"ion-item"),l.Qb(1,"ion-label"),l.Qb(2,"h3"),l.tc(3),l.Pb(),l.Pb(),l.Qb(4,"ion-buttons",9),l.Qb(5,"ion-button"),l.Mb(6,"ion-icon",10),l.Pb(),l.Qb(7,"ion-button",3),l.Yb("click",(function(){l.nc(t);const n=e.$implicit;return l.ac().showEdit(n)})),l.Mb(8,"ion-icon",11),l.Pb(),l.Qb(9,"ion-button",3),l.Yb("click",(function(){l.nc(t);const n=e.$implicit;return l.ac().confirmDelete(n)})),l.Mb(10,"ion-icon",12),l.Pb(),l.Pb(),l.Pb()}if(2&t){const t=e.$implicit;l.yb(3),l.uc(t.name)}}const h=[{path:"",component:(()=>{class t{constructor(t,e,n){this.request=t,this.modalController=e,this.dialog=n,this.teamService=new a.a("Team",t)}ngOnInit(){this.teamService.api_all()}openModal(){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:b.a});return t.onDidDismiss().then(t=>{this.teamService.listAddLast(t.data.team)}),yield t.present()}))}showEdit(t){return Object(c.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:b.a,componentProps:{id:t.id}});return e.onDidDismiss().then(t=>{const e=t.data.team;this.teamService.listUpdate(e.id,e)}),yield e.present()}))}confirmDelete(t){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este equipo",e=>{this.delete(t)})}delete(t){this.teamService.api_delete(t.id).subscribe(e=>{console.log(e),"success"==e.status&&(this.dialog.showToast("Team Eliminado",null,"success"),this.teamService.listDelete(t.id))})}}return t.\u0275fac=function(e){return new(e||t)(l.Lb(u.a),l.Lb(s.hb),l.Lb(d.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-list"]],decls:15,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],["name","enter-outline"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-buttons",0),l.Mb(3,"ion-back-button",1),l.Pb(),l.Qb(4,"ion-title"),l.tc(5,"Equipos"),l.Pb(),l.Qb(6,"ion-buttons",2),l.Qb(7,"ion-button",3),l.Yb("click",(function(){return e.openModal()})),l.Mb(8,"ion-icon",4),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(9,"ion-content"),l.Qb(10,"ion-refresher",5),l.Yb("ionRefresh",(function(t){return e.teamService.api_all(t)})),l.Mb(11,"ion-refresher-content"),l.Pb(),l.Qb(12,"ion-list"),l.sc(13,m,3,0,"ion-list-header",6),l.sc(14,f,11,1,"ion-item",7),l.Pb(),l.Pb()),2&t&&(l.yb(13),l.fc("ngIf",0==e.teamService.list.length),l.yb(1),l.fc("ngForOf",e.teamService.list))},directives:[s.x,s.db,s.j,s.f,s.g,s.bb,s.i,s.y,s.r,s.J,s.K,s.E,i.k,i.j,s.F,s.D,s.B],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[r.j.forChild(h)],r.j]}),t})(),P=(()=>{class t{}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,s.eb,p]]}),t})()}}]);