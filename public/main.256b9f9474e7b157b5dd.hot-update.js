/*! For license information please see main.256b9f9474e7b157b5dd.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"892b7921f83583752906"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUV4RHVDLE9BQU93QyxpQkFBaUIsU0FBVS9FLEtBQUttQyxTQUFTbkIsS0FBS2hCLE1BQ3JELGtCQ3hMRmdGLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5cbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcy8nXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdjb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZUNhbnZhcygpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlU3RhcnQodGhpcy50ZW1wbGF0ZSlcblx0XHRhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG5cblx0XHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuXHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMuY2FudmFzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cblx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8gPT4ge1xuXHRcdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG5cdFx0fSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKSB0aGlzLmNhbnZhcy5vblRvdWNoRG93bihldmVudClcblx0fVxuXHRvblRvdWNoTW92ZShldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZSkgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUoZXZlbnQpXG5cdH1cblx0b25Ub3VjaFVwKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hVcCkgdGhpcy5jYW52YXMub25Ub3VjaFVwKGV2ZW50KVxuXHR9XG5cdG9uV2hlZWwoZXZlbnQpIHtcblx0XHRjb25zdCBub3JtYWxpemVkV2hlZWwgPSBOb3JtYWxpemVXaGVlbChldmVudClcblxuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vbldoZWVsKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXHR9XG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcblx0XHR9XG5cblx0XHR0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZExpbmtMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuXHRcdGVhY2gobGlua3MsIGxpbmsgPT4ge1xuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGhyZWYpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiODkyYjc5MjFmODM1ODM3NTI5MDZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY2FudmFzIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93Iiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInVybCIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJvbkNoYW5nZUVuZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZFdoZWVsIiwiTm9ybWFsaXplV2hlZWwiLCJzY3JvbGwiLCJmcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=