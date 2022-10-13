/*! For license information please see main.59c6b987255fea037ea7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.canvas.onPreloaded(),this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");s.innerHTML=n,window.history.pushState({},"",e);const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"6a5cdf04464f5c2aacd8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtrRSxVQUFVakQsS0FBS2pCLE9BRXhEdUMsT0FBT3dDLGlCQUFpQixTQUFVL0UsS0FBS21DLFNBQVNsQixLQUFLakIsTUFDckQsa0JDL0xGZ0YsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzLydcblxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVDb250ZW50KClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0XHR0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG5cdFx0dGhpcy5jcmVhdGVQYWdlcygpXG5cblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0Y3JlYXRlTmF2aWdhdGlvbigpIHtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7XG5cdFx0XHRjYW52YXM6IHRoaXMuY2FudmFzLFxuXHRcdH0pXG5cdFx0dGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0Y3JlYXRlQ2FudmFzKCkge1xuXHRcdHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlQ29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXHR9XG5cblx0Y3JlYXRlUGFnZXMoKSB7XG5cdFx0dGhpcy5wYWdlcyA9IHtcblx0XHRcdGFib3V0OiBuZXcgQWJvdXQoKSxcblx0XHRcdGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxuXHRcdFx0aG9tZTogbmV3IEhvbWUoKSxcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdH1cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLmNhbnZhcy5vblByZWxvYWRlZCgpXG5cblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSlcblxuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5jYW52YXMub25DaGFuZ2VFbmQodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG5cdFx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHRoaXMuY2FudmFzLm9uUmVzaXplKClcblx0XHR9KVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKSB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShldmVudClcblx0fVxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZXZlbnQpXG5cdH1cblx0b25XaGVlbChldmVudCkge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRXaGVlbCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMuY2FudmFzLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMucGFnZS5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcblx0XHRcdHRoaXMuY2FudmFzLnVwZGF0ZSh0aGlzLnBhZ2Uuc2Nyb2xsKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cdH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YTVjZGYwNDQ2NGY1YzJhYWNkOFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsImNhbnZhcyIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkV2hlZWwiLCJOb3JtYWxpemVXaGVlbCIsInNjcm9sbCIsImZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==