(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"47vG":function(t,e,n){"use strict";n.r(e),n.d(e,"ExportPageModule",(function(){return y}));var i=n("ofXK"),o=n("3Pt+"),a=n("TEn/"),s=n("tyNb"),c=n("mrSG"),r=n("8xVP"),d=n("AytR"),l=n("fXoL"),g=n("G/jy"),b=n("2Rin"),u=n("YL0Z"),m=n("VZH3"),p=n("jLeg");function h(t,e){if(1&t&&(l.Qb(0,"div",7),l.Qb(1,"div",8),l.Mb(2,"img",9),l.Pb(),l.Qb(3,"p",10),l.vc(4,"futbol8alem.com"),l.Pb(),l.Qb(5,"div",11),l.Qb(6,"div",12),l.Mb(7,"img",13),l.Qb(8,"div",14),l.vc(9),l.Pb(),l.Qb(10,"div",15),l.vc(11),l.Pb(),l.Pb(),l.Qb(12,"div",16),l.vc(13," Vs "),l.Pb(),l.Qb(14,"div",12),l.Mb(15,"img",17),l.Qb(16,"div",18),l.vc(17),l.Pb(),l.Mb(18,"img",19),l.Qb(19,"div",15),l.vc(20),l.Pb(),l.Pb(),l.Pb(),l.Qb(21,"div",20),l.Qb(22,"div",21),l.vc(23),l.Pb(),l.Qb(24,"div",22),l.vc(25),l.Pb(),l.Qb(26,"div",23),l.vc(27),l.Pb(),l.Pb(),l.Pb()),2&t){var n=l.ac();l.yb(7),l.gc("src",n.game.team_l.shield?n.game.team_l.shield.urlCompleteThumb:"assets/images/esc.png",l.pc),l.yb(2),l.wc(n.game.team_l.name),l.yb(2),l.wc(n.game.l_goals),l.yb(4),l.gc("src",n.game.team_v.shield?n.game.team_v.shield.urlCompleteThumb:"assets/images/esc.png",l.pc),l.yb(2),l.wc(n.game.team_v.name),l.yb(1),l.gc("src",n.game.team_v.shield?n.game.team_v.shield.urlCompleteThumb:"assets/images/esc.png",l.pc),l.yb(2),l.wc(n.game.v_goals),l.yb(3),l.wc(n.game.status),l.yb(2),l.wc(n.util.setFormatMoment(n.game.date,"DD/M/YYYY")),l.yb(2),l.wc(n.util.formatHours(n.game.time))}}function f(t,e){if(1&t&&l.Mb(0,"img",24),2&t){var n=l.ac();l.gc("src",n.htmlToImageService.src,l.pc)}}function v(t,e){if(1&t){var n=l.Rb();l.Qb(0,"ion-button",6),l.Yb("click",(function(){return l.oc(n),l.ac().facebook()})),l.vc(1,"Facebook"),l.Pb()}}var _=[{path:"",component:function(){function t(t,e,n,i,o,a,s){this.navCtr=t,this.route=e,this.requesService=n,this.util=i,this.htmlToImageService=o,this.shareService=a,this.loadingService=s,this.inServer=!1,this.id=this.route.snapshot.paramMap.get("id"),this.gameModel=new r.a("Game",n)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(t){return void 0===t&&(t=null),Object(c.b)(this,void 0,void 0,(function(){var e=this;return Object(c.d)(this,(function(n){return this.loadingService.start(),this.gameModel.api_functionModel(this.id,"dataProfile").subscribe((function(n){return Object(c.b)(e,void 0,void 0,(function(){return Object(c.d)(this,(function(e){switch(e.label){case 0:return"success"==n.status&&(this.game=n.data),console.log("Game",this.game),[4,this.util.delay(100)];case 1:return e.sent(),[4,this.htmlToImageService.run("export")];case 2:return e.sent(),this.uploadImage(),t&&t.target.complete(),[2]}}))}))}),(function(t){e.loadingService.end()})),[2]}))}))},t.prototype.export=function(){this.htmlToImageService.dowload()},t.prototype.uploadImage=function(){var t=this;this.gameModel.api_functionModel(this.id,"addPreview",{data:this.htmlToImageService.img,url:"/results/",thumb:!1}).subscribe((function(e){console.log(e),t.inServer=!0,t.loadingService.end()}),(function(e){console.error(e),t.loadingService.end()}))},t.prototype.facebook=function(){var t="https://www.facebook.com/sharer?u="+d.a.server_url_base+"/shareResultF/"+this.id+"?"+(new Date).valueOf();console.log("url",t),this.shareService.goTo(t)},t.\u0275fac=function(e){return new(e||t)(l.Lb(a.ob),l.Lb(s.a),l.Lb(g.a),l.Lb(b.a),l.Lb(u.a),l.Lb(m.a),l.Lb(p.a))},t.\u0275cmp=l.Fb({type:t,selectors:[["app-export"]],decls:14,vars:3,consts:[["slot","start"],["defaultHref","/home/results"],["class","contenedor pendding","id","export",4,"ngIf"],["class","img_result",3,"src",4,"ngIf"],[1,"ion-text-center"],[3,"click",4,"ngIf"],[3,"click"],["id","export",1,"contenedor","pendding"],[1,"logo"],["src","assets/icon/favicon.png"],[1,"page"],[1,"teams"],[1,"team"],[1,"esc",3,"src"],[1,"team_name"],[1,"team_goal"],[1,"vs"],[1,"esc_left",3,"src"],[1,"team_name","team_name_v"],[1,"esc_right",3,"src"],[1,"detail"],[1,"status"],[1,"date"],[1,"time"],[1,"img_result",3,"src"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.vc(3,"Compartir Imagen"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button",1),l.Pb(),l.Pb(),l.Pb(),l.Qb(6,"ion-content"),l.uc(7,h,28,10,"div",2),l.uc(8,f,1,1,"img",3),l.Qb(9,"div",4),l.uc(10,v,2,0,"ion-button",5),l.Mb(11,"br"),l.Qb(12,"ion-button",6),l.Yb("click",(function(){return e.export()})),l.vc(13,"Descargar Imagen"),l.Pb(),l.Pb(),l.Pb()),2&t&&(l.yb(7),l.gc("ngIf",e.game),l.yb(1),l.gc("ngIf",e.htmlToImageService.src),l.yb(2),l.gc("ngIf",e.inServer))},directives:[a.x,a.jb,a.hb,a.j,a.f,a.g,a.r,i.l,a.i],styles:[".contenedor[_ngcontent-%COMP%]{position:absolute;width:600px;height:300px;display:block;align-items:center;justify-content:center;background-image:url(/assets/images/bg.jpg);background-repeat:repeat;background-size:cover;background-position:50%;color:#fff;padding:50px 50px 10px}.teams[_ngcontent-%COMP%]{border-radius:5px;margin:auto}.teams[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;padding:5px;font-size:xx-large}.teams[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;width:10%;border-radius:50%;width:50px;height:50px}.teams[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{width:70%;padding-left:5px}.teams[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team_goal[_ngcontent-%COMP%]{width:20%;text-align:center}.detail[_ngcontent-%COMP%]{text-align:center;margin:20px auto auto}.detail[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{background-color:red;border-radius:10px;text-align:center;display:inline;padding:3px 10px}.detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-top:5px}.detail[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .detail[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{color:hsla(0,0%,100%,.5686274509803921)}.logo[_ngcontent-%COMP%]{position:absolute}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.1;width:150px;height:150px}.img_result[_ngcontent-%COMP%]{width:100%;-o-object-fit:cover;object-fit:cover}.page[_ngcontent-%COMP%]{position:absolute;bottom:-10px;right:60px;opacity:.6}.esc_left[_ngcontent-%COMP%]{display:inline-block}.esc_right[_ngcontent-%COMP%], .vs[_ngcontent-%COMP%]{display:none}.vs[_ngcontent-%COMP%]{text-align:center;font-family:-webkit-body;font-size:large}.pendding[_ngcontent-%COMP%]   .esc_left[_ngcontent-%COMP%]{display:none}.pendding[_ngcontent-%COMP%]   .esc_right[_ngcontent-%COMP%]{display:inline-block}.pendding[_ngcontent-%COMP%]   .team_name_v[_ngcontent-%COMP%]{text-align:end}.pendding[_ngcontent-%COMP%]   .team_goal[_ngcontent-%COMP%]{width:0;display:none}.pendding[_ngcontent-%COMP%]   .vs[_ngcontent-%COMP%]{display:block}.pendding[_ngcontent-%COMP%]   .team_name[_ngcontent-%COMP%]{width:100%!important}"]}),t}()}],P=function(){function t(){}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(_)],s.j]}),t}(),y=function(){function t(){}return t.\u0275mod=l.Jb({type:t}),t.\u0275inj=l.Ib({factory:function(e){return new(e||t)},imports:[[i.b,o.a,a.kb,P]]}),t}()},VZH3:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("mrSG"),o=n("8xVP"),a=n("AytR"),s=n("fXoL"),c=n("G/jy"),r=n("vuFD"),d=n("m/P+"),l=n("2Rin"),g=function(){function t(t,e,n,i){this.requestService=t,this.dialogService=e,this.iab=n,this.util=i,this.addThisVisible=!1,this.loadedAddThis=!1,this.scriptLoaded=null,this.addthis_share={url:"",title:"",description:"",media:""},this.modelGame=new o.a("Game",t),this.loadedAddThis||this.addThisInit()}return t.prototype.goTo=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(e){return this.iab.create(t,"",{fullscreen:"yes"}),[2]}))}))},t.prototype.shareGameFacebook=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(e){return this.iab.create(a.a.server_url_base+"/shareResult/"+t,"",{fullscreen:"yes"}),[2]}))}))},t.prototype.addThisInit=function(){var t=this;try{this.addMeta();var e=document.createElement("script");e.type="text/javascript",e.setAttribute("async","async"),e.src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6169932652121667",e.onload=function(){console.log("load AddThis"),t.loadedAddThis=!0,t.scriptLoaded=t,document.body.classList.add("share-disabled")},document.body.appendChild(e)}catch(n){console.error(n)}},t.prototype.addMeta=function(){var t=document.createElement("meta");t.setAttribute("property","og:url"),t.content=document.location,document.getElementsByTagName("head")[0].appendChild(t);var e=document.createElement("meta");e.setAttribute("property","og:title"),e.content="Title lucas",document.getElementsByTagName("head")[0].appendChild(e),console.log("add meta")},t.prototype.toggleAddThis=function(){console.log("toggle"),this.addThisVisible=!this.addThisVisible,this.updateVisibiliti()},t.prototype.showAddThis=function(){this.addThisVisible=!0,this.updateVisibiliti()},t.prototype.hideAddThis=function(){this.addThisVisible=!1,this.updateVisibiliti()},t.prototype.updateVisibiliti=function(){if(this.loadedAddThis&&document.getElementsByClassName("addthis-smartlayers")){if(window.addthis){var t=window.addthis;t.layers.refresh(),t.toolbox()}this.addThisVisible?document.body.classList.remove("share-disabled"):document.body.classList.add("share-disabled")}},t.\u0275fac=function(e){return new(e||t)(s.Ub(c.a),s.Ub(r.a),s.Ub(d.a),s.Ub(l.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);