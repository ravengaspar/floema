/*! For license information please see main.aabe41bbd238eff7a2a7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=l(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.medias,(t=>t.show()))}hide(){l(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&l(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp);const t=this.x.target-this.x.current,e=this.y.target-this.y.current;this.speed.target=.01*Math.sqrt(t*t+e*e),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,l(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2,r=.6*this.sizes.width,l=.25*this.sizes.height;if("left"===this.x.direction){t.mesh.position.x+s<-r&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>r&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-l&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>l&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,this.speed.current)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"7d80ad04ff9164a7c883"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUthLElBRWpFLENBRUR2QyxFQUFNc0IsT0FBT25ELEtBQUtjLE9BQVFkLEtBQUtlLE1BQU1OLFFBQXJDLEdBRUQsQ0FFRDRELFVBQ0NyRSxLQUFLRixNQUFNd0UsWUFBWXRFLEtBQUtDLE1BQzVCLGtCQ25NRnNFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc3BlZWQgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuXHRcdFx0aGVpZ2h0U2VnbWVudHM6IDIwLFxuXHRcdFx0d2lkdGhTZWdtZW50czogMjAsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuXHRcdFx0aGVpZ2h0OiAodGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcblx0XHRcdHdpZHRoOiAodGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LnRhcmdldCA9IDBcblxuXHRcdGlmICh0aGlzLnNjcm9sbCkgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuXHRcdHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG5cdFx0dGhpcy55LnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNwZWVkLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zcGVlZC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zcGVlZC50YXJnZXQsXG5cdFx0XHR0aGlzLnNwZWVkLmxlcnBcblx0XHQpXG5cblx0XHRjb25zdCBhID0gdGhpcy54LnRhcmdldCAtIHRoaXMueC5jdXJyZW50XG5cdFx0Y29uc3QgYiA9IHRoaXMueS50YXJnZXQgLSB0aGlzLnkuY3VycmVudFxuXG5cdFx0dGhpcy5zcGVlZC50YXJnZXQgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYikgKiAwLjAxXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cdFx0XHRjb25zdCBvZmZzZXRYID0gdGhpcy5zaXplcy53aWR0aCAqIDAuNjtcblx0XHRcdGNvbnN0IG9mZnNldFkgPSB0aGlzLnNpemVzLmhlaWdodCAqIDAuMjVcblxuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC1vZmZzZXRYKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiBvZmZzZXRYKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC1vZmZzZXRZKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPiBvZmZzZXRZKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Q4MGFkMDRmZjkxNjRhN2M4ODNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiYSIsImIiLCJNYXRoIiwic3FydCIsImRpcmVjdGlvbiIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInNjYWxlWSIsIm9mZnNldFgiLCJvZmZzZXRZIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9