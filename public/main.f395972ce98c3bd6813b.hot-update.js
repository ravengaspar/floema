/*! For license information please see main.f395972ce98c3bd6813b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.image=new window.Image;this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"065f3d25e91de7bafeda"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU00QyxNQUFRM0MsS0FBS0ksTUFBTUMsQ0FDeEYsQ0FFRGlDLFFBQVFoQyxFQUFJLEdBQ1hOLEtBQUtNLEdBQUtOLEtBQUtrQyxPQUFPZ0IsSUFBTTVDLEdBQUtJLE9BQU9vQyxZQUV4QzlDLEtBQUt5QixLQUFLd0IsU0FBUzNDLEVBQ2xCTixLQUFLRCxNQUFNOEMsT0FBUyxFQUFJN0MsS0FBS3lCLEtBQUtzQixNQUFNekMsRUFBSSxFQUFJTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNOEMsT0FBUzdDLEtBQUtJLE1BQU1FLENBQ3pGLENBRUQ2QyxPQUFPVCxHQUNEMUMsS0FBS2tDLFNBRVZsQyxLQUFLcUMsUUFBUUssRUFBT3JDLEdBQ3BCTCxLQUFLc0MsUUFBUUksRUFBT3BDLEdBQ3BCLGtCQ2hJRjhDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuICAgIGNvbnN0IGltYWdlID0gXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgPyBzY3JvbGwueCA6IDApXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbCA/IHNjcm9sbC55IDogMClcblx0fVxuXG5cdC8qIExvb3BzICovXG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwueClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA2NWYzZDI1ZTkxZGU3YmFmZWRhXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwicm90YXRpb24iLCJ6IiwiR1NBUCIsIk1hdGgiLCJQSSIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==