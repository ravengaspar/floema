/*! For license information please see main.6408ed3d39c097c7d8f0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e("./app/components/Canvas/About/Media.js");class h{constructor({element:t,geometry:s,index:e,gl:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.index=e,this.gl=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lerp:.1},this.createMedias(),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=l(this.mediasElements,((t,s)=>new o.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,l(this.medias,(s=>s.onResize(t,this.scroll.current)))}onTouchDown({x:t,y:s}){this.scroll.last=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),l(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if(" left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll.current)})))}}}},(function(t){t.h=()=>"20038b30845ec145b997"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLE1BQUFBLE9BQTZCLEtBQVZTLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRURyQixFQUFNUyxPQUFPL0IsS0FBS0csT0FBT0MsUUFBekIsSUFFRCxrQkMvR0Z3QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxhc3Q6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVNZWRpYXMoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuXG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsLmN1cnJlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGxcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG5cdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICcgbGVmdCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCArIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54IC09IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cblx0XHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG1lZGlhLnVwZGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50KVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjIwMDM4YjMwODQ1ZWMxNDViOTk3XCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsZXJwIiwiY3JlYXRlTWVkaWFzIiwic2V0UGFyZW50IiwibWVkaWFzRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWFzIiwibWFwIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWEiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiZGlyZWN0aW9uIiwiR1NBUCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJnYWxsZXJ5U2l6ZXMiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=