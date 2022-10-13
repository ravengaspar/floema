/*! For license information please see main.cd47b92d6171712d2e41.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),n=a("./app/pages/Collections/index.js"),o=a("./app/pages/Detail/index.js"),i=a("./app/pages/Home/index.js"),c=a("./node_modules/lodash/each.js");a("./node_modules/body-parser/index.js");new class{constructor(){this.createContent(),this.createPages(),this.addLinkListeners()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new n.default,detail:new o.default,home:new i.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){const t=await window.fetch(e);if(200===t.status){await t.te}else console.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");c(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"b75af0848ab4248e8132"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZDQ3YjkyZDYxNzE3MTJkMmU0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7OFRBNkRBLElBckRBLE1BQ0VBLGNBQ0VDLEtBQUtDLGdCQUNMRCxLQUFLRSxjQUVMRixLQUFLRyxrQkFDTixDQUVERixnQkFDRUQsS0FBS0ksUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q04sS0FBS08sU0FBV1AsS0FBS0ksUUFBUUksYUFBYSxnQkFDM0MsQ0FFRE4sY0FDRUYsS0FBS1MsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaakIsS0FBS2tCLEtBQU9sQixLQUFLUyxNQUFNVCxLQUFLTyxVQUU1QlAsS0FBS2tCLEtBQUtDLFNBQ1ZuQixLQUFLa0IsS0FBS0UsTUFFWCxDQUVhLGVBQUNDLEdBQ2IsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1ILEdBRW5DLEdBQXVCLE1BQW5CQyxFQUFRRyxPQUFnQixPQUNQSCxFQUFRSSxFQUM1QixNQUNDQyxRQUFRQyxJQUFJLFFBQVNDLE1BRXhCLENBRUQxQixtQkFDRSxNQUFNMkIsRUFBUXpCLFNBQVMwQixpQkFBaUIsS0FFeENDLEVBQUtGLEdBQVFHLElBQ1hBLEVBQUtDLFFBQVdDLElBQ2QsTUFBTSxLQUFFQyxHQUFTSCxFQUVqQkUsRUFBTUUsaUJBRU5yQyxLQUFLc0MsU0FBU0YsRUFBZCxDQUxGLEdBUUgsa0JDMURIRyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBYm91dCBmcm9tIFwicGFnZXMvQWJvdXQvaW5kZXguanNcIjtcbmltcG9ydCBDb2xsZWN0aW9ucyBmcm9tIFwicGFnZXMvQ29sbGVjdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBEZXRhaWwgZnJvbSBcInBhZ2VzL0RldGFpbC9pbmRleC5qc1wiO1xuaW1wb3J0IEhvbWUgZnJvbSBcInBhZ2VzL0hvbWUvaW5kZXguanNcIjtcblxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XG5pbXBvcnQgeyBqc29uIH0gZnJvbSBcImJvZHktcGFyc2VyXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcblxuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuICAgIC8vIHRoaXMucGFnZS5oaWRlKCk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcXVlc3QudGVcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuXG5uZXcgQXBwKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiNzVhZjA4NDhhYjQyNDhlODEzMlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRMaW5rTGlzdGVuZXJzIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJ1cmwiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJ0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=