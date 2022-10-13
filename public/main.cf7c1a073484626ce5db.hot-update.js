/*! For license information please see main.cf7c1a073484626ce5db.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n=s("./app/classes/Animation.js"),a=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timeline=a.default.timeline(),a.default.set(this.element,{autoAlpha:1}),l(this.elementsLines,((e,t)=>{a.default.fromTo(e,{y:"100%"},{delay:.5+.2*t,duration:1.5,ease:"expo.out",y:"0%"})}))}animateOut(){a.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"d506aef85b4eea39c269"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZjdjMWEwNzM0ODQ2MjZjZTVkYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFFBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUN0QkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNMSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVRGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDTEgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdURCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN2RCxDQUVEQyxZQUVHSixLQUFLSyxTQUFXQyxFQUFBQSxRQUFBQSxXQUdsQkEsRUFBQUEsUUFBQUEsSUFBU04sS0FBS0osUUFBUyxDQUN0QlcsVUFBVyxJQUdaQyxFQUFLUixLQUFLUyxlQUFlLENBQUNDLEVBQU1DLEtBQy9CTCxFQUFBQSxRQUFBQSxPQUNDSSxFQUNBLENBQ0NFLEVBQUcsUUFFSixDQUNDQyxNQUFPLEdBQWMsR0FBUkYsRUFDYkcsU0FBVSxJQUNWQyxLQUFNLFdBQ05ILEVBQUcsTUFUTCxHQWFELENBRURJLGFBQ0NWLEVBQUFBLFFBQUFBLElBQVNOLEtBQUtKLFFBQVMsQ0FDdEJXLFVBQVcsR0FFWixDQUVEVSxXQUNDakIsS0FBS1MsZUFBZ0JTLEVBQUFBLEVBQUFBLFdBQVVsQixLQUFLRSxrQkFDcEMsa0JDdERGaUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pXG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblx0fVxuXG5cdGFuaW1hdGVJbigpIHtcblxuICAgIHRoaXMudGltZWxpbmUgPSBHU0FQLnRpbWVsaW5lKClcblxuXG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0fSlcblxuXHRcdGVhY2godGhpcy5lbGVtZW50c0xpbmVzLCAobGluZSwgaW5kZXgpID0+IHtcblx0XHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0XHRsaW5lLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eTogJzEwMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGVsYXk6IDAuNSArIGluZGV4ICogMC4yLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHR5OiAnMCUnLFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0fSlcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNTA2YWVmODViNGVlYTM5YzI2OVwiKSJdLCJuYW1lcyI6WyJUaXRsZSIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmltYXRlSW4iLCJ0aW1lbGluZSIsIkdTQVAiLCJhdXRvQWxwaGEiLCJlYWNoIiwiZWxlbWVudHNMaW5lcyIsImxpbmUiLCJpbmRleCIsInkiLCJkZWxheSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==