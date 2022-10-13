/*! For license information please see main.4b5d2e24573b9e03ff49.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),o=s("./app/classes/Detection.js"),n=s("./app/shaders/plane-fragment.glsl"),d=s("./app/shaders/plane-vertex.glsl"),r=s("./node_modules/console-browserify/index.js");const u=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds()}createTexture(){const e=this.element.querySelector("img");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:n.default,vertex:d.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const e=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=e,this.mesh.scale.y+=e}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight;o.default.isPhone();r.log(o.default.isPhone()),this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(e){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"1483ee26ee8a07973fc0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTdkMsR0FDakJGLEtBQUtELE1BQU11QyxNQUFRLEVBQUl0QyxLQUFLc0IsS0FBS3VCLE1BQU0zQyxFQUFJLEVBQUlGLEtBQUtFLEVBQUlGLEtBQUtELE1BQU11QyxNQUFRdEMsS0FBS0MsS0FDbEYsQ0FDRDRCLFFBQVExQixFQUFJLEdBQ1hILEtBQUtHLEdBQUtILEtBQUt5QixPQUFPdUIsSUFBTTdDLEdBQUtRLE9BQU9nQyxZQUUxQk0sRUFBQUEsUUFBQUEsVUFFZEMsRUFBUUMsSUFBSUYsRUFBQUEsUUFBQUEsV0FFWmpELEtBQUtzQixLQUFLbUIsU0FBU3RDLEVBQ2xCSCxLQUFLRCxNQUFNMkMsT0FBUyxFQUFJMUMsS0FBS3NCLEtBQUt1QixNQUFNMUMsRUFBSSxFQUFJSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNMkMsT0FFckUxQyxLQUFLc0IsS0FBS21CLFNBQVN0QyxHQUNvRCxHQUF0RW9DLEtBQUthLElBQUtwRCxLQUFLc0IsS0FBS21CLFNBQVN2QyxFQUFJRixLQUFLRCxNQUFNdUMsTUFBU0MsS0FBS0MsR0FBSyxJQUFZLEVBQzVFLENBRURhLE9BQU9uQixHQUNEbEMsS0FBS3lCLFNBRVZ6QixLQUFLbUMsaUJBQ0xuQyxLQUFLMkIsY0FDTDNCLEtBQUs0QixRQUFRTSxHQUNibEMsS0FBSzZCLFFBQVEsR0FDYixrQkNySkZ5QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnY2xhc3Nlcy9EZXRlY3Rpb24nXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcygpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpXG5cblx0XHR0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmV4dHJhID0gMFxuXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGVSb3RhdGlvbigpIHtcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHR0aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdE1hdGguUEkgKiAwLjEsXG5cdFx0XHQtTWF0aC5QSSAqIDAuMSxcblx0XHRcdHRoaXMubWVzaC5wb3NpdGlvbi54XG5cdFx0KVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXG5cdFx0Y29uc3Qgc2NhbGUgPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxuXHRcdFx0MCxcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0MC4xLFxuXHRcdFx0MCxcblx0XHRcdE1hdGguYWJzKHRoaXMubWVzaC5wb3NpdGlvbi54KVxuXHRcdClcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ICs9IHNjYWxlXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgKz0gc2NhbGVcblx0fVxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdGNvbnN0IGV4dHJhID0gRGV0ZWN0aW9uLmlzUGhvbmUoKSA/IDE1IDogNDBcblxuXHRcdGNvbnNvbGUubG9nKERldGVjdGlvbi5pc1Bob25lKCkpXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgKz1cblx0XHRcdE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiA0MCAtIDQwXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVJvdGF0aW9uKClcblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxNDgzZWUyNmVlOGEwNzk3M2ZjMFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsInVwZGF0ZVJvdGF0aW9uIiwicm90YXRpb24iLCJ6Iiwid2lkdGgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwiYWJzIiwibGVmdCIsInRvcCIsIkRldGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb3MiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=