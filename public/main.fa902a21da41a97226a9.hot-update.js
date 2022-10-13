/*! For license information please see main.fa902a21da41a97226a9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),l=e("./node_modules/ogl/src/extras/Plane.js"),o=e("./node_modules/gsap/index.js"),r=e("./node_modules/prefix/index.js"),n=e("./node_modules/lodash/map.js"),a=e("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:t,scene:s,sizes:e,transition:l}){this.id="collections",this.gl=t,this.scene=s,this.sizes=e,this.transition=l,this.transformPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,s)=>new a.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){this.media.opacity.multiplier;const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,s=window.TEXTURES[t],e=this.medias.find((t=>t.texture===s)),i=-e.bounds.left-e.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:e.mesh.position.y,z:0},rotation:e.mesh.rotation,scale:e.mesh.scale},(t=>{e.opacity.multiplier=1,n(this.medias,(t=>{e!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(s=>s.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.last-e}onTouchUp({x:t,y:s}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const s=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,e)=>{e===s?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*s}%) translate(-50%, -50%) rotate(-90deg)`,this.media=this.medias[this.index]}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),n(this.medias,((t,s)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(o.default.utils.mapRange(0,1,-.2,.2,s/(this.medias.length-1)))-.1,t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"7b288f20ca9e59d193bd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWFGLEtBQUtlLE9BQU9DLGFBRXhFaEIsS0FBS2UsT0FBTzhDLEtBQU83RCxLQUFLZSxPQUFPQyxRQUNsQ2hCLEtBQUtlLE9BQU9xRSxVQUFZLFFBQ2RwRixLQUFLZSxPQUFPOEMsS0FBTzdELEtBQUtlLE9BQU9DLFVBQ3pDaEIsS0FBS2UsT0FBT3FFLFVBQVksUUFHekJwRixLQUFLZSxPQUFPOEMsS0FBTzdELEtBQUtlLE9BQU9DLFFBRS9CLE1BQU1lLEVBQVFzRCxLQUFLQyxNQUFPRCxLQUFLRSxLQUFNdkYsS0FBS2UsT0FBT0MsUUFBVWhCLEtBQUs0QixPQUFPLEdBQUdtQixPQUFPRSxNQUFRLEdBQUtqRCxLQUFLZSxPQUFPa0QsUUFBV2pFLEtBQUs0QixPQUFPNEQsT0FBUyxJQUV0SXhGLEtBQUsrQixRQUFVQSxHQUNsQi9CLEtBQUswRSxTQUFTM0MsR0FHZkYsRUFBSTdCLEtBQUs0QixRQUFRLENBQUNLLEVBQU9GLEtBQ3JCRSxFQUFNa0IsT0FBT25ELEtBQUtlLE9BQU9DLFFBQVNoQixLQUFLK0IsT0FDdkNFLEVBQU1JLEtBQUtvQixTQUFTRCxFQUFJNkIsS0FBS0UsSUFBS0osRUFBQUEsUUFBQUEsTUFBQUEsU0FBb0IsRUFBRyxHQUFJLEdBQUssR0FBS3BELEdBQVMvQixLQUFLNEIsT0FBTzRELE9BQVMsS0FBUSxHQUU3R3ZELEVBQU1JLEtBQUtnQixTQUFTRSxHQUE0RSxHQUF2RThCLEtBQUtJLElBQUt4RCxFQUFNSSxLQUFLZ0IsU0FBU0MsRUFBSXRELEtBQUtGLE1BQU1tRCxNQUFTb0MsS0FBS0ssR0FBSyxJQUFZLEVBQXJHLEdBQ0osQ0FLREMsVUFDQzNGLEtBQUtILE1BQU0rRixZQUFZNUYsS0FBS0ksTUFDNUIsa0JDM01GeUYsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmlkID0gJ2NvbGxlY3Rpb25zJ1xuXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy50cmFuc2l0aW9uID0gdHJhbnNpdGlvblxuXG5cdFx0dGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5Jylcblx0XHR0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScgKTsgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblx0YXN5bmMgc2hvdygpIHtcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cblxuICAgICAgdGhpcy5tZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXJcblxuXHRcdFx0Y29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZVxuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tzcmNdXG5cdFx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFzLmZpbmQobWVkaWEgPT4gbWVkaWEudGV4dHVyZSA9PT0gdGV4dHVyZSlcblx0XHRcdGNvbnN0IHNjcm9sbCA9IC1tZWRpYS5ib3VuZHMubGVmdCAtIG1lZGlhLmJvdW5kcy53aWR0aCAvIDIgKyB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0XHR0aGlzLnVwZGF0ZSgpXG5cblx0XHRcdHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9zaXRpb246IHsgeDogMCwgeTogbWVkaWEubWVzaC5wb3NpdGlvbi55LCB6OiAwIH0sXG5cdFx0XHRcdFx0cm90YXRpb246IG1lZGlhLm1lc2gucm90YXRpb24sXG5cdFx0XHRcdFx0c2NhbGU6IG1lZGlhLm1lc2guc2NhbGUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdF8gPT4ge1xuXHRcdFx0XHRcdG1lZGlhLm9wYWNpdHkubXVsdGlwbGllciA9IDFcblxuXHRcdFx0XHRcdG1hcCh0aGlzLm1lZGlhcywgaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobWVkaWEgIT09IGl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0aXRlbS5zaG93KClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwubGFzdCA9IHNjcm9sbDsgLy8gcHJldHRpZXItaWdub3JlXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdFx0fVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qKlxuXHQgKiBFdmVudHMuXG5cdCAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKipcblx0ICogQ2hhbmdlZC5cblx0ICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCggdGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0bWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7IDI1ICogc2VsZWN0ZWRDb2xsZWN0aW9uIH0lKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZylgOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhc1t0aGlzLmluZGV4XVxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZS5cblx0ICovXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoIE1hdGguYWJzKCAodGhpcy5zY3JvbGwuY3VycmVudCAtIHRoaXMubWVkaWFzWzBdLmJvdW5kcy53aWR0aCAvIDIpIC8gdGhpcy5zY3JvbGwubGltaXQgKSAqICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgIG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLmluZGV4KTtcbiAgICAgIG1lZGlhLm1lc2gucm90YXRpb24ueiA9IE1hdGguYWJzKCBHU0FQLnV0aWxzLm1hcFJhbmdlKDAsIDEsIC0wLjIsIDAuMiwgaW5kZXggLyAodGhpcy5tZWRpYXMubGVuZ3RoIC0gMSkpICkgLSAwLjE7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG4gICAgICBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKz0gTWF0aC5jb3MoKG1lZGlhLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwOyB9KTsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cblxuXHQvKipcblx0ICogRGVzdHJveS5cblx0ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YjI4OGYyMGNhOWU1OWQxOTNiZFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiaWQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJvcGFjaXR5IiwibXVsdGlwbGllciIsInNyYyIsIm1lc2giLCJwcm9ncmFtIiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImZpbmQiLCJib3VuZHMiLCJsZWZ0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwidXBkYXRlIiwiYW5pbWF0ZSIsInBvc2l0aW9uIiwieCIsInkiLCJ6Iiwicm90YXRpb24iLCJzY2FsZSIsIl8iLCJpdGVtIiwibGFzdCIsImhpZGUiLCJldmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxpbWl0IiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxZIiwib25DaGFuZ2UiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsImVsZW1lbnRJbmRleCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInN0eWxlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImNvcyIsIlBJIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9