/*! For license information please see main.d817ac7f1d8111b13df2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var t=n("./node_modules/ogl/src/core/Renderer.js"),a=n("./node_modules/ogl/src/core/Camera.js"),i=n("./node_modules/ogl/src/core/Transform.js"),o=n("./app/components/Canvas/Home.js");class r{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.onResize(),this.createHome()}createRenderer(){this.renderer=new t.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new a.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new o.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}createScene(){this.scene=new i.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight});const e=this.camera.fov*(Math.PI/180),s=2*Math.tan(e/2)*this.camera.position.z,n=s*this.camera.aspect;this.sizes={height:s,width:n},this.home&&this.home.onResize({sizes:this.sizes})}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}update(){this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"ef2dba926f8b5c2729d5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kODE3YWM3ZjFkODExMWIxM2RmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFRBSWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUVMSCxLQUFLSSxXQUVMSixLQUFLSyxZQUNMLENBRURKLGlCQUNDRCxLQUFLTSxTQUFXLElBQUlDLEVBQUFBLFNBRXBCUCxLQUFLUSxHQUFLUixLQUFLTSxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVgsS0FBS1EsR0FBR0ksT0FDbEMsQ0FFRFYsZUFDQ0YsS0FBS2EsT0FBUyxJQUFJQyxFQUFBQSxPQUFPZCxLQUFLUSxJQUM5QlIsS0FBS2EsT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDTCxLQUFLaUIsS0FBTyxJQUFJQyxFQUFBQSxRQUFLLENBQ3BCVixHQUFJUixLQUFLUSxHQUNUVyxNQUFPbkIsS0FBS21CLE1BQ1pDLE1BQU9wQixLQUFLb0IsT0FFYixDQUVEakIsY0FDQ0gsS0FBS21CLE1BQVEsSUFBSUUsRUFBQUEsU0FDakIsQ0FFRGpCLFdBQ0NKLEtBQUtNLFNBQVNnQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRHpCLEtBQUthLE9BQU9hLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGNBR3BDLE1BQU1HLEVBQU01QixLQUFLYSxPQUFPZSxLQUFPQyxLQUFLQyxHQUFLLEtBQ25DQyxFQUFTLEVBQUlGLEtBQUtHLElBQUlKLEVBQU0sR0FBSzVCLEtBQUthLE9BQU9FLFNBQVNDLEVBQ3REaUIsRUFBUUYsRUFBUy9CLEtBQUthLE9BQU9jLE9BRW5DM0IsS0FBS29CLE1BQVEsQ0FDWlcsU0FDQUUsU0FHR2pDLEtBQUtpQixNQUNSakIsS0FBS2lCLEtBQUtiLFNBQVMsQ0FDbEJnQixNQUFPcEIsS0FBS29CLE9BRWQsQ0FHQWMsWUFBWUMsR0FDUm5DLEtBQUtZLFFBQVVaLEtBQUtZLE9BQU9zQixhQUFhbEMsS0FBS1ksT0FBT3NCLFlBQVlDLEVBQ3BFLENBQ0RDLFlBQVlELEdBQ1BuQyxLQUFLWSxRQUFVWixLQUFLWSxPQUFPd0IsYUFBYXBDLEtBQUtZLE9BQU93QixZQUFZRCxFQUNwRSxDQUNERSxVQUFVRixHQUNMbkMsS0FBS1ksUUFBVVosS0FBS1ksT0FBT3lCLFdBQVdyQyxLQUFLWSxPQUFPeUIsVUFBVUYsRUFDaEUsQ0FJREcsU0FDQ3RDLEtBQUtNLFNBQVNpQyxPQUFPLENBQ3BCMUIsT0FBUWIsS0FBS2EsT0FDYk0sTUFBT25CLEtBQUttQixPQUViLGtCQ2hGRnFCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FtZXJhLCBSZW5kZXJlciwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlUmVuZGVyZXIoKVxuXHRcdHRoaXMuY3JlYXRlQ2FtZXJhKClcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUoe1xuXHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVTY2VuZSgpIHtcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuXHRcdHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcblx0XHRcdGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG5cdFx0fSlcblxuXHRcdGNvbnN0IGZvdiA9IHRoaXMuY2FtZXJhLmZvdiAqIChNYXRoLlBJIC8gMTgwKVxuXHRcdGNvbnN0IGhlaWdodCA9IDIgKiBNYXRoLnRhbihmb3YgLyAyKSAqIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnpcblx0XHRjb25zdCB3aWR0aCA9IGhlaWdodCAqIHRoaXMuY2FtZXJhLmFzcGVjdFxuXG5cdFx0dGhpcy5zaXplcyA9IHtcblx0XHRcdGhlaWdodCxcblx0XHRcdHdpZHRoLFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmhvbWUpXG5cdFx0XHR0aGlzLmhvbWUub25SZXNpemUoe1xuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdH1cblxuXG4gIG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuXHR9XG5cblxuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWYyZGJhOTI2ZjhiNWMyNzI5ZDVcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsIm9uUmVzaXplIiwiY3JlYXRlSG9tZSIsInJlbmRlcmVyIiwiUmVuZGVyZXIiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiaG9tZSIsIkhvbWUiLCJzY2VuZSIsInNpemVzIiwiVHJhbnNmb3JtIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0IiwiZm92IiwiTWF0aCIsIlBJIiwiaGVpZ2h0IiwidGFuIiwid2lkdGgiLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=