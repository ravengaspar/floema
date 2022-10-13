/*! For license information please see main.ee42f1c2f18224add081.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/gsap/index.js"),o=(t("./node_modules/imagemin/index.js"),t("./node_modules/ogl/src/extras/Plane.js")),a=t("./node_modules/ogl/src/core/Program.js"),n=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),l=t("./app/shaders/plane-vertex.glsl"),h=t("./node_modules/console-browserify/index.js");const c=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:a}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=a,this.geometry=new o.Plane(this.gl)}createTexture(){const{index:e,medias:s}=this.collections,{texture:t}=s[e];this.texture=t}createProgram(e){this.program=new a.Program(this.gl,{fragment:r.default,vertex:l.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new n.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x,this.mesh.position.y=e.position.y,this.mesh.position.z=e.position.z+.01,this.mesh.rotation.x=e.rotation.x,this.mesh.rotation.y=e.rotation.y,this.mesh.rotation.z=e.rotation.z,this.mesh.setParent(this.scene)}setElement(e){if(h.log(e.id),"collections"===e.id){const{index:s,medias:t}=e,i=t[s];this.createProgram(i.texture),this.createMesh(i.mesh),this.transition="detail"}else this.createProgram(e.texture),this.createMesh(e.mesh),this.transition="collections"}animate(e,s){const t=i.default.timeline({});t.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.scale.x,y:e.scale.y,z:e.scale.z},0),t.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.position.x,y:e.position.y,z:e.position.z},0),t.to(this.mesh.rotation,{duration:1.5,ease:"expo.inOut",x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},0),t.call((e=>{s()})),t.call((e=>{this.scene.removeChild(this.mesh)}),null,"+=0.2")}}}},(function(e){e.h=()=>"7fc792af076632fdd3a8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0gsRUFDcEJDLEVBQUdLLEVBQVFILFNBQVNGLEdBRXJCLEdBR0RhLEVBQVNLLE1BQUtDLElBQ2JQLEdBQVksSUFHYkMsRUFBU0ssTUFBTUMsSUFDYnpDLEtBQUtILE1BQU02QyxZQUFZMUMsS0FBS2lCLEtBQTVCLEdBQ0MsS0FBTSxRQUNULGtCQ2hJRjBCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgaW1hZ2VtaW4gZnJvbSAnaW1hZ2VtaW4nXG5pbXBvcnQgeyBNZXNoLCBQbGFuZSwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmwgfSkge1xuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9uc1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudXJsID0gdXJsXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IHsgaW5kZXgsIG1lZGlhcyB9ID0gdGhpcy5jb2xsZWN0aW9uc1xuXHRcdGNvbnN0IHsgdGV4dHVyZSB9ID0gbWVkaWFzW2luZGV4XVxuXG5cdFx0dGhpcy50ZXh0dXJlID0gdGV4dHVyZVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSh0ZXh0dXJlKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDEgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaChtZXNoKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gbWVzaC5zY2FsZS54XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSBtZXNoLnNjYWxlLnlcblx0XHR0aGlzLm1lc2guc2NhbGUueiA9IG1lc2guc2NhbGUuelxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSBtZXNoLnBvc2l0aW9uLnhcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IG1lc2gucG9zaXRpb24ueVxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi56ID0gbWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnggPSBtZXNoLnJvdGF0aW9uLnhcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueSA9IG1lc2gucm90YXRpb24ueVxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gbWVzaC5yb3RhdGlvbi56XG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHQvKipcblx0ICogRWxlbWVudFxuXHQgKi9cblx0c2V0RWxlbWVudChlbGVtZW50KSB7XG5cdFx0Y29uc29sZS5sb2coZWxlbWVudC5pZClcblxuXHRcdGlmIChlbGVtZW50LmlkID09PSAnY29sbGVjdGlvbnMnKSB7XG5cdFx0XHRjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IGVsZW1lbnRcblx0XHRcdGNvbnN0IG1lZGlhID0gbWVkaWFzW2luZGV4XVxuXG5cdFx0XHR0aGlzLmNyZWF0ZVByb2dyYW0obWVkaWEudGV4dHVyZSlcblx0XHRcdHRoaXMuY3JlYXRlTWVzaChtZWRpYS5tZXNoKVxuXG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSAnZGV0YWlsJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oZWxlbWVudC50ZXh0dXJlKVxuXHRcdFx0dGhpcy5jcmVhdGVNZXNoKGVsZW1lbnQubWVzaClcblxuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gJ2NvbGxlY3Rpb25zJ1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblx0YW5pbWF0ZShlbGVtZW50LCBvbkNvbXBsZXRlKSB7XG5cdFx0Y29uc3QgdGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHt9KVxuXG5cdFx0dGltZWxpbmUudG8oXG5cdFx0XHR0aGlzLm1lc2guc2NhbGUsXG5cdFx0XHR7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLmluT3V0Jyxcblx0XHRcdFx0eDogZWxlbWVudC5zY2FsZS54LFxuXHRcdFx0XHR5OiBlbGVtZW50LnNjYWxlLnksXG5cdFx0XHRcdHo6IGVsZW1lbnQuc2NhbGUueixcblx0XHRcdH0sXG5cdFx0XHQwXG5cdFx0KVxuXG5cdFx0dGltZWxpbmUudG8oXG5cdFx0XHR0aGlzLm1lc2gucG9zaXRpb24sXG5cdFx0XHR7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLmluT3V0Jyxcblx0XHRcdFx0eDogZWxlbWVudC5wb3NpdGlvbi54LFxuXHRcdFx0XHR5OiBlbGVtZW50LnBvc2l0aW9uLnksXG5cdFx0XHRcdHo6IGVsZW1lbnQucG9zaXRpb24ueixcblx0XHRcdH0sXG5cdFx0XHQwXG5cdFx0KVxuXG5cdFx0dGltZWxpbmUudG8oXG5cdFx0XHR0aGlzLm1lc2gucm90YXRpb24sXG5cdFx0XHR7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLmluT3V0Jyxcblx0XHRcdFx0eDogZWxlbWVudC5yb3RhdGlvbi54LFxuXHRcdFx0XHR5OiBlbGVtZW50LnJvdGF0aW9uLnksXG5cdFx0XHRcdHo6IGVsZW1lbnQucm90YXRpb24ueixcblx0XHRcdH0sXG5cdFx0XHQwXG5cdFx0KVxuXG5cdFx0dGltZWxpbmUuY2FsbChfID0+IHtcblx0XHRcdG9uQ29tcGxldGUoKVxuXHRcdH0pXG5cblx0XHR0aW1lbGluZS5jYWxsKChfKSA9PiB7XG4gICAgdGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLm1lc2gpO1xuICB9LCBudWxsLCAnKz0wLjInKTsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmYzc5MmFmMDc2NjMyZmRkM2E4XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbnMiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ1cmwiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJpbmRleCIsIm1lZGlhcyIsInRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJNZXNoIiwic2NhbGUiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwic2V0UGFyZW50Iiwic2V0RWxlbWVudCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJtZWRpYSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwib25Db21wbGV0ZSIsInRpbWVsaW5lIiwiR1NBUCIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiY2FsbCIsIl8iLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==