/*! For license information please see main.666b07663365110c45de.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var i=s("./node_modules/ogl/src/core/Renderer.js"),o=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),a=s("./app/components/Canvas/Collections/index.js"),l=s("./app/components/Canvas/Detail/index.js"),r=s("./app/components/Canvas/Transition.js");class d{constructor({template:t}){this.template=t,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new o.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}createDetail(){this.detail=new l.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(t,e){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&e.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&e.indexOf("collections")>-1,(this.isFromCollectionsToDetail||this.isFromDetailToCollections)&&(this.transition=new r.default({collections:this.collections,gl:this.gl,scene:this.scene,sizes:this.sizes,url:e}))}onChangeEnd(t){"about"===t?this.createAbout():this.about&&this.destroyAbout(),"collections"===t?this.createCollections():this.collections&&this.destroyCollections(),"detail"===t?(this.createDetail(),this.transition&&this.transition.animateDetail()):this.detail&&this.destroyDetail(),"home"===t?this.createHome():this.destroyHome(),this.template=t}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const t=this.camera.fov*(Math.PI/180),e=2*Math.tan(t/2)*this.camera.position.z,s=e*this.camera.aspect;this.sizes={height:e,width:s};const i={sizes:this.sizes};this.home&&this.home.onResize(i),this.about&&this.about.onResize(i),this.collections&&this.collections.onResize(i),this.detail&&this.detail.onResize(i)}onTouchDown(t){this.isDown=!0,this.x.start=t.touches?t.touches[0].clientX:t.clientX,this.y.start=t.touches?t.touches[0].clientY:t.clientY;const e={x:this.x,y:this.y};this.home&&this.home.onTouchDown(e),this.about&&this.about.onTouchDown(e),this.detail&&this.detail.onTouchDown(e),this.collections&&this.collections.onTouchDown(e)}onTouchMove(t){if(!this.isDown)return;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchMove(i),this.about&&this.about.onTouchMove(i),this.collections&&this.collections.onTouchMove(i),this.detail&&this.detail.onTouchMove(i)}onTouchUp(t){this.isDown=!1;const e=t.touches?t.touches[0].clientX:t.clientX,s=t.touches?t.touches[0].clientY:t.clientY;this.x.end=e,this.y.end=s;const i={x:this.x,y:this.y};this.home&&this.home.onTouchUp(i),this.about&&this.about.onTouchUp(i),this.collections&&this.collections.onTouchUp(i),this.detail&&this.detail.onTouchUp(i)}onWheel(t){this.home&&this.home.onWheel(t),this.collections&&this.collections.onWheel(t)}update(t){this.about&&this.about.update(t),this.home&&this.home.update(),this.collections&&this.collections.update(),this.detail&&this.detail.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(t){t.h=()=>"a227b644b8f912f7e816"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNMEMsVUFBVVIsR0FDakNsRSxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZc0MsVUFBVVIsR0FDN0NsRSxLQUFLd0MsUUFBUXhDLEtBQUt3QyxPQUFPa0MsVUFBVVIsRUFDdkMsQ0FFRFMsUUFBUVAsR0FDSHBFLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUtpRCxRQUFRUCxHQUM3QnBFLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVl1QyxRQUFRUCxFQUMvQyxDQUVEUSxPQUFPQyxHQUNGN0UsS0FBS2dDLE9BQU9oQyxLQUFLZ0MsTUFBTTRDLE9BQU9DLEdBQzlCN0UsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBS2tELFNBQ3JCNUUsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWXdDLFNBQ25DNUUsS0FBS3dDLFFBQVF4QyxLQUFLd0MsT0FBT29DLFNBRTdCNUUsS0FBS1UsU0FBU29FLE9BQU8sQ0FDcEIzRCxPQUFRbkIsS0FBS21CLE9BQ2JJLE1BQU92QixLQUFLdUIsT0FFYixrQkN2UkZ3RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9BYm91dCdcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICcuL0NvbGxlY3Rpb25zJ1xuaW1wb3J0IERldGFpbCBmcm9tICcuL0RldGFpbCdcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSAnLi9UcmFuc2l0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3Rvcih7IHRlbXBsYXRlIH0pIHtcblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1XG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHQvKiBIb21lICovXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95SG9tZSgpIHtcblx0XHRpZiAoIXRoaXMuaG9tZSkgcmV0dXJuXG5cblx0XHR0aGlzLmhvbWUuZGVzdHJveSgpXG5cdFx0dGhpcy5ob21lID0gbnVsbFxuXHR9XG5cblx0LyogQWJvdXQgKi9cblx0Y3JlYXRlQWJvdXQoKSB7XG5cdFx0dGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lBYm91dCgpIHtcblx0XHRpZiAoIXRoaXMuYWJvdXQpIHJldHVyblxuXG5cdFx0dGhpcy5hYm91dC5kZXN0cm95KClcblx0XHR0aGlzLmFib3V0ID0gbnVsbFxuXHR9XG5cblx0LyogQ29sbGVjdGlvbiAqL1xuXHRjcmVhdGVDb2xsZWN0aW9ucygpIHtcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUNvbGxlY3Rpb25zKCkge1xuXHRcdGlmICghdGhpcy5jb2xsZWN0aW9ucykgcmV0dXJuXG5cblx0XHR0aGlzLmNvbGxlY3Rpb25zLmRlc3Ryb3koKVxuXHRcdHRoaXMuY29sbGVjdGlvbnMgPSBudWxsXG5cdH1cblxuXHQvKiBEZXRhaWwgKi9cblx0Y3JlYXRlRGV0YWlsKCkge1xuXHRcdHRoaXMuZGV0YWlsID0gbmV3IERldGFpbCh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lEZXRhaWwoKSB7XG5cdFx0aWYgKCF0aGlzLmRldGFpbCkgcmV0dXJuXG5cblx0XHR0aGlzLmRldGFpbC5kZXN0cm95KClcblx0XHR0aGlzLmRldGFpbCA9IG51bGxcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblx0fVxuXG5cdG9uQ2hhbmdlU3RhcnQodGVtcGxhdGUsIHVybCkge1xuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5oaWRlKClcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5oaWRlKClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5oaWRlKClcblxuXHRcdHRoaXMuaXNGcm9tQ29sbGVjdGlvbnNUb0RldGFpbCA9IHRoaXMudGVtcGxhdGUgPT09ICdjb2xsZWN0aW9ucycgJiYgdXJsLmluZGV4T2YoJ2RldGFpbCcpID4gLTFcblx0XHR0aGlzLmlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMgPSB0aGlzLnRlbXBsYXRlID09PSAnZGV0YWlsJyAmJiB1cmwuaW5kZXhPZignY29sbGVjdGlvbnMnKSA+IC0xXG5cblx0XHRpZiAodGhpcy5pc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIHx8IHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucykge1xuXHRcdFx0dGhpcy50cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oe1xuXHRcdFx0XHRjb2xsZWN0aW9uczogdGhpcy5jb2xsZWN0aW9ucyxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdFx0dXJsLFxuXHRcdFx0fSlcblxuXHRcdFx0Ly8gdGhpcy50cmFuc2l0aW9uLnNldEVsZW1lbnQodGhpcy5jb2xsZWN0aW9ucyB8fCB0aGlzLmRldGFpbClcblx0XHR9XG5cdH1cblxuXHRvbkNoYW5nZUVuZCh0ZW1wbGF0ZSkge1xuXHRcdC8qIEFib3V0ICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUFib3V0KClcblx0XHR9IGVsc2UgaWYgKHRoaXMuYWJvdXQpIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cblx0XHQvKiBDb2xsZWN0aW9uICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcblx0XHR9IGVsc2UgaWYgKHRoaXMuY29sbGVjdGlvbnMpIHtcblx0XHRcdHRoaXMuZGVzdHJveUNvbGxlY3Rpb25zKClcblx0XHR9XG5cblx0XHQvKiBEZXRhaWwgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdkZXRhaWwnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURldGFpbCgpXG5cbiAgICAgIGlmKHRoaXMudHJhbnNpdGlvbikge1xuICAgICAgICB0aGlzLnRyYW5zaXRpb24uYW5pbWF0ZURldGFpbCgpXG4gICAgICB9XG5cblxuXHRcdH0gZWxzZSBpZiAodGhpcy5kZXRhaWwpIHtcblx0XHRcdHRoaXMuZGVzdHJveURldGFpbCgpXG5cdFx0fVxuXG5cdFx0LyogSG9tZSAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2hvbWUnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUhvbWUoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lIb21lKClcblx0XHR9XG5cblx0XHR0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGVcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblJlc2l6ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwub25SZXNpemUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IHRydWVcblxuXHRcdHRoaXMueC5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0dGhpcy55LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5kZXRhaWwpIHRoaXMuZGV0YWlsLm9uVG91Y2hEb3duKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoRG93bih2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwub25Ub3VjaE1vdmUodmFsdWVzKVxuXHR9XG5cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHR4OiB0aGlzLngsXG5cdFx0XHR5OiB0aGlzLnksXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmRldGFpbCkgdGhpcy5kZXRhaWwub25Ub3VjaFVwKHZhbHVlcylcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vbldoZWVsKGV2ZW50KVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0LnVwZGF0ZShzY3JvbGwpXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMudXBkYXRlKClcblx0XHRpZiAodGhpcy5kZXRhaWwpIHRoaXMuZGV0YWlsLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYTIyN2I2NDRiOGY5MTJmN2U4MTZcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsImNyZWF0ZURldGFpbCIsImRldGFpbCIsIkRldGFpbCIsImRlc3Ryb3lEZXRhaWwiLCJvblByZWxvYWRlZCIsIm9uQ2hhbmdlRW5kIiwib25DaGFuZ2VTdGFydCIsInVybCIsImhpZGUiLCJpc0Zyb21Db2xsZWN0aW9uc1RvRGV0YWlsIiwiaW5kZXhPZiIsImlzRnJvbURldGFpbFRvQ29sbGVjdGlvbnMiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsImFuaW1hdGVEZXRhaWwiLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsInZhbHVlcyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=