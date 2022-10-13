/*! For license information please see main.4b3afb15ee7e74486fb7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var o=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),n=s("./node_modules/console-browserify/index.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1,n.log(this.length,this.elements.images.length)}}}},(function(e){e.h=()=>"d14de2805742113d9aae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YjNhZmIxNWVlN2U3NDQ4NmZiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVFBR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUMxQixNQUFNVyxFQUFRLElBQUlDLE1BQ2xCRCxFQUFNRSxPQUFVQyxHQUFNUCxLQUFLUSxjQUFjSixHQUN6Q0EsRUFBTUssSUFBTWhCLEVBQVFpQixhQUFhLFdBQWpDLEdBRUgsQ0FFREYsY0FBY0osR0FDWkosS0FBS0MsUUFBVSxFQUNmVSxFQUFRQyxJQUFJWixLQUFLQyxPQUFRRCxLQUFLTixTQUFTRyxPQUFPSSxPQUMvQyxrQkM5QkhZLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiLFxuICAgICAgICBpbWFnZXM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbWdcIiksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltYWdlLm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoaW1hZ2UpO1xuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGVuZ3RoLCB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGgpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTRkZTI4MDU3NDIxMTNkOWFhZVwiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0aGlzIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsImltYWdlIiwiSW1hZ2UiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=