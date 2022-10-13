/*! For license information please see main.5fa8a01d292a0a405f77.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),r=t("./app/components/Canvas/About/Gallery.js");const a=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=i(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){i(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){i(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){i(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){i(this.galleries,(e=>e.update()))}destroy(){i(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"bbdb1d1b441e1b7e1d54"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZmE4YTAxZDI5MmEwYTQwNWY3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsR0FFckJFLEtBQUtNLE1BQ0wsQ0FFREgsaUJBQ0NILEtBQUtPLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVIsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtTLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFgsS0FBS1ksVUFBWUMsRUFBSWIsS0FBS1MsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVQLEtBQUtPLFNBQ2ZRLFFBQ0FsQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBR0RrQixTQUFTQyxHQUNSTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRixTQUFTQyxJQUNoRCxDQUVERSxZQUFZRixHQUNYTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRQyxZQUFZRixJQUNuRCxDQUVERyxZQUFZSCxHQUNYTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRSxZQUFZSCxJQUNuRCxDQUVESSxVQUFVSixHQUNUTCxFQUFJYixLQUFLWSxXQUFXTyxHQUFXQSxFQUFRRyxVQUFVSixJQUNqRCxDQUVESyxTQUFRLE9BQUVDLEVBQUYsT0FBVUMsSUFBWSxDQUc5QkMsU0FDQ2IsRUFBSWIsS0FBS1ksV0FBV08sR0FBV0EsRUFBUU8sVUFDdkMsQ0FHREMsVUFDQ2QsRUFBSWIsS0FBS1ksV0FBV08sR0FBV0EsRUFBUVEsV0FDdkMsa0JDcEVGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJpZXMoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyaWVzKCkge1xuXHRcdHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuXG5cdFx0dGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEdhbGxlcnkoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7fVxuXG5cdC8qIHVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkudXBkYXRlKCkpXG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYmRiMWQxYjQ0MWUxYjdlMWQ1NFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyaWVzIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJnYWxsZXJpZXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcmllcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIkdhbGxlcnkiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==