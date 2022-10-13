/*! For license information please see main.9282e0cd1f3b3dd13b8b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),n=s("./app/pages/Collections/index.js"),i=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),c=s("./node_modules/lodash/each.js");new class{constructor(){this.createContent(),this.createPages(),this.addLinkListeners()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){const t=window.fetch(e);console.log(t)}addLinkListeners(){const e=document.querySelectorAll("a");c(e,(e=>{e.onclick=t=>{const{href:s}=e;t.preventDefault(),this.onChange(s)}}))}}}},(function(e){e.h=()=>"754fb0e1b5da3e05d047"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MjgyZTBjZDFmM2IzZGQxM2I4Yi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cVJBdURBLElBaERBLE1BQ0VBLGNBQ0VDLEtBQUtDLGdCQUNMRCxLQUFLRSxjQUVMRixLQUFLRyxrQkFDTixDQUVERixnQkFDRUQsS0FBS0ksUUFBVUMsU0FBU0MsY0FBYyxZQUN0Q04sS0FBS08sU0FBV1AsS0FBS0ksUUFBUUksYUFBYSxnQkFDM0MsQ0FFRE4sY0FDRUYsS0FBS1MsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaakIsS0FBS2tCLEtBQU9sQixLQUFLUyxNQUFNVCxLQUFLTyxVQUU1QlAsS0FBS2tCLEtBQUtDLFNBQ1ZuQixLQUFLa0IsS0FBS0UsTUFFWCxDQUVhLGVBQUNDLEdBQ2IsTUFBTUMsRUFBVUMsT0FBT0MsTUFBTUgsR0FDN0JJLFFBQVFDLElBQUlKLEVBQ2IsQ0FFRG5CLG1CQUNFLE1BQU13QixFQUFRdEIsU0FBU3VCLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZCxNQUFNLEtBQUVDLEdBQVNILEVBRWpCRSxFQUFNRSxpQkFFTmxDLEtBQUttQyxTQUFTRixFQUFkLENBTEYsR0FRSCxrQkNwREhHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgIHRoaXMucGFnZS5zaG93KCk7XG4gICAgLy8gdGhpcy5wYWdlLmhpZGUoKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSB3aW5kb3cuZmV0Y2godXJsKTtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cblxubmV3IEFwcCgpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNzU0ZmIwZTFiNWRhM2UwNWQwNDdcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwidXJsIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImVhY2giLCJsaW5rIiwib25jbGljayIsImV2ZW50IiwiaHJlZiIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=