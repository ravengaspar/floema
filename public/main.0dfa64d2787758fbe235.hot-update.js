/*! For license information please see main.0dfa64d2787758fbe235.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.updateX(e.x),this.updateY(e.y)}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"af7e74c84baacd2c578b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZGZhNjRkMjc4Nzc1OGZiZTIzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNMLENBRURGLGdCQUNDRCxLQUFLSSxRQUFVLElBQUlDLEVBQUFBLFFBQVFMLEtBQUtKLElBRWhDSSxLQUFLTSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCUixLQUFLTSxNQUFNRyxZQUFjLFlBQ3pCVCxLQUFLTSxNQUFNSSxJQUFNVixLQUFLTixRQUFRaUIsYUFBYSxZQUMzQ1gsS0FBS00sTUFBTU0sT0FBU0MsR0FBTWIsS0FBS0ksUUFBUUUsTUFBUU4sS0FBS00sS0FDcEQsQ0FFREosZ0JBQ0NGLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0osR0FBSSxDQUNuQ29CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxLQUFNLENBQUVDLE1BQU9wQixLQUFLSSxXQUd0QixDQUVERCxhQUNDSCxLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS0osR0FBSSxDQUM3QkQsU0FBVUssS0FBS0wsU0FDZm1CLFFBQVNkLEtBQUtjLFVBR2ZkLEtBQUtxQixLQUFLRSxVQUFVdkIsS0FBS0YsT0FFekJFLEtBQUtxQixLQUFLRyxNQUFNQyxFQUFJLENBQ3BCLENBRURDLGNBQWEsTUFBRTNCLElBQ2RDLEtBQUtELE1BQVFBLEVBRWJDLEtBQUsyQixPQUFTM0IsS0FBS04sUUFBUWtDLHdCQUUzQjVCLEtBQUs2QixZQUFZOUIsR0FDakJDLEtBQUs4QixVQUNMOUIsS0FBSytCLFNBQ0wsQ0FFREYsY0FDQzdCLEtBQUtnQyxNQUFRaEMsS0FBSzJCLE9BQU9LLE1BQVF6QixPQUFPMEIsV0FDeENqQyxLQUFLa0MsT0FBU2xDLEtBQUsyQixPQUFPTyxPQUFTM0IsT0FBTzRCLFlBRTFDbkMsS0FBS3FCLEtBQUtHLE1BQU1DLEVBQUl6QixLQUFLRCxNQUFNaUMsTUFBUWhDLEtBQUtnQyxNQUM1Q2hDLEtBQUtxQixLQUFLRyxNQUFNWSxFQUFJcEMsS0FBS0QsTUFBTW1DLE9BQVNsQyxLQUFLa0MsTUFDN0MsQ0FDREosUUFBUUwsRUFBSSxHQUNYekIsS0FBS3lCLEdBQUt6QixLQUFLMkIsT0FBT1UsS0FBT1osR0FBTWxCLE9BQU8wQixXQUUxQ2pDLEtBQUtxQixLQUFLaUIsU0FBU2IsR0FBS3pCLEtBQUtELE1BQU1pQyxNQUFRLEVBQUloQyxLQUFLcUIsS0FBS0csTUFBTUMsRUFBSSxFQUFJekIsS0FBS3lCLEVBQUl6QixLQUFLRCxNQUFNaUMsS0FDM0YsQ0FDREQsUUFBUUssRUFBSSxHQUNYcEMsS0FBS29DLEdBQUtwQyxLQUFLMkIsT0FBT1ksSUFBTUgsR0FBTTdCLE9BQU80QixZQUV6Q25DLEtBQUtxQixLQUFLaUIsU0FBU0YsRUFDbEJwQyxLQUFLRCxNQUFNbUMsT0FBUyxFQUFJbEMsS0FBS3FCLEtBQUtHLE1BQU1ZLEVBQUksRUFBSXBDLEtBQUtvQyxFQUFJcEMsS0FBS0QsTUFBTW1DLE1BQ3JFLENBRURNLE9BQU9DLEdBQ056QyxLQUFLOEIsUUFBUVcsRUFBT2hCLEdBQ3BCekIsS0FBSytCLFFBQVFVLEVBQU9MLEVBQ3BCLENBRURNLFNBQVMzQyxHQUNSQyxLQUFLMEIsYUFBYTNCLEVBQ2xCLGtCQ3JGRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSAyXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID0gLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwueClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpXG5cdH1cblxuXHRvblJlc2l6ZShzaXplcykge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhZjdlNzRjODRiYWFjZDJjNTc4YlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJ4IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNjcm9sbCIsIm9uUmVzaXplIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9