/*! For license information please see main.c682408e6417f8d16467.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"a97d255b43de6ff7ad28"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtNLEdBQUtOLEtBQUtrQyxPQUFPZ0IsSUFBTTVDLEdBQUtJLE9BQU9vQyxZQUV4QzlDLEtBQUt5QixLQUFLd0IsU0FBUzNDLEVBQ2xCTixLQUFLRCxNQUFNOEMsT0FBUyxFQUFJN0MsS0FBS3lCLEtBQUtzQixNQUFNekMsRUFBSSxFQUFJTixLQUFLTSxFQUFJTixLQUFLRCxNQUFNOEMsT0FBUzdDLEtBQUtJLE1BQU1FLENBQ3pGLENBRUQ2QyxPQUFPVCxHQUNEMUMsS0FBS2tDLFNBRVZsQyxLQUFLcUMsUUFBUUssRUFBT3JDLEdBQ3BCTCxLQUFLc0MsUUFBUUksRUFBT3BDLEdBQ3BCLGtCQzFIRjhDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG4gICAgR1NBUFxuICB9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhOTdkMjU1YjQzZGU2ZmY3YWQyOFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJvdGF0aW9uIiwieiIsIkdTQVAiLCJNYXRoIiwiUEkiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=