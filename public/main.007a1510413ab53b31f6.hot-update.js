/*! For license information please see main.007a1510413ab53b31f6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.canvas.onChange(),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"17bebc9aab07160b19ae"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5cbmltcG9ydCBOb3JtYWxpemVXaGVlbCBmcm9tICdub3JtYWxpemUtd2hlZWwnXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcy8nXG5cbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdjb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG4gICAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZSgpXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG5cdFx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHRoaXMuY2FudmFzLm9uUmVzaXplKClcblx0XHR9KVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKSB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShldmVudClcblx0fVxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZXZlbnQpXG5cdH1cblx0b25XaGVlbChldmVudCkge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRXaGVlbCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMuY2FudmFzLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMucGFnZS5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy51cGRhdGUoKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcblx0fVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE3YmViYzlhYWIwNzE2MGIxOWFlXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNhbnZhcyIsIkNhbnZhcyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsIm9uUG9wU3RhdGUiLCJvbkNoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwiZnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9