/*! For license information please see main.1c52387534803607dada.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),n=a("./app/pages/Collections/index.js"),i=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),r=a("./node_modules/lodash/each.js"),c=a("./node_modules/body-parser/index.js"),d=a("./app/components/Preloader.js"),l=a("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new d.default}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=await(0,c.json)(t);l.log(a);const s=document.createElement("div");s.innerHTML=e;const n=s.querySelector(".content");this.template=n.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=n.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else l.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");r(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"2caa2f9c3feb3948a1a2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xYzUyMzg3NTM0ODAzNjA3ZGFkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBMEZBLElBakZBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksa0JBQ04sQ0FFREgsa0JBQ0VELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsT0FDdEIsQ0FFREosZ0JBQ0VGLEtBQUtPLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENULEtBQUtVLFNBQVdWLEtBQUtPLFFBQVFJLGFBQWEsZ0JBQzNDLENBRURSLGNBQ0VILEtBQUtZLE1BQVEsQ0FDWEMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWnBCLEtBQUtxQixLQUFPckIsS0FBS1ksTUFBTVosS0FBS1UsVUFFNUJWLEtBQUtxQixLQUFLQyxTQUNWdEIsS0FBS3FCLEtBQUtFLE1BRVgsQ0FFYSxlQUFDQyxTQUNQeEIsS0FBS3FCLEtBQUtJLE9BRWhCLE1BQU1DLFFBQWdCQyxPQUFPQyxNQUFNSixHQUVuQyxHQUF1QixNQUFuQkUsRUFBUUcsT0FBZ0IsQ0FDMUIsTUFBTUMsUUFBYUosRUFBUUssT0FFckJDLFFBQWFDLEVBQUFBLEVBQUFBLE1BQUtQLEdBQ3hCUSxFQUFRQyxJQUFJSCxHQUVaLE1BQU1JLEVBQU01QixTQUFTNkIsY0FBYyxPQUVuQ0QsRUFBSUUsVUFBWVIsRUFFaEIsTUFBTVMsRUFBYUgsRUFBSTNCLGNBQWMsWUFFckNULEtBQUtVLFNBQVc2QixFQUFXNUIsYUFBYSxpQkFFeENYLEtBQUtPLFFBQVFpQyxhQUFhLGdCQUFpQnhDLEtBQUtVLFVBQ2hEVixLQUFLTyxRQUFRK0IsVUFBWUMsRUFBV0QsVUFFcEN0QyxLQUFLcUIsS0FBT3JCLEtBQUtZLE1BQU1aLEtBQUtVLFVBQzVCVixLQUFLcUIsS0FBS0MsU0FDVnRCLEtBQUtxQixLQUFLRSxPQUVWdkIsS0FBS0ksa0JBQ04sTUFDQzhCLEVBQVFDLElBQUksUUFBU00sTUFFeEIsQ0FFRHJDLG1CQUNFLE1BQU1zQyxFQUFRbEMsU0FBU21DLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZCxNQUFNLEtBQUVDLEdBQVNILEVBRWpCRSxFQUFNRSxpQkFFTmpELEtBQUtrRCxTQUFTRixFQUFkLENBTEYsR0FRSCxrQkN2RkhHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcblxuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuICAgIC8vIHRoaXMucGFnZS5oaWRlKCk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpIHtcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcblxuICAgICAgY29uc3QgdGVzdCA9IGF3YWl0IGpzb24ocmVxdWVzdCk7XG4gICAgICBjb25zb2xlLmxvZyh0ZXN0KTtcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTDtcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbm5ldyBBcHAoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJjYWEyZjljM2ZlYjM5NDhhMWEyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsInRlc3QiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiZXJyb3IiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9