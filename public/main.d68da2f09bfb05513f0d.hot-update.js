/*! For license information please see main.d68da2f09bfb05513f0d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var r=t("./node_modules/ogl/src/core/Texture.js"),a=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),m=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({element:e,gl:s,geomentry:t,scene:r}){this.element=e,this.geomentry=t,this.gl=s,this.scene=r}createTexture(){new r.Texture(this.gl)}createProgram(){this.Program=new a.Program({fragment:n.default,vertex:m.default,uniforms:{}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geomentry:this.geomentry,program:this.program}),this.mesh.setParent(this.scene)}}}},(function(e){e.h=()=>"52f098f261e30dcdbebe"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kNjhkYTJmMDliZmIwNTUxM2YwZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLEdBQVdDLEVBQVgsVUFBZUMsRUFBZixNQUEwQkMsSUFDbkNDLEtBQUtKLFFBQVVBLEVBQVdJLEtBQUtGLFVBQVlBLEVBQWFFLEtBQUtILEdBQUtBLEVBQU1HLEtBQUtELE1BQVFBLENBQ3ZGLENBRURFLGdCQUNpQixJQUFJQyxFQUFBQSxRQUFRRixLQUFLSCxHQUNqQyxDQUVETSxnQkFDQ0gsS0FBS0ksUUFBVSxJQUFJQSxFQUFBQSxRQUFRLENBQzFCQyxTQUQwQixVQUUxQkMsT0FGMEIsVUFHMUJDLFNBQVUsQ0FBQyxHQUVaLENBRURDLGFBQ0NSLEtBQUtTLEtBQU8sSUFBSUMsRUFBQUEsS0FBS1YsS0FBS0gsR0FBSSxDQUM3QkMsVUFBV0UsS0FBS0YsVUFDaEJhLFFBQVNYLEtBQUtXLFVBR2ZYLEtBQUtTLEtBQUtHLFVBQVVaLEtBQUtELE1BQ3pCLGtCQzdCRmMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2wsIGdlb21lbnRyeSwgc2NlbmUgfSkge1xuXHRcdDsodGhpcy5lbGVtZW50ID0gZWxlbWVudCksICh0aGlzLmdlb21lbnRyeSA9IGdlb21lbnRyeSksICh0aGlzLmdsID0gZ2wpLCAodGhpcy5zY2VuZSA9IHNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5Qcm9ncmFtID0gbmV3IFByb2dyYW0oe1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge30sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWVudHJ5OiB0aGlzLmdlb21lbnRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MmYwOThmMjYxZTMwZGNkYmViZVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnbCIsImdlb21lbnRyeSIsInNjZW5lIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwiY3JlYXRlTWVzaCIsIm1lc2giLCJNZXNoIiwicHJvZ3JhbSIsInNldFBhcmVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==