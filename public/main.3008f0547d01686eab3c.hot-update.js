/*! For license information please see main.3008f0547d01686eab3c.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),n=s("./app/pages/Collections/index.js"),i=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),r=s("./node_modules/lodash/each.js"),c=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),d=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new c.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.json(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else d.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");r(e,(e=>{e.onclick=t=>{const{href:s}=e;t.preventDefault(),this.onChange(s)}}))}}}},(function(e){e.h=()=>"bc37dc1689026ebf7ce9"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zMDA4ZjA1NDdkMDE2ODZlYWIzYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBdUZBLElBOUVBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksa0JBQ04sQ0FFREgsa0JBQ0VELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsT0FDdEIsQ0FFREosZ0JBQ0VGLEtBQUtPLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENULEtBQUtVLFNBQVdWLEtBQUtPLFFBQVFJLGFBQWEsZ0JBQzNDLENBRURSLGNBQ0VILEtBQUtZLE1BQVEsQ0FDWEMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWnBCLEtBQUtxQixLQUFPckIsS0FBS1ksTUFBTVosS0FBS1UsVUFFNUJWLEtBQUtxQixLQUFLQyxTQUNWdEIsS0FBS3FCLEtBQUtFLE1BRVgsQ0FFYSxlQUFDQyxTQUNQeEIsS0FBS3FCLEtBQUtJLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF1QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDMUIsTUFBTUMsUUFBYUosRUFBUUssT0FDckJDLEVBQU14QixTQUFTeUIsY0FBYyxPQUduQ0QsRUFBSUUsVUFBWUosRUFFaEIsTUFBTUssRUFBYUgsRUFBSXZCLGNBQWMsWUFFckNULEtBQUtVLFNBQVd5QixFQUFXeEIsYUFBYSxpQkFFeENYLEtBQUtPLFFBQVE2QixhQUFhLGdCQUFpQnBDLEtBQUtVLFVBQ2hEVixLQUFLTyxRQUFRMkIsVUFBWUMsRUFBV0QsVUFFcENsQyxLQUFLcUIsS0FBT3JCLEtBQUtZLE1BQU1aLEtBQUtVLFVBQzVCVixLQUFLcUIsS0FBS0MsU0FDVnRCLEtBQUtxQixLQUFLRSxPQUVWdkIsS0FBS0ksa0JBQ04sTUFDQ2lDLEVBQVFDLElBQUksUUFBU0MsTUFFeEIsQ0FFRG5DLG1CQUNFLE1BQU1vQyxFQUFRaEMsU0FBU2lDLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZCxNQUFNLEtBQUVDLEdBQVNILEVBRWpCRSxFQUFNRSxpQkFFTi9DLEtBQUtnRCxTQUFTRixFQUFkLENBTEYsR0FRSCxrQkNwRkhHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCBqc29uIGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1ByZWxvYWRlclwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuXG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgIHRoaXMucGFnZS5zaG93KCk7XG4gICAgLy8gdGhpcy5wYWdlLmhpZGUoKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgICAgdGhpcy5wYWdlLnNob3coKTtcblxuICAgICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3JcIiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZShocmVmKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cbn1cblxubmV3IEFwcCgpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYmMzN2RjMTY4OTAyNmViZjdjZTlcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkTGlua0xpc3RlbmVycyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJzaG93IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJqc29uIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9