/*! For license information please see main.ab380bde8316cfe81195.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n("./app/classes/Animation.js"),a=n("./node_modules/gsap/index.js");Object(function(){var e=new Error("Cannot find module ''");throw e.code="MODULE_NOT_FOUND",e}());var l=n("./app/utils/text.js");class i extends s.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){a.default.set(this.element,{autoAlpha:1}),Object(function(){var e=new Error("Cannot find module ''");throw e.code="MODULE_NOT_FOUND",e}())(this.elementLines,((e,t)=>{a.default.fromTo(this.elementsLines,{y:"100%"},{delay:.5+.1*t,duration:1.5,y:"0%"})}))}animateOut(){a.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,l.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"8035e0046d64e978c4fe"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYjM4MGJkZTgzMTZjZmU4MTE5NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFVBS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDbENDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUN0QkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNMSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVRGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDTEgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdURCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN2RCxDQUVEQyxZQUNDQyxFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixRQUFTLENBQ3RCVSxVQUFXLElBR1pDLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLHlCQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsR0FBQUEsQ0FBS1AsS0FBS1EsY0FBYyxDQUFDQyxFQUFNQyxLQUM5QkwsRUFBQUEsUUFBQUEsT0FDQ0wsS0FBS1csY0FDTCxDQUNDQyxFQUFHLFFBRUosQ0FDQ0MsTUFBTyxHQUFjLEdBQVJILEVBQ2JJLFNBQVUsSUFDVkYsRUFBRyxNQVJMLEdBWUQsQ0FDREcsYUFDQ1YsRUFBQUEsUUFBQUEsSUFBU0wsS0FBS0osUUFBUyxDQUN0QlUsVUFBVyxHQUVaLENBRURVLFdBQ0NoQixLQUFLVyxlQUFnQk0sRUFBQUEsRUFBQUEsV0FBVWpCLEtBQUtFLGtCQUNwQyxrQkNoREZnQixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvYW5pbWF0aW9ucy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFuaW1hdGlvbiBmcm9tICdjbGFzc2VzL0FuaW1hdGlvbidcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgZWFjaCBmcm9tICcnXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pIHtcblx0XHRzdXBlcih7IGVsZW1lbnQsIGVsZW1lbnRzIH0pXG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRhcHBlbmQ6IHRydWUsXG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudExpbmVzU3BhbnMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblx0fVxuXG5cdGFuaW1hdGVJbigpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHR9KVxuXG5cdFx0ZWFjaCh0aGlzLmVsZW1lbnRMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XG5cdFx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdFx0dGhpcy5lbGVtZW50c0xpbmVzLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0eTogJzEwMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZGVsYXk6IDAuNSArIGluZGV4ICogMC4xLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0eTogJzAlJyxcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH0pXG5cdH1cblx0YW5pbWF0ZU91dCgpIHtcblx0XHRHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0dGhpcy5lbGVtZW50c0xpbmVzID0gY2FsY3VsYXRlKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjgwMzVlMDA0NmQ2NGU5NzhjNGZlXCIpIl0sIm5hbWVzIjpbIlRpdGxlIiwiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzdXBlciIsInNwbGl0IiwidGhpcyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJlYWNoIiwiZWxlbWVudExpbmVzIiwibGluZSIsImluZGV4IiwiZWxlbWVudHNMaW5lcyIsInkiLCJkZWxheSIsImR1cmF0aW9uIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIiwiY2FsY3VsYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9