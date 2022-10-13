/*! For license information please see main.64108692c92f0a2ba263.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),i=s("./app/utils/text.js");class l extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.FOR}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"1bbe46ddc3d03a202b88"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NDEwODY5MmM5MmYwYTJiYTI2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bVFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLCtCQUloQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNKTCxRQUFTTSxLQUFLTCxTQUFTQyxNQUN2QkssV0FBWSxVQUVkRixFQUFBQSxFQUFBQSxPQUFNLENBQ0pMLFFBQVNNLEtBQUtMLFNBQVNDLE1BQ3ZCSyxXQUFZLFNBR2RELEtBQUtMLFNBQVNPLFdBQ1pGLEtBQUtMLFNBQVNDLE1BQU1PLGlCQUFpQixhQUV2Q0gsS0FBS0ksT0FBUyxFQUVkSixLQUFLSyxjQUNOLENBRURBLGVBQ0VDLE9BQU9DLE9BQU9DLEdBQ2YsQ0FFREMsY0FBY0MsR0FDWlYsS0FBS0ksUUFBVSxFQUVmLE1BQU1PLEVBQVVYLEtBQUtJLE9BQVNKLEtBQUtMLFNBQVNpQixPQUFPUixPQUNuREosS0FBS0wsU0FBU0csV0FBV2UsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSixNQUVuQyxJQUFaQSxHQUNGWCxLQUFLZ0IsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJsQixLQUFLbUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxNQUdUckIsS0FBS21CLFdBQVdHLEdBQUd0QixLQUFLTCxTQUFTTyxXQUFZLENBQzNDcUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdMMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLTCxTQUFTRyxXQUNkLENBQ0U2QixVQUFXLEVBQ1hKLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsSUFFTCxTQUdGMUIsS0FBS21CLFdBQVdHLEdBQ2R0QixLQUFLTixRQUNMLENBQ0U2QixTQUFVLElBQ1ZDLEtBQU0sV0FDTkksT0FBUSxFQUNSQyxnQkFBaUIsYUFFbkIsT0FHRjdCLEtBQUttQixXQUFXVyxNQUFNQyxJQUNwQi9CLEtBQUtnQyxLQUFLLFlBQVYsR0FERixHQUlILENBRURDLFVBQ0VqQyxLQUFLTixRQUFRd0MsV0FBV0MsWUFBWW5DLEtBQUtOLFFBQzFDLGtCQzVGSDBDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7XG4gICAgICBlbGVtZW50OiBcIi5wcmVsb2FkZXJcIixcbiAgICAgIGVsZW1lbnRzOiB7XG4gICAgICAgIHRpdGxlOiBcIi5wcmVsb2FkZXJfX3RleHRcIixcbiAgICAgICAgbnVtYmVyOiBcIi5wcmVsb2FkZXJfX251bWJlclwiLFxuICAgICAgICBudW1iZXJUZXh0OiBcIi5wcmVsb2FkZXJfX251bWJlcl9fdGV4dFwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuICAgICAgZXhwcmVzc2lvbjogXCI8YnI+XCIsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPVxuICAgICAgdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpO1xuXG4gICAgdGhpcy5sZW5ndGggPSAwO1xuXG4gICAgdGhpcy5jcmVhdGVMb2FkZXIoKTtcbiAgfVxuXG4gIGNyZWF0ZUxvYWRlcigpIHtcbiAgICB3aW5kb3cuQVNTRVRTLkZPUlxuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG5cbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGg7XG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAxLjUsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LnRvKFxuICAgICAgICB0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsXG4gICAgICAgIHtcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgc3RhZ2dlcjogMC4xLFxuICAgICAgICAgIHk6IDUwLFxuICAgICAgICB9LFxuICAgICAgICBcIi09MS40XCJcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgICAgc2NhbGVZOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCIxMDAlIDEwMCVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCItPTFcIlxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcy5lbWl0KFwiY29tcGxldGVkXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFiYmU0NmRkYzNkMDNhMjAyYjg4XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJ3aW5kb3ciLCJBU1NFVFMiLCJGT1IiLCJvbkFzc2V0TG9hZGVkIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW1hZ2VzIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsIl8iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==