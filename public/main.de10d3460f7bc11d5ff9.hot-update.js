/*! For license information please see main.de10d3460f7bc11d5ff9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var r=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/ogl/src/core/Program.js"),i=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl"),h=s("./node_modules/console-browserify/index.js");const m=class{constructor({element:e,geometry:t,gl:s,index:r,scene:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=a,this.this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new r.Texture(this.gl),h.log(this.element),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new a.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"be362e6a800a5c32df0d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZTEwZDM0NjBmN2JjMTFkNWZmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1pBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsSUFDM0NDLEtBQUtMLFFBQVVBLEVBQ2ZLLEtBQUtKLFNBQVdBLEVBQ2hCSSxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRCxNQUFRQSxFQUdYQyxLQUdGQSxLQUFLQyxnQkFDTEQsS0FBS0UsZ0JBQ0xGLEtBQUtHLFlBQ0wsQ0FFREYsZ0JBQ0NELEtBQUtJLFFBQVUsSUFBSUMsRUFBQUEsUUFBUUwsS0FBS0gsSUFFaENTLEVBQVFDLElBQUlQLEtBQUtMLFNBRWpCSyxLQUFLUSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCVixLQUFLUSxNQUFNRyxZQUFjLFlBQ3pCWCxLQUFLUSxNQUFNSSxJQUFNWixLQUFLTCxRQUFRa0IsYUFBYSxZQUMzQ2IsS0FBS1EsTUFBTU0sT0FBU0MsR0FBTWYsS0FBS0ksUUFBUUksTUFBUVIsS0FBS1EsS0FDcEQsQ0FFRE4sZ0JBQ0NGLEtBQUtnQixRQUFVLElBQUlDLEVBQUFBLFFBQVFqQixLQUFLSCxHQUFJLENBQ25DcUIsU0FEbUMsVUFFbkNDLE9BRm1DLFVBR25DQyxTQUFVLENBQ1RDLEtBQU0sQ0FBRUMsTUFBT3RCLEtBQUtJLFdBR3RCLENBRURELGFBQ0NILEtBQUt1QixLQUFPLElBQUlDLEVBQUFBLEtBQUt4QixLQUFLSCxHQUFJLENBQzdCRCxTQUFVSSxLQUFLSixTQUNmb0IsUUFBU2hCLEtBQUtnQixVQUdmaEIsS0FBS3VCLEtBQUtFLFVBQVV6QixLQUFLRCxNQUN6QixrQkNqREYyQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4ICxzY2VuZSB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXG5cbiAgICB0aGlzLlxuXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHR0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJlMzYyZTZhODAwYTVjMzJkZjBkXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==