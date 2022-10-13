/*! For license information please see main.40533e604c75d81f10d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./node_modules/lodash/each.js");class i extends EventEmitter{constructor({element:e,elements:t}){this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"bb9e23aac68b724e14ea"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MDUzM2U2MDRjNzVkODFmMTBkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MEtBRWUsTUFBTUEsVUFBa0JDLGFBQ3JDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDckJDLEtBQUtDLFNBQVdILEVBQ2hCRSxLQUFLRSxpQkFBbUIsSUFBS0gsR0FDN0JDLEtBQUtHLFNBQ0xILEtBQUtJLG1CQUNOLENBRURELFNBQ0VILEtBQUtGLFFBQVVPLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRCxTQUFXLENBQUMsRUFFakJRLEVBQUtQLEtBQUtFLGtCQUFrQixDQUFDTSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRSLEtBQUtELFNBQVNVLEdBQU9ELEdBRXJCUixLQUFLRCxTQUFTVSxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJSLEtBQUtELFNBQVNVLEdBQUtPLE9BQ3JCaEIsS0FBS0QsU0FBU1UsR0FBTyxLQUNrQixJQUE5QlQsS0FBS0QsU0FBU1UsR0FBS08sU0FDNUJoQixLQUFLRCxTQUFTVSxHQUFPSixTQUFTQyxjQUFjRSxJQUUvQyxHQUVKLENBRURKLG9CQUFzQixDQUV0QmEsdUJBQXlCLGtCQ25DM0JDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfTtcbiAgICB0aGlzLmNyZWF0ZSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7fVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge31cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiOWUyM2FhYzY4YjcyNGUxNGVhXCIpIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkV2ZW50RW1pdHRlciIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==