/*! For license information please see main.d3d198478631ff169db2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const d=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateRotation(){this.mesh.rotation.z=o.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height,this.mesh.scale.x-=o.default.utils.mapRange()}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height,this.mesh.position.y+=40*Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)-40}update(e){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"048feed84b09c2483ce2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLMEIsS0FBS29CLFNBQVM1QyxHQUNqQkYsS0FBS0QsTUFBTTRDLE1BQVEsRUFBSTNDLEtBQUswQixLQUFLd0IsTUFBTWhELEVBQUksRUFBSUYsS0FBS0UsRUFBSUYsS0FBS0QsTUFBTTRDLE1BQVEzQyxLQUFLQyxLQUNsRixDQUNEaUMsUUFBUS9CLEVBQUksR0FDWEgsS0FBS0csR0FBS0gsS0FBSzhCLE9BQU9zQixJQUFNakQsR0FBS1EsT0FBT3FDLFlBRXhDaEQsS0FBSzBCLEtBQUtvQixTQUFTM0MsRUFDbEJILEtBQUtELE1BQU1nRCxPQUFTLEVBQUkvQyxLQUFLMEIsS0FBS3dCLE1BQU0vQyxFQUFJLEVBQUlILEtBQUtHLEVBQUlILEtBQUtELE1BQU1nRCxPQUVyRS9DLEtBQUswQixLQUFLb0IsU0FBUzNDLEdBQ29ELEdBQXRFeUMsS0FBS1MsSUFBS3JELEtBQUswQixLQUFLb0IsU0FBUzVDLEVBQUlGLEtBQUtELE1BQU00QyxNQUFTQyxLQUFLQyxHQUFLLElBQVksRUFDNUUsQ0FFRFMsT0FBT2YsR0FDRHZDLEtBQUs4QixTQUVWOUIsS0FBS3dDLGlCQUNMeEMsS0FBS2dDLGNBQ0xoQyxLQUFLaUMsUUFBUU0sR0FDYnZDLEtBQUtrQyxRQUFRLEdBQ2Isa0JDOUlGcUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHR0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IDBcblxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cblxuXHQvKiBMb29wICovXG5cblx0dXBkYXRlUm90YXRpb24oKSB7XG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLm1hcFJhbmdlKFxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHRNYXRoLlBJICogMC4xLFxuXHRcdFx0LU1hdGguUEkgKiAwLjEsXG5cdFx0XHR0aGlzLm1lc2gucG9zaXRpb24ueFxuXHRcdClcblx0fVxuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblxuXG4gICAgdGhpcy5tZXNoLnNjYWxlLnggLT0gR1NBUC51dGlscy5tYXBSYW5nZShcblxuICAgIClcblxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ICs9XG5cdFx0XHRNYXRoLmNvcygodGhpcy5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLnNpemVzLndpZHRoKSAqIE1hdGguUEkgKiAwLjEpICogNDAgLSA0MFxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVSb3RhdGlvbigpXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDQ4ZmVlZDg0YjA5YzI0ODNjZTJcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwidGV4dHVyZSIsIlRleHR1cmUiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInoiLCJ3aWR0aCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJsZWZ0IiwidG9wIiwiY29zIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9