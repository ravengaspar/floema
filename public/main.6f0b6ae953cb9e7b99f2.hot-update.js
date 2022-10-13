/*! For license information please see main.6f0b6ae953cb9e7b99f2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"007a1510413ab53b31f6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5cbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcy8nXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdjb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG4gICAgICBcblx0XHRcdHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG5cdFx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHRcdHRoaXMucGFnZS5zaG93KClcblxuXHRcdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcblx0XHRcdHRoaXMucGFnZS5vblJlc2l6ZSgpXG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcblx0XHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkgdGhpcy5jYW52YXMub25SZXNpemUoKVxuXHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG5cdH1cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcblx0fVxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZFdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbCkge1xuXHRcdFx0dGhpcy5jYW52YXMub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuXHRcdFx0dGhpcy5wYWdlLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcblx0XHRcdHRoaXMuY2FudmFzLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblx0XHR0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZExpbmtMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuXHRcdGVhY2gobGlua3MsIGxpbmsgPT4ge1xuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGhyZWYpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDA3YTE1MTA0MTNhYjUzYjMxZjZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY2FudmFzIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93Iiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl8iLCJvblRvdWNoRG93biIsImV2ZW50Iiwib25Ub3VjaE1vdmUiLCJvblRvdWNoVXAiLCJvbldoZWVsIiwibm9ybWFsaXplZFdoZWVsIiwiTm9ybWFsaXplV2hlZWwiLCJmcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=