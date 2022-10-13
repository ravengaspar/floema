/*! For license information please see main.5a70df681ef683c84f1e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t("./node_modules/ogl/src/core/Transform.js"),h=t("./node_modules/gsap/index.js"),r=t("./node_modules/lodash/map.js"),o=t("./app/components/Canvas/About/Media.js");class l{constructor({element:e,geometry:s,index:t,gl:h,scene:r,sizes:o}){this.element=e,this.elementWrapper=e.querySelector(".about__gallery__wrapper"),this.geometry=s,this.index=t,this.gl=h,this.scene=r,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=r(this.mediasElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,r(this.medias,(s=>s.onResize(e,this.scroll.current)))}onTouchDown({x:e,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:e,y:s}){const t=e.start-e.end;this.scroll.target=this.scroll.start-t}onTouchUp({x:e,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=h.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),r(this.medias,((e,s)=>{const t=e.mesh.scale.x/2;if(" left"===this.direction){e.mesh.position.x+t<-this.sizes.width/2&&(e.extra+=this.width)}else if("right"===this.direction){e.mesh.position.x-t>this.sizes.width/2&&(e.extra-=this.width)}e.update(this.scroll.current)})))}destroy(){this.scene.removeChild(this.group)}}},"./app/components/Canvas/About/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),r=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./node_modules/gsap/index.js"),l=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl");const a=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:r}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.index=i,this.sizes=r,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:l.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,s){this.extra=0,this.createBounds(e),this.updateX(s),this.updateY(0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e),this.updateY(0))}}},"./app/components/Canvas/About/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t("./node_modules/ogl/src/core/Transform.js"),h=t("./node_modules/ogl/src/extras/Plane.js"),r=t("./node_modules/lodash/map.js"),o=t("./app/components/Canvas/About/Gallery.js");const l=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.group=new i.Transform,this.createGeometry(),this.createGalleries(),this.group.setParent(s),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl)}createGalleries(){this.galleriesElements=document.querySelectorAll(".about__gallery"),this.galleries=r(this.galleriesElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){}hide(){}onResize(e){r(this.galleries,(s=>s.onResize(e)))}onTouchDown(e){r(this.galleries,(s=>s.onTouchDown(e)))}onTouchMove(e){r(this.galleries,(s=>s.onTouchMove(e)))}onTouchUp(e){r(this.galleries,(s=>s.onTouchUp(e)))}onWheel({pixelX:e,pixelY:s}){}update(){r(this.galleries,(e=>e.update()))}destroy(){r(this.galleries,(e=>e.destroy()))}}}},(function(e){e.h=()=>"27ffcb8dc2dbb4e8f583"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBR0RRLFVBQ0N6QixFQUFJZixLQUFLOEUsV0FBV0MsR0FBV0EsRUFBUXZDLFdBQ3ZDLGtCQ3hFRjJDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICcgbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEgKz0gdGhpcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEgLT0gdGhpcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXG5cdFx0XHQvLyBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgPSBNYXRoLmNvcygobWVkaWEubWVzaC5wb3NpdGlvbi54IC8gdGhpcy53aWR0aCkgKiBNYXRoLlBJICogNzUgLSA3NSlcblx0XHR9KVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHR0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuL0dhbGxlcnknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyaWVzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcmllcygpIHtcblx0XHR0aGlzLmdhbGxlcmllc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5JylcblxuXHRcdHRoaXMuZ2FsbGVyaWVzID0gbWFwKHRoaXMuZ2FsbGVyaWVzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBHYWxsZXJ5KHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge31cblx0aGlkZSgpIHt9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0bWFwKHRoaXMuZ2FsbGVyaWVzLCBnYWxsZXJ5ID0+IGdhbGxlcnkub25SZXNpemUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHRtYXAodGhpcy5nYWxsZXJpZXMsIGdhbGxlcnkgPT4gZ2FsbGVyeS5vblRvdWNoRG93bihldmVudCkpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hNb3ZlKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5Lm9uVG91Y2hVcChldmVudCkpXG5cdH1cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge31cblxuXHQvKiB1cGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LnVwZGF0ZSgpKVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdG1hcCh0aGlzLmdhbGxlcmllcywgZ2FsbGVyeSA9PiBnYWxsZXJ5LmRlc3Ryb3koKSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjdmZmNiOGRjMmRiYjRlOGY1ODNcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50Iiwic3RhcnQiLCJ0YXJnZXQiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWEiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRpcmVjdGlvbiIsIkdTQVAiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwiTWVzaCIsImNyZWF0ZUJvdW5kcyIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwidUFscGhhIiwiaGlkZSIsImhlaWdodCIsImlubmVySGVpZ2h0IiwibGVmdCIsInRvcCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyaWVzIiwiUGxhbmUiLCJnYWxsZXJpZXNFbGVtZW50cyIsImRvY3VtZW50IiwiZ2FsbGVyaWVzIiwiZ2FsbGVyeSIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=