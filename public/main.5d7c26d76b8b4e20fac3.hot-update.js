/*! For license information please see main.5d7c26d76b8b4e20fac3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,n)=>{n.r(r),n.d(r,{default:()=>t});var i=n("./node_modules/ogl/src/core/Renderer.js"),s=n("./node_modules/ogl/src/core/Camera.js");class t{constructor(){this.createRenderer()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new s.Camera(this.gl),this.camera.position.z=5}createCube(){}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}}}},(function(e){e.h=()=>"3e589b17be76b8f7d801"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZDdjMjZkNzZiOGI0ZTIwZmFjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dU9BRWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGdCQUNMLENBRURBLGlCQUNDRCxLQUFLRSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCSCxLQUFLSSxHQUFLSixLQUFLRSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVAsS0FBS0ksR0FBR0ksT0FDbEMsQ0FFREMsZUFDQ1QsS0FBS1UsT0FBUyxJQUFJQyxFQUFBQSxPQUFPWCxLQUFLSSxJQUM5QkosS0FBS1UsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVBQyxhQUVDLENBRUZDLFdBQ0NmLEtBQUtFLFNBQVNjLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEbkIsS0FBS1UsT0FBT1UsWUFBWSxDQUN2QkMsT0FBUUosT0FBT0MsV0FBYUQsT0FBT0UsYUFFcEMsa0JDOUJGRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuICBjcmVhdGVDdWJlKCkge1xuICAgIFxuICB9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNlNTg5YjE3YmU3NmI4ZjdkODAxXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVJlbmRlcmVyIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjcmVhdGVDYW1lcmEiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJjcmVhdGVDdWJlIiwib25SZXNpemUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=