/*! For license information please see main.df851bb307390480793d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var r=s("./app/components/Canvas/Media.js"),i=s("./node_modules/lodash/map.js"),o=s("./node_modules/gsap/index.js"),a=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:t,sizes:s}){this.group=new a.Transform,this.gl=e,this.sizes=s,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){this.scroll}onTouchMove({x:e,y:t}){const s=e.start-e.end,r=t.start-t.end;this.x.target=s,this.y.target=r}onTouchUp({x:e,y:t}){}update(){this.x.current=o.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=o.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,i(this.medias,(e=>e.update(this.scroll)))}}}},(function(e){e.h=()=>"d2c4239923e6b9cf17ce"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZjg1MWJiMzA3MzkwNDgwNzkzZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1ZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEdBRXJCRSxLQUFLUyxFQUFJLENBQ1JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BaLEtBQUthLEVBQUksQ0FDUkgsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUFosS0FBS2MsT0FBUyxDQUNiTCxFQUFHLEVBQ0hJLEVBQUcsRUFFSixDQUVEUCxpQkFDQ04sS0FBS2UsU0FBVyxJQUFJQyxFQUFBQSxNQUFNaEIsS0FBS0gsR0FDL0IsQ0FFRFUsZ0JBQ0NQLEtBQUtpQixPQUFTQyxFQUFJbEIsS0FBS0csZ0JBQWdCLENBQUNnQixFQUFTQyxJQUN6QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2hCRixVQUNBSixTQUFVZixLQUFLZSxTQUNmSyxRQUNBdkIsR0FBSUcsS0FBS0gsR0FDVEMsTUFBT0UsS0FBS0MsTUFDWkYsTUFBT0MsS0FBS0QsU0FHZCxDQUVEdUIsU0FBU0MsR0FDUkwsRUFBSWxCLEtBQUtpQixRQUFRTyxHQUFTQSxFQUFNRixTQUFTQyxJQUN6QyxDQUVERSxhQUFZLEVBQUVoQixFQUFGLEVBQUtJLElBQ2RiLEtBQUtjLE1BQ04sQ0FFRlksYUFBWSxFQUFFakIsRUFBRixFQUFLSSxJQUNoQixNQUFNYyxFQUFZbEIsRUFBRW1CLE1BQVFuQixFQUFFb0IsSUFDeEJDLEVBQVlqQixFQUFFZSxNQUFRZixFQUFFZ0IsSUFFOUI3QixLQUFLUyxFQUFFRSxPQUFTZ0IsRUFDaEIzQixLQUFLYSxFQUFFRixPQUFTbUIsQ0FDaEIsQ0FFREMsV0FBVSxFQUFFdEIsRUFBRixFQUFLSSxJQUFPLENBRXRCbUIsU0FDQ2hDLEtBQUtTLEVBQUVDLFFBQVV1QixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QmpDLEtBQUtTLEVBQUVDLFFBQVNWLEtBQUtTLEVBQUVFLE9BQVFYLEtBQUtTLEVBQUVHLE1BQzlFWixLQUFLYSxFQUFFSCxRQUFVdUIsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJqQyxLQUFLYSxFQUFFSCxRQUFTVixLQUFLYSxFQUFFRixPQUFRWCxLQUFLYSxFQUFFRCxNQUU5RVosS0FBS2MsT0FBT0wsRUFBSVQsS0FBS1MsRUFBRUMsUUFDdkJWLEtBQUtjLE9BQU9ELEVBQUliLEtBQUthLEVBQUVILFFBRXZCUSxFQUFJbEIsS0FBS2lCLFFBQVFPLEdBQVNBLEVBQU1RLE9BQU9oQyxLQUFLYyxTQUM1QyxrQkNoRkZvQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcbiAgICB0aGlzLnNjcm9sbFxuICB9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCB4RGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblx0XHRjb25zdCB5RGlzdGFuY2UgPSB5LnN0YXJ0IC0geS5lbmRcblxuXHRcdHRoaXMueC50YXJnZXQgPSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMmM0MjM5OTIzZTZiOWNmMTdjZVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwieCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwieSIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=