/*! For license information please see main.d3902a056e614020b3ab.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class o extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,l.split)({element:this.elements.title,expression:"<br>"}),(0,l.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){a(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=i.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"2a990ab50ae7349ec51f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMzkwMmEwNTZlNjE0MDIwYjNhYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFFZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRCxLQUFLUixTQUFTVSxXQUNaRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFdkNFLEtBQUtHLE9BQVMsRUFFZEgsS0FBS0ksY0FDTixDQUVEQSxlQUNFQyxFQUFLTCxLQUFLUixTQUFTSSxRQUFTTCxJQUMxQkEsRUFBUWUsT0FBVUMsR0FBTVAsS0FBS1EsY0FBY2pCLEdBQzNDQSxFQUFRa0IsSUFBTWxCLEVBQVFtQixhQUFhLFdBQW5DLEdBRUgsQ0FFREYsY0FBY0csR0FDWlgsS0FBS0csUUFBVSxFQUVmLE1BQU1TLEVBQVVaLEtBQUtHLE9BQVNILEtBQUtSLFNBQVNJLE9BQU9PLE9BQ25ESCxLQUFLUixTQUFTRyxXQUFXa0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUVuQyxJQUFaQSxHQUNGWixLQUFLZ0IsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJsQixLQUFLbUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxNQUdUckIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLUixTQUFTVSxXQUFZLENBQzNDcUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdMMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLUixTQUFTRyxXQUNkLENBQ0VnQyxVQUFXLEVBQ1hKLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsSUFFTCxTQUdGMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLVCxRQUNMLENBQ0VnQyxTQUFVLElBQ1ZDLEtBQU0sV0FDTkksT0FBUSxFQUNSQyxnQkFBaUIsYUFFbkIsT0FHRjdCLEtBQUttQixXQUFXVyxNQUFNdkIsSUFDcEJQLEtBQUsrQixLQUFLLFlBQVYsR0FERixHQUlILENBRURDLFVBQ0VoQyxLQUFLVCxRQUFRMEMsV0FBV0MsWUFBWWxDLEtBQUtULFFBQzFDLGtCQ2hHSDRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJcIixcbiAgICAgICAgbnVtYmVyVGV4dDogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPVxuICAgICAgdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpO1xuXG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICBlYWNoKHRoaXMuZWxlbWVudHMuaW1hZ2VzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoXykgPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGVsZW1lbnQpO1xuICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG5cbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGg7XG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAxLjUsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICAgIHk6IDUwLFxuICAgICAgICB9LFxuICAgICAgICBcIi09MS40XCJcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIxMDAlIDEwMCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCItPTFcIlxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVkXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJhOTkwYWI1MGFlNzM0OWVjNTFmXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImF1dG9BbHBoYSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==