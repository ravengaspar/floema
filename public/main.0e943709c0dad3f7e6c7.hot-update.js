/*! For license information please see main.0e943709c0dad3f7e6c7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t("./node_modules/lodash/map.js"),n=t("./app/components/Canvas/About/Media.js");class l{constructor({element:e,geometry:s,index:t,gl:i,scene:n,sizes:l}){this.element=e,this.geometry=s,this.index=t,this.gl=i,this.scene=n,this.sizes=l,this.scroll={current:0,target:0,last:0},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=i(this.mediasElements,((e,s)=>new n.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(e){this.bounds=this.element.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,i(this.medias,(s=>s.onResize(e,this.scroll)))}onTouchDown({x:e,y:s}){this.scroll.current=this.scroll}onTouchMove({x:e,y:s}){const t=e.start-e.end;this.scroll.target=this.scroll.current-t}onTouchUp({x:e,y:s}){}update(){this.bounds&&(this.scroll.current=GSAP.utils.interpolate(this.scroll.current,this.sr))}}}},(function(e){e.h=()=>"f03c8f0d189870a2cb27"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wZTk0MzcwOWMwZGFkM2Y3ZTZjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BSWUsTUFBTUEsRUFDcEJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLE1BQXFCQyxFQUFyQixHQUE0QkMsRUFBNUIsTUFBZ0NDLEVBQWhDLE1BQXVDQyxJQUNsREMsS0FBS04sUUFBVUEsRUFDZk0sS0FBS0wsU0FBV0EsRUFDaEJLLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE9BQVMsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sR0FHUEosS0FBS0ssY0FDTCxDQUVEQSxlQUNDTCxLQUFLTixRQUFRWSxpQkFBaUIsMEJBRTlCTixLQUFLTyxNQUFRQyxFQUFJUixLQUFLUyxnQkFBZ0IsQ0FBQ2YsRUFBU0UsSUFDeEMsSUFBSWMsRUFBQUEsUUFBTSxDQUNoQmhCLFVBQ0FDLFNBQVVLLEtBQUtMLFNBQ2ZDLFFBQ0FDLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtGLE1BQ1pDLE1BQU9DLEtBQUtELFNBR2QsQ0FJRFksU0FBU0MsR0FDUlosS0FBS2EsT0FBU2IsS0FBS04sUUFBUW9CLHdCQUUzQmQsS0FBS0QsTUFBUWEsRUFBTWIsTUFFbkJDLEtBQUtlLE1BQVNmLEtBQUthLE9BQU9FLE1BQVFDLE9BQU9DLFdBQWNqQixLQUFLRCxNQUFNZ0IsTUFFbEVmLEtBQUtDLE9BQVMsRUFFZE8sRUFBSVIsS0FBS2tCLFFBQVFYLEdBQVNBLEVBQU1JLFNBQVNDLEVBQU9aLEtBQUtDLFNBQ3JELENBRURrQixhQUFZLEVBQUVDLEVBQUYsRUFBS0MsSUFDaEJyQixLQUFLQyxPQUFPQyxRQUFVRixLQUFLQyxNQUMzQixDQUVEcUIsYUFBWSxFQUFFRixFQUFGLEVBQUtDLElBQ2hCLE1BQU1FLEVBQVdILEVBQUVJLE1BQVFKLEVBQUVLLElBRTdCekIsS0FBS0MsT0FBT0UsT0FBU0gsS0FBS0MsT0FBT0MsUUFBVXFCLENBQzNDLENBRURHLFdBQVUsRUFBRU4sRUFBRixFQUFLQyxJQUFPLENBSXRCTSxTQUNNM0IsS0FBS2EsU0FFUmIsS0FBS0MsT0FBT0MsUUFBVTBCLEtBQUtDLE1BQU1DLFlBQVk5QixLQUFLQyxPQUFPQyxRQUFTRixLQUFLK0IsSUFHekUsa0JDdkVGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGxcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc3IpXG5cblxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMDNjOGYwZDE4OTg3MGEyY2IyN1wiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImNyZWF0ZU1lZGlhcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYSIsIm1hcCIsIm1lZGlhc0VsZW1lbnRzIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWFzIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJ1dGlscyIsImludGVycG9sYXRlIiwic3IiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=