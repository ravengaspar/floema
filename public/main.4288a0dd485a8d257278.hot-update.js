/*! For license information please see main.4288a0dd485a8d257278.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),r=t("./app/components/Canvas/About/Gallery.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s)}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=i(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){i(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){i(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){i(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){this.galleryBounds&&i(this.galleries,(e=>e.update()))}destroy(){this.group.setParent(null)}}}},(function(e){e.h=()=>"9107fd8ce6598966a1dc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40Mjg4YTBkZDQ4NWE4ZDI1NzI3OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsRUFDckIsQ0FFREssaUJBQ0NILEtBQUtNLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVAsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtRLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFYsS0FBS1csVUFBWUMsRUFBSVosS0FBS1EsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVOLEtBQUtNLFNBQ2ZRLFFBQ0FqQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBR0RpQixTQUFTQyxHQUNSTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRixTQUFTQyxJQUNoRCxDQUVERSxZQUFZRixHQUNYTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRQyxZQUFZRixJQUNuRCxDQUVERyxZQUFZSCxHQUNYTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRSxZQUFZSCxJQUNuRCxDQUVESSxVQUFVSixHQUNUTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRyxVQUFVSixJQUNqRCxDQUVESyxTQUFRLE9BQUVDLEVBQUYsT0FBVUMsSUFBWSxDQUc5QkMsU0FDTXpCLEtBQUswQixlQUVWZCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRTyxVQUN2QyxDQUVERSxVQUNDM0IsS0FBS0MsTUFBTUksVUFBVSxLQUNyQixrQkNuRUZ1QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJpZXMoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJpZXMoKSB7XG5cdFx0dGhpcy5nYWxsZXJpZXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeScpXG5cblx0XHR0aGlzLmdhbGxlcmllcyA9IG1hcCh0aGlzLmdhbGxlcmllc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgR2FsbGVyeSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaERvd24oZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoTW92ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuXHR9XG5cblx0b25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHt9XG5cblx0LyogdXBkYXRlICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS51cGRhdGUoKSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQobnVsbClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTEwN2ZkOGNlNjU5ODk2NmExZGNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcmllcyIsInNldFBhcmVudCIsImdlb21ldHJ5IiwiUGxhbmUiLCJnYWxsZXJpZXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcmllcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIkdhbGxlcnkiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiZ2FsbGVyeUJvdW5kcyIsImRlc3Ryb3kiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=