!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{Wy2Q:function(n,i,a){"use strict";a.r(i),a.d(i,"TeamRequestPageModule",(function(){return v}));var s=a("ofXK"),o=a("3Pt+"),r=a("TEn/"),c=a("tyNb"),l=a("8xVP"),u=a("fXoL"),b=a("G/jy"),p=a("vuFD");function d(t,e){if(1&t&&(u.Pb(0,"ion-card"),u.Pb(1,"ion-card-content"),u.Pb(2,"ion-text"),u.Pb(3,"h3"),u.sc(4," \xbfDeseas incluir a "),u.Pb(5,"b"),u.sc(6),u.Ob(),u.sc(7," a la plantilla de jugadores de "),u.Pb(8,"b"),u.sc(9),u.Ob(),u.sc(10,"? "),u.Ob(),u.Lb(11,"br"),u.Pb(12,"h3"),u.sc(13," Una vez que "),u.Pb(14,"b"),u.sc(15),u.Ob(),u.sc(16," acepte la solicitud , podras registrar los sucesos del mismo en los partido "),u.Ob(),u.Ob(),u.Ob(),u.Ob()),2&t){var n=u.Zb();u.xb(6),u.tc(n.player.name),u.xb(3),u.tc(n.team.name),u.xb(6),u.tc(n.player.name)}}var f,h,m,y=[{path:"",component:(f=function(){function n(e,i,a,s,o){t(this,n),this.route=e,this.router=i,this.navController=a,this.request=s,this.utilDialog=o,this.sending=!1,this.tryCount=1,this.passRequestModel=new l.a("PassRequest",s),this.team_id=this.route.snapshot.paramMap.get("team_id"),this.player_id=this.route.snapshot.paramMap.get("player_id")}var i,a,s;return i=n,(a=[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.passRequestModel.api_function("passTeamPage",{team_id:this.team_id,player_id:this.player_id}).subscribe((function(n){"success"==n.status&&(t.team=n.data.team,t.player=n.data.player),console.log(n),e&&e.target.complete()}),(function(t){console.error(t),e&&e.target.complete()}))}},{key:"send",value:function(){var t=this;this.sending=!0,this.passRequestModel.api_create({team_id:this.team.id,player_id:this.player.id,status:"Pendiente",try:this.tryCount}).subscribe((function(e){"success"==e.status&&(t.utilDialog.showToast("Solicitud Enviada",null,"info",777),t.navController.back()),console.log(e)}),(function(t){console.log(t)}))}}])&&e(i.prototype,a),s&&e(i,s),n}(),f.\u0275fac=function(t){return new(t||f)(u.Kb(c.a),u.Kb(c.g),u.Kb(r.ib),u.Kb(b.a),u.Kb(p.a))},f.\u0275cmp=u.Eb({type:f,selectors:[["app-team-request"]],decls:10,vars:1,consts:[["slot","start"],[4,"ngIf"],["expand","block","fill","outline",3,"click"]],template:function(t,e){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"ion-toolbar"),u.Pb(2,"ion-title"),u.sc(3,"Solicitud de pase"),u.Ob(),u.Pb(4,"ion-buttons",0),u.Lb(5,"ion-back-button"),u.Ob(),u.Ob(),u.Ob(),u.Pb(6,"ion-content"),u.rc(7,d,17,3,"ion-card",1),u.Pb(8,"ion-button",2),u.Xb("click",(function(){return e.send()})),u.sc(9,"Enviar"),u.Ob(),u.Ob()),2&t&&(u.xb(7),u.ec("ngIf",e.player&&e.team))},directives:[r.x,r.db,r.bb,r.j,r.f,r.g,r.r,s.k,r.i,r.k,r.l,r.Y],styles:[""]}),f)}],g=((m=function e(){t(this,e)}).\u0275mod=u.Ib({type:m}),m.\u0275inj=u.Hb({factory:function(t){return new(t||m)},imports:[[c.j.forChild(y)],c.j]}),m),v=((h=function e(){t(this,e)}).\u0275mod=u.Ib({type:h}),h.\u0275inj=u.Hb({factory:function(t){return new(t||h)},imports:[[s.b,o.a,r.eb,g]]}),h)}}])}();