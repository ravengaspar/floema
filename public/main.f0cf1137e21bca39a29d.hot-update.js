/*! For license information please see main.f0cf1137e21bca39a29d.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var i=s("./node_modules/lodash/each.js"),l=s("./node_modules/gsap/index.js"),n=s("./node_modules/prefix/index.js"),r=s("./node_modules/console-browserify/index.js");class o{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t},this.id=s,this.scroll={current:0,target:0,last:0,limit:0},this.onMouseWheelEvent=this.onMouseWheel.bind(this),this.transformPrefix=n("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},i(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))}))}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),l.default.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=l.default.timeline(),l.default.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{deltaY:t}=e;this.scroll.target+=t}onRezize(){this.scroll.limit=this.elements.wrapper.clientHeight-window.inn,r.log(this.scroll.limit)}update(){this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"ca6a9ef6743f54e143cb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mMGNmMTEzN2UyMWJjYTM5YTI5ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVNBSWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0csT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxNQUFPLEdBR1RQLEtBQUtRLGtCQUFvQlIsS0FBS1MsYUFBYUMsS0FBS1YsTUFDaERBLEtBQUtXLGdCQUFrQkMsRUFBTyxZQUUvQixDQUVEQyxTQUNFYixLQUFLSCxRQUFVaUIsU0FBU0MsY0FBY2YsS0FBS0MsVUFDM0NELEtBQUtGLFNBQVcsQ0FBQyxFQUVqQkUsS0FBS0csT0FBUyxDQUNaQyxRQUFTLEVBQ1RDLE9BQVEsRUFDUkMsS0FBTSxFQUNOQyxNQUFPLEdBR1RTLEVBQUtoQixLQUFLRSxrQkFBa0IsQ0FBQ2UsRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkakIsS0FBS0YsU0FBU29CLEdBQU9ELEdBRXJCakIsS0FBS0YsU0FBU29CLEdBQU9KLFNBQVNVLGlCQUFpQlAsR0FFYixJQUE5QmpCLEtBQUtGLFNBQVNvQixHQUFLTyxPQUNyQnpCLEtBQUtGLFNBQVNvQixHQUFPLEtBQ2tCLElBQTlCbEIsS0FBS0YsU0FBU29CLEdBQUtPLFNBQzVCekIsS0FBS0YsU0FBU29CLEdBQU9KLFNBQVNDLGNBQWNFLElBRS9DLEdBRUosQ0FFRFMsT0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCNUIsS0FBSzZCLFlBQWNDLEVBQUFBLFFBQUFBLFdBQ25CQSxFQUFBQSxRQUFBQSxPQUNFOUIsS0FBS0gsUUFDTCxDQUNFa0MsVUFBVyxHQUViLENBQ0VBLFVBQVcsSUFJZi9CLEtBQUs2QixZQUFZRyxNQUFNQyxJQUNmakMsS0FBS2tDLG9CQUNYTixHQUFTLEdBRlgsR0FLSCxDQUVETyxPQUNFLE9BQU8sSUFBSVIsU0FBU0MsSUFDbEI1QixLQUFLb0MsdUJBQ0xwQyxLQUFLcUMsYUFBZVAsRUFBQUEsUUFBQUEsV0FFcEJBLEVBQUFBLFFBQUFBLEdBQVE5QixLQUFLSCxRQUFTLENBQ3BCa0MsVUFBVyxFQUNYTyxXQUFZVixHQUZkLEdBS0gsQ0FFRG5CLGFBQWE4QixHQUNYLE1BQU0sT0FBRUMsR0FBV0QsRUFDbkJ2QyxLQUFLRyxPQUFPRSxRQUFVbUMsQ0FDdkIsQ0FFREMsV0FDRXpDLEtBQUtHLE9BQU9JLE1BQVFQLEtBQUtGLFNBQVM0QyxRQUFRQyxhQUFleEIsT0FBT3lCLElBQ2hFQyxFQUFRQyxJQUFJOUMsS0FBS0csT0FBT0ksTUFDekIsQ0FJRHdDLFNBQ0UvQyxLQUFLRyxPQUFPRSxPQUFTeUIsRUFBQUEsUUFBQUEsTUFBQUEsTUFDbkIsRUFDQTlCLEtBQUtHLE9BQU9JLE1BQ1pQLEtBQUtHLE9BQU9FLFFBR2RMLEtBQUtHLE9BQU9DLFFBQVUwQixFQUFBQSxRQUFBQSxNQUFBQSxZQUNwQjlCLEtBQUtHLE9BQU9DLFFBQ1pKLEtBQUtHLE9BQU9FLE9BQ1osSUFHRUwsS0FBS0YsU0FBUzRDLFVBQ2hCMUMsS0FBS0YsU0FBUzRDLFFBQVFNLE1BQ3BCaEQsS0FBS1csaUJBQ0YsZUFBY1gsS0FBS0csT0FBT0MsYUFDbEMsQ0FHRDhCLG9CQUNFZixPQUFPOEIsaUJBQWlCLGFBQWNqRCxLQUFLUSxrQkFDNUMsQ0FFRDRCLHVCQUNFakIsT0FBTytCLG9CQUFvQixhQUFjbEQsS0FBS1Esa0JBQy9DLGtCQzFISDJDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcbmltcG9ydCBQcmVmaXggZnJvbSBcInByZWZpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xuXG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDAsXG4gICAgfTtcblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICBHU0FQLmZyb21UbyhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcbiAgICAgICAgdGhpcywgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmFuaW1hdGlvbk91dCA9IEdTQVAudGltZWxpbmUoKTtcblxuICAgICAgR1NBUC50byh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICBjb25zdCB7IGRlbHRhWSB9ID0gZXZlbnQ7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IGRlbHRhWTtcbiAgfVxuXG4gIG9uUmV6aXplKCkge1xuICAgIHRoaXMuc2Nyb2xsLmxpbWl0ID0gdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm47XG4gICAgY29uc29sZS5sb2codGhpcy5zY3JvbGwubGltaXQpO1xuICB9XG5cbiAgLyogTG9vcCAqL1xuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgPSBHU0FQLnV0aWxzLmNsYW1wKFxuICAgICAgMCxcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0XG4gICAgKTtcblxuICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSBHU0FQLnV0aWxzLmludGVycG9sYXRlKFxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcbiAgICAgIDAuMVxuICAgICk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKVxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxuICAgICAgXSA9IGB0cmFuc2xhdGVZKC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgpYDtcbiAgfVxuXG4gIC8qIExpc3RlbmVycyAqL1xuICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNhNmE5ZWY2NzQzZjU0ZTE0M2NiXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJvbk1vdXNlV2hlZWxFdmVudCIsIm9uTW91c2VXaGVlbCIsImJpbmQiLCJ0cmFuc2Zvcm1QcmVmaXgiLCJQcmVmaXgiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJ3aW5kb3ciLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJkZWx0YVkiLCJvblJleml6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm4iLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==