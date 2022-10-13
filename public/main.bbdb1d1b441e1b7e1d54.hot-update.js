/*! For license information please see main.bbdb1d1b441e1b7e1d54.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),r=t("./app/components/Canvas/About/Gallery.js");const a=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=i(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){i(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){i(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){i(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){i(this.galleries,(e=>e.update()))}destroy(){i(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"163cf75fbbb1f7d14d32"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYmRiMWQxYjQ0MWUxYjdlMWQ1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsR0FFckJFLEtBQUtNLE1BQ0wsQ0FFREgsaUJBQ0NILEtBQUtPLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVIsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtTLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFgsS0FBS1ksVUFBWUMsRUFBSWIsS0FBS1MsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVQLEtBQUtPLFNBQ2ZRLFFBQ0FsQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBS0RrQixTQUFTQyxHQUNSTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRixTQUFTQyxJQUNoRCxDQUVERSxZQUFZRixHQUNYTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRQyxZQUFZRixJQUNuRCxDQUVERyxZQUFZSCxHQUNYTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRSxZQUFZSCxJQUNuRCxDQUVESSxVQUFVSixHQUNUTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRyxVQUFVSixJQUNqRCxDQUVESyxTQUFRLE9BQUVDLEVBQUYsT0FBVUMsSUFBWSxDQUc5QkMsU0FDQ2IsRUFBSWIsS0FBS1ksV0FBV08sR0FBV0EsRUFBUU8sVUFDdkMsQ0FHREMsVUFDQ2QsRUFBSWIsS0FBS1ksV0FBV08sR0FBV0EsRUFBUVEsV0FDdkMsa0JDdEVGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJpZXMoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyaWVzKCkge1xuXHRcdHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuXG5cdFx0dGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEdhbGxlcnkoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuLyogQW5pbWF0aW9ucyAqL1xuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaERvd24oZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoTW92ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuXHR9XG5cblx0b25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHt9XG5cblx0LyogdXBkYXRlICovXG5cdHVwZGF0ZSgpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoKSlcblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5kZXN0cm95KCkpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE2M2NmNzVmYmJiMWY3ZDE0ZDMyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJpZXMiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImdhbGxlcmllc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiR2FsbGVyeSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJkZXN0cm95IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9