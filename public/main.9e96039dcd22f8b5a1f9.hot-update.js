/*! For license information please see main.9e96039dcd22f8b5a1f9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var r=s("./app/components/Canvas/Media.js"),i=s("./node_modules/lodash/map.js"),a=s("./node_modules/gsap/index.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./node_modules/ogl/src/extras/Plane.js");const l=class{constructor({gl:e,scene:t,sizes:s}){this.group=new o.Transform,this.gl=e,this.sizes=s,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(t=>t.onResize(e)))}onTouchDown({x:e,y:t}){}onTouchMove({x:e,y:t}){this.x=e.distance,this.y=t.distance}onTouchUp({x:e,y:t}){}update(){this.x.current=a.default.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=a.default.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,i(this.medias,(e=>e.update()))}}}},(function(e){e.h=()=>"1f500260a8ed47f236b1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZTk2MDM5ZGNkMjJmOGI1YTFmOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1ZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEdBRXJCRSxLQUFLUyxFQUFJLENBQ1JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BaLEtBQUthLEVBQUksQ0FDUkgsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUFosS0FBS2MsT0FBUyxDQUNiTCxFQUFHLEVBQ0hJLEVBQUcsRUFFSixDQUVEUCxpQkFDQ04sS0FBS2UsU0FBVyxJQUFJQyxFQUFBQSxNQUFNaEIsS0FBS0gsR0FDL0IsQ0FFRFUsZ0JBQ0NQLEtBQUtpQixPQUFTQyxFQUFJbEIsS0FBS0csZ0JBQWdCLENBQUNnQixFQUFTQyxJQUN6QyxJQUFJQyxFQUFBQSxRQUFNLENBQ2hCRixVQUNBSixTQUFVZixLQUFLZSxTQUNmSyxRQUNBdkIsR0FBSUcsS0FBS0gsR0FDVEMsTUFBT0UsS0FBS0MsTUFDWkYsTUFBT0MsS0FBS0QsU0FHZCxDQUVEdUIsU0FBU0MsR0FDUkwsRUFBSWxCLEtBQUtpQixRQUFRTyxHQUFTQSxFQUFNRixTQUFTQyxJQUN6QyxDQUVERSxhQUFZLEVBQUVoQixFQUFGLEVBQUtJLElBQU8sQ0FDeEJhLGFBQVksRUFBRWpCLEVBQUYsRUFBS0ksSUFDaEJiLEtBQUtTLEVBQUlBLEVBQUVrQixTQUNYM0IsS0FBS2EsRUFBSUEsRUFBRWMsUUFDWCxDQUNEQyxXQUFVLEVBQUVuQixFQUFGLEVBQUtJLElBQU8sQ0FFdEJnQixTQUNDN0IsS0FBS1MsRUFBRUMsUUFBVW9CLEVBQUFBLFFBQUFBLFlBQWlCOUIsS0FBS1MsRUFBRUMsUUFBU1YsS0FBS1MsRUFBRUUsT0FBUVgsS0FBS1MsRUFBRUcsTUFDeEVaLEtBQUthLEVBQUVILFFBQVVvQixFQUFBQSxRQUFBQSxZQUFpQjlCLEtBQUthLEVBQUVILFFBQVNWLEtBQUthLEVBQUVGLE9BQVFYLEtBQUthLEVBQUVELE1BQ3hFWixLQUFLYyxPQUFPTCxFQUFJVCxLQUFLUyxFQUFFQyxRQUN2QlYsS0FBS2MsT0FBT0QsRUFBSWIsS0FBS2EsRUFBRUgsUUFFdkJRLEVBQUlsQixLQUFLaUIsUUFBUU8sR0FBU0EsRUFBTUssVUFDaEMsa0JDeEVGRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHt9XG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy54ID0geC5kaXN0YW5jZVxuXHRcdHRoaXMueSA9IHkuZGlzdGFuY2Vcblx0fVxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEudXBkYXRlKCkpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmNTAwMjYwYThlZDQ3ZjIzNmIxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwibWVkaWFzRWxlbWVudHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==