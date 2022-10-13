/*! For license information please see main.f32b754cf2f24395a791.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./node_modules/console-browserify/index.js");class r{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.transformPrefix=l("transform"),o.log(this.transformPrefix)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),i.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),i.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){o.log(e);const{deltaY:t}=e;o.log(t),this.scroll.target=t}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheel)}update(){this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1)}}}},(function(e){e.h=()=>"1e139c85bb343179f974"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMzJiNzU0Y2YyZjI0Mzk1YTc5MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVNBSWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0csZ0JBQWtCQyxFQUFPLGFBQzlCQyxFQUFRQyxJQUFJTixLQUFLRyxnQkFDbEIsQ0FFREksU0FDRVAsS0FBS0gsUUFBVVcsU0FBU0MsY0FBY1QsS0FBS0MsVUFDM0NELEtBQUtGLFNBQVcsQ0FBQyxFQUVqQkUsS0FBS1UsT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxHQUdSQyxFQUFLZCxLQUFLRSxrQkFBa0IsQ0FBQ2EsRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkZixLQUFLRixTQUFTa0IsR0FBT0QsR0FFckJmLEtBQUtGLFNBQVNrQixHQUFPUixTQUFTYyxpQkFBaUJQLEdBRWIsSUFBOUJmLEtBQUtGLFNBQVNrQixHQUFLTyxPQUNyQnZCLEtBQUtGLFNBQVNrQixHQUFPLEtBQ2tCLElBQTlCaEIsS0FBS0YsU0FBU2tCLEdBQUtPLFNBQzVCdkIsS0FBS0YsU0FBU2tCLEdBQU9SLFNBQVNDLGNBQWNNLElBRS9DLEdBRUosQ0FFRFMsT0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCMUIsS0FBSzJCLFlBQWNDLEVBQUFBLFFBQUFBLFdBQ25CQSxFQUFBQSxRQUFBQSxPQUNFNUIsS0FBS0gsUUFDTCxDQUNFZ0MsVUFBVyxHQUViLENBQ0VBLFVBQVcsSUFJZjdCLEtBQUsyQixZQUFZRyxNQUFNQyxJQUNmL0IsS0FBS2dDLG9CQUNYTixHQUFTLEdBRlgsR0FLSCxDQUVETyxPQUNFLE9BQU8sSUFBSVIsU0FBU0MsSUFDbEIxQixLQUFLa0MsdUJBQ0xsQyxLQUFLbUMsYUFBZVAsRUFBQUEsUUFBQUEsV0FFcEJBLEVBQUFBLFFBQUFBLEdBQVE1QixLQUFLSCxRQUFTLENBQ3BCZ0MsVUFBVyxFQUNYTyxXQUFZVixHQUZkLEdBS0gsQ0FFRFcsYUFBYUMsR0FDWGpDLEVBQVFDLElBQUlnQyxHQUNaLE1BQU0sT0FBRUMsR0FBV0QsRUFFbkJqQyxFQUFRQyxJQUFJaUMsR0FDWnZDLEtBQUtVLE9BQU9FLE9BQVMyQixDQUN0QixDQUVEUCxvQkFDRWYsT0FBT3VCLGlCQUFpQixhQUFjeEMsS0FBS3FDLGFBQzVDLENBRURILHVCQUNFakIsT0FBT3dCLG9CQUFvQixhQUFjekMsS0FBS3FDLGFBQy9DLENBRURLLFNBQ0UxQyxLQUFLVSxPQUFPQyxRQUFVaUIsRUFBQUEsUUFBQUEsTUFBQUEsWUFDcEI1QixLQUFLVSxPQUFPQyxRQUNaWCxLQUFLVSxPQUFPRSxPQUNaLEdBRUgsa0JDakdIK0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9O1xuICAgIHRoaXMuaWQgPSBpZDtcblxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudHJhbnNmb3JtUHJlZml4KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgY29uc3QgeyBkZWx0YVkgfSA9IGV2ZW50O1xuXG4gICAgY29uc29sZS5sb2coZGVsdGFZKTtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBkZWx0YVk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWwpO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICAwLjFcbiAgICApO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxZTEzOWM4NWJiMzQzMTc5Zjk3NFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwib25Nb3VzZVdoZWVsIiwiZXZlbnQiLCJkZWx0YVkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==