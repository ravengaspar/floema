/*! For license information please see main.6372d10ae08845e929cd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/gsap/index.js"),a=t("./node_modules/ogl/src/extras/Plane.js"),h=t("./node_modules/ogl/src/core/Program.js"),o=t("./node_modules/ogl/src/core/Mesh.js"),l=t("./app/shaders/plane-fragment.glsl"),m=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:h}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=h,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new h.Program(this.gl,{fragment:l.default,vertex:m.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new o.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}setElement(e){this.scale={x:e.mesh.scale.x,y:e.mesh.scale.y,x:e.mesh.scale.x}}animate(e,s){"detail"===s&&(i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:this.element.mesh.scale.x,y:this.element.mesh.scale.y,z:this.element.mesh.scale.z}),i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:this.element.mesh.position.x,y:this.element.mesh.position.y,z:this.element.mesh.position.z,onComplete:e}))}animateCollections(e){}}}},(function(e){e.h=()=>"12fa76a275138b66752e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MzcyZDEwYWUwODg0NWU5MjljZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBRW5CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTSxNQUFFRyxFQUFGLE9BQVNDLEdBQVdQLEtBQUtMLFlBQy9CSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUNwQixDQUVERixnQkFDQ0osS0FBS1MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRVixLQUFLSixHQUFJLENBQ25DZSxTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU9mLEtBQUtRLE1BQU1TLFdBRzVCLENBRURaLGFBQ0NMLEtBQUtrQixLQUFPLElBQUlDLEVBQUFBLEtBQUtuQixLQUFLSixHQUFJLENBQzdCSyxTQUFVRCxLQUFLQyxTQUNmUSxRQUFTVCxLQUFLUyxVQUdmVCxLQUFLa0IsS0FBS0UsTUFBTUMsRUFBSXJCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1DLEVBQzFDckIsS0FBS2tCLEtBQUtFLE1BQU1FLEVBQUl0QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRSxFQUMxQ3RCLEtBQUtrQixLQUFLRSxNQUFNRyxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUcsRUFFMUN2QixLQUFLa0IsS0FBS00sU0FBU0QsRUFBSXZCLEtBQUtRLE1BQU1VLEtBQUtNLFNBQVNELEVBQUksSUFFcER2QixLQUFLa0IsS0FBS08sVUFBVXpCLEtBQUtILE1BQ3pCLENBTUQ2QixXQUFXQyxHQUNWM0IsS0FBS29CLE1BQVEsQ0FDVEMsRUFBR00sRUFBUVQsS0FBS0UsTUFBTUMsRUFDdEJDLEVBQUdLLEVBQVFULEtBQUtFLE1BQU1FLEVBQ3RCRCxFQUFHTSxFQUFRVCxLQUFLRSxNQUFNQyxFQUUxQixDQU1ETyxRQUFRQyxFQUFZQyxHQUNOLFdBQVRBLElBQ0hDLEVBQUFBLFFBQUFBLEdBQVEvQixLQUFLa0IsS0FBS00sU0FBVSxDQUMzQlEsU0FBVSxJQUNWQyxLQUFNLGFBQ05aLEVBQUdyQixLQUFLMkIsUUFBUVQsS0FBS0UsTUFBTUMsRUFDM0JDLEVBQUd0QixLQUFLMkIsUUFBUVQsS0FBS0UsTUFBTUUsRUFDM0JDLEVBQUd2QixLQUFLMkIsUUFBUVQsS0FBS0UsTUFBTUcsSUFHNUJRLEVBQUFBLFFBQUFBLEdBQVEvQixLQUFLa0IsS0FBS00sU0FBVSxDQUMzQlEsU0FBVSxJQUNWQyxLQUFNLGFBQ05aLEVBQUdyQixLQUFLMkIsUUFBUVQsS0FBS00sU0FBU0gsRUFDOUJDLEVBQUd0QixLQUFLMkIsUUFBUVQsS0FBS00sU0FBU0YsRUFDOUJDLEVBQUd2QixLQUFLMkIsUUFBUVQsS0FBS00sU0FBU0QsRUFDOUJNLGVBR0YsQ0FFREssbUJBQW1CUCxHQUFXLGtCQzFGL0JRLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQbGFuZSwgUHJvZ3JhbSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGNvbGxlY3Rpb25zLCBnbCwgc2NlbmUsIHNpemVzLCB1cmwgfSkge1xuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBjb2xsZWN0aW9uc1xuXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy51cmwgPSB1cmxcblxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IHRoaXMuY29sbGVjdGlvbnNcblx0XHR0aGlzLm1lZGlhID0gbWVkaWFzW2luZGV4XVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLm1lZGlhLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5tZWRpYS5tZXNoLnNjYWxlLnhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMubWVkaWEubWVzaC5zY2FsZS55XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnogPSB0aGlzLm1lZGlhLm1lc2guc2NhbGUuelxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnogPSB0aGlzLm1lZGlhLm1lc2gucG9zaXRpb24ueiArIDAuMDFcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBFbGVtZW50LlxuXHQgKi9cblxuXHRzZXRFbGVtZW50KGVsZW1lbnQpIHtcblx0XHR0aGlzLnNjYWxlID0ge1xuICAgICAgeDogZWxlbWVudC5tZXNoLnNjYWxlLngsXG4gICAgICB5OiBlbGVtZW50Lm1lc2guc2NhbGUueSxcbiAgICAgIHg6IGVsZW1lbnQubWVzaC5zY2FsZS54LFxuICAgIH1cblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblxuXHRhbmltYXRlKG9uQ29tcGxldGUsIGZsYWcpIHtcblx0XHRpZiAoZmxhZyA9PT0gJ2RldGFpbCcpIHtcblx0XHRcdEdTQVAudG8odGhpcy5tZXNoLnBvc2l0aW9uLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLmluT3V0Jyxcblx0XHRcdFx0eDogdGhpcy5lbGVtZW50Lm1lc2guc2NhbGUueCxcblx0XHRcdFx0eTogdGhpcy5lbGVtZW50Lm1lc2guc2NhbGUueSxcblx0XHRcdFx0ejogdGhpcy5lbGVtZW50Lm1lc2guc2NhbGUueixcblx0XHRcdH0pXG5cblx0XHRcdEdTQVAudG8odGhpcy5tZXNoLnBvc2l0aW9uLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLmluT3V0Jyxcblx0XHRcdFx0eDogdGhpcy5lbGVtZW50Lm1lc2gucG9zaXRpb24ueCxcblx0XHRcdFx0eTogdGhpcy5lbGVtZW50Lm1lc2gucG9zaXRpb24ueSxcblx0XHRcdFx0ejogdGhpcy5lbGVtZW50Lm1lc2gucG9zaXRpb24ueixcblx0XHRcdFx0b25Db21wbGV0ZSxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0YW5pbWF0ZUNvbGxlY3Rpb25zKGVsZW1lbnQpIHt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMmZhNzZhMjc1MTM4YjY2NzUyZVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbmRleCIsIm1lZGlhcyIsIm1lZGlhIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwidGV4dHVyZSIsIm1lc2giLCJNZXNoIiwic2NhbGUiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsInNldFBhcmVudCIsInNldEVsZW1lbnQiLCJlbGVtZW50IiwiYW5pbWF0ZSIsIm9uQ29tcGxldGUiLCJmbGFnIiwiR1NBUCIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVDb2xsZWN0aW9ucyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==