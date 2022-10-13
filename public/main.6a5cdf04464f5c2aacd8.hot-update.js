/*! For license information please see main.6a5cdf04464f5c2aacd8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.canvas.onPreloaded(),this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");s.innerHTML=n,window.history.pushState({},"",e);const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"2c54596a8fc5c84b4edf"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUtrRSxVQUFVakQsS0FBS2pCLE9BRXhEdUMsT0FBT3dDLGlCQUFpQixTQUFVL0UsS0FBS21DLFNBQVNsQixLQUFLakIsTUFDckQsa0JDOUxGZ0YsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzLydcblxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVDb250ZW50KClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0XHR0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG5cdFx0dGhpcy5jcmVhdGVQYWdlcygpXG5cblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0Y3JlYXRlTmF2aWdhdGlvbigpIHtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih7XG5cdFx0XHRjYW52YXM6IHRoaXMuY2FudmFzLFxuXHRcdH0pXG5cdFx0dGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0Y3JlYXRlQ2FudmFzKCkge1xuXHRcdHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlQ29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXHR9XG5cblx0Y3JlYXRlUGFnZXMoKSB7XG5cdFx0dGhpcy5wYWdlcyA9IHtcblx0XHRcdGFib3V0OiBuZXcgQWJvdXQoKSxcblx0XHRcdGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxuXHRcdFx0aG9tZTogbmV3IEhvbWUoKSxcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdH1cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLmNhbnZhcy5vblByZWxvYWRlZCgpXG5cblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblxuXHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSlcblxuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuXHRcdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG5cdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuXHR9XG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCBub3JtYWxpemVkV2hlZWwgPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcblx0XHR9XG5cblx0XHR0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZExpbmtMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuXHRcdGVhY2gobGlua3MsIGxpbmsgPT4ge1xuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGhyZWYpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmM1NDU5NmE4ZmM1Yzg0YjRlZGZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJjYW52YXMiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93Iiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInVybCIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZFdoZWVsIiwiTm9ybWFsaXplV2hlZWwiLCJzY3JvbGwiLCJmcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=