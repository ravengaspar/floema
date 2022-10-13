/*! For license information please see main.fb20911d4f15bfb0fa47.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>d});var s=n("./node_modules/ogl/src/core/Renderer.js"),t=n("./node_modules/ogl/src/core/Camera.js"),i=n("./node_modules/ogl/src/extras/Box.js"),o=n("./node_modules/ogl/src/core/Program.js"),a=n("./node_modules/ogl/src/core/Mesh.js"),c=n("./node_modules/ogl/src/core/Transform.js");class d{constructor(){this.createRenderer(),this.createScene(),this.createCube()}createRenderer(){this.renderer=new s.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new t.Camera(this.gl),this.camera.position.z=5}createCube(){this.geometry=new i.Box(this.gl),this.program=new o.Program(this.gl,{vertex:"\n        attribute vec3 position;\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n\n        void main() {\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n        }\n      ",fragment:"\n        void main() {\n            gl_FragColor = vec4(1.0);\n        }\n      "}),this.mesh=new a.Mesh(this.gl,this.geometry,this.program),this.mesh.setParent(this.scene)}createScene(){this.scene=new c.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"eea26a9870bd3e975db6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYjIwOTExZDRmMTViZmIwZmE0Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFpBRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxjQUNMRixLQUFLRyxZQUNMLENBRURGLGlCQUNDRCxLQUFLSSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTCxLQUFLTSxHQUFLTixLQUFLSSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVQsS0FBS00sR0FBR0ksT0FDbEMsQ0FFREMsZUFDQ1gsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTSxJQUM5Qk4sS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWixhQUNDSCxLQUFLZ0IsU0FBVyxJQUFJQyxFQUFBQSxJQUFJakIsS0FBS00sSUFFN0JOLEtBQUtrQixRQUFVLElBQUlDLEVBQUFBLFFBQVFuQixLQUFLTSxHQUFJLENBQ25DYyxPQUFTLHlQQVdUQyxTQUFXLHNGQU9ackIsS0FBS3NCLEtBQU8sSUFBSUMsRUFBQUEsS0FBS3ZCLEtBQUtNLEdBQUlOLEtBQUtnQixTQUFVaEIsS0FBS2tCLFNBRWxEbEIsS0FBS3NCLEtBQUtFLFVBQVV4QixLQUFLeUIsTUFDekIsQ0FFRHZCLGNBQ0NGLEtBQUt5QixNQUFRLElBQUlDLEVBQUFBLFNBQ2pCLENBRURDLFdBQ0MzQixLQUFLSSxTQUFTd0IsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaEQvQixLQUFLWSxPQUFPb0IsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsQ0FFREcsU0FDQ2xDLEtBQUtJLFNBQVMrQixPQUFPLENBQ3BCdkIsT0FBUVosS0FBS1ksT0FDYmEsTUFBT3pCLEtBQUt5QixPQUViLGtCQ2xFRlcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cdFx0dGhpcy5jcmVhdGVDdWJlKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUN1YmUoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBCb3godGhpcy5nbClcblxuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdHZlcnRleDogYFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuXG4gICAgICAgIH1cbiAgICAgIGAsXG5cdFx0XHRmcmFnbWVudDogYFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCk7XG4gICAgICAgIH1cbiAgICAgIGAsXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHRoaXMuZ2VvbWV0cnksIHRoaXMucHJvZ3JhbSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlZWEyNmE5ODcwYmQzZTk3NWRiNlwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY3JlYXRlQ2FtZXJhIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiZ2VvbWV0cnkiLCJCb3giLCJwcm9ncmFtIiwiUHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJzY2VuZSIsIlRyYW5zZm9ybSIsIm9uUmVzaXplIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwidXBkYXRlIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9