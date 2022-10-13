/*! For license information please see main.16ccf61669df6b3e56a2.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),h=s("./node_modules/console-browserify/index.js");new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.page.onResize(),this.page.show(),this.addLinkListeners()}else h.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.frame=window.requestAnimationFrame(this.update.bind(this)),this.page&&this.page.update&&this.page.update()}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"8dababa94ce545dec2bd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNmNjZjYxNjY5ZGY2YjNlNTZhMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7dVpBa0hBLElBekdBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBRXJCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLMEIsS0FBS0csTUFDWCxDQUVhLGVBQUNDLFNBQ1A5QixLQUFLMEIsS0FBS0ssT0FFaEIsTUFBTUMsUUFBZ0JDLE9BQU9DLE1BQU1KLEdBRW5DLEdBQXVCLE1BQW5CRSxFQUFRRyxPQUFnQixDQUMxQixNQUFNQyxRQUFhSixFQUFRSyxPQUVyQkMsRUFBTXpCLFNBQVMwQixjQUFjLE9BRW5DRCxFQUFJRSxVQUFZSixFQUVoQixNQUFNSyxFQUFhSCxFQUFJeEIsY0FBYyxZQUVyQ2QsS0FBS2UsU0FBVzBCLEVBQVd6QixhQUFhLGlCQUV4Q2hCLEtBQUtZLFFBQVE4QixhQUFhLGdCQUFpQjFDLEtBQUtlLFVBQ2hEZixLQUFLWSxRQUFRNEIsVUFBWUMsRUFBV0QsVUFFcEN4QyxLQUFLMEIsS0FBTzFCLEtBQUtpQixNQUFNakIsS0FBS2UsVUFFNUJmLEtBQUswQixLQUFLQyxTQUNWM0IsS0FBSzBCLEtBQUtpQixXQUNWM0MsS0FBSzBCLEtBQUtHLE9BRVY3QixLQUFLSyxrQkFDTixNQUNDdUMsRUFBUUMsSUFBSSxRQUFTQyxNQUV4QixDQUVESCxXQUNNM0MsS0FBSzBCLE1BQVExQixLQUFLMEIsS0FBS2lCLFVBQ3pCM0MsS0FBSzBCLEtBQUtpQixVQUViLENBR0RyQyxTQUNFTixLQUFLK0MsTUFBUWQsT0FBT2Usc0JBQXNCaEQsS0FBS00sT0FBT0ssS0FBS1gsT0FFdkRBLEtBQUswQixNQUFRMUIsS0FBSzBCLEtBQUtwQixRQUN6Qk4sS0FBSzBCLEtBQUtwQixRQUViLENBR0RELG1CQUNFLE1BQU00QyxFQUFRcEMsU0FBU3FDLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZEEsRUFBTUMsaUJBQ04sTUFBTSxLQUFFQyxHQUFTSixFQUNqQnBELEtBQUt5RCxTQUFTRCxFQUFkLENBSEYsR0FNSCxDQUVEcEQsb0JBQ0U2QixPQUFPeUIsaUJBQWlCLFNBQVUxRCxLQUFLMkMsU0FBU2hDLEtBQUtYLE1BQ3RELGtCQy9HSDJELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XG5cbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5hZGRMaW5rTGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCkge1xuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xuXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZShcImNvbXBsZXRlZFwiLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5wYWdlLnNob3coKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHVybCkge1xuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKCk7XG5cbiAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgd2luZG93LmZldGNoKHVybCk7XG5cbiAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgY29uc3QgaHRtbCA9IGF3YWl0IHJlcXVlc3QudGV4dCgpO1xuXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MO1xuXG4gICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xuXG4gICAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcbiAgICAgIHRoaXMucGFnZS5zaG93KCk7XG5cbiAgICAgIHRoaXMuYWRkTGlua0xpc3RlbmVycygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yXCIsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBvblJlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xuICAgICAgdGhpcy5wYWdlLm9uUmVzaXplKCk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9vcCAqL1xuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKiBMaXN0ZW5lcnMgKi9cbiAgYWRkTGlua0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpO1xuXG4gICAgZWFjaChsaW5rcywgKGxpbmspID0+IHtcbiAgICAgIGxpbmsub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XG4gICAgICAgIHRoaXMub25DaGFuZ2UoaHJlZik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuXG5uZXcgQXBwKCk7XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4ZGFiYWJhOTRjZTU0NWRlYzJiZFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVQcmVsb2FkZXIiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUGFnZXMiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZExpbmtMaXN0ZW5lcnMiLCJ1cGRhdGUiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwiY29udGVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRlbXBsYXRlIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImRldGFpbCIsIkRldGFpbCIsImhvbWUiLCJIb21lIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJzaG93IiwidXJsIiwiaGlkZSIsInJlcXVlc3QiLCJ3aW5kb3ciLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImRpdkNvbnRlbnQiLCJzZXRBdHRyaWJ1dGUiLCJvblJlc2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJvbkNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=