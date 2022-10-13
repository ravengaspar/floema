/*! For license information please see main.dfda271ac7d4c4a2b040.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),o=s("./app/classes/Component.js"),a=s("./node_modules/console-browserify/index.js");class h extends o.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),this.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline({paused:!0}),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:0,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){a.log("enter")}onMouseLeave(){a.log("leave")}addEventListeners(){this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removerEventListener(){this.element.removeEventListener("mouseenter",this.onMouseEnter),this.element.removeEventListener("mouseleave",this.onMouseLeave)}}}},(function(e){e.h=()=>"450542e7974f292c9cd2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kZmRhMjcxYWM3ZDRjNGEyYjA0MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFBBRWUsTUFBTUEsVUFBZUMsRUFBQUEsUUFDbkNDLGFBQVksUUFBRUMsSUFDYkMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNsQ0YsS0FBS0csV0FBYUgsS0FBS0MsS0FBS0csaUJBRTVCSixLQUFLSyxTQUFXQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLFFBQVEsSUFFeENQLEtBQUtLLFNBQVNHLE9BQ2JSLEtBQUtDLEtBQ0wsQ0FDQ1EsaUJBQWtCVCxLQUFLRyxXQUN2Qk8sZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRTdDLENBQ0NNLGlCQUFrQixFQUNsQkMsZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRzlDLENBRURRLGVBQ0NDLEVBQVFDLElBQUksUUFDWixDQUNEQyxlQUNDRixFQUFRQyxJQUFJLFFBQ1osQ0FFREUsb0JBQ0NmLEtBQUtGLFFBQVFrQixpQkFBaUIsYUFBY2hCLEtBQUtXLGNBQ2pEWCxLQUFLRixRQUFRa0IsaUJBQWlCLGFBQWNoQixLQUFLYyxhQUNqRCxDQUVERyx1QkFDQ2pCLEtBQUtGLFFBQVFvQixvQkFBb0IsYUFBY2xCLEtBQUtXLGNBQ3BEWCxLQUFLRixRQUFRb0Isb0JBQW9CLGFBQWNsQixLQUFLYyxhQUNwRCxrQkN2Q0ZLLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQgfSkge1xuXHRcdHN1cGVyKHsgZWxlbWVudCB9KVxuXG5cdFx0dGhpcy5wYXRoID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoOmxhc3QtY2hpbGQnKVxuXHRcdHRoaXMucGF0aExlbmd0aCA9IHRoaXMucGF0aC5nZXRUb3RhbExlbmd0aCgpXG5cblx0XHR0aGlzLnRpbWVsaW5lID0gR1NBUC50aW1lbGluZSh7IHBhdXNlZDogdHJ1ZSB9KVxuXG5cdFx0dGhpcy50aW1lbGluZS5mcm9tVG8oXG5cdFx0XHR0aGlzLnBhdGgsXG5cdFx0XHR7XG5cdFx0XHRcdHN0cm9rZURhc2hvZmZzZXQ6IHRoaXMucGF0aExlbmd0aCxcblx0XHRcdFx0c3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRzdHJva2VEYXNob2Zmc2V0OiAwLFxuXHRcdFx0XHRzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcblx0XHRcdH1cblx0XHQpXG5cdH1cblxuXHRvbk1vdXNlRW50ZXIoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2VudGVyJylcblx0fVxuXHRvbk1vdXNlTGVhdmUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2xlYXZlJylcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXIpXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZSlcblx0fVxuXG5cdHJlbW92ZXJFdmVudExpc3RlbmVyKCkge1xuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlRW50ZXIpXG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VMZWF2ZSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDUwNTQyZTc5NzRmMjkyYzljZDJcIikiXSwibmFtZXMiOlsiQnV0dG9uIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlbGVtZW50Iiwic3VwZXIiLCJ0aGlzIiwicGF0aCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXRoTGVuZ3RoIiwiZ2V0VG90YWxMZW5ndGgiLCJ0aW1lbGluZSIsIkdTQVAiLCJwYXVzZWQiLCJmcm9tVG8iLCJzdHJva2VEYXNob2Zmc2V0Iiwic3Ryb2tlRGFzaGFycmF5Iiwib25Nb3VzZUVudGVyIiwiY29uc29sZSIsImxvZyIsIm9uTW91c2VMZWF2ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZXJFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==