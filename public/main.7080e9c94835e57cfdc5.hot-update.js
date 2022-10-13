/*! For license information please see main.7080e9c94835e57cfdc5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>d});var s=n("./node_modules/ogl/src/core/Renderer.js"),i=n("./node_modules/ogl/src/core/Camera.js"),t=n("./node_modules/ogl/src/extras/Box.js"),o=n("./node_modules/ogl/src/core/Program.js"),a=n("./node_modules/ogl/src/core/Mesh.js"),c=n("./node_modules/ogl/src/core/Transform.js");class d{constructor(){this.createRenderer()}createRenderer(){this.renderer=new s.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createCube(){this.geometry=new t.Box(this.gl),this.program=new o.Program(this.gl,{vertex:"\n        attribute vec3 position;\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n\n        void main() {\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n        }\n      ",fragment:"\n        void main() {\n            gl_FragColor = vec4(1.0);\n        }\n      "}),this.mesh=new a.Mesh(this.geometry,this.program),this.mesh.setParent(this.scene)}createScene(){this.scene=new c.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"fed3335a279c7effb4df"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MDgwZTljOTQ4MzVlNTdjZmRjNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFpBRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGdCQUNMLENBRURBLGlCQUNDRCxLQUFLRSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCSCxLQUFLSSxHQUFLSixLQUFLRSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVAsS0FBS0ksR0FBR0ksT0FDbEMsQ0FFREMsZUFDQ1QsS0FBS1UsT0FBUyxJQUFJQyxFQUFBQSxPQUFPWCxLQUFLSSxJQUM5QkosS0FBS1UsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEQyxhQUNDZCxLQUFLZSxTQUFXLElBQUlDLEVBQUFBLElBQUloQixLQUFLSSxJQUU3QkosS0FBS2lCLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWxCLEtBQUtJLEdBQUksQ0FDbkNlLE9BQVMseVBBV1RDLFNBQVcsc0ZBT1pwQixLQUFLcUIsS0FBTyxJQUFJQyxFQUFBQSxLQUFLdEIsS0FBS2UsU0FBVWYsS0FBS2lCLFNBRXpDakIsS0FBS3FCLEtBQUtFLFVBQVV2QixLQUFLd0IsTUFDekIsQ0FFREMsY0FDQ3pCLEtBQUt3QixNQUFRLElBQUlFLEVBQUFBLFNBQ2pCLENBRURDLFdBQ0MzQixLQUFLRSxTQUFTMEIsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaEQvQixLQUFLVSxPQUFPc0IsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsQ0FFREcsU0FDQ2xDLEtBQUtFLFNBQVNpQyxPQUFPLENBQ3BCekIsT0FBUVYsS0FBS1UsT0FDYmMsTUFBT3hCLEtBQUt3QixPQUViLGtCQ2hFRlksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVDdWJlKCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpXG5cblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHR2ZXJ0ZXg6IGBcbiAgICAgICAgYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG5cbiAgICAgICAgdW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcbiAgICAgICAgdW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG5cbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcblxuICAgICAgICB9XG4gICAgICBgLFxuXHRcdFx0ZnJhZ21lbnQ6IGBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjApO1xuICAgICAgICB9XG4gICAgICBgLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLnByb2dyYW0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmVkMzMzNWEyNzljN2VmZmI0ZGZcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsImNyZWF0ZUN1YmUiLCJnZW9tZXRyeSIsIkJveCIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsInNjZW5lIiwiY3JlYXRlU2NlbmUiLCJUcmFuc2Zvcm0iLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==