/*! For license information please see main.14ff2e49481644560cfe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=l(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.medias,(t=>t.show()))}hide(){l(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&l(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=.01,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.x.target,this.x.current,this.y.target,this.y.current;this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,l(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,this.speed.current)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"ff34a1536d0a864794d7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS2MsT0FBUWQsS0FBS2UsTUFBTU4sUUFBckMsR0FFRCxDQUVEdUQsVUFDQ2hFLEtBQUtGLE1BQU1tRSxZQUFZakUsS0FBS0MsTUFDNUIsa0JDck1GaUUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5zcGVlZCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG5cdFx0XHRoZWlnaHRTZWdtZW50czogMjAsXG5cdFx0XHR3aWR0aFNlZ21lbnRzOiAyMCxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuXHRcdFx0d2lkdGg6ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsKSBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc3BlZWQudGFyZ2V0ID0gMC4wMVxuXG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNwZWVkLnRhcmdldCA9IDBcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdGNvbnN0IGEgPSB0aGlzLngudGFyZ2V0IC0gdGhpcy54LmN1cnJlbnRcblx0XHRjb25zdCBiID0gdGhpcy55LnRhcmdldCAtIHRoaXMueS5jdXJyZW50XG5cblx0XHQvLyBjb25zdCBzcGVlZCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSAqIDAuMDAxXG5cblx0XHR0aGlzLnNwZWVkLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zcGVlZC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zcGVlZC50YXJnZXQsXG5cdFx0XHR0aGlzLnNwZWVkLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cdFx0XHRcdGlmICh5ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55IC09IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLCB0aGlzLnNwZWVkLmN1cnJlbnQpXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZjM0YTE1MzZkMGE4NjQ3OTRkN1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJzcGVlZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJzY2FsZVkiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9