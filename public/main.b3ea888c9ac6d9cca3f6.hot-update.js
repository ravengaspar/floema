/*! For license information please see main.b3ea888c9ac6d9cca3f6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),o=s("./app/components/Canvas/Home.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new n.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel({pixelX:e,pixelY:t}){this.home&&this.home.onWheel(event)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"bbca498a53e61c455644"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDRDLFNBQVEsT0FBRUMsRUFBRixPQUFVQyxJQUNibkQsS0FBS3dCLE1BQ1J4QixLQUFLd0IsS0FBS3lCLFFBQVFQLE1BRW5CLENBRURVLFNBQ0twRCxLQUFLd0IsTUFBTXhCLEtBQUt3QixLQUFLNEIsU0FFekJwRCxLQUFLVyxTQUFTMEMsT0FBTyxDQUNwQmpDLE9BQVFwQixLQUFLb0IsT0FDYk0sTUFBTzFCLEtBQUswQixPQUViLGtCQ3hIRjRCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpXG5cdFx0XHR0aGlzLmhvbWUub25SZXNpemUoe1xuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUudXBkYXRlKClcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiYmNhNDk4YTUzZTYxYzQ1NTY0NFwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsImhvbWUiLCJIb21lIiwic2NlbmUiLCJzaXplcyIsIlRyYW5zZm9ybSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWCIsInBpeGVsWSIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==