!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{GgTm:function(e,i,o){"use strict";o.r(i),o.d(i,"ResultPageModule",(function(){return L}));var a=o("ofXK"),s=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),m=o("mrSG"),d=o("8xVP"),l=o("fXoL"),u=o("G/jy"),b=o("vuFD"),f=o("/XPu"),g=o("2Rin"),p=o("T3jL"),h=o("y/q6"),v=o("ZETu"),y=o("OXCg"),P=o("6Rhz");function C(t,e){if(1&t){var n=l.Rb();l.Qb(0,"ion-buttons",4),l.Qb(1,"ion-button",5),l.Yb("click",(function(){return l.nc(n),l.ac().confirmDelete()})),l.Mb(2,"ion-icon",6),l.Pb(),l.Pb()}}function x(t,e){if(1&t&&l.Mb(0,"app-result-item",13),2&t){var n=l.ac(2);l.fc("game",n.game)}}function M(t,e){if(1&t&&(l.Qb(0,"ion-item-group"),l.Qb(1,"ion-item-divider"),l.Qb(2,"ion-label"),l.tc(3,"Motivo"),l.Pb(),l.Pb(),l.Qb(4,"ion-item"),l.Qb(5,"ion-label"),l.tc(6),l.Pb(),l.Pb(),l.Pb()),2&t){var n=l.ac(2);l.yb(6),l.uc(n.game.description)}}function w(t,e){if(1&t){var n=l.Rb();l.Qb(0,"ion-content"),l.Qb(1,"ion-refresher",7),l.Yb("ionRefresh",(function(t){return l.nc(n),l.ac().init(t)})),l.Mb(2,"ion-refresher-content"),l.Pb(),l.sc(3,x,1,1,"app-result-item",8),l.Qb(4,"div",9),l.Qb(5,"ion-badge",10),l.tc(6),l.Pb(),l.Mb(7,"br"),l.sc(8,M,7,1,"ion-item-group",3),l.Pb(),l.Mb(9,"app-event-list",11),l.Mb(10,"app-comments",12),l.Pb()}if(2&t){var i=l.ac();l.yb(3),l.fc("ngIf",i.game),l.yb(3),l.uc("Jugado"==i.game.status?"Finalizado":i.game.status),l.yb(2),l.fc("ngIf",i.game.description),l.yb(1),l.fc("game_id",i.id),l.yb(1),l.fc("idRelation",i.id)("nameRelationModel","Game")}}var k,Q,O,_=[{path:"",component:(k=function(){function e(n,i,o,a,s,r,c,m){t(this,e),this.route=n,this.requesService=i,this.dialogService=o,this.socialSharing=a,this.util=s,this.listsHomeService=r,this.navCtrl=c,this.authUser=m,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.resultModel=new d.a("Game",i)}return n(e,[{key:"ngOnInit",value:function(){this.init(),this.resultModel.api_functionModel(this.id,"setWinner").subscribe((function(t){console.log("setWinner",t)}))}},{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.firstLoading,!e.t0){e.next=5;break}return e.next=4,this.dialogService.loadingProgres();case 4:this.firstLoading=!1;case 5:this.resultModel.api_functionModel(this.id,"dataProfile").subscribe((function(e){"success"==e.status&&(n.game=e.data),t&&t.target.complete(),n.dialogService.dimissLoaging()}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"sendInstagram",value:function(){this.socialSharing.shareViaInstagram("Imagen","https://api.futbol8alem.com/imagecache/original/8lNFig1mR35YTYU.png")}},{key:"share",value:function(){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.share();case 2:case"end":return t.stop()}}),t,this)})))}},{key:"confirmDelete",value:function(){var t=this;this.dialogService.presentAlertConfirm("Confirmar","Estas seguro de eliminar este game",(function(e){t.delete()}))}},{key:"delete",value:function(){var t=this;this.resultModel.api_delete(this.game.id).subscribe((function(e){console.log(e),"success"==e.status&&(t.dialogService.showToast("Partido Eliminado",null,"success"),t.listsHomeService.remove("results",t.game.id),t.navCtrl.navigateRoot("/home/results"))}))}},{key:"isAdminTeam",get:function(){return this.authUser.isAdminGame(this.game)||this.authUser.isAdmin()}}]),e}(),k.\u0275fac=function(t){return new(t||k)(l.Lb(c.a),l.Lb(u.a),l.Lb(b.a),l.Lb(f.a),l.Lb(g.a),l.Lb(p.a),l.Lb(r.ob),l.Lb(h.a))},k.\u0275cmp=l.Fb({type:k,selectors:[["app-result"]],decls:8,vars:2,consts:[["slot","start"],["defaultHref","/home/results"],["slot","secondary",4,"ngIf"],[4,"ngIf"],["slot","secondary"],[3,"click"],["name","trash-outline"],["slot","fixed",3,"ionRefresh"],[3,"game",4,"ngIf"],[1,"ion-text-center"],["color","danger"],[3,"game_id"],[3,"idRelation","nameRelationModel"],[3,"game"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Partido"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button",1),l.Pb(),l.sc(6,C,3,0,"ion-buttons",2),l.Pb(),l.Pb(),l.sc(7,w,11,6,"ion-content",3)),2&t&&(l.yb(6),l.fc("ngIf",e.isAdminTeam),l.yb(1),l.fc("ngIf",e.game))},directives:[r.x,r.jb,r.hb,r.j,r.f,r.g,a.k,r.i,r.y,r.r,r.O,r.P,r.h,v.a,y.a,P.a,r.F,r.E,r.G,r.D],styles:["",".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(img_fondo_res4.7a1ad4da4803a568a1d2.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),k)}],R=((Q=function e(){t(this,e)}).\u0275mod=l.Jb({type:Q}),Q.\u0275inj=l.Ib({factory:function(t){return new(t||Q)},imports:[[c.j.forChild(_)],c.j]}),Q),I=o("j1ZV"),L=((O=function e(){t(this,e)}).\u0275mod=l.Jb({type:O}),O.\u0275inj=l.Ib({factory:function(t){return new(t||O)},imports:[[a.b,s.a,r.kb,R,I.a]]}),O)},OXCg:function(e,i,o){"use strict";o.d(i,"a",(function(){return _}));var a=o("mrSG"),s=o("fXoL"),r=o("8xVP"),c=o("wd/R"),m=o("6g0+"),d=o("y/q6"),l=o("G/jy"),u=o("2Rin"),b=o("TEn/"),f=o("vuFD"),g=o("rLe3"),p=o("ofXK"),h=o("3Pt+"),v=o("tyNb");function y(t,e){1&t&&(s.Qb(0,"div"),s.Qb(1,"ion-card-title",13),s.tc(2,"Comentarios"),s.Pb(),s.Mb(3,"div",14),s.Pb())}function P(t,e){1&t&&(s.Qb(0,"ion-item"),s.Qb(1,"ion-note",15),s.tc(2,"Se el primero en comentar!!!"),s.Pb(),s.Pb())}function C(t,e){if(1&t){var n=s.Rb();s.Qb(0,"ion-button",30),s.Yb("click",(function(){s.nc(n);var t=s.ac(2).$implicit;return s.ac().openMenuComment(t)})),s.Mb(1,"ion-icon",31),s.Pb()}}function x(t,e){if(1&t){var n=s.Rb();s.Qb(0,"div",19),s.sc(1,C,2,0,"ion-button",20),s.Qb(2,"ion-thumbnail",21),s.Qb(3,"ion-img",22),s.Yb("click",(function(){s.nc(n);var t=s.ac().$implicit;return s.ac().openViewer(t)})),s.Pb(),s.Pb(),s.Qb(4,"div",23),s.Qb(5,"div",24),s.Qb(6,"ion-text",25),s.Qb(7,"a",26),s.tc(8),s.Pb(),s.Pb(),s.Pb(),s.Qb(9,"div",27),s.Qb(10,"ion-text",28),s.tc(11),s.Pb(),s.Pb(),s.Qb(12,"div",29),s.Qb(13,"ion-text",28),s.tc(14),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&t){var i=s.ac().$implicit,o=s.ac();s.yb(1),s.fc("ngIf",o.authUser.user.id==i.user_id),s.yb(2),s.fc("src",o.getPhoto(i)),s.yb(4),s.fc("routerLink","/users/"+i.user.id+"/profile"),s.yb(1),s.wc(" ",i.user.last_name," ",i.user.first_name," "),s.yb(3),s.vc(" ",i.body," "),s.yb(3),s.vc(" ",o.formatDate(i.created_at)," ")}}function M(t,e){1&t&&s.Mb(0,"ion-spinner",37)}function w(t,e){if(1&t){var n=s.Rb();s.Qb(0,"div",32),s.Qb(1,"ion-text"),s.tc(2,"Editar comentario"),s.Pb(),s.Qb(3,"ion-textarea",33),s.Yb("ngModelChange",(function(t){return s.nc(n),s.ac(2).commentEdit.body=t})),s.Pb(),s.Qb(4,"div",34),s.Qb(5,"ion-button",35),s.Yb("click",(function(){return s.nc(n),s.ac(2).editComment()})),s.sc(6,M,1,0,"ion-spinner",12),s.tc(7," Actualizar "),s.Pb(),s.Qb(8,"ion-button",36),s.Yb("click",(function(){s.nc(n);var t=s.ac().$implicit;return s.ac().cancelEdit(t)})),s.tc(9,"Cancelar"),s.Pb(),s.Pb(),s.Pb()}if(2&t){var i=s.ac(2);s.yb(3),s.fc("ngModel",i.commentEdit.body),s.yb(2),s.fc("disabled",i.updatingComment),s.yb(1),s.fc("ngIf",i.updatingComment),s.yb(2),s.fc("disabled",i.updatingComment)}}function k(t,e){if(1&t&&(s.Qb(0,"ion-item",16),s.sc(1,x,15,7,"div",17),s.sc(2,w,10,4,"div",18),s.Pb()),2&t){var n=e.$implicit;s.yb(1),s.fc("ngIf",!n.edit),s.yb(1),s.fc("ngIf",n.edit)}}function Q(t,e){1&t&&s.Mb(0,"ion-icon",38)}function O(t,e){1&t&&s.Mb(0,"ion-spinner",37)}var _=function(){var e=function(){function e(n,i,o,a,c,m,d){t(this,e),this.authService=n,this.request=i,this.util=o,this.modalController=a,this.dialog=c,this.utilArray=m,this.authUser=d,this.comments=[],this.withTitle=!0,this.onUpdateComments=new s.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new r.a("Comment",i)}return n(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}},{key:"loadCooments",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new r.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe((function(n){"success"==n.status&&(t.listComments=n[t.nameRelationModel].comments),e&&e.target.complete()}),(function(t){e&&e.target.complete()})))}},{key:"resetComment",value:function(){this.comment.body=""}},{key:"send",value:function(){var t=this;console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe((function(e){"success"==e.status&&(t.listComments.push(e.data),t.onUpdateComments&&t.onUpdateComments.emit(t.listComments),t.resetComment()),t.sending=!1}),(function(e){t.sending=!1})))}},{key:"formatDate",value:function(t){return c(t).locale("es").fromNow()}},{key:"getPhoto",value:function(t){return t.user&&t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}},{key:"openViewer",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnChanges",value:function(t){t.comments&&this.loadCooments()}},{key:"openMenuComment",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dialog.actionSheetEditDelete((function(){t.edit=!0,n.commentEdit=Object.assign({},t)}),(function(){n.confirmDelete(t)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;this.commentModel.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Comentario eliminado.",null,"success"),e.utilArray.listDelete(e.listComments,t.id))}))}},{key:"cancelEdit",value:function(t){t.edit=!1,this.commentEdit={body:""}}},{key:"editComment",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe((function(t){"success"==t.status&&(e.commentEdit.edit=!1,e.utilArray.listUpdate(e.listComments,e.commentEdit.id,e.commentEdit)),e.updatingComment=!1}),(function(t){console.log(t),e.updatingComment=!1}));case 1:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Lb(d.a),s.Lb(l.a),s.Lb(u.a),s.Lb(b.nb),s.Lb(f.a),s.Lb(g.a),s.Lb(d.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[s.wb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.sc(1,y,4,0,"div",1),s.Qb(2,"div"),s.Qb(3,"ion-list",2),s.sc(4,P,3,0,"ion-item",1),s.sc(5,k,3,2,"ion-item",3),s.Pb(),s.Qb(6,"div",4),s.Qb(7,"form",5),s.Yb("ngSubmit",(function(){return e.send()})),s.Qb(8,"div",6),s.Qb(9,"div",7),s.Qb(10,"ion-textarea",8),s.Yb("ngModelChange",(function(t){return e.comment.body=t})),s.Pb(),s.Pb(),s.Qb(11,"div",9),s.Qb(12,"ion-fab-button",10),s.Yb("click",(function(){return e.send()})),s.sc(13,Q,1,0,"ion-icon",11),s.sc(14,O,1,0,"ion-spinner",12),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.yb(1),s.fc("ngIf",e.withTitle),s.yb(3),s.fc("ngIf",e.listComments.length<1),s.yb(1),s.fc("ngForOf",e.listComments),s.yb(5),s.fc("ngModel",e.comment.body),s.yb(2),s.fc("disabled",e.sending),s.yb(1),s.fc("ngIf",!e.sending),s.yb(1),s.fc("ngIf",e.sending))},directives:[p.k,b.H,p.j,h.i,h.e,h.f,b.fb,b.vb,h.d,h.g,b.u,b.o,b.D,b.L,b.gb,b.z,b.eb,v.i,b.tb,b.i,b.y,b.ab],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),e}()}}])}();