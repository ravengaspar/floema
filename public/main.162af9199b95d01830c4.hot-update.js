/*! For license information please see main.162af9199b95d01830c4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/lodash/map.js"),l=s("./node_modules/gsap/index.js"),o=s("./node_modules/prefix/index.js"),r=s("./node_modules/normalize-wheel/index.js"),a=s("./app/animations/Title.js"),h=s("./node_modules/console-browserify/index.js");class m{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]'},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=o("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){h.log(this.elements.animationsTitles),this.animationsTitles=n(this.elements.animationsTitles,(e=>new a.default({element:e}))),h.log(this.animationsTitles)}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=l.default.timeline(),l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=r(e);this.scroll.target+=t,h.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animationsTitles)}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"3f4a86076990b44b0bde"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsYUFBY3hELEtBQUtJLGtCQUNoRCxrQkNqSkhxRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBtYXAgZnJvbSBcImxvZGFzaC9tYXBcIjtcbmltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgUHJlZml4IGZyb20gXCJwcmVmaXhcIjtcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tIFwibm9ybWFsaXplLXdoZWVsXCI7XG5cbmltcG9ydCBUaXRsZSBmcm9tIFwiYW5pbWF0aW9ucy9UaXRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzLFxuICAgICAgYW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcbiAgICB9O1xuICAgIHRoaXMuaWQgPSBpZDtcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XG4gICAgdGhpcy5lbGVtZW50cyA9IHt9O1xuXG4gICAgdGhpcy5zY3JvbGwgPSB7XG4gICAgICBjdXJyZW50OiAwLFxuICAgICAgdGFyZ2V0OiAwLFxuICAgICAgbGFzdDogMCxcbiAgICAgIGxpbWl0OiAwLFxuICAgIH07XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xuICB9XG5cbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMpO1xuXG4gICAgdGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5hbmltYXRpb25zVGl0bGVzKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuICAgICAgR1NBUC5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XG4gICAgICAgIHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpc05hTnB4b3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudCk7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWTtcbiAgICBjb25zb2xlLmxvZyhwaXhlbFkpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID1cbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblxuXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnNUaXRsZXMpXG5cblxuICB9XG5cbiAgLyogTG9vcCAqL1xuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xuICB9XG5cbiAgLyogTGlzdGVuZXJzICovXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcbiAgfVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvd05hTnB4b3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNmNGE4NjA3Njk5MGI0NGIwYmRlXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIlRpdGxlIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJ0aGlzTmFOcHhvdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsIm9uQ29tcGxldGUiLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIndpbmRvd05hTnB4b3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==