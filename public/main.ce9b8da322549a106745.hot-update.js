/*! For license information please see main.ce9b8da322549a106745.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Texture.js"),l=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./node_modules/gsap/index.js"),o=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const a=class{constructor({element:e,geometry:t,gl:s,index:i,scene:l,sizes:h}){this.element=e,this.geometry=t,this.gl=s,this.scene=l,this.index=i,this.sizes=h,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector(".collections__gallery__media__image");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new l.Program(this.gl,{fragment:o.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e),this.updateY())}}},"./app/components/Canvas/Collections/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),r=s("./node_modules/prefix/index.js"),o=s("./node_modules/lodash/map.js"),n=s("./app/components/Canvas/Collections/Media.js");const a=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.scene=t,this.transfromPrefix=r("transform"),this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__title"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=o(this.mediasElements,((e,t)=>new n.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(e=>e.show()))}hide(){o(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,o(this.medias,(t=>t.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:e,y:t}){}onWheel({pixelY:e}){this.scroll.target+=e}onChange(e){this.index=e;const t=parseInt(this.mediasElements[this.index].getAttribute("data-index"));o(this.collectionsElements,((e,s)=>{s===t?e.classList.add(this.collectionsElementsActive):e.classList.remove(this.collectionsElementsActive)})),this.titlesElement.style[this.transfromPrefix]="translate"}update(){if(!this.bounds)return;this.scroll.target=h.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=h.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,o(this.medias,((e,t)=>{e.update(this.scroll.current)}));const e=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==e&&this.onChange(e)}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"269560739b7158ec2a83"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0NvbGxlY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0Y29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsID8gc2Nyb2xsLnggOiAwKVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwgPyBzY3JvbGwueSA6IDApXG5cdH1cblxuXHQvKiBMb29wcyAqL1xuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcblx0fVxuXG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0ICsgdGhpcy5leHRyYS55XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cbn1cbiIsImltcG9ydCB7IFBsYW5lLCBUcmFuc2Zvcm0gfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cblx0XHR0aGlzLnRyYW5zZnJvbVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblx0XHR0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2FydGljbGUnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSA9ICdjb2xsZWN0aW9uc19fYXJ0aWNsZS0tYWN0aXZlJ1xuXHRcdHRoaXMudGl0bGVzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fdGl0bGUnKVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHN0YXJ0OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGVycDogMC4xLFxuXHRcdFx0dmVsb2NpdHk6IDEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cblx0XHR0aGlzLnNob3coKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cdHNob3coKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5zaG93KCkpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLmhpZGUoKSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmdhbGxlcnlFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5vblJlc2l6ZShldmVudCwgdGhpcy5zY3JvbGwpKVxuXG5cdFx0dGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmJvdW5kcy53aWR0aCAtIHRoaXMubWVkaWFzWzBdLmVsZW1lbnQuY2xpZW50V2lkdGhcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblx0fVxuXG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7XG5cdFx0Y29uc3QgZGlzdGFuY2UgPSB4LnN0YXJ0IC0geC5lbmRcblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgLSBkaXN0YW5jZVxuXHR9XG5cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdC8qIENoYW5nZWQgKi9cblx0b25DaGFuZ2UoaW5kZXgpIHtcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblxuXHRcdGNvbnN0IHNlbGVjdGVkQ29sbGVjdGlvbiA9IHBhcnNlSW50KHRoaXMubWVkaWFzRWxlbWVudHNbdGhpcy5pbmRleF0uZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JykpXG5cblx0XHRtYXAodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzLCAoZWxlbWVudCwgZWxlbWVudEluZGV4KSA9PiB7XG5cdFx0XHRpZiAoZWxlbWVudEluZGV4ID09PSBzZWxlY3RlZENvbGxlY3Rpb24pIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHNBY3RpdmUpXG5cdFx0XHR9XG5cdFx0fSlcblxuICAgIHRoaXMudGl0bGVzRWxlbWVudC5zdHlsZVt0aGlzLnRyYW5zZnJvbVByZWZpeF0gPSBgdHJhbnNsYXRlYFxuXHR9XG5cblx0LyogVXBkYXRlICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblxuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXQpICogdGhpcy5tZWRpYXMubGVuZ3RoKVxuXG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI2OTU2MDczOWI3MTU4ZWMyYTgzXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJ0cmFuc2Zyb21QcmVmaXgiLCJQcmVmaXgiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsInRpdGxlc0VsZW1lbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwibWVkaWEiLCJldmVudCIsImxhc3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsImRpcmVjdGlvbiIsIk1hdGgiLCJmbG9vciIsImFicyIsImxlbmd0aCIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==