/*! For license information please see main.e653c635374009f5ecd5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),o=s("./app/classes/Component.js"),a=s("./node_modules/console-browserify/index.js");class h extends o.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),thiis.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline(),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} `})}onMouseEnter(){a.log("enter")}onMouseLeave(){a.log("leave")}addEventListeners(){this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removerEventListener(){this.element.removeEventListener("mouseenter",this.onMouseEnter),this.element.removeEventListener("mouseleave",this.onMouseLeave)}}}},(function(e){e.h=()=>"cc6d958f635a321f103e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lNjUzYzYzNTM3NDAwOWY1ZWNkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFBBRWUsTUFBTUEsVUFBZUMsRUFBQUEsUUFDbkNDLGFBQVksUUFBRUMsSUFDYkMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNoQ0MsTUFBTUMsV0FBYUosS0FBS0MsS0FBS0ksaUJBRS9CTCxLQUFLTSxTQUFXQyxFQUFBQSxRQUFBQSxXQUVkUCxLQUFLTSxTQUFTRSxPQUFPUixLQUFLQyxLQUFNLENBQzlCUSxpQkFBa0JULEtBQUtJLFdBQ3ZCTSxnQkFBa0IsR0FBRVYsS0FBS0ksY0FBY0osS0FBS0ksY0FDM0MsQ0FDREssaUJBQWtCVCxLQUFLSSxXQUN2Qk0sZ0JBQWtCLEdBQUVWLEtBQUtJLGVBRTdCLENBRURPLGVBQ0NDLEVBQVFDLElBQUksUUFDWixDQUNEQyxlQUNDRixFQUFRQyxJQUFJLFFBQ1osQ0FFREUsb0JBQ0NmLEtBQUtGLFFBQVFrQixpQkFBaUIsYUFBY2hCLEtBQUtXLGNBQ2pEWCxLQUFLRixRQUFRa0IsaUJBQWlCLGFBQWNoQixLQUFLYyxhQUNqRCxDQUVERyx1QkFDQ2pCLEtBQUtGLFFBQVFvQixvQkFBb0IsYUFBY2xCLEtBQUtXLGNBQ3BEWCxLQUFLRixRQUFRb0Isb0JBQW9CLGFBQWNsQixLQUFLYyxhQUNwRCxrQkNuQ0ZLLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuXHRcdHN1cGVyKHsgZWxlbWVudCB9KVxuXG5cdFx0dGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKVxuICAgIHRoaWlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKVxuXG5cdFx0dGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoKVxuXG4gICAgdGhpcy50aW1lbGluZS5mcm9tVG8odGhpcy5wYXRoLCB7XG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiB0aGlzLnBhdGhMZW5ndGgsXG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YFxuICAgIH0sIHtcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSBgXG4gICAgfSlcblx0fVxuXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHRjb25zb2xlLmxvZygnZW50ZXInKVxuXHR9XG5cdG9uTW91c2VMZWF2ZSgpIHtcblx0XHRjb25zb2xlLmxvZygnbGVhdmUnKVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG5cblx0cmVtb3ZlckV2ZW50TGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjYzZkOTU4ZjYzNWEzMjFmMTAzZVwiKSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzdXBlciIsInRoaXMiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInRoaWlzIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidGltZWxpbmUiLCJHU0FQIiwiZnJvbVRvIiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZURhc2hhcnJheSIsIm9uTW91c2VFbnRlciIsImNvbnNvbGUiLCJsb2ciLCJvbk1vdXNlTGVhdmUiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVyRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=