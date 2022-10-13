/*! For license information please see main.5406b228b7bae9712f9b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>l});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/About/Media.js");class l{constructor({element:s,geometry:t,index:e,gl:r,scene:o,sizes:h}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.index=e,this.gl=r,this.scene=o,this.sizes=h,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1,velocity:.5},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,t)=>new h.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){this.bounds&&(this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=1),this.scroll.target-=this.scroll.velocity+s,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if(" left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=s*this.sizes.height)}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"bcae2a9e15abb53017d1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFDM0JMLEVBQU1zQixPQUFTMUMsS0FBS3lCLE1BRXJCLE1BQU0sR0FBdUIsVUFBbkJ6QixLQUFLb0MsVUFBdUIsQ0FDNUJoQixFQUFNbUIsS0FBS0UsU0FBU1osRUFBSVMsRUFFMUJ0QyxLQUFLRCxNQUFNMEIsTUFBUSxJQUMxQkwsRUFBTXNCLE9BQVMxQyxLQUFLeUIsTUFFckIsQ0FFREwsRUFBTWUsT0FBT25DLEtBQUtLLE9BQU9DLFFBQXpCLElBR0ROLEtBQUtHLE1BQU1zQyxTQUFTWCxFQUFJQSxFQUFJOUIsS0FBS0QsTUFBTTRDLE9BQ3ZDLENBSURDLFVBQ0M1QyxLQUFLRixNQUFNK0MsWUFBWTdDLEtBQUtHLE1BQzVCLGtCQ3JJRjJDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDAuNSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cblx0XHR0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0LyogVXBkYXRlICovXG5cblx0dXBkYXRlKHkpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHRcdHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gLTFcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0XHR0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IDFcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHkgKyB5XG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyICsgMC4yNVxuXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICcgbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHR0aGlzLmdyb3VwLnBvc2l0aW9uLnkgPSB5ICogdGhpcy5zaXplcy5oZWlnaHRcblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmNhZTJhOWUxNWFiYjUzMDE3ZDFcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50Iiwic3RhcnQiLCJ0YXJnZXQiLCJsZXJwIiwidmVsb2NpdHkiLCJjcmVhdGVNZWRpYXMiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==