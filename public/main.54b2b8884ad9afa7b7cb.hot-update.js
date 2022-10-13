/*! For license information please see main.54b2b8884ad9afa7b7cb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element;this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra=0,this.createBounds(t),this.updateX(e),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const t=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=t,this.mesh.scale.y+=t}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}},"./app/components/Canvas/Home/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=a.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(t),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.createBounds(t),this.extra={x:0,y:0},this.updateX(e?e.x:0),this.updateY(e?e.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(t){this.bounds&&(this.updateX(t.x),this.updateY(t.y))}}}},(function(t){t.h=()=>"fad7569f9f2a6a15421f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUxQzFDLEtBQUtvQixLQUFLd0IsTUFBTTFDLEVBQUlGLEtBQUtELE1BQU1zQyxNQUFRckMsS0FBS3FDLE1BQzVDckMsS0FBS29CLEtBQUt3QixNQUFNekMsRUFBSUgsS0FBS0QsTUFBTTBDLE9BQVN6QyxLQUFLeUMsTUFDN0MsQ0FDRGQsUUFBUXpCLEVBQUksR0FDWEYsS0FBS0UsR0FBS0YsS0FBS3dCLE9BQU9zQixLQUFPNUMsR0FBS08sT0FBT2tDLFdBRXpDM0MsS0FBS29CLEtBQUtvQixTQUFTdEMsR0FDakJGLEtBQUtELE1BQU1zQyxNQUFRLEVBQUlyQyxLQUFLb0IsS0FBS3dCLE1BQU0xQyxFQUFJLEVBQUlGLEtBQUtFLEVBQUlGLEtBQUtELE1BQU1zQyxNQUFRckMsS0FBS0MsTUFBTUMsQ0FDeEYsQ0FDRDBCLFFBQVF6QixFQUFJLEdBQ1hILEtBQUtHLEdBQUtILEtBQUt3QixPQUFPdUIsSUFBTTVDLEdBQUtNLE9BQU9pQyxZQUV4QzFDLEtBQUtvQixLQUFLb0IsU0FBU3JDLEVBQ2xCSCxLQUFLRCxNQUFNMEMsT0FBUyxFQUFJekMsS0FBS29CLEtBQUt3QixNQUFNekMsRUFBSSxFQUFJSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNMEMsT0FBU3pDLEtBQUtDLE1BQU1FLENBQ3pGLENBRUQ4QyxPQUFPaEIsR0FDRGpDLEtBQUt3QixTQUVWeEIsS0FBSzJCLFFBQVFNLEVBQU8vQixHQUNwQkYsS0FBSzRCLFFBQVFLLEVBQU85QixHQUNwQixrQkN6SEZnRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnRcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZVJvdGF0aW9uKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0TWF0aC5QSSAqIDAuMSxcblx0XHRcdC1NYXRoLlBJICogMC4xLFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnhcblx0XHQpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblx0XHRjb25zdCBzY2FsZSA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHQwLjEsXG5cdFx0XHQwLFxuXHRcdFx0TWF0aC5hYnModGhpcy5tZXNoLnBvc2l0aW9uLngpXG5cdFx0KVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcblx0XHR0aGlzLm1lc2guc2NhbGUueSArPSBzY2FsZVxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ICs9XG5cdFx0XHRNYXRoLmNvcygodGhpcy5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICogNDAgLSA0MFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVSb3RhdGlvbigpXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxufVxuIiwiaW1wb3J0IHsgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgPyBzY3JvbGwueCA6IDApXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbCA/IHNjcm9sbC55IDogMClcblx0fVxuXG5cdC8qIExvb3BzICovXG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcblx0fVxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbC54KVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwueSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmFkNzU2OWY5ZjJhNmExNTQyMWZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiaW1hZ2UiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsInVwZGF0ZVJvdGF0aW9uIiwicm90YXRpb24iLCJ6Iiwid2lkdGgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwiYWJzIiwibGVmdCIsInRvcCIsImNvcyIsInVwZGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=