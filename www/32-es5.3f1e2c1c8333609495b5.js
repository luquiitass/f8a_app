!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"99Un":function(n,o,i){"use strict";i.r(o),i.d(o,"HomePageModule",(function(){return x}));var r=i("ofXK"),a=i("3Pt+"),u=i("TEn/"),s=i("tyNb"),c=i("UTcu"),b=i("mrSG"),l=i("fXoL"),h=i("54vc"),d=i("VYYF"),f=i("y/q6"),m=i("zYHx");function p(t,n){if(1&t&&(l.Qb(0,"ion-card"),l.Qb(1,"ion-card-content"),l.Qb(2,"ion-thumbnail",1),l.Mb(3,"ion-img",2),l.Pb(),l.Pb(),l.Qb(4,"ion-card-header"),l.Qb(5,"ion-card-title",3),l.tc(6),l.Pb(),l.Qb(7,"ion-card-subtitle",3),l.tc(8),l.Pb(),l.Pb(),l.Pb()),2&t){var e=l.ac();l.yb(3),l.fc("src",e.authUser.user.photo?e.authUser.user.photo.urlComplete:e.pathImages.images.profile_user),l.yb(3),l.wc(" ",e.authUser.user.last_name," ",e.authUser.user.first_name," "),l.yb(2),l.vc(" ",e.authUser.user.email," ")}}var g,P=((g=function(){function n(e,o){t(this,n),this.authUser=e,this.pathImages=o}return e(n,[{key:"ngOnInit",value:function(){return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("user auth",this.authUser.user);case 1:case"end":return t.stop()}}),t,this)})))}}]),n}()).\u0275fac=function(t){return new(t||g)(l.Lb(f.a),l.Lb(m.a))},g.\u0275cmp=l.Fb({type:g,selectors:[["app-menu-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","center",1,"content-image","center"],[1,"image","center",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"],[1,"ion-text-center"]],template:function(t,n){1&t&&l.sc(0,p,9,4,"ion-card",0),2&t&&l.fc("ngIf",n.authUser.user)},directives:[r.k,u.k,u.l,u.ab,u.z,u.m,u.o,u.n],styles:[".center[_ngcontent-%COMP%]{margin:auto}.content-image[_ngcontent-%COMP%]{width:100px;height:90px}.image[_ngcontent-%COMP%]{width:100px;height:100px}"]}),g);function y(t,n){if(1&t&&(l.Qb(0,"ion-badge",24),l.tc(1),l.Pb()),2&t){var e=l.ac();l.yb(1),l.uc(e.notificationsCount)}}function Q(t,n){1&t&&(l.Qb(0,"ion-item",25),l.Mb(1,"ion-icon",26),l.Qb(2,"ion-label"),l.tc(3," Toggle Dark Theme "),l.Pb(),l.Mb(4,"ion-toggle",27),l.Pb())}function v(t,n){1&t&&(l.Qb(0,"ion-item",28),l.tc(1,"Administrar APP"),l.Pb())}var k,w,M,C=[{path:"",component:(k=function(){function n(e,o,i,r){t(this,n),this.platform=e,this.splashScreen=o,this.statusBar=i,this.auth=r,this.currentPageTitle="Dashboard",this.appPages=[{title:"Dashboard",url:"",icon:"easel"},{title:"Timeline",url:"/timeline",icon:"film"},{title:"Settings",url:"/settings",icon:"settings"}],this.initializeApp()}return e(n,[{key:"ngOnInit",value:function(){return Object(b.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.auth.updateUserApi();case 2:case"end":return t.stop()}}),t,this)})))}},{key:"initializeApp",value:function(){var t=this;this.platform.ready().then((function(){t.statusBar.styleDefault(),t.splashScreen.hide(),t.loadTheme()})),setInterval((function(){t.auth.user&&t.auth.userModel.api_loadAttribute(t.auth.user.id,"counts_not").subscribe((function(n){console.log("update atribute counts_not",n);var e=n.User.counts_not;e>t.auth.user.counts_not&&(t.auth.user.counts_not=e)}))}),5e4)}},{key:"loadTheme",value:function(){}},{key:"loadApp",value:function(){this.checkToggle(this.prefersDark.matches)}},{key:"checkToggle",value:function(t){this.toggle.checked=t}},{key:"logout",value:function(){this.auth.logout()}},{key:"notificationsCount",get:function(){return this.auth.user&&this.auth.user.counts_not?this.auth.user.counts_not:0}}]),n}(),k.\u0275fac=function(t){return new(t||k)(l.Lb(u.lb),l.Lb(h.a),l.Lb(d.a),l.Lb(f.a))},k.\u0275cmp=l.Fb({type:k,selectors:[["app-home"]],decls:47,vars:3,consts:[["slot","start"],["slot","secondary"],["routerLink","/notifications","routerDirection","forward"],["name","notifications-outline"],["id","notifications-badge",4,"ngIf"],["side","start","menuId","custom","contentId","main",1,"my-custom-menu"],["routerLink","/my-profile","routerDirection","forward"],[2,"width","100%"],["lines","full",4,"ngIf"],["routerLink","/admin_home","routerDirection","forward",4,"ngIf"],[3,"click"],["id","main"],["slot","top","color","primary"],["slot","bottom"],["tab","results"],["name","clipboard-outline"],["tab","games"],["name","easel-outline"],["tab","teams"],["name","people-outline"],["tab","players"],["name","person-outline"],["tab","publications"],["name","happy-outline"],["id","notifications-badge"],["lines","full"],["slot","start","name","moon"],["id","themeToggle","slot","end"],["routerLink","/admin_home","routerDirection","forward"]],template:function(t,n){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-buttons",0),l.Mb(3,"ion-menu-button"),l.Pb(),l.Qb(4,"ion-title"),l.tc(5," F\xfatbol Alem "),l.Pb(),l.Qb(6,"ion-buttons",1),l.Qb(7,"ion-button",2),l.Mb(8,"ion-icon",3),l.sc(9,y,2,1,"ion-badge",4),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Qb(10,"ion-menu",5),l.Qb(11,"ion-header"),l.Qb(12,"ion-toolbar"),l.Qb(13,"ion-title"),l.tc(14,"Men\xfa"),l.Pb(),l.Pb(),l.Pb(),l.Qb(15,"ion-content"),l.Qb(16,"ion-list"),l.Qb(17,"ion-item",6),l.Mb(18,"app-menu-user",7),l.Pb(),l.sc(19,Q,5,0,"ion-item",8),l.sc(20,v,2,0,"ion-item",9),l.Qb(21,"ion-item",10),l.Yb("click",(function(){return n.logout()})),l.Qb(22,"ion-label"),l.tc(23,"Cerrar Sesi\xf3n"),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Mb(24,"ion-router-outlet",11),l.Qb(25,"ion-tabs",12),l.Qb(26,"ion-tab-bar",13),l.Qb(27,"ion-tab-button",14),l.Mb(28,"ion-icon",15),l.Qb(29,"ion-label"),l.tc(30,"Resultado"),l.Pb(),l.Pb(),l.Qb(31,"ion-tab-button",16),l.Mb(32,"ion-icon",17),l.Qb(33,"ion-label"),l.tc(34,"Partidos"),l.Pb(),l.Pb(),l.Qb(35,"ion-tab-button",18),l.Mb(36,"ion-icon",19),l.Qb(37,"ion-label"),l.tc(38,"Equipos"),l.Pb(),l.Pb(),l.Qb(39,"ion-tab-button",20),l.Mb(40,"ion-icon",21),l.Qb(41,"ion-label"),l.tc(42,"Jugadores"),l.Pb(),l.Pb(),l.Qb(43,"ion-tab-button",22),l.Mb(44,"ion-icon",23),l.Qb(45,"ion-label"),l.tc(46,"3\xb0 Tiempo"),l.Pb(),l.Pb(),l.Pb(),l.Pb()),2&t&&(l.yb(9),l.fc("ngIf",n.notificationsCount>0),l.yb(10),l.fc("ngIf",!1),l.yb(1),l.fc("ngIf",n.auth.isAdmin()))},directives:[u.x,u.db,u.j,u.H,u.bb,u.i,u.mb,s.h,u.y,r.k,u.G,u.r,u.E,u.B,P,u.D,u.L,u.X,u.V,u.W,u.h,u.cb,u.c],styles:["#notification-button[_ngcontent-%COMP%]{position:relative;width:42px;top:1px;right:1px;overflow:visible!important}#notifications-badge[_ngcontent-%COMP%]{background-color:red;position:absolute;top:-3px;right:-3px;border-radius:100%}"]}),k),canActivate:[c.a],children:[{path:"teams",loadChildren:function(){return i.e(35).then(i.bind(null,"nHXg")).then((function(t){return t.TeamsPageModule}))}},{path:"results",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(34)]).then(i.bind(null,"3nJb")).then((function(t){return t.ResultsPageModule}))}},{path:"games",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(31)]).then(i.bind(null,"cGQY")).then((function(t){return t.GamesPageModule}))}},{path:"players",loadChildren:function(){return Promise.all([i.e(1),i.e(0),i.e(33)]).then(i.bind(null,"+q+I")).then((function(t){return t.PlayersPageModule}))}},{path:"publications",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(0),i.e(6)]).then(i.bind(null,"Jr79")).then((function(t){return t.PublicationsPageModule}))}},{path:"",redirectTo:"/home/results",pathMatch:"full"}]},{path:"publications",loadChildren:function(){return Promise.all([i.e(1),i.e(2),i.e(0),i.e(6)]).then(i.bind(null,"Jr79")).then((function(t){return t.PublicationsPageModule}))}}],I=((w=function n(){t(this,n)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(t){return new(t||w)},imports:[[s.j.forChild(C)],s.j]}),w),_=i("j1ZV"),x=((M=function n(){t(this,n)}).\u0275mod=l.Jb({type:M}),M.\u0275inj=l.Ib({factory:function(t){return new(t||M)},imports:[[r.b,a.a,u.eb,I,_.a]]}),M)}}])}();