/*! For license information please see main.602463d7d20b19e41363.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),r=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={current:0,target:0,lerp:.1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new r.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=l(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.medias,(t=>t.show()))}hide(){l(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&l(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.speed.current=h.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp);const t=this.x.target-this.x.current,e=this.y.target-this.y.current;this.speed.target=1e-4*Math.sqrt(t*t+e*e),this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,l(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,this.speed.current)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"ef98bb965cd44671344c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBVlgsS0FBS1csSUFFakUsQ0FFRHJDLEVBQU1zQixPQUFPbkQsS0FBS2MsT0FBUWQsS0FBS2UsTUFBTU4sUUFBckMsR0FFRCxDQUVEMEQsVUFDQ25FLEtBQUtGLE1BQU1zRSxZQUFZcEUsS0FBS0MsTUFDNUIsa0JDak1Gb0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5zcGVlZCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG5cdFx0XHRoZWlnaHRTZWdtZW50czogMjAsXG5cdFx0XHR3aWR0aFNlZ21lbnRzOiAyMCxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuXHRcdFx0d2lkdGg6ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsKSBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC54ID0gdGhpcy5zY3JvbGwueFxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudC55ID0gdGhpcy5zY3JvbGwueVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblx0XHRjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuXHRcdHRoaXMueC50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueCAtIHhEaXN0YW5jZVxuXHRcdHRoaXMueS50YXJnZXQgPSB0aGlzLnNjcm9sbEN1cnJlbnQueSAtIHlEaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc3BlZWQuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNwZWVkLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNwZWVkLnRhcmdldCxcblx0XHRcdHRoaXMuc3BlZWQubGVycFxuXHRcdClcblxuXHRcdGNvbnN0IGEgPSB0aGlzLngudGFyZ2V0IC0gdGhpcy54LmN1cnJlbnRcblx0XHRjb25zdCBiID0gdGhpcy55LnRhcmdldCAtIHRoaXMueS5jdXJyZW50XG5cblx0XHR0aGlzLnNwZWVkLnRhcmdldCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSAqIDAuMDAwMVxuXG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXHRcdFx0Y29uc3Qgc2NhbGVZID0gbWVkaWEubWVzaC5zY2FsZS55IC8gMlxuXG5cdFx0XHQvKiBYLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qIFktYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgdGhpcy5zcGVlZC5jdXJyZW50KVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWY5OGJiOTY1Y2Q0NDY3MTM0NGNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwic3BlZWQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiYSIsImIiLCJNYXRoIiwic3FydCIsImRpcmVjdGlvbiIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInNjYWxlWSIsInBvc2l0aW9uIiwiZXh0cmEiLCJyb3RhdGlvbiIsInoiLCJQSSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==