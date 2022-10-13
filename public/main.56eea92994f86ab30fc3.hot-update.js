/*! For license information please see main.56eea92994f86ab30fc3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var r=t("./app/components/Canvas/Media.js"),i=t("./node_modules/lodash/map.js"),o=t("./node_modules/gsap/index.js"),l=t("./node_modules/ogl/src/core/Transform.js"),n=t("./node_modules/ogl/src/extras/Plane.js"),h=t("./node_modules/console-browserify/index.js");const a=class{constructor({gl:e,scene:s,sizes:t}){this.group=new l.Transform,this.gl=e,this.sizes=t,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,s)=>new r.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(s=>s.onResize(e))),this.sizes=e.sizes}onTouchDown({x:e,y:s}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:s}){const t=e.start-e.end,r=s.start-s.end;this.x.target=this.scrollCurrent.x-t,this.y.target=this.scrollCurrent.y-r}onTouchUp({x:e,y:s}){}update(){this.x.current=o.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=o.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="left":this.scroll.x>this.x.current&&(this.x.direction="right"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,i(this.medias,((e,s)=>{if(0===s){e.mesh.position.x+e.mesh.scale.x/2<-this.sizes.width/2&&h.log(e.mesh.position.x)}e.update(this.scroll)}))}}}},(function(e){e.h=()=>"607a5f2e341d13d94854"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NmVlYTkyOTk0Zjg2YWIzMGZjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFlBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEdBRXJCRSxLQUFLUyxFQUFJLENBQ1JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BaLEtBQUthLEVBQUksQ0FDUkgsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUFosS0FBS2MsY0FBZ0IsQ0FDcEJMLEVBQUcsRUFDSEksRUFBRyxHQUdKYixLQUFLZSxPQUFTLENBQ2JOLEVBQUcsRUFDSEksRUFBRyxFQUVKLENBRURQLGlCQUNDTixLQUFLZ0IsU0FBVyxJQUFJQyxFQUFBQSxNQUFNakIsS0FBS0gsR0FDL0IsQ0FFRFUsZ0JBQ0NQLEtBQUtrQixPQUFTQyxFQUFJbkIsS0FBS0csZ0JBQWdCLENBQUNpQixFQUFTQyxJQUN6QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2hCRixVQUNBSixTQUFVaEIsS0FBS2dCLFNBQ2ZLLFFBQ0F4QixHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLQyxNQUNaRixNQUFPQyxLQUFLRCxTQUdkLENBRUR3QixTQUFTQyxHQUNSTCxFQUFJbkIsS0FBS2tCLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLEtBRXpDeEIsS0FBS0QsTUFBUXlCLEVBQU16QixLQUNuQixDQUVEMkIsYUFBWSxFQUFFakIsRUFBRixFQUFLSSxJQUNoQmIsS0FBS2MsY0FBY0wsRUFBSVQsS0FBS2UsT0FBT04sRUFDbkNULEtBQUtjLGNBQWNELEVBQUliLEtBQUtlLE9BQU9GLENBQ25DLENBRURjLGFBQVksRUFBRWxCLEVBQUYsRUFBS0ksSUFDaEIsTUFBTWUsRUFBWW5CLEVBQUVvQixNQUFRcEIsRUFBRXFCLElBQ3hCQyxFQUFZbEIsRUFBRWdCLE1BQVFoQixFQUFFaUIsSUFFOUI5QixLQUFLUyxFQUFFRSxPQUFTWCxLQUFLYyxjQUFjTCxFQUFJbUIsRUFDdkM1QixLQUFLYSxFQUFFRixPQUFTWCxLQUFLYyxjQUFjRCxFQUFJa0IsQ0FDdkMsQ0FFREMsV0FBVSxFQUFFdkIsRUFBRixFQUFLSSxJQUFPLENBRXRCb0IsU0FDQ2pDLEtBQUtTLEVBQUVDLFFBQVV3QixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QmxDLEtBQUtTLEVBQUVDLFFBQVNWLEtBQUtTLEVBQUVFLE9BQVFYLEtBQUtTLEVBQUVHLE1BQzlFWixLQUFLYSxFQUFFSCxRQUFVd0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJsQyxLQUFLYSxFQUFFSCxRQUFTVixLQUFLYSxFQUFFRixPQUFRWCxLQUFLYSxFQUFFRCxNQUUxRVosS0FBS2UsT0FBT04sRUFBSVQsS0FBS1MsRUFBRUMsUUFDMUJWLEtBQUtTLEVBQUUwQixVQUFZLE9BQ1RuQyxLQUFLZSxPQUFPTixFQUFJVCxLQUFLUyxFQUFFQyxVQUNqQ1YsS0FBS1MsRUFBRTBCLFVBQVksU0FHcEJuQyxLQUFLZSxPQUFPTixFQUFJVCxLQUFLUyxFQUFFQyxRQUN2QlYsS0FBS2UsT0FBT0YsRUFBSWIsS0FBS2EsRUFBRUgsUUFFdkJTLEVBQUluQixLQUFLa0IsUUFBUSxDQUFDTyxFQUFPSixLQUN4QixHQUFjLElBQVZBLEVBQWEsQ0FDTkksRUFBTVcsS0FBS0MsU0FBUzVCLEVBQUlnQixFQUFNVyxLQUFLRSxNQUFNN0IsRUFBSSxHQUM5Q1QsS0FBS0QsTUFBTXdDLE1BQVEsR0FBR0MsRUFBUUMsSUFBSWhCLEVBQU1XLEtBQUtDLFNBQVM1QixFQUMvRCxDQUNEZ0IsRUFBTVEsT0FBT2pDLEtBQUtlLE9BQWxCLEdBRUQsa0JDcEdGMkIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnggPCB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIGNvbnNvbGUubG9nKG1lZGlhLm1lc2gucG9zaXRpb24ueClcblx0XHRcdH1cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbClcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2MDdhNWYyZTM0MWQxM2Q5NDg1NFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbEN1cnJlbnQiLCJzY3JvbGwiLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwibWVkaWEiLCJvblRvdWNoRG93biIsIm9uVG91Y2hNb3ZlIiwieERpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJ5RGlzdGFuY2UiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwibWVzaCIsInBvc2l0aW9uIiwic2NhbGUiLCJ3aWR0aCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=