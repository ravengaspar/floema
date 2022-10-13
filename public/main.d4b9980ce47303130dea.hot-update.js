/*! For license information please see main.d4b9980ce47303130dea.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-fragment.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n\n    gl_FragColor = texture;\n    gl_FragColor.a = uAlpha;\n}\n"},"./app/shaders/home-vertex.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z *= sin((newPosition.y / uViewportSizes.y) * (newPosition.x / uViewportSizes.x) * PI + PI / 2.0) * (1.0 + abs(uSpeed));\n\n    gl_Position = projectionMatrix * newPosition;\n}\n"},"./app/components/Canvas/Home/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/home-vertex.glsl"),o=s("./app/shaders/home-fragment.glsl");class a{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:r}){this.element=t,this.gl=s,this.geometry=e,this.scene=h,this.index=i,this.sizes=r,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element;this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},uSpeed:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:.4})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x),this.updateY(e&&e.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t,e){this.updateX(t.x),this.updateY(t.y),this.program.uniforms.uSpeed.value=e}}},"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&n(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.x.target,this.x.current,this.y.target,this.y.current;this.speed.current=r.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,speed)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"654e2f998c285383bf48"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLRyxTQUFTQyxFQUFJQyxFQUFBQSxRQUFBQSxNQUFBQSxPQUE2QixLQUFWQyxLQUFLQyxHQUFxQixJQUFWRCxLQUFLQyxJQUVqRSxNQUFNLEdBQXlCLFdBQXJCL0IsS0FBS0csRUFBRStFLFVBQXdCLENBQy9CZCxFQUFNNUMsS0FBS3NCLFNBQVMzQyxFQUFJaUYsRUFDMUJwRixLQUFLRCxNQUFNc0IsTUFBUSxJQUMxQitDLEVBQU1uRSxNQUFNRSxHQUFLSCxLQUFLdUUsYUFBYWpELE9BQ25DOEMsRUFBTTVDLEtBQUtHLFNBQVNDLEVBQUlDLEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRURxQyxFQUFNcEIsT0FBT2hELEtBQUt5QyxPQUFRUSxNQUExQixHQUVELENBRURvQyxVQUNDckYsS0FBS0YsTUFBTXdGLFlBQVl0RixLQUFLa0QsTUFDNUIsa0JDck1GcUMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL2hvbWUtZnJhZ21lbnQuZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9ob21lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTtcXG4gICAgZ2xfRnJhZ0NvbG9yLmEgPSB1QWxwaGE7XFxufVxcblwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gZmxvYXQgdVNwZWVkO1xcbnVuaWZvcm0gdmVjMiB1Vmlld3BvcnRTaXplcztcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICAgIG5ld1Bvc2l0aW9uLnogKj0gc2luKChuZXdQb3NpdGlvbi55IC8gdVZpZXdwb3J0U2l6ZXMueSkgKiAobmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLngpICogUEkgKyBQSSAvIDIuMCkgKiAoMS4wICsgYWJzKHVTcGVlZCkpO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBuZXdQb3NpdGlvbjtcXG59XFxuXCI7IiwiaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9ob21lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50XG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR1U3BlZWQ6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dVZpZXdwb3J0U2l6ZXM6IHsgdmFsdWU6IFt0aGlzLnNpemVzLndpZHRoLCB0aGlzLnNpemVzLmhlaWdodF0gfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpOyAvLyBwcmV0dGllci1pZ25vcmVcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0Ly8gQW5pbWF0aW9uc1xuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMC40LFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0Ly8gRXZlbnRzXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwgJiYgc2Nyb2xsLnkpXG5cdH1cblxuXHQvLyBMb29wLlxuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID0gKC10aGlzLnNpemVzLndpZHRoIC8gMikgKyAodGhpcy5tZXNoLnNjYWxlLnggLyAyKSArICh0aGlzLnggICogdGhpcy5zaXplcy53aWR0aCkgKyB0aGlzLmV4dHJhLng7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAodGhpcy5zaXplcy5oZWlnaHQgLyAyKSAtICh0aGlzLm1lc2guc2NhbGUueSAvIDIpIC0gKHRoaXMueSAgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXG5cdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVTcGVlZC52YWx1ZSA9IHNwZWVkXG5cdH1cbn1cbiIsImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXG4gICAgdGhpcy5zcGVlZCA9IHtcbiAgICAgIFxuICAgIH1cblxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsLCB7XG5cdFx0XHRoZWlnaHRTZWdtZW50czogMjAsXG5cdFx0XHR3aWR0aFNlZ21lbnRzOiAyMCxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5U2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQ6ICh0aGlzLmdhbGxlcnlCb3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0KSAqIHRoaXMuc2l6ZXMuaGVpZ2h0LFxuXHRcdFx0d2lkdGg6ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsKSBtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc3BlZWQudGFyZ2V0ID0gMVxuXG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNwZWVkLnRhcmdldCA9IDBcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7XG5cdFx0dGhpcy54LnRhcmdldCArPSBwaXhlbFhcblx0XHR0aGlzLnkudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdGNvbnN0IGEgPSB0aGlzLngudGFyZ2V0IC0gdGhpcy54LmN1cnJlbnRcblx0XHRjb25zdCBiID0gdGhpcy55LnRhcmdldCAtIHRoaXMueS5jdXJyZW50XG5cblx0XHQvLyBjb25zdCBzcGVlZCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSAqIDAuMDAxXG5cblx0XHR0aGlzLnNwZWVkLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zcGVlZC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zcGVlZC50YXJnZXQsXG5cdFx0XHR0aGlzLnNwZWVkLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cdFx0XHRcdGlmICh5ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55IC09IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLCBzcGVlZClcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY1NGUyZjk5OGMyODUzODNiZjQ4XCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInVTcGVlZCIsInVWaWV3cG9ydFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJyb3RhdGlvbiIsInoiLCJHU0FQIiwiTWF0aCIsIlBJIiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNwZWVkIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwic2Nyb2xsQ3VycmVudCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsIlBsYW5lIiwiaGVpZ2h0U2VnbWVudHMiLCJ3aWR0aFNlZ21lbnRzIiwibWVkaWFzIiwibWFwIiwibWVkaWEiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnYWxsZXJ5U2l6ZXMiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwicGl4ZWxYIiwicGl4ZWxZIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwic2NhbGVZIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9