/*! For license information please see main.77081fc32e6316556197.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),i=a("./app/pages/Collections/index.js"),n=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),d=a("./node_modules/lodash/each.js"),r=(a("./node_modules/body-parser/index.js"),a("./app/components/Preloader.js")),p=a("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else p.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange(a)}}))}update(){this.frame=window.requestAnimationFrame(this.update.bind(this)),this.page&&this.page.update&&this.page.update()}}}},(function(e){e.h=()=>"aa2930b51a2d98d72385"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43NzA4MWZjMzJlNjMxNjU1NjE5Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBb0dBLElBM0ZBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBRXJCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLMEIsS0FBS0csTUFDWCxDQUVhLGVBQUNDLFNBQ1A5QixLQUFLMEIsS0FBS0ssT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ2QsS0FBS2UsU0FBVzBCLEVBQVd6QixhQUFhLGlCQUV4Q2hCLEtBQUtZLFFBQVE4QixhQUFhLGdCQUFpQjFDLEtBQUtlLFVBQ2hEZixLQUFLWSxRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcEN4QyxLQUFLMEIsS0FBTzFCLEtBQUtpQixNQUFNakIsS0FBS2UsVUFDNUJmLEtBQUswQixLQUFLQyxTQUNWM0IsS0FBSzBCLEtBQUtHLE9BRVY3QixLQUFLSyxrQkFDTixNQUNDc0MsRUFBUUMsSUFBSSxRQUFTQyxNQUV4QixDQUVEeEMsbUJBQ0UsTUFBTXlDLEVBQVFqQyxTQUFTa0MsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkQSxFQUFNQyxpQkFDTixNQUFNLEtBQUVDLEdBQVNKLEVBQ2pCakQsS0FBS3NELFNBQVNELEVBQWQsQ0FIRixHQU1ILENBRUQvQyxTQUNFTixLQUFLdUQsTUFBUXRCLE9BQU91QixzQkFBc0J4RCxLQUFLTSxPQUFPSyxLQUFLWCxPQUV2REEsS0FBSzBCLE1BQVExQixLQUFLMEIsS0FBS3BCLFFBQ3pCTixLQUFLMEIsS0FBS3BCLFFBRWIsa0JDakdIbUQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XG5cbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKFwiY29tcGxldGVkXCIsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuICB9XG5cbiAgYXN5bmMgb25DaGFuZ2UodXJsKSB7XG4gICAgYXdhaXQgdGhpcy5wYWdlLmhpZGUoKTtcblxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKTtcblxuICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVxdWVzdC50ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiKTtcblxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIiwgdGhpcy50ZW1wbGF0ZSk7XG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUw7XG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuXG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuICB9XG59XG5cbm5ldyBBcHAoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFhMjkzMGI1MWEyZDk4ZDcyMzg1XCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJocmVmIiwib25DaGFuZ2UiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==