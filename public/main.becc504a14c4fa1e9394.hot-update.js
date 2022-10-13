/*! For license information please see main.becc504a14c4fa1e9394.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/ogl/src/core/Renderer.js"),h=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),o=s("./app/components/Canvas/Home.js");class c{constructor(){this.x={start:0,distance:0,end:0},this.y={start:0,distance:0,end:0},this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new i.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new h.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new n.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.isDown=!0,this.x.start=e.touches?e.touches[0].clientX:e.clientX,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.home&&this.home.onTouchDown({x:this.x,y:this.y})}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientX:e.clientX,s=e.touches?e.touches[0].clientY:e.clientY;this.x.end=t,this.y.end=s,this.x.distance=this.x.start-this.x.end,this.y.distance=this.y.start-this.y.end,this.home&&this.home.onTouchMove({x:this.x,y:this.y})}onTouchUp(e){this.isDown=!1;e.touches?e.touches[0].clientX:e.clientX,e.touches?e.touches[0].clientY:e.clientY;this.home&&this.home.onTouchUp({x:this.x,y:this.y})}update(){this.home&&this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"83306569d3b46bfbdd54"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZWNjNTA0YTE0YzRmYTFlOTM5NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFRBSWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLEVBQUksQ0FDUkMsTUFBTyxFQUNQQyxTQUFVLEVBQ1ZDLElBQUssR0FFTkosS0FBS0ssRUFBSSxDQUNSSCxNQUFPLEVBQ1BDLFNBQVUsRUFDVkMsSUFBSyxHQUdOSixLQUFLTSxpQkFDTE4sS0FBS08sZUFDTFAsS0FBS1EsY0FFTFIsS0FBS1MsV0FFTFQsS0FBS1UsWUFDTCxDQUVESixpQkFDQ04sS0FBS1csU0FBVyxJQUFJQyxFQUFBQSxTQUVwQlosS0FBS2EsR0FBS2IsS0FBS1csU0FBU0UsR0FFeEJDLFNBQVNDLEtBQUtDLFlBQVloQixLQUFLYSxHQUFHSSxPQUNsQyxDQUVEVixlQUNDUCxLQUFLa0IsT0FBUyxJQUFJQyxFQUFBQSxPQUFPbkIsS0FBS2EsSUFDOUJiLEtBQUtrQixPQUFPRSxTQUFTQyxFQUFJLENBQ3pCLENBRURYLGFBQ0NWLEtBQUtzQixLQUFPLElBQUlDLEVBQUFBLFFBQUssQ0FDcEJWLEdBQUliLEtBQUthLEdBQ1RXLE1BQU94QixLQUFLd0IsTUFDWkMsTUFBT3pCLEtBQUt5QixPQUViLENBRURqQixjQUNDUixLQUFLd0IsTUFBUSxJQUFJRSxFQUFBQSxTQUNqQixDQUVEakIsV0FDQ1QsS0FBS1csU0FBU2dCLFFBQVFDLE9BQU9DLFdBQVlELE9BQU9FLGFBRWhEOUIsS0FBS2tCLE9BQU9hLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBR3BDLE1BQU1HLEVBQU1qQyxLQUFLa0IsT0FBT2UsS0FBT0MsS0FBS0MsR0FBSyxLQUNuQ0MsRUFBUyxFQUFJRixLQUFLRyxJQUFJSixFQUFNLEdBQUtqQyxLQUFLa0IsT0FBT0UsU0FBU0MsRUFDdERpQixFQUFRRixFQUFTcEMsS0FBS2tCLE9BQU9jLE9BRW5DaEMsS0FBS3lCLE1BQVEsQ0FDWlcsU0FDQUUsU0FHR3RDLEtBQUtzQixNQUNSdEIsS0FBS3NCLEtBQUtiLFNBQVMsQ0FDbEJnQixNQUFPekIsS0FBS3lCLE9BRWQsQ0FFRGMsWUFBWUMsR0FDWHhDLEtBQUt5QyxRQUFTLEVBRWR6QyxLQUFLQyxFQUFFQyxNQUFRc0MsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFNRyxRQUNoRTNDLEtBQUtLLEVBQUVILE1BQVFzQyxFQUFNRSxRQUFVRixFQUFNRSxRQUFRLEdBQUdFLFFBQVVKLEVBQU1JLFFBRTVENUMsS0FBS3NCLE1BQU10QixLQUFLc0IsS0FBS2lCLFlBQVksQ0FBRXRDLEVBQUdELEtBQUtDLEVBQUdJLEVBQUdMLEtBQUtLLEdBQzFELENBQ0R3QyxZQUFZTCxHQUNYLElBQUt4QyxLQUFLeUMsT0FBUSxPQUNsQixNQUFNeEMsRUFBSXVDLEVBQU1FLFFBQVVGLEVBQU1FLFFBQVEsR0FBR0MsUUFBVUgsRUFBTUcsUUFDckR0QyxFQUFJbUMsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUUzRDVDLEtBQUtDLEVBQUVHLElBQU1ILEVBQ2JELEtBQUtLLEVBQUVELElBQU1DLEVBRWJMLEtBQUtDLEVBQUVFLFNBQVdILEtBQUtDLEVBQUVDLE1BQVFGLEtBQUtDLEVBQUVHLElBQ3hDSixLQUFLSyxFQUFFRixTQUFXSCxLQUFLSyxFQUFFSCxNQUFRRixLQUFLSyxFQUFFRCxJQUVwQ0osS0FBS3NCLE1BQU10QixLQUFLc0IsS0FBS3VCLFlBQVksQ0FBRTVDLEVBQUdELEtBQUtDLEVBQUdJLEVBQUdMLEtBQUtLLEdBQzFELENBQ0R5QyxVQUFVTixHQUNUeEMsS0FBS3lDLFFBQVMsRUFDSkQsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFNRyxRQUNqREgsRUFBTUUsUUFBVUYsRUFBTUUsUUFBUSxHQUFHRSxRQUFVSixFQUFNSSxRQUV2RDVDLEtBQUtzQixNQUFNdEIsS0FBS3NCLEtBQUt3QixVQUFVLENBQUU3QyxFQUFHRCxLQUFLQyxFQUFHSSxFQUFHTCxLQUFLSyxHQUN4RCxDQUVEMEMsU0FDTS9DLEtBQUtzQixNQUNWdEIsS0FBS1csU0FBU3FDLE9BQU8sQ0FDcEI5QixPQUFRbEIsS0FBS2tCLE9BQ2JNLE1BQU94QixLQUFLd0IsT0FFYixrQkM1R0Z5QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnggPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRzdGFydDogMCxcblx0XHRcdGRpc3RhbmNlOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpXG5cdFx0XHR0aGlzLmhvbWUub25SZXNpemUoe1xuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdHRoaXMuaXNEb3duID0gdHJ1ZVxuXG5cdFx0dGhpcy54LnN0YXJ0ID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFhcblx0XHR0aGlzLnkuc3RhcnQgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hEb3duKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSlcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICghdGhpcy5pc0Rvd24pIHJldHVyblxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0dGhpcy54LmVuZCA9IHhcblx0XHR0aGlzLnkuZW5kID0geVxuXG5cdFx0dGhpcy54LmRpc3RhbmNlID0gdGhpcy54LnN0YXJ0IC0gdGhpcy54LmVuZFxuXHRcdHRoaXMueS5kaXN0YW5jZSA9IHRoaXMueS5zdGFydCAtIHRoaXMueS5lbmRcblxuXHRcdGlmICh0aGlzLmhvbWUpIHRoaXMuaG9tZS5vblRvdWNoTW92ZSh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0dGhpcy5pc0Rvd24gPSBmYWxzZVxuXHRcdGNvbnN0IHggPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYIDogZXZlbnQuY2xpZW50WFxuXHRcdGNvbnN0IHkgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZIDogZXZlbnQuY2xpZW50WVxuXG5cdFx0aWYgKHRoaXMuaG9tZSkgdGhpcy5ob21lLm9uVG91Y2hVcCh7IHg6IHRoaXMueCwgeTogdGhpcy55IH0pXG5cdH1cblxuXHR1cGRhdGUoKSB7XG4gICAgaWYodGhpcy5ob21lKVxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHtcblx0XHRcdGNhbWVyYTogdGhpcy5jYW1lcmEsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4MzMwNjU2OWQzYjQ2YmZiZGQ1NFwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJ4Iiwic3RhcnQiLCJkaXN0YW5jZSIsImVuZCIsInkiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwib25SZXNpemUiLCJjcmVhdGVIb21lIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImdsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJjYW1lcmEiLCJDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJob21lIiwiSG9tZSIsInNjZW5lIiwic2l6ZXMiLCJUcmFuc2Zvcm0iLCJzZXRTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicGVyc3BlY3RpdmUiLCJhc3BlY3QiLCJmb3YiLCJNYXRoIiwiUEkiLCJoZWlnaHQiLCJ0YW4iLCJ3aWR0aCIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsInJlbmRlciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==