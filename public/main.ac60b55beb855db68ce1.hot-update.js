/*! For license information please see main.ac60b55beb855db68ce1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>d});var i=n("./node_modules/ogl/src/core/Renderer.js"),o=n("./node_modules/ogl/src/core/Camera.js"),t=n("./node_modules/ogl/src/extras/Box.js"),s=n("./node_modules/ogl/src/core/Program.js"),a=n("./node_modules/ogl/src/core/Transform.js");class d{constructor(){this.createRenderer()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createCube(){this.geometry=new t.Box(this.gl),this.program=new s.Program(gl,{vertex:"\n        attribute vec3 position;\n\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n\n        void main() {\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n\n        }\n      ",fragment:"\n        void main() {\n            \n        }\n      "})}createScene(){this.scene=new a.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}}}},(function(e){e.h=()=>"860ad463f7dc3dfd5507"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzYwYjU1YmViODU1ZGI2OGNlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVhBRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGdCQUNMLENBRURBLGlCQUNDRCxLQUFLRSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCSCxLQUFLSSxHQUFLSixLQUFLRSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVAsS0FBS0ksR0FBR0ksT0FDbEMsQ0FFREMsZUFDQ1QsS0FBS1UsT0FBUyxJQUFJQyxFQUFBQSxPQUFPWCxLQUFLSSxJQUM5QkosS0FBS1UsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEQyxhQUNDZCxLQUFLZSxTQUFXLElBQUlDLEVBQUFBLElBQUloQixLQUFLSSxJQUUzQkosS0FBS2lCLFFBQVUsSUFBSUMsRUFBQUEsUUFBUWQsR0FBSSxDQUM3QmUsT0FBUyx5UEFXVEMsU0FBVyw0REFNZixDQUVEQyxjQUNDckIsS0FBS3NCLE1BQVEsSUFBSUMsRUFBQUEsU0FDakIsQ0FFREMsV0FDQ3hCLEtBQUtFLFNBQVN1QixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRDVCLEtBQUtVLE9BQU9tQixZQUFZLENBQ3ZCQyxPQUFRSixPQUFPQyxXQUFhRCxPQUFPRSxhQUVwQyxrQkNyREZHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtLCBCb3gsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlQ3ViZSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IEJveCh0aGlzLmdsKVxuXG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0oZ2wsIHtcbiAgICAgIHZlcnRleDogYFxuICAgICAgICBhdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcblxuICAgICAgICB1bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuICAgICAgICB1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcblxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xuXG4gICAgICAgIH1cbiAgICAgIGAsXG4gICAgICBmcmFnbWVudDogYFxuICAgICAgICB2b2lkIG1haW4oKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgYFxuICAgIH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODYwYWQ0NjNmN2RjM2RmZDU1MDdcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNyZWF0ZUNhbWVyYSIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsImNyZWF0ZUN1YmUiLCJnZW9tZXRyeSIsIkJveCIsInByb2dyYW0iLCJQcm9ncmFtIiwidmVydGV4IiwiZnJhZ21lbnQiLCJjcmVhdGVTY2VuZSIsInNjZW5lIiwiVHJhbnNmb3JtIiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=