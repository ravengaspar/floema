/*! For license information please see main.ac1ed5ae0b8b3246e5dc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var n=s("./app/pages/About/index.js"),a=s("./app/pages/Collections/index.js"),i=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),h=s("./node_modules/normalize-wheel/index.js"),d=s("./node_modules/lodash/each.js"),c=s("./app/components/Canvas/index.js"),p=s("./app/components/Preloader.js"),r=s("./app/components/Navigation.js"),u=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new n.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),n=document.createElement("div");window.history.pushState({},"",e),n.innerHTML=s;const a=n.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else u.log("Error",error)}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){h(e);this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update()}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"e1462176870a0d518c80"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdEQSxTQUNLUixLQUFLaUIsUUFBVWpCLEtBQUtpQixPQUFPVCxRQUM5QlIsS0FBS2lCLE9BQU9ULFNBR1RSLEtBQUtnQyxNQUFRaEMsS0FBS2dDLEtBQUt4QixRQUMxQlIsS0FBS2dDLEtBQUt4QixTQUdYUixLQUFLaUUsTUFBUTFCLE9BQU8yQixzQkFBc0JsRSxLQUFLUSxPQUFPUSxLQUFLaEIsTUFDM0QsQ0FHRE8sbUJBQ0MsTUFBTTRELEVBQVEvQyxTQUFTZ0QsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFPRyxJQUNYQSxFQUFLQyxRQUFVWCxJQUNkQSxFQUFNWSxpQkFDTixNQUFNLEtBQUVDLEdBQVNILEVBQ2pCdEUsS0FBS3NDLFNBQVNtQyxFQUFkLENBSEQsR0FNRCxDQUVEbkUsb0JBQ0NpQyxPQUFPbUMsaUJBQWlCLFdBQVkxRSxLQUFLcUMsV0FBV3JCLEtBQUtoQixPQUV6RHVDLE9BQU9tQyxpQkFBaUIsYUFBYzFFLEtBQUsrRCxRQUFRL0MsS0FBS2hCLE9BRXhEdUMsT0FBT21DLGlCQUFpQixZQUFhMUUsS0FBSzJELFlBQVkzQyxLQUFLaEIsT0FDM0R1QyxPQUFPbUMsaUJBQWlCLFlBQWExRSxLQUFLNkQsWUFBWTdDLEtBQUtoQixPQUMzRHVDLE9BQU9tQyxpQkFBaUIsVUFBVzFFLEtBQUs4RCxVQUFVOUMsS0FBS2hCLE9BRXZEdUMsT0FBT21DLGlCQUFpQixhQUFjMUUsS0FBSzJELFlBQVkzQyxLQUFLaEIsT0FDNUR1QyxPQUFPbUMsaUJBQWlCLFlBQWExRSxLQUFLNkQsWUFBWTdDLEtBQUtoQixPQUMzRHVDLE9BQU9tQyxpQkFBaUIsV0FBWTFFLEtBQUs4RCxVQUFVOUMsS0FBS2hCLE9BRXhEdUMsT0FBT21DLGlCQUFpQixTQUFVMUUsS0FBS21DLFNBQVNuQixLQUFLaEIsTUFDckQsa0JDcExGMkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5cbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcy8nXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdjb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKVxuXHR9XG5cblx0Y3JlYXRlQ29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXHR9XG5cblx0Y3JlYXRlUGFnZXMoKSB7XG5cdFx0dGhpcy5wYWdlcyA9IHtcblx0XHRcdGFib3V0OiBuZXcgQWJvdXQoKSxcblx0XHRcdGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxuXHRcdFx0aG9tZTogbmV3IEhvbWUoKSxcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdH1cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblx0XHR0aGlzLm9uUmVzaXplKClcblx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cdH1cblxuXHRvblBvcFN0YXRlKCkge1xuXHRcdHRoaXMub25DaGFuZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxuXHR9XG5cblx0YXN5bmMgb25DaGFuZ2UodXJsKSB7XG5cdFx0YXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG5cdFx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cblx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0Y29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cblx0XHRcdHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG5cdFx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cblx0XHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHRcdHRoaXMucGFnZS5zaG93KClcblxuXHRcdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuXHR9XG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCBub3JtYWxpemVkV2hlZWwgPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuICAgIGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcblx0XHRcdHRoaXMuY2FudmFzLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblxuXHR9XG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cdH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMTQ2MjE3Njg3MGEwZDUxOGM4MFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjYW52YXMiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9