/*! For license information please see main.2222a230b3300fb51a64.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/events/events.js"),l=s("./node_modules/lodash/each.js");class o extends n{constructor({element:e,elements:t}){super(),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}},"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./app/classes/Component.js"),l=s("./node_modules/lodash/each.js");class o extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){l(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){this.emit("completed")}}}},(function(e){e.h=()=>"98ce59753883ed22cd1f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMjIyYTIzMGIzMzAwZmI1MWE2NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aU5BR2UsTUFBTUEsVUFBa0JDLEVBQ3JDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDckJDLFFBQ0FDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFBS0osR0FDN0JFLEtBQUtHLFNBQ0xILEtBQUtJLG1CQUNOLENBRURELFNBQ0VILEtBQUtILFFBQVVRLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJTLEVBQUtQLEtBQUtFLGtCQUFrQixDQUFDTSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRSLEtBQUtGLFNBQVNXLEdBQU9ELEdBRXJCUixLQUFLRixTQUFTVyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJSLEtBQUtGLFNBQVNXLEdBQUtPLE9BQ3JCaEIsS0FBS0YsU0FBU1csR0FBTyxLQUNrQixJQUE5QlQsS0FBS0YsU0FBU1csR0FBS08sU0FDNUJoQixLQUFLRixTQUFTVyxHQUFPSixTQUFTQyxjQUFjRSxJQUUvQyxHQUVKLENBRURKLG9CQUFzQixDQUV0QmEsdUJBQXlCLHVKQ2xDWixNQUFNQyxVQUFrQnhCLEVBQUFBLFFBQ3JDRSxjQUNFRyxNQUFNLENBQ0pGLFFBQVMsYUFDVEMsU0FBVSxDQUNScUIsTUFBTyxtQkFDUEMsT0FBUSwyQkFDUkMsT0FBUWhCLFNBQVNVLGlCQUFpQixVQUl0Q2YsS0FBS2dCLE9BQVMsRUFFZGhCLEtBQUtzQixjQUNOLENBRURBLGVBQ0VmLEVBQUtQLEtBQUtGLFNBQVN1QixRQUFTeEIsSUFDMUIsTUFBTTBCLEVBQVEsSUFBSUMsTUFFbEJELEVBQU1FLE9BQVVDLEdBQU0xQixLQUFLMkIsY0FBY0osR0FDekNBLEVBQU1LLElBQU0vQixFQUFRZ0MsYUFBYSxXQUFqQyxHQUVILENBRURGLGNBQWNKLEdBQ1p2QixLQUFLZ0IsUUFBVSxFQUVmLE1BQU1jLEVBQVU5QixLQUFLZ0IsT0FBU2hCLEtBQUtGLFNBQVN1QixPQUFPTCxPQUNuRGhCLEtBQUtGLFNBQVNzQixPQUFPVyxVQUFhLEdBQUVDLEtBQUtDLE1BQWdCLElBQVZILE1BRS9CLElBQVpBLEdBQ0Y5QixLQUFLa0MsVUFFUixDQUVEQSxXQUNFbEMsS0FBS21DLEtBQUssWUFDWCxrQkN6Q0hDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge31cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHt9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICBpbWFnZS5vbmxvYWQgPSAoXykgPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGltYWdlKTtcbiAgICAgIGltYWdlLnNyYyA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zcmNcIik7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcbiAgICB0aGlzLmVsZW1lbnRzLm51bWJlci5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICB0aGlzLmVtaXQoXCJjb21wbGV0ZWRcIik7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4Y2U1OTc1Mzg4M2VkMjJjZDFmXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwic3VwZXIiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiY3JlYXRlIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiUHJlbG9hZGVyIiwidGl0bGUiLCJudW1iZXIiLCJpbWFnZXMiLCJjcmVhdGVMb2FkZXIiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwiXyIsIm9uQXNzZXRMb2FkZWQiLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJlbWl0IiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9