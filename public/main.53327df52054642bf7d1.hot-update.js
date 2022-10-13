/*! For license information please see main.53327df52054642bf7d1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var o=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),n=s("./node_modules/console-browserify/index.js");class r extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;ath.round(this.length/this.elements.images.length*100);n.log(M)}}}},(function(e){e.h=()=>"1a901fbda7399e78bcd5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MzMyN2RmNTIwNTQ2NDJiZjdkMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVFBR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtDLE9BQVMsRUFFZEQsS0FBS0UsY0FDTixDQUVEQSxlQUNFQyxFQUFLSCxLQUFLTixTQUFTRyxRQUFTSixJQUMxQixNQUFNVyxFQUFRLElBQUlDLE1BQ2xCRCxFQUFNRSxPQUFVQyxHQUFNUCxLQUFLUSxjQUFjSixHQUN6Q0EsRUFBTUssSUFBTWhCLEVBQVFpQixhQUFhLFdBQWpDLEdBRUgsQ0FFREYsY0FBY0osR0FDWkosS0FBS0MsUUFBVSxFQUVDVSxJQUFJQyxNQUFPWixLQUFLQyxPQUFTRCxLQUFLTixTQUFTRyxPQUFPSSxPQUFVLEtBRXhFWSxFQUFRQyxJQUFJQyxFQUNiLGtCQ2pDSEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSk7XG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG5cbiAgICBjb25zdCBwZXJjZW50ID0gYXRoLnJvdW5kKCh0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCkgKiAxMDApXG5cbiAgICBjb25zb2xlLmxvZyhNKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMWE5MDFmYmRhNzM5OWU3OGJjZDVcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpcyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJhdGgiLCJyb3VuZCIsImNvbnNvbGUiLCJsb2ciLCJNIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9