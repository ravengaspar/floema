/*! For license information please see main.7294d19c274f35d5d649.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/ogl/src/core/Program.js"),r=t("./node_modules/ogl/src/core/Mesh.js"),h=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:r}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=r,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new i.Program(this.gl,{fragment:h.default,vertex:o.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}transition(e){}}}},(function(e){e.h=()=>"1ce3fe8d119bc5ba2ec2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43Mjk0ZDE5YzI3NGYzNWQ1ZDY0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBRW5CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTSxNQUFFRyxFQUFGLE9BQVNDLEdBQVdQLEtBQUtMLFlBQy9CSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUNwQixDQUVERixnQkFDQ0osS0FBS1MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRVixLQUFLSixHQUFJLENBQ25DZSxTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU9mLEtBQUtRLE1BQU1TLFdBRzVCLENBRURaLGFBQ0NMLEtBQUtrQixLQUFPLElBQUlDLEVBQUFBLEtBQUtuQixLQUFLSixHQUFJLENBQzdCSyxTQUFVRCxLQUFLQyxTQUNmUSxRQUFTVCxLQUFLUyxVQUdmVCxLQUFLa0IsS0FBS0UsTUFBTUMsRUFBSXJCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1DLEVBQzFDckIsS0FBS2tCLEtBQUtFLE1BQU1FLEVBQUl0QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRSxFQUMxQ3RCLEtBQUtrQixLQUFLRSxNQUFNRyxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUcsRUFFMUN2QixLQUFLa0IsS0FBS00sU0FBU0QsRUFBSXZCLEtBQUtRLE1BQU1VLEtBQUtNLFNBQVNELEVBQUksSUFFcER2QixLQUFLa0IsS0FBS08sVUFBVXpCLEtBQUtILE1BQ3pCLENBTUQ2QixXQUFXQyxHQUVULGtCQzNESEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9UcmFuc2l0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IE1lc2gsIFBsYW5lLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgY29sbGVjdGlvbnMsIGdsLCBzY2VuZSwgc2l6ZXMsIHVybCB9KSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IGNvbGxlY3Rpb25zXG4gICAgXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy51cmwgPSB1cmxcblxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCB7IGluZGV4LCBtZWRpYXMgfSA9IHRoaXMuY29sbGVjdGlvbnNcblx0XHR0aGlzLm1lZGlhID0gbWVkaWFzW2luZGV4XVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLm1lZGlhLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5tZWRpYS5tZXNoLnNjYWxlLnhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMubWVkaWEubWVzaC5zY2FsZS55XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnogPSB0aGlzLm1lZGlhLm1lc2guc2NhbGUuelxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnogPSB0aGlzLm1lZGlhLm1lc2gucG9zaXRpb24ueiArIDAuMDFcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdC8qKlxuXHQgKiBBbmltYXRpb25zLlxuXHQgKi9cblxuXHR0cmFuc2l0aW9uKGVsZW1lbnQpIHtcblxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxY2UzZmU4ZDExOWJjNWJhMmVjMlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbmRleCIsIm1lZGlhcyIsIm1lZGlhIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwidGV4dHVyZSIsIm1lc2giLCJNZXNoIiwic2NhbGUiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsInNldFBhcmVudCIsInRyYW5zaXRpb24iLCJlbGVtZW50IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9