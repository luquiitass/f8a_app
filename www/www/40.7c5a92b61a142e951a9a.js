(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"NZX/":function(t,e,n){"use strict";n.r(e),n.d(e,"BannerPageModule",(function(){return m}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),c=n("tyNb"),r=n("mrSG"),s=n("8xVP"),b=n("wOnQ"),g=n.n(b),d=n("fXoL"),u=n("G/jy"),l=n("vuFD");function f(t,e){if(1&t&&(d.Qb(0,"div",2),d.Qb(1,"div",3),d.Qb(2,"div",4),d.Qb(3,"div",5),d.Mb(4,"img",6),d.Qb(5,"h2"),d.vc(6),d.Pb(),d.Qb(7,"h1",7),d.vc(8),d.Pb(),d.Pb(),d.Qb(9,"div",8),d.vc(10,"-"),d.Pb(),d.Qb(11,"div",9),d.Mb(12,"img",6),d.Qb(13,"h2"),d.vc(14),d.Pb(),d.Qb(15,"h1",7),d.vc(16),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb()),2&t){var n=d.ac();d.yb(4),d.hc("src",n.game.team_l.shield?n.game.team_l.shield.urlComplete:"assets/esc.png",d.pc),d.yb(2),d.wc(n.game.team_l.name),d.yb(2),d.wc(n.game.l_goals),d.yb(4),d.hc("src",n.game.team_v.shield?n.game.team_v.shield.urlComplete:"assets/esc.png",d.pc),d.yb(2),d.wc(n.game.team_v.name),d.yb(2),d.wc(n.game.v_goals)}}var v=[{path:"",component:function(){function t(t,e,n){this.route=t,this.requestService=e,this.dialogService=n,this.image2="a",this.gameModel=new s.a("Game",e),this.id=this.route.snapshot.paramMap.get("id")}return t.prototype.ngOnInit=function(){this.load()},t.prototype.load=function(t){return void 0===t&&(t=null),Object(r.b)(this,void 0,void 0,(function(){var t=this;return Object(r.d)(this,(function(e){switch(e.label){case 0:return[4,this.dialogService.loadingProgres("Cargando equipo")];case 1:return e.sent(),this.gameModel.api_functionModel(this.id,"pageBanner").subscribe((function(e){t.dialogService.dimissLoaging(),(e.status="success")&&(t.game=e.data,setTimeout(t.createImage,1e3))})),[2]}}))}))},t.prototype.createImage=function(){var t=this;console.log("Create banner");var e=document.getElementById("banner");console.log("element",e.width),g()(e).then((function(n){var i=1e3;i>e.offsetWidth&&(i=e.offsetWidth);var o=i/e.offsetWidth;n.width=i,n.height=e.offsetWidth*o,n.getContext("2d"),t.image2=n.toDataURL("image/png"),e.appendChild(n)}))},t.\u0275fac=function(e){return new(e||t)(d.Lb(c.a),d.Lb(u.a),d.Lb(l.a))},t.\u0275cmp=d.Fb({type:t,selectors:[["app-banner"]],decls:12,vars:3,consts:[["id","banner",4,"ngIf"],[3,"src"],["id","banner"],["id","content",1,"f"],[1,"center"],[1,"l"],[1,"avatar",3,"src"],[1,"goal"],[1,"vs"],[1,"v"]],template:function(t,e){1&t&&(d.Qb(0,"ion-header"),d.Qb(1,"ion-toolbar"),d.Qb(2,"ion-title"),d.vc(3,"Banner"),d.Pb(),d.Pb(),d.Pb(),d.Qb(4,"ion-content"),d.uc(5,f,17,6,"div",0),d.vc(6," result "),d.Mb(7,"img",1),d.Mb(8,"br"),d.vc(9," Code "),d.Qb(10,"code"),d.vc(11),d.Pb(),d.Pb()),2&t&&(d.yb(5),d.gc("ngIf",e.game),d.yb(2),d.gc("src",e.image2,d.pc),d.yb(4),d.wc(e.image2))},directives:[a.x,a.jb,a.hb,a.r,i.l],styles:[".f[_ngcontent-%COMP%]{color:#fff;width:500px;height:300px;background-repeat:no-repeat;background-size:cover;background-position:50%}.avatar[_ngcontent-%COMP%]{height:64px;width:64px}.avatar[_ngcontent-%COMP%], .avatar_event[_ngcontent-%COMP%]{border-radius:50%;background-position:50%;background-size:cover}.avatar_event[_ngcontent-%COMP%]{height:15px;width:15px}.center[_ngcontent-%COMP%]{display:inline-flex;justify-content:end;align-items:center;width:100%;margin-top:20px}.l[_ngcontent-%COMP%], .v[_ngcontent-%COMP%]{width:45%}.l[_ngcontent-%COMP%], .v[_ngcontent-%COMP%], .vs[_ngcontent-%COMP%]{text-align:center}.vs[_ngcontent-%COMP%]{width:10%}.goal[_ngcontent-%COMP%]{font-size:xx-large}.list_events[_ngcontent-%COMP%]{list-style-type:none;text-align:start}"]}),t}()}],h=function(){function t(){}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[c.j.forChild(v)],c.j]}),t}(),p=n("j1ZV"),m=function(){function t(){}return t.\u0275mod=d.Jb({type:t}),t.\u0275inj=d.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,a.kb,h,p.a]]}),t}()},j1ZV:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var i=n("ofXK"),o=n("TEn/"),a=n("tyNb"),c=n("6g0+"),r=n("3Pt+"),s=n("fXoL"),b=function(){function t(){}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.kb.forRoot(),r.a,a.j,c.b]]}),t}()}}]);