/*! For license information please see main.826f78f617d1897783ef.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),a=s("./app/components/Canvas/Collections/index.js"),l=s("./app/components/Canvas/Detail/index.js"),r=s("./app/components/Canvas/Transition.js");class d{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new r.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}))}onChangeEnd(t){"about"===t?this.createAbout():this.about&&this.destroyAbout(),"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"detail"===t?(this.createDetail(),this.transition&&this.transition.animateDetail(this.detail)):this.detail&&this.destroyDetail(),"home"===t?this.createHome():this.destroyHome(),this.template=t}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i),this.detail&&this.detail.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.home&&this.home.onTouchDown(e),this.about&&this.about.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.collections&&this.collections.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i)}onWheel(t){this.home&&this.home.onWheel(t),this.collections&&this.collections.onWheel(t)}update(t){this.about&&this.about.update(t),this.home&&this.home.update(),this.collections&&this.collections.update(),this.detail&&this.detail.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"1fe886b5df8710cdeb4b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPaEMsS0FBS2dDLE1BQU0wQyxVQUFVUixHQUNqQ2xFLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVlzQyxVQUFVUixHQUM3Q2xFLEtBQUt3QyxRQUFReEMsS0FBS3dDLE9BQU9rQyxVQUFVUixFQUN2QyxDQUVEUyxRQUFRUCxHQUNIcEUsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBS2lELFFBQVFQLEdBQzdCcEUsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWXVDLFFBQVFQLEVBQy9DLENBRURRLE9BQU9DLEdBQ0Y3RSxLQUFLZ0MsT0FBT2hDLEtBQUtnQyxNQUFNNEMsT0FBT0MsR0FDOUI3RSxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLa0QsU0FDckI1RSxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZd0MsU0FDbkM1RSxLQUFLd0MsUUFBUXhDLEtBQUt3QyxPQUFPb0MsU0FFN0I1RSxLQUFLVSxTQUFTb0UsT0FBTyxDQUNwQjNELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUViLGtCQ3hSRndELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vRGV0YWlsJ1xuXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICcuL1RyYW5zaXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHRkaXN0YW5jZTogMCxcblx0XHRcdGVuZDogMCxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuXHRcdFx0YWxwaGE6IHRydWUsXG5cdFx0XHRhbnRpYWxpYXM6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsXG5cblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZ2wuY2FudmFzKVxuXHR9XG5cblx0Y3JlYXRlQ2FtZXJhKCkge1xuXHRcdHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdC8qIEhvbWUgKi9cblx0Y3JlYXRlSG9tZSgpIHtcblx0XHR0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lIb21lKCkge1xuXHRcdGlmICghdGhpcy5ob21lKSByZXR1cm5cblxuXHRcdHRoaXMuaG9tZS5kZXN0cm95KClcblx0XHR0aGlzLmhvbWUgPSBudWxsXG5cdH1cblxuXHQvKiBBYm91dCAqL1xuXHRjcmVhdGVBYm91dCgpIHtcblx0XHR0aGlzLmFib3V0ID0gbmV3IEFib3V0KHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUFib3V0KCkge1xuXHRcdGlmICghdGhpcy5hYm91dCkgcmV0dXJuXG5cblx0XHR0aGlzLmFib3V0LmRlc3Ryb3koKVxuXHRcdHRoaXMuYWJvdXQgPSBudWxsXG5cdH1cblxuXHQvKiBDb2xsZWN0aW9uICovXG5cdGNyZWF0ZUNvbGxlY3Rpb25zKCkge1xuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBuZXcgQ29sbGVjdGlvbnMoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95Q29sbGVjdGlvbnMoKSB7XG5cdFx0aWYgKCF0aGlzLmNvbGxlY3Rpb25zKSByZXR1cm5cblxuXHRcdHRoaXMuY29sbGVjdGlvbnMuZGVzdHJveSgpXG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG51bGxcblx0fVxuXG5cdC8qIERldGFpbCAqL1xuXHRjcmVhdGVEZXRhaWwoKSB7XG5cdFx0dGhpcy5kZXRhaWwgPSBuZXcgRGV0YWlsKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveURldGFpbCgpIHtcblx0XHRpZiAoIXRoaXMuZGV0YWlsKSByZXR1cm5cblxuXHRcdHRoaXMuZGV0YWlsLmRlc3Ryb3koKVxuXHRcdHRoaXMuZGV0YWlsID0gbnVsbFxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXHR9XG5cblx0b25DaGFuZ2VTdGFydCh0ZW1wbGF0ZSwgdXJsKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLmhpZGUoKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0LmhpZGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLmhpZGUoKVxuXG5cdFx0dGhpcy5pc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsID0gdGhpcy50ZW1wbGF0ZSA9PT0gJ2NvbGxlY3Rpb25zJyAmJiB1cmwuaW5kZXhPZignZGV0YWlsJykgPiAtMVxuXHRcdHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyA9IHRoaXMudGVtcGxhdGUgPT09ICdkZXRhaWwnICYmIHVybC5pbmRleE9mKCdjb2xsZWN0aW9ucycpID4gLTFcblxuXHRcdGlmICh0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgfHwgdGhpcy5pc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zKSB7XG5cdFx0XHR0aGlzLnRyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbih7XG5cdFx0XHRcdGNvbGxlY3Rpb25zOiB0aGlzLmNvbGxlY3Rpb25zLFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0XHR1cmwsXG5cdFx0XHR9KVxuXG5cdFx0XHQvLyB0aGlzLnRyYW5zaXRpb24uc2V0RWxlbWVudCh0aGlzLmNvbGxlY3Rpb25zIHx8IHRoaXMuZGV0YWlsKVxuXHRcdH1cblx0fVxuXG5cdG9uQ2hhbmdlRW5kKHRlbXBsYXRlKSB7XG5cdFx0LyogQWJvdXQgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdhYm91dCcpIHtcblx0XHRcdHRoaXMuY3JlYXRlQWJvdXQoKVxuXHRcdH0gZWxzZSBpZiAodGhpcy5hYm91dCkge1xuXHRcdFx0dGhpcy5kZXN0cm95QWJvdXQoKVxuXHRcdH1cblxuXHRcdC8qIENvbGxlY3Rpb24gKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycpIHtcblx0XHRcdHRoaXMuY3JlYXRlQ29sbGVjdGlvbnMoKVxuXG5cblxuXHRcdH0gZWxzZSBpZiAodGhpcy5jb2xsZWN0aW9ucykge1xuXHRcdFx0dGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuXHRcdH1cblxuXHRcdC8qIERldGFpbCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2RldGFpbCcpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGV0YWlsKClcblxuXHRcdFx0aWYgKHRoaXMudHJhbnNpdGlvbikge1xuXHRcdFx0XHR0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZURldGFpbCh0aGlzLmRldGFpbClcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHRoaXMuZGV0YWlsKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lEZXRhaWwoKVxuXHRcdH1cblxuXHRcdC8qIEhvbWUgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5kZXRhaWwpIHRoaXMuZGV0YWlsLm9uUmVzaXplKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaERvd24odmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAoIXRoaXMuaXNEb3duKSByZXR1cm5cblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5kZXRhaWwpIHRoaXMuZGV0YWlsLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gZmFsc2VcblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5kZXRhaWwpIHRoaXMuZGV0YWlsLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZSgpXG5cdFx0aWYgKHRoaXMuZGV0YWlsKSB0aGlzLmRldGFpbC51cGRhdGUoKVxuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuXHRcdFx0Y2FtZXJhOiB0aGlzLmNhbWVyYSxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmZTg4NmI1ZGY4NzEwY2RlYjRiXCIpIl0sIm5hbWVzIjpbIkNhbnZhcyIsImNvbnN0cnVjdG9yIiwidGVtcGxhdGUiLCJ0aGlzIiwieCIsInN0YXJ0IiwiZGlzdGFuY2UiLCJlbmQiLCJ5IiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsInNjZW5lIiwiVHJhbnNmb3JtIiwiY3JlYXRlSG9tZSIsImhvbWUiLCJIb21lIiwic2l6ZXMiLCJkZXN0cm95SG9tZSIsImRlc3Ryb3kiLCJjcmVhdGVBYm91dCIsImFib3V0IiwiQWJvdXQiLCJkZXN0cm95QWJvdXQiLCJjcmVhdGVDb2xsZWN0aW9ucyIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXN0cm95Q29sbGVjdGlvbnMiLCJjcmVhdGVEZXRhaWwiLCJkZXRhaWwiLCJEZXRhaWwiLCJkZXN0cm95RGV0YWlsIiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJ1cmwiLCJoaWRlIiwiaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCIsImluZGV4T2YiLCJpc0Zyb21EZXRhaWxUb0NvbGxlY3Rpb25zIiwidHJhbnNpdGlvbiIsIlRyYW5zaXRpb24iLCJhbmltYXRlRGV0YWlsIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJ2YWx1ZXMiLCJvblRvdWNoRG93biIsImV2ZW50IiwiaXNEb3duIiwidG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwidXBkYXRlIiwic2Nyb2xsIiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9