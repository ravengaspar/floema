/*! For license information please see main.2f25d3399ae5029cba5a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.bounds&&(this.updateX(e.x),this.updateY(e.y))}onResize(e){this.createBounds(e)}}}},(function(e){e.h=()=>"a81fb3fa77c8d0a9ee0a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y29tcG9uZW50cy9DYW52YXMvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHR1cmUsIFByb2dyYW0sIE1lc2ggfSBmcm9tICdvZ2wnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJ1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZ2VvbWV0cnksIGdsLCBpbmRleCwgc2NlbmUsIHNpemVzIH0pIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50XG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHR0aGlzLmltYWdlID0gbmV3IHdpbmRvdy5JbWFnZSgpXG5cdFx0dGhpcy5pbWFnZS5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnXG5cdFx0dGhpcy5pbWFnZS5zcmMgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblxuXHRcdHRoaXMudXBkYXRlU2NhbGUoc2l6ZXMpXG5cdFx0dGhpcy51cGRhdGVYKClcblx0XHR0aGlzLnVwZGF0ZVkoKVxuXHR9XG5cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhLnhcblx0fVxuXHR1cGRhdGVZKHkgPSAwKSB7XG5cdFx0dGhpcy55ID0gKHRoaXMuYm91bmRzLnRvcCArIHkpIC8gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHR0aGlzLm1lc2gucG9zaXRpb24ueSA9XG5cdFx0XHR0aGlzLnNpemVzLmhlaWdodCAvIDIgLSB0aGlzLm1lc2guc2NhbGUueSAvIDIgLSB0aGlzLnkgKiB0aGlzLnNpemVzLmhlaWdodCArIHRoaXMuZXh0cmEueVxuXHR9XG5cblx0dXBkYXRlKHNjcm9sbCkge1xuXHRcdGlmICghdGhpcy5ib3VuZHMpIHJldHVyblxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbC54KVxuXHRcdHRoaXMudXBkYXRlWShzY3JvbGwueSlcblx0fVxuXG5cdG9uUmVzaXplKHNpemVzKSB7XG5cdFx0dGhpcy5jcmVhdGVCb3VuZHMoc2l6ZXMpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE4MWZiM2ZhNzdjOGQwYTllZTBhXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwiXyIsInByb2dyYW0iLCJQcm9ncmFtIiwiZnJhZ21lbnQiLCJ2ZXJ0ZXgiLCJ1bmlmb3JtcyIsInRNYXAiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50IiwiY3JlYXRlQm91bmRzIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJzY3JvbGwiLCJvblJlc2l6ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==