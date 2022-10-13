/*! For license information please see main.efbe64d0900468086423.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var l=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),c=s("./node_modules/lodash/map.js"),n=s("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.transfromPrefix=o("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__titles"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=c(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){c(this.medias,(t=>t.show()))}hide(){c(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,c(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));c(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`translate(-50%, -50%) translateY -${25*e}%)`}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,c(this.medias,((t,e)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"fe71051775101d2334ae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE1BQUFBLE9BQWtCM0QsS0FBS2EsT0FBT3dCLE1BQU8sRUFBR3JDLEtBQUthLE9BQU9FLFFBRXpFZixLQUFLYSxPQUFPQyxRQUFVNkMsRUFBQUEsUUFBQUEsTUFBQUEsWUFDckIzRCxLQUFLYSxPQUFPQyxRQUNaZCxLQUFLYSxPQUFPRSxPQUNaZixLQUFLYSxPQUFPRyxNQUdUaEIsS0FBS2EsT0FBT3VCLEtBQU9wQyxLQUFLYSxPQUFPQyxRQUNsQ2QsS0FBS2EsT0FBTytDLFVBQVksUUFDZDVELEtBQUthLE9BQU91QixLQUFPcEMsS0FBS2EsT0FBT0MsVUFDekNkLEtBQUthLE9BQU8rQyxVQUFZLFFBR3pCNUQsS0FBS2EsT0FBT3VCLEtBQU9wQyxLQUFLYSxPQUFPQyxRQUUvQlksRUFBSTFCLEtBQUt5QixRQUFRLENBQUNLLEVBQU9GLEtBQ3hCRSxFQUFNNEIsT0FBTzFELEtBQUthLE9BQU9DLFFBQXpCLElBR0QsTUFBTWMsRUFBUWlDLEtBQUtDLE1BQU1ELEtBQUtFLElBQUkvRCxLQUFLYSxPQUFPQyxRQUFVZCxLQUFLYSxPQUFPd0IsT0FBU3JDLEtBQUt5QixPQUFPdUMsUUFFckZoRSxLQUFLNEIsUUFBVUEsR0FDbEI1QixLQUFLaUQsU0FBU3JCLEVBRWYsQ0FHRHFDLFVBQ0NqRSxLQUFLRixNQUFNb0UsWUFBWWxFLEtBQUtHLE1BQzVCLGtCQ3ZKRmdFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMudHJhbnNmcm9tUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyogQ2hhbmdlZCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgdHJhbnNsYXRlWSAtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKWBcblx0fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZTcxMDUxNzc1MTAxZDIzMzRhZVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJ0cmFuc2Zyb21QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50cyIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJ0aXRsZXNFbGVtZW50Iiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0IiwibGltaXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==