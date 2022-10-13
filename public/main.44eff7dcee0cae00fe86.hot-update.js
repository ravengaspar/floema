/*! For license information please see main.44eff7dcee0cae00fe86.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/Detail/index.js"),r=s("./app/components/Canvas/Transition.js");class d{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetails(){this.detail=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetails(){this.details&&(this.details.destroy(),this.details=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e,t){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&t.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&t.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new r.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:t}))}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"collections"===e?this.createCollections():this.destroyCollections(),"details"===e?this.createDetails():this.destroyDetails(),"home"===e?this.createHome():this.destroyHome(),this.template=e}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.collections&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"d3b96659594d39ba083e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTTRDLE9BQU9DLEdBQzlCN0UsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBS2tELFNBQ3JCNUUsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWXdDLFNBRXZDNUUsS0FBS1UsU0FBU29FLE9BQU8sQ0FDcEIzRCxPQUFRbkIsS0FBS21CLE9BQ2JJLE1BQU92QixLQUFLdUIsT0FFYixrQkM1UUZ3RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCdcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL0NvbGxlY3Rpb25zJ1xuaW1wb3J0IERldGFpbCBmcm9tICcuL0RldGFpbCdcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvKiBIb21lICovXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0LyogQWJvdXQgKi9cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lBYm91dCgpIHtcblx0XHRpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG5cdFx0dGhpcy5hYm91dC5kZXN0cm95KClcblx0XHR0aGlzLmFib3V0ID0gbnVsbFxuXHR9XG5cblx0LyogQ29sbGVjdGlvbiAqL1xuXHRjcmVhdGVDb2xsZWN0aW9ucygpIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUNvbGxlY3Rpb25zKCkge1xuXHRcdGlmICghdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG5cblx0XHR0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG5cdH1cblxuXHQvKiBEZXRhaWxzICovXG5cdGNyZWF0ZURldGFpbHMoKSB7XG5cdFx0dGhpcy5kZXRhaWwgPSBuZXcgRGV0YWlsKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveURldGFpbHMoKSB7XG5cdFx0aWYgKCF0aGlzLmRldGFpbHMpIHJldHVyblxuXG5cdFx0dGhpcy5kZXRhaWxzLmRlc3Ryb3koKVxuXHRcdHRoaXMuZGV0YWlscyA9IG51bGxcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblx0fVxuXG5cdG9uQ2hhbmdlU3RhcnQodGVtcGxhdGUsIHVybCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5oaWRlKClcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5oaWRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5oaWRlKClcblxuXHRcdHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCA9IHRoaXMudGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycgJiYgdXJsLmluZGV4T2YoJ2RldGFpbCcpID4gLTFcblx0XHR0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMgPSB0aGlzLnRlbXBsYXRlID09PSAnZGV0YWlsJyAmJiB1cmwuaW5kZXhPZignY29sbGVjdGlvbnMnKSA+IC0xXG5cblx0XHRpZiAodGhpcy5pc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIHx8IHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucykge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oe1xuXHRcdFx0XHRjb2xsZWN0aW9uczogdGhpcy5jb2xsZWN0aW9ucyxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdFx0dXJsLFxuXHRcdFx0fSlcblxuXHRcdFx0Ly8gdGhpcy50cmFuc2l0aW9uLnNldEVsZW1lbnQodGhpcy5jb2xsZWN0aW9ucyB8fCB0aGlzLmRldGFpbClcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUVuZCh0ZW1wbGF0ZSkge1xuXHRcdC8qIEFib3V0ICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblxuXHRcdC8qIENvbGxlY3Rpb24gKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpIHtcblx0XHRcdHRoaXMuY3JlYXRlQ29sbGVjdGlvbnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lDb2xsZWN0aW9ucygpXG5cdFx0fVxuXG5cdFx0LyogRGV0YWlscyAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2RldGFpbHMnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURldGFpbHMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lEZXRhaWxzKClcblx0XHR9XG5cblx0XHQvKiBIb21lICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDNiOTY2NTk1OTRkMzliYTA4M2VcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsImNyZWF0ZURldGFpbHMiLCJkZXRhaWwiLCJEZXRhaWwiLCJkZXN0cm95RGV0YWlscyIsImRldGFpbHMiLCJvblByZWxvYWRlZCIsIm9uQ2hhbmdlRW5kIiwib25DaGFuZ2VTdGFydCIsInVybCIsImhpZGUiLCJpc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIiwiaW5kZXhPZiIsImlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInNjcm9sbCIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==