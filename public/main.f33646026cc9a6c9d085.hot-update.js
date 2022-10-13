/*! For license information please see main.f33646026cc9a6c9d085.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var n=s("./app/classes/Component.js"),o=s("./node_modules/lodash/each.js"),a=s("./node_modules/gsap/index.js");class d extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){o(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){this.emit("completed")}hide(){return new Promise((e=>{a.default.to(this.element)}))}}}},(function(e){e.h=()=>"9841a45907742b60aff5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMzM2NDYwMjZjYzlhNmM5ZDA4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVBBSWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUMxQixNQUFNVyxFQUFRLElBQUlDLE1BRWxCRCxFQUFNRSxPQUFVQyxHQUFNUCxLQUFLUSxjQUFjSixHQUN6Q0EsRUFBTUssSUFBTWhCLEVBQVFpQixhQUFhLFdBQWpDLEdBRUgsQ0FFREYsY0FBY0osR0FDWkosS0FBS0MsUUFBVSxFQUVmLE1BQU1VLEVBQVVYLEtBQUtDLE9BQVNELEtBQUtOLFNBQVNHLE9BQU9JLE9BQ25ERCxLQUFLTixTQUFTRSxPQUFPZ0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUUvQixJQUFaQSxHQUNGWCxLQUFLZSxVQUVSLENBRURBLFdBQ0VmLEtBQUtnQixLQUFLLFlBQ1gsQ0FFREMsT0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCQyxFQUFBQSxRQUFBQSxHQUFRcEIsS0FBS1AsUUFBYixHQUVILGtCQ2hESDRCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGltYWdlLm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoaW1hZ2UpO1xuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoO1xuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHRoaXMuZW1pdChcImNvbXBsZXRlZFwiKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwpXG4gICAgfSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4NDFhNDU5MDc3NDJiNjBhZmY1XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoaXMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiZW1pdCIsImhpZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIkdTQVAiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=