/*! For license information please see main.72c2bc89053dd9e7b648.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Program.js"),h=e("./node_modules/ogl/src/core/Mesh.js"),a=e("./node_modules/gsap/index.js"),o=e("./app/classes/Detection.js"),n=e("./app/shaders/plane-fragment.glsl"),r=e("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:s,gl:e,index:i,scene:h,sizes:a}){this.element=t,this.geometry=s,this.gl=e,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,s){this.extra=0,this.createBounds(t),this.updateX(s),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const t=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=t,this.mesh.scale.y+=t}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight;const s=o.default.isPhone()?15:40;this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)*s-s}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}}},(function(t){t.h=()=>"026ec186f7cda617a976"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ2pCRixLQUFLRCxNQUFNdUMsTUFBUSxFQUFJdEMsS0FBS3FCLEtBQUt3QixNQUFNM0MsRUFBSSxFQUFJRixLQUFLRSxFQUFJRixLQUFLRCxNQUFNdUMsTUFBUXRDLEtBQUtDLEtBQ2xGLENBQ0Q0QixRQUFRMUIsRUFBSSxHQUNYSCxLQUFLRyxHQUFLSCxLQUFLeUIsT0FBT3VCLElBQU03QyxHQUFLTyxPQUFPaUMsWUFFeEMsTUFBTTFDLEVBQVFnRCxFQUFBQSxRQUFBQSxVQUFzQixHQUFLLEdBRXpDakQsS0FBS3FCLEtBQUtvQixTQUFTdEMsRUFDbEJILEtBQUtELE1BQU0yQyxPQUFTLEVBQUkxQyxLQUFLcUIsS0FBS3dCLE1BQU0xQyxFQUFJLEVBQUlILEtBQUtHLEVBQUlILEtBQUtELE1BQU0yQyxPQUVyRTFDLEtBQUtxQixLQUFLb0IsU0FBU3RDLEdBQ2xCb0MsS0FBS1csSUFBS2xELEtBQUtxQixLQUFLb0IsU0FBU3ZDLEVBQUlGLEtBQUtELE1BQU11QyxNQUFTQyxLQUFLQyxHQUFLLElBQU92QyxFQUFRQSxDQUMvRSxDQUVEa0QsT0FBT2pCLEdBQ0RsQyxLQUFLeUIsU0FFVnpCLEtBQUttQyxpQkFDTG5DLEtBQUsyQixjQUNMM0IsS0FBSzRCLFFBQVFNLEdBQ2JsQyxLQUFLNkIsUUFBUSxHQUNiLGtCQ2xKRnVCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IERldGVjdGlvbiBmcm9tICdjbGFzc2VzL0RldGVjdGlvbidcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IDBcblxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cblxuXHQvKiBMb29wICovXG5cblx0dXBkYXRlUm90YXRpb24oKSB7XG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHRNYXRoLlBJICogMC4xLFxuXHRcdFx0LU1hdGguUEkgKiAwLjEsXG5cdFx0XHR0aGlzLm1lc2gucG9zaXRpb24ueFxuXHRcdClcblx0fVxuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblxuXHRcdGNvbnN0IHNjYWxlID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdDAsXG5cdFx0XHR0aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdDAuMSxcblx0XHRcdDAsXG5cdFx0XHRNYXRoLmFicyh0aGlzLm1lc2gucG9zaXRpb24ueClcblx0XHQpXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCArPSBzY2FsZVxuXHRcdHRoaXMubWVzaC5zY2FsZS55ICs9IHNjYWxlXG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmFcblx0fVxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHRjb25zdCBleHRyYSA9IERldGVjdGlvbi5pc1Bob25lKCkgPyAxNSA6IDQwXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgKz1cblx0XHRcdE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiBleHRyYSAtIGV4dHJhXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVJvdGF0aW9uKClcblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwMjZlYzE4NmY3Y2RhNjE3YTk3NlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsInVwZGF0ZVJvdGF0aW9uIiwicm90YXRpb24iLCJ6Iiwid2lkdGgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwiYWJzIiwibGVmdCIsInRvcCIsIkRldGVjdGlvbiIsImNvcyIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==