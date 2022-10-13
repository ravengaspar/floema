/*! For license information please see main.52f098f261e30dcdbebe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/index.js":(e,r,s)=>{s.r(r),s.d(r,{default:()=>o});var t=s("./node_modules/ogl/src/core/Renderer.js"),n=s("./node_modules/ogl/src/core/Camera.js"),a=s("./node_modules/ogl/src/core/Transform.js"),i=s("./app/components/Canvas/Home.js");class o{constructor(){this.createRenderer(),this.createCamera(),this.createScene(),this.createHome()}createRenderer(){this.renderer=new t.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new n.Camera(this.gl),this.camera.position.z=5}createHome(){this.home=new i.default(this.gl)}createScene(){this.scene=new a.Transform}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}update(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"1daa4611fb95373fb1af"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MmYwOThmMjYxZTMwZGNkYmViZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFRBSWUsTUFBTUEsRUFDcEJDLGNBQ0NDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUNMLENBRURILGlCQUNDRCxLQUFLSyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCTixLQUFLTyxHQUFLUCxLQUFLSyxTQUFTRSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWVYsS0FBS08sR0FBR0ksT0FDbEMsQ0FFRFQsZUFDQ0YsS0FBS1ksT0FBUyxJQUFJQyxFQUFBQSxPQUFPYixLQUFLTyxJQUM5QlAsS0FBS1ksT0FBT0UsU0FBU0MsRUFBSSxDQUN6QixDQUVEWCxhQUNDSixLQUFLZ0IsS0FBTyxJQUFJQyxFQUFBQSxRQUFLakIsS0FBS08sR0FDMUIsQ0FFREosY0FDQ0gsS0FBS2tCLE1BQVEsSUFBSUMsRUFBQUEsU0FDakIsQ0FFREMsV0FDQ3BCLEtBQUtLLFNBQVNnQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRHhCLEtBQUtZLE9BQU9hLFlBQVksQ0FDdkJDLE9BQVFKLE9BQU9DLFdBQWFELE9BQU9FLGFBRXBDLENBRURHLFNBQ0MzQixLQUFLNEIsS0FBS0MsU0FBU0MsR0FBSyxJQUN4QjlCLEtBQUs0QixLQUFLQyxTQUFTRSxHQUFLLElBRXhCL0IsS0FBS0ssU0FBUzJCLE9BQU8sQ0FDcEJwQixPQUFRWixLQUFLWSxPQUNiTSxNQUFPbEIsS0FBS2tCLE9BRWIsa0JDakRGZSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZVJlbmRlcmVyKClcblx0XHR0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpXG5cdFx0dGhpcy5jcmVhdGVIb21lKClcblx0fVxuXG5cdGNyZWF0ZVJlbmRlcmVyKCkge1xuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKVxuXG5cdFx0dGhpcy5nbCA9IHRoaXMucmVuZGVyZXIuZ2xcblxuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpXG5cdH1cblxuXHRjcmVhdGVDYW1lcmEoKSB7XG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpXG5cdFx0dGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDVcblx0fVxuXG5cdGNyZWF0ZUhvbWUoKSB7XG5cdFx0dGhpcy5ob21lID0gbmV3IEhvbWUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZVNjZW5lKCkge1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKClcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KVxuXG5cdFx0dGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuXHRcdFx0YXNwZWN0OiB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi54ICs9IDAuMDFcblx0XHR0aGlzLm1lc2gucm90YXRpb24ueSArPSAwLjAxXG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih7XG5cdFx0XHRjYW1lcmE6IHRoaXMuY2FtZXJhLFxuXHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWRhYTQ2MTFmYjk1MzczZmIxYWZcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUmVuZGVyZXIiLCJjcmVhdGVDYW1lcmEiLCJjcmVhdGVTY2VuZSIsImNyZWF0ZUhvbWUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiZ2wiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImNhbWVyYSIsIkNhbWVyYSIsInBvc2l0aW9uIiwieiIsImhvbWUiLCJIb21lIiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJvblJlc2l6ZSIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInVwZGF0ZSIsIm1lc2giLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9