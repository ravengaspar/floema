/*! For license information please see main.ce4ac83653dec27c60b0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./app/components/Canvas/Home/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.group=new l.Transform,this.gl=t,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((t,e)=>new i.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&r(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}destroy(){this.group.setParent()}}}},(function(t){t.h=()=>"0be3191d55a90a6abcd6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxVQUFxQixDQUNyQmIsRUFBTWUsS0FBS0csU0FBU3RDLEVBQUlxQyxHQUN6QnBELEtBQUtELE1BQU1rQyxNQUFRLElBQzNCRSxFQUFNbUIsTUFBTXZDLEdBQUtmLEtBQUs2QixhQUFhQyxPQUNuQ0ssRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsTUFBTSxHQUF5QixXQUFyQjFELEtBQUtlLEVBQUVpQyxVQUF3QixDQUMvQmIsRUFBTWUsS0FBS0csU0FBU3RDLEVBQUlxQyxFQUMxQnBELEtBQUtELE1BQU1rQyxNQUFRLElBQzFCRSxFQUFNbUIsTUFBTXZDLEdBQUtmLEtBQUs2QixhQUFhQyxPQUNuQ0ssRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsQ0FFRHZCLEVBQU1XLE9BQU85QyxLQUFLaUIsT0FBbEIsSUFFRCxDQUVEMEMsVUFDRzNELEtBQUtDLE1BQU1TLFdBQ1osa0JDL0pIa0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuXHRcdFx0d2lkdGg6ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsKSBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblx0XHRjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuXHRcdHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZVxuXHRcdHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblx0XHRcdGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKiBZLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55IC0gc2NhbGVZXG5cdFx0XHRcdGlmICh5IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG4gICAgdGhpcy5ncm91cC5zZXRQYXJlbnQoKVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYmUzMTkxZDU1YTkwYTZhYmNkNlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwibWVkaWEiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInNjYWxlWSIsInBvc2l0aW9uIiwiZXh0cmEiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJkZXN0cm95IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9