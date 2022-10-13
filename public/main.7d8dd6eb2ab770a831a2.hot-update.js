/*! For license information please see main.7d8dd6eb2ab770a831a2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e("./app/components/Canvas/About/Media.js");class h{constructor({element:t,geometry:s,index:e,gl:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.index=e,this.gl=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,start:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=l(this.mediasElements,((t,s)=>new o.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,l(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),l(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if(" left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll.current)})))}}}},(function(t){t.h=()=>"4acead8fdeedb122ec80"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZTLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRURwQixFQUFNUSxPQUFPOUIsS0FBS0csT0FBT0MsUUFBekIsSUFFRCxrQkMvR0Z1QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YWNlYWQ4ZmRlZWRiMTIyZWM4MFwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJzdGFydCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJnYWxsZXJ5U2l6ZXMiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=