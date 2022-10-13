/*! For license information please see main.4a8e5348310913e143d7.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),a=n("./app/pages/Collections/index.js"),i=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./node_modules/normalize-wheel/index.js"),d=n("./node_modules/lodash/each.js"),c=n("./app/components/Canvas/index.js"),p=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),l=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new p.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new c.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new a.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){this.canvas&&this.canvas.onTouchDown&&this.canvas.onTouchDown(e)}onTouchMove(e){this.canvas&&this.canvas.onTouchMove&&this.canvas.onTouchMove(e)}onTouchUp(e){this.canvas&&this.canvas.onTouchUp&&this.canvas.onTouchUp(e)}onWheel(e){const t=h(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"871c9698a0acf29bcedd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YThlNTM0ODMxMDkxM2UxNDNkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7eWVBc0xBLElBektBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBRUxILEtBQUtJLGVBRUxKLEtBQUtLLGNBRUxMLEtBQUtNLG9CQUNMTixLQUFLTyxtQkFFTFAsS0FBS1EsUUFDTCxDQUVETCxtQkFDQ0gsS0FBS1MsV0FBYSxJQUFJQyxFQUFBQSxRQUFXLENBQ2hDQyxTQUFVWCxLQUFLVyxVQUVoQixDQUVEVCxrQkFDQ0YsS0FBS1ksVUFBWSxJQUFJQyxFQUFBQSxRQUNyQmIsS0FBS1ksVUFBVUUsS0FBSyxZQUFhZCxLQUFLZSxZQUFZQyxLQUFLaEIsTUFDdkQsQ0FFREksZUFDQ0osS0FBS2lCLE9BQVMsSUFBSUMsRUFBQUEsT0FDbEIsQ0FFRGpCLGdCQUNDRCxLQUFLbUIsUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q3JCLEtBQUtXLFNBQVdYLEtBQUttQixRQUFRRyxhQUFhLGdCQUMxQyxDQUVEakIsY0FDQ0wsS0FBS3VCLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWC9CLEtBQUtnQyxLQUFPaEMsS0FBS3VCLE1BQU12QixLQUFLVyxVQUM1QlgsS0FBS2dDLEtBQUtDLFFBQ1YsQ0FFRGxCLGNBQ0NmLEtBQUtZLFVBQVVzQixVQUNmbEMsS0FBS21DLFdBQ0xuQyxLQUFLZ0MsS0FBS0ksTUFDVixDQUVEQyxhQUNDckMsS0FBS3NDLFNBQVNDLE9BQU9DLFNBQVNDLFNBQzlCLENBRWEsZUFBQ0MsU0FDUjFDLEtBQUtnQyxLQUFLVyxPQUVoQixNQUFNQyxRQUFnQkwsT0FBT00sTUFBTUgsR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFFLE9BQWdCLENBQzNCLE1BQU1DLFFBQWFILEVBQVFJLE9BRXJCQyxFQUFNN0IsU0FBUzhCLGNBQWMsT0FFbkNYLE9BQU9ZLFFBQVFDLFVBQVUsQ0FBQyxFQUFHLEdBQUlWLEdBRWpDTyxFQUFJSSxVQUFZTixFQUVoQixNQUFNTyxFQUFhTCxFQUFJNUIsY0FBYyxZQUVyQ3JCLEtBQUtXLFNBQVcyQyxFQUFXaEMsYUFBYSxpQkFFeEN0QixLQUFLUyxXQUFXNkIsU0FBU3RDLEtBQUtXLFVBRTlCWCxLQUFLbUIsUUFBUW9DLGFBQWEsZ0JBQWlCdkQsS0FBS1csVUFDaERYLEtBQUttQixRQUFRa0MsVUFBWUMsRUFBV0QsVUFFcENyRCxLQUFLZ0MsS0FBT2hDLEtBQUt1QixNQUFNdkIsS0FBS1csVUFFNUJYLEtBQUtnQyxLQUFLQyxTQUNWakMsS0FBS21DLFdBRUxuQyxLQUFLZ0MsS0FBS0ksT0FFVnBDLEtBQUtPLGtCQUNMLE1BQ0FpRCxFQUFRQyxJQUFJLFFBQVNDLE1BRXRCLENBRUR2QixXQUNLbkMsS0FBS2dDLE1BQVFoQyxLQUFLZ0MsS0FBS0csVUFDMUJuQyxLQUFLZ0MsS0FBS0csV0FHWEksT0FBT29CLHVCQUFzQkMsSUFDeEI1RCxLQUFLaUIsUUFBVWpCLEtBQUtpQixPQUFPa0IsVUFBVW5DLEtBQUtpQixPQUFPa0IsVUFBWixHQUUxQyxDQUVEMEIsWUFBWUMsR0FDUDlELEtBQUtpQixRQUFVakIsS0FBS2lCLE9BQU80QyxhQUFhN0QsS0FBS2lCLE9BQU80QyxZQUFZQyxFQUNwRSxDQUNEQyxZQUFZRCxHQUNQOUQsS0FBS2lCLFFBQVVqQixLQUFLaUIsT0FBTzhDLGFBQWEvRCxLQUFLaUIsT0FBTzhDLFlBQVlELEVBQ3BFLENBQ0RFLFVBQVVGLEdBQ0w5RCxLQUFLaUIsUUFBVWpCLEtBQUtpQixPQUFPK0MsV0FBV2hFLEtBQUtpQixPQUFPK0MsVUFBVUYsRUFDaEUsQ0FDREcsUUFBUUgsR0FDUCxNQUFNSSxFQUFrQkMsRUFBZUwsR0FFbkM5RCxLQUFLaUIsUUFBVWpCLEtBQUtpQixPQUFPZ0QsU0FDOUJqRSxLQUFLaUIsT0FBT2dELFFBQVFDLEdBR2pCbEUsS0FBS2dDLE1BQVFoQyxLQUFLZ0MsS0FBS2lDLFNBQzFCakUsS0FBS2dDLEtBQUtpQyxRQUFRQyxFQUVuQixDQUdEMUQsU0FDS1IsS0FBS2lCLFFBQVVqQixLQUFLaUIsT0FBT1QsUUFDOUJSLEtBQUtpQixPQUFPVCxTQUdUUixLQUFLZ0MsTUFBUWhDLEtBQUtnQyxLQUFLeEIsUUFDMUJSLEtBQUtnQyxLQUFLeEIsU0FHWFIsS0FBS29FLE1BQVE3QixPQUFPb0Isc0JBQXNCM0QsS0FBS1EsT0FBT1EsS0FBS2hCLE1BQzNELENBR0RPLG1CQUNDLE1BQU04RCxFQUFRakQsU0FBU2tELGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBT0csSUFDWEEsRUFBS0MsUUFBVVgsSUFDZEEsRUFBTVksaUJBQ04sTUFBTSxLQUFFQyxHQUFTSCxFQUNqQnhFLEtBQUtzQyxTQUFTcUMsRUFBZCxDQUhELEdBTUQsQ0FFRHJFLG9CQUNDaUMsT0FBT3FDLGlCQUFpQixXQUFZNUUsS0FBS3FDLFdBQVdyQixLQUFLaEIsT0FFekR1QyxPQUFPcUMsaUJBQWlCLGFBQWM1RSxLQUFLaUUsUUFBUWpELEtBQUtoQixPQUV4RHVDLE9BQU9xQyxpQkFBaUIsWUFBYTVFLEtBQUs2RCxZQUFZN0MsS0FBS2hCLE9BQzNEdUMsT0FBT3FDLGlCQUFpQixZQUFhNUUsS0FBSytELFlBQVkvQyxLQUFLaEIsT0FDM0R1QyxPQUFPcUMsaUJBQWlCLFVBQVc1RSxLQUFLZ0UsVUFBVWhELEtBQUtoQixPQUV2RHVDLE9BQU9xQyxpQkFBaUIsYUFBYzVFLEtBQUs2RCxZQUFZN0MsS0FBS2hCLE9BQzVEdUMsT0FBT3FDLGlCQUFpQixZQUFhNUUsS0FBSytELFlBQVkvQyxLQUFLaEIsT0FDM0R1QyxPQUFPcUMsaUJBQWlCLFdBQVk1RSxLQUFLZ0UsVUFBVWhELEtBQUtoQixPQUV4RHVDLE9BQU9xQyxpQkFBaUIsU0FBVTVFLEtBQUttQyxTQUFTbkIsS0FBS2hCLE1BQ3JELGtCQ25MRjZFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0L2luZGV4LmpzJ1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJ3BhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERldGFpbCBmcm9tICdwYWdlcy9EZXRhaWwvaW5kZXguanMnXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lL2luZGV4LmpzJ1xuXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvJ1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5jbGFzcyBBcHAge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG5cdFx0dGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuXHRcdHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cblx0XHR0aGlzLmNyZWF0ZUNhbnZhcygpXG5cblx0XHR0aGlzLmNyZWF0ZVBhZ2VzKClcblxuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cblx0XHR0aGlzLnVwZGF0ZSgpXG5cdH1cblxuXHRjcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcblx0XHRcdHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlLFxuXHRcdH0pXG5cdH1cblxuXHRjcmVhdGVQcmVsb2FkZXIoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcblx0XHR0aGlzLnByZWxvYWRlci5vbmNlKCdjb21wbGV0ZWQnLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpXG5cdH1cblxuXHRjcmVhdGVDYW52YXMoKSB7XG5cdFx0dGhpcy5jYW52YXMgPSBuZXcgQ2FudmFzKClcblx0fVxuXG5cdGNyZWF0ZUNvbnRlbnQoKSB7XG5cdFx0dGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXHRcdHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblx0fVxuXG5cdGNyZWF0ZVBhZ2VzKCkge1xuXHRcdHRoaXMucGFnZXMgPSB7XG5cdFx0XHRhYm91dDogbmV3IEFib3V0KCksXG5cdFx0XHRjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXG5cdFx0XHRkZXRhaWw6IG5ldyBEZXRhaWwoKSxcblx0XHRcdGhvbWU6IG5ldyBIb21lKCksXG5cdFx0fVxuXG5cdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHR9XG5cblx0b25QcmVsb2FkZWQoKSB7XG5cdFx0dGhpcy5wcmVsb2FkZXIuZGVzdHJveSgpXG5cdFx0dGhpcy5vblJlc2l6ZSgpXG5cdFx0dGhpcy5wYWdlLnNob3coKVxuXHR9XG5cblx0b25Qb3BTdGF0ZSgpIHtcblx0XHR0aGlzLm9uQ2hhbmdlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcblx0fVxuXG5cdGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuXHRcdGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuXHRcdGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG5cdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcblx0XHRcdGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKVxuXG5cdFx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG5cdFx0XHR3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpXG5cblx0XHRcdGRpdi5pbm5lckhUTUwgPSBodG1sXG5cblx0XHRcdGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXG5cdFx0XHR0aGlzLm5hdmlnYXRpb24ub25DaGFuZ2UodGhpcy50ZW1wbGF0ZSlcblxuXHRcdFx0dGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScsIHRoaXMudGVtcGxhdGUpXG5cdFx0XHR0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUxcblxuXHRcdFx0dGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXVxuXG5cdFx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0XHRcdHRoaXMub25SZXNpemUoKVxuXG5cdFx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cblx0XHRcdHRoaXMuYWRkTGlua0xpc3RlbmVycygpXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFcnJvcicsIGVycm9yKVxuXHRcdH1cblx0fVxuXG5cdG9uUmVzaXplKCkge1xuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG5cdFx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHRoaXMuY2FudmFzLm9uUmVzaXplKClcblx0XHR9KVxuXHR9XG5cblx0b25Ub3VjaERvd24oZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaERvd24pIHRoaXMuY2FudmFzLm9uVG91Y2hEb3duKGV2ZW50KVxuXHR9XG5cdG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uVG91Y2hNb3ZlKSB0aGlzLmNhbnZhcy5vblRvdWNoTW92ZShldmVudClcblx0fVxuXHRvblRvdWNoVXAoZXZlbnQpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25Ub3VjaFVwKSB0aGlzLmNhbnZhcy5vblRvdWNoVXAoZXZlbnQpXG5cdH1cblx0b25XaGVlbChldmVudCkge1xuXHRcdGNvbnN0IG5vcm1hbGl6ZWRXaGVlbCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMuY2FudmFzLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpIHtcblx0XHRcdHRoaXMucGFnZS5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcblx0XHR9XG5cdH1cblxuXHQvKiBMb29wICovXG5cdHVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy51cGRhdGUoKVxuXHRcdH1cblxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5wYWdlLnVwZGF0ZSgpXG5cdFx0fVxuXG5cdFx0dGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcblx0fVxuXG5cdC8qIExpc3RlbmVycyAqL1xuXHRhZGRMaW5rTGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpXG5cblx0XHRlYWNoKGxpbmtzLCBsaW5rID0+IHtcblx0XHRcdGxpbmsub25jbGljayA9IGV2ZW50ID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRjb25zdCB7IGhyZWYgfSA9IGxpbmtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShocmVmKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVycygpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hEb3duLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUuYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSlcblx0fVxufVxuXG5uZXcgQXBwKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjg3MWM5Njk4YTBhY2YyOWJjZWRkXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVOYXZpZ2F0aW9uIiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInRlbXBsYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNhbnZhcyIsIkNhbnZhcyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsIm9uUG9wU3RhdGUiLCJvbkNoYW5nZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwiZnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9