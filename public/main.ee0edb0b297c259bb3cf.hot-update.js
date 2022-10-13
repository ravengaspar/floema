/*! For license information please see main.ee0edb0b297c259bb3cf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t("./node_modules/gsap/index.js"),o=t("./node_modules/ogl/src/extras/Plane.js"),a=t("./node_modules/ogl/src/core/Program.js"),h=t("./node_modules/ogl/src/core/Mesh.js"),n=t("./app/shaders/plane-fragment.glsl"),r=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:a}){this.collections=e,this.gl=s,this.scene=t,this.sizes=i,this.url=a,this.geometry=new o.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new a.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}animateDetail(e){i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.mesh.position.x,y:e.mesh.position.y,z:e.mesh.position.z}),i.default.to(this.mesh.position,{duration:1.5,ease:"expo.inOut",x:e.mesh.position.x,y:e.mesh.position.y,z:e.mesh.position.z})}animateCollections(e){}}}},(function(e){e.h=()=>"44f66e19b8d6b8d3c279"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZTBlZGIwYjI5N2MyNTliYjNjZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z1lBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtMLFlBQWNBLEVBRW5CSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLQyxTQUFXLElBQUlDLEVBQUFBLE1BQU1GLEtBQUtKLElBRS9CSSxLQUFLRyxnQkFDTEgsS0FBS0ksZ0JBQ0xKLEtBQUtLLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTSxNQUFFRyxFQUFGLE9BQVNDLEdBQVdQLEtBQUtMLFlBQy9CSyxLQUFLUSxNQUFRRCxFQUFPRCxFQUNwQixDQUVERixnQkFDQ0osS0FBS1MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRVixLQUFLSixHQUFJLENBQ25DZSxTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsT0FBUSxDQUFFQyxNQUFPLEdBQ2pCQyxLQUFNLENBQUVELE1BQU9mLEtBQUtRLE1BQU1TLFdBRzVCLENBRURaLGFBQ0NMLEtBQUtrQixLQUFPLElBQUlDLEVBQUFBLEtBQUtuQixLQUFLSixHQUFJLENBQzdCSyxTQUFVRCxLQUFLQyxTQUNmUSxRQUFTVCxLQUFLUyxVQUdmVCxLQUFLa0IsS0FBS0UsTUFBTUMsRUFBSXJCLEtBQUtRLE1BQU1VLEtBQUtFLE1BQU1DLEVBQzFDckIsS0FBS2tCLEtBQUtFLE1BQU1FLEVBQUl0QixLQUFLUSxNQUFNVSxLQUFLRSxNQUFNRSxFQUMxQ3RCLEtBQUtrQixLQUFLRSxNQUFNRyxFQUFJdkIsS0FBS1EsTUFBTVUsS0FBS0UsTUFBTUcsRUFFMUN2QixLQUFLa0IsS0FBS00sU0FBU0QsRUFBSXZCLEtBQUtRLE1BQU1VLEtBQUtNLFNBQVNELEVBQUksSUFFcER2QixLQUFLa0IsS0FBS08sVUFBVXpCLEtBQUtILE1BQ3pCLENBTUQ2QixjQUFjQyxHQUNiQyxFQUFBQSxRQUFBQSxHQUFRNUIsS0FBS2tCLEtBQUtNLFNBQVUsQ0FDM0JLLFNBQVUsSUFDVkMsS0FBTSxhQUNOVCxFQUFHTSxFQUFRVCxLQUFLTSxTQUFTSCxFQUN6QkMsRUFBR0ssRUFBUVQsS0FBS00sU0FBU0YsRUFDekJDLEVBQUdJLEVBQVFULEtBQUtNLFNBQVNELElBR3hCSyxFQUFBQSxRQUFBQSxHQUFRNUIsS0FBS2tCLEtBQUtNLFNBQVUsQ0FDN0JLLFNBQVUsSUFDVkMsS0FBTSxhQUNOVCxFQUFHTSxFQUFRVCxLQUFLTSxTQUFTSCxFQUN6QkMsRUFBR0ssRUFBUVQsS0FBS00sU0FBU0YsRUFDekJDLEVBQUdJLEVBQVFULEtBQUtNLFNBQVNELEdBSTFCLENBRURRLG1CQUFtQkosR0FBVyxrQkM3RS9CSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBjb2xsZWN0aW9ucywgZ2wsIHNjZW5lLCBzaXplcywgdXJsIH0pIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gY29sbGVjdGlvbnNcblxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudXJsID0gdXJsXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgeyBpbmRleCwgbWVkaWFzIH0gPSB0aGlzLmNvbGxlY3Rpb25zXG5cdFx0dGhpcy5tZWRpYSA9IG1lZGlhc1tpbmRleF1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDEgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy5tZWRpYS50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMubWVkaWEubWVzaC5zY2FsZS54XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLm1lZGlhLm1lc2guc2NhbGUueVxuXHRcdHRoaXMubWVzaC5zY2FsZS56ID0gdGhpcy5tZWRpYS5tZXNoLnNjYWxlLnpcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi56ID0gdGhpcy5tZWRpYS5tZXNoLnBvc2l0aW9uLnogKyAwLjAxXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cblx0YW5pbWF0ZURldGFpbChlbGVtZW50KSB7XG5cdFx0R1NBUC50byh0aGlzLm1lc2gucG9zaXRpb24sIHtcblx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRlYXNlOiAnZXhwby5pbk91dCcsXG5cdFx0XHR4OiBlbGVtZW50Lm1lc2gucG9zaXRpb24ueCxcblx0XHRcdHk6IGVsZW1lbnQubWVzaC5wb3NpdGlvbi55LFxuXHRcdFx0ejogZWxlbWVudC5tZXNoLnBvc2l0aW9uLnosXG5cdFx0fSlcblxuICAgIEdTQVAudG8odGhpcy5tZXNoLnBvc2l0aW9uLCB7XG5cdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0ZWFzZTogJ2V4cG8uaW5PdXQnLFxuXHRcdFx0eDogZWxlbWVudC5tZXNoLnBvc2l0aW9uLngsXG5cdFx0XHR5OiBlbGVtZW50Lm1lc2gucG9zaXRpb24ueSxcblx0XHRcdHo6IGVsZW1lbnQubWVzaC5wb3NpdGlvbi56LFxuXHRcdH0pXG5cblxuXHR9XG5cblx0YW5pbWF0ZUNvbGxlY3Rpb25zKGVsZW1lbnQpIHt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NGY2NmUxOWI4ZDZiOGQzYzI3OVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImNvbGxlY3Rpb25zIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidXJsIiwidGhpcyIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJpbmRleCIsIm1lZGlhcyIsIm1lZGlhIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwidGV4dHVyZSIsIm1lc2giLCJNZXNoIiwic2NhbGUiLCJ4IiwieSIsInoiLCJwb3NpdGlvbiIsInNldFBhcmVudCIsImFuaW1hdGVEZXRhaWwiLCJlbGVtZW50IiwiR1NBUCIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVDb2xsZWN0aW9ucyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==