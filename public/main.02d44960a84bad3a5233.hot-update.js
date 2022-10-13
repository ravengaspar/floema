/*! For license information please see main.02d44960a84bad3a5233.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,e,t)=>{t.r(e),t.d(e,{default:()=>n});var i=t("./node_modules/ogl/src/core/Transform.js"),r=t("./node_modules/gsap/index.js"),o=t("./node_modules/lodash/map.js"),l=t("./app/components/Canvas/About/Media.js"),h=t("./node_modules/console-browserify/index.js");class n{constructor({element:s,geometry:e,index:t,gl:r,scene:o,sizes:l}){this.element=s,this.elementWrapper=s.querySelector(".about"),this.geometry=e,this.index=t,this.gl=r,this.scene=o,this.sizes=l,this.group=new i.Transform,this.scroll={current:0,target:0,start:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,e)=>new l.default({element:s,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(s){this.bounds=this.element.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(e=>e.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:e}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:e}){const t=s.start-s.end;this.scroll.target=this.scroll.start-t,h.log(this.scroll.target)}onTouchUp({x:s,y:e}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,e)=>{const t=s.mesh.scale.x/2;if(" left"===this.direction){s.mesh.position.x+t<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-t>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})))}}}},(function(s){s.h=()=>"33caf3ca89e4ea43152a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50V3JhcHBlciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmFib3V0Jylcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnNjcm9sbC50YXJnZXQpXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0LyogVXBkYXRlICovXG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJyBsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzNjYWYzY2E4OWU0ZWE0MzE1MmFcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0Iiwic3RhcnQiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWEiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==