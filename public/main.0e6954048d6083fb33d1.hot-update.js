/*! For license information please see main.0e6954048d6083fb33d1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var r=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),i=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./app/shaders/plane-fragment.glsl"),l=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({collections:e,gl:s,scene:t,sizes:a,url:i}){this.collections=e,this.gl=s,this.scene=t,this.sizes=a,this.url=i,this.geometry=new r.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new a.Program(this.gl,{fragment:o.default,vertex:l.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.me,this.mesh.setParent(this.scene)}transition(){}}}},(function(e){e.h=()=>"510beedb3c643b3ecf3d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTY5NTQwNDhkNjA4M2ZiMzNkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBQ25CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLGFBRUxMLEtBQUtNLE1BQVEsQ0FDWkMsRUFBRyxFQUNIQyxFQUFHLEVBRUosQ0FFREwsZ0JBQ0MsTUFBTSxNQUFFTSxFQUFGLE9BQVNDLEdBQVdWLEtBQUtMLFlBQy9CSyxLQUFLVyxNQUFRRCxFQUFPRCxFQUNwQixDQUVETCxnQkFDQ0osS0FBS1ksUUFBVSxJQUFJQyxFQUFBQSxRQUFRYixLQUFLSixHQUFJLENBQ25Da0IsU0FEbUMsVUFFbkNDLE9BRm1DLFVBR25DQyxTQUFVLENBQ1RDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPbEIsS0FBS1csTUFBTVMsV0FHNUIsQ0FFRGYsYUFDQ0wsS0FBS3FCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3RCLEtBQUtKLEdBQUksQ0FDN0JLLFNBQVVELEtBQUtDLFNBQ2ZXLFFBQVNaLEtBQUtZLFVBR2JaLEtBQUt1QixHQUVQdkIsS0FBS3FCLEtBQUtHLFVBQVV4QixLQUFLSCxNQUN6QixDQU1ENEIsYUFBZSxrQkN6RGhCQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBjb2xsZWN0aW9ucywgZ2wsIHNjZW5lLCBzaXplcywgdXJsIH0pIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnNcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnVybCA9IHVybFxuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IHRoaXMuY29sbGVjdGlvbnNcblx0XHR0aGlzLm1lZGlhID0gbWVkaWFzW2luZGV4XVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLm1lZGlhLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuICAgIHRoaXMubWVcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblxuXHR0cmFuc2l0aW9uKCkge31cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUxMGJlZWRiM2M2NDNiM2VjZjNkXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbnMiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ1cmwiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJpbmRleCIsIm1lZGlhcyIsIm1lZGlhIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwidGV4dHVyZSIsIm1lc2giLCJNZXNoIiwibWUiLCJzZXRQYXJlbnQiLCJ0cmFuc2l0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9