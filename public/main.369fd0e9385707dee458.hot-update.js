/*! For license information please see main.369fd0e9385707dee458.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),l=s("./node_modules/gsap/index.js"),o=s("./node_modules/ogl/src/core/Transform.js"),n=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/console-browserify/index.js");const a=class{constructor({gl:e,scene:t,sizes:s}){this.group=new o.Transform,this.gl=e,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((e,t)=>new i.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){this.galleryBounds=this.galleryElement.getBoundingClientRect(),r(this.medias,(t=>t.onResize(e))),this.sizes=e.sizes}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,i=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:e,y:t}){}update(){this.galleryBounds&&(this.x.current=l.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=l.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="left":this.scroll.x>this.x.current&&(this.x.direction="right"),this.galleryWidth=this.galleryBounds.width/window.innerWidth*this.sizes.width,this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((e,t)=>{if(0===t){e.mesh.position.x+e.mesh.scale.x/2<-this.sizes.width/2&&h.log(e.mesh.position.x)}e.update(this.scroll)})))}}}},(function(e){e.h=()=>"7d56b54f5f7581ed7247"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTW5DLEVBQUksR0FDOUNYLEtBQUtELE1BQU0wQyxNQUFRLEdBQUdNLEVBQVFDLElBQUluQixFQUFNZSxLQUFLQyxTQUFTbEMsRUFDL0QsQ0FDRGtCLEVBQU1RLE9BQU9yQyxLQUFLaUIsT0FBbEIsSUFFRCxrQkMzR0ZnQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX19nYWxsZXJ5Jylcblx0XHR0aGlzLm1lZGlhc0VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQoc2NlbmUpXG5cblx0XHR0aGlzLnggPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMueSA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50ID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCkpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnggPSB0aGlzLnNjcm9sbC54XG5cdFx0dGhpcy5zY3JvbGxDdXJyZW50LnkgPSB0aGlzLnNjcm9sbC55XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IHhEaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXHRcdGNvbnN0IHlEaXN0YW5jZSA9IHkuc3RhcnQgLSB5LmVuZFxuXG5cdFx0dGhpcy54LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC54IC0geERpc3RhbmNlXG5cdFx0dGhpcy55LnRhcmdldCA9IHRoaXMuc2Nyb2xsQ3VycmVudC55IC0geURpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5nYWxsZXJ5Qm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMueC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnguY3VycmVudCwgdGhpcy54LnRhcmdldCwgdGhpcy54LmxlcnApXG5cdFx0dGhpcy55LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueS5jdXJyZW50LCB0aGlzLnkudGFyZ2V0LCB0aGlzLnkubGVycClcblxuXHRcdGlmICh0aGlzLnNjcm9sbC54IDwgdGhpcy54LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLnggPiB0aGlzLnguY3VycmVudCkge1xuXHRcdFx0dGhpcy54LmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9XG5cblx0XHR0aGlzLmdhbGxlcnlXaWR0aCA9ICh0aGlzLmdhbGxlcnlCb3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbC54ID0gdGhpcy54LmN1cnJlbnRcblx0XHR0aGlzLnNjcm9sbC55ID0gdGhpcy55LmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSBjb25zb2xlLmxvZyhtZWRpYS5tZXNoLnBvc2l0aW9uLngpXG5cdFx0XHR9XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2Q1NmI1NGY1Zjc1ODFlZDcyNDdcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJnYWxsZXJ5RWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsIngiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInkiLCJzY3JvbGxDdXJyZW50Iiwic2Nyb2xsIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImdhbGxlcnlCb3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJnYWxsZXJ5V2lkdGgiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtZXNoIiwicG9zaXRpb24iLCJzY2FsZSIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=