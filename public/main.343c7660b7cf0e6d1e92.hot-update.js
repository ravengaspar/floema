/*! For license information please see main.343c7660b7cf0e6d1e92.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/lodash/each.js"),a=s("./node_modules/lodash/map.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s("./app/animations/Title.js"),o=s("./app/animations/Paragraph.js"),h=s("./app/animations/Label.js"),m=s("./app/animations/Highlight.js"),d=s("./app/classes/AsyncLoad.js"),c=s("./app/classes/Colors.js");class u{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.id=s,this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationsTitles=a(this.elements.animationsTitles,(e=>new r.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=a(this.elements.animationsParagraphs,(e=>new o.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=a(this.elements.animationsLabel,(e=>new h.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=a(this.elements.animationsHighlights,(e=>new m.default({element:e}))),this.animations.push(...this.animationsHighlights)}createPreloader(){this.preloaders=a(this.elements.preloaders,(e=>new d.default({element:e})))}show(){return new Promise((e=>{c.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.destroy(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}onWheel({pixelY:e}){this.scroll.target+=e}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}destroy(){this.removeEventListeners()}}}},(function(e){e.h=()=>"e38e14ec5549d8dda4dc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLYSxPQUFPSSxNQUFRakIsS0FBS0YsU0FBUzBELFFBQVFDLGFBQWVwQyxPQUFPcUMsYUFFakV4QyxFQUFLbEIsS0FBSzhCLFlBQVk2QixHQUFhQSxFQUFVSixZQUM3QyxDQUVESyxTQUFRLE9BQUVDLElBQ1Q3RCxLQUFLYSxPQUFPRSxRQUFVOEMsQ0FDdEIsQ0FJREMsU0FDQzlELEtBQUthLE9BQU9FLE9BQVMrQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHOUMsS0FBS2EsT0FBT0ksTUFBT2pCLEtBQUthLE9BQU9FLFFBRXhFZixLQUFLYSxPQUFPQyxRQUFVZ0MsRUFBQUEsUUFBQUEsTUFBQUEsWUFBdUI5QyxLQUFLYSxPQUFPQyxRQUFTZCxLQUFLYSxPQUFPRSxPQUFRLElBRWxGZixLQUFLYSxPQUFPQyxRQUFVLE1BQ3pCZCxLQUFLYSxPQUFPQyxRQUFVLEdBR25CZCxLQUFLRixTQUFTMEQsVUFDakJ4RCxLQUFLRixTQUFTMEQsUUFBUU8sTUFBTS9ELEtBQUtRLGlCQUFvQixlQUFjUixLQUFLYSxPQUFPQyxhQUNoRixDQUdEb0Msb0JBQ0M3QixPQUFPMkMsaUJBQWlCLGFBQWNoRSxLQUFLaUUsa0JBQzNDLENBRURDLHVCQUNDN0MsT0FBTzJDLGlCQUFpQixhQUFjaEUsS0FBS2lFLGtCQUMzQyxDQUVEYixVQUNDcEQsS0FBS2tFLHNCQUNMLGtCQ3RMRkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJ1xuaW1wb3J0IFByZWZpeCBmcm9tICdwcmVmaXgnXG5cbmltcG9ydCBUaXRsZSBmcm9tICdhbmltYXRpb25zL1RpdGxlJ1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdhbmltYXRpb25zL1BhcmFncmFwaCdcbmltcG9ydCBMYWJlbCBmcm9tICdhbmltYXRpb25zL0xhYmVsJ1xuaW1wb3J0IEhpZ2hsaWdodCBmcm9tICdhbmltYXRpb25zL0hpZ2hsaWdodCdcblxuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCdcbmltcG9ydCB7IENvbG9yc01hbmFnZXIgfSBmcm9tICdjbGFzc2VzL0NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG5cdGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcblx0XHR0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuXHRcdHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcblx0XHRcdC4uLmVsZW1lbnRzLFxuXHRcdFx0YW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNMYWJlbDogJ1tkYXRhLWFuaW1hdGlvbj1cImxhYmVsXCJdJyxcblx0XHRcdGFuaW1hdGlvbnNIaWdobGlnaHRzOiAnW2RhdGEtYW5pbWF0aW9uPVwiaGlnaGxpZ2h0XCJdJyxcblx0XHRcdHByZWxvYWRlcnM6ICdbZGF0YS1zcmNdJyxcblx0XHR9XG5cdFx0dGhpcy5pZCA9IGlkXG5cblx0XHR0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcblx0fVxuXG5cdGNyZWF0ZSgpIHtcblx0XHR0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG5cdFx0dGhpcy5lbGVtZW50cyA9IHt9XG5cblx0XHR0aGlzLnNjcm9sbCA9IHtcblx0XHRcdGN1cnJlbnQ6IDAsXG5cdFx0XHR0YXJnZXQ6IDAsXG5cdFx0XHRsYXN0OiAwLFxuXHRcdFx0bGltaXQ6IDAsXG5cdFx0fVxuXG5cdFx0ZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG5cdFx0XHRcdGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG5cdFx0XHRcdEFycmF5LmlzQXJyYXkoZW50cnkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cblx0XHRcdFx0aWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0dGhpcy5jcmVhdGVBbmltYXRpb25zKClcblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdH1cblxuXHRjcmVhdGVBbmltYXRpb25zKCkge1xuXHRcdHRoaXMuYW5pbWF0aW9ucyA9IFtdXG5cblx0XHQvLyB0aXRsZVxuXHRcdHRoaXMuYW5pbWF0aW9uc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBUaXRsZSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNUaXRsZXMpXG5cblx0XHQvLyBwYXJhZ3JhcGhcblx0XHR0aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0dGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zUGFyYWdyYXBocylcblxuXHRcdC8vIGxhYmVsXG5cdFx0dGhpcy5hbmltYXRpb25zTGFiZWwgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zTGFiZWwsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBMYWJlbCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNMYWJlbClcblxuXHRcdC8vIGhpZ2hsaWdodFxuXHRcdHRoaXMuYW5pbWF0aW9uc0hpZ2hsaWdodHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zSGlnaGxpZ2h0cywgZWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IEhpZ2hsaWdodCh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHR9KVxuXHRcdH0pXG5cblx0XHR0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNIaWdobGlnaHRzKVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVycyA9IG1hcCh0aGlzLmVsZW1lbnRzLnByZWxvYWRlcnMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBBc3luY0xvYWQoeyBlbGVtZW50IH0pXG5cdFx0fSlcblx0fVxuXG5cdHNob3coKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0Q29sb3JzTWFuYWdlci5jaGFuZ2Uoe1xuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZCcpLFxuXHRcdFx0XHRjb2xvcjogdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jb2xvcicpLFxuXHRcdFx0fSlcblx0XHRcdHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcblx0XHRcdEdTQVAuZnJvbVRvKFxuXHRcdFx0XHR0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhdXRvQWxwaGE6IDEsXG5cdFx0XHRcdH1cblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRpb25Jbi5jYWxsKF8gPT4ge1xuXHRcdFx0XHR0aGlzLCB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXMuZGVzdHJveSgpXG5cblx0XHRcdHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cblx0XHRcdEdTQVAudG8odGhpcy5lbGVtZW50LCB7XG5cdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0b25Db21wbGV0ZTogcmVzb2x2ZSxcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG5cdFx0XHR0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuXHRcdGVhY2godGhpcy5hbmltYXRpb25zLCBhbmltYXRpb24gPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpXG5cdH1cblxuXHRvbldoZWVsKHsgcGl4ZWxZIH0pIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZXG5cdH1cblxuXHQvKiBMb29wICovXG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoMCwgdGhpcy5zY3JvbGwubGltaXQsIHRoaXMuc2Nyb2xsLnRhcmdldClcblxuXHRcdHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKHRoaXMuc2Nyb2xsLmN1cnJlbnQsIHRoaXMuc2Nyb2xsLnRhcmdldCwgMC4xKVxuXG5cdFx0aWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XG5cdFx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gMFxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG5cdFx0XHR0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG5cblx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZTM4ZTE0ZWM1NTQ5ZDhkZGE0ZGNcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwiYW5pbWF0aW9uc1RpdGxlcyIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc0xhYmVsIiwiYW5pbWF0aW9uc0hpZ2hsaWdodHMiLCJwcmVsb2FkZXJzIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlQW5pbWF0aW9ucyIsImNyZWF0ZVByZWxvYWRlciIsImFuaW1hdGlvbnMiLCJtYXAiLCJUaXRsZSIsInB1c2giLCJQYXJhZ3JhcGgiLCJMYWJlbCIsIkhpZ2hsaWdodCIsIkFzeW5jTG9hZCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsIkNvbG9yc01hbmFnZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJjb2xvciIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwiZGVzdHJveSIsImFuaW1hdGlvbk91dCIsIm9uQ29tcGxldGUiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsIm9uV2hlZWwiLCJwaXhlbFkiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlV2hlZWxFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9