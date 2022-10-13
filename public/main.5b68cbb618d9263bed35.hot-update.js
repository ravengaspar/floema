/*! For license information please see main.5b68cbb618d9263bed35.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Navigation.js":(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});var s=a("./node_modules/gsap/index.js"),o=a("./app/classes/Component.js"),i=a("./app/utils/colors.js");class l extends o.default{constructor({template:t}){super({element:".navigation",elements:{items:".navigation__list__item",links:".navigation__list__link"}}),this.onChange(t)}onChange(t){"about"===t?(s.default.to(this.element,{autoAlpha:1,color:i.COLOR_BRIGHT_GRAY,duration:1.5}),s.default.to(this.elements.items[0],{autoAlpha:1,duration:.75}),s.default.to(this.elements.items[1],{autoAlpha:0})):(s.default.to(this.element,{autoAlpha:1,color:i.COLOR_QUARTER_SPANISH_WHITE,duration:1.5}),s.default.to(this.elements.items[0],{autoAlpha:0}),s.default.to(this.elements.items[1],{autoAlpha:1}))}}}},(function(t){t.h=()=>"8d500378df3da7573226"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YjY4Y2JiNjE4ZDkyNjNiZWQzNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NE9BS2UsTUFBTUEsVUFBbUJDLEVBQUFBLFFBQ3ZDQyxhQUFZLFNBQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxjQUNUQyxTQUFVLENBQ1RDLE1BQU8sMEJBQ1BDLE1BQU8sNkJBSVRDLEtBQUtDLFNBQVNQLEVBQ2QsQ0FFRE8sU0FBU1AsR0FDUyxVQUFiQSxHQUNIUSxFQUFBQSxRQUFBQSxHQUFRRixLQUFLSixRQUFTLENBQ3JCTyxVQUFXLEVBQ1hDLE1BQU9DLEVBQUFBLGtCQUNQQyxTQUFVLE1BR1hKLEVBQUFBLFFBQUFBLEdBQVFGLEtBQUtILFNBQVNDLE1BQU0sR0FBSSxDQUMvQkssVUFBVyxFQUNYRyxTQUFVLE1BRVhKLEVBQUFBLFFBQUFBLEdBQVFGLEtBQUtILFNBQVNDLE1BQU0sR0FBSSxDQUMvQkssVUFBVyxNQUdaRCxFQUFBQSxRQUFBQSxHQUFRRixLQUFLSixRQUFTLENBQ3JCTyxVQUFXLEVBQ1hDLE1BQU9HLEVBQUFBLDRCQUNQRCxTQUFVLE1BR1hKLEVBQUFBLFFBQUFBLEdBQVFGLEtBQUtILFNBQVNDLE1BQU0sR0FBSSxDQUMvQkssVUFBVyxJQUVaRCxFQUFBQSxRQUFBQSxHQUFRRixLQUFLSCxTQUFTQyxNQUFNLEdBQUksQ0FDL0JLLFVBQVcsSUFHYixrQkMvQ0ZLLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuXG5pbXBvcnQgeyBDT0xPUl9CUklHSFRfR1JBWSwgQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFIH0gZnJvbSAndXRpbHMvY29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoeyB0ZW1wbGF0ZSB9KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZWxlbWVudDogJy5uYXZpZ2F0aW9uJyxcblx0XHRcdGVsZW1lbnRzOiB7XG5cdFx0XHRcdGl0ZW1zOiAnLm5hdmlnYXRpb25fX2xpc3RfX2l0ZW0nLFxuXHRcdFx0XHRsaW5rczogJy5uYXZpZ2F0aW9uX19saXN0X19saW5rJyxcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHRoaXMub25DaGFuZ2UodGVtcGxhdGUpXG5cdH1cblxuXHRvbkNoYW5nZSh0ZW1wbGF0ZSkge1xuXHRcdGlmICh0ZW1wbGF0ZSA9PT0gJ2Fib3V0Jykge1xuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHRjb2xvcjogQ09MT1JfQlJJR0hUX0dSQVksXG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHR9KVxuXG5cdFx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudHMuaXRlbXNbMF0sIHtcblx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHRkdXJhdGlvbjogMC43NSxcblx0XHRcdH0pXG5cdFx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudHMuaXRlbXNbMV0sIHtcblx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHRjb2xvcjogQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFLFxuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0fSlcblxuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnRzLml0ZW1zWzBdLCB7XG5cdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdH0pXG5cdFx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudHMuaXRlbXNbMV0sIHtcblx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhkNTAwMzc4ZGYzZGE3NTczMjI2XCIpIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInRlbXBsYXRlIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpdGVtcyIsImxpbmtzIiwidGhpcyIsIm9uQ2hhbmdlIiwiR1NBUCIsImF1dG9BbHBoYSIsImNvbG9yIiwiQ09MT1JfQlJJR0hUX0dSQVkiLCJkdXJhdGlvbiIsIkNPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==