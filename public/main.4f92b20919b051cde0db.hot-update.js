/*! For license information please see main.4f92b20919b051cde0db.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s("./node_modules/normalize-wheel/index.js"),o=(s("./app/animations/Title.js"),s("./node_modules/console-browserify/index.js"));class a{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:"[data-animation="},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=r(e);this.scroll.target+=t,o.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"c94a561dec7114dd5678"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZjkyYjIwOTE5YjA1MWNkZTBkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVhBT2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixFQUFVSyxpQkFBa0Isb0JBQ3pESCxLQUFLRCxHQUFLQSxFQUVWQyxLQUFLSSxrQkFBb0JKLEtBQUtLLGFBQWFDLEtBQUtOLE1BQ2hEQSxLQUFLTyxnQkFBa0JDLEVBQU8sWUFDL0IsQ0FFREMsU0FDRVQsS0FBS0gsUUFBVWEsU0FBU0MsY0FBY1gsS0FBS0MsVUFDM0NELEtBQUtGLFNBQVcsQ0FBQyxFQUVqQkUsS0FBS1ksT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxNQUFPLEdBR1RDLEVBQUtqQixLQUFLRSxrQkFBa0IsQ0FBQ2dCLEVBQU9DLEtBRWhDRCxhQUFpQkUsT0FBT0MsYUFDeEJILGFBQWlCRSxPQUFPRSxVQUN4QkMsTUFBTUMsUUFBUU4sR0FFZGxCLEtBQUtGLFNBQVNxQixHQUFPRCxHQUVyQmxCLEtBQUtGLFNBQVNxQixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJsQixLQUFLRixTQUFTcUIsR0FBS08sT0FDckIxQixLQUFLRixTQUFTcUIsR0FBTyxLQUNrQixJQUE5Qm5CLEtBQUtGLFNBQVNxQixHQUFLTyxTQUM1QjFCLEtBQUtGLFNBQVNxQixHQUFPVCxTQUFTQyxjQUFjTyxJQUUvQyxHQUVKLENBRURTLE9BQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQjdCLEtBQUs4QixZQUFjQyxFQUFBQSxRQUFBQSxXQUNuQkEsRUFBQUEsUUFBQUEsT0FDRS9CLEtBQUtILFFBQ0wsQ0FDRW1DLFVBQVcsR0FFYixDQUNFQSxVQUFXLElBSWZoQyxLQUFLOEIsWUFBWUcsTUFBTUMsSUFDZmxDLEtBQUttQyxvQkFDWE4sR0FBUyxHQUZYLEdBS0gsQ0FFRE8sT0FDRSxPQUFPLElBQUlSLFNBQVNDLElBQ2xCUSw2QkFDQXJDLEtBQUtzQyxhQUFlUCxFQUFBQSxRQUFBQSxXQUVwQkEsRUFBQUEsUUFBQUEsR0FBUS9CLEtBQUtILFFBQVMsQ0FDcEJtQyxVQUFXLEVBQ1hPLFdBQVlWLEdBRmQsR0FLSCxDQUVEeEIsYUFBYW1DLEdBQ1gsTUFBTSxPQUFFQyxHQUFXQyxFQUFlRixHQUNsQ3hDLEtBQUtZLE9BQU9FLFFBQVUyQixFQUN0QkUsRUFBUUMsSUFBSUgsRUFDYixDQUVESSxXQUNNN0MsS0FBS0YsU0FBU2dELFVBQ2hCOUMsS0FBS1ksT0FBT0ksTUFDVmhCLEtBQUtGLFNBQVNnRCxRQUFRQyxhQUFlM0IsT0FBTzRCLFlBQ2pELENBSURDLFNBQ0VqRCxLQUFLWSxPQUFPRSxPQUFTaUIsRUFBQUEsUUFBQUEsTUFBQUEsTUFDbkIsRUFDQS9CLEtBQUtZLE9BQU9JLE1BQ1poQixLQUFLWSxPQUFPRSxRQUdkZCxLQUFLWSxPQUFPQyxRQUFVa0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFDcEIvQixLQUFLWSxPQUFPQyxRQUNaYixLQUFLWSxPQUFPRSxPQUNaLElBR0VkLEtBQUtZLE9BQU9DLFFBQVUsTUFDeEJiLEtBQUtZLE9BQU9DLFFBQVUsR0FHcEJiLEtBQUtGLFNBQVNnRCxVQUNoQjlDLEtBQUtGLFNBQVNnRCxRQUFRSSxNQUNwQmxELEtBQUtPLGlCQUNGLGVBQWNQLEtBQUtZLE9BQU9DLGFBQ2xDLENBR0RzQixvQkFDRWYsT0FBTytCLGlCQUFpQixhQUFjbkQsS0FBS0ksa0JBQzVDLENBRURnRCx1QkFDRUMsNEJBQTRCLGFBQWNyRCxLQUFLSSxrQkFDaEQsa0JDM0hIa0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xuXG5pbXBvcnQgVGl0bGUgZnJvbSBcImFuaW1hdGlvbnMvVGl0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzLCBhbmltYXRpb25zVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPScgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMCxcbiAgICB9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoZW50cnkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcbiAgICAgIEdTQVAuZnJvbVRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLCB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXNOYU5weG92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7IHBpeGVsWSB9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XG4gICAgY29uc29sZS5sb2cocGl4ZWxZKTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9XG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuICAvKiBMb29wICovXG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoXG4gICAgICAwLFxuICAgICAgdGhpcy5zY3JvbGwubGltaXQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcbiAgICApO1xuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgMC4xXG4gICAgKTtcblxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1QcmVmaXhcbiAgICAgIF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWA7XG4gIH1cblxuICAvKiBMaXN0ZW5lcnMgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93TmFOcHhvdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzk0YTU2MWRlYzcxMTRkZDU2NzhcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc1RpdGxlcyIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwidGhpc05hTnB4b3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsImNvbnNvbGUiLCJsb2ciLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwid2luZG93TmFOcHhvdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9