/*! For license information please see main.23b4cc1e937b01f5096a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>l});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/About/Media.js");class l{constructor({element:s,geometry:t,index:e,gl:r,scene:o,sizes:h}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.index=e,this.gl=r,this.scene=o,this.sizes=h,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1,velocity:.5},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,t)=>new h.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){this.bounds&&(this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=.5),this.scroll.target-=this.scroll.velocity,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if(" left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=s*this.sizes.height)}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"589aaff8b2c4875af133"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNc0IsT0FBUzFDLEtBQUt5QixNQUVyQixNQUFNLEdBQXVCLFVBQW5CekIsS0FBS29DLFVBQXVCLENBQzVCaEIsRUFBTW1CLEtBQUtFLFNBQVNaLEVBQUlTLEVBRTFCdEMsS0FBS0QsTUFBTTBCLE1BQVEsSUFDMUJMLEVBQU1zQixPQUFTMUMsS0FBS3lCLE1BRXJCLENBRURMLEVBQU1lLE9BQU9uQyxLQUFLSyxPQUFPQyxRQUF6QixJQUdETixLQUFLRyxNQUFNc0MsU0FBU1gsRUFBSUEsRUFBSTlCLEtBQUtELE1BQU00QyxPQUN2QyxDQUlEQyxVQUNDNUMsS0FBS0YsTUFBTStDLFlBQVk3QyxLQUFLRyxNQUM1QixrQkNySUYyQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmVsZW1lbnRXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2dhbGxlcnlfX3dyYXBwZXInKVxuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAwLjUsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVNZWRpYXMoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSh7IHNpemVzOiB0aGlzLnNpemVzIH0pXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlTWVkaWFzKCkge1xuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwuY3VycmVudCkpXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnN0YXJ0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwuc3RhcnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSh5KSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0XHR0aGlzLnNjcm9sbC52ZWxvY2l0eSA9IC0xXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdFx0dGhpcy5zY3JvbGwudmVsb2NpdHkgPSAwLjVcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgLT0gdGhpcy5zY3JvbGwudmVsb2NpdHlcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDIgKyAwLjI1XG5cblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJyBsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblxuXHRcdHRoaXMuZ3JvdXAucG9zaXRpb24ueSA9IHkgKiB0aGlzLnNpemVzLmhlaWdodFxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zY2VuZS5yZW1vdmVDaGlsZCh0aGlzLmdyb3VwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ODlhYWZmOGIyYzQ4NzVhZjEzM1wiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50V3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJzdGFydCIsInRhcmdldCIsImxlcnAiLCJ2ZWxvY2l0eSIsImNyZWF0ZU1lZGlhcyIsIm9uUmVzaXplIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJzaG93IiwibWVkaWEiLCJoaWRlIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsImRpcmVjdGlvbiIsIkdTQVAiLCJzY2FsZVgiLCJtZXNoIiwic2NhbGUiLCJwb3NpdGlvbiIsImV4dHJhIiwiaGVpZ2h0IiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9