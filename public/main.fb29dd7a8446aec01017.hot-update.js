/*! For license information please see main.fb29dd7a8446aec01017.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var n=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),a=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./app/components/Canvas/index.js"),h=s("./app/components/Preloader.js"),r=s("./app/components/Navigation.js"),p=s("./node_modules/lodash/each.js"),c=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new h.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new d.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new n.default,collections:new i.default,detail:new a.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const s=await t.text(),n=document.createElement("div");window.history.pushState({},"",e),n.innerHTML=s;const i=n.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else c.log("Error",error)}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(){}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");p(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"5ef71ee8d0016caf37c8"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5mYjI5ZGQ3YTg0NDZhZWMwMTAxNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MGJBbUtBLElBdkpBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBRUxILEtBQUtJLGVBRUxKLEtBQUtLLGNBRUxMLEtBQUtNLG9CQUNMTixLQUFLTyxtQkFFTFAsS0FBS1EsUUFDTCxDQUVETCxtQkFDQ0gsS0FBS1MsV0FBYSxJQUFJQyxFQUFBQSxRQUFXLENBQ2hDQyxTQUFVWCxLQUFLVyxVQUVoQixDQUVEVCxrQkFDQ0YsS0FBS1ksVUFBWSxJQUFJQyxFQUFBQSxRQUNyQmIsS0FBS1ksVUFBVUUsS0FBSyxZQUFhZCxLQUFLZSxZQUFZQyxLQUFLaEIsTUFDdkQsQ0FFREksZUFDQ0osS0FBS2lCLE9BQVMsSUFBSUMsRUFBQUEsT0FDbEIsQ0FFRGpCLGdCQUNDRCxLQUFLbUIsUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q3JCLEtBQUtXLFNBQVdYLEtBQUttQixRQUFRRyxhQUFhLGdCQUMxQyxDQUVEakIsY0FDQ0wsS0FBS3VCLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWC9CLEtBQUtnQyxLQUFPaEMsS0FBS3VCLE1BQU12QixLQUFLVyxVQUM1QlgsS0FBS2dDLEtBQUtDLFFBQ1YsQ0FFRGxCLGNBQ0NmLEtBQUtZLFVBQVVzQixVQUNmbEMsS0FBS21DLFdBQ0xuQyxLQUFLZ0MsS0FBS0ksTUFDVixDQUVEQyxhQUNDckMsS0FBS3NDLFNBQVNDLE9BQU9DLFNBQVNDLFNBQzlCLENBRWEsZUFBQ0MsU0FDUjFDLEtBQUtnQyxLQUFLVyxPQUVoQixNQUFNQyxRQUFnQkwsT0FBT00sTUFBTUgsR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFFLE9BQWdCLENBQzNCLE1BQU1DLFFBQWFILEVBQVFJLE9BRXJCQyxFQUFNN0IsU0FBUzhCLGNBQWMsT0FFbkNYLE9BQU9ZLFFBQVFDLFVBQVUsQ0FBQyxFQUFHLEdBQUlWLEdBRWpDTyxFQUFJSSxVQUFZTixFQUVoQixNQUFNTyxFQUFhTCxFQUFJNUIsY0FBYyxZQUVyQ3JCLEtBQUtXLFNBQVcyQyxFQUFXaEMsYUFBYSxpQkFFeEN0QixLQUFLUyxXQUFXNkIsU0FBU3RDLEtBQUtXLFVBRTlCWCxLQUFLbUIsUUFBUW9DLGFBQWEsZ0JBQWlCdkQsS0FBS1csVUFDaERYLEtBQUttQixRQUFRa0MsVUFBWUMsRUFBV0QsVUFFcENyRCxLQUFLZ0MsS0FBT2hDLEtBQUt1QixNQUFNdkIsS0FBS1csVUFFNUJYLEtBQUtnQyxLQUFLQyxTQUNWakMsS0FBS21DLFdBRUxuQyxLQUFLZ0MsS0FBS0ksT0FFVnBDLEtBQUtPLGtCQUNMLE1BQ0FpRCxFQUFRQyxJQUFJLFFBQVNDLE1BRXRCLENBRUR2QixXQUNLbkMsS0FBS2lCLFFBQVVqQixLQUFLaUIsT0FBT2tCLFVBQzlCbkMsS0FBS2lCLE9BQU9rQixXQUVUbkMsS0FBS2dDLE1BQVFoQyxLQUFLZ0MsS0FBS0csVUFDMUJuQyxLQUFLZ0MsS0FBS0csVUFFWCxDQUVBd0IsY0FBZ0IsQ0FLakJuRCxTQUNLUixLQUFLaUIsUUFBVWpCLEtBQUtpQixPQUFPVCxRQUM5QlIsS0FBS2lCLE9BQU9ULFNBR1RSLEtBQUtnQyxNQUFRaEMsS0FBS2dDLEtBQUt4QixRQUMxQlIsS0FBS2dDLEtBQUt4QixTQUdYUixLQUFLNEQsTUFBUXJCLE9BQU9zQixzQkFBc0I3RCxLQUFLUSxPQUFPUSxLQUFLaEIsTUFDM0QsQ0FHRE8sbUJBQ0MsTUFBTXVELEVBQVExQyxTQUFTMkMsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFPRyxJQUNYQSxFQUFLQyxRQUFVQyxJQUNkQSxFQUFNQyxpQkFDTixNQUFNLEtBQUVDLEdBQVNKLEVBQ2pCakUsS0FBS3NDLFNBQVMrQixFQUFkLENBSEQsR0FNRCxDQUVEL0Qsb0JBQ0NpQyxPQUFPK0IsaUJBQWlCLFdBQVl0RSxLQUFLcUMsV0FBV3JCLEtBQUtoQixPQUl6RHVDLE9BQU8rQixpQkFBaUIsWUFBYXRFLEtBQUsyRCxZQUFZM0MsS0FBS2hCLE9BQzNEdUMsT0FBTytCLGlCQUFpQixZQUFhdEUsS0FBS3VFLFlBQVl2RCxLQUFLaEIsT0FDM0R1QyxPQUFPK0IsaUJBQWlCLFVBQVd0RSxLQUFLd0UsVUFBVXhELEtBQUtoQixPQUV2RHVDLE9BQU8rQixpQkFBaUIsYUFBY3RFLEtBQUsyRCxZQUFZM0MsS0FBS2hCLE9BQzVEdUMsT0FBTytCLGlCQUFpQixZQUFhdEUsS0FBS3VFLFlBQVl2RCxLQUFLaEIsT0FDM0R1QyxPQUFPK0IsaUJBQWlCLFdBQVl0RSxLQUFLd0UsVUFBVXhELEtBQUtoQixPQUV4RHVDLE9BQU8rQixpQkFBaUIsU0FBVXRFLEtBQUttQyxTQUFTbkIsS0FBS2hCLE1BQ3JELGtCQ2hLRnlFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gJ3BhZ2VzL0Fib3V0L2luZGV4LmpzJ1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJ3BhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzJ1xuaW1wb3J0IERldGFpbCBmcm9tICdwYWdlcy9EZXRhaWwvaW5kZXguanMnXG5pbXBvcnQgSG9tZSBmcm9tICdwYWdlcy9Ib21lL2luZGV4LmpzJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzLydcblxuaW1wb3J0IFByZWxvYWRlciBmcm9tICdjb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ2NvbXBvbmVudHMvTmF2aWdhdGlvbidcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5cbmNsYXNzIEFwcCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY3JlYXRlQ29udGVudCgpXG5cblx0XHR0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG5cdFx0dGhpcy5jcmVhdGVOYXZpZ2F0aW9uKClcblxuXHRcdHRoaXMuY3JlYXRlQ2FudmFzKClcblxuXHRcdHRoaXMuY3JlYXRlUGFnZXMoKVxuXG5cdFx0dGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblxuXHRcdHRoaXMudXBkYXRlKClcblx0fVxuXG5cdGNyZWF0ZU5hdmlnYXRpb24oKSB7XG5cdFx0dGhpcy5uYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb24oe1xuXHRcdFx0dGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXG5cdFx0fSlcblx0fVxuXG5cdGNyZWF0ZVByZWxvYWRlcigpIHtcblx0XHR0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKVxuXHRcdHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcblx0fVxuXG5cdGNyZWF0ZUNhbnZhcygpIHtcblx0XHR0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoKVxuXHR9XG5cblx0Y3JlYXRlQ29udGVudCgpIHtcblx0XHR0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cdFx0dGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnKVxuXHR9XG5cblx0Y3JlYXRlUGFnZXMoKSB7XG5cdFx0dGhpcy5wYWdlcyA9IHtcblx0XHRcdGFib3V0OiBuZXcgQWJvdXQoKSxcblx0XHRcdGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcblx0XHRcdGRldGFpbDogbmV3IERldGFpbCgpLFxuXHRcdFx0aG9tZTogbmV3IEhvbWUoKSxcblx0XHR9XG5cblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdH1cblxuXHRvblByZWxvYWRlZCgpIHtcblx0XHR0aGlzLnByZWxvYWRlci5kZXN0cm95KClcblx0XHR0aGlzLm9uUmVzaXplKClcblx0XHR0aGlzLnBhZ2Uuc2hvdygpXG5cdH1cblxuXHRvblBvcFN0YXRlKCkge1xuXHRcdHRoaXMub25DaGFuZ2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxuXHR9XG5cblx0YXN5bmMgb25DaGFuZ2UodXJsKSB7XG5cdFx0YXdhaXQgdGhpcy5wYWdlLmhpZGUoKVxuXG5cdFx0Y29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cblx0XHRpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0Y29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpXG5cblx0XHRcdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cblx0XHRcdHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIHVybClcblxuXHRcdFx0ZGl2LmlubmVySFRNTCA9IGh0bWxcblxuXHRcdFx0Y29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cblx0XHRcdHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG5cdFx0XHR0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcblx0XHRcdHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG5cdFx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG5cblx0XHRcdHRoaXMucGFnZS5jcmVhdGUoKVxuXHRcdFx0dGhpcy5vblJlc2l6ZSgpXG5cblx0XHRcdHRoaXMucGFnZS5zaG93KClcblxuXHRcdFx0dGhpcy5hZGRMaW5rTGlzdGVuZXJzKClcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG5cdFx0fVxuXHR9XG5cblx0b25SZXNpemUoKSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLmNhbnZhcy5vblJlc2l6ZSgpXG5cdFx0fVxuXHRcdGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uUmVzaXplKSB7XG5cdFx0XHR0aGlzLnBhZ2Uub25SZXNpemUoKVxuXHRcdH1cblx0fVxuXG4gIG9uVG91Y2hEb3duKCkge31cblxuXG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXG5cblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cdH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1ZWY3MWVlOGQwMDE2Y2FmMzdjOFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjYW52YXMiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwib25Ub3VjaERvd24iLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9