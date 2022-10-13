/*! For license information please see main.4fb302456e62ed2d6844.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class o extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.elements.titleSpans=(0,l.split)({element:this.elements.title,expression:"<br>"}),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false})",stagger:.1,y:-10}),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"ca4696029a63688c58e4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZmIzMDI0NTZlNjJlZDJkNjg0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFJdENDLEtBQUtOLFNBQVNPLFlBQWFDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDL0JULFFBQVNPLEtBQUtOLFNBQVNDLE1BQ3ZCUSxXQUFZLFNBR2RILEtBQUtJLE9BQVMsRUFFZEosS0FBS0ssY0FDTixDQUVEQSxlQUNFQyxFQUFLTixLQUFLTixTQUFTRyxRQUFTSixJQUMxQkEsRUFBUWMsT0FBVUMsR0FBTVIsS0FBS1MsY0FBY2hCLEdBQzNDQSxFQUFRaUIsSUFBTWpCLEVBQVFrQixhQUFhLFdBQW5DLEdBRUgsQ0FFREYsY0FBY0csR0FDWlosS0FBS0ksUUFBVSxFQUVmLE1BQU1TLEVBQVViLEtBQUtJLE9BQVNKLEtBQUtOLFNBQVNHLE9BQU9PLE9BQ25ESixLQUFLTixTQUFTRSxPQUFPa0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUUvQixJQUFaQSxHQUNGYixLQUFLaUIsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJuQixLQUFLb0IsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxJQUdUdEIsS0FBS29CLFdBQVdHLEdBQUd2QixLQUFLTixTQUFTTyxXQUFZLENBQzNDdUIsVUFBVyxFQUNYQyxTQUFVLElBQ1ZDLEtBQU0sb0dBQ05DLFFBQVMsR0FDVEMsR0FBSSxLQU9ONUIsS0FBS29CLFdBQVdTLE1BQU1yQixPQUF0QixHQUVILENBRURzQixVQUNFOUIsS0FBS1AsUUFBUXNDLFdBQVdDLFlBQVloQyxLQUFLUCxRQUMxQyxrQkNwRUh3QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgZWFzZTogXCJyb3VnaCh7IHRlbXBsYXRlOiBub25lLm91dCwgc3RyZW5ndGg6IDEsIHBvaW50czogMjAsIHRhcGVyOiBub25lLCByYW5kb21pemU6IHRydWUsIGNsYW1wOiBmYWxzZX0pXCIsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogLTEwLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIC8vICAgYXV0b0FscGhhOiAwLFxuICAgICAgLy8gfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC5jYWxsKChfKSA9PiB7fSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhNDY5NjAyOWE2MzY4OGM1OGU0XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRoaXMiLCJ0aXRsZVNwYW5zIiwic3BsaXQiLCJleHByZXNzaW9uIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiZWFjaCIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=