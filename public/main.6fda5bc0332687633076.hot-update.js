/*! For license information please see main.6fda5bc0332687633076.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX()}show(){a.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){a.default.to(this.opacity,{multiplier:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(e){if(!this.bounds)return;this.updateX(e);this.mesh.rotation.z=.02*Math.PI*Math.sin(this.index/1)}}}},(function(e){e.h=()=>"2ba529cb7a4387c3ad80"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5vcGFjaXR5ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoeyBzaXplczogdGhpcy5zaXplcyB9KVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdC8vIHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMub3BhY2l0eSxcblx0XHRcdHtcblx0XHRcdFx0bXVsdGlwbGllcjogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdG11bHRpcGxpZXI6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLm9wYWNpdHksIHtcblx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXG5cdH1cblxuXHQvKiBMb29wcyAqL1xuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcblx0fVxuXG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblxuICAgIGNvbnN0IGFtcGxpdHVkZSA9IDAuMVxuICAgIGNvbnN0IGZyZXF1ZW5jeSA9IDFcblxuICAgIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gMC4wMiAqIE1hdGguUEkgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KVxuXG5cblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmJhNTI5Y2I3YTQzODdjM2FkODBcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5Iiwib3BhY2l0eSIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwibXVsdGlwbGllciIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImNyZWF0ZUJvdW5kcyIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidXBkYXRlIiwicm90YXRpb24iLCJ6IiwiTWF0aCIsIlBJIiwic2luIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9