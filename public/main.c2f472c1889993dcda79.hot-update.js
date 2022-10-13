/*! For license information please see main.c2f472c1889993dcda79.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),l=s("./app/components/Canvas/Collections/index.js"),a=s("./app/components/Canvas/Detail/index.js"),r=s("./app/components/Canvas/Transition.js");class d{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new r.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}))}onChangeEnd(t){"about"===t?this.createAbout():this.destroyAbout(),"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"detail"===t?this.createDetail():this.detail&&this.destroyDetail(),"home"===t?this.createHome():this.destroyHome(),this.template=t}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.home&&this.home.onTouchDown(e),this.about&&this.about.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.collections&&this.collections.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i)}onWheel(t){this.home&&this.home.onWheel(t),this.collections&&this.collections.onWheel(t)}update(t){this.about&&this.about.update(t),this.home&&this.home.update(),this.collections&&this.collections.update(),this.detail&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"25e01b28f52d7efc5e85"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVVSLEVBQ3ZDLENBRURTLFFBQVFQLEdBQ0huRSxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLZ0QsUUFBUVAsR0FDN0JuRSxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZc0MsUUFBUVAsRUFDL0MsQ0FFRFEsT0FBT0MsR0FDRjVFLEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU0yQyxPQUFPQyxHQUM5QjVFLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUtpRCxTQUNyQjNFLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVl1QyxTQUNuQzNFLEtBQUt3QyxRQUFReEMsS0FBS29DLFlBQVl1QyxTQUVsQzNFLEtBQUtVLFNBQVNtRSxPQUFPLENBQ3BCMUQsT0FBUW5CLEtBQUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRWIsa0JDaFJGdUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9Db2xsZWN0aW9ucydcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwnXG5cbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vVHJhbnNpdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRGV0YWlsICovXG5cdGNyZWF0ZURldGFpbCgpIHtcblx0XHR0aGlzLmRldGFpbCA9IG5ldyBEZXRhaWwoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95RGV0YWlsKCkge1xuXHRcdGlmICghdGhpcy5kZXRhaWwpIHJldHVyblxuXG5cdFx0dGhpcy5kZXRhaWwuZGVzdHJveSgpXG5cdFx0dGhpcy5kZXRhaWwgPSBudWxsXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRvbkNoYW5nZVN0YXJ0KHRlbXBsYXRlLCB1cmwpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUuaGlkZSgpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQuaGlkZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG5cblx0XHR0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXG5cdFx0dGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2RldGFpbCcgJiYgdXJsLmluZGV4T2YoJ2NvbGxlY3Rpb25zJykgPiAtMVxuXG5cdFx0aWYgKHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHtcblx0XHRcdFx0Y29sbGVjdGlvbnM6IHRoaXMuY29sbGVjdGlvbnMsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHRcdHVybCxcblx0XHRcdH0pXG5cblx0XHRcdC8vIHRoaXMudHJhbnNpdGlvbi5zZXRFbGVtZW50KHRoaXMuY29sbGVjdGlvbnMgfHwgdGhpcy5kZXRhaWwpXG5cdFx0fVxuXHR9XG5cblx0b25DaGFuZ2VFbmQodGVtcGxhdGUpIHtcblx0XHQvKiBBYm91dCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cblx0XHQvKiBDb2xsZWN0aW9uICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdHRoaXMuZGVzdHJveUNvbGxlY3Rpb25zKClcblx0XHR9XG5cblx0XHQvKiBEZXRhaWwgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdkZXRhaWwnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURldGFpbCgpXG5cdFx0fSBlbHNlIGlmICh0aGlzLmRldGFpbCkge1xuXHRcdFx0dGhpcy5kZXN0cm95RGV0YWlsKClcblx0XHR9XG5cblx0XHQvKiBIb21lICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZXZlbnQpXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQudXBkYXRlKHNjcm9sbClcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUudXBkYXRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5jb2xsZWN0aW9ucy51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI1ZTAxYjI4ZjUyZDdlZmM1ZTg1XCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjcmVhdGVBYm91dCIsImFib3V0IiwiQWJvdXQiLCJkZXN0cm95QWJvdXQiLCJjcmVhdGVDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJjcmVhdGVEZXRhaWwiLCJkZXRhaWwiLCJEZXRhaWwiLCJkZXN0cm95RGV0YWlsIiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJ1cmwiLCJoaWRlIiwiaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCIsImluZGV4T2YiLCJpc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zIiwidHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=