/*! For license information please see main.671150235d5842a9c5e9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>n});var i=s("./app/components/Canvas/Media.js"),r=s("./node_modules/lodash/map.js"),h=s("./node_modules/gsap/index.js"),l=s("./node_modules/ogl/src/core/Transform.js"),o=s("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:t,scene:e,sizes:s}){this.group=new l.Transform,this.gl=t,this.sizes=s,this.galleryElement=document.querySelector(".home__gallery"),this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(e),this.x={current:0,target:0,lerp:.1},this.y={current:0,target:0,lerp:.1},this.scrollCurrent={x:0,y:0},this.scroll={x:0,y:0}}createGeometry(){this.geometry=new o.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((t,e)=>new i.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(t){this.scroll.x=this.x.target=0,this.scroll.y=this.y.target=0,this.galleryBounds=this.galleryElement.getBoundingClientRect(),this.sizes=t.sizes,this.gallerySizes={height:this.galleryBounds.height/window.innerHeight*this.sizes.height,width:this.galleryBounds.width/window.innerWidth*this.sizes.width},r(this.medias,(e=>e.onResize(t)))}onTouchDown({x:t,y:e}){this.scrollCurrent.x=this.scroll.x,this.scrollCurrent.y=this.scroll.y}onTouchMove({x:t,y:e}){const s=t.start-t.end,i=e.start-e.end;this.x.target=this.scrollCurrent.x-s,this.y.target=this.scrollCurrent.y-i}onTouchUp({x:t,y:e}){}onWheel({pixelX:t,pixelY:e}){this.x.target+=t,this.y.target+=e}update(){this.galleryBounds&&(this.x.current=h.default.utils.interpolate(this.x.current,this.x.target,this.x.lerp),this.y.current=h.default.utils.interpolate(this.y.current,this.y.target,this.y.lerp),this.scroll.x<this.x.current?this.x.direction="right":this.scroll.x>this.x.current&&(this.x.direction="left"),this.scroll.y<this.y.current?this.y.direction="top":this.scroll.y>this.y.current&&(this.y.direction="bottom"),this.scroll.x=this.x.current,this.scroll.y=this.y.current,r(this.medias,((t,e)=>{const s=t.mesh.scale.x/2,i=t.mesh.scale.y/2;if("left"===this.x.direction){t.mesh.position.x+s<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){t.mesh.position.x-s>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}if("top"===this.y.direction){t.mesh.position.y-i<-this.sizes.width/2&&(t.extra.y+=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("bottom"===this.y.direction){t.mesh.position.y+i>this.sizes.width/2&&(t.extra.y-=this.gallerySizes.height,t.mesh.rotation.z=h.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"05a1ee21f04f5709ee59"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzExNTAyMzVkNTg0MmE5YzVlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1ZBTUEsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxjQUFjLGtCQUM3Q0wsS0FBS00sZUFBaUJGLFNBQVNHLGlCQUFpQixnQ0FFaERQLEtBQUtRLGlCQUNMUixLQUFLUyxnQkFFTFQsS0FBS0MsTUFBTVMsVUFBVVosR0FFckJFLEtBQUtXLEVBQUksQ0FDUkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sSUFHUGQsS0FBS2UsRUFBSSxDQUNSSCxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxJQUdQZCxLQUFLZ0IsY0FBZ0IsQ0FDcEJMLEVBQUcsRUFDSEksRUFBRyxHQUdKZixLQUFLaUIsT0FBUyxDQUNiTixFQUFHLEVBQ0hJLEVBQUcsRUFFSixDQUVEUCxpQkFDQ1IsS0FBS2tCLFNBQVcsSUFBSUMsRUFBQUEsTUFBTW5CLEtBQUtILEdBQy9CLENBRURZLGdCQUNDVCxLQUFLb0IsT0FBU0MsRUFBSXJCLEtBQUtNLGdCQUFnQixDQUFDZ0IsRUFBU0MsSUFDekMsSUFBSUMsRUFBQUEsUUFBTSxDQUNoQkYsVUFDQUosU0FBVWxCLEtBQUtrQixTQUNmSyxRQUNBMUIsR0FBSUcsS0FBS0gsR0FDVEMsTUFBT0UsS0FBS0MsTUFDWkYsTUFBT0MsS0FBS0QsU0FHZCxDQUVEMEIsU0FBU0MsR0FDUjFCLEtBQUtpQixPQUFPTixFQUFJWCxLQUFLVyxFQUFFRSxPQUFTLEVBQ2hDYixLQUFLaUIsT0FBT0YsRUFBSWYsS0FBS2UsRUFBRUYsT0FBUyxFQUVoQ2IsS0FBSzJCLGNBQWdCM0IsS0FBS0csZUFBZXlCLHdCQUV6QzVCLEtBQUtELE1BQVEyQixFQUFNM0IsTUFFbkJDLEtBQUs2QixhQUFlLENBQ25CQyxPQUFTOUIsS0FBSzJCLGNBQWNHLE9BQVNDLE9BQU9DLFlBQWVoQyxLQUFLRCxNQUFNK0IsT0FDdEVHLE1BQVFqQyxLQUFLMkIsY0FBY00sTUFBUUYsT0FBT0csV0FBY2xDLEtBQUtELE1BQU1rQyxPQUdwRVosRUFBSXJCLEtBQUtvQixRQUFRZSxHQUFTQSxFQUFNVixTQUFTQyxJQUN6QyxDQUVEVSxhQUFZLEVBQUV6QixFQUFGLEVBQUtJLElBQ2hCZixLQUFLZ0IsY0FBY0wsRUFBSVgsS0FBS2lCLE9BQU9OLEVBQ25DWCxLQUFLZ0IsY0FBY0QsRUFBSWYsS0FBS2lCLE9BQU9GLENBQ25DLENBRURzQixhQUFZLEVBQUUxQixFQUFGLEVBQUtJLElBQ2hCLE1BQU11QixFQUFZM0IsRUFBRTRCLE1BQVE1QixFQUFFNkIsSUFDeEJDLEVBQVkxQixFQUFFd0IsTUFBUXhCLEVBQUV5QixJQUU5QnhDLEtBQUtXLEVBQUVFLE9BQVNiLEtBQUtnQixjQUFjTCxFQUFJMkIsRUFDdkN0QyxLQUFLZSxFQUFFRixPQUFTYixLQUFLZ0IsY0FBY0QsRUFBSTBCLENBQ3ZDLENBRURDLFdBQVUsRUFBRS9CLEVBQUYsRUFBS0ksSUFBTyxDQUV0QjRCLFNBQVEsT0FBRUMsRUFBRixPQUFVQyxJQUNqQjdDLEtBQUtXLEVBQUVFLFFBQVUrQixFQUNqQjVDLEtBQUtlLEVBQUVGLFFBQVVnQyxDQUNqQixDQUVEQyxTQUNNOUMsS0FBSzJCLGdCQUVWM0IsS0FBS1csRUFBRUMsUUFBVW1DLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCL0MsS0FBS1csRUFBRUMsUUFBU1osS0FBS1csRUFBRUUsT0FBUWIsS0FBS1csRUFBRUcsTUFDOUVkLEtBQUtlLEVBQUVILFFBQVVtQyxFQUFBQSxRQUFBQSxNQUFBQSxZQUF1Qi9DLEtBQUtlLEVBQUVILFFBQVNaLEtBQUtlLEVBQUVGLE9BQVFiLEtBQUtlLEVBQUVELE1BRTFFZCxLQUFLaUIsT0FBT04sRUFBSVgsS0FBS1csRUFBRUMsUUFDMUJaLEtBQUtXLEVBQUVxQyxVQUFZLFFBQ1RoRCxLQUFLaUIsT0FBT04sRUFBSVgsS0FBS1csRUFBRUMsVUFDakNaLEtBQUtXLEVBQUVxQyxVQUFZLFFBR2hCaEQsS0FBS2lCLE9BQU9GLEVBQUlmLEtBQUtlLEVBQUVILFFBQzFCWixLQUFLZSxFQUFFaUMsVUFBWSxNQUNUaEQsS0FBS2lCLE9BQU9GLEVBQUlmLEtBQUtlLEVBQUVILFVBQ2pDWixLQUFLZSxFQUFFaUMsVUFBWSxVQUdwQmhELEtBQUtpQixPQUFPTixFQUFJWCxLQUFLVyxFQUFFQyxRQUN2QlosS0FBS2lCLE9BQU9GLEVBQUlmLEtBQUtlLEVBQUVILFFBRXZCUyxFQUFJckIsS0FBS29CLFFBQVEsQ0FBQ2UsRUFBT1osS0FDeEIsTUFBTTBCLEVBQVNkLEVBQU1lLEtBQUtDLE1BQU14QyxFQUFJLEVBQzlCeUMsRUFBU2pCLEVBQU1lLEtBQUtDLE1BQU1wQyxFQUFJLEVBR3BDLEdBQXlCLFNBQXJCZixLQUFLVyxFQUFFcUMsVUFBc0IsQ0FDdEJiLEVBQU1lLEtBQUtHLFNBQVMxQyxFQUFJc0MsR0FFekJqRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMzQkUsRUFBTW1CLE1BQU0zQyxHQUFLWCxLQUFLNkIsYUFBYUksTUFDbkNFLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLE1BQU0sR0FBeUIsVUFBckIxRCxLQUFLVyxFQUFFcUMsVUFBdUIsQ0FDOUJiLEVBQU1lLEtBQUtHLFNBQVMxQyxFQUFJc0MsRUFFMUJqRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMxQkUsRUFBTW1CLE1BQU0zQyxHQUFLWCxLQUFLNkIsYUFBYUksTUFDbkNFLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBR0QsR0FBeUIsUUFBckIxRCxLQUFLZSxFQUFFaUMsVUFBcUIsQ0FDckJiLEVBQU1lLEtBQUtHLFNBQVN0QyxFQUFJcUMsR0FDekJwRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMzQkUsRUFBTW1CLE1BQU12QyxHQUFLZixLQUFLNkIsYUFBYUMsT0FDbkNLLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLE1BQU0sR0FBeUIsV0FBckIxRCxLQUFLZSxFQUFFaUMsVUFBd0IsQ0FDL0JiLEVBQU1lLEtBQUtHLFNBQVN0QyxFQUFJcUMsRUFDMUJwRCxLQUFLRCxNQUFNa0MsTUFBUSxJQUMxQkUsRUFBTW1CLE1BQU12QyxHQUFLZixLQUFLNkIsYUFBYUMsT0FDbkNLLEVBQU1lLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLENBRUR2QixFQUFNVyxPQUFPOUMsS0FBS2lCLE9BQWxCLElBRUQsa0JDM0pGMEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9fZ2FsbGVyeScpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXG5cdFx0dGhpcy54ID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnkgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsQ3VycmVudCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLngudGFyZ2V0ID0gMFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkudGFyZ2V0ID0gMFxuXG5cdFx0dGhpcy5nYWxsZXJ5Qm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmdhbGxlcnlTaXplcyA9IHtcblx0XHRcdGhlaWdodDogKHRoaXMuZ2FsbGVyeUJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogdGhpcy5zaXplcy5oZWlnaHQsXG5cdFx0XHR3aWR0aDogKHRoaXMuZ2FsbGVyeUJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGgsXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueCA9IHRoaXMuc2Nyb2xsLnhcblx0XHR0aGlzLnNjcm9sbEN1cnJlbnQueSA9IHRoaXMuc2Nyb2xsLnlcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgeERpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cdFx0Y29uc3QgeURpc3RhbmNlID0geS5zdGFydCAtIHkuZW5kXG5cblx0XHR0aGlzLngudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnggLSB4RGlzdGFuY2Vcblx0XHR0aGlzLnkudGFyZ2V0ID0gdGhpcy5zY3JvbGxDdXJyZW50LnkgLSB5RGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxYLCBwaXhlbFkgfSkge1xuXHRcdHRoaXMueC50YXJnZXQgKz0gcGl4ZWxYXG5cdFx0dGhpcy55LnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuZ2FsbGVyeUJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnguY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy54LmN1cnJlbnQsIHRoaXMueC50YXJnZXQsIHRoaXMueC5sZXJwKVxuXHRcdHRoaXMueS5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnkuY3VycmVudCwgdGhpcy55LnRhcmdldCwgdGhpcy55LmxlcnApXG5cblx0XHRpZiAodGhpcy5zY3JvbGwueCA8IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwueCA+IHRoaXMueC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLnkgPCB0aGlzLnkuY3VycmVudCkge1xuXHRcdFx0dGhpcy55LmRpcmVjdGlvbiA9ICd0b3AnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC55ID4gdGhpcy55LmN1cnJlbnQpIHtcblx0XHRcdHRoaXMueS5kaXJlY3Rpb24gPSAnYm90dG9tJ1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXHRcdHRoaXMuc2Nyb2xsLnkgPSB0aGlzLnkuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cdFx0XHRjb25zdCBzY2FsZVkgPSBtZWRpYS5tZXNoLnNjYWxlLnkgLyAyXG5cblx0XHRcdC8qIFgtYXhpcyAqL1xuXHRcdFx0aWYgKHRoaXMueC5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS54ICs9IHRoaXMuZ2FsbGVyeVNpemVzLndpZHRoXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggLSBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LyogWS1heGlzICovXG5cdFx0XHRpZiAodGhpcy55LmRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcblx0XHRcdFx0Y29uc3QgeSA9IG1lZGlhLm1lc2gucG9zaXRpb24ueSAtIHNjYWxlWVxuXHRcdFx0XHRpZiAoeSA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnkgKz0gdGhpcy5nYWxsZXJ5U2l6ZXMuaGVpZ2h0XG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnkuZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuXHRcdFx0XHRjb25zdCB5ID0gbWVkaWEubWVzaC5wb3NpdGlvbi55ICsgc2NhbGVZXG5cdFx0XHRcdGlmICh5ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYS55IC09IHRoaXMuZ2FsbGVyeVNpemVzLmhlaWdodFxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsKVxuXHRcdH0pXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA1YTFlZTIxZjA0ZjU3MDllZTU5XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwiZ2FsbGVyeUVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzZXRQYXJlbnQiLCJ4IiwiY3VycmVudCIsInRhcmdldCIsImxlcnAiLCJ5Iiwic2Nyb2xsQ3VycmVudCIsInNjcm9sbCIsImdlb21ldHJ5IiwiUGxhbmUiLCJtZWRpYXMiLCJtYXAiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJnYWxsZXJ5Qm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FsbGVyeVNpemVzIiwiaGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJtZWRpYSIsIm9uVG91Y2hEb3duIiwib25Ub3VjaE1vdmUiLCJ4RGlzdGFuY2UiLCJzdGFydCIsImVuZCIsInlEaXN0YW5jZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJ1cGRhdGUiLCJHU0FQIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwic2NhbGVZIiwicG9zaXRpb24iLCJleHRyYSIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==