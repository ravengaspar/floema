/*! For license information please see main.987bdd39260ee80831dc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s("./app/classes/Component.js"),n=s("./node_modules/lodash/each.js");class o extends a.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){n(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){this.emit("completed")}hide(){}}}},(function(e){e.h=()=>"9a3bd5a40adaa796682a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45ODdiZGQzOTI2MGVlODA4MzFkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K01BSWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUMxQixNQUFNVyxFQUFRLElBQUlDLE1BRWxCRCxFQUFNRSxPQUFVQyxHQUFNUCxLQUFLUSxjQUFjSixHQUN6Q0EsRUFBTUssSUFBTWhCLEVBQVFpQixhQUFhLFdBQWpDLEdBRUgsQ0FFREYsY0FBY0osR0FDWkosS0FBS0MsUUFBVSxFQUVmLE1BQU1VLEVBQVVYLEtBQUtDLE9BQVNELEtBQUtOLFNBQVNHLE9BQU9JLE9BQ25ERCxLQUFLTixTQUFTRSxPQUFPZ0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUUvQixJQUFaQSxHQUNGWCxLQUFLZSxVQUVSLENBRURBLFdBQ0VmLEtBQUtnQixLQUFLLFlBQ1gsQ0FFREMsT0FFQyxrQkM5Q0hDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIGltYWdlLm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoaW1hZ2UpO1xuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoO1xuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHRoaXMuZW1pdChcImNvbXBsZXRlZFwiKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG5cbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWEzYmQ1YTQwYWRhYTc5NjY4MmFcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpcyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJlbWl0IiwiaGlkZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==