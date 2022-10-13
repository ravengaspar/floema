/*! For license information please see main.5f3b3fcc87592f6deddd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/gsap/index.js"),h=s("./node_modules/lodash/map.js"),r=s("./app/components/Canvas/About/Media.js");class o{constructor({element:e,geometry:t,index:s,gl:i,scene:h,sizes:r}){this.element=e,this.geometry=t,this.index=s,this.gl=i,this.scene=h,this.sizes=r,this.scroll={current:0,target:0,last:0,lepr:.1},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=h(this.mediasElements,((e,t)=>new r.default({element:e,geometry:this.geometry,index:t,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(e){this.bounds=this.element.getBoundingClientRect(),this.sizes=e.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll=0,h(this.medias,(t=>t.onResize(e,this.scroll)))}onTouchDown({x:e,y:t}){this.scroll.current=this.scroll}onTouchMove({x:e,y:t}){const s=e.start-e.end;this.scroll.target=this.scroll.current-s}onTouchUp({x:e,y:t}){}update(){this.bounds&&(this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.current<this.scroll.target?this.x.direction="right":this.scroll.current>this.scroll.target&&(this.x.direction="left"),h(this.medias,((e,t)=>{const s=e.mesh.scale.x/2;if(" left"===this.x.direction){e.mesh.position.x+s<-this.sizes.width/2&&(e.extra.x+=this.gallerySizes.width,e.mesh.rotation.z=i.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.x.direction){e.mesh.position.x;this.sizes.width}})))}}},"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),r=s("./node_modules/ogl/src/core/Mesh.js"),o=s("./node_modules/gsap/index.js"),n=s("./app/shaders/plane-fragment.glsl"),a=s("./app/shaders/plane-vertex.glsl");const l=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:r}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=r,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:n.default,vertex:a.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new r.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.rotation.z=o.default.utils.random(.03*-Math.PI,.03*Math.PI)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}onResize(e,t){this.createBounds(e),this.extra={x:0,y:0},this.updateX(t?t.x:0),this.updateY(t?t.y:0)}}}},(function(e){e.h=()=>"cc7ae9a704c01887d5bd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L0dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBpbmRleCwgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGFzdDogMCxcblx0XHRcdGxlcHI6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLmNyZWF0ZU1lZGlhcygpXG5cdH1cblxuXHRjcmVhdGVNZWRpYXMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fbWVkaWEnKVxuXG5cdFx0dGhpcy5tZWRpYSA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5zY2VuZSxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMud2lkdGggPSAodGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiB0aGlzLnNpemVzLndpZHRoXG5cblx0XHR0aGlzLnNjcm9sbCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsXG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG5cdFx0XHR0aGlzLnNjcm9sbC50YXJnZXQsXG5cdFx0XHR0aGlzLnNjcm9sbC5sZXJwXG5cdFx0KVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCB0aGlzLnNjcm9sbC50YXJnZXQpIHtcblx0XHRcdHRoaXMueC5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLnguZGlyZWN0aW9uID0gJ2xlZnQnXG5cdFx0fVxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zdCBzY2FsZVggPSBtZWRpYS5tZXNoLnNjYWxlLnggLyAyXG5cblx0XHRcdGlmICh0aGlzLnguZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy54LmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCB4ID0gbWVkaWEubWVzaC5wb3NpdGlvbi54IC0gc2NhbGVYXG4gICAgICAgIGlmKHggPiB0aGlzLnNpemVzLndpZHRoIC8gMil7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cblx0XHR9KVxuXHR9XG59XG4iLCJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZ2VvbWV0cnkgPSBnZW9tZXRyeVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2NlbmUgPSBzY2VuZVxuXHRcdHRoaXMuaW5kZXggPSBpbmRleFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5jcmVhdGVUZXh0dXJlKClcblx0XHR0aGlzLmNyZWF0ZVByb2dyYW0oKVxuXHRcdHRoaXMuY3JlYXRlTWVzaCgpXG5cblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlVGV4dHVyZSgpIHtcblx0XHR0aGlzLnRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmdsKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKVxuXHRcdHRoaXMuaW1hZ2Uub25sb2FkID0gXyA9PiAodGhpcy50ZXh0dXJlLmltYWdlID0gdGhpcy5pbWFnZSlcblx0fVxuXG5cdGNyZWF0ZVByb2dyYW0oKSB7XG5cdFx0dGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuXHRcdFx0ZnJhZ21lbnQsXG5cdFx0XHR2ZXJ0ZXgsXG5cdFx0XHR1bmlmb3Jtczoge1xuXHRcdFx0XHR0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcblx0XHRcdH0sXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuXHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG5cdFx0fSlcblxuXHRcdHRoaXMubWVzaC5zZXRQYXJlbnQodGhpcy5zY2VuZSlcblxuXHRcdHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0fVxuXG5cdGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdHVwZGF0ZVNjYWxlKCkge1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoXG5cdFx0dGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGhcblx0XHR0aGlzLm1lc2guc2NhbGUueSA9IHRoaXMuc2l6ZXMuaGVpZ2h0ICogdGhpcy5oZWlnaHRcblx0fVxuXHR1cGRhdGVYKHggPSAwKSB7XG5cdFx0dGhpcy54ID0gKHRoaXMuYm91bmRzLmxlZnQgKyB4KSAvIHdpbmRvdy5pbm5lcldpZHRoXG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueCA9XG5cdFx0XHQtdGhpcy5zaXplcy53aWR0aCAvIDIgKyB0aGlzLm1lc2guc2NhbGUueCAvIDIgKyB0aGlzLnggKiB0aGlzLnNpemVzLndpZHRoICsgdGhpcy5leHRyYS54XG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwueClcblx0XHR0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpXG5cdH1cblxuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdFx0dGhpcy5leHRyYSA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdH1cblx0XHR0aGlzLnVwZGF0ZVgoc2Nyb2xsID8gc2Nyb2xsLnggOiAwKVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwgPyBzY3JvbGwueSA6IDApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNjN2FlOWE3MDRjMDE4ODdkNWJkXCIpIl0sIm5hbWVzIjpbIkdhbGxlcnkiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImluZGV4IiwiZ2wiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGVwciIsImNyZWF0ZU1lZGlhcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZWRpYSIsIm1hcCIsIm1lZGlhc0VsZW1lbnRzIiwiTWVkaWEiLCJvblJlc2l6ZSIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwibWVkaWFzIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJzdGFydCIsImVuZCIsIm9uVG91Y2hVcCIsInVwZGF0ZSIsIkdTQVAiLCJsZXJwIiwiZGlyZWN0aW9uIiwic2NhbGVYIiwibWVzaCIsInNjYWxlIiwicG9zaXRpb24iLCJleHRyYSIsImdhbGxlcnlTaXplcyIsInJvdGF0aW9uIiwieiIsIk1hdGgiLCJQSSIsImNyZWF0ZVRleHR1cmUiLCJjcmVhdGVQcm9ncmFtIiwiY3JlYXRlTWVzaCIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIk1lc2giLCJzZXRQYXJlbnQiLCJjcmVhdGVCb3VuZHMiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsZWZ0IiwidG9wIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9