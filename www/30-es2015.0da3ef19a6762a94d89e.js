(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"6/gD":function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i("mrSG"),o=i("gcOT"),s=i("8xVP"),a=i("fXoL"),c=i("G/jy");const{Camera:r}=o.c;let b=(()=>{class e{constructor(e){this.photos=[],this.convertBlobToBase64=e=>new Promise((t,i)=>{const n=new FileReader;n.onerror=i,n.onload=()=>{t(n.result)},n.readAsDataURL(e)}),this.serviceImage=new s.a("Image",e)}init(e,t=!0,i="assets/images/pngwing.png"){this.url=null!=e?e:"/images/",this.thumb=null!=t&&t,this.path=i,this.photo=new l(i)}setImage(e){this.image=e,this.photo.image=e}addNewToGallery(){return Object(n.b)(this,void 0,void 0,(function*(){const e=yield r.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100}),t=yield this.readAsBase64(e);this.photos.unshift(new l(null,e.webPath,t,this.url,this.thumb))}))}addOneNewToGallery(){return Object(n.b)(this,void 0,void 0,(function*(){const e=yield r.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100}),t=yield this.readAsBase64(e);this.photo=new l(e.webPath,t,t,this.url,this.thumb,this.image)}))}isLoadPthoto(){return!!this.photo.data}readAsBase64(e){return Object(n.b)(this,void 0,void 0,(function*(){const t=yield fetch(e.webPath),i=yield t.blob();return yield this.convertBlobToBase64(i)}))}uploadImage(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}return e.\u0275fac=function(t){return new(t||e)(a.Ub(c.a))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();class l{constructor(e="assets/images/pngwing.png",t=null,i="",n="",o=!1,s=null){this.id=s?s.id:"",this.webviewPath=t,this.filepath=e,this.data=i,this.url=n,this.thumb=o,this.image=s}getPath(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}},"7i0p":function(e,t,i){"use strict";i.r(t),i.d(t,"ListPageModule",(function(){return w}));var n=i("ofXK"),o=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),c=i("mrSG"),r=i("PEpV"),b=i("8xVP"),l=i("wd/R"),d=i("fXoL"),u=i("G/jy"),m=i("vuFD"),g=i("2Rin"),h=i("rLe3");function v(e,t){if(1&e&&(d.Qb(0,"ion-segment-button",11),d.vc(1),d.Pb()),2&e){const e=t.$implicit,i=t.index,n=d.ac();d.hc("value",i),d.ic("id","sgm_",i,""),d.yb(1),d.xc(" ",n.util.setFormatMoment(e.date)," ")}}function f(e,t){1&e&&(d.Qb(0,"ion-list-header",12),d.Qb(1,"ion-label"),d.vc(2,"Sin registros"),d.Pb(),d.Pb())}const p=function(e){return["/admin/game/",e]};function P(e,t){if(1&e){const e=d.Rb();d.Qb(0,"ion-item"),d.Qb(1,"ion-grid"),d.Qb(2,"ion-row"),d.Qb(3,"ion-col",13),d.Qb(4,"ion-grid"),d.Qb(5,"ion-row"),d.Qb(6,"ion-col",14),d.vc(7),d.Pb(),d.Qb(8,"ion-col",15),d.vc(9),d.Pb(),d.Pb(),d.Qb(10,"ion-row"),d.Qb(11,"ion-col"),d.vc(12," Vs "),d.Pb(),d.Pb(),d.Qb(13,"ion-row"),d.Qb(14,"ion-col",14),d.vc(15),d.Pb(),d.Qb(16,"ion-col",15),d.vc(17),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(18,"ion-col",16),d.Qb(19,"ion-grid"),d.Qb(20,"ion-row"),d.Qb(21,"ion-col",17),d.Qb(22,"ion-button",18),d.Mb(23,"ion-icon",19),d.Pb(),d.Pb(),d.Qb(24,"ion-col",17),d.Qb(25,"ion-button",3),d.Yb("click",(function(){d.oc(e);const i=t.$implicit;return d.ac().showEdit(i)})),d.Mb(26,"ion-icon",20),d.Pb(),d.Pb(),d.Qb(27,"ion-col",17),d.Qb(28,"ion-button",3),d.Yb("click",(function(){d.oc(e);const i=t.$implicit;return d.ac().confirmDelete(i)})),d.Mb(29,"ion-icon",21),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()}if(2&e){const e=t.$implicit;d.yb(1),d.Bb("status-",e.status,""),d.yb(6),d.xc(" ",e.team_l.name," "),d.yb(2),d.wc(e.l_goals),d.yb(6),d.xc(" ",e.team_v.name," "),d.yb(2),d.wc(e.v_goals),d.yb(5),d.gc("routerLink",d.jc(8,p,e.id))}}const y=[{path:"",component:(()=>{class e{constructor(e,t,i,n,o,s){this.request=e,this.dialogService=t,this.modalController=i,this.dialog=n,this.util=o,this.utilArray=s,this.games=[],this.tabs=[],this.gameService=new b.a("Game",e)}ngOnInit(){this.init()}init(e=null){this.gameService.api_function("pageAdminAll",{orderByColumns:"name",orderByDireccion:"des"}).subscribe(t=>{this.tabs=t.data.dates,this.selectTab(),console.log(t),e&&e.target.complete()},t=>{e&&e.target.completed()})}openModal(){return Object(c.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:r.a,componentProps:{date:this.tabs&&this.tabs[this.tabSelected]?this.tabs[this.tabSelected].date:""}});return e.onDidDismiss().then(e=>{console.log("crate game");const t=e.data.game;let i=this.tabs.map(e=>e.date).indexOf(t.date);i>=0||(i=this.tabs.length,this.tabs[i]={date:l(t.date).format("YYYY-MM-DD"),results:[]}),this.utilArray.listAddFirst(this.tabs[i].results,t)}),yield e.present()}))}showEdit(e){return Object(c.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:r.a,componentProps:{id:e.id}});return t.onDidDismiss().then(e=>{const t=e.data.game;this.utilArray.listUpdate(this.games,t.id,t)}),yield t.present()}))}confirmDelete(e){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este game",t=>{this.delete(e)})}delete(e){this.gameService.api_delete(e.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Game Eliminado",null,"success"),this.utilArray.listDelete(this.games,e.id))})}showItem(e){console.log(e)}selectDate(e){let t=parseInt(e.detail.value),i=this.tabs[t];if(i.results)return this.games=i.results,void this.focusSegment();this.gameService.api_function("adminByDate",{date:i.date}).subscribe(e=>{"success"==e.status&&(this.tabs[t].results=e.data,this.games=this.tabs[t].results,this.focusSegment()),console.log(e)},e=>{console.error(e)})}focusSegment(){let e="sgm_"+this.tabSelected;console.log("select segment : ",e),document.getElementById(e).scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}delay(e){return new Promise(t=>setTimeout(t,e))}selectTab(){return Object(c.b)(this,void 0,void 0,(function*(){if(this.tabs.length>0){let e=l(),t=0;this.tabs.forEach((i,n)=>{l(i.date).isAfter(e)&&0==t&&(t=n)}),this.selectDate({detail:{value:t}}),this.tabSelected=t,yield this.util.delay(1500),this.focusSegment()}}))}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(u.a),d.Lb(m.a),d.Lb(s.nb),d.Lb(m.a),d.Lb(g.a),d.Lb(h.a))},e.\u0275cmp=d.Fb({type:e,selectors:[["app-list"]],decls:20,vars:4,consts:[["slot","start"],["defaultHref","admin_home"],["slot","secondary"],[3,"click"],["name","add-outline"],["slot","fixed",3,"ionRefresh"],["size","12"],["scrollable","",3,"ngModel","ngModelChange","ionChange"],[3,"value","id",4,"ngFor","ngForOf"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],[3,"value","id"],["color","tertiary"],["size","10"],["size","11"],["size","1"],["size","2"],["size-sm","4","size-xs","12"],[3,"routerLink"],["name","enter-outline"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-buttons",0),d.Mb(3,"ion-back-button",1),d.Pb(),d.Qb(4,"ion-title"),d.vc(5,"Partidos"),d.Pb(),d.Qb(6,"ion-buttons",2),d.Qb(7,"ion-button",3),d.Yb("click",(function(){return t.openModal()})),d.Mb(8,"ion-icon",4),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Qb(9,"ion-content"),d.Qb(10,"ion-refresher",5),d.Yb("ionRefresh",(function(e){return t.init(e)})),d.Mb(11,"ion-refresher-content"),d.Pb(),d.Qb(12,"ion-list"),d.Qb(13,"ion-grid"),d.Qb(14,"ion-row"),d.Qb(15,"ion-col",6),d.Qb(16,"ion-segment",7),d.Yb("ngModelChange",(function(e){return t.tabSelected=e}))("ionChange",(function(e){return t.selectDate(e)})),d.uc(17,v,2,3,"ion-segment-button",8),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.uc(18,f,3,0,"ion-list-header",9),d.uc(19,P,30,10,"ion-item",10),d.Pb(),d.Pb()),2&e&&(d.yb(16),d.gc("ngModel",t.tabSelected),d.yb(1),d.gc("ngForOf",t.tabs),d.yb(1),d.gc("ngIf",0==t.games.length),d.yb(1),d.gc("ngForOf",t.games))},directives:[s.x,s.jb,s.j,s.f,s.g,s.hb,s.i,s.y,s.r,s.O,s.P,s.H,s.w,s.S,s.q,s.U,s.ub,o.d,o.g,n.k,n.l,s.V,s.I,s.G,s.D,s.tb,a.h],styles:[".status[_ngcontent-%COMP%], .team[_ngcontent-%COMP%]{width:100%}.team[_ngcontent-%COMP%]{display:inline}.goal-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{background-color:transparent}.names[_ngcontent-%COMP%]{width:80%}"]}),e})()}];let Q=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[a.j.forChild(y)],a.j]}),e})(),w=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[n.b,o.a,s.kb,Q]]}),e})()},PEpV:function(e,t,i){"use strict";i.d(t,"a",(function(){return P}));var n=i("mrSG"),o=i("8xVP"),s=i("rBWs"),a=i("fXoL"),c=i("G/jy"),r=i("vuFD"),b=i("TEn/"),l=i("6/gD"),d=i("3Pt+"),u=i("ofXK");function m(e,t){if(1&e&&(a.Qb(0,"ion-select-option",19),a.vc(1),a.Pb()),2&e){const e=t.$implicit;a.gc("value",e.id),a.yb(1),a.wc(e.name)}}function g(e,t){if(1&e&&(a.Qb(0,"ion-select-option",19),a.vc(1),a.Pb()),2&e){const e=t.$implicit;a.gc("value",e.id),a.yb(1),a.wc(e.name)}}function h(e,t){if(1&e){const e=a.Rb();a.Qb(0,"div"),a.Qb(1,"ion-item"),a.Qb(2,"ion-label",4),a.vc(3,"Otro Equipo"),a.Pb(),a.Qb(4,"ion-input",20),a.Yb("ngModelChange",(function(t){return a.oc(e),a.ac().game.other_team=t})),a.Pb(),a.Pb(),a.Qb(5,"div",7),a.vc(6),a.Pb(),a.Qb(7,"ion-button",21),a.Yb("click",(function(){return a.oc(e),a.ac().newTeam()})),a.vc(8,"Nuevo equipo"),a.Pb(),a.Pb()}if(2&e){const e=a.ac();a.yb(4),a.gc("ngModel",e.game.other_team),a.yb(2),a.wc(e.serviceGame.errorsForm.get("other_team"))}}function v(e,t){if(1&e&&(a.Qb(0,"ion-select-option",19),a.vc(1),a.Pb()),2&e){const e=t.$implicit;a.gc("value",e),a.yb(1),a.wc(e)}}function f(e,t){if(1&e&&(a.Qb(0,"ion-select-option",19),a.vc(1),a.Pb()),2&e){const e=t.$implicit;a.gc("value",e),a.yb(1),a.wc(e)}}function p(e,t){if(1&e&&(a.Qb(0,"ion-select-option",19),a.vc(1),a.Pb()),2&e){const e=t.$implicit;a.gc("value",e),a.yb(1),a.wc(e)}}let P=(()=>{class e{constructor(e,t,i,n,s,a){var c;this.request=e,this.dialogService=t,this.viewCtrl=i,this.photoService=n,this.modalController=a,this.teams=[],this.numbGoals=[],this.customDayShortNames=["s\xf8n"],this.status=["Pendiente","Suspendido","Jugado","Created"],this.myDateFilter=e=>6==e.getDay(),this.serviceGame=new o.a("Game",e),this.serviceTeam=new o.a("Team",e),this.id=s.get("id"),this.toDate=null!==(c=s.get("date"))&&void 0!==c?c:new Date,console.log("date",this.toDate)}ngOnInit(){this.serviceTeam.api_function("getAllTeamsSelect").subscribe(e=>{e.data&&(this.teams=e.data,console.log("teams -> ",this.teams))});for(var e=0;e<=30;e++)this.numbGoals.push(e);this.initObject()}initObject(){this.game={l_team:"",v_team:"",l_goals:0,v_goals:0,time:"15:00",date:this.toDate,location:"",description:"",status:"Pendiente"},this.id&&this.serviceGame.api_find(this.id).subscribe(e=>{"success"==e.status&&(this.game=e.Game)})}submit(){this.game.id?this.serviceGame.api_update(this.game).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),console.log(e),this.dismiss(e.Game))}):this.serviceGame.api_create(this.game).subscribe(e=>{var t;"success"==e.status&&(this.dialogService.showToast(null!==(t=e.msjSuccess)&&void 0!==t?t:"Registrado"),this.dismiss(e.Game))})}dismiss(e){this.viewCtrl.dismiss({game:e})}close(){this.viewCtrl.dismiss()}print(){console.log(this.game)}newTeam(){return Object(n.b)(this,void 0,void 0,(function*(){const e=yield this.modalController.create({component:s.a});return e.onDidDismiss().then(e=>{e.data.team&&this.teams.push(e.data.team)}),yield e.present()}))}}return e.\u0275fac=function(t){return new(t||e)(a.Lb(c.a),a.Lb(r.a),a.Lb(b.nb),a.Lb(l.a),a.Lb(b.pb),a.Lb(b.nb))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-game-form"]],decls:69,vars:22,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],["position","floating"],["name","l_team",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],["name","v_team",3,"ngModel","ngModelChange"],[4,"ngIf"],[1,"goals"],["name","l_goals",3,"ngModel","ngModelChange"],["name","v_goals",3,"ngModel","ngModelChange"],["displayFormat","HH:mm ","name","time",3,"ngModel","ngModelChange"],["type","text","name","location",3,"ngModel","ngModelChange"],["type","text","name","description",3,"ngModel","ngModelChange"],["name","date","displayFormat","YYYY-MM-DD",3,"ngModel","ngModelChange"],["name","status",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["type","text","name","other_team",3,"ngModel","ngModelChange"],["size","sm",3,"click"]],template:function(e,t){1&e&&(a.Qb(0,"ion-header"),a.Qb(1,"ion-toolbar"),a.Qb(2,"ion-title"),a.vc(3,"Partido"),a.Pb(),a.Qb(4,"ion-buttons",0),a.Qb(5,"ion-button",1),a.Yb("click",(function(){return t.close()})),a.Mb(6,"ion-icon",2),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(7,"ion-content"),a.Qb(8,"form",3),a.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.serviceGame.errorsForm.clear()})),a.Qb(9,"ion-item"),a.Qb(10,"ion-label",4),a.vc(11,"Equipo local"),a.Pb(),a.Qb(12,"ion-select",5),a.Yb("ngModelChange",(function(e){return t.game.l_team=e})),a.uc(13,m,2,2,"ion-select-option",6),a.Pb(),a.Qb(14,"div",7),a.vc(15),a.Pb(),a.Pb(),a.Qb(16,"ion-item"),a.Qb(17,"ion-label",4),a.vc(18,"Equipo Vicitante"),a.Pb(),a.Qb(19,"ion-select",8),a.Yb("ngModelChange",(function(e){return t.game.v_team=e})),a.uc(20,g,2,2,"ion-select-option",6),a.Pb(),a.Qb(21,"div",7),a.vc(22),a.Pb(),a.Pb(),a.uc(23,h,9,2,"div",9),a.Mb(24,"br"),a.Qb(25,"div",10),a.Qb(26,"ion-item"),a.Qb(27,"ion-label",4),a.vc(28,"Goles L"),a.Pb(),a.Qb(29,"ion-select",11),a.Yb("ngModelChange",(function(e){return t.game.l_goals=e})),a.uc(30,v,2,2,"ion-select-option",6),a.Pb(),a.Qb(31,"div",7),a.vc(32),a.Pb(),a.Pb(),a.Qb(33,"ion-item"),a.Qb(34,"ion-label",4),a.vc(35,"Goles V"),a.Pb(),a.Qb(36,"ion-select",12),a.Yb("ngModelChange",(function(e){return t.game.v_goals=e})),a.uc(37,f,2,2,"ion-select-option",6),a.Pb(),a.Qb(38,"div",7),a.vc(39),a.Pb(),a.Pb(),a.Pb(),a.Qb(40,"ion-item"),a.Qb(41,"ion-label"),a.vc(42,"HH:mm"),a.Pb(),a.Qb(43,"ion-datetime",13),a.Yb("ngModelChange",(function(e){return t.game.time=e})),a.Pb(),a.Pb(),a.Qb(44,"ion-item"),a.Qb(45,"ion-label",4),a.vc(46,"Lugar"),a.Pb(),a.Qb(47,"ion-input",14),a.Yb("ngModelChange",(function(e){return t.game.location=e})),a.Pb(),a.Pb(),a.Qb(48,"div",7),a.vc(49),a.Pb(),a.Qb(50,"ion-item"),a.Qb(51,"ion-label",4),a.vc(52,"Comentario"),a.Pb(),a.Qb(53,"ion-input",15),a.Yb("ngModelChange",(function(e){return t.game.description=e})),a.Pb(),a.Pb(),a.Qb(54,"div",7),a.vc(55),a.Pb(),a.Qb(56,"ion-item"),a.Qb(57,"ion-label"),a.vc(58,"Fecha"),a.Pb(),a.Qb(59,"ion-datetime",16),a.Yb("ngModelChange",(function(e){return t.game.date=e})),a.Pb(),a.Pb(),a.Qb(60,"ion-item"),a.Qb(61,"ion-label",4),a.vc(62,"Estado"),a.Pb(),a.Qb(63,"ion-select",17),a.Yb("ngModelChange",(function(e){return t.game.status=e})),a.uc(64,p,2,2,"ion-select-option",6),a.Pb(),a.Qb(65,"div",7),a.vc(66),a.Pb(),a.Pb(),a.Qb(67,"ion-button",18),a.vc(68,"Guardar"),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.yb(12),a.gc("ngModel",t.game.l_team),a.yb(1),a.gc("ngForOf",t.teams),a.yb(2),a.wc(t.serviceGame.errorsForm.get("l_team")),a.yb(4),a.gc("ngModel",t.game.v_team),a.yb(1),a.gc("ngForOf",t.teams),a.yb(2),a.wc(t.serviceGame.errorsForm.get("v_team")),a.yb(1),a.gc("ngIf",t.game.other_team),a.yb(6),a.gc("ngModel",t.game.l_goals),a.yb(1),a.gc("ngForOf",t.numbGoals),a.yb(2),a.wc(t.serviceGame.errorsForm.get("l_goals")),a.yb(4),a.gc("ngModel",t.game.v_goals),a.yb(1),a.gc("ngForOf",t.numbGoals),a.yb(2),a.wc(t.serviceGame.errorsForm.get("v_goals")),a.yb(4),a.gc("ngModel",t.game.time),a.yb(4),a.gc("ngModel",t.game.location),a.yb(2),a.wc(t.serviceGame.errorsForm.get("location")),a.yb(4),a.gc("ngModel",t.game.description),a.yb(2),a.wc(t.serviceGame.errorsForm.get("description")),a.yb(4),a.gc("ngModel",t.game.date),a.yb(4),a.gc("ngModel",t.game.status),a.yb(1),a.gc("ngForOf",t.status),a.yb(2),a.wc(t.serviceGame.errorsForm.get("status")))},directives:[b.x,b.jb,b.hb,b.j,b.i,b.y,b.r,d.i,d.e,d.f,b.D,b.G,b.W,b.ub,d.d,d.g,u.k,u.l,b.s,b.C,b.vb,b.X],styles:[""]}),e})()},rLe3:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class e{constructor(){}listAddLast(e,t){e.push(t)}listAddFirst(e,t){e.unshift(t)}listUpdate(e,t,i){let n=this.findIndexList(e,t);n>=0&&(e[n]=i)}listDelete(e,t){let i=this.findIndexList(e,t);i>=0&&e.splice(i,1)}findList(e,t){return e.find(e=>e.id===t)}findIndexList(e,t){return e.findIndex(e=>e.id===t)}updateAttribustesObject(e,t,i=[]){console.log("update attributes");for(let n of i)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);