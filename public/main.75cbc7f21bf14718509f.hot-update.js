/*! For license information please see main.75cbc7f21bf14718509f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.updateX(e),this.updateY(0)}}}},(function(e){e.h=()=>"2706951ec92ec766395c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtELE1BQU0yQyxPQUFTLEVBQUkxQyxLQUFLMEIsS0FBS2tCLE1BQU16QyxFQUFJLEVBQUlILEtBQUtHLEVBQUlILEtBQUtELE1BQU0yQyxNQUNyRSxDQUVETSxPQUFPVCxHQUNOdkMsS0FBS2lDLFFBQVFNLEdBQ2J2QyxLQUFLa0MsUUFBUSxFQUNiLGtCQ3hIRmUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmFcblx0fVxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI3MDY5NTFlYzkyZWM3NjYzOTVjXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=