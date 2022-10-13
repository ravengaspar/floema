/*! For license information please see main.49648f4cfc489ad90cb0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),c=e("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.gl=t,this.sizes=e,this.scene=s,this.transition=l,this.transfromPrefix=o("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new c.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image;window.TEXTURES[t],this.medias.find()}n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*s}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((t,s)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"eea73128d11b22783829"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cblx0XHR0aGlzLnRyYW5zZnJvbVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuXHRcdHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdGFzeW5jIHNob3coKSB7XG5cbiAgICBpZih0aGlzLnRyYW5zaXRpb24pIHtcbiAgICAgIGNvbnN0IHsgc3JjIH0gPSB0aGlzLnRyYW5zaXRpb24ubWVzaC5wcm9ncmFtLnVuaWZvcm1zLnRNYXAudmFsdWUuaW1hZ2VcbiAgICAgIGNvbnN0IHRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbc3JjXVxuICAgICAgY29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhcy5maW5kKClcblxuICAgIH1cblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyogQ2hhbmdlZCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGBcbiAgICAgIHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSlcbiAgICAgIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgcm90YXRlKC05MGRlZylcbiAgICBgXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG5cblx0XHRpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWVhNzMxMjhkMTFiMjI3ODM4MjlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsInRyYW5zZnJvbVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50Iiwic3RhcnQiLCJ0YXJnZXQiLCJsZXJwIiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJzcmMiLCJtZXNoIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImZpbmQiLCJtZWRpYSIsImhpZGUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3QiLCJsaW1pdCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9