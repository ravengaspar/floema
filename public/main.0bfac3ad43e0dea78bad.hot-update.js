/*! For license information please see main.0bfac3ad43e0dea78bad.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/events/events.js"),l=s("./node_modules/lodash/each.js");class o extends n{constructor({element:e,elements:t}){super(),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}},"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./app/classes/Component.js"),l=s("./node_modules/lodash/each.js"),o=s("./node_modules/gsap/index.js");Object(function(){var e=new Error("Cannot find module 'ulti'");throw e.code="MODULE_NOT_FOUND",e}());class r extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){l(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=o.default.timeline({delay:2}),this.animateOut.to(this.element,{autoAlpha:0}),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"920029cacfb6c88ac13a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wYmZhYzNhZDQzZTBkZWE3OGJhZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aU5BR2UsTUFBTUEsVUFBa0JDLEVBQ3JDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDckJDLFFBQ0FDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFBS0osR0FDN0JFLEtBQUtHLFNBQ0xILEtBQUtJLG1CQUNOLENBRURELFNBQ0VILEtBQUtILFFBQVVRLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJTLEVBQUtQLEtBQUtFLGtCQUFrQixDQUFDTSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRSLEtBQUtGLFNBQVNXLEdBQU9ELEdBRXJCUixLQUFLRixTQUFTVyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJSLEtBQUtGLFNBQVNXLEdBQUtPLE9BQ3JCaEIsS0FBS0YsU0FBU1csR0FBTyxLQUNrQixJQUE5QlQsS0FBS0YsU0FBU1csR0FBS08sU0FDNUJoQixLQUFLRixTQUFTVyxHQUFPSixTQUFTQyxjQUFjRSxJQUUvQyxHQUVKLENBRURKLG9CQUFzQixDQUV0QmEsdUJBQXlCLGdTQ2hDWixNQUFNQyxVQUFrQnhCLEVBQUFBLFFBQ3JDRSxjQUNFRyxNQUFNLENBQ0pGLFFBQVMsYUFDVEMsU0FBVSxDQUNScUIsTUFBTyxtQkFDUEMsT0FBUSwyQkFDUkMsT0FBUWhCLFNBQVNVLGlCQUFpQixVQUl0Q2YsS0FBS2dCLE9BQVMsRUFFZGhCLEtBQUtzQixjQUNOLENBRURBLGVBQ0VmLEVBQUtQLEtBQUtGLFNBQVN1QixRQUFTeEIsSUFDMUJBLEVBQVEwQixPQUFVQyxHQUFNeEIsS0FBS3lCLGNBQWM1QixHQUMzQ0EsRUFBUTZCLElBQU03QixFQUFROEIsYUFBYSxXQUFuQyxHQUVILENBRURGLGNBQWNHLEdBQ1o1QixLQUFLZ0IsUUFBVSxFQUVmLE1BQU1hLEVBQVU3QixLQUFLZ0IsT0FBU2hCLEtBQUtGLFNBQVN1QixPQUFPTCxPQUNuRGhCLEtBQUtGLFNBQVNzQixPQUFPVSxVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BRS9CLElBQVpBLEdBQ0Y3QixLQUFLaUMsVUFFUixDQUVEQSxXQUNFLE9BQU8sSUFBSUMsU0FBU0MsSUFDbEJuQyxLQUFLb0MsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUM5QkMsTUFBTyxJQUdUdEMsS0FBS29DLFdBQVdHLEdBQUd2QyxLQUFLSCxRQUFTLENBQy9CMkMsVUFBVyxJQUdieEMsS0FBS29DLFdBQVdLLE1BQU1qQixJQUNwQnhCLEtBQUswQyxLQUFLLFlBQVYsR0FERixHQUlILENBRURDLFVBQ0UzQyxLQUFLSCxRQUFRK0MsV0FBV0MsWUFBWTdDLEtBQUtILFFBQzFDLGtCQ3pESGlELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge31cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHt9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHtzcGxpdCB9IGZyb20gJ3VsdGknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50Lm9ubG9hZCA9IChfKSA9PiB0aGlzLm9uQXNzZXRMb2FkZWQoZWxlbWVudCk7XG4gICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTIwMDI5Y2FjZmI2Yzg4YWMxM2FcIikiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiRXZlbnRFbWl0dGVyIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJzdXBlciIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJjcmVhdGUiLCJhZGRFdmVudExpc3RlbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJQcmVsb2FkZXIiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlcyIsImNyZWF0ZUxvYWRlciIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImNhbGwiLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==