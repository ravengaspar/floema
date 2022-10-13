/*! For license information please see main.0caa598178584b089bdf.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>a});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s("./node_modules/normalize-wheel/index.js"),o=(s("./app/animations/Title.js"),s("./node_modules/console-browserify/index.js"));class a{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]'},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}show(){return new Promise((e=>{this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=r(e);this.scroll.target+=t,o.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"a3c56a2d8651080424a8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wY2FhNTk4MTc4NTg0YjA4OWJkZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVhBT2UsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUNuQkosRUFDSEssaUJBQWtCLDRCQUVwQkgsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0ksa0JBQW9CSixLQUFLSyxhQUFhQyxLQUFLTixNQUNoREEsS0FBS08sZ0JBQWtCQyxFQUFPLFlBQy9CLENBRURDLFNBQ0VULEtBQUtILFFBQVVhLFNBQVNDLGNBQWNYLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtZLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxFQUFLakIsS0FBS0Usa0JBQWtCLENBQUNnQixFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRsQixLQUFLRixTQUFTcUIsR0FBT0QsR0FFckJsQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU2UsaUJBQWlCUCxHQUViLElBQTlCbEIsS0FBS0YsU0FBU3FCLEdBQUtPLE9BQ3JCMUIsS0FBS0YsU0FBU3FCLEdBQU8sS0FDa0IsSUFBOUJuQixLQUFLRixTQUFTcUIsR0FBS08sU0FDNUIxQixLQUFLRixTQUFTcUIsR0FBT1QsU0FBU0MsY0FBY08sSUFFL0MsSUFHSGxCLEtBQUsyQixrQkFDTixDQUVEQyxPQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEI5QixLQUFLK0IsWUFBY0MsRUFBQUEsUUFBQUEsV0FDbkJBLEVBQUFBLFFBQUFBLE9BQ0VoQyxLQUFLSCxRQUNMLENBQ0VvQyxVQUFXLEdBRWIsQ0FDRUEsVUFBVyxJQUlmakMsS0FBSytCLFlBQVlHLE1BQU1DLElBQ2ZuQyxLQUFLb0Msb0JBQ1hOLEdBQVMsR0FGWCxHQUtILENBRURPLE9BQ0UsT0FBTyxJQUFJUixTQUFTQyxJQUNsQlEsNkJBQ0F0QyxLQUFLdUMsYUFBZVAsRUFBQUEsUUFBQUEsV0FFcEJBLEVBQUFBLFFBQUFBLEdBQVFoQyxLQUFLSCxRQUFTLENBQ3BCb0MsVUFBVyxFQUNYTyxXQUFZVixHQUZkLEdBS0gsQ0FFRHpCLGFBQWFvQyxHQUNYLE1BQU0sT0FBRUMsR0FBV0MsRUFBZUYsR0FDbEN6QyxLQUFLWSxPQUFPRSxRQUFVNEIsRUFDdEJFLEVBQVFDLElBQUlILEVBQ2IsQ0FFREksV0FDTTlDLEtBQUtGLFNBQVNpRCxVQUNoQi9DLEtBQUtZLE9BQU9JLE1BQ1ZoQixLQUFLRixTQUFTaUQsUUFBUUMsYUFBZTVCLE9BQU82QixZQUNqRCxDQUlEQyxTQUNFbEQsS0FBS1ksT0FBT0UsT0FBU2tCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQ25CLEVBQ0FoQyxLQUFLWSxPQUFPSSxNQUNaaEIsS0FBS1ksT0FBT0UsUUFHZGQsS0FBS1ksT0FBT0MsUUFBVW1CLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3BCaEMsS0FBS1ksT0FBT0MsUUFDWmIsS0FBS1ksT0FBT0UsT0FDWixJQUdFZCxLQUFLWSxPQUFPQyxRQUFVLE1BQ3hCYixLQUFLWSxPQUFPQyxRQUFVLEdBR3BCYixLQUFLRixTQUFTaUQsVUFDaEIvQyxLQUFLRixTQUFTaUQsUUFBUUksTUFDcEJuRCxLQUFLTyxpQkFDRixlQUFjUCxLQUFLWSxPQUFPQyxhQUNsQyxDQUdEdUIsb0JBQ0VoQixPQUFPZ0MsaUJBQWlCLGFBQWNwRCxLQUFLSSxrQkFDNUMsQ0FFRGlELHVCQUNFQyw0QkFBNEIsYUFBY3RELEtBQUtJLGtCQUNoRCxrQkNoSUhtRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCI7XG5cbmltcG9ydCBUaXRsZSBmcm9tIFwiYW5pbWF0aW9ucy9UaXRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzLFxuICAgICAgYW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcbiAgICB9O1xuICAgIHRoaXMuaWQgPSBpZDtcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxpbWl0OiAwLFxuICAgIH07XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzTmFOcHhvdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XG4gICAgY29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KTtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xuICAgIGNvbnNvbGUubG9nKHBpeGVsWSk7XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxuICAgICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgLyogTG9vcCAqL1xuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xuICB9XG5cbiAgLyogTGlzdGVuZXJzICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvd05hTnB4b3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEzYzU2YTJkODY1MTA4MDQyNGE4XCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJ0aGlzTmFOcHhvdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsIm9uQ29tcGxldGUiLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwiY29uc29sZSIsImxvZyIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=