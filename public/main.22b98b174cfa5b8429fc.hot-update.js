/*! For license information please see main.22b98b174cfa5b8429fc.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var i=s("./app/pages/About/index.js"),a=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./app/components/Preloader.js"),h=s("./app/components/Navigation.js"),r=s("./node_modules/lodash/each.js"),p=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new h.default({template:this.template})}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new i.default,collections:new a.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),i=document.createElement("div");window.history.pushState({},"",e),i.innerHTML=s;const a=i.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else p.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");r(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"136d5792ec2f815f6293"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yMmI5OGIxNzRjZmE1Yjg0MjlmYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1pBb0lBLElBMUhBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBQ0xILEtBQUtJLGNBRUxKLEtBQUtLLG9CQUNMTCxLQUFLTSxtQkFFTE4sS0FBS08sUUFDTCxDQUVESixtQkFDQ0gsS0FBS1EsV0FBYSxJQUFJQyxFQUFBQSxRQUFXLENBQ2hDQyxTQUFVVixLQUFLVSxVQUVoQixDQUVEUixrQkFDQ0YsS0FBS1csVUFBWSxJQUFJQyxFQUFBQSxRQUNyQlosS0FBS1csVUFBVUUsS0FBSyxZQUFhYixLQUFLYyxZQUFZQyxLQUFLZixNQUN2RCxDQUVEQyxnQkFDQ0QsS0FBS2dCLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENsQixLQUFLVSxTQUFXVixLQUFLZ0IsUUFBUUcsYUFBYSxnQkFDMUMsQ0FFRGYsY0FDQ0osS0FBS29CLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWDVCLEtBQUs2QixLQUFPN0IsS0FBS29CLE1BQU1wQixLQUFLVSxVQUM1QlYsS0FBSzZCLEtBQUtDLFFBQ1YsQ0FFRGhCLGNBQ0NkLEtBQUtXLFVBQVVvQixVQUNmL0IsS0FBS2dDLFdBQ0xoQyxLQUFLNkIsS0FBS0ksTUFDVixDQUVhLGVBQUNDLFNBQ1JsQyxLQUFLNkIsS0FBS00sT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMzQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DTixPQUFPTyxRQUFRQyxVQUFVLENBQUMsRUFBRyxHQUFJWCxHQUVqQ1EsRUFBSUksVUFBWU4sRUFFaEIsTUFBTU8sRUFBYUwsRUFBSXhCLGNBQWMsWUFFckNsQixLQUFLVSxTQUFXcUMsRUFBVzVCLGFBQWEsaUJBRXhDbkIsS0FBS1EsV0FBV3dDLFNBQVNoRCxLQUFLVSxVQUU5QlYsS0FBS2dCLFFBQVFpQyxhQUFhLGdCQUFpQmpELEtBQUtVLFVBQ2hEVixLQUFLZ0IsUUFBUThCLFVBQVlDLEVBQVdELFVBRXBDOUMsS0FBSzZCLEtBQU83QixLQUFLb0IsTUFBTXBCLEtBQUtVLFVBRTVCVixLQUFLNkIsS0FBS0MsU0FDVjlCLEtBQUtnQyxXQUVMaEMsS0FBSzZCLEtBQUtJLE9BRVZqQyxLQUFLTSxrQkFDTCxNQUNBNEMsRUFBUUMsSUFBSSxRQUFTQyxNQUV0QixDQUVEcEIsV0FDS2hDLEtBQUs2QixNQUFRN0IsS0FBSzZCLEtBQUtHLFVBQzFCaEMsS0FBSzZCLEtBQUtHLFVBRVgsQ0FHRHpCLFNBQ0tQLEtBQUs2QixNQUFRN0IsS0FBSzZCLEtBQUt0QixRQUMxQlAsS0FBSzZCLEtBQUt0QixTQUdYUCxLQUFLcUQsTUFBUWhCLE9BQU9pQixzQkFBc0J0RCxLQUFLTyxPQUFPUSxLQUFLZixNQUMzRCxDQUdETSxtQkFDQyxNQUFNaUQsRUFBUXRDLFNBQVN1QyxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVVDLElBQ2RBLEVBQU1DLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0osRUFDakIxRCxLQUFLZ0QsU0FBU2MsRUFBZCxDQUhELEdBTUQsQ0FFRHpELG9CQUVHZ0MsT0FBTzBCLGlCQUFpQixhQUFjL0QsS0FBS2dFLFFBQVFqRCxLQUFLZixPQUkxRHFDLE9BQU8wQixpQkFBaUIsU0FBVS9ELEtBQUtnQyxTQUFTakIsS0FBS2YsTUFDckQsa0JDaklGaUUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cdFx0dGhpcy5jcmVhdGVQYWdlcygpXG5cblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0Y3JlYXRlTmF2aWdhdGlvbigpIHtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXG5cdFx0dGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0Y3JlYXRlQ29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXHR9XG5cblx0Y3JlYXRlUGFnZXMoKSB7XG5cdFx0dGhpcy5wYWdlcyA9IHtcblx0XHRcdGFib3V0OiBuZXcgQWJvdXQoKSxcblx0XHRcdGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxuXHRcdFx0aG9tZTogbmV3IEhvbWUoKSxcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdH1cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblx0XHR0aGlzLm9uUmVzaXplKClcblx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cdH1cblxuXHRhc3luYyBvbkNoYW5nZSh1cmwpIHtcblx0XHRhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG5cblx0XHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuXHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuXHRcdFx0dGhpcy5wYWdlLm9uUmVzaXplKClcblx0XHR9XG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG5cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cdH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxMzZkNTc5MmVjMmY4MTVmNjI5M1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJvbkNoYW5nZSIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwib25XaGVlbCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==