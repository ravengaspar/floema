/*! For license information please see main.2cd12b2b0dc61779c8d6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),n=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:o.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}}}},(function(e){e.h=()=>"9eed5f70c0206b9f1abc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUlOLEtBQUtNLEVBQUlOLEtBQUtELE1BQU0yQyxPQUFTMUMsS0FBS0ksTUFBTUUsQ0FDekYsQ0FFRDBDLE9BQU9ULEdBQ0R2QyxLQUFLaUMsU0FFVmpDLEtBQUtvQyxRQUFRRyxFQUFPbEMsR0FDcEJMLEtBQUtxQyxRQUFRRSxFQUFPakMsR0FDcEIsa0JDckdGMkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG5cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsLngpXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbC55KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5ZWVkNWY3MGMwMjA2YjlmMWFiY1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImV4dHJhIiwieCIsInkiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInJvdGF0aW9uIiwieiIsIkdTQVAiLCJNYXRoIiwiUEkiLCJjcmVhdGVCb3VuZHMiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwib25SZXNpemUiLCJzY3JvbGwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9