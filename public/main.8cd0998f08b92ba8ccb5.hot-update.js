/*! For license information please see main.8cd0998f08b92ba8ccb5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,gl:t,geometry:s,scene:r}){this.element=e,this.geometry=s,this.gl=t,this.scene=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),this.image=new window.Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.Program=new a.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"3e9069069656035d733a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44Y2QwOTk4ZjA4YjkyYmE4Y2NiNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsU0FBZUMsRUFBZixNQUF5QkMsSUFDbENDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFNBQVdBLEVBQVlFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLEVBRXJGQyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ0wsQ0FFREYsZ0JBQ0NELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0gsSUFFaENHLEtBQUtNLE1BQVEsSUFBSUMsT0FBT0MsTUFDeEJSLEtBQUtNLE1BQU1HLElBQU1ULEtBQUtKLFFBQVFjLGFBQWEsWUFDM0NWLEtBQUtNLE1BQU1LLE9BQVNDLEdBQU1aLEtBQUtJLFFBQVFFLE1BQVFOLEtBQUtNLEtBQ3BELENBRURKLGdCQUNDRixLQUFLYSxRQUFVLElBQUlBLEVBQUFBLFFBQVFiLEtBQUtILEdBQUksQ0FDbkNpQixTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsS0FBTSxDQUFFQyxNQUFPbEIsS0FBS0ksV0FHdEIsQ0FFREQsYUFDQ0gsS0FBS21CLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3BCLEtBQUtILEdBQUksQ0FDN0JDLFNBQVVFLEtBQUtGLFNBQ2Z1QixRQUFTckIsS0FBS3FCLFVBR2ZyQixLQUFLbUIsS0FBS0csVUFBVXRCLEtBQUtELE1BQ3pCLGtCQ3ZDRndCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZXRyeSwgc2NlbmUgfSkge1xuXHRcdDsodGhpcy5lbGVtZW50ID0gZWxlbWVudCksICh0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnkpLCAodGhpcy5nbCA9IGdsKSwgKHRoaXMuc2NlbmUgPSBzY2VuZSlcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5Qcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2U5MDY5MDY5NjU2MDM1ZDczM2FcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZXRyeSIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwicHJvZ3JhbSIsInNldFBhcmVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==