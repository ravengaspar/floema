/*! For license information please see main.eaa24a093caa6c37d8c4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js");Object(function(){var t=new Error("Cannot find module 'de'");throw t.code="MODULE_NOT_FOUND",t}());var o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,e){this.extra=0,this.createBounds(t),this.updateX(e),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const t=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=t,this.mesh.scale.y+=t}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}}},(function(t){t.h=()=>"7e66a8d0faae42f03c5a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ2pCRixLQUFLRCxNQUFNdUMsTUFBUSxFQUFJdEMsS0FBS3FCLEtBQUt3QixNQUFNM0MsRUFBSSxFQUFJRixLQUFLRSxFQUFJRixLQUFLRCxNQUFNdUMsTUFBUXRDLEtBQUtDLEtBQ2xGLENBQ0Q0QixRQUFRMUIsRUFBSSxHQUNYSCxLQUFLRyxHQUFLSCxLQUFLeUIsT0FBT3VCLElBQU03QyxHQUFLTyxPQUFPaUMsWUFFeEMzQyxLQUFLcUIsS0FBS29CLFNBQVN0QyxFQUNsQkgsS0FBS0QsTUFBTTJDLE9BQVMsRUFBSTFDLEtBQUtxQixLQUFLd0IsTUFBTTFDLEVBQUksRUFBSUgsS0FBS0csRUFBSUgsS0FBS0QsTUFBTTJDLE9BRXJFMUMsS0FBS3FCLEtBQUtvQixTQUFTdEMsR0FDb0QsR0FBdEVvQyxLQUFLVSxJQUFLakQsS0FBS3FCLEtBQUtvQixTQUFTdkMsRUFBSUYsS0FBS0QsTUFBTXVDLE1BQVNDLEtBQUtDLEdBQUssSUFBWSxFQUM1RSxDQUVEVSxPQUFPaEIsR0FDRGxDLEtBQUt5QixTQUVWekIsS0FBS21DLGlCQUNMbkMsS0FBSzJCLGNBQ0wzQixLQUFLNEIsUUFBUU0sR0FDYmxDLEtBQUs2QixRQUFRLEdBQ2Isa0JDakpGc0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJ2RlJ1xuXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZVJvdGF0aW9uKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0TWF0aC5QSSAqIDAuMSxcblx0XHRcdC1NYXRoLlBJICogMC4xLFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnhcblx0XHQpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblx0XHRjb25zdCBzY2FsZSA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHQwLjEsXG5cdFx0XHQwLFxuXHRcdFx0TWF0aC5hYnModGhpcy5tZXNoLnBvc2l0aW9uLngpXG5cdFx0KVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcblx0XHR0aGlzLm1lc2guc2NhbGUueSArPSBzY2FsZVxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ICs9XG5cdFx0XHRNYXRoLmNvcygodGhpcy5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICogNDAgLSA0MFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVSb3RhdGlvbigpXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2U2NmE4ZDBmYWFlNDJmMDNjNWFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJ1cGRhdGVSb3RhdGlvbiIsInJvdGF0aW9uIiwieiIsIndpZHRoIiwiTWF0aCIsIlBJIiwicG9zaXRpb24iLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImFicyIsImxlZnQiLCJ0b3AiLCJjb3MiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=