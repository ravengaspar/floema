/*! For license information please see main.73d5c9da7ae3c6b37ba9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),i=s("./app/utils/text.js"),o=s("./node_modules/ogl/src/core/Texture.js");class l extends n.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{new o.Texture(this.canvas.gl,{generateMipmaps:!1});window.TEXTURES[srt]}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"7950654d44bae6a501d6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43M2Q1YzlkYTdhZTNjNmIzN2JhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVRBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLE9BQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxhQUNUQyxTQUFVLENBQ1RDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBSWRDLEtBQUtQLE9BQVNBLEVBRWRRLE9BQU9DLFNBQVcsQ0FBQyxHQUVuQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNMUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxVQUViRCxFQUFBQSxFQUFBQSxPQUFNLENBQ0xSLFFBQVNLLEtBQUtKLFNBQVNDLE1BQ3ZCTyxXQUFZLFNBR2JKLEtBQUtKLFNBQVNTLFdBQWFMLEtBQUtKLFNBQVNDLE1BQU1TLGlCQUFpQixhQUVoRU4sS0FBS08sT0FBUyxFQUVkUCxLQUFLUSxjQUNMLENBRURBLGVBQ0NQLE9BQU9RLE9BQU9DLFNBQVFDLElBQ0wsSUFBSUMsRUFBQUEsUUFBUVosS0FBS1AsT0FBT29CLEdBQUksQ0FDM0NDLGlCQUFpQixJQUlmYixPQUFPQyxTQUFTYSxJQUFoQixHQUdKLENBRURDLGNBQWNMLEdBQ2JYLEtBQUtPLFFBQVUsRUFFZixNQUFNVSxFQUFVakIsS0FBS08sT0FBU1AsS0FBS0osU0FBU3NCLE9BQU9YLE9BQ25EUCxLQUFLSixTQUFTRyxXQUFXb0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSixNQUVuQyxJQUFaQSxHQUNIakIsS0FBS3NCLFVBRU4sQ0FFREEsV0FDQyxPQUFPLElBQUlDLFNBQVFDLElBQ2xCeEIsS0FBS3lCLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDL0JDLE1BQU8sTUFHUjNCLEtBQUt5QixXQUFXRyxHQUFHNUIsS0FBS0osU0FBU1MsV0FBWSxDQUM1Q3dCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHSmhDLEtBQUt5QixXQUFXRyxHQUNmNUIsS0FBS0osU0FBU0csV0FDZCxDQUNDa0MsVUFBVyxFQUNYSixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLElBRUosU0FHRGhDLEtBQUt5QixXQUFXRyxHQUNmNUIsS0FBS0wsUUFDTCxDQUNDa0MsU0FBVSxJQUNWQyxLQUFNLFdBQ05JLE9BQVEsRUFDUkMsZ0JBQWlCLGFBRWxCLE9BR0RuQyxLQUFLeUIsV0FBV1csTUFBS0MsSUFDcEJyQyxLQUFLc0MsS0FBSyxZQUFWLEdBREQsR0FJRCxDQUVEQyxVQUNDdkMsS0FBS0wsUUFBUTZDLFdBQVdDLFlBQVl6QyxLQUFLTCxRQUN6QyxrQkN4R0YrQyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcblx0XHRzdXBlcih7XG5cdFx0XHRlbGVtZW50OiAnLnByZWxvYWRlcicsXG5cdFx0XHRlbGVtZW50czoge1xuXHRcdFx0XHR0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxuXHRcdFx0XHRudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxuXHRcdFx0XHRudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0Jyxcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHRoaXMuY2FudmFzID0gY2FudmFzXG5cblx0XHR3aW5kb3cuVEVYVFVSRVMgPSB7fVxuXG5cdFx0c3BsaXQoe1xuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcblx0XHRcdGV4cHJlc3Npb246ICc8YnI+Jyxcblx0XHR9KVxuXHRcdHNwbGl0KHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG5cdFx0XHRleHByZXNzaW9uOiAnPGJyPicsXG5cdFx0fSlcblxuXHRcdHRoaXMuZWxlbWVudHMudGl0bGVTcGFucyA9IHRoaXMuZWxlbWVudHMudGl0bGUucXVlcnlTZWxlY3RvckFsbCgnc3BhbiBzcGFuJylcblxuXHRcdHRoaXMubGVuZ3RoID0gMFxuXG5cdFx0dGhpcy5jcmVhdGVMb2FkZXIoKVxuXHR9XG5cblx0Y3JlYXRlTG9hZGVyKCkge1xuXHRcdHdpbmRvdy5BU1NFVFMuZm9yRWFjaChpbWFnZSA9PiB7XG5cdFx0XHRjb25zdCB0ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5jYW52YXMuZ2wsIHtcblx0XHRcdFx0Z2VuZXJhdGVNaXBtYXBzOiBmYWxzZSxcblx0XHRcdH0pXG5cblxuICAgICAgd2luZG93LlRFWFRVUkVTW3NydF1cblxuXHRcdH0pXG5cdH1cblxuXHRvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG5cdFx0dGhpcy5sZW5ndGggKz0gMVxuXG5cdFx0Y29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gdGhpcy5lbGVtZW50cy5pbWFnZXMubGVuZ3RoXG5cdFx0dGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LmlubmVySFRNTCA9IGAke01hdGgucm91bmQocGVyY2VudCAqIDEwMCl9JWBcblxuXHRcdGlmIChwZXJjZW50ID09PSAxKSB7XG5cdFx0XHR0aGlzLm9uTG9hZGVkKClcblx0XHR9XG5cdH1cblxuXHRvbkxvYWRlZCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQgPSBHU0FQLnRpbWVsaW5lKHtcblx0XHRcdFx0ZGVsYXk6IDEuNSxcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byh0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMsIHtcblx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0c3RhZ2dlcjogMC4xLFxuXHRcdFx0XHR5OiAnMTAwJScsXG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQudG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGF1dG9BbHBoYTogMCxcblx0XHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdFx0c3RhZ2dlcjogMC4xLFxuXHRcdFx0XHRcdHk6IDUwLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLT0xLjQnXG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byhcblx0XHRcdFx0dGhpcy5lbGVtZW50LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46ICcxMDAlIDEwMCUnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnLT0xJ1xuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQuY2FsbChfID0+IHtcblx0XHRcdFx0dGhpcy5lbWl0KCdjb21wbGV0ZWQnKVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5NTA2NTRkNDRiYWU2YTUwMWQ2XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJ0aGlzIiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsIkFTU0VUUyIsImZvckVhY2giLCJpbWFnZSIsIlRleHR1cmUiLCJnbCIsImdlbmVyYXRlTWlwbWFwcyIsInNydCIsIm9uQXNzZXRMb2FkZWQiLCJwZXJjZW50IiwiaW1hZ2VzIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsIl8iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==