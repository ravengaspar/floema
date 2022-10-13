/*! For license information please see main.934bef9d71c0b059615e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(s,t,e)=>{e.r(t),e.d(t,{default:()=>l});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),o=e("./node_modules/lodash/map.js"),h=e("./app/components/Canvas/About/Media.js");class l{constructor({element:s,geometry:t,index:e,gl:r,scene:o,sizes:h}){this.element=s,this.elementWrapper=s.querySelector(".about__gallery__wrapper"),this.geometry=t,this.index=e,this.gl=r,this.scene=o,this.sizes=h,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1,velocity:.5},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=o(this.mediasElements,((s,t)=>new h.default({element:s,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(s=>s.show()))}hide(){o(this.medias,(s=>s.hide()))}onResize(s){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=s.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,o(this.medias,(t=>t.onResize(s,this.scroll.current)))}onTouchDown({x:s,y:t}){this.scroll.start=this.scroll.current}onTouchMove({x:s,y:t}){const e=s.start-s.end;this.scroll.target=this.scroll.start-e}onTouchUp({x:s,y:t}){}update(s){if(!this.bounds)return;const t=.1*(s.current-s.target),e=s.current/window.innerHeight;this.scroll.current<this.scroll.target?(this.direction="right",this.scroll.velocity=-1):this.scroll.current>this.scroll.target&&(this.direction="left",this.scroll.velocity=1),this.scroll.target-=this.scroll.velocity,this.scroll.target+=t,this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),o(this.medias,((s,t)=>{const e=s.mesh.scale.x/2+.25;if(" left"===this.direction){s.mesh.position.x+e<-this.sizes.width/2&&(s.extra+=this.width)}else if("right"===this.direction){s.mesh.position.x-e>this.sizes.width/2&&(s.extra-=this.width)}s.update(this.scroll.current)})),this.group.position.y=e*this.sizes.height}destroy(){this.scene.removeChild(this.group)}}}},(function(s){s.h=()=>"60440ecbcd85abf52c51"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTVosRUFBSSxFQUFJLElBRXhDLEdBQXVCLFVBQW5CN0IsS0FBS3FDLFVBQXVCLENBQ3JCakIsRUFBTW9CLEtBQUtFLFNBQVNiLEVBQUlVLEdBRXpCdkMsS0FBS0QsTUFBTTBCLE1BQVEsSUFDM0JMLEVBQU11QixPQUFTM0MsS0FBS3lCLE1BRXJCLE1BQU0sR0FBdUIsVUFBbkJ6QixLQUFLcUMsVUFBdUIsQ0FDNUJqQixFQUFNb0IsS0FBS0UsU0FBU2IsRUFBSVUsRUFFMUJ2QyxLQUFLRCxNQUFNMEIsTUFBUSxJQUMxQkwsRUFBTXVCLE9BQVMzQyxLQUFLeUIsTUFFckIsQ0FFREwsRUFBTWUsT0FBT25DLEtBQUtLLE9BQU9DLFFBQXpCLElBR0ROLEtBQUtHLE1BQU11QyxTQUFTWixFQUFJQSxFQUFJOUIsS0FBS0QsTUFBTTZDLE1BQ3ZDLENBSURDLFVBQ0M3QyxLQUFLRixNQUFNZ0QsWUFBWTlDLEtBQUtHLE1BQzVCLGtCQ3pJRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9HYWxsZXJ5LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDAuNSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cblx0XHR0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0LyogVXBkYXRlICovXG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0Y29uc3QgZGlzdGFuY2UgPSAoc2Nyb2xsLmN1cnJlbnQgLSBzY3JvbGwudGFyZ2V0KSAqIDAuMVxuXHRcdGNvbnN0IHkgPSBzY3JvbGwuY3VycmVudCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdFx0dGhpcy5zY3JvbGwudmVsb2NpdHkgPSAtMVxuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHRcdHRoaXMuc2Nyb2xsLnZlbG9jaXR5ID0gMVxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCAtPSB0aGlzLnNjcm9sbC52ZWxvY2l0eVxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBkaXN0YW5jZVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50LFxuXHRcdFx0dGhpcy5zY3JvbGwudGFyZ2V0LFxuXHRcdFx0dGhpcy5zY3JvbGwubGVycFxuXHRcdClcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2NhbGVYID0gbWVkaWEubWVzaC5zY2FsZS54IC8gMiArIDAuMjVcblxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhICs9IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhIC09IHRoaXMud2lkdGhcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0dGhpcy5ncm91cC5wb3NpdGlvbi55ID0geSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwNDQwZWNiY2Q4NWFiZjUyYzUxXCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImVsZW1lbnRXcmFwcGVyIiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwiVHJhbnNmb3JtIiwic2Nyb2xsIiwiY3VycmVudCIsInN0YXJ0IiwidGFyZ2V0IiwibGVycCIsInZlbG9jaXR5IiwiY3JlYXRlTWVkaWFzIiwib25SZXNpemUiLCJzZXRQYXJlbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYXMiLCJtYXAiLCJNZWRpYSIsInNob3ciLCJtZWRpYSIsImhpZGUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiaW5uZXJIZWlnaHQiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImhlaWdodCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==