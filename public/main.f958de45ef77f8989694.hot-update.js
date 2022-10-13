/*! For license information please see main.f958de45ef77f8989694.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var a=t("./node_modules/ogl/src/extras/Plane.js"),r=t("./node_modules/ogl/src/core/Program.js"),i=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./app/shaders/plane-fragment.glsl"),l=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({collections:e,gl:s,scene:t,sizes:r,url:i}){this.collections=e,this.gl=s,this.scene=t,this.sizes=r,this.url=i,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e],this.media.texture=texture}createProgram(){this.program=new r.Program(this.gl,{fragment:o.default,vertex:l.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new i.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}transition(){}}}},(function(e){e.h=()=>"54b58a3bad487c1aebaf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mOTU4ZGU0NWVmNzdmODk4OTY5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBQ25CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLGFBRUxMLEtBQUtNLE1BQVEsQ0FDWkMsRUFBRyxFQUNIQyxFQUFHLEVBRUosQ0FFREwsZ0JBQ0MsTUFBTSxNQUFFTSxFQUFGLE9BQVNDLEdBQVdWLEtBQUtMLFlBQy9CSyxLQUFLVyxNQUFRRCxFQUFPRCxHQUVwQlQsS0FBS1csTUFBTUMsUUFBVUEsT0FDckIsQ0FFRFIsZ0JBQ0NKLEtBQUthLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWQsS0FBS0osR0FBSSxDQUNuQ21CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT25CLEtBQUtXLE1BQU1DLFdBRzVCLENBRURQLGFBQ0NMLEtBQUtxQixLQUFPLElBQUlDLEVBQUFBLEtBQUt0QixLQUFLSixHQUFJLENBQzdCSyxTQUFVRCxLQUFLQyxTQUNmWSxRQUFTYixLQUFLYSxVQUdmYixLQUFLcUIsS0FBS0UsVUFBVXZCLEtBQUtILE1BQ3pCLENBTUQyQixhQUFlLGtCQ3pEaEJDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQbGFuZSwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmwgfSkge1xuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9uc1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudXJsID0gdXJsXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IHsgaW5kZXgsIG1lZGlhcyB9ID0gdGhpcy5jb2xsZWN0aW9uc1xuXHRcdHRoaXMubWVkaWEgPSBtZWRpYXNbaW5kZXhdXG5cblx0XHR0aGlzLm1lZGlhLnRleHR1cmUgPSB0ZXh0dXJlXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAxIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMubWVkaWEudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0LyoqXG5cdCAqIEFuaW1hdGlvbnMuXG5cdCAqL1xuXG5cdHRyYW5zaXRpb24oKSB7fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTRiNThhM2JhZDQ4N2MxYWViYWZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJjb2xsZWN0aW9ucyIsImdsIiwic2NlbmUiLCJzaXplcyIsInVybCIsInRoaXMiLCJnZW9tZXRyeSIsIlBsYW5lIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJ0ZXh0dXJlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJ0cmFuc2l0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9