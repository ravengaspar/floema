/*! For license information please see main.b7bdea5c4d00fd9520a2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/Transition.js");class r{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e,t){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&t.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&t.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new a.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:t}))}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"collections"===e?this.createCollections():this.destroyCollections(),"home"===e?this.createHome():this.destroyHome(),this.template=e}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.collections&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"d04b75148ecb0d1dfa1e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXG5cbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vVHJhbnNpdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXHR9XG5cblx0b25DaGFuZ2VTdGFydCh0ZW1wbGF0ZSwgdXJsKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLmhpZGUoKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0LmhpZGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLmhpZGUoKVxuXG5cdFx0dGhpcy5pc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJyAmJiB1cmwuaW5kZXhPZignZGV0YWlsJykgPiAtMVxuXHRcdHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyA9IHRoaXMudGVtcGxhdGUgPT09ICdkZXRhaWwnICYmIHVybC5pbmRleE9mKCdjb2xsZWN0aW9ucycpID4gLTFcblxuXHRcdGlmICh0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgfHwgdGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih7XG5cdFx0XHRcdGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHR9KVxuXG5cdFx0XHQvLyB0aGlzLnRyYW5zaXRpb24uc2V0RWxlbWVudCh0aGlzLmNvbGxlY3Rpb25zIHx8IHRoaXMuZGV0YWlsKVxuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlRW5kKHRlbXBsYXRlKSB7XG5cdFx0LyogQWJvdXQgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdhYm91dCcpIHtcblx0XHRcdHRoaXMuY3JlYXRlQWJvdXQoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lBYm91dCgpXG5cdFx0fVxuXG5cdFx0LyogQ29sbGVjdGlvbiAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJykge1xuXHRcdFx0dGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUNvbGxlY3Rpb25zKClcblx0XHR9XG5cblx0XHQvKiBIb21lICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG5cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25SZXNpemUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IHRydWVcblxuXHRcdHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0dGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoRG93bih2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaE1vdmUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZXZlbnQpXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQudXBkYXRlKHNjcm9sbClcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUudXBkYXRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQwNGI3NTE0OGVjYjBkMWRmYTFlXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjcmVhdGVBYm91dCIsImFib3V0IiwiQWJvdXQiLCJkZXN0cm95QWJvdXQiLCJjcmVhdGVDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJvblByZWxvYWRlZCIsIm9uQ2hhbmdlRW5kIiwib25DaGFuZ2VTdGFydCIsInVybCIsImhpZGUiLCJpc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIiwiaW5kZXhPZiIsImlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInNjcm9sbCIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==