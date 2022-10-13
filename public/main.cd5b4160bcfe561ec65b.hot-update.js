/*! For license information please see main.cd5b4160bcfe561ec65b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,e,t)=>{t.r(e),t.d(e,{default:()=>l});var i=t("./node_modules/ogl/src/core/Transform.js"),r=t("./node_modules/gsap/index.js"),h=t("./node_modules/lodash/map.js"),o=t("./app/components/Canvas/About/Media.js");class l{constructor({element:s,geometry:e,index:t,gl:r,scene:h,sizes:o}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=e,this.index=t,this.gl=r,this.scene=h,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=h(this.mediasElements,((s,e)=>new o.default({element:s,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){h(this.medias,(s=>s.show()))}hide(){h(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,h(this.medias,(e=>e.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:e}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:e}){const t=s.start-s.end;this.scroll.target=this.scroll.start-t}onTouchUp({x:s,y:e}){}update(s){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.target+=.1,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),h(this.medias,((s,e)=>{const t=s.mesh.scale.x/2+.25;if(" left"===this.direction){s.mesh.position.x+t<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-t>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=s*this.sizes.height)}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"27d0e05f42042af0ce00"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxTQUFTWixFQUFJUyxFQUUxQnJDLEtBQUtELE1BQU15QixNQUFRLElBQzFCTCxFQUFNc0IsT0FBU3pDLEtBQUt3QixNQUVyQixDQUVETCxFQUFNZSxPQUFPbEMsS0FBS0ssT0FBT0MsUUFBekIsSUFHRE4sS0FBS0csTUFBTXFDLFNBQVNYLEVBQUlBLEVBQUk3QixLQUFLRCxNQUFNMkMsT0FDdkMsQ0FJREMsVUFDQzNDLEtBQUtGLE1BQU04QyxZQUFZNUMsS0FBS0csTUFDNUIsa0JDbElGMEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5lbGVtZW50V3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0X19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVNZWRpYXMoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7IHNpemVzOiB0aGlzLnNpemVzIH0pXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlTWVkaWFzKCkge1xuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSh5KSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSAwLjFcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDIgKyAwLjI1XG5cblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJyBsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblxuXHRcdHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyN2QwZTA1ZjQyMDQyYWYwY2UwMFwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50V3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJzdGFydCIsInRhcmdldCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==