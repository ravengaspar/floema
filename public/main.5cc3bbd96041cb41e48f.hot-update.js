/*! For license information please see main.5cc3bbd96041cb41e48f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),o=s("./app/utils/text.js"),i=s("./node_modules/console-browserify/index.js");class l extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{i.log(e)}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"0c1aa54c5184bf8b54e1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41Y2MzYmJkOTYwNDFjYjQxZTQ4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cVRBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxjQUNDQyxNQUFNLENBQ0xDLFFBQVMsYUFDVEMsU0FBVSxDQUNUQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLCtCQUlkQyxFQUFBQSxFQUFBQSxPQUFNLENBQ0xMLFFBQVNNLEtBQUtMLFNBQVNDLE1BQ3ZCSyxXQUFZLFVBRWJGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDTEwsUUFBU00sS0FBS0wsU0FBU0MsTUFDdkJLLFdBQVksU0FHYkQsS0FBS0wsU0FBU08sV0FBYUYsS0FBS0wsU0FBU0MsTUFBTU8saUJBQWlCLGFBRWhFSCxLQUFLSSxPQUFTLEVBRWRKLEtBQUtLLGNBQ0wsQ0FFREEsZUFDQ0MsT0FBT0MsT0FBT0MsU0FBUUMsSUFDckJDLEVBQVFDLElBQUlGLEVBQVosR0FFRCxDQUVERyxjQUFjSCxHQUNiVCxLQUFLSSxRQUFVLEVBRWYsTUFBTVMsRUFBVWIsS0FBS0ksT0FBU0osS0FBS0wsU0FBU21CLE9BQU9WLE9BQ25ESixLQUFLTCxTQUFTRyxXQUFXaUIsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSixNQUVuQyxJQUFaQSxHQUNIYixLQUFLa0IsVUFFTixDQUVEQSxXQUNDLE9BQU8sSUFBSUMsU0FBUUMsSUFDbEJwQixLQUFLcUIsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUMvQkMsTUFBTyxNQUdSdkIsS0FBS3FCLFdBQVdHLEdBQUd4QixLQUFLTCxTQUFTTyxXQUFZLENBQzVDdUIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdKNUIsS0FBS3FCLFdBQVdHLEdBQ2Z4QixLQUFLTCxTQUFTRyxXQUNkLENBQ0MrQixVQUFXLEVBQ1hKLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsSUFFSixTQUdENUIsS0FBS3FCLFdBQVdHLEdBQ2Z4QixLQUFLTixRQUNMLENBQ0MrQixTQUFVLElBQ1ZDLEtBQU0sV0FDTkksT0FBUSxFQUNSQyxnQkFBaUIsYUFFbEIsT0FHRC9CLEtBQUtxQixXQUFXVyxNQUFLQyxJQUNwQmpDLEtBQUtrQyxLQUFLLFlBQVYsR0FERCxHQUlELENBRURDLFVBQ0NuQyxLQUFLTixRQUFRMEMsV0FBV0MsWUFBWXJDLEtBQUtOLFFBQ3pDLGtCQzdGRjRDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcih7XG5cdFx0XHRlbGVtZW50OiAnLnByZWxvYWRlcicsXG5cdFx0XHRlbGVtZW50czoge1xuXHRcdFx0XHR0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxuXHRcdFx0XHRudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxuXHRcdFx0XHRudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0Jyxcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHNwbGl0KHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG5cdFx0XHRleHByZXNzaW9uOiAnPGJyPicsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuXHRcdFx0ZXhwcmVzc2lvbjogJzxicj4nLFxuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG5cblx0XHR0aGlzLmxlbmd0aCA9IDBcblxuXHRcdHRoaXMuY3JlYXRlTG9hZGVyKClcblx0fVxuXG5cdGNyZWF0ZUxvYWRlcigpIHtcblx0XHR3aW5kb3cuQVNTRVRTLmZvckVhY2goaW1hZ2UgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coaW1hZ2UpXG5cdFx0fSlcblx0fVxuXG5cdG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcblx0XHR0aGlzLmxlbmd0aCArPSAxXG5cblx0XHRjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcblx0XHR0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG5cdFx0aWYgKHBlcmNlbnQgPT09IDEpIHtcblx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdH1cblx0fVxuXG5cdG9uTG9hZGVkKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuXHRcdFx0XHRkZWxheTogMS41LFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byhcblx0XHRcdFx0dGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdFx0eTogNTAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctPTEuNCdcblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKFxuXHRcdFx0XHR0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctPTEnXG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC5jYWxsKF8gPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGMxYWE1NGM1MTg0YmY4YjU0ZTFcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsInNwbGl0IiwidGhpcyIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsIndpbmRvdyIsIkFTU0VUUyIsImZvckVhY2giLCJpbWFnZSIsImNvbnNvbGUiLCJsb2ciLCJvbkFzc2V0TG9hZGVkIiwicGVyY2VudCIsImltYWdlcyIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImF1dG9BbHBoYSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJfIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=