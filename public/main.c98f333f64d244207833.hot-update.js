/*! For license information please see main.c98f333f64d244207833.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var r=s("./app/components/Canvas/Media.js"),i=s("./node_modules/lodash/map.js"),l=s("./node_modules/gsap/index.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./node_modules/ogl/src/extras/Plane.js"),a=s("./node_modules/console-browserify/index.js");const h=class{constructor({gl:e,scene:t,sizes:s}){this.group=new o.Transform,this.gl=e,this.sizes=s,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:e,y:t}){}update(){this.x.current=l.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=l.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?a.log("right"):this.scroll.x>this.x.current&&(this.scroll.x=this.x.current),this.scroll.y=this.y.current,i(this.medias,(e=>e.update(this.scroll)))}}}},(function(e){e.h=()=>"ea3c35d3ae01abe8d7cb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOThmMzMzZjY0ZDI0NDIwNzgzMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFlBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEdBRXJCRSxLQUFLUyxFQUFJLENBQ1JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BaLEtBQUthLEVBQUksQ0FDUkgsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUFosS0FBS2MsY0FBZ0IsQ0FDcEJMLEVBQUcsRUFDSEksRUFBRyxHQUdKYixLQUFLZSxPQUFTLENBQ2JOLEVBQUcsRUFDSEksRUFBRyxFQUVKLENBRURQLGlCQUNDTixLQUFLZ0IsU0FBVyxJQUFJQyxFQUFBQSxNQUFNakIsS0FBS0gsR0FDL0IsQ0FFRFUsZ0JBQ0NQLEtBQUtrQixPQUFTQyxFQUFJbkIsS0FBS0csZ0JBQWdCLENBQUNpQixFQUFTQyxJQUN6QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2hCRixVQUNBSixTQUFVaEIsS0FBS2dCLFNBQ2ZLLFFBQ0F4QixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBRUR3QixTQUFTQyxHQUNSTCxFQUFJbkIsS0FBS2tCLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQ3pDLENBRURFLGFBQVksRUFBRWpCLEVBQUYsRUFBS0ksSUFDaEJiLEtBQUtjLGNBQWNMLEVBQUlULEtBQUtlLE9BQU9OLEVBQ25DVCxLQUFLYyxjQUFjRCxFQUFJYixLQUFLZSxPQUFPRixDQUNuQyxDQUVEYyxhQUFZLEVBQUVsQixFQUFGLEVBQUtJLElBQ2hCLE1BQU1lLEVBQVluQixFQUFFb0IsTUFBUXBCLEVBQUVxQixJQUN4QkMsRUFBWWxCLEVBQUVnQixNQUFRaEIsRUFBRWlCLElBRTlCOUIsS0FBS1MsRUFBRUUsT0FBU1gsS0FBS2MsY0FBY0wsRUFBSW1CLEVBQ3ZDNUIsS0FBS2EsRUFBRUYsT0FBU1gsS0FBS2MsY0FBY0QsRUFBSWtCLENBQ3ZDLENBRURDLFdBQVUsRUFBRXZCLEVBQUYsRUFBS0ksSUFBTyxDQUV0Qm9CLFNBQ0NqQyxLQUFLUyxFQUFFQyxRQUFVd0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJsQyxLQUFLUyxFQUFFQyxRQUFTVixLQUFLUyxFQUFFRSxPQUFRWCxLQUFLUyxFQUFFRyxNQUM5RVosS0FBS2EsRUFBRUgsUUFBVXdCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCbEMsS0FBS2EsRUFBRUgsUUFBU1YsS0FBS2EsRUFBRUYsT0FBUVgsS0FBS2EsRUFBRUQsTUFHekVaLEtBQUtlLE9BQU9OLEVBQUlULEtBQUtTLEVBQUVDLFFBQ3hCeUIsRUFBUUMsSUFBSSxTQUNIcEMsS0FBS2UsT0FBT04sRUFBSVQsS0FBS1MsRUFBRUMsVUFHcENWLEtBQUtlLE9BQU9OLEVBQUlULEtBQUtTLEVBQUVDLFNBQ3ZCVixLQUFLZSxPQUFPRixFQUFJYixLQUFLYSxFQUFFSCxRQUV2QlMsRUFBSW5CLEtBQUtrQixRQUFRTyxHQUFTQSxFQUFNUSxPQUFPakMsS0FBS2UsU0FDNUMsa0JDNUZGc0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXG4gICAgaWYodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG4gICAgICBjb25zb2xlLmxvZygncmlnaHQnKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KVxuXG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWEzYzM1ZDNhZTAxYWJlOGQ3Y2JcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJtZWRpYXNFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsInhEaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwieURpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=