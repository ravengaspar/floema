/*! For license information please see main.904eced46b33a3c40afe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./app/components/Canvas/Home/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.group=new l.Transform,this.gl=t,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((t,e)=>new i.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.scroll&&r(this.medias,(e=>e.onResize(t,this.scroll)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}destroy(){}}}},(function(t){t.h=()=>"5e405e20b0fa1865d198"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MDRlY2VkNDZiMzNhM2M0MGFmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVdBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxjQUFjLGtCQUM3Q0wsS0FBS00sZUFBaUJGLFNBQVNHLGlCQUFpQixnQ0FFaERQLEtBQUtRLGlCQUNMUixLQUFLUyxnQkFFTFQsS0FBS0MsTUFBTVMsVUFBVVosR0FFckJFLEtBQUtXLEVBQUksQ0FDUkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUGQsS0FBS2UsRUFBSSxDQUNSSCxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxJQUdQZCxLQUFLZ0IsY0FBZ0IsQ0FDcEJMLEVBQUcsRUFDSEksRUFBRyxHQUdKZixLQUFLaUIsT0FBUyxDQUNiTixFQUFHLEVBQ0hJLEVBQUcsRUFFSixDQUVEUCxpQkFDQ1IsS0FBS2tCLFNBQVcsSUFBSUMsRUFBQUEsTUFBTW5CLEtBQUtILEdBQy9CLENBRURZLGdCQUNDVCxLQUFLb0IsT0FBU0MsRUFBSXJCLEtBQUtNLGdCQUFnQixDQUFDZ0IsRUFBU0MsSUFDekMsSUFBSUMsRUFBQUEsUUFBTSxDQUNoQkYsVUFDQUosU0FBVWxCLEtBQUtrQixTQUNmSyxRQUNBMUIsR0FBSUcsS0FBS0gsR0FDVEMsTUFBT0UsS0FBS0MsTUFDWkYsTUFBT0MsS0FBS0QsU0FHZCxDQUVEMEIsU0FBU0MsR0FDUjFCLEtBQUsyQixjQUFnQjNCLEtBQUtHLGVBQWV5Qix3QkFFekM1QixLQUFLRCxNQUFRMkIsRUFBTTNCLE1BRW5CQyxLQUFLNkIsYUFBZSxDQUNuQkMsT0FBUzlCLEtBQUsyQixjQUFjRyxPQUFTQyxPQUFPQyxZQUFlaEMsS0FBS0QsTUFBTStCLE9BQ3RFRyxNQUFRakMsS0FBSzJCLGNBQWNNLE1BQVFGLE9BQU9HLFdBQWNsQyxLQUFLRCxNQUFNa0MsT0FHcEVqQyxLQUFLaUIsT0FBT04sRUFBSVgsS0FBS1csRUFBRUUsT0FBUyxFQUNoQ2IsS0FBS2lCLE9BQU9GLEVBQUlmLEtBQUtlLEVBQUVGLE9BQVMsRUFFNUJiLEtBQUtpQixRQUFRSSxFQUFJckIsS0FBS29CLFFBQVFlLEdBQVNBLEVBQU1WLFNBQVNDLEVBQU8xQixLQUFLaUIsU0FDdEUsQ0FFRG1CLGFBQVksRUFBRXpCLEVBQUYsRUFBS0ksSUFDaEJmLEtBQUtnQixjQUFjTCxFQUFJWCxLQUFLaUIsT0FBT04sRUFDbkNYLEtBQUtnQixjQUFjRCxFQUFJZixLQUFLaUIsT0FBT0YsQ0FDbkMsQ0FFRHNCLGFBQVksRUFBRTFCLEVBQUYsRUFBS0ksSUFDaEIsTUFBTXVCLEVBQVkzQixFQUFFNEIsTUFBUTVCLEVBQUU2QixJQUN4QkMsRUFBWTFCLEVBQUV3QixNQUFReEIsRUFBRXlCLElBRTlCeEMsS0FBS1csRUFBRUUsT0FBU2IsS0FBS2dCLGNBQWNMLEVBQUkyQixFQUN2Q3RDLEtBQUtlLEVBQUVGLE9BQVNiLEtBQUtnQixjQUFjRCxFQUFJMEIsQ0FDdkMsQ0FFREMsV0FBVSxFQUFFL0IsRUFBRixFQUFLSSxJQUFPLENBRXRCNEIsU0FBUSxPQUFFQyxFQUFGLE9BQVVDLElBQ2pCN0MsS0FBS1csRUFBRUUsUUFBVStCLEVBQ2pCNUMsS0FBS2UsRUFBRUYsUUFBVWdDLENBQ2pCLENBRURDLFNBQ005QyxLQUFLMkIsZ0JBRVYzQixLQUFLVyxFQUFFQyxRQUFVbUMsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUIvQyxLQUFLVyxFQUFFQyxRQUFTWixLQUFLVyxFQUFFRSxPQUFRYixLQUFLVyxFQUFFRyxNQUM5RWQsS0FBS2UsRUFBRUgsUUFBVW1DLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCL0MsS0FBS2UsRUFBRUgsUUFBU1osS0FBS2UsRUFBRUYsT0FBUWIsS0FBS2UsRUFBRUQsTUFFMUVkLEtBQUtpQixPQUFPTixFQUFJWCxLQUFLVyxFQUFFQyxRQUMxQlosS0FBS1csRUFBRXFDLFVBQVksUUFDVGhELEtBQUtpQixPQUFPTixFQUFJWCxLQUFLVyxFQUFFQyxVQUNqQ1osS0FBS1csRUFBRXFDLFVBQVksUUFHaEJoRCxLQUFLaUIsT0FBT0YsRUFBSWYsS0FBS2UsRUFBRUgsUUFDMUJaLEtBQUtlLEVBQUVpQyxVQUFZLE1BQ1RoRCxLQUFLaUIsT0FBT0YsRUFBSWYsS0FBS2UsRUFBRUgsVUFDakNaLEtBQUtlLEVBQUVpQyxVQUFZLFVBR3BCaEQsS0FBS2lCLE9BQU9OLEVBQUlYLEtBQUtXLEVBQUVDLFFBQ3ZCWixLQUFLaUIsT0FBT0YsRUFBSWYsS0FBS2UsRUFBRUgsUUFFdkJTLEVBQUlyQixLQUFLb0IsUUFBUSxDQUFDZSxFQUFPWixLQUN4QixNQUFNMEIsRUFBU2QsRUFBTWUsS0FBS0MsTUFBTXhDLEVBQUksRUFDOUJ5QyxFQUFTakIsRUFBTWUsS0FBS0MsTUFBTXBDLEVBQUksRUFHcEMsR0FBeUIsU0FBckJmLEtBQUtXLEVBQUVxQyxVQUFzQixDQUN0QmIsRUFBTWUsS0FBS0csU0FBUzFDLEVBQUlzQyxHQUV6QmpELEtBQUtELE1BQU1rQyxNQUFRLElBQzNCRSxFQUFNbUIsTUFBTTNDLEdBQUtYLEtBQUs2QixhQUFhSSxNQUNuQ0UsRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsTUFBTSxHQUF5QixVQUFyQjFELEtBQUtXLEVBQUVxQyxVQUF1QixDQUM5QmIsRUFBTWUsS0FBS0csU0FBUzFDLEVBQUlzQyxFQUUxQmpELEtBQUtELE1BQU1rQyxNQUFRLElBQzFCRSxFQUFNbUIsTUFBTTNDLEdBQUtYLEtBQUs2QixhQUFhSSxNQUNuQ0UsRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsQ0FHRCxHQUF5QixRQUFyQjFELEtBQUtlLEVBQUVpQyxVQUFxQixDQUNyQmIsRUFBTWUsS0FBS0csU0FBU3RDLEVBQUlxQyxHQUN6QnBELEtBQUtELE1BQU1rQyxNQUFRLElBQzNCRSxFQUFNbUIsTUFBTXZDLEdBQUtmLEtBQUs2QixhQUFhQyxPQUNuQ0ssRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsTUFBTSxHQUF5QixXQUFyQjFELEtBQUtlLEVBQUVpQyxVQUF3QixDQUMvQmIsRUFBTWUsS0FBS0csU0FBU3RDLEVBQUlxQyxFQUMxQnBELEtBQUtELE1BQU1rQyxNQUFRLElBQzFCRSxFQUFNbUIsTUFBTXZDLEdBQUtmLEtBQUs2QixhQUFhQyxPQUNuQ0ssRUFBTWUsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsQ0FFRHZCLEVBQU1XLE9BQU85QyxLQUFLaUIsT0FBbEIsSUFFRCxDQUVEMEMsVUFFQyxrQkMvSkZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnknKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblxuXHRcdHRoaXMueCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy55ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmdhbGxlcnlCb3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeVNpemVzID0ge1xuXHRcdFx0aGVpZ2h0OiAodGhpcy5nYWxsZXJ5Qm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiB0aGlzLnNpemVzLmhlaWdodCxcblx0XHRcdHdpZHRoOiAodGhpcy5nYWxsZXJ5Qm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aCxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LnRhcmdldCA9IDBcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LnRhcmdldCA9IDBcblxuXHRcdGlmICh0aGlzLnNjcm9sbCkgbWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuXHRcdHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG5cdFx0dGhpcy55LnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cdFx0XHRcdGlmICh5ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55IC09IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdC8vIHRoaXMuZ3JvdXAuc2V0UGFyZW50KG51bGwpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVlNDA1ZTIwYjBmYTE4NjVkMTk4XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FsbGVyeVNpemVzIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwic2NhbGVZIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsImRlc3Ryb3kiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=