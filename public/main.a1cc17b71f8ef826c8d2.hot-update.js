/*! For license information please see main.a1cc17b71f8ef826c8d2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/lodash/each.js"),n=s("./node_modules/lodash/map.js"),a=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./node_modules/normalize-wheel/index.js"),r=s("./app/animations/Title.js"),h=s("./app/animations/Paragraph.js"),m=s("./app/animations/Label.js"),d=s("./app/animations/Highlight.js"),u=s("./app/classes/Colors.js");class c{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:["data-src"]},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animationsTitles=n(this.elements.animationsTitles,(e=>new r.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=n(this.elements.animationsParagraphs,(e=>new h.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=n(this.elements.animationsLabel,(e=>new m.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=n(this.elements.animationsHighlights,(e=>new d.default({element:e}))),this.animations.push(...this.animationsHighlights)}show(){return new Promise((e=>{u.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=a.default.timeline(),a.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.animationOut=a.default.timeline(),a.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}update(){this.scroll.target=a.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=a.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"b7bb7de4c9512e7c640f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0QsS0FBS2dCLE9BQU9JLE1BQVFwQixLQUFLRixTQUFTNkQsUUFBUUMsYUFBZXBDLE9BQU9xQyxhQUVqRXhDLEVBQUtyQixLQUFLZ0MsWUFBWThCLEdBQWFBLEVBQVVKLFlBQzdDLENBSURLLFNBQ0MvRCxLQUFLZ0IsT0FBT0UsT0FBUzZCLEVBQUFBLFFBQUFBLE1BQUFBLE1BQWlCLEVBQUcvQyxLQUFLZ0IsT0FBT0ksTUFBT3BCLEtBQUtnQixPQUFPRSxRQUV4RWxCLEtBQUtnQixPQUFPQyxRQUFVOEIsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUIvQyxLQUFLZ0IsT0FBT0MsUUFBU2pCLEtBQUtnQixPQUFPRSxPQUFRLElBRWxGbEIsS0FBS2dCLE9BQU9DLFFBQVUsTUFDekJqQixLQUFLZ0IsT0FBT0MsUUFBVSxHQUduQmpCLEtBQUtGLFNBQVM2RCxVQUNqQjNELEtBQUtGLFNBQVM2RCxRQUFRSyxNQUFNaEUsS0FBS1csaUJBQW9CLGVBQWNYLEtBQUtnQixPQUFPQyxhQUNoRixDQUdEa0Msb0JBQ0MzQixPQUFPeUMsaUJBQWlCLGFBQWNqRSxLQUFLUSxrQkFDM0MsQ0FFRDBELHVCQUNDQyw0QkFBNEIsYUFBY25FLEtBQUtRLGtCQUMvQyxrQkMzS0Y0RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBUaXRsZSBmcm9tICdhbmltYXRpb25zL1RpdGxlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdhbmltYXRpb25zL1BhcmFncmFwaCdcbmltcG9ydCBMYWJlbCBmcm9tICdhbmltYXRpb25zL0xhYmVsJ1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdhbmltYXRpb25zL0hpZ2hsaWdodCdcblxuaW1wb3J0IHsgQ29sb3JzTWFuYWdlciB9IGZyb20gJ2NsYXNzZXMvQ29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG5cdFx0dGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuXHRcdFx0Li4uZWxlbWVudHMsXG5cdFx0XHRhbmltYXRpb25zVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc0xhYmVsOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc0hpZ2hsaWdodHM6ICdbZGF0YS1hbmltYXRpb249XCJoaWdobGlnaHRcIl0nLFxuICAgICAgcHJlbG9hZGVyczogWydkYXRhLXNyYyddXG5cdFx0fVxuXHRcdHRoaXMuaWQgPSBpZFxuXG5cdFx0dGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcblx0XHR0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG5cdFx0dGhpcy5lbGVtZW50cyA9IHt9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdFx0bGltaXQ6IDAsXG5cdFx0fVxuXG5cdFx0ZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoZW50cnkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cblx0XHRcdFx0aWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKClcblx0fVxuXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG5cdFx0dGhpcy5hbmltYXRpb25zID0gW11cblxuXHRcdC8vIHRpdGxlXG5cdFx0dGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcylcblxuXHRcdC8vIHBhcmFncmFwaFxuXHRcdHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFncmFwaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKVxuXG5cdFx0Ly8gbGFiZWxcblx0XHR0aGlzLmFuaW1hdGlvbnNMYWJlbCA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNMYWJlbCwgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IExhYmVsKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0xhYmVsKVxuXG5cdFx0Ly8gaGlnaGxpZ2h0XG5cdFx0dGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNIaWdobGlnaHRzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgSGlnaGxpZ2h0KHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMpXG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdENvbG9yc01hbmFnZXIuY2hhbmdlKHtcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQnKSxcblx0XHRcdFx0Y29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcblx0XHRcdH0pXG5cdFx0XHR0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpXG5cdFx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdFx0dGhpcy5lbGVtZW50LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0aW9uSW4uY2FsbChfID0+IHtcblx0XHRcdFx0dGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHR0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKVxuXG5cdFx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdG9uQ29tcGxldGU6IHJlc29sdmUsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvbk1vdXNlV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCB7IHBpeGVsWSB9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0ZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiN2JiN2RlNGM5NTEyZTdjNjQwZlwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJhbmltYXRpb25zVGl0bGVzIiwiYW5pbWF0aW9uc1BhcmFncmFwaHMiLCJhbmltYXRpb25zTGFiZWwiLCJhbmltYXRpb25zSGlnaGxpZ2h0cyIsInByZWxvYWRlcnMiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGwiLCJjdXJyZW50IiwidGFyZ2V0IiwibGFzdCIsImxpbWl0IiwiZWFjaCIsImVudHJ5Iiwia2V5Iiwid2luZG93IiwiSFRNTEVsZW1lbnQiLCJOb2RlTGlzdCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsIm1hcCIsIlRpdGxlIiwicHVzaCIsIlBhcmFncmFwaCIsIkxhYmVsIiwiSGlnaGxpZ2h0Iiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiQ29sb3JzTWFuYWdlciIsImJhY2tncm91bmRDb2xvciIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=