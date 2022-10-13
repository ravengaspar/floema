/*! For license information please see main.488596c62ad585ec2541.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Navigation.js":(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var s=a("./node_modules/gsap/index.js"),n=a("./app/classes/Component.js"),i=a("./app/utils/colors.js");class o extends n.default{constructor({template:e}){super({element:".navigation",elements:{items:".navigation__list__item",links:".navigation__list__link"}}),this.onChange(e)}onChange(e){s.default.to(this.element,{color:"about"===e?i.COLOR_BRIGHT_GRAY:i.COLOR_QUARTER_SPANISH_WHITE,duration:1.5}),"about"===e&&(s.default.to(this.elements.items[0],{autoAlpha:1}),s.default.to(this.elements.items[1],{autoAlpha:0}))}}}},(function(e){e.h=()=>"aa944e6493a26a4d8937"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ODg1OTZjNjJhZDU4NWVjMjU0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NE9BSWUsTUFBTUEsVUFBbUJDLEVBQUFBLFFBQ3ZDQyxhQUFZLFNBQUVDLElBQ2JDLE1BQU0sQ0FDTEMsUUFBUyxjQUNUQyxTQUFVLENBQ1RDLE1BQU8sMEJBQ1BDLE1BQU8sNkJBSVRDLEtBQUtDLFNBQVNQLEVBQ2QsQ0FFRE8sU0FBU1AsR0FDUlEsRUFBQUEsUUFBQUEsR0FBUUYsS0FBS0osUUFBUyxDQUNyQk8sTUFBb0IsVUFBYlQsRUFBdUJVLEVBQUFBLGtCQUFvQkMsRUFBQUEsNEJBQ2xEQyxTQUFVLE1BSU8sVUFBYlosSUFDRFEsRUFBQUEsUUFBQUEsR0FBUUYsS0FBS0gsU0FBU0MsTUFBTSxHQUFJLENBQzlCUyxVQUFXLElBRWJMLEVBQUFBLFFBQUFBLEdBQVFGLEtBQUtILFNBQVNDLE1BQU0sR0FBSSxDQUM5QlMsVUFBVyxJQUlqQixrQkNqQ0ZDLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJ2NsYXNzZXMvQ29tcG9uZW50J1xuaW1wb3J0IHsgQ09MT1JfQlJJR0hUX0dSQVksIENPTE9SX1FVQVJURVJfU1BBTklTSF9XSElURSB9IGZyb20gJ3V0aWxzL2NvbG9ycydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuXHRcdHN1cGVyKHtcblx0XHRcdGVsZW1lbnQ6ICcubmF2aWdhdGlvbicsXG5cdFx0XHRlbGVtZW50czoge1xuXHRcdFx0XHRpdGVtczogJy5uYXZpZ2F0aW9uX19saXN0X19pdGVtJyxcblx0XHRcdFx0bGlua3M6ICcubmF2aWdhdGlvbl9fbGlzdF9fbGluaycsXG5cdFx0XHR9LFxuXHRcdH0pXG5cblx0XHR0aGlzLm9uQ2hhbmdlKHRlbXBsYXRlKVxuXHR9XG5cblx0b25DaGFuZ2UodGVtcGxhdGUpIHtcblx0XHRHU0FQLnRvKHRoaXMuZWxlbWVudCwge1xuXHRcdFx0Y29sb3I6IHRlbXBsYXRlID09PSAnYWJvdXQnID8gQ09MT1JfQlJJR0hUX0dSQVkgOiBDT0xPUl9RVUFSVEVSX1NQQU5JU0hfV0hJVEUsXG5cdFx0XHRkdXJhdGlvbjogMS41LFxuXHRcdH0pXG5cblxuICAgIGlmKHRlbXBsYXRlID09PSAnYWJvdXQnKSB7XG4gICAgICBHU0FQLnRvKHRoaXMuZWxlbWVudHMuaXRlbXNbMF0sIHtcbiAgICAgICAgYXV0b0FscGhhOiAxLFxuICAgICAgfSlcbiAgICAgIEdTQVAudG8odGhpcy5lbGVtZW50cy5pdGVtc1sxXSwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICB9KVxuICAgIH1cblxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhYTk0NGU2NDkzYTI2YTRkODkzN1wiKSJdLCJuYW1lcyI6WyJOYXZpZ2F0aW9uIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInN1cGVyIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaXRlbXMiLCJsaW5rcyIsInRoaXMiLCJvbkNoYW5nZSIsIkdTQVAiLCJjb2xvciIsIkNPTE9SX0JSSUdIVF9HUkFZIiwiQ09MT1JfUVVBUlRFUl9TUEFOSVNIX1dISVRFIiwiZHVyYXRpb24iLCJhdXRvQWxwaGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=