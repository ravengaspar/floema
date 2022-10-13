/*! For license information please see main.f7b2edbe14e4f8bcff55.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var o=t("./node_modules/gsap/index.js"),i=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),n=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),l=t("./app/shaders/plane-vertex.glsl"),h=t("./node_modules/console-browserify/index.js");const c=class{constructor({collections:e,gl:s,scene:t,sizes:o,url:a}){this.collections=e,this.gl=s,this.scene=t,this.sizes=o,this.url=a,this.geometry=new i.Plane(this.gl)}createProgram(e){this.program=new a.Program(this.gl,{fragment:r.default,vertex:l.default,uniforms:{uAlpha:{value:1},tMap:{value:e}}})}createMesh(e){this.mesh=new n.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=e.scale.x,this.mesh.scale.y=e.scale.y,this.mesh.scale.z=e.scale.z,this.mesh.position.x=e.position.x,this.mesh.position.y=e.position.y,this.mesh.position.z=e.position.z+.01,this.mesh.rotation.x=e.rotation.x,this.mesh.rotation.y=e.rotation.y,this.mesh.rotation.z=e.rotation.z,this.mesh.setParent(this.scene)}setElement(e){if(h.log(e.id),"collections"===e.id){const{index:s,medias:t}=e,o=t[s];this.createProgram(o.texture),this.createMesh(o.mesh),this.transition="detail"}else this.createProgram(e.texture),this.createMesh(e.mesh),this.transition="collections"}animate(e,s){const t=o.default.timeline({});t.to(this.mesh.scale,{duration:1.5,ease:"expo.inOut",x:e.scale.x,y:e.scale.y,z:e.scale.z},0),t.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.position.x,y:e.position.y,z:e.position.z},0),t.to(this.mesh.rotation,{duration:1.5,ease:"expo.inOut",x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},0),t.call((e=>{s()})),t.call((e=>{this.scene.removeChild(this.mesh)}),null,"+=0.2")}}}},(function(e){e.h=()=>"469b4fe90644eda7659f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxLQUE1QixHQUNDLEtBQU0sUUFDVCxrQkN4SEY0QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBjb2xsZWN0aW9ucywgZ2wsIHNjZW5lLCBzaXplcywgdXJsIH0pIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnNcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnVybCA9IHVybFxuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSh0ZXh0dXJlKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDEgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaChtZXNoKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gbWVzaC5zY2FsZS54XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSBtZXNoLnNjYWxlLnlcblx0XHR0aGlzLm1lc2guc2NhbGUueiA9IG1lc2guc2NhbGUuelxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSBtZXNoLnBvc2l0aW9uLnhcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IG1lc2gucG9zaXRpb24ueVxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi56ID0gbWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnggPSBtZXNoLnJvdGF0aW9uLnhcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueSA9IG1lc2gucm90YXRpb24ueVxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gbWVzaC5yb3RhdGlvbi56XG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHQvKlxuICBFbGVtZW50XG4gICovXG5cdHNldEVsZW1lbnQoZWxlbWVudCkge1xuXHRcdGNvbnNvbGUubG9nKGVsZW1lbnQuaWQpXG5cblx0XHRpZiAoZWxlbWVudC5pZCA9PT0gJ2NvbGxlY3Rpb25zJykge1xuXHRcdFx0Y29uc3QgeyBpbmRleCwgbWVkaWFzIH0gPSBlbGVtZW50XG5cdFx0XHRjb25zdCBtZWRpYSA9IG1lZGlhc1tpbmRleF1cblxuXHRcdFx0dGhpcy5jcmVhdGVQcm9ncmFtKG1lZGlhLnRleHR1cmUpXG5cdFx0XHR0aGlzLmNyZWF0ZU1lc2gobWVkaWEubWVzaClcblxuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gJ2RldGFpbCdcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jcmVhdGVQcm9ncmFtKGVsZW1lbnQudGV4dHVyZSlcblx0XHRcdHRoaXMuY3JlYXRlTWVzaChlbGVtZW50Lm1lc2gpXG5cblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9ICdjb2xsZWN0aW9ucydcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cdGFuaW1hdGUoZWxlbWVudCwgb25Db21wbGV0ZSkge1xuXHRcdGNvbnN0IHRpbWVsaW5lID0gR1NBUC50aW1lbGluZSh7fSlcblxuXHRcdHRpbWVsaW5lLnRvKFxuXHRcdFx0dGhpcy5tZXNoLnNjYWxlLFxuXHRcdFx0e1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5pbk91dCcsXG5cdFx0XHRcdHg6IGVsZW1lbnQuc2NhbGUueCxcblx0XHRcdFx0eTogZWxlbWVudC5zY2FsZS55LFxuXHRcdFx0XHR6OiBlbGVtZW50LnNjYWxlLnosXG5cdFx0XHR9LFxuXHRcdFx0MFxuXHRcdClcblxuXHRcdHRpbWVsaW5lLnRvKFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5pbk91dCcsXG5cdFx0XHRcdHg6IGVsZW1lbnQucG9zaXRpb24ueCxcblx0XHRcdFx0eTogZWxlbWVudC5wb3NpdGlvbi55LFxuXHRcdFx0XHR6OiBlbGVtZW50LnBvc2l0aW9uLnosXG5cdFx0XHR9LFxuXHRcdFx0MFxuXHRcdClcblxuXHRcdHRpbWVsaW5lLnRvKFxuXHRcdFx0dGhpcy5tZXNoLnJvdGF0aW9uLFxuXHRcdFx0e1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5pbk91dCcsXG5cdFx0XHRcdHg6IGVsZW1lbnQucm90YXRpb24ueCxcblx0XHRcdFx0eTogZWxlbWVudC5yb3RhdGlvbi55LFxuXHRcdFx0XHR6OiBlbGVtZW50LnJvdGF0aW9uLnosXG5cdFx0XHR9LFxuXHRcdFx0MFxuXHRcdClcblxuXHRcdHRpbWVsaW5lLmNhbGwoXyA9PiB7XG5cdFx0XHRvbkNvbXBsZXRlKClcblx0XHR9KVxuXG5cdFx0dGltZWxpbmUuY2FsbCgoXykgPT4ge1xuICAgIHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5tZXNoKTtcbiAgfSwgbnVsbCwgJys9MC4yJyk7IC8vIHByZXR0aWVyLWlnbm9yZVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NjliNGZlOTA2NDRlZGE3NjU5ZlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVQcm9ncmFtIiwidGV4dHVyZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsImNyZWF0ZU1lc2giLCJtZXNoIiwiTWVzaCIsInNjYWxlIiwieCIsInkiLCJ6IiwicG9zaXRpb24iLCJyb3RhdGlvbiIsInNldFBhcmVudCIsInNldEVsZW1lbnQiLCJlbGVtZW50IiwiY29uc29sZSIsImxvZyIsImlkIiwiaW5kZXgiLCJtZWRpYXMiLCJtZWRpYSIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwib25Db21wbGV0ZSIsInRpbWVsaW5lIiwiR1NBUCIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwiY2FsbCIsIl8iLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==