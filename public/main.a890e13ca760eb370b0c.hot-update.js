/*! For license information please see main.a890e13ca760eb370b0c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/ogl/src/core/Texture.js"),l=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const a=class{constructor({element:e,geometry:t,gl:s,index:i,scene:l,sizes:h}){this.element=e,this.geometry=t,this.gl=s,this.scene=l,this.index=i,this.sizes=h,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector(".collections__gallery__media__image");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new l.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e),this.updateY())}}},"./app/components/Canvas/Collections/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Transform.js"),l=s("./node_modules/ogl/src/extras/Plane.js"),h=s("./node_modules/gsap/index.js"),o=s("./node_modules/lodash/map.js"),r=s("./app/components/Canvas/Collections/Media.js");const n=class{constructor({gl:e,scene:t,sizes:s}){this.gl=e,this.sizes=s,this.scene=t,this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.collectionsElements=document.querySelectorAll(".collections__article"),this.collectionsElementsActive="collections__article--active",this.titlesElement=document.querySelector(".collections__title"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new l.Plane(this.gl)}createGallery(){this.medias=o(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){o(this.medias,(e=>e.show()))}hide(){o(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,o(this.medias,(t=>t.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:t}){this.scroll.last=this.scroll.current}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.last-s}onTouchUp({x:e,y:t}){}onWheel({pixelY:e}){this.scroll.target+=e}onChange(e){this.index=e;const t=parseInt(this.mediasElements[this.index].getAttribute("data-index"));o(this.collectionsElements,((e,s)=>{s===t?e.classList.add(this.collectionsElementsActive):e.classList.remove(this.collectionsElementsActive)}))}update(){if(!this.bounds)return;this.scroll.target=h.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=h.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,o(this.medias,((e,t)=>{e.update(this.scroll.current)}));const e=Math.floor(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length);this.index!==e&&this.onChange(e)}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"754165375aa05dbece28"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQ3BCeEYsRUFBUTJGLFVBQVVDLElBQUl0RixLQUFLd0QsMkJBRTNCOUQsRUFBUTJGLFVBQVVFLE9BQU92RixLQUFLd0QsMEJBQzlCLEdBRUYsQ0FHRFIsU0FDQyxJQUFLaEQsS0FBSzhCLE9BQVEsT0FFbEI5QixLQUFLdUMsT0FBT29CLE9BQVN2QixFQUFBQSxRQUFBQSxNQUFBQSxPQUFrQnBDLEtBQUt1QyxPQUFPaUMsTUFBTyxFQUFHeEUsS0FBS3VDLE9BQU9vQixRQUV6RTNELEtBQUt1QyxPQUFPbUIsUUFBVXRCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCcEMsS0FBS3VDLE9BQU9tQixRQUNaMUQsS0FBS3VDLE9BQU9vQixPQUNaM0QsS0FBS3VDLE9BQU9xQixNQUdUNUQsS0FBS3VDLE9BQU9nQyxLQUFPdkUsS0FBS3VDLE9BQU9tQixRQUNsQzFELEtBQUt1QyxPQUFPaUQsVUFBWSxRQUNkeEYsS0FBS3VDLE9BQU9nQyxLQUFPdkUsS0FBS3VDLE9BQU9tQixVQUN6QzFELEtBQUt1QyxPQUFPaUQsVUFBWSxRQUd6QnhGLEtBQUt1QyxPQUFPZ0MsS0FBT3ZFLEtBQUt1QyxPQUFPbUIsUUFFL0JTLEVBQUluRSxLQUFLa0UsUUFBUSxDQUFDRyxFQUFPeEUsS0FDeEJ3RSxFQUFNckIsT0FBT2hELEtBQUt1QyxPQUFPbUIsUUFBekIsSUFHRCxNQUFNN0QsRUFBUTRGLEtBQUtDLE1BQU1ELEtBQUtFLElBQUkzRixLQUFLdUMsT0FBT21CLFFBQVUxRCxLQUFLdUMsT0FBT2lDLE9BQVN4RSxLQUFLa0UsT0FBTzBCLFFBRXJGNUYsS0FBS0gsUUFBVUEsR0FDbEJHLEtBQUtpRixTQUFTcEYsRUFFZixDQUdEZ0csVUFDQzdGLEtBQUtGLE1BQU1nRyxZQUFZOUYsS0FBS2lELE1BQzVCLGtCQ2xKRjhDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Db2xsZWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSwgUHJvZ3JhbSwgTWVzaCB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnXG5pbXBvcnQgdmVydGV4IGZyb20gJ3NoYWRlcnMvcGxhbmUtdmVydGV4Lmdsc2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuY3JlYXRlVGV4dHVyZSgpXG5cdFx0dGhpcy5jcmVhdGVQcm9ncmFtKClcblx0XHR0aGlzLmNyZWF0ZU1lc2goKVxuXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVRleHR1cmUoKSB7XG5cdFx0dGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbClcblxuXHRcdGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuaW1hZ2UgPSBuZXcgd2luZG93LkltYWdlKClcblx0XHR0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cydcblx0XHR0aGlzLmltYWdlLnNyYyA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR1QWxwaGE6IHsgdmFsdWU6IDAgfSxcblx0XHRcdFx0dE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH0sXG5cdFx0XHR9LFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcblx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0cHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuXHRcdH0pXG5cblx0XHR0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZShzaXplcylcblx0XHR0aGlzLnVwZGF0ZVgoKVxuXHRcdHRoaXMudXBkYXRlWSgpXG5cdH1cblxuXHQvKiBBbmltYXRpb25zICovXG5cblx0c2hvdygpIHtcblx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAwLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDEsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0R1NBUC50byh0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLCB7XG5cdFx0XHR2YWx1ZTogMCxcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbCA/IHNjcm9sbC54IDogMClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsID8gc2Nyb2xsLnkgOiAwKVxuXHR9XG5cblx0LyogTG9vcHMgKi9cblxuXHR1cGRhdGVTY2FsZSgpIHtcblx0XHR0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aFxuXHRcdHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG59XG4iLCJpbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXG5cdFx0dGhpcy5nYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fd3JhcHBlcicpXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fZ2FsbGVyeV9fbWVkaWEnKVxuXHRcdHRoaXMuY29sbGVjdGlvbnNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2xsZWN0aW9uc19fYXJ0aWNsZScpXG5cdFx0dGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlID0gJ2NvbGxlY3Rpb25zX19hcnRpY2xlLS1hY3RpdmUnXG5cdFx0dGhpcy50aXRsZXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbGxlY3Rpb25zX190aXRsZScpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0c3RhcnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsZXJwOiAwLjEsXG5cdFx0XHR2ZWxvY2l0eTogMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZUdlb21ldHJ5KClcblx0XHR0aGlzLmNyZWF0ZUdhbGxlcnkoKVxuXG5cdFx0dGhpcy5ncm91cC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMuc2hvdygpXG5cdH1cblxuXHRjcmVhdGVHZW9tZXRyeSgpIHtcblx0XHR0aGlzLmdlb21ldHJ5ID0gbmV3IFBsYW5lKHRoaXMuZ2wpXG5cdH1cblxuXHRjcmVhdGVHYWxsZXJ5KCkge1xuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cdG9uUmVzaXplKGV2ZW50KSB7XG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZ2FsbGVyeUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbCkpXG5cblx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuYm91bmRzLndpZHRoIC0gdGhpcy5tZWRpYXNbMF0uZWxlbWVudC5jbGllbnRXaWR0aFxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHtcblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXHR9XG5cblx0b25Ub3VjaE1vdmUoeyB4LCB5IH0pIHtcblx0XHRjb25zdCBkaXN0YW5jZSA9IHguc3RhcnQgLSB4LmVuZFxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gdGhpcy5zY3JvbGwubGFzdCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0b25XaGVlbCh7IHBpeGVsWSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0LyogQ2hhbmdlZCAqL1xuXHRvbkNoYW5nZShpbmRleCkge1xuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRDb2xsZWN0aW9uID0gcGFyc2VJbnQodGhpcy5tZWRpYXNFbGVtZW50c1t0aGlzLmluZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSlcblxuXHRcdG1hcCh0aGlzLmNvbGxlY3Rpb25zRWxlbWVudHMsIChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcblx0XHRcdGlmIChlbGVtZW50SW5kZXggPT09IHNlbGVjdGVkQ29sbGVjdGlvbikge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jb2xsZWN0aW9uc0VsZW1lbnRzQWN0aXZlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0LyogVXBkYXRlICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoLXRoaXMuc2Nyb2xsLmxpbWl0LCAwLCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmxhc3QgPCB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5sYXN0ID4gdGhpcy5zY3JvbGwuY3VycmVudCkge1xuXHRcdFx0dGhpcy5zY3JvbGwuZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgKG1lZGlhLCBpbmRleCkgPT4ge1xuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cdFx0fSlcblxuXHRcdGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLnNjcm9sbC5jdXJyZW50IC8gdGhpcy5zY3JvbGwubGltaXQpICogdGhpcy5tZWRpYXMubGVuZ3RoKVxuXG5cdFx0aWYgKHRoaXMuaW5kZXggIT09IGluZGV4KSB7XG5cdFx0XHR0aGlzLm9uQ2hhbmdlKGluZGV4KVxuXHRcdH1cblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1NDE2NTM3NWFhMDVkYmVjZTI4XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb2xsZWN0aW9uc0VsZW1lbnRzIiwiY29sbGVjdGlvbnNFbGVtZW50c0FjdGl2ZSIsInRpdGxlc0VsZW1lbnQiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwibWVkaWEiLCJldmVudCIsImxhc3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRDb2xsZWN0aW9uIiwicGFyc2VJbnQiLCJlbGVtZW50SW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJkaXJlY3Rpb24iLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJsZW5ndGgiLCJkZXN0cm95IiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=