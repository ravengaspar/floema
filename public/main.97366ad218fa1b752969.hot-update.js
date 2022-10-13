/*! For license information please see main.97366ad218fa1b752969.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),l=e("./app/components/Canvas/About/Media.js");class h{constructor({element:s,geometry:t,index:e,gl:r,scene:o,sizes:l}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.index=e,this.gl=r,this.scene=o,this.sizes=l,this.group=new i.Transform,this.scroll={current:0,target:0,start:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,t)=>new l.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,t)=>{const e=s.mesh.scale.x/2;if(" left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.mesh.position.y=Math.cos(s.mesh),s.update(this.scroll.current)})))}}}},(function(s){s.h=()=>"f66597fcdca3ff3a092b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlTWVkaWFzKCkge1xuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnN0YXJ0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG4gICAgICBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLmNvcygobWVkaWEubWVzaCkpXG5cblxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNjY1OTdmY2RjYTNmZjNhMDkyYlwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50V3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJNYXRoIiwiY29zIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9