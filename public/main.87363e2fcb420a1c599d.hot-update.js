/*! For license information please see main.87363e2fcb420a1c599d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>c});var l=e("./node_modules/ogl/src/core/Transform.js"),i=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/Collections/Media.js");const c=class{constructor({gl:s,scene:t,sizes:e}){this.gl=s,this.sizes=e,this.scene=t,this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=o(this.mediasElements,((s,t)=>new h.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.galleryElement.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.last=this.scroll.target=0,this.scroll.limit=this.width,this.scroll&&o(this.medias,(t=>t.onResize(s,this.scroll)))}onTouchDown({x:s,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:s,y:t}){}onWheel({pixelY:s}){this.scroll.target+=s}update(){this.bounds&&(this.scroll.target=r.default.utils.clamp(-1e4,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,o(this.medias,((s,t)=>{s.update(this.scroll.current)})))}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"d1193fd410b5188c2f69"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9DLFFBQXpCLElBRUQsQ0FFRHVDLFVBQ0NoRCxLQUFLRixNQUFNbUQsWUFBWWpELEtBQUtDLE1BQzVCLGtCQ3pIRmlELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLndpZHRoXG5cblx0XHRpZiAodGhpcy5zY3JvbGwpIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLTEwMDAwLCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTE5M2ZkNDEwYjUxODhjMmY2OVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJsYXN0IiwibGltaXQiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9