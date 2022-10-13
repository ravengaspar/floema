/*! For license information please see main.12c5cae6bfb259c1d7e9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/events/events.js"),l=s("./node_modules/lodash/each.js");class r extends n{constructor({element:e,elements:t}){super(),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}},"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./app/classes/Component.js"),l=s("./node_modules/lodash/each.js");class r extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.length=0,this.createLoader()}createLoader(){l(this.elements.images,(e=>{const t=new Image;t.onload=e=>this.onAssetLoaded(t),t.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=Math.round(this.length/this.elements.images.length);this.elements.number.innerHTML=`${Math.round}`,1===t&&this.onAssetLoaded()}}}},(function(e){e.h=()=>"fd432b2bcc58ebe9b730"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xMmM1Y2FlNmJmYjI1OWMxZDdlOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aU5BR2UsTUFBTUEsVUFBa0JDLEVBQ3JDQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsSUFDckJDLFFBQ0FDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFBS0osR0FDN0JFLEtBQUtHLFNBQ0xILEtBQUtJLG1CQUNOLENBRURELFNBQ0VILEtBQUtILFFBQVVRLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJTLEVBQUtQLEtBQUtFLGtCQUFrQixDQUFDTSxFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRSLEtBQUtGLFNBQVNXLEdBQU9ELEdBRXJCUixLQUFLRixTQUFTVyxHQUFPSixTQUFTVSxpQkFBaUJQLEdBRWIsSUFBOUJSLEtBQUtGLFNBQVNXLEdBQUtPLE9BQ3JCaEIsS0FBS0YsU0FBU1csR0FBTyxLQUNrQixJQUE5QlQsS0FBS0YsU0FBU1csR0FBS08sU0FDNUJoQixLQUFLRixTQUFTVyxHQUFPSixTQUFTQyxjQUFjRSxJQUUvQyxHQUVKLENBRURKLG9CQUFzQixDQUV0QmEsdUJBQXlCLHVKQ2xDWixNQUFNQyxVQUFrQnhCLEVBQUFBLFFBQ3JDRSxjQUNFRyxNQUFNLENBQ0pGLFFBQVMsYUFDVEMsU0FBVSxDQUNScUIsTUFBTyxtQkFDUEMsT0FBUSwyQkFDUkMsT0FBUWhCLFNBQVNVLGlCQUFpQixVQUl0Q2YsS0FBS2dCLE9BQVMsRUFFZGhCLEtBQUtzQixjQUNOLENBRURBLGVBQ0VmLEVBQUtQLEtBQUtGLFNBQVN1QixRQUFTeEIsSUFDMUIsTUFBTTBCLEVBQVEsSUFBSUMsTUFDbEJELEVBQU1FLE9BQVVDLEdBQU0xQixLQUFLMkIsY0FBY0osR0FDekNBLEVBQU1LLElBQU0vQixFQUFRZ0MsYUFBYSxXQUFqQyxHQUVILENBRURGLGNBQWNKLEdBQ1p2QixLQUFLZ0IsUUFBVSxFQUVmLE1BQU1jLEVBQVVDLEtBQUtDLE1BQU1oQyxLQUFLZ0IsT0FBU2hCLEtBQUtGLFNBQVN1QixPQUFPTCxRQUM5RGhCLEtBQUtGLFNBQVNzQixPQUFPYSxVQUFhLEdBQUVGLEtBQUtDLFFBRXpCLElBQVpGLEdBQ0Y5QixLQUFLMkIsZUFFUixrQkNwQ0hPLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cyB9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge31cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHt9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJjbGFzc2VzL0NvbXBvbmVudFwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGVsZW1lbnQ6IFwiLnByZWxvYWRlclwiLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6IFwiLnByZWxvYWRlcl9fdGV4dFwiLFxuICAgICAgICBudW1iZXI6IFwiLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0XCIsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImltZ1wiKSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbmd0aCA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChpbWFnZSk7XG4gICAgICBpbWFnZS5zcmMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgb25Bc3NldExvYWRlZChpbWFnZSkge1xuICAgIHRoaXMubGVuZ3RoICs9IDE7XG5cbiAgICBjb25zdCBwZXJjZW50ID0gTWF0aC5yb3VuZCh0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aCk7XG4gICAgdGhpcy5lbGVtZW50cy5udW1iZXIuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZH1gXG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkFzc2V0TG9hZGVkKCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmZDQzMmIyYmNjNThlYmU5YjczMFwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIlByZWxvYWRlciIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiY3JlYXRlTG9hZGVyIiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicGVyY2VudCIsIk1hdGgiLCJyb3VuZCIsImlubmVySFRNTCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==