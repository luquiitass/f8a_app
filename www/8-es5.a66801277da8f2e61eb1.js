!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6/gD":function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var o=i("mrSG"),a=i("gcOT"),s=i("8xVP"),c=i("fXoL"),u=i("G/jy"),l=a.c.Camera,b=function(){var t=function(){function t(e){n(this,t),this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(e,n){var i=new FileReader;i.onerror=n,i.onload=function(){e(i.result)},i.readAsDataURL(t)}))},this.serviceImage=new s.a("Image",e)}return r(t,[{key:"init",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"assets/images/pngwing.png";this.url=null!=t?t:"/images/",this.thumb=null!=e&&e,this.path=n,this.photo=new d(n)}},{key:"setImage",value:function(t){this.image=t,this.photo.image=t}},{key:"addNewToGallery",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getPhoto({resultType:a.a.Uri,source:a.b.Camera,quality:100});case 2:return e=t.sent,t.next=5,this.readAsBase64(e);case 5:n=t.sent,this.photos.unshift(new d(null,e.webPath,n,this.url,this.thumb));case 7:case"end":return t.stop()}}),t,this)})))}},{key:"addOneNewToGallery",value:function(){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.getPhoto({resultType:a.a.Uri,source:a.b.Camera,quality:100});case 2:return e=t.sent,t.next=5,this.readAsBase64(e);case 5:n=t.sent,this.photo=new d(e.webPath,n,n,this.url,this.thumb,this.image);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"isLoadPthoto",value:function(){return!!this.photo.data}},{key:"readAsBase64",value:function(t){return Object(o.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.webPath);case 2:return n=e.sent,e.next=5,n.blob();case 5:return i=e.sent,e.next=8,this.convertBlobToBase64(i);case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e,this)})))}},{key:"uploadImage",value:function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(c.Ub(u.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"assets/images/pngwing.png",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;n(this,t),this.id=s?s.id:"",this.webviewPath=i,this.filepath=e,this.data=r,this.url=o,this.thumb=a,this.image=s}return r(t,[{key:"getPath",value:function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}]),t}()},Jr79:function(e,i,o){"use strict";o.r(i),o.d(i,"PublicationsPageModule",(function(){return U}));var a=o("ofXK"),s=o("3Pt+"),c=o("TEn/"),u=o("tyNb"),l=o("mrSG"),b=o("GSQ0"),d=o("8xVP"),h=o("6g0+"),f=o("CimB"),p=o("fXoL"),m=o("rLe3"),g=o("G/jy"),v=o("2Rin"),P=o("y/q6"),k=o("EbHZ"),y=o("vuFD"),w=o("zYHx");function x(t,e){1&t&&(p.Qb(0,"ion-list-header",7),p.Qb(1,"ion-label"),p.tc(2,"Sin registros"),p.Pb(),p.Pb())}function Q(t,e){if(1&t){var n=p.Rb();p.Qb(0,"ion-button",29),p.Yb("click",(function(){p.nc(n);var t=p.ac().$implicit;return p.ac(2).openMenuPublication(t)})),p.Mb(1,"ion-icon",30),p.Pb()}}function M(t,e){if(1&t&&(p.Qb(0,"div",31),p.Mb(1,"img",32),p.Pb()),2&t){var n=p.ac().$implicit;p.hc("routerLink","/publication/",n.id,"/comments"),p.yb(1),p.fc("src",n.image.urlComplete,p.oc)}}function L(t,e){1&t&&p.Mb(0,"ion-icon",33)}function C(t,e){1&t&&p.Mb(0,"ion-spinner",34)}function _(t,e){if(1&t){var n=p.Rb();p.Qb(0,"ion-item"),p.Qb(1,"ion-card",8),p.Qb(2,"ion-card-content"),p.sc(3,Q,2,0,"ion-button",9),p.Qb(4,"div",10),p.Qb(5,"ion-thumbnail",11),p.Qb(6,"ion-img",12),p.Yb("click",(function(){p.nc(n);var t=e.$implicit;return p.ac(2).showPhotoUser(t.user.photo)})),p.Pb(),p.Pb(),p.Qb(7,"div",13),p.Qb(8,"div",14),p.tc(9),p.Pb(),p.Qb(10,"div",15),p.tc(11),p.Pb(),p.Pb(),p.Pb(),p.Qb(12,"div",16),p.Qb(13,"ion-text",17),p.tc(14),p.Pb(),p.Pb(),p.sc(15,M,2,2,"div",18),p.Qb(16,"ion-grid"),p.Qb(17,"ion-row"),p.Qb(18,"ion-col",19),p.Qb(19,"ion-text",17),p.Mb(20,"ion-icon",20),p.tc(21),p.Pb(),p.Pb(),p.Qb(22,"ion-col",21),p.Qb(23,"ion-text"),p.Mb(24,"ion-icon",22),p.tc(25),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Mb(26,"div",23),p.Qb(27,"div"),p.Qb(28,"ion-buttons",24),p.Qb(29,"ion-button",25),p.Yb("click",(function(){p.nc(n);var t=e.$implicit;return p.ac(2).like(t)})),p.sc(30,L,1,0,"ion-icon",26),p.sc(31,C,1,0,"ion-spinner",27),p.Pb(),p.Qb(32,"ion-button",28),p.Mb(33,"ion-icon",22),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb()}if(2&t){var i=e.$implicit,r=p.ac(2);p.yb(3),p.fc("ngIf",r.authUser.user.id==i.user_id),p.yb(3),p.fc("src",i.user.photo?i.user.photo.urlCompleteThumb:r.pathImages.images.profile_user),p.yb(1),p.hc("routerLink","/users/",i.user.id,"/profile"),p.yb(2),p.wc(" ",i.user.last_name," ",i.user.first_name," "),p.yb(2),p.vc(" ",r.util.getFormarHumans(i.created_at)," "),p.yb(3),p.vc(" ",i.text," "),p.yb(1),p.fc("ngIf",i.image_id),p.yb(3),p.hc("routerLink","/publication/",i.id,"/likes"),p.yb(3),p.vc(" ",i.likes_count," "),p.yb(1),p.hc("routerLink","/publication/",i.id,"/comments"),p.yb(3),p.vc(" ",i.comments_count," "),p.yb(4),p.fc("color",i.liked?"danger":"primary")("disabled",!!i.processLike),p.yb(1),p.fc("ngIf",!i.processLike),p.yb(1),p.fc("ngIf",i.processLike),p.yb(1),p.hc("routerLink","/publication/",i.id,"/comments")}}function O(t,e){if(1&t){var n=p.Rb();p.Qb(0,"div"),p.Qb(1,"ion-refresher",3),p.Yb("ionRefresh",(function(t){return p.nc(n),p.ac().init(t)})),p.Mb(2,"ion-refresher-content"),p.Pb(),p.Qb(3,"ion-button",4),p.Yb("click",(function(){return p.nc(n),p.ac().openModal()})),p.tc(4,"Nueva Publicaci\xf3n"),p.Pb(),p.Qb(5,"ion-list"),p.sc(6,x,3,0,"ion-list-header",5),p.sc(7,_,34,17,"ion-item",6),p.Pb(),p.Pb()}if(2&t){var i=p.ac();p.yb(6),p.fc("ngIf",0==i.publications.length),p.yb(1),p.fc("ngForOf",i.publications)}}function I(t,e){1&t&&(p.Qb(0,"ion-card"),p.Qb(1,"ion-card-content"),p.Qb(2,"div",10),p.Qb(3,"ion-avatar",11),p.Mb(4,"ion-skeleton-text",35),p.Pb(),p.Qb(5,"div",36),p.Qb(6,"div",14),p.Mb(7,"ion-skeleton-text",37),p.Pb(),p.Qb(8,"div",15),p.Mb(9,"ion-skeleton-text",38),p.Pb(),p.Pb(),p.Pb(),p.Qb(10,"div",16),p.Qb(11,"ion-text",17),p.Mb(12,"ion-skeleton-text",39),p.Mb(13,"ion-skeleton-text",40),p.Pb(),p.Pb(),p.Qb(14,"div",41),p.Qb(15,"ion-thumbnail",42),p.Mb(16,"ion-skeleton-text",43),p.Pb(),p.Pb(),p.Qb(17,"ion-grid"),p.Qb(18,"ion-row"),p.Qb(19,"ion-col",44),p.Qb(20,"ion-text",17),p.Mb(21,"ion-icon",33),p.Pb(),p.Pb(),p.Qb(22,"ion-col",45),p.Mb(23,"ion-icon",22),p.Pb(),p.Pb(),p.Pb(),p.Mb(24,"div",23),p.Qb(25,"div"),p.Qb(26,"ion-buttons",24),p.Qb(27,"ion-button",46),p.Mb(28,"ion-icon",33),p.Pb(),p.Qb(29,"ion-button",46),p.Mb(30,"ion-icon",22),p.Pb(),p.Pb(),p.Pb(),p.Pb(),p.Pb())}function R(t,e){if(1&t&&(p.Qb(0,"div"),p.sc(1,I,31,0,"ion-card",6),p.Pb()),2&t){var n=p.ac();p.yb(1),p.fc("ngForOf",n.listSkeleton)}}var j,A,D,S=[{path:"",component:(j=function(){function e(t,i,r,o,a,s,c,u,l,b){n(this,e),this.modalController=t,this.utilArray=i,this.request=r,this.util=o,this.authUser=a,this.navCtrl=s,this.transferData=c,this.router=u,this.dialog=l,this.pathImages=b,this.publications=[],this.firstLoad=!0,this.listSkeleton=new Array(8),this.processLike=!1,this.publcationModel=new d.a("Publication",r)}return r(e,[{key:"ngOnInit",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.authUser.getUser();case 2:this.user=t.sent,this.init();case 4:case"end":return t.stop()}}),t,this)})))}},{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){var r,o=this;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:r={},n&&this.dataPaginate&&(r={page:this.dataPaginate.current_page+1}),this.publcationModel.api_function("list",r).subscribe((function(i){if(console.log(i),"success"==i.status)if(o.dataPaginate=i.data,n){var r,a=t(i.data.data);try{for(a.s();!(r=a.n()).done;){var s=r.value;o.publications.push(s)}}catch(c){a.e(c)}finally{a.f()}}else o.publications=i.data.data;e&&e.target.complete(),o.firstLoad=!1}),(function(t){console.log(t),e&&e.target.complete(),o.firstLoad=!1}));case 2:case"end":return i.stop()}}),i,this)})))}},{key:"loadData",value:function(t){if(this.dataPaginate&&this.dataPaginate.last_page==this.dataPaginate.current_page)return t.target.complete(),t.target.disabled=!0,void(this.infiniteScroll.disabled=!this.infiniteScroll.disabled);this.init(t,!0)}},{key:"openModal",value:function(){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e,n=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:b.a,componentProps:{}});case 2:return(e=t.sent).onDidDismiss().then((function(t){console.log("crate publication"),t.data&&t.data.publication&&n.utilArray.listAddFirst(n.publications,t.data.publication)})),t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})))}},{key:"showPhotoUser",value:function(t){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("show photo ",t),e.next=3,this.modalController.create({component:h.c,componentProps:{src:t?t.urlComplete:"assets/images/profile.jpg",scheme:"dark"},cssClass:"ion-img-viewer",keyboardClose:!0,showBackdrop:!0});case 3:return n=e.sent,e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}},{key:"like",value:function(t){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.processLike=!0,t.liked?this.publcationModel.api_functionModel(t.id,"removeLike",{user_id:this.user.id}).subscribe((function(e){"success"==e.status&&(t.liked=!t.liked,t.likes_count-=1),t.processLike=!1}),(function(e){console.error(e),t.processLike=!1})):this.publcationModel.api_functionModel(t.id,"addLike",{user_id:this.user.id}).subscribe((function(e){"success"==e.status&&(t.liked=!t.liked,t.likes_count+=1),t.processLike=!1}),(function(e){console.error(e),t.processLike=!1}));case 1:case"end":return e.stop()}}),e,this)})))}},{key:"showPublication",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"comments";return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var i,r=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:f.a,componentProps:{id:t.id,segment:e}});case 2:return(i=n.sent).onDidDismiss().then((function(t){console.log("update publication");var e=t.data.publication;r.utilArray.listUpdate(r.publications,e.id,e)})),n.next=6,i.present();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n,this)})))}},{key:"openMenuPublication",value:function(t){var e=this;this.dialog.actionSheetEditDelete((function(){e.editPublication(t)}),(function(){e.dialog.presentAlertConfirm("Alerta","\xbfSeguro de eliminar esta aplicaci\xf3n?",(function(){e.publcationModel.api_delete(t.id).subscribe((function(n){(n.status="success")&&(e.utilArray.listDelete(e.publications,t.id),e.dialog.showToast("Publicacion Eliminada",null,"success"))}))}))}))}},{key:"editPublication",value:function(t){return Object(l.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.modalController.create({component:b.a,componentProps:{id:t.id}});case 2:return(n=e.sent).onDidDismiss().then((function(t){if(console.log("update publicacion"),t.data&&t.data.publication){var e=t.data.publication;i.utilArray.listUpdate(i.publications,e.id,e)}})),e.next=6,n.present();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})))}}]),e}(),j.\u0275fac=function(t){return new(t||j)(p.Lb(c.nb),p.Lb(m.a),p.Lb(g.a),p.Lb(v.a),p.Lb(P.a),p.Lb(c.ob),p.Lb(k.a),p.Lb(u.g),p.Lb(y.a),p.Lb(w.a))},j.\u0275cmp=p.Fb({type:j,selectors:[["app-publications"]],viewQuery:function(t,e){var n;1&t&&p.xc(c.A,!0),2&t&&p.jc(n=p.Zb())&&(e.infiniteScroll=n.first)},decls:9,vars:2,consts:[[4,"ngIf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText",""],["slot","fixed",3,"ionRefresh"],["expand","block","fill","outline",3,"click"],["color","tertiary",4,"ngIf"],[4,"ngFor","ngForOf"],["color","tertiary"],[2,"width","100%"],["class","menu-right","fill","clear",3,"click",4,"ngIf"],[1,"publication-user"],["slot","start"],[1,"user-image",2,"border-radius","50%","background-position","center center","background-size","cover","width","40px","height","40px",3,"src","click"],["routerDirection","forward",1,"user",3,"routerLink"],[1,"name"],[1,"date"],[1,"publication-text"],["color","dark"],["class","publication-image ion-text-center","routerDirection","forward",3,"routerLink",4,"ngIf"],["routerDirection","forward",1,"ion-text-left",3,"routerLink"],["name","heart-outline","color","danger"],["routerDirection","forward",1,"ion-text-right",3,"routerLink"],["name","chatbubble-ellipses-outline"],[1,"separator"],["expand","full"],["expand","full",2,"width","50%",3,"color","disabled","click"],["name","heart-outline",4,"ngIf"],["name","lines",4,"ngIf"],["expand","full","color","primary","routerDirection","forward",2,"width","50%",3,"routerLink"],["fill","clear",1,"menu-right",3,"click"],["name","ellipsis-vertical-outline"],["routerDirection","forward",1,"publication-image","ion-text-center",3,"routerLink"],[3,"src"],["name","heart-outline"],["name","lines"],["animated",""],[1,"user"],["animated","",2,"width","150px","height","20px"],["animated","",2,"width","70px"],["animated","",2,"width","100%","height","20px"],["animated","",2,"width","90%","height","20px"],[1,"publication-image","ion-text-center"],[2,"height","200px","width","100%"],["animated","",2,"width","100%","height","100%"],[1,"ion-text-left"],[1,"ion-text-right"],["expand","full",2,"width","50%"]],template:function(t,e){1&t&&(p.Qb(0,"ion-header"),p.Qb(1,"ion-toolbar"),p.Qb(2,"ion-title"),p.tc(3,"publicaciones"),p.Pb(),p.Pb(),p.Pb(),p.Qb(4,"ion-content"),p.sc(5,O,8,2,"div",0),p.sc(6,R,2,1,"div",0),p.Qb(7,"ion-infinite-scroll",1),p.Yb("ionInfinite",(function(t){return e.loadData(t)})),p.Mb(8,"ion-infinite-scroll-content",2),p.Pb(),p.Pb()),2&t&&(p.yb(5),p.fc("ngIf",!e.firstLoad),p.yb(1),p.fc("ngIf",e.firstLoad))},directives:[c.x,c.jb,c.hb,c.r,a.k,c.A,c.B,c.O,c.P,c.i,c.H,a.j,c.I,c.G,c.D,c.k,c.l,c.gb,c.z,c.tb,u.h,c.eb,c.w,c.S,c.q,c.y,c.j,c.ab,c.e,c.Y],styles:[".publication-user[_ngcontent-%COMP%]{display:flex}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]{display:block}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin-top:5px;font-size:medium}.publication-user[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-left:5px;font-size:xx-small}.publication-text[_ngcontent-%COMP%]{margin:3px 3px 3px 15px;font-size:medium}.publication-image[_ngcontent-%COMP%]{align-self:auto}.separator[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;border-bottom:1px solid rgba(63,62,62,.671)}"]}),j)}],T=((D=function t(){n(this,t)}).\u0275mod=p.Jb({type:D}),D.\u0275inj=p.Ib({factory:function(t){return new(t||D)},imports:[[u.j.forChild(S)],u.j]}),D),U=((A=function t(){n(this,t)}).\u0275mod=p.Jb({type:A}),A.\u0275inj=p.Ib({factory:function(t){return new(t||A)},imports:[[a.b,s.a,c.kb,T,h.b]]}),A)}}])}();