!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{GgTm:function(e,i,o){"use strict";o.r(i),o.d(i,"ResultPageModule",(function(){return _}));var a=o("ofXK"),r=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),m=o("mrSG"),d=o("8xVP"),l=o("fXoL"),u=o("G/jy"),b=o("vuFD"),f=o("/XPu"),g=o("2Rin"),p=o("ZETu"),h=o("OXCg"),v=o("6Rhz");function y(t,e){if(1&t&&l.Mb(0,"app-result-item",10),2&t){var n=l.ac(2);l.fc("game",n.game)}}function P(t,e){if(1&t&&(l.Qb(0,"ion-item-group"),l.Qb(1,"ion-item-divider"),l.Qb(2,"ion-label"),l.tc(3,"Motivo"),l.Pb(),l.Pb(),l.Qb(4,"ion-item"),l.Qb(5,"ion-label"),l.tc(6),l.Pb(),l.Pb(),l.Pb()),2&t){var n=l.ac(2);l.yb(6),l.uc(n.game.description)}}function C(t,e){if(1&t){var n=l.Rb();l.Qb(0,"ion-content"),l.Qb(1,"ion-refresher",3),l.Yb("ionRefresh",(function(t){return l.nc(n),l.ac().init(t)})),l.Mb(2,"ion-refresher-content"),l.Pb(),l.sc(3,y,1,1,"app-result-item",4),l.Qb(4,"ion-button",5),l.Yb("click",(function(){return l.nc(n),l.ac().share()})),l.Pb(),l.Qb(5,"div",6),l.Qb(6,"ion-badge",7),l.tc(7),l.Pb(),l.Mb(8,"br"),l.sc(9,P,7,1,"ion-item-group",2),l.Pb(),l.Mb(10,"app-event-list",8),l.Mb(11,"app-comments",9),l.Pb()}if(2&t){var i=l.ac();l.yb(3),l.fc("ngIf",i.game),l.yb(4),l.uc("Jugado"==i.game.status?"Finalizado":i.game.status),l.yb(2),l.fc("ngIf",i.game.description),l.yb(1),l.fc("game_id",i.id),l.yb(1),l.fc("idRelation",i.id)("nameRelationModel","Game")}}var x,M,w,k=[{path:"",component:(x=function(){function e(n,i,o,a,r){t(this,e),this.route=n,this.requesService=i,this.dialogService=o,this.socialSharing=a,this.util=r,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.resultModel=new d.a("Game",i)}return n(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.firstLoading,!e.t0){e.next=5;break}return e.next=4,this.dialogService.loadingProgres();case 4:this.firstLoading=!1;case 5:this.resultModel.api_functionModel(this.id,"dataProfile").subscribe((function(e){"success"==e.status&&(n.game=e.data),t&&t.target.complete(),n.dialogService.dimissLoaging()}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"sendInstagram",value:function(){this.socialSharing.shareViaInstagram("Imagen","https://api.futbol8alem.com/imagecache/original/8lNFig1mR35YTYU.png")}},{key:"share",value:function(){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.util.share();case 2:case"end":return t.stop()}}),t,this)})))}}]),e}(),x.\u0275fac=function(t){return new(t||x)(l.Lb(s.a),l.Lb(u.a),l.Lb(b.a),l.Lb(f.a),l.Lb(g.a))},x.\u0275cmp=l.Fb({type:x,selectors:[["app-result"]],decls:7,vars:1,consts:[["slot","start"],["defaultHref","/home/results"],[4,"ngIf"],["slot","fixed",3,"ionRefresh"],[3,"game",4,"ngIf"],[3,"click"],[1,"ion-text-center"],["color","danger"],[3,"game_id"],[3,"idRelation","nameRelationModel"],[3,"game"]],template:function(t,e){1&t&&(l.Qb(0,"ion-header"),l.Qb(1,"ion-toolbar"),l.Qb(2,"ion-title"),l.tc(3,"Partido"),l.Pb(),l.Qb(4,"ion-buttons",0),l.Mb(5,"ion-back-button",1),l.Pb(),l.Pb(),l.Pb(),l.sc(6,C,12,6,"ion-content",2)),2&t&&(l.yb(6),l.fc("ngIf",e.game))},directives:[c.x,c.jb,c.hb,c.j,c.f,c.g,a.k,c.r,c.O,c.P,c.i,c.h,p.a,h.a,v.a,c.F,c.E,c.G,c.D],styles:["",".game[_ngcontent-%COMP%]{color:#fff;width:100%;padding:10px;border-radius:5px;box-shadow:inset 0 -3em 3em rgba(0,0,0,.1),0 0 0 2px #fff,.3em .3em 1em rgba(0,0,0,.3)}.team[_ngcontent-%COMP%]{position:relative;background-image:url(img_fondo_res4.7a1ad4da4803a568a1d2.png);background-repeat:no-repeat;background-size:cover;width:100%;padding:15px 10px 10px}.name-team[_ngcontent-%COMP%]{width:70%}.goals-team[_ngcontent-%COMP%], .name-team[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.goals-team[_ngcontent-%COMP%]{width:30%;text-align:right;padding-right:20px}.comment[_ngcontent-%COMP%]{position:absolute;top:10px;right:10px;display:none}"]}),x)}],Q=((M=function e(){t(this,e)}).\u0275mod=l.Jb({type:M}),M.\u0275inj=l.Ib({factory:function(t){return new(t||M)},imports:[[s.j.forChild(k)],s.j]}),M),O=o("j1ZV"),_=((w=function e(){t(this,e)}).\u0275mod=l.Jb({type:w}),w.\u0275inj=l.Ib({factory:function(t){return new(t||w)},imports:[[a.b,r.a,c.kb,Q,O.a]]}),w)},OXCg:function(e,i,o){"use strict";o.d(i,"a",(function(){return _}));var a=o("mrSG"),r=o("fXoL"),c=o("8xVP"),s=o("wd/R"),m=o("6g0+"),d=o("y/q6"),l=o("G/jy"),u=o("2Rin"),b=o("TEn/"),f=o("vuFD"),g=o("rLe3"),p=o("ofXK"),h=o("3Pt+"),v=o("tyNb");function y(t,e){1&t&&(r.Qb(0,"div"),r.Qb(1,"ion-card-title",13),r.tc(2,"Comentarios"),r.Pb(),r.Mb(3,"div",14),r.Pb())}function P(t,e){1&t&&(r.Qb(0,"ion-item"),r.Qb(1,"ion-note",15),r.tc(2,"Se el primero en comentar!!!"),r.Pb(),r.Pb())}function C(t,e){if(1&t){var n=r.Rb();r.Qb(0,"ion-button",30),r.Yb("click",(function(){r.nc(n);var t=r.ac(2).$implicit;return r.ac().openMenuComment(t)})),r.Mb(1,"ion-icon",31),r.Pb()}}function x(t,e){if(1&t){var n=r.Rb();r.Qb(0,"div",19),r.sc(1,C,2,0,"ion-button",20),r.Qb(2,"ion-thumbnail",21),r.Qb(3,"ion-img",22),r.Yb("click",(function(){r.nc(n);var t=r.ac().$implicit;return r.ac().openViewer(t)})),r.Pb(),r.Pb(),r.Qb(4,"div",23),r.Qb(5,"div",24),r.Qb(6,"ion-text",25),r.Qb(7,"a",26),r.tc(8),r.Pb(),r.Pb(),r.Pb(),r.Qb(9,"div",27),r.Qb(10,"ion-text",28),r.tc(11),r.Pb(),r.Pb(),r.Qb(12,"div",29),r.Qb(13,"ion-text",28),r.tc(14),r.Pb(),r.Pb(),r.Pb(),r.Pb()}if(2&t){var i=r.ac().$implicit,o=r.ac();r.yb(1),r.fc("ngIf",o.authUser.user.id==i.user_id),r.yb(2),r.fc("src",o.getPhoto(i)),r.yb(4),r.fc("routerLink","/users/"+i.user.id+"/profile"),r.yb(1),r.wc(" ",i.user.last_name," ",i.user.first_name," "),r.yb(3),r.vc(" ",i.body," "),r.yb(3),r.vc(" ",o.formatDate(i.created_at)," ")}}function M(t,e){1&t&&r.Mb(0,"ion-spinner",37)}function w(t,e){if(1&t){var n=r.Rb();r.Qb(0,"div",32),r.Qb(1,"ion-text"),r.tc(2,"Editar comentario"),r.Pb(),r.Qb(3,"ion-textarea",33),r.Yb("ngModelChange",(function(t){return r.nc(n),r.ac(2).commentEdit.body=t})),r.Pb(),r.Qb(4,"div",34),r.Qb(5,"ion-button",35),r.Yb("click",(function(){return r.nc(n),r.ac(2).editComment()})),r.sc(6,M,1,0,"ion-spinner",12),r.tc(7," Actualizar "),r.Pb(),r.Qb(8,"ion-button",36),r.Yb("click",(function(){r.nc(n);var t=r.ac().$implicit;return r.ac().cancelEdit(t)})),r.tc(9,"Cancelar"),r.Pb(),r.Pb(),r.Pb()}if(2&t){var i=r.ac(2);r.yb(3),r.fc("ngModel",i.commentEdit.body),r.yb(2),r.fc("disabled",i.updatingComment),r.yb(1),r.fc("ngIf",i.updatingComment),r.yb(2),r.fc("disabled",i.updatingComment)}}function k(t,e){if(1&t&&(r.Qb(0,"ion-item",16),r.sc(1,x,15,7,"div",17),r.sc(2,w,10,4,"div",18),r.Pb()),2&t){var n=e.$implicit;r.yb(1),r.fc("ngIf",!n.edit),r.yb(1),r.fc("ngIf",n.edit)}}function Q(t,e){1&t&&r.Mb(0,"ion-icon",38)}function O(t,e){1&t&&r.Mb(0,"ion-spinner",37)}var _=function(){var e=function(){function e(n,i,o,a,s,m,d){t(this,e),this.authService=n,this.request=i,this.util=o,this.modalController=a,this.dialog=s,this.utilArray=m,this.authUser=d,this.comments=[],this.withTitle=!0,this.onUpdateComments=new r.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new c.a("Comment",i)}return n(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}},{key:"loadCooments",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new c.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe((function(n){"success"==n.status&&(t.listComments=n[t.nameRelationModel].comments),e&&e.target.complete()}),(function(t){e&&e.target.complete()})))}},{key:"resetComment",value:function(){this.comment.body=""}},{key:"send",value:function(){var t=this;console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe((function(e){"success"==e.status&&(t.listComments.push(e.data),t.onUpdateComments&&t.onUpdateComments.emit(t.listComments),t.resetComment()),t.sending=!1}),(function(e){t.sending=!1})))}},{key:"formatDate",value:function(t){return s(t).locale("es").fromNow()}},{key:"getPhoto",value:function(t){return t.user&&t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}},{key:"openViewer",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnChanges",value:function(t){t.comments&&this.loadCooments()}},{key:"openMenuComment",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dialog.actionSheetEditDelete((function(){t.edit=!0,n.commentEdit=Object.assign({},t)}),(function(){n.confirmDelete(t)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;this.commentModel.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Comentario eliminado.",null,"success"),e.utilArray.listDelete(e.listComments,t.id))}))}},{key:"cancelEdit",value:function(t){t.edit=!1,this.commentEdit={body:""}}},{key:"editComment",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe((function(t){"success"==t.status&&(e.commentEdit.edit=!1,e.utilArray.listUpdate(e.listComments,e.commentEdit.id,e.commentEdit)),e.updatingComment=!1}),(function(t){console.log(t),e.updatingComment=!1}));case 1:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Lb(d.a),r.Lb(l.a),r.Lb(u.a),r.Lb(b.nb),r.Lb(f.a),r.Lb(g.a),r.Lb(d.a))},e.\u0275cmp=r.Fb({type:e,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[r.wb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,e){1&t&&(r.Qb(0,"div",0),r.sc(1,y,4,0,"div",1),r.Qb(2,"div"),r.Qb(3,"ion-list",2),r.sc(4,P,3,0,"ion-item",1),r.sc(5,k,3,2,"ion-item",3),r.Pb(),r.Qb(6,"div",4),r.Qb(7,"form",5),r.Yb("ngSubmit",(function(){return e.send()})),r.Qb(8,"div",6),r.Qb(9,"div",7),r.Qb(10,"ion-textarea",8),r.Yb("ngModelChange",(function(t){return e.comment.body=t})),r.Pb(),r.Pb(),r.Qb(11,"div",9),r.Qb(12,"ion-fab-button",10),r.Yb("click",(function(){return e.send()})),r.sc(13,Q,1,0,"ion-icon",11),r.sc(14,O,1,0,"ion-spinner",12),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.yb(1),r.fc("ngIf",e.withTitle),r.yb(3),r.fc("ngIf",e.listComments.length<1),r.yb(1),r.fc("ngForOf",e.listComments),r.yb(5),r.fc("ngModel",e.comment.body),r.yb(2),r.fc("disabled",e.sending),r.yb(1),r.fc("ngIf",!e.sending),r.yb(1),r.fc("ngIf",e.sending))},directives:[p.k,b.H,p.j,h.i,h.e,h.f,b.fb,b.vb,h.d,h.g,b.u,b.o,b.D,b.L,b.gb,b.z,b.eb,v.i,b.tb,b.i,b.y,b.ab],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),e}()}}])}();