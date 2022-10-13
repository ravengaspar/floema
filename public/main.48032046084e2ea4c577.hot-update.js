/*! For license information please see main.48032046084e2ea4c577.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/map.js"),r=s("./app/components/Canvas/About/Media.js");class o{constructor({element:e,geometry:t,index:s,gl:i,scene:l,sizes:r}){this.element=e,this.geometry=t,this.index=s,this.gl=i,this.scene=l,this.sizes=r,this.scroll={current:0,target:0,last:0,lepr:.1},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=l(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(e){this.bounds=this.element.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,l(this.medias,(t=>t.onResize(e,this.scroll)))}onTouchDown({x:e,y:t}){this.scroll.current=this.scroll}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.current-s}onTouchUp({x:e,y:t}){}update(){this.bounds&&(this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.current<this.scroll.target?this.x.direction="right":this.scroll.current>this.scroll.target&&(this.x.direction="left"),l(this.medias,((e,t)=>{e.mesh.scale.x;if(" left"===this.x.direction){e.mesh.position.media.extra.x+=this.gallerySizes.width;e.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI)}})))}}}},(function(e){e.h=()=>"099684d0a0e2a736955d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ODAzMjA0NjA4NGUyZWE0YzU3Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVFBTWUsTUFBTUEsRUFDcEJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLE1BQXFCQyxFQUFyQixHQUE0QkMsRUFBNUIsTUFBZ0NDLEVBQWhDLE1BQXVDQyxJQUNsREMsS0FBS04sUUFBVUEsRUFDZk0sS0FBS0wsU0FBV0EsRUFDaEJLLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE9BQVMsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsS0FBTSxJQUdQTCxLQUFLTSxjQUNMLENBRURBLGVBQ0NOLEtBQUtOLFFBQVFhLGlCQUFpQiwwQkFFOUJQLEtBQUtRLE1BQVFDLEVBQUlULEtBQUtVLGdCQUFnQixDQUFDaEIsRUFBU0UsSUFDeEMsSUFBSWUsRUFBQUEsUUFBTSxDQUNoQmpCLFVBQ0FDLFNBQVVLLEtBQUtMLFNBQ2ZDLFFBQ0FDLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtGLE1BQ1pDLE1BQU9DLEtBQUtELFNBR2QsQ0FJRGEsU0FBU0MsR0FDUmIsS0FBS2MsT0FBU2QsS0FBS04sUUFBUXFCLHdCQUUzQmYsS0FBS0QsTUFBUWMsRUFBTWQsTUFFbkJDLEtBQUtnQixNQUFTaEIsS0FBS2MsT0FBT0UsTUFBUUMsT0FBT0MsV0FBY2xCLEtBQUtELE1BQU1pQixNQUVsRWhCLEtBQUtDLE9BQVMsRUFFZFEsRUFBSVQsS0FBS21CLFFBQVFYLEdBQVNBLEVBQU1JLFNBQVNDLEVBQU9iLEtBQUtDLFNBQ3JELENBRURtQixhQUFZLEVBQUVDLEVBQUYsRUFBS0MsSUFDaEJ0QixLQUFLQyxPQUFPQyxRQUFVRixLQUFLQyxNQUMzQixDQUVEc0IsYUFBWSxFQUFFRixFQUFGLEVBQUtDLElBQ2hCLE1BQU1FLEVBQVdILEVBQUVJLE1BQVFKLEVBQUVLLElBRTdCMUIsS0FBS0MsT0FBT0UsT0FBU0gsS0FBS0MsT0FBT0MsUUFBVXNCLENBQzNDLENBRURHLFdBQVUsRUFBRU4sRUFBRixFQUFLQyxJQUFPLENBSXRCTSxTQUNNNUIsS0FBS2MsU0FFVmQsS0FBS0MsT0FBT0MsUUFBVTJCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCN0IsS0FBS0MsT0FBT0MsUUFDWkYsS0FBS0MsT0FBT0UsT0FDWkgsS0FBS0MsT0FBTzZCLE1BR1Q5QixLQUFLQyxPQUFPQyxRQUFVRixLQUFLQyxPQUFPRSxPQUNyQ0gsS0FBS3FCLEVBQUVVLFVBQVksUUFDVC9CLEtBQUtDLE9BQU9DLFFBQVVGLEtBQUtDLE9BQU9FLFNBQzVDSCxLQUFLcUIsRUFBRVUsVUFBWSxRQUdwQnRCLEVBQUlULEtBQUttQixRQUFRLENBQUNYLEVBQU9aLEtBQ1RZLEVBQU13QixLQUFLQyxNQUFNWixFQUVoQyxHQUF5QixVQUFyQnJCLEtBQUtxQixFQUFFVSxVQUF1QixDQUVuQnZCLEVBQU13QixLQUFLRSxTQUd6QjFCLE1BQU0yQixNQUFNZCxHQUFLckIsS0FBS29DLGFBQWFwQixNQUVuQ1IsRUFBTXdCLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLEdBQ2hFLEtBRUYsa0JDaEdGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdFx0bGVwcjogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGxcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPiB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICcgbGVmdCcpIHtcblxuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi5cblxuXG5cdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRtZWRpYS5tZXNoLnJvdGF0aW9uLnogPSBHU0FQLnV0aWxzLnJhbmRvbSgtTWF0aC5QSSAqIDAuMDMsIE1hdGguUEkgKiAwLjAzKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA5OTY4NGQwYTBlMmE3MzY5NTVkXCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGVwciIsImNyZWF0ZU1lZGlhcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYSIsIm1hcCIsIm1lZGlhc0VsZW1lbnRzIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWFzIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJsZXJwIiwiZGlyZWN0aW9uIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImdhbGxlcnlTaXplcyIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==