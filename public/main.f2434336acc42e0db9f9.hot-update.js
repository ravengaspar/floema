/*! For license information please see main.f2434336acc42e0db9f9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var r=t("./node_modules/ogl/src/core/Texture.js"),a=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),i=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl"),m=t("./node_modules/console-browserify/index.js");const g=class{constructor({element:e,gl:s,geomentry:t,scene:r}){this.element=e,this.geomentry=t,this.gl=s,this.scene=r,this.createTexture()}createTexture(){new r.Texture(this.gl);this.image=new Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image,m.log(this.element)}createProgram(){this.Program=new a.Program({fragment:i.default,vertex:n.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"9b34fd1d35025f9c9c44"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMjQzNDMzNmFjYzQyZTBkYjlmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1pBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsVUFBZUMsRUFBZixNQUEwQkMsSUFDbkNDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFVBQVlBLEVBQWFFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLEVBR3JGQyxLQUFLQyxlQUdQLENBRURBLGdCQUNpQixJQUFJQyxFQUFBQSxRQUFRRixLQUFLSCxJQUVqQ0csS0FBS0csTUFBUSxJQUFJQyxNQUNqQkosS0FBS0csTUFBTUUsSUFBTUwsS0FBS0osUUFBUVUsYUFBYSxZQUMzQ04sS0FBS0csTUFBTUksT0FBU0MsR0FBTVIsS0FBS1MsUUFBUU4sTUFBUUgsS0FBS0csTUFDcERPLEVBQVFDLElBQUlYLEtBQUtKLFFBQ2pCLENBRURnQixnQkFDQ1osS0FBS2EsUUFBVSxJQUFJQSxFQUFBQSxRQUFRLENBQzFCQyxTQUQwQixVQUUxQkMsT0FGMEIsVUFHMUJDLFNBQVUsQ0FBQyxHQUVaLENBRURDLGFBQ0NqQixLQUFLa0IsS0FBTyxJQUFJQyxFQUFBQSxLQUFLbkIsS0FBS0gsR0FBSSxDQUM3QkMsVUFBV0UsS0FBS0YsVUFDaEJzQixRQUFTcEIsS0FBS29CLFVBR2ZwQixLQUFLa0IsS0FBS0csVUFBVXJCLEtBQUtELE1BQ3pCLGtCQ3ZDRnVCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdsLCBnZW9tZW50cnksIHNjZW5lIH0pIHtcblx0XHQ7KHRoaXMuZWxlbWVudCA9IGVsZW1lbnQpLCAodGhpcy5nZW9tZW50cnkgPSBnZW9tZW50cnkpLCAodGhpcy5nbCA9IGdsKSwgKHRoaXMuc2NlbmUgPSBzY2VuZSlcblxuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKClcblxuXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHRcdGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudClcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5Qcm9ncmFtID0gbmV3IFByb2dyYW0oe1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge30sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWVudHJ5OiB0aGlzLmdlb21lbnRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5YjM0ZmQxZDM1MDI1ZjljOWM0NFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21lbnRyeSIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJ0ZXh0dXJlIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZVByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsImNyZWF0ZU1lc2giLCJtZXNoIiwiTWVzaCIsInByb2dyYW0iLCJzZXRQYXJlbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=