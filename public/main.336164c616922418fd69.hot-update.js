/*! For license information please see main.336164c616922418fd69.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e),this.updateY())}}}},(function(e){e.h=()=>"f82cfdd1d97f1ad3ab98"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLbUIsU0FBUzNDLEVBQ2xCSCxLQUFLRCxNQUFNMkMsT0FBUyxFQUFJMUMsS0FBSzJCLEtBQUtpQixNQUFNekMsRUFBSSxFQUFJSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNMkMsT0FBUzFDLEtBQUtDLE1BQU1FLENBQ3pGLENBRUQ2QyxPQUFPVCxHQUNEdkMsS0FBSzhCLFNBRVY5QixLQUFLaUMsUUFBUU0sR0FDYnZDLEtBQUtrQyxVQUNMLGtCQ2hJRmUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5vcGFjaXR5ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoeyBzaXplczogdGhpcy5zaXplcyB9KVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cdFx0dGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmODJjZmRkMWQ5N2YxYWQzYWI5OFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJvcGFjaXR5IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJtdWx0aXBsaWVyIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9