/*! For license information please see main.2a9959ec4d8be68e6c34.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),n=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),d=a("./app/components/Preloader.js"),r=a("./app/components/Navigation.js"),h=a("./node_modules/lodash/each.js"),p=a("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const a=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=a;const i=s.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else p.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");h(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"51bf7b1d73870d0faca9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yYTk5NTllYzRkOGJlNjhlNmMzNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1pBbUlBLElBekhBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBQ0xILEtBQUtJLGNBRUxKLEtBQUtLLG9CQUNMTCxLQUFLTSxtQkFFTE4sS0FBS08sUUFDTCxDQUVESixtQkFDQ0gsS0FBS1EsV0FBYSxJQUFJQyxFQUFBQSxRQUFXLENBQ2hDQyxTQUFVVixLQUFLVSxVQUVoQixDQUVEUixrQkFDQ0YsS0FBS1csVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlosS0FBS1csVUFBVUUsS0FBSyxZQUFhYixLQUFLYyxZQUFZQyxLQUFLZixNQUN2RCxDQUVEQyxnQkFDQ0QsS0FBS2dCLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENsQixLQUFLVSxTQUFXVixLQUFLZ0IsUUFBUUcsYUFBYSxnQkFDMUMsQ0FFRGYsY0FDQ0osS0FBS29CLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWDVCLEtBQUs2QixLQUFPN0IsS0FBS29CLE1BQU1wQixLQUFLVSxVQUM1QlYsS0FBSzZCLEtBQUtDLFFBQ1YsQ0FFRGhCLGNBQ0NkLEtBQUtXLFVBQVVvQixVQUNmL0IsS0FBS2dDLFdBQ0xoQyxLQUFLNkIsS0FBS0ksTUFDVixDQUVhLGVBQUNDLFNBQ1JsQyxLQUFLNkIsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMzQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DTixPQUFPTyxRQUFRQyxVQUFVLENBQUMsRUFBRyxHQUFJWCxHQUVqQ1EsRUFBSUksVUFBWU4sRUFFaEIsTUFBTU8sRUFBYUwsRUFBSXhCLGNBQWMsWUFFckNsQixLQUFLVSxTQUFXcUMsRUFBVzVCLGFBQWEsaUJBRXhDbkIsS0FBS1EsV0FBV3dDLFNBQVNoRCxLQUFLVSxVQUU5QlYsS0FBS2dCLFFBQVFpQyxhQUFhLGdCQUFpQmpELEtBQUtVLFVBQ2hEVixLQUFLZ0IsUUFBUThCLFVBQVlDLEVBQVdELFVBRXBDOUMsS0FBSzZCLEtBQU83QixLQUFLb0IsTUFBTXBCLEtBQUtVLFVBRTVCVixLQUFLNkIsS0FBS0MsU0FDVjlCLEtBQUtnQyxXQUVMaEMsS0FBSzZCLEtBQUtJLE9BRVZqQyxLQUFLTSxrQkFDTCxNQUNBNEMsRUFBUUMsSUFBSSxRQUFTQyxNQUV0QixDQUVEcEIsV0FDS2hDLEtBQUs2QixNQUFRN0IsS0FBSzZCLEtBQUtHLFVBQzFCaEMsS0FBSzZCLEtBQUtHLFVBRVgsQ0FHRHpCLFNBQ0tQLEtBQUs2QixNQUFRN0IsS0FBSzZCLEtBQUt0QixRQUMxQlAsS0FBSzZCLEtBQUt0QixTQUdYUCxLQUFLcUQsTUFBUWhCLE9BQU9pQixzQkFBc0J0RCxLQUFLTyxPQUFPUSxLQUFLZixNQUMzRCxDQUdETSxtQkFDQyxNQUFNaUQsRUFBUXRDLFNBQVN1QyxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVVDLElBQ2RBLEVBQU1DLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0osRUFDakIxRCxLQUFLZ0QsU0FBU2MsRUFBZCxDQUhELEdBTUQsQ0FFRHpELG9CQUtDZ0MsT0FBTzBCLGlCQUFpQixTQUFVL0QsS0FBS2dDLFNBQVNqQixLQUFLZixNQUNyRCxrQkNoSUZnRSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnY29tcG9uZW50cy9QcmVsb2FkZXInXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdjb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDb250ZW50KCkge1xuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jylcblx0XHR0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cdH1cblxuXHRjcmVhdGVQYWdlcygpIHtcblx0XHR0aGlzLnBhZ2VzID0ge1xuXHRcdFx0YWJvdXQ6IG5ldyBBYm91dCgpLFxuXHRcdFx0Y29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuXHRcdFx0ZGV0YWlsOiBuZXcgRGV0YWlsKCksXG5cdFx0XHRob21lOiBuZXcgSG9tZSgpLFxuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0fVxuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMub25SZXNpemUoKVxuXHRcdHRoaXMucGFnZS5zaG93KClcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblxuICAgIFxuXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTFiZjdiMWQ3Mzg3MGQwZmFjYTlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwib25DaGFuZ2UiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==