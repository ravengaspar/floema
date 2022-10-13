/*! For license information please see main.f38b31251e7aa0aed2a0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/lodash/map.js"),l=s("./node_modules/gsap/index.js"),a=s("./node_modules/prefix/index.js"),o=s("./node_modules/normalize-wheel/index.js"),r=s("./app/animations/Title.js"),h=s("./node_modules/console-browserify/index.js");class m{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabels:'[data-animation="label"]'},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=a("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){h.log(this.elements.animationsTitles),this.animationsTitles=n(this.elements.animationsTitles,(e=>new r.default({element:e}))),h.log(this.animationsTitles)}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=l.default.timeline(),l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o(e);this.scroll.target+=t,h.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animationsTitles,(e=>e.onResize()))}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"d7f6c635fc8039658da7"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsT0FBT21DLGlCQUFpQixhQUFjekQsS0FBS00sa0JBQzNDLENBRURvRCx1QkFDQ0MsNEJBQTRCLGFBQWMzRCxLQUFLTSxrQkFDL0Msa0JDcklGc0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnYW5pbWF0aW9ucy9UaXRsZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcblx0XHR0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuXHRcdHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcblx0XHRcdC4uLmVsZW1lbnRzLFxuXHRcdFx0YW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNMYWJlbHM6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXG5cdFx0fVxuXHRcdHRoaXMuaWQgPSBpZFxuXG5cdFx0dGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcblx0XHR0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG5cdFx0dGhpcy5lbGVtZW50cyA9IHt9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdFx0bGltaXQ6IDAsXG5cdFx0fVxuXG5cdFx0ZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoZW50cnkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cblx0XHRcdFx0aWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKClcblx0fVxuXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG5cdFx0Y29uc29sZS5sb2codGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzKVxuXG5cdFx0dGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblx0XHRjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbnNUaXRsZXMpXG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcblx0XHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0XHR0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0XHRcdH1cblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRpb25Jbi5jYWxsKF8gPT4ge1xuXHRcdFx0XHR0aGlzLCB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXNOYU5weG92ZUV2ZW50TGlzdGVuZXJzKClcblx0XHRcdHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cblx0XHRcdEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0b25Db21wbGV0ZTogcmVzb2x2ZSxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdG9uTW91c2VXaGVlbChldmVudCkge1xuXHRcdGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudClcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdFx0Y29uc29sZS5sb2cocGl4ZWxZKVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0ZWFjaCh0aGlzLmFuaW1hdGlvbnNUaXRsZXMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkN2Y2YzYzNWZjODAzOTY1OGRhN1wiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zVGl0bGVzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zTGFiZWxzIiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJUaXRsZSIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwidGhpc05hTnB4b3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=