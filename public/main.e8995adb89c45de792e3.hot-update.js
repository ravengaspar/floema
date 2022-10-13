/*! For license information please see main.e8995adb89c45de792e3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var i=t("./node_modules/gsap/index.js"),a=t("./node_modules/ogl/src/extras/Plane.js"),o=t("./node_modules/ogl/src/core/Program.js"),h=t("./node_modules/ogl/src/core/Mesh.js"),l=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl");const m=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:o}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=o,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new o.Program(this.gl,{fragment:l.default,vertex:n.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}setElement(){}animate(e,s){"detail"===s&&(i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:this.element.mesh.scale.x,y:this.element.mesh.scale.y,z:this.element.mesh.scale.z}),i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:this.element.mesh.position.x,y:this.element.mesh.position.y,z:this.element.mesh.position.z,onComplete:e}))}animateCollections(e){}}}},(function(e){e.h=()=>"cc98801abcd50fd57134"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lODk5NWFkYjg5YzQ1ZGU3OTJlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBRW5CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTSxNQUFFRyxFQUFGLE9BQVNDLEdBQVdQLEtBQUtMLFlBQy9CSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUNwQixDQUVERixnQkFDQ0osS0FBS1MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRVixLQUFLSixHQUFJLENBQ25DZSxTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU9mLEtBQUtRLE1BQU1TLFdBRzVCLENBRURaLGFBQ0NMLEtBQUtrQixLQUFPLElBQUlDLEVBQUFBLEtBQUtuQixLQUFLSixHQUFJLENBQzdCSyxTQUFVRCxLQUFLQyxTQUNmUSxRQUFTVCxLQUFLUyxVQUdmVCxLQUFLa0IsS0FBS0UsTUFBTUMsRUFBSXJCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1DLEVBQzFDckIsS0FBS2tCLEtBQUtFLE1BQU1FLEVBQUl0QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRSxFQUMxQ3RCLEtBQUtrQixLQUFLRSxNQUFNRyxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUcsRUFFMUN2QixLQUFLa0IsS0FBS00sU0FBU0QsRUFBSXZCLEtBQUtRLE1BQU1VLEtBQUtNLFNBQVNELEVBQUksSUFFcER2QixLQUFLa0IsS0FBS08sVUFBVXpCLEtBQUtILE1BQ3pCLENBT0E2QixhQUVDLENBT0ZDLFFBQVFDLEVBQVlDLEdBQ04sV0FBVEEsSUFDSEMsRUFBQUEsUUFBQUEsR0FBUTlCLEtBQUtrQixLQUFLTSxTQUFVLENBQzNCTyxTQUFVLElBQ1ZDLEtBQU0sYUFDTlgsRUFBR3JCLEtBQUtpQyxRQUFRZixLQUFLRSxNQUFNQyxFQUMzQkMsRUFBR3RCLEtBQUtpQyxRQUFRZixLQUFLRSxNQUFNRSxFQUMzQkMsRUFBR3ZCLEtBQUtpQyxRQUFRZixLQUFLRSxNQUFNRyxJQUc1Qk8sRUFBQUEsUUFBQUEsR0FBUTlCLEtBQUtrQixLQUFLTSxTQUFVLENBQzNCTyxTQUFVLElBQ1ZDLEtBQU0sYUFDTlgsRUFBR3JCLEtBQUtpQyxRQUFRZixLQUFLTSxTQUFTSCxFQUM5QkMsRUFBR3RCLEtBQUtpQyxRQUFRZixLQUFLTSxTQUFTRixFQUM5QkMsRUFBR3ZCLEtBQUtpQyxRQUFRZixLQUFLTSxTQUFTRCxFQUM5QkssZUFHRixDQUVETSxtQkFBbUJELEdBQVcsa0JDeEYvQkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsIFBsYW5lLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbnMsIGdsLCBzY2VuZSwgc2l6ZXMsIHVybCB9KSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zXG5cblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnVybCA9IHVybFxuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IHsgaW5kZXgsIG1lZGlhcyB9ID0gdGhpcy5jb2xsZWN0aW9uc1xuXHRcdHRoaXMubWVkaWEgPSBtZWRpYXNbaW5kZXhdXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAxIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMubWVkaWEudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLm1lZGlhLm1lc2guc2NhbGUueFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5tZWRpYS5tZXNoLnNjYWxlLnlcblx0XHR0aGlzLm1lc2guc2NhbGUueiA9IHRoaXMubWVkaWEubWVzaC5zY2FsZS56XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueiA9IHRoaXMubWVkaWEubWVzaC5wb3NpdGlvbi56ICsgMC4wMVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblxuXHQvKipcblx0ICogc2V0RWxlbWVudC5cblx0ICovXG5cbiAgc2V0RWxlbWVudCgpIHtcbiAgICBcbiAgfVxuXG5cblx0LyoqXG5cdCAqIEFuaW1hdGlvbnMuXG5cdCAqL1xuXG5cdGFuaW1hdGUob25Db21wbGV0ZSwgZmxhZykge1xuXHRcdGlmIChmbGFnID09PSAnZGV0YWlsJykge1xuXHRcdFx0R1NBUC50byh0aGlzLm1lc2gucG9zaXRpb24sIHtcblx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0ZWFzZTogJ2V4cG8uaW5PdXQnLFxuXHRcdFx0XHR4OiB0aGlzLmVsZW1lbnQubWVzaC5zY2FsZS54LFxuXHRcdFx0XHR5OiB0aGlzLmVsZW1lbnQubWVzaC5zY2FsZS55LFxuXHRcdFx0XHR6OiB0aGlzLmVsZW1lbnQubWVzaC5zY2FsZS56LFxuXHRcdFx0fSlcblxuXHRcdFx0R1NBUC50byh0aGlzLm1lc2gucG9zaXRpb24sIHtcblx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0ZWFzZTogJ2V4cG8uaW5PdXQnLFxuXHRcdFx0XHR4OiB0aGlzLmVsZW1lbnQubWVzaC5wb3NpdGlvbi54LFxuXHRcdFx0XHR5OiB0aGlzLmVsZW1lbnQubWVzaC5wb3NpdGlvbi55LFxuXHRcdFx0XHR6OiB0aGlzLmVsZW1lbnQubWVzaC5wb3NpdGlvbi56LFxuXHRcdFx0XHRvbkNvbXBsZXRlLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRhbmltYXRlQ29sbGVjdGlvbnMoZWxlbWVudCkge31cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjOTg4MDFhYmNkNTBmZDU3MTM0XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiY29sbGVjdGlvbnMiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ1cmwiLCJ0aGlzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJ0ZXh0dXJlIiwibWVzaCIsIk1lc2giLCJzY2FsZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwic2V0UGFyZW50Iiwic2V0RWxlbWVudCIsImFuaW1hdGUiLCJvbkNvbXBsZXRlIiwiZmxhZyIsIkdTQVAiLCJkdXJhdGlvbiIsImVhc2UiLCJlbGVtZW50IiwiYW5pbWF0ZUNvbGxlY3Rpb25zIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9