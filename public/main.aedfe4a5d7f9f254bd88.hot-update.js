/*! For license information please see main.aedfe4a5d7f9f254bd88.hot-update.js.LICENSE.txt */
self.webpackHotUpdateimmersive_website("main",{"./node_modules/prefix/index.js":e=>{var t="undefined"!=typeof document?document.createElement("p").style:{},s=["O","ms","Moz","Webkit"],n=/([A-Z])/g,i={};function o(e){if(e=e.replace(/-([a-z])/g,(function(e,t){return t.toUpperCase()})),void 0!==t[e])return e;for(var n=e.charAt(0).toUpperCase()+e.slice(1),i=s.length;i--;){var o=s[i]+n;if(void 0!==t[o])return o}return e}e.exports=function(e){return e in i?i[e]:i[e]=o(e)},e.exports.dash=function(e){return e=o(e),n.test(e)&&(e="-"+e.replace(n,"-$1"),n.lastIndex=0),e.toLowerCase()}},"./app/classes/Page.js":(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s("./node_modules/lodash/each.js"),i=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),r=s("./node_modules/console-browserify/index.js");class l{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.prefix=o("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0},n(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),i.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),i.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){r.log(e);const{deltaY:t}=e;r.log(t),this.scroll.target=t}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheel)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheel)}update(){this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1)}}}},(function(e){e.h=()=>"b155e16d4e11b499c9df"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9CLGFBQWNwQyxLQUFLOEIsYUFDL0MsQ0FFRE8sU0FDRXJDLEtBQUtNLE9BQU9DLFFBQVVlLEVBQUFBLFFBQUFBLE1BQUFBLFlBQ3BCdEIsS0FBS00sT0FBT0MsUUFDWlAsS0FBS00sT0FBT0UsT0FDWixHQUVILGtCQ2hHSDhCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9wcmVmaXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVjayBkb2N1bWVudCBmaXJzdCBzbyBpdCBkb2Vzbid0IGVycm9yIGluIG5vZGUuanNcbnZhciBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSAndW5kZWZpbmVkJ1xuICA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKS5zdHlsZVxuICA6IHt9XG5cbnZhciBwcmVmaXhlcyA9IFsnTycsICdtcycsICdNb3onLCAnV2Via2l0J11cbnZhciB1cHBlciA9IC8oW0EtWl0pL2dcbnZhciBtZW1vID0ge31cblxuLyoqXG4gKiBwcmVmaXggYGtleWBcbiAqXG4gKiAgIHByZWZpeCgndHJhbnNmb3JtJykgLy8gPT4gV2Via2l0VHJhbnNmb3JtXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcHJlZml4KGtleSl7XG4gIC8vIENhbWVsIGNhc2VcbiAga2V5ID0ga2V5LnJlcGxhY2UoLy0oW2Etel0pL2csIGZ1bmN0aW9uKF8sIGNoYXIpe1xuICAgIHJldHVybiBjaGFyLnRvVXBwZXJDYXNlKClcbiAgfSlcblxuICAvLyBXaXRob3V0IHByZWZpeFxuICBpZiAoc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSByZXR1cm4ga2V5XG5cbiAgLy8gV2l0aCBwcmVmaXhcbiAgdmFyIEtleSA9IGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKVxuICB2YXIgaSA9IHByZWZpeGVzLmxlbmd0aFxuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIG5hbWUgPSBwcmVmaXhlc1tpXSArIEtleVxuICAgIGlmIChzdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gbmFtZVxuICB9XG5cbiAgcmV0dXJuIGtleVxufVxuXG4vKipcbiAqIE1lbW9pemVkIHZlcnNpb24gb2YgYHByZWZpeGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBwcmVmaXhNZW1vemllZChrZXkpe1xuICByZXR1cm4ga2V5IGluIG1lbW9cbiAgICA/IG1lbW9ba2V5XVxuICAgIDogbWVtb1trZXldID0gcHJlZml4KGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBkYXNoZWQgcHJlZml4XG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcHJlZml4RGFzaGVkKGtleSl7XG4gIGtleSA9IHByZWZpeChrZXkpXG4gIGlmICh1cHBlci50ZXN0KGtleSkpIHtcbiAgICBrZXkgPSAnLScgKyBrZXkucmVwbGFjZSh1cHBlciwgJy0kMScpXG4gICAgdXBwZXIubGFzdEluZGV4ID0gMFxuICB9XG4gIHJldHVybiBrZXkudG9Mb3dlckNhc2UoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZpeE1lbW96aWVkXG5tb2R1bGUuZXhwb3J0cy5kYXNoID0gcHJlZml4RGFzaGVkXG4iLCJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7IC4uLmVsZW1lbnRzIH07XG4gICAgdGhpcy5pZCA9IGlkO1xuXG4gICAgdGhpcy5wcmVmaXggPSBQcmVmaXgoXCJ0cmFuc2Zvcm1cIik7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgIH07XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuICAgICAgR1NBUC5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XG4gICAgICAgIHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKCk7XG5cbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGNvbnN0IHsgZGVsdGFZIH0gPSBldmVudDtcblxuICAgIGNvbnNvbGUubG9nKGRlbHRhWSk7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gZGVsdGFZO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsKTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxuICAgICAgMC4xXG4gICAgKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjE1NWUxNmQ0ZTExYjQ5OWM5ZGZcIikiXSwibmFtZXMiOlsic3R5bGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwcmVmaXhlcyIsInVwcGVyIiwibWVtbyIsInByZWZpeCIsImtleSIsInJlcGxhY2UiLCJfIiwiY2hhciIsInRvVXBwZXJDYXNlIiwidW5kZWZpbmVkIiwiS2V5IiwiY2hhckF0Iiwic2xpY2UiLCJpIiwibGVuZ3RoIiwibmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkYXNoIiwidGVzdCIsImxhc3RJbmRleCIsInRvTG93ZXJDYXNlIiwiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiUHJlZml4IiwiY3JlYXRlIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwiZWFjaCIsImVudHJ5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJjYWxsIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwib25Nb3VzZVdoZWVsIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGVsdGFZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGUiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=