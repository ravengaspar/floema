/*! For license information please see main.3ae85f222930cd1af23d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,gl:t,geomentry:s,scene:r}){this.element=e,this.geomentry=s,this.gl=t,this.scene=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){new r.Texture(this.gl);this.image=new window.Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.Program=new a.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"929a880f6bfd3cb91c7c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYWU4NWYyMjI5MzBjZDFhZjIzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsVUFBZUMsRUFBZixNQUEwQkMsSUFDbkNDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFVBQVlBLEVBQWFFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLEVBRXZGQyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ0wsQ0FFREYsZ0JBQ2lCLElBQUlHLEVBQUFBLFFBQVFKLEtBQUtILElBRWpDRyxLQUFLSyxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCUCxLQUFLSyxNQUFNRyxJQUFNUixLQUFLSixRQUFRYSxhQUFhLFlBQzNDVCxLQUFLSyxNQUFNSyxPQUFTQyxHQUFNWCxLQUFLWSxRQUFRUCxNQUFRTCxLQUFLSyxLQUNwRCxDQUVESCxnQkFDQ0YsS0FBS2EsUUFBVSxJQUFJQSxFQUFBQSxRQUFRYixLQUFLSCxHQUFJLENBQ25DaUIsU0FEbUMsVUFFbkNDLE9BRm1DLFVBR25DQyxTQUFVLENBQUMsR0FFWixDQUVEYixhQUNDSCxLQUFLaUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLbEIsS0FBS0gsR0FBSSxDQUM3QkMsVUFBV0UsS0FBS0YsVUFDaEJxQixRQUFTbkIsS0FBS21CLFVBR2ZuQixLQUFLaUIsS0FBS0csVUFBVXBCLEtBQUtELE1BQ3pCLGtCQ3JDRnNCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZW50cnksIHNjZW5lIH0pIHtcblx0XHQ7KHRoaXMuZWxlbWVudCA9IGVsZW1lbnQpLCAodGhpcy5nZW9tZW50cnkgPSBnZW9tZW50cnkpLCAodGhpcy5nbCA9IGdsKSwgKHRoaXMuc2NlbmUgPSBzY2VuZSlcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMuUHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHt9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21lbnRyeTogdGhpcy5nZW9tZW50cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTI5YTg4MGY2YmZkM2NiOTFjN2NcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZW50cnkiLCJzY2VuZSIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJ0ZXh0dXJlIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJtZXNoIiwiTWVzaCIsInByb2dyYW0iLCJzZXRQYXJlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=