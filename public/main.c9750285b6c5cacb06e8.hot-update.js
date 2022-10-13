/*! For license information please see main.c9750285b6c5cacb06e8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>r});var i=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({gl:t,scene:e,sizes:s,transition:h}){this.element=document.querySelector(".detail__media__image"),this.gl=t,this.scene=e,this.sizes=s,this.transition=h,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.show()}createTexture(){const t=this.element.getAttribute("data-src");this.texture=window.TEXTURES[t]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){this.transition&&this.transition.animate((t=>{this.program.uniforms.uAlpha.value=1}),"detail")}hide(){}onResize(t){this.createBounds(t),this.updateX(),this.updateY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerWidth,this.mesh.position.y=this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}}}},(function(t){t.h=()=>"9314076b0b20f2c9583f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOTc1MDI4NWI2YzVjYWNiMDZlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsRUFBYixXQUFvQkMsSUFDL0JDLEtBQUtDLFFBQVVDLFNBQVNDLGNBQWMseUJBRXRDSCxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxXQUFhQSxFQUVsQkMsS0FBS0ksU0FBVyxJQUFJQyxFQUFBQSxNQUFNTCxLQUFLSixJQUUvQkksS0FBS00sZ0JBQ0xOLEtBQUtPLGdCQUNMUCxLQUFLUSxhQUVMUixLQUFLUyxNQUNMLENBRURILGdCQUNDLE1BQU1JLEVBQVFWLEtBQUtDLFFBQVFVLGFBQWEsWUFFeENYLEtBQUtZLFFBQVVDLE9BQU9DLFNBQVNKLEVBQy9CLENBRURILGdCQUNDUCxLQUFLZSxRQUFVLElBQUlDLEVBQUFBLFFBQVFoQixLQUFLSixHQUFJLENBQ25DcUIsU0FEbUMsVUFFbkNDLE9BRm1DLFVBR25DQyxTQUFVLENBQ1RDLE9BQVEsQ0FBRUMsTUFBTyxHQUNqQkMsS0FBTSxDQUFFRCxNQUFPckIsS0FBS1ksV0FHdEIsQ0FFREosYUFDQ1IsS0FBS3VCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3hCLEtBQUtKLEdBQUksQ0FDN0JRLFNBQVVKLEtBQUtJLFNBQ2ZXLFFBQVNmLEtBQUtlLFVBR2ZmLEtBQUt1QixLQUFLRSxVQUFVekIsS0FBS0gsTUFDekIsQ0FFRDZCLGNBQWEsTUFBRTVCLElBQ2RFLEtBQUtGLE1BQVFBLEVBRWJFLEtBQUsyQixPQUFTM0IsS0FBS0MsUUFBUTJCLHdCQUUzQjVCLEtBQUs2QixjQUNMN0IsS0FBSzhCLFVBQ0w5QixLQUFLK0IsU0FDTCxDQUlEdEIsT0FDS1QsS0FBS0QsWUFDUkMsS0FBS0QsV0FBV2lDLFNBQVFDLElBQ3ZCakMsS0FBS2UsUUFBUUksU0FBU0MsT0FBT0MsTUFBUSxDQUFyQyxHQUNFLFNBRUosQ0FDRGEsT0FBUyxDQUlUQyxTQUFTckMsR0FDUkUsS0FBSzBCLGFBQWE1QixHQUNsQkUsS0FBSzhCLFVBQ0w5QixLQUFLK0IsU0FDTCxDQUVESyxjQUFnQixDQUVoQkMsY0FBZ0IsQ0FFaEJDLFlBQWMsQ0FJZFQsY0FDQzdCLEtBQUt1QyxNQUFRdkMsS0FBSzJCLE9BQU9ZLE1BQVExQixPQUFPMkIsV0FDeEN4QyxLQUFLeUMsT0FBU3pDLEtBQUsyQixPQUFPYyxPQUFTNUIsT0FBTzZCLFlBRTFDMUMsS0FBS3VCLEtBQUtvQixNQUFNQyxFQUFJNUMsS0FBS0YsTUFBTXlDLE1BQVF2QyxLQUFLdUMsTUFDNUN2QyxLQUFLdUIsS0FBS29CLE1BQU1FLEVBQUk3QyxLQUFLRixNQUFNMkMsT0FBU3pDLEtBQUt5QyxNQUM3QyxDQUVEWCxVQUNDOUIsS0FBSzRDLEVBQUk1QyxLQUFLMkIsT0FBT21CLEtBQU9qQyxPQUFPMkIsV0FFbkN4QyxLQUFLdUIsS0FBS3dCLFNBQVNILEdBQUs1QyxLQUFLRixNQUFNeUMsTUFBUSxFQUFJdkMsS0FBS3VCLEtBQUtvQixNQUFNQyxFQUFJLEVBQUk1QyxLQUFLNEMsRUFBSTVDLEtBQUtGLE1BQU15QyxLQUMzRixDQUVEUixVQUNDL0IsS0FBSzZDLEVBQUk3QyxLQUFLMkIsT0FBT3FCLElBQU1uQyxPQUFPMkIsV0FFbEN4QyxLQUFLdUIsS0FBS3dCLFNBQVNGLEVBQ2xCN0MsS0FBS0YsTUFBTTJDLE9BQVMsRUFBSXpDLEtBQUt1QixLQUFLb0IsTUFBTUUsRUFBSSxFQUFJN0MsS0FBSzZDLEVBQUk3QyxLQUFLRixNQUFNMkMsTUFDckUsQ0FFRFEsU0FDTWpELEtBQUsyQixTQUVWM0IsS0FBSzhCLFVBQ0w5QixLQUFLK0IsVUFDTCxrQkNqSEZtQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxfX21lZGlhX19pbWFnZScpXG5cblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZShfID0+IHtcblx0XHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYS52YWx1ZSA9IDFcblx0XHRcdH0sICdkZXRhaWwnKVxuXHRcdH1cblx0fVxuXHRoaWRlKCkge31cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShzaXplcykge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdG9uVG91Y2hEb3duKCkge31cblxuXHRvblRvdWNoTW92ZSgpIHt9XG5cblx0b25Ub3VjaFVwKCkge31cblxuXHQvKiBMb29wcyAqL1xuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoKSB7XG5cdFx0dGhpcy54ID0gdGhpcy5ib3VuZHMubGVmdCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9IC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGhcblx0fVxuXG5cdHVwZGF0ZVkoKSB7XG5cdFx0dGhpcy55ID0gdGhpcy5ib3VuZHMudG9wIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiArIHRoaXMubWVzaC5zY2FsZS55IC8gMiArIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjkzMTQwNzZiMGIyMGYyYzk1ODNmXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidHJhbnNpdGlvbiIsInRoaXMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInNob3ciLCJpbWFnZSIsImdldEF0dHJpYnV0ZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImFuaW1hdGUiLCJfIiwiaGlkZSIsIm9uUmVzaXplIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJ4IiwieSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==