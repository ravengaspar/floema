/*! For license information please see main.84af7a571868f5310b8e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/lodash/each.js"),l=s("./node_modules/gsap/index.js");class o{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s}create(){this.element=document.querySelector(this.selector),this.elements={},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1,onComplete:e})}))}hide(){return new Promise((e=>{l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}removeEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}}}},(function(e){e.h=()=>"662f52f6197560574959"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NGFmN2E1NzE4NjhmNTMxMGI4ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eU1BR2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsQ0FDWCxDQUVESSxTQUNFSCxLQUFLSCxRQUFVTyxTQUFTQyxjQUFjTCxLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCUSxFQUFLTixLQUFLRSxrQkFBa0IsQ0FBQ0ssRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkUCxLQUFLRixTQUFTVSxHQUFPRCxHQUVyQlAsS0FBS0YsU0FBU1UsR0FBT0osU0FBU1UsaUJBQWlCUCxHQUViLElBQTlCUCxLQUFLRixTQUFTVSxHQUFLTyxPQUNyQmYsS0FBS0YsU0FBU1UsR0FBTyxLQUNrQixJQUE5QlIsS0FBS0YsU0FBU1UsR0FBS08sU0FDNUJmLEtBQUtGLFNBQVNVLEdBQU9KLFNBQVNDLGNBQWNFLElBRS9DLEdBRUosQ0FFRFMsT0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCQyxFQUFBQSxRQUFBQSxPQUNFbkIsS0FBS0gsUUFDTCxDQUNFdUIsVUFBVyxHQUViLENBQ0VBLFVBQVcsRUFDWEMsV0FBWUgsR0FQaEIsR0FXSCxDQUVESSxPQUNFLE9BQU8sSUFBSUwsU0FBU0MsSUFDbEJDLEVBQUFBLFFBQUFBLEdBQVFuQixLQUFLSCxRQUFTLENBQ3BCdUIsVUFBVyxFQUNYQyxXQUFZSCxHQUZkLEdBS0gsQ0FFREssb0JBQ0VkLE9BQU9lLGlCQUFpQixhQUFjeEIsS0FBS3lCLGFBQzVDLENBRURDLHVCQUNFakIsT0FBT2UsaUJBQWlCLGFBQWN4QixLQUFLeUIsYUFFNUMsa0JDaEVIRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9O1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIEdTQVAuZnJvbVRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWwpO1xuXG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY2MmY1MmY2MTk3NTYwNTc0OTU5XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiR1NBUCIsImF1dG9BbHBoYSIsIm9uQ29tcGxldGUiLCJoaWRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZVdoZWVsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=