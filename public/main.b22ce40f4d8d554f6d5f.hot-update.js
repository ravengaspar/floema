/*! For license information please see main.b22ce40f4d8d554f6d5f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/index.js":(e,t,s)=>{s.r(t);var a=s("./app/pages/About/index.js"),i=s("./app/pages/Collections/index.js"),n=s("./app/pages/Detail/index.js"),o=s("./app/pages/Home/index.js"),d=s("./node_modules/lodash/each.js"),r=(s("./node_modules/body-parser/index.js"),s("./app/components/Preloader.js")),p=(s("./node_modules/clean-webpack-plugin/dist/clean-webpack-plugin.js"),s("./node_modules/console-browserify/index.js"));new class{constructor(){this.createPreloader(),this.createContent(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createPreloader(){this.preloader=new r.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new a.default,collections:new i.default,detail:new n.default,home:new o.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}async onChange(e){await this.page.hide();const t=await window.fetch(e);if(200===t.status){const e=await t.text(),s=document.createElement("div");s.innerHTML=e;const a=s.querySelector(".content");this.template=a.getAttribute("data-template"),this.content.setAttribute("data-template",this.template),this.content.innerHTML=a.innerHTML,this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else p.log("Error",error)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");d(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:s}=e;this.onChange(s)}}))}addEventListeners(){window.addEventListener("mousewheel",this.onResize.bind(this))}}}},(function(e){e.h=()=>"d158a51adc3e778661cc"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iMjJjZTQwZjRkOGQ1NTRmNmQ1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7K2RBb0hBLElBMUdBLE1BQ0VBLGNBQ0VDLEtBQUtDLGtCQUVMRCxLQUFLRSxnQkFDTEYsS0FBS0csY0FFTEgsS0FBS0ksb0JBQ0xKLEtBQUtLLG1CQUVMTCxLQUFLTSxRQUNOLENBRURMLGtCQUNFRCxLQUFLTyxVQUFZLElBQUlDLEVBQUFBLFFBQ3JCUixLQUFLTyxVQUFVRSxLQUFLLFlBQWFULEtBQUtVLFlBQVlDLEtBQUtYLE1BQ3hELENBRURFLGdCQUNFRixLQUFLWSxRQUFVQyxTQUFTQyxjQUFjLFlBQ3RDZCxLQUFLZSxTQUFXZixLQUFLWSxRQUFRSSxhQUFhLGdCQUMzQyxDQUVEYixjQUNFSCxLQUFLaUIsTUFBUSxDQUNYQyxNQUFPLElBQUlDLEVBQUFBLFFBQ1hDLFlBQWEsSUFBSUMsRUFBQUEsUUFDakJDLE9BQVEsSUFBSUMsRUFBQUEsUUFDWkMsS0FBTSxJQUFJQyxFQUFBQSxTQUdaekIsS0FBSzBCLEtBQU8xQixLQUFLaUIsTUFBTWpCLEtBQUtlLFVBQzVCZixLQUFLMEIsS0FBS0MsUUFDWCxDQUVEakIsY0FDRVYsS0FBS08sVUFBVXFCLFVBQ2Y1QixLQUFLNkIsV0FDTDdCLEtBQUswQixLQUFLSSxNQUNYLENBRWEsZUFBQ0MsU0FDUC9CLEtBQUswQixLQUFLTSxPQUVoQixNQUFNQyxRQUFnQkMsT0FBT0MsTUFBTUosR0FFbkMsR0FBdUIsTUFBbkJFLEVBQVFHLE9BQWdCLENBQzFCLE1BQU1DLFFBQWFKLEVBQVFLLE9BRXJCQyxFQUFNMUIsU0FBUzJCLGNBQWMsT0FFbkNELEVBQUlFLFVBQVlKLEVBRWhCLE1BQU1LLEVBQWFILEVBQUl6QixjQUFjLFlBRXJDZCxLQUFLZSxTQUFXMkIsRUFBVzFCLGFBQWEsaUJBRXhDaEIsS0FBS1ksUUFBUStCLGFBQWEsZ0JBQWlCM0MsS0FBS2UsVUFDaERmLEtBQUtZLFFBQVE2QixVQUFZQyxFQUFXRCxVQUVwQ3pDLEtBQUswQixLQUFPMUIsS0FBS2lCLE1BQU1qQixLQUFLZSxVQUU1QmYsS0FBSzBCLEtBQUtDLFNBQ1YzQixLQUFLNkIsV0FFTDdCLEtBQUswQixLQUFLSSxPQUVWOUIsS0FBS0ssa0JBQ04sTUFDQ3VDLEVBQVFDLElBQUksUUFBU0MsTUFFeEIsQ0FFRGpCLFdBQ003QixLQUFLMEIsTUFBUTFCLEtBQUswQixLQUFLRyxVQUN6QjdCLEtBQUswQixLQUFLRyxVQUViLENBR0R2QixTQUNNTixLQUFLMEIsTUFBUTFCLEtBQUswQixLQUFLcEIsUUFDekJOLEtBQUswQixLQUFLcEIsU0FHWk4sS0FBSytDLE1BQVFiLE9BQU9jLHNCQUFzQmhELEtBQUtNLE9BQU9LLEtBQUtYLE1BQzVELENBR0RLLG1CQUNFLE1BQU00QyxFQUFRcEMsU0FBU3FDLGlCQUFpQixLQUV4Q0MsRUFBS0YsR0FBUUcsSUFDWEEsRUFBS0MsUUFBV0MsSUFDZEEsRUFBTUMsaUJBQ04sTUFBTSxLQUFFQyxHQUFTSixFQUNqQnBELEtBQUt5RCxTQUFTRCxFQUFkLENBSEYsR0FNSCxDQUVEcEQsb0JBQ0U4QixPQUFPd0IsaUJBQWlCLGFBQWMxRCxLQUFLNkIsU0FBU2xCLEtBQUtYLE1BQzFELGtCQ2pISDJELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dC9pbmRleC5qc1wiO1xuaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gXCJwYWdlcy9Db2xsZWN0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IERldGFpbCBmcm9tIFwicGFnZXMvRGV0YWlsL2luZGV4LmpzXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZS9pbmRleC5qc1wiO1xuXG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcbmltcG9ydCB7IGpzb24gfSBmcm9tIFwiYm9keS1wYXJzZXJcIjtcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSBcImNvbXBvbmVudHMvUHJlbG9hZGVyXCI7XG5pbXBvcnQgeyBDbGVhbldlYnBhY2tQbHVnaW4gfSBmcm9tIFwiY2xlYW4td2VicGFjay1wbHVnaW5cIjtcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKTtcblxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKCk7XG4gICAgdGhpcy5wcmVsb2FkZXIub25jZShcImNvbXBsZXRlZFwiLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuY29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuICB9XG5cbiAgY3JlYXRlUGFnZXMoKSB7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKSxcbiAgICAgIGNvbGxlY3Rpb25zOiBuZXcgQ29sbGVjdGlvbnMoKSxcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxuICAgICAgaG9tZTogbmV3IEhvbWUoKSxcbiAgICB9O1xuXG4gICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcbiAgICB0aGlzLnBhZ2UuY3JlYXRlKCk7XG4gIH1cblxuICBvblByZWxvYWRlZCgpIHtcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KCk7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIHRoaXMucGFnZS5zaG93KCk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh1cmwpIHtcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xuXG4gICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xuXG4gICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXF1ZXN0LnRleHQoKTtcblxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgICB0aGlzLnRlbXBsYXRlID0gZGl2Q29udGVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRlbXBsYXRlXCIpO1xuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTDtcblxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlc1t0aGlzLnRlbXBsYXRlXTtcblxuICAgICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpO1xuXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvclwiLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgaWYgKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25SZXNpemUpIHtcbiAgICAgIHRoaXMucGFnZS5vblJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qIExvb3AgKi9cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLnVwZGF0ZSkge1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyogTGlzdGVuZXJzICovXG4gIGFkZExpbmtMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcblxuICAgIGVhY2gobGlua3MsIChsaW5rKSA9PiB7XG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBocmVmIH0gPSBsaW5rO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKGhyZWYpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpO1xuICB9XG59XG5cbm5ldyBBcHAoKTtcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxNThhNTFhZGMzZTc3ODY2MWNjXCIpIl0sIm5hbWVzIjpbImNvbnN0cnVjdG9yIiwidGhpcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiYWRkTGlua0xpc3RlbmVycyIsInVwZGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJwYWdlcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwiZGV0YWlsIiwiRGV0YWlsIiwiaG9tZSIsIkhvbWUiLCJwYWdlIiwiY3JlYXRlIiwiZGVzdHJveSIsIm9uUmVzaXplIiwic2hvdyIsInVybCIsImhpZGUiLCJyZXF1ZXN0Iiwid2luZG93IiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJsaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlYWNoIiwibGluayIsIm9uY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaHJlZiIsIm9uQ2hhbmdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==