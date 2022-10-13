/*! For license information please see main.de80aa6f1b1a23234c02.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t("./node_modules/gsap/index.js"),l=t("./node_modules/lodash/map.js"),n=t("./app/components/Canvas/About/Media.js");class o{constructor({element:e,geometry:s,index:t,gl:i,scene:l,sizes:n}){this.element=e,this.geometry=s,this.index=t,this.gl=i,this.scene=l,this.sizes=n,this.scroll={current:0,target:0,last:0},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=l(this.mediasElements,((e,s)=>new n.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(e){this.bounds=this.element.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,l(this.medias,(s=>s.onResize(e,this.scroll)))}onTouchDown({x:e,y:s}){this.scroll.current=this.scroll}onTouchMove({x:e,y:s}){const t=e.start-e.end;this.scroll.target=this.scroll.current-t}onTouchUp({x:e,y:s}){}update(){this.bounds&&(this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp))}}}},(function(e){e.h=()=>"a34be304d747002a2209"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZTgwYWE2ZjFiMWEyMzIzNGMwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVFBTWUsTUFBTUEsRUFDcEJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLE1BQXFCQyxFQUFyQixHQUE0QkMsRUFBNUIsTUFBZ0NDLEVBQWhDLE1BQXVDQyxJQUNsREMsS0FBS04sUUFBVUEsRUFDZk0sS0FBS0wsU0FBV0EsRUFDaEJLLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE9BQVMsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sR0FHUEosS0FBS0ssY0FDTCxDQUVEQSxlQUNDTCxLQUFLTixRQUFRWSxpQkFBaUIsMEJBRTlCTixLQUFLTyxNQUFRQyxFQUFJUixLQUFLUyxnQkFBZ0IsQ0FBQ2YsRUFBU0UsSUFDeEMsSUFBSWMsRUFBQUEsUUFBTSxDQUNoQmhCLFVBQ0FDLFNBQVVLLEtBQUtMLFNBQ2ZDLFFBQ0FDLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtGLE1BQ1pDLE1BQU9DLEtBQUtELFNBR2QsQ0FJRFksU0FBU0MsR0FDUlosS0FBS2EsT0FBU2IsS0FBS04sUUFBUW9CLHdCQUUzQmQsS0FBS0QsTUFBUWEsRUFBTWIsTUFFbkJDLEtBQUtlLE1BQVNmLEtBQUthLE9BQU9FLE1BQVFDLE9BQU9DLFdBQWNqQixLQUFLRCxNQUFNZ0IsTUFFbEVmLEtBQUtDLE9BQVMsRUFFZE8sRUFBSVIsS0FBS2tCLFFBQVFYLEdBQVNBLEVBQU1JLFNBQVNDLEVBQU9aLEtBQUtDLFNBQ3JELENBRURrQixhQUFZLEVBQUVDLEVBQUYsRUFBS0MsSUFDaEJyQixLQUFLQyxPQUFPQyxRQUFVRixLQUFLQyxNQUMzQixDQUVEcUIsYUFBWSxFQUFFRixFQUFGLEVBQUtDLElBQ2hCLE1BQU1FLEVBQVdILEVBQUVJLE1BQVFKLEVBQUVLLElBRTdCekIsS0FBS0MsT0FBT0UsT0FBU0gsS0FBS0MsT0FBT0MsUUFBVXFCLENBQzNDLENBRURHLFdBQVUsRUFBRU4sRUFBRixFQUFLQyxJQUFPLENBSXRCTSxTQUNNM0IsS0FBS2EsU0FFVmIsS0FBS0MsT0FBT0MsUUFBVTBCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCNUIsS0FBS0MsT0FBT0MsUUFDWkYsS0FBS0MsT0FBT0UsT0FDWkgsS0FBS0MsT0FBTzRCLE1BRWIsa0JDM0VGQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGluZGV4LCBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlTWVkaWFzKClcblx0fVxuXG5cdGNyZWF0ZU1lZGlhcygpIHtcblx0XHR0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X19nYWxsZXJ5X19tZWRpYScpXG5cblx0XHR0aGlzLm1lZGlhID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLnNjZW5lLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gdGhpcy5zY3JvbGxcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnQgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdC8qIFVwZGF0ZSAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEzNGJlMzA0ZDc0NzAwMmEyMjA5XCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwiY3JlYXRlTWVkaWFzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhIiwibWFwIiwibWVkaWFzRWxlbWVudHMiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZWRpYXMiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsInN0YXJ0IiwiZW5kIiwib25Ub3VjaFVwIiwidXBkYXRlIiwiR1NBUCIsImxlcnAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=