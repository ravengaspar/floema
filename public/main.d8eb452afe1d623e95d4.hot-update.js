/*! For license information please see main.d8eb452afe1d623e95d4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/events/events.js"),l=s("./node_modules/lodash/each.js");class i extends n{constructor({element:e,elements:t}){super(),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"8ab87cca5500b0b25cc2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kOGViNDUyYWZlMWQ2MjNlOTVkNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aU5BR2UsTUFBTUEsVUFBa0JDLEVBQ3JDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDckJDLFFBQ0FDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFBS0osR0FDN0JFLEtBQUtHLFNBQ0xILEtBQUtJLG1CQUNOLENBRURELFNBQ0VILEtBQUtILFFBQVVRLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJTLEVBQUtQLEtBQUtFLGtCQUFrQixDQUFDTSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRSLEtBQUtGLFNBQVNXLEdBQU9ELEdBRXJCUixLQUFLRixTQUFTVyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJSLEtBQUtGLFNBQVNXLEdBQUtPLE9BQ3JCaEIsS0FBS0YsU0FBU1csR0FBTyxLQUNrQixJQUE5QlQsS0FBS0YsU0FBU1csR0FBS08sU0FDNUJoQixLQUFLRixTQUFTVyxHQUFPSixTQUFTQyxjQUFjRSxJQUUvQyxHQUVKLENBRURKLG9CQUFzQixDQUV0QmEsdUJBQXlCLGtCQ3JDM0JDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge31cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YWI4N2NjYTU1MDBiMGIyNWNjMlwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==