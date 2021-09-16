!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{GFJk:function(e,i,o){"use strict";o.r(i),o.d(i,"GamePageModule",(function(){return j}));var a=o("ofXK"),s=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),m=o("mrSG"),d=o("8xVP"),l=o("XNCR"),u=o("wd/R"),b=o("fXoL"),g=o("G/jy"),f=o("2Rin"),h=o("vuFD"),p=o("T3jL"),v=o("y/q6"),y=o("QbbR"),P=o("xj5e"),C=o("OXCg");function x(t,e){if(1&t){var n=b.Rb();b.Qb(0,"ion-buttons",4),b.Qb(1,"ion-button",5),b.Yb("click",(function(){return b.nc(n),b.ac().confirmDelete()})),b.Mb(2,"ion-icon",6),b.Pb(),b.Pb()}}function w(t,e){if(1&t){var n=b.Rb();b.Qb(0,"div",10),b.Qb(1,"ion-button",5),b.Yb("click",(function(){return b.nc(n),b.ac(2).addResult()})),b.tc(2,"A\xf1adir resultado"),b.Pb(),b.Pb()}}function M(t,e){if(1&t&&(b.Qb(0,"ion-card"),b.Qb(1,"ion-card-header"),b.Qb(2,"ion-card-subtitle"),b.tc(3,"Ubicaci\xf3n"),b.Pb(),b.Qb(4,"ion-card-title"),b.tc(5),b.Pb(),b.Pb(),b.Pb()),2&t){var n=b.ac(2);b.yb(5),b.uc(n.game.location)}}function k(t,e){if(1&t&&(b.Qb(0,"div",7),b.Mb(1,"app-game-list",8),b.sc(2,w,3,0,"div",9),b.Qb(3,"div",10),b.Qb(4,"ion-badge",11),b.tc(5),b.Pb(),b.Pb(),b.sc(6,M,6,1,"ion-card",12),b.Mb(7,"app-old-next-game",8),b.Mb(8,"app-comments",13),b.Pb()),2&t){var n=b.ac();b.yb(1),b.fc("game",n.game),b.yb(1),b.fc("ngIf","Pendiente"==n.game.status&&n.isFinish()),b.yb(3),b.uc(n.game.status),b.yb(1),b.fc("ngIf",n.game.location),b.yb(1),b.fc("game",n.game.oldGame),b.yb(1),b.fc("idRelation",n.id)("nameRelationModel","Game")}}var Q,O,R,_=[{path:"",component:(Q=function(){function e(n,i,o,a,s,r,c,m,l){t(this,e),this.route=n,this.requesService=i,this.util=o,this.dialogService=a,this.modalController=s,this.router=r,this.navCtrl=c,this.listsHomeService=m,this.authUser=l,this.firstLoading=!0,this.id=this.route.snapshot.paramMap.get("id"),this.gameModel=new d.a("Game",i)}return n(e,[{key:"ngOnInit",value:function(){this.init(),this.analyzeParameters()}},{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=this.firstLoading,!e.t0){e.next=5;break}return e.next=4,this.dialogService.loadingProgres();case 4:this.firstLoading=!1;case 5:this.gameModel.api_functionModel(this.id,"dataProfile").subscribe((function(e){"success"==e.status&&(n.game=e.data),console.log("Game",n.game),n.isFinish(),t&&t.target.complete(),n.dialogService.dimissLoaging()}),(function(t){n.dialogService.dimissLoaging()}));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"addResult",value:function(){return Object(m.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:l.a,componentProps:{game:this.game}});case 2:return(e=t.sent).onDidDismiss().then((function(t){t.data.game&&(n.game=n.game,n.listsHomeService.remove("games",n.game.id),n.router.navigateByUrl("results/profile/"+n.game.id))})),t.next=6,e.present();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"isFinish",value:function(){var t=u("".concat(this.game.date," ").concat(this.game.time)).add(2,"hours"),e=new Date;return u(e).isAfter(t)}},{key:"confirmDelete",value:function(){var t=this;this.dialogService.presentAlertConfirm("Confirmar","Estas seguro de eliminar este game",(function(e){t.delete()}))}},{key:"delete",value:function(){var t=this;this.gameModel.api_delete(this.game.id).subscribe((function(e){console.log(e),"success"==e.status&&(t.dialogService.showToast("Partido Eliminado",null,"success"),t.listsHomeService.remove("games",t.game.id),t.navCtrl.navigateRoot("/home/games"))}))}},{key:"analyzeParameters",value:function(){var t=this.route.snapshot.queryParamMap.get("reload");console.log("reload:",t)}},{key:"isAdminTeam",get:function(){return this.authUser.isAdminGame(this.game)||this.authUser.isAdmin()}}]),e}(),Q.\u0275fac=function(t){return new(t||Q)(b.Lb(c.a),b.Lb(g.a),b.Lb(f.a),b.Lb(h.a),b.Lb(r.nb),b.Lb(c.g),b.Lb(r.ob),b.Lb(p.a),b.Lb(v.a))},Q.\u0275cmp=b.Fb({type:Q,selectors:[["app-game"]],decls:9,vars:2,consts:[["slot","start"],["defaultHref","/home/games"],["slot","secondary",4,"ngIf"],["class","game",4,"ngIf"],["slot","secondary"],[3,"click"],["name","trash-outline"],[1,"game"],[3,"game"],["class","ion-text-center",4,"ngIf"],[1,"ion-text-center"],["color","tertiary"],[4,"ngIf"],[3,"idRelation","nameRelationModel"]],template:function(t,e){1&t&&(b.Qb(0,"ion-header"),b.Qb(1,"ion-toolbar"),b.Qb(2,"ion-title"),b.tc(3,"Partido"),b.Pb(),b.Qb(4,"ion-buttons",0),b.Mb(5,"ion-back-button",1),b.Pb(),b.sc(6,x,3,0,"ion-buttons",2),b.Pb(),b.Pb(),b.Qb(7,"ion-content"),b.sc(8,k,9,7,"div",3),b.Pb()),2&t&&(b.yb(6),b.fc("ngIf",e.isAdminTeam),b.yb(2),b.fc("ngIf",e.game))},directives:[r.x,r.jb,r.hb,r.j,r.f,r.g,a.k,r.r,r.i,r.y,y.a,r.h,P.a,C.a,r.k,r.m,r.n,r.o],styles:["",".team-list[_ngcontent-%COMP%]{display:block}.vs[_ngcontent-%COMP%]{width:6%}.game[_ngcontent-%COMP%]{width:100%;padding:10px;background-repeat:no-repeat;background-size:100%;font-size:small}.team[_ngcontent-%COMP%]{display:flex;align-items:center;width:47%;flex-flow:column-reverse}.team-name[_ngcontent-%COMP%]{margin-left:15px;margin-right:15px;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.img-team[_ngcontent-%COMP%]{border-radius:50%;background-position:50%;width:30px;height:30px}.contenedor[_ngcontent-%COMP%]{margin:10px auto;display:flex;align-items:center;justify-content:center;width:100%;text-align:-webkit-center}.date[_ngcontent-%COMP%]{text-align:center}"]}),Q)}],L=((O=function e(){t(this,e)}).\u0275mod=b.Jb({type:O}),O.\u0275inj=b.Ib({factory:function(t){return new(t||O)},imports:[[c.j.forChild(_)],c.j]}),O),I=o("j1ZV"),j=((R=function e(){t(this,e)}).\u0275mod=b.Jb({type:R}),R.\u0275inj=b.Ib({factory:function(t){return new(t||R)},imports:[[a.b,s.a,r.kb,L,I.a]]}),R)},OXCg:function(e,i,o){"use strict";o.d(i,"a",(function(){return R}));var a=o("mrSG"),s=o("fXoL"),r=o("8xVP"),c=o("wd/R"),m=o("6g0+"),d=o("y/q6"),l=o("G/jy"),u=o("2Rin"),b=o("TEn/"),g=o("vuFD"),f=o("rLe3"),h=o("ofXK"),p=o("3Pt+"),v=o("tyNb");function y(t,e){1&t&&(s.Qb(0,"div"),s.Qb(1,"ion-card-title",13),s.tc(2,"Comentarios"),s.Pb(),s.Mb(3,"div",14),s.Pb())}function P(t,e){1&t&&(s.Qb(0,"ion-item"),s.Qb(1,"ion-note",15),s.tc(2,"Se el primero en comentar!!!"),s.Pb(),s.Pb())}function C(t,e){if(1&t){var n=s.Rb();s.Qb(0,"ion-button",30),s.Yb("click",(function(){s.nc(n);var t=s.ac(2).$implicit;return s.ac().openMenuComment(t)})),s.Mb(1,"ion-icon",31),s.Pb()}}function x(t,e){if(1&t){var n=s.Rb();s.Qb(0,"div",19),s.sc(1,C,2,0,"ion-button",20),s.Qb(2,"ion-thumbnail",21),s.Qb(3,"ion-img",22),s.Yb("click",(function(){s.nc(n);var t=s.ac().$implicit;return s.ac().openViewer(t)})),s.Pb(),s.Pb(),s.Qb(4,"div",23),s.Qb(5,"div",24),s.Qb(6,"ion-text",25),s.Qb(7,"a",26),s.tc(8),s.Pb(),s.Pb(),s.Pb(),s.Qb(9,"div",27),s.Qb(10,"ion-text",28),s.tc(11),s.Pb(),s.Pb(),s.Qb(12,"div",29),s.Qb(13,"ion-text",28),s.tc(14),s.Pb(),s.Pb(),s.Pb(),s.Pb()}if(2&t){var i=s.ac().$implicit,o=s.ac();s.yb(1),s.fc("ngIf",o.authUser.user.id==i.user_id),s.yb(2),s.fc("src",o.getPhoto(i)),s.yb(4),s.fc("routerLink","/users/"+i.user.id+"/profile"),s.yb(1),s.wc(" ",i.user.last_name," ",i.user.first_name," "),s.yb(3),s.vc(" ",i.body," "),s.yb(3),s.vc(" ",o.formatDate(i.created_at)," ")}}function w(t,e){1&t&&s.Mb(0,"ion-spinner",37)}function M(t,e){if(1&t){var n=s.Rb();s.Qb(0,"div",32),s.Qb(1,"ion-text"),s.tc(2,"Editar comentario"),s.Pb(),s.Qb(3,"ion-textarea",33),s.Yb("ngModelChange",(function(t){return s.nc(n),s.ac(2).commentEdit.body=t})),s.Pb(),s.Qb(4,"div",34),s.Qb(5,"ion-button",35),s.Yb("click",(function(){return s.nc(n),s.ac(2).editComment()})),s.sc(6,w,1,0,"ion-spinner",12),s.tc(7," Actualizar "),s.Pb(),s.Qb(8,"ion-button",36),s.Yb("click",(function(){s.nc(n);var t=s.ac().$implicit;return s.ac().cancelEdit(t)})),s.tc(9,"Cancelar"),s.Pb(),s.Pb(),s.Pb()}if(2&t){var i=s.ac(2);s.yb(3),s.fc("ngModel",i.commentEdit.body),s.yb(2),s.fc("disabled",i.updatingComment),s.yb(1),s.fc("ngIf",i.updatingComment),s.yb(2),s.fc("disabled",i.updatingComment)}}function k(t,e){if(1&t&&(s.Qb(0,"ion-item",16),s.sc(1,x,15,7,"div",17),s.sc(2,M,10,4,"div",18),s.Pb()),2&t){var n=e.$implicit;s.yb(1),s.fc("ngIf",!n.edit),s.yb(1),s.fc("ngIf",n.edit)}}function Q(t,e){1&t&&s.Mb(0,"ion-icon",38)}function O(t,e){1&t&&s.Mb(0,"ion-spinner",37)}var R=function(){var e=function(){function e(n,i,o,a,c,m,d){t(this,e),this.authService=n,this.request=i,this.util=o,this.modalController=a,this.dialog=c,this.utilArray=m,this.authUser=d,this.comments=[],this.withTitle=!0,this.onUpdateComments=new s.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new r.a("Comment",i)}return n(e,[{key:"ngOnInit",value:function(){this.init()}},{key:"init",value:function(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()}},{key:"loadCooments",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.listComments=this.comments,this.comments&&this.comments.length>0||(this.relationModel=new r.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe((function(n){"success"==n.status&&(t.listComments=n[t.nameRelationModel].comments),e&&e.target.complete()}),(function(t){e&&e.target.complete()})))}},{key:"resetComment",value:function(){this.comment.body=""}},{key:"send",value:function(){var t=this;console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe((function(e){"success"==e.status&&(t.listComments.push(e.data),t.onUpdateComments&&t.onUpdateComments.emit(t.listComments),t.resetComment()),t.sending=!1}),(function(e){t.sending=!1})))}},{key:"formatDate",value:function(t){return c(t).locale("es").fromNow()}},{key:"getPhoto",value:function(t){return t.user&&t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"}},{key:"openViewer",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:m.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 2:return n=e.sent,e.next=5,n.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnChanges",value:function(t){t.comments&&this.loadCooments()}},{key:"openMenuComment",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.dialog.actionSheetEditDelete((function(){t.edit=!0,n.commentEdit=Object.assign({},t)}),(function(){n.confirmDelete(t)}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"confirmDelete",value:function(t){var e=this;this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",(function(n){e.delete(t)}))}},{key:"delete",value:function(t){var e=this;this.commentModel.api_delete(t.id).subscribe((function(n){console.log(n),"success"==n.status&&(e.dialog.showToast("Comentario eliminado.",null,"success"),e.utilArray.listDelete(e.listComments,t.id))}))}},{key:"cancelEdit",value:function(t){t.edit=!1,this.commentEdit={body:""}}},{key:"editComment",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe((function(t){"success"==t.status&&(e.commentEdit.edit=!1,e.utilArray.listUpdate(e.listComments,e.commentEdit.id,e.commentEdit)),e.updatingComment=!1}),(function(t){console.log(t),e.updatingComment=!1}));case 1:case"end":return t.stop()}}),t,this)})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Lb(d.a),s.Lb(l.a),s.Lb(u.a),s.Lb(b.nb),s.Lb(g.a),s.Lb(f.a),s.Lb(d.a))},e.\u0275cmp=s.Fb({type:e,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle"},outputs:{onUpdateComments:"onUpdateComments"},features:[s.wb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,e){1&t&&(s.Qb(0,"div",0),s.sc(1,y,4,0,"div",1),s.Qb(2,"div"),s.Qb(3,"ion-list",2),s.sc(4,P,3,0,"ion-item",1),s.sc(5,k,3,2,"ion-item",3),s.Pb(),s.Qb(6,"div",4),s.Qb(7,"form",5),s.Yb("ngSubmit",(function(){return e.send()})),s.Qb(8,"div",6),s.Qb(9,"div",7),s.Qb(10,"ion-textarea",8),s.Yb("ngModelChange",(function(t){return e.comment.body=t})),s.Pb(),s.Pb(),s.Qb(11,"div",9),s.Qb(12,"ion-fab-button",10),s.Yb("click",(function(){return e.send()})),s.sc(13,Q,1,0,"ion-icon",11),s.sc(14,O,1,0,"ion-spinner",12),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.yb(1),s.fc("ngIf",e.withTitle),s.yb(3),s.fc("ngIf",e.listComments.length<1),s.yb(1),s.fc("ngForOf",e.listComments),s.yb(5),s.fc("ngModel",e.comment.body),s.yb(2),s.fc("disabled",e.sending),s.yb(1),s.fc("ngIf",!e.sending),s.yb(1),s.fc("ngIf",e.sending))},directives:[h.k,b.H,h.j,p.i,p.e,p.f,b.fb,b.vb,p.d,p.g,b.u,b.o,b.D,b.L,b.gb,b.z,b.eb,v.i,b.tb,b.i,b.y,b.ab],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),e}()}}])}();