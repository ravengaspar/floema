/*! For license information please see main.aa9594ffe8802801e3fd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),c=s("./node_modules/lodash/map.js"),n=s("./app/components/Canvas/Collections/Media.js");i;const h=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__title"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=c(this.mediasElements,((t,e)=>new n.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){c(this.medias,(t=>t.show()))}hide(){c(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,c(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));c(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)}))}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,c(this.medias,((t,e)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"d1ff23394596ce9a60e6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBVTRDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCeEQsS0FBS1csT0FBT0MsUUFDWlosS0FBS1csT0FBT0UsT0FDWmIsS0FBS1csT0FBT0csTUFHVGQsS0FBS1csT0FBT3VCLEtBQU9sQyxLQUFLVyxPQUFPQyxRQUNsQ1osS0FBS1csT0FBTzhDLFVBQVksUUFDZHpELEtBQUtXLE9BQU91QixLQUFPbEMsS0FBS1csT0FBT0MsVUFDekNaLEtBQUtXLE9BQU84QyxVQUFZLFFBR3pCekQsS0FBS1csT0FBT3VCLEtBQU9sQyxLQUFLVyxPQUFPQyxRQUUvQlksRUFBSXhCLEtBQUt1QixRQUFRLENBQUNLLEVBQU9GLEtBQ3hCRSxFQUFNMkIsT0FBT3ZELEtBQUtXLE9BQU9DLFFBQXpCLElBR0QsTUFBTWMsRUFBUWdDLEtBQUtDLE1BQU1ELEtBQUtFLElBQUk1RCxLQUFLVyxPQUFPQyxRQUFVWixLQUFLVyxPQUFPd0IsT0FBU25DLEtBQUt1QixPQUFPc0MsUUFFckY3RCxLQUFLMEIsUUFBVUEsR0FDbEIxQixLQUFLK0MsU0FBU3JCLEVBRWYsQ0FHRG9DLFVBQ0M5RCxLQUFLRixNQUFNaUUsWUFBWS9ELEtBQUtDLE1BQzVCLGtCQ2xKRitELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYScpXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbGxlY3Rpb25zX19hcnRpY2xlJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUgPSAnY29sbGVjdGlvbnNfX2FydGljbGUtLWFjdGl2ZSdcblx0XHR0aGlzLnRpdGxlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX3RpdGxlJylcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBDaGFuZ2VkICovXG5cdG9uQ2hhbmdlKGluZGV4KSB7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cblx0XHRjb25zdCBzZWxlY3RlZENvbGxlY3Rpb24gPSBwYXJzZUludCh0aGlzLm1lZGlhc0VsZW1lbnRzW3RoaXMuaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpKVxuXG5cdFx0bWFwKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cywgKGVsZW1lbnQsIGVsZW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnRJbmRleCA9PT0gc2VsZWN0ZWRDb2xsZWN0aW9uKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG5cblx0XHRpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDFmZjIzMzk0NTk2Y2U5YTYwZTZcIikiXSwibmFtZXMiOlsiaSIsImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsInRpdGxlc0VsZW1lbnQiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3QiLCJsaW1pdCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidXBkYXRlIiwiR1NBUCIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==