/*! For license information please see main.e306ad776e11cdffdaad.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/collections-fragment.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec4 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n\n  gl_FragColor = texture;\n  gl_FragColor.a = uAlpha;\n}\n"},"./app/shaders/collections-vertex.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec4 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n\n  vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n  vPosition = newPosition;\n\n  gl_Position = projectionMatrix * newPosition;\n}\n"},"./app/components/Canvas/Collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/collections-fragment.glsl"),n=s("./app/shaders/collections-vertex.glsl");const a=class{constructor({element:t,geometry:e,gl:s,index:i,scene:l,sizes:o}){this.element=t,this.geometry=e,this.gl=s,this.index=i,this.scene=l,this.sizes=o,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new l.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX()}show(){i.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){i.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){this.updateX(t);this.mesh.rotation.z=-.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=e===this.index?1:.4,this.opacity.current=i.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier,this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}},"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),r=s("./node_modules/prefix/index.js"),n=s("./node_modules/lodash/map.js"),a=s("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:t,scene:e,sizes:s,transition:l}){this.id="collections",this.gl=t,this.scene=e,this.sizes=s,this.transition=l,this.transformPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new a.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}async show(){if(this.transition){const{src:t}=this.transition.mesh.program.uniforms.tMap.value.image,e=window.TEXTURES[t],s=this.medias.find((t=>t.texture===e)),i=-s.bounds.left-s.bounds.width/2+window.innerWidth/2;this.update(),o.default.delayedCall(1,(t=>{this.scroll.current=this.scroll.target=this.scroll.last=this.scroll.start=-s.mesh.position.x})),this.transition.animate({position:{x:0,y:s.mesh.position.y,z:0},rotation:s.mesh.rotation,scale:s.mesh.scale},(t=>{s.opacity.multiplier=1,n(this.medias,(t=>{s!==t&&t.show()})),this.scroll.current=this.scroll.target=this.scroll.start=this.scroll.last=i}))}else n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transformPrefix]=`translateY(-${25*e}%) translate(-50%, -50%) rotate(-90deg)`}update(){this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transformPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current;const t=Math.floor(Math.abs((this.scroll.current-this.medias[0].bounds.width/2)/this.scroll.limit)*(this.medias.length-1));this.index!==t&&this.onChange(t),n(this.medias,((t,e)=>{t.update(this.scroll.current,this.index),t.mesh.rotation.z=Math.abs(o.default.utils.mapRange(0,1,-.2,.2,e/(this.medias.length-1)))-.1,t.mesh.position.y+=40*Math.cos(t.mesh.position.x/this.sizes.width*Math.PI*.1)-40}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"c0790573703f5424d0d3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUFBLFFBQUFBLE1BQUFBLFNBQW9CLEVBQUcsR0FBSSxHQUFLLEdBQUt0QyxHQUFTRyxLQUFLdUUsT0FBTytCLE9BQVMsS0FBUSxHQUU3RzNCLEVBQU1oRCxLQUFLa0IsU0FBUzFDLEdBQTRFLEdBQXZFOEMsS0FBS3NELElBQUs1QixFQUFNaEQsS0FBS2tCLFNBQVMzQyxFQUFJRixLQUFLRCxNQUFNMEMsTUFBU1EsS0FBS0MsR0FBSyxJQUFZLEVBQXJHLEdBQ0osQ0FLRHNELFVBQ0N4RyxLQUFLRixNQUFNMkcsWUFBWXpHLEtBQUt3RCxNQUM1QixrQkM5TUZrRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9jb2xsZWN0aW9ucy12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjNCB2UG9zaXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IHRleHR1cmU7XFxuICBnbF9GcmFnQ29sb3IuYSA9IHVBbHBoYTtcXG59XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWM0IHZQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcblxcbiAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICB2UG9zaXRpb24gPSBuZXdQb3NpdGlvbjtcXG5cXG4gIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cXG5cIjsiLCJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9jb2xsZWN0aW9ucy12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMub3BhY2l0eSA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHtcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScgKTsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHR9XG5cblx0LyoqXG5cdCAqIEFuaW1hdGlvbnMuXG5cdCAqL1xuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5vcGFjaXR5LFxuXHRcdFx0e1xuXHRcdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bXVsdGlwbGllcjogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5vcGFjaXR5LCB7XG5cdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogRXZlbnRzLlxuXHQgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KVxuXHR9XG5cblx0LyoqXG5cdCAqIExvb3AuXG5cdCAqL1xuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsLCBpbmRleCkge1xuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cblx0XHRjb25zdCBhbXBsaXR1ZGUgPSAwLjFcblx0XHRjb25zdCBmcmVxdWVuY3kgPSAxXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IC0wLjAyICogTWF0aC5QSSAqIE1hdGguc2luKHRoaXMuaW5kZXggLyBmcmVxdWVuY3kpXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPSBhbXBsaXR1ZGUgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KVxuXG5cdFx0dGhpcy5vcGFjaXR5LnRhcmdldCA9IGluZGV4ID09PSB0aGlzLmluZGV4ID8gMSA6IDAuNFxuXHRcdHRoaXMub3BhY2l0eS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMub3BhY2l0eS5jdXJyZW50LFxuXHRcdFx0dGhpcy5vcGFjaXR5LnRhcmdldCxcblx0XHRcdHRoaXMub3BhY2l0eS5sZXJwXG5cdFx0KVxuXG5cdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYS52YWx1ZSA9IHRoaXMub3BhY2l0eS5tdWx0aXBsaWVyXG5cdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYS52YWx1ZSA9IHRoaXMub3BhY2l0eS5tdWx0aXBsaWVyICogdGhpcy5vcGFjaXR5LmN1cnJlbnQ7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG59XG4iLCJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcywgdHJhbnNpdGlvbiB9KSB7XG5cdFx0dGhpcy5pZCA9ICdjb2xsZWN0aW9ucydcblxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25cblxuXHRcdHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeScpXG5cdFx0dGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJyApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY29sbGVjdGlvbnNfX2FydGljbGUnICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJyApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMub25SZXNpemUoe1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cdGFzeW5jIHNob3coKSB7XG5cdFx0aWYgKHRoaXMudHJhbnNpdGlvbikge1xuXHRcdFx0Y29uc3QgeyBzcmMgfSA9IHRoaXMudHJhbnNpdGlvbi5tZXNoLnByb2dyYW0udW5pZm9ybXMudE1hcC52YWx1ZS5pbWFnZVxuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tzcmNdXG5cdFx0XHRjb25zdCBtZWRpYSA9IHRoaXMubWVkaWFzLmZpbmQobWVkaWEgPT4gbWVkaWEudGV4dHVyZSA9PT0gdGV4dHVyZSlcblxuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gLW1lZGlhLmJvdW5kcy5sZWZ0IC0gbWVkaWEuYm91bmRzLndpZHRoIC8gMiArIHdpbmRvdy5pbm5lcldpZHRoIC8gMjsgLy8gcHJldHRpZXItaWdub3JlXG5cblx0XHRcdHRoaXMudXBkYXRlKClcblxuXHRcdFx0R1NBUC5kZWxheWVkQ2FsbCgxLCBfID0+IHtcblx0XHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9XG5cdFx0XHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID1cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5sYXN0ID1cblx0XHRcdFx0XHR0aGlzLnNjcm9sbC5zdGFydCA9XG5cdFx0XHRcdFx0XHQtbWVkaWEubWVzaC5wb3NpdGlvbi54XG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvc2l0aW9uOiB7IHg6IDAsIHk6IG1lZGlhLm1lc2gucG9zaXRpb24ueSwgejogMCB9LFxuXHRcdFx0XHRcdHJvdGF0aW9uOiBtZWRpYS5tZXNoLnJvdGF0aW9uLFxuXHRcdFx0XHRcdHNjYWxlOiBtZWRpYS5tZXNoLnNjYWxlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRfID0+IHtcblx0XHRcdFx0XHRtZWRpYS5vcGFjaXR5Lm11bHRpcGxpZXIgPSAxXG5cblx0XHRcdFx0XHRtYXAodGhpcy5tZWRpYXMsIGl0ZW0gPT4ge1xuXHRcdFx0XHRcdFx0aWYgKG1lZGlhICE9PSBpdGVtKSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uc2hvdygpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCA9IHRoaXMuc2Nyb2xsLmxhc3QgPSBzY3JvbGw7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHRcdH1cblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKipcblx0ICogRXZlbnRzLlxuXHQgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyoqXG5cdCAqIENoYW5nZWQuXG5cdCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQoIHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0keyAyNSAqIHNlbGVjdGVkQ29sbGVjdGlvbiB9JSkgdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpYDsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlLlxuXHQgKi9cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWCgke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vciggTWF0aC5hYnMoICh0aGlzLnNjcm9sbC5jdXJyZW50IC0gdGhpcy5tZWRpYXNbMF0uYm91bmRzLndpZHRoIC8gMikgLyB0aGlzLnNjcm9sbC5saW1pdCApICogKHRoaXMubWVkaWFzLmxlbmd0aCAtIDEpICk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGluZGV4KVxuXHRcdH1cblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuICAgICAgbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuaW5kZXgpO1xuICAgICAgbWVkaWEubWVzaC5yb3RhdGlvbi56ID0gTWF0aC5hYnMoIEdTQVAudXRpbHMubWFwUmFuZ2UoMCwgMSwgLTAuMiwgMC4yLCBpbmRleCAvICh0aGlzLm1lZGlhcy5sZW5ndGggLSAxKSkgKSAtIDAuMTsgLy8gcHJldHRpZXItaWdub3JlXG5cbiAgICAgIG1lZGlhLm1lc2gucG9zaXRpb24ueSArPSBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDA7IH0pOyAvLyBwcmV0dGllci1pZ25vcmVcblx0fVxuXG5cdC8qKlxuXHQgKiBEZXN0cm95LlxuXHQgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImMwNzkwNTczNzAzZjU0MjRkMGQzXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsIm9wYWNpdHkiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsIm11bHRpcGxpZXIiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInVwZGF0ZSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsInNpbiIsInRyYW5zaXRpb24iLCJpZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsImdhbGxlcnlXcmFwcGVyRWxlbWVudCIsInRpdGxlc0VsZW1lbnQiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUiLCJtZWRpYXNFbGVtZW50cyIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwic3JjIiwibWVkaWEiLCJmaW5kIiwiXyIsImxhc3QiLCJhbmltYXRlIiwiaXRlbSIsImV2ZW50IiwibGltaXQiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJkaXJlY3Rpb24iLCJmbG9vciIsImFicyIsImxlbmd0aCIsImNvcyIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==