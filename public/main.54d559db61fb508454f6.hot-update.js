/*! For license information please see main.54d559db61fb508454f6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(s,e,t)=>{t.r(e),t.d(e,{default:()=>h});var l=t("./node_modules/ogl/src/core/Transform.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),r=t("./node_modules/gsap/index.js"),o=t("./node_modules/lodash/map.js"),c=t("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:s,scene:e,sizes:t}){this.gl=s,this.sizes=t,this.scene=e,this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=o(this.mediasElements,((s,e)=>new c.default({element:s,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.galleryElement.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.last=this.scroll.target=0,this.scroll&&o(this.medias,(e=>e.onResize(s,this.scroll)))}onTouchDown({x:s,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:s,y:e}){const t=s.start-s.end;this.scroll.target=this.scroll.last-t}onTouchUp({x:s,y:e}){}onWheel({pixelY:s}){this.scroll.target+=s}update(){this.bounds&&(this.scroll.target=r.default.utils.clamp(-1e4,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,o(this.medias,((s,e)=>{s.update(this.scroll.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"37eb635fbea9046f0153"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0YsTUFBTWtELFlBQVloRCxLQUFLQyxNQUM1QixrQkN4SEZnRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsKSBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC0xMDAwMCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzdlYjYzNWZiZWE5MDQ2ZjAxNTNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwic3RhcnQiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibGFzdCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=