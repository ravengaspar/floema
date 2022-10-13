/*! For license information please see main.74faae814c0e4426e4ef.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,r)=>{r.r(s),r.d(s,{default:()=>l});var t=r("./node_modules/ogl/src/core/Texture.js"),a=r("./node_modules/ogl/src/core/Program.js"),o=r("./node_modules/ogl/src/core/Mesh.js"),n=r("./app/shaders/plane-fragment.glsl"),m=r("./app/shaders/plane-vertex.glsl");const l=class{constructor({element:e,gl:s}){this.element=e,this.geomentry=geomentry,this.gl=s}createTexture(){new t.Texture(this.gl)}createProgram(){this.Program=new a.Program({fragment:n.default,vertex:m.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"6438cac79333be7b4db0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NGZhYWU4MTRjMGU0NDI2ZTRlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLElBQ3RCQyxLQUFLRixRQUFVQSxFQUNiRSxLQUFLQyxVQUFZQSxVQUNqQkQsS0FBS0QsR0FBS0EsQ0FDWixDQUVERyxnQkFDaUIsSUFBSUMsRUFBQUEsUUFBUUgsS0FBS0QsR0FDakMsQ0FFREssZ0JBQ0NKLEtBQUtLLFFBQVUsSUFBSUEsRUFBQUEsUUFBUSxDQUMxQkMsU0FEMEIsVUFFMUJDLE9BRjBCLFVBRzFCQyxTQUFVLENBQUMsR0FFWixDQUVEQyxhQUNDVCxLQUFLVSxLQUFPLElBQUlDLEVBQUFBLEtBQUtYLEtBQUtELEdBQUksQ0FDN0JFLFVBQVdELEtBQUtDLFVBQ2hCVyxRQUFTWixLQUFLWSxVQUdmWixLQUFLVSxLQUFLRyxVQUFVYixLQUFLYyxNQUN6QixrQkMvQkZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50LFxuICAgIHRoaXMuZ2VvbWVudHJ5ID0gZ2VvbWVudHJ5XG4gICAgdGhpcy5nbCA9IGdsXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLlByb2dyYW0gPSBuZXcgUHJvZ3JhbSh7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZW50cnk6IHRoaXMuZ2VvbWVudHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY0MzhjYWM3OTMzM2JlN2I0ZGIwXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdsIiwidGhpcyIsImdlb21lbnRyeSIsImNyZWF0ZVRleHR1cmUiLCJUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJNZXNoIiwicHJvZ3JhbSIsInNldFBhcmVudCIsInNjZW5lIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9