/*! For license information please see main.ecd89a2264e4bdd9ffbf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),o=s("./app/components/Canvas/Home/index.js");class c{constructor({template:e}){this.template=e,this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.onRouteUpdate(this.template),this.createHome()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new n.Transform}onRouteUpdate(e){"home"===e?this.createHome():this.home}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.home&&this.home.onTouchUp({x:this.x,y:this.y})}onWheel(e){this.home&&this.home.onWheel(e)}update(){this.home&&this.home.update(),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"3a1a71137320bfe352b3"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lY2Q4OWEyMjY0ZTRiZGQ5ZmZiZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1VBSWUsTUFBTUEsRUFDcEJDLGFBQVksU0FBRUMsSUFDYkMsS0FBS0QsU0FBV0EsRUFDaEJDLEtBQUtDLEVBQUksQ0FDUkMsTUFBTyxFQUNQQyxTQUFVLEVBQ1ZDLElBQUssR0FFTkosS0FBS0ssRUFBSSxDQUNSSCxNQUFPLEVBQ1BDLFNBQVUsRUFDVkMsSUFBSyxHQUdOSixLQUFLTSxpQkFDTE4sS0FBS08sZUFDTFAsS0FBS1EsY0FFTFIsS0FBS1MsV0FFTFQsS0FBS1UsY0FBY1YsS0FBS0QsVUFFeEJDLEtBQUtXLFlBQ0wsQ0FFREwsaUJBQ0NOLEtBQUtZLFNBQVcsSUFBSUMsRUFBQUEsU0FBUyxDQUM1QkMsT0FBTyxFQUNQQyxXQUFXLElBR1pmLEtBQUtnQixHQUFLaEIsS0FBS1ksU0FBU0ksR0FFeEJDLFNBQVNDLEtBQUtDLFlBQVluQixLQUFLZ0IsR0FBR0ksT0FDbEMsQ0FFRGIsZUFDQ1AsS0FBS3FCLE9BQVMsSUFBSUMsRUFBQUEsT0FBT3RCLEtBQUtnQixJQUM5QmhCLEtBQUtxQixPQUFPRSxTQUFTQyxFQUFJLENBQ3pCLENBRURiLGFBQ0NYLEtBQUt5QixLQUFPLElBQUlDLEVBQUFBLFFBQUssQ0FDcEJWLEdBQUloQixLQUFLZ0IsR0FDVFcsTUFBTzNCLEtBQUsyQixNQUNaQyxNQUFPNUIsS0FBSzRCLE9BRWIsQ0FFRHBCLGNBQ0NSLEtBQUsyQixNQUFRLElBQUlFLEVBQUFBLFNBQ2pCLENBRURuQixjQUFjWCxHQUNJLFNBQWJBLEVBQ0hDLEtBQUtXLGFBQ0tYLEtBQUt5QixJQUVoQixDQUVEaEIsV0FDQ1QsS0FBS1ksU0FBU2tCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEakMsS0FBS3FCLE9BQU9hLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBR3BDLE1BQU1HLEVBQU1wQyxLQUFLcUIsT0FBT2UsS0FBT0MsS0FBS0MsR0FBSyxLQUNuQ0MsRUFBUyxFQUFJRixLQUFLRyxJQUFJSixFQUFNLEdBQUtwQyxLQUFLcUIsT0FBT0UsU0FBU0MsRUFDdERpQixFQUFRRixFQUFTdkMsS0FBS3FCLE9BQU9jLE9BRW5DbkMsS0FBSzRCLE1BQVEsQ0FDWlcsU0FDQUUsU0FHR3pDLEtBQUt5QixNQUNSekIsS0FBS3lCLEtBQUtoQixTQUFTLENBQ2xCbUIsTUFBTzVCLEtBQUs0QixPQUVkLENBRURjLFlBQVlDLEdBQ1gzQyxLQUFLNEMsUUFBUyxFQUVkNUMsS0FBS0MsRUFBRUMsTUFBUXlDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDaEU5QyxLQUFLSyxFQUFFSCxNQUFReUMsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUU1RC9DLEtBQUt5QixNQUFNekIsS0FBS3lCLEtBQUtpQixZQUFZLENBQUV6QyxFQUFHRCxLQUFLQyxFQUFHSSxFQUFHTCxLQUFLSyxHQUMxRCxDQUNEMkMsWUFBWUwsR0FDWCxJQUFLM0MsS0FBSzRDLE9BQVEsT0FFbEIsTUFBTTNDLEVBQUkwQyxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdDLFFBQVVILEVBQU1HLFFBQ3JEekMsRUFBSXNDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0UsUUFBVUosRUFBTUksUUFFM0QvQyxLQUFLQyxFQUFFRyxJQUFNSCxFQUNiRCxLQUFLSyxFQUFFRCxJQUFNQyxFQUVUTCxLQUFLeUIsTUFBTXpCLEtBQUt5QixLQUFLdUIsWUFBWSxDQUFFL0MsRUFBR0QsS0FBS0MsRUFBR0ksRUFBR0wsS0FBS0ssR0FDMUQsQ0FDRDRDLFVBQVVOLEdBQ1QzQyxLQUFLNEMsUUFBUyxFQUVkLE1BQU0zQyxFQUFJMEMsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFNRyxRQUNyRHpDLEVBQUlzQyxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdFLFFBQVVKLEVBQU1JLFFBRTNEL0MsS0FBS0MsRUFBRUcsSUFBTUgsRUFDYkQsS0FBS0ssRUFBRUQsSUFBTUMsRUFFVEwsS0FBS3lCLE1BQU16QixLQUFLeUIsS0FBS3dCLFVBQVUsQ0FBRWhELEVBQUdELEtBQUtDLEVBQUdJLEVBQUdMLEtBQUtLLEdBQ3hELENBRUQ2QyxRQUFRUCxHQUNIM0MsS0FBS3lCLE1BQ1J6QixLQUFLeUIsS0FBS3lCLFFBQVFQLEVBRW5CLENBRURRLFNBQ0tuRCxLQUFLeUIsTUFBTXpCLEtBQUt5QixLQUFLMEIsU0FFekJuRCxLQUFLWSxTQUFTd0MsT0FBTyxDQUNwQi9CLE9BQVFyQixLQUFLcUIsT0FDYk0sTUFBTzNCLEtBQUsyQixPQUViLGtCQ2xJRjBCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXHRcdHRoaXMueCA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXHRcdHRoaXMueSA9IHtcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0ZGlzdGFuY2U6IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVSZW5kZXJlcigpXG5cdFx0dGhpcy5jcmVhdGVDYW1lcmEoKVxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLm9uUm91dGVVcGRhdGUodGhpcy50ZW1wbGF0ZSlcblxuXHRcdHRoaXMuY3JlYXRlSG9tZSgpXG5cdH1cblxuXHRjcmVhdGVSZW5kZXJlcigpIHtcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcblx0XHRcdGFscGhhOiB0cnVlLFxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdH0pXG5cblx0XHR0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbFxuXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcylcblx0fVxuXG5cdGNyZWF0ZUNhbWVyYSgpIHtcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEodGhpcy5nbClcblx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNVxuXHR9XG5cblx0Y3JlYXRlSG9tZSgpIHtcblx0XHR0aGlzLmhvbWUgPSBuZXcgSG9tZSh7XG5cdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdG9uUm91dGVVcGRhdGUodGVtcGxhdGUpIHtcblx0XHRpZiAodGVtcGxhdGUgPT09ICdob21lJykge1xuXHRcdFx0dGhpcy5jcmVhdGVIb21lKClcblx0XHR9IGVsc2UgaWYgKHRoaXMuaG9tZSkge1xuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXG5cdFx0Y29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG5cdFx0Y29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuXHRcdGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cblx0XHR0aGlzLnNpemVzID0ge1xuXHRcdFx0aGVpZ2h0LFxuXHRcdFx0d2lkdGgsXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaG9tZSlcblx0XHRcdHRoaXMuaG9tZS5vblJlc2l6ZSh7XG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSB0cnVlXG5cblx0XHR0aGlzLnguc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdHRoaXMueS5zdGFydCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaERvd24oeyB4OiB0aGlzLngsIHk6IHRoaXMueSB9KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cblx0XHRjb25zdCB4ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHRjb25zdCB5ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WSA6IGV2ZW50LmNsaWVudFlcblxuXHRcdHRoaXMueC5lbmQgPSB4XG5cdFx0dGhpcy55LmVuZCA9IHlcblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXG5cdFx0Y29uc3QgeCA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFggOiBldmVudC5jbGllbnRYXG5cdFx0Y29uc3QgeSA9IGV2ZW50LnRvdWNoZXMgPyBldmVudC50b3VjaGVzWzBdLmNsaWVudFkgOiBldmVudC5jbGllbnRZXG5cblx0XHR0aGlzLnguZW5kID0geFxuXHRcdHRoaXMueS5lbmQgPSB5XG5cblx0XHRpZiAodGhpcy5ob21lKSB0aGlzLmhvbWUub25Ub3VjaFVwKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5ob21lKSB7XG5cdFx0XHR0aGlzLmhvbWUub25XaGVlbChldmVudClcblx0XHR9XG5cdH1cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLnVwZGF0ZSgpXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2ExYTcxMTM3MzIwYmZlMzUyYjNcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJvblJvdXRlVXBkYXRlIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJUcmFuc2Zvcm0iLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=