/*! For license information please see main.0924d2e52d14620674fe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),c=e("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.gl=t,this.sizes=e,this.scene=s,this.transition=l,this.transfromPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new c.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s));e.bounds.left,e.bounds.width,window.innerWidth;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.sc}))}n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*s}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((t,s)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"5cf04d89114f530fc56e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBR3pCcEYsS0FBS2MsT0FBT2tELEtBQU9oRSxLQUFLYyxPQUFPQyxRQUUvQmEsRUFBSTVCLEtBQUsyQixRQUFRLENBQUNlLEVBQU9aLEtBQ3hCWSxFQUFNTSxPQUFPaEQsS0FBS2MsT0FBT0MsUUFBekIsSUFHRCxNQUFNZSxFQUFRdUQsS0FBS0MsTUFBTUQsS0FBS0UsSUFBSXZGLEtBQUtjLE9BQU9DLFFBQVVmLEtBQUtjLE9BQU9tRCxPQUFTakUsS0FBSzJCLE9BQU82RCxRQUVyRnhGLEtBQUs4QixRQUFVQSxHQUNsQjlCLEtBQUswRSxTQUFTNUMsRUFFZixDQUdEMkQsVUFDQ3pGLEtBQUtILE1BQU02RixZQUFZMUYsS0FBS0csTUFDNUIsa0JDMUxGd0YsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG5cdFx0dGhpcy50cmFuc2Zyb21QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5Jylcblx0XHR0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlcycpXG5cblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7IHNpemVzOiB0aGlzLnNpemVzIH0pXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRhc3luYyBzaG93KCkge1xuXG4gICAgaWYodGhpcy50cmFuc2l0aW9uKSB7XG4gICAgICBjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlXG4gICAgICBjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY11cbiAgICAgIGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZChtZWRpYSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKVxuICAgICAgY29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMlxuXG4gICAgICB0aGlzLnVwZGF0ZSgpXG5cbiAgICAgIHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKFxuICAgICAgICB7XG4gICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogbWVkaWEubWVzaC5wb3NpdGlvbi55LCB6OjB9LFxuICAgICAgICAgIHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuICAgICAgICAgIHNjYWxlOiBtZWRpYS5tZXNoLnNjYWxlXG4gICAgICAgIH0sXG4gICAgICAgIF8gPT4ge1xuICAgICAgICAgIG1lZGlhLm9wYWNpdHkubXVsdGlwbGllciA9IDE7XG5cbiAgICAgICAgICBtYXAodGhpcy5tZWRpYXMsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYobWVkaWEgIT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgaXRlbS5zaG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIHRoaXMuc2NcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgfVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBDaGFuZ2VkICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG5cdFx0bWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYFxuICAgICAgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKVxuICAgICAgdHJhbnNsYXRlKC01MCUsIC01MCUpXG4gICAgICByb3RhdGUoLTkwZGVnKVxuICAgIGBcblx0fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1Y2YwNGQ4OTExNGY1MzBmYzU2ZVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwidHJhbnNmcm9tUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInNjcm9sbCIsImN1cnJlbnQiLCJzdGFydCIsInRhcmdldCIsImxlcnAiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIm9uUmVzaXplIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsIm1lZGlhIiwiZmluZCIsImJvdW5kcyIsImxlZnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1cGRhdGUiLCJhbmltYXRlIiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJyb3RhdGlvbiIsInNjYWxlIiwiXyIsIm9wYWNpdHkiLCJtdWx0aXBsaWVyIiwiaXRlbSIsInNjIiwiaGlkZSIsImV2ZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==