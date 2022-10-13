/*! For license information please see main.c61b24890b833c912c00.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,r,s)=>{s.r(r)},"./app/components/Canvas/index.js":(e,r,s)=>{s.r(r),s.d(r,{default:()=>o});var n=s("./node_modules/ogl/src/core/Renderer.js"),a=s("./node_modules/ogl/src/core/Camera.js"),t=s("./node_modules/ogl/src/core/Transform.js"),i=s("./app/components/Canvas/Home.js");s("./app/shaders/plane-vertex.glsl"),s("./app/shaders/plane-fragment.glsl");class o{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new n.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new a.Camera(this.gl),this.camera.position.z=5}createCube(){this.home=new i.default}createScene(){this.scene=new t.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"b208df699bd48d0ee990"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNjFiMjQ4OTBiODMzYzkxMmMwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OGJBTWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUNMLENBRURILGlCQUNDRCxLQUFLSyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTixLQUFLTyxHQUFLUCxLQUFLSyxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVYsS0FBS08sR0FBR0ksT0FDbEMsQ0FFRFQsZUFDQ0YsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTyxJQUM5QlAsS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDSixLQUFLZ0IsS0FBTyxJQUFJQyxFQUFBQSxPQUNoQixDQUVEZCxjQUNDSCxLQUFLa0IsTUFBUSxJQUFJQyxFQUFBQSxTQUNqQixDQUVEQyxXQUNDcEIsS0FBS0ssU0FBU2dCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEeEIsS0FBS1ksT0FBT2EsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsQ0FFREcsU0FDQzNCLEtBQUs0QixLQUFLQyxTQUFTQyxHQUFLLElBQ3hCOUIsS0FBSzRCLEtBQUtDLFNBQVNFLEdBQUssSUFFeEIvQixLQUFLSyxTQUFTMkIsT0FBTyxDQUNwQnBCLE9BQVFaLEtBQUtZLE9BQ2JNLE1BQU9sQixLQUFLa0IsT0FFYixrQkNuREZlLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblx0XHR0aGlzLmNyZWF0ZUN1YmUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlQ3ViZSgpIHtcblx0XHR0aGlzLmhvbWUgPSBuZXcgSG9tZSgpXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxXG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnkgKz0gMC4wMVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImIyMDhkZjY5OWJkNDhkMGVlOTkwXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJjcmVhdGVDdWJlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwiVHJhbnNmb3JtIiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJ1cGRhdGUiLCJtZXNoIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==