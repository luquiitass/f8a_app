!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{PEpV:function(t,i,o){"use strict";o.d(i,"a",(function(){return Q}));var a=o("mrSG"),s=o("8xVP"),r=o("rBWs"),c=o("fXoL"),b=o("G/jy"),l=o("vuFD"),u=o("TEn/"),g=o("6/gD"),m=o("3Pt+"),d=o("ofXK");function v(e,t){if(1&e&&(c.Qb(0,"ion-select-option",19),c.vc(1),c.Pb()),2&e){var n=t.$implicit;c.gc("value",n.id),c.yb(1),c.wc(n.name)}}function f(e,t){if(1&e&&(c.Qb(0,"ion-select-option",19),c.vc(1),c.Pb()),2&e){var n=t.$implicit;c.gc("value",n.id),c.yb(1),c.wc(n.name)}}function h(e,t){if(1&e){var n=c.Rb();c.Qb(0,"div"),c.Qb(1,"ion-item"),c.Qb(2,"ion-label",4),c.vc(3,"Otro Equipo"),c.Pb(),c.Qb(4,"ion-input",20),c.Yb("ngModelChange",(function(e){return c.oc(n),c.ac().game.other_team=e})),c.Pb(),c.Pb(),c.Qb(5,"div",7),c.vc(6),c.Pb(),c.Qb(7,"ion-button",21),c.Yb("click",(function(){return c.oc(n),c.ac().newTeam()})),c.vc(8,"Nuevo equipo"),c.Pb(),c.Pb()}if(2&e){var i=c.ac();c.yb(4),c.gc("ngModel",i.game.other_team),c.yb(2),c.wc(i.serviceGame.errorsForm.get("other_team"))}}function p(e,t){if(1&e&&(c.Qb(0,"ion-select-option",19),c.vc(1),c.Pb()),2&e){var n=t.$implicit;c.gc("value",n),c.yb(1),c.wc(n)}}function P(e,t){if(1&e&&(c.Qb(0,"ion-select-option",19),c.vc(1),c.Pb()),2&e){var n=t.$implicit;c.gc("value",n),c.yb(1),c.wc(n)}}function y(e,t){if(1&e&&(c.Qb(0,"ion-select-option",19),c.vc(1),c.Pb()),2&e){var n=t.$implicit;c.gc("value",n),c.yb(1),c.wc(n)}}var Q=function(){var t=function(){function t(n,i,o,a,r,c){var b;e(this,t),this.request=n,this.dialogService=i,this.viewCtrl=o,this.photoService=a,this.modalController=c,this.teams=[],this.numbGoals=[],this.customDayShortNames=["s\xf8n"],this.status=["Pendiente","Suspendido","Jugado","Created"],this.myDateFilter=function(e){return 6==e.getDay()},this.serviceGame=new s.a("Game",n),this.serviceTeam=new s.a("Team",n),this.id=r.get("id"),this.toDate=null!==(b=r.get("date"))&&void 0!==b?b:new Date,console.log("date",this.toDate)}return n(t,[{key:"ngOnInit",value:function(){var e=this;this.serviceTeam.api_function("getAllTeamsSelect").subscribe((function(t){t.data&&(e.teams=t.data,console.log("teams -> ",e.teams))}));for(var t=0;t<=30;t++)this.numbGoals.push(t);this.initObject()}},{key:"initObject",value:function(){var e=this;this.game={l_team:"",v_team:"",l_goals:0,v_goals:0,time:"15:00",date:this.toDate,location:"",description:"",status:"Pendiente"},this.id&&this.serviceGame.api_find(this.id).subscribe((function(t){"success"==t.status&&(e.game=t.Game)}))}},{key:"submit",value:function(){var e=this;this.game.id?this.serviceGame.api_update(this.game).subscribe((function(t){var n;"success"==t.status&&(e.dialogService.showToast(null!==(n=t.msjSuccess)&&void 0!==n?n:"Registrado"),console.log(t),e.dismiss(t.Game))})):this.serviceGame.api_create(this.game).subscribe((function(t){var n;"success"==t.status&&(e.dialogService.showToast(null!==(n=t.msjSuccess)&&void 0!==n?n:"Registrado"),e.dismiss(t.Game))}))}},{key:"dismiss",value:function(e){this.viewCtrl.dismiss({game:e})}},{key:"close",value:function(){this.viewCtrl.dismiss()}},{key:"print",value:function(){console.log(this.game)}},{key:"newTeam",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:r.a});case 2:return(t=e.sent).onDidDismiss().then((function(e){e.data.team&&n.teams.push(e.data.team)})),e.next=6,t.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Lb(b.a),c.Lb(l.a),c.Lb(u.nb),c.Lb(g.a),c.Lb(u.pb),c.Lb(u.nb))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-game-form"]],decls:69,vars:22,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup"],["position","floating"],["name","l_team",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],["name","v_team",3,"ngModel","ngModelChange"],[4,"ngIf"],[1,"goals"],["name","l_goals",3,"ngModel","ngModelChange"],["name","v_goals",3,"ngModel","ngModelChange"],["displayFormat","HH:mm ","name","time",3,"ngModel","ngModelChange"],["type","text","name","location",3,"ngModel","ngModelChange"],["type","text","name","description",3,"ngModel","ngModelChange"],["name","date","displayFormat","YYYY-MM-DD",3,"ngModel","ngModelChange"],["name","status",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["type","text","name","other_team",3,"ngModel","ngModelChange"],["size","sm",3,"click"]],template:function(e,t){1&e&&(c.Qb(0,"ion-header"),c.Qb(1,"ion-toolbar"),c.Qb(2,"ion-title"),c.vc(3,"Partido"),c.Pb(),c.Qb(4,"ion-buttons",0),c.Qb(5,"ion-button",1),c.Yb("click",(function(){return t.close()})),c.Mb(6,"ion-icon",2),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(7,"ion-content"),c.Qb(8,"form",3),c.Yb("ngSubmit",(function(){return t.submit()}))("keyup",(function(){return t.serviceGame.errorsForm.clear()})),c.Qb(9,"ion-item"),c.Qb(10,"ion-label",4),c.vc(11,"Equipo local"),c.Pb(),c.Qb(12,"ion-select",5),c.Yb("ngModelChange",(function(e){return t.game.l_team=e})),c.uc(13,v,2,2,"ion-select-option",6),c.Pb(),c.Qb(14,"div",7),c.vc(15),c.Pb(),c.Pb(),c.Qb(16,"ion-item"),c.Qb(17,"ion-label",4),c.vc(18,"Equipo Vicitante"),c.Pb(),c.Qb(19,"ion-select",8),c.Yb("ngModelChange",(function(e){return t.game.v_team=e})),c.uc(20,f,2,2,"ion-select-option",6),c.Pb(),c.Qb(21,"div",7),c.vc(22),c.Pb(),c.Pb(),c.uc(23,h,9,2,"div",9),c.Mb(24,"br"),c.Qb(25,"div",10),c.Qb(26,"ion-item"),c.Qb(27,"ion-label",4),c.vc(28,"Goles L"),c.Pb(),c.Qb(29,"ion-select",11),c.Yb("ngModelChange",(function(e){return t.game.l_goals=e})),c.uc(30,p,2,2,"ion-select-option",6),c.Pb(),c.Qb(31,"div",7),c.vc(32),c.Pb(),c.Pb(),c.Qb(33,"ion-item"),c.Qb(34,"ion-label",4),c.vc(35,"Goles V"),c.Pb(),c.Qb(36,"ion-select",12),c.Yb("ngModelChange",(function(e){return t.game.v_goals=e})),c.uc(37,P,2,2,"ion-select-option",6),c.Pb(),c.Qb(38,"div",7),c.vc(39),c.Pb(),c.Pb(),c.Pb(),c.Qb(40,"ion-item"),c.Qb(41,"ion-label"),c.vc(42,"HH:mm"),c.Pb(),c.Qb(43,"ion-datetime",13),c.Yb("ngModelChange",(function(e){return t.game.time=e})),c.Pb(),c.Pb(),c.Qb(44,"ion-item"),c.Qb(45,"ion-label",4),c.vc(46,"Lugar"),c.Pb(),c.Qb(47,"ion-input",14),c.Yb("ngModelChange",(function(e){return t.game.location=e})),c.Pb(),c.Pb(),c.Qb(48,"div",7),c.vc(49),c.Pb(),c.Qb(50,"ion-item"),c.Qb(51,"ion-label",4),c.vc(52,"Comentario"),c.Pb(),c.Qb(53,"ion-input",15),c.Yb("ngModelChange",(function(e){return t.game.description=e})),c.Pb(),c.Pb(),c.Qb(54,"div",7),c.vc(55),c.Pb(),c.Qb(56,"ion-item"),c.Qb(57,"ion-label"),c.vc(58,"Fecha"),c.Pb(),c.Qb(59,"ion-datetime",16),c.Yb("ngModelChange",(function(e){return t.game.date=e})),c.Pb(),c.Pb(),c.Qb(60,"ion-item"),c.Qb(61,"ion-label",4),c.vc(62,"Estado"),c.Pb(),c.Qb(63,"ion-select",17),c.Yb("ngModelChange",(function(e){return t.game.status=e})),c.uc(64,y,2,2,"ion-select-option",6),c.Pb(),c.Qb(65,"div",7),c.vc(66),c.Pb(),c.Pb(),c.Qb(67,"ion-button",18),c.vc(68,"Guardar"),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.yb(12),c.gc("ngModel",t.game.l_team),c.yb(1),c.gc("ngForOf",t.teams),c.yb(2),c.wc(t.serviceGame.errorsForm.get("l_team")),c.yb(4),c.gc("ngModel",t.game.v_team),c.yb(1),c.gc("ngForOf",t.teams),c.yb(2),c.wc(t.serviceGame.errorsForm.get("v_team")),c.yb(1),c.gc("ngIf",t.game.other_team),c.yb(6),c.gc("ngModel",t.game.l_goals),c.yb(1),c.gc("ngForOf",t.numbGoals),c.yb(2),c.wc(t.serviceGame.errorsForm.get("l_goals")),c.yb(4),c.gc("ngModel",t.game.v_goals),c.yb(1),c.gc("ngForOf",t.numbGoals),c.yb(2),c.wc(t.serviceGame.errorsForm.get("v_goals")),c.yb(4),c.gc("ngModel",t.game.time),c.yb(4),c.gc("ngModel",t.game.location),c.yb(2),c.wc(t.serviceGame.errorsForm.get("location")),c.yb(4),c.gc("ngModel",t.game.description),c.yb(2),c.wc(t.serviceGame.errorsForm.get("description")),c.yb(4),c.gc("ngModel",t.game.date),c.yb(4),c.gc("ngModel",t.game.status),c.yb(1),c.gc("ngForOf",t.status),c.yb(2),c.wc(t.serviceGame.errorsForm.get("status")))},directives:[u.x,u.jb,u.hb,u.j,u.i,u.y,u.r,m.i,m.e,m.f,u.D,u.G,u.W,u.ub,m.d,m.g,d.k,d.l,u.s,u.C,u.vb,u.X],styles:[""]}),t}()},j1ZV:function(t,n,i){"use strict";i.d(n,"a",(function(){return l}));var o=i("ofXK"),a=i("TEn/"),s=i("tyNb"),r=i("6g0+"),c=i("3Pt+"),b=i("fXoL"),l=function(){var t=function t(){e(this,t)};return t.\u0275mod=b.Jb({type:t}),t.\u0275inj=b.Ib({factory:function(e){return new(e||t)},imports:[[o.b,a.kb.forRoot(),c.a,s.j,r.b]]}),t}()},xj5e:function(t,i,o){"use strict";o.d(i,"a",(function(){return M}));var a=o("mrSG"),s=o("fXoL"),r=o("PEpV"),c=o("8xVP"),b=o("tyNb"),l=o("y/q6"),u=o("vuFD"),g=o("TEn/"),m=o("2Rin"),d=o("rLe3"),v=o("G/jy"),f=o("ofXK");function h(e,t){if(1&e&&(s.Qb(0,"ion-text",13),s.vc(1),s.Pb()),2&e){var n=s.ac(2);s.yb(1),s.wc("Pendiente"==n.game.status?"Pr\xf3ximo partido":"Ultimo partido")}}function p(e,t){if(1&e&&(s.Qb(0,"ion-text",14),s.vc(1),s.Pb()),2&e){var n=s.ac(2);s.yb(1),s.wc(n.game.l_goals)}}function P(e,t){if(1&e&&(s.Qb(0,"ion-text",14),s.vc(1),s.Pb()),2&e){var n=s.ac(2);s.yb(1),s.wc(n.game.v_goals)}}function y(e,t){if(1&e&&(s.Qb(0,"div",15),s.Qb(1,"b"),s.vc(2,"Motivo: "),s.Pb(),s.vc(3),s.Pb()),2&e){var n=s.ac(2);s.yb(3),s.xc(" ",n.game.description," ")}}function Q(e,t){if(1&e){var n=s.Rb();s.Qb(0,"div",16),s.Qb(1,"ion-buttons",14),s.Qb(2,"ion-button",17),s.Yb("click",(function(){s.oc(n);var e=s.ac(2);return e.showEdit(e.game)})),s.Mb(3,"ion-icon",18),s.Pb(),s.Qb(4,"ion-button",17),s.Yb("click",(function(){s.oc(n);var e=s.ac(2);return e.confirmDelete(e.game)})),s.Mb(5,"ion-icon",19),s.Pb(),s.Pb(),s.Pb()}}function w(e,t){if(1&e&&(s.Qb(0,"div",1),s.uc(1,h,2,1,"ion-text",2),s.Qb(2,"div",3),s.Qb(3,"div",4),s.Qb(4,"div"),s.Qb(5,"ion-item"),s.Qb(6,"ion-avatar",5),s.Mb(7,"ion-img",6),s.Pb(),s.Qb(8,"ion-label"),s.vc(9),s.Pb(),s.uc(10,p,2,1,"ion-text",7),s.Pb(),s.Pb(),s.Qb(11,"div"),s.Qb(12,"ion-item"),s.Qb(13,"ion-avatar",5),s.Mb(14,"ion-img",6),s.Pb(),s.Qb(15,"ion-label"),s.vc(16),s.Pb(),s.uc(17,P,2,1,"ion-text",7),s.Pb(),s.Pb(),s.Pb(),s.Qb(18,"div",8),s.Qb(19,"ion-badge",9),s.vc(20),s.Pb(),s.Qb(21,"div"),s.vc(22),s.Pb(),s.Qb(23,"div",10),s.vc(24),s.Pb(),s.Pb(),s.Mb(25,"ion-ripple-effect"),s.Pb(),s.uc(26,y,4,1,"div",11),s.uc(27,Q,6,0,"div",12),s.Pb()),2&e){var n=s.ac();s.yb(1),s.gc("ngIf",n.withTitle),s.yb(1),s.gc("routerLink",n.routerGoTo(n.game)),s.yb(5),s.gc("src",n.game.team_l.shield?n.game.team_l.shield.urlCompleteThumb:"assets/images/esc.png"),s.yb(2),s.wc(n.game.team_l.name),s.yb(1),s.gc("ngIf","Pendiente"!=n.game.status),s.yb(4),s.gc("src",n.game.team_v.shield?n.game.team_v.shield.urlCompleteThumb:"assets/images/esc.png"),s.yb(2),s.wc(n.game.team_v.name),s.yb(1),s.gc("ngIf","Pendiente"!=n.game.status),s.yb(2),s.gc("color",n.colorStatus),s.yb(1),s.wc(n.game.status),s.yb(2),s.wc(n.util.setFormatMoment(n.game.date,"DD/M/YYYY")),s.yb(2),s.wc(n.util.formatHours(n.game.time)),s.yb(2),s.gc("ngIf","Suspendido"==n.game.status&&""!=n.game.description),s.yb(1),s.gc("ngIf",n.userAuth.isAdmin())}}var M=function(){var t=function(){function t(n,i,o,a,r,c,b,l){e(this,t),this.router=n,this.userAuth=i,this.dialogService=o,this.modalController=a,this.dialog=r,this.util=c,this.utilArray=b,this.request=l,this.withTitle=!0,this.onDeleteGame=new s.n,this.onUpdateGame=new s.n}return n(t,[{key:"ngOnInit",value:function(){console.log("withTitle",this.withTitle),this.modelGame=new c.a("Game",this.request)}},{key:"routerGoTo",value:function(e){return"Pendiente"==e.status?"/games/profile/"+e.id:"/results/profile/"+e.id}},{key:"showEdit",value:function(e){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var n,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:r.a,componentProps:{id:e.id}});case 2:return(n=t.sent).onDidDismiss().then((function(e){var t=e.data.game;t&&(i.game=t)})),t.next=6,n.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(e){var t=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este partido",(function(n){t.delete(e)}))}},{key:"delete",value:function(e){var t=this;this.modelGame.api_delete(e.id).subscribe((function(n){console.log(n),"success"==n.status&&(t.dialog.showToast("Partido Eliminado",null,"success"),t.onDeleteGame&&t.onDeleteGame.emit(e))}))}},{key:"colorStatus",get:function(){if(this.game)switch(this.game.status){case"Pendiente":return"secondary";case"Jugado":return"success";case"Suspendido":return"danger"}return"default"}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.Lb(b.g),s.Lb(l.a),s.Lb(u.a),s.Lb(g.nb),s.Lb(u.a),s.Lb(m.a),s.Lb(d.a),s.Lb(v.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-old-next-game"]],inputs:{game:"game",withTitle:"withTitle"},outputs:{onDeleteGame:"onDeleteGame",onUpdateGame:"onUpdateGame"},decls:1,vars:1,consts:[["class","content ",4,"ngIf"],[1,"content"],["class","desc",4,"ngIf"],[1,"content-temas","bg-l2","ion-activatable","ripple-parent",3,"routerLink"],[1,"teams"],["slot","start",1,"esc"],[1,"esc",3,"src"],["slot","end",4,"ngIf"],[1,"center","ion-text-center","date"],[1,"status",3,"color"],[1,"hs"],["class","det",4,"ngIf"],["class","ion-text-right",4,"ngIf"],[1,"desc"],["slot","end"],[1,"det"],[1,"ion-text-right"],[3,"click"],["slot","icon-only","name","create-outline"],["name","trash-outline"]],template:function(e,t){1&e&&s.uc(0,w,28,14,"div",0),2&e&&s.gc("ngIf",t.game)},directives:[f.l,g.tb,b.h,g.D,g.e,g.z,g.G,g.h,g.Q,g.eb,g.j,g.i,g.y],styles:[".content[_ngcontent-%COMP%]{padding:10px}.content-temas[_ngcontent-%COMP%]{display:flex;border-bottom-right-radius:20px;border-top-right-radius:20px}.teams[_ngcontent-%COMP%]{width:80%}.esc[_ngcontent-%COMP%]{width:20px;height:20px}.date[_ngcontent-%COMP%]{width:20%;font-size:small;color:rgba(244,243,243,.7686274509803922)}.hs[_ngcontent-%COMP%]{margin-top:5px}.desc[_ngcontent-%COMP%]{font-size:small;background:#171717;color:rgba(241,246,245,.6784313725490196);padding:6px 15px 3px 13px;border-top-left-radius:25px;border-top-right-radius:10px}.status[_ngcontent-%COMP%]{font-size:xx-small;margin-bottom:10px}.det[_ngcontent-%COMP%]{font-size:small;background:rgba(199,104,104,.4196078431372549);padding:5px;border-bottom-left-radius:10px;border-bottom-right-radius:10px}"]}),t}()}}])}();