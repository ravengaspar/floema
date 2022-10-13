/*! For license information please see main.d8bf288192657f7d39bc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/index.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var l=s("./node_modules/ogl/src/core/Transform.js"),i=s("./node_modules/ogl/src/extras/Plane.js"),o=s("./node_modules/gsap/index.js"),r=s("./node_modules/prefix/index.js"),n=s("./node_modules/lodash/map.js"),c=s("./app/components/Canvas/Collections/Media.js");const h=class{constructor({gl:t,scene:e,sizes:s}){this.gl=t,this.sizes=s,this.scene=e,this.transfromPrefix=r("transform"),this.group=new l.Transform,this.buttonElement=document.querySelector(".collections__button"),this.buttonElement.addEventListener("click"),this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__titles"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=n(this.mediasElements,((t,e)=>new c.default({element:t,geometry:this.geometry,index:e,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){n(this.medias,(t=>t.show()))}hide(){n(this.medias,(t=>t.hide()))}onResize(t){this.sizes=t.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,n(this.medias,(e=>e.onResize(t,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:t,y:e}){this.scroll.last=this.scroll.current}onTouchMove({x:t,y:e}){const s=t.start-t.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:t,y:e}){}onWheel({pixelY:t}){this.scroll.target+=t}onChange(t){this.index=t;const e=parseInt(this.mediasElements[this.index].getAttribute("data-index"));n(this.collectionsElements,((t,s)=>{s===e?t.classList.add(this.collectionsElementsActive):t.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]=`\n      translateY(-${25*e}%)\n      translate(-50%, -50%)\n      rotate(-90deg)\n    `}update(){if(!this.bounds)return;this.scroll.target=o.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=o.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,n(this.medias,((t,e)=>{t.update(this.scroll.current)}));const t=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==t&&this.onChange(t)}destroy(){this.scene.removeChild(this.group)}}}},(function(t){t.h=()=>"a14250c2189af727d2e1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOGJmMjg4MTkyNjU3ZjdkMzliYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBT0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBQ2JDLEtBQUtGLE1BQVFBLEVBRWJFLEtBQUtDLGdCQUFrQkMsRUFBTyxhQUU5QkYsS0FBS0csTUFBUSxJQUFJQyxFQUFBQSxVQUVqQkosS0FBS0ssY0FBZ0JDLFNBQVNDLGNBQWMsd0JBRzFDUCxLQUFLSyxjQUFjRyxpQkFBaUIsU0FHdENSLEtBQUtTLGVBQWlCSCxTQUFTQyxjQUFjLGtDQUM3Q1AsS0FBS1UsZUFBaUJKLFNBQVNLLGlCQUFpQixnQ0FDaERYLEtBQUtZLG9CQUFzQk4sU0FBU0ssaUJBQWlCLHlCQUNyRFgsS0FBS2EsMEJBQTRCLCtCQUVqQ2IsS0FBS2MsY0FBZ0JSLFNBQVNDLGNBQWMsd0JBRTVDUCxLQUFLZSxPQUFTLENBQ2JDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLElBR1BsQixLQUFLZSxPQUFTLENBQ2JDLFFBQVMsRUFDVEcsTUFBTyxFQUNQRixPQUFRLEVBQ1JDLEtBQU0sR0FDTkUsU0FBVSxHQUdYcEIsS0FBS3FCLGlCQUNMckIsS0FBS3NCLGdCQUVMdEIsS0FBS0csTUFBTW9CLFVBQVV2QixLQUFLRixPQUUxQkUsS0FBS3dCLE1BQ0wsQ0FFREgsaUJBQ0NyQixLQUFLeUIsU0FBVyxJQUFJQyxFQUFBQSxNQUFNMUIsS0FBS0gsR0FDL0IsQ0FFRHlCLGdCQUNDdEIsS0FBSzJCLE9BQVNDLEVBQUk1QixLQUFLVSxnQkFBZ0IsQ0FBQ21CLEVBQVNDLElBQ3pDLElBQUlDLEVBQUFBLFFBQU0sQ0FDaEJGLFVBQ0FKLFNBQVV6QixLQUFLeUIsU0FDZkssUUFDQWpDLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtHLE1BQ1pKLE1BQU9DLEtBQUtELFNBR2QsQ0FHRHlCLE9BQ0NJLEVBQUk1QixLQUFLMkIsUUFBUUssR0FBU0EsRUFBTVIsUUFDaEMsQ0FDRFMsT0FDQ0wsRUFBSTVCLEtBQUsyQixRQUFRSyxHQUFTQSxFQUFNQyxRQUNoQyxDQUdEQyxTQUFTQyxHQUNSbkMsS0FBS0QsTUFBUW9DLEVBQU1wQyxNQUVuQkMsS0FBS29DLE9BQVNwQyxLQUFLUyxlQUFlNEIsd0JBRWxDckMsS0FBS2UsT0FBT3VCLEtBQU90QyxLQUFLZSxPQUFPRSxPQUFTLEVBRXhDVyxFQUFJNUIsS0FBSzJCLFFBQVFLLEdBQVNBLEVBQU1FLFNBQVNDLEVBQU9uQyxLQUFLZSxVQUVyRGYsS0FBS2UsT0FBT3dCLE1BQVF2QyxLQUFLb0MsT0FBT0ksTUFBUXhDLEtBQUsyQixPQUFPLEdBQUdFLFFBQVFZLFdBQy9ELENBRURDLGFBQVksRUFBRUMsRUFBRixFQUFLQyxJQUNoQjVDLEtBQUtlLE9BQU91QixLQUFPdEMsS0FBS2UsT0FBT0MsT0FDL0IsQ0FFRDZCLGFBQVksRUFBRUYsRUFBRixFQUFLQyxJQUNoQixNQUFNRSxFQUFXSCxFQUFFeEIsTUFBUXdCLEVBQUVJLElBRTdCL0MsS0FBS2UsT0FBT0UsT0FBU2pCLEtBQUtlLE9BQU91QixLQUFPUSxDQUN4QyxDQUVERSxXQUFVLEVBQUVMLEVBQUYsRUFBS0MsSUFBTyxDQUV0QkssU0FBUSxPQUFFQyxJQUNUbEQsS0FBS2UsT0FBT0UsUUFBVWlDLENBQ3RCLENBR0RDLFNBQVNyQixHQUNSOUIsS0FBSzhCLE1BQVFBLEVBRWIsTUFBTXNCLEVBQXFCQyxTQUFTckQsS0FBS1UsZUFBZVYsS0FBSzhCLE9BQU93QixhQUFhLGVBRWpGMUIsRUFBSTVCLEtBQUtZLHFCQUFxQixDQUFDaUIsRUFBUzBCLEtBQ25DQSxJQUFpQkgsRUFDcEJ2QixFQUFRMkIsVUFBVUMsSUFBSXpELEtBQUthLDJCQUUzQmdCLEVBQVEyQixVQUFVRSxPQUFPMUQsS0FBS2EsMEJBQzlCLElBR0ZiLEtBQUtjLGNBQWM2QyxNQUFNM0QsS0FBS0MsaUJBQW9CLHVCQUNoQyxHQUFLbUQsOERBSXZCLENBR0RRLFNBQ0MsSUFBSzVELEtBQUtvQyxPQUFRLE9BRWxCcEMsS0FBS2UsT0FBT0UsT0FBUzRDLEVBQUFBLFFBQUFBLE1BQUFBLE9BQWtCN0QsS0FBS2UsT0FBT3dCLE1BQU8sRUFBR3ZDLEtBQUtlLE9BQU9FLFFBRXpFakIsS0FBS2UsT0FBT0MsUUFBVTZDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCN0QsS0FBS2UsT0FBT0MsUUFDWmhCLEtBQUtlLE9BQU9FLE9BQ1pqQixLQUFLZSxPQUFPRyxNQUdUbEIsS0FBS2UsT0FBT3VCLEtBQU90QyxLQUFLZSxPQUFPQyxRQUNsQ2hCLEtBQUtlLE9BQU8rQyxVQUFZLFFBQ2Q5RCxLQUFLZSxPQUFPdUIsS0FBT3RDLEtBQUtlLE9BQU9DLFVBQ3pDaEIsS0FBS2UsT0FBTytDLFVBQVksUUFHekI5RCxLQUFLZSxPQUFPdUIsS0FBT3RDLEtBQUtlLE9BQU9DLFFBRS9CWSxFQUFJNUIsS0FBSzJCLFFBQVEsQ0FBQ0ssRUFBT0YsS0FDeEJFLEVBQU00QixPQUFPNUQsS0FBS2UsT0FBT0MsUUFBekIsSUFHRCxNQUFNYyxFQUFRaUMsS0FBS0MsTUFBTUQsS0FBS0UsSUFBSWpFLEtBQUtlLE9BQU9DLFFBQVVoQixLQUFLZSxPQUFPd0IsT0FBU3ZDLEtBQUsyQixPQUFPdUMsUUFFckZsRSxLQUFLOEIsUUFBVUEsR0FDbEI5QixLQUFLbUQsU0FBU3JCLEVBRWYsQ0FHRHFDLFVBQ0NuRSxLQUFLRixNQUFNc0UsWUFBWXBFLEtBQUtHLE1BQzVCLGtCQ2pLRmtFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMudHJhbnNmcm9tUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5idXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19idXR0b24nKVxuXG5cbiAgICB0aGlzLmJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCApXG5cblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZXMnKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG5cdFx0dGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdC8qIENoYW5nZWQgKi9cblx0b25DaGFuZ2UoaW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblxuXHRcdGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cblx0XHRtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZnJvbVByZWZpeF0gPSBgXG4gICAgICB0cmFuc2xhdGVZKC0kezI1ICogc2VsZWN0ZWRDb2xsZWN0aW9ufSUpXG4gICAgICB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbiAgICAgIHJvdGF0ZSgtOTBkZWcpXG4gICAgYFxuXHR9XG5cblx0LyogVXBkYXRlICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblxuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXQpICogdGhpcy5tZWRpYXMubGVuZ3RoKVxuXG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImExNDI1MGMyMTg5YWY3MjdkMmUxXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsInRyYW5zZnJvbVByZWZpeCIsIlByZWZpeCIsImdyb3VwIiwiVHJhbnNmb3JtIiwiYnV0dG9uRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYWxsZXJ5RWxlbWVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbGxlY3Rpb25zRWxlbWVudHMiLCJjb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlIiwidGl0bGVzRWxlbWVudCIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsZXJwIiwic3RhcnQiLCJ2ZWxvY2l0eSIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlR2FsbGVyeSIsInNldFBhcmVudCIsInNob3ciLCJnZW9tZXRyeSIsIlBsYW5lIiwibWVkaWFzIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwiTWVkaWEiLCJtZWRpYSIsImhpZGUiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGFzdCIsImxpbWl0Iiwid2lkdGgiLCJjbGllbnRXaWR0aCIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsInVwZGF0ZSIsIkdTQVAiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJsZW5ndGgiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=