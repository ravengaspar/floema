/*! For license information please see main.6fb8d0edbee6f0714e60.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>t});var i=n("./node_modules/ogl/src/core/Renderer.js"),s=n("./node_modules/ogl/src/core/Camera.js");class t{constructor(){this.createRenderer()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new s.Camera(this.gl),this.camera.position.z=5}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}}}},(function(e){e.h=()=>"5d7c26d76b8b4e20fac3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42ZmI4ZDBlZGJlZTZmMDcxNGU2MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dU9BRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGdCQUNMLENBRURBLGlCQUNDRCxLQUFLRSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCSCxLQUFLSSxHQUFLSixLQUFLRSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVAsS0FBS0ksR0FBR0ksT0FDbEMsQ0FFREMsZUFDQ1QsS0FBS1UsT0FBUyxJQUFJQyxFQUFBQSxPQUFPWCxLQUFLSSxJQUM5QkosS0FBS1UsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEQyxXQUNDZCxLQUFLRSxTQUFTYSxRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRGxCLEtBQUtVLE9BQU9TLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGFBRXBDLGtCQzFCRkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVkN2MyNmQ3NmI4YjRlMjBmYWMzXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVJlbmRlcmVyIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==