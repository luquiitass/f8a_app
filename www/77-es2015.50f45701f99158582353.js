(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"1C+D":function(o,n,i){"use strict";i.r(n),i.d(n,"MessagingPageModule",(function(){return h}));var e=i("ofXK"),t=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),r=i("mrSG"),b=i("8xVP"),a=i("fXoL"),l=i("G/jy"),u=i("vuFD");function d(o,n){if(1&o){const o=a.Rb();a.Qb(0,"ion-item",4),a.Yb("click",(function(){a.oc(o);const i=n.$implicit;return a.ac(2).run(i)})),a.Qb(1,"ion-label"),a.vc(2),a.Pb(),a.Mb(3,"ion-icon",5),a.Pb()}if(2&o){const o=n.$implicit;a.yb(2),a.wc(o.name)}}function g(o,n){if(1&o&&(a.Qb(0,"ion-list"),a.uc(1,d,4,1,"ion-item",3),a.Pb()),2&o){const o=a.ac();a.yb(1),a.gc("ngForOf",o.requests)}}function f(o,n){if(1&o&&(a.Qb(0,"ion-row",10),a.Qb(1,"ion-col",11),a.vc(2),a.Pb(),a.Qb(3,"ion-col",12),a.vc(4," si"),a.Pb(),a.Mb(5,"ion-col",13),a.Pb()),2&o){const o=n.$implicit;a.yb(2),a.wc(o.user.name)}}function m(o,n){if(1&o&&(a.Qb(0,"ion-row",10),a.Qb(1,"ion-col",11),a.vc(2),a.Pb(),a.Qb(3,"ion-col",12),a.vc(4),a.Pb(),a.Mb(5,"ion-col",13),a.Pb()),2&o){const o=n.$implicit;a.yb(2),a.wc(o.user.name),a.yb(2),a.xc(" ",1==o.result.success?"si":"no","")}}function P(o,n){if(1&o){const o=a.Rb();a.Qb(0,"ion-list"),a.Qb(1,"ion-row",6),a.vc(2," Resultados "),a.Pb(),a.Qb(3,"ion-list-header",7),a.Qb(4,"ion-label"),a.vc(5,"Enviados"),a.Pb(),a.Pb(),a.uc(6,f,6,1,"ion-row",8),a.Mb(7,"br"),a.Qb(8,"ion-list-header",9),a.Qb(9,"ion-label"),a.vc(10,"No enviados"),a.Pb(),a.Pb(),a.uc(11,m,6,2,"ion-row",8),a.Mb(12,"br"),a.Qb(13,"ion-row"),a.Qb(14,"ion-col"),a.vc(15," Eviados "),a.Pb(),a.Qb(16,"ion-col"),a.vc(17),a.Pb(),a.Pb(),a.Qb(18,"ion-row"),a.Qb(19,"ion-col"),a.vc(20," No eviados "),a.Pb(),a.Qb(21,"ion-col"),a.vc(22),a.Pb(),a.Pb(),a.Qb(23,"ion-row"),a.Qb(24,"ion-button",4),a.Yb("click",(function(){return a.oc(o),a.ac().clearResults()})),a.vc(25,"Eliminar resultados"),a.Pb(),a.Pb(),a.Pb()}if(2&o){const o=a.ac();a.yb(6),a.gc("ngForOf",o.sends),a.yb(5),a.gc("ngForOf",o.notSends),a.yb(6),a.xc(" ",o.sends.length," "),a.yb(5),a.xc(" ",o.notSends.length," ")}}const p=[{path:"",component:(()=>{class o{constructor(o,n){this.requestService=o,this.dialogService=n,this.results=[],this.requests=[{name:"Not Partidos Creados",functionName:"showGamesLoaded"},{name:"Resultados cargados",functionName:"loadedResults"},{name:"Aviso para crear partidos",functionName:"adminCreateGame"},{name:"Tercer tiempo",functionName:"after"},{name:"Promicion de la pagina de Facebook",functionName:"pageFacebook"}],this.modelMessaging=new b.a("Massaging",o)}ngOnInit(){}run(o){return Object(r.b)(this,void 0,void 0,(function*(){yield this.dialogService.loadingProgres(),this.modelMessaging.api_function(o.functionName).subscribe(o=>{"success"==o.status&&(this.results=o.data),this.dialogService.dimissLoaging()},o=>{this.dialogService.dimissLoaging()})}))}clearResults(){this.results=[]}get sends(){return this.results.filter(o=>1==o.result.success)}get notSends(){return this.results.filter(o=>0==o.result.success)}}return o.\u0275fac=function(n){return new(n||o)(a.Lb(l.a),a.Lb(u.a))},o.\u0275cmp=a.Fb({type:o,selectors:[["app-messaging"]],decls:9,vars:2,consts:[["slot","start"],["defaultHref","/admin_home"],[4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["name","chevron-forward-outline"],[1,"bg-l2",2,"margin-bottom","20px","padding","3px"],["color","success"],["class","border-bottom",4,"ngFor","ngForOf"],["lines","inset","color","warning"],[1,"border-bottom"],["size","9"],["size","2",1,"border-left"],["size","1"]],template:function(o,n){1&o&&(a.Qb(0,"ion-header"),a.Qb(1,"ion-toolbar"),a.Qb(2,"ion-title"),a.vc(3,"Messaging"),a.Pb(),a.Qb(4,"ion-buttons",0),a.Mb(5,"ion-back-button",1),a.Pb(),a.Pb(),a.Pb(),a.Qb(6,"ion-content"),a.uc(7,g,2,1,"ion-list",2),a.uc(8,P,26,4,"ion-list",2),a.Pb()),2&o&&(a.yb(7),a.gc("ngIf",!n.results.length),a.yb(1),a.gc("ngIf",n.results.length))},directives:[s.x,s.jb,s.hb,s.j,s.f,s.g,s.r,e.l,s.H,e.k,s.D,s.G,s.y,s.S,s.I,s.q,s.i],styles:[".border-left[_ngcontent-%COMP%]{border-left:1px solid hsla(0,0%,100%,.18823529411764706)}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid hsla(0,0%,100%,.18823529411764706)}"]}),o})()}];let v=(()=>{class o{}return o.\u0275mod=a.Jb({type:o}),o.\u0275inj=a.Ib({factory:function(n){return new(n||o)},imports:[[c.j.forChild(p)],c.j]}),o})(),h=(()=>{class o{}return o.\u0275mod=a.Jb({type:o}),o.\u0275inj=a.Ib({factory:function(n){return new(n||o)},imports:[[e.b,t.a,s.kb,v]]}),o})()}}]);