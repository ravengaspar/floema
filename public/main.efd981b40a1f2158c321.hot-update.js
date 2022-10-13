/*! For license information please see main.efd981b40a1f2158c321.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a("./app/classes/Animation.js"),n=a("./node_modules/gsap/index.js"),l=a("./app/utils/text.js");class i extends s.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpan=this.element.querySelector("span span")}animateIn(){n.default.fromTo(this.elementLines,{autoAlpha:0},{autoAlpha:1,delay:.5,duration:1.5})}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementLines=(0,l.calculate)(this.elementLinesSpan)}}}},(function(e){e.h=()=>"fa111f0b8a2e40aa4c6e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZmQ5ODFiNDBhMWYyMTU4YzMyMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BSWUsTUFBTUEsVUFBY0MsRUFBQUEsUUFDakNDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUNyQkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNKSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVZGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSkgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdWRCxLQUFLRSxpQkFBbUJGLEtBQUtKLFFBQVFPLGNBQWMsWUFDcEQsQ0FFREMsWUFDRUMsRUFBQUEsUUFBQUEsT0FDRUwsS0FBS00sYUFDTCxDQUNFQyxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxFQUNYQyxNQUFPLEdBQ1BDLFNBQVUsS0FHZixDQUNEQyxhQUNFTCxFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixRQUFTLENBQ3JCVyxVQUFXLEdBRWQsQ0FFREksV0FDRVgsS0FBS00sY0FBZU0sRUFBQUEsRUFBQUEsV0FBVVosS0FBS0UsaUJBQ3BDLGtCQ3pDSFcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW4gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcInNwYW4gc3BhblwiKTtcbiAgfVxuXG4gIGFuaW1hdGVJbigpIHtcbiAgICBHU0FQLmZyb21UbyhcbiAgICAgIHRoaXMuZWxlbWVudExpbmVzLFxuICAgICAge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBhbmltYXRlT3V0KCkge1xuICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAwLFxuICAgIH0pO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5lbGVtZW50TGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFuKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZmExMTFmMGI4YTJlNDBhYTRjNmVcIikiXSwibmFtZXMiOlsiVGl0bGUiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwic3BsaXQiLCJ0aGlzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbiIsInF1ZXJ5U2VsZWN0b3IiLCJhbmltYXRlSW4iLCJHU0FQIiwiZWxlbWVudExpbmVzIiwiYXV0b0FscGhhIiwiZGVsYXkiLCJkdXJhdGlvbiIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==