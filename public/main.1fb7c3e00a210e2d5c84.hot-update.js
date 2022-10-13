/*! For license information please see main.1fb7c3e00a210e2d5c84.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var l=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),r=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),n=s("./node_modules/lodash/map.js"),c=s("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:t,scene:e,sizes:s,transition:i}){this.gl=t,this.sizes=s,this.scene=e,this.transition=i,this.transfromPrefix=o("transform"),this.group=new l.Transform,this.galleryElement=document.querySelector(".collections__gallery"),this.galleryWrapperElement=document.querySelector(".collections__gallery__wrapper"),this.titlesElement=document.querySelector(".collections__titles"),this.collectionsElementsActive="collections__article--active",this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new c.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryWrapperElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*e}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=r.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.galleryElement.style[this.transfromPrefix]=`translateX(${this.scroll.current}px)`,this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((t,e)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"cda0f1099d481ac2b42c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUdEUSxTQUNDLElBQUszRCxLQUFLbUMsT0FBUSxPQUVsQm5DLEtBQUtjLE9BQU9FLE9BQVM0QyxFQUFBQSxRQUFBQSxNQUFBQSxPQUFrQjVELEtBQUtjLE9BQU93QixNQUFPLEVBQUd0QyxLQUFLYyxPQUFPRSxRQUV6RWhCLEtBQUtjLE9BQU9DLFFBQVU2QyxFQUFBQSxRQUFBQSxNQUFBQSxZQUNyQjVELEtBQUtjLE9BQU9DLFFBQ1pmLEtBQUtjLE9BQU9FLE9BQ1poQixLQUFLYyxPQUFPRyxNQUdiakIsS0FBS0ssZUFBZXFELE1BQU0xRCxLQUFLQyxpQkFBb0IsY0FBYUQsS0FBS2MsT0FBT0MsYUFFeEVmLEtBQUtjLE9BQU91QixLQUFPckMsS0FBS2MsT0FBT0MsUUFDbENmLEtBQUtjLE9BQU8rQyxVQUFZLFFBQ2Q3RCxLQUFLYyxPQUFPdUIsS0FBT3JDLEtBQUtjLE9BQU9DLFVBQ3pDZixLQUFLYyxPQUFPK0MsVUFBWSxRQUd6QjdELEtBQUtjLE9BQU91QixLQUFPckMsS0FBS2MsT0FBT0MsUUFFL0JZLEVBQUkzQixLQUFLMEIsUUFBUSxDQUFDSyxFQUFPRixLQUN4QkUsRUFBTTRCLE9BQU8zRCxLQUFLYyxPQUFPQyxRQUF6QixJQUdELE1BQU1jLEVBQVFpQyxLQUFLQyxNQUFNRCxLQUFLRSxJQUFJaEUsS0FBS2MsT0FBT0MsUUFBVWYsS0FBS2MsT0FBT3dCLE9BQVN0QyxLQUFLMEIsT0FBT3VDLFFBRXJGakUsS0FBSzZCLFFBQVVBLEdBQ2xCN0IsS0FBS2tELFNBQVNyQixFQUVmLENBR0RxQyxVQUNDbEUsS0FBS0gsTUFBTXNFLFlBQVluRSxLQUFLRyxNQUM1QixrQkNsS0ZpRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzLCB0cmFuc2l0aW9uIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcbiAgICB0aGlzLnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uXG5cblx0XHR0aGlzLnRyYW5zZnJvbVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnknKVxuXHRcdHRoaXMuZ2FsbGVyeVdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X193cmFwcGVyJylcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGVzJylcblxuICAgIHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG5cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5V3JhcHBlckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyogQ2hhbmdlZCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGBcbiAgICAgIHRyYW5zbGF0ZVkoLSR7MjUgKiBzZWxlY3RlZENvbGxlY3Rpb259JSlcbiAgICAgIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKVxuICAgICAgcm90YXRlKC05MGRlZylcbiAgICBgXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHR0aGlzLmdhbGxlcnlFbGVtZW50LnN0eWxlW3RoaXMudHJhbnNmcm9tUHJlZml4XSA9IGB0cmFuc2xhdGVYKCR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0Y29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGguYWJzKHRoaXMuc2Nyb2xsLmN1cnJlbnQgLyB0aGlzLnNjcm9sbC5saW1pdCkgKiB0aGlzLm1lZGlhcy5sZW5ndGgpXG5cblx0XHRpZiAodGhpcy5pbmRleCAhPT0gaW5kZXgpIHtcblx0XHRcdHRoaXMub25DaGFuZ2UoaW5kZXgpXG5cdFx0fVxuXHR9XG5cblx0LyogRGVzdHJveSAqL1xuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5ncm91cClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2RhMGYxMDk5ZDQ4MWFjMmI0MmNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0cmFuc2l0aW9uIiwidGhpcyIsInRyYW5zZnJvbVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYWxsZXJ5V3JhcHBlckVsZW1lbnQiLCJ0aXRsZXNFbGVtZW50IiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJzaG93IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwibWVkaWEiLCJoaWRlIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxhc3QiLCJsaW1pdCIsIndpZHRoIiwiY2xpZW50V2lkdGgiLCJvblRvdWNoRG93biIsIngiLCJ5Iiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsImVuZCIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJvbkNoYW5nZSIsInNlbGVjdGVkQ29sbGVjdGlvbiIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwiZWxlbWVudEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3R5bGUiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwiTWF0aCIsImZsb29yIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9