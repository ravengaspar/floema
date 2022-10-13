/*! For license information please see main.6790de8d46eba0688490.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),h=s("./app/shaders/plane-vertex.glsl");const m=class{constructor({element:e,gl:t,geometry:s,scene:r}){this.element=e,this.geometry=s,this.gl=t,this.scene=r,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),this.image=new window.Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.Program=new a.Program(this.gl,{fragment:o.default,vertex:h.default,uniforms:{}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"af915f06a5182c3ad49e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzkwZGU4ZDQ2ZWJhMDY4ODQ5MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsU0FBZUMsRUFBZixNQUF5QkMsSUFDbENDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFNBQVdBLEVBQVlFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLEVBRXJGQyxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ0wsQ0FFREYsZ0JBQ0NELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0gsSUFFaENHLEtBQUtNLE1BQVEsSUFBSUMsT0FBT0MsTUFDeEJSLEtBQUtNLE1BQU1HLElBQU1ULEtBQUtKLFFBQVFjLGFBQWEsWUFDM0NWLEtBQUtNLE1BQU1LLE9BQVNDLEdBQU1aLEtBQUtJLFFBQVFFLE1BQVFOLEtBQUtNLEtBQ3BELENBRURKLGdCQUNDRixLQUFLYSxRQUFVLElBQUlBLEVBQUFBLFFBQVFiLEtBQUtILEdBQUksQ0FDbkNpQixTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FBQyxHQUVaLENBRURiLGFBQ0NILEtBQUtpQixLQUFPLElBQUlDLEVBQUFBLEtBQUtsQixLQUFLSCxHQUFJLENBQzdCQyxTQUFVRSxLQUFLRixTQUNmcUIsUUFBU25CLEtBQUttQixVQUdmbkIsS0FBS2lCLEtBQUtHLFVBQVVwQixLQUFLRCxNQUN6QixrQkNyQ0ZzQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWV0cnksIHNjZW5lIH0pIHtcblx0XHQ7KHRoaXMuZWxlbWVudCA9IGVsZW1lbnQpLCAodGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5KSwgKHRoaXMuZ2wgPSBnbCksICh0aGlzLnNjZW5lID0gc2NlbmUpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMuUHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHt9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFmOTE1ZjA2YTUxODJjM2FkNDllXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdsIiwiZ2VvbWV0cnkiLCJzY2VuZSIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJtZXNoIiwiTWVzaCIsInByb2dyYW0iLCJzZXRQYXJlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=