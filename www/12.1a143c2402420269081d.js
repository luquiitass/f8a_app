(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6/gD":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("mrSG"),o=i("gcOT"),r=i("8xVP"),s=i("fXoL"),a=i("G/jy"),u=o.c.Camera,c=function(){function t(t){this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(e,i){var n=new FileReader;n.onerror=i,n.onload=function(){e(n.result)},n.readAsDataURL(t)}))},this.serviceImage=new r.a("Image",t)}return t.prototype.init=function(t,e,i){void 0===e&&(e=!0),void 0===i&&(i="assets/images/pngwing.png"),this.url=null!=t?t:"/images/",this.thumb=null!=e&&e,this.path=i,this.photo=new h(i)},t.prototype.setImage=function(t){this.image=t,this.photo.image=t},t.prototype.addNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,u.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=i.sent(),[4,this.readAsBase64(t)];case 2:return e=i.sent(),this.photos.unshift(new h(null,t.webPath,e,this.url,this.thumb)),[2]}}))}))},t.prototype.addOneNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,u.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=i.sent(),[4,this.readAsBase64(t)];case 2:return e=i.sent(),this.photo=new h(t.webPath,e,e,this.url,this.thumb,this.image),[2]}}))}))},t.prototype.isLoadPthoto=function(){return!!this.photo.data},t.prototype.readAsBase64=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,fetch(t.webPath)];case 1:return[4,i.sent().blob()];case 2:return e=i.sent(),[4,this.convertBlobToBase64(e)];case 3:return[2,i.sent()]}}))}))},t.prototype.uploadImage=function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)},t.\u0275fac=function(e){return new(e||t)(s.Ub(a.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),h=function(){function t(t,e,i,n,o,r){void 0===t&&(t="assets/images/pngwing.png"),void 0===e&&(e=null),void 0===i&&(i=""),void 0===n&&(n=""),void 0===o&&(o=!1),void 0===r&&(r=null),this.id=r?r.id:"",this.webviewPath=e,this.filepath=t,this.data=i,this.url=n,this.thumb=o,this.image=r}return t.prototype.getPath=function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath},t}()},BVm6:function(t,e,i){"use strict";i.r(e),i.d(e,"TeamGamesPageModule",(function(){return w}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("mrSG"),u=i("8xVP"),c=i("fXoL"),h=i("G/jy"),f=i("vuFD"),d=i("rLe3"),l=i("xj5e");function p(t,e){1&t&&(c.Qb(0,"ion-list-header",6),c.Qb(1,"ion-label"),c.vc(2,"Sin registros"),c.Pb(),c.Pb())}function b(t,e){if(1&t){var i=c.Rb();c.Qb(0,"div"),c.Qb(1,"app-old-next-game",7),c.Yb("onDeleteGame",(function(t){return c.oc(i),c.ac(2).deleteGame(t)})),c.Pb(),c.Pb()}if(2&t){var n=e.$implicit;c.yb(1),c.gc("game",n)("withTitle",!1)}}function m(t,e){if(1&t&&(c.Qb(0,"ion-list"),c.uc(1,p,3,0,"ion-list-header",4),c.uc(2,b,2,2,"div",5),c.Pb()),2&t){var i=c.ac();c.yb(1),c.gc("ngIf",0==i.team.games.length),c.yb(1),c.gc("ngForOf",i.team.games)}}var g=[{path:"",component:function(){function t(t,e,i,n){this.route=t,this.requestService=e,this.dialogService=i,this.utilArray=n,this.id=t.snapshot.paramMap.get("id"),this.status=t.snapshot.paramMap.get("status"),this.modelTeam=new u.a("Team",e)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(t){return void 0===t&&(t=null),Object(a.b)(this,void 0,void 0,(function(){var e,i=this;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,this.dialogService.loadingProgres()];case 1:return n.sent(),e={},this.status&&(e.status=this.status),this.modelTeam.api_functionModel(this.id,"pageGames",e).subscribe((function(t){"success"==t.status&&(i.team=t.data)}),(function(e){i.dialogService.dimissLoaging(),t&&t.target.complete()}),(function(){i.dialogService.dimissLoaging(),t&&t.target.complete()})),[2]}}))}))},t.prototype.deleteGame=function(t){this.utilArray.listDelete(this.team.games,t.id)},t.\u0275fac=function(e){return new(e||t)(c.Lb(s.a),c.Lb(h.a),c.Lb(f.a),c.Lb(d.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-team-games"]],decls:10,vars:3,consts:[["slot","start"],[3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["color","info",4,"ngIf"],[4,"ngFor","ngForOf"],["color","info"],[3,"game","withTitle","onDeleteGame"]],template:function(t,e){1&t&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-title"),c.vc(3),c.Pb(),c.Qb(4,"ion-buttons",0),c.Mb(5,"ion-back-button",1),c.Pb(),c.Pb(),c.Pb(),c.Qb(6,"ion-content"),c.Qb(7,"ion-refresher",2),c.Yb("ionRefresh",(function(t){return e.init(t)})),c.Mb(8,"ion-refresher-content"),c.Pb(),c.uc(9,m,3,2,"ion-list",3),c.Pb()),2&t&&(c.yb(3),c.xc("Partidos de ",e.team?e.team.name:"",""),c.yb(2),c.ic("defaultHref","/team/profile/",e.team?e.team.id:"",""),c.yb(4),c.gc("ngIf",e.team))},directives:[r.x,r.jb,r.hb,r.j,r.f,r.g,r.r,r.O,r.P,n.l,r.H,n.k,r.I,r.G,l.a],styles:[""]}),t}()}],v=function(){function t(){}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(g)],s.j]}),t}(),y=i("j1ZV"),w=function(){function t(){}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.kb,v,y.a]]}),t}()},rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("mrSG"),o=i("fXoL"),r=function(){function t(){}return t.prototype.listAddLast=function(t,e){t.push(e)},t.prototype.listAddFirst=function(t,e){t.unshift(e)},t.prototype.listUpdate=function(t,e,i){var n=this.findIndexList(t,e);n>=0&&(t[n]=i)},t.prototype.listDelete=function(t,e){var i=this.findIndexList(t,e);i>=0&&t.splice(i,1)},t.prototype.findList=function(t,e){return t.find((function(t){return t.id===e}))},t.prototype.findIndexList=function(t,e){return t.findIndex((function(t){return t.id===e}))},t.prototype.updateAttribustesObject=function(t,e,i){var o,r;void 0===i&&(i=[]),console.log("update attributes");try{for(var s=Object(n.h)(i),a=s.next();!a.done;a=s.next()){var u=a.value;e.hasOwnProperty(u)&&(t[u]=e[u])}}catch(c){o={error:c}}finally{try{a&&!a.done&&(r=s.return)&&r.call(s)}finally{if(o)throw o.error}}return t},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()}}]);