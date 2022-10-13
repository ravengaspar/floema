/*! For license information please see main.6c8d3fec37dc7f583f1a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),i=n("./app/pages/Collections/index.js"),a=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new a.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const i=s.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const{pixelX:t,pixelY:n}=h(e)}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"8ad7c1188156d3fe944a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0MsS0FBS3hCLFFBQzFCUixLQUFLZ0MsS0FBS3hCLFNBR1hSLEtBQUttRSxNQUFRNUIsT0FBTzZCLHNCQUFzQnBFLEtBQUtRLE9BQU9RLEtBQUtoQixNQUMzRCxDQUdETyxtQkFDQyxNQUFNOEQsRUFBUWpELFNBQVNrRCxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVViLElBQ2RBLEVBQU1jLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0gsRUFDakJ4RSxLQUFLc0MsU0FBU3FDLEVBQWQsQ0FIRCxHQU1ELENBRURyRSxvQkFDQ2lDLE9BQU9xQyxpQkFBaUIsV0FBWTVFLEtBQUtxQyxXQUFXckIsS0FBS2hCLE9BRXpEdUMsT0FBT3FDLGlCQUFpQixhQUFjNUUsS0FBSytELFFBQVEvQyxLQUFLaEIsT0FFeER1QyxPQUFPcUMsaUJBQWlCLFlBQWE1RSxLQUFLMkQsWUFBWTNDLEtBQUtoQixPQUMzRHVDLE9BQU9xQyxpQkFBaUIsWUFBYTVFLEtBQUs2RCxZQUFZN0MsS0FBS2hCLE9BQzNEdUMsT0FBT3FDLGlCQUFpQixVQUFXNUUsS0FBSzhELFVBQVU5QyxLQUFLaEIsT0FFdkR1QyxPQUFPcUMsaUJBQWlCLGFBQWM1RSxLQUFLMkQsWUFBWTNDLEtBQUtoQixPQUM1RHVDLE9BQU9xQyxpQkFBaUIsWUFBYTVFLEtBQUs2RCxZQUFZN0MsS0FBS2hCLE9BQzNEdUMsT0FBT3FDLGlCQUFpQixXQUFZNUUsS0FBSzhELFVBQVU5QyxLQUFLaEIsT0FFeER1QyxPQUFPcUMsaUJBQWlCLFNBQVU1RSxLQUFLbUMsU0FBU25CLEtBQUtoQixNQUNyRCxrQkMzS0Y2RSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzLydcblxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cblx0XHR0aGlzLmNyZWF0ZUNhbnZhcygpXG5cblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDYW52YXMoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKClcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMub25SZXNpemUoKVxuXHRcdH1cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cdH1cblxuXHRvblRvdWNoRG93bihldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoRG93bikgdGhpcy5jYW52YXMub25Ub3VjaERvd24oZXZlbnQpXG5cdH1cblx0b25Ub3VjaE1vdmUoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaE1vdmUpIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hVcChldmVudCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblRvdWNoVXApIHRoaXMuY2FudmFzLm9uVG91Y2hVcChldmVudClcblx0fVxuXHRvbldoZWVsKGV2ZW50KSB7XG5cdFx0Y29uc3QgeyBwaXhlbFgscGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudClcblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy51cGRhdGUpIHtcblx0XHRcdHRoaXMuY2FudmFzLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG5cdFx0XHR0aGlzLnBhZ2UudXBkYXRlKClcblx0XHR9XG5cblx0XHR0aGlzLmZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxuXHR9XG5cblx0LyogTGlzdGVuZXJzICovXG5cdGFkZExpbmtMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJylcblxuXHRcdGVhY2gobGlua3MsIGxpbmsgPT4ge1xuXHRcdFx0bGluay5vbmNsaWNrID0gZXZlbnQgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGNvbnN0IHsgaHJlZiB9ID0gbGlua1xuXHRcdFx0XHR0aGlzLm9uQ2hhbmdlKGhyZWYpXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGFkN2MxMTg4MTU2ZDNmZTk0NGFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVDYW52YXMiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY2FudmFzIiwiQ2FudmFzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93Iiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInVybCIsImhpZGUiLCJyZXF1ZXN0IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm9uVG91Y2hEb3duIiwiZXZlbnQiLCJvblRvdWNoTW92ZSIsIm9uVG91Y2hVcCIsIm9uV2hlZWwiLCJwaXhlbFgiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==