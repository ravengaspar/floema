/*! For license information please see main.5c4f4160d28ea759642c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),o=s("./app/utils/text.js"),i=s("./node_modules/ogl/src/core/Texture.js"),l=s("./node_modules/body-parser/index.js");class r extends n.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{const t=new window.Image;t.crossOrigin="anonymous",t.src=e,t.onload=e=>{s.image=t,this.onAssetLoaded(l.text)};const s=new i.Texture(this.canvas.gl,{generateMipmaps:!1});window.TEXTURES[e]=s}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"7fc4f5229bdff27239a8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41YzRmNDE2MGQyOGVhNzU5NjQyYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFZBT2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLE9BQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxhQUNUQyxTQUFVLENBQ1RDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBSWRDLEtBQUtQLE9BQVNBLEVBRWRRLE9BQU9DLFNBQVcsQ0FBQyxHQUVuQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNMUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxVQUViRCxFQUFBQSxFQUFBQSxPQUFNLENBQ0xSLFFBQVNLLEtBQUtKLFNBQVNDLE1BQ3ZCTyxXQUFZLFNBR2JKLEtBQUtKLFNBQVNTLFdBQWFMLEtBQUtKLFNBQVNDLE1BQU1TLGlCQUFpQixhQUVoRU4sS0FBS08sT0FBUyxFQUVkUCxLQUFLUSxjQUNMLENBRURBLGVBQ0NQLE9BQU9RLE9BQU9DLFNBQVFDLElBQ3JCLE1BQU1DLEVBQVEsSUFBSVgsT0FBT1ksTUFFekJELEVBQU1FLFlBQWMsWUFDcEJGLEVBQU1HLElBQU1KLEVBQ1pDLEVBQU1JLE9BQVNDLElBQ2RDLEVBQVFQLE1BQVFDLEVBRWhCWixLQUFLbUIsY0FBY0MsRUFBQUEsS0FBbkIsRUFHRCxNQUFNRixFQUFVLElBQUlHLEVBQUFBLFFBQVFyQixLQUFLUCxPQUFPNkIsR0FBSSxDQUMzQ0MsaUJBQWlCLElBR2xCdEIsT0FBT0MsU0FBU1MsR0FBU08sQ0FBekIsR0FFRCxDQUVEQyxjQUFjUixHQUNiWCxLQUFLTyxRQUFVLEVBRWYsTUFBTWlCLEVBQVV4QixLQUFLTyxPQUFTUCxLQUFLSixTQUFTNkIsT0FBT2xCLE9BQ25EUCxLQUFLSixTQUFTRyxXQUFXMkIsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSixNQUVuQyxJQUFaQSxHQUNIeEIsS0FBSzZCLFVBRU4sQ0FFREEsV0FDQyxPQUFPLElBQUlDLFNBQVFDLElBQ2xCL0IsS0FBS2dDLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDL0JDLE1BQU8sTUFHUmxDLEtBQUtnQyxXQUFXRyxHQUFHbkMsS0FBS0osU0FBU1MsV0FBWSxDQUM1QytCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHSnZDLEtBQUtnQyxXQUFXRyxHQUNmbkMsS0FBS0osU0FBU0csV0FDZCxDQUNDeUMsVUFBVyxFQUNYSixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLElBRUosU0FHRHZDLEtBQUtnQyxXQUFXRyxHQUNmbkMsS0FBS0wsUUFDTCxDQUNDeUMsU0FBVSxJQUNWQyxLQUFNLFdBQ05JLE9BQVEsRUFDUkMsZ0JBQWlCLGFBRWxCLE9BR0QxQyxLQUFLZ0MsV0FBV1csTUFBSzFCLElBQ3BCakIsS0FBSzRDLEtBQUssWUFBVixHQURELEdBSUQsQ0FFREMsVUFDQzdDLEtBQUtMLFFBQVFtRCxXQUFXQyxZQUFZL0MsS0FBS0wsUUFDekMsa0JDakhGcUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnb2dsJ1xuaW1wb3J0IHsgdGV4dCB9IGZyb20gJ2JvZHktcGFyc2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih7IGNhbnZhcyB9KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZWxlbWVudDogJy5wcmVsb2FkZXInLFxuXHRcdFx0ZWxlbWVudHM6IHtcblx0XHRcdFx0dGl0bGU6ICcucHJlbG9hZGVyX190ZXh0Jyxcblx0XHRcdFx0bnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJyxcblx0XHRcdFx0bnVtYmVyVGV4dDogJy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHR0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG5cdFx0d2luZG93LlRFWFRVUkVTID0ge31cblxuXHRcdHNwbGl0KHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG5cdFx0XHRleHByZXNzaW9uOiAnPGJyPicsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuXHRcdFx0ZXhwcmVzc2lvbjogJzxicj4nLFxuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG5cblx0XHR0aGlzLmxlbmd0aCA9IDBcblxuXHRcdHRoaXMuY3JlYXRlTG9hZGVyKClcblx0fVxuXG5cdGNyZWF0ZUxvYWRlcigpIHtcblx0XHR3aW5kb3cuQVNTRVRTLmZvckVhY2goaW1hZ2UgPT4ge1xuXHRcdFx0Y29uc3QgbWVkaWEgPSBuZXcgd2luZG93LkltYWdlKClcblxuXHRcdFx0bWVkaWEuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdFx0bWVkaWEuc3JjID0gaW1hZ2Vcblx0XHRcdG1lZGlhLm9ubG9hZCA9IF8gPT4ge1xuXHRcdFx0XHR0ZXh0dXJlLmltYWdlID0gbWVkaWFcblxuXHRcdFx0XHR0aGlzLm9uQXNzZXRMb2FkZWQodGV4dClcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG5cdFx0XHRcdGdlbmVyYXRlTWlwbWFwczogZmFsc2UsXG5cdFx0XHR9KVxuXG5cdFx0XHR3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdID0gdGV4dHVyZVxuXHRcdH0pXG5cdH1cblxuXHRvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG5cdFx0dGhpcy5sZW5ndGggKz0gMVxuXG5cdFx0Y29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXG5cdFx0dGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuXHRcdGlmIChwZXJjZW50ID09PSAxKSB7XG5cdFx0XHR0aGlzLm9uTG9hZGVkKClcblx0XHR9XG5cdH1cblxuXHRvbkxvYWRlZCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcblx0XHRcdFx0ZGVsYXk6IDEuNSxcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcblx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0c3RhZ2dlcjogMC4xLFxuXHRcdFx0XHR5OiAnMTAwJScsXG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQudG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdFx0c3RhZ2dlcjogMC4xLFxuXHRcdFx0XHRcdHk6IDUwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLT0xLjQnXG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byhcblx0XHRcdFx0dGhpcy5lbGVtZW50LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDEwMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLT0xJ1xuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmYzRmNTIyOWJkZmYyNzIzOWE4XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJ0aGlzIiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsIkFTU0VUUyIsImZvckVhY2giLCJpbWFnZSIsIm1lZGlhIiwiSW1hZ2UiLCJjcm9zc09yaWdpbiIsInNyYyIsIm9ubG9hZCIsIl8iLCJ0ZXh0dXJlIiwib25Bc3NldExvYWRlZCIsInRleHQiLCJUZXh0dXJlIiwiZ2wiLCJnZW5lcmF0ZU1pcG1hcHMiLCJwZXJjZW50IiwiaW1hZ2VzIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9