/*! For license information please see main.2ed3a7419ced8fb3973d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class r extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"31e915649709439f1ca2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZWQzYTc0MTljZWQ4ZmIzOTczZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFFZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRCxLQUFLUixTQUFTVSxXQUNaRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFdkNFLEtBQUtHLE9BQVMsRUFFZEgsS0FBS0ksY0FDTixDQUVEQSxlQUNFQyxFQUFLTCxLQUFLUixTQUFTSSxRQUFTTCxJQUMxQkEsRUFBUWUsT0FBVUMsR0FBTVAsS0FBS1EsY0FBY2pCLEdBQzNDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLFdBQW5DLEdBRUgsQ0FFREYsY0FBY0csR0FDWlgsS0FBS0csUUFBVSxFQUVmLE1BQU1TLEVBQVVaLEtBQUtHLE9BQVNILEtBQUtSLFNBQVNJLE9BQU9PLE9BQ25ESCxLQUFLUixTQUFTRSxPQUFPbUIsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUUvQixJQUFaQSxHQUNGWixLQUFLZ0IsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJsQixLQUFLbUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxJQUdUckIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLUixTQUFTVSxXQUFZLENBQzNDcUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdMMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLUixTQUFTRyxXQUNkLENBQ0U0QixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFFBRUwsU0FPRjFCLEtBQUttQixXQUFXUSxNQUFNcEIsT0FBdEIsR0FFSCxDQUVEcUIsVUFDRTVCLEtBQUtULFFBQVFzQyxXQUFXQyxZQUFZOUIsS0FBS1QsUUFDMUMsa0JDdEZId0MsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxuICAgICAgICBudW1iZXJUZXh0OiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiLFxuICAgIH0pO1xuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9XG4gICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIik7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8oXG4gICAgICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcbiAgICAgICAge1xuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCItPTEuNFwiXG4gICAgICApO1xuXG4gICAgICAvLyB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAvLyAgIGF1dG9BbHBoYTogMCxcbiAgICAgIC8vIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoXykgPT4ge30pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMWU5MTU2NDk3MDk0MzlmMWNhMlwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0IiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BsaXQiLCJ0aGlzIiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJkZWxheSIsInRvIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlciIsInkiLCJjYWxsIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==