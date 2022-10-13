/*! For license information please see main.093cf941c7fd94595c7e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),o=s("./app/utils/text.js"),i=s("./node_modules/ogl/src/core/Texture.js");class l extends n.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),window.TEXTURES={},(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{new i.Texture(this.canvas.gl)}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"dcb688992d3d91a03b07"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOTNjZjk0MWM3ZmQ5NDU5NWM3ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVRBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLE9BQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxhQUNUQyxTQUFVLENBQ1RDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBSWRDLE9BQU9DLFNBQVcsQ0FBQyxHQUVuQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNMUCxRQUFTUSxLQUFLUCxTQUFTQyxNQUN2Qk8sV0FBWSxVQUViRixFQUFBQSxFQUFBQSxPQUFNLENBQ0xQLFFBQVNRLEtBQUtQLFNBQVNDLE1BQ3ZCTyxXQUFZLFNBR2JELEtBQUtQLFNBQVNTLFdBQWFGLEtBQUtQLFNBQVNDLE1BQU1TLGlCQUFpQixhQUVoRUgsS0FBS0ksT0FBUyxFQUVkSixLQUFLSyxjQUNMLENBRURBLGVBQ0NSLE9BQU9TLE9BQU9DLFNBQVFDLElBQ0wsSUFBSUMsRUFBQUEsUUFBUVQsS0FBS1YsT0FBT29CLEdBQXhDLEdBRUQsQ0FFREMsY0FBY0gsR0FDYlIsS0FBS0ksUUFBVSxFQUVmLE1BQU1RLEVBQVVaLEtBQUtJLE9BQVNKLEtBQUtQLFNBQVNvQixPQUFPVCxPQUNuREosS0FBS1AsU0FBU0csV0FBV2tCLFVBQWEsR0FBRUMsS0FBS0MsTUFBZ0IsSUFBVkosTUFFbkMsSUFBWkEsR0FDSFosS0FBS2lCLFVBRU4sQ0FFREEsV0FDQyxPQUFPLElBQUlDLFNBQVFDLElBQ2xCbkIsS0FBS29CLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDL0JDLE1BQU8sTUFHUnRCLEtBQUtvQixXQUFXRyxHQUFHdkIsS0FBS1AsU0FBU1MsV0FBWSxDQUM1Q3NCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHSjNCLEtBQUtvQixXQUFXRyxHQUNmdkIsS0FBS1AsU0FBU0csV0FDZCxDQUNDZ0MsVUFBVyxFQUNYSixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLElBRUosU0FHRDNCLEtBQUtvQixXQUFXRyxHQUNmdkIsS0FBS1IsUUFDTCxDQUNDZ0MsU0FBVSxJQUNWQyxLQUFNLFdBQ05JLE9BQVEsRUFDUkMsZ0JBQWlCLGFBRWxCLE9BR0Q5QixLQUFLb0IsV0FBV1csTUFBS0MsSUFDcEJoQyxLQUFLaUMsS0FBSyxZQUFWLEdBREQsR0FJRCxDQUVEQyxVQUNDbEMsS0FBS1IsUUFBUTJDLFdBQVdDLFlBQVlwQyxLQUFLUixRQUN6QyxrQkNoR0Y2QyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tICdvZ2wnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByZWxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHsgY2FudmFzIH0pIHtcblx0XHRzdXBlcih7XG5cdFx0XHRlbGVtZW50OiAnLnByZWxvYWRlcicsXG5cdFx0XHRlbGVtZW50czoge1xuXHRcdFx0XHR0aXRsZTogJy5wcmVsb2FkZXJfX3RleHQnLFxuXHRcdFx0XHRudW1iZXI6ICcucHJlbG9hZGVyX19udW1iZXInLFxuXHRcdFx0XHRudW1iZXJUZXh0OiAnLnByZWxvYWRlcl9fbnVtYmVyX190ZXh0Jyxcblx0XHRcdH0sXG5cdFx0fSlcblxuXHRcdHdpbmRvdy5URVhUVVJFUyA9IHt9XG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuXHRcdFx0ZXhwcmVzc2lvbjogJzxicj4nLFxuXHRcdH0pXG5cdFx0c3BsaXQoe1xuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcblx0XHRcdGV4cHJlc3Npb246ICc8YnI+Jyxcblx0XHR9KVxuXG5cdFx0dGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG5cdFx0dGhpcy5sZW5ndGggPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUxvYWRlcigpXG5cdH1cblxuXHRjcmVhdGVMb2FkZXIoKSB7XG5cdFx0d2luZG93LkFTU0VUUy5mb3JFYWNoKGltYWdlID0+IHtcblx0XHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmNhbnZhcy5nbClcblx0XHR9KVxuXHR9XG5cblx0b25Bc3NldExvYWRlZChpbWFnZSkge1xuXHRcdHRoaXMubGVuZ3RoICs9IDFcblxuXHRcdGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aFxuXHRcdHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgXG5cblx0XHRpZiAocGVyY2VudCA9PT0gMSkge1xuXHRcdFx0dGhpcy5vbkxvYWRlZCgpXG5cdFx0fVxuXHR9XG5cblx0b25Mb2FkZWQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0dGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG5cdFx0XHRcdGRlbGF5OiAxLjUsXG5cdFx0XHR9KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG5cdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdHN0YWdnZXI6IDAuMSxcblx0XHRcdFx0eTogJzEwMCUnLFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKFxuXHRcdFx0XHR0aGlzLmVsZW1lbnRzLm51bWJlclRleHQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEuNSxcblx0XHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRcdHN0YWdnZXI6IDAuMSxcblx0XHRcdFx0XHR5OiA1MCxcblx0XHRcdFx0fSxcblx0XHRcdFx0Jy09MS40J1xuXHRcdFx0KVxuXG5cdFx0XHR0aGlzLmFuaW1hdGVPdXQudG8oXG5cdFx0XHRcdHRoaXMuZWxlbWVudCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHRzY2FsZVk6IDAsXG5cdFx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOiAnMTAwJSAxMDAlJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0Jy09MSdcblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB7XG5cdFx0XHRcdHRoaXMuZW1pdCgnY29tcGxldGVkJylcblx0XHRcdH0pXG5cdFx0fSlcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkY2I2ODg5OTJkM2Q5MWEwM2IwN1wiKSJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwidGl0bGUiLCJudW1iZXIiLCJudW1iZXJUZXh0Iiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJjcmVhdGVMb2FkZXIiLCJBU1NFVFMiLCJmb3JFYWNoIiwiaW1hZ2UiLCJUZXh0dXJlIiwiZ2wiLCJvbkFzc2V0TG9hZGVkIiwicGVyY2VudCIsImltYWdlcyIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsImF1dG9BbHBoYSIsInNjYWxlWSIsInRyYW5zZm9ybU9yaWdpbiIsImNhbGwiLCJfIiwiZW1pdCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=