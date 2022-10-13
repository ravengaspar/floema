/*! For license information please see main.7befe82ac7b7f8843f8f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),p=(s("./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js"),s("./node_modules/console-browserify/index.js"));new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else p.log("Error",error)}onResize(){this.page&&this.page.onResize&&(this.page.onResize(),p.log("App resize"))}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("resize",this.onResize),p.log("resize")}}}},(function(e){e.h=()=>"8c8e1c0e2e6f666ca5ea"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43YmVmZTgyYWM3YjdmODg0M2Y4Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2RBdUhBLElBN0dBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLNkIsV0FDTDdCLEtBQUswQixLQUFLSSxNQUNYLENBRWEsZUFBQ0MsU0FDUC9CLEtBQUswQixLQUFLTSxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFHLE9BQWdCLENBQzFCLE1BQU1DLFFBQWFKLEVBQVFLLE9BRXJCQyxFQUFNMUIsU0FBUzJCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUl6QixjQUFjLFlBRXJDZCxLQUFLZSxTQUFXMkIsRUFBVzFCLGFBQWEsaUJBRXhDaEIsS0FBS1ksUUFBUStCLGFBQWEsZ0JBQWlCM0MsS0FBS2UsVUFDaERmLEtBQUtZLFFBQVE2QixVQUFZQyxFQUFXRCxVQUVwQ3pDLEtBQUswQixLQUFPMUIsS0FBS2lCLE1BQU1qQixLQUFLZSxVQUU1QmYsS0FBSzBCLEtBQUtDLFNBQ1YzQixLQUFLNkIsV0FFTDdCLEtBQUswQixLQUFLSSxPQUVWOUIsS0FBS0ssa0JBQ04sTUFDQ3VDLEVBQVFDLElBQUksUUFBU0MsTUFFeEIsQ0FFRGpCLFdBQ003QixLQUFLMEIsTUFBUTFCLEtBQUswQixLQUFLRyxXQUN6QjdCLEtBQUswQixLQUFLRyxXQUNWZSxFQUFRQyxJQUFJLGNBRWYsQ0FHRHZDLFNBQ01OLEtBQUswQixNQUFRMUIsS0FBSzBCLEtBQUtwQixRQUN6Qk4sS0FBSzBCLEtBQUtwQixTQUdaTixLQUFLK0MsTUFBUWIsT0FBT2Msc0JBQXNCaEQsS0FBS00sT0FBT0ssS0FBS1gsTUFDNUQsQ0FHREssbUJBQ0UsTUFBTTRDLEVBQVFwQyxTQUFTcUMsaUJBQWlCLEtBRXhDQyxFQUFLRixHQUFRRyxJQUNYQSxFQUFLQyxRQUFXQyxJQUNkQSxFQUFNQyxpQkFDTixNQUFNLEtBQUVDLEdBQVNKLEVBQ2pCcEQsS0FBS3lELFNBQVNELEVBQWQsQ0FIRixHQU1ILENBRURwRCxvQkFDRThCLE9BQU93QixpQkFBaUIsU0FBVTFELEtBQUs2QixVQUV2Q2UsRUFBUUMsSUFBSSxTQUNiLGtCQ3BISGMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2luZGV4LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJvdXQgZnJvbSBcInBhZ2VzL0Fib3V0L2luZGV4LmpzXCI7XG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgRGV0YWlsIGZyb20gXCJwYWdlcy9EZXRhaWwvaW5kZXguanNcIjtcbmltcG9ydCBIb21lIGZyb20gXCJwYWdlcy9Ib21lL2luZGV4LmpzXCI7XG5cbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuaW1wb3J0IHsganNvbiB9IGZyb20gXCJib2R5LXBhcnNlclwiO1xuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiY29tcG9uZW50cy9QcmVsb2FkZXJcIjtcbmltcG9ydCB7IENsZWFuV2VicGFja1BsdWdpbiB9IGZyb20gXCJjbGVhbi13ZWJwYWNrLXBsdWdpblwiO1xuXG5jbGFzcyBBcHAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNyZWF0ZVByZWxvYWRlcigpO1xuXG4gICAgdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gICAgdGhpcy5jcmVhdGVQYWdlcygpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoKTtcbiAgICB0aGlzLnByZWxvYWRlci5vbmNlKFwiY29tcGxldGVkXCIsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSk7XG4gIH1cblxuICBjcmVhdGVDb250ZW50KCkge1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG4gIH1cblxuICBjcmVhdGVQYWdlcygpIHtcbiAgICB0aGlzLnBhZ2VzID0ge1xuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxuICAgICAgY29sbGVjdGlvbnM6IG5ldyBDb2xsZWN0aW9ucygpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgIH07XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCkge1xuICAgIHRoaXMucHJlbG9hZGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgdGhpcy5wYWdlLnNob3coKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG5cbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkFwcCByZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgLyogTG9vcCAqL1xuICB1cGRhdGUoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKSB7XG4gICAgICB0aGlzLnBhZ2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKiBMaXN0ZW5lcnMgKi9cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcInJlc2l6ZVwiKTtcbiAgfVxufVxuXG5uZXcgQXBwKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4YzhlMWMwZTJlNmY2NjZjYTVlYVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJ1cmwiLCJoaWRlIiwicmVxdWVzdCIsIndpbmRvdyIsImZldGNoIiwic3RhdHVzIiwiaHRtbCIsInRleHQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJvbkNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=