/*! For license information please see main.cf61264d5ac659c915de.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),n=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),d=a("./node_modules/lodash/each.js"),r=(a("./node_modules/body-parser/index.js"),a("./app/components/Preloader.js")),h=(a("./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js"),a("./node_modules/console-browserify/index.js"));new class{constructor(){this.createNavigation(),this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new Navigation({template:this.template})}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else h.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"59946f56c61d5ee4ae9f"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZjYxMjY0ZDVhYzY1OWM5MTVkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2RBNkhBLElBbkhBLE1BQ0NBLGNBQ0NDLEtBQUtDLG1CQUNMRCxLQUFLRSxrQkFFTEYsS0FBS0csZ0JBQ0xILEtBQUtJLGNBRUxKLEtBQUtLLG9CQUNMTCxLQUFLTSxtQkFFTE4sS0FBS08sUUFDTCxDQUVETixtQkFDQ0QsS0FBS1EsV0FBYSxJQUFJQyxXQUFXLENBQzdCQyxTQUFVVixLQUFLVSxVQUVuQixDQUVEUixrQkFDQ0YsS0FBS1csVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlosS0FBS1csVUFBVUUsS0FBSyxZQUFhYixLQUFLYyxZQUFZQyxLQUFLZixNQUN2RCxDQUVERyxnQkFDQ0gsS0FBS2dCLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENsQixLQUFLVSxTQUFXVixLQUFLZ0IsUUFBUUcsYUFBYSxnQkFDMUMsQ0FFRGYsY0FDQ0osS0FBS29CLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWDVCLEtBQUs2QixLQUFPN0IsS0FBS29CLE1BQU1wQixLQUFLVSxVQUM1QlYsS0FBSzZCLEtBQUtDLFFBQ1YsQ0FFRGhCLGNBQ0NkLEtBQUtXLFVBQVVvQixVQUNmL0IsS0FBS2dDLFdBQ0xoQyxLQUFLNkIsS0FBS0ksTUFDVixDQUVhLGVBQUNDLFNBQ1JsQyxLQUFLNkIsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMzQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ2xCLEtBQUtVLFNBQVdtQyxFQUFXMUIsYUFBYSxpQkFFeENuQixLQUFLUSxXQUFXc0MsU0FBUzlDLEtBQUtVLFVBRTlCVixLQUFLZ0IsUUFBUStCLGFBQWEsZ0JBQWlCL0MsS0FBS1UsVUFDaERWLEtBQUtnQixRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcEM1QyxLQUFLNkIsS0FBTzdCLEtBQUtvQixNQUFNcEIsS0FBS1UsVUFFNUJWLEtBQUs2QixLQUFLQyxTQUNWOUIsS0FBS2dDLFdBRUxoQyxLQUFLNkIsS0FBS0ksT0FFVmpDLEtBQUtNLGtCQUNMLE1BQ0EwQyxFQUFRQyxJQUFJLFFBQVNDLE1BRXRCLENBRURsQixXQUNLaEMsS0FBSzZCLE1BQVE3QixLQUFLNkIsS0FBS0csVUFDMUJoQyxLQUFLNkIsS0FBS0csVUFFWCxDQUdEekIsU0FDS1AsS0FBSzZCLE1BQVE3QixLQUFLNkIsS0FBS3RCLFFBQzFCUCxLQUFLNkIsS0FBS3RCLFNBR1hQLEtBQUttRCxNQUFRZCxPQUFPZSxzQkFBc0JwRCxLQUFLTyxPQUFPUSxLQUFLZixNQUMzRCxDQUdETSxtQkFDQyxNQUFNK0MsRUFBUXBDLFNBQVNxQyxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVVDLElBQ2RBLEVBQU1DLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0osRUFDakJ4RCxLQUFLOEMsU0FBU2MsRUFBZCxDQUhELEdBTUQsQ0FFRHZELG9CQUNDZ0MsT0FBT3dCLGlCQUFpQixTQUFVN0QsS0FBS2dDLFNBQVNqQixLQUFLZixNQUNyRCxrQkMxSEY4RCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tICdwYWdlcy9BYm91dC9pbmRleC5qcydcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tICdwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qcydcbmltcG9ydCBEZXRhaWwgZnJvbSAncGFnZXMvRGV0YWlsL2luZGV4LmpzJ1xuaW1wb3J0IEhvbWUgZnJvbSAncGFnZXMvSG9tZS9pbmRleC5qcydcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IHsgQ2xlYW5XZWJwYWNrUGx1Z2luIH0gZnJvbSAnY2xlYW4td2VicGFjay1wbHVnaW4nXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXG5cdFx0dGhpcy5jcmVhdGVDb250ZW50KClcblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcbiAgICAgIHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlXG4gICAgfSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0YXN5bmMgb25DaGFuZ2UodXJsKSB7XG5cdFx0YXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG5cdFx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cblx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblx0fVxuXG5cdC8qIExvb3AgKi9cblx0dXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuXHR9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTk5NDZmNTZjNjFkNWVlNGFlOWZcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsIm5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uIiwidGVtcGxhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJvbkNoYW5nZSIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9