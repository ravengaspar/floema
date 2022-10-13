/*! For license information please see main.cd0eec7b542149e2eb07.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./node_modules/normalize-wheel/index.js"),r=s("./app/animations/Title.js"),a=s("./node_modules/console-browserify/index.js");class h{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]'},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){a.log(this.elements.animationsTitles),this.animationsTitles=map(this.elements.animationsTitles,(e=>new r.default({element:e})))}show(){return new Promise((e=>{this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{thisNaNpxoveEventListeners(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o(e);this.scroll.target+=t,a.log(t)}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"d6ab4be77e83dca65112"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgR1NBUCBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xuXG5pbXBvcnQgVGl0bGUgZnJvbSBcImFuaW1hdGlvbnMvVGl0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudDtcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG4gICAgICAuLi5lbGVtZW50cyxcbiAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG4gICAgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpO1xuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMCxcbiAgICB9O1xuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoZW50cnkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKTtcbiAgfVxuXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzKTtcbiAgICB0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBUaXRsZSh7XG4gICAgICAgIGVsZW1lbnQsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuICAgICAgR1NBUC5mcm9tVG8oXG4gICAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XG4gICAgICAgIHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpc05hTnB4b3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpO1xuXG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91c2VXaGVlbChldmVudCkge1xuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudCk7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWTtcbiAgICBjb25zb2xlLmxvZyhwaXhlbFkpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID1cbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIC8qIExvb3AgKi9cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcbiAgICAgIDAsXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxuICAgICk7XG5cbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXQsXG4gICAgICAwLjFcbiAgICApO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxuICAgICAgXSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYDtcbiAgfVxuXG4gIC8qIExpc3RlbmVycyAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkNmFiNGJlNzdlODNkY2E2NTExMlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zVGl0bGVzIiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJUaXRsZSIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwidGhpc05hTnB4b3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=