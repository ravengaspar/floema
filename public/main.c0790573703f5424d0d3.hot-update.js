/*! For license information please see main.c0790573703f5424d0d3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>a});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),c=e("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new c.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),o.default.delayedCall(1,(t=>{this.scroll.current=this.scroll.target=this.scroll.last=this.scroll.start=-e.mesh.position})),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),n(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(o.default.utils.mapRange(0,1,-.2,.2,s/(this.medias.length-1)))-.1,t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"5c578dcd3787d5bc591c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG5cdFx0dGhpcy5pZCA9ICdjb2xsZWN0aW9ucydcblxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25cblxuXHRcdHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG5cdFx0dGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJyApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY29sbGVjdGlvbnNfX2FydGljbGUnICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJyApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMub25SZXNpemUoe1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cdGFzeW5jIHNob3coKSB7XG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbikge1xuXHRcdFx0Y29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZVxuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tzcmNdXG5cdFx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFzLmZpbmQobWVkaWEgPT4gbWVkaWEudGV4dHVyZSA9PT0gdGV4dHVyZSlcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMjsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRcdHRoaXMudXBkYXRlKClcblxuXHRcdFx0R1NBUC5kZWxheWVkQ2FsbCgxLCBfID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID1cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5sYXN0ID1cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5zdGFydCA9XG5cdFx0XHRcdFx0XHQtbWVkaWEubWVzaC5wb3NpdGlvblxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy50cmFuc2l0aW9uLmFuaW1hdGUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwb3NpdGlvbjogeyB4OiAwLCB5OiBtZWRpYS5tZXNoLnBvc2l0aW9uLnksIHo6IDAgfSxcblx0XHRcdFx0XHRyb3RhdGlvbjogbWVkaWEubWVzaC5yb3RhdGlvbixcblx0XHRcdFx0XHRzY2FsZTogbWVkaWEubWVzaC5zY2FsZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0XyA9PiB7XG5cdFx0XHRcdFx0bWVkaWEub3BhY2l0eS5tdWx0aXBsaWVyID0gMVxuXG5cdFx0XHRcdFx0bWFwKHRoaXMubWVkaWFzLCBpdGVtID0+IHtcblx0XHRcdFx0XHRcdGlmIChtZWRpYSAhPT0gaXRlbSkge1xuXHRcdFx0XHRcdFx0XHRpdGVtLnNob3coKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5sYXN0ID0gc2Nyb2xsOyAvLyBwcmV0dGllci1pZ25vcmVcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0XHR9XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyoqXG5cdCAqIEV2ZW50cy5cblx0ICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG5cdFx0dGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGFuZ2VkLlxuXHQgKi9cblx0b25DaGFuZ2UoaW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblxuXHRcdGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KCB0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHsgMjUgKiBzZWxlY3RlZENvbGxlY3Rpb24gfSUpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKWA7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZS5cblx0ICovXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoIE1hdGguYWJzKCAodGhpcy5zY3JvbGwuY3VycmVudCAtIHRoaXMubWVkaWFzWzBdLmJvdW5kcy53aWR0aCAvIDIpIC8gdGhpcy5zY3JvbGwubGltaXQgKSAqICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KTtcbiAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IE1hdGguYWJzKCBHU0FQLnV0aWxzLm1hcFJhbmdlKDAsIDEsIC0wLjIsIDAuMiwgaW5kZXggLyAodGhpcy5tZWRpYXMubGVuZ3RoIC0gMSkpICkgLSAwLjE7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwOyB9KTsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cblxuXHQvKipcblx0ICogRGVzdHJveS5cblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YzU3OGRjZDM3ODdkNWJjNTkxY1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwic3JjIiwibWVzaCIsInByb2dyYW0iLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwibWVkaWEiLCJmaW5kIiwiYm91bmRzIiwibGVmdCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInVwZGF0ZSIsIkdTQVAiLCJfIiwibGFzdCIsInBvc2l0aW9uIiwiYW5pbWF0ZSIsIngiLCJ5IiwieiIsInJvdGF0aW9uIiwic2NhbGUiLCJvcGFjaXR5IiwibXVsdGlwbGllciIsIml0ZW0iLCJoaWRlIiwiZXZlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImNvcyIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9