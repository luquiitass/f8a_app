(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{cGQY:function(e,t,i){"use strict";i.r(t),i.d(t,"GamesPageModule",(function(){return D}));var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),r=i("mrSG"),c=i("8xVP"),l=i("wd/R"),b=i("z0x6"),d=i("fXoL"),g=i("G/jy"),u=i("2Rin"),m=i("vuFD"),h=i("y/q6"),f=i("rLe3"),p=i("T3jL"),v=i("QbbR");function P(e,t){if(1&e&&(d.Qb(0,"ion-segment-button",9),d.vc(1),d.Pb()),2&e){const e=t.$implicit,i=t.index,n=d.ac(2);d.hc("value",i),d.ic("id","sgm_",i,""),d.yb(1),d.xc(" ",n.formatDate(e.date)," ")}}function w(e,t){1&e&&(d.Qb(0,"ion-list-header",10),d.Qb(1,"ion-label"),d.vc(2,"Sin registros"),d.Pb(),d.Pb())}function y(e,t){if(1&e&&d.Mb(0,"app-game-list",11),2&e){const e=t.$implicit;d.ic("routerLink","/games/profile/",e.id,""),d.gc("game",e)}}function Q(e,t){if(1&e){const e=d.Rb();d.Qb(0,"ion-item",12),d.Yb("click",(function(){return d.oc(e),d.ac(2).addGame()})),d.Qb(1,"ion-label"),d.vc(2,"Crear nuevo partido"),d.Pb(),d.Mb(3,"ion-icon",13),d.Mb(4,"ion-ripple-effect"),d.Pb()}}function M(e,t){if(1&e){const e=d.Rb();d.Qb(0,"div"),d.Qb(1,"ion-refresher",2),d.Yb("ionRefresh",(function(t){return d.oc(e),d.ac().init(t)})),d.Mb(2,"ion-refresher-content"),d.Pb(),d.Qb(3,"ion-list"),d.Qb(4,"ion-grid"),d.Qb(5,"ion-row"),d.Qb(6,"ion-col",3),d.Qb(7,"ion-segment",4),d.Yb("ngModelChange",(function(t){return d.oc(e),d.ac().tabSelected=t}))("ionChange",(function(t){return d.oc(e),d.ac().selectDate(t)})),d.uc(8,P,2,3,"ion-segment-button",5),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.uc(9,w,3,0,"ion-list-header",6),d.uc(10,y,1,2,"app-game-list",7),d.uc(11,Q,5,0,"ion-item",8),d.Pb(),d.Pb()}if(2&e){const e=d.ac();d.yb(7),d.gc("ngModel",e.tabSelected),d.yb(1),d.gc("ngForOf",e.tabs),d.yb(1),d.gc("ngIf",0==e.listsHomeService.games.length),d.yb(1),d.gc("ngForOf",e.listsHomeService.games),d.yb(1),d.gc("ngIf",e.authUser.isAdminTeam())}}function x(e,t){1&e&&(d.Qb(0,"ion-card"),d.Qb(1,"div",16),d.Qb(2,"div",17),d.Qb(3,"div",18),d.Qb(4,"div",19),d.Mb(5,"ion-skeleton-text",20),d.Qb(6,"ion-avatar",0),d.Mb(7,"ion-skeleton-text",21),d.Pb(),d.Pb(),d.Qb(8,"div",22),d.Mb(9,"ion-skeleton-text",23),d.Pb(),d.Qb(10,"div",19),d.Mb(11,"ion-skeleton-text",20),d.Qb(12,"ion-avatar",0),d.Mb(13,"ion-skeleton-text",21),d.Pb(),d.Pb(),d.Pb(),d.Qb(14,"div",24),d.Mb(15,"ion-skeleton-text",25),d.Pb(),d.Pb(),d.Pb(),d.Pb())}function k(e,t){if(1&e&&(d.Qb(0,"div"),d.Qb(1,"ion-grid"),d.Qb(2,"ion-row"),d.Qb(3,"ion-col"),d.Mb(4,"ion-skeleton-text",14),d.Pb(),d.Qb(5,"ion-col"),d.Mb(6,"ion-skeleton-text",14),d.Pb(),d.Qb(7,"ion-col"),d.Mb(8,"ion-skeleton-text",14),d.Pb(),d.Pb(),d.Pb(),d.uc(9,x,16,0,"ion-card",15),d.Pb()),2&e){const e=d.ac();d.yb(9),d.gc("ngForOf",e.listSkeleton)}}const S=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o,s,a,r){this.request=e,this.util=t,this.dialogService=i,this.modalCtrl=n,this.authUser=o,this.utilArray=s,this.route=a,this.listsHomeService=r,this.tabs=[],this.listSkeleton=new Array(3),this.firstLoad=!0,this.modelGame=new c.a("Game",e)}ngOnInit(){this.init(),setTimeout(()=>{this.analyzeParameters()},1e3)}init(e=null){return Object(r.b)(this,void 0,void 0,(function*(){this.modelGame.api_function("pageHomeGames").subscribe(t=>{"success"==t.status&&(this.tabs=t.data.dates,this.selectFirst()),e&&e.target.complete(),console.log(t),this.firstLoad=!1},t=>{e&&e.target.complete(),console.error(t),this.firstLoad=!1})}))}selectFirst(){return Object(r.b)(this,void 0,void 0,(function*(){this.tabs.length>0&&(this.listsHomeService.games=this.tabs[0].results,this.tabSelected=0,yield this.delay(1500),this.focusSegment())}))}selectDate(e){return Object(r.b)(this,void 0,void 0,(function*(){let t=parseInt(e.detail.value),i=this.tabs[t];if(i&&i.results)return this.listsHomeService.games=i.results,void this.focusSegment();yield this.dialogService.loadingProgres(),this.modelGame.api_function("gamesByDate",{date:i.date}).subscribe(e=>{"success"==e.status&&(this.tabs[t].results=e.data,this.listsHomeService.games=this.tabs[t].results,this.focusSegment()),this.dialogService.dimissLoaging(),console.log(e)},e=>{console.error(e),this.dialogService.dimissLoaging()})}))}focusSegment(){let e="sgm_"+this.tabSelected;console.log("select segment : ",e),document.getElementById(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}delay(e){return new Promise(t=>setTimeout(t,e))}formatDate(e){return l(e).locale("es").format("DD MMMM YYYY")}addGame(){return Object(r.b)(this,void 0,void 0,(function*(){console.log("date",this.tabs[this.tabSelected]);let e=this.tabs[this.tabSelected]?this.tabs[this.tabSelected].date:"",t=yield this.modalCtrl.create({component:b.a,componentProps:{date:e}});return t.onDidDismiss().then(e=>{if(console.log("crate game"),e.data&&e.data.game){const t=e.data.game;let i=this.util.setFormatMoment(t.date,"YYYY-MM-DD"),n=this.tabs.map(e=>e.date).indexOf(i);n>=0||(n=this.tabs.length,this.tabs[n]={date:i,results:[]}),this.utilArray.listAddFirst(this.tabs[n].results,t),this.tabSelected=n,this.focusSegment()}}),yield t.present()}))}analyzeParameters(){console.log("run analyzeParameters"),this.route&&this.route.snapshot.queryParamMap.get("create")&&this.addGame()}ionViewWillEnter(){console.log("ionViewWillEnter")}ionViewDidEnter(){console.log("ionViewDidEnter")}ionViewWillLeave(){console.log("ionViewWillLeave")}ionViewDidLeave(){console.log("ionViewDidLeave")}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(g.a),d.Lb(u.a),d.Lb(m.a),d.Lb(s.nb),d.Lb(h.a),d.Lb(f.a),d.Lb(a.a),d.Lb(p.a))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-games"]],decls:9,vars:2,consts:[["slot","start"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],["size","12"],["scrollable","",3,"ngModel","ngModelChange","ionChange"],[3,"value","id",4,"ngFor","ngForOf"],["color","tertiary",4,"ngIf"],["routerDirection","forward",3,"game","routerLink",4,"ngFor","ngForOf"],["class","ion-activatable",3,"click",4,"ngIf"],[3,"value","id"],["color","tertiary"],["routerDirection","forward",3,"game","routerLink"],[1,"ion-activatable",3,"click"],["name","chevron-forward-outline"],["animated","",2,"width","100%","height","30px"],[4,"ngFor","ngForOf"],[1,"ion-padding","custom-skeleton"],[1,"game"],[1,"team-list","contenedor"],[1,"team"],["animated","",2,"width","80%"],["animated",""],[1,"vs"],["animated","",2,"width","20px"],[1,"date","ion-text-center",2,"width","100%"],["animated","",2,"width","80px","margin","auto"]],template:function(e,t){1&e&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-buttons",0),d.Mb(3,"ion-menu-button"),d.Pb(),d.Qb(4,"ion-title"),d.vc(5,"Partidos"),d.Pb(),d.Pb(),d.Pb(),d.Qb(6,"ion-content"),d.uc(7,M,12,5,"div",1),d.uc(8,k,10,1,"div",1),d.Pb()),2&e&&(d.yb(7),d.gc("ngIf",!t.firstLoad),d.yb(1),d.gc("ngIf",t.firstLoad))},directives:[s.x,s.jb,s.j,s.K,s.hb,s.r,n.l,s.O,s.P,s.H,s.w,s.S,s.q,s.U,s.ub,o.d,o.g,n.k,s.V,s.I,s.G,v.a,s.tb,a.h,s.D,s.y,s.Q,s.Y,s.k,s.e],styles:[".team-list[_ngcontent-%COMP%]{display:block}.vs[_ngcontent-%COMP%]{width:6%}.game[_ngcontent-%COMP%]{width:100%;padding:10px;background-repeat:no-repeat;background-size:100%;font-size:small}.team[_ngcontent-%COMP%]{display:flex;align-items:center;width:47%;flex-flow:column-reverse}.team-name[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.img-team[_ngcontent-%COMP%]{border-radius:50%;background-position:50%;width:30px;height:30px}.contenedor[_ngcontent-%COMP%]{margin:10px auto;display:flex;align-items:center;justify-content:center;width:100%;text-align:-webkit-center}.date[_ngcontent-%COMP%]{text-align:center}"]}),e})()}];let L=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[a.j.forChild(S)],a.j]}),e})();var O=i("j1ZV");let D=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[n.b,o.a,s.kb,L,O.a]]}),e})()}}]);