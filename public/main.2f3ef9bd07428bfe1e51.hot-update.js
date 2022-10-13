/*! For license information please see main.2f3ef9bd07428bfe1e51.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),n=a("./app/pages/Collections/index.js"),i=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),r=a("./node_modules/lodash/each.js"),d=(a("./node_modules/body-parser/index.js"),a("./app/components/Preloader.js")),c=a("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded)}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onPreloaded(){this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else c.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");r(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"60524d55afa1d5f21e61"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZjNlZjliZDA3NDI4YmZlMWU1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBNkZBLElBcEZBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksa0JBQ04sQ0FFREgsa0JBQ0VELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFFckJOLEtBQUtLLFVBQVVFLEtBQUssWUFBYVAsS0FBS1EsWUFDdkMsQ0FFRE4sZ0JBQ0VGLEtBQUtTLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENYLEtBQUtZLFNBQVdaLEtBQUtTLFFBQVFJLGFBQWEsZ0JBQzNDLENBRURWLGNBQ0VILEtBQUtjLE1BQVEsQ0FDWEMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWnRCLEtBQUt1QixLQUFPdkIsS0FBS2MsTUFBTWQsS0FBS1ksVUFFNUJaLEtBQUt1QixLQUFLQyxTQUNWeEIsS0FBS3VCLEtBQUtFLE1BRVgsQ0FFZ0Isb0JBQ2Z6QixLQUFLSyxVQUFVcUIsU0FDaEIsQ0FFYSxlQUFDQyxTQUNQM0IsS0FBS3VCLEtBQUtLLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF1QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDMUIsTUFBTUMsUUFBYUosRUFBUUssT0FFckJDLEVBQU16QixTQUFTMEIsY0FBYyxPQUVuQ0QsRUFBSUUsVUFBWUosRUFFaEIsTUFBTUssRUFBYUgsRUFBSXhCLGNBQWMsWUFFckNYLEtBQUtZLFNBQVcwQixFQUFXekIsYUFBYSxpQkFFeENiLEtBQUtTLFFBQVE4QixhQUFhLGdCQUFpQnZDLEtBQUtZLFVBQ2hEWixLQUFLUyxRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcENyQyxLQUFLdUIsS0FBT3ZCLEtBQUtjLE1BQU1kLEtBQUtZLFVBQzVCWixLQUFLdUIsS0FBS0MsU0FDVnhCLEtBQUt1QixLQUFLRSxPQUVWekIsS0FBS0ksa0JBQ04sTUFDQ29DLEVBQVFDLElBQUksUUFBU0MsTUFFeEIsQ0FFRHRDLG1CQUNFLE1BQU11QyxFQUFRakMsU0FBU2tDLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZCxNQUFNLEtBQUVDLEdBQVNILEVBRWpCRSxFQUFNRSxpQkFFTmxELEtBQUttRCxTQUFTRixFQUFkLENBTEYsR0FRSCxrQkMxRkhHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XG5cbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoXCJjb21wbGV0ZWRcIiwgdGhpcy5vblByZWxvYWRlZCk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgIHRoaXMucGFnZS5zaG93KCk7XG4gICAgLy8gdGhpcy5wYWdlLmhpZGUoKTtcbiAgfVxuXG4gIGFzeW5jIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgICAgdGhpcy5wYWdlLnNob3coKTtcblxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cblxubmV3IEFwcCgpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjA1MjRkNTVhZmExZDVmMjFlNjFcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwiZGVzdHJveSIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJvbkNoYW5nZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==