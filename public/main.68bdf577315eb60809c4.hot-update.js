/*! For license information please see main.68bdf577315eb60809c4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),a=s("./app/components/Canvas/About/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome(),this.createAbout()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createAbout(){this.about=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new h.Transform}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}onRouteUpdate(e){"home"===e?this.createHome():this.destroyHome(),"about"===e?this.createAbout():this.destroyAbout()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.about&&this.about.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"f69e26a6b5c406212e94"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gICAgXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMub25Sb3V0ZVVwZGF0ZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdGRlc3Ryb3lIb21lKCkge1xuXHRcdGlmICghdGhpcy5ob21lKSByZXR1cm5cblxuXHRcdHRoaXMuaG9tZS5kZXN0cm95KClcblx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdG9uUm91dGVVcGRhdGUodGVtcGxhdGUpIHtcblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0fVxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUudXBkYXRlKClcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY2OWUyNmE2YjVjNDA2MjEyZTk0XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwib25Sb3V0ZVVwZGF0ZSIsImNyZWF0ZUhvbWUiLCJjcmVhdGVBYm91dCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJhYm91dCIsIkFib3V0IiwiVHJhbnNmb3JtIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiZGVzdHJveUFib3V0Iiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9