/*! For license information please see main.048feed84b09c2483ce2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./node_modules/gsap/index.js"),n=s("./app/shaders/plane-fragment.glsl"),r=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl);const t=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=t.getAttribute("data-src"),this.image.onload=t=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra=0,this.createBounds(t),this.updateX(e),this.updateY(0)}updateRotation(){this.mesh.rotation.z=o.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height,this.mesh.scale.x-=o.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}}},(function(t){t.h=()=>"cb00d7a7e8b5a3e1ca71"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ043QyxLQUFLMEIsS0FBS29CLFNBQVM1QyxFQUdwQixDQUNEK0IsUUFBUS9CLEVBQUksR0FDWEYsS0FBS0UsR0FBS0YsS0FBSzhCLE9BQU9xQixLQUFPakQsR0FBS1MsT0FBT3NDLFdBRXpDakQsS0FBSzBCLEtBQUtvQixTQUFTNUMsR0FDakJGLEtBQUtELE1BQU00QyxNQUFRLEVBQUkzQyxLQUFLMEIsS0FBS3dCLE1BQU1oRCxFQUFJLEVBQUlGLEtBQUtFLEVBQUlGLEtBQUtELE1BQU00QyxNQUFRM0MsS0FBS0MsS0FDbEYsQ0FDRGlDLFFBQVEvQixFQUFJLEdBQ1hILEtBQUtHLEdBQUtILEtBQUs4QixPQUFPc0IsSUFBTWpELEdBQUtRLE9BQU9xQyxZQUV4Q2hELEtBQUswQixLQUFLb0IsU0FBUzNDLEVBQ2xCSCxLQUFLRCxNQUFNZ0QsT0FBUyxFQUFJL0MsS0FBSzBCLEtBQUt3QixNQUFNL0MsRUFBSSxFQUFJSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNZ0QsT0FFckUvQyxLQUFLMEIsS0FBS29CLFNBQVMzQyxHQUNvRCxHQUF0RXlDLEtBQUtTLElBQUtyRCxLQUFLMEIsS0FBS29CLFNBQVM1QyxFQUFJRixLQUFLRCxNQUFNNEMsTUFBU0MsS0FBS0MsR0FBSyxJQUFZLEVBQzVFLENBRURTLE9BQU9mLEdBQ0R2QyxLQUFLOEIsU0FFVjlCLEtBQUt3QyxpQkFDTHhDLEtBQUtnQyxjQUNMaEMsS0FBS2lDLFFBQVFNLEdBQ2J2QyxLQUFLa0MsUUFBUSxHQUNiLGtCQ2xKRnFCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZVJvdGF0aW9uKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0TWF0aC5QSSAqIDAuMSxcblx0XHRcdC1NYXRoLlBJICogMC4xLFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnhcblx0XHQpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblxuICAgIHRoaXMubWVzaC5zY2FsZS54IC09IEdTQVAudXRpbHMubWFwUmFuZ2UoXG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHR0aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdE1hdGguUEkgKiAwLjEsXG5cdFx0XHQtTWF0aC5QSSAqIDAuMSxcblx0XHRcdHRoaXMubWVzaC5wb3NpdGlvbi54XG4gICAgKVxuXG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmFcblx0fVxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgKz1cblx0XHRcdE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVJvdGF0aW9uKClcblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYjAwZDdhN2U4YjVhM2UxY2E3MVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJ1cGRhdGVSb3RhdGlvbiIsInJvdGF0aW9uIiwieiIsIndpZHRoIiwiTWF0aCIsIlBJIiwicG9zaXRpb24iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJ0b3AiLCJjb3MiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=