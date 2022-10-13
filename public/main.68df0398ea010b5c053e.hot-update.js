/*! For license information please see main.68df0398ea010b5c053e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>d});var i=e("./node_modules/ogl/src/core/Program.js"),h=e("./node_modules/ogl/src/core/Mesh.js"),a=e("./node_modules/gsap/index.js"),o=e("./app/classes/Detection.js"),n=e("./app/shaders/plane-fragment.glsl"),r=e("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:t,geometry:s,gl:e,index:i,scene:h,sizes:a}){this.element=t,this.geometry=s,this.gl=e,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:n.default,vertex:r.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,s){this.extra=0,this.createBounds(t),this.updateX(s),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const t=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=t,this.mesh.scale.y+=t}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight;o.default.isPhone();this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}}},(function(t){t.h=()=>"695866a05049186b33d8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ2pCRixLQUFLRCxNQUFNdUMsTUFBUSxFQUFJdEMsS0FBS3FCLEtBQUt3QixNQUFNM0MsRUFBSSxFQUFJRixLQUFLRSxFQUFJRixLQUFLRCxNQUFNdUMsTUFBUXRDLEtBQUtDLEtBQ2xGLENBQ0Q0QixRQUFRMUIsRUFBSSxHQUNYSCxLQUFLRyxHQUFLSCxLQUFLeUIsT0FBT3VCLElBQU03QyxHQUFLTyxPQUFPaUMsWUFFMUJNLEVBQUFBLFFBQUFBLFVBRWRqRCxLQUFLcUIsS0FBS29CLFNBQVN0QyxFQUNsQkgsS0FBS0QsTUFBTTJDLE9BQVMsRUFBSTFDLEtBQUtxQixLQUFLd0IsTUFBTTFDLEVBQUksRUFBSUgsS0FBS0csRUFBSUgsS0FBS0QsTUFBTTJDLE9BRXJFMUMsS0FBS3FCLEtBQUtvQixTQUFTdEMsR0FDb0QsR0FBdEVvQyxLQUFLVyxJQUFLbEQsS0FBS3FCLEtBQUtvQixTQUFTdkMsRUFBSUYsS0FBS0QsTUFBTXVDLE1BQVNDLEtBQUtDLEdBQUssSUFBWSxFQUM1RSxDQUVEVyxPQUFPakIsR0FDRGxDLEtBQUt5QixTQUVWekIsS0FBS21DLGlCQUNMbkMsS0FBSzJCLGNBQ0wzQixLQUFLNEIsUUFBUU0sR0FDYmxDLEtBQUs2QixRQUFRLEdBQ2Isa0JDbEpGdUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJ2NsYXNzZXMvRGV0ZWN0aW9uJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmV4dHJhID0gMFxuXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGVSb3RhdGlvbigpIHtcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHR0aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdE1hdGguUEkgKiAwLjEsXG5cdFx0XHQtTWF0aC5QSSAqIDAuMSxcblx0XHRcdHRoaXMubWVzaC5wb3NpdGlvbi54XG5cdFx0KVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXG5cdFx0Y29uc3Qgc2NhbGUgPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxuXHRcdFx0MCxcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0MC4xLFxuXHRcdFx0MCxcblx0XHRcdE1hdGguYWJzKHRoaXMubWVzaC5wb3NpdGlvbi54KVxuXHRcdClcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ICs9IHNjYWxlXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgKz0gc2NhbGVcblx0fVxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdGNvbnN0IGV4dHJhID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDE1IDogNDBcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSArPVxuXHRcdFx0TWF0aC5jb3MoKHRoaXMubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIDQwIC0gNDBcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlUm90YXRpb24oKVxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY5NTg2NmEwNTA0OTE4NmIzM2Q4XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInoiLCJ3aWR0aCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJhYnMiLCJsZWZ0IiwidG9wIiwiRGV0ZWN0aW9uIiwiY29zIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9