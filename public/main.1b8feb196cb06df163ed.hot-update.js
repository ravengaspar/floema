/*! For license information please see main.1b8feb196cb06df163ed.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale({height:e,width:t}){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=t*this.width,this.mesh.scale.y=e*this.height,this.x=this.bounds.left/window.innerWidth,this.y=this.bounds.top/window.innerHeight}updateX(e=0){this.mesh.position.x=-width/2+this.mesh.scale.x/2+this.x*width}updateY(e=0){this.mesh.position.y=height/2-this.mesh.scale.y/2-this.y*height}update(e){this.updateX(e.x),this.updateY(e.y)}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"1513fb50563387693828"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYjhmZWIxOTZjYjA2ZGYxNjNlZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNMLENBRURGLGdCQUNDRCxLQUFLSSxRQUFVLElBQUlDLEVBQUFBLFFBQVFMLEtBQUtKLElBRWhDSSxLQUFLTSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCUixLQUFLTSxNQUFNRyxZQUFjLFlBQ3pCVCxLQUFLTSxNQUFNSSxJQUFNVixLQUFLTixRQUFRaUIsYUFBYSxZQUMzQ1gsS0FBS00sTUFBTU0sT0FBU0MsR0FBTWIsS0FBS0ksUUFBUUUsTUFBUU4sS0FBS00sS0FDcEQsQ0FFREosZ0JBQ0NGLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0osR0FBSSxDQUNuQ29CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxLQUFNLENBQUVDLE1BQU9wQixLQUFLSSxXQUd0QixDQUVERCxhQUNDSCxLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS0osR0FBSSxDQUM3QkQsU0FBVUssS0FBS0wsU0FDZm1CLFFBQVNkLEtBQUtjLFVBR2ZkLEtBQUtxQixLQUFLRSxVQUFVdkIsS0FBS0YsT0FFekJFLEtBQUtxQixLQUFLRyxNQUFNQyxFQUFJLENBQ3BCLENBRURDLGNBQWEsTUFBRTNCLElBQ2RDLEtBQUtELE1BQVFBLEVBRWJDLEtBQUsyQixPQUFTM0IsS0FBS04sUUFBUWtDLHdCQUUzQjVCLEtBQUs2QixZQUFZOUIsR0FDakJDLEtBQUs4QixVQUNMOUIsS0FBSytCLFNBQ0wsQ0FFREYsYUFBWSxPQUFFRyxFQUFGLE1BQVVDLElBQ3JCakMsS0FBS2lDLE1BQVFqQyxLQUFLMkIsT0FBT00sTUFBUTFCLE9BQU8yQixXQUN4Q2xDLEtBQUtnQyxPQUFTaEMsS0FBSzJCLE9BQU9LLE9BQVN6QixPQUFPNEIsWUFFMUNuQyxLQUFLcUIsS0FBS0csTUFBTUMsRUFBSVEsRUFBUWpDLEtBQUtpQyxNQUNqQ2pDLEtBQUtxQixLQUFLRyxNQUFNWSxFQUFJSixFQUFTaEMsS0FBS2dDLE9BRWxDaEMsS0FBS3lCLEVBQUl6QixLQUFLMkIsT0FBT1UsS0FBTzlCLE9BQU8yQixXQUNuQ2xDLEtBQUtvQyxFQUFJcEMsS0FBSzJCLE9BQU9XLElBQU0vQixPQUFPNEIsV0FDbEMsQ0FDREwsUUFBUUwsRUFBSSxHQUNYekIsS0FBS3FCLEtBQUtrQixTQUFTZCxHQUFLUSxNQUFRLEVBQUlqQyxLQUFLcUIsS0FBS0csTUFBTUMsRUFBSSxFQUFJekIsS0FBS3lCLEVBQUlRLEtBQ3JFLENBQ0RGLFFBQVFLLEVBQUksR0FDWHBDLEtBQUtxQixLQUFLa0IsU0FBU0gsRUFBSUosT0FBUyxFQUFJaEMsS0FBS3FCLEtBQUtHLE1BQU1ZLEVBQUksRUFBSXBDLEtBQUtvQyxFQUFJSixNQUNyRSxDQUVEUSxPQUFPQyxHQUNOekMsS0FBSzhCLFFBQVFXLEVBQU9oQixHQUNwQnpCLEtBQUsrQixRQUFRVSxFQUFPTCxFQUNwQixDQUVETSxTQUFTM0MsR0FDUkMsS0FBSzBCLGFBQWEzQixFQUNsQixrQkNuRkY0QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gMlxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoeyBoZWlnaHQsIHdpZHRoIH0pIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHdpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gaGVpZ2h0ICogdGhpcy5oZWlnaHRcblxuXHRcdHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMueSA9IHRoaXMuYm91bmRzLnRvcCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9IC13aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB3aWR0aFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IGhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiBoZWlnaHRcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXHR9XG5cblx0b25SZXNpemUoc2l6ZXMpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMTUxM2ZiNTA1NjMzODc2OTM4MjhcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInNjYWxlIiwieCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJoZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInkiLCJsZWZ0IiwidG9wIiwicG9zaXRpb24iLCJ1cGRhdGUiLCJzY3JvbGwiLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==