/*! For license information please see main.c81a85f46ff094ab9bee.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),h=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js");Object(function(){var t=new Error("Cannot find module './Transition'");throw t.code="MODULE_NOT_FOUND",t}());class a{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createHome(){this.home=new h.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new Object(function(){var t=new Error("Cannot find module './Transition'");throw t.code="MODULE_NOT_FOUND",t}())({gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}),this.transition.setElement(this.collections||this.detail))}onChangeEnd(t){"about"===t?this.createAbout():this.destroyAbout(),"collections"===t?this.createCollections():this.destroyCollections(),"home"===t?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const o={sizes:this.sizes};this.home&&this.home.onResize(o),this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.home&&this.home.onTouchDown(e),this.about&&this.about.onTouchDown(e),this.collections&&this.collections.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchMove(o),this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchUp(o),this.about&&this.about.onTouchUp(o),this.collections&&this.collections.onTouchUp(o)}onWheel(t){this.home&&this.home.onWheel(t),this.collections&&this.collections.onWheel(t)}update(t){this.about&&this.about.update(t),this.home&&this.home.update(),this.collections&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"7a41be32230cdc13553f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRWIsa0JDalBGcUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9Db2xsZWN0aW9ucydcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvKiBIb21lICovXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0LyogQWJvdXQgKi9cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lBYm91dCgpIHtcblx0XHRpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG5cdFx0dGhpcy5hYm91dC5kZXN0cm95KClcblx0XHR0aGlzLmFib3V0ID0gbnVsbFxuXHR9XG5cblx0LyogQ29sbGVjdGlvbiAqL1xuXHRjcmVhdGVDb2xsZWN0aW9ucygpIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUNvbGxlY3Rpb25zKCkge1xuXHRcdGlmICghdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG5cblx0XHR0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRvbkNoYW5nZVN0YXJ0KHRlbXBsYXRlLCB1cmwpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUuaGlkZSgpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQuaGlkZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG5cblx0XHR0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXG5cdFx0dGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2RldGFpbCcgJiYgdXJsLmluZGV4T2YoJ2NvbGxlY3Rpb25zJykgPiAtMVxuXG5cdFx0aWYgKHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHtcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdFx0dXJsLFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy50cmFuc2l0aW9uLnNldEVsZW1lbnQodGhpcy5jb2xsZWN0aW9ucyB8fCB0aGlzLmRldGFpbClcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUVuZCh0ZW1wbGF0ZSkge1xuXHRcdC8qIEFib3V0ICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblxuXHRcdC8qIENvbGxlY3Rpb24gKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpIHtcblx0XHRcdHRoaXMuY3JlYXRlQ29sbGVjdGlvbnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lDb2xsZWN0aW9ucygpXG5cdFx0fVxuXG5cdFx0LyogSG9tZSAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lIb21lKClcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uUmVzaXplKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaERvd24odmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaFVwKHZhbHVlcylcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vbldoZWVsKGV2ZW50KVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKClcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YTQxYmUzMjIzMGNkYzEzNTUzZlwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJ1cmwiLCJoaWRlIiwiaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCIsImluZGV4T2YiLCJpc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zIiwidHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJzZXRFbGVtZW50IiwiZGV0YWlsIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9