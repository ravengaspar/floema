/*! For license information please see main.088c2a80aba1444e79e5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({gl:e,scene:t,sizes:s,transition:h}){this.element=document.querySelector(".detail__media__image"),this.gl=e,this.scene=t,this.sizes=s,this.transition=h,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh(),this.onResize(),this.show()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){this.transition&&this.transition.animate((e=>{this.program.uniforms.uAlpha.value=1}))}hide(){}onResize(e){this.createBounds(e),this.updateX(),this.updateY()}onTouchDown(){}onTouchMove(){}onTouchUp(){}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerWidth,this.mesh.position.y=this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}}}},(function(e){e.h=()=>"6649ae51d3604c41d026"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wODhjMmE4MGFiYTE0NDRlNzllNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsRUFBYixXQUFvQkMsSUFDL0JDLEtBQUtDLFFBQVVDLFNBQVNDLGNBQWMseUJBRXRDSCxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxXQUFhQSxFQUVsQkMsS0FBS0ksU0FBVyxJQUFJQyxFQUFBQSxNQUFNTCxLQUFLSixJQUUvQkksS0FBS00sZ0JBQ0xOLEtBQUtPLGdCQUNMUCxLQUFLUSxhQUVMUixLQUFLUyxXQUVMVCxLQUFLVSxNQUNMLENBRURKLGdCQUNDLE1BQU1LLEVBQVFYLEtBQUtDLFFBQVFXLGFBQWEsWUFFeENaLEtBQUthLFFBQVVDLE9BQU9DLFNBQVNKLEVBQy9CLENBRURKLGdCQUNDUCxLQUFLZ0IsUUFBVSxJQUFJQyxFQUFBQSxRQUFRakIsS0FBS0osR0FBSSxDQUNuQ3NCLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT3RCLEtBQUthLFdBR3RCLENBRURMLGFBQ0NSLEtBQUt3QixLQUFPLElBQUlDLEVBQUFBLEtBQUt6QixLQUFLSixHQUFJLENBQzdCUSxTQUFVSixLQUFLSSxTQUNmWSxRQUFTaEIsS0FBS2dCLFVBR2ZoQixLQUFLd0IsS0FBS0UsVUFBVTFCLEtBQUtILE1BQ3pCLENBRUQ4QixjQUFhLE1BQUU3QixJQUNkRSxLQUFLRixNQUFRQSxFQUViRSxLQUFLNEIsT0FBUzVCLEtBQUtDLFFBQVE0Qix3QkFFM0I3QixLQUFLOEIsY0FDTDlCLEtBQUsrQixVQUNML0IsS0FBS2dDLFNBQ0wsQ0FJRHRCLE9BQ0tWLEtBQUtELFlBQ1JDLEtBQUtELFdBQVdrQyxTQUFRQyxJQUN2QmxDLEtBQUtnQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRLENBQXJDLEdBR0YsQ0FDRGEsT0FBUyxDQUlUMUIsU0FBU1gsR0FDUkUsS0FBSzJCLGFBQWE3QixHQUNsQkUsS0FBSytCLFVBQ0wvQixLQUFLZ0MsU0FDTCxDQUVESSxjQUFnQixDQUVoQkMsY0FBZ0IsQ0FFaEJDLFlBQWMsQ0FJZFIsY0FDQzlCLEtBQUt1QyxNQUFRdkMsS0FBSzRCLE9BQU9XLE1BQVF6QixPQUFPMEIsV0FDeEN4QyxLQUFLeUMsT0FBU3pDLEtBQUs0QixPQUFPYSxPQUFTM0IsT0FBTzRCLFlBRTFDMUMsS0FBS3dCLEtBQUttQixNQUFNQyxFQUFJNUMsS0FBS0YsTUFBTXlDLE1BQVF2QyxLQUFLdUMsTUFDNUN2QyxLQUFLd0IsS0FBS21CLE1BQU1FLEVBQUk3QyxLQUFLRixNQUFNMkMsT0FBU3pDLEtBQUt5QyxNQUM3QyxDQUVEVixVQUNDL0IsS0FBSzRDLEVBQUk1QyxLQUFLNEIsT0FBT2tCLEtBQU9oQyxPQUFPMEIsV0FFbkN4QyxLQUFLd0IsS0FBS3VCLFNBQVNILEdBQUs1QyxLQUFLRixNQUFNeUMsTUFBUSxFQUFJdkMsS0FBS3dCLEtBQUttQixNQUFNQyxFQUFJLEVBQUk1QyxLQUFLNEMsRUFBSTVDLEtBQUtGLE1BQU15QyxLQUMzRixDQUVEUCxVQUNDaEMsS0FBSzZDLEVBQUk3QyxLQUFLNEIsT0FBT29CLElBQU1sQyxPQUFPMEIsV0FFbEN4QyxLQUFLd0IsS0FBS3VCLFNBQVNGLEVBQ2xCN0MsS0FBS0YsTUFBTTJDLE9BQVMsRUFBSXpDLEtBQUt3QixLQUFLbUIsTUFBTUUsRUFBSSxFQUFJN0MsS0FBSzZDLEVBQUk3QyxLQUFLRixNQUFNMkMsTUFDckUsQ0FFRFEsU0FDTWpELEtBQUs0QixTQUVWNUIsS0FBSytCLFVBQ0wvQixLQUFLZ0MsVUFDTCxrQkNuSEZrQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYW5lLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMsIHRyYW5zaXRpb24gfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxfX21lZGlhX19pbWFnZScpXG5cblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdGlmICh0aGlzLnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbi5hbmltYXRlKF8gPT4ge1xuXHRcdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gMVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cblx0aGlkZSgpIHt9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHRvblRvdWNoRG93bigpIHt9XG5cblx0b25Ub3VjaE1vdmUoKSB7fVxuXG5cdG9uVG91Y2hVcCgpIHt9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKCkge1xuXHRcdHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoXG5cdH1cblxuXHR1cGRhdGVZKCkge1xuXHRcdHRoaXMueSA9IHRoaXMuYm91bmRzLnRvcCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueSAvIDIgKyB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NjQ5YWU1MWQzNjA0YzQxZDAyNlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRyYW5zaXRpb24iLCJ0aGlzIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdlb21ldHJ5IiwiUGxhbmUiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJvblJlc2l6ZSIsInNob3ciLCJpbWFnZSIsImdldEF0dHJpYnV0ZSIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImFuaW1hdGUiLCJfIiwiaGlkZSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwieCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=