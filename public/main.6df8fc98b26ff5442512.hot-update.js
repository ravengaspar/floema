/*! For license information please see main.6df8fc98b26ff5442512.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var l=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),n=s("./node_modules/lodash/map.js"),c=s("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.scene=t,this.transfromPrefix=(0,o.Prefix)("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__titles"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((e,t)=>new c.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(e=>e.show()))}hide(){n(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(t=>t.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:e,y:t}){}onWheel({pixelY:e}){this.scroll.target+=e}onChange(e){this.index=e;const t=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((e,s)=>{s===t?e.classList.add(this.collectionsElementsActive):e.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*t}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((e,t)=>{e.update(this.scroll.current)}));const e=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==e&&this.onChange(e)}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"1c6929cc5e646695e85a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLbUMsT0FBUSxPQUVsQm5DLEtBQUtjLE9BQU9FLE9BQVM0QyxFQUFBQSxRQUFBQSxNQUFBQSxPQUFrQjVELEtBQUtjLE9BQU93QixNQUFPLEVBQUd0QyxLQUFLYyxPQUFPRSxRQUV6RWhCLEtBQUtjLE9BQU9DLFFBQVU2QyxFQUFBQSxRQUFBQSxNQUFBQSxZQUNyQjVELEtBQUtjLE9BQU9DLFFBQ1pmLEtBQUtjLE9BQU9FLE9BQ1poQixLQUFLYyxPQUFPRyxNQUdiakIsS0FBS0ssZUFBZXFELE1BQU0xRCxLQUFLQyxpQkFBb0IsY0FBYUQsS0FBS2MsT0FBT0MsYUFFeEVmLEtBQUtjLE9BQU91QixLQUFPckMsS0FBS2MsT0FBT0MsUUFDbENmLEtBQUtjLE9BQU8rQyxVQUFZLFFBQ2Q3RCxLQUFLYyxPQUFPdUIsS0FBT3JDLEtBQUtjLE9BQU9DLFVBQ3pDZixLQUFLYyxPQUFPK0MsVUFBWSxRQUd6QjdELEtBQUtjLE9BQU91QixLQUFPckMsS0FBS2MsT0FBT0MsUUFFL0JZLEVBQUkzQixLQUFLMEIsUUFBUSxDQUFDSyxFQUFPRixLQUN4QkUsRUFBTTRCLE9BQU8zRCxLQUFLYyxPQUFPQyxRQUF6QixJQUdELE1BQU1jLEVBQVFpQyxLQUFLQyxNQUFNRCxLQUFLRSxJQUFJaEUsS0FBS2MsT0FBT0MsUUFBVWYsS0FBS2MsT0FBT3dCLE9BQVN0QyxLQUFLMEIsT0FBT3VDLFFBRXJGakUsS0FBSzZCLFFBQVVBLEdBQ2xCN0IsS0FBS2tELFNBQVNyQixFQUVmLENBR0RxQyxVQUNDbEUsS0FBS0YsTUFBTXFFLFlBQVluRSxLQUFLRyxNQUM1QixrQkMvSkZpRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBQcmVmaXggfSBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLnRyYW5zZnJvbVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuXHRcdHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBDaGFuZ2VkICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG5cdFx0bWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYFxuICAgICAgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKVxuICAgICAgdHJhbnNsYXRlKC01MCUsIC01MCUpXG4gICAgICByb3RhdGUoLTkwZGVnKVxuICAgIGBcblx0fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxYzY5MjljYzVlNjQ2Njk1ZTg1YVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJ0cmFuc2Zyb21QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50cyIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJ0aXRsZXNFbGVtZW50Iiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzdGFydCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm1lZGlhIiwiaGlkZSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsYXN0IiwibGltaXQiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==