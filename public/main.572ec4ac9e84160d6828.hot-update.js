/*! For license information please see main.572ec4ac9e84160d6828.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createAbout(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new o.Transform}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}onRouteUpdate(e){"home"===e?this.createHome():this.destroyHome(),"about"===e?this.createAbout():this.about&&this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"2c085c895a8f49049f90"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RHBELEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRVRMLEtBQUt5QixNQUFNekIsS0FBS3lCLEtBQUs0QixZQUFZLENBQUVwRCxFQUFHRCxLQUFLQyxFQUFHSSxFQUFHTCxLQUFLSyxHQUMxRCxDQUNEaUQsVUFBVU4sR0FDVGhELEtBQUtpRCxRQUFTLEVBRWQsTUFBTWhELEVBQUkrQyxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdDLFFBQVVILEVBQU1HLFFBQ3JEOUMsRUFBSTJDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0UsUUFBVUosRUFBTUksUUFFM0RwRCxLQUFLQyxFQUFFRyxJQUFNSCxFQUNiRCxLQUFLSyxFQUFFRCxJQUFNQyxFQUVUTCxLQUFLeUIsTUFBTXpCLEtBQUt5QixLQUFLNkIsVUFBVSxDQUFFckQsRUFBR0QsS0FBS0MsRUFBR0ksRUFBR0wsS0FBS0ssR0FDeEQsQ0FFRGtELFFBQVFQLEdBQ0hoRCxLQUFLeUIsTUFDUnpCLEtBQUt5QixLQUFLOEIsUUFBUVAsRUFFbkIsQ0FFRFEsU0FDS3hELEtBQUt5QixNQUFNekIsS0FBS3lCLEtBQUsrQixTQUV6QnhELEtBQUtZLFNBQVM2QyxPQUFPLENBQ3BCcEMsT0FBUXJCLEtBQUtxQixPQUNiTSxNQUFPM0IsS0FBSzJCLE9BRWIsa0JDL0pGK0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMub25Sb3V0ZVVwZGF0ZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0ZGVzdHJveUFib3V0KCkge1xuXHRcdGlmICghdGhpcy5hYm91dCkgcmV0dXJuXG5cblx0XHR0aGlzLmFib3V0LmRlc3Ryb3koKVxuXHRcdHRoaXMuYWJvdXQgPSBudWxsXG5cdH1cblxuXHRvblJvdXRlVXBkYXRlKHRlbXBsYXRlKSB7XG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIGlmICh0aGlzLmFib3V0KSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lIb21lKClcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpXG5cdFx0XHR0aGlzLmhvbWUub25SZXNpemUoe1xuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJjMDg1Yzg5NWE4ZjQ5MDQ5ZjkwXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwib25Sb3V0ZVVwZGF0ZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiaG9tZSIsIkhvbWUiLCJzY2VuZSIsInNpemVzIiwiY3JlYXRlQWJvdXQiLCJUcmFuc2Zvcm0iLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJkZXN0cm95QWJvdXQiLCJhYm91dCIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==