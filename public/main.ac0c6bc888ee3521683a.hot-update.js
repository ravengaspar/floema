/*! For license information please see main.ac0c6bc888ee3521683a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),h=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize,this.page.show(),this.addLinkListeners()}else h.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"8bafd11f080f199e7db5"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYzBjNmJjODg4ZWUzNTIxNjgzYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBa0hBLElBekdBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBRXJCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLMEIsS0FBS0csTUFDWCxDQUVhLGVBQUNDLFNBQ1A5QixLQUFLMEIsS0FBS0ssT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ2QsS0FBS2UsU0FBVzBCLEVBQVd6QixhQUFhLGlCQUV4Q2hCLEtBQUtZLFFBQVE4QixhQUFhLGdCQUFpQjFDLEtBQUtlLFVBQ2hEZixLQUFLWSxRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcEN4QyxLQUFLMEIsS0FBTzFCLEtBQUtpQixNQUFNakIsS0FBS2UsVUFFNUJmLEtBQUswQixLQUFLQyxTQUNWM0IsS0FBSzJDLFNBQ0wzQyxLQUFLMEIsS0FBS0csT0FFVjdCLEtBQUtLLGtCQUNOLE1BQ0N1QyxFQUFRQyxJQUFJLFFBQVNDLE1BRXhCLENBRURILFdBQ00zQyxLQUFLMEIsTUFBUTFCLEtBQUswQixLQUFLaUIsVUFDekIzQyxLQUFLMEIsS0FBS2lCLFVBRWIsQ0FHRHJDLFNBQ01OLEtBQUswQixNQUFRMUIsS0FBSzBCLEtBQUtwQixRQUN6Qk4sS0FBSzBCLEtBQUtwQixTQUdaTixLQUFLK0MsTUFBUWQsT0FBT2Usc0JBQXNCaEQsS0FBS00sT0FBT0ssS0FBS1gsTUFDNUQsQ0FHREssbUJBQ0UsTUFBTTRDLEVBQVFwQyxTQUFTcUMsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkQSxFQUFNQyxpQkFDTixNQUFNLEtBQUVDLEdBQVNKLEVBQ2pCcEQsS0FBS3lELFNBQVNELEVBQWQsQ0FIRixHQU1ILENBRURwRCxvQkFDRTZCLE9BQU95QixpQkFBaUIsU0FBVTFELEtBQUsyQyxTQUFTaEMsS0FBS1gsTUFDdEQsa0JDL0dIMkQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XG5cbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKFwiY29tcGxldGVkXCIsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKTtcblxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiKTtcblxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIiwgdGhpcy50ZW1wbGF0ZSk7XG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUw7XG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XG5cbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICAgIHRoaXMub25SZXNpemU7XG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qIExvb3AgKi9cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyogTGlzdGVuZXJzICovXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubmV3IEFwcCgpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGJhZmQxMWYwODBmMTk5ZTdkYjVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwib25SZXNpemUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwib25DaGFuZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9