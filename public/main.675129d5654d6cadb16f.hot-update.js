/*! For license information please see main.675129d5654d6cadb16f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Button.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/gsap/index.js"),a=s("./app/classes/Component.js");class i extends a.default{constructor({element:e}){super({element:e}),this.path=e.querySelector("path:last-child"),this.pathLength=this.path.getTotalLength(),this.timeline=n.default.timeline({paused:!0}),this.timeline.fromTo(this.path,{strokeDashoffset:this.pathLength,strokeDasharray:`${this.pathLength} ${this.pathLength}`},{strokeDashoffset:0,strokeDasharray:`${this.pathLength} ${this.pathLength}`})}onMouseEnter(){this.timeline.play()}onMouseLeave(){this.timeline.restart()}addEventListeners(){this.element.addEventListener("mouseenter",this.onMouseEnter),this.element.addEventListener("mouseleave",this.onMouseLeave)}removerEventListener(){this.element.removeEventListener("mouseenter",this.onMouseEnter),this.element.removeEventListener("mouseleave",this.onMouseLeave)}}}},(function(e){e.h=()=>"44ae54bcac2a9b2e2588"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NzUxMjlkNTY1NGQ2Y2FkYjE2Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7d01BRWUsTUFBTUEsVUFBZUMsRUFBQUEsUUFDbkNDLGFBQVksUUFBRUMsSUFDYkMsTUFBTSxDQUFFRCxZQUVSRSxLQUFLQyxLQUFPSCxFQUFRSSxjQUFjLG1CQUNsQ0YsS0FBS0csV0FBYUgsS0FBS0MsS0FBS0csaUJBRTVCSixLQUFLSyxTQUFXQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLFFBQVEsSUFFeENQLEtBQUtLLFNBQVNHLE9BQ2JSLEtBQUtDLEtBQ0wsQ0FDQ1EsaUJBQWtCVCxLQUFLRyxXQUN2Qk8sZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRTdDLENBQ0NNLGlCQUFrQixFQUNsQkMsZ0JBQWtCLEdBQUVWLEtBQUtHLGNBQWNILEtBQUtHLGNBRzlDLENBRURRLGVBQ0NYLEtBQUtLLFNBQVNPLE1BQ2QsQ0FDREMsZUFDQ2IsS0FBS0ssU0FBU1MsU0FDZCxDQUVEQyxvQkFDQ2YsS0FBS0YsUUFBUWtCLGlCQUFpQixhQUFjaEIsS0FBS1csY0FDakRYLEtBQUtGLFFBQVFrQixpQkFBaUIsYUFBY2hCLEtBQUthLGFBQ2pELENBRURJLHVCQUNDakIsS0FBS0YsUUFBUW9CLG9CQUFvQixhQUFjbEIsS0FBS1csY0FDcERYLEtBQUtGLFFBQVFvQixvQkFBb0IsYUFBY2xCLEtBQUthLGFBQ3BELGtCQ3ZDRk0sRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvQnV0dG9uLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCB9KSB7XG5cdFx0c3VwZXIoeyBlbGVtZW50IH0pXG5cblx0XHR0aGlzLnBhdGggPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BhdGg6bGFzdC1jaGlsZCcpXG5cdFx0dGhpcy5wYXRoTGVuZ3RoID0gdGhpcy5wYXRoLmdldFRvdGFsTGVuZ3RoKClcblxuXHRcdHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKHsgcGF1c2VkOiB0cnVlIH0pXG5cblx0XHR0aGlzLnRpbWVsaW5lLmZyb21Ubyhcblx0XHRcdHRoaXMucGF0aCxcblx0XHRcdHtcblx0XHRcdFx0c3Ryb2tlRGFzaG9mZnNldDogdGhpcy5wYXRoTGVuZ3RoLFxuXHRcdFx0XHRzdHJva2VEYXNoYXJyYXk6IGAke3RoaXMucGF0aExlbmd0aH0gJHt0aGlzLnBhdGhMZW5ndGh9YCxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHN0cm9rZURhc2hvZmZzZXQ6IDAsXG5cdFx0XHRcdHN0cm9rZURhc2hhcnJheTogYCR7dGhpcy5wYXRoTGVuZ3RofSAke3RoaXMucGF0aExlbmd0aH1gLFxuXHRcdFx0fVxuXHRcdClcblx0fVxuXG5cdG9uTW91c2VFbnRlcigpIHtcblx0XHR0aGlzLnRpbWVsaW5lLnBsYXkoKVxuXHR9XG5cdG9uTW91c2VMZWF2ZSgpIHtcblx0XHR0aGlzLnRpbWVsaW5lLnJlc3RhcnQoKVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG5cblx0cmVtb3ZlckV2ZW50TGlzdGVuZXIoKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VFbnRlcilcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZUxlYXZlKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0NGFlNTRiY2FjMmE5YjJlMjU4OFwiKSJdLCJuYW1lcyI6WyJCdXR0b24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJzdXBlciIsInRoaXMiLCJwYXRoIiwicXVlcnlTZWxlY3RvciIsInBhdGhMZW5ndGgiLCJnZXRUb3RhbExlbmd0aCIsInRpbWVsaW5lIiwiR1NBUCIsInBhdXNlZCIsImZyb21UbyIsInN0cm9rZURhc2hvZmZzZXQiLCJzdHJva2VEYXNoYXJyYXkiLCJvbk1vdXNlRW50ZXIiLCJwbGF5Iiwib25Nb3VzZUxlYXZlIiwicmVzdGFydCIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZXJFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==