/*! For license information please see main.a9634108a015eeeb288c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/About/Gallery.js":(t,s,e)=>{e.r(s),e.d(s,{default:()=>h});var i=e("./node_modules/ogl/src/core/Transform.js"),r=e("./node_modules/gsap/index.js"),l=e("./node_modules/lodash/map.js"),o=e("./app/components/Canvas/About/Media.js");class h{constructor({element:t,geometry:s,index:e,gl:r,scene:l,sizes:o}){this.element=t,this.geometry=s,this.index=e,this.gl=r,this.scene=l,this.sizes=o,this.group=new i.Transform,this.scroll={current:0,target:0,last:0,lepr:.1},this.createMedias()}createMedias(){this.element.querySelectorAll(".about__gallery__media"),this.media=l(this.mediasElements,((t,s)=>new o.default({element:t,geometry:this.geometry,index:s,gl:this.gl,scene:this.scene,sizes:this.sizes})))}onResize(t){this.bounds=this.element.getBoundingClientRect(),this.sizes=t.sizes,this.width=this.bounds.width/window.innerWidth*this.sizes.width,this.scroll.current=this.scroll.target=0,l(this.medias,(s=>s.onResize(t,this.scroll)))}onTouchDown({x:t,y:s}){this.scroll.current=this.scroll}onTouchMove({x:t,y:s}){const e=t.start-t.end;this.scroll.target=this.scroll.current-e}onTouchUp({x:t,y:s}){}update(){this.bounds&&(this.scroll.current<this.scroll.target?this.direction="right":this.scroll.current>this.scroll.target&&(this.direction="left"),this.scroll.current=r.default.utils.interpolate(this.scroll.current,this.scroll.target,this.scroll.lerp),l(this.medias,((t,s)=>{const e=t.mesh.scale.x/2;if(" left"===this.direction){t.mesh.position.x+e<-this.sizes.width/2&&(t.extra.x+=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}else if("right"===this.direction){t.mesh.position.x-e>this.sizes.width/2&&(t.extra.x-=this.gallerySizes.width,t.mesh.rotation.z=r.default.utils.random(.03*-Math.PI,.03*Math.PI))}t.update(this.scroll)})))}}}},(function(t){t.h=()=>"8a1faf0cfe14c37769cb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hOTYzNDEwOGEwMTVlZWViMjg4Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eVRBUWUsTUFBTUEsRUFDcEJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLE1BQXFCQyxFQUFyQixHQUE0QkMsRUFBNUIsTUFBZ0NDLEVBQWhDLE1BQXVDQyxJQUNsREMsS0FBS04sUUFBVUEsRUFDZk0sS0FBS0wsU0FBV0EsRUFDaEJLLEtBQUtKLE1BQVFBLEVBQ2JJLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtGLE1BQVFBLEVBQ2JFLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFFakJGLEtBQUtHLE9BQVMsQ0FDYkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsS0FBTSxJQUdQUCxLQUFLUSxjQUNMLENBRURBLGVBQ0NSLEtBQUtOLFFBQVFlLGlCQUFpQiwwQkFFOUJULEtBQUtVLE1BQVFDLEVBQUlYLEtBQUtZLGdCQUFnQixDQUFDbEIsRUFBU0UsSUFDeEMsSUFBSWlCLEVBQUFBLFFBQU0sQ0FDaEJuQixVQUNBQyxTQUFVSyxLQUFLTCxTQUNmQyxRQUNBQyxHQUFJRyxLQUFLSCxHQUNUQyxNQUFPRSxLQUFLRixNQUNaQyxNQUFPQyxLQUFLRCxTQUdkLENBSURlLFNBQVNDLEdBQ1JmLEtBQUtnQixPQUFTaEIsS0FBS04sUUFBUXVCLHdCQUUzQmpCLEtBQUtELE1BQVFnQixFQUFNaEIsTUFFbkJDLEtBQUtrQixNQUFTbEIsS0FBS2dCLE9BQU9FLE1BQVFDLE9BQU9DLFdBQWNwQixLQUFLRCxNQUFNbUIsTUFFbEVsQixLQUFLRyxPQUFPQyxRQUFVSixLQUFLRyxPQUFPRSxPQUFTLEVBRTNDTSxFQUFJWCxLQUFLcUIsUUFBUVgsR0FBU0EsRUFBTUksU0FBU0MsRUFBT2YsS0FBS0csU0FDckQsQ0FFRG1CLGFBQVksRUFBRUMsRUFBRixFQUFLQyxJQUNoQnhCLEtBQUtHLE9BQU9DLFFBQVVKLEtBQUtHLE1BQzNCLENBRURzQixhQUFZLEVBQUVGLEVBQUYsRUFBS0MsSUFDaEIsTUFBTUUsRUFBV0gsRUFBRUksTUFBUUosRUFBRUssSUFFN0I1QixLQUFLRyxPQUFPRSxPQUFTTCxLQUFLRyxPQUFPQyxRQUFVc0IsQ0FDM0MsQ0FFREcsV0FBVSxFQUFFTixFQUFGLEVBQUtDLElBQU8sQ0FJdEJNLFNBQ005QixLQUFLZ0IsU0FFTmhCLEtBQUtHLE9BQU9DLFFBQVVKLEtBQUtHLE9BQU9FLE9BQ3JDTCxLQUFLK0IsVUFBWSxRQUNQL0IsS0FBS0csT0FBT0MsUUFBVUosS0FBS0csT0FBT0UsU0FDNUNMLEtBQUsrQixVQUFZLFFBR2xCL0IsS0FBS0csT0FBT0MsUUFBVTRCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3JCaEMsS0FBS0csT0FBT0MsUUFDWkosS0FBS0csT0FBT0UsT0FDWkwsS0FBS0csT0FBTzhCLE1BR2J0QixFQUFJWCxLQUFLcUIsUUFBUSxDQUFDWCxFQUFPZCxLQUN4QixNQUFNc0MsRUFBU3hCLEVBQU15QixLQUFLQyxNQUFNYixFQUFJLEVBRXBDLEdBQXVCLFVBQW5CdkIsS0FBSytCLFVBQXVCLENBQ3JCckIsRUFBTXlCLEtBQUtFLFNBQVNkLEVBQUlXLEdBRXpCbEMsS0FBS0QsTUFBTW1CLE1BQVEsSUFDM0JSLEVBQU00QixNQUFNZixHQUFLdkIsS0FBS3VDLGFBQWFyQixNQUVuQ1IsRUFBTXlCLEtBQUtLLFNBQVNDLEVBQUlULEVBQUFBLFFBQUFBLE1BQUFBLE9BQTZCLEtBQVZVLEtBQUtDLEdBQXFCLElBQVZELEtBQUtDLElBRWpFLE1BQU0sR0FBdUIsVUFBbkIzQyxLQUFLK0IsVUFBdUIsQ0FDNUJyQixFQUFNeUIsS0FBS0UsU0FBU2QsRUFBSVcsRUFDMUJsQyxLQUFLRCxNQUFNbUIsTUFBUSxJQUMxQlIsRUFBTTRCLE1BQU1mLEdBQUt2QixLQUFLdUMsYUFBYXJCLE1BRW5DUixFQUFNeUIsS0FBS0ssU0FBU0MsRUFBSVQsRUFBQUEsUUFBQUEsTUFBQUEsT0FBNkIsS0FBVlUsS0FBS0MsR0FBcUIsSUFBVkQsS0FBS0MsSUFFakUsQ0FFRGpDLEVBQU1vQixPQUFPOUIsS0FBS0csT0FBbEIsSUFFRCxrQkM3R0Z5QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvQWJvdXQvR2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgaW5kZXgsIGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGVsZW1lbnRcblx0XHR0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnlcblx0XHR0aGlzLmluZGV4ID0gaW5kZXhcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNjZW5lID0gc2NlbmVcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxhc3Q6IDAsXG5cdFx0XHRsZXByOiAwLjEsXG5cdFx0fVxuXG5cdFx0dGhpcy5jcmVhdGVNZWRpYXMoKVxuXHR9XG5cblx0Y3JlYXRlTWVkaWFzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfX2dhbGxlcnlfX21lZGlhJylcblxuXHRcdHRoaXMubWVkaWEgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuc2NlbmUsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0LyogRXZlbnRzICovXG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHR0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXG5cdFx0dGhpcy5zaXplcyA9IGV2ZW50LnNpemVzXG5cblx0XHR0aGlzLndpZHRoID0gKHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGgpICogdGhpcy5zaXplcy53aWR0aFxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsLnRhcmdldCA9IDBcblxuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQsIHRoaXMuc2Nyb2xsKSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7XG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IHRoaXMuc2Nyb2xsXG5cdH1cblxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge1xuXHRcdGNvbnN0IGRpc3RhbmNlID0geC5zdGFydCAtIHguZW5kXG5cblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSB0aGlzLnNjcm9sbC5jdXJyZW50IC0gZGlzdGFuY2Vcblx0fVxuXG5cdG9uVG91Y2hVcCh7IHgsIHkgfSkge31cblxuXHQvKiBVcGRhdGUgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKCF0aGlzLmJvdW5kcykgcmV0dXJuXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IHRoaXMuc2Nyb2xsLnRhcmdldCkge1xuXHRcdFx0dGhpcy5kaXJlY3Rpb24gPSAncmlnaHQnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50ID4gdGhpcy5zY3JvbGwudGFyZ2V0KSB7XG5cdFx0XHR0aGlzLmRpcmVjdGlvbiA9ICdsZWZ0J1xuXHRcdH1cblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCxcblx0XHRcdHRoaXMuc2Nyb2xsLnRhcmdldCxcblx0XHRcdHRoaXMuc2Nyb2xsLmxlcnBcblx0XHQpXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIChtZWRpYSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IHNjYWxlWCA9IG1lZGlhLm1lc2guc2NhbGUueCAvIDJcblxuXHRcdFx0aWYgKHRoaXMuZGlyZWN0aW9uID09PSAnIGxlZnQnKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBtZWRpYS5tZXNoLnBvc2l0aW9uLnggKyBzY2FsZVhcblxuXHRcdFx0XHRpZiAoeCA8IC10aGlzLnNpemVzLndpZHRoIC8gMikge1xuXHRcdFx0XHRcdG1lZGlhLmV4dHJhLnggKz0gdGhpcy5nYWxsZXJ5U2l6ZXMud2lkdGhcblxuXHRcdFx0XHRcdG1lZGlhLm1lc2gucm90YXRpb24ueiA9IEdTQVAudXRpbHMucmFuZG9tKC1NYXRoLlBJICogMC4wMywgTWF0aC5QSSAqIDAuMDMpXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcblx0XHRcdFx0Y29uc3QgeCA9IG1lZGlhLm1lc2gucG9zaXRpb24ueCAtIHNjYWxlWFxuXHRcdFx0XHRpZiAoeCA+IHRoaXMuc2l6ZXMud2lkdGggLyAyKSB7XG5cdFx0XHRcdFx0bWVkaWEuZXh0cmEueCAtPSB0aGlzLmdhbGxlcnlTaXplcy53aWR0aFxuXG5cdFx0XHRcdFx0bWVkaWEubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMylcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRtZWRpYS51cGRhdGUodGhpcy5zY3JvbGwpXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGExZmFmMGNmZTE0YzM3NzY5Y2JcIikiXSwibmFtZXMiOlsiR2FsbGVyeSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImdlb21ldHJ5IiwiaW5kZXgiLCJnbCIsInNjZW5lIiwic2l6ZXMiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxlcHIiLCJjcmVhdGVNZWRpYXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVkaWEiLCJtYXAiLCJtZWRpYXNFbGVtZW50cyIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsImJvdW5kcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1lZGlhcyIsIm9uVG91Y2hEb3duIiwieCIsInkiLCJvblRvdWNoTW92ZSIsImRpc3RhbmNlIiwic3RhcnQiLCJlbmQiLCJvblRvdWNoVXAiLCJ1cGRhdGUiLCJkaXJlY3Rpb24iLCJHU0FQIiwibGVycCIsInNjYWxlWCIsIm1lc2giLCJzY2FsZSIsInBvc2l0aW9uIiwiZXh0cmEiLCJnYWxsZXJ5U2l6ZXMiLCJyb3RhdGlvbiIsInoiLCJNYXRoIiwiUEkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=