/*! For license information please see main.7f46aba431b38a6e98c6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/lodash/map.js"),h=s("./app/components/Canvas/About/Media.js");class o{constructor({element:e,geometry:t,index:s,gl:i,scene:h,sizes:o}){this.element=e,this.geometry=t,this.index=s,this.gl=i,this.scene=h,this.sizes=o,this.scroll={current:0,target:0,last:0},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=i(this.mediasElements,((e,t)=>new h.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(e){this.bounds=this.element.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,i(this.medias,(t=>t.onResize(e,this.scroll)))}onTouchDown({x:e,y:t}){this.scroll.current=this.scroll}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.current-s}onTouchUp({x:e,y:t}){}update(){this.bounds}}},"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),o=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./node_modules/gsap/index.js"),a=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const c=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:o}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=o,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:a.default,vertex:r.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=n.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}}},"./app/components/Canvas/About/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),h=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/lodash/map.js"),n=s("./app/components/Canvas/About/Gallery.js");const a=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.group=new i.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(t)}createGeometry(){this.geometry=new h.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=o(this.galleriesElements,((e,t)=>new n.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){o(this.galleries,(t=>t.onResize(e)))}onTouchDown(e){o(this.galleries,(t=>t.onTouchDown(e)))}onTouchMove(e){o(this.galleries,(t=>t.onTouchMove(e)))}onTouchUp(e){o(this.galleries,(t=>t.onTouchUp(e)))}onWheel({pixelX:e,pixelY:t}){}update(){this.galleryBounds&&o(this.galleries,(e=>e.update()))}destroy(){}}},"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),a=s("./app/components/Canvas/About/index.js");class r{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome(),this.createAbout()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createAbout(){this.about=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new o.Transform}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}onRouteUpdate(e){"home"===e?this.createHome():this.destroyHome(),"about"===e?this.createAbout():this.destroyAbout()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.about&&this.about.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"8378fa0e34d88e0defdb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S3dGLFNBQVN5QixPQUFPLENBQ3BCbEIsT0FBUS9GLEtBQUsrRixPQUNiakcsTUFBT0UsS0FBS0YsT0FFYixrQkN0TEZvSCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGxcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblx0fVxufVxuIiwiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHR0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXHR9XG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyaWVzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyaWVzKCkge1xuXHRcdHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnknKVxuXG5cdFx0dGhpcy5nYWxsZXJpZXMgPSBtYXAodGhpcy5nYWxsZXJpZXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEdhbGxlcnkoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblJlc2l6ZShldmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hEb3duKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaE1vdmUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25Ub3VjaFVwKGV2ZW50KSlcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFgsIHBpeGVsWSB9KSB7fVxuXG5cdC8qIHVwZGF0ZSAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkudXBkYXRlKCkpXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KG51bGwpXG5cdH1cbn1cbiIsImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLm9uUm91dGVVcGRhdGUodGhpcy50ZW1wbGF0ZSlcblxuXHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlSG9tZSgpIHtcblx0XHR0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0ZGVzdHJveUFib3V0KCkge1xuXHRcdGlmICghdGhpcy5hYm91dCkgcmV0dXJuXG5cblx0XHR0aGlzLmFib3V0LmRlc3Ryb3koKVxuXHRcdHRoaXMuYWJvdXQgPSBudWxsXG5cdH1cblxuXHRvblJvdXRlVXBkYXRlKHRlbXBsYXRlKSB7XG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IHRydWVcblxuXHRcdHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0dGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaFVwKHZhbHVlcylcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHR9XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQudXBkYXRlKClcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Mzc4ZmEwZTM0ZDg4ZTBkZWZkYlwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImNyZWF0ZU1lZGlhcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYSIsIm1hcCIsIm1lZGlhc0VsZW1lbnRzIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWFzIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJyb3RhdGlvbiIsInoiLCJHU0FQIiwiTWF0aCIsIlBJIiwiY3JlYXRlQm91bmRzIiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJncm91cCIsIlRyYW5zZm9ybSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyaWVzIiwiUGxhbmUiLCJnYWxsZXJpZXNFbGVtZW50cyIsImRvY3VtZW50IiwiZ2FsbGVyaWVzIiwiZ2FsbGVyeSIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJnYWxsZXJ5Qm91bmRzIiwiZGVzdHJveSIsIkNhbnZhcyIsInRlbXBsYXRlIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUm91dGVVcGRhdGUiLCJjcmVhdGVIb21lIiwiY3JlYXRlQWJvdXQiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJob21lIiwiSG9tZSIsImFib3V0IiwiQWJvdXQiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3lBYm91dCIsInNldFNpemUiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsInRhbiIsInZhbHVlcyIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==