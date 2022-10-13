/*! For license information please see main.2df9b0ddc4783ebe844e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Transition.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t("./node_modules/ogl/src/extras/Plane.js"),i=t("./node_modules/ogl/src/core/Program.js"),r=t("./node_modules/ogl/src/core/Mesh.js"),h=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({collections:e,gl:s,scene:t,sizes:i,url:r}){this.from=e||detail,this.gl=s,this.scene=t,this.sizes=i,this.url=r,this.geometry=new a.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const{index:e,medias:s}=this.collections;this.media=s[e]}createProgram(){this.program=new i.Program(this.gl,{fragment:h.default,vertex:o.default,uniforms:{uAlpha:{value:1},tMap:{value:this.media.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.scale.x=this.media.mesh.scale.x,this.mesh.scale.y=this.media.mesh.scale.y,this.mesh.scale.z=this.media.mesh.scale.z,this.mesh.position.z=this.media.mesh.position.z+.01,this.mesh.setParent(this.scene)}transition(e){}}}},(function(e){e.h=()=>"4401953682b794746b10"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZGY5YjBkZGM0NzgzZWJlODQ0ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBTUEsY0FDQ0EsYUFBWSxZQUFFQyxFQUFGLEdBQWVDLEVBQWYsTUFBbUJDLEVBQW5CLE1BQTBCQyxFQUExQixJQUFpQ0MsSUFDNUNDLEtBQUtDLEtBQU9OLEdBQWVPLE9BRTNCRixLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxJQUFNQSxFQUVYQyxLQUFLRyxTQUFXLElBQUlDLEVBQUFBLE1BQU1KLEtBQUtKLElBRS9CSSxLQUFLSyxnQkFDTEwsS0FBS00sZ0JBQ0xOLEtBQUtPLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTSxNQUFFRyxFQUFGLE9BQVNDLEdBQVdULEtBQUtMLFlBQy9CSyxLQUFLVSxNQUFRRCxFQUFPRCxFQUNwQixDQUVERixnQkFDQ04sS0FBS1csUUFBVSxJQUFJQyxFQUFBQSxRQUFRWixLQUFLSixHQUFJLENBQ25DaUIsU0FEbUMsVUFFbkNDLE9BRm1DLFVBR25DQyxTQUFVLENBQ1RDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPakIsS0FBS1UsTUFBTVMsV0FHNUIsQ0FFRFosYUFDQ1AsS0FBS29CLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3JCLEtBQUtKLEdBQUksQ0FDN0JPLFNBQVVILEtBQUtHLFNBQ2ZRLFFBQVNYLEtBQUtXLFVBR2ZYLEtBQUtvQixLQUFLRSxNQUFNQyxFQUFJdkIsS0FBS1UsTUFBTVUsS0FBS0UsTUFBTUMsRUFDMUN2QixLQUFLb0IsS0FBS0UsTUFBTUUsRUFBSXhCLEtBQUtVLE1BQU1VLEtBQUtFLE1BQU1FLEVBQzFDeEIsS0FBS29CLEtBQUtFLE1BQU1HLEVBQUl6QixLQUFLVSxNQUFNVSxLQUFLRSxNQUFNRyxFQUUxQ3pCLEtBQUtvQixLQUFLTSxTQUFTRCxFQUFJekIsS0FBS1UsTUFBTVUsS0FBS00sU0FBU0QsRUFBSSxJQUVwRHpCLEtBQUtvQixLQUFLTyxVQUFVM0IsS0FBS0gsTUFDekIsQ0FNRCtCLFdBQVdDLEdBRVQsa0JDM0RIQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL1RyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgTWVzaCwgUGxhbmUsIFByb2dyYW0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBjb2xsZWN0aW9ucywgZ2wsIHNjZW5lLCBzaXplcywgdXJsIH0pIHtcblx0XHR0aGlzLmZyb20gPSBjb2xsZWN0aW9ucyB8fCBkZXRhaWxcblxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMudXJsID0gdXJsXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgeyBpbmRleCwgbWVkaWFzIH0gPSB0aGlzLmNvbGxlY3Rpb25zXG5cdFx0dGhpcy5tZWRpYSA9IG1lZGlhc1tpbmRleF1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDEgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy5tZWRpYS50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMubWVkaWEubWVzaC5zY2FsZS54XG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLm1lZGlhLm1lc2guc2NhbGUueVxuXHRcdHRoaXMubWVzaC5zY2FsZS56ID0gdGhpcy5tZWRpYS5tZXNoLnNjYWxlLnpcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi56ID0gdGhpcy5tZWRpYS5tZXNoLnBvc2l0aW9uLnogKyAwLjAxXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cblx0dHJhbnNpdGlvbihlbGVtZW50KSB7XG5cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQwMTk1MzY4MmI3OTQ3NDZiMTBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJjb2xsZWN0aW9ucyIsImdsIiwic2NlbmUiLCJzaXplcyIsInVybCIsInRoaXMiLCJmcm9tIiwiZGV0YWlsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImluZGV4IiwibWVkaWFzIiwibWVkaWEiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJ0ZXh0dXJlIiwibWVzaCIsIk1lc2giLCJzY2FsZSIsIngiLCJ5IiwieiIsInBvc2l0aW9uIiwic2V0UGFyZW50IiwidHJhbnNpdGlvbiIsImVsZW1lbnQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=