/*! For license information please see main.fbbb9cd45f8605da913e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Paragraph.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s("./app/classes/Animation.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends a.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpans=(0,i.split)({element:this.element,append:!0})}animateIn(){this.timelineIn=n.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),n.default.set(this.element,{autoAlpha:1}),l(this.elementsLines,((e,t)=>{n.default.fromTo(e,{autoAlpha:0,y:"100%"},{autoAlpha:1,delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"})}),0)}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"1149e62587368a3e22c9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYmJiOWNkNDVmODYwNWRhOTEzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDdEJDLE1BQU0sQ0FBRUYsVUFBU0MsY0FFakJFLEVBQUFBLEVBQUFBLE9BQU0sQ0FBRUgsUUFBU0ksS0FBS0osUUFBU0ssUUFBUSxLQUN2Q0YsRUFBQUEsRUFBQUEsT0FBTSxDQUFFSCxRQUFTSSxLQUFLSixRQUFTSyxRQUFRLElBRXZDRCxLQUFLRSxtQkFBb0JILEVBQUFBLEVBQUFBLE9BQU0sQ0FBRUgsUUFBU0ksS0FBS0osUUFBU0ssUUFBUSxHQUNoRSxDQUVERSxZQUNDSCxLQUFLSSxXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLE1BQU8sS0FFekNOLEtBQUtJLFdBQVdHLElBQUlQLEtBQUtKLFFBQVMsQ0FDakNZLFVBQVcsSUFHWkgsRUFBQUEsUUFBQUEsSUFBU0wsS0FBS0osUUFBUyxDQUN0QlksVUFBVyxJQUdaQyxFQUNDVCxLQUFLVSxlQUNMLENBQUNDLEVBQU1DLEtBQ05QLEVBQUFBLFFBQUFBLE9BQ0NNLEVBQ0EsQ0FDQ0gsVUFBVyxFQUNYSyxFQUFHLFFBRUosQ0FDQ0wsVUFBVyxFQUNYRixNQUFlLEdBQVJNLEVBQ1BFLFNBQVUsSUFDVkMsS0FBTSxXQUNORixFQUFHLE1BWEwsR0FlRCxFQUVELENBRURHLGFBQ0NYLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDdEJZLFVBQVcsR0FFWixDQUVEUyxXQUNDakIsS0FBS1UsZUFBZ0JRLEVBQUFBLEVBQUFBLFdBQVVsQixLQUFLRSxrQkFDcEMsa0JDeERGaUIsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIEFuaW1hdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuXHRcdHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSlcblxuXHRcdHNwbGl0KHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBhcHBlbmQ6IHRydWUgfSlcblx0XHRzcGxpdCh7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYXBwZW5kOiB0cnVlIH0pXG5cblx0XHR0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gc3BsaXQoeyBlbGVtZW50OiB0aGlzLmVsZW1lbnQsIGFwcGVuZDogdHJ1ZSB9KVxuXHR9XG5cblx0YW5pbWF0ZUluKCkge1xuXHRcdHRoaXMudGltZWxpbmVJbiA9IEdTQVAudGltZWxpbmUoeyBkZWxheTogMC41IH0pXG5cblx0XHR0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xuXHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdH0pXG5cblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHR9KVxuXG5cdFx0ZWFjaChcblx0XHRcdHRoaXMuZWxlbWVudHNMaW5lcyxcblx0XHRcdChsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdFx0XHRsaW5lLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMixcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRcdFx0eTogJzAlJyxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH0sXG5cdFx0XHQwXG5cdFx0KVxuXHR9XG5cblx0YW5pbWF0ZU91dCgpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjExNDllNjI1ODczNjhhM2UyMmM5XCIpIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFucyIsImFuaW1hdGVJbiIsInRpbWVsaW5lSW4iLCJHU0FQIiwiZGVsYXkiLCJzZXQiLCJhdXRvQWxwaGEiLCJlYWNoIiwiZWxlbWVudHNMaW5lcyIsImxpbmUiLCJpbmRleCIsInkiLCJkdXJhdGlvbiIsImVhc2UiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJjYWxjdWxhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=