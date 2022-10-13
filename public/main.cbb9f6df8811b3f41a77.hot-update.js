/*! For license information please see main.cbb9f6df8811b3f41a77.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/About/Media.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});var i=e("./node_modules/ogl/src/core/Program.js"),h=e("./node_modules/ogl/src/core/Mesh.js"),a=e("./node_modules/gsap/index.js"),o=(e("./app/classes/Detection.js"),e("./app/shaders/plane-fragment.glsl")),n=e("./app/shaders/plane-vertex.glsl");const r=class{constructor({element:t,geometry:s,gl:e,index:i,scene:h,sizes:a}){this.element=t,this.geometry=s,this.gl=e,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){const t=this.element.querySelector("img");this.texture=window.TEXTURES[t.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:t}){this.sizes=t,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(t,s){this.extra=0,this.createBounds(t),this.updateX(s),this.updateY(0)}updateRotation(){this.mesh.rotation.z=a.default.utils.mapRange(-this.sizes.width/2,this.sizes.width/2,.1*Math.PI,.1*-Math.PI,this.mesh.position.x)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height;const t=a.default.utils.mapRange(0,this.sizes.width/2,.1,0,Math.abs(this.mesh.position.x));this.mesh.scale.x+=t,this.mesh.scale.y+=t}updateX(t=0){this.x=(this.bounds.left+t)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(t=0){this.y=(this.bounds.top+t)/window.innerHeight;const s=this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height;this.mesh.position.y+=Math.cos(this.mesh.position.x/this.sizes.width*Math.PI*.1)*s-s}update(t){this.bounds&&(this.updateRotation(),this.updateScale(),this.updateX(t),this.updateY(0))}}}},(function(t){t.h=()=>"8a13a5a508bdc4a42950"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jYmI5ZjZkZjg4MTFiM2Y0MWE3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cVhBUUEsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsTUFBUSxDQUNaQyxFQUFHLEVBQ0hDLEVBQUcsR0FHSkgsS0FBS0ksZ0JBQ0xKLEtBQUtLLGdCQUNMTCxLQUFLTSxZQUNMLENBRURGLGdCQUNDLE1BQU1HLEVBQVFQLEtBQUtOLFFBQVFjLGNBQWMsT0FFekNSLEtBQUtTLFFBQVVDLE9BQU9DLFNBQVNKLEVBQU1LLGFBQWEsWUFDbEQsQ0FFRFAsZ0JBQ0NMLEtBQUthLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWQsS0FBS0osR0FBSSxDQUNuQ21CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT25CLEtBQUtTLFdBR3RCLENBRURILGFBQ0NOLEtBQUtxQixLQUFPLElBQUlDLEVBQUFBLEtBQUt0QixLQUFLSixHQUFJLENBQzdCRCxTQUFVSyxLQUFLTCxTQUNma0IsUUFBU2IsS0FBS2EsVUFHZmIsS0FBS3FCLEtBQUtFLFVBQVV2QixLQUFLRixNQUN6QixDQUVEMEIsY0FBYSxNQUFFekIsSUFDZEMsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS3lCLE9BQVN6QixLQUFLTixRQUFRZ0Msd0JBRTNCMUIsS0FBSzJCLGNBQ0wzQixLQUFLNEIsVUFDTDVCLEtBQUs2QixTQUNMLENBSURDLE9BQ0NDLEVBQUFBLFFBQUFBLE9BQ0MvQixLQUFLYSxRQUFRSSxTQUFTQyxPQUN0QixDQUNDQyxNQUFPLEdBRVIsQ0FDQ0EsTUFBTyxHQUdULENBQ0RhLE9BQ0NELEVBQUFBLFFBQUFBLEdBQVEvQixLQUFLYSxRQUFRSSxTQUFTQyxPQUFRLENBQ3JDQyxNQUFPLEdBRVIsQ0FHRGMsU0FBU2xDLEVBQU9tQyxHQUNmbEMsS0FBS0MsTUFBUSxFQUViRCxLQUFLd0IsYUFBYXpCLEdBQ2xCQyxLQUFLNEIsUUFBUU0sR0FDYmxDLEtBQUs2QixRQUFRLEVBQ2IsQ0FJRE0saUJBQ0NuQyxLQUFLcUIsS0FBS2UsU0FBU0MsRUFBSU4sRUFBQUEsUUFBQUEsTUFBQUEsVUFDckIvQixLQUFLRCxNQUFNdUMsTUFBUSxFQUNwQnRDLEtBQUtELE1BQU11QyxNQUFRLEVBQ1QsR0FBVkMsS0FBS0MsR0FDTSxJQUFWRCxLQUFLQyxHQUNOeEMsS0FBS3FCLEtBQUtvQixTQUFTdkMsRUFFcEIsQ0FFRHlCLGNBQ0MzQixLQUFLMEMsT0FBUzFDLEtBQUt5QixPQUFPaUIsT0FBU2hDLE9BQU9pQyxZQUMxQzNDLEtBQUtzQyxNQUFRdEMsS0FBS3lCLE9BQU9hLE1BQVE1QixPQUFPa0MsV0FFeEM1QyxLQUFLcUIsS0FBS3dCLE1BQU0zQyxFQUFJRixLQUFLRCxNQUFNdUMsTUFBUXRDLEtBQUtzQyxNQUM1Q3RDLEtBQUtxQixLQUFLd0IsTUFBTTFDLEVBQUlILEtBQUtELE1BQU0yQyxPQUFTMUMsS0FBSzBDLE9BRTdDLE1BQU1HLEVBQVFkLEVBQUFBLFFBQUFBLE1BQUFBLFNBQ2IsRUFDQS9CLEtBQUtELE1BQU11QyxNQUFRLEVBQ25CLEdBQ0EsRUFDQUMsS0FBS08sSUFBSTlDLEtBQUtxQixLQUFLb0IsU0FBU3ZDLElBRzdCRixLQUFLcUIsS0FBS3dCLE1BQU0zQyxHQUFLMkMsRUFDckI3QyxLQUFLcUIsS0FBS3dCLE1BQU0xQyxHQUFLMEMsQ0FDckIsQ0FDRGpCLFFBQVExQixFQUFJLEdBQ1hGLEtBQUtFLEdBQUtGLEtBQUt5QixPQUFPc0IsS0FBTzdDLEdBQUtRLE9BQU9rQyxXQUV6QzVDLEtBQUtxQixLQUFLb0IsU0FBU3ZDLEdBQ2pCRixLQUFLRCxNQUFNdUMsTUFBUSxFQUFJdEMsS0FBS3FCLEtBQUt3QixNQUFNM0MsRUFBSSxFQUFJRixLQUFLRSxFQUFJRixLQUFLRCxNQUFNdUMsTUFBUXRDLEtBQUtDLEtBQ2xGLENBQ0Q0QixRQUFRMUIsRUFBSSxHQUNYSCxLQUFLRyxHQUFLSCxLQUFLeUIsT0FBT3VCLElBQU03QyxHQUFLTyxPQUFPaUMsWUFFeEMsTUFBTTFDLEVBRU5ELEtBQUtxQixLQUFLb0IsU0FBU3RDLEVBQ2xCSCxLQUFLRCxNQUFNMkMsT0FBUyxFQUFJMUMsS0FBS3FCLEtBQUt3QixNQUFNMUMsRUFBSSxFQUFJSCxLQUFLRyxFQUFJSCxLQUFLRCxNQUFNMkMsT0FFckUxQyxLQUFLcUIsS0FBS29CLFNBQVN0QyxHQUNsQm9DLEtBQUtVLElBQUtqRCxLQUFLcUIsS0FBS29CLFNBQVN2QyxFQUFJRixLQUFLRCxNQUFNdUMsTUFBU0MsS0FBS0MsR0FBSyxJQUFPdkMsRUFBUUEsQ0FDL0UsQ0FFRGlELE9BQU9oQixHQUNEbEMsS0FBS3lCLFNBRVZ6QixLQUFLbUMsaUJBQ0xuQyxLQUFLMkIsY0FDTDNCLEtBQUs0QixRQUFRTSxHQUNibEMsS0FBSzZCLFFBQVEsR0FDYixrQkNsSkZzQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBEZXRlY3Rpb24gZnJvbSAnY2xhc3Nlcy9EZXRlY3Rpb24nXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJylcblxuXHRcdHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZVJvdGF0aW9uKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5tYXBSYW5nZShcblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMixcblx0XHRcdHRoaXMuc2l6ZXMud2lkdGggLyAyLFxuXHRcdFx0TWF0aC5QSSAqIDAuMSxcblx0XHRcdC1NYXRoLlBJICogMC4xLFxuXHRcdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnhcblx0XHQpXG5cdH1cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cblx0XHRjb25zdCBzY2FsZSA9IEdTQVAudXRpbHMubWFwUmFuZ2UoXG5cdFx0XHQwLFxuXHRcdFx0dGhpcy5zaXplcy53aWR0aCAvIDIsXG5cdFx0XHQwLjEsXG5cdFx0XHQwLFxuXHRcdFx0TWF0aC5hYnModGhpcy5tZXNoLnBvc2l0aW9uLngpXG5cdFx0KVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggKz0gc2NhbGVcblx0XHR0aGlzLm1lc2guc2NhbGUueSArPSBzY2FsZVxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0Y29uc3QgZXh0cmEgPSBcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSArPVxuXHRcdFx0TWF0aC5jb3MoKHRoaXMubWVzaC5wb3NpdGlvbi54IC8gdGhpcy5zaXplcy53aWR0aCkgKiBNYXRoLlBJICogMC4xKSAqIGV4dHJhIC0gZXh0cmFcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlUm90YXRpb24oKVxuXHRcdHRoaXMudXBkYXRlU2NhbGUoKVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhMTNhNWE1MDhiZGM0YTQyOTUwXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZXh0cmEiLCJ4IiwieSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsImltYWdlIiwicXVlcnlTZWxlY3RvciIsInRleHR1cmUiLCJ3aW5kb3ciLCJURVhUVVJFUyIsImdldEF0dHJpYnV0ZSIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwidXBkYXRlUm90YXRpb24iLCJyb3RhdGlvbiIsInoiLCJ3aWR0aCIsIk1hdGgiLCJQSSIsInBvc2l0aW9uIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic2NhbGUiLCJhYnMiLCJsZWZ0IiwidG9wIiwiY29zIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9