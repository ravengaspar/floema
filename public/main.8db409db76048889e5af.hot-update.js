/*! For license information please see main.8db409db76048889e5af.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s("./node_modules/lodash/each.js"),a=s("./node_modules/lodash/map.js"),n=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),o=(s("./node_modules/normalize-wheel/index.js"),s("./app/animations/Title.js")),r=s("./app/animations/Paragraph.js"),h=s("./app/animations/Label.js"),m=s("./app/animations/Highlight.js"),d=s("./app/classes/AsyncLoad.js"),u=s("./app/classes/Colors.js");class c{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsTitles:'[data-animation="title"]',animationsParagraphs:'[data-animation="paragraph"]',animationsLabel:'[data-animation="label"]',animationsHighlights:'[data-animation="highlight"]',preloaders:"[data-src]"},this.id=s,this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=l("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations(),this.createPreloader()}createAnimations(){this.animations=[],this.animationsTitles=a(this.elements.animationsTitles,(e=>new o.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=a(this.elements.animationsParagraphs,(e=>new r.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabel=a(this.elements.animationsLabel,(e=>new h.default({element:e}))),this.animations.push(...this.animationsLabel),this.animationsHighlights=a(this.elements.animationsHighlights,(e=>new m.default({element:e}))),this.animations.push(...this.animationsHighlights)}createPreloader(){this.preloaders=a(this.elements.preloaders,(e=>new d.default({element:e})))}show(){return new Promise((e=>{u.ColorsManager.change({backgroundColor:this.element.getAttribute("data-background"),color:this.element.getAttribute("data-color")}),this.animationIn=n.default.timeline(),n.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.destroy(),this.animationOut=n.default.timeline(),n.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),i(this.animations,(e=>e.onResize()))}onWheel(e){}update(){this.scroll.target=n.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=n.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}destroy(){this.removeEventListeners()}}}},(function(e){e.h=()=>"df91d4c1dfaee903a90d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YixHQUtELENBR0RlLFdBQ08xRCxLQUFLRixTQUFTNkQsVUFDbEIzRCxLQUFLZ0IsT0FBT0ksTUFBUXBCLEtBQUtGLFNBQVM2RCxRQUFRQyxhQUFlcEMsT0FBT3FDLGFBRWxFeEMsRUFBS3JCLEtBQUtpQyxZQUFZNkIsR0FBYUEsRUFBVUosWUFDN0MsQ0FDQUssUUFBUUMsR0FFUCxDQUlGQyxTQUNDakUsS0FBS2dCLE9BQU9FLE9BQVMrQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHakQsS0FBS2dCLE9BQU9JLE1BQU9wQixLQUFLZ0IsT0FBT0UsUUFFeEVsQixLQUFLZ0IsT0FBT0MsUUFBVWdDLEVBQUFBLFFBQUFBLE1BQUFBLFlBQXVCakQsS0FBS2dCLE9BQU9DLFFBQVNqQixLQUFLZ0IsT0FBT0UsT0FBUSxJQUVsRmxCLEtBQUtnQixPQUFPQyxRQUFVLE1BQ3pCakIsS0FBS2dCLE9BQU9DLFFBQVUsR0FHbkJqQixLQUFLRixTQUFTNkQsVUFDakIzRCxLQUFLRixTQUFTNkQsUUFBUU8sTUFBTWxFLEtBQUtXLGlCQUFvQixlQUFjWCxLQUFLZ0IsT0FBT0MsYUFDaEYsQ0FHRG9DLG9CQUNDN0IsT0FBTzJDLGlCQUFpQixhQUFjbkUsS0FBS1Esa0JBQzNDLENBRUQ0RCx1QkFDQzVDLE9BQU8yQyxpQkFBaUIsYUFBY25FLEtBQUtRLGtCQUMzQyxDQUVEK0MsVUFDQ3ZELEtBQUtvRSxzQkFDTCxrQkN4TEZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcblxuaW1wb3J0IFRpdGxlIGZyb20gJ2FuaW1hdGlvbnMvVGl0bGUnXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJ2FuaW1hdGlvbnMvUGFyYWdyYXBoJ1xuaW1wb3J0IExhYmVsIGZyb20gJ2FuaW1hdGlvbnMvTGFiZWwnXG5pbXBvcnQgSGlnaGxpZ2h0IGZyb20gJ2FuaW1hdGlvbnMvSGlnaGxpZ2h0J1xuXG5pbXBvcnQgQXN5bmNMb2FkIGZyb20gJ2NsYXNzZXMvQXN5bmNMb2FkJ1xuaW1wb3J0IHsgQ29sb3JzTWFuYWdlciB9IGZyb20gJ2NsYXNzZXMvQ29sb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcblx0Y29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuXHRcdHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG5cdFx0dGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuXHRcdFx0Li4uZWxlbWVudHMsXG5cdFx0XHRhbmltYXRpb25zVGl0bGVzOiAnW2RhdGEtYW5pbWF0aW9uPVwidGl0bGVcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc1BhcmFncmFwaHM6ICdbZGF0YS1hbmltYXRpb249XCJwYXJhZ3JhcGhcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc0xhYmVsOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxuXHRcdFx0YW5pbWF0aW9uc0hpZ2hsaWdodHM6ICdbZGF0YS1hbmltYXRpb249XCJoaWdobGlnaHRcIl0nLFxuXHRcdFx0cHJlbG9hZGVyczogJ1tkYXRhLXNyY10nLFxuXHRcdH1cblx0XHR0aGlzLmlkID0gaWRcblxuXHRcdHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpXG5cdFx0dGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG5cdH1cblxuXHRjcmVhdGUoKSB7XG5cdFx0dGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuXHRcdHRoaXMuZWxlbWVudHMgPSB7fVxuXG5cdFx0dGhpcy5zY3JvbGwgPSB7XG5cdFx0XHRjdXJyZW50OiAwLFxuXHRcdFx0dGFyZ2V0OiAwLFxuXHRcdFx0bGFzdDogMCxcblx0XHRcdGxpbWl0OiAwLFxuXHRcdH1cblxuXHRcdGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuXHRcdFx0XHRlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuXHRcdFx0XHRBcnJheS5pc0FycmF5KGVudHJ5KVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KVxuXG5cdFx0XHRcdGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1trZXldID0gbnVsbFxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHR9XG5cblx0Y3JlYXRlQW5pbWF0aW9ucygpIHtcblx0XHR0aGlzLmFuaW1hdGlvbnMgPSBbXVxuXG5cdFx0Ly8gdGl0bGVcblx0XHR0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgVGl0bGUoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0dGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zVGl0bGVzKVxuXG5cdFx0Ly8gcGFyYWdyYXBoXG5cdFx0dGhpcy5hbmltYXRpb25zUGFyYWdyYXBocyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgUGFyYWdyYXBoKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdH0pXG5cdFx0fSlcblxuXHRcdHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMpXG5cblx0XHQvLyBsYWJlbFxuXHRcdHRoaXMuYW5pbWF0aW9uc0xhYmVsID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0xhYmVsLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgTGFiZWwoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0dGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zTGFiZWwpXG5cblx0XHQvLyBoaWdobGlnaHRcblx0XHR0aGlzLmFuaW1hdGlvbnNIaWdobGlnaHRzID0gbWFwKHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc0hpZ2hsaWdodHMsIGVsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBIaWdobGlnaHQoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0fSlcblx0XHR9KVxuXG5cdFx0dGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zSGlnaGxpZ2h0cylcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlcnMgPSBtYXAodGhpcy5lbGVtZW50cy5wcmVsb2FkZXJzLCBlbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBuZXcgQXN5bmNMb2FkKHsgZWxlbWVudCB9KVxuXHRcdH0pXG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdENvbG9yc01hbmFnZXIuY2hhbmdlKHtcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQnKSxcblx0XHRcdFx0Y29sb3I6IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKSxcblx0XHRcdH0pXG5cdFx0XHR0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpXG5cdFx0XHRHU0FQLmZyb21Ubyhcblx0XHRcdFx0dGhpcy5lbGVtZW50LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAxLFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0aW9uSW4uY2FsbChfID0+IHtcblx0XHRcdFx0dGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0XHRcdHJlc29sdmUoKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0aGlkZSgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHR0aGlzLmRlc3Ryb3koKVxuXG5cdFx0XHR0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKVxuXG5cdFx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdG9uQ29tcGxldGU6IHJlc29sdmUsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXG5cdG9uUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpXG4gICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG5cblx0XHRlYWNoKHRoaXMuYW5pbWF0aW9ucywgYW5pbWF0aW9uID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKVxuXHR9XG4gIG9uV2hlZWwoZXZlbnQpIHtcblxuICB9XG5cblx0LyogTG9vcCAqL1xuXG5cdHVwZGF0ZSgpIHtcblx0XHR0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKDAsIHRoaXMuc2Nyb2xsLmxpbWl0LCB0aGlzLnNjcm9sbC50YXJnZXQpXG5cblx0XHR0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZSh0aGlzLnNjcm9sbC5jdXJyZW50LCB0aGlzLnNjcm9sbC50YXJnZXQsIDAuMSlcblxuXHRcdGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xuXHRcdFx0dGhpcy5zY3JvbGwuY3VycmVudCA9IDBcblx0XHR9XG5cblx0XHRpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuXHRcdFx0dGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW3RoaXMudHJhbnNmb3JtUHJlZml4XSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYFxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcblx0fVxuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbk1vdXNlV2hlZWxFdmVudClcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRmOTFkNGMxZGZhZWU5MDNhOTBkXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNUaXRsZXMiLCJhbmltYXRpb25zUGFyYWdyYXBocyIsImFuaW1hdGlvbnNMYWJlbCIsImFuaW1hdGlvbnNIaWdobGlnaHRzIiwicHJlbG9hZGVycyIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUFuaW1hdGlvbnMiLCJjcmVhdGVQcmVsb2FkZXIiLCJhbmltYXRpb25zIiwibWFwIiwiVGl0bGUiLCJwdXNoIiwiUGFyYWdyYXBoIiwiTGFiZWwiLCJIaWdobGlnaHQiLCJBc3luY0xvYWQiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJDb2xvcnNNYW5hZ2VyIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0QXR0cmlidXRlIiwiY29sb3IiLCJhbmltYXRpb25JbiIsIkdTQVAiLCJhdXRvQWxwaGEiLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsImRlc3Ryb3kiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwib25SZXNpemUiLCJ3cmFwcGVyIiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhbmltYXRpb24iLCJvbldoZWVsIiwiZXZlbnQiLCJ1cGRhdGUiLCJzdHlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==