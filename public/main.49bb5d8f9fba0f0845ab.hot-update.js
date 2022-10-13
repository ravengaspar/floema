/*! For license information please see main.49bb5d8f9fba0f0845ab.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),l=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:l,sizes:r}){this.element=t,this.geometry=e,this.gl=s,this.scene=l,this.index=i,this.sizes=r,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new l.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(t),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.createBounds(t),this.extra={x:0,y:0},this.updateX(e?e.x:0),this.updateY(e?e.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t){this.bounds&&(this.updateX(t),this.updateY())}}},"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),h=s("./node_modules/lodash/map.js"),n=s("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s,transition:l}){this.gl=t,this.sizes=s,this.scene=e,this.transition=l,this.transfromPrefix=o("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=h(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,e=window.TEXTURES[t],s=this.medias.find((t=>t.texture===e)),i=-s.bounds.left-s.bounds.width/2+window.innerWidth/2;this.update(),this.transition.animate({position:{x:0,y:s.mesh.position.y,z:0},rotation:s.mesh.rotation,scale:s.mesh.scale},(t=>{s.opacity.multiplier=1,h(this.medias,(t=>{s!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else h(this.medias,(t=>t.show()))}hide(){h(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,h(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));h(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*e}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,h(this.medias,((t,e)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t),h(this.medias,((t,e)=>{t.update(this.scroll.current)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"cd57385cb0e0e91c57d2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPMEIsTUFHYjVELEtBQUtpRCxlQUFlK0MsTUFBTWhHLEtBQUs2QyxpQkFBb0IsY0FBYTdDLEtBQUtrQyxPQUFPdUIsYUFFeEV6RCxLQUFLa0MsT0FBTzRDLEtBQU85RSxLQUFLa0MsT0FBT3VCLFFBQ2xDekQsS0FBS2tDLE9BQU8rRCxVQUFZLFFBQ2RqRyxLQUFLa0MsT0FBTzRDLEtBQU85RSxLQUFLa0MsT0FBT3VCLFVBQ3pDekQsS0FBS2tDLE9BQU8rRCxVQUFZLFFBR3pCakcsS0FBS2tDLE9BQU80QyxLQUFPOUUsS0FBS2tDLE9BQU91QixRQUUvQlMsRUFBSWxFLEtBQUtpRSxRQUFRLENBQUNJLEVBQU94RSxLQUN4QndFLEVBQU0xQixPQUFPM0MsS0FBS2tDLE9BQU91QixRQUF6QixJQUdELE1BQU01RCxFQUFRcUcsS0FBS0MsTUFBTUQsS0FBS0UsSUFBSXBHLEtBQUtrQyxPQUFPdUIsUUFBVXpELEtBQUtrQyxPQUFPOEMsT0FBU2hGLEtBQUtpRSxPQUFPb0MsUUFFckZyRyxLQUFLSCxRQUFVQSxHQUNsQkcsS0FBS3lGLFNBQVM1RixHQUlicUUsRUFBSWxFLEtBQUtpRSxRQUFRLENBQUNJLEVBQU14RSxLQUN0QndFLEVBQU0xQixPQUFPM0MsS0FBS2tDLE9BQU91QixRQUF6QixHQUdKLENBR0Q2QyxVQUNDdEcsS0FBS0YsTUFBTXlHLFlBQVl2RyxLQUFLK0MsTUFDNUIsa0JDOUxGeUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25cblxuXHRcdHRoaXMudHJhbnNmcm9tUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG5cdFx0dGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMub25SZXNpemUoeyBzaXplczogdGhpcy5zaXplcyB9KVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0YXN5bmMgc2hvdygpIHtcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cdFx0XHRjb25zdCB7IHNyYyB9ID0gdGhpcy50cmFuc2l0aW9uLm1lc2gucHJvZ3JhbS51bmlmb3Jtcy50TWFwLnZhbHVlLmltYWdlXG5cdFx0XHRjb25zdCB0ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW3NyY11cblx0XHRcdGNvbnN0IG1lZGlhID0gdGhpcy5tZWRpYXMuZmluZChtZWRpYSA9PiBtZWRpYS50ZXh0dXJlID09PSB0ZXh0dXJlKVxuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMlxuXG5cdFx0XHR0aGlzLnVwZGF0ZSgpXG5cblx0XHRcdHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9zaXRpb246IHsgeDogMCwgeTogbWVkaWEubWVzaC5wb3NpdGlvbi55LCB6OiAwIH0sXG5cdFx0XHRcdFx0cm90YXRpb246IG1lZGlhLm1lc2gucm90YXRpb24sXG5cdFx0XHRcdFx0c2NhbGU6IG1lZGlhLm1lc2guc2NhbGUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdF8gPT4ge1xuXHRcdFx0XHRcdG1lZGlhLm9wYWNpdHkubXVsdGlwbGllciA9IDFcblxuXHRcdFx0XHRcdG1hcCh0aGlzLm1lZGlhcywgaXRlbSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAobWVkaWEgIT09IGl0ZW0pIHtcblx0XHRcdFx0XHRcdFx0aXRlbS5zaG93KClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGxcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0XHR9XG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlXcmFwcGVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBDaGFuZ2VkICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG5cdFx0bWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYFxuICAgICAgdHJhbnNsYXRlWSgtJHsyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbn0lKVxuICAgICAgdHJhbnNsYXRlKC01MCUsIC01MCUpXG4gICAgICByb3RhdGUoLTkwZGVnKVxuICAgIGBcblx0fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKC10aGlzLnNjcm9sbC5saW1pdCwgMCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQuc3R5bGVbdGhpcy50cmFuc2Zyb21QcmVmaXhdID0gYHRyYW5zbGF0ZVgoJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5sYXN0IDwgdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwubGFzdCA+IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cblx0XHRjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblxuXHRcdGlmICh0aGlzLmluZGV4ICE9PSBpbmRleCkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZShpbmRleClcblx0XHR9XG5cblxuICAgIG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLGluZGV4KSA9PiB7XG4gICAgICBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcbiAgICB9KVxuXG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZDU3Mzg1Y2IwZTBlOTFjNTdkMlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmcm9tUHJlZml4IiwiUHJlZml4IiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwiZ2FsbGVyeVdyYXBwZXJFbGVtZW50IiwidGl0bGVzRWxlbWVudCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsInNyYyIsIm1lZGlhIiwiZmluZCIsImFuaW1hdGUiLCJ6Iiwicm90YXRpb24iLCJfIiwib3BhY2l0eSIsIm11bHRpcGxpZXIiLCJpdGVtIiwibGFzdCIsImV2ZW50IiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJsZW5ndGgiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=