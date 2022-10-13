/*! For license information please see main.02b1a69d48d7db6d6775.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var a=s("./app/classes/Animation.js"),n=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class i extends a.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){n.default.set(this.element),n.default.fromTo(this.elementsLines,{autoAlpha:1,y:"100%"},{autoAlpha:1,delay:.5,duration:1.5,stagger:.1,y:"0%"})}animateOut(){n.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,l.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"30c4b930b0eba5ac0ab0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wMmIxYTY5ZDQ4ZDdkYjZkNjc3NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BSWUsTUFBTUEsVUFBY0MsRUFBQUEsUUFDakNDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUNyQkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNKSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVZGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSkgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdWRCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN4RCxDQUVEQyxZQUVFQyxFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixTQUdkUyxFQUFBQSxRQUFBQSxPQUNFTCxLQUFLTSxjQUNMLENBQ0VDLFVBQVcsRUFDWEMsRUFBRyxRQUVMLENBQ0VELFVBQVcsRUFDWEUsTUFBTyxHQUNQQyxTQUFVLElBQ1ZDLFFBQVMsR0FDVEgsRUFBRyxNQUdSLENBQ0RJLGFBQ0VQLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDckJXLFVBQVcsR0FFZCxDQUVETSxXQUNFYixLQUFLTSxlQUFnQlEsRUFBQUEsRUFBQUEsV0FBVWQsS0FBS0Usa0JBQ3JDLGtCQ2hESGEsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGxlIGV4dGVuZHMgQW5pbWF0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoeyBlbGVtZW50LCBlbGVtZW50cyB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcbiAgICAgIGFwcGVuZDogdHJ1ZSxcbiAgICB9KTtcbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRMaW5lc1NwYW5zID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuIHNwYW5cIik7XG4gIH1cblxuICBhbmltYXRlSW4oKSB7XG5cbiAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQpXG5cblxuICAgIEdTQVAuZnJvbVRvKFxuICAgICAgdGhpcy5lbGVtZW50c0xpbmVzLFxuICAgICAge1xuICAgICAgICBhdXRvQWxwaGE6IDEsXG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICBkZWxheTogMC41LFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBzdGFnZ2VyOiAwLjEsXG4gICAgICAgIHk6IFwiMCVcIixcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICBhdXRvQWxwaGE6IDAsXG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjMwYzRiOTMwYjBlYmE1YWMwYWIwXCIpIl0sIm5hbWVzIjpbIlRpdGxlIiwiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzdXBlciIsInNwbGl0IiwidGhpcyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsIkdTQVAiLCJlbGVtZW50c0xpbmVzIiwiYXV0b0FscGhhIiwieSIsImRlbGF5IiwiZHVyYXRpb24iLCJzdGFnZ2VyIiwiYW5pbWF0ZU91dCIsIm9uUmVzaXplIiwiY2FsY3VsYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9