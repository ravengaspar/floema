/*! For license information please see main.aa8ab106412f900b206b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),o=s("./app/classes/Component.js"),a=s("./node_modules/console-browserify/index.js");class h extends o.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),thiis.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline(),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:0,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){a.log("enter")}onMouseLeave(){a.log("leave")}addEventListeners(){this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removerEventListener(){this.element.removeEventListener("mouseenter",this.onMouseEnter),this.element.removeEventListener("mouseleave",this.onMouseLeave)}}}},(function(e){e.h=()=>"fb99e76e76c5cdf8bd59"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYThhYjEwNjQxMmY5MDBiMjA2Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFBBRWUsTUFBTUEsVUFBZUMsRUFBQUEsUUFDbkNDLGFBQVksUUFBRUMsSUFDYkMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNsQ0MsTUFBTUMsV0FBYUosS0FBS0MsS0FBS0ksaUJBRTdCTCxLQUFLTSxTQUFXQyxFQUFBQSxRQUFBQSxXQUVoQlAsS0FBS00sU0FBU0UsT0FDYlIsS0FBS0MsS0FDTCxDQUNDUSxpQkFBa0JULEtBQUtJLFdBQ3ZCTSxnQkFBa0IsR0FBRVYsS0FBS0ksY0FBY0osS0FBS0ksY0FFN0MsQ0FDQ0ssaUJBQWtCLEVBQ2xCQyxnQkFBa0IsR0FBRVYsS0FBS0ksY0FBY0osS0FBS0ksY0FHOUMsQ0FFRE8sZUFDQ0MsRUFBUUMsSUFBSSxRQUNaLENBQ0RDLGVBQ0NGLEVBQVFDLElBQUksUUFDWixDQUVERSxvQkFDQ2YsS0FBS0YsUUFBUWtCLGlCQUFpQixhQUFjaEIsS0FBS1csY0FDakRYLEtBQUtGLFFBQVFrQixpQkFBaUIsYUFBY2hCLEtBQUtjLGFBQ2pELENBRURHLHVCQUNDakIsS0FBS0YsUUFBUW9CLG9CQUFvQixhQUFjbEIsS0FBS1csY0FDcERYLEtBQUtGLFFBQVFvQixvQkFBb0IsYUFBY2xCLEtBQUtjLGFBQ3BELGtCQ3ZDRkssRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvQnV0dG9uLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG5cdFx0c3VwZXIoeyBlbGVtZW50IH0pXG5cblx0XHR0aGlzLnBhdGggPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BhdGg6bGFzdC1jaGlsZCcpXG5cdFx0dGhpaXMucGF0aExlbmd0aCA9IHRoaXMucGF0aC5nZXRUb3RhbExlbmd0aCgpXG5cblx0XHR0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSgpXG5cblx0XHR0aGlzLnRpbWVsaW5lLmZyb21Ubyhcblx0XHRcdHRoaXMucGF0aCxcblx0XHRcdHtcblx0XHRcdFx0c3Ryb2tlRGFzaG9mZnNldDogdGhpcy5wYXRoTGVuZ3RoLFxuXHRcdFx0XHRzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHN0cm9rZURhc2hvZmZzZXQ6IDAsXG5cdFx0XHRcdHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHRjb25zb2xlLmxvZygnZW50ZXInKVxuXHR9XG5cdG9uTW91c2VMZWF2ZSgpIHtcblx0XHRjb25zb2xlLmxvZygnbGVhdmUnKVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG5cblx0cmVtb3ZlckV2ZW50TGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYjk5ZTc2ZTc2YzVjZGY4YmQ1OVwiKSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzdXBlciIsInRoaXMiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInRoaWlzIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidGltZWxpbmUiLCJHU0FQIiwiZnJvbVRvIiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZURhc2hhcnJheSIsIm9uTW91c2VFbnRlciIsImNvbnNvbGUiLCJsb2ciLCJvbk1vdXNlTGVhdmUiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVyRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=