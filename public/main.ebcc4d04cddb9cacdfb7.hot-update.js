/*! For license information please see main.ebcc4d04cddb9cacdfb7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),l=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:t,sizes:s}){this.group=new h.Transform,this.gl=e,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((e,t)=>new i.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){this.galleryBounds=this.galleryElement.getBoundingClientRect(),r(this.medias,(t=>t.onResize(e))),this.sizes=e.sizes}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,i=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:e,y:t}){}update(){this.galleryBounds&&(this.x.current=l.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=l.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.galleryWidth=this.galleryBounds.width/window.innerWidth*this.sizes.width,this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((e,t)=>{const s=e.mesh.position.x+e.mesh.scale.x/2;"left"===this.x.direction&&s<-this.sizes.width/2&&(e.extra.x+=this.galleryWidth),e.update(this.scroll)})))}}}},(function(e){e.h=()=>"f9ca6214eff61d1f55f8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksRUFFOUIsU0FBckJYLEtBQUtXLEVBQUU0QixXQUF3QjVCLEdBQUtYLEtBQUtELE1BQU0wQyxNQUFRLElBQzFEWixFQUFNa0IsTUFBTXBDLEdBQUtYLEtBQUt3QyxjQUl2QlgsRUFBTVEsT0FBT3JDLEtBQUtpQixPQUFsQixJQUVELGtCQzlHRitCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuZ2FsbGVyeVdpZHRoID0gKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlXaWR0aFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY5Y2E2MjE0ZWZmNjFkMWY1NWY4XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWVkaWEiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiZ2FsbGVyeVdpZHRoIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVzaCIsInBvc2l0aW9uIiwic2NhbGUiLCJleHRyYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==