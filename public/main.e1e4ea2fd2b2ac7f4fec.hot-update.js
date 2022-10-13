/*! For license information please see main.e1e4ea2fd2b2ac7f4fec.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js");s("./app/components/Canvas/Collections/index.js");class a{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onChangeEnd(this.template)}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new Collections({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide()}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"696e44285eddcf0dc67a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtvQyxRQUFRUCxFQUVuQixDQUVEUSxPQUFPQyxHQUNGakUsS0FBS2lDLE9BQU9qQyxLQUFLaUMsTUFBTStCLE9BQU9DLEdBQzlCakUsS0FBSzJCLE1BQU0zQixLQUFLMkIsS0FBS3FDLFNBRXpCaEUsS0FBS1csU0FBU3VELE9BQU8sQ0FDcEI5QyxPQUFRcEIsS0FBS29CLE9BQ2JJLE1BQU94QixLQUFLd0IsT0FFYixrQkNwTkYyQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbiBmcm9tICcuL0NvbGxlY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25DaGFuZ2VTdGFydCgpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUuaGlkZSgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLmFib3V0KSB7XG5cdFx0XHR0aGlzLmFib3V0LmhpZGUoKVxuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlRW5kKHRlbXBsYXRlKSB7XG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblxuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lIb21lKClcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IHRydWVcblxuXHRcdHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0dGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkge1xuXHRcdFx0dGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjk2ZTQ0Mjg1ZWRkY2YwZGM2N2FcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJvbkNoYW5nZUVuZCIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=