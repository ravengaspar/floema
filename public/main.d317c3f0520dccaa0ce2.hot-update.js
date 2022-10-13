/*! For license information please see main.d317c3f0520dccaa0ce2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),n=s("./app/pages/Collections/index.js"),i=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),c=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./node_modules/console-browserify/index.js"));new class{constructor(){this.createP,this.createContent(),this.createPages(),this.addLinkListeners()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else r.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");c(e,(e=>{e.onclick=t=>{const{href:s}=e;t.preventDefault(),this.onChange(s)}}))}}}},(function(e){e.h=()=>"f84323772c5ce3380c2c"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMzE3YzNmMDUyMGRjY2FhMGNlMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7a1hBa0ZBLElBMUVBLE1BQ0VBLGNBRUVDLEtBQUtDLFFBRUxELEtBQUtFLGdCQUNMRixLQUFLRyxjQUVMSCxLQUFLSSxrQkFDTixDQUVERixnQkFDRUYsS0FBS0ssUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q1AsS0FBS1EsU0FBV1IsS0FBS0ssUUFBUUksYUFBYSxnQkFDM0MsQ0FFRE4sY0FDRUgsS0FBS1UsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdabEIsS0FBS21CLEtBQU9uQixLQUFLVSxNQUFNVixLQUFLUSxVQUU1QlIsS0FBS21CLEtBQUtDLFNBQ1ZwQixLQUFLbUIsS0FBS0UsTUFFWCxDQUVhLGVBQUNDLFNBQ1B0QixLQUFLbUIsS0FBS0ksT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUNyQkMsRUFBTXhCLFNBQVN5QixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJdkIsY0FBYyxZQUVyQ1AsS0FBS1EsU0FBV3lCLEVBQVd4QixhQUFhLGlCQUV4Q1QsS0FBS0ssUUFBUTZCLGFBQWEsZ0JBQWlCbEMsS0FBS1EsVUFDaERSLEtBQUtLLFFBQVEyQixVQUFZQyxFQUFXRCxVQUVwQ2hDLEtBQUttQixLQUFPbkIsS0FBS1UsTUFBTVYsS0FBS1EsVUFDNUJSLEtBQUttQixLQUFLQyxTQUNWcEIsS0FBS21CLEtBQUtFLE9BRVZyQixLQUFLSSxrQkFDTixNQUNDK0IsRUFBUUMsSUFBSSxRQUFTQyxNQUV4QixDQUVEakMsbUJBQ0UsTUFBTWtDLEVBQVFoQyxTQUFTaUMsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkLE1BQU0sS0FBRUMsR0FBU0gsRUFFakJFLEVBQU1FLGlCQUVON0MsS0FBSzhDLFNBQVNGLEVBQWQsQ0FMRixHQVFILGtCQy9FSEcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuY3JlYXRlUFxuXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgIHRoaXMucGFnZS5zaG93KCk7XG4gICAgLy8gdGhpcy5wYWdlLmhpZGUoKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTDtcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbm5ldyBBcHAoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImY4NDMyMzc3MmM1Y2UzMzgwYzJjXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVAiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=