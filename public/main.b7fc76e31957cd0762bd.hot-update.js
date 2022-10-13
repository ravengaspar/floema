/*! For license information please see main.b7fc76e31957cd0762bd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/animations/Title.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./app/classes/Animation.js"),a=s("./node_modules/gsap/index.js"),l=s("./app/utils/text.js");class i extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,l.split)({element:this.element,append:!0}),(0,l.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){a.default.set(this.element,{autoAlpha:1}),each(this.elementLinesSpans),a.default.fromTo(this.elementsLines,{y:"100%"},{delay:.5,duration:1.5,stagger:{axis:"x",amount:1},y:"0%"})}animateOut(){a.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,l.calculate)(this.elementLinesSpans)}}}},(function(e){e.h=()=>"284313dcd9a640fbe343"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iN2ZjNzZlMzE5NTdjZDA3NjJiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cU9BS2UsTUFBTUEsVUFBY0MsRUFBQUEsUUFDakNDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxJQUNyQkMsTUFBTSxDQUFFRixVQUFTQyxjQUVqQkUsRUFBQUEsRUFBQUEsT0FBTSxDQUNKSCxRQUFTSSxLQUFLSixRQUNkSyxRQUFRLEtBRVZGLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSkgsUUFBU0ksS0FBS0osUUFDZEssUUFBUSxJQUdWRCxLQUFLRSxrQkFBb0JGLEtBQUtKLFFBQVFPLGlCQUFpQixZQUN4RCxDQUVEQyxZQUNFQyxFQUFBQSxRQUFBQSxJQUFTTCxLQUFLSixRQUFTLENBQ3JCVSxVQUFXLElBSWJDLEtBQUtQLEtBQUtFLG1CQUdWRyxFQUFBQSxRQUFBQSxPQUNFTCxLQUFLUSxjQUNMLENBQ0VDLEVBQUcsUUFFTCxDQUNFQyxNQUFPLEdBQ1BDLFNBQVUsSUFDVkMsUUFBUyxDQUNQQyxLQUFNLElBQ05DLE9BQVEsR0FFVkwsRUFBRyxNQUdSLENBQ0RNLGFBQ0VWLEVBQUFBLFFBQUFBLElBQVNMLEtBQUtKLFFBQVMsQ0FDckJVLFVBQVcsR0FFZCxDQUVEVSxXQUNFaEIsS0FBS1EsZUFBZ0JTLEVBQUFBLEVBQUFBLFdBQVVqQixLQUFLRSxrQkFDckMsa0JDdERIZ0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2FuaW1hdGlvbnMvVGl0bGUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgX2ZvckVhY2hOYW1lIH0gZnJvbSBcImdzYXAvZ3NhcC1jb3JlXCJcbmltcG9ydCB7IGNhbGN1bGF0ZSwgc3BsaXQgfSBmcm9tIFwidXRpbHMvdGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIEFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHN1cGVyKHsgZWxlbWVudCwgZWxlbWVudHMgfSk7XG5cbiAgICBzcGxpdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG4gICAgICBhcHBlbmQ6IHRydWUsXG4gICAgfSk7XG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxuICAgICAgYXBwZW5kOiB0cnVlLFxuICAgIH0pO1xuXG4gICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpO1xuICB9XG5cbiAgYW5pbWF0ZUluKCkge1xuICAgIEdTQVAuc2V0KHRoaXMuZWxlbWVudCwge1xuICAgICAgYXV0b0FscGhhOiAxLFxuICAgIH0pO1xuXG5cbiAgICBlYWNoKHRoaXMuZWxlbWVudExpbmVzU3BhbnMpXG5cblxuICAgIEdTQVAuZnJvbVRvKFxuICAgICAgdGhpcy5lbGVtZW50c0xpbmVzLFxuICAgICAge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgICBheGlzOiBcInhcIixcbiAgICAgICAgICBhbW91bnQ6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHk6IFwiMCVcIixcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGFuaW1hdGVPdXQoKSB7XG4gICAgR1NBUC5zZXQodGhpcy5lbGVtZW50LCB7XG4gICAgICBhdXRvQWxwaGE6IDAsXG4gICAgfSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnRzTGluZXMgPSBjYWxjdWxhdGUodGhpcy5lbGVtZW50TGluZXNTcGFucyk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4NDMxM2RjZDlhNjQwZmJlMzQzXCIpIl0sIm5hbWVzIjpbIlRpdGxlIiwiQW5pbWF0aW9uIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzdXBlciIsInNwbGl0IiwidGhpcyIsImFwcGVuZCIsImVsZW1lbnRMaW5lc1NwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImFuaW1hdGVJbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJlYWNoIiwiZWxlbWVudHNMaW5lcyIsInkiLCJkZWxheSIsImR1cmF0aW9uIiwic3RhZ2dlciIsImF4aXMiLCJhbW91bnQiLCJhbmltYXRlT3V0Iiwib25SZXNpemUiLCJjYWxjdWxhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=