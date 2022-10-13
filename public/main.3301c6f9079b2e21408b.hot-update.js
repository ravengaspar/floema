/*! For license information please see main.3301c6f9079b2e21408b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale({height:e,width:t}){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=t*this.width,this.mesh.scale.y=e*this.height,this.mesh.position.x=-t/2,this.mesh.position.y=-e/2}updateX(){}updateY(){}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"d6dfc5972f675ed16b2f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMzAxYzZmOTA3OWIyZTIxNDA4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNMLENBRURGLGdCQUNDRCxLQUFLSSxRQUFVLElBQUlDLEVBQUFBLFFBQVFMLEtBQUtKLElBRWhDSSxLQUFLTSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCUixLQUFLTSxNQUFNRyxZQUFjLFlBQ3pCVCxLQUFLTSxNQUFNSSxJQUFNVixLQUFLTixRQUFRaUIsYUFBYSxZQUMzQ1gsS0FBS00sTUFBTU0sT0FBU0MsR0FBTWIsS0FBS0ksUUFBUUUsTUFBUU4sS0FBS00sS0FDcEQsQ0FFREosZ0JBQ0NGLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0osR0FBSSxDQUNuQ29CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxLQUFNLENBQUVDLE1BQU9wQixLQUFLSSxXQUd0QixDQUVERCxhQUNDSCxLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS0osR0FBSSxDQUM3QkQsU0FBVUssS0FBS0wsU0FDZm1CLFFBQVNkLEtBQUtjLFVBR2ZkLEtBQUtxQixLQUFLRSxVQUFVdkIsS0FBS0YsT0FFekJFLEtBQUtxQixLQUFLRyxNQUFNQyxFQUFJLENBQ3BCLENBRURDLGNBQWEsTUFBRTNCLElBQ2RDLEtBQUsyQixPQUFTM0IsS0FBS04sUUFBUWtDLHdCQUUzQjVCLEtBQUs2QixZQUFZOUIsR0FDakJDLEtBQUs4QixVQUNMOUIsS0FBSytCLFNBQ0wsQ0FFREYsYUFBWSxPQUFFRyxFQUFGLE1BQVVDLElBQ3JCakMsS0FBS2lDLE1BQVFqQyxLQUFLMkIsT0FBT00sTUFBUTFCLE9BQU8yQixXQUN4Q2xDLEtBQUtnQyxPQUFTaEMsS0FBSzJCLE9BQU9LLE9BQVN6QixPQUFPNEIsWUFFMUNuQyxLQUFLcUIsS0FBS0csTUFBTUMsRUFBSVEsRUFBUWpDLEtBQUtpQyxNQUNqQ2pDLEtBQUtxQixLQUFLRyxNQUFNWSxFQUFJSixFQUFTaEMsS0FBS2dDLE9BRWxDaEMsS0FBS3FCLEtBQUtnQixTQUFTWixHQUFLUSxFQUFRLEVBQ2hDakMsS0FBS3FCLEtBQUtnQixTQUFTRCxHQUFLSixFQUFTLENBQ2pDLENBQ0RGLFVBQVksQ0FDWkMsVUFBWSxDQUVaTyxTQUFTdkMsR0FDUkMsS0FBSzBCLGFBQWEzQixFQUNsQixrQkN4RUZ3QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gMlxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdHVwZGF0ZVNjYWxlKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB3aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IGhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9IC13aWR0aCAvIDJcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IC1oZWlnaHQgLyAyXG5cdH1cblx0dXBkYXRlWCgpIHt9XG5cdHVwZGF0ZVkoKSB7fVxuXG5cdG9uUmVzaXplKHNpemVzKSB7XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQ2ZGZjNTk3MmY2NzVlZDE2YjJmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsIndpbmRvdyIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJvbmxvYWQiLCJfIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJzY2FsZSIsIngiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJ5IiwicG9zaXRpb24iLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==