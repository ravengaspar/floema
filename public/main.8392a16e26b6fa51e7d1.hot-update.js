/*! For license information please see main.8392a16e26b6fa51e7d1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>u});var i=e("./node_modules/ogl/src/core/Program.js"),h=e("./node_modules/ogl/src/core/Mesh.js"),a=e("./node_modules/gsap/index.js"),o=e("./app/classes/Detection.js"),n=e("./app/shaders/plane-fragment.glsl"),d=e("./app/shaders/plane-vertex.glsl"),r=e("./node_modules/console-browserify/index.js");const u=class{constructor({element:s,geometry:t,gl:e,index:i,scene:h,sizes:a}){this.element=s,this.geometry=t,this.gl=e,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const s=this.element.querySelector("img");this.texture=window.TEXTURES[s.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:n.default,vertex:d.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:s}){this.sizes=s,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(s,t){this.extra=0,this.createBounds(s),this.updateX(t),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const s=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=s,this.mesh.scale.y+=s}updateX(s=0){this.x=(this.bounds.left+s)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(s=0){this.y=(this.bounds.top+s)/window.innerHeight;const t=o.default.isPhone()?15:40;r.log(t),this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=10*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-10}update(s){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(s),this.updateY(0))}}}},(function(s){s.h=()=>"373a5911ef5cedd7d669"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T2lDLFdBRXpDNUMsS0FBS3NCLEtBQUttQixTQUFTdkMsR0FDakJGLEtBQUtELE1BQU11QyxNQUFRLEVBQUl0QyxLQUFLc0IsS0FBS3VCLE1BQU0zQyxFQUFJLEVBQUlGLEtBQUtFLEVBQUlGLEtBQUtELE1BQU11QyxNQUFRdEMsS0FBS0MsS0FDbEYsQ0FDRDRCLFFBQVExQixFQUFJLEdBQ1hILEtBQUtHLEdBQUtILEtBQUt5QixPQUFPdUIsSUFBTTdDLEdBQUtRLE9BQU9nQyxZQUV4QyxNQUFNMUMsRUFBUWdELEVBQUFBLFFBQUFBLFVBQXNCLEdBQUssR0FFekNDLEVBQVFDLElBQUlsRCxHQUVaRCxLQUFLc0IsS0FBS21CLFNBQVN0QyxFQUNsQkgsS0FBS0QsTUFBTTJDLE9BQVMsRUFBSTFDLEtBQUtzQixLQUFLdUIsTUFBTTFDLEVBQUksRUFBSUgsS0FBS0csRUFBSUgsS0FBS0QsTUFBTTJDLE9BRXJFMUMsS0FBS3NCLEtBQUttQixTQUFTdEMsR0FDb0QsR0FBdEVvQyxLQUFLYSxJQUFLcEQsS0FBS3NCLEtBQUttQixTQUFTdkMsRUFBSUYsS0FBS0QsTUFBTXVDLE1BQVNDLEtBQUtDLEdBQUssSUFBWSxFQUM1RSxDQUVEYSxPQUFPbkIsR0FDRGxDLEtBQUt5QixTQUVWekIsS0FBS21DLGlCQUNMbkMsS0FBSzJCLGNBQ0wzQixLQUFLNEIsUUFBUU0sR0FDYmxDLEtBQUs2QixRQUFRLEdBQ2Isa0JDdkpGeUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJ2NsYXNzZXMvRGV0ZWN0aW9uJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoe1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZVJvdGF0aW9uKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0TWF0aC5QSSAqIDAuMSxcblx0XHRcdC1NYXRoLlBJICogMC4xLFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnhcblx0XHQpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblx0XHRjb25zdCBzY2FsZSA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHQwLjEsXG5cdFx0XHQwLFxuXHRcdFx0TWF0aC5hYnModGhpcy5tZXNoLnBvc2l0aW9uLngpXG5cdFx0KVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcblx0XHR0aGlzLm1lc2guc2NhbGUueSArPSBzY2FsZVxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0Y29uc3QgZXh0cmEgPSBEZXRlY3Rpb24uaXNQaG9uZSgpID8gMTUgOiA0MFxuXG5cdFx0Y29uc29sZS5sb2coZXh0cmEpXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgKz1cblx0XHRcdE1hdGguY29zKCh0aGlzLm1lc2gucG9zaXRpb24ueCAvIHRoaXMuc2l6ZXMud2lkdGgpICogTWF0aC5QSSAqIDAuMSkgKiAxMCAtIDEwXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVJvdGF0aW9uKClcblx0XHR0aGlzLnVwZGF0ZVNjYWxlKClcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzNzNhNTkxMWVmNWNlZGQ3ZDY2OVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsInVwZGF0ZVJvdGF0aW9uIiwicm90YXRpb24iLCJ6Iiwid2lkdGgiLCJNYXRoIiwiUEkiLCJwb3NpdGlvbiIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInNjYWxlIiwiYWJzIiwibGVmdCIsInRvcCIsIkRldGVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjb3MiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=