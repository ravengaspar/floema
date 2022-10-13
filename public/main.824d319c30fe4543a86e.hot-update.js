/*! For license information please see main.824d319c30fe4543a86e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.group=new l.Transform,this.gl=t,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((t,e)=>new i.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},r(this.medias,(e=>e.onResize(t)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"537cb714616ead411979"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVN0QyxFQUFJcUMsR0FDekJwRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMzQkUsRUFBTW1CLE1BQU12QyxHQUFLZixLQUFLNkIsYUFBYUMsT0FDbkNLLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLE1BQU0sR0FBeUIsV0FBckIxRCxLQUFLZSxFQUFFaUMsVUFBd0IsQ0FDL0JiLEVBQU1lLEtBQUtHLFNBQVN0QyxFQUFJcUMsRUFDMUJwRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMxQkUsRUFBTW1CLE1BQU12QyxHQUFLZixLQUFLNkIsYUFBYUMsT0FDbkNLLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRUR2QixFQUFNVyxPQUFPOUMsS0FBS2lCLE9BQWxCLElBRUQsa0JDM0pGMEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblx0XHRjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuXHRcdHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZVxuXHRcdHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblx0XHRcdGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKiBZLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55IC0gc2NhbGVZXG5cdFx0XHRcdGlmICh5IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTM3Y2I3MTQ2MTZlYWQ0MTE5NzlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJzY2FsZVkiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9