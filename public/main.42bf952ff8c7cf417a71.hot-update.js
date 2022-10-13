/*! For license information please see main.42bf952ff8c7cf417a71.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/collections-fragment.glsl"),o=s("./app/shaders/collections-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(t),this.updateX()}show(){a.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){a.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){if(!this.bounds)return;this.updateX(t);this.mesh.rotation.z=.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=e===this.index?1:.4,this.opacity.current=a.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier,this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}}},(function(t){t.h=()=>"5b9c7e97394562c8e064"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBSkQsR0FJaUI4QyxLQUFLRSxJQUFJbkQsS0FBS0gsTUFIL0IsR0FLbEJHLEtBQUtJLFFBQVFFLE9BQVNULElBQVVHLEtBQUtILE1BQVEsRUFBSSxHQUNqREcsS0FBS0ksUUFBUUMsUUFBVThCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3RCbkMsS0FBS0ksUUFBUUMsUUFDYkwsS0FBS0ksUUFBUUUsT0FDYk4sS0FBS0ksUUFBUUcsTUFHZFAsS0FBS21CLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVF6QixLQUFLSSxRQUFRSSxXQUNsRFIsS0FBS21CLFFBQVFJLFNBQVNDLE9BQU9DLE1BQVF6QixLQUFLSSxRQUFRSSxXQUFhUixLQUFLSSxRQUFRQyxPQUM1RSxrQkN2SUYrQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL2NvbGxlY3Rpb25zLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLm9wYWNpdHkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0bXVsdGlwbGllcjogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyh7IHNpemVzOiB0aGlzLnNpemVzIH0pXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0Ly8gdGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5vcGFjaXR5LFxuXHRcdFx0e1xuXHRcdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0bXVsdGlwbGllcjogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMub3BhY2l0eSwge1xuXHRcdFx0bXVsdGlwbGllcjogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCAmJiBzY3JvbGwueClcblx0fVxuXG5cdC8qIExvb3BzICovXG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCwgaW5kZXgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cblx0XHRjb25zdCBhbXBsaXR1ZGUgPSAwLjFcblx0XHRjb25zdCBmcmVxdWVuY3kgPSAxXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IDAuMDIgKiBNYXRoLlBJICogTWF0aC5zaW4odGhpcy5pbmRleCAvIGZyZXF1ZW5jeSlcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IGFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMuaW5kZXggLyBmcmVxdWVuY3kpXG5cblx0XHR0aGlzLm9wYWNpdHkudGFyZ2V0ID0gaW5kZXggPT09IHRoaXMuaW5kZXggPyAxIDogMC40XG5cdFx0dGhpcy5vcGFjaXR5LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5vcGFjaXR5LmN1cnJlbnQsXG5cdFx0XHR0aGlzLm9wYWNpdHkudGFyZ2V0LFxuXHRcdFx0dGhpcy5vcGFjaXR5LmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5Lm11bHRpcGxpZXJcblx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5Lm11bHRpcGxpZXIgKiB0aGlzLm9wYWNpdHkuY3VycmVudFxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YjljN2U5NzM5NDU2MmM4ZTA2NFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJvcGFjaXR5IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJtdWx0aXBsaWVyIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ1cGRhdGUiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJzaW4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=