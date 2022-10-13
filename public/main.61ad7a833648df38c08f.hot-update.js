/*! For license information please see main.61ad7a833648df38c08f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var i=s("./node_modules/lodash/each.js"),a=s("./node_modules/lodash/map.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./node_modules/normalize-wheel/index.js"),r=s("./app/animations/Title.js"),h=s("./app/animations/Paragraph.js"),m=s("./app/animations/Label.js"),d=s("./app/animations/Highlight.js"),u=s("./app/classes/AsyncLoad.js"),c=s("./app/classes/Colors.js");class p{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationsTitles=a(this.elements.animationsTitles,(e=>new r.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=a(this.elements.animationsParagraphs,(e=>new h.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=a(this.elements.animationsLabel,(e=>new m.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=a(this.elements.animationsHighlights,(e=>new d.default({element:e}))),this.animations.push(...this.animationsHighlights)}createPreloader(){this.preloaders=a(this.elements.preloaders,(e=>new u.default({element:e})))}show(){return new Promise((e=>{c.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}destroy(){}}}},(function(e){e.h=()=>"79f84915801482831529"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MWFkN2E4MzM2NDhkZjM4YzA4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2dCQWNlLE1BQU1BLEVBQ3BCQyxhQUFZLFFBQUVDLEVBQUYsU0FBV0MsRUFBWCxHQUFxQkMsSUFDaENDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFDcEJKLEVBQ0hLLGlCQUFrQiwyQkFDbEJDLHFCQUFzQiwrQkFDdEJDLGdCQUFpQiwyQkFDakJDLHFCQUFzQiwrQkFDdEJDLFdBQVksY0FFYlAsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS1Esa0JBQW9CUixLQUFLUyxhQUFhQyxLQUFLVixNQUNoREEsS0FBS1csZ0JBQWtCQyxFQUFPLFlBQzlCLENBRURDLFNBQ0NiLEtBQUtILFFBQVVpQixTQUFTQyxjQUFjZixLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCRSxLQUFLZ0IsT0FBUyxDQUNiQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxNQUFPLEdBR1JDLEVBQUtyQixLQUFLRSxrQkFBa0IsQ0FBQ29CLEVBQU9DLEtBRWxDRCxhQUFpQkUsT0FBT0MsYUFDeEJILGFBQWlCRSxPQUFPRSxVQUN4QkMsTUFBTUMsUUFBUU4sR0FFZHRCLEtBQUtGLFNBQVN5QixHQUFPRCxHQUVyQnRCLEtBQUtGLFNBQVN5QixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJ0QixLQUFLRixTQUFTeUIsR0FBS08sT0FDdEI5QixLQUFLRixTQUFTeUIsR0FBTyxLQUNtQixJQUE5QnZCLEtBQUtGLFNBQVN5QixHQUFLTyxTQUM3QjlCLEtBQUtGLFNBQVN5QixHQUFPVCxTQUFTQyxjQUFjTyxJQUU3QyxJQUdGdEIsS0FBSytCLG1CQUNML0IsS0FBS2dDLGlCQUNMLENBRURELG1CQUNDL0IsS0FBS2lDLFdBQWEsR0FHbEJqQyxLQUFLRyxpQkFBbUIrQixFQUFJbEMsS0FBS0YsU0FBU0ssa0JBQWtCTixHQUNwRCxJQUFJc0MsRUFBQUEsUUFBTSxDQUNoQnRDLGNBSUZHLEtBQUtpQyxXQUFXRyxRQUFRcEMsS0FBS0csa0JBRzdCSCxLQUFLSSxxQkFBdUI4QixFQUFJbEMsS0FBS0YsU0FBU00sc0JBQXNCUCxHQUM1RCxJQUFJd0MsRUFBQUEsUUFBVSxDQUNwQnhDLGNBSUZHLEtBQUtpQyxXQUFXRyxRQUFRcEMsS0FBS0ksc0JBRzdCSixLQUFLSyxnQkFBa0I2QixFQUFJbEMsS0FBS0YsU0FBU08saUJBQWlCUixHQUNsRCxJQUFJeUMsRUFBQUEsUUFBTSxDQUNoQnpDLGNBSUZHLEtBQUtpQyxXQUFXRyxRQUFRcEMsS0FBS0ssaUJBRzdCTCxLQUFLTSxxQkFBdUI0QixFQUFJbEMsS0FBS0YsU0FBU1Esc0JBQXNCVCxHQUM1RCxJQUFJMEMsRUFBQUEsUUFBVSxDQUNwQjFDLGNBSUZHLEtBQUtpQyxXQUFXRyxRQUFRcEMsS0FBS00scUJBQzdCLENBRUQwQixrQkFDQ2hDLEtBQUtPLFdBQWEyQixFQUFJbEMsS0FBS0YsU0FBU1MsWUFBWVYsR0FDeEMsSUFBSTJDLEVBQUFBLFFBQVUsQ0FBRTNDLGFBRXhCLENBRUQ0QyxPQUNDLE9BQU8sSUFBSUMsU0FBUUMsSUFDbEJDLEVBQUFBLGNBQUFBLE9BQXFCLENBQ3BCQyxnQkFBaUI3QyxLQUFLSCxRQUFRaUQsYUFBYSxtQkFDM0NDLE1BQU8vQyxLQUFLSCxRQUFRaUQsYUFBYSxnQkFFbEM5QyxLQUFLZ0QsWUFBY0MsRUFBQUEsUUFBQUEsV0FDbkJBLEVBQUFBLFFBQUFBLE9BQ0NqRCxLQUFLSCxRQUNMLENBQ0NxRCxVQUFXLEdBRVosQ0FDQ0EsVUFBVyxJQUlibEQsS0FBS2dELFlBQVlHLE1BQUtDLElBQ2ZwRCxLQUFLcUQsb0JBQ1hWLEdBQVMsR0FGVixHQUtELENBRURXLE9BQ0MsT0FBTyxJQUFJWixTQUFRQyxJQUNsQjNDLEtBQUt1RCxhQUFlTixFQUFBQSxRQUFBQSxXQUVwQkEsRUFBQUEsUUFBQUEsR0FBUWpELEtBQUtILFFBQVMsQ0FDckJxRCxVQUFXLEVBQ1hNLFdBQVliLEdBRmIsR0FLRCxDQUdEbEMsYUFBYWdELEdBQ1osTUFBTSxPQUFFQyxHQUFXQyxFQUFlRixHQUNsQ3pELEtBQUtnQixPQUFPRSxRQUFVd0MsQ0FDdEIsQ0FFREUsV0FDSzVELEtBQUtGLFNBQVMrRCxVQUNqQjdELEtBQUtnQixPQUFPSSxNQUFRcEIsS0FBS0YsU0FBUytELFFBQVFDLGFBQWV0QyxPQUFPdUMsYUFFakUxQyxFQUFLckIsS0FBS2lDLFlBQVkrQixHQUFhQSxFQUFVSixZQUM3QyxDQUlESyxTQUNDakUsS0FBS2dCLE9BQU9FLE9BQVMrQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHakQsS0FBS2dCLE9BQU9JLE1BQU9wQixLQUFLZ0IsT0FBT0UsUUFFeEVsQixLQUFLZ0IsT0FBT0MsUUFBVWdDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCakQsS0FBS2dCLE9BQU9DLFFBQVNqQixLQUFLZ0IsT0FBT0UsT0FBUSxJQUVsRmxCLEtBQUtnQixPQUFPQyxRQUFVLE1BQ3pCakIsS0FBS2dCLE9BQU9DLFFBQVUsR0FHbkJqQixLQUFLRixTQUFTK0QsVUFDakI3RCxLQUFLRixTQUFTK0QsUUFBUUssTUFBTWxFLEtBQUtXLGlCQUFvQixlQUFjWCxLQUFLZ0IsT0FBT0MsYUFDaEYsQ0FHRG9DLG9CQUNDN0IsT0FBTzJDLGlCQUFpQixhQUFjbkUsS0FBS1Esa0JBQzNDLENBRUQ0RCx1QkFDQ0MsNEJBQTRCLGFBQWNyRSxLQUFLUSxrQkFDL0MsQ0FHQThELFVBRUMsa0JDekxIQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5cbmltcG9ydCBUaXRsZSBmcm9tICdhbmltYXRpb25zL1RpdGxlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdhbmltYXRpb25zL1BhcmFncmFwaCdcbmltcG9ydCBMYWJlbCBmcm9tICdhbmltYXRpb25zL0xhYmVsJ1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdhbmltYXRpb25zL0hpZ2hsaWdodCdcblxuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCdcbmltcG9ydCB7IENvbG9yc01hbmFnZXIgfSBmcm9tICdjbGFzc2VzL0NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcblx0XHR0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuXHRcdHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcblx0XHRcdC4uLmVsZW1lbnRzLFxuXHRcdFx0YW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNMYWJlbDogJ1tkYXRhLWFuaW1hdGlvbj1cImxhYmVsXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNIaWdobGlnaHRzOiAnW2RhdGEtYW5pbWF0aW9uPVwiaGlnaGxpZ2h0XCJdJyxcblx0XHRcdHByZWxvYWRlcnM6ICdbZGF0YS1zcmNdJyxcblx0XHR9XG5cdFx0dGhpcy5pZCA9IGlkXG5cblx0XHR0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKVxuXHRcdHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KCd0cmFuc2Zvcm0nKVxuXHR9XG5cblx0Y3JlYXRlKCkge1xuXHRcdHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcilcblx0XHR0aGlzLmVsZW1lbnRzID0ge31cblxuXHRcdHRoaXMuc2Nyb2xsID0ge1xuXHRcdFx0Y3VycmVudDogMCxcblx0XHRcdHRhcmdldDogMCxcblx0XHRcdGxhc3Q6IDAsXG5cdFx0XHRsaW1pdDogMCxcblx0XHR9XG5cblx0XHRlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcblx0XHRcdGlmIChcblx0XHRcdFx0ZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcblx0XHRcdFx0ZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcblx0XHRcdFx0QXJyYXkuaXNBcnJheShlbnRyeSlcblx0XHRcdCkge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuXHRcdFx0XHRpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGxcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0fVxuXG5cdGNyZWF0ZUFuaW1hdGlvbnMoKSB7XG5cdFx0dGhpcy5hbmltYXRpb25zID0gW11cblxuXHRcdC8vIHRpdGxlXG5cdFx0dGhpcy5hbmltYXRpb25zVGl0bGVzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1RpdGxlcywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFRpdGxlKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcylcblxuXHRcdC8vIHBhcmFncmFwaFxuXHRcdHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IFBhcmFncmFwaCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKVxuXG5cdFx0Ly8gbGFiZWxcblx0XHR0aGlzLmFuaW1hdGlvbnNMYWJlbCA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNMYWJlbCwgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IExhYmVsKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0xhYmVsKVxuXG5cdFx0Ly8gaGlnaGxpZ2h0XG5cdFx0dGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNIaWdobGlnaHRzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgSGlnaGxpZ2h0KHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMpXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXJzID0gbWFwKHRoaXMuZWxlbWVudHMucHJlbG9hZGVycywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEFzeW5jTG9hZCh7IGVsZW1lbnQgfSlcblx0XHR9KVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHRDb2xvcnNNYW5hZ2VyLmNoYW5nZSh7XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXG5cdFx0XHRcdGNvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyksXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxuXHRcdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0fVxuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbkluLmNhbGwoXyA9PiB7XG5cdFx0XHRcdHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0dGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiByZXNvbHZlLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblxuXHRvbk1vdXNlV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCB7IHBpeGVsWSB9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodFxuXG5cdFx0ZWFjaCh0aGlzLmFuaW1hdGlvbnMsIGFuaW1hdGlvbiA9PiBhbmltYXRpb24ub25SZXNpemUoKSlcblx0fVxuXG5cdC8qIExvb3AgKi9cblxuXHR1cGRhdGUoKSB7XG5cdFx0dGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG5cdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cblx0XHRpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcblx0XHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcilcblx0XHRcdHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVt0aGlzLnRyYW5zZm9ybVByZWZpeF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWBcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpXG5cdH1cblxuXHRyZW1vdmVFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3dOYU5weG92ZUV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG5cblxuICBkZXN0cm95KCkge1xuXG4gIH1cblxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzlmODQ5MTU4MDE0ODI4MzE1MjlcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc1RpdGxlcyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc0xhYmVsIiwiYW5pbWF0aW9uc0hpZ2hsaWdodHMiLCJwcmVsb2FkZXJzIiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNyZWF0ZVByZWxvYWRlciIsImFuaW1hdGlvbnMiLCJtYXAiLCJUaXRsZSIsInB1c2giLCJQYXJhZ3JhcGgiLCJMYWJlbCIsIkhpZ2hsaWdodCIsIkFzeW5jTG9hZCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkNvbG9yc01hbmFnZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwiYW5pbWF0aW9uT3V0Iiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwiTm9ybWFsaXplV2hlZWwiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwid2luZG93TmFOcHhvdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==