(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{K8Kq:function(e,t,i){"use strict";i.r(t),i.d(t,"ListPageModule",(function(){return p}));var r=i("ofXK"),n=i("3Pt+"),o=i("TEn/"),s=i("tyNb"),c=i("8xVP"),b=i("fXoL"),l=i("G/jy"),a=i("vuFD");function u(e,t){1&e&&(b.Qb(0,"ion-list-header",5),b.Qb(1,"ion-label"),b.tc(2,"Sin registros"),b.Pb(),b.Pb())}function f(e,t){if(1&e){const e=b.Rb();b.Qb(0,"ion-item"),b.Qb(1,"ion-label"),b.Qb(2,"h3"),b.tc(3),b.Pb(),b.Pb(),b.Qb(4,"ion-buttons",6),b.Qb(5,"ion-button",7),b.Yb("click",(function(){b.nc(e);const i=t.$implicit;return b.ac().confirmDelete(i)})),b.Mb(6,"ion-icon",8),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=t.$implicit;b.yb(3),b.uc(e.text)}}const d=[{path:"",component:(()=>{class e{constructor(e,t,i){this.request=e,this.modalController=t,this.dialog=i,this.errorService=new c.a("Error",e)}ngOnInit(){this.errorService.api_all()}confirmDelete(e){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este event",t=>{this.delete(e)})}delete(e){this.errorService.api_delete(e.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Evento Eliminado",null,"success"),this.errorService.listDelete(e.id))})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(l.a),b.Lb(o.hb),b.Lb(a.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["app-list"]],decls:12,vars:2,consts:[["slot","start"],["defaultHref","admin_home"],["slot","fixed",3,"ionRefresh"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],["slot","end"],[3,"click"],["name","trash-outline"]],template:function(e,t){1&e&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-buttons",0),b.Mb(3,"ion-back-button",1),b.Pb(),b.Qb(4,"ion-title"),b.tc(5,"Errors"),b.Pb(),b.Pb(),b.Pb(),b.Qb(6,"ion-content"),b.Qb(7,"ion-refresher",2),b.Yb("ionRefresh",(function(e){return t.errorService.api_all(e)})),b.Mb(8,"ion-refresher-content"),b.Pb(),b.Qb(9,"ion-list"),b.sc(10,u,3,0,"ion-list-header",3),b.sc(11,f,7,1,"ion-item",4),b.Pb(),b.Pb()),2&e&&(b.yb(10),b.fc("ngIf",0==t.errorService.list.length),b.yb(1),b.fc("ngForOf",t.errorService.list))},directives:[o.x,o.db,o.j,o.f,o.g,o.bb,o.r,o.J,o.K,o.E,r.k,r.j,o.F,o.D,o.B,o.i,o.y],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[s.j.forChild(d)],s.j]}),e})(),p=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[r.b,n.a,o.eb,h]]}),e})()}}]);