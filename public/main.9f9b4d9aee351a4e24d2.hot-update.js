/*! For license information please see main.9f9b4d9aee351a4e24d2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/lodash/each.js"),a=s("./node_modules/lodash/map.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=s("./node_modules/normalize-wheel/index.js"),r=s("./app/animations/Title.js"),h=s("./app/animations/Paragraph.js"),m=s("./app/animations/Label.js"),d=s("./app/animations/Highlight.js"),c=(s("./app/classes/AsyncLoad.js"),s("./app/classes/Colors.js"));class u{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:["data-src"]},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationsTitles=a(this.elements.animationsTitles,(e=>new r.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=a(this.elements.animationsParagraphs,(e=>new h.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=a(this.elements.animationsLabel,(e=>new m.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=a(this.elements.animationsHighlights,(e=>new d.default({element:e}))),this.animations.push(...this.animationsHighlights)}createPreloader(){this.preloaders=a(this.elements.preloaders,(e=>new Preloader(e)))}show(){return new Promise((e=>{c.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){windowNaNpxoveEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"e9f3094935f1620c41fe"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ1osTUFBTSxPQUFFQyxHQUFXQyxFQUFlRixHQUNsQ3pELEtBQUtnQixPQUFPRSxRQUFVd0MsQ0FDdEIsQ0FFREUsV0FDSzVELEtBQUtGLFNBQVMrRCxVQUNqQjdELEtBQUtnQixPQUFPSSxNQUFRcEIsS0FBS0YsU0FBUytELFFBQVFDLGFBQWV0QyxPQUFPdUMsYUFFakUxQyxFQUFLckIsS0FBS2lDLFlBQVkrQixHQUFhQSxFQUFVSixZQUM3QyxDQUlESyxTQUNDakUsS0FBS2dCLE9BQU9FLE9BQVMrQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHakQsS0FBS2dCLE9BQU9JLE1BQU9wQixLQUFLZ0IsT0FBT0UsUUFFeEVsQixLQUFLZ0IsT0FBT0MsUUFBVWdDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCakQsS0FBS2dCLE9BQU9DLFFBQVNqQixLQUFLZ0IsT0FBT0UsT0FBUSxJQUVsRmxCLEtBQUtnQixPQUFPQyxRQUFVLE1BQ3pCakIsS0FBS2dCLE9BQU9DLFFBQVUsR0FHbkJqQixLQUFLRixTQUFTK0QsVUFDakI3RCxLQUFLRixTQUFTK0QsUUFBUUssTUFBTWxFLEtBQUtXLGlCQUFvQixlQUFjWCxLQUFLZ0IsT0FBT0MsYUFDaEYsQ0FHRG9DLG9CQUNDN0IsT0FBTzJDLGlCQUFpQixhQUFjbkUsS0FBS1Esa0JBQzNDLENBRUQ0RCx1QkFDQ0MsNEJBQTRCLGFBQWNyRSxLQUFLUSxrQkFDL0Msa0JDbkxGOEQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuXG5pbXBvcnQgVGl0bGUgZnJvbSAnYW5pbWF0aW9ucy9UaXRsZSdcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnYW5pbWF0aW9ucy9QYXJhZ3JhcGgnXG5pbXBvcnQgTGFiZWwgZnJvbSAnYW5pbWF0aW9ucy9MYWJlbCdcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnYW5pbWF0aW9ucy9IaWdobGlnaHQnXG5cbmltcG9ydCBBc3luY0xvYWQgZnJvbSAnY2xhc3Nlcy9Bc3luY0xvYWQnXG5pbXBvcnQgeyBDb2xvcnNNYW5hZ2VyIH0gZnJvbSAnY2xhc3Nlcy9Db2xvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xuXHRjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGVsZW1lbnRzLCBpZCB9KSB7XG5cdFx0dGhpcy5zZWxlY3RvciA9IGVsZW1lbnRcblx0XHR0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XG5cdFx0XHQuLi5lbGVtZW50cyxcblx0XHRcdGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXG5cdFx0XHRhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXG5cdFx0XHRhbmltYXRpb25zTGFiZWw6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXG5cdFx0XHRhbmltYXRpb25zSGlnaGxpZ2h0czogJ1tkYXRhLWFuaW1hdGlvbj1cImhpZ2hsaWdodFwiXScsXG5cdFx0XHRwcmVsb2FkZXJzOiBbJ2RhdGEtc3JjJ10sXG5cdFx0fVxuXHRcdHRoaXMuaWQgPSBpZFxuXG5cdFx0dGhpcy5vbk1vdXNlV2hlZWxFdmVudCA9IHRoaXMub25Nb3VzZVdoZWVsLmJpbmQodGhpcylcblx0XHR0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG5cdFx0dGhpcy5lbGVtZW50cyA9IHt9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdFx0bGltaXQ6IDAsXG5cdFx0fVxuXG5cdFx0ZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoZW50cnkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cblx0XHRcdFx0aWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKClcblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdH1cblxuXHRjcmVhdGVBbmltYXRpb25zKCkge1xuXHRcdHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cblx0XHQvLyB0aXRsZVxuXHRcdHRoaXMuYW5pbWF0aW9uc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBUaXRsZSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNUaXRsZXMpXG5cblx0XHQvLyBwYXJhZ3JhcGhcblx0XHR0aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0dGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zUGFyYWdyYXBocylcblxuXHRcdC8vIGxhYmVsXG5cdFx0dGhpcy5hbmltYXRpb25zTGFiZWwgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zTGFiZWwsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBMYWJlbCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNMYWJlbClcblxuXHRcdC8vIGhpZ2hsaWdodFxuXHRcdHRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zSGlnaGxpZ2h0cywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEhpZ2hsaWdodCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNIaWdobGlnaHRzKVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVycyA9IG1hcCh0aGlzLmVsZW1lbnRzLnByZWxvYWRlcnMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQcmVsb2FkZXIoZWxlbWVudClcblx0XHR9KVxuXHR9XG5cblx0c2hvdygpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHRDb2xvcnNNYW5hZ2VyLmNoYW5nZSh7XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyksXG5cdFx0XHRcdGNvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNvbG9yJyksXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKVxuXHRcdFx0R1NBUC5mcm9tVG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMSxcblx0XHRcdFx0fVxuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbkluLmNhbGwoXyA9PiB7XG5cdFx0XHRcdHRoaXMsIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0dGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuXHRcdFx0R1NBUC50byh0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRvbkNvbXBsZXRlOiByZXNvbHZlLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25Nb3VzZVdoZWVsKGV2ZW50KSB7XG5cdFx0Y29uc3QgeyBwaXhlbFkgfSA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFlcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG5cdFx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpXG5cdH1cblxuXHQvKiBMb29wICovXG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG5cdFx0XHR0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93TmFOcHhvdmVFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTlmMzA5NDkzNWYxNjIwYzQxZmVcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc1RpdGxlcyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc0xhYmVsIiwiYW5pbWF0aW9uc0hpZ2hsaWdodHMiLCJwcmVsb2FkZXJzIiwib25Nb3VzZVdoZWVsRXZlbnQiLCJvbk1vdXNlV2hlZWwiLCJiaW5kIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNyZWF0ZVByZWxvYWRlciIsImFuaW1hdGlvbnMiLCJtYXAiLCJUaXRsZSIsInB1c2giLCJQYXJhZ3JhcGgiLCJMYWJlbCIsIkhpZ2hsaWdodCIsIlByZWxvYWRlciIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkNvbG9yc01hbmFnZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwiYW5pbWF0aW9uT3V0Iiwib25Db21wbGV0ZSIsImV2ZW50IiwicGl4ZWxZIiwiTm9ybWFsaXplV2hlZWwiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwid2luZG93TmFOcHhvdmVFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9