/*! For license information please see main.559986132940792c769a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),h=(s("./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js"),s("./node_modules/console-browserify/index.js"));new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else h.log("Error",error)}onResize(){window.addEventListener("resize",this.onResize.bind(this))}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("mousewheel",this.onResize.bind(this))}}}},(function(e){e.h=()=>"d68203809a5704a394bc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41NTk5ODYxMzI5NDA3OTJjNzY5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2RBa0hBLElBeEdBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLNkIsV0FDTDdCLEtBQUswQixLQUFLSSxNQUNYLENBRWEsZUFBQ0MsU0FDUC9CLEtBQUswQixLQUFLTSxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFHLE9BQWdCLENBQzFCLE1BQU1DLFFBQWFKLEVBQVFLLE9BRXJCQyxFQUFNMUIsU0FBUzJCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUl6QixjQUFjLFlBRXJDZCxLQUFLZSxTQUFXMkIsRUFBVzFCLGFBQWEsaUJBRXhDaEIsS0FBS1ksUUFBUStCLGFBQWEsZ0JBQWlCM0MsS0FBS2UsVUFDaERmLEtBQUtZLFFBQVE2QixVQUFZQyxFQUFXRCxVQUVwQ3pDLEtBQUswQixLQUFPMUIsS0FBS2lCLE1BQU1qQixLQUFLZSxVQUU1QmYsS0FBSzBCLEtBQUtDLFNBQ1YzQixLQUFLNkIsV0FFTDdCLEtBQUswQixLQUFLSSxPQUVWOUIsS0FBS0ssa0JBQ04sTUFDQ3VDLEVBQVFDLElBQUksUUFBU0MsTUFFeEIsQ0FFRGpCLFdBQ0VLLE9BQU9hLGlCQUFpQixTQUFVL0MsS0FBSzZCLFNBQVNsQixLQUFLWCxNQUN0RCxDQUdETSxTQUNNTixLQUFLMEIsTUFBUTFCLEtBQUswQixLQUFLcEIsUUFDekJOLEtBQUswQixLQUFLcEIsU0FHWk4sS0FBS2dELE1BQVFkLE9BQU9lLHNCQUFzQmpELEtBQUtNLE9BQU9LLEtBQUtYLE1BQzVELENBR0RLLG1CQUNFLE1BQU02QyxFQUFRckMsU0FBU3NDLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZEEsRUFBTUMsaUJBQ04sTUFBTSxLQUFFQyxHQUFTSixFQUNqQnJELEtBQUswRCxTQUFTRCxFQUFkLENBSEYsR0FNSCxDQUVEckQsb0JBQ0U4QixPQUFPYSxpQkFBaUIsYUFBYy9DLEtBQUs2QixTQUFTbEIsS0FBS1gsTUFDMUQsa0JDL0dIMkQsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IENsZWFuV2VicGFja1BsdWdpbiB9IGZyb20gXCJjbGVhbi13ZWJwYWNrLXBsdWdpblwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKTtcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKFwiY29tcGxldGVkXCIsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgdGhpcy5wYWdlLnNob3coKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG5cbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyogTG9vcCAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKiBMaXN0ZW5lcnMgKi9cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XG4gIH1cbn1cblxubmV3IEFwcCgpO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZDY4MjAzODA5YTU3MDRhMzk0YmNcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwicHJlbG9hZGVyIiwiUHJlbG9hZGVyIiwib25jZSIsIm9uUHJlbG9hZGVkIiwiYmluZCIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsInBhZ2VzIiwiYWJvdXQiLCJBYm91dCIsImNvbGxlY3Rpb25zIiwiQ29sbGVjdGlvbnMiLCJkZXRhaWwiLCJEZXRhaWwiLCJob21lIiwiSG9tZSIsInBhZ2UiLCJjcmVhdGUiLCJkZXN0cm95Iiwib25SZXNpemUiLCJzaG93IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsIm9uQ2hhbmdlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9