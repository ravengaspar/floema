/*! For license information please see main.57d2fa89c2a0d7cb94a7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js");s("./app/components/Canvas/Collections/index.js");class a{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onChangeEnd(this.template)}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new Collections({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide()}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"home"===e?this.createHome():this.destroyHome(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"bb7083c5744960313b34"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FFRFMsUUFBUVAsR0FDSHhELEtBQUsyQixNQUNSM0IsS0FBSzJCLEtBQUtvQyxRQUFRUCxFQUVuQixDQUVEUSxPQUFPQyxHQUNGakUsS0FBS2lDLE9BQU9qQyxLQUFLaUMsTUFBTStCLE9BQU9DLEdBQzlCakUsS0FBSzJCLE1BQU0zQixLQUFLMkIsS0FBS3FDLFNBRXpCaEUsS0FBS1csU0FBU3VELE9BQU8sQ0FDcEI5QyxPQUFRcEIsS0FBS29CLE9BQ2JJLE1BQU94QixLQUFLd0IsT0FFYixrQkMxTkYyQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuL0NvbGxlY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25DaGFuZ2VTdGFydCgpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUuaGlkZSgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmFib3V0KSB7XG5cdFx0XHR0aGlzLmFib3V0LmhpZGUoKVxuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlRW5kKHRlbXBsYXRlKSB7XG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblxuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lIb21lKClcblx0XHR9XG5cbiAgICBpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHtcblx0XHRcdHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdH1cblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiNzA4M2M1NzQ0OTYwMzEzYjM0XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwib25DaGFuZ2VFbmQiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9