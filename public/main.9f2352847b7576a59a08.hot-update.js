/*! For license information please see main.9f2352847b7576a59a08.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var o=t("./app/components/Canvas/About/Gallery.js"),l=t("./node_modules/lodash/map.js"),i=t("./node_modules/ogl/src/core/Transform.js"),n=t("./node_modules/ogl/src/extras/Plane.js");const a=class{constructor({gl:e,scene:s,sizes:t}){this.group=new i.Transform,this.gl=e,this.sizes=t,this.createGeometry(),this.createGalleries(),this.group.setParent(s)}createGeometry(){this.geometry=new n.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=l(this.galleriesElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){l(this.galleries,(s=>s.onResize(e)))}onTouchDown({event:e}){l(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove({event:e}){l(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp({event:e}){l(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){l(this.galleries,(e=>e.update()))}}}},(function(e){e.h=()=>"0073b7cab0472282840f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZjIzNTI4NDdiNzU3NmE1OWEwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsRUFDckIsQ0FFREssaUJBQ0NILEtBQUtNLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVAsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtRLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFYsS0FBS1csVUFBWUMsRUFBSVosS0FBS1EsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVOLEtBQUtNLFNBQ2ZRLFFBQ0FqQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBRURpQixTQUFTQyxHQUNSTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRixTQUFTQyxJQUNoRCxDQUVERSxhQUFZLE1BQUVGLElBQ2JMLEVBQUlaLEtBQUtXLFdBQVdPLEdBQVdBLEVBQVFDLFlBQVlGLElBQ25ELENBRURHLGFBQVksTUFBRUgsSUFDYkwsRUFBSVosS0FBS1csV0FBV08sR0FBV0EsRUFBUUUsWUFBWUgsSUFDbkQsQ0FFREksV0FBVSxNQUFFSixJQUNYTCxFQUFJWixLQUFLVyxXQUFXTyxHQUFXQSxFQUFRRyxVQUFVSixJQUNqRCxDQUVESyxTQUFRLE9BQUVDLEVBQUYsT0FBVUMsSUFBWSxDQUU5QkMsU0FDQ2IsRUFBSVosS0FBS1csV0FBV08sR0FBV0EsRUFBUU8sVUFDdkMsa0JDMURGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyaWVzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyaWVzKCkge1xuXHRcdHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuXG5cdFx0dGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEdhbGxlcnkoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgZXZlbnQgfSkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgZXZlbnQgfSkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hNb3ZlKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hVcCh7IGV2ZW50IH0pIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoVXAoZXZlbnQpKVxuXHR9XG5cblx0b25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnVwZGF0ZSgpKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMDczYjdjYWIwNDcyMjgyODQwZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyaWVzIiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImdhbGxlcmllc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2FsbGVyaWVzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiR2FsbGVyeSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=