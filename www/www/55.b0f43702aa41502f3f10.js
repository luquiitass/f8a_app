(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"6/gD":function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("mrSG"),o=i("gcOT"),r=i("8xVP"),s=i("fXoL"),a=i("G/jy"),u=o.c.Camera,h=function(){function t(t){this.photos=[],this.convertBlobToBase64=function(t){return new Promise((function(e,i){var n=new FileReader;n.onerror=i,n.onload=function(){e(n.result)},n.readAsDataURL(t)}))},this.serviceImage=new r.a("Image",t)}return t.prototype.init=function(t,e,i){void 0===e&&(e=!0),void 0===i&&(i="assets/images/pngwing.png"),this.url=null!=t?t:"/images/",this.thumb=null!=e&&e,this.path=i,this.photo=new c(i)},t.prototype.setImage=function(t){this.image=t,this.photo.image=t},t.prototype.addNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,u.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=i.sent(),[4,this.readAsBase64(t)];case 2:return e=i.sent(),this.photos.unshift(new c(null,t.webPath,e,this.url,this.thumb)),[2]}}))}))},t.prototype.addOneNewToGallery=function(){return Object(n.b)(this,void 0,void 0,(function(){var t,e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,u.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100})];case 1:return t=i.sent(),[4,this.readAsBase64(t)];case 2:return e=i.sent(),this.photo=new c(t.webPath,e,e,this.url,this.thumb,this.image),[2]}}))}))},t.prototype.isLoadPthoto=function(){return!!this.photo.data},t.prototype.readAsBase64=function(t){return Object(n.b)(this,void 0,void 0,(function(){var e;return Object(n.d)(this,(function(i){switch(i.label){case 0:return[4,fetch(t.webPath)];case 1:return[4,i.sent().blob()];case 2:return e=i.sent(),[4,this.convertBlobToBase64(e)];case 3:return[2,i.sent()]}}))}))},t.prototype.uploadImage=function(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)},t.\u0275fac=function(e){return new(e||t)(s.Ub(a.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),c=function(){function t(t,e,i,n,o,r){void 0===t&&(t="assets/images/pngwing.png"),void 0===e&&(e=null),void 0===i&&(i=""),void 0===n&&(n=""),void 0===o&&(o=!1),void 0===r&&(r=null),this.id=r?r.id:"",this.webviewPath=e,this.filepath=t,this.data=i,this.url=n,this.thumb=o,this.image=r}return t.prototype.getPath=function(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath},t}()},iE5N:function(t,e,i){"use strict";i.r(e),i.d(e,"FormPublicationPageModule",(function(){return p}));var n=i("ofXK"),o=i("3Pt+"),r=i("TEn/"),s=i("tyNb"),a=i("GSQ0"),u=i("fXoL"),h=[{path:"",component:a.a}],c=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[s.j.forChild(h)],s.j]}),t}(),p=function(){function t(){}return t.\u0275mod=u.Jb({type:t}),t.\u0275inj=u.Ib({factory:function(e){return new(e||t)},imports:[[n.b,o.a,r.kb,c]]}),t}()}}]);