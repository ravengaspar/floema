/*! For license information please see main.994a1a5452b32f79baeb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Detail/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),n=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const r=class{constructor({gl:e,scene:t,sizes:s}){this.element=document.querySelector(".detail__media__image"),this.gl=e,this.scene=t,this.sizes=s,this.geometry=new i.Plane(this.gl),this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const e=this.element.getAttribute("data-src");this.texture=window.TEXTURES[e]}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{uAlpha:{value:1},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){}hide(){}onResize(e){this.createBounds(e),this.updateX(),this.updateY()}onTouchStart(){}onTouchMove(){}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(){this.x=this.bounds.left/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width}updateY(){this.y=this.bounds.top/window.innerWidth,this.mesh.position.y=this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height}update(){this.bounds&&(this.updateX(),this.updateY())}}}},(function(e){e.h=()=>"53a63992eefa0a202987"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45OTRhMWE1NDUyYjMyZjc5YmFlYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLFFBQVVDLFNBQVNDLGNBQWMseUJBRXRDSCxLQUFLSCxHQUFLQSxFQUNWRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFRQSxFQUViQyxLQUFLSSxTQUFXLElBQUlDLEVBQUFBLE1BQU1MLEtBQUtILElBRS9CRyxLQUFLTSxnQkFDTE4sS0FBS08sZ0JBQ0xQLEtBQUtRLFlBQ0wsQ0FFREYsZ0JBQ0MsTUFBTUcsRUFBUVQsS0FBS0MsUUFBUVMsYUFBYSxZQUV4Q1YsS0FBS1csUUFBVUMsT0FBT0MsU0FBU0osRUFDL0IsQ0FFREYsZ0JBQ0NQLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0gsR0FBSSxDQUNuQ21CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT3BCLEtBQUtXLFdBR3RCLENBRURILGFBQ0NSLEtBQUtzQixLQUFPLElBQUlDLEVBQUFBLEtBQUt2QixLQUFLSCxHQUFJLENBQzdCTyxTQUFVSixLQUFLSSxTQUNmVSxRQUFTZCxLQUFLYyxVQUdmZCxLQUFLc0IsS0FBS0UsVUFBVXhCLEtBQUtGLE1BQ3pCLENBRUQyQixjQUFhLE1BQUUxQixJQUNkQyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLMEIsT0FBUzFCLEtBQUtDLFFBQVEwQix3QkFFM0IzQixLQUFLNEIsY0FDTDVCLEtBQUs2QixVQUNMN0IsS0FBSzhCLFNBQ0wsQ0FJREMsT0FBUyxDQUNUQyxPQUFTLENBSVRDLFNBQVNsQyxHQUNSQyxLQUFLeUIsYUFBYTFCLEdBQ2xCQyxLQUFLNkIsVUFDTDdCLEtBQUs4QixTQUNMLENBR0FJLGVBRUMsQ0FFREMsY0FFQyxDQUtGUCxjQUNDNUIsS0FBS29DLE1BQVFwQyxLQUFLMEIsT0FBT1UsTUFBUXhCLE9BQU95QixXQUN4Q3JDLEtBQUtzQyxPQUFTdEMsS0FBSzBCLE9BQU9ZLE9BQVMxQixPQUFPMkIsWUFFMUN2QyxLQUFLc0IsS0FBS2tCLE1BQU1DLEVBQUl6QyxLQUFLRCxNQUFNcUMsTUFBUXBDLEtBQUtvQyxNQUM1Q3BDLEtBQUtzQixLQUFLa0IsTUFBTUUsRUFBSTFDLEtBQUtELE1BQU11QyxPQUFTdEMsS0FBS3NDLE1BQzdDLENBRURULFVBQ0M3QixLQUFLeUMsRUFBSXpDLEtBQUswQixPQUFPaUIsS0FBTy9CLE9BQU95QixXQUVuQ3JDLEtBQUtzQixLQUFLc0IsU0FBU0gsR0FBS3pDLEtBQUtELE1BQU1xQyxNQUFRLEVBQUlwQyxLQUFLc0IsS0FBS2tCLE1BQU1DLEVBQUksRUFBSXpDLEtBQUt5QyxFQUFJekMsS0FBS0QsTUFBTXFDLEtBQzNGLENBRUROLFVBQ0M5QixLQUFLMEMsRUFBSTFDLEtBQUswQixPQUFPbUIsSUFBTWpDLE9BQU95QixXQUVsQ3JDLEtBQUtzQixLQUFLc0IsU0FBU0YsRUFDbEIxQyxLQUFLRCxNQUFNdUMsT0FBUyxFQUFJdEMsS0FBS3NCLEtBQUtrQixNQUFNRSxFQUFJLEVBQUkxQyxLQUFLMEMsRUFBSTFDLEtBQUtELE1BQU11QyxNQUNyRSxDQUVEUSxTQUNNOUMsS0FBSzBCLFNBRVYxQixLQUFLNkIsVUFDTDdCLEtBQUs4QixVQUNMLGtCQzVHRmlCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvRGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbF9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMSB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHt9XG5cdGhpZGUoKSB7fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKHNpemVzKSB7XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblxuICBvblRvdWNoU3RhcnQoKSB7XG5cbiAgfVxuICBcbiAgb25Ub3VjaE1vdmUoKSB7XG5cbiAgfVxuXG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKCkge1xuXHRcdHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoXG5cdH1cblxuXHR1cGRhdGVZKCkge1xuXHRcdHRoaXMueSA9IHRoaXMuYm91bmRzLnRvcCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueSAvIDIgKyB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1M2E2Mzk5MmVlZmEwYTIwMjk4N1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2VvbWV0cnkiLCJQbGFuZSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwiZ2V0QXR0cmlidXRlIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hNb3ZlIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY2FsZSIsIngiLCJ5IiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9