/*! For license information please see main.146d7b9ae74add0543f1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/classes/Page.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var l=t("./node_modules/lodash/each.js");class o{constructor({element:e,elements:s,id:t}){this.selector=e,this.selectorChildren={...s},this.id=t}create(){this.element=document.querySelector(this.selector),this.elements={},l(this.selectorChildren,((e,s)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[s]=e:(this.elements[s]=document.querySelectorAll(e),console.log(this.elements[s])),console.log(e)})),console.log(this.elements),console.log("Create",this.id,this.element)}}}},(function(e){e.h=()=>"756526482c276f421163"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xNDZkN2I5YWU3NGFkZDA1NDNmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7cUtBRWUsTUFBTUEsRUFDbkJDLGFBQVksUUFBRUMsRUFBRixTQUFXQyxFQUFYLEdBQXFCQyxJQUMvQkMsS0FBS0MsU0FBV0osRUFDaEJHLEtBQUtFLGlCQUFtQixJQUFLSixHQUM3QkUsS0FBS0QsR0FBS0EsQ0FDWCxDQUVESSxTQUNFSCxLQUFLSCxRQUFVTyxTQUFTQyxjQUFjTCxLQUFLQyxVQUMzQ0QsS0FBS0YsU0FBVyxDQUFDLEVBRWpCUSxFQUFLTixLQUFLRSxrQkFBa0IsQ0FBQ0ssRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkUCxLQUFLRixTQUFTVSxHQUFPRCxHQUVyQlAsS0FBS0YsU0FBU1UsR0FBT0osU0FBU1UsaUJBQWlCUCxHQUUvQ1EsUUFBUUMsSUFBSWhCLEtBQUtGLFNBQVNVLEtBRzVCTyxRQUFRQyxJQUFJVCxFQUFaLElBR0ZRLFFBQVFDLElBQUloQixLQUFLRixVQUNqQmlCLFFBQVFDLElBQUksU0FBVWhCLEtBQUtELEdBQUlDLEtBQUtILFFBQ3JDLGtCQy9CSG9CLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jbGFzc2VzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHsgLi4uZWxlbWVudHMgfTtcbiAgICB0aGlzLmlkID0gaWQ7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XG5cbiAgICBlYWNoKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTEVsZW1lbnQgfHxcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHNba2V5XSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuZWxlbWVudHMpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlXCIsIHRoaXMuaWQsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc1NjUyNjQ4MmMyNzZmNDIxMTYzXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29uc29sZSIsImxvZyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==