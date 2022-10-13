/*! For license information please see main.9fc85a586091c360f507.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s("./app/classes/Component.js"),n=s("./node_modules/lodash/each.js"),o=s("./node_modules/gsap/index.js");class i extends a.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){n(this.elements.images,(e=>{new Image;e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=o.default.timeline({delay:2}),this.animateOut.to(this.element,{autoAlpha:0}),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"726e98837385eb1af7a8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ZmM4NWE1ODYwOTFjMzYwZjUwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVBBSWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUNaLElBQUlXLE1BRWxCWCxFQUFRWSxPQUFVQyxHQUFNTixLQUFLTyxjQUFjZCxHQUMzQ0EsRUFBUWUsSUFBTWYsRUFBUWdCLGFBQWEsV0FBbkMsR0FFSCxDQUVERixjQUFjRyxHQUNaVixLQUFLQyxRQUFVLEVBRWYsTUFBTVUsRUFBVVgsS0FBS0MsT0FBU0QsS0FBS04sU0FBU0csT0FBT0ksT0FDbkRELEtBQUtOLFNBQVNFLE9BQU9nQixVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BRS9CLElBQVpBLEdBQ0ZYLEtBQUtlLFVBRVIsQ0FFREEsV0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCakIsS0FBS2tCLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDOUJDLE1BQU8sSUFHVHBCLEtBQUtrQixXQUFXRyxHQUFHckIsS0FBS1AsUUFBUyxDQUMvQjZCLFVBQVcsSUFHYnRCLEtBQUtrQixXQUFXSyxNQUFNakIsSUFDcEJOLEtBQUt3QixLQUFLLFlBQVYsR0FERixHQUlILENBRURDLFVBQ0V6QixLQUFLUCxRQUFRaUMsV0FBV0MsWUFBWTNCLEtBQUtQLFFBQzFDLGtCQzFESG1DLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGVsZW1lbnQub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoO1xuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAyLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKChfKSA9PiB7XG4gICAgICAgIHRoaXMuZW1pdChcImNvbXBsZXRlZFwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3MjZlOTg4MzczODVlYjFhZjdhOFwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aGlzIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsIkltYWdlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJpbWFnZSIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0ZU91dCIsIkdTQVAiLCJkZWxheSIsInRvIiwiYXV0b0FscGhhIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9