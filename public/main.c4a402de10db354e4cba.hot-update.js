/*! For license information please see main.c4a402de10db354e4cba.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new h.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),n(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(o.default.utils.mapRange(0,1,-.2,.2,s/(this.medias.length-1)))-.1,t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"af23d309375fdb124f90"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtlLE9BQU84QyxLQUFPN0QsS0FBS2UsT0FBT0MsUUFDbENoQixLQUFLZSxPQUFPcUUsVUFBWSxRQUNkcEYsS0FBS2UsT0FBTzhDLEtBQU83RCxLQUFLZSxPQUFPQyxVQUN6Q2hCLEtBQUtlLE9BQU9xRSxVQUFZLFFBR3pCcEYsS0FBS2UsT0FBTzhDLEtBQU83RCxLQUFLZSxPQUFPQyxRQUUvQixNQUFNZSxFQUFRc0QsS0FBS0MsTUFBT0QsS0FBS0UsS0FBTXZGLEtBQUtlLE9BQU9DLFFBQVVoQixLQUFLNEIsT0FBTyxHQUFHaUIsT0FBT0UsTUFBUSxHQUFLL0MsS0FBS2UsT0FBT2tELFFBQVdqRSxLQUFLNEIsT0FBTzRELE9BQVMsSUFFdEl4RixLQUFLK0IsUUFBVUEsR0FDbEIvQixLQUFLMEUsU0FBUzNDLEdBR2ZGLEVBQUk3QixLQUFLNEIsUUFBUSxDQUFDZSxFQUFPWixLQUNyQlksRUFBTU0sT0FBT2pELEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsT0FDdkNZLEVBQU1ULEtBQUtxQixTQUFTRCxFQUFJK0IsS0FBS0UsSUFBS0osRUFBQUEsUUFBQUEsTUFBQUEsU0FBb0IsRUFBRyxHQUFJLEdBQUssR0FBS3BELEdBQVMvQixLQUFLNEIsT0FBTzRELE9BQVMsS0FBUSxHQUU3RzdDLEVBQU1ULEtBQUtpQixTQUFTRSxHQUE0RSxHQUF2RWdDLEtBQUtJLElBQUs5QyxFQUFNVCxLQUFLaUIsU0FBU0MsRUFBSXBELEtBQUtGLE1BQU1pRCxNQUFTc0MsS0FBS0ssR0FBSyxJQUFZLEVBQXJHLEdBQ0osQ0FLREMsVUFDQzNGLEtBQUtILE1BQU0rRixZQUFZNUYsS0FBS0ksTUFDNUIsa0JDdk1GeUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmlkID0gJ2NvbGxlY3Rpb25zJ1xuXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG5cdFx0dGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5Jylcblx0XHR0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScgKTsgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblx0YXN5bmMgc2hvdygpIHtcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cdFx0XHRjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlXG5cdFx0XHRjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY11cblx0XHRcdGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZChtZWRpYSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKVxuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMjsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRcdHRoaXMudXBkYXRlKClcblxuXHRcdFx0dGhpcy50cmFuc2l0aW9uLmFuaW1hdGUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwb3NpdGlvbjogeyB4OiAwLCB5OiBtZWRpYS5tZXNoLnBvc2l0aW9uLnksIHo6IDAgfSxcblx0XHRcdFx0XHRyb3RhdGlvbjogbWVkaWEubWVzaC5yb3RhdGlvbixcblx0XHRcdFx0XHRzY2FsZTogbWVkaWEubWVzaC5zY2FsZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0XyA9PiB7XG5cdFx0XHRcdFx0bWVkaWEub3BhY2l0eS5tdWx0aXBsaWVyID0gMVxuXG5cdFx0XHRcdFx0bWFwKHRoaXMubWVkaWFzLCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdGlmIChtZWRpYSAhPT0gaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLnNob3coKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gc2Nyb2xsOyAvLyBwcmV0dGllci1pZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0XHR9XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEV2ZW50cy5cblx0ICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG5cdFx0dGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2VkLlxuXHQgKi9cblx0b25DaGFuZ2UoaW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblxuXHRcdGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KCB0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsgMjUgKiBzZWxlY3RlZENvbGxlY3Rpb24gfSUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy5tZWRpYSA9IHRoaXMubWVkaWFzW3RoaXMuaW5kZXhdXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlLlxuXHQgKi9cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5hYnMoICh0aGlzLnNjcm9sbC5jdXJyZW50IC0gdGhpcy5tZWRpYXNbMF0uYm91bmRzLndpZHRoIC8gMikgLyB0aGlzLnNjcm9sbC5saW1pdCApICogKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGluZGV4KVxuXHRcdH1cblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpO1xuICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5hYnMoIEdTQVAudXRpbHMubWFwUmFuZ2UoMCwgMSwgLTAuMiwgMC4yLCBpbmRleCAvICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSkgKSAtIDAuMTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgIG1lZGlhLm1lc2gucG9zaXRpb24ueSArPSBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDA7IH0pOyAvLyBwcmV0dGllci1pZ25vcmVcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXN0cm95LlxuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFmMjNkMzA5Mzc1ZmRiMTI0ZjkwXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJpZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwibWVkaWFzRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50Iiwic3RhcnQiLCJ0YXJnZXQiLCJsZXJwIiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJzcmMiLCJtZXNoIiwicHJvZ3JhbSIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJtZWRpYSIsImZpbmQiLCJib3VuZHMiLCJsZWZ0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwidXBkYXRlIiwiYW5pbWF0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJ6Iiwicm90YXRpb24iLCJzY2FsZSIsIl8iLCJvcGFjaXR5IiwibXVsdGlwbGllciIsIml0ZW0iLCJsYXN0IiwiaGlkZSIsImV2ZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiY29zIiwiUEkiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=