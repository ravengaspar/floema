/*! For license information please see main.19724393881515f797ef.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Label.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s("./app/classes/Animation.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/lodash/each.js"),i=s("./app/utils/text.js");class m extends a.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,i.split)({element:this.element,append:!0}),(0,i.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timelineIn=n.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),n.default.set(this.element,{autoAlpha:1}),l(this.elementsLines,((e,t)=>{n.default.fromTo(e,{autoAlpha:0,y:"100%"},{autoAlpha:1,delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"})}),0)}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,i.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"bac69afcdb4418ea6ec2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xOTcyNDM5Mzg4MTUxNWY3OTdlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFFBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUN0QkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUFFSCxRQUFTSSxLQUFLSixRQUFTSyxRQUFRLEtBQ3ZDRixFQUFBQSxFQUFBQSxPQUFNLENBQUVILFFBQVNJLEtBQUtKLFFBQVNLLFFBQVEsSUFFdkNELEtBQUtFLGtCQUFvQkYsS0FBS0osUUFBUU8saUJBQWlCLFlBQ3ZELENBRURDLFlBQ0NKLEtBQUtLLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FBRUMsTUFBTyxLQUV6Q1AsS0FBS0ssV0FBV0csSUFBSVIsS0FBS0osUUFBUyxDQUNqQ2EsVUFBVyxJQUdaSCxFQUFBQSxRQUFBQSxJQUFTTixLQUFLSixRQUFTLENBQ3RCYSxVQUFXLElBR1pDLEVBQ0NWLEtBQUtXLGVBQ0wsQ0FBQ0MsRUFBTUMsS0FDTlAsRUFBQUEsUUFBQUEsT0FDQ00sRUFDQSxDQUNDSCxVQUFXLEVBQ1hLLEVBQUcsUUFFSixDQUNDTCxVQUFXLEVBQ1hGLE1BQWUsR0FBUk0sRUFDUEUsU0FBVSxJQUNWQyxLQUFNLFdBQ05GLEVBQUcsTUFYTCxHQWVELEVBRUQsQ0FFREcsYUFDQ1gsRUFBQUEsUUFBQUEsSUFBU04sS0FBS0osUUFBUyxDQUN0QmEsVUFBVyxHQUVaLENBRURTLFdBQ0NsQixLQUFLVyxlQUFnQlEsRUFBQUEsRUFBQUEsV0FBVW5CLEtBQUtFLGtCQUNwQyxrQkN4REZrQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvYW5pbWF0aW9ucy9MYWJlbC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbidcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYWJlbCBleHRlbmRzIEFuaW1hdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuXHRcdHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSlcblxuXHRcdHNwbGl0KHsgZWxlbWVudDogdGhpcy5lbGVtZW50LCBhcHBlbmQ6IHRydWUgfSlcblx0XHRzcGxpdCh7IGVsZW1lbnQ6IHRoaXMuZWxlbWVudCwgYXBwZW5kOiB0cnVlIH0pXG5cblx0XHR0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG5cdH1cblxuXHRhbmltYXRlSW4oKSB7XG5cdFx0dGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7IGRlbGF5OiAwLjUgfSlcblxuXHRcdHRoaXMudGltZWxpbmVJbi5zZXQodGhpcy5lbGVtZW50LCB7XG5cdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0fSlcblxuXHRcdEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuXHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdH0pXG5cblx0XHRlYWNoKFxuXHRcdFx0dGhpcy5lbGVtZW50c0xpbmVzLFxuXHRcdFx0KGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0XHRcdGxpbmUsXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRcdFx0eTogJzEwMCUnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHRcdFx0ZGVsYXk6IGluZGV4ICogMC4yLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdFx0XHR5OiAnMCUnLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0fSxcblx0XHRcdDBcblx0XHQpXG5cdH1cblxuXHRhbmltYXRlT3V0KCkge1xuXHRcdEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuXHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucylcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmFjNjlhZmNkYjQ0MThlYTZlYzJcIikiXSwibmFtZXMiOlsiTGFiZWwiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwic3BsaXQiLCJ0aGlzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsIkdTQVAiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVhY2giLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==