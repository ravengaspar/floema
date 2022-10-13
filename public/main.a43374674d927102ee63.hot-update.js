/*! For license information please see main.a43374674d927102ee63.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default({template:this.template})}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){this.canvas.onChangeStart(this.template),await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"0ab5b44d3eb464ab02c2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUV4RHVDLE9BQU93QyxpQkFBaUIsU0FBVS9FLEtBQUttQyxTQUFTbkIsS0FBS2hCLE1BQ3JELGtCQ3hMRmdGLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0L2luZGV4LmpzJ1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJ3BhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERldGFpbCBmcm9tICdwYWdlcy9EZXRhaWwvaW5kZXguanMnXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lL2luZGV4LmpzJ1xuXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvJ1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cblx0XHR0aGlzLmNyZWF0ZUNhbnZhcygpXG5cblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDYW52YXMoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVDb250ZW50KCkge1xuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jylcblx0XHR0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cdH1cblxuXHRjcmVhdGVQYWdlcygpIHtcblx0XHR0aGlzLnBhZ2VzID0ge1xuXHRcdFx0YWJvdXQ6IG5ldyBBYm91dCgpLFxuXHRcdFx0Y29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuXHRcdFx0ZGV0YWlsOiBuZXcgRGV0YWlsKCksXG5cdFx0XHRob21lOiBuZXcgSG9tZSgpLFxuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0fVxuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMub25SZXNpemUoKVxuXHRcdHRoaXMucGFnZS5zaG93KClcblx0fVxuXG5cdG9uUG9wU3RhdGUoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG5cdH1cblxuXHRhc3luYyBvbkNoYW5nZSh1cmwpIHtcblx0XHR0aGlzLmNhbnZhcy5vbkNoYW5nZVN0YXJ0KHRoaXMudGVtcGxhdGUpXG5cdFx0YXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG5cdFx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cblx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0Y29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cblx0XHRcdHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG5cdFx0XHR0aGlzLmNhbnZhcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHRcdHRoaXMucGFnZS5zaG93KClcblxuXHRcdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcblx0XHRcdHRoaXMucGFnZS5vblJlc2l6ZSgpXG5cdFx0fVxuXG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShfID0+IHtcblx0XHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkgdGhpcy5jYW52YXMub25SZXNpemUoKVxuXHRcdH0pXG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG5cdH1cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcblx0fVxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0Y29uc3Qgbm9ybWFsaXplZFdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbCkge1xuXHRcdFx0dGhpcy5jYW52YXMub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCkge1xuXHRcdFx0dGhpcy5wYWdlLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMudXBkYXRlKHRoaXMucGFnZS5zY3JvbGwpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcblx0fVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjBhYjViNDRkM2ViNDY0YWIwMmMyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNhbnZhcyIsIkNhbnZhcyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsIm9uUG9wU3RhdGUiLCJvbkNoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmwiLCJvbkNoYW5nZVN0YXJ0IiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwic2Nyb2xsIiwiZnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9