/*! For license information please see main.a2ffe933986d4de2ebff.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var o=t("./node_modules/ogl/src/core/Transform.js"),l=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/lodash/map.js"),r=t("./app/components/Canvas/About/Gallery.js");const a=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new o.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=i(this.galleriesElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){i(this.galleries,(e=>e.show()))}hide(){i(this.galleries,(e=>e.hide()))}onResize(e){i(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){i(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){i(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){i(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(e){i(this.galleries,(e=>e.update()))}destroy(){i(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"5175b4614d246c3655a0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMmZmZTkzMzk4NmQ0ZGUyZWJmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVVBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLGlCQUNMSCxLQUFLSSxrQkFFTEosS0FBS0MsTUFBTUksVUFBVVAsR0FFckJFLEtBQUtNLE1BQ0wsQ0FFREgsaUJBQ0NILEtBQUtPLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVIsS0FBS0gsR0FDL0IsQ0FFRE8sa0JBQ0NKLEtBQUtTLGtCQUFvQkMsU0FBU0MsaUJBQWlCLG1CQUVuRFgsS0FBS1ksVUFBWUMsRUFBSWIsS0FBS1MsbUJBQW1CLENBQUNLLEVBQVNDLElBQy9DLElBQUlDLEVBQUFBLFFBQVEsQ0FDbEJGLFVBQ0FQLFNBQVVQLEtBQUtPLFNBQ2ZRLFFBQ0FsQixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBR0RPLE9BQ0NPLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFYLFFBQ3ZDLENBQ0RZLE9BQ0NMLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFDLFFBQ3ZDLENBR0RDLFNBQVNDLEdBQ1JQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFFLFNBQVNDLElBQ2hELENBRURDLFlBQVlELEdBQ1hQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFJLFlBQVlELElBQ25ELENBRURFLFlBQVlGLEdBQ1hQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFLLFlBQVlGLElBQ25ELENBRURHLFVBQVVILEdBQ1RQLEVBQUliLEtBQUtZLFdBQVdLLEdBQVdBLEVBQVFNLFVBQVVILElBQ2pELENBRURJLFNBQVEsT0FBRUMsRUFBRixPQUFVQyxJQUFZLENBRzlCQyxPQUFPQyxHQUVOZixFQUFJYixLQUFLWSxXQUFXSyxHQUFXQSxFQUFRVSxVQUN2QyxDQUdERSxVQUNDaEIsRUFBSWIsS0FBS1ksV0FBV0ssR0FBV0EsRUFBUVksV0FDdkMsa0JDN0VGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vR2FsbGVyeSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJpZXMoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyaWVzKCkge1xuXHRcdHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuXG5cdFx0dGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEdhbGxlcnkoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25SZXNpemUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoRG93bihldmVudCkpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hNb3ZlKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hVcChldmVudCkpXG5cdH1cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge31cblxuXHQvKiB1cGRhdGUgKi9cblx0dXBkYXRlKHNjcm9sbCkge1xuICAgIFxuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnVwZGF0ZSgpKVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTE3NWI0NjE0ZDI0NmMzNjU1YTBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcmllcyIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwiZ2FsbGVyaWVzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnYWxsZXJpZXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJHYWxsZXJ5IiwiZ2FsbGVyeSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50Iiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJzY3JvbGwiLCJkZXN0cm95IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9