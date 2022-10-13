/*! For license information please see main.c91911f239448fb9474d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var o=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),n=s("./node_modules/console-browserify/index.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1,n.log(Math.round(this.length/this.elements.images.length*100))}}}},(function(e){e.h=()=>"5c6e1d48e594f81fadc5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jOTE5MTFmMjM5NDQ4ZmI5NDc0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVFBR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUMxQixNQUFNVyxFQUFRLElBQUlDLE1BQ2xCRCxFQUFNRSxPQUFVQyxHQUFNUCxLQUFLUSxjQUFjSixHQUN6Q0EsRUFBTUssSUFBTWhCLEVBQVFpQixhQUFhLFdBQWpDLEdBRUgsQ0FFREYsY0FBY0osR0FDWkosS0FBS0MsUUFBVSxFQUNmVSxFQUFRQyxJQUFJQyxLQUFLQyxNQUFPZCxLQUFLQyxPQUFTRCxLQUFLTixTQUFTRyxPQUFPSSxPQUFVLEtBQ3RFLGtCQzlCSGMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSk7XG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG4gICAgY29uc29sZS5sb2coTWF0aC5yb3VuZCgodGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGgpICogMTAwKSk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVjNmUxZDQ4ZTU5NGY4MWZhZGM1XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoaXMiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJlYWNoIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsIk1hdGgiLCJyb3VuZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==