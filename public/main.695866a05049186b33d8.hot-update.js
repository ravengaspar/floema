/*! For license information please see main.695866a05049186b33d8.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/classes/Detection.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>o});var i=t("./node_modules/console-browserify/index.js");const o=new class{isPhone(){this.isPhoneChecked||(this.isPhoneChecked=!0,i.log("this is phone"),this.isPhoneChecked=document.documentElement.classList.contains("phone"))}isTabet(){this.isTabletChecked||(this.isTabletChecked=!0,this.isTabletChecked=document.documentElement.classList.contains("tablet"))}isDesktop(){this.isDesktopChecked||(this.isDesktopChecked=!0,this.isDesktopChecked=document.documentElement.classList.contains("desktop"))}}}},(function(e){e.h=()=>"651a6a7b9a9d499ff870"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42OTU4NjZhMDUwNDkxODZiMzNkOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NEtBMkJBLE1BRUEsRUFGeUIsSUEzQnpCLE1BQ0NBLFVBQ01DLEtBQUtDLGlCQUNURCxLQUFLQyxnQkFBaUIsRUFFdEJDLEVBQVFDLElBQUksaUJBQ1pILEtBQUtDLGVBQWlCRyxTQUFTQyxnQkFBZ0JDLFVBQVVDLFNBQVMsU0FFbkUsQ0FFREMsVUFDTVIsS0FBS1Msa0JBQ1RULEtBQUtTLGlCQUFrQixFQUV2QlQsS0FBS1MsZ0JBQWtCTCxTQUFTQyxnQkFBZ0JDLFVBQVVDLFNBQVMsVUFFcEUsQ0FFREcsWUFDTVYsS0FBS1csbUJBQ1RYLEtBQUtXLGtCQUFtQixFQUV4QlgsS0FBS1csaUJBQW1CUCxTQUFTQyxnQkFBZ0JDLFVBQVVDLFNBQVMsV0FFckUsa0JDeEJGSyxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvRGV0ZWN0aW9uLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGV0ZWN0aW9uIHtcblx0aXNQaG9uZSgpIHtcblx0XHRpZiAoIXRoaXMuaXNQaG9uZUNoZWNrZWQpIHtcblx0XHRcdHRoaXMuaXNQaG9uZUNoZWNrZWQgPSB0cnVlXG5cblx0XHRcdGNvbnNvbGUubG9nKCd0aGlzIGlzIHBob25lJylcblx0XHRcdHRoaXMuaXNQaG9uZUNoZWNrZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaG9uZScpXG5cdFx0fVxuXHR9XG5cblx0aXNUYWJldCgpIHtcblx0XHRpZiAoIXRoaXMuaXNUYWJsZXRDaGVja2VkKSB7XG5cdFx0XHR0aGlzLmlzVGFibGV0Q2hlY2tlZCA9IHRydWVcblxuXHRcdFx0dGhpcy5pc1RhYmxldENoZWNrZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZXQnKVxuXHRcdH1cblx0fVxuXG5cdGlzRGVza3RvcCgpIHtcblx0XHRpZiAoIXRoaXMuaXNEZXNrdG9wQ2hlY2tlZCkge1xuXHRcdFx0dGhpcy5pc0Rlc2t0b3BDaGVja2VkID0gdHJ1ZVxuXG5cdFx0XHR0aGlzLmlzRGVza3RvcENoZWNrZWQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNrdG9wJylcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgRGV0ZWN0aW9uTWFuYWdlciA9IG5ldyBEZXRlY3Rpb24oKVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3Rpb25NYW5hZ2VyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2NTFhNmE3YjlhOWQ0OTlmZjg3MFwiKSJdLCJuYW1lcyI6WyJpc1Bob25lIiwidGhpcyIsImlzUGhvbmVDaGVja2VkIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJpc1RhYmV0IiwiaXNUYWJsZXRDaGVja2VkIiwiaXNEZXNrdG9wIiwiaXNEZXNrdG9wQ2hlY2tlZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==