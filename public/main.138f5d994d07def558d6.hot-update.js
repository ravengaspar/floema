/*! For license information please see main.138f5d994d07def558d6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),a=s("./app/components/Canvas/About/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onChangeEnd(this.template)}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new o.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collec=new Collections({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide()}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"99e316e21e1c9a0c89bf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUttQyxRQUFRUCxFQUVuQixDQUVEUSxPQUFPQyxHQUNGaEUsS0FBS2lDLE9BQU9qQyxLQUFLaUMsTUFBTThCLE9BQU9DLEdBQzlCaEUsS0FBSzJCLE1BQU0zQixLQUFLMkIsS0FBS29DLFNBRXpCL0QsS0FBS1csU0FBU3NELE9BQU8sQ0FDcEI3QyxPQUFRcEIsS0FBS29CLE9BQ2JJLE1BQU94QixLQUFLd0IsT0FFYixrQkNuTkYwQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cblxuXHRjcmVhdGVDb2xsZWN0aW9ucygpIHtcblx0XHR0aGlzLmNvbGxlYyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lIb21lKCkge1xuXHRcdGlmICghdGhpcy5ob21lKSByZXR1cm5cblxuXHRcdHRoaXMuaG9tZS5kZXN0cm95KClcblx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdH1cblxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uQ2hhbmdlU3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLmhpZGUoKVxuXHRcdH1cblx0XHRpZiAodGhpcy5hYm91dCkge1xuXHRcdFx0dGhpcy5hYm91dC5oaWRlKClcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUVuZCh0ZW1wbGF0ZSkge1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk5ZTMxNmUyMWUxYzlhMGM4OWJmXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwib25DaGFuZ2VFbmQiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjIiwiQ29sbGVjdGlvbnMiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInNjcm9sbCIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==