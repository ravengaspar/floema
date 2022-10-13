/*! For license information please see main.36e0eaa186241910842b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-fragment.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vec4 texture = texture2D(tMap, vUv);\n\n    gl_FragColor = texture;\n    gl_FragColor.a = uAlpha;\n}\n"},"./app/shaders/home-vertex.glsl":(t,e,s)=>{s.r(e),s.d(e,{default:()=>i});const i="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z *= sin((newPosition.y / uViewportSizes.y) * (newPosition.x / uViewportSizes.x) * PI + PI / 2.0) * (1.0 + abs(uSpeed));\n\n    gl_Position = projectionMatrix * newPosition;\n}\n"},"./app/components/Canvas/Home/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/home-vertex.glsl"),o=s("./app/shaders/home-fragment.glsl");class a{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:r}){this.element=t,this.gl=s,this.geometry=e,this.scene=h,this.index=i,this.sizes=r,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element;this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},uSpeed:{value:0},uViewportSizes:{value:[this.sizes.width,this.sizes.height]},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:.4})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x),this.updateY(e&&e.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t,e){this.updateX(t.x),this.updateY(t.y),this.program.uniforms.uSpeed.value=e}}},"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),n=s("./node_modules/lodash/map.js"),o=s("./app/components/Canvas/Home/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new i.Transform,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0},this.speed={target:0},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl,{heightSegments:20,widthSegments:20})}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new o.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&n(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.speed.target=1,this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){this.speed.target=0}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){if(!this.galleryBounds)return;this.x.target,this.x.current,this.y.target,this.y.current;this.speed.current=r.default.utils.interpolate(this.speed.current,this.speed.target,this.speed.lerp),this.x.current=r.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=r.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,n(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll,speed)}))}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"50afbfab344835b6bb73"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TTVDLEtBQUtHLFNBQVNDLEVBQUlDLEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZDLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLE1BQU0sR0FBeUIsV0FBckIvQixLQUFLRyxFQUFFK0UsVUFBd0IsQ0FDL0JkLEVBQU01QyxLQUFLc0IsU0FBUzNDLEVBQUlpRixFQUMxQnBGLEtBQUtELE1BQU1zQixNQUFRLElBQzFCK0MsRUFBTW5FLE1BQU1FLEdBQUtILEtBQUt1RSxhQUFhakQsT0FDbkM4QyxFQUFNNUMsS0FBS0csU0FBU0MsRUFBSUMsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVkMsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsQ0FFRHFDLEVBQU1wQixPQUFPaEQsS0FBS3lDLE9BQVFRLE1BQTFCLEdBRUQsQ0FFRG9DLFVBQ0NyRixLQUFLRixNQUFNd0YsWUFBWXRGLEtBQUtrRCxNQUM1QixrQkNyTUZxQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3NoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL2hvbWUtdmVydGV4Lmdsc2wiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gZmxvYXQgdUFscGhhO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRNYXA7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzQgdGV4dHVyZSA9IHRleHR1cmUyRCh0TWFwLCB2VXYpO1xcblxcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlO1xcbiAgICBnbF9GcmFnQ29sb3IuYSA9IHVBbHBoYTtcXG59XFxuXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbiNkZWZpbmUgUEkgMy4xNDE1OTI2NTM1ODk3OTMyMzg0NjI2NDMzODMyNzk1XFxuXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudW5pZm9ybSBmbG9hdCB1U3BlZWQ7XFxudW5pZm9ybSB2ZWMyIHVWaWV3cG9ydFNpemVzO1xcblxcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZVdiA9IHV2O1xcblxcbiAgICB2ZWM0IG5ld1Bvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG5cXG4gICAgbmV3UG9zaXRpb24ueiAqPSBzaW4oKG5ld1Bvc2l0aW9uLnkgLyB1Vmlld3BvcnRTaXplcy55KSAqIChuZXdQb3NpdGlvbi54IC8gdVZpZXdwb3J0U2l6ZXMueCkgKiBQSSArIFBJIC8gMi4wKSAqICgxLjAgKyBhYnModVNwZWVkKSk7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG5ld1Bvc2l0aW9uO1xcbn1cXG5cIjsiLCJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL2hvbWUtdmVydGV4Lmdsc2wnXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9ob21lLWZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnRcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHVTcGVlZDogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR1Vmlld3BvcnRTaXplczogeyB2YWx1ZTogW3RoaXMuc2l6ZXMud2lkdGgsIHRoaXMuc2l6ZXMuaGVpZ2h0XSB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvLyBBbmltYXRpb25zXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLjQsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvLyBFdmVudHNcblxuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbCAmJiBzY3JvbGwueSlcblx0fVxuXG5cdC8vIExvb3AuXG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAgKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueDsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cblxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICAqIHRoaXMuc2l6ZXMuaGVpZ2h0KSArIHRoaXMuZXh0cmEueTsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsLCBzcGVlZCkge1xuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwueClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpXG5cblx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudVNwZWVkLnZhbHVlID0gc3BlZWRcblx0fVxufVxuIiwiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgdGFyZ2V0OiAwXG4gICAgfVxuXG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wsIHtcblx0XHRcdGhlaWdodFNlZ21lbnRzOiAyMCxcblx0XHRcdHdpZHRoU2VnbWVudHM6IDIwLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC50YXJnZXQgPSAwXG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS50YXJnZXQgPSAwXG5cblx0XHRpZiAodGhpcy5zY3JvbGwpIG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zcGVlZC50YXJnZXQgPSAxXG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge1xuXHRcdHRoaXMuc3BlZWQudGFyZ2V0ID0gMFxuXHR9XG5cblx0b25XaGVlbCh7IHBpeGVsWCwgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLngudGFyZ2V0ICs9IHBpeGVsWFxuXHRcdHRoaXMueS50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cdFx0Y29uc3QgYSA9IHRoaXMueC50YXJnZXQgLSB0aGlzLnguY3VycmVudFxuXHRcdGNvbnN0IGIgPSB0aGlzLnkudGFyZ2V0IC0gdGhpcy55LmN1cnJlbnRcblxuXHRcdC8vIGNvbnN0IHNwZWVkID0gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpICogMC4wMDFcblxuXHRcdHRoaXMuc3BlZWQuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNwZWVkLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNwZWVkLnRhcmdldCxcblx0XHRcdHRoaXMuc3BlZWQubGVycFxuXHRcdClcblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC54ID4gdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY3JvbGwueSA8IHRoaXMueS5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnkuZGlyZWN0aW9uID0gJ3RvcCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnkgPiB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICdib3R0b20nXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblx0XHRcdGNvbnN0IHNjYWxlWSA9IG1lZGlhLm1lc2guc2NhbGUueSAvIDJcblxuXHRcdFx0LyogWC1heGlzICovXG5cdFx0XHRpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvKiBZLWF4aXMgKi9cblx0XHRcdGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAndG9wJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55IC0gc2NhbGVZXG5cdFx0XHRcdGlmICh5IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueSArPSB0aGlzLmdhbGxlcnlTaXplcy5oZWlnaHRcblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBzY2FsZVlcblx0XHRcdFx0aWYgKHkgPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwsIHNwZWVkKVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTBhZmJmYWIzNDQ4MzViNmJiNzNcIikiXSwibmFtZXMiOlsiTWVkaWEiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbWFnZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidVNwZWVkIiwidVZpZXdwb3J0U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJvdGF0aW9uIiwieiIsIkdTQVAiLCJNYXRoIiwiUEkiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwic3BlZWQiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJzY3JvbGxDdXJyZW50IiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5IiwiUGxhbmUiLCJoZWlnaHRTZWdtZW50cyIsIndpZHRoU2VnbWVudHMiLCJtZWRpYXMiLCJtYXAiLCJtZWRpYSIsImV2ZW50IiwiZ2FsbGVyeUJvdW5kcyIsImdhbGxlcnlTaXplcyIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJkaXJlY3Rpb24iLCJzY2FsZVgiLCJzY2FsZVkiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=