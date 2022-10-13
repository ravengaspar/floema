/*! For license information please see main.44732b8cf41b0647da38.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/lodash/each.js"),a=s("./node_modules/lodash/map.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./app/animations/Title.js"),r=s("./app/animations/Paragraph.js"),h=s("./app/animations/Label.js"),m=s("./app/animations/Highlight.js"),d=s("./app/classes/AsyncLoad.js"),c=s("./app/classes/Colors.js");class u{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationsTitles=a(this.elements.animationsTitles,(e=>new o.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=a(this.elements.animationsParagraphs,(e=>new r.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=a(this.elements.animationsLabel,(e=>new h.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=a(this.elements.animationsHighlights,(e=>new m.default({element:e}))),this.animations.push(...this.animationsHighlights)}createPreloader(){this.preloaders=a(this.elements.preloaders,(e=>new d.default({element:e})))}show(){return new Promise((e=>{c.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.destroy(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}onWheel({pixelY:e}){this.scroll.target+=e}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}destroy(){this.removeEventListeners()}}}},(function(e){e.h=()=>"f739386abedd7f66e2f0"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBS0QsQ0FFRGUsV0FDSzFELEtBQUtGLFNBQVM2RCxVQUNqQjNELEtBQUtnQixPQUFPSSxNQUFRcEIsS0FBS0YsU0FBUzZELFFBQVFDLGFBQWVwQyxPQUFPcUMsYUFFakV4QyxFQUFLckIsS0FBS2lDLFlBQVk2QixHQUFhQSxFQUFVSixZQUM3QyxDQUVESyxTQUFRLE9BQUVDLElBQ1RoRSxLQUFLZ0IsT0FBT0UsUUFBVThDLENBQ3RCLENBSURDLFNBQ0NqRSxLQUFLZ0IsT0FBT0UsT0FBUytCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQWlCLEVBQUdqRCxLQUFLZ0IsT0FBT0ksTUFBT3BCLEtBQUtnQixPQUFPRSxRQUV4RWxCLEtBQUtnQixPQUFPQyxRQUFVZ0MsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUJqRCxLQUFLZ0IsT0FBT0MsUUFBU2pCLEtBQUtnQixPQUFPRSxPQUFRLElBRWxGbEIsS0FBS2dCLE9BQU9DLFFBQVUsTUFDekJqQixLQUFLZ0IsT0FBT0MsUUFBVSxHQUduQmpCLEtBQUtGLFNBQVM2RCxVQUNqQjNELEtBQUtGLFNBQVM2RCxRQUFRTyxNQUFNbEUsS0FBS1csaUJBQW9CLGVBQWNYLEtBQUtnQixPQUFPQyxhQUNoRixDQUdEb0Msb0JBQ0M3QixPQUFPMkMsaUJBQWlCLGFBQWNuRSxLQUFLUSxrQkFDM0MsQ0FFRDRELHVCQUNDNUMsT0FBTzJDLGlCQUFpQixhQUFjbkUsS0FBS1Esa0JBQzNDLENBRUQrQyxVQUNDdkQsS0FBS29FLHNCQUNMLGtCQ3ZMRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBUaXRsZSBmcm9tICdhbmltYXRpb25zL1RpdGxlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdhbmltYXRpb25zL1BhcmFncmFwaCdcbmltcG9ydCBMYWJlbCBmcm9tICdhbmltYXRpb25zL0xhYmVsJ1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdhbmltYXRpb25zL0hpZ2hsaWdodCdcblxuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCdcbmltcG9ydCB7IENvbG9yc01hbmFnZXIgfSBmcm9tICdjbGFzc2VzL0NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcblx0XHR0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuXHRcdHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcblx0XHRcdC4uLmVsZW1lbnRzLFxuXHRcdFx0YW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNMYWJlbDogJ1tkYXRhLWFuaW1hdGlvbj1cImxhYmVsXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNIaWdobGlnaHRzOiAnW2RhdGEtYW5pbWF0aW9uPVwiaGlnaGxpZ2h0XCJdJyxcblx0XHRcdHByZWxvYWRlcnM6ICdbZGF0YS1zcmNdJyxcblx0XHR9XG5cdFx0dGhpcy5pZCA9IGlkXG5cblx0XHR0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuXHRcdHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcilcblx0XHR0aGlzLmVsZW1lbnRzID0ge31cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxhc3Q6IDAsXG5cdFx0XHRsaW1pdDogMCxcblx0XHR9XG5cblx0XHRlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0ZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcblx0XHRcdFx0ZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShlbnRyeSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuXHRcdFx0XHRpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0fVxuXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG5cdFx0dGhpcy5hbmltYXRpb25zID0gW11cblxuXHRcdC8vIHRpdGxlXG5cdFx0dGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcylcblxuXHRcdC8vIHBhcmFncmFwaFxuXHRcdHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFncmFwaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKVxuXG5cdFx0Ly8gbGFiZWxcblx0XHR0aGlzLmFuaW1hdGlvbnNMYWJlbCA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNMYWJlbCwgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IExhYmVsKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0xhYmVsKVxuXG5cdFx0Ly8gaGlnaGxpZ2h0XG5cdFx0dGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNIaWdobGlnaHRzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgSGlnaGxpZ2h0KHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMpXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXJzID0gbWFwKHRoaXMuZWxlbWVudHMucHJlbG9hZGVycywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEFzeW5jTG9hZCh7IGVsZW1lbnQgfSlcblx0XHR9KVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHRDb2xvcnNNYW5hZ2VyLmNoYW5nZSh7XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXG5cdFx0XHRcdGNvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyksXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxuXHRcdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0fVxuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbkluLmNhbGwoXyA9PiB7XG5cdFx0XHRcdHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0dGhpcy5kZXN0cm95KClcblxuXHRcdFx0dGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiByZXNvbHZlLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0ZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcblx0fVxuXG5cdG9uV2hlZWwoeyBwaXhlbFkgfSkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmNzM5Mzg2YWJlZGQ3ZjY2ZTJmMFwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zVGl0bGVzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zTGFiZWwiLCJhbmltYXRpb25zSGlnaGxpZ2h0cyIsInByZWxvYWRlcnMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiY3JlYXRlUHJlbG9hZGVyIiwiYW5pbWF0aW9ucyIsIm1hcCIsIlRpdGxlIiwicHVzaCIsIlBhcmFncmFwaCIsIkxhYmVsIiwiSGlnaGxpZ2h0IiwiQXN5bmNMb2FkIiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ29sb3JzTWFuYWdlciIsImJhY2tncm91bmRDb2xvciIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJkZXN0cm95IiwiYW5pbWF0aW9uT3V0Iiwib25Db21wbGV0ZSIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwib25XaGVlbCIsInBpeGVsWSIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9