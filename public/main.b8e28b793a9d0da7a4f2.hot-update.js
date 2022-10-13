/*! For license information please see main.b8e28b793a9d0da7a4f2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/animations/Paragraph.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a("./app/classes/Animation.js"),s=a("./node_modules/gsap/index.js"),l=a("./app/utils/text.js");class i extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timelineIn=s.default.timeline({delay:.5}),this.timelineIn.to(this.element,{autoAlpha:1,duration:1})}animateOut(){s.default.set(this.element,{autoAlpha:0})}}}},(function(e){e.h=()=>"9421b26c3318a32ed0ad"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iOGUyOGI3OTNhOWQwZGE3YTRmMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OE5BTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDdEJDLE1BQU0sQ0FBRUYsVUFBU0MsY0FFakJFLEVBQUFBLEVBQUFBLE9BQU0sQ0FBRUgsUUFBU0ksS0FBS0osUUFBU0ssUUFBUSxLQUN2Q0YsRUFBQUEsRUFBQUEsT0FBTSxDQUFFSCxRQUFTSSxLQUFLSixRQUFTSyxRQUFRLElBRXZDRCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN2RCxDQUVEQyxZQUNDSixLQUFLSyxXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQUVDLE1BQU8sS0FFekNQLEtBQUtLLFdBQVdHLEdBQUdSLEtBQUtKLFFBQVMsQ0FDaENhLFVBQVcsRUFDWEMsU0FBVSxHQUVYLENBRURDLGFBQ0NMLEVBQUFBLFFBQUFBLElBQVNOLEtBQUtKLFFBQVMsQ0FDdEJhLFVBQVcsR0FFWixrQkM3QkZHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvYW5pbWF0aW9ucy9QYXJhZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQW5pbWF0aW9uIGZyb20gJ2NsYXNzZXMvQW5pbWF0aW9uJ1xuXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYWdyYXBoIGV4dGVuZHMgQW5pbWF0aW9uIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG5cdFx0c3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KVxuXG5cdFx0c3BsaXQoeyBlbGVtZW50OiB0aGlzLmVsZW1lbnQsIGFwcGVuZDogdHJ1ZSB9KVxuXHRcdHNwbGl0KHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBhcHBlbmQ6IHRydWUgfSlcblxuXHRcdHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblx0fVxuXG5cdGFuaW1hdGVJbigpIHtcblx0XHR0aGlzLnRpbWVsaW5lSW4gPSBHU0FQLnRpbWVsaW5lKHsgZGVsYXk6IDAuNSB9KVxuXG5cdFx0dGhpcy50aW1lbGluZUluLnRvKHRoaXMuZWxlbWVudCwge1xuXHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0ZHVyYXRpb246IDEsXG5cdFx0fSlcblx0fVxuXG5cdGFuaW1hdGVPdXQoKSB7XG5cdFx0R1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0fSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTQyMWIyNmMzMzE4YTMyZWQwYWRcIikiXSwibmFtZXMiOlsiUGFyYWdyYXBoIiwiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzdXBlciIsInNwbGl0IiwidGhpcyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsInRpbWVsaW5lSW4iLCJHU0FQIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiYW5pbWF0ZU91dCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==