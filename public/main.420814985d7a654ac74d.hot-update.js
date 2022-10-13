/*! For license information please see main.420814985d7a654ac74d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Collections/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/ogl/src/core/Texture.js"),h=t("./node_modules/ogl/src/core/Program.js"),l=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./node_modules/gsap/index.js"),o=t("./app/shaders/plane-fragment.glsl"),a=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:l}){this.element=e,this.geometry=s,this.gl=t,this.scene=h,this.index=i,this.sizes=l,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector(".collections__gallery__media__image");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:o.default,vertex:a.default,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new l.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}show(){r.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){r.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,s){this.createBounds(e),this.extra={x:0,y:0},this.updateX(s?s.x:0),this.updateY(s?s.y:0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e),this.updateY())}}},"./app/components/Canvas/Collections/index.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/ogl/src/core/Transform.js"),h=t("./node_modules/ogl/src/extras/Plane.js"),l=t("./node_modules/gsap/index.js"),r=t("./node_modules/lodash/map.js"),o=t("./app/components/Canvas/Collections/Media.js"),a=t("./node_modules/console-browserify/index.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.gl=e,this.sizes=t,this.scene=s,this.group=new i.Transform,this.galleryElement=document.querySelector(".collections__gallery__wrapper"),this.mediasElements=document.querySelectorAll(".collections__gallery__media"),this.scroll={current:0,target:0,lerp:.1},this.scroll={current:0,start:0,target:0,lerp:.1,velocity:1},this.createGeometry(),this.createGallery(),this.group.setParent(this.scene),this.show()}createGeometry(){this.geometry=new h.Plane(this.gl)}createGallery(){this.medias=r(this.mediasElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}show(){r(this.medias,(e=>e.show()))}hide(){r(this.medias,(e=>e.hide()))}onResize(e){this.sizes=e.sizes,this.bounds=this.galleryElement.getBoundingClientRect(),this.scroll.last=this.scroll.target=0,r(this.medias,(s=>s.onResize(e,this.scroll))),this.scroll.limit=this.bounds.width-this.medias[0].element.clientWidth}onTouchDown({x:e,y:s}){this.scroll.last=this.scroll.current}onTouchMove({x:e,y:s}){const t=e.start-e.end;this.scroll.target=this.scroll.last-t}onTouchUp({x:e,y:s}){}onWheel({pixelY:e}){this.scroll.target+=e}update(){this.bounds&&(this.scroll.target=l.default.utils.clamp(-this.scroll.limit,0,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),this.scroll.last<this.scroll.current?this.scroll.direction="right":this.scroll.last>this.scroll.current&&(this.scroll.direction="left"),this.scroll.last=this.scroll.current,r(this.medias,((e,s)=>{e.update(this.scroll.current)})),a.log(Math.abs(this.scroll.current/this.scroll.limit)*this.medias.length))}destroy(){this.scene.removeChild(this.group)}}}},(function(e){e.h=()=>"a2dfa639761bdf8c7936"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU82QixLQUFPcEUsS0FBS3VDLE9BQU9nQixRQUNsQ3ZELEtBQUt1QyxPQUFPdUMsVUFBWSxRQUNkOUUsS0FBS3VDLE9BQU82QixLQUFPcEUsS0FBS3VDLE9BQU9nQixVQUN6Q3ZELEtBQUt1QyxPQUFPdUMsVUFBWSxRQUd6QjlFLEtBQUt1QyxPQUFPNkIsS0FBT3BFLEtBQUt1QyxPQUFPZ0IsUUFFL0JTLEVBQUloRSxLQUFLK0QsUUFBUSxDQUFDRyxFQUFPckUsS0FDeEJxRSxFQUFNbEIsT0FBT2hELEtBQUt1QyxPQUFPZ0IsUUFBekIsSUFHRHdCLEVBQVFDLElBQUlDLEtBQUtDLElBQUlsRixLQUFLdUMsT0FBT2dCLFFBQVV2RCxLQUFLdUMsT0FBTzhCLE9BQVNyRSxLQUFLK0QsT0FBT29CLFFBQzVFLENBR0RDLFVBQ0NwRixLQUFLRixNQUFNdUYsWUFBWXJGLEtBQUtpRCxNQUM1QixrQkM1SEZxQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQ29sbGVjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhX19pbWFnZScpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJylcblx0XHR0aGlzLmltYWdlLm9ubG9hZCA9IF8gPT4gKHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2UpXG5cdH1cblxuXHRjcmVhdGVQcm9ncmFtKCkge1xuXHRcdHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcblx0XHRcdGZyYWdtZW50LFxuXHRcdFx0dmVydGV4LFxuXHRcdFx0dW5pZm9ybXM6IHtcblx0XHRcdFx0dUFscGhhOiB7IHZhbHVlOiAwIH0sXG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXG5cdHNob3coKSB7XG5cdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHR0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuXHRcdFx0e1xuXHRcdFx0XHR2YWx1ZTogMCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHZhbHVlOiAxLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXHRoaWRlKCkge1xuXHRcdEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuXHRcdFx0dmFsdWU6IDAsXG5cdFx0fSlcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXG5cdG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcblx0XHR0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcylcblx0XHR0aGlzLmV4dHJhID0ge1xuXHRcdFx0eDogMCxcblx0XHRcdHk6IDAsXG5cdFx0fVxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwgPyBzY3JvbGwueCA6IDApXG5cdFx0dGhpcy51cGRhdGVZKHNjcm9sbCA/IHNjcm9sbC55IDogMClcblx0fVxuXG5cdC8qIExvb3BzICovXG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cblx0dXBkYXRlWCh4ID0gMCkge1xuXHRcdHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0ICsgeCkgLyB3aW5kb3cuaW5uZXJXaWR0aFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnggPVxuXHRcdFx0LXRoaXMuc2l6ZXMud2lkdGggLyAyICsgdGhpcy5tZXNoLnNjYWxlLnggLyAyICsgdGhpcy54ICogdGhpcy5zaXplcy53aWR0aCArIHRoaXMuZXh0cmEueFxuXHR9XG5cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgKyB0aGlzLmV4dHJhLnlcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxufVxuIiwiaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IE1lZGlhIGZyb20gJy4vTWVkaWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IoeyBnbCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuZ2FsbGVyeUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX3dyYXBwZXInKVxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29sbGVjdGlvbnNfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHRzdGFydDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxlcnA6IDAuMSxcblx0XHRcdHZlbG9jaXR5OiAxLFxuXHRcdH1cblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXG5cdFx0dGhpcy5zaG93KClcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogQW5pbWF0aW9ucyAqL1xuXHRzaG93KCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEuc2hvdygpKVxuXHR9XG5cdGhpZGUoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCBtZWRpYSA9PiBtZWRpYS5oaWRlKCkpXG5cdH1cblxuXHQvKiBFdmVudHMgKi9cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLnNpemVzID0gZXZlbnQuc2l6ZXNcblxuXHRcdHRoaXMuYm91bmRzID0gdGhpcy5nYWxsZXJ5RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblxuXHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5ib3VuZHMud2lkdGggLSB0aGlzLm1lZGlhc1swXS5lbGVtZW50LmNsaWVudFdpZHRoXG5cdH1cblxuXHRvblRvdWNoRG93bih7IHgsIHkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50XG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5sYXN0IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBVcGRhdGUgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgtdGhpcy5zY3JvbGwubGltaXQsIDAsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwubGFzdCA8IHRoaXMuc2Nyb2xsLmN1cnJlbnQpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmRpcmVjdGlvbiA9ICdyaWdodCdcblx0XHR9IGVsc2UgaWYgKHRoaXMuc2Nyb2xsLmxhc3QgPiB0aGlzLnNjcm9sbC5jdXJyZW50KSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5kaXJlY3Rpb24gPSAnbGVmdCdcblx0XHR9XG5cblx0XHR0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwuY3VycmVudFxuXG5cdFx0bWFwKHRoaXMubWVkaWFzLCAobWVkaWEsIGluZGV4KSA9PiB7XG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwuY3VycmVudClcblx0XHR9KVxuXG5cdFx0Y29uc29sZS5sb2coTWF0aC5hYnModGhpcy5zY3JvbGwuY3VycmVudCAvIHRoaXMuc2Nyb2xsLmxpbWl0KSAqIHRoaXMubWVkaWFzLmxlbmd0aClcblx0fVxuXG5cdC8qIERlc3Ryb3kgKi9cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnNjZW5lLnJlbW92ZUNoaWxkKHRoaXMuZ3JvdXApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEyZGZhNjM5NzYxYmRmOGM3OTM2XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJzaG93IiwiR1NBUCIsImhpZGUiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJncm91cCIsIlRyYW5zZm9ybSIsImdhbGxlcnlFbGVtZW50IiwiZG9jdW1lbnQiLCJtZWRpYXNFbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGVycCIsInN0YXJ0IiwidmVsb2NpdHkiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsIk1lZGlhIiwibWVkaWEiLCJldmVudCIsImxhc3QiLCJsaW1pdCIsImNsaWVudFdpZHRoIiwib25Ub3VjaERvd24iLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwiZW5kIiwib25Ub3VjaFVwIiwib25XaGVlbCIsInBpeGVsWSIsImRpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJNYXRoIiwiYWJzIiwibGVuZ3RoIiwiZGVzdHJveSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9