/*! For license information please see main.5fd11345ec9d0ea5e832.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});var i=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/About/Media.js");class r{constructor({element:t,geometry:s,index:e,gl:i,scene:l,sizes:h}){this.element=t,this.geometry=s,this.index=e,this.gl=i,this.scene=l,this.sizes=h,this.scroll={current:0,target:0,last:0,lepr:.1},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=l(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,l(this.medias,(s=>s.onResize(t,this.scroll)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.current<this.scroll.target?this.x.direction="right":this.scroll.current>this.scroll.target&&(this.x.direction="left"),l(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if(" left"===this.x.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI))}})))}}}},(function(t){t.h=()=>"16610fd19da5864f2e86"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGFzdDogMCxcblx0XHRcdGxlcHI6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuXG5cdFx0dGhpcy5tZWRpYSA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsXG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTY2MTBmZDE5ZGE1ODY0ZjJlODZcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsZXByIiwiY3JlYXRlTWVkaWFzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhIiwibWFwIiwibWVkaWFzRWxlbWVudHMiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYXMiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsImxlcnAiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiZ2FsbGVyeVNpemVzIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9