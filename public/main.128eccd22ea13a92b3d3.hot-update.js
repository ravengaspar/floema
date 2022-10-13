/*! For license information please see main.128eccd22ea13a92b3d3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/lodash/each.js"),l=s("./node_modules/gsap/index.js"),n=s("./node_modules/prefix/index.js"),r=s("./node_modules/console-browserify/index.js");class o{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=n("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:7100},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=l.default.timeline(),l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}onRezize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),r.log(this.scroll.limit)}update(){this.scroll.target<.01&&(this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target)),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"5698cab46e59929a2632"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMjhlY2NkMjJlYTEzYTkyYjNkMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVNBSWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0csa0JBQW9CSCxLQUFLSSxhQUFhQyxLQUFLTCxNQUNoREEsS0FBS00sZ0JBQWtCQyxFQUFPLFlBQy9CLENBRURDLFNBQ0VSLEtBQUtILFFBQVVZLFNBQVNDLGNBQWNWLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtXLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxNQUdUQyxFQUFLaEIsS0FBS0Usa0JBQWtCLENBQUNlLEVBQU9DLEtBRWhDRCxhQUFpQkUsT0FBT0MsYUFDeEJILGFBQWlCRSxPQUFPRSxVQUN4QkMsTUFBTUMsUUFBUU4sR0FFZGpCLEtBQUtGLFNBQVNvQixHQUFPRCxHQUVyQmpCLEtBQUtGLFNBQVNvQixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJqQixLQUFLRixTQUFTb0IsR0FBS08sT0FDckJ6QixLQUFLRixTQUFTb0IsR0FBTyxLQUNrQixJQUE5QmxCLEtBQUtGLFNBQVNvQixHQUFLTyxTQUM1QnpCLEtBQUtGLFNBQVNvQixHQUFPVCxTQUFTQyxjQUFjTyxJQUUvQyxHQUVKLENBRURTLE9BQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQjVCLEtBQUs2QixZQUFjQyxFQUFBQSxRQUFBQSxXQUNuQkEsRUFBQUEsUUFBQUEsT0FDRTlCLEtBQUtILFFBQ0wsQ0FDRWtDLFVBQVcsR0FFYixDQUNFQSxVQUFXLElBSWYvQixLQUFLNkIsWUFBWUcsTUFBTUMsSUFDZmpDLEtBQUtrQyxvQkFDWE4sR0FBUyxHQUZYLEdBS0gsQ0FFRE8sT0FDRSxPQUFPLElBQUlSLFNBQVNDLElBQ2xCNUIsS0FBS29DLHVCQUNMcEMsS0FBS3FDLGFBQWVQLEVBQUFBLFFBQUFBLFdBRXBCQSxFQUFBQSxRQUFBQSxHQUFROUIsS0FBS0gsUUFBUyxDQUNwQmtDLFVBQVcsRUFDWE8sV0FBWVYsR0FGZCxHQUtILENBRUR4QixhQUFhbUMsR0FDWCxNQUFNLE9BQUVDLEdBQVdELEVBQ25CdkMsS0FBS1csT0FBT0UsUUFBVTJCLENBQ3ZCLENBRURDLFdBQ016QyxLQUFLRixTQUFTNEMsVUFDaEIxQyxLQUFLVyxPQUFPSSxNQUNWZixLQUFLRixTQUFTNEMsUUFBUUMsYUFBZXhCLE9BQU95QixhQUNoREMsRUFBUUMsSUFBSTlDLEtBQUtXLE9BQU9JLE1BQ3pCLENBSURnQyxTQUVLL0MsS0FBS1csT0FBT0UsT0FBUyxNQUV4QmIsS0FBS1csT0FBT0UsT0FBU2lCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQ25CLEVBQ0E5QixLQUFLVyxPQUFPSSxNQUNaZixLQUFLVyxPQUFPRSxTQUdkYixLQUFLVyxPQUFPQyxRQUFVa0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFDcEI5QixLQUFLVyxPQUFPQyxRQUNaWixLQUFLVyxPQUFPRSxPQUNaLElBR0ViLEtBQUtGLFNBQVM0QyxVQUNoQjFDLEtBQUtGLFNBQVM0QyxRQUFRTSxNQUNwQmhELEtBQUtNLGlCQUNGLGVBQWNOLEtBQUtXLE9BQU9DLGFBQ2xDLENBR0RzQixvQkFDRWYsT0FBTzhCLGlCQUFpQixhQUFjakQsS0FBS0csa0JBQzVDLENBRURpQyx1QkFDRWpCLE9BQU8rQixvQkFBb0IsYUFBY2xELEtBQUtHLGtCQUMvQyxrQkN2SEhnRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDcxMDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWTtcbiAgfVxuXG4gIG9uUmV6aXplKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9XG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc29sZS5sb2codGhpcy5zY3JvbGwubGltaXQpO1xuICB9XG5cbiAgLyogTG9vcCAqL1xuXG4gIHVwZGF0ZSgpIHtcblxuICAgIGlmKHRoaXMuc2Nyb2xsLnRhcmdldCA8IDAuMDEpXG5cbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxuICAgICAgXSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYDtcbiAgfVxuXG4gIC8qIExpc3RlbmVycyAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU2OThjYWI0NmU1OTkyOWEyNjMyXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJkZWx0YVkiLCJvblJleml6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9