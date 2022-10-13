/*! For license information please see main.5167ea39fa0f8564042e.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s("./app/classes/Component.js"),a=(s("./node_modules/lodash/each.js"),s("./node_modules/gsap/index.js")),i=s("./app/utils/text.js"),o=s("./node_modules/ogl/src/core/Texture.js");class l extends n.default{constructor({canvas:e}){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text"}}),this.canvas=e,window.TEXTURES={},(0,i.split)({element:this.elements.title,expression:"<br>"}),(0,i.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){window.ASSETS.forEach((e=>{new o.Texture(this.canvas.gl,{generateMi})}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=a.default.timeline({delay:1.5}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{autoAlpha:0,duration:1.5,ease:"expo.out",stagger:.1,y:50},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scaleY:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"b81315d1facb1dcb3220"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41MTY3ZWEzOWZhMGY4NTY0MDQyZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVRBTWUsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3RDQyxhQUFZLE9BQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxhQUNUQyxTQUFVLENBQ1RDLE1BQU8sbUJBQ1BDLE9BQVEscUJBQ1JDLFdBQVksOEJBSWRDLEtBQUtQLE9BQVNBLEVBRWRRLE9BQU9DLFNBQVcsQ0FBQyxHQUVuQkMsRUFBQUEsRUFBQUEsT0FBTSxDQUNMUixRQUFTSyxLQUFLSixTQUFTQyxNQUN2Qk8sV0FBWSxVQUViRCxFQUFBQSxFQUFBQSxPQUFNLENBQ0xSLFFBQVNLLEtBQUtKLFNBQVNDLE1BQ3ZCTyxXQUFZLFNBR2JKLEtBQUtKLFNBQVNTLFdBQWFMLEtBQUtKLFNBQVNDLE1BQU1TLGlCQUFpQixhQUVoRU4sS0FBS08sT0FBUyxFQUVkUCxLQUFLUSxjQUNMLENBRURBLGVBQ0NQLE9BQU9RLE9BQU9DLFNBQVFDLElBQ0wsSUFBSUMsRUFBQUEsUUFBUVosS0FBS1AsT0FBT29CLEdBQUksQ0FDdkNDLFlBREwsR0FJRCxDQUVEQyxjQUFjSixHQUNiWCxLQUFLTyxRQUFVLEVBRWYsTUFBTVMsRUFBVWhCLEtBQUtPLE9BQVNQLEtBQUtKLFNBQVNxQixPQUFPVixPQUNuRFAsS0FBS0osU0FBU0csV0FBV21CLFVBQWEsR0FBRUMsS0FBS0MsTUFBZ0IsSUFBVkosTUFFbkMsSUFBWkEsR0FDSGhCLEtBQUtxQixVQUVOLENBRURBLFdBQ0MsT0FBTyxJQUFJQyxTQUFRQyxJQUNsQnZCLEtBQUt3QixXQUFhQyxFQUFBQSxRQUFBQSxTQUFjLENBQy9CQyxNQUFPLE1BR1IxQixLQUFLd0IsV0FBV0csR0FBRzNCLEtBQUtKLFNBQVNTLFdBQVksQ0FDNUN1QixTQUFVLElBQ1ZDLEtBQU0sV0FDTkMsUUFBUyxHQUNUQyxFQUFHLFNBR0ovQixLQUFLd0IsV0FBV0csR0FDZjNCLEtBQUtKLFNBQVNHLFdBQ2QsQ0FDQ2lDLFVBQVcsRUFDWEosU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxJQUVKLFNBR0QvQixLQUFLd0IsV0FBV0csR0FDZjNCLEtBQUtMLFFBQ0wsQ0FDQ2lDLFNBQVUsSUFDVkMsS0FBTSxXQUNOSSxPQUFRLEVBQ1JDLGdCQUFpQixhQUVsQixPQUdEbEMsS0FBS3dCLFdBQVdXLE1BQUtDLElBQ3BCcEMsS0FBS3FDLEtBQUssWUFBVixHQURELEdBSUQsQ0FFREMsVUFDQ3RDLEtBQUtMLFFBQVE0QyxXQUFXQyxZQUFZeEMsS0FBS0wsUUFDekMsa0JDcEdGOEMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnY2xhc3Nlcy9Db21wb25lbnQnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJ3V0aWxzL3RleHQnXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVsb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcih7IGNhbnZhcyB9KSB7XG5cdFx0c3VwZXIoe1xuXHRcdFx0ZWxlbWVudDogJy5wcmVsb2FkZXInLFxuXHRcdFx0ZWxlbWVudHM6IHtcblx0XHRcdFx0dGl0bGU6ICcucHJlbG9hZGVyX190ZXh0Jyxcblx0XHRcdFx0bnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJyxcblx0XHRcdFx0bnVtYmVyVGV4dDogJy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHR0aGlzLmNhbnZhcyA9IGNhbnZhc1xuXG5cdFx0d2luZG93LlRFWFRVUkVTID0ge31cblxuXHRcdHNwbGl0KHtcblx0XHRcdGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG5cdFx0XHRleHByZXNzaW9uOiAnPGJyPicsXG5cdFx0fSlcblx0XHRzcGxpdCh7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnRzLnRpdGxlLFxuXHRcdFx0ZXhwcmVzc2lvbjogJzxicj4nLFxuXHRcdH0pXG5cblx0XHR0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPSB0aGlzLmVsZW1lbnRzLnRpdGxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4gc3BhbicpXG5cblx0XHR0aGlzLmxlbmd0aCA9IDBcblxuXHRcdHRoaXMuY3JlYXRlTG9hZGVyKClcblx0fVxuXG5cdGNyZWF0ZUxvYWRlcigpIHtcblx0XHR3aW5kb3cuQVNTRVRTLmZvckVhY2goaW1hZ2UgPT4ge1xuXHRcdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUZXh0dXJlKHRoaXMuY2FudmFzLmdsLCB7XG4gICAgICAgIGdlbmVyYXRlTWlcbiAgICAgIH0pXG5cdFx0fSlcblx0fVxuXG5cdG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcblx0XHR0aGlzLmxlbmd0aCArPSAxXG5cblx0XHRjb25zdCBwZXJjZW50ID0gdGhpcy5sZW5ndGggLyB0aGlzLmVsZW1lbnRzLmltYWdlcy5sZW5ndGhcblx0XHR0aGlzLmVsZW1lbnRzLm51bWJlclRleHQuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZChwZXJjZW50ICogMTAwKX0lYFxuXG5cdFx0aWYgKHBlcmNlbnQgPT09IDEpIHtcblx0XHRcdHRoaXMub25Mb2FkZWQoKVxuXHRcdH1cblx0fVxuXG5cdG9uTG9hZGVkKCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblx0XHRcdHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuXHRcdFx0XHRkZWxheTogMS41LFxuXHRcdFx0fSlcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKHRoaXMuZWxlbWVudHMudGl0bGVTcGFucywge1xuXHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRlYXNlOiAnZXhwby5vdXQnLFxuXHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdHk6ICcxMDAlJyxcblx0XHRcdH0pXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC50byhcblx0XHRcdFx0dGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YXV0b0FscGhhOiAwLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiAxLjUsXG5cdFx0XHRcdFx0ZWFzZTogJ2V4cG8ub3V0Jyxcblx0XHRcdFx0XHRzdGFnZ2VyOiAwLjEsXG5cdFx0XHRcdFx0eTogNTAsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctPTEuNCdcblx0XHRcdClcblxuXHRcdFx0dGhpcy5hbmltYXRlT3V0LnRvKFxuXHRcdFx0XHR0aGlzLmVsZW1lbnQsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdFx0XHRcdGVhc2U6ICdleHBvLm91dCcsXG5cdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCctPTEnXG5cdFx0XHQpXG5cblx0XHRcdHRoaXMuYW5pbWF0ZU91dC5jYWxsKF8gPT4ge1xuXHRcdFx0XHR0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudClcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjgxMzE1ZDFmYWNiMWRjYjMyMjBcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwibnVtYmVyVGV4dCIsInRoaXMiLCJ3aW5kb3ciLCJURVhUVVJFUyIsInNwbGl0IiwiZXhwcmVzc2lvbiIsInRpdGxlU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlTG9hZGVyIiwiQVNTRVRTIiwiZm9yRWFjaCIsImltYWdlIiwiVGV4dHVyZSIsImdsIiwiZ2VuZXJhdGVNaSIsIm9uQXNzZXRMb2FkZWQiLCJwZXJjZW50IiwiaW1hZ2VzIiwiaW5uZXJIVE1MIiwiTWF0aCIsInJvdW5kIiwib25Mb2FkZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGVPdXQiLCJHU0FQIiwiZGVsYXkiLCJ0byIsImR1cmF0aW9uIiwiZWFzZSIsInN0YWdnZXIiLCJ5IiwiYXV0b0FscGhhIiwic2NhbGVZIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsIl8iLCJlbWl0IiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==