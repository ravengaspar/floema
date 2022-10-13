/*! For license information please see main.6aff2b841c7f69e0f002.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/ogl/src/core/Texture.js"),h=s("./node_modules/ogl/src/core/Program.js"),a=s("./node_modules/ogl/src/core/Mesh.js"),r=s("./app/shaders/plane-fragment.glsl"),n=s("./app/shaders/plane-vertex.glsl");const o=class{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.elementWrapper=e.querySelectorAll(".about__gallery__wrapper"),this.geometry=t,this.gl=s,this.scene=h,this.index=i,this.sizes=a,this.createTexture(),this.createProgram(),this.createMesh(),this.extra={x:0,y:0}}createTexture(){this.texture=new i.Texture(this.gl);const e=this.element.querySelector("img");this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=e.getAttribute("data-src"),this.image.onload=e=>this.texture.image=this.image}createProgram(){this.program=new h.Program(this.gl,{fragment:r.default,vertex:n.default,uniforms:{tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.elementWrapper.getBoundingClientRect(),this.updateScale(e),this.updateX(),this.updateY()}onResize(e,t){this.extra=0,this.createBounds(e),this.updateX(t),this.updateY(0)}updateScale(){this.width=this.bounds.width/window.innerWidth,this.height=this.bounds.height/window.innerHeight,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height}update(e){this.bounds&&(this.updateX(e),this.updateY(0))}}}},(function(e){e.h=()=>"7ac3ededcf4e22c9aa83"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YWZmMmI4NDFjN2Y2OWUwZjAwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d1dBTUEsY0FDQ0EsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLEVBQVgsR0FBcUJDLEVBQXJCLE1BQXlCQyxFQUF6QixNQUFnQ0MsRUFBaEMsTUFBdUNDLElBQ2xEQyxLQUFLTixRQUFVQSxFQUNmTSxLQUFLQyxlQUFpQlAsRUFBUVEsaUJBQWlCLDRCQUMvQ0YsS0FBS0wsU0FBV0EsRUFDaEJLLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtILE1BQVFBLEVBQ2JHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGdCQUNMSCxLQUFLSSxnQkFDTEosS0FBS0ssYUFFTEwsS0FBS00sTUFBUSxDQUNaQyxFQUFHLEVBQ0hDLEVBQUcsRUFFSixDQUVETCxnQkFDQ0gsS0FBS1MsUUFBVSxJQUFJQyxFQUFBQSxRQUFRVixLQUFLSixJQUVoQyxNQUFNZSxFQUFRWCxLQUFLTixRQUFRa0IsY0FBYyxPQUV6Q1osS0FBS1csTUFBUSxJQUFJRSxPQUFPQyxNQUN4QmQsS0FBS1csTUFBTUksWUFBYyxZQUN6QmYsS0FBS1csTUFBTUssSUFBTUwsRUFBTU0sYUFBYSxZQUNwQ2pCLEtBQUtXLE1BQU1PLE9BQVNDLEdBQU1uQixLQUFLUyxRQUFRRSxNQUFRWCxLQUFLVyxLQUNwRCxDQUVEUCxnQkFDQ0osS0FBS29CLFFBQVUsSUFBSUMsRUFBQUEsUUFBUXJCLEtBQUtKLEdBQUksQ0FDbkMwQixTQURtQyxVQUVuQ0MsT0FGbUMsVUFHbkNDLFNBQVUsQ0FDVEMsS0FBTSxDQUFFQyxNQUFPMUIsS0FBS1MsV0FHdEIsQ0FFREosYUFDQ0wsS0FBSzJCLEtBQU8sSUFBSUMsRUFBQUEsS0FBSzVCLEtBQUtKLEdBQUksQ0FDN0JELFNBQVVLLEtBQUtMLFNBQ2Z5QixRQUFTcEIsS0FBS29CLFVBR2ZwQixLQUFLMkIsS0FBS0UsVUFBVTdCLEtBQUtGLE1BQ3pCLENBRURnQyxjQUFhLE1BQUUvQixJQUNkQyxLQUFLRCxNQUFRQSxFQUViQyxLQUFLK0IsT0FBUy9CLEtBQUtDLGVBQWUrQix3QkFFbENoQyxLQUFLaUMsWUFBWWxDLEdBQ2pCQyxLQUFLa0MsVUFDTGxDLEtBQUttQyxTQUNMLENBR0RDLFNBQVNyQyxFQUFPc0MsR0FDZnJDLEtBQUtNLE1BQVEsRUFFYk4sS0FBSzhCLGFBQWEvQixHQUVsQkMsS0FBS2tDLFFBQVFHLEdBQ2JyQyxLQUFLbUMsUUFBUSxFQUNiLENBR0RGLGNBQ0NqQyxLQUFLc0MsTUFBUXRDLEtBQUsrQixPQUFPTyxNQUFRekIsT0FBTzBCLFdBQ3hDdkMsS0FBS3dDLE9BQVN4QyxLQUFLK0IsT0FBT1MsT0FBUzNCLE9BQU80QixZQUUxQ3pDLEtBQUsyQixLQUFLZSxNQUFNbkMsRUFBSVAsS0FBS0QsTUFBTXVDLE1BQVF0QyxLQUFLc0MsTUFDNUN0QyxLQUFLMkIsS0FBS2UsTUFBTWxDLEVBQUlSLEtBQUtELE1BQU15QyxPQUFTeEMsS0FBS3dDLE1BQzdDLENBQ0ROLFFBQVEzQixFQUFJLEdBQ1hQLEtBQUtPLEdBQUtQLEtBQUsrQixPQUFPWSxLQUFPcEMsR0FBS00sT0FBTzBCLFdBRXpDdkMsS0FBSzJCLEtBQUtpQixTQUFTckMsR0FDakJQLEtBQUtELE1BQU11QyxNQUFRLEVBQUl0QyxLQUFLMkIsS0FBS2UsTUFBTW5DLEVBQUksRUFBSVAsS0FBS08sRUFBSVAsS0FBS0QsTUFBTXVDLE1BQVF0QyxLQUFLTSxLQUNsRixDQUNENkIsUUFBUTNCLEVBQUksR0FDWFIsS0FBS1EsR0FBS1IsS0FBSytCLE9BQU9jLElBQU1yQyxHQUFLSyxPQUFPNEIsWUFFeEN6QyxLQUFLMkIsS0FBS2lCLFNBQVNwQyxFQUNsQlIsS0FBS0QsTUFBTXlDLE9BQVMsRUFBSXhDLEtBQUsyQixLQUFLZSxNQUFNbEMsRUFBSSxFQUFJUixLQUFLUSxFQUFJUixLQUFLRCxNQUFNeUMsTUFDckUsQ0FFRE0sT0FBT1QsR0FDRHJDLEtBQUsrQixTQUVWL0IsS0FBS2tDLFFBQVFHLEdBQ2JyQyxLQUFLbUMsUUFBUSxHQUNiLGtCQ3RHRlksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0Fib3V0L01lZGlhLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0dXJlLCBQcm9ncmFtLCBNZXNoIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcblxuaW1wb3J0IGZyYWdtZW50IGZyb20gJ3NoYWRlcnMvcGxhbmUtZnJhZ21lbnQuZ2xzbCdcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZWxlbWVudFxuXHRcdHRoaXMuZWxlbWVudFdyYXBwZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hYm91dF9fZ2FsbGVyeV9fd3JhcHBlcicpXG5cdFx0dGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5XG5cdFx0dGhpcy5nbCA9IGdsXG5cdFx0dGhpcy5zY2VuZSA9IHNjZW5lXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4XG5cdFx0dGhpcy5zaXplcyA9IHNpemVzXG5cblx0XHR0aGlzLmNyZWF0ZVRleHR1cmUoKVxuXHRcdHRoaXMuY3JlYXRlUHJvZ3JhbSgpXG5cdFx0dGhpcy5jcmVhdGVNZXNoKClcblxuXHRcdHRoaXMuZXh0cmEgPSB7XG5cdFx0XHR4OiAwLFxuXHRcdFx0eTogMCxcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVUZXh0dXJlKCkge1xuXHRcdHRoaXMudGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuZ2wpXG5cblx0XHRjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKVxuXG5cdFx0dGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuXHRcdHRoaXMuaW1hZ2UuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdHRoaXMuaW1hZ2Uuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXG5cdFx0dGhpcy5pbWFnZS5vbmxvYWQgPSBfID0+ICh0aGlzLnRleHR1cmUuaW1hZ2UgPSB0aGlzLmltYWdlKVxuXHR9XG5cblx0Y3JlYXRlUHJvZ3JhbSgpIHtcblx0XHR0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG5cdFx0XHRmcmFnbWVudCxcblx0XHRcdHZlcnRleCxcblx0XHRcdHVuaWZvcm1zOiB7XG5cdFx0XHRcdHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuXHRcdFx0fSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG5cdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdHByb2dyYW06IHRoaXMucHJvZ3JhbSxcblx0XHR9KVxuXG5cdFx0dGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnRXcmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cblx0XHR0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKVxuXHRcdHRoaXMudXBkYXRlWCgpXG5cdFx0dGhpcy51cGRhdGVZKClcblx0fVxuXG5cdC8qIEV2ZW50cyAqL1xuXHRvblJlc2l6ZShzaXplcywgc2Nyb2xsKSB7XG5cdFx0dGhpcy5leHRyYSA9IDBcblxuXHRcdHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKVxuXG5cdFx0dGhpcy51cGRhdGVYKHNjcm9sbClcblx0XHR0aGlzLnVwZGF0ZVkoMClcblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlU2NhbGUoKSB7XG5cdFx0dGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGhcblx0XHR0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnNjYWxlLnggPSB0aGlzLnNpemVzLndpZHRoICogdGhpcy53aWR0aFxuXHRcdHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodFxuXHR9XG5cdHVwZGF0ZVgoeCA9IDApIHtcblx0XHR0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGhcblxuXHRcdHRoaXMubWVzaC5wb3NpdGlvbi54ID1cblx0XHRcdC10aGlzLnNpemVzLndpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggKyB0aGlzLmV4dHJhXG5cdH1cblx0dXBkYXRlWSh5ID0gMCkge1xuXHRcdHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0dGhpcy5tZXNoLnBvc2l0aW9uLnkgPVxuXHRcdFx0dGhpcy5zaXplcy5oZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHRcblx0fVxuXG5cdHVwZGF0ZShzY3JvbGwpIHtcblx0XHRpZiAoIXRoaXMuYm91bmRzKSByZXR1cm5cblxuXHRcdHRoaXMudXBkYXRlWChzY3JvbGwpXG5cdFx0dGhpcy51cGRhdGVZKDApXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdhYzNlZGVkY2Y0ZTIyYzlhYTgzXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiZ2wiLCJpbmRleCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZWxlbWVudFdyYXBwZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiZXh0cmEiLCJ4IiwieSIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsImdldEF0dHJpYnV0ZSIsIm9ubG9hZCIsIl8iLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ0TWFwIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNyZWF0ZUJvdW5kcyIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVwZGF0ZVNjYWxlIiwidXBkYXRlWCIsInVwZGF0ZVkiLCJvblJlc2l6ZSIsInNjcm9sbCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0Iiwic2NhbGUiLCJsZWZ0IiwicG9zaXRpb24iLCJ0b3AiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=