/*! For license information please see main.af2828fb69ebc64fad95.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Paragraph.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s("./app/classes/Animation.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends a.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLineSpans=(0,i.split)({element:this.element,append:!0})}animateIn(){this.timelineIn=n.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),n.default.set(this.element,{autoAlpha:1}),l(this.elementsLines,((e,t)=>{n.default.fromTo(e,{autoAlpha:0,y:"100%"},{autoAlpha:1,delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"})}),0)}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"fbbb9cd45f8605da913e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hZjI4MjhmYjY5ZWJjNjRmYWQ5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFFBS2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDdEJDLE1BQU0sQ0FBRUYsVUFBU0MsY0FFakJFLEVBQUFBLEVBQUFBLE9BQU0sQ0FBRUgsUUFBU0ksS0FBS0osUUFBU0ssUUFBUSxLQUN2Q0YsRUFBQUEsRUFBQUEsT0FBTSxDQUFFSCxRQUFTSSxLQUFLSixRQUFTSyxRQUFRLElBRXZDRCxLQUFLRSxrQkFBbUJILEVBQUFBLEVBQUFBLE9BQU0sQ0FBRUgsUUFBU0ksS0FBS0osUUFBU0ssUUFBUSxHQUMvRCxDQUVERSxZQUNDSCxLQUFLSSxXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLE1BQU8sS0FFekNOLEtBQUtJLFdBQVdHLElBQUlQLEtBQUtKLFFBQVMsQ0FDakNZLFVBQVcsSUFHWkgsRUFBQUEsUUFBQUEsSUFBU0wsS0FBS0osUUFBUyxDQUN0QlksVUFBVyxJQUdaQyxFQUNDVCxLQUFLVSxlQUNMLENBQUNDLEVBQU1DLEtBQ05QLEVBQUFBLFFBQUFBLE9BQ0NNLEVBQ0EsQ0FDQ0gsVUFBVyxFQUNYSyxFQUFHLFFBRUosQ0FDQ0wsVUFBVyxFQUNYRixNQUFlLEdBQVJNLEVBQ1BFLFNBQVUsSUFDVkMsS0FBTSxXQUNORixFQUFHLE1BWEwsR0FlRCxFQUVELENBRURHLGFBQ0NYLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDdEJZLFVBQVcsR0FFWixDQUVEUyxXQUNDakIsS0FBS1UsZUFBZ0JRLEVBQUFBLEVBQUFBLFdBQVVsQixLQUFLbUIsa0JBQ3BDLGtCQ3hERkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvUGFyYWdyYXBoLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFncmFwaCBleHRlbmRzIEFuaW1hdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuXHRcdHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSlcblxuXHRcdHNwbGl0KHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBhcHBlbmQ6IHRydWUgfSlcblx0XHRzcGxpdCh7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYXBwZW5kOiB0cnVlIH0pXG4gICAgXG5cdFx0dGhpcy5lbGVtZW50TGluZVNwYW5zID0gc3BsaXQoeyBlbGVtZW50OiB0aGlzLmVsZW1lbnQsIGFwcGVuZDogdHJ1ZSB9KVxuXHR9XG5cblx0YW5pbWF0ZUluKCkge1xuXHRcdHRoaXMudGltZWxpbmVJbiA9IEdTQVAudGltZWxpbmUoeyBkZWxheTogMC41IH0pXG5cblx0XHR0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xuXHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdH0pXG5cblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHR9KVxuXG5cdFx0ZWFjaChcblx0XHRcdHRoaXMuZWxlbWVudHNMaW5lcyxcblx0XHRcdChsaW5lLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdFx0XHRsaW5lLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0XHRcdGRlbGF5OiBpbmRleCAqIDAuMixcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRcdFx0eTogJzAlJyxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdH0sXG5cdFx0XHQwXG5cdFx0KVxuXHR9XG5cblx0YW5pbWF0ZU91dCgpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZiYmI5Y2Q0NWY4NjA1ZGE5MTNlXCIpIl0sIm5hbWVzIjpbIlBhcmFncmFwaCIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZVNwYW5zIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsIkdTQVAiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVhY2giLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsImVsZW1lbnRMaW5lc1NwYW5zIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9