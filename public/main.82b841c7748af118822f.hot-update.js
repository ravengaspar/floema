/*! For license information please see main.82b841c7748af118822f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(s,e,t)=>{t.r(e),t.d(e,{default:()=>h});var l=t("./node_modules/ogl/src/core/Transform.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),o=t("./node_modules/gsap/index.js"),r=t("./node_modules/lodash/map.js"),c=t("./app/components/Canvas/Collections/Media.js"),n=t("./node_modules/console-browserify/index.js");const h=class{constructor({gl:s,scene:e,sizes:t}){this.gl=s,this.sizes=t,this.scene=e,this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive=".collections__article--active",this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((s,e)=>new c.default({element:s,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){r(this.medias,(s=>s.show()))}hide(){r(this.medias,(s=>s.hide()))}onResize(s){this.sizes=s.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,r(this.medias,(e=>e.onResize(s,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:s,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:s,y:e}){const t=s.start-s.end;this.scroll.target=this.scroll.last-t}onTouchUp({x:s,y:e}){}onWheel({pixelY:s}){this.scroll.target+=s}onChange(s){this.index=s;this.mediasElements[this.index].getAttribute("data-index");r(this.collectionsElements,((s,e)=>{}))}update(){if(!this.bounds)return;this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,r(this.medias,((s,e)=>{s.update(this.scroll.current)}));const s=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==s&&(n.log(s),this.onChange(s))}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"d432bbcd315d337b7b05"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQ2RuRCxLQUFLVSxPQUFPdUIsS0FBT2pDLEtBQUtVLE9BQU9DLFVBQ3pDWCxLQUFLVSxPQUFPeUMsVUFBWSxRQUd6Qm5ELEtBQUtVLE9BQU91QixLQUFPakMsS0FBS1UsT0FBT0MsUUFFL0JZLEVBQUl2QixLQUFLc0IsUUFBUSxDQUFDSyxFQUFPRixLQUN4QkUsRUFBTXNCLE9BQU9qRCxLQUFLVSxPQUFPQyxRQUF6QixJQUdELE1BQU1jLEVBQVEyQixLQUFLQyxNQUFNRCxLQUFLRSxJQUFJdEQsS0FBS1UsT0FBT0MsUUFBVVgsS0FBS1UsT0FBT3dCLE9BQVNsQyxLQUFLc0IsT0FBT2lDLFFBRXJGdkQsS0FBS3lCLFFBQVVBLElBQ2xCK0IsRUFBUUMsSUFBSWhDLEdBRVp6QixLQUFLOEMsU0FBU3JCLEdBRWYsQ0FHRGlDLFVBQ0MxRCxLQUFLRixNQUFNNkQsWUFBWTNELEtBQUtDLE1BQzVCLGtCQ2pKRjJELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICcuY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBDaGFuZ2VkICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSB0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpXG5cblx0XHRtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0Y29uc29sZS5sb2coaW5kZXgpXG5cblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDQzMmJiY2QzMTVkMzM3YjdiMDVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0IiwibGltaXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50SW5kZXgiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==