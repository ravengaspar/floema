/*! For license information please see main.527278e1e0a15c9cafb6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s("./app/classes/Animation.js"),n=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class i extends a.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpan=this.element.querySelector("span span")}animateIn(){n.default.fromTo(this.elementsLines,{autoAlpha:1,y:"100%"},{autoAlpha:0},{autoAlpha:1,delay:.5,duration:1.5,y:"0%"})}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,l.calculate)(this.elementLinesSpan)}}}},(function(e){e.h=()=>"f571f577ad47799a5d42"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MjcyNzhlMWUwYTE1YzljYWZiNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BSWUsTUFBTUEsVUFBY0MsRUFBQUEsUUFDakNDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUNyQkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNKSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVZGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSkgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdWRCxLQUFLRSxpQkFBbUJGLEtBQUtKLFFBQVFPLGNBQWMsWUFDcEQsQ0FFREMsWUFDRUMsRUFBQUEsUUFBQUEsT0FDRUwsS0FBS00sY0FDTCxDQUNFQyxVQUFXLEVBQ1hDLEVBQUcsUUFFTCxDQUNFRCxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxFQUNYRSxNQUFPLEdBQ1BDLFNBQVUsSUFDVkYsRUFBRyxNQUdSLENBQ0RHLGFBQ0VOLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDckJXLFVBQVcsR0FFZCxDQUVESyxXQUNFWixLQUFLTSxlQUFnQk8sRUFBQUEsRUFBQUEsV0FBVWIsS0FBS0UsaUJBQ3JDLGtCQzlDSFksRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4gc3BhblwiKTtcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBHU0FQLmZyb21UbyhcbiAgICAgIHRoaXMuZWxlbWVudHNMaW5lcyxcbiAgICAgIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgeTogXCIwJVwiLFxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgYW5pbWF0ZU91dCgpIHtcbiAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgIGF1dG9BbHBoYTogMCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW4pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNTcxZjU3N2FkNDc3OTlhNWQ0MlwiKSJdLCJuYW1lcyI6WyJUaXRsZSIsIkFuaW1hdGlvbiIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJzcGxpdCIsInRoaXMiLCJhcHBlbmQiLCJlbGVtZW50TGluZXNTcGFuIiwicXVlcnlTZWxlY3RvciIsImFuaW1hdGVJbiIsIkdTQVAiLCJlbGVtZW50c0xpbmVzIiwiYXV0b0FscGhhIiwieSIsImRlbGF5IiwiZHVyYXRpb24iLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJjYWxjdWxhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=