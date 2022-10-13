/*! For license information please see main.bbe66a9cb9168f010b05.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var n=s("./app/classes/Animation.js"),a=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){a.default.set(this.element,{autoAlpha:1}),l(this.elementLines,((e,t)=>{a.default.fromTo(this.elementsLines,{y:"100%"},{delay:.5+.2*t,duration:1.5,y:"0%"})}))}animateOut(){a.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"ece49d69d842a79488cf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iYmU2NmE5Y2I5MTY4ZjAxMGIwNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFFBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUN0QkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNMSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVRGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDTEgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdURCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN2RCxDQUVEQyxZQUNDQyxFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixRQUFTLENBQ3RCVSxVQUFXLElBR1pDLEVBQUtQLEtBQUtRLGNBQWMsQ0FBQ0MsRUFBTUMsS0FDOUJMLEVBQUFBLFFBQUFBLE9BQ0NMLEtBQUtXLGNBQ0wsQ0FDQ0MsRUFBRyxRQUVKLENBQ0NDLE1BQU8sR0FBYyxHQUFSSCxFQUNiSSxTQUFVLElBQ1ZGLEVBQUcsTUFSTCxHQVlELENBQ0RHLGFBQ0NWLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDdEJVLFVBQVcsR0FFWixDQUVEVSxXQUNDaEIsS0FBS1csZUFBZ0JNLEVBQUFBLEVBQUFBLFdBQVVqQixLQUFLRSxrQkFDcEMsa0JDaERGZ0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSAnY2xhc3Nlcy9BbmltYXRpb24nXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pXG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblx0fVxuXG5cdGFuaW1hdGVJbigpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHR9KSxcblxuXHRcdGVhY2godGhpcy5lbGVtZW50TGluZXMsIChsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudHNMaW5lcyxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGRlbGF5OiAwLjUgKyBpbmRleCAqIDAuMixcblx0XHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRcdHk6ICcwJScsXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHR9KVxuXHR9XG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0fSlcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlY2U0OWQ2OWQ4NDJhNzk0ODhjZlwiKSJdLCJuYW1lcyI6WyJUaXRsZSIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbmltYXRlSW4iLCJHU0FQIiwiYXV0b0FscGhhIiwiZWFjaCIsImVsZW1lbnRMaW5lcyIsImxpbmUiLCJpbmRleCIsImVsZW1lbnRzTGluZXMiLCJ5IiwiZGVsYXkiLCJkdXJhdGlvbiIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==