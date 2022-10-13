/*! For license information please see main.520aea71bdab338a4705.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Renderer.js"),n=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js");Object(function(){var e=new Error("Cannot find module './Home'");throw e.code="MODULE_NOT_FOUND",e}());class o{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new n.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new Object(function(){var e=new Error("Cannot find module './Home'");throw e.code="MODULE_NOT_FOUND",e}())({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new h.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"12b0eb5e8837b7b1e8a5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS3dCLE1BQU14QixLQUFLd0IsS0FBS3dCLFVBQVUsQ0FBRS9DLEVBQUdELEtBQUtDLEVBQUdJLEVBQUdMLEtBQUtLLEdBQ3hELENBRUQ0QyxRQUFRUCxHQUNIMUMsS0FBS3dCLE1BQ1J4QixLQUFLd0IsS0FBS3lCLFFBQVFQLEVBRW5CLENBRURRLFNBQ0tsRCxLQUFLd0IsTUFBTXhCLEtBQUt3QixLQUFLMEIsU0FFekJsRCxLQUFLVyxTQUFTd0MsT0FBTyxDQUNwQi9CLE9BQVFwQixLQUFLb0IsT0FDYk0sTUFBTzFCLEtBQUswQixPQUViLGtCQ3hIRjBCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpXG5cdFx0XHR0aGlzLmhvbWUub25SZXNpemUoe1xuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUoeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyYjBlYjVlODgzN2I3YjFlOGE1XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiaG9tZSIsIkhvbWUiLCJzY2VuZSIsInNpemVzIiwiVHJhbnNmb3JtIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9