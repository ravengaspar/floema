/*! For license information please see main.188793dd59ce0f366caf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,s)=>{s.r(r),s.d(r,{default:()=>h});var t=s("./node_modules/ogl/src/core/Renderer.js"),n=s("./node_modules/ogl/src/core/Camera.js"),i=s("./node_modules/ogl/src/extras/Box.js"),o=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),c=s("./node_modules/ogl/src/core/Transform.js");class h{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new t.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new n.Camera(this.gl),this.camera.position.z=5}createCube(){this.geometry=new i.Box(this.gl),this.program=new o.Program(this.gl,{vertex:"\n\n        }\n      ",fragment:"\n       \n      "}),this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createScene(){this.scene=new c.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"c136085e4c96b5a34619"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODg3OTNkZDU5Y2UwZjM2NmNhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFpBRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUNMLENBRURILGlCQUNDRCxLQUFLSyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTixLQUFLTyxHQUFLUCxLQUFLSyxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVYsS0FBS08sR0FBR0ksT0FDbEMsQ0FFRFQsZUFDQ0YsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTyxJQUM5QlAsS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDSixLQUFLZ0IsU0FBVyxJQUFJQyxFQUFBQSxJQUFJakIsS0FBS08sSUFFN0JQLEtBQUtrQixRQUFVLElBQUlDLEVBQUFBLFFBQVFuQixLQUFLTyxHQUFJLENBQ25DYSxPQUFTLHdCQUlUQyxTQUFXLHNCQUtackIsS0FBS3NCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3ZCLEtBQUtPLEdBQUksQ0FDN0JTLFNBQVVoQixLQUFLZ0IsU0FDZkUsUUFBU2xCLEtBQUtrQixVQUdmbEIsS0FBS3NCLEtBQUtFLFVBQVV4QixLQUFLeUIsTUFDekIsQ0FFRHRCLGNBQ0NILEtBQUt5QixNQUFRLElBQUlDLEVBQUFBLFNBQ2pCLENBRURDLFdBQ0MzQixLQUFLSyxTQUFTdUIsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaEQvQixLQUFLWSxPQUFPb0IsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsQ0FFREcsU0FDQ2xDLEtBQUtzQixLQUFLYSxTQUFTQyxHQUFLLElBQ3hCcEMsS0FBS3NCLEtBQUthLFNBQVNFLEdBQUssSUFFeEJyQyxLQUFLSyxTQUFTaUMsT0FBTyxDQUNwQjFCLE9BQVFaLEtBQUtZLE9BQ2JhLE1BQU96QixLQUFLeUIsT0FFYixrQkNoRUZjLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblx0XHR0aGlzLmNyZWF0ZUN1YmUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlQ3ViZSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuXG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0dmVydGV4OiBgXG5cbiAgICAgICAgfVxuICAgICAgYCxcblx0XHRcdGZyYWdtZW50OiBgXG4gICAgICAgXG4gICAgICBgLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5tZXNoLnJvdGF0aW9uLnggKz0gMC4wMVxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi55ICs9IDAuMDFcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMTM2MDg1ZTRjOTZiNWEzNDYxOVwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiZ2VvbWV0cnkiLCJCb3giLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJzY2VuZSIsIlRyYW5zZm9ybSIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==