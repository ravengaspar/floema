/*! For license information please see main.7291de158115b8da7844.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene)}createGeometry(){this.geometry=new h.Plane(this.gl)}createGallery(){this.medias=l(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){l(this.medias,(t=>t.show()))}hide(){l(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&l(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,l(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"33d3f1a0744eedb11edc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDbkNWLEVBQU0wQixLQUFLSyxTQUFTQyxFQUFJVCxFQUFBQSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWVSxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxDQUdELEdBQXlCLFFBQXJCNUQsS0FBS1ksRUFBRXNDLFVBQXFCLENBQ3JCeEIsRUFBTTBCLEtBQUtHLFNBQVMzQyxFQUFJMEMsR0FDekJ0RCxLQUFLRCxNQUFNcUMsTUFBUSxJQUMzQlYsRUFBTThCLE1BQU01QyxHQUFLWixLQUFLZ0MsYUFBYUMsT0FDbkNQLEVBQU0wQixLQUFLSyxTQUFTQyxFQUFJVCxFQUFBQSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWVSxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxNQUFNLEdBQXlCLFdBQXJCNUQsS0FBS1ksRUFBRXNDLFVBQXdCLENBQy9CeEIsRUFBTTBCLEtBQUtHLFNBQVMzQyxFQUFJMEMsRUFDMUJ0RCxLQUFLRCxNQUFNcUMsTUFBUSxJQUMxQlYsRUFBTThCLE1BQU01QyxHQUFLWixLQUFLZ0MsYUFBYUMsT0FDbkNQLEVBQU0wQixLQUFLSyxTQUFTQyxFQUFJVCxFQUFBQSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWVSxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxDQUVEbEMsRUFBTXNCLE9BQU9oRCxLQUFLYyxPQUFsQixJQUVELENBRUQrQyxVQUNDN0QsS0FBS0YsTUFBTWdFLFlBQVk5RCxLQUFLQyxNQUM1QixrQkMzS0Y4RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC50YXJnZXQgPSAwXG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS50YXJnZXQgPSAwXG5cblx0XHRpZiAodGhpcy5zY3JvbGwpIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLngudGFyZ2V0ICs9IHBpeGVsWFxuXHRcdHRoaXMueS50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXHRcdFx0Y29uc3Qgc2NhbGVZID0gbWVkaWEubWVzaC5zY2FsZS55IC8gMlxuXG5cdFx0XHQvKiBYLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qIFktYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbClcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMzZDNmMWEwNzQ0ZWVkYjExZWRjXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJzY2FsZVkiLCJwb3NpdGlvbiIsImV4dHJhIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9