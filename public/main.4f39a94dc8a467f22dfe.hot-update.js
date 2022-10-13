/*! For license information please see main.4f39a94dc8a467f22dfe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=l(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.medias,(t=>t.show()))}hide(){l(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&l(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;const t=this.x.target-this.x.current,e=this.y.target-this.y.current,s=.001*Math.sqrt(t*t+e*e);this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,l(this.medias,((t,e)=>{const i=t.mesh.scale.x/2,h=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+i<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-i>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-h<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+h>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,s)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"5d7186c2352ef568bc52"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19nYWxsZXJ5Jylcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMueSA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50ID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcblx0XHRcdGhlaWdodFNlZ21lbnRzOiAyMCxcblx0XHRcdHdpZHRoU2VnbWVudHM6IDIwLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC50YXJnZXQgPSAwXG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS50YXJnZXQgPSAwXG5cblx0XHRpZiAodGhpcy5zY3JvbGwpIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zcGVlZCA9IDFcblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblx0XHRjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuXHRcdHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZVxuXHRcdHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zcGVlZCA9IDBcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdGNvbnN0IGEgPSB0aGlzLngudGFyZ2V0IC0gdGhpcy54LmN1cnJlbnRcblx0XHRjb25zdCBiID0gdGhpcy55LnRhcmdldCAtIHRoaXMueS5jdXJyZW50XG5cblx0XHRjb25zdCBzcGVlZCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSAqIDAuMDAxXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cdFx0XHRcdGlmICh5ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55IC09IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLCBzcGVlZClcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVkNzE4NmMyMzUyZWY1NjhiYzUyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJzcGVlZCIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiYSIsImIiLCJNYXRoIiwic3FydCIsIkdTQVAiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJzY2FsZVkiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwiUEkiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=