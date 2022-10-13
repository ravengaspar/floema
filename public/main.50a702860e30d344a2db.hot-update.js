/*! For license information please see main.50a702860e30d344a2db.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Animation.js"),a=s("./node_modules/gsap/index.js"),i=s("./app/utils/text.js");class l extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpan=this.element.querySelector("span span")}animateIn(){a.default.fromTo(this.elementLines,{autoAlpha:1,y:"100%"},{autoAlpha:0},{autoAlpha:1,delay:.5,duration:1.5})}animateOut(){a.default.set(this.element,{autoAlpha:0})}onResize(){this.elementLines=(0,i.calculate)(this.elementLinesSpan)}}},"./app/classes/Animation.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./app/classes/Component.js"),a=s("./node_modules/console-browserify/index.js");class i extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),this.createObserver(),this.animateOut()}createObserver(){this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(a.log("animate in"),this.animateIn()):(a.log("animate out"),this.animateOut())}))})),this.observer.observe(this.element)}animateOut(){}animateIn(){}}}},(function(e){e.h=()=>"b65680e2f90ce734712d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MGE3MDI4NjBlMzBkMzQ0YTJkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BSWUsTUFBTUEsVUFBY0MsRUFBQUEsUUFDakNDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUNyQkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNKSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVZGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSkgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdWRCxLQUFLRSxpQkFBbUJGLEtBQUtKLFFBQVFPLGNBQWMsWUFDcEQsQ0FFREMsWUFDRUMsRUFBQUEsUUFBQUEsT0FDRUwsS0FBS00sYUFDTCxDQUNFQyxVQUFXLEVBQ1hDLEVBQUcsUUFFTCxDQUNFRCxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxFQUNYRSxNQUFPLEdBQ1BDLFNBQVUsS0FHZixDQUNEQyxhQUNFTixFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixRQUFTLENBQ3JCVyxVQUFXLEdBRWQsQ0FFREssV0FDRVosS0FBS00sY0FBZU8sRUFBQUEsRUFBQUEsV0FBVWIsS0FBS0UsaUJBQ3BDLGlLQzNDWSxNQUFNUixVQUFrQm9CLEVBQUFBLFFBQ3JDbkIsYUFBWSxRQUFFQyxFQUFGLFNBQVdDLElBQ3JCQyxNQUFNLENBQUVGLFVBQVNDLGFBRWpCRyxLQUFLZSxpQkFFTGYsS0FBS1csWUFDTixDQUVESSxpQkFDRWYsS0FBS2dCLFNBQVcsSUFBSUMsc0JBQXNCQyxJQUN4Q0EsRUFBUUMsU0FBU0MsSUFDWEEsRUFBTUMsZ0JBQ1JDLEVBQVFDLElBQUksY0FDWnZCLEtBQUtJLGNBRUxrQixFQUFRQyxJQUFJLGVBQ1p2QixLQUFLVyxhQUNOLEdBUEgsSUFXRlgsS0FBS2dCLFNBQVNRLFFBQVF4QixLQUFLSixRQUM1QixDQUVEZSxhQUFlLENBRWZQLFlBQWMsa0JDN0JoQnFCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9hbmltYXRpb25zL1RpdGxlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvQW5pbWF0aW9uLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgfSk7XG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgYXBwZW5kOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50TGluZXNTcGFuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuIHNwYW5cIik7XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG4gICAgR1NBUC5mcm9tVG8oXG4gICAgICB0aGlzLmVsZW1lbnRMaW5lcyxcbiAgICAgIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICBhdXRvQWxwaGE6IDAsXG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW4pO1xuICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcbiAgICBzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pO1xuXG4gICAgdGhpcy5jcmVhdGVPYnNlcnZlcigpO1xuXG4gICAgdGhpcy5hbmltYXRlT3V0KCk7XG4gIH1cblxuICBjcmVhdGVPYnNlcnZlcigpIHtcbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBpblwiKTtcbiAgICAgICAgICB0aGlzLmFuaW1hdGVJbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYW5pbWF0ZSBvdXRcIik7XG4gICAgICAgICAgdGhpcy5hbmltYXRlT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBhbmltYXRlT3V0KCkge31cblxuICBhbmltYXRlSW4oKSB7fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjY1NjgwZTJmOTBjZTczNDcxMmRcIikiXSwibmFtZXMiOlsiVGl0bGUiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwic3BsaXQiLCJ0aGlzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbiIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRlSW4iLCJHU0FQIiwiZWxlbWVudExpbmVzIiwiYXV0b0FscGhhIiwieSIsImRlbGF5IiwiZHVyYXRpb24iLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJjYWxjdWxhdGUiLCJDb21wb25lbnQiLCJjcmVhdGVPYnNlcnZlciIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJjb25zb2xlIiwibG9nIiwib2JzZXJ2ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==