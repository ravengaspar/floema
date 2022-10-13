/*! For license information please see main.7effc4a3133b4cf37e2e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s("./node_modules/console-browserify/index.js");class o{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.scroll={current:0,target:0,last:0},this.transformPrefix=l("transform"),r.log(this.transformPrefix)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),i.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),i.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheel)}update(){this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}}}},(function(e){e.h=()=>"cca0b0349c4e5fef6ecd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43ZWZmYzRhMzEzM2I0Y2YzN2UyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVNBSWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0csT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxHQU1STixLQUFLTyxnQkFBa0JDLEVBQU8sYUFDOUJDLEVBQVFDLElBQUlWLEtBQUtPLGdCQUNsQixDQUVESSxTQUNFWCxLQUFLSCxRQUFVZSxTQUFTQyxjQUFjYixLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCRSxLQUFLRyxPQUFTLENBQ1pDLFFBQVMsRUFDVEMsT0FBUSxFQUNSQyxLQUFNLEdBR1JRLEVBQUtkLEtBQUtFLGtCQUFrQixDQUFDYSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRmLEtBQUtGLFNBQVNrQixHQUFPRCxHQUVyQmYsS0FBS0YsU0FBU2tCLEdBQU9KLFNBQVNVLGlCQUFpQlAsR0FFYixJQUE5QmYsS0FBS0YsU0FBU2tCLEdBQUtPLE9BQ3JCdkIsS0FBS0YsU0FBU2tCLEdBQU8sS0FDa0IsSUFBOUJoQixLQUFLRixTQUFTa0IsR0FBS08sU0FDNUJ2QixLQUFLRixTQUFTa0IsR0FBT0osU0FBU0MsY0FBY0UsSUFFL0MsR0FFSixDQUVEUyxPQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEIxQixLQUFLMkIsWUFBY0MsRUFBQUEsUUFBQUEsV0FDbkJBLEVBQUFBLFFBQUFBLE9BQ0U1QixLQUFLSCxRQUNMLENBQ0VnQyxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxJQUlmN0IsS0FBSzJCLFlBQVlHLE1BQU1DLElBQ2YvQixLQUFLZ0Msb0JBQ1hOLEdBQVMsR0FGWCxHQUtILENBRURPLE9BQ0UsT0FBTyxJQUFJUixTQUFTQyxJQUNsQjFCLEtBQUtrQyx1QkFDTGxDLEtBQUttQyxhQUFlUCxFQUFBQSxRQUFBQSxXQUVwQkEsRUFBQUEsUUFBQUEsR0FBUTVCLEtBQUtILFFBQVMsQ0FDcEJnQyxVQUFXLEVBQ1hPLFdBQVlWLEdBRmQsR0FLSCxDQUVEVyxhQUFhQyxHQUNYLE1BQU0sT0FBRUMsR0FBV0QsRUFDbkJ0QyxLQUFLRyxPQUFPRSxRQUFVa0MsQ0FDdkIsQ0FFRFAsb0JBQ0VmLE9BQU91QixpQkFBaUIsYUFBY3hDLEtBQUtxQyxhQUM1QyxDQUVESCx1QkFDRWpCLE9BQU93QixvQkFBb0IsYUFBY3pDLEtBQUtxQyxhQUMvQyxDQUVESyxTQUNFMUMsS0FBS0csT0FBT0MsUUFBVXdCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3BCNUIsS0FBS0csT0FBT0MsUUFDWkosS0FBS0csT0FBT0UsT0FDWixJQUdFTCxLQUFLRixTQUFTNkMsVUFDaEIzQyxLQUFLRixTQUFTNkMsUUFBUUMsTUFDcEI1QyxLQUFLTyxpQkFDRixlQUFjUCxLQUFLRyxPQUFPQyxhQUNsQyxrQkM1R0h5QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICB9O1xuXG4gICAgXG5cblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudHJhbnNmb3JtUHJlZml4KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWwpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxuICAgICAgXSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYDtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2NhMGIwMzQ5YzRlNWZlZjZlY2RcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0Iiwib25Db21wbGV0ZSIsIm9uTW91c2VXaGVlbCIsImV2ZW50IiwiZGVsdGFZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJ3cmFwcGVyIiwic3R5bGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=