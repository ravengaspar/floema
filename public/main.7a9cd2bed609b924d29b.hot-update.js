/*! For license information please see main.7a9cd2bed609b924d29b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var r=s("./app/components/Canvas/Media.js"),i=s("./node_modules/lodash/map.js"),a=s("./node_modules/gsap/index.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./node_modules/ogl/src/extras/Plane.js");const l=class{constructor({gl:e,scene:t,sizes:s}){this.group=new o.Transform,this.gl=e,this.sizes=s,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.s={},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){this.scroll.x.current}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=s,this.y.target=r}onTouchUp({x:e,y:t}){}update(){this.x.current=a.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=a.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,i(this.medias,(e=>e.update(this.scroll)))}}}},(function(e){e.h=()=>"cc750ba545ea49bc4df2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YTljZDJiZWQ2MDliOTI0ZDI5Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1ZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEdBRXJCRSxLQUFLUyxFQUFJLENBQ1JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BaLEtBQUthLEVBQUksQ0FDUkgsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHTFosS0FBS2MsRUFBSSxDQUFDLEVBR1pkLEtBQUtlLE9BQVMsQ0FDYk4sRUFBRyxFQUNISSxFQUFHLEVBRUosQ0FFRFAsaUJBQ0NOLEtBQUtnQixTQUFXLElBQUlDLEVBQUFBLE1BQU1qQixLQUFLSCxHQUMvQixDQUVEVSxnQkFDQ1AsS0FBS2tCLE9BQVNDLEVBQUluQixLQUFLRyxnQkFBZ0IsQ0FBQ2lCLEVBQVNDLElBQ3pDLElBQUlDLEVBQUFBLFFBQU0sQ0FDaEJGLFVBQ0FKLFNBQVVoQixLQUFLZ0IsU0FDZkssUUFDQXhCLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2QsQ0FFRHdCLFNBQVNDLEdBQ1JMLEVBQUluQixLQUFLa0IsUUFBUU8sR0FBU0EsRUFBTUYsU0FBU0MsSUFDekMsQ0FFREUsYUFBWSxFQUFFakIsRUFBRixFQUFLSSxJQUNkYixLQUFLZSxPQUFPTixFQUFFQyxPQUNmLENBRUZpQixhQUFZLEVBQUVsQixFQUFGLEVBQUtJLElBQ2hCLE1BQU1lLEVBQVluQixFQUFFb0IsTUFBUXBCLEVBQUVxQixJQUN4QkMsRUFBWWxCLEVBQUVnQixNQUFRaEIsRUFBRWlCLElBRTlCOUIsS0FBS1MsRUFBRUUsT0FBU2lCLEVBQ2hCNUIsS0FBS2EsRUFBRUYsT0FBU29CLENBQ2hCLENBRURDLFdBQVUsRUFBRXZCLEVBQUYsRUFBS0ksSUFBTyxDQUV0Qm9CLFNBQ0NqQyxLQUFLUyxFQUFFQyxRQUFVd0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJsQyxLQUFLUyxFQUFFQyxRQUFTVixLQUFLUyxFQUFFRSxPQUFRWCxLQUFLUyxFQUFFRyxNQUM5RVosS0FBS2EsRUFBRUgsUUFBVXdCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCbEMsS0FBS2EsRUFBRUgsUUFBU1YsS0FBS2EsRUFBRUYsT0FBUVgsS0FBS2EsRUFBRUQsTUFFOUVaLEtBQUtlLE9BQU9OLEVBQUlULEtBQUtTLEVBQUVDLFFBQ3ZCVixLQUFLZSxPQUFPRixFQUFJYixLQUFLYSxFQUFFSCxRQUV2QlMsRUFBSW5CLEtBQUtrQixRQUFRTyxHQUFTQSxFQUFNUSxPQUFPakMsS0FBS2UsU0FDNUMsa0JDbkZGb0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cbiAgICB0aGlzLnMgPSB7fVxuXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG4gICAgdGhpcy5zY3JvbGwueC5jdXJyZW50XG4gIH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHhEaXN0YW5jZVxuXHRcdHRoaXMueS50YXJnZXQgPSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbCkpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjNzUwYmE1NDVlYTQ5YmM0ZGYyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwibWVkaWFzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5IiwicyIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=