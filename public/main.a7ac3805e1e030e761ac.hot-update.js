/*! For license information please see main.a7ac3805e1e030e761ac.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class o extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"4f31b6267964b6cd0ff4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hN2FjMzgwNWUxZTAzMGU3NjFhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLCtCQUloQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNKTCxRQUFTTSxLQUFLTCxTQUFTQyxNQUN2QkssV0FBWSxVQUVkRixFQUFBQSxFQUFBQSxPQUFNLENBQ0pMLFFBQVNNLEtBQUtMLFNBQVNDLE1BQ3ZCSyxXQUFZLFNBR2RELEtBQUtMLFNBQVNPLFdBQ1pGLEtBQUtMLFNBQVNDLE1BQU1PLGlCQUFpQixhQUV2Q0gsS0FBS0ksT0FBUyxFQUVkSixLQUFLSyxjQUNOLENBRURBLGVBQ0VDLEVBQUtOLEtBQUtMLFNBQVNZLFFBQVNiLElBQzFCQSxFQUFRYyxPQUFVQyxHQUFNVCxLQUFLVSxjQUFjaEIsR0FDM0NBLEVBQVFpQixJQUFNakIsRUFBUWtCLGFBQWEsV0FBbkMsR0FFSCxDQUVERixjQUFjRyxHQUNaYixLQUFLSSxRQUFVLEVBRWYsTUFBTVUsRUFBVWQsS0FBS0ksT0FBU0osS0FBS0wsU0FBU1ksT0FBT0gsT0FDbkRKLEtBQUtMLFNBQVNHLFdBQVdpQixVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BRW5DLElBQVpBLEdBQ0ZkLEtBQUtrQixVQUVSLENBRURBLFdBQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQnBCLEtBQUtxQixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQzlCQyxNQUFPLE1BR1R2QixLQUFLcUIsV0FBV0csR0FBR3hCLEtBQUtMLFNBQVNPLFdBQVksQ0FDM0N1QixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFNBR0w1QixLQUFLcUIsV0FBV0csR0FDZHhCLEtBQUtMLFNBQVNHLFdBQ2QsQ0FDRStCLFVBQVcsRUFDWEosU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxJQUVMLFNBR0Y1QixLQUFLcUIsV0FBV0csR0FDZHhCLEtBQUtOLFFBQ0wsQ0FDRStCLFNBQVUsSUFDVkMsS0FBTSxXQUNOSSxPQUFRLEVBQ1JDLGdCQUFpQixhQUVuQixPQUdGL0IsS0FBS3FCLFdBQVdXLE1BQU12QixJQUNwQlQsS0FBS2lDLEtBQUssWUFBVixHQURGLEdBSUgsQ0FFREMsVUFDRWxDLEtBQUtOLFFBQVF5QyxXQUFXQyxZQUFZcEMsS0FBS04sUUFDMUMsa0JDL0ZIMkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyXCIsXG4gICAgICAgIG51bWJlclRleHQ6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiLFxuICAgIH0pO1xuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9XG4gICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIik7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYDtcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgZGVsYXk6IDEuNSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgICAgeTogNTAsXG4gICAgICAgIH0sXG4gICAgICAgIFwiLT0xLjRcIlxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKFxuICAgICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICBzY2FsZVk6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiBcIjEwMCUgMTAwJVwiLFxuICAgICAgICB9LFxuICAgICAgICBcIi09MVwiXG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGYzMWI2MjY3OTY0YjZjZDBmZjRcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsInNwbGl0IiwidGhpcyIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJpbWFnZXMiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImF1dG9BbHBoYSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==