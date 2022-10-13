/*! For license information please see main.9b34fd1d35025f9c9c44.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var r=t("./node_modules/ogl/src/core/Texture.js"),a=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),i=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl"),m=t("./node_modules/console-browserify/index.js");const c=class{constructor({element:e,gl:s,geomentry:t,scene:r}){this.element=e,this.geomentry=t,this.gl=s,this.scene=r,this.createTexture(),this.create}createTexture(){new r.Texture(this.gl);this.image=new Image,this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image,m.log(this.element)}createProgram(){this.Program=new a.Program({fragment:i.default,vertex:n.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"05a0fcc61cc3f09dcc07"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45YjM0ZmQxZDM1MDI1ZjljOWM0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1pBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsVUFBZUMsRUFBZixNQUEwQkMsSUFDbkNDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFVBQVlBLEVBQWFFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLEVBR3JGQyxLQUFLQyxnQkFDTEQsS0FBS0UsTUFFUCxDQUVERCxnQkFDaUIsSUFBSUUsRUFBQUEsUUFBUUgsS0FBS0gsSUFFakNHLEtBQUtJLE1BQVEsSUFBSUMsTUFDakJMLEtBQUtJLE1BQU1FLElBQU1OLEtBQUtKLFFBQVFXLGFBQWEsWUFDM0NQLEtBQUtJLE1BQU1JLE9BQVNDLEdBQU1ULEtBQUtVLFFBQVFOLE1BQVFKLEtBQUtJLE1BQ3BETyxFQUFRQyxJQUFJWixLQUFLSixRQUNqQixDQUVEaUIsZ0JBQ0NiLEtBQUtjLFFBQVUsSUFBSUEsRUFBQUEsUUFBUSxDQUMxQkMsU0FEMEIsVUFFMUJDLE9BRjBCLFVBRzFCQyxTQUFVLENBQUMsR0FFWixDQUVEQyxhQUNDbEIsS0FBS21CLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3BCLEtBQUtILEdBQUksQ0FDN0JDLFVBQVdFLEtBQUtGLFVBQ2hCdUIsUUFBU3JCLEtBQUtxQixVQUdmckIsS0FBS21CLEtBQUtHLFVBQVV0QixLQUFLRCxNQUN6QixrQkN2Q0Z3QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnbCwgZ2VvbWVudHJ5LCBzY2VuZSB9KSB7XG5cdFx0Oyh0aGlzLmVsZW1lbnQgPSBlbGVtZW50KSwgKHRoaXMuZ2VvbWVudHJ5ID0gZ2VvbWVudHJ5KSwgKHRoaXMuZ2wgPSBnbCksICh0aGlzLnNjZW5lID0gc2NlbmUpXG5cblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZSgpXG4gICAgdGhpcy5jcmVhdGVcblxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMuUHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHt9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21lbnRyeTogdGhpcy5nZW9tZW50cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDVhMGZjYzYxY2MzZjA5ZGNjMDdcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2wiLCJnZW9tZW50cnkiLCJzY2VuZSIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlIiwiVGV4dHVyZSIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwidGV4dHVyZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVQcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJjcmVhdGVNZXNoIiwibWVzaCIsIk1lc2giLCJwcm9ncmFtIiwic2V0UGFyZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9