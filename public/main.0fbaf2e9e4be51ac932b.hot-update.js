/*! For license information please see main.0fbaf2e9e4be51ac932b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:t,sizes:s}){this.group=new l.Transform,this.gl=e,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(t),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((e,t)=>new i.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){this.galleryBounds=this.galleryElement.getBoundingClientRect(),r(this.medias,(t=>t.onResize(e))),this.sizes=e.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width}}onTouchDown({x:e,y:t}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:e,y:t}){const s=e.start-e.end,i=t.start-t.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:e,y:t}){}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((e,t)=>{if("left"===this.x.direction){e.mesh.position.x+e.mesh.scale.x/2<-this.sizes.width/2&&(e.extra.x+=this.gallerySizes.width)}else if("right"===this.x.direction){e.mesh.position.x-e.mesh.scale.x/2>this.sizes.width/2&&(e.extra.x-=this.gallerySizes.width)}if("top"===this.y.direction){e.mesh.position.y+e.mesh.scale.y/2<-this.sizes.width/2&&(e.extra.y+=this.galleryHeight)}else if("bottom"===this.y.direction){e.mesh.position.y-e.mesh.scale.y/2>this.sizes.width/2&&(e.extra.y-=this.galleryHeight)}e.update(this.scroll)})))}}}},(function(e){e.h=()=>"8701ca2a2df35766a8b0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQkwsRUFBTW9CLE1BQU10QyxHQUFLWCxLQUFLOEIsYUFBYUksTUFFcEMsTUFBTSxHQUF5QixVQUFyQmxDLEtBQUtXLEVBQUVrQyxVQUF1QixDQUM5QmhCLEVBQU1pQixLQUFLQyxTQUFTcEMsRUFBSWtCLEVBQU1pQixLQUFLRSxNQUFNckMsRUFBSSxFQUUvQ1gsS0FBS0QsTUFBTW1DLE1BQVEsSUFDMUJMLEVBQU1vQixNQUFNdEMsR0FBS1gsS0FBSzhCLGFBQWFJLE1BRXBDLENBR0QsR0FBeUIsUUFBckJsQyxLQUFLZSxFQUFFOEIsVUFBcUIsQ0FDckJoQixFQUFNaUIsS0FBS0MsU0FBU2hDLEVBQUljLEVBQU1pQixLQUFLRSxNQUFNakMsRUFBSSxHQUU5Q2YsS0FBS0QsTUFBTW1DLE1BQVEsSUFDM0JMLEVBQU1vQixNQUFNbEMsR0FBS2YsS0FBS2tELGNBRXZCLE1BQU0sR0FBeUIsV0FBckJsRCxLQUFLZSxFQUFFOEIsVUFBd0IsQ0FDL0JoQixFQUFNaUIsS0FBS0MsU0FBU2hDLEVBQUljLEVBQU1pQixLQUFLRSxNQUFNakMsRUFBSSxFQUUvQ2YsS0FBS0QsTUFBTW1DLE1BQVEsSUFDMUJMLEVBQU1vQixNQUFNbEMsR0FBS2YsS0FBS2tELGNBRXZCLENBRURyQixFQUFNYyxPQUFPM0MsS0FBS2lCLE9BQWxCLElBRUQsa0JDbElGa0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuZ2FsbGVyeUJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmdhbGxlcnlCb3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy54LmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMueC5jdXJyZW50LCB0aGlzLngudGFyZ2V0LCB0aGlzLngubGVycClcblx0XHR0aGlzLnkuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy55LmN1cnJlbnQsIHRoaXMueS50YXJnZXQsIHRoaXMueS5sZXJwKVxuXG5cdFx0dGhpcy5zY3JvbGwueCA9IHRoaXMueC5jdXJyZW50XG5cdFx0dGhpcy5zY3JvbGwueSA9IHRoaXMueS5jdXJyZW50XG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgbWVkaWEubWVzaC5zY2FsZS54IC8gMlxuXG5cdFx0XHRcdGlmICh4IDwgLXRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCArPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8qIFktYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICd0b3AnKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgKyBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdFx0aWYgKHkgPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55ICs9IHRoaXMuZ2FsbGVyeUhlaWdodFxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMueS5kaXJlY3Rpb24gPT09ICdib3R0b20nKSB7XG5cdFx0XHRcdGNvbnN0IHkgPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnkgLSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdFx0aWYgKHkgPiB0aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgLT0gdGhpcy5nYWxsZXJ5SGVpZ2h0XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg3MDFjYTJhMmRmMzU3NjZhOGIwXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWVkaWEiLCJnYWxsZXJ5U2l6ZXMiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJtZXNoIiwicG9zaXRpb24iLCJzY2FsZSIsImV4dHJhIiwiZ2FsbGVyeUhlaWdodCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==