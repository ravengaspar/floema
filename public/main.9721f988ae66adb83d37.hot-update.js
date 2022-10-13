/*! For license information please see main.9721f988ae66adb83d37.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var r=t("./node_modules/ogl/src/core/Texture.js"),a=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),m=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({element:e,gl:s}){this.element=e,this.geomentry=geomentry,this.gl=s,this.scene=scene}createTexture(){new r.Texture(this.gl)}createProgram(){this.Program=new a.Program({fragment:n.default,vertex:m.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"d68da2f09bfb05513f0d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NzIxZjk4OGFlNjZhZGI4M2QzNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLElBQ3RCQyxLQUFLRixRQUFVQSxFQUNiRSxLQUFLQyxVQUFZQSxVQUNqQkQsS0FBS0QsR0FBS0EsRUFDVkMsS0FBS0UsTUFBUUEsS0FDZixDQUVEQyxnQkFDaUIsSUFBSUMsRUFBQUEsUUFBUUosS0FBS0QsR0FDakMsQ0FFRE0sZ0JBQ0NMLEtBQUtNLFFBQVUsSUFBSUEsRUFBQUEsUUFBUSxDQUMxQkMsU0FEMEIsVUFFMUJDLE9BRjBCLFVBRzFCQyxTQUFVLENBQUMsR0FFWixDQUVEQyxhQUNDVixLQUFLVyxLQUFPLElBQUlDLEVBQUFBLEtBQUtaLEtBQUtELEdBQUksQ0FDN0JFLFVBQVdELEtBQUtDLFVBQ2hCWSxRQUFTYixLQUFLYSxVQUdmYixLQUFLVyxLQUFLRyxVQUFVZCxLQUFLRSxNQUN6QixrQkNoQ0ZhLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50LFxuICAgIHRoaXMuZ2VvbWVudHJ5ID0gZ2VvbWVudHJ5LFxuICAgIHRoaXMuZ2wgPSBnbCxcbiAgICB0aGlzLnNjZW5lID0gc2NlbmVcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMuUHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHt9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21lbnRyeTogdGhpcy5nZW9tZW50cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDY4ZGEyZjA5YmZiMDU1MTNmMGRcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJ0aGlzIiwiZ2VvbWVudHJ5Iiwic2NlbmUiLCJjcmVhdGVUZXh0dXJlIiwiVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsImNyZWF0ZU1lc2giLCJtZXNoIiwiTWVzaCIsInByb2dyYW0iLCJzZXRQYXJlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=