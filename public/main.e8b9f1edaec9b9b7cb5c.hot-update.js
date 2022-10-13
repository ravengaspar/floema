/*! For license information please see main.e8b9f1edaec9b9b7cb5c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>a});var i=t("./node_modules/ogl/src/core/Transform.js"),h=t("./node_modules/gsap/index.js"),r=t("./node_modules/lodash/map.js"),o=t("./app/components/Canvas/About/Media.js");class a{constructor({element:e,geometry:s,index:t,gl:h,scene:r,sizes:o}){this.element=e,this.elementWrapper=e.querySelector(".about__gallery__wrapper"),this.geometry=s,this.index=t,this.gl=h,this.scene=r,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,start:0,target:0,lerp:.1},this.createMedias(),this.onResize({sizes:this.sizes}),this.group.setParent(this.scene)}createMedias(){this.mediasElements=this.element.querySelectorAll(".about__gallery__media"),this.medias=r(this.mediasElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){r(this.medias,(e=>e.show()))}hide(){r(this.medias,(e=>e.hide()))}onResize(e){this.bounds=this.elementWrapper.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,r(this.medias,(s=>s.onResize(e,this.scroll.current)))}onTouchDown({x:e,y:s}){this.scroll.start=this.scroll.current}onTouchMove({x:e,y:s}){const t=e.start-e.end;this.scroll.target=this.scroll.start-t}onTouchUp({x:e,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=h.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),r(this.medias,((e,s)=>{const t=e.mesh.scale.x/2;if(" left"===this.direction){e.mesh.position.x+t<-this.sizes.width/2&&(e.extra+=this.width)}else if("right"===this.direction){e.mesh.position.x-t>this.sizes.width/2&&(e.extra-=this.width)}e.update(this.scroll.current)})))}destroy(){this.scene.removeChild(this.group)}}},"./app/components/Canvas/About/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),r=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./node_modules/gsap/index.js"),a=t("./app/shaders/plane-fragment.glsl"),n=t("./app/shaders/plane-vertex.glsl");const l=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:r}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.index=i,this.sizes=r,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:a.default,vertex:n.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){o.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){o.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,s){this.extra=0,this.createBounds(e),this.updateX(s),this.updateY(0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"5ec69cbaba37edb13fc6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBSSxHQUNYN0IsS0FBSzZCLEdBQUs3QixLQUFLc0IsT0FBT2tELElBQU0zQyxHQUFLSixPQUFPNkMsWUFFeEN0RSxLQUFLc0MsS0FBS0UsU0FBU1gsRUFDbEI3QixLQUFLRCxNQUFNc0UsT0FBUyxFQUFJckUsS0FBS3NDLEtBQUtDLE1BQU1WLEVBQUksRUFBSTdCLEtBQUs2QixFQUFJN0IsS0FBS0QsTUFBTXNFLE1BQ3JFLENBRURuQyxPQUFPN0IsR0FDREwsS0FBS3NCLFNBRVZ0QixLQUFLbUUsUUFBUTlELEdBQ2JMLEtBQUtvRSxRQUFRLEdBQ2Isa0JDekhGSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9BYm91dC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmVsZW1lbnRXcmFwcGVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfX2dhbGxlcnlfX3dyYXBwZXInKVxuXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cblx0XHR0aGlzLm9uUmVzaXplKHsgc2l6ZXM6IHRoaXMuc2l6ZXMgfSlcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHRoaXMuc2NlbmUpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWFzID0gbWFwKHRoaXMubWVkaWFzRWxlbWVudHMsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0XHRzaXplczogdGhpcy5zaXplcyxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblx0c2hvdygpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnNob3coKSlcblx0fVxuXHRoaWRlKCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuaGlkZSgpKVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudFdyYXBwZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMuc2l6ZXMgPSBldmVudC5zaXplc1xuXG5cdFx0dGhpcy53aWR0aCA9ICh0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIHRoaXMuc2l6ZXMud2lkdGhcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50LCB0aGlzLnNjcm9sbC5jdXJyZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuc3RhcnQgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5zdGFydCAtIGRpc3RhbmNlXG5cdH1cblxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG5cblx0LyogVXBkYXRlICovXG5cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMuZGlyZWN0aW9uID0gJ3JpZ2h0J1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA+IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJyBsZWZ0Jykge1xuXHRcdFx0XHRjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54ICsgc2NhbGVYXG5cblx0XHRcdFx0aWYgKHggPCAtdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSArPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXG5cdFx0XHRcdGlmICh4ID4gdGhpcy5zaXplcy53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRtZWRpYS5leHRyYSAtPSB0aGlzLndpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bWVkaWEudXBkYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQpXG5cblx0XHRcdC8vIG1lZGlhLm1lc2gucG9zaXRpb24ueSA9IE1hdGguY29zKChtZWRpYS5tZXNoLnBvc2l0aW9uLnggLyB0aGlzLndpZHRoKSAqIE1hdGguUEkgKiA3NSAtIDc1KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBEZXN0cm95ICovXG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEFuaW1hdGlvbnMgKi9cblxuXHRzaG93KCkge1xuXHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0dGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSxcblx0XHRcdHtcblx0XHRcdFx0dmFsdWU6IDAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMSxcblx0XHRcdH1cblx0XHQpXG5cdH1cblx0aGlkZSgpIHtcblx0XHRHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcblx0XHRcdHZhbHVlOiAwLFxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuXHRcdHRoaXMuZXh0cmEgPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYVxuXHR9XG5cdHVwZGF0ZVkoeSA9IDApIHtcblx0XHR0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi55ID1cblx0XHRcdHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtIHRoaXMubWVzaC5zY2FsZS55IC8gMiAtIHRoaXMueSAqIHRoaXMuc2l6ZXMuaGVpZ2h0XG5cdH1cblxuXHR1cGRhdGUoc2Nyb2xsKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsKVxuXHRcdHRoaXMudXBkYXRlWSgwKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZWM2OWNiYWJhMzdlZGIxM2ZjNlwiKSJdLCJuYW1lcyI6WyJHYWxsZXJ5IiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJpbmRleCIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJlbGVtZW50V3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJncm91cCIsIlRyYW5zZm9ybSIsInNjcm9sbCIsImN1cnJlbnQiLCJzdGFydCIsInRhcmdldCIsImxlcnAiLCJjcmVhdGVNZWRpYXMiLCJvblJlc2l6ZSIsInNldFBhcmVudCIsIm1lZGlhc0VsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwic2hvdyIsIm1lZGlhIiwiaGlkZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImRlc3Ryb3kiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInVBbHBoYSIsInZhbHVlIiwidE1hcCIsIk1lc2giLCJjcmVhdGVCb3VuZHMiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsZWZ0IiwidG9wIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9