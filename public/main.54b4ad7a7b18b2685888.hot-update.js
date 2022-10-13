/*! For license information please see main.54b4ad7a7b18b2685888.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class o extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elem,this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"8a0472343d177e445ccb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NGI0YWQ3YTdiMThiMjY4NTg4OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlAsUUFBU1EsS0FBS1AsU0FBU0MsTUFDdkJPLFdBQVksVUFFZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUCxRQUFTUSxLQUFLUCxTQUFTQyxNQUN2Qk8sV0FBWSxTQUlkRCxLQUFLUCxTQUFTUyxXQUFhRixLQUFLRyxLQUVoQ0gsS0FBS0ksT0FBUyxFQUVkSixLQUFLSyxjQUNOLENBRURBLGVBQ0VDLEVBQUtOLEtBQUtQLFNBQVNHLFFBQVNKLElBQzFCQSxFQUFRZSxPQUFVQyxHQUFNUixLQUFLUyxjQUFjakIsR0FDM0NBLEVBQVFrQixJQUFNbEIsRUFBUW1CLGFBQWEsV0FBbkMsR0FFSCxDQUVERixjQUFjRyxHQUNaWixLQUFLSSxRQUFVLEVBRWYsTUFBTVMsRUFBVWIsS0FBS0ksT0FBU0osS0FBS1AsU0FBU0csT0FBT1EsT0FDbkRKLEtBQUtQLFNBQVNFLE9BQU9tQixVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BRS9CLElBQVpBLEdBQ0ZiLEtBQUtpQixVQUVSLENBRURBLFdBQ0UsT0FBTyxJQUFJQyxTQUFTQyxJQUNsQm5CLEtBQUtvQixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQzlCQyxNQUFPLElBR1R0QixLQUFLb0IsV0FBV0csR0FBR3ZCLEtBQUtQLFNBQVNTLFdBQVksQ0FDM0NzQixVQUFXLEVBQ1hDLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FPTDVCLEtBQUtvQixXQUFXUyxNQUFNckIsT0FBdEIsR0FFSCxDQUVEc0IsVUFDRTlCLEtBQUtSLFFBQVF1QyxXQUFXQyxZQUFZaEMsS0FBS1IsUUFDMUMsa0JDM0VIeUMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246IFwiPGJyPlwiLFxuICAgIH0pO1xuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuXG4gICAgdGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtXG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIC8vICAgYXV0b0FscGhhOiAwLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKChfKSA9PiB7fSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhhMDQ3MjM0M2QxNzdlNDQ1Y2NiXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInNwbGl0IiwidGhpcyIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwiZWxlbSIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJhdXRvQWxwaGEiLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImNhbGwiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9