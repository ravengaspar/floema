/*! For license information please see main.374b7889e49b071a58fb.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,s)=>{s.r(r),s.d(r,{default:()=>c});var a=s("./node_modules/ogl/src/core/Renderer.js"),n=s("./node_modules/ogl/src/core/Camera.js"),t=s("./node_modules/ogl/src/core/Transform.js"),i=s("./app/components/Canvas/Home.js");s("./app/components/Canvas/Media.js"),s("./app/shaders/plane-vertex.glsl"),s("./app/shaders/plane-fragment.glsl");class c{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new a.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new n.Camera(this.gl),this.camera.position.z=5}createCube(){this.home=new i.default}createScene(){this.scene=new t.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"86f591e4f3ec70ccdf96"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zNzRiNzg4OWU0OWIwNzFhNThmYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Z2JBUWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUNMLENBRURILGlCQUNDRCxLQUFLSyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTixLQUFLTyxHQUFLUCxLQUFLSyxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVYsS0FBS08sR0FBR0ksT0FDbEMsQ0FFRFQsZUFDQ0YsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTyxJQUM5QlAsS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDSixLQUFLZ0IsS0FBTyxJQUFJQyxFQUFBQSxPQUNoQixDQUVEZCxjQUNDSCxLQUFLa0IsTUFBUSxJQUFJQyxFQUFBQSxTQUNqQixDQUVEQyxXQUNDcEIsS0FBS0ssU0FBU2dCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEeEIsS0FBS1ksT0FBT2EsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsQ0FFREcsU0FDQzNCLEtBQUs0QixLQUFLQyxTQUFTQyxHQUFLLElBQ3hCOUIsS0FBSzRCLEtBQUtDLFNBQVNFLEdBQUssSUFFeEIvQixLQUFLSyxTQUFTMkIsT0FBTyxDQUNwQnBCLE9BQVFaLEtBQUtZLE9BQ2JNLE1BQU9sQixLQUFLa0IsT0FFYixrQkNyREZlLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXHRcdHRoaXMuY3JlYXRlQ3ViZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVDdWJlKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKClcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODZmNTkxZTRmM2VjNzBjY2RmOTZcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUN1YmUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsImhvbWUiLCJIb21lIiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsIm1lc2giLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9