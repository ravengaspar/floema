/*! For license information please see main.0fa73a0d6ec80853ad82.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.group=new l.Transform,this.gl=t,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((t,e)=>new i.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.onResize=!0,this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},r(this.medias,(e=>e.onResize(t))),window.requestAnimationFrame((t=>{}))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"6e66495f4152195ce62b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDM0JFLEVBQU1xQixNQUFNekMsR0FBS2YsS0FBSzZCLGFBQWFDLE9BQ25DSyxFQUFNaUIsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsTUFBTSxHQUF5QixXQUFyQjVELEtBQUtlLEVBQUVtQyxVQUF3QixDQUMvQmYsRUFBTWlCLEtBQUtHLFNBQVN4QyxFQUFJdUMsRUFDMUJ0RCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMxQkUsRUFBTXFCLE1BQU16QyxHQUFLZixLQUFLNkIsYUFBYUMsT0FDbkNLLEVBQU1pQixLQUFLSyxTQUFTQyxFQUFJVCxFQUFBQSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWVSxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxDQUVEekIsRUFBTWEsT0FBT2hELEtBQUtpQixPQUFsQixJQUVELGtCQ25LRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblxuICAgIHRoaXMub25SZXNpemUgPSB0cnVlXG5cblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuICAgICAgaGVpZ2h0OiAodGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcblx0XHRcdHdpZHRoOiAodGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aCxcblx0XHR9XG5cbiAgICBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcbiAgICAgIFxuICAgIH0pXG5cblxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuICAgIHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG4gICAgdGhpcy55LnRhcmdldCArPSBwaXhlbFlcblxuICB9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblx0XHRcdGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKiBZLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55IC0gc2NhbGVZXG5cdFx0XHRcdGlmICh5IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmU2NjQ5NWY0MTUyMTk1Y2U2MmJcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm1lZGlhIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwic2NhbGVZIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==