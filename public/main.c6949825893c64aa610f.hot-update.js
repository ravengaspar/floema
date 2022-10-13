/*! For license information please see main.c6949825893c64aa610f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s("./node_modules/normalize-wheel/index.js"),o=(s("./app/animations/Title.js"),s("./node_modules/console-browserify/index.js"));class a{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]'},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=r(e);this.scroll.target+=t,o.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"0065f77467f7009cf0b0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jNjk0OTgyNTg5M2M2NGFhNjEwZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVhBT2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosRUFDSEssaUJBQWtCLDRCQUVwQkgsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0ksa0JBQW9CSixLQUFLSyxhQUFhQyxLQUFLTixNQUNoREEsS0FBS08sZ0JBQWtCQyxFQUFPLFlBQy9CLENBRURDLFNBQ0VULEtBQUtILFFBQVVhLFNBQVNDLGNBQWNYLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtZLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxFQUFLakIsS0FBS0Usa0JBQWtCLENBQUNnQixFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRsQixLQUFLRixTQUFTcUIsR0FBT0QsR0FFckJsQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU2UsaUJBQWlCUCxHQUViLElBQTlCbEIsS0FBS0YsU0FBU3FCLEdBQUtPLE9BQ3JCMUIsS0FBS0YsU0FBU3FCLEdBQU8sS0FDa0IsSUFBOUJuQixLQUFLRixTQUFTcUIsR0FBS08sU0FDNUIxQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU0MsY0FBY08sSUFFL0MsR0FPSixDQUVEUyxPQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEI3QixLQUFLOEIsWUFBY0MsRUFBQUEsUUFBQUEsV0FDbkJBLEVBQUFBLFFBQUFBLE9BQ0UvQixLQUFLSCxRQUNMLENBQ0VtQyxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxJQUlmaEMsS0FBSzhCLFlBQVlHLE1BQU1DLElBQ2ZsQyxLQUFLbUMsb0JBQ1hOLEdBQVMsR0FGWCxHQUtILENBRURPLE9BQ0UsT0FBTyxJQUFJUixTQUFTQyxJQUNsQlEsNkJBQ0FyQyxLQUFLc0MsYUFBZVAsRUFBQUEsUUFBQUEsV0FFcEJBLEVBQUFBLFFBQUFBLEdBQVEvQixLQUFLSCxRQUFTLENBQ3BCbUMsVUFBVyxFQUNYTyxXQUFZVixHQUZkLEdBS0gsQ0FFRHhCLGFBQWFtQyxHQUNYLE1BQU0sT0FBRUMsR0FBV0MsRUFBZUYsR0FDbEN4QyxLQUFLWSxPQUFPRSxRQUFVMkIsRUFDdEJFLEVBQVFDLElBQUlILEVBQ2IsQ0FFREksV0FDTTdDLEtBQUtGLFNBQVNnRCxVQUNoQjlDLEtBQUtZLE9BQU9JLE1BQ1ZoQixLQUFLRixTQUFTZ0QsUUFBUUMsYUFBZTNCLE9BQU80QixZQUNqRCxDQUlEQyxTQUNFakQsS0FBS1ksT0FBT0UsT0FBU2lCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQ25CLEVBQ0EvQixLQUFLWSxPQUFPSSxNQUNaaEIsS0FBS1ksT0FBT0UsUUFHZGQsS0FBS1ksT0FBT0MsUUFBVWtCLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3BCL0IsS0FBS1ksT0FBT0MsUUFDWmIsS0FBS1ksT0FBT0UsT0FDWixJQUdFZCxLQUFLWSxPQUFPQyxRQUFVLE1BQ3hCYixLQUFLWSxPQUFPQyxRQUFVLEdBR3BCYixLQUFLRixTQUFTZ0QsVUFDaEI5QyxLQUFLRixTQUFTZ0QsUUFBUUksTUFDcEJsRCxLQUFLTyxpQkFDRixlQUFjUCxLQUFLWSxPQUFPQyxhQUNsQyxDQUdEc0Isb0JBQ0VmLE9BQU8rQixpQkFBaUIsYUFBY25ELEtBQUtJLGtCQUM1QyxDQUVEZ0QsdUJBQ0VDLDRCQUE0QixhQUFjckQsS0FBS0ksa0JBQ2hELGtCQ25JSGtELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiO1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gXCJub3JtYWxpemUtd2hlZWxcIjtcblxuaW1wb3J0IFRpdGxlIGZyb20gXCJhbmltYXRpb25zL1RpdGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuICAgICAgLi4uZWxlbWVudHMsXG4gICAgICBhbmltYXRpb25zVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nLFxuICAgIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcyk7XG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIFxuXG5cblxuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzTmFOcHhvdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xuICAgIGNvbnNvbGUubG9nKHBpeGVsWSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgLyogTG9vcCAqL1xuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xuICB9XG5cbiAgLyogTGlzdGVuZXJzICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvd05hTnB4b3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAwNjVmNzc0NjdmNzAwOWNmMGIwXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInRoaXNOYU5weG92ZUV2ZW50TGlzdGVuZXJzIiwiYW5pbWF0aW9uT3V0Iiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwiTm9ybWFsaXplV2hlZWwiLCJjb25zb2xlIiwibG9nIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIndpbmRvd05hTnB4b3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==