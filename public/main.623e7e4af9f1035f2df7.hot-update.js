/*! For license information please see main.623e7e4af9f1035f2df7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-fragment.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n\n    gl_FragColor = texture;\n    gl_FragColor.a = uAlpha;\n}\n"},"./app/shaders/home-vertex.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z *= sin((newPosition.y / uViewportSizes.y) * (newPosition.x / uViewportSizes.x) * PI + PI / 2.0) * (1.0 + abs(uSpeed));\n\n    gl_Position = projectionMatrix * newPosition;\n}\n"},"./app/components/Canvas/Home/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/home-vertex.glsl"),o=s("./app/shaders/home-fragment.glsl");class a{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:r}){this.element=t,this.gl=s,this.geometry=e,this.scene=h,this.index=i,this.sizes=r,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element;this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},uSpeed:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:.4})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x),this.updateY(e&&e.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t,e){this.updateX(t.x),this.updateY(t.y),this.program.uniforms.uSpeed.value=e}}},"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&n(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;const t=this.x.target-this.x.current,e=this.y.target-this.y.current,s=.001*Math.sqrt(t*t+e*e);this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n(this.medias,((t,e)=>{const i=t.mesh.scale.x/2,h=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+i<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-i>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-h<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+h>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,s)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"b5f1b0ab5030e07f74c5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0YsVUFBd0IsQ0FDL0JqQixFQUFNNUMsS0FBS3NCLFNBQVMzQyxFQUFJb0YsRUFDMUJ2RixLQUFLRCxNQUFNc0IsTUFBUSxJQUMxQitDLEVBQU1uRSxNQUFNRSxHQUFLSCxLQUFLdUUsYUFBYWpELE9BQ25DOEMsRUFBTTVDLEtBQUtHLFNBQVNDLEVBQUlDLEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRURxQyxFQUFNcEIsT0FBT2hELEtBQUt5QyxPQUFRUSxFQUExQixHQUVELENBRUR1QyxVQUNDeEYsS0FBS0YsTUFBTTJGLFlBQVl6RixLQUFLa0QsTUFDNUIsa0JDckxGd0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL2hvbWUtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9ob21lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTtcXG4gICAgZ2xfRnJhZ0NvbG9yLmEgPSB1QWxwaGE7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gZmxvYXQgdVNwZWVkO1xcbnVuaWZvcm0gdmVjMiB1Vmlld3BvcnRTaXplcztcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICAgIG5ld1Bvc2l0aW9uLnogKj0gc2luKChuZXdQb3NpdGlvbi55IC8gdVZpZXdwb3J0U2l6ZXMueSkgKiAobmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLngpICogUEkgKyBQSSAvIDIuMCkgKiAoMS4wICsgYWJzKHVTcGVlZCkpO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBuZXdQb3NpdGlvbjtcXG59XFxuXCI7IiwiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50XG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR1U3BlZWQ6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dVZpZXdwb3J0U2l6ZXM6IHsgdmFsdWU6IFt0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodF0gfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpOyAvLyBwcmV0dGllci1pZ25vcmVcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0Ly8gQW5pbWF0aW9uc1xuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMC40LFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0Ly8gRXZlbnRzXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwgJiYgc2Nyb2xsLnkpXG5cdH1cblxuXHQvLyBMb29wLlxuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhLng7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXG5cdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVTcGVlZC52YWx1ZSA9IHNwZWVkXG5cdH1cbn1cbiIsImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbCwge1xuXHRcdFx0aGVpZ2h0U2VnbWVudHM6IDIwLFxuXHRcdFx0d2lkdGhTZWdtZW50czogMjAsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuXHRcdFx0aGVpZ2h0OiAodGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcblx0XHRcdHdpZHRoOiAodGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LnRhcmdldCA9IDBcblxuXHRcdGlmICh0aGlzLnNjcm9sbCkgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuXHRcdHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG5cdFx0dGhpcy55LnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblx0XHRjb25zdCBhID0gdGhpcy54LnRhcmdldCAtIHRoaXMueC5jdXJyZW50XG5cdFx0Y29uc3QgYiA9IHRoaXMueS50YXJnZXQgLSB0aGlzLnkuY3VycmVudFxuXG5cdFx0Y29uc3Qgc3BlZWQgPSBNYXRoLnNxcnQoYSAqIGEgKyBiICogYikgKiAwLjAwMVxuXG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNjcm9sbC55IDwgdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAndG9wJ1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueSA+IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ2JvdHRvbSdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXHRcdFx0Y29uc3Qgc2NhbGVZID0gbWVkaWEubWVzaC5zY2FsZS55IC8gMlxuXG5cdFx0XHQvKiBYLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggLT0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qIFktYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ2JvdHRvbScpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSArIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSAtPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCwgc3BlZWQpXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNWYxYjBhYjUwMzBlMDdmNzRjNVwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ1U3BlZWQiLCJ1Vmlld3BvcnRTaXplcyIsIndpZHRoIiwiaGVpZ2h0IiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwicm90YXRpb24iLCJ6IiwiR1NBUCIsIk1hdGgiLCJQSSIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzcGVlZCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInNjcm9sbEN1cnJlbnQiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJQbGFuZSIsImhlaWdodFNlZ21lbnRzIiwid2lkdGhTZWdtZW50cyIsIm1lZGlhcyIsIm1hcCIsIm1lZGlhIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2FsbGVyeVNpemVzIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsImEiLCJiIiwic3FydCIsImRpcmVjdGlvbiIsInNjYWxlWCIsInNjYWxlWSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==