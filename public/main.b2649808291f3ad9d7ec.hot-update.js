/*! For license information please see main.b2649808291f3ad9d7ec.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class r extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"945dcb438be8f37be076"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMjY0OTgwODI5MWYzYWQ5ZDdlYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFFZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRCxLQUFLUixTQUFTVSxXQUNaRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFdkNFLEtBQUtHLE9BQVMsRUFFZEgsS0FBS0ksY0FDTixDQUVEQSxlQUNFQyxFQUFLTCxLQUFLUixTQUFTSSxRQUFTTCxJQUMxQkEsRUFBUWUsT0FBVUMsR0FBTVAsS0FBS1EsY0FBY2pCLEdBQzNDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLFdBQW5DLEdBRUgsQ0FFREYsY0FBY0csR0FDWlgsS0FBS0csUUFBVSxFQUVmLE1BQU1TLEVBQVVaLEtBQUtHLE9BQVNILEtBQUtSLFNBQVNJLE9BQU9PLE9BQ25ESCxLQUFLUixTQUFTRyxXQUFXa0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUVuQyxJQUFaQSxHQUNGWixLQUFLZ0IsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJsQixLQUFLbUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxJQUdUckIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLUixTQUFTVSxXQUFZLENBQzNDcUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdMMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLUixTQUFTRyxXQUNkLENBQ0U0QixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFFBRUwsU0FPRjFCLEtBQUttQixXQUFXUSxNQUFNcEIsT0FBdEIsR0FFSCxDQUVEcUIsVUFDRTVCLEtBQUtULFFBQVFzQyxXQUFXQyxZQUFZOUIsS0FBS1QsUUFDMUMsa0JDdEZId0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxuICAgICAgICBudW1iZXJUZXh0OiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiLFxuICAgIH0pO1xuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9XG4gICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIik7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYDtcblxuICAgIGlmIChwZXJjZW50ID09PSAxKSB7XG4gICAgICB0aGlzLm9uTG9hZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcbiAgICAgICAgZGVsYXk6IDIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsXG4gICAgICAgIHtcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiLT0xLjRcIlxuICAgICAgKTtcblxuICAgICAgLy8gdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgLy8gICBhdXRvQWxwaGE6IDAsXG4gICAgICAvLyB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKF8pID0+IHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTQ1ZGNiNDM4YmU4ZjM3YmUwNzZcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNwbGl0IiwidGhpcyIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=