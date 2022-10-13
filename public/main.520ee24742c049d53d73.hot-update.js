/*! For license information please see main.520ee24742c049d53d73.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var i=t("./node_modules/ogl/src/core/Renderer.js"),n=t("./node_modules/ogl/src/core/Camera.js"),c=t("./node_modules/ogl/src/core/Transform.js"),o=t("./app/components/Canvas/Home.js");class r{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new n.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new c.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,t=s*this.camera.aspect;this.sizes={height:s,width:t},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0;e.touches?e.touches[0].clientX:e.clientX,e.touches?e.touches[0].clientY:e.clientY}onTouchMove(e){e.touches?e.touches[0].clientX:e.clientX,e.touches?e.touches[0].clientY:e.clientY}onTouchUp(e){e.touches?e.touches[0].clientX:e.clientX,e.touches?e.touches[0].clientY:e.clientY}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"08e8f46a87918814748c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MjBlZTI0NzQyYzA0OWQ1M2Q3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFRBSWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUVMSCxLQUFLSSxXQUVMSixLQUFLSyxZQUNMLENBRURKLGlCQUNDRCxLQUFLTSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCUCxLQUFLUSxHQUFLUixLQUFLTSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVgsS0FBS1EsR0FBR0ksT0FDbEMsQ0FFRFYsZUFDQ0YsS0FBS2EsT0FBUyxJQUFJQyxFQUFBQSxPQUFPZCxLQUFLUSxJQUM5QlIsS0FBS2EsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDTCxLQUFLaUIsS0FBTyxJQUFJQyxFQUFBQSxRQUFLLENBQ3BCVixHQUFJUixLQUFLUSxHQUNUVyxNQUFPbkIsS0FBS21CLE1BQ1pDLE1BQU9wQixLQUFLb0IsT0FFYixDQUVEakIsY0FDQ0gsS0FBS21CLE1BQVEsSUFBSUUsRUFBQUEsU0FDakIsQ0FFRGpCLFdBQ0NKLEtBQUtNLFNBQVNnQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRHpCLEtBQUthLE9BQU9hLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBR3BDLE1BQU1HLEVBQU01QixLQUFLYSxPQUFPZSxLQUFPQyxLQUFLQyxHQUFLLEtBQ25DQyxFQUFTLEVBQUlGLEtBQUtHLElBQUlKLEVBQU0sR0FBSzVCLEtBQUthLE9BQU9FLFNBQVNDLEVBQ3REaUIsRUFBUUYsRUFBUy9CLEtBQUthLE9BQU9jLE9BRW5DM0IsS0FBS29CLE1BQVEsQ0FDWlcsU0FDQUUsU0FHR2pDLEtBQUtpQixNQUNSakIsS0FBS2lCLEtBQUtiLFNBQVMsQ0FDbEJnQixNQUFPcEIsS0FBS29CLE9BRWQsQ0FFRGMsWUFBWUMsR0FDVG5DLEtBQUtvQyxRQUFTLEVBQ05ELEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDakRILEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0UsUUFBVUosRUFBTUksT0FDM0QsQ0FDREMsWUFBWUwsR0FDREEsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFNRyxRQUNqREgsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxPQUMzRCxDQUNERSxVQUFVTixHQUNDQSxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdDLFFBQVVILEVBQU1HLFFBQ2pESCxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdFLFFBQVVKLEVBQU1JLE9BQzNELENBRURHLFNBQ0MxQyxLQUFLTSxTQUFTcUMsT0FBTyxDQUNwQjlCLE9BQVFiLEtBQUthLE9BQ2JNLE1BQU9uQixLQUFLbUIsT0FFYixrQkNqRkZ5QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKClcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKVxuXHRcdFx0dGhpcy5ob21lLm9uUmVzaXplKHtcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWVcblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwOGU4ZjQ2YTg3OTE4ODE0NzQ4Y1wiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJUcmFuc2Zvcm0iLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==