/*! For license information please see main.e2815439fec933303a5a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),a=s("./app/components/Canvas/Collections/index.js"),l=s("./app/components/Canvas/Detail/index.js"),r=s("./app/components/Canvas/Transition.js");class d{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new r.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}))}onChangeEnd(t){"about"===t?this.createAbout():this.about&&this.destroyAbout(),"collections"===t?(this.createCollections(),this.transition&&this.transition.animateCollections(this.collections)):this.collections&&this.destroyCollections(),"detail"===t?(this.createDetail(),GSAP.delayedCall(.5,(t=>{this.transition&&this.transition.animateDetail(this.detail)}))):this.detail&&this.destroyDetail(),"home"===t?this.createHome():this.destroyHome(),this.template=t}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i),this.detail&&this.detail.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.home&&this.home.onTouchDown(e),this.about&&this.about.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.collections&&this.collections.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i)}onWheel(t){this.home&&this.home.onWheel(t),this.collections&&this.collections.onWheel(t)}update(t){this.about&&this.about.update(t),this.home&&this.home.update(),this.collections&&this.collections.update(),this.detail&&this.detail.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"c1877d625a295719461e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBS0MsRUFDUkksRUFBR0wsS0FBS0ssR0FHTEwsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBS29ELFVBQVVSLEdBQy9CdEUsS0FBS2dDLE9BQU9oQyxLQUFLZ0MsTUFBTThDLFVBQVVSLEdBQ2pDdEUsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWTBDLFVBQVVSLEdBQzdDdEUsS0FBS3dDLFFBQVF4QyxLQUFLd0MsT0FBT3NDLFVBQVVSLEVBQ3ZDLENBRURTLFFBQVFQLEdBQ0h4RSxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLcUQsUUFBUVAsR0FDN0J4RSxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZMkMsUUFBUVAsRUFDL0MsQ0FFRFEsT0FBT0MsR0FDRmpGLEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU1nRCxPQUFPQyxHQUM5QmpGLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUtzRCxTQUNyQmhGLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVk0QyxTQUNuQ2hGLEtBQUt3QyxRQUFReEMsS0FBS3dDLE9BQU93QyxTQUU3QmhGLEtBQUtVLFNBQVN3RSxPQUFPLENBQ3BCL0QsT0FBUW5CLEtBQUttQixPQUNiSSxNQUFPdkIsS0FBS3VCLE9BRWIsa0JDM1JGNEQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vQWJvdXQnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAnLi9Db2xsZWN0aW9ucydcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwnXG5cbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vVHJhbnNpdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRGV0YWlsICovXG5cdGNyZWF0ZURldGFpbCgpIHtcblx0XHR0aGlzLmRldGFpbCA9IG5ldyBEZXRhaWwoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95RGV0YWlsKCkge1xuXHRcdGlmICghdGhpcy5kZXRhaWwpIHJldHVyblxuXG5cdFx0dGhpcy5kZXRhaWwuZGVzdHJveSgpXG5cdFx0dGhpcy5kZXRhaWwgPSBudWxsXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cdH1cblxuXHRvbkNoYW5nZVN0YXJ0KHRlbXBsYXRlLCB1cmwpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUuaGlkZSgpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQuaGlkZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG5cblx0XHR0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xXG5cdFx0dGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2RldGFpbCcgJiYgdXJsLmluZGV4T2YoJ2NvbGxlY3Rpb25zJykgPiAtMVxuXG5cdFx0aWYgKHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCB8fCB0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMpIHtcblx0XHRcdHRoaXMudHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHtcblx0XHRcdFx0Y29sbGVjdGlvbnM6IHRoaXMuY29sbGVjdGlvbnMsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHRcdHVybCxcblx0XHRcdH0pXG5cblx0XHRcdC8vIHRoaXMudHJhbnNpdGlvbi5zZXRFbGVtZW50KHRoaXMuY29sbGVjdGlvbnMgfHwgdGhpcy5kZXRhaWwpXG5cdFx0fVxuXHR9XG5cblx0b25DaGFuZ2VFbmQodGVtcGxhdGUpIHtcblx0XHQvKiBBYm91dCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIGlmICh0aGlzLmFib3V0KSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lBYm91dCgpXG5cdFx0fVxuXG5cdFx0LyogQ29sbGVjdGlvbiAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJykge1xuXHRcdFx0dGhpcy5jcmVhdGVDb2xsZWN0aW9ucygpXG5cblx0XHRcdGlmICh0aGlzLnRyYW5zaXRpb24pIHtcblx0XHRcdFx0dGhpcy50cmFuc2l0aW9uLmFuaW1hdGVDb2xsZWN0aW9ucyh0aGlzLmNvbGxlY3Rpb25zKVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0dGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuXHRcdH1cblxuXHRcdC8qIERldGFpbCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2RldGFpbCcpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGV0YWlsKClcblxuXHRcdFx0R1NBUC5kZWxheWVkQ2FsbCgwLjUsIF8gPT4ge1xuXHRcdFx0XHRpZiAodGhpcy50cmFuc2l0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy50cmFuc2l0aW9uLmFuaW1hdGVEZXRhaWwodGhpcy5kZXRhaWwpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSBlbHNlIGlmICh0aGlzLmRldGFpbCkge1xuXHRcdFx0dGhpcy5kZXN0cm95RGV0YWlsKClcblx0XHR9XG5cblx0XHQvKiBIb21lICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnaG9tZScpIHtcblx0XHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUhvbWUoKVxuXHRcdH1cblxuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblRvdWNoVXAodmFsdWVzKVxuXHR9XG5cblx0b25XaGVlbChldmVudCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vbldoZWVsKGV2ZW50KVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uV2hlZWwoZXZlbnQpXG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQudXBkYXRlKHNjcm9sbClcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUudXBkYXRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwudXBkYXRlKClcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjMTg3N2Q2MjVhMjk1NzE5NDYxZVwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwidGhpcyIsIngiLCJzdGFydCIsImRpc3RhbmNlIiwiZW5kIiwieSIsImNyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlQ2FtZXJhIiwiY3JlYXRlU2NlbmUiLCJvblJlc2l6ZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJzY2VuZSIsIlRyYW5zZm9ybSIsImNyZWF0ZUhvbWUiLCJob21lIiwiSG9tZSIsInNpemVzIiwiZGVzdHJveUhvbWUiLCJkZXN0cm95IiwiY3JlYXRlQWJvdXQiLCJhYm91dCIsIkFib3V0IiwiZGVzdHJveUFib3V0IiwiY3JlYXRlQ29sbGVjdGlvbnMiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGVzdHJveUNvbGxlY3Rpb25zIiwiY3JlYXRlRGV0YWlsIiwiZGV0YWlsIiwiRGV0YWlsIiwiZGVzdHJveURldGFpbCIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJvbkNoYW5nZVN0YXJ0IiwidXJsIiwiaGlkZSIsImlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwiLCJpbmRleE9mIiwiaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyIsInRyYW5zaXRpb24iLCJUcmFuc2l0aW9uIiwiYW5pbWF0ZUNvbGxlY3Rpb25zIiwiR1NBUCIsImRlbGF5ZWRDYWxsIiwiXyIsImFuaW1hdGVEZXRhaWwiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=