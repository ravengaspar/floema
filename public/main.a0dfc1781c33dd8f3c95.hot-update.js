/*! For license information please see main.a0dfc1781c33dd8f3c95.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./node_modules/lodash/each.js"),o=s("./node_modules/gsap/index.js"),i=s("./node_modules/console-browserify/index.js");class l{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s}create(){this.element=document.querySelector(this.selector),this.elements={},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=o.default.timeline(),o.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn}))}hide(){return new Promise((e=>{o.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){i.log(e)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheel)}}}},(function(e){e.h=()=>"52c242db59369b4dc428"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMGRmYzE3ODFjMzNkZDhmM2M5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MlBBR2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsQ0FDWCxDQUVESSxTQUNFSCxLQUFLSCxRQUFVTyxTQUFTQyxjQUFjTCxLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCUSxFQUFLTixLQUFLRSxrQkFBa0IsQ0FBQ0ssRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkUCxLQUFLRixTQUFTVSxHQUFPRCxHQUVyQlAsS0FBS0YsU0FBU1UsR0FBT0osU0FBU1UsaUJBQWlCUCxHQUViLElBQTlCUCxLQUFLRixTQUFTVSxHQUFLTyxPQUNyQmYsS0FBS0YsU0FBU1UsR0FBTyxLQUNrQixJQUE5QlIsS0FBS0YsU0FBU1UsR0FBS08sU0FDNUJmLEtBQUtGLFNBQVNVLEdBQU9KLFNBQVNDLGNBQWNFLElBRS9DLEdBRUosQ0FFRFMsT0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCbEIsS0FBS21CLFlBQWNDLEVBQUFBLFFBQUFBLFdBQ25CQSxFQUFBQSxRQUFBQSxPQUNFcEIsS0FBS0gsUUFDTCxDQUNFd0IsVUFBVyxHQUViLENBQ0VBLFVBQVcsSUFJZnJCLEtBQUttQixXQUFMLEdBRUgsQ0FFREcsT0FDRSxPQUFPLElBQUlMLFNBQVNDLElBQ2xCRSxFQUFBQSxRQUFBQSxHQUFRcEIsS0FBS0gsUUFBUyxDQUNwQndCLFVBQVcsRUFDWEUsV0FBWUwsR0FGZCxHQUtILENBRURNLGFBQWFDLEdBQ1hDLEVBQVFDLElBQUlGLEVBQ2IsQ0FFREcsb0JBQ0VuQixPQUFPb0IsaUJBQWlCLGFBQWM3QixLQUFLd0IsYUFDNUMsQ0FFRE0sdUJBQ0VyQixPQUFPc0Isb0JBQW9CLGFBQWMvQixLQUFLd0IsYUFDL0Msa0JDckVIUSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcbiAgICAgIEdTQVAuZnJvbVRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uSW5cbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWwpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MmMyNDJkYjU5MzY5YjRkYzQyOFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImhpZGUiLCJvbkNvbXBsZXRlIiwib25Nb3VzZVdoZWVsIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9