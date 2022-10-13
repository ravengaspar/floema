/*! For license information please see main.aa1a1f02a8abdf6199d5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./node_modules/ogl/src/core/Texture.js"),a=s("./node_modules/gsap/index.js"),o=s("./app/classes/Component.js"),i=s("./app/utils/text.js");class l extends o.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{const t=new n.Texture(this.canvas.gl,{generateMipmaps:!1}),s=new window.Image;s.crossOrigin="anonymous",s.src=e,s.onload=e=>{t.image=s,this.onAssetLoaded()},window.TEXTURES[e]=t}))}onAssetLoaded(e){this.length+=1;const t=this.length/window.ASSETS.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.emit("completed"),this.animateOut=a.default.timeline({delay:1}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{autoAlpha:0,duration:1}),this.animateOut.call((e=>this.destroy()))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"ed2d57b6c17e08c268f1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYTFhMWYwMmE4YWJkZjYxOTlkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFFBT2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLE9BQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxhQUNUQyxTQUFVLENBQ1RDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBSWRDLEtBQUtQLE9BQVNBLEVBRWRRLE9BQU9DLFNBQVcsQ0FBQyxHQUVuQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNMUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxVQUViRCxFQUFBQSxFQUFBQSxPQUFNLENBQ0xSLFFBQVNLLEtBQUtKLFNBQVNDLE1BQ3ZCTyxXQUFZLFNBR2JKLEtBQUtKLFNBQVNTLFdBQWFMLEtBQUtKLFNBQVNDLE1BQU1TLGlCQUFpQixhQUVoRU4sS0FBS08sT0FBUyxFQUVkUCxLQUFLUSxjQUNMLENBRURBLGVBQ0NQLE9BQU9RLE9BQU9DLFNBQVFDLElBQ3JCLE1BQU1DLEVBQVUsSUFBSUMsRUFBQUEsUUFBUWIsS0FBS1AsT0FBT3FCLEdBQUksQ0FDM0NDLGlCQUFpQixJQUdaQyxFQUFRLElBQUlmLE9BQU9nQixNQUV6QkQsRUFBTUUsWUFBYyxZQUNwQkYsRUFBTUcsSUFBTVIsRUFDWkssRUFBTUksT0FBU0MsSUFDZFQsRUFBUUQsTUFBUUssRUFFaEJoQixLQUFLc0IsZUFBTCxFQUdEckIsT0FBT0MsU0FBU1MsR0FBU0MsQ0FBekIsR0FFRCxDQUVEVSxjQUFjWCxHQUNiWCxLQUFLTyxRQUFVLEVBRWYsTUFBTWdCLEVBQVV2QixLQUFLTyxPQUFTTixPQUFPUSxPQUFPRixPQUM1Q1AsS0FBS0osU0FBU0csV0FBV3lCLFVBQWEsR0FBRUMsS0FBS0MsTUFBZ0IsSUFBVkgsTUFFbkMsSUFBWkEsR0FDSHZCLEtBQUsyQixVQUVOLENBRURBLFdBQ0MsT0FBTyxJQUFJQyxTQUFRQyxJQUNsQjdCLEtBQUs4QixLQUFLLGFBRVY5QixLQUFLK0IsV0FBYUMsRUFBQUEsUUFBQUEsU0FBYyxDQUMvQkMsTUFBTyxJQUdSakMsS0FBSytCLFdBQVdHLEdBQUdsQyxLQUFLSixTQUFTUyxXQUFZLENBQzVDOEIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxTQUdKdEMsS0FBSytCLFdBQVdHLEdBQ2ZsQyxLQUFLSixTQUFTRyxXQUNkLENBQ0N3QyxVQUFXLEVBQ1hKLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsSUFFSixTQUdEdEMsS0FBSytCLFdBQVdHLEdBQUdsQyxLQUFLTCxRQUFTLENBQ2hDNEMsVUFBVyxFQUNYSixTQUFVLElBR1huQyxLQUFLK0IsV0FBV1MsTUFBS25CLEdBQUtyQixLQUFLeUMsV0FBL0IsR0FFRCxDQUVEQSxVQUNDekMsS0FBS0wsUUFBUStDLFdBQVdDLFlBQVkzQyxLQUFLTCxRQUN6QyxrQkMzR0ZpRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NvbXBvbmVudHMvUHJlbG9hZGVyLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gJ29nbCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5cbmltcG9ydCB7IHNwbGl0IH0gZnJvbSAndXRpbHMvdGV4dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoeyBjYW52YXMgfSkge1xuXHRcdHN1cGVyKHtcblx0XHRcdGVsZW1lbnQ6ICcucHJlbG9hZGVyJyxcblx0XHRcdGVsZW1lbnRzOiB7XG5cdFx0XHRcdHRpdGxlOiAnLnByZWxvYWRlcl9fdGV4dCcsXG5cdFx0XHRcdG51bWJlcjogJy5wcmVsb2FkZXJfX251bWJlcicsXG5cdFx0XHRcdG51bWJlclRleHQ6ICcucHJlbG9hZGVyX19udW1iZXJfX3RleHQnLFxuXHRcdFx0fSxcblx0XHR9KVxuXG5cdFx0dGhpcy5jYW52YXMgPSBjYW52YXNcblxuXHRcdHdpbmRvdy5URVhUVVJFUyA9IHt9XG5cblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuXHRcdFx0ZXhwcmVzc2lvbjogJzxicj4nLFxuXHRcdH0pXG5cdFx0c3BsaXQoe1xuXHRcdFx0ZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcblx0XHRcdGV4cHJlc3Npb246ICc8YnI+Jyxcblx0XHR9KVxuXG5cdFx0dGhpcy5lbGVtZW50cy50aXRsZVNwYW5zID0gdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKVxuXG5cdFx0dGhpcy5sZW5ndGggPSAwXG5cblx0XHR0aGlzLmNyZWF0ZUxvYWRlcigpXG5cdH1cblxuXHRjcmVhdGVMb2FkZXIoKSB7XG5cdFx0d2luZG93LkFTU0VUUy5mb3JFYWNoKGltYWdlID0+IHtcblx0XHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVGV4dHVyZSh0aGlzLmNhbnZhcy5nbCwge1xuXHRcdFx0XHRnZW5lcmF0ZU1pcG1hcHM6IGZhbHNlLFxuXHRcdFx0fSlcblxuXHRcdFx0Y29uc3QgbWVkaWEgPSBuZXcgd2luZG93LkltYWdlKClcblxuXHRcdFx0bWVkaWEuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJ1xuXHRcdFx0bWVkaWEuc3JjID0gaW1hZ2Vcblx0XHRcdG1lZGlhLm9ubG9hZCA9IF8gPT4ge1xuXHRcdFx0XHR0ZXh0dXJlLmltYWdlID0gbWVkaWFcblxuXHRcdFx0XHR0aGlzLm9uQXNzZXRMb2FkZWQoKVxuXHRcdFx0fVxuXG5cdFx0XHR3aW5kb3cuVEVYVFVSRVNbaW1hZ2VdID0gdGV4dHVyZVxuXHRcdH0pXG5cdH1cblxuXHRvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG5cdFx0dGhpcy5sZW5ndGggKz0gMVxuXG5cdFx0Y29uc3QgcGVyY2VudCA9IHRoaXMubGVuZ3RoIC8gd2luZG93LkFTU0VUUy5sZW5ndGhcblx0XHR0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG5cdFx0aWYgKHBlcmNlbnQgPT09IDEpIHtcblx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdH1cblx0fVxuXG5cdG9uTG9hZGVkKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXMuZW1pdCgnY29tcGxldGVkJylcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0ID0gR1NBUC50aW1lbGluZSh7XG5cdFx0XHRcdGRlbGF5OiAxLFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byhcblx0XHRcdFx0dGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdFx0eTogNTAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctPTEuNCdcblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuXHRcdFx0XHRhdXRvQWxwaGE6IDAsXG5cdFx0XHRcdGR1cmF0aW9uOiAxLFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LmNhbGwoXyA9PiB0aGlzLmRlc3Ryb3koKSlcblx0XHR9KVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpXG5cdH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVkMmQ1N2I2YzE3ZTA4YzI2OGYxXCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJ0aGlzIiwid2luZG93IiwiVEVYVFVSRVMiLCJzcGxpdCIsImV4cHJlc3Npb24iLCJ0aXRsZVNwYW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsIkFTU0VUUyIsImZvckVhY2giLCJpbWFnZSIsInRleHR1cmUiLCJUZXh0dXJlIiwiZ2wiLCJnZW5lcmF0ZU1pcG1hcHMiLCJtZWRpYSIsIkltYWdlIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInBlcmNlbnQiLCJpbm5lckhUTUwiLCJNYXRoIiwicm91bmQiLCJvbkxvYWRlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZW1pdCIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwiY2FsbCIsImRlc3Ryb3kiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=