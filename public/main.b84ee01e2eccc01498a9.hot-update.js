/*! For license information please see main.b84ee01e2eccc01498a9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var o=s("./node_modules/ogl/src/core/Renderer.js"),i=s("./node_modules/ogl/src/core/Camera.js"),h=s("./node_modules/ogl/src/core/Transform.js"),n=s("./app/components/Canvas/Home/index.js"),c=s("./app/components/Canvas/About/index.js"),a=s("./app/components/Canvas/Collections/index.js");Object(function(){var e=new Error("Cannot find module './Transition'");throw e.code="MODULE_NOT_FOUND",e}());class l{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize()}createRenderer(){this.renderer=new o.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new i.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new h.Transform}createHome(){this.home=new n.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyHome(){this.home&&(this.home.destroy(),this.home=null)}createAbout(){this.about=new c.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyAbout(){this.about&&(this.about.destroy(),this.about=null)}createCollections(){this.collections=new a.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyCollections(){this.collections&&(this.collections.destroy(),this.collections=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(){this.home&&this.home.hide(),this.about&&this.about.hide(),this.collections&&this.collections.hide(),this.isFromCollectionsToDetail="collections"===this.template&&url.indexOf("detail")>-1,this.isFromDetailToCollections="detail"===this.template&&url.indexOf("detail")>-1}onChangeEnd(e){"about"===e?this.createAbout():this.destroyAbout(),"collections"===e?this.createCollections():this.destroyCollections(),"home"===e?this.createHome():this.destroyHome()}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const o={sizes:this.sizes};this.home&&this.home.onResize(o),this.about&&this.about.onResize(o),this.collections&&this.collections.onResize(o)}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY;const t={x:this.x,y:this.y};this.home&&this.home.onTouchDown(t),this.about&&this.about.onTouchDown(t),this.collections&&this.collections.onTouchDown(t)}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchMove(o),this.about&&this.about.onTouchMove(o),this.collections&&this.collections.onTouchMove(o)}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s;const o={x:this.x,y:this.y};this.home&&this.home.onTouchUp(o),this.about&&this.about.onTouchUp(o),this.collections&&this.collections.onTouchUp(o)}onWheel(e){this.home&&this.home.onWheel(e),this.collections&&this.collections.onWheel(e)}update(e){this.about&&this.about.update(e),this.home&&this.home.update(),this.collections&&this.collections.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"0321695595cdb30bf20b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iODRlZTAxZTJlY2NjMDE0OThhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d2dCQVFlLE1BQU1BLEVBQ3BCQyxhQUFZLFNBQUVDLElBQ2JDLEtBQUtELFNBQVdBLEVBRWhCQyxLQUFLQyxFQUFJLENBQ1JDLE1BQU8sRUFDUEMsU0FBVSxFQUNWQyxJQUFLLEdBRU5KLEtBQUtLLEVBQUksQ0FDUkgsTUFBTyxFQUNQQyxTQUFVLEVBQ1ZDLElBQUssR0FHTkosS0FBS00saUJBQ0xOLEtBQUtPLGVBQ0xQLEtBQUtRLGNBRUxSLEtBQUtTLFVBQ0wsQ0FFREgsaUJBQ0NOLEtBQUtVLFNBQVcsSUFBSUMsRUFBQUEsU0FBUyxDQUM1QkMsT0FBTyxFQUNQQyxXQUFXLElBR1piLEtBQUtjLEdBQUtkLEtBQUtVLFNBQVNJLEdBRXhCQyxTQUFTQyxLQUFLQyxZQUFZakIsS0FBS2MsR0FBR0ksT0FDbEMsQ0FFRFgsZUFDQ1AsS0FBS21CLE9BQVMsSUFBSUMsRUFBQUEsT0FBT3BCLEtBQUtjLElBRTlCZCxLQUFLbUIsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEZCxjQUNDUixLQUFLdUIsTUFBUSxJQUFJQyxFQUFBQSxTQUNqQixDQUdEQyxhQUNDekIsS0FBSzBCLEtBQU8sSUFBSUMsRUFBQUEsUUFBSyxDQUNwQmIsR0FBSWQsS0FBS2MsR0FDVFMsTUFBT3ZCLEtBQUt1QixNQUNaSyxNQUFPNUIsS0FBSzRCLE9BRWIsQ0FFREMsY0FDTTdCLEtBQUswQixPQUVWMUIsS0FBSzBCLEtBQUtJLFVBQ1Y5QixLQUFLMEIsS0FBTyxLQUNaLENBR0RLLGNBQ0MvQixLQUFLZ0MsTUFBUSxJQUFJQyxFQUFBQSxRQUFNLENBQ3RCbkIsR0FBSWQsS0FBS2MsR0FDVFMsTUFBT3ZCLEtBQUt1QixNQUNaSyxNQUFPNUIsS0FBSzRCLE9BRWIsQ0FFRE0sZUFDTWxDLEtBQUtnQyxRQUVWaEMsS0FBS2dDLE1BQU1GLFVBQ1g5QixLQUFLZ0MsTUFBUSxLQUNiLENBR0RHLG9CQUNDbkMsS0FBS29DLFlBQWMsSUFBSUMsRUFBQUEsUUFBWSxDQUNsQ3ZCLEdBQUlkLEtBQUtjLEdBQ1RTLE1BQU92QixLQUFLdUIsTUFDWkssTUFBTzVCLEtBQUs0QixPQUViLENBRURVLHFCQUNNdEMsS0FBS29DLGNBRVZwQyxLQUFLb0MsWUFBWU4sVUFDakI5QixLQUFLb0MsWUFBYyxLQUNuQixDQUlERyxjQUNDdkMsS0FBS3dDLFlBQVl4QyxLQUFLRCxTQUN0QixDQUVEMEMsZ0JBQ0t6QyxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLZ0IsT0FDckIxQyxLQUFLZ0MsT0FBT2hDLEtBQUtnQyxNQUFNVSxPQUN2QjFDLEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVlNLE9BRXZDMUMsS0FBSzJDLDBCQUE4QyxnQkFBbEIzQyxLQUFLRCxVQUE4QjZDLElBQUlDLFFBQVEsV0FBYSxFQUM3RjdDLEtBQUs4QywwQkFBOEMsV0FBbEI5QyxLQUFLRCxVQUF5QjZDLElBQUlDLFFBQVEsV0FBYSxDQUN4RixDQUVETCxZQUFZekMsR0FFTSxVQUFiQSxFQUNIQyxLQUFLK0IsY0FFTC9CLEtBQUtrQyxlQUlXLGdCQUFibkMsRUFDSEMsS0FBS21DLG9CQUVMbkMsS0FBS3NDLHFCQUlXLFNBQWJ2QyxFQUNIQyxLQUFLeUIsYUFFTHpCLEtBQUs2QixhQUVOLENBRURwQixXQUNDVCxLQUFLVSxTQUFTcUMsUUFBUUMsT0FBT0MsV0FBWUQsT0FBT0UsYUFFaERsRCxLQUFLbUIsT0FBT2dDLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBR3BDLE1BQU1HLEVBQU1yRCxLQUFLbUIsT0FBT2tDLEtBQU9DLEtBQUtDLEdBQUssS0FDbkNDLEVBQVMsRUFBSUYsS0FBS0csSUFBSUosRUFBTSxHQUFLckQsS0FBS21CLE9BQU9FLFNBQVNDLEVBQ3REb0MsRUFBUUYsRUFBU3hELEtBQUttQixPQUFPaUMsT0FFbkNwRCxLQUFLNEIsTUFBUSxDQUNaNEIsU0FDQUUsU0FHRCxNQUFNQyxFQUFTLENBQ2QvQixNQUFPNUIsS0FBSzRCLE9BR1Q1QixLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLakIsU0FBU2tELEdBQzlCM0QsS0FBS2dDLE9BQU9oQyxLQUFLZ0MsTUFBTXZCLFNBQVNrRCxHQUNoQzNELEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVkzQixTQUFTa0QsRUFDaEQsQ0FFREMsWUFBWUMsR0FDWDdELEtBQUs4RCxRQUFTLEVBRWQ5RCxLQUFLQyxFQUFFQyxNQUFRMkQsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFNRyxRQUNoRWhFLEtBQUtLLEVBQUVILE1BQVEyRCxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdFLFFBQVVKLEVBQU1JLFFBRWhFLE1BQU1OLEVBQVMsQ0FDZDFELEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR0xMLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUtrQyxZQUFZRCxHQUNqQzNELEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU00QixZQUFZRCxHQUNuQzNELEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVl3QixZQUFZRCxFQUNuRCxDQUVETyxZQUFZTCxHQUNYLElBQUs3RCxLQUFLOEQsT0FBUSxPQUVsQixNQUFNN0QsRUFBSTRELEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDckQzRCxFQUFJd0QsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUUzRGpFLEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRWIsTUFBTXNELEVBQVMsQ0FDZDFELEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR0xMLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUt3QyxZQUFZUCxHQUNqQzNELEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU1rQyxZQUFZUCxHQUNuQzNELEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVk4QixZQUFZUCxFQUNuRCxDQUVEUSxVQUFVTixHQUNUN0QsS0FBSzhELFFBQVMsRUFFZCxNQUFNN0QsRUFBSTRELEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDckQzRCxFQUFJd0QsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUUzRGpFLEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRWIsTUFBTXNELEVBQVMsQ0FDZDFELEVBQUdELEtBQUtDLEVBQ1JJLEVBQUdMLEtBQUtLLEdBR0xMLEtBQUswQixNQUFNMUIsS0FBSzBCLEtBQUt5QyxVQUFVUixHQUMvQjNELEtBQUtnQyxPQUFPaEMsS0FBS2dDLE1BQU1tQyxVQUFVUixHQUNqQzNELEtBQUtvQyxhQUFhcEMsS0FBS29DLFlBQVkrQixVQUFVUixFQUNqRCxDQUVEUyxRQUFRUCxHQUNIN0QsS0FBSzBCLE1BQU0xQixLQUFLMEIsS0FBSzBDLFFBQVFQLEdBQzdCN0QsS0FBS29DLGFBQWFwQyxLQUFLb0MsWUFBWWdDLFFBQVFQLEVBQy9DLENBRURRLE9BQU9DLEdBQ0Z0RSxLQUFLZ0MsT0FBT2hDLEtBQUtnQyxNQUFNcUMsT0FBT0MsR0FDOUJ0RSxLQUFLMEIsTUFBTTFCLEtBQUswQixLQUFLMkMsU0FDckJyRSxLQUFLb0MsYUFBYXBDLEtBQUtvQyxZQUFZaUMsU0FFdkNyRSxLQUFLVSxTQUFTNkQsT0FBTyxDQUNwQnBELE9BQVFuQixLQUFLbUIsT0FDYkksTUFBT3ZCLEtBQUt1QixPQUViLGtCQ3RPRmlELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZSdcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0J1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXG5cbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4vVHJhbnNpdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXHR9XG5cblx0Y3JlYXRlUmVuZGVyZXIoKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG5cdFx0XHRhbHBoYTogdHJ1ZSxcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcblx0XHR9KVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlU2NlbmUoKSB7XG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUcmFuc2Zvcm0oKVxuXHR9XG5cblx0LyogSG9tZSAqL1xuXHRjcmVhdGVIb21lKCkge1xuXHRcdHRoaXMuaG9tZSA9IG5ldyBIb21lKHtcblx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveUhvbWUoKSB7XG5cdFx0aWYgKCF0aGlzLmhvbWUpIHJldHVyblxuXG5cdFx0dGhpcy5ob21lLmRlc3Ryb3koKVxuXHRcdHRoaXMuaG9tZSA9IG51bGxcblx0fVxuXG5cdC8qIEFib3V0ICovXG5cdGNyZWF0ZUFib3V0KCkge1xuXHRcdHRoaXMuYWJvdXQgPSBuZXcgQWJvdXQoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95QWJvdXQoKSB7XG5cdFx0aWYgKCF0aGlzLmFib3V0KSByZXR1cm5cblxuXHRcdHRoaXMuYWJvdXQuZGVzdHJveSgpXG5cdFx0dGhpcy5hYm91dCA9IG51bGxcblx0fVxuXG5cdC8qIENvbGxlY3Rpb24gKi9cblx0Y3JlYXRlQ29sbGVjdGlvbnMoKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9ucyA9IG5ldyBDb2xsZWN0aW9ucyh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3lDb2xsZWN0aW9ucygpIHtcblx0XHRpZiAoIXRoaXMuY29sbGVjdGlvbnMpIHJldHVyblxuXG5cdFx0dGhpcy5jb2xsZWN0aW9ucy5kZXN0cm95KClcblx0XHR0aGlzLmNvbGxlY3Rpb25zID0gbnVsbFxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXHR9XG5cblx0b25DaGFuZ2VTdGFydCgpIHtcblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUuaGlkZSgpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQuaGlkZSgpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMuaGlkZSgpXG5cblx0XHR0aGlzLmlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwgPSB0aGlzLnRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xO1xuXHRcdHRoaXMuaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyA9IHRoaXMudGVtcGxhdGUgPT09ICdkZXRhaWwnICYmIHVybC5pbmRleE9mKCdkZXRhaWwnKSA+IC0xO1xuXHR9XG5cblx0b25DaGFuZ2VFbmQodGVtcGxhdGUpIHtcblx0XHQvKiBBYm91dCAqL1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0dGhpcy5jcmVhdGVBYm91dCgpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZGVzdHJveUFib3V0KClcblx0XHR9XG5cblx0XHQvKiBDb2xsZWN0aW9uICovXG5cdFx0aWYgKHRlbXBsYXRlID09PSAnY29sbGVjdGlvbnMnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZUNvbGxlY3Rpb25zKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95Q29sbGVjdGlvbnMoKVxuXHRcdH1cblxuXHRcdC8qIEhvbWUgKi9cblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kZXN0cm95SG9tZSgpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cblx0XHR0aGlzLmNhbWVyYS5wZXJzcGVjdGl2ZSh7XG5cdFx0XHRhc3BlY3Q6IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuXHRcdH0pXG5cblx0XHRjb25zdCBmb3YgPSB0aGlzLmNhbWVyYS5mb3YgKiAoTWF0aC5QSSAvIDE4MClcblx0XHRjb25zdCBoZWlnaHQgPSAyICogTWF0aC50YW4oZm92IC8gMikgKiB0aGlzLmNhbWVyYS5wb3NpdGlvbi56XG5cdFx0Y29uc3Qgd2lkdGggPSBoZWlnaHQgKiB0aGlzLmNhbWVyYS5hc3BlY3RcblxuXHRcdHRoaXMuc2l6ZXMgPSB7XG5cdFx0XHRoZWlnaHQsXG5cdFx0XHR3aWR0aCxcblx0XHR9XG5cblx0XHRjb25zdCB2YWx1ZXMgPSB7XG5cdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25SZXNpemUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uUmVzaXplKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblJlc2l6ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0Y29uc3QgdmFsdWVzID0ge1xuXHRcdFx0eDogdGhpcy54LFxuXHRcdFx0eTogdGhpcy55LFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoRG93bih2YWx1ZXMpXG5cdFx0aWYgKHRoaXMuYWJvdXQpIHRoaXMuYWJvdXQub25Ub3VjaERvd24odmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hEb3duKHZhbHVlcylcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaE1vdmUodmFsdWVzKVxuXHRcdGlmICh0aGlzLmFib3V0KSB0aGlzLmFib3V0Lm9uVG91Y2hNb3ZlKHZhbHVlcylcblx0XHRpZiAodGhpcy5jb2xsZWN0aW9ucykgdGhpcy5jb2xsZWN0aW9ucy5vblRvdWNoTW92ZSh2YWx1ZXMpXG5cdH1cblxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHR0aGlzLmlzRG93biA9IGZhbHNlXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGNvbnN0IHZhbHVlcyA9IHtcblx0XHRcdHg6IHRoaXMueCxcblx0XHRcdHk6IHRoaXMueSxcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHZhbHVlcylcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC5vblRvdWNoVXAodmFsdWVzKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLm9uVG91Y2hVcCh2YWx1ZXMpXG5cdH1cblxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uV2hlZWwoZXZlbnQpXG5cdFx0aWYgKHRoaXMuY29sbGVjdGlvbnMpIHRoaXMuY29sbGVjdGlvbnMub25XaGVlbChldmVudClcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAodGhpcy5hYm91dCkgdGhpcy5hYm91dC51cGRhdGUoc2Nyb2xsKVxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS51cGRhdGUoKVxuXHRcdGlmICh0aGlzLmNvbGxlY3Rpb25zKSB0aGlzLmNvbGxlY3Rpb25zLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDMyMTY5NTU5NWNkYjMwYmYyMGJcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVIb21lIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImRlc3Ryb3lIb21lIiwiZGVzdHJveSIsImNyZWF0ZUFib3V0IiwiYWJvdXQiLCJBYm91dCIsImRlc3Ryb3lBYm91dCIsImNyZWF0ZUNvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRlc3Ryb3lDb2xsZWN0aW9ucyIsIm9uUHJlbG9hZGVkIiwib25DaGFuZ2VFbmQiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsImlzRnJvbUNvbGxlY3Rpb25zVG9EZXRhaWwiLCJ1cmwiLCJpbmRleE9mIiwiaXNGcm9tRGV0YWlsVG9Db2xsZWN0aW9ucyIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsImZvdiIsIk1hdGgiLCJQSSIsImhlaWdodCIsInRhbiIsIndpZHRoIiwidmFsdWVzIiwib25Ub3VjaERvd24iLCJldmVudCIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInVwZGF0ZSIsInNjcm9sbCIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==