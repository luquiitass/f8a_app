(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{K8Kq:function(e,t,r){"use strict";r.r(t),r.d(t,"ListPageModule",(function(){return m}));var i=r("ofXK"),n=r("3Pt+"),o=r("TEn/"),s=r("tyNb"),c=r("8xVP"),b=r("fXoL"),l=r("G/jy"),a=r("vuFD");function u(e,t){1&e&&(b.Pb(0,"ion-list-header",5),b.Pb(1,"ion-label"),b.sc(2,"Sin registros"),b.Ob(),b.Ob())}function f(e,t){if(1&e){const e=b.Qb();b.Pb(0,"ion-item"),b.Pb(1,"ion-label"),b.Pb(2,"h3"),b.sc(3),b.Ob(),b.Ob(),b.Pb(4,"ion-buttons",6),b.Pb(5,"ion-button",7),b.Xb("click",(function(){b.mc(e);const r=t.$implicit;return b.Zb().confirmDelete(r)})),b.Lb(6,"ion-icon",8),b.Ob(),b.Ob(),b.Ob()}if(2&e){const e=t.$implicit;b.xb(3),b.tc(e.text)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,r){this.request=e,this.modalController=t,this.dialog=r,this.errorService=new c.a("Error",e)}ngOnInit(){this.errorService.api_all()}confirmDelete(e){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este event",t=>{this.delete(e)})}delete(e){this.errorService.api_delete(e.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Evento Eliminado",null,"success"),this.errorService.listDelete(e.id))})}}return e.\u0275fac=function(t){return new(t||e)(b.Kb(l.a),b.Kb(o.hb),b.Kb(a.a))},e.\u0275cmp=b.Eb({type:e,selectors:[["app-list"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],[3,"click"],["name","trash-outline"]],template:function(e,t){1&e&&(b.Pb(0,"ion-header"),b.Pb(1,"ion-toolbar"),b.Pb(2,"ion-buttons",0),b.Lb(3,"ion-back-button",1),b.Ob(),b.Pb(4,"ion-title"),b.sc(5,"Errors"),b.Ob(),b.Ob(),b.Ob(),b.Pb(6,"ion-content"),b.Pb(7,"ion-refresher",2),b.Xb("ionRefresh",(function(e){return t.errorService.api_all(e)})),b.Lb(8,"ion-refresher-content"),b.Ob(),b.Pb(9,"ion-list"),b.rc(10,u,3,0,"ion-list-header",3),b.rc(11,f,7,1,"ion-item",4),b.Ob(),b.Ob()),2&e&&(b.xb(10),b.ec("ngIf",0==t.errorService.list.length),b.xb(1),b.ec("ngForOf",t.errorService.list))},directives:[o.x,o.db,o.j,o.f,o.g,o.bb,o.r,o.J,o.K,o.E,i.k,i.j,o.F,o.D,o.B,o.i,o.y],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[s.j.forChild(d)],s.j]}),e})(),m=(()=>{class e{}return e.\u0275mod=b.Ib({type:e}),e.\u0275inj=b.Hb({factory:function(t){return new(t||e)},imports:[[i.b,n.a,o.eb,h]]}),e})()}}]);