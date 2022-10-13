/*! For license information please see main.449bb32ec34125805dc3.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n=s("./app/classes/Animation.js"),l=s("./node_modules/gsap/index.js"),a=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timelineIn=l.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),l.default.set(this.element,{autoAlpha:1}),a(this.elementsLines,((e,t)=>{l.default.fromTo(e,{y:"100%"},{delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"},0)}))}animateOut(){l.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"3bb39e80fef58fdd234a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40NDliYjMyZWMzNDEyNTgwNWRjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFFBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUN0QkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNMSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVRGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDTEgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdURCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN2RCxDQUVEQyxZQUNDSixLQUFLSyxXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLE1BQU8sS0FFekNQLEtBQUtLLFdBQVdHLElBQUlSLEtBQUtKLFFBQVMsQ0FDakNhLFVBQVcsSUFHWkgsRUFBQUEsUUFBQUEsSUFBU04sS0FBS0osUUFBUyxDQUN0QmEsVUFBVyxJQUdaQyxFQUFLVixLQUFLVyxlQUFlLENBQUNDLEVBQU1DLEtBQy9CUCxFQUFBQSxRQUFBQSxPQUNDTSxFQUNBLENBQ0NFLEVBQUcsUUFFSixDQUNDUCxNQUFlLEdBQVJNLEVBQ1BFLFNBQVUsSUFDVkMsS0FBTSxXQUNORixFQUFHLE1BRUosRUFYRCxHQWNELENBRURHLGFBQ0NYLEVBQUFBLFFBQUFBLElBQVNOLEtBQUtKLFFBQVMsQ0FDdEJhLFVBQVcsR0FFWixDQUVEUyxXQUNDbEIsS0FBS1csZUFBZ0JRLEVBQUFBLEVBQUFBLFdBQVVuQixLQUFLRSxrQkFDcEMsa0JDekRGa0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pXG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblx0fVxuXG5cdGFuaW1hdGVJbigpIHtcblx0XHR0aGlzLnRpbWVsaW5lSW4gPSBHU0FQLnRpbWVsaW5lKHsgZGVsYXk6IDAuNSB9KVxuXG5cdFx0dGhpcy50aW1lbGluZUluLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHR9KVxuXG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0fSlcblxuXHRcdGVhY2godGhpcy5lbGVtZW50c0xpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcblx0XHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0XHRsaW5lLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eTogJzEwMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGVsYXk6IGluZGV4ICogMC4yLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHR5OiAnMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQwXG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0fSlcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzYmIzOWU4MGZlZjU4ZmRkMjM0YVwiKSJdLCJuYW1lcyI6WyJUaXRsZSIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmltYXRlSW4iLCJ0aW1lbGluZUluIiwiR1NBUCIsImRlbGF5Iiwic2V0IiwiYXV0b0FscGhhIiwiZWFjaCIsImVsZW1lbnRzTGluZXMiLCJsaW5lIiwiaW5kZXgiLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIiwiY2FsY3VsYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9