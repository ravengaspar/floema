/*! For license information please see main.30ba86c388260319fbf4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var n=s("./node_modules/gsap/index.js"),i=s("./app/classes/Component.js");class h extends i.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),this.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline({paused:!0}),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:0,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){this.timeline.play()}onMouseLeave(){this.timeline.reverse()}addEventListeners(){this.onMouseEnterEvent=this.onMouseEnter.bind(this),this.on,this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removerEventListener(){this.element.removeEventListener("mouseenter",this.onMouseEnter),this.element.removeEventListener("mouseleave",this.onMouseLeave)}}}},(function(e){e.h=()=>"00faaa389ccc07afe80f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMGJhODZjMzg4MjYwMzE5ZmJmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d01BRWUsTUFBTUEsVUFBZUMsRUFBQUEsUUFDbkNDLGFBQVksUUFBRUMsSUFDYkMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNsQ0YsS0FBS0csV0FBYUgsS0FBS0MsS0FBS0csaUJBRTVCSixLQUFLSyxTQUFXQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLFFBQVEsSUFFeENQLEtBQUtLLFNBQVNHLE9BQ2JSLEtBQUtDLEtBQ0wsQ0FDQ1EsaUJBQWtCVCxLQUFLRyxXQUN2Qk8sZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRTdDLENBQ0NNLGlCQUFrQixFQUNsQkMsZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRzlDLENBRURRLGVBQ0NYLEtBQUtLLFNBQVNPLE1BQ2QsQ0FDREMsZUFDQ2IsS0FBS0ssU0FBU1MsU0FDZCxDQUVEQyxvQkFFR2YsS0FBS2dCLGtCQUFvQmhCLEtBQUtXLGFBQWFNLEtBQUtqQixNQUNoREEsS0FBS2tCLEdBR1BsQixLQUFLRixRQUFRcUIsaUJBQWlCLGFBQWNuQixLQUFLVyxjQUNqRFgsS0FBS0YsUUFBUXFCLGlCQUFpQixhQUFjbkIsS0FBS2EsYUFDakQsQ0FFRE8sdUJBQ0NwQixLQUFLRixRQUFRdUIsb0JBQW9CLGFBQWNyQixLQUFLVyxjQUNwRFgsS0FBS0YsUUFBUXVCLG9CQUFvQixhQUFjckIsS0FBS2EsYUFDcEQsa0JDNUNGUyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50IH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQgfSlcblxuXHRcdHRoaXMucGF0aCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcigncGF0aDpsYXN0LWNoaWxkJylcblx0XHR0aGlzLnBhdGhMZW5ndGggPSB0aGlzLnBhdGguZ2V0VG90YWxMZW5ndGgoKVxuXG5cdFx0dGhpcy50aW1lbGluZSA9IEdTQVAudGltZWxpbmUoeyBwYXVzZWQ6IHRydWUgfSlcblxuXHRcdHRoaXMudGltZWxpbmUuZnJvbVRvKFxuXHRcdFx0dGhpcy5wYXRoLFxuXHRcdFx0e1xuXHRcdFx0XHRzdHJva2VEYXNob2Zmc2V0OiB0aGlzLnBhdGhMZW5ndGgsXG5cdFx0XHRcdHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0c3Ryb2tlRGFzaG9mZnNldDogMCxcblx0XHRcdFx0c3Ryb2tlRGFzaGFycmF5OiBgJHt0aGlzLnBhdGhMZW5ndGh9ICR7dGhpcy5wYXRoTGVuZ3RofWAsXG5cdFx0XHR9XG5cdFx0KVxuXHR9XG5cblx0b25Nb3VzZUVudGVyKCkge1xuXHRcdHRoaXMudGltZWxpbmUucGxheSgpXG5cdH1cblx0b25Nb3VzZUxlYXZlKCkge1xuXHRcdHRoaXMudGltZWxpbmUucmV2ZXJzZSgpXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblxuICAgIHRoaXMub25Nb3VzZUVudGVyRXZlbnQgPSB0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblxuXG5cblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyKVxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmUpXG5cdH1cblxuXHRyZW1vdmVyRXZlbnRMaXN0ZW5lcigpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMub25Nb3VzZUVudGVyKVxuXHRcdHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5vbk1vdXNlTGVhdmUpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAwZmFhYTM4OWNjYzA3YWZlODBmXCIpIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsInN1cGVyIiwidGhpcyIsInBhdGgiLCJxdWVyeVNlbGVjdG9yIiwicGF0aExlbmd0aCIsImdldFRvdGFsTGVuZ3RoIiwidGltZWxpbmUiLCJHU0FQIiwicGF1c2VkIiwiZnJvbVRvIiwic3Ryb2tlRGFzaG9mZnNldCIsInN0cm9rZURhc2hhcnJheSIsIm9uTW91c2VFbnRlciIsInBsYXkiLCJvbk1vdXNlTGVhdmUiLCJyZXZlcnNlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbk1vdXNlRW50ZXJFdmVudCIsImJpbmQiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVyRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=