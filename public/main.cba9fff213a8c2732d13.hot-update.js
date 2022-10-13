/*! For license information please see main.cba9fff213a8c2732d13.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/Media.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/collections-fragment.glsl"),o=s("./app/shaders/collections-vertex.glsl");const n=class{constructor({element:t,geometry:e,gl:s,index:i,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=s,this.index=i,this.scene=h,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:o.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX()}show(){i.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){i.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){this.updateX(t);this.mesh.rotation.z=-.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=e===this.index?1:.4,this.opacity.current=i.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier,this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}}},(function(t){t.h=()=>"f4103843c6c34b58e34a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BSC9CLEdBS2xCRyxLQUFLSSxRQUFRRSxPQUFTVCxJQUFVRyxLQUFLSCxNQUFRLEVBQUksR0FDakRHLEtBQUtJLFFBQVFDLFFBQVU4QixFQUFBQSxRQUFBQSxNQUFBQSxZQUN0Qm5DLEtBQUtJLFFBQVFDLFFBQ2JMLEtBQUtJLFFBQVFFLE9BQ2JOLEtBQUtJLFFBQVFHLE1BR2RQLEtBQUttQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRekIsS0FBS0ksUUFBUUksV0FDbERSLEtBQUttQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRekIsS0FBS0ksUUFBUUksV0FBYVIsS0FBS0ksUUFBUUMsT0FDNUUsa0JDNUlGK0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9jb2xsZWN0aW9ucy1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL2NvbGxlY3Rpb25zLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5vcGFjaXR5ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoe1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJyApOyAvLyBwcmV0dGllci1pZ25vcmVcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0aW9ucy5cblx0ICovXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLm9wYWNpdHksXG5cdFx0XHR7XG5cdFx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtdWx0aXBsaWVyOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLm9wYWNpdHksIHtcblx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qKlxuXHQgKiBFdmVudHMuXG5cdCAqL1xuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgJiYgc2Nyb2xsLngpXG5cdH1cblxuXHQvKipcblx0ICogTG9vcC5cblx0ICovXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwsIGluZGV4KSB7XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblxuXHRcdGNvbnN0IGFtcGxpdHVkZSA9IDAuMVxuXHRcdGNvbnN0IGZyZXF1ZW5jeSA9IDFcblxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gLTAuMDIgKiBNYXRoLlBJICogTWF0aC5zaW4odGhpcy5pbmRleCAvIGZyZXF1ZW5jeSlcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IGFtcGxpdHVkZSAqIE1hdGguc2luKHRoaXMuaW5kZXggLyBmcmVxdWVuY3kpXG5cblx0XHR0aGlzLm9wYWNpdHkudGFyZ2V0ID0gaW5kZXggPT09IHRoaXMuaW5kZXggPyAxIDogMC40XG5cdFx0dGhpcy5vcGFjaXR5LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5vcGFjaXR5LmN1cnJlbnQsXG5cdFx0XHR0aGlzLm9wYWNpdHkudGFyZ2V0LFxuXHRcdFx0dGhpcy5vcGFjaXR5LmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5Lm11bHRpcGxpZXJcblx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLnZhbHVlID0gdGhpcy5vcGFjaXR5Lm11bHRpcGxpZXIgKiB0aGlzLm9wYWNpdHkuY3VycmVudDsgLy8gcHJldHRpZXItaWdub3JlXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY0MTAzODQzYzZjMzRiNThlMzRhXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsIm9wYWNpdHkiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsIm11bHRpcGxpZXIiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInVwZGF0ZSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsInNpbiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==