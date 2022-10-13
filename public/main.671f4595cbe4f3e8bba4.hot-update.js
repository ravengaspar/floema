/*! For license information please see main.671f4595cbe4f3e8bba4.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.onResize(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.preloader.destroy(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");s.innerHTML=n,window.history.pushState({},"",e);const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"12416e628973836b02b4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVkvRSxLQUFLa0UsVUFBVWhELEtBQUtsQixPQUV4RHVDLE9BQU93QyxpQkFBaUIsU0FBVS9FLEtBQUtRLFNBQVNVLEtBQUtsQixNQUNyRCxrQkNoTUZnRixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0L2luZGV4LmpzJ1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJ3BhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERldGFpbCBmcm9tICdwYWdlcy9EZXRhaWwvaW5kZXguanMnXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lL2luZGV4LmpzJ1xuXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvJ1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG5cdFx0dGhpcy5jcmVhdGVDYW52YXMoKVxuXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoe1xuXHRcdFx0Y2FudmFzOiB0aGlzLmNhbnZhcyxcblx0XHR9KVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHR0aGlzLmNhbnZhcy5vblByZWxvYWRlZCgpXG5cblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblxuXHRcdHRoaXMucGFnZS5zaG93KClcblx0fVxuXG5cdG9uUG9wU3RhdGUoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG5cdH1cblxuXHRhc3luYyBvbkNoYW5nZSh1cmwpIHtcblx0XHR0aGlzLmNhbnZhcy5vbkNoYW5nZVN0YXJ0KHRoaXMudGVtcGxhdGUpXG5cblx0XHRhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG5cblx0XHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuXHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcblxuXHRcdFx0Y29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cblx0XHRcdHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG5cdFx0XHR0aGlzLmNhbnZhcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHRcdHRoaXMucGFnZS5zaG93KClcblxuXHRcdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcblx0XHRcdHRoaXMucGFnZS5vblJlc2l6ZSgpXG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcblx0XHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkgdGhpcy5jYW52YXMub25SZXNpemUoKVxuXHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG5cdH1cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcblx0fVxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZFdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbCkge1xuXHRcdFx0dGhpcy5jYW52YXMub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuXHRcdFx0dGhpcy5wYWdlLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMudXBkYXRlKHRoaXMucGFnZS5zY3JvbGwpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcblx0fVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyNDE2ZTYyODk3MzgzNmIwMmI0XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJvblJlc2l6ZSIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJjYW52YXMiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwic2hvdyIsIm9uUG9wU3RhdGUiLCJvbkNoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmwiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwic2Nyb2xsIiwiZnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9