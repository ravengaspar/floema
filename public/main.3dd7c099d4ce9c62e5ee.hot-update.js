/*! For license information please see main.3dd7c099d4ce9c62e5ee.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({gl:e,scene:t,sizes:s}){this.element=document.querySelector(".detail__media__image"),this.gl=e,this.scene=t,this.sizes=s,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(e){e&&e.animate((e=>{this.program.uniforms.uAlpha.value=1}))}hide(){}onResize(e){this.createBounds(e),this.updateX(),this.updateY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerWidth,this.mesh.position.y=this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}}}},(function(e){e.h=()=>"763e9b9e7ab61077de07"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zZGQ3YzA5OWQ0Y2U5YzYyZTVlZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLFFBQVVDLFNBQVNDLGNBQWMseUJBRXRDSCxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFRQSxFQUViQyxLQUFLSSxTQUFXLElBQUlDLEVBQUFBLE1BQU1MLEtBQUtILElBRS9CRyxLQUFLTSxnQkFDTE4sS0FBS08sZ0JBQ0xQLEtBQUtRLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTUcsRUFBUVQsS0FBS0MsUUFBUVMsYUFBYSxZQUV4Q1YsS0FBS1csUUFBVUMsT0FBT0MsU0FBU0osRUFDL0IsQ0FFREYsZ0JBQ0NQLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0gsR0FBSSxDQUNuQ21CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT3BCLEtBQUtXLFdBR3RCLENBRURILGFBQ0NSLEtBQUtzQixLQUFPLElBQUlDLEVBQUFBLEtBQUt2QixLQUFLSCxHQUFJLENBQzdCTyxTQUFVSixLQUFLSSxTQUNmVSxRQUFTZCxLQUFLYyxVQUdmZCxLQUFLc0IsS0FBS0UsVUFBVXhCLEtBQUtGLE1BQ3pCLENBRUQyQixjQUFhLE1BQUUxQixJQUNkQyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLMEIsT0FBUzFCLEtBQUtDLFFBQVEwQix3QkFFM0IzQixLQUFLNEIsY0FDTDVCLEtBQUs2QixVQUNMN0IsS0FBSzhCLFNBQ0wsQ0FJREMsS0FBS0MsR0FDQUEsR0FDSEEsRUFBV0MsU0FBUUMsSUFDbEJsQyxLQUFLYyxRQUFRSSxTQUFTQyxPQUFPQyxNQUFRLENBQXJDLEdBR0YsQ0FDRGUsT0FBUyxDQUlUQyxTQUFTckMsR0FDUkMsS0FBS3lCLGFBQWExQixHQUNsQkMsS0FBSzZCLFVBQ0w3QixLQUFLOEIsU0FDTCxDQUVETyxjQUFnQixDQUVoQkMsY0FBZ0IsQ0FFaEJDLFlBQWMsQ0FJZFgsY0FDQzVCLEtBQUt3QyxNQUFReEMsS0FBSzBCLE9BQU9jLE1BQVE1QixPQUFPNkIsV0FDeEN6QyxLQUFLMEMsT0FBUzFDLEtBQUswQixPQUFPZ0IsT0FBUzlCLE9BQU8rQixZQUUxQzNDLEtBQUtzQixLQUFLc0IsTUFBTUMsRUFBSTdDLEtBQUtELE1BQU15QyxNQUFReEMsS0FBS3dDLE1BQzVDeEMsS0FBS3NCLEtBQUtzQixNQUFNRSxFQUFJOUMsS0FBS0QsTUFBTTJDLE9BQVMxQyxLQUFLMEMsTUFDN0MsQ0FFRGIsVUFDQzdCLEtBQUs2QyxFQUFJN0MsS0FBSzBCLE9BQU9xQixLQUFPbkMsT0FBTzZCLFdBRW5DekMsS0FBS3NCLEtBQUswQixTQUFTSCxHQUFLN0MsS0FBS0QsTUFBTXlDLE1BQVEsRUFBSXhDLEtBQUtzQixLQUFLc0IsTUFBTUMsRUFBSSxFQUFJN0MsS0FBSzZDLEVBQUk3QyxLQUFLRCxNQUFNeUMsS0FDM0YsQ0FFRFYsVUFDQzlCLEtBQUs4QyxFQUFJOUMsS0FBSzBCLE9BQU91QixJQUFNckMsT0FBTzZCLFdBRWxDekMsS0FBS3NCLEtBQUswQixTQUFTRixFQUNsQjlDLEtBQUtELE1BQU0yQyxPQUFTLEVBQUkxQyxLQUFLc0IsS0FBS3NCLE1BQU1FLEVBQUksRUFBSTlDLEtBQUs4QyxFQUFJOUMsS0FBS0QsTUFBTTJDLE1BQ3JFLENBRURRLFNBQ01sRCxLQUFLMEIsU0FFVjFCLEtBQUs2QixVQUNMN0IsS0FBSzhCLFVBQ0wsa0JDOUdGcUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9EZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGFuZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsX19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KHRyYW5zaXRpb24pIHtcblx0XHRpZiAodHJhbnNpdGlvbikge1xuXHRcdFx0dHJhbnNpdGlvbi5hbmltYXRlKF8gPT4ge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gMVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0aGlkZSgpIHt9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHRvblRvdWNoRG93bigpIHt9XG5cblx0b25Ub3VjaE1vdmUoKSB7fVxuXG5cdG9uVG91Y2hVcCgpIHt9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKCkge1xuXHRcdHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoXG5cdH1cblxuXHR1cGRhdGVZKCkge1xuXHRcdHRoaXMueSA9IHRoaXMuYm91bmRzLnRvcCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueSAvIDIgKyB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3NjNlOWI5ZTdhYjYxMDc3ZGUwN1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwiZ2V0QXR0cmlidXRlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsInRyYW5zaXRpb24iLCJhbmltYXRlIiwiXyIsImhpZGUiLCJvblJlc2l6ZSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=