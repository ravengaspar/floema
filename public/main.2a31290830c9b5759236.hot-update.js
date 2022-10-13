/*! For license information please see main.2a31290830c9b5759236.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.onResize(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");s.innerHTML=n,window.history.pushState({},"",e);const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"8a4f510d2832bd566987"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLbEIsT0FFeERzQyxPQUFPd0MsaUJBQWlCLFNBQVU5RSxLQUFLUSxTQUFTVSxLQUFLbEIsTUFDckQsa0JDOUxGK0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzLydcblxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVDb250ZW50KClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0XHR0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG5cdFx0dGhpcy5jcmVhdGVQYWdlcygpXG5cblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHtcblx0XHRcdGNhbnZhczogdGhpcy5jYW52YXMsXG5cdFx0fSlcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDYW52YXMoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVDb250ZW50KCkge1xuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jylcblx0XHR0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cdH1cblxuXHRjcmVhdGVQYWdlcygpIHtcblx0XHR0aGlzLnBhZ2VzID0ge1xuXHRcdFx0YWJvdXQ6IG5ldyBBYm91dCgpLFxuXHRcdFx0Y29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuXHRcdFx0ZGV0YWlsOiBuZXcgRGV0YWlsKCksXG5cdFx0XHRob21lOiBuZXcgSG9tZSgpLFxuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0fVxuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5jYW52YXMub25QcmVsb2FkZWQoKVxuXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSlcblxuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuXHRcdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG5cdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuXHR9XG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCBub3JtYWxpemVkV2hlZWwgPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcblx0XHR9XG5cblx0XHR0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZExpbmtMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuXHRcdGVhY2gobGlua3MsIGxpbmsgPT4ge1xuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGhyZWYpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGE0ZjUxMGQyODMyYmQ1NjY5ODdcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsIm9uUmVzaXplIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsImNhbnZhcyIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJub3JtYWxpemVkV2hlZWwiLCJOb3JtYWxpemVXaGVlbCIsInNjcm9sbCIsImZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==