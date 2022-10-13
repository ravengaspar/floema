/*! For license information please see main.da2b73e28939a1e885e2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new o.Transform}onRouteUpdate(e){"home"===e?this.createHome():this.home&&(this.home.destroy(),this.home=null),"about"===e?this.createAbout():this.home&&(this.home.destroy(),this.home=null)}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"bf81c89977f700949181"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk0QyxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdDLFFBQVVILEVBQU1HLFFBQ3JEM0MsRUFBSXdDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0UsUUFBVUosRUFBTUksUUFFM0RqRCxLQUFLQyxFQUFFRyxJQUFNSCxFQUNiRCxLQUFLSyxFQUFFRCxJQUFNQyxFQUVUTCxLQUFLeUIsTUFBTXpCLEtBQUt5QixLQUFLMEIsVUFBVSxDQUFFbEQsRUFBR0QsS0FBS0MsRUFBR0ksRUFBR0wsS0FBS0ssR0FDeEQsQ0FFRCtDLFFBQVFQLEdBQ0g3QyxLQUFLeUIsTUFDUnpCLEtBQUt5QixLQUFLMkIsUUFBUVAsRUFFbkIsQ0FFRFEsU0FDS3JELEtBQUt5QixNQUFNekIsS0FBS3lCLEtBQUs0QixTQUV6QnJELEtBQUtZLFNBQVMwQyxPQUFPLENBQ3BCakMsT0FBUXJCLEtBQUtxQixPQUNiTSxNQUFPM0IsS0FBSzJCLE9BRWIsa0JDOUlGNEIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMub25Sb3V0ZVVwZGF0ZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0b25Sb3V0ZVVwZGF0ZSh0ZW1wbGF0ZSkge1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdFx0fVxuXG5cbiAgICBpZiAodGVtcGxhdGUgPT09ICdhYm91dCcpIHtcblx0XHRcdHRoaXMuY3JlYXRlQWJvdXQoKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdFx0fVxuXG5cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSlcblx0XHRcdHRoaXMuaG9tZS5vblJlc2l6ZSh7XG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24oeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHR9XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmY4MWM4OTk3N2Y3MDA5NDkxODFcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJvblJvdXRlVXBkYXRlIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJUcmFuc2Zvcm0iLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=