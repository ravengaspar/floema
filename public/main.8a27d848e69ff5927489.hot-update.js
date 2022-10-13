/*! For license information please see main.8a27d848e69ff5927489.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>l});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/About/Media.js");class l{constructor({element:s,geometry:t,index:e,gl:r,scene:o,sizes:h}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.index=e,this.gl=r,this.scene=o,this.sizes=h,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1,velocity:.5},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,t)=>new h.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){if(!this.bounds)return;const t=s.current-s.target,e=s.current/window.innerHeight;this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=1),this.scroll.target-=this.scroll.velocity,this.scroll.target+=t,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if(" left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=e*this.sizes.height}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"934bef9d71c0b059615e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEVBQUksSUFFeEMsR0FBdUIsVUFBbkI3QixLQUFLcUMsVUFBdUIsQ0FDckJqQixFQUFNb0IsS0FBS0UsU0FBU2IsRUFBSVUsR0FFekJ2QyxLQUFLRCxNQUFNMEIsTUFBUSxJQUMzQkwsRUFBTXVCLE9BQVMzQyxLQUFLeUIsTUFFckIsTUFBTSxHQUF1QixVQUFuQnpCLEtBQUtxQyxVQUF1QixDQUM1QmpCLEVBQU1vQixLQUFLRSxTQUFTYixFQUFJVSxFQUUxQnZDLEtBQUtELE1BQU0wQixNQUFRLElBQzFCTCxFQUFNdUIsT0FBUzNDLEtBQUt5QixNQUVyQixDQUVETCxFQUFNZSxPQUFPbkMsS0FBS0ssT0FBT0MsUUFBekIsSUFHRE4sS0FBS0csTUFBTXVDLFNBQVNaLEVBQUlBLEVBQUk5QixLQUFLRCxNQUFNNkMsTUFDdkMsQ0FJREMsVUFDQzdDLEtBQUtGLE1BQU1nRCxZQUFZOUMsS0FBS0csTUFDNUIsa0JDeklGNEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5lbGVtZW50V3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMC41LFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblxuXHRcdHRoaXMub25SZXNpemUoeyBzaXplczogdGhpcy5zaXplcyB9KVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuXG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50V3JhcHBlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnN0YXJ0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRjb25zdCBkaXN0YW5jZSA9IChzY3JvbGwuY3VycmVudCAtIHNjcm9sbC50YXJnZXQpIFxuXHRcdGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdFx0dGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtMVxuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHRcdHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gMVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjVcblxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0dGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkzNGJlZjlkNzFjMGIwNTk2MTVlXCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImVsZW1lbnRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlTWVkaWFzIiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiaW5uZXJIZWlnaHQiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==