/*! For license information please see main.432ca55c5b0ed786c1fe.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),n=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),d=a("./node_modules/lodash/each.js"),r=(a("./node_modules/body-parser/index.js"),a("./app/components/Preloader.js")),h=(a("./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js"),a("./node_modules/console-browserify/index.js"));new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new Navigation({template:this.template})}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else h.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"1cb94c4ae9a114584813"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40MzJjYTU1YzViMGVkNzg2YzFmZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2RBNkhBLElBbkhBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBQ0xILEtBQUtJLGNBRUxKLEtBQUtLLG9CQUNMTCxLQUFLTSxtQkFFTE4sS0FBS08sUUFDTCxDQUVESixtQkFDQ0gsS0FBS1EsV0FBYSxJQUFJQyxXQUFXLENBQ2hDQyxTQUFVVixLQUFLVSxVQUVoQixDQUVEUixrQkFDQ0YsS0FBS1csVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlosS0FBS1csVUFBVUUsS0FBSyxZQUFhYixLQUFLYyxZQUFZQyxLQUFLZixNQUN2RCxDQUVEQyxnQkFDQ0QsS0FBS2dCLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENsQixLQUFLVSxTQUFXVixLQUFLZ0IsUUFBUUcsYUFBYSxnQkFDMUMsQ0FFRGYsY0FDQ0osS0FBS29CLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWDVCLEtBQUs2QixLQUFPN0IsS0FBS29CLE1BQU1wQixLQUFLVSxVQUM1QlYsS0FBSzZCLEtBQUtDLFFBQ1YsQ0FFRGhCLGNBQ0NkLEtBQUtXLFVBQVVvQixVQUNmL0IsS0FBS2dDLFdBQ0xoQyxLQUFLNkIsS0FBS0ksTUFDVixDQUVhLGVBQUNDLFNBQ1JsQyxLQUFLNkIsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMzQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ2xCLEtBQUtVLFNBQVdtQyxFQUFXMUIsYUFBYSxpQkFFeENuQixLQUFLUSxXQUFXc0MsU0FBUzlDLEtBQUtVLFVBRTlCVixLQUFLZ0IsUUFBUStCLGFBQWEsZ0JBQWlCL0MsS0FBS1UsVUFDaERWLEtBQUtnQixRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcEM1QyxLQUFLNkIsS0FBTzdCLEtBQUtvQixNQUFNcEIsS0FBS1UsVUFFNUJWLEtBQUs2QixLQUFLQyxTQUNWOUIsS0FBS2dDLFdBRUxoQyxLQUFLNkIsS0FBS0ksT0FFVmpDLEtBQUtNLGtCQUNMLE1BQ0EwQyxFQUFRQyxJQUFJLFFBQVNDLE1BRXRCLENBRURsQixXQUNLaEMsS0FBSzZCLE1BQVE3QixLQUFLNkIsS0FBS0csVUFDMUJoQyxLQUFLNkIsS0FBS0csVUFFWCxDQUdEekIsU0FDS1AsS0FBSzZCLE1BQVE3QixLQUFLNkIsS0FBS3RCLFFBQzFCUCxLQUFLNkIsS0FBS3RCLFNBR1hQLEtBQUttRCxNQUFRZCxPQUFPZSxzQkFBc0JwRCxLQUFLTyxPQUFPUSxLQUFLZixNQUMzRCxDQUdETSxtQkFDQyxNQUFNK0MsRUFBUXBDLFNBQVNxQyxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVVDLElBQ2RBLEVBQU1DLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0osRUFDakJ4RCxLQUFLOEMsU0FBU2MsRUFBZCxDQUhELEdBTUQsQ0FFRHZELG9CQUNDZ0MsT0FBT3dCLGlCQUFpQixTQUFVN0QsS0FBS2dDLFNBQVNqQixLQUFLZixNQUNyRCxrQkMxSEY4RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IHsgQ2xlYW5XZWJwYWNrUGx1Z2luIH0gZnJvbSAnY2xlYW4td2VicGFjay1wbHVnaW4nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDb250ZW50KCkge1xuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jylcblx0XHR0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cdH1cblxuXHRjcmVhdGVQYWdlcygpIHtcblx0XHR0aGlzLnBhZ2VzID0ge1xuXHRcdFx0YWJvdXQ6IG5ldyBBYm91dCgpLFxuXHRcdFx0Y29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuXHRcdFx0ZGV0YWlsOiBuZXcgRGV0YWlsKCksXG5cdFx0XHRob21lOiBuZXcgSG9tZSgpLFxuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0fVxuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMub25SZXNpemUoKVxuXHRcdHRoaXMucGFnZS5zaG93KClcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcblx0fVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFjYjk0YzRhZTlhMTE0NTg0ODEzXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwib25DaGFuZ2UiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==