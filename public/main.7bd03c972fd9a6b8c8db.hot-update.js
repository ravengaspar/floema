/*! For license information please see main.7bd03c972fd9a6b8c8db.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),a=s("./app/components/Canvas/Collections/index.js");Object(function(){var e=new Error("Cannot find module './Transition'");throw e.code="MODULE_NOT_FOUND",e}());class l{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&url.indexOf()}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"collections"===e?this.createCollections():this.destroyCollections(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const o={sizes:this.sizes};this.home&&this.home.onResize(o),this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchMove(o),this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchUp(o),this.about&&this.about.onTouchUp(o),this.collections&&this.collections.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.collections&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"f1b7b7906e478016b00e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUl1RCxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdFLFFBQVVKLEVBQU1JLFFBRTNEaEUsS0FBS0MsRUFBRUcsSUFBTUgsRUFDYkQsS0FBS0ssRUFBRUQsSUFBTUMsRUFFYixNQUFNcUQsRUFBUyxDQUNkekQsRUFBR0QsS0FBS0MsRUFDUkksRUFBR0wsS0FBS0ssR0FHTEwsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBS3dDLFVBQVVSLEdBQy9CMUQsS0FBS2dDLE9BQU9oQyxLQUFLZ0MsTUFBTWtDLFVBQVVSLEdBQ2pDMUQsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWThCLFVBQVVSLEVBQ2pELENBRURTLFFBQVFQLEdBQ0g1RCxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLeUMsUUFBUVAsR0FDN0I1RCxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZK0IsUUFBUVAsRUFDL0MsQ0FFRFEsT0FBT0MsR0FDRnJFLEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU1vQyxPQUFPQyxHQUM5QnJFLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUswQyxTQUNyQnBFLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVlnQyxTQUV2Q3BFLEtBQUtVLFNBQVM0RCxPQUFPLENBQ3BCbkQsT0FBUW5CLEtBQUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRWIsa0JDck9GZ0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9Db2xsZWN0aW9ucydcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvKiBIb21lICovXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0LyogQWJvdXQgKi9cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lBYm91dCgpIHtcblx0XHRpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG5cdFx0dGhpcy5hYm91dC5kZXN0cm95KClcblx0XHR0aGlzLmFib3V0ID0gbnVsbFxuXHR9XG5cblx0LyogQ29sbGVjdGlvbiAqL1xuXHRjcmVhdGVDb2xsZWN0aW9ucygpIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUNvbGxlY3Rpb25zKCkge1xuXHRcdGlmICghdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG5cblx0XHR0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRvbkNoYW5nZVN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5oaWRlKClcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5oaWRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5oaWRlKClcblxuXHRcdHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCA9IHRoaXMudGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycgJiYgdXJsLmluZGV4T2YoKVxuXHR9XG5cblx0b25DaGFuZ2VFbmQodGVtcGxhdGUpIHtcblx0XHQvKiBBYm91dCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cblx0XHQvKiBDb2xsZWN0aW9uICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuXHRcdH1cblxuXHRcdC8qIEhvbWUgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjFiN2I3OTA2ZTQ3ODAxNmIwMGVcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsImlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwiLCJ1cmwiLCJpbmRleE9mIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9