/*! For license information please see main.0ff64bfc8c404950cc09.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh()}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2}createBounds({sizes:e}){this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale({height:e,width:t}){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=t*this.width,this.mesh.scale.y=e*this.height,this.x=this.bounds.left/window.innerWidth,this.y=this.bounds.height/window.innerHeight,this.mesh.position.x=-t/2+this.mesh.scale.x/2+this.x*t,this.mesh.position.y=e/2-this.mesh.scale.y/2+this.y*e}updateX(){}updateY(){}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"3099bdaec7cfeae21677"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZmY2NGJmYzhjNDA0OTUwY2MwOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1dBS0EsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLTCxTQUFXQSxFQUNoQkssS0FBS0osR0FBS0EsRUFDVkksS0FBS0YsTUFBUUEsRUFDYkUsS0FBS0gsTUFBUUEsRUFDYkcsS0FBS0QsTUFBUUEsRUFFYkMsS0FBS0MsZ0JBQ0xELEtBQUtFLGdCQUNMRixLQUFLRyxZQUNMLENBRURGLGdCQUNDRCxLQUFLSSxRQUFVLElBQUlDLEVBQUFBLFFBQVFMLEtBQUtKLElBRWhDSSxLQUFLTSxNQUFRLElBQUlDLE9BQU9DLE1BQ3hCUixLQUFLTSxNQUFNRyxZQUFjLFlBQ3pCVCxLQUFLTSxNQUFNSSxJQUFNVixLQUFLTixRQUFRaUIsYUFBYSxZQUMzQ1gsS0FBS00sTUFBTU0sT0FBU0MsR0FBTWIsS0FBS0ksUUFBUUUsTUFBUU4sS0FBS00sS0FDcEQsQ0FFREosZ0JBQ0NGLEtBQUtjLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWYsS0FBS0osR0FBSSxDQUNuQ29CLFNBRG1DLFVBRW5DQyxPQUZtQyxVQUduQ0MsU0FBVSxDQUNUQyxLQUFNLENBQUVDLE1BQU9wQixLQUFLSSxXQUd0QixDQUVERCxhQUNDSCxLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS0osR0FBSSxDQUM3QkQsU0FBVUssS0FBS0wsU0FDZm1CLFFBQVNkLEtBQUtjLFVBR2ZkLEtBQUtxQixLQUFLRSxVQUFVdkIsS0FBS0YsT0FFekJFLEtBQUtxQixLQUFLRyxNQUFNQyxFQUFJLENBQ3BCLENBRURDLGNBQWEsTUFBRTNCLElBQ2RDLEtBQUsyQixPQUFTM0IsS0FBS04sUUFBUWtDLHdCQUUzQjVCLEtBQUs2QixZQUFZOUIsR0FDakJDLEtBQUs4QixVQUNMOUIsS0FBSytCLFNBQ0wsQ0FFREYsYUFBWSxPQUFFRyxFQUFGLE1BQVVDLElBQ3JCakMsS0FBS2lDLE1BQVFqQyxLQUFLMkIsT0FBT00sTUFBUTFCLE9BQU8yQixXQUN4Q2xDLEtBQUtnQyxPQUFTaEMsS0FBSzJCLE9BQU9LLE9BQVN6QixPQUFPNEIsWUFFMUNuQyxLQUFLcUIsS0FBS0csTUFBTUMsRUFBSVEsRUFBUWpDLEtBQUtpQyxNQUNqQ2pDLEtBQUtxQixLQUFLRyxNQUFNWSxFQUFJSixFQUFTaEMsS0FBS2dDLE9BRWxDaEMsS0FBS3lCLEVBQUl6QixLQUFLMkIsT0FBT1UsS0FBTzlCLE9BQU8yQixXQUNuQ2xDLEtBQUtvQyxFQUFJcEMsS0FBSzJCLE9BQU9LLE9BQVN6QixPQUFPNEIsWUFFckNuQyxLQUFLcUIsS0FBS2lCLFNBQVNiLEdBQUtRLEVBQVEsRUFBSWpDLEtBQUtxQixLQUFLRyxNQUFNQyxFQUFJLEVBQUl6QixLQUFLeUIsRUFBSVEsRUFDckVqQyxLQUFLcUIsS0FBS2lCLFNBQVNGLEVBQUlKLEVBQVMsRUFBSWhDLEtBQUtxQixLQUFLRyxNQUFNWSxFQUFJLEVBQUlwQyxLQUFLb0MsRUFBSUosQ0FDckUsQ0FDREYsVUFBWSxDQUNaQyxVQUFZLENBRVpRLFNBQVN4QyxHQUNSQyxLQUFLMEIsYUFBYTNCLEVBQ2xCLGtCQzNFRnlDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSAyXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoeyBoZWlnaHQsIHdpZHRoIH0pIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHdpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gaGVpZ2h0ICogdGhpcy5oZWlnaHRcblxuXHRcdHRoaXMueCA9IHRoaXMuYm91bmRzLmxlZnQgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMueSA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPSAtd2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogd2lkdGhcblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9IGhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgKyB0aGlzLnkgKiBoZWlnaHRcblx0fVxuXHR1cGRhdGVYKCkge31cblx0dXBkYXRlWSgpIHt9XG5cblx0b25SZXNpemUoc2l6ZXMpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzA5OWJkYWVjN2NmZWFlMjE2NzdcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsImltYWdlIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInNjYWxlIiwieCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJoZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInkiLCJsZWZ0IiwicG9zaXRpb24iLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==