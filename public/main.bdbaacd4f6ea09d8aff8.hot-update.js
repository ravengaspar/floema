/*! For license information please see main.bdbaacd4f6ea09d8aff8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),a=e("./app/components/Canvas/Collections/Media.js");const c=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.gl=t,this.sizes=e,this.scene=s,this.transition=l,this.transfromPrefix=o("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new a.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*s}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((t,s)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t),n(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(r.default.utils.mapRange(0,1,-.2,.2,s/(this.medias.length-1))-.1)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"515ef9b640d6e8b3eb7b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xDZixLQUFLYyxPQUFPcUUsVUFBWSxRQUNkbkYsS0FBS2MsT0FBTzhDLEtBQU81RCxLQUFLYyxPQUFPQyxVQUN6Q2YsS0FBS2MsT0FBT3FFLFVBQVksUUFHekJuRixLQUFLYyxPQUFPOEMsS0FBTzVELEtBQUtjLE9BQU9DLFFBRS9CYSxFQUFJNUIsS0FBSzJCLFFBQVEsQ0FBQ2UsRUFBT1osS0FDeEJZLEVBQU1NLE9BQU9oRCxLQUFLYyxPQUFPQyxRQUF6QixJQUdELE1BQU1lLEVBQVFzRCxLQUFLQyxNQUFNRCxLQUFLRSxJQUFJdEYsS0FBS2MsT0FBT0MsUUFBVWYsS0FBS2MsT0FBT2tELE9BQVNoRSxLQUFLMkIsT0FBTzRELFFBRXJGdkYsS0FBSzhCLFFBQVVBLEdBQ2xCOUIsS0FBS3lFLFNBQVMzQyxHQUdmRixFQUFJNUIsS0FBSzJCLFFBQVEsQ0FBQ2UsRUFBT1osS0FDeEJZLEVBQU1NLE9BQU9oRCxLQUFLYyxPQUFPQyxRQUFTZixLQUFLOEIsT0FDdkNZLEVBQU1ULEtBQUtxQixTQUFTRCxFQUFJK0IsS0FBS0UsSUFDNUJKLEVBQUFBLFFBQUFBLE1BQUFBLFNBQW9CLEVBQUcsR0FBSSxHQUFLLEdBQUtwRCxHQUFTOUIsS0FBSzJCLE9BQU80RCxPQUFTLElBQU0sR0FEMUUsR0FJRCxDQUdEQyxVQUNDeEYsS0FBS0gsTUFBTTRGLFlBQVl6RixLQUFLRyxNQUM1QixrQkMvTEZ1RixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cblx0XHR0aGlzLnRyYW5zZnJvbVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuXHRcdHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdGFzeW5jIHNob3coKSB7XG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbikge1xuXHRcdFx0Y29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZVxuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tzcmNdXG5cdFx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFzLmZpbmQobWVkaWEgPT4gbWVkaWEudGV4dHVyZSA9PT0gdGV4dHVyZSlcblx0XHRcdGNvbnN0IHNjcm9sbCA9IC1tZWRpYS5ib3VuZHMubGVmdCAtIG1lZGlhLmJvdW5kcy53aWR0aCAvIDIgKyB3aW5kb3cuaW5uZXJXaWR0aCAvIDJcblxuXHRcdFx0dGhpcy51cGRhdGUoKVxuXG5cdFx0XHR0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7IHg6IDAsIHk6IG1lZGlhLm1lc2gucG9zaXRpb24ueSwgejogMCB9LFxuXHRcdFx0XHRcdHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuXHRcdFx0XHRcdHNjYWxlOiBtZWRpYS5tZXNoLnNjYWxlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRfID0+IHtcblx0XHRcdFx0XHRtZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXIgPSAxXG5cblx0XHRcdFx0XHRtYXAodGhpcy5tZWRpYXMsIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG1lZGlhICE9PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uc2hvdygpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gc2Nyb2xsXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdFx0fVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyogQ2hhbmdlZCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGBcbiAgICAgIHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSlcbiAgICAgIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgcm90YXRlKC05MGRlZylcbiAgICBgXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG5cblx0XHRpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5pbmRleClcblx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IE1hdGguYWJzKFxuXHRcdFx0XHRHU0FQLnV0aWxzLm1hcFJhbmdlKDAsIDEsIC0wLjIsIDAuMiwgaW5kZXggLyAodGhpcy5tZWRpYXMubGVuZ3RoIC0gMSkpIC0gMC4xXG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUxNWVmOWI2NDBkNmU4YjNlYjdiXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJ0cmFuc2Zyb21QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwic3JjIiwibWVzaCIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwibWVkaWEiLCJmaW5kIiwiYm91bmRzIiwibGVmdCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInVwZGF0ZSIsImFuaW1hdGUiLCJwb3NpdGlvbiIsIngiLCJ5IiwieiIsInJvdGF0aW9uIiwic2NhbGUiLCJfIiwib3BhY2l0eSIsIm11bHRpcGxpZXIiLCJpdGVtIiwibGFzdCIsImhpZGUiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==