/*! For license information please see main.25aa7014902c25c2dcf5.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Detection.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var i=t("./node_modules/console-browserify/index.js");const c=new class{isPhone(){this.isPhoneChecked||(this.isPhoneChecked=!0,this.isPhoneChecked=document.documentElement.classList.contains("phone"),i.log(this.isPhoneChecked))}isTabet(){this.isTabletChecked||(this.isTabletChecked=!0,this.isTabletChecked=document.documentElement.classList.contains("tablet"))}isDesktop(){this.isDesktopChecked||(this.isDesktopChecked=!0,this.isDesktopChecked=document.documentElement.classList.contains("desktop"))}}}},(function(e){e.h=()=>"b0afd5c5467fa9a6e45d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yNWFhNzAxNDkwMmMyNWMyZGNmNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NEtBMkJBLE1BRUEsRUFGeUIsSUEzQnpCLE1BQ0NBLFVBQ01DLEtBQUtDLGlCQUNURCxLQUFLQyxnQkFBaUIsRUFFdEJELEtBQUtDLGVBQWlCQyxTQUFTQyxnQkFBZ0JDLFVBQVVDLFNBQVMsU0FDbEVDLEVBQVFDLElBQUlQLEtBQUtDLGdCQUVsQixDQUVETyxVQUNNUixLQUFLUyxrQkFDVFQsS0FBS1MsaUJBQWtCLEVBRXZCVCxLQUFLUyxnQkFBa0JQLFNBQVNDLGdCQUFnQkMsVUFBVUMsU0FBUyxVQUVwRSxDQUVESyxZQUNNVixLQUFLVyxtQkFDVFgsS0FBS1csa0JBQW1CLEVBRXhCWCxLQUFLVyxpQkFBbUJULFNBQVNDLGdCQUFnQkMsVUFBVUMsU0FBUyxXQUVyRSxrQkN4QkZPLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9EZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBEZXRlY3Rpb24ge1xuXHRpc1Bob25lKCkge1xuXHRcdGlmICghdGhpcy5pc1Bob25lQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5pc1Bob25lQ2hlY2tlZCA9IHRydWVcblxuXHRcdFx0dGhpcy5pc1Bob25lQ2hlY2tlZCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Bob25lJylcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuaXNQaG9uZUNoZWNrZWQpXG5cdFx0fVxuXHR9XG5cblx0aXNUYWJldCgpIHtcblx0XHRpZiAoIXRoaXMuaXNUYWJsZXRDaGVja2VkKSB7XG5cdFx0XHR0aGlzLmlzVGFibGV0Q2hlY2tlZCA9IHRydWVcblxuXHRcdFx0dGhpcy5pc1RhYmxldENoZWNrZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZXQnKVxuXHRcdH1cblx0fVxuXG5cdGlzRGVza3RvcCgpIHtcblx0XHRpZiAoIXRoaXMuaXNEZXNrdG9wQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5pc0Rlc2t0b3BDaGVja2VkID0gdHJ1ZVxuXG5cdFx0XHR0aGlzLmlzRGVza3RvcENoZWNrZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNrdG9wJylcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgRGV0ZWN0aW9uTWFuYWdlciA9IG5ldyBEZXRlY3Rpb24oKVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3Rpb25NYW5hZ2VyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMGFmZDVjNTQ2N2ZhOWE2ZTQ1ZFwiKSJdLCJuYW1lcyI6WyJpc1Bob25lIiwidGhpcyIsImlzUGhvbmVDaGVja2VkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNvbnNvbGUiLCJsb2ciLCJpc1RhYmV0IiwiaXNUYWJsZXRDaGVja2VkIiwiaXNEZXNrdG9wIiwiaXNEZXNrdG9wQ2hlY2tlZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==