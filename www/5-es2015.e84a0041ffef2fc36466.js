(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2Q27":function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("9suA"),o=i("fXoL"),s=i("TEn/"),a=i("tyNb");let c=(()=>{class t extends n.a{constructor(t,e,i){super(),this.viewCtrl=t,this.router=e,this.navParams=i,this.id=i.get("id")}ngOnInit(){}close(){this.viewCtrl.dismiss()}initObject(){}goPayment(){this.router.navigateByUrl("/payment/create/"+this.id),this.close()}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(s.lb),o.Lb(a.g),o.Lb(s.nb))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-alert-create-team"]],features:[o.vb],decls:16,vars:0,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[1,"text"],[1,"ion-margin-top"],[1,"ion-float-right",3,"click"]],template:function(t,e){1&t&&(o.Qb(0,"ion-header"),o.Qb(1,"ion-toolbar"),o.Qb(2,"ion-title"),o.tc(3,"Pago pendiente"),o.Pb(),o.Qb(4,"ion-buttons",0),o.Qb(5,"ion-button",1),o.Yb("click",(function(){return e.close()})),o.Mb(6,"ion-icon",2),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Qb(7,"ion-content"),o.Qb(8,"ion-card"),o.Qb(9,"ion-card-content"),o.Qb(10,"ion-text",3),o.tc(11," Para que los administradores de este equipo puedan modificar los datos (Fotos,nombre, jugadores, redes, sucesos de partidos , etc) es necesario abonar $500 mensualmente. "),o.Pb(),o.Mb(12,"br"),o.Qb(13,"div",4),o.Qb(14,"ion-button",5),o.Yb("click",(function(){return e.goPayment()})),o.tc(15," Realizar el pago"),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb())},directives:[s.x,s.hb,s.fb,s.j,s.i,s.y,s.r,s.k,s.l,s.cb],styles:[".text[_ngcontent-%COMP%]{font-size:x-large}"]}),t})()},ZETu:function(t,e,i){"use strict";i.d(e,"a",(function(){return E}));var n=i("mrSG"),o=i("8xVP"),s=i("j/D2"),a=i("fXoL"),c=i("G/jy"),r=i("vuFD"),d=i("TEn/"),l=i("y/q6"),b=i("qgph"),m=i("ofXK"),u=i("tyNb"),h=i("3Pt+");function v(t,e){if(1&t&&(a.Qb(0,"ion-col",9),a.Qb(1,"ion-text",10),a.tc(2),a.Pb(),a.Pb()),2&t){const t=a.ac(2);a.yb(2),a.vc(" ",t.team_l.name," ")}}function f(t,e){if(1&t&&(a.Qb(0,"ion-col",11),a.Qb(1,"ion-text",10),a.tc(2),a.Pb(),a.Pb()),2&t){const t=a.ac(2);a.yb(2),a.vc(" ",t.team_v.name," ")}}function g(t,e){1&t&&(a.Qb(0,"ion-list-header",10),a.Qb(1,"ion-label"),a.tc(2,"Sin Sucesos"),a.Pb(),a.Pb())}function p(t,e){if(1&t&&a.Mb(0,"img",17),2&t){const t=a.ac().$implicit;a.hc("src","assets/images/",t.type_event.icon,"",a.oc)}}function y(t,e){if(1&t){const t=a.Rb();a.Qb(0,"ion-buttons",18),a.Qb(1,"ion-button",19),a.Yb("click",(function(){a.nc(t);const e=a.ac(),i=e.$implicit,n=e.index;return a.ac(2).confirmDelete(i,n)})),a.Mb(2,"ion-icon",20),a.Pb(),a.Pb()}}const _=function(t){return{"ion-text-end":t}};function P(t,e){if(1&t&&(a.Qb(0,"ion-item",12),a.Qb(1,"ion-label"),a.Qb(2,"h3",13),a.sc(3,p,1,1,"img",14),a.tc(4),a.Qb(5,"b"),a.tc(6),a.Pb(),a.Qb(7,"a",15),a.tc(8),a.Pb(),a.Pb(),a.Pb(),a.sc(9,y,3,0,"ion-buttons",16),a.Pb()),2&t){const t=e.$implicit,i=a.ac(2);a.yb(1),a.Cb("",t.team.id==i.team_v.id?"item-v":""," ",t.team.id==i.team_l.id?"item-l":"",""),a.yb(1),a.fc("ngClass",a.ic(11,_,t.team.id==i.team_v.id)),a.yb(1),a.fc("ngIf",t.type_event.icon),a.yb(1),a.vc(" ",t.time,"\xb4 "),a.yb(2),a.vc("",t.type_event.name," "),a.yb(1),a.fc("routerLink","/player/profile/"+t.player.id),a.yb(1),a.vc(" ",t.player.name," "),a.yb(1),a.fc("ngIf",i.canEdit&&i.team_admin.id==t.team.id||i.twoTeam&&i.canEdit)}}function Q(t,e){if(1&t){const t=a.Rb();a.Qb(0,"ion-button",21),a.Yb("click",(function(){return a.nc(t),a.ac(2).addEvent()})),a.tc(1," Nuevo Suceso "),a.Pb()}}function w(t,e){if(1&t){const t=a.Rb();a.Qb(0,"ion-chip",24),a.Qb(1,"ion-label",25),a.tc(2," Eres el administrador de "),a.Qb(3,"b"),a.tc(4),a.Pb(),a.tc(5,", puedes administrar lo sucesos de tu equipo al activar la edici\xf3n. "),a.Pb(),a.Qb(6,"ion-toggle",26),a.Yb("ngModelChange",(function(e){return a.nc(t),a.ac(3).canEdit=e})),a.Pb(),a.Pb()}if(2&t){const t=a.ac(3);a.yb(4),a.vc("",t.team_admin.name," "),a.yb(2),a.fc("ngModel",t.canEdit)}}function M(t,e){if(1&t&&(a.Qb(0,"div",22),a.sc(1,w,7,2,"ion-chip",23),a.Pb()),2&t){const t=a.ac(2);a.yb(1),a.fc("ngIf",t.isAdmin)}}function T(t,e){if(1&t&&(a.Qb(0,"ion-card"),a.Qb(1,"ion-card-header",1),a.Qb(2,"ion-card-title"),a.tc(3,"Sucesos"),a.Pb(),a.Pb(),a.Qb(4,"ion-list"),a.Qb(5,"ion-grid"),a.Qb(6,"ion-row"),a.sc(7,v,3,1,"ion-col",2),a.sc(8,f,3,1,"ion-col",3),a.Pb(),a.Pb(),a.Mb(9,"div",4),a.sc(10,g,3,0,"ion-list-header",5),a.sc(11,P,10,13,"ion-item",6),a.Pb(),a.sc(12,Q,2,0,"ion-button",7),a.sc(13,M,2,1,"div",8),a.Pb()),2&t){const t=a.ac();a.yb(7),a.fc("ngIf",t.team_l),a.yb(1),a.fc("ngIf",t.team_v),a.yb(2),a.fc("ngIf",0==t.events.length),a.yb(1),a.fc("ngForOf",t.events),a.yb(1),a.fc("ngIf",t.canEdit),a.yb(1),a.fc("ngIf",t.team_admin)}}let E=(()=>{class t{constructor(t,e,i,n,s){this.requestService=t,this.dialog=e,this.modalController=i,this.authUser=n,this.paymentTeamService=s,this.events=[],this.team_admin=null,this.canEdit=!1,this.twoTeam=!1,this.gameModel=new o.a("Game",t),this.eventModel=new o.a("Event",t),console.log(this.game_id)}ngOnInit(){this.init()}init(){this.gameModel.api_functionModel(this.game_id,"dataEvent").subscribe(t=>{"success"==t.status&&(this.game=t.data.game,this.events=t.data.events,this.team_l=t.data.team_l,this.team_v=t.data.team_v,this.verificationAdmin()),console.log(this.events)})}verificationAdmin(){console.log("verificationAdmin"),this.authUser.isAdminOfTeam(this.team_l.id)||this.authUser.isAdminOfTeam(this.team_v.id)?(this.isAdmin=!0,this.authUser.isAdminOfTeam(this.team_l.id)&&(this.team_admin=this.team_l),this.authUser.isAdminOfTeam(this.team_v.id)&&(this.team_admin=this.team_v),this.authUser.isAdminOfTeam(this.team_l.id)&&this.authUser.isAdminOfTeam(this.team_v.id)&&(this.twoTeam=!0)):this.team_admin=null}confirmDelete(t,e){this.dialog.presentAlertConfirm("Confirmar","Estas seguro de eliminar este Suceso",i=>{this.delete(t,e)})}delete(t,e){return Object(n.b)(this,void 0,void 0,(function*(){this.paymentTeamService.setTeam(t.team),this.paymentTeamService.noPaid()?yield this.paymentTeamService.showAlert():this.eventModel.api_delete(t.id).subscribe(t=>{console.log(t),"success"==t.status&&(this.dialog.showToast("Suceso Eliminado",null,"success"),this.events.splice(e,1))})}))}addEvent(){return Object(n.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:s.a,componentProps:{game_id:this.game_id,team_admin:this.team_admin,twoTeam:this.twoTeam,events:this.events,game:this.game}});return t.onDidDismiss().then(t=>{t.data&&t.data.event&&this.events.push(t.data.event)}),yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(c.a),a.Lb(r.a),a.Lb(d.lb),a.Lb(l.a),a.Lb(b.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-event-list"]],inputs:{game_id:"game_id",isAdmin:"isAdmin"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"bg-l1"],["class","ion-text-start col-l",4,"ngIf"],["class","ion-text-end col-v",4,"ngIf"],[1,"separator"],["color","light",4,"ngIf"],["class","bg-l0",4,"ngFor","ngForOf"],["fill","outline","expand","block",3,"click",4,"ngIf"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-start","col-l"],["color","light"],[1,"ion-text-end","col-v"],[1,"bg-l0"],[3,"ngClass"],["width","20px",3,"src",4,"ngIf"],["routerDirection","forward",3,"routerLink"],["slot","start",4,"ngIf"],["width","20px",3,"src"],["slot","start"],[3,"click"],["name","trash-outline"],["fill","outline","expand","block",3,"click"],[1,"ion-text-center"],["class","chip-admin","color","secondary",4,"ngIf"],["color","secondary",1,"chip-admin"],[1,"msj-is-admin"],[3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&a.sc(0,T,14,6,"ion-card",0),2&t&&a.fc("ngIf",e.events.length&&e.team_l&&e.team_v||e.isAdmin)},directives:[m.k,d.k,d.m,d.o,d.H,d.w,d.Q,m.j,d.q,d.cb,d.I,d.G,d.D,m.i,u.i,d.qb,d.j,d.i,d.y,d.p,d.gb,d.c,h.d,h.g],styles:["ion-col[_ngcontent-%COMP%]{font-size:large;color:rgba(0,0,0,.7019607843137254);padding:7px}.col-v[_ngcontent-%COMP%]{border-top-right-radius:5px;border-right:4px solid var(--color-v)}.col-l[_ngcontent-%COMP%]{border-top-left-radius:5px}.col-l[_ngcontent-%COMP%], .item-l[_ngcontent-%COMP%]{border-left:4px solid var(--color-l)}.item-l[_ngcontent-%COMP%]{padding-left:5px}.item-v[_ngcontent-%COMP%]{border-right:4px solid var(--color-v);padding-right:5px}"]}),t})()},"j/D2":function(t,e,i){"use strict";i.d(e,"a",(function(){return y}));var n=i("mrSG"),o=i("8xVP"),s=i("9suA"),a=i("fXoL"),c=i("TEn/"),r=i("G/jy"),d=i("vuFD"),l=i("rLe3"),b=i("qgph"),m=i("ofXK"),u=i("3Pt+");function h(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.tc(1),a.Pb()),2&t){const t=e.$implicit;a.fc("value",t.id),a.yb(1),a.uc(t.name)}}function v(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.tc(1),a.Pb()),2&t){const t=e.$implicit;a.fc("value",t.id),a.yb(1),a.uc(t.name)}}function f(t,e){if(1&t){const t=a.Rb();a.Qb(0,"ion-item"),a.Qb(1,"ion-label",5),a.tc(2,"Equipo"),a.Pb(),a.Qb(3,"ion-select",14),a.Yb("ngModelChange",(function(e){return a.nc(t),a.ac(2).event.team_id=e})),a.sc(4,v,2,2,"ion-select-option",7),a.Pb(),a.Qb(5,"div",8),a.tc(6),a.Pb(),a.Pb()}if(2&t){const t=a.ac(2);a.yb(3),a.fc("ngModel",t.event.team_id),a.yb(1),a.fc("ngForOf",t.dataEvent.teams),a.yb(2),a.uc(t.eventModel.errorsForm.get("team_id"))}}function g(t,e){if(1&t&&(a.Qb(0,"ion-select-option",13),a.tc(1),a.Pb()),2&t){const t=e.$implicit;a.fc("value",t.id),a.yb(1),a.uc(t.name)}}function p(t,e){if(1&t){const t=a.Rb();a.Qb(0,"form",4),a.Yb("ngSubmit",(function(){return a.nc(t),a.ac().submit()}))("keyup",(function(){return a.nc(t),a.ac().eventModel.errorsForm.clear()})),a.Qb(1,"ion-item"),a.Qb(2,"ion-label",5),a.tc(3,"Tipo de Evento"),a.Pb(),a.Qb(4,"ion-select",6),a.Yb("ngModelChange",(function(e){return a.nc(t),a.ac().event.type_event_id=e})),a.sc(5,h,2,2,"ion-select-option",7),a.Pb(),a.Qb(6,"div",8),a.tc(7),a.Pb(),a.Pb(),a.sc(8,f,7,3,"ion-item",9),a.Qb(9,"ion-item"),a.Qb(10,"ion-label",5),a.tc(11,"Jugador"),a.Pb(),a.Qb(12,"ion-select",10),a.Yb("ngModelChange",(function(e){return a.nc(t),a.ac().event.player_id=e})),a.sc(13,g,2,2,"ion-select-option",7),a.Pb(),a.Qb(14,"div",8),a.tc(15),a.Pb(),a.Pb(),a.Qb(16,"ion-item"),a.Qb(17,"ion-label",5),a.tc(18,"Tiempo"),a.Pb(),a.Qb(19,"ion-input",11),a.Yb("ngModelChange",(function(e){return a.nc(t),a.ac().event.time=e})),a.Pb(),a.Pb(),a.Qb(20,"div",8),a.tc(21),a.Pb(),a.Qb(22,"ion-button",12),a.tc(23,"Guardar"),a.Pb(),a.Pb()}if(2&t){const t=a.ac();a.yb(4),a.fc("ngModel",t.event.type_event_id),a.yb(1),a.fc("ngForOf",t.dataEvent.types_events),a.yb(2),a.uc(t.eventModel.errorsForm.get("type_event_id")),a.yb(1),a.fc("ngIf",!t.team_admin||t.twoTeam),a.yb(4),a.fc("ngModel",t.event.player_id),a.yb(1),a.fc("ngForOf",t.getPlayers()),a.yb(2),a.uc(t.eventModel.errorsForm.get("player_id")),a.yb(4),a.fc("ngModel",t.event.time),a.yb(2),a.uc(t.eventModel.errorsForm.get("time"))}}let y=(()=>{class t extends s.a{constructor(t,e,i,n,s,a){super(),this.navParams=t,this.requestService=e,this.dialogService=i,this.viewCtrl=n,this.utilArray=s,this.paymentTeamService=a,this.twoTeam=!1,this.events=[],this.myDateFilter=t=>6==t.getDay(),this.gameModel=new o.a("Game",e),this.eventModel=new o.a("Event",e),this.game_id=t.get("game_id"),this.twoTeam=t.get("twoTeam"),this.id=t.get("id"),this.team_admin=t.get("team_admin"),this.events=t.get("events"),this.game=t.get("game")}initObject(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.init(),this.loadEvent()}))}loadEvent(){this.id||(this.event={game_id:this.game_id,type_event_id:"",player_id:"",team_id:this.team_admin?this.team_admin.id:"",time:""})}init(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.eventModel.api_function("dataEventCreate",{game_id:this.game_id}).subscribe(t=>{"success"==t.status&&(this.dataEvent=t.data,this.types_events=this.dataEvent.types_events),console.log("ty",this.types_events),console.log(this.dataEvent)})}))}getPlayers(){let t=this.event.team_id;if(this.team_admin&&(t=this.event.team_id),t){let e=this.dataEvent.teams.find(e=>e.id===t);if(e)return e.players}return[]}submit(){return Object(n.b)(this,void 0,void 0,(function*(){try{yield this.isValid()}catch(e){return console.log(e),void this.dialogService.showToast(e.message,"Error","danger")}let t=this.game["team_"+this.getTeamType()];if(this.paymentTeamService.setTeam(t),this.paymentTeamService.noPaid())return yield this.close(),void(yield this.paymentTeamService.showAlert());this.event.id?this.eventModel.api_update(this.event).subscribe(t=>{var e;"success"==t.status&&(this.dialogService.showToast(null!==(e=t.msjSuccess)&&void 0!==e?e:"Registrado"),console.log(t),this.dismiss(t.Event))}):this.eventModel.api_create(this.event).subscribe(t=>{var e;"success"==t.status&&(this.dialogService.showToast(null!==(e=t.msjSuccess)&&void 0!==e?e:"Registrado"),this.dismiss(t.Event))})}))}dismiss(t){this.viewCtrl.dismiss({event:t})}close(){return Object(n.b)(this,void 0,void 0,(function*(){yield this.viewCtrl.dismiss()}))}print(){console.log(this.event)}isValid(){return Object(n.b)(this,void 0,void 0,(function*(){if(!this.event.team_id)throw new Error("Seleccione un equipo");if(!this.event.type_event_id)throw new Error("Seleccione un evento");var t=this.getTeamType();let e=this.utilArray.findList(this.types_events,this.event.type_event_id);if(e&&"Gol"==e.name){let e=this.game[t+"_goals"];if(this.events.filter(t=>t.team_id==this.event.team_id&&"Gol"==t.type_event.name).length+1>e)throw new Error(0==e?"El equipo seleccionado no ha convertido goles en este partido, no es posible registrar este evento.":`No puede a\xf1adir m\xe1s de ${e} goles para \xe9ste equipo en \xe9ste partido.`)}return!0}))}getTeamType(){var t="l";return this.game.v_team==this.event.team_id&&(t="v"),t}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(c.nb),a.Lb(r.a),a.Lb(d.a),a.Lb(c.lb),a.Lb(l.a),a.Lb(b.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-event-form"]],features:[a.vb],decls:9,vars:1,consts:[["slot","start"],["color","dark",3,"click"],["name","arrow-back"],[3,"ngSubmit","keyup",4,"ngIf"],[3,"ngSubmit","keyup"],["position","floating"],["name","type_event_id",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[2,"color","red","padding-top","0.2rem"],[4,"ngIf"],["name","player_id",3,"ngModel","ngModelChange"],["type","number","name","time",3,"ngModel","ngModelChange"],["type","submit","expand","block"],[3,"value"],["name","team_id",3,"ngModel","ngModelChange"]],template:function(t,e){1&t&&(a.Qb(0,"ion-header"),a.Qb(1,"ion-toolbar"),a.Qb(2,"ion-title"),a.tc(3,"Evento"),a.Pb(),a.Qb(4,"ion-buttons",0),a.Qb(5,"ion-button",1),a.Yb("click",(function(){return e.close()})),a.Mb(6,"ion-icon",2),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Qb(7,"ion-content"),a.sc(8,p,24,9,"form",3),a.Pb()),2&t&&(a.yb(8),a.fc("ngIf",e.dataEvent))},directives:[c.x,c.hb,c.fb,c.j,c.i,c.y,c.r,m.k,u.i,u.e,u.f,c.D,c.G,c.U,c.rb,u.d,u.g,m.j,c.C,c.ob,c.V],styles:[""]}),t})()},j1ZV:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("ofXK"),o=i("TEn/"),s=i("tyNb"),a=i("6g0+"),c=i("3Pt+"),r=i("fXoL");let d=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.ib.forRoot(),c.a,s.j,a.b]]}),t})()},qgph:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i("mrSG"),o=i("2Q27"),s=i("fXoL"),a=i("TEn/");let c=(()=>{class t{constructor(t){this.modalController=t,this.active=!1}setTeam(t){this.team=t}isActive(){return this.active}noPaid(){return!!this.active&&!this.team.paid}showAlert(){return Object(n.b)(this,void 0,void 0,(function*(){const t=yield this.modalController.create({component:o.a,componentProps:{id:this.team.id}});return t.onDidDismiss().then(t=>{console.log("return paid")}),yield t.present()}))}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(a.lb))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rLe3:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("fXoL");let o=(()=>{class t{constructor(){}listAddLast(t,e){t.push(e)}listAddFirst(t,e){t.unshift(e)}listUpdate(t,e,i){let n=this.findIndexList(t,e);n>=0&&(t[n]=i)}listDelete(t,e){let i=this.findIndexList(t,e);i>=0&&t.splice(i,1)}findList(t,e){return t.find(t=>t.id===e)}findIndexList(t,e){return t.findIndex(t=>t.id===e)}updateAttribustesObject(t,e,i=[]){console.log("update attributes");for(let n of i)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);