/*! For license information please see main.5ef71ee8d0016caf37c8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,n)=>{n.r(t);var s=n("./app/pages/About/index.js"),i=n("./app/pages/Collections/index.js"),a=n("./app/pages/Detail/index.js"),o=n("./app/pages/Home/index.js"),h=n("./app/components/Canvas/index.js"),d=n("./app/components/Preloader.js"),r=n("./app/components/Navigation.js"),p=n("./node_modules/lodash/each.js"),c=n("./node_modules/console-browserify/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createCanvas(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new r.default({template:this.template})}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createCanvas(){this.canvas=new h.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new a.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange(window.location.pathname)}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const n=await t.text(),s=document.createElement("div");window.history.pushState({},"",e),s.innerHTML=n;const i=s.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else c.log("Error",error)}onResize(){this.canvas&&this.canvas.onResize&&this.canvas.onResize(),this.page&&this.page.onResize&&this.page.onResize()}onTouchDown(){}onTouchDown(){}onTouchDown(){}update(){this.canvas&&this.canvas.update&&this.canvas.update(),this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");p(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:n}=e;this.onChange(n)}}))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchstart",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"db5bfff7954a0026c521"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ZWY3MWVlOGQwMDE2Y2FmMzdjOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MGJBcUtBLElBekpBLE1BQ0NBLGNBQ0NDLEtBQUtDLGdCQUVMRCxLQUFLRSxrQkFDTEYsS0FBS0csbUJBRUxILEtBQUtJLGVBRUxKLEtBQUtLLGNBRUxMLEtBQUtNLG9CQUNMTixLQUFLTyxtQkFFTFAsS0FBS1EsUUFDTCxDQUVETCxtQkFDQ0gsS0FBS1MsV0FBYSxJQUFJQyxFQUFBQSxRQUFXLENBQ2hDQyxTQUFVWCxLQUFLVyxVQUVoQixDQUVEVCxrQkFDQ0YsS0FBS1ksVUFBWSxJQUFJQyxFQUFBQSxRQUNyQmIsS0FBS1ksVUFBVUUsS0FBSyxZQUFhZCxLQUFLZSxZQUFZQyxLQUFLaEIsTUFDdkQsQ0FFREksZUFDQ0osS0FBS2lCLE9BQVMsSUFBSUMsRUFBQUEsT0FDbEIsQ0FFRGpCLGdCQUNDRCxLQUFLbUIsUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q3JCLEtBQUtXLFNBQVdYLEtBQUttQixRQUFRRyxhQUFhLGdCQUMxQyxDQUVEakIsY0FDQ0wsS0FBS3VCLE1BQVEsQ0FDWkMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWC9CLEtBQUtnQyxLQUFPaEMsS0FBS3VCLE1BQU12QixLQUFLVyxVQUM1QlgsS0FBS2dDLEtBQUtDLFFBQ1YsQ0FFRGxCLGNBQ0NmLEtBQUtZLFVBQVVzQixVQUNmbEMsS0FBS21DLFdBQ0xuQyxLQUFLZ0MsS0FBS0ksTUFDVixDQUVEQyxhQUNDckMsS0FBS3NDLFNBQVNDLE9BQU9DLFNBQVNDLFNBQzlCLENBRWEsZUFBQ0MsU0FDUjFDLEtBQUtnQyxLQUFLVyxPQUVoQixNQUFNQyxRQUFnQkwsT0FBT00sTUFBTUgsR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFFLE9BQWdCLENBQzNCLE1BQU1DLFFBQWFILEVBQVFJLE9BRXJCQyxFQUFNN0IsU0FBUzhCLGNBQWMsT0FFbkNYLE9BQU9ZLFFBQVFDLFVBQVUsQ0FBQyxFQUFHLEdBQUlWLEdBRWpDTyxFQUFJSSxVQUFZTixFQUVoQixNQUFNTyxFQUFhTCxFQUFJNUIsY0FBYyxZQUVyQ3JCLEtBQUtXLFNBQVcyQyxFQUFXaEMsYUFBYSxpQkFFeEN0QixLQUFLUyxXQUFXNkIsU0FBU3RDLEtBQUtXLFVBRTlCWCxLQUFLbUIsUUFBUW9DLGFBQWEsZ0JBQWlCdkQsS0FBS1csVUFDaERYLEtBQUttQixRQUFRa0MsVUFBWUMsRUFBV0QsVUFFcENyRCxLQUFLZ0MsS0FBT2hDLEtBQUt1QixNQUFNdkIsS0FBS1csVUFFNUJYLEtBQUtnQyxLQUFLQyxTQUNWakMsS0FBS21DLFdBRUxuQyxLQUFLZ0MsS0FBS0ksT0FFVnBDLEtBQUtPLGtCQUNMLE1BQ0FpRCxFQUFRQyxJQUFJLFFBQVNDLE1BRXRCLENBRUR2QixXQUNLbkMsS0FBS2lCLFFBQVVqQixLQUFLaUIsT0FBT2tCLFVBQzlCbkMsS0FBS2lCLE9BQU9rQixXQUVUbkMsS0FBS2dDLE1BQVFoQyxLQUFLZ0MsS0FBS0csVUFDMUJuQyxLQUFLZ0MsS0FBS0csVUFFWCxDQUVBd0IsY0FBZ0IsQ0FDaEJBLGNBQWdCLENBQ2hCQSxjQUFnQixDQUtqQm5ELFNBQ0tSLEtBQUtpQixRQUFVakIsS0FBS2lCLE9BQU9ULFFBQzlCUixLQUFLaUIsT0FBT1QsU0FHVFIsS0FBS2dDLE1BQVFoQyxLQUFLZ0MsS0FBS3hCLFFBQzFCUixLQUFLZ0MsS0FBS3hCLFNBR1hSLEtBQUs0RCxNQUFRckIsT0FBT3NCLHNCQUFzQjdELEtBQUtRLE9BQU9RLEtBQUtoQixNQUMzRCxDQUdETyxtQkFDQyxNQUFNdUQsRUFBUTFDLFNBQVMyQyxpQkFBaUIsS0FFeENDLEVBQUtGLEdBQU9HLElBQ1hBLEVBQUtDLFFBQVVDLElBQ2RBLEVBQU1DLGlCQUNOLE1BQU0sS0FBRUMsR0FBU0osRUFDakJqRSxLQUFLc0MsU0FBUytCLEVBQWQsQ0FIRCxHQU1ELENBRUQvRCxvQkFDQ2lDLE9BQU8rQixpQkFBaUIsV0FBWXRFLEtBQUtxQyxXQUFXckIsS0FBS2hCLE9BSXpEdUMsT0FBTytCLGlCQUFpQixZQUFhdEUsS0FBSzJELFlBQVkzQyxLQUFLaEIsT0FDM0R1QyxPQUFPK0IsaUJBQWlCLFlBQWF0RSxLQUFLdUUsWUFBWXZELEtBQUtoQixPQUMzRHVDLE9BQU8rQixpQkFBaUIsVUFBV3RFLEtBQUt3RSxVQUFVeEQsS0FBS2hCLE9BRXZEdUMsT0FBTytCLGlCQUFpQixhQUFjdEUsS0FBSzJELFlBQVkzQyxLQUFLaEIsT0FDNUR1QyxPQUFPK0IsaUJBQWlCLFlBQWF0RSxLQUFLdUUsWUFBWXZELEtBQUtoQixPQUMzRHVDLE9BQU8rQixpQkFBaUIsV0FBWXRFLEtBQUt3RSxVQUFVeEQsS0FBS2hCLE9BRXhEdUMsT0FBTytCLGlCQUFpQixTQUFVdEUsS0FBS21DLFNBQVNuQixLQUFLaEIsTUFDckQsa0JDbEtGeUUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSAncGFnZXMvQWJvdXQvaW5kZXguanMnXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSAncGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanMnXG5pbXBvcnQgRGV0YWlsIGZyb20gJ3BhZ2VzL0RldGFpbC9pbmRleC5qcydcbmltcG9ydCBIb21lIGZyb20gJ3BhZ2VzL0hvbWUvaW5kZXguanMnXG5cbmltcG9ydCBDYW52YXMgZnJvbSAnY29tcG9uZW50cy9DYW52YXMvJ1xuXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcblxuY2xhc3MgQXBwIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jcmVhdGVDb250ZW50KClcblxuXHRcdHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcblx0XHR0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG5cdFx0dGhpcy5jcmVhdGVDYW52YXMoKVxuXG5cdFx0dGhpcy5jcmVhdGVQYWdlcygpXG5cblx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXG5cdFx0dGhpcy51cGRhdGUoKVxuXHR9XG5cblx0Y3JlYXRlTmF2aWdhdGlvbigpIHtcblx0XHR0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7XG5cdFx0XHR0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSxcblx0XHR9KVxuXHR9XG5cblx0Y3JlYXRlUHJlbG9hZGVyKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpXG5cdFx0dGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuXHR9XG5cblx0Y3JlYXRlQ2FudmFzKCkge1xuXHRcdHRoaXMuY2FudmFzID0gbmV3IENhbnZhcygpXG5cdH1cblxuXHRjcmVhdGVDb250ZW50KCkge1xuXHRcdHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jylcblx0XHR0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cdH1cblxuXHRjcmVhdGVQYWdlcygpIHtcblx0XHR0aGlzLnBhZ2VzID0ge1xuXHRcdFx0YWJvdXQ6IG5ldyBBYm91dCgpLFxuXHRcdFx0Y29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuXHRcdFx0ZGV0YWlsOiBuZXcgRGV0YWlsKCksXG5cdFx0XHRob21lOiBuZXcgSG9tZSgpLFxuXHRcdH1cblxuXHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblx0XHR0aGlzLnBhZ2UuY3JlYXRlKClcblx0fVxuXG5cdG9uUHJlbG9hZGVkKCkge1xuXHRcdHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKVxuXHRcdHRoaXMub25SZXNpemUoKVxuXHRcdHRoaXMucGFnZS5zaG93KClcblx0fVxuXG5cdG9uUG9wU3RhdGUoKSB7XG5cdFx0dGhpcy5vbkNoYW5nZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG5cdH1cblxuXHRhc3luYyBvbkNoYW5nZSh1cmwpIHtcblx0XHRhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG5cblx0XHRjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybClcblxuXHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KClcblxuXHRcdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuXHRcdFx0d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKVxuXG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG5cdFx0XHRjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuXHRcdFx0dGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cblx0XHRcdHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuXHRcdFx0dGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cblx0XHRcdHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cblxuXHRcdFx0dGhpcy5wYWdlLmNyZWF0ZSgpXG5cdFx0XHR0aGlzLm9uUmVzaXplKClcblxuXHRcdFx0dGhpcy5wYWdlLnNob3coKVxuXG5cdFx0XHR0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcblx0XHR9XG5cdH1cblxuXHRvblJlc2l6ZSgpIHtcblx0XHRpZiAodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25SZXNpemUpIHtcblx0XHRcdHRoaXMuY2FudmFzLm9uUmVzaXplKClcblx0XHR9XG5cdFx0aWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcblx0XHRcdHRoaXMucGFnZS5vblJlc2l6ZSgpXG5cdFx0fVxuXHR9XG5cbiAgb25Ub3VjaERvd24oKSB7fVxuICBvblRvdWNoRG93bigpIHt9XG4gIG9uVG91Y2hEb3duKCkge31cblxuXG5cblx0LyogTG9vcCAqL1xuXHR1cGRhdGUoKSB7XG5cdFx0aWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSkge1xuXHRcdFx0dGhpcy5jYW52YXMudXBkYXRlKClcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcblx0XHRcdHRoaXMucGFnZS51cGRhdGUoKVxuXHRcdH1cblxuXHRcdHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG5cdH1cblxuXHQvKiBMaXN0ZW5lcnMgKi9cblx0YWRkTGlua0xpc3RlbmVycygpIHtcblx0XHRjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuXG5cdFx0ZWFjaChsaW5rcywgbGluayA9PiB7XG5cdFx0XHRsaW5rLm9uY2xpY2sgPSBldmVudCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblx0XHRcdFx0Y29uc3QgeyBocmVmIH0gPSBsaW5rXG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoaHJlZilcblx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0YWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLmJpbmQodGhpcykpXG5cblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIHRoaXMub25XaGVlbC5iaW5kKHRoaXMpKVxuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoVXAuYmluZCh0aGlzKSlcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG5cdH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkYjViZmZmNzk1NGEwMDI2YzUyMVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjYW52YXMiLCJDYW52YXMiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwib25Ub3VjaERvd24iLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9