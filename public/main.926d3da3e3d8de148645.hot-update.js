/*! For license information please see main.926d3da3e3d8de148645.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createAbout(){}createScene(){this.scene=new o.Transform}onRouteUpdate(e){"home"===e?this.createHome():this.home&&(this.home.destroy(),this.home=null),"about"===e?this.createAbout():this.about&&(this.about.destroy(),this.about=null)}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"82089c08e710c6177502"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFFZCxNQUFNOUMsRUFBSTZDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDckQ1QyxFQUFJeUMsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUUzRGxELEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRVRMLEtBQUt5QixNQUFNekIsS0FBS3lCLEtBQUsyQixVQUFVLENBQUVuRCxFQUFHRCxLQUFLQyxFQUFHSSxFQUFHTCxLQUFLSyxHQUN4RCxDQUVEZ0QsUUFBUVAsR0FDSDlDLEtBQUt5QixNQUNSekIsS0FBS3lCLEtBQUs0QixRQUFRUCxFQUVuQixDQUVEUSxTQUNLdEQsS0FBS3lCLE1BQU16QixLQUFLeUIsS0FBSzZCLFNBRXpCdEQsS0FBS1ksU0FBUzJDLE9BQU8sQ0FDcEJsQyxPQUFRckIsS0FBS3FCLE9BQ2JNLE1BQU8zQixLQUFLMkIsT0FFYixrQkM3SUY2QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5vblJvdXRlVXBkYXRlKHRoaXMudGVtcGxhdGUpXG5cblx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVBYm91dCgpIHt9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0b25Sb3V0ZVVwZGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdFx0fVxuXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2UgaWYgKHRoaXMuYWJvdXQpIHtcblx0XHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0XHR0aGlzLmFib3V0ID0gbnVsbFxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSlcblx0XHRcdHRoaXMuaG9tZS5vblJlc2l6ZSh7XG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24oeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHR9XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODIwODljMDhlNzEwYzYxNzc1MDJcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJvblJvdXRlVXBkYXRlIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJjcmVhdGVBYm91dCIsIlRyYW5zZm9ybSIsImRlc3Ryb3kiLCJhYm91dCIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==