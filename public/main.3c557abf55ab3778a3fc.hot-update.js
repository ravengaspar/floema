/*! For license information please see main.3c557abf55ab3778a3fc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"031a48fa4dccf2c24119"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zYzU1N2FiZjU1YWIzNzc4YTNmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxhQUVISCxLQUFLSSxLQUdQLENBRURILGdCQUNDRCxLQUFLSyxRQUFVLElBQUlDLEVBQUFBLFFBQVFOLEtBQUtKLElBRWhDSSxLQUFLTyxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCVCxLQUFLTyxNQUFNRyxZQUFjLFlBQ3pCVixLQUFLTyxNQUFNSSxJQUFNWCxLQUFLTixRQUFRa0IsYUFBYSxZQUMzQ1osS0FBS08sTUFBTU0sT0FBU0MsR0FBTWQsS0FBS0ssUUFBUUUsTUFBUVAsS0FBS08sS0FDcEQsQ0FFREwsZ0JBQ0NGLEtBQUtlLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWhCLEtBQUtKLEdBQUksQ0FDbkNxQixTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsS0FBTSxDQUFFQyxNQUFPckIsS0FBS0ssV0FHdEIsQ0FFREYsYUFDQ0gsS0FBS3NCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3ZCLEtBQUtKLEdBQUksQ0FDN0JELFNBQVVLLEtBQUtMLFNBQ2ZvQixRQUFTZixLQUFLZSxVQUdmZixLQUFLc0IsS0FBS0UsVUFBVXhCLEtBQUtGLE9BRXpCRSxLQUFLc0IsS0FBS0csTUFBTUMsRUFBSSxDQUNwQixDQUVEQyxjQUFhLE1BQUU1QixJQUNkQyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLNEIsT0FBUzVCLEtBQUtOLFFBQVFtQyx3QkFFM0I3QixLQUFLOEIsWUFBWS9CLEdBQ2pCQyxLQUFLK0IsVUFDTC9CLEtBQUtnQyxTQUNMLENBRURGLGNBQ0M5QixLQUFLaUMsTUFBUWpDLEtBQUs0QixPQUFPSyxNQUFRekIsT0FBTzBCLFdBQ3hDbEMsS0FBS21DLE9BQVNuQyxLQUFLNEIsT0FBT08sT0FBUzNCLE9BQU80QixZQUUxQ3BDLEtBQUtzQixLQUFLRyxNQUFNQyxFQUFJMUIsS0FBS0QsTUFBTWtDLE1BQVFqQyxLQUFLaUMsTUFDNUNqQyxLQUFLc0IsS0FBS0csTUFBTVksRUFBSXJDLEtBQUtELE1BQU1vQyxPQUFTbkMsS0FBS21DLE1BQzdDLENBQ0RKLFFBQVFMLEVBQUksR0FDWDFCLEtBQUswQixHQUFLMUIsS0FBSzRCLE9BQU9VLEtBQU9aLEdBQUtsQixPQUFPMEIsV0FFekNsQyxLQUFLc0IsS0FBS2lCLFNBQVNiLEdBQUsxQixLQUFLRCxNQUFNa0MsTUFBUSxFQUFJakMsS0FBS3NCLEtBQUtHLE1BQU1DLEVBQUksRUFBSTFCLEtBQUswQixFQUFJMUIsS0FBS0QsTUFBTWtDLEtBQzNGLENBQ0RELFFBQVFLLEVBQUksR0FDWHJDLEtBQUtxQyxHQUFLckMsS0FBSzRCLE9BQU9ZLElBQU1ILEdBQUs3QixPQUFPNEIsWUFFeENwQyxLQUFLc0IsS0FBS2lCLFNBQVNGLEVBQ2xCckMsS0FBS0QsTUFBTW9DLE9BQVMsRUFBSW5DLEtBQUtzQixLQUFLRyxNQUFNWSxFQUFJLEVBQUlyQyxLQUFLcUMsRUFBSXJDLEtBQUtELE1BQU1vQyxNQUNyRSxDQUVETSxPQUFPQyxHQUNEMUMsS0FBSzRCLFNBRVY1QixLQUFLK0IsUUFBUVcsRUFBT2hCLEdBQ3BCMUIsS0FBS2dDLFFBQVFVLEVBQU9MLEdBQ3BCLENBRURNLFNBQVM1QyxHQUNSQyxLQUFLMkIsYUFBYTVCLEVBQ2xCLGtCQzNGRjZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cbiAgICB0aGlzLmV4dHJhXG5cblxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gMlxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID0gLXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXHR9XG5cblx0b25SZXNpemUoc2l6ZXMpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDMxYTQ4ZmE0ZGNjZjJjMjQxMTlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJleHRyYSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJ4IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsInNjcm9sbCIsIm9uUmVzaXplIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9