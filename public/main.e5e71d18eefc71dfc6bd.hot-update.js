/*! For license information please see main.e5e71d18eefc71dfc6bd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e("./app/components/Canvas/About/Media.js");class h{constructor({element:t,geometry:s,index:e,gl:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.index=e,this.gl=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.media=l(this.mediasElements,((t,s)=>new o.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,l(this.medias,(s=>s.onResize(t,this.scroll)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),l(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if(" left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"b5d6eb99b78744a3a9ed"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWUyxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxDQUVEL0IsRUFBTW1CLE9BQU8vQixLQUFLRyxPQUFsQixJQUVELGtCQy9HRnlDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGFzdDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlTWVkaWFzKCkge1xuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuY3VycmVudCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0LyogVXBkYXRlICovXG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJyBsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI1ZDZlYjk5Yjc4NzQ0YTNhOWVkXCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWEiLCJtYXAiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYXMiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJnYWxsZXJ5U2l6ZXMiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=