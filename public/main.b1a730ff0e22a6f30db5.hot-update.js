/*! For license information please see main.b1a730ff0e22a6f30db5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:t,sizes:s}){this.group=new l.Transform,this.gl=e,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((e,t)=>new i.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){this.galleryBounds=this.galleryElement.getBoundingClientRect(),r(this.medias,(t=>t.onResize(e))),this.sizes=e.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width}}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,i=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:e,y:t}){}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((e,t)=>{if("left"===this.x.direction){e.mesh.position.x+e.mesh.scale.x/2<-this.sizes.width/2&&(e.extra.x+=this.gallerySizes.width)}else if("right"===this.x.direction){e.mesh.position.x-e.mesh.scale.x/2>this.sizes.width/2&&(e.extra.x-=this.gallerySizes.width)}if("top"===this.y.direction){e.mesh.position.y+e.mesh.scale.y/2<-this.sizes.width/2&&(e.extra.y+=this.gallerySizes.height)}else if("bottom"===this.y.direction){e.mesh.position.y-e.mesh.scale.y/2>this.sizes.width/2&&(e.extra.y-=this.gallerySizes.height)}e.update(this.scroll)})))}}}},(function(e){e.h=()=>"a81d1d8fea349aec040d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuXHRcdFx0d2lkdGg6ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoLFxuXHRcdH1cblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXG4gICAgaWYodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuXG4gICAgaWYodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICB0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG4gICAgfVxuXG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0XHRpZiAoeSA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTgxZDFkOGZlYTM0OWFlYzA0MGRcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZWRpYSIsImdhbGxlcnlTaXplcyIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIm1lc2giLCJwb3NpdGlvbiIsInNjYWxlIiwiZXh0cmEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=