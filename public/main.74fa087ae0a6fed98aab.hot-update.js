/*! For license information please see main.74fa087ae0a6fed98aab.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>h});var l=e("./node_modules/ogl/src/core/Transform.js"),i=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),c=e("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:s,scene:t,sizes:e}){this.gl=s,this.sizes=e,this.scene=t,this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=o(this.mediasElements,((s,t)=>new c.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.sizes=s.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:s,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:s,y:t}){}onWheel({pixelY:s}){this.scroll.target+=s}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,o(this.medias,((s,t)=>{s.update(this.scroll.current)}));Math.abs(this.scroll.current/this.scroll.limit),this.medias.length}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"9a43bad0c75ab339ec81"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLQyxJQUFJaEQsS0FBS1EsT0FBT0MsUUFBVVQsS0FBS1EsT0FBT3dCLE9BQVNoQyxLQUFLb0IsT0FBTzZCLE1BQy9FLENBR0RDLFVBQ0NsRCxLQUFLRixNQUFNcUQsWUFBWW5ELEtBQUtDLE1BQzVCLGtCQzlIRm1ELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cblxuXHRcdGNvbnN0IGluZGV4ID0gKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YTQzYmFkMGM3NWFiMzM5ZWM4MVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0IiwibGltaXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJhYnMiLCJsZW5ndGgiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=