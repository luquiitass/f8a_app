(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"6/gD":function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var s=i("mrSG"),o=i("gcOT"),a=i("8xVP"),r=i("fXoL"),n=i("G/jy");const{Camera:h}=o.c;let u=(()=>{class t{constructor(t){this.photos=[],this.convertBlobToBase64=t=>new Promise((e,i)=>{const s=new FileReader;s.onerror=i,s.onload=()=>{e(s.result)},s.readAsDataURL(t)}),this.serviceImage=new a.a("Image",t)}init(t,e=!0,i="assets/images/pngwing.png"){this.url=null!=t?t:"/images/",this.thumb=null!=e&&e,this.path=i,this.photo=new l(i)}setImage(t){this.image=t,this.photo.image=t}addNewToGallery(){return Object(s.b)(this,void 0,void 0,(function*(){const t=yield h.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100}),e=yield this.readAsBase64(t);this.photos.unshift(new l(null,t.webPath,e,this.url,this.thumb))}))}addOneNewToGallery(){return Object(s.b)(this,void 0,void 0,(function*(){const t=yield h.getPhoto({resultType:o.a.Uri,source:o.b.Camera,quality:100}),e=yield this.readAsBase64(t);this.photo=new l(t.webPath,e,e,this.url,this.thumb,this.image)}))}isLoadPthoto(){return!!this.photo.data}readAsBase64(t){return Object(s.b)(this,void 0,void 0,(function*(){const e=yield fetch(t.webPath),i=yield e.blob();return yield this.convertBlobToBase64(i)}))}uploadImage(){if(this.isLoadPthoto())return this.photo.id?this.serviceImage.api_update(this.photo):this.serviceImage.api_create(this.photo)}}return t.\u0275fac=function(e){return new(e||t)(r.Ub(n.a))},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class l{constructor(t="assets/images/pngwing.png",e=null,i="",s="",o=!1,a=null){this.id=a?a.id:"",this.webviewPath=e,this.filepath=t,this.data=i,this.url=s,this.thumb=o,this.image=a}getPath(){return this.webviewPath?this.webviewPath:this.image&&this.image.urlComplete?this.image.urlComplete:this.filepath}}},iE5N:function(t,e,i){"use strict";i.r(e),i.d(e,"FormPublicationPageModule",(function(){return c}));var s=i("ofXK"),o=i("3Pt+"),a=i("TEn/"),r=i("tyNb"),n=i("GSQ0"),h=i("fXoL");const u=[{path:"",component:n.a}];let l=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},imports:[[r.j.forChild(u)],r.j]}),t})(),c=(()=>{class t{}return t.\u0275mod=h.Jb({type:t}),t.\u0275inj=h.Ib({factory:function(e){return new(e||t)},imports:[[s.b,o.a,a.kb,l]]}),t})()}}]);