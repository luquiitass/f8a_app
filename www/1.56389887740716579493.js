(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{CimB:function(t,n,e){"use strict";e.d(n,"a",(function(){return w}));var i=e("mrSG"),o=e("8xVP"),c=e("TEn/"),s=e("fXoL"),a=e("G/jy"),r=e("2Rin"),l=e("rLe3"),m=e("EbHZ"),b=e("tyNb"),u=e("y/q6"),d=e("zYHx"),p=e("vuFD"),g=e("WBL6"),f=e("ofXK");function h(t,n){1&t&&(s.Qb(0,"ion-list-header"),s.Qb(1,"ion-label"),s.vc(2," No posee me gustas "),s.Pb(),s.Pb())}function v(t,n){if(1&t&&(s.Qb(0,"ion-item"),s.Qb(1,"ion-thumbnail",2),s.Mb(2,"ion-img",3),s.Pb(),s.Qb(3,"ion-label"),s.vc(4),s.Pb(),s.Pb()),2&t){var e=n.$implicit,i=s.ac();s.yb(2),s.gc("src",e&&e.photo?e.photo.urlCompleteThumb:i.pathImages.images.profile_user),s.yb(2),s.yc(" ",e.last_name," ",e.first_name," ")}}var y=function(){function t(t){this.pathImages=t,this.likes=[]}return t.prototype.ngOnInit=function(){},t.prototype.init=function(){},t.\u0275fac=function(n){return new(n||t)(s.Lb(d.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-likes"]],inputs:{likes:"likes"},decls:5,vars:2,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover",3,"src"]],template:function(t,n){1&t&&(s.Qb(0,"ion-card"),s.Qb(1,"ion-card-content"),s.Qb(2,"ion-list"),s.uc(3,h,3,0,"ion-list-header",0),s.uc(4,v,5,3,"ion-item",1),s.Pb(),s.Pb(),s.Pb()),2&t&&(s.yb(3),s.gc("ngIf",0==n.likes.length),s.yb(1),s.gc("ngForOf",n.likes))},directives:[c.k,c.l,c.H,f.l,f.k,c.I,c.G,c.D,c.gb,c.z],styles:[""]}),t}(),P=e("OXCg"),C=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["app-not-fount"]],decls:3,vars:0,template:function(t,n){1&t&&(s.Qb(0,"ion-card"),s.Qb(1,"ion-card-content"),s.vc(2," No se ha encontrado el registro, es probable que haya sido eliminado. "),s.Pb(),s.Pb())},directives:[c.k,c.l],styles:[""]}),t}();function x(t,n){if(1&t&&(s.Qb(0,"div",16),s.Mb(1,"img",17),s.Pb()),2&t){var e=s.ac(2);s.yb(1),s.gc("src",e.publication.image.urlComplete,s.pc)}}function M(t,n){if(1&t&&(s.Qb(0,"ion-card"),s.Qb(1,"ion-card-content"),s.Qb(2,"div",7),s.Qb(3,"ion-thumbnail",0),s.Mb(4,"ion-img",8),s.Pb(),s.Qb(5,"div",9),s.Qb(6,"div",10),s.vc(7),s.Pb(),s.Qb(8,"div",11),s.vc(9),s.Pb(),s.Pb(),s.Pb(),s.Qb(10,"div",12),s.Qb(11,"ion-text",13),s.vc(12),s.Pb(),s.Pb(),s.uc(13,x,2,1,"div",14),s.Mb(14,"div",15),s.Pb(),s.Pb()),2&t){var e=s.ac();s.yb(4),s.gc("src",e.publication.user&&e.publication.user.photo?e.publication.user.photo.urlCompleteThumb:e.pathImages.images.profile_user),s.yb(3),s.yc(" ",e.publication.user.last_name," ",e.publication.user.first_name," "),s.yb(2),s.xc(" ",e.util.getFormarHumans(e.publication.created_at)," "),s.yb(3),s.xc(" ",e.publication.text," "),s.yb(1),s.gc("ngIf",e.publication.image_id)}}function Q(t,n){if(1&t){var e=s.Rb();s.Qb(0,"ion-segment",18),s.Yb("ionChange",(function(t){return s.oc(e),s.ac().segmentChanged(t)})),s.Qb(1,"ion-segment-button",19),s.Mb(2,"ion-icon",20),s.vc(3),s.Pb(),s.Qb(4,"ion-segment-button",21),s.Mb(5,"ion-icon",22),s.vc(6),s.Pb(),s.Pb()}if(2&t){var i=s.ac();s.gc("value",i.segment),s.yb(3),s.xc(" ",i.publication.likes.length," "),s.yb(3),s.xc(" ",i.publication.comments.length," ")}}function k(t,n){if(1&t&&s.Mb(0,"app-likes",23),2&t){var e=s.ac();s.gc("likes",e.publication.likes)}}function O(t,n){if(1&t){var e=s.Rb();s.Qb(0,"app-comments",24),s.Yb("onUpdateComments",(function(t){s.oc(e);var n=s.ac();return n.updateComments(t,n.publication)})),s.Pb()}if(2&t){var i=s.ac();s.gc("comments",i.publication.comments)("idRelation",i.id)("nameRelationModel","Publication")("withTitle",!1)}}function _(t,n){1&t&&s.Mb(0,"app-not-fount")}var w=function(){function t(t,n,e,i,c,s,a,r,l,m,b,u,d){var p=this;this.request=t,this.navParams=n,this.util=e,this.utilArray=i,this.viewCtrl=c,this.transferData=s,this.route=a,this.navCtrl=r,this.authUser=l,this.pathImages=m,this.dialogService=b,this.platform=u,this.reloadGlobal=d,this.segment="comments",this.firstLoading=!0,this.notFound=!1,this.publicationModel=new o.a("Publication",t),this.id=this.navParams.get("id"),this.segment=this.navParams.get("segment"),e.setEventButtonBack((function(){p.close()}))}return t.prototype.ngOnInit=function(){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(t){return this.id||(this.isModal()?(this.id=this.navParams.get("id"),this.segment="likes"==this.navParams.get("segment")?"likes":"comments"):(this.id=this.route.snapshot.paramMap.get("id"),this.segment="likes"==this.route.snapshot.paramMap.get("segment")?"likes":"comments")),this.init(),[2]}))}))},t.prototype.init=function(t){return void 0===t&&(t=null),Object(i.b)(this,void 0,void 0,(function(){var n=this;return Object(i.d)(this,(function(e){switch(e.label){case 0:return this.firstLoading?[4,this.dialogService.loadingProgres()]:[3,2];case 1:e.sent(),this.firstLoading=!1,e.label=2;case 2:return this.publicationModel.api_functionModel(this.id,"pageShow").subscribe((function(e){n.publication=e.data,t&&t.target.complete(),n.dialogService.dimissLoaging()}),(function(e){n.util.notFoundItemApi(e)&&(n.notFound=!0),console.log(e),t&&t.target.complete(),n.dialogService.dimissLoaging()})),[2]}}))}))},t.prototype.close=function(){console.log("close"),this.isModal()?(this.publication.comments_count=this.publication.comments.length,this.publication.likes_count=this.publication.likes.length,this.reloadGlobal.reload("publication_reload",this.publication),this.viewCtrl.dismiss({publication:this.publication})):this.navCtrl.navigateForward("/home/publications")},t.prototype.segmentChanged=function(t){console.log("Segment changed",t),this.segment=t.detail.value},t.prototype.updateComments=function(t,n){this.publication.comments=t},t.prototype.ngOnDestroy=function(){console.log("estroy"),this.reloadGlobal.reload("publication_reload",this.publication)},t.prototype.isModal=function(){return null!=this.viewCtrl.getTop()},t.\u0275fac=function(n){return new(n||t)(s.Lb(a.a),s.Lb(c.pb),s.Lb(r.a),s.Lb(l.a),s.Lb(c.nb),s.Lb(m.a),s.Lb(b.a),s.Lb(c.ob),s.Lb(u.a),s.Lb(d.a),s.Lb(p.a),s.Lb(c.rb),s.Lb(g.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-publication"]],features:[s.xb([c.pb])],decls:14,vars:5,consts:[["slot","start"],["defaultHref","/home/publications",3,"click"],["slot","fixed",3,"ionRefresh"],[4,"ngIf"],["color","secondary",3,"value","ionChange",4,"ngIf"],[3,"likes",4,"ngIf"],[3,"comments","idRelation","nameRelationModel","withTitle","onUpdateComments",4,"ngIf"],[1,"publication-user"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src"],[1,"user"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center",4,"ngIf"],[1,"separator"],[1,"publication-image","ion-text-center"],[3,"src"],["color","secondary",3,"value","ionChange"],["value","likes","layout","icon-start",1,"sgm-likes"],["name","heart-outline"],["value","comments","layout","icon-start",1,"sgm-comments"],["name","chatbubble-ellipses-outline"],[3,"likes"],[3,"comments","idRelation","nameRelationModel","withTitle","onUpdateComments"]],template:function(t,n){1&t&&(s.Qb(0,"ion-header"),s.Qb(1,"ion-toolbar"),s.Qb(2,"ion-title"),s.vc(3,"Publicaci\xf3n"),s.Pb(),s.Qb(4,"ion-buttons",0),s.Qb(5,"ion-back-button",1),s.Yb("click",(function(){return n.close()})),s.Pb(),s.Pb(),s.Pb(),s.Pb(),s.Qb(6,"ion-content"),s.Qb(7,"ion-refresher",2),s.Yb("ionRefresh",(function(t){return n.init(t)})),s.Mb(8,"ion-refresher-content"),s.Pb(),s.uc(9,M,15,6,"ion-card",3),s.uc(10,Q,7,3,"ion-segment",4),s.uc(11,k,1,1,"app-likes",5),s.uc(12,O,1,4,"app-comments",6),s.uc(13,_,1,0,"app-not-fount",3),s.Pb()),2&t&&(s.yb(9),s.gc("ngIf",n.publication),s.yb(1),s.gc("ngIf",n.publication),s.yb(1),s.gc("ngIf",n.publication&&"likes"==n.segment),s.yb(1),s.gc("ngIf",n.publication&&"comments"==n.segment),s.yb(1),s.gc("ngIf",n.notFound))},directives:[c.x,c.jb,c.hb,c.j,c.f,c.g,c.r,c.O,c.P,f.l,c.k,c.l,c.gb,c.z,c.eb,c.U,c.ub,c.V,c.y,y,P.a,C],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:10px 10px 10px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}.sgm-likes[_ngcontent-%COMP%]{--ion-color-base:#e73636!important}.sgm-comments[_ngcontent-%COMP%]{--ion-color-base:#277ecf!important}"]}),t}()},OXCg:function(t,n,e){"use strict";e.d(n,"a",(function(){return O}));var i=e("mrSG"),o=e("fXoL"),c=e("8xVP"),s=e("wd/R"),a=e("6g0+"),r=e("y/q6"),l=e("G/jy"),m=e("2Rin"),b=e("TEn/"),u=e("vuFD"),d=e("rLe3"),p=e("ofXK"),g=e("3Pt+"),f=e("tyNb");function h(t,n){1&t&&(o.Qb(0,"div"),o.Qb(1,"ion-card-title",13),o.vc(2,"Comentarios"),o.Pb(),o.Mb(3,"div",14),o.Pb())}function v(t,n){1&t&&(o.Qb(0,"ion-item"),o.Qb(1,"ion-note",15),o.vc(2,"Se el primero en comentar!!!"),o.Pb(),o.Pb())}function y(t,n){if(1&t){var e=o.Rb();o.Qb(0,"ion-button",30),o.Yb("click",(function(){o.oc(e);var t=o.ac(2).$implicit;return o.ac().openMenuComment(t)})),o.Mb(1,"ion-icon",31),o.Pb()}}function P(t,n){if(1&t){var e=o.Rb();o.Qb(0,"div",19),o.uc(1,y,2,0,"ion-button",20),o.Qb(2,"ion-thumbnail",21),o.Qb(3,"ion-img",22),o.Yb("click",(function(){o.oc(e);var t=o.ac().$implicit;return o.ac().openViewer(t)})),o.Pb(),o.Pb(),o.Qb(4,"div",23),o.Qb(5,"div",24),o.Qb(6,"ion-text",25),o.Qb(7,"a",26),o.vc(8),o.Pb(),o.Pb(),o.Pb(),o.Qb(9,"div",27),o.Qb(10,"ion-text",28),o.vc(11),o.Pb(),o.Pb(),o.Qb(12,"div",29),o.Qb(13,"ion-text",28),o.vc(14),o.Pb(),o.Pb(),o.Pb(),o.Pb()}if(2&t){var i=o.ac().$implicit,c=o.ac();o.yb(1),o.gc("ngIf",c.authUser.user.id==i.user_id),o.yb(2),o.gc("src",c.getPhoto(i)),o.yb(4),o.gc("routerLink","/users/"+i.user.id+"/profile"),o.yb(1),o.yc(" ",i.user.last_name," ",i.user.first_name," "),o.yb(3),o.xc(" ",i.body," "),o.yb(3),o.xc(" ",c.formatDate(i.created_at)," ")}}function C(t,n){1&t&&o.Mb(0,"ion-spinner",37)}function x(t,n){if(1&t){var e=o.Rb();o.Qb(0,"div",32),o.Qb(1,"ion-text"),o.vc(2,"Editar comentario"),o.Pb(),o.Qb(3,"ion-textarea",33),o.Yb("ngModelChange",(function(t){return o.oc(e),o.ac(2).commentEdit.body=t})),o.Pb(),o.Qb(4,"div",34),o.Qb(5,"ion-button",35),o.Yb("click",(function(){return o.oc(e),o.ac(2).editComment()})),o.uc(6,C,1,0,"ion-spinner",12),o.vc(7," Actualizar "),o.Pb(),o.Qb(8,"ion-button",36),o.Yb("click",(function(){o.oc(e);var t=o.ac().$implicit;return o.ac().cancelEdit(t)})),o.vc(9,"Cancelar"),o.Pb(),o.Pb(),o.Pb()}if(2&t){var i=o.ac(2);o.yb(3),o.gc("ngModel",i.commentEdit.body),o.yb(2),o.gc("disabled",i.updatingComment),o.yb(1),o.gc("ngIf",i.updatingComment),o.yb(2),o.gc("disabled",i.updatingComment)}}function M(t,n){if(1&t&&(o.Qb(0,"ion-item",16),o.uc(1,P,15,7,"div",17),o.uc(2,x,10,4,"div",18),o.Pb()),2&t){var e=n.$implicit;o.yb(1),o.gc("ngIf",!e.edit),o.yb(1),o.gc("ngIf",e.edit)}}function Q(t,n){1&t&&o.Mb(0,"ion-icon",38)}function k(t,n){1&t&&o.Mb(0,"ion-spinner",37)}var O=function(){function t(t,n,e,i,s,a,r){this.authService=t,this.request=n,this.util=e,this.modalController=i,this.dialog=s,this.utilArray=a,this.authUser=r,this.comments=[],this.withTitle=!0,this.loadServer=!0,this.onUpdateComments=new o.n,this.listComments=[],this.sending=!1,this.updatingComment=!1,this.commentModel=new c.a("Comment",n)}return t.prototype.ngOnInit=function(){this.init()},t.prototype.init=function(){this.comment={idRelation:this.idRelation,nameRelationModel:this.nameRelationModel,body:this.commentText},this.resetComment(),this.loadCooments()},t.prototype.loadCooments=function(t){var n=this;void 0===t&&(t=null),this.listComments=this.comments,console.log("loadServer",this.loadServer),this.loadServer&&(this.comments&&this.comments.length>0||(this.relationModel=new c.a(this.nameRelationModel,this.request),this.relationModel.api_loadAttribute(this.idRelation,"comments").subscribe((function(e){"success"==e.status&&(n.listComments=e[n.nameRelationModel].comments),t&&t.target.complete()}),(function(n){t&&t.target.complete()}))))},t.prototype.resetComment=function(){this.comment.body=""},t.prototype.send=function(){var t=this;console.log("send"),this.comment.body&&(this.comment.body=this.comment.body.trim(),this.sending=!0,this.commentModel.api_function("add",this.comment).subscribe((function(n){"success"==n.status&&(t.listComments.push(n.data),t.onUpdateComments&&t.onUpdateComments.emit(t.listComments),t.resetComment()),t.sending=!1}),(function(n){t.sending=!1})))},t.prototype.formatDate=function(t){return s(t).locale("es").fromNow()},t.prototype.getPhoto=function(t){return t.user&&t.user.photo?t.user.photo.urlCompleteThumb:"assets/images/profile.jpg"},t.prototype.openViewer=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){switch(n.label){case 0:return[4,this.modalController.create({component:a.c,componentProps:{src:t.user.photo?t.user.photo.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0})];case 1:return[4,n.sent().present()];case 2:return[2,n.sent()]}}))}))},t.prototype.ngOnChanges=function(t){t.comments&&this.loadCooments()},t.prototype.openMenuComment=function(t){return Object(i.b)(this,void 0,void 0,(function(){var n=this;return Object(i.d)(this,(function(e){return this.dialog.actionSheetEditDelete((function(){t.edit=!0,n.commentEdit=Object(i.a)({},t)}),(function(){n.confirmDelete(t)})),[2]}))}))},t.prototype.confirmDelete=function(t){var n=this;this.dialog.presentAlertConfirm("Confirmar","\xbfEstas seguro de eliminar este comentario?",(function(e){n.delete(t)}))},t.prototype.delete=function(t){var n=this;this.commentModel.api_delete(t.id).subscribe((function(e){console.log(e),"success"==e.status&&(n.dialog.showToast("Comentario eliminado.",null,"success"),n.onUpdateComments&&n.onUpdateComments.emit(n.listComments),n.utilArray.listDelete(n.listComments,t.id))}))},t.prototype.cancelEdit=function(t){t.edit=!1,this.commentEdit={body:""}},t.prototype.editComment=function(){return Object(i.b)(this,void 0,void 0,(function(){var t=this;return Object(i.d)(this,(function(n){return console.log("edit comment api"),this.updatingComment=!0,this.commentEdit.body=this.commentEdit.body.trim(),this.commentModel.api_update(this.commentEdit).subscribe((function(n){"success"==n.status&&(t.commentEdit.edit=!1,t.utilArray.listUpdate(t.listComments,t.commentEdit.id,t.commentEdit)),t.updatingComment=!1}),(function(n){console.log(n),t.updatingComment=!1})),[2]}))}))},t.\u0275fac=function(n){return new(n||t)(o.Lb(r.a),o.Lb(l.a),o.Lb(m.a),o.Lb(b.nb),o.Lb(u.a),o.Lb(d.a),o.Lb(r.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-comments"]],inputs:{nameRelationModel:"nameRelationModel",idRelation:"idRelation",comments:"comments",withTitle:"withTitle",loadServer:"loadServer"},outputs:{onUpdateComments:"onUpdateComments"},features:[o.wb],decls:15,vars:7,consts:[[2,"margin-top","20px"],[4,"ngIf"],["lines","none",2,"margin","0px","padding","0px"],["class","team-list",4,"ngFor","ngForOf"],[1,"content-new"],[3,"ngSubmit"],[1,"content-comment"],[1,"content-comment-text"],["name","body","placeholder","A\xf1ade un comentario...",1,"editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-comment-btn","ion-align-self-end"],["size","small","color","primary","type","submit",1,"edditor-send",3,"disabled","click"],["name","send-sharp",4,"ngIf"],["name","lines",4,"ngIf"],[1,"ion-text-center","title"],[1,"separator"],[2,"font-size","large","margin","15px"],[1,"team-list"],["class","comment-item",4,"ngIf"],["class","comment-edit",4,"ngIf"],[1,"comment-item"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],["slot","start",1,"comment-image"],[1,"comment-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],[1,"comment-data"],[1,"comment-user"],["color","dark"],[2,"text-decoration","blink",3,"routerLink"],[1,"comment-body","first-uppercase"],["color","light"],[1,"comment-date"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],[1,"comment-edit"],["name","body","placeholder","A\xf1ade un comentario...",1,"form-control","editor-text","first-uppercase",3,"ngModel","ngModelChange"],[1,"content-right","comment-edit-bts"],["slot","end",3,"disabled","click"],["slot","end","color","light",3,"disabled","click"],["name","lines"],["name","send-sharp"]],template:function(t,n){1&t&&(o.Qb(0,"div",0),o.uc(1,h,4,0,"div",1),o.Qb(2,"div"),o.Qb(3,"ion-list",2),o.uc(4,v,3,0,"ion-item",1),o.uc(5,M,3,2,"ion-item",3),o.Pb(),o.Qb(6,"div",4),o.Qb(7,"form",5),o.Yb("ngSubmit",(function(){return n.send()})),o.Qb(8,"div",6),o.Qb(9,"div",7),o.Qb(10,"ion-textarea",8),o.Yb("ngModelChange",(function(t){return n.comment.body=t})),o.Pb(),o.Pb(),o.Qb(11,"div",9),o.Qb(12,"ion-fab-button",10),o.Yb("click",(function(){return n.send()})),o.uc(13,Q,1,0,"ion-icon",11),o.uc(14,k,1,0,"ion-spinner",12),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb(),o.Pb()),2&t&&(o.yb(1),o.gc("ngIf",n.withTitle),o.yb(3),o.gc("ngIf",n.listComments.length<1),o.yb(1),o.gc("ngForOf",n.listComments),o.yb(5),o.gc("ngModel",n.comment.body),o.yb(2),o.gc("disabled",n.sending),o.yb(1),o.gc("ngIf",!n.sending),o.yb(1),o.gc("ngIf",n.sending))},directives:[p.l,b.H,p.k,g.i,g.e,g.f,b.fb,b.vb,g.d,g.g,b.u,b.o,b.D,b.L,b.gb,b.z,b.eb,f.i,b.tb,b.i,b.y,b.ab],styles:[".comment-item[_ngcontent-%COMP%]{width:100%;display:flex}.comment-image[_ngcontent-%COMP%]{font-size:large}.comment-data[_ngcontent-%COMP%]{width:100%}.comment-user[_ngcontent-%COMP%]{font-size:large;margin-top:10px;font-weight:700}.comment-body[_ngcontent-%COMP%]{font-size:medium;font-style:italic;margin-left:5px;color:#2f4f4f;white-space:pre-wrap}.comment-date[_ngcontent-%COMP%]{font-size:x-small;text-align:right;color:#2f4f4f}.editor-text[_ngcontent-%COMP%]{box-shadow:2px 2px 5px #999;padding:2px;border-radius:15px}.editor-send[_ngcontent-%COMP%]{margin-left:-5px}.content-comment[_ngcontent-%COMP%]{margin:10px;display:flex}.content-comment-text[_ngcontent-%COMP%]{width:90%}.content-comment-btn[_ngcontent-%COMP%]{width:10%}.comment-image[_ngcontent-%COMP%]{margin-top:3px;margin-right:5px}.comment-edit[_ngcontent-%COMP%]{width:100%;margin-bottom:15px;padding:5px}.comment-edit[_ngcontent-%COMP%], .comment-edit-bts[_ngcontent-%COMP%]{margin-top:10px}.title[_ngcontent-%COMP%]{color:#fff;padding-top:10px;padding-bottom:5px;font-size:x-large;border-top-left-radius:10px;border-top-right-radius:10px}.content-new[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{background:var(--background-l1)}.content-new[_ngcontent-%COMP%]{border-bottom-left-radius:10px;border-bottom-right-radius:10px;padding-top:5px;padding-bottom:10px}"]}),t}()},rLe3:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var i=e("mrSG"),o=e("fXoL"),c=function(){function t(){}return t.prototype.listAddLast=function(t,n){t.push(n)},t.prototype.listAddFirst=function(t,n){t.unshift(n)},t.prototype.listUpdate=function(t,n,e){var i=this.findIndexList(t,n);i>=0&&(t[i]=e)},t.prototype.listDelete=function(t,n){var e=this.findIndexList(t,n);e>=0&&t.splice(e,1)},t.prototype.findList=function(t,n){return t.find((function(t){return t.id===n}))},t.prototype.findIndexList=function(t,n){return t.findIndex((function(t){return t.id===n}))},t.prototype.updateAttribustesObject=function(t,n,e){var o,c;void 0===e&&(e=[]),console.log("update attributes");try{for(var s=Object(i.h)(e),a=s.next();!a.done;a=s.next()){var r=a.value;n.hasOwnProperty(r)&&(t[r]=n[r])}}catch(l){o={error:l}}finally{try{a&&!a.done&&(c=s.return)&&c.call(s)}finally{if(o)throw o.error}}return t},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac=function(n){return new(n||t)},providedIn:"root"}),t}()}}]);