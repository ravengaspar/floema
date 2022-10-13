/*! For license information please see main.12686affc4c79faa96b8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Component.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var n=s("./node_modules/events/events.js"),l=s("./node_modules/lodash/each.js");class o extends n{constructor({element:e,elements:t}){super(),this.selector=e,this.selectorChildren={...t},this.create(),this.addEventListeners()}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}addEventListeners(){}removeEventListeners(){}}},"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>i});var n=s("./app/classes/Component.js"),l=s("./node_modules/lodash/each.js"),o=s("./node_modules/gsap/index.js"),r=s("./app/utils/text.js");class i extends n.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.elements.titleSpans=(0,r.split)({element:this.elements.title,expression:"<br>"}),this.length=0,this.createLoader()}createLoader(){l(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.number.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=o.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.call((e=>{}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}},"./app/utils/text.js":(e,t,s)=>{s.r(t),s.d(t,{calculate:()=>o,split:()=>l});var n=s("./node_modules/lodash/each.js");function l({element:e,expression:t=" ",append:s=!0}){const l=function(e,t){const s=e.split("<br>");let l=[];return n(s,((e,s)=>{s>0&&l.push("<br>"),l=l.concat(e.split(t));let o=!1,r="";const i=[];n(l,(e=>{o||!e.includes("<a")&&!e.includes("<strong")||(r="",o=!0),o&&(r+=` ${e}`),o&&(e.includes("/a>")||e.includes("/strong>"))&&(i.push(r),r=""),o||""!==r||i.push(e),o&&(e.includes("/a>")||e.includes("/strong>"))&&(o=!1)})),l=i})),l}(e.innerHTML.toString().trim(),t);let o="";n(l,(e=>{if(e.indexOf("<br>")>-1){const t=e.split("<br>");n(t,((e,t)=>{o+=t>0?"<br>"+r(e):r(e)}))}else o+=r(e)})),e.innerHTML=o;const i=e.querySelectorAll("span");return s&&n(i,(e=>{const t=1===e.textContent.length,s=""!==e.innerHTML.trim(),n="&"!==e.textContent,l="-"!==e.textContent;t&&s&&n&&l&&(e.innerHTML=`${e.textContent}&nbsp;`)})),i}function o(e){if(!e.length)return;const t=[];let s=[],l=e[0].offsetTop;return n(e,((n,o)=>{n.offsetTop===l&&s.push(n),n.offsetTop!==l&&(t.push(s),s=[],s.push(n),l=n.offsetTop),o+1===e.length&&t.push(s)})),t}function r(e){return""===(e=e.trim())||" "===e?e:"<br>"===e?"<br>":`<span>${e}</span>`+(e.length>1?" ":"")}}},(function(e){e.h=()=>"5df4bc4934eb0e6a6358"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBTUssS0FBS2MsR0FHVEEsRUFBS1EsWUFBY0QsSUFDckJWLEVBQU1YLEtBQUtMLEdBRVhBLEVBQVEsR0FDUkEsRUFBTUssS0FBS2MsR0FFWE8sRUFBV1AsRUFBS1EsV0FHZHZCLEVBQVEsSUFBTWMsRUFBTXZELFFBQ3RCcUQsRUFBTVgsS0FBS0wsRUFDWixJQUdJZ0IsQ0FDUixDQW1ERCxTQUFTQyxFQUFVSCxHQUdqQixNQUFhLE1BRmJBLEVBQU9BLEVBQUtELFNBRWdCLE1BQVRDLEVBQ1ZBLEVBRVMsU0FBVEEsRUFDSCxPQUNDLFNBQVFBLFlBQWlCQSxFQUFLbkQsT0FBUyxFQUFJLElBQU0sR0FFekQsaUJDNUlEaUUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL3V0aWxzL3RleHQuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcImV2ZW50c1wiO1xuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0geyAuLi5lbGVtZW50cyB9O1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoZW50cnkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpIHt9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7fVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiY2xhc3Nlcy9Db21wb25lbnRcIjtcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiBcIjxicj5cIixcbiAgICB9KTtcblxuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuXG4gICAgY29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoO1xuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyLmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWA7XG5cbiAgICBpZiAocGVyY2VudCA9PT0gMSkge1xuICAgICAgdGhpcy5vbkxvYWRlZCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uTG9hZGVkKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG4gICAgICAgIGRlbGF5OiAyLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICB9KTtcblxuICAgICAgLy8gdGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgLy8gICBhdXRvQWxwaGE6IDAsXG4gICAgICAvLyB9KTtcblxuICAgICAgdGhpcy5hbmltYXRlT3V0LmNhbGwoKF8pID0+IHt9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5cbi8qKlxuICogRnVuY3Rpb24gdGhhdCBzcGxpdHMgdGV4dCBpbnRvIHNwYW5zXG4gKiBAcGFyYW0ge3N0cmluZyB8fCBIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7Ym9vbH0gYXBwZW5kXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdCh7IGVsZW1lbnQsIGV4cHJlc3Npb24gPSBcIiBcIiwgYXBwZW5kID0gdHJ1ZSB9KSB7XG4gIGNvbnN0IHdvcmRzID0gc3BsaXRUZXh0KGVsZW1lbnQuaW5uZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLCBleHByZXNzaW9uKTtcblxuICBsZXQgaW5uZXJIVE1MID0gXCJcIjtcblxuICBlYWNoKHdvcmRzLCAobGluZSkgPT4ge1xuICAgIGlmIChsaW5lLmluZGV4T2YoXCI8YnI+XCIpID4gLTEpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gbGluZS5zcGxpdChcIjxicj5cIik7XG5cbiAgICAgIGVhY2gobGluZXMsIChsaW5lLCBpbmRleCkgPT4ge1xuICAgICAgICBpbm5lckhUTUwgKz0gaW5kZXggPiAwID8gXCI8YnI+XCIgKyBwYXJzZUxpbmUobGluZSkgOiBwYXJzZUxpbmUobGluZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5uZXJIVE1MICs9IHBhcnNlTGluZShsaW5lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG4gIGNvbnN0IHNwYW5zID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKTtcblxuICBpZiAoYXBwZW5kKSB7XG4gICAgZWFjaChzcGFucywgKHNwYW4pID0+IHtcbiAgICAgIGNvbnN0IGlzU2luZ2xlTGV0dGVyID0gc3Bhbi50ZXh0Q29udGVudC5sZW5ndGggPT09IDE7XG4gICAgICBjb25zdCBpc05vdEVtcHR5ID0gc3Bhbi5pbm5lckhUTUwudHJpbSgpICE9PSBcIlwiO1xuICAgICAgY29uc3QgaXNOb3RBbmRDaGFyYWN0ZXIgPSBzcGFuLnRleHRDb250ZW50ICE9PSBcIiZcIjtcbiAgICAgIGNvbnN0IGlzTm90RGFzaENoYXJhY3RlciA9IHNwYW4udGV4dENvbnRlbnQgIT09IFwiLVwiO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGlzU2luZ2xlTGV0dGVyICYmXG4gICAgICAgIGlzTm90RW1wdHkgJiZcbiAgICAgICAgaXNOb3RBbmRDaGFyYWN0ZXIgJiZcbiAgICAgICAgaXNOb3REYXNoQ2hhcmFjdGVyXG4gICAgICApIHtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBgJHtzcGFuLnRleHRDb250ZW50fSZuYnNwO2A7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gc3BhbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGUoc3BhbnMpIHtcbiAgaWYgKCFzcGFucy5sZW5ndGgpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgbGluZXMgPSBbXTtcbiAgbGV0IHdvcmRzID0gW107XG5cbiAgbGV0IHBvc2l0aW9uID0gc3BhbnNbMF0ub2Zmc2V0VG9wO1xuXG4gIGVhY2goc3BhbnMsIChzcGFuLCBpbmRleCkgPT4ge1xuICAgIGlmIChzcGFuLm9mZnNldFRvcCA9PT0gcG9zaXRpb24pIHtcbiAgICAgIHdvcmRzLnB1c2goc3Bhbik7XG4gICAgfVxuXG4gICAgaWYgKHNwYW4ub2Zmc2V0VG9wICE9PSBwb3NpdGlvbikge1xuICAgICAgbGluZXMucHVzaCh3b3Jkcyk7XG5cbiAgICAgIHdvcmRzID0gW107XG4gICAgICB3b3Jkcy5wdXNoKHNwYW4pO1xuXG4gICAgICBwb3NpdGlvbiA9IHNwYW4ub2Zmc2V0VG9wO1xuICAgIH1cblxuICAgIGlmIChpbmRleCArIDEgPT09IHNwYW5zLmxlbmd0aCkge1xuICAgICAgbGluZXMucHVzaCh3b3Jkcyk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGluZXM7XG59XG5cbmZ1bmN0aW9uIHNwbGl0VGV4dCh0ZXh0LCBleHByZXNzaW9uKSB7XG4gIGNvbnN0IHNwbGl0cyA9IHRleHQuc3BsaXQoXCI8YnI+XCIpO1xuXG4gIGxldCB3b3JkcyA9IFtdO1xuXG4gIGVhY2goc3BsaXRzLCAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB3b3Jkcy5wdXNoKFwiPGJyPlwiKTtcbiAgICB9XG5cbiAgICB3b3JkcyA9IHdvcmRzLmNvbmNhdChpdGVtLnNwbGl0KGV4cHJlc3Npb24pKTtcblxuICAgIGxldCBpc0xpbmsgPSBmYWxzZTtcbiAgICBsZXQgbGluayA9IFwiXCI7XG5cbiAgICBjb25zdCBpbm5lckhUTUwgPSBbXTtcblxuICAgIGVhY2god29yZHMsICh3b3JkKSA9PiB7XG4gICAgICBpZiAoIWlzTGluayAmJiAod29yZC5pbmNsdWRlcyhcIjxhXCIpIHx8IHdvcmQuaW5jbHVkZXMoXCI8c3Ryb25nXCIpKSkge1xuICAgICAgICBsaW5rID0gXCJcIjtcblxuICAgICAgICBpc0xpbmsgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rKSB7XG4gICAgICAgIGxpbmsgKz0gYCAke3dvcmR9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzTGluayAmJiAod29yZC5pbmNsdWRlcyhcIi9hPlwiKSB8fCB3b3JkLmluY2x1ZGVzKFwiL3N0cm9uZz5cIikpKSB7XG4gICAgICAgIGlubmVySFRNTC5wdXNoKGxpbmspO1xuXG4gICAgICAgIGxpbmsgPSBcIlwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTGluayAmJiBsaW5rID09PSBcIlwiKSB7XG4gICAgICAgIGlubmVySFRNTC5wdXNoKHdvcmQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNMaW5rICYmICh3b3JkLmluY2x1ZGVzKFwiL2E+XCIpIHx8IHdvcmQuaW5jbHVkZXMoXCIvc3Ryb25nPlwiKSkpIHtcbiAgICAgICAgaXNMaW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3b3JkcyA9IGlubmVySFRNTDtcbiAgfSk7XG5cbiAgcmV0dXJuIHdvcmRzO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpbmUobGluZSkge1xuICBsaW5lID0gbGluZS50cmltKCk7XG5cbiAgaWYgKGxpbmUgPT09IFwiXCIgfHwgbGluZSA9PT0gXCIgXCIpIHtcbiAgICByZXR1cm4gbGluZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGluZSA9PT0gXCI8YnI+XCJcbiAgICAgID8gXCI8YnI+XCJcbiAgICAgIDogYDxzcGFuPiR7bGluZX08L3NwYW4+YCArIChsaW5lLmxlbmd0aCA+IDEgPyBcIiBcIiA6IFwiXCIpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZGY0YmM0OTM0ZWIwZTZhNjM1OFwiKSJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJFdmVudEVtaXR0ZXIiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIlByZWxvYWRlciIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwidGl0bGVTcGFucyIsInNwbGl0IiwiZXhwcmVzc2lvbiIsImNyZWF0ZUxvYWRlciIsIm9ubG9hZCIsIl8iLCJvbkFzc2V0TG9hZGVkIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwiaW1hZ2UiLCJwZXJjZW50IiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImF1dG9BbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmQiLCJ3b3JkcyIsInRleHQiLCJzcGxpdHMiLCJpdGVtIiwiaW5kZXgiLCJwdXNoIiwiY29uY2F0IiwiaXNMaW5rIiwibGluayIsIndvcmQiLCJpbmNsdWRlcyIsInNwbGl0VGV4dCIsInRvU3RyaW5nIiwidHJpbSIsImxpbmUiLCJpbmRleE9mIiwibGluZXMiLCJwYXJzZUxpbmUiLCJzcGFucyIsInNwYW4iLCJpc1NpbmdsZUxldHRlciIsInRleHRDb250ZW50IiwiaXNOb3RFbXB0eSIsImlzTm90QW5kQ2hhcmFjdGVyIiwiaXNOb3REYXNoQ2hhcmFjdGVyIiwiY2FsY3VsYXRlIiwicG9zaXRpb24iLCJvZmZzZXRUb3AiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=