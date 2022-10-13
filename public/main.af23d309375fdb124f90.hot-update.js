/*! For license information please see main.af23d309375fdb124f90.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),n(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(o.default.utils.mapRange(0,1,-.2,.2,s/(this.medias.length-1)))-.1,t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"08d8cc98c6e381912403"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtlLE9BQU84QyxLQUFPN0QsS0FBS2UsT0FBT0MsUUFDbENoQixLQUFLZSxPQUFPcUUsVUFBWSxRQUNkcEYsS0FBS2UsT0FBTzhDLEtBQU83RCxLQUFLZSxPQUFPQyxVQUN6Q2hCLEtBQUtlLE9BQU9xRSxVQUFZLFFBR3pCcEYsS0FBS2UsT0FBTzhDLEtBQU83RCxLQUFLZSxPQUFPQyxRQUUvQixNQUFNZSxFQUFRc0QsS0FBS0MsTUFBT0QsS0FBS0UsS0FBTXZGLEtBQUtlLE9BQU9DLFFBQVVoQixLQUFLNEIsT0FBTyxHQUFHaUIsT0FBT0UsTUFBUSxHQUFLL0MsS0FBS2UsT0FBT2tELFFBQVdqRSxLQUFLNEIsT0FBTzRELE9BQVMsSUFFdEl4RixLQUFLK0IsUUFBVUEsR0FDbEIvQixLQUFLMEUsU0FBUzNDLEdBR2ZGLEVBQUk3QixLQUFLNEIsUUFBUSxDQUFDZSxFQUFPWixLQUNyQlksRUFBTU0sT0FBT2pELEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsT0FDdkNZLEVBQU1ULEtBQUtxQixTQUFTRCxFQUFJK0IsS0FBS0UsSUFBS0osRUFBQUEsUUFBQUEsTUFBQUEsU0FBb0IsRUFBRyxHQUFJLEdBQUssR0FBS3BELEdBQVMvQixLQUFLNEIsT0FBTzRELE9BQVMsS0FBUSxHQUU3RzdDLEVBQU1ULEtBQUtpQixTQUFTRSxHQUE0RSxHQUF2RWdDLEtBQUtJLElBQUs5QyxFQUFNVCxLQUFLaUIsU0FBU0MsRUFBSXBELEtBQUtGLE1BQU1pRCxNQUFTc0MsS0FBS0ssR0FBSyxJQUFZLEVBQXJHLEdBQ0osQ0FLREMsVUFDQzNGLEtBQUtILE1BQU0rRixZQUFZNUYsS0FBS0ksTUFDNUIsa0JDM01GeUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmlkID0gJ2NvbGxlY3Rpb25zJ1xuXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG5cdFx0dGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5Jylcblx0XHR0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScgKTsgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblx0YXN5bmMgc2hvdygpIHtcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cblxuICAgICAgXG5cblx0XHRcdGNvbnN0IHsgc3JjIH0gPSB0aGlzLnRyYW5zaXRpb24ubWVzaC5wcm9ncmFtLnVuaWZvcm1zLnRNYXAudmFsdWUuaW1hZ2Vcblx0XHRcdGNvbnN0IHRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbc3JjXVxuXHRcdFx0Y29uc3QgbWVkaWEgPSB0aGlzLm1lZGlhcy5maW5kKG1lZGlhID0+IG1lZGlhLnRleHR1cmUgPT09IHRleHR1cmUpXG5cdFx0XHRjb25zdCBzY3JvbGwgPSAtbWVkaWEuYm91bmRzLmxlZnQgLSBtZWRpYS5ib3VuZHMud2lkdGggLyAyICsgd2luZG93LmlubmVyV2lkdGggLyAyOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdFx0dGhpcy51cGRhdGUoKVxuXG5cdFx0XHR0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7IHg6IDAsIHk6IG1lZGlhLm1lc2gucG9zaXRpb24ueSwgejogMCB9LFxuXHRcdFx0XHRcdHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuXHRcdFx0XHRcdHNjYWxlOiBtZWRpYS5tZXNoLnNjYWxlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRfID0+IHtcblx0XHRcdFx0XHRtZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXIgPSAxXG5cblx0XHRcdFx0XHRtYXAodGhpcy5tZWRpYXMsIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG1lZGlhICE9PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uc2hvdygpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGw7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHRcdH1cblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKipcblx0ICogRXZlbnRzLlxuXHQgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZWQuXG5cdCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQoIHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0keyAyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbiB9JSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHR0aGlzLm1lZGlhID0gdGhpcy5tZWRpYXNbdGhpcy5pbmRleF1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUuXG5cdCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKCBNYXRoLmFicyggKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSB0aGlzLm1lZGlhc1swXS5ib3VuZHMud2lkdGggLyAyKSAvIHRoaXMuc2Nyb2xsLmxpbWl0ICkgKiAodGhpcy5tZWRpYXMubGVuZ3RoIC0gMSkgKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5pbmRleCk7XG4gICAgICBtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBNYXRoLmFicyggR1NBUC51dGlscy5tYXBSYW5nZSgwLCAxLCAtMC4yLCAwLjIsIGluZGV4IC8gKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpKSApIC0gMC4xOyAvLyBwcmV0dGllci1pZ25vcmVcblxuICAgICAgbWVkaWEubWVzaC5wb3NpdGlvbi55ICs9IE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICogNDAgLSA0MDsgfSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0LyoqXG5cdCAqIERlc3Ryb3kuXG5cdCAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDhkOGNjOThjNmUzODE5MTI0MDNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsImlkIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInNjcm9sbCIsImN1cnJlbnQiLCJzdGFydCIsInRhcmdldCIsImxlcnAiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIm9uUmVzaXplIiwic2V0UGFyZW50Iiwic2hvdyIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsIm1lZGlhIiwiZmluZCIsImJvdW5kcyIsImxlZnQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJ1cGRhdGUiLCJhbmltYXRlIiwicG9zaXRpb24iLCJ4IiwieSIsInoiLCJyb3RhdGlvbiIsInNjYWxlIiwiXyIsIm9wYWNpdHkiLCJtdWx0aXBsaWVyIiwiaXRlbSIsImxhc3QiLCJoaWRlIiwiZXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJsZW5ndGgiLCJjb3MiLCJQSSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==