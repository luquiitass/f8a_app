(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Q27":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("mrSG"),o=n("9suA"),r=n("fXoL"),a=n("TEn/"),c=n("tyNb"),s=n("ofXK"),u=function(t){function e(e,n,i,o){var r=t.call(this,o,e)||this;return r.viewCtrl=e,r.router=n,r.navParams=i,r.id=i.get("id"),r}return Object(i.c)(e,t),e.prototype.ngOnInit=function(){},e.prototype.close=function(){this.viewCtrl.dismiss()},e.prototype.initObject=function(){},e.prototype.goPayment=function(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()},e.\u0275fac=function(t){return new(t||e)(r.Lb(a.nb),r.Lb(c.g),r.Lb(a.pb),r.Lb(s.n))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-alert-create-team"]],features:[r.vb],decls:33,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top","ionic-text-center"],[1,"ion-float-right",3,"click"]],template:function(t,e){1&t&&(r.Qb(0,"ion-header"),r.Qb(1,"ion-toolbar"),r.Qb(2,"ion-title"),r.vc(3,"Suscripci\xf3n pendiente"),r.Pb(),r.Qb(4,"ion-buttons",0),r.Qb(5,"ion-button",1),r.Yb("click",(function(){return e.close()})),r.Mb(6,"ion-icon",2),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Qb(7,"ion-content"),r.Qb(8,"ion-card"),r.Qb(9,"ion-card-content"),r.Qb(10,"ion-text",3),r.vc(11," Para que los administradores de este equipo puedan crear y modificar : "),r.Pb(),r.Qb(12,"ul"),r.Qb(13,"li"),r.vc(14,"Jugadores"),r.Pb(),r.Qb(15,"li"),r.vc(16,"Redes sociales"),r.Pb(),r.Qb(17,"li"),r.vc(18,"Canchas"),r.Pb(),r.Qb(19,"li"),r.vc(20,"Nombre"),r.Pb(),r.Qb(21,"li"),r.vc(22,"Fotos de portada y escudo"),r.Pb(),r.Qb(23,"li"),r.vc(24,"Sucesos de partidos"),r.Pb(),r.Qb(25,"li"),r.vc(26,"Mas..."),r.Pb(),r.Pb(),r.Qb(27,"ion-text",3),r.vc(28," Es necesario que el equipo se encuentre subscrito. "),r.Pb(),r.Mb(29,"br"),r.Qb(30,"div",4),r.Qb(31,"ion-button",5),r.Yb("click",(function(){return e.goPayment()})),r.vc(32," Subscribir equipo"),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb())},directives:[a.x,a.jb,a.hb,a.j,a.i,a.y,a.r,a.k,a.l,a.eb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),e}(o.a)},ZETu:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("mrSG"),o=n("8xVP"),r=n("j/D2"),a=n("fXoL"),c=n("G/jy"),s=n("vuFD"),u=n("TEn/"),b=n("y/q6"),d=n("qgph"),l=n("ofXK"),v=n("tyNb"),m=n("3Pt+");function f(t,e){if(1&t&&(a.Qb(0,"ion-col",9),a.Qb(1,"ion-text",10),a.vc(2),a.Pb(),a.Pb()),2&t){var n=a.ac(2);a.yb(2),a.xc(" ",n.team_l.name," ")}}function p(t,e){if(1&t&&(a.Qb(0,"ion-col",11),a.Qb(1,"ion-text",10),a.vc(2),a.Pb(),a.Pb()),2&t){var n=a.ac(2);a.yb(2),a.xc(" ",n.team_v.name," ")}}function g(t,e){1&t&&(a.Qb(0,"ion-list-header",10),a.Qb(1,"ion-label"),a.vc(2,"Sin Sucesos"),a.Pb(),a.Pb())}function h(t,e){if(1&t&&a.Mb(0,"img",17),2&t){var n=a.ac().$implicit;a.ic("src","assets/images/",n.type_event.icon,"",a.pc)}}function y(t,e){if(1&t){var n=a.Rb();a.Qb(0,"ion-buttons",18),a.Qb(1,"ion-button",19),a.Yb("click",(function(){a.oc(n);var t=a.ac(),e=t.$implicit,i=t.index;return a.ac(2).confirmDelete(e,i)})),a.Mb(2,"ion-icon",20),a.Pb(),a.Pb()}}var _=function(t){return{"ion-text-end":t}};function P(t,e){if(1&t&&(a.Qb(0,"ion-item",12),a.Qb(1,"ion-label"),a.Qb(2,"h3",13),a.uc(3,h,1,1,"img",14),a.vc(4),a.Qb(5,"b"),a.vc(6),a.Pb(),a.Qb(7,"a",15),a.vc(8),a.Pb(),a.Pb(),a.Pb(),a.uc(9,y,3,0,"ion-buttons",16),a.Pb()),2&t){var n=e.$implicit,i=a.ac(2);a.yb(1),a.Cb("",n.team.id==i.team_v.id?"item-v":""," ",n.team.id==i.team_l.id?"item-l":"",""),a.yb(1),a.gc("ngClass",a.jc(11,_,n.team.id==i.team_v.id)),a.yb(1),a.gc("ngIf",n.type_event.icon),a.yb(1),a.xc(" ",n.time,"\xb4 "),a.yb(2),a.xc("",n.type_event.name," "),a.yb(1),a.gc("routerLink","/player/profile/"+n.player.id),a.yb(1),a.xc(" ",n.player.name," "),a.yb(1),a.gc("ngIf",i.canEdit&&i.team_admin.id==n.team.id||i.twoTeam&&i.canEdit)}}function Q(t,e){if(1&t){var n=a.Rb();a.Qb(0,"ion-button",21),a.Yb("click",(function(){return a.oc(n),a.ac(2).addEvent()})),a.vc(1," Nuevo Suceso "),a.Pb()}}function w(t,e){if(1&t){var n=a.Rb();a.Qb(0,"ion-chip",24),a.Qb(1,"ion-label",25),a.vc(2," Eres el administrador de "),a.Qb(3,"b"),a.vc(4),a.Pb(),a.vc(5,", puedes administrar lo sucesos de tu equipo al activar la edici\xf3n. "),a.Pb(),a.Qb(6,"ion-toggle",26),a.Yb("ngModelChange",(function(t){return a.oc(n),a.ac(3).canEdit=t})),a.Pb(),a.Pb()}if(2&t){var i=a.ac(3);a.yb(4),a.xc("",i.team_admin.name," "),a.yb(2),a.gc("ngModel",i.canEdit)}}function M(t,e){if(1&t&&(a.Qb(0,"div",22),a.uc(1,w,7,2,"ion-chip",23),a.Pb()),2&t){var n=a.ac(2);a.yb(1),a.gc("ngIf",n.isAdmin)}}function x(t,e){if(1&t&&(a.Qb(0,"ion-card"),a.Qb(1,"ion-card-header",1),a.Qb(2,"ion-card-title"),a.vc(3,"Sucesos"),a.Pb(),a.Pb(),a.Qb(4,"ion-list"),a.Qb(5,"ion-grid"),a.Qb(6,"ion-row"),a.uc(7,f,3,1,"ion-col",2),a.uc(8,p,3,1,"ion-col",3),a.Pb(),a.Pb(),a.Mb(9,"div",4),a.uc(10,g,3,0,"ion-list-header",5),a.uc(11,P,10,13,"ion-item",6),a.Pb(),a.uc(12,Q,2,0,"ion-button",7),a.uc(13,M,2,1,"div",8),a.Pb()),2&t){var n=a.ac();a.yb(7),a.gc("ngIf",n.team_l),a.yb(1),a.gc("ngIf",n.team_v),a.yb(2),a.gc("ngIf",0==n.events.length),a.yb(1),a.gc("ngForOf",n.events),a.yb(1),a.gc("ngIf",n.canEdit),a.yb(1),a.gc("ngIf",n.team_admin)}}var O=function(){function t(t,e,n,i,r){this.requestService=t,this.dialog=e,this.modalController=n,this.authUser=i,this.paymentTeamService=r,this.events=[],this.team_admin=null,this.canEdit=!1,this.twoTeam=!1,this.gameModel=new o.a("Game",t),this.eventModel=new o.a("Event",t),console.log(this.game_id)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(){var t=this;this.gameModel.api_functionModel(this.game_id,"dataEvent").subscribe((function(e){"success"==e.status&&(t.game=e.data.game,t.events=e.data.events,t.team_l=e.data.team_l,t.team_v=e.data.team_v,t.verificationAdmin()),console.log(t.events)}))},t.prototype.verificationAdmin=function(){console.log("verificationAdmin"),this.authUser.isAdminOfTeam(this.team_l.id)||this.authUser.isAdminOfTeam(this.team_v.id)?(this.isAdmin=!0,this.authUser.isAdminOfTeam(this.team_l.id)&&(this.team_admin=this.team_l),this.authUser.isAdminOfTeam(this.team_v.id)&&(this.team_admin=this.team_v),this.authUser.isAdminOfTeam(this.team_l.id)&&this.authUser.isAdminOfTeam(this.team_v.id)&&(this.twoTeam=!0)):this.team_admin=null},t.prototype.confirmDelete=function(t,e){var n=this;this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este Suceso",(function(i){n.delete(t,e)}))},t.prototype.delete=function(t,e){return Object(i.b)(this,void 0,void 0,(function(){var n=this;return Object(i.d)(this,(function(i){switch(i.label){case 0:return this.paymentTeamService.setTeam(t.team),this.paymentTeamService.noPaid()?[4,this.paymentTeamService.showAlert()]:[3,2];case 1:return i.sent(),[2];case 2:return this.eventModel.api_delete(t.id).subscribe((function(t){console.log(t),"success"==t.status&&(n.dialog.showToast("Suceso Eliminado",null,"success"),n.events.splice(e,1))})),[2]}}))}))},t.prototype.addEvent=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e=this;return Object(i.d)(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:r.a,componentProps:{game_id:this.game_id,team_admin:this.team_admin,twoTeam:this.twoTeam,events:this.events,game:this.game}})];case 1:return(t=n.sent()).onDidDismiss().then((function(t){t.data&&t.data.event&&e.events.push(t.data.event)})),[4,t.present()];case 2:return[2,n.sent()]}}))}))},t.\u0275fac=function(e){return new(e||t)(a.Lb(c.a),a.Lb(s.a),a.Lb(u.nb),a.Lb(b.a),a.Lb(d.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-event-list"]],inputs:{game_id:"game_id",isAdmin:"isAdmin"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-l1"],["class","ion-text-start col-l",4,"ngIf"],["class","ion-text-end col-v",4,"ngIf"],[1,"separator"],["color","light",4,"ngIf"],["class","bg-l0",4,"ngFor","ngForOf"],["fill","outline","expand","block",3,"click",4,"ngIf"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-start","col-l"],["color","light"],[1,"ion-text-end","col-v"],[1,"bg-l0"],[3,"ngClass"],["width","20px",3,"src",4,"ngIf"],["routerDirection","forward",3,"routerLink"],["slot","start",4,"ngIf"],["width","20px",3,"src"],["slot","start"],[3,"click"],["name","trash-outline"],["fill","outline","expand","block",3,"click"],[1,"ion-text-center"],["class","chip-admin","color","secondary",4,"ngIf"],["color","secondary",1,"chip-admin"],[1,"msj-is-admin"],[3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&a.uc(0,x,14,6,"ion-card",0),2&t&&a.gc("ngIf",e.events.length&&e.team_l&&e.team_v||e.isAdmin)},directives:[l.l,u.k,u.m,u.o,u.H,u.w,u.S,l.k,u.q,u.eb,u.I,u.G,u.D,l.j,v.i,u.tb,u.j,u.i,u.y,u.p,u.ib,u.c,m.d,m.g],styles:["ion-col[_ngcontent-%COMP%]{font-size:large;color:rgba(0,0,0,.7019607843137254);padding:7px}.col-v[_ngcontent-%COMP%]{border-top-right-radius:5px;border-right:4px solid var(--color-v)}.col-l[_ngcontent-%COMP%]{border-top-left-radius:5px}.col-l[_ngcontent-%COMP%], .item-l[_ngcontent-%COMP%]{border-left:4px solid var(--color-l)}.item-l[_ngcontent-%COMP%]{padding-left:5px}.item-v[_ngcontent-%COMP%]{border-right:4px solid var(--color-v);padding-right:5px}"]}),t}()},"j/D2":function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var i=n("mrSG"),o=n("8xVP"),r=n("9suA"),a=n("fXoL"),c=n("TEn/"),s=n("G/jy"),u=n("vuFD"),b=n("rLe3"),d=n("qgph"),l=n("ofXK"),v=n("3Pt+");function m(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.vc(1),a.Pb()),2&t){var n=e.$implicit;a.gc("value",n.id),a.yb(1),a.wc(n.name)}}function f(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.vc(1),a.Pb()),2&t){var n=e.$implicit;a.gc("value",n.id),a.yb(1),a.wc(n.name)}}function p(t,e){if(1&t){var n=a.Rb();a.Qb(0,"ion-item"),a.Qb(1,"ion-label",5),a.vc(2,"Equipo"),a.Pb(),a.Qb(3,"ion-select",14),a.Yb("ngModelChange",(function(t){return a.oc(n),a.ac(2).event.team_id=t})),a.uc(4,f,2,2,"ion-select-option",7),a.Pb(),a.Qb(5,"div",8),a.vc(6),a.Pb(),a.Pb()}if(2&t){var i=a.ac(2);a.yb(3),a.gc("ngModel",i.event.team_id),a.yb(1),a.gc("ngForOf",i.dataEvent.teams),a.yb(2),a.wc(i.eventModel.errorsForm.get("team_id"))}}function g(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.vc(1),a.Pb()),2&t){var n=e.$implicit;a.gc("value",n.id),a.yb(1),a.wc(n.name)}}function h(t,e){if(1&t){var n=a.Rb();a.Qb(0,"form",4),a.Yb("ngSubmit",(function(){return a.oc(n),a.ac().submit()}))("keyup",(function(){return a.oc(n),a.ac().eventModel.errorsForm.clear()})),a.Qb(1,"ion-item"),a.Qb(2,"ion-label",5),a.vc(3,"Tipo de Evento"),a.Pb(),a.Qb(4,"ion-select",6),a.Yb("ngModelChange",(function(t){return a.oc(n),a.ac().event.type_event_id=t})),a.uc(5,m,2,2,"ion-select-option",7),a.Pb(),a.Qb(6,"div",8),a.vc(7),a.Pb(),a.Pb(),a.uc(8,p,7,3,"ion-item",9),a.Qb(9,"ion-item"),a.Qb(10,"ion-label",5),a.vc(11,"Jugador"),a.Pb(),a.Qb(12,"ion-select",10),a.Yb("ngModelChange",(function(t){return a.oc(n),a.ac().event.player_id=t})),a.uc(13,g,2,2,"ion-select-option",7),a.Pb(),a.Qb(14,"div",8),a.vc(15),a.Pb(),a.Pb(),a.Qb(16,"ion-item"),a.Qb(17,"ion-label",5),a.vc(18,"Tiempo"),a.Pb(),a.Qb(19,"ion-input",11),a.Yb("ngModelChange",(function(t){return a.oc(n),a.ac().event.time=t})),a.Pb(),a.Pb(),a.Qb(20,"div",8),a.vc(21),a.Pb(),a.Qb(22,"ion-button",12),a.vc(23,"Guardar"),a.Pb(),a.Pb()}if(2&t){var i=a.ac();a.yb(4),a.gc("ngModel",i.event.type_event_id),a.yb(1),a.gc("ngForOf",i.dataEvent.types_events),a.yb(2),a.wc(i.eventModel.errorsForm.get("type_event_id")),a.yb(1),a.gc("ngIf",!i.team_admin||i.twoTeam),a.yb(4),a.gc("ngModel",i.event.player_id),a.yb(1),a.gc("ngForOf",i.getPlayers()),a.yb(2),a.wc(i.eventModel.errorsForm.get("player_id")),a.yb(4),a.gc("ngModel",i.event.time),a.yb(2),a.wc(i.eventModel.errorsForm.get("time"))}}var y=function(t){function e(e,n,i,r,a,c,s){var u=t.call(this,s,r)||this;return u.navParams=e,u.requestService=n,u.dialogService=i,u.viewCtrl=r,u.utilArray=a,u.paymentTeamService=c,u.twoTeam=!1,u.events=[],u.myDateFilter=function(t){return 6==t.getDay()},u.gameModel=new o.a("Game",n),u.eventModel=new o.a("Event",n),u.game_id=e.get("game_id"),u.twoTeam=e.get("twoTeam"),u.id=e.get("id"),u.team_admin=e.get("team_admin"),u.events=e.get("events"),u.game=e.get("game"),u}return Object(i.c)(e,t),e.prototype.initObject=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),this.loadEvent(),[2]}}))}))},e.prototype.loadEvent=function(){this.id||(this.event={game_id:this.game_id,type_event_id:"",player_id:"",team_id:this.team_admin?this.team_admin.id:"",time:""})},e.prototype.init=function(){return Object(i.b)(this,void 0,void 0,(function(){var t=this;return Object(i.d)(this,(function(e){switch(e.label){case 0:return[4,this.eventModel.api_function("dataEventCreate",{game_id:this.game_id}).subscribe((function(e){"success"==e.status&&(t.dataEvent=e.data,t.types_events=t.dataEvent.types_events),console.log("ty",t.types_events),console.log(t.dataEvent)}))];case 1:return e.sent(),[2]}}))}))},e.prototype.getPlayers=function(){var t=this.event.team_id;if(this.team_admin&&(t=this.event.team_id),t){var e=this.dataEvent.teams.find((function(e){return e.id===t}));if(e)return e.players}return[]},e.prototype.submit=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e,n=this;return Object(i.d)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,this.isValid()];case 1:return i.sent(),[3,3];case 2:return t=i.sent(),console.log(t),this.dialogService.showToast(t.message,"Error","danger"),[2];case 3:return e=this.game["team_"+this.getTeamType()],this.paymentTeamService.setTeam(e),this.paymentTeamService.noPaid()?[4,this.close()]:[3,6];case 4:return i.sent(),[4,this.paymentTeamService.showAlert()];case 5:return i.sent(),[2];case 6:return this.event.id?this.eventModel.api_update(this.event).subscribe((function(t){var e;"success"==t.status&&(n.dialogService.showToast(null!==(e=t.msjSuccess)&&void 0!==e?e:"Registrado"),console.log(t),n.dismiss(t.Event))})):this.eventModel.api_create(this.event).subscribe((function(t){var e;"success"==t.status&&(n.dialogService.showToast(null!==(e=t.msjSuccess)&&void 0!==e?e:"Registrado"),n.dismiss(t.Event))})),[2]}}))}))},e.prototype.dismiss=function(t){this.viewCtrl.dismiss({event:t})},e.prototype.close=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(t){switch(t.label){case 0:return[4,this.viewCtrl.dismiss()];case 1:return t.sent(),[2]}}))}))},e.prototype.print=function(){console.log(this.event)},e.prototype.isValid=function(){return Object(i.b)(this,void 0,void 0,(function(){var t,e,n,o=this;return Object(i.d)(this,(function(i){if(!this.event.team_id)throw new Error("Seleccione un equipo");if(!this.event.type_event_id)throw new Error("Seleccione un evento");if(t=this.getTeamType(),(e=this.utilArray.findList(this.types_events,this.event.type_event_id))&&"Gol"==e.name&&(n=this.game[t+"_goals"],this.events.filter((function(t){return t.team_id==o.event.team_id&&"Gol"==t.type_event.name})).length+1>n))throw new Error(0==n?"El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.":"No puede a\xf1adir m\xe1s de "+n+" goles para \xe9ste equipo en \xe9ste partido.");return[2,!0]}))}))},e.prototype.getTeamType=function(){var t="l";return this.game.v_team==this.event.team_id&&(t="v"),t},e.\u0275fac=function(t){return new(t||e)(a.Lb(c.pb),a.Lb(s.a),a.Lb(u.a),a.Lb(c.nb),a.Lb(b.a),a.Lb(d.a),a.Lb(l.n))},e.\u0275cmp=a.Fb({type:e,selectors:[["app-event-form"]],features:[a.vb],decls:9,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","type_event_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],[4,"ngIf"],["name","player_id",3,"ngModel","ngModelChange"],["type","number","name","time",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["name","team_id",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(a.Qb(0,"ion-header"),a.Qb(1,"ion-toolbar"),a.Qb(2,"ion-title"),a.vc(3,"Evento"),a.Pb(),a.Qb(4,"ion-buttons",0),a.Qb(5,"ion-button",1),a.Yb("click",(function(){return e.close()})),a.Mb(6,"ion-icon",2),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(7,"ion-content"),a.uc(8,h,24,9,"form",3),a.Pb()),2&t&&(a.yb(8),a.gc("ngIf",e.dataEvent))},directives:[c.x,c.jb,c.hb,c.j,c.i,c.y,c.r,l.l,v.i,v.e,v.f,c.D,c.G,c.W,c.ub,v.d,v.g,l.k,c.C,c.qb,c.X],styles:[""]}),e}(r.a)},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("ofXK"),o=n("TEn/"),r=n("tyNb"),a=n("6g0+"),c=n("3Pt+"),s=n("fXoL"),u=function(){function t(){}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.kb.forRoot(),c.a,r.j,a.b]]}),t}()},qgph:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),o=n("2Q27"),r=n("fXoL"),a=n("TEn/"),c=function(){function t(t){this.modalController=t,this.active=!0}return t.prototype.setTeam=function(t){this.team=t},t.prototype.isActive=function(){return this.active},t.prototype.noPaid=function(){return!!this.active&&!this.team.paid},t.prototype.showAlert=function(){return Object(i.b)(this,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(e){switch(e.label){case 0:return[4,this.modalController.create({component:o.a,componentProps:{id:this.team.id}})];case 1:return(t=e.sent()).onDidDismiss().then((function(t){console.log("return paid")})),[4,t.present()];case 2:return[2,e.sent()]}}))}))},t.\u0275fac=function(e){return new(e||t)(r.Ub(a.nb))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},rLe3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("mrSG"),o=n("fXoL"),r=function(){function t(){}return t.prototype.listAddLast=function(t,e){t.push(e)},t.prototype.listAddFirst=function(t,e){t.unshift(e)},t.prototype.listUpdate=function(t,e,n){var i=this.findIndexList(t,e);i>=0&&(t[i]=n)},t.prototype.listDelete=function(t,e){var n=this.findIndexList(t,e);n>=0&&t.splice(n,1)},t.prototype.findList=function(t,e){return t.find((function(t){return t.id===e}))},t.prototype.findIndexList=function(t,e){return t.findIndex((function(t){return t.id===e}))},t.prototype.updateAttribustesObject=function(t,e,n){var o,r;void 0===n&&(n=[]),console.log("update attributes");try{for(var a=Object(i.h)(n),c=a.next();!c.done;c=a.next()){var s=c.value;e.hasOwnProperty(s)&&(t[s]=e[s])}}catch(u){o={error:u}}finally{try{c&&!c.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return t},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}()}}]);