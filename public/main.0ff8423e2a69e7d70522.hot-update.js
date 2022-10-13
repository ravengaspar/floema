/*! For license information please see main.0ff8423e2a69e7d70522.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./node_modules/ogl/src/core/Transform.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),l=t("./node_modules/lodash/map.js"),r=t("./app/components/Canvas/About/Gallery.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=l(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.galleries,(e=>e.show()))}hide(){l(this.galleries,(e=>e.hide()))}onResize(e){l(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){l(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){l(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){l(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(e){e.current,window.innerHeight;l(this.galleries,(e=>e.update()))}destroy(){l(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"221a2fb1dd09880c5089"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZmY4NDIzZTJhNjllN2Q3MDUyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsR0FFckJFLEtBQUtNLE1BQ0wsQ0FFREgsaUJBQ0NILEtBQUtPLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVIsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtTLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFgsS0FBS1ksVUFBWUMsRUFBSWIsS0FBS1MsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVQLEtBQUtPLFNBQ2ZRLFFBQ0FsQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBR0RPLE9BQ0NPLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFYLFFBQ3ZDLENBQ0RZLE9BQ0NMLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFDLFFBQ3ZDLENBR0RDLFNBQVNDLEdBQ1JQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFFLFNBQVNDLElBQ2hELENBRURDLFlBQVlELEdBQ1hQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFJLFlBQVlELElBQ25ELENBRURFLFlBQVlGLEdBQ1hQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFLLFlBQVlGLElBQ25ELENBRURHLFVBQVVILEdBQ1RQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFNLFVBQVVILElBQ2pELENBRURJLFNBQVEsT0FBRUMsRUFBRixPQUFVQyxJQUFZLENBRzlCQyxPQUFPQyxHQUNNQSxFQUFPQyxRQUFVQyxPQUFPQyxZQUNwQ2xCLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFVLFVBQ3ZDLENBR0RLLFVBQ0NuQixFQUFJYixLQUFLWSxXQUFXSyxHQUFXQSxFQUFRZSxXQUN2QyxrQkM3RUZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi9HYWxsZXJ5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcmllcygpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJpZXMoKSB7XG5cdFx0dGhpcy5nYWxsZXJpZXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeScpXG5cblx0XHR0aGlzLmdhbGxlcmllcyA9IG1hcCh0aGlzLmdhbGxlcmllc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgR2FsbGVyeSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7fVxuXG5cdC8qIHVwZGF0ZSAqL1xuXHR1cGRhdGUoc2Nyb2xsKSB7XG4gICAgY29uc3QgeSA9IHNjcm9sbC5jdXJyZW50IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkudXBkYXRlKCkpXG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuZGVzdHJveSgpKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyMjFhMmZiMWRkMDk4ODBjNTA4OVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyaWVzIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJnYWxsZXJpZXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImdhbGxlcmllcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIkdhbGxlcnkiLCJnYWxsZXJ5IiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsInNjcm9sbCIsImN1cnJlbnQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRlc3Ryb3kiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=