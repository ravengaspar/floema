/*! For license information please see main.7bcbfc1ff60937dca727.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./app/pages/About/index.js"),n=a("./app/pages/Collections/index.js"),i=a("./app/pages/Detail/index.js"),o=a("./app/pages/Home/index.js"),r=a("./node_modules/lodash/each.js"),d=(a("./node_modules/body-parser/index.js"),a("./app/components/Preloader.js")),c=a("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addLinkListeners()}createPreloader(){this.preloader=new d.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new s.default,collections:new n.default,detail:new i.default,home:new o.default},this.page=this.pages[this.template],this.page.create(),this.page.show()}onPreloaded(){this.preloader.destroy()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),a=document.createElement("div");a.innerHTML=e;const s=a.querySelector(".content");this.template=s.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=s.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.show(),this.addLinkListeners()}else c.log("Error",error)}addLinkListeners(){const e=document.querySelectorAll("a");r(e,(e=>{e.onclick=t=>{const{href:a}=e;t.preventDefault(),this.onChange(a)}}))}}}},(function(e){e.h=()=>"1a39cb5bbd7f5a79b272"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YmNiZmMxZmY2MDkzN2RjYTcyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBNkZBLElBcEZBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksa0JBQ04sQ0FFREgsa0JBQ0VELEtBQUtLLFVBQVksSUFBSUMsRUFBQUEsUUFFckJOLEtBQUtLLFVBQVVFLEtBQUssWUFBYVAsS0FBS1EsWUFBWUMsS0FBS1QsTUFDeEQsQ0FFREUsZ0JBQ0VGLEtBQUtVLFFBQVVDLFNBQVNDLGNBQWMsWUFDdENaLEtBQUthLFNBQVdiLEtBQUtVLFFBQVFJLGFBQWEsZ0JBQzNDLENBRURYLGNBQ0VILEtBQUtlLE1BQVEsQ0FDWEMsTUFBTyxJQUFJQyxFQUFBQSxRQUNYQyxZQUFhLElBQUlDLEVBQUFBLFFBQ2pCQyxPQUFRLElBQUlDLEVBQUFBLFFBQ1pDLEtBQU0sSUFBSUMsRUFBQUEsU0FHWnZCLEtBQUt3QixLQUFPeEIsS0FBS2UsTUFBTWYsS0FBS2EsVUFFNUJiLEtBQUt3QixLQUFLQyxTQUNWekIsS0FBS3dCLEtBQUtFLE1BRVgsQ0FFRGxCLGNBQ0VSLEtBQUtLLFVBQVVzQixTQUNoQixDQUVhLGVBQUNDLFNBQ1A1QixLQUFLd0IsS0FBS0ssT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ1osS0FBS2EsU0FBVzBCLEVBQVd6QixhQUFhLGlCQUV4Q2QsS0FBS1UsUUFBUThCLGFBQWEsZ0JBQWlCeEMsS0FBS2EsVUFDaERiLEtBQUtVLFFBQVE0QixVQUFZQyxFQUFXRCxVQUVwQ3RDLEtBQUt3QixLQUFPeEIsS0FBS2UsTUFBTWYsS0FBS2EsVUFDNUJiLEtBQUt3QixLQUFLQyxTQUNWekIsS0FBS3dCLEtBQUtFLE9BRVYxQixLQUFLSSxrQkFDTixNQUNDcUMsRUFBUUMsSUFBSSxRQUFTQyxNQUV4QixDQUVEdkMsbUJBQ0UsTUFBTXdDLEVBQVFqQyxTQUFTa0MsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkLE1BQU0sS0FBRUMsR0FBU0gsRUFFakJFLEVBQU1FLGlCQUVObkQsS0FBS29ELFNBQVNGLEVBQWQsQ0FMRixHQVFILGtCQzFGSEcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xuXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZShcImNvbXBsZXRlZFwiLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcblxuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuICAgIC8vIHRoaXMucGFnZS5oaWRlKCk7XG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KCk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpIHtcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTDtcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XG5cbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xuICAgICAgbGluay5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaHJlZiB9ID0gbGluaztcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG5cbm5ldyBBcHAoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFhMzljYjViYmQ3ZjVhNzliMjcyXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZExpbmtMaXN0ZW5lcnMiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJkZXN0cm95IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsImhyZWYiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9