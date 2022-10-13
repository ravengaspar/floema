/*! For license information please see main.09bb141ff14ee950c1d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/collections-fragment.glsl":(t,e,i)=>{i.r(e),i.d(e,{default:()=>s});const s="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec4 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n\n  gl_FragColor = texture;\n  gl_FragColor.a = (1.0 - (vPosition.x / 10)) * uAlpha;\n}\n"},"./app/components/Canvas/Collections/Media.js":(t,e,i)=>{i.r(e),i.d(e,{default:()=>o});var s=i("./node_modules/ogl/src/core/Program.js"),h=i("./node_modules/ogl/src/core/Mesh.js"),a=i("./node_modules/gsap/index.js"),r=i("./app/shaders/collections-fragment.glsl"),n=i("./app/shaders/collections-vertex.glsl");const o=class{constructor({element:t,geometry:e,gl:i,index:s,scene:h,sizes:a}){this.element=t,this.geometry=e,this.gl=i,this.scene=h,this.index=s,this.sizes=a,this.extra={x:0,y:0},this.opacity={current:0,target:0,lerp:.1,multiplier:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const t=this.element.querySelector(".collections__gallery__media__image");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new s.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(t),this.updateX()}show(){a.default.fromTo(this.opacity,{multiplier:0},{multiplier:1})}hide(){a.default.to(this.opacity,{multiplier:0})}onResize(t,e){this.extra={x:0,y:0},this.createBounds(t),this.updateX(e&&e.x)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}update(t,e){if(!this.bounds)return;this.updateX(t);this.mesh.rotation.z=.02*Math.PI*Math.sin(this.index/1),this.mesh.position.y=.1*Math.sin(this.index/1),this.opacity.target=e===this.index?1:.4,this.opacity.current=a.default.utils.interpolate(this.opacity.current,this.opacity.target,this.opacity.lerp),this.program.uniforms.uAlpha.value=this.opacity.multiplier,this.program.uniforms.uAlpha.value=this.opacity.multiplier*this.opacity.current}}}},(function(t){t.h=()=>"b4db9b0e27779023c11a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMxQyxFQUpELEdBSWlCOEMsS0FBS0UsSUFBSW5ELEtBQUtILE1BSC9CLEdBS2xCRyxLQUFLSSxRQUFRRSxPQUFTVCxJQUFVRyxLQUFLSCxNQUFRLEVBQUksR0FDakRHLEtBQUtJLFFBQVFDLFFBQVU4QixFQUFBQSxRQUFBQSxNQUFBQSxZQUN0Qm5DLEtBQUtJLFFBQVFDLFFBQ2JMLEtBQUtJLFFBQVFFLE9BQ2JOLEtBQUtJLFFBQVFHLE1BR2RQLEtBQUttQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRekIsS0FBS0ksUUFBUUksV0FDbERSLEtBQUttQixRQUFRSSxTQUFTQyxPQUFPQyxNQUFRekIsS0FBS0ksUUFBUUksV0FBYVIsS0FBS0ksUUFBUUMsT0FDNUUsa0JDdklGK0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9zaGFkZXJzL2NvbGxlY3Rpb25zLWZyYWdtZW50Lmdsc2wiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjNCB2UG9zaXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IHRleHR1cmU7XFxuICBnbF9GcmFnQ29sb3IuYSA9ICgxLjAgLSAodlBvc2l0aW9uLnggLyAxMCkpICogdUFscGhhO1xcbn1cXG5cIjsiLCJpbXBvcnQgeyBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvY29sbGVjdGlvbnMtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9jb2xsZWN0aW9ucy12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMub3BhY2l0eSA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHQvLyB0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLm9wYWNpdHksXG5cdFx0XHR7XG5cdFx0XHRcdG11bHRpcGxpZXI6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRtdWx0aXBsaWVyOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5vcGFjaXR5LCB7XG5cdFx0XHRtdWx0aXBsaWVyOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KVxuXHR9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsLCBpbmRleCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblxuXHRcdGNvbnN0IGFtcGxpdHVkZSA9IDAuMVxuXHRcdGNvbnN0IGZyZXF1ZW5jeSA9IDFcblxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gMC4wMiAqIE1hdGguUEkgKiBNYXRoLnNpbih0aGlzLmluZGV4IC8gZnJlcXVlbmN5KVxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID0gYW1wbGl0dWRlICogTWF0aC5zaW4odGhpcy5pbmRleCAvIGZyZXF1ZW5jeSlcblxuXHRcdHRoaXMub3BhY2l0eS50YXJnZXQgPSBpbmRleCA9PT0gdGhpcy5pbmRleCA/IDEgOiAwLjRcblx0XHR0aGlzLm9wYWNpdHkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLm9wYWNpdHkuY3VycmVudCxcblx0XHRcdHRoaXMub3BhY2l0eS50YXJnZXQsXG5cdFx0XHR0aGlzLm9wYWNpdHkubGVycFxuXHRcdClcblxuXHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEudmFsdWUgPSB0aGlzLm9wYWNpdHkubXVsdGlwbGllclxuXHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEudmFsdWUgPSB0aGlzLm9wYWNpdHkubXVsdGlwbGllciAqIHRoaXMub3BhY2l0eS5jdXJyZW50XG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI0ZGI5YjBlMjc3NzkwMjNjMTFhXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsIm9wYWNpdHkiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsIm11bHRpcGxpZXIiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwid2lkdGgiLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInVwZGF0ZSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsInNpbiIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==