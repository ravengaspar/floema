/*! For license information please see main.846f2af6a8132099be8b.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,n,t)=>{var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),i=Object.create(null),o="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function a(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function l(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var i=function(e,n){var t;return e=r(e),n.some((function(r){e.indexOf(n)>-1&&(t=r)})),t}(n.href,e);u(i)&&!0!==n.visited&&i&&(a(n,i),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&a(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(o)return console.log("no window.document found, will not HMR CSS"),s;var t,c,a,u=function(e){var n=i[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),o=t[t.length-1];o&&(n=o.src)}i[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),i=t&&t[1];return i&&e?e.split(",").map((function(e){var t=new RegExp("".concat(i,"\\.js$"),"g");return r(n.replace(t,"".concat(e.replace(/{fileName}/g,i),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=u(n.filename),t=l(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,a=0,function(){var e=this,n=arguments,r=function(){return t.apply(e,n)};clearTimeout(a),a=setTimeout(r,c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),r=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+r+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},"./styles/index.scss":(e,n,t)=>{t.r(n);var r=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}},(function(e){e.h=()=>"901c90ba45ebf05512a6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osTUFFRixJQUFLLElBQ0gsTUFFRixRQUNFRixFQUFZRyxLQUFLRixHQUdyQixPQUFPRCxDQUNSLEdBRUQsSUFBSWhCLEtBQUssSUFxQlYsMENDMUNLLElBQUlvQixFQUFZLEVBQVEsMEVBQVIsQ0FBb0Y5QyxFQUFPK0MsR0FBSSxDQUFDLFdBQWEsR0FBRyxRQUFTLElBQ3pJL0MsRUFBT2dELElBQUlDLFFBQVFILEdBQ25COUMsRUFBT2dELElBQUlFLFlBQU9DLEVBQVdMLGtCQ05uQ00sRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL25vcm1hbGl6ZS11cmwuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qXG4gIGVzbGludC1kaXNhYmxlXG4gIG5vLWNvbnNvbGUsXG4gIGZ1bmMtbmFtZXNcbiovXG5cbi8qKiBAdHlwZWRlZiB7YW55fSBUT0RPICovXG52YXIgbm9ybWFsaXplVXJsID0gcmVxdWlyZShcIi4vbm9ybWFsaXplLXVybFwiKTtcblxudmFyIHNyY0J5TW9kdWxlSWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xudmFyIG5vRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCI7XG52YXIgZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuLyoqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVcbiAqIEByZXR1cm5zIHsoZnVuY3Rpb24oKTogdm9pZCl8Kn1cbiAqL1xuXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgdGltZSkge1xuICB2YXIgdGltZW91dCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHZhciBzZWxmID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZnVuY3Rpb25DYWxsID0gZnVuY3Rpb24gZnVuY3Rpb25DYWxsKCkge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7IC8vIEB0cy1pZ25vcmVcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uQ2FsbCwgdGltZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpIHtcbiAgdmFyIHNyYyA9IHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdO1xuXG4gIGlmICghc3JjKSB7XG4gICAgaWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcbiAgICAgIHNyYyA9XG4gICAgICAvKiogQHR5cGUge0hUTUxTY3JpcHRFbGVtZW50fSAqL1xuICAgICAgZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG4gICAgICB2YXIgbGFzdFNjcmlwdFRhZyA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RTY3JpcHRUYWcpIHtcbiAgICAgICAgc3JjID0gbGFzdFNjcmlwdFRhZy5zcmM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3JjQnlNb2R1bGVJZFttb2R1bGVJZF0gPSBzcmM7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTWFwXG4gICAqIEByZXR1cm5zIHtudWxsIHwgc3RyaW5nW119XG4gICAqL1xuXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmaWxlTWFwKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBzcGxpdFJlc3VsdCA9IHNyYy5zcGxpdCgvKFteXFxcXC9dKylcXC5qcyQvKTtcbiAgICB2YXIgZmlsZW5hbWUgPSBzcGxpdFJlc3VsdCAmJiBzcGxpdFJlc3VsdFsxXTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICBpZiAoIWZpbGVNYXApIHtcbiAgICAgIHJldHVybiBbc3JjLnJlcGxhY2UoXCIuanNcIiwgXCIuY3NzXCIpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsZU1hcC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChtYXBSdWxlKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIlwiLmNvbmNhdChmaWxlbmFtZSwgXCJcXFxcLmpzJFwiKSwgXCJnXCIpO1xuICAgICAgcmV0dXJuIG5vcm1hbGl6ZVVybChzcmMucmVwbGFjZShyZWcsIFwiXCIuY29uY2F0KG1hcFJ1bGUucmVwbGFjZSgve2ZpbGVOYW1lfS9nLCBmaWxlbmFtZSksIFwiLmNzc1wiKSkpO1xuICAgIH0pO1xuICB9O1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IGVsXG4gKiBAcGFyYW0ge3N0cmluZ30gW3VybF1cbiAqL1xuXG5cbmZ1bmN0aW9uIHVwZGF0ZUNzcyhlbCwgdXJsKSB7XG4gIGlmICghdXJsKSB7XG4gICAgaWYgKCFlbC5ocmVmKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblxuXG4gICAgdXJsID0gZWwuaHJlZi5zcGxpdChcIj9cIilbMF07XG4gIH1cblxuICBpZiAoIWlzVXJsUmVxdWVzdChcbiAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gIHVybCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZWwuaXNMb2FkZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gV2Ugc2VlbSB0byBiZSBhYm91dCB0byByZXBsYWNlIGEgY3NzIGxpbmsgdGhhdCBoYXNuJ3QgbG9hZGVkIHlldC5cbiAgICAvLyBXZSdyZSBwcm9iYWJseSBjaGFuZ2luZyB0aGUgc2FtZSBmaWxlIG1vcmUgdGhhbiBvbmNlLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghdXJsIHx8ICEodXJsLmluZGV4T2YoXCIuY3NzXCIpID4gLTEpKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgZWwudmlzaXRlZCA9IHRydWU7XG4gIHZhciBuZXdFbCA9IGVsLmNsb25lTm9kZSgpO1xuICBuZXdFbC5pc0xvYWRlZCA9IGZhbHNlO1xuICBuZXdFbC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3RWwuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBuZXdFbC5pc0xvYWRlZCA9IHRydWU7XG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gIH0pO1xuICBuZXdFbC5ocmVmID0gXCJcIi5jb25jYXQodXJsLCBcIj9cIikuY29uY2F0KERhdGUubm93KCkpO1xuXG4gIGlmIChlbC5uZXh0U2libGluZykge1xuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLCBlbC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbCk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWZcbiAqIEBwYXJhbSB7VE9ET30gc3JjXG4gKiBAcmV0dXJucyB7VE9ET31cbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFJlbG9hZFVybChocmVmLCBzcmMpIHtcbiAgdmFyIHJldDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cbiAgaHJlZiA9IG5vcm1hbGl6ZVVybChocmVmKTtcbiAgc3JjLnNvbWUoXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gIGZ1bmN0aW9uICh1cmwpIHtcbiAgICBpZiAoaHJlZi5pbmRleE9mKHNyYykgPiAtMSkge1xuICAgICAgcmV0ID0gdXJsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXQ7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3JjXVxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiByZWxvYWRTdHlsZShzcmMpIHtcbiAgaWYgKCFzcmMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgdmFyIGxvYWRlZCA9IGZhbHNlO1xuICBmb3JFYWNoLmNhbGwoZWxlbWVudHMsIGZ1bmN0aW9uIChlbCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB1cmwgPSBnZXRSZWxvYWRVcmwoZWwuaHJlZiwgc3JjKTtcblxuICAgIGlmICghaXNVcmxSZXF1ZXN0KHVybCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh1cmwpIHtcbiAgICAgIHVwZGF0ZUNzcyhlbCwgdXJsKTtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxvYWRlZDtcbn1cblxuZnVuY3Rpb24gcmVsb2FkQWxsKCkge1xuICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1wiKTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwudmlzaXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHVwZGF0ZUNzcyhlbCk7XG4gIH0pO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG5cbmZ1bmN0aW9uIGlzVXJsUmVxdWVzdCh1cmwpIHtcbiAgLy8gQW4gVVJMIGlzIG5vdCBhbiByZXF1ZXN0IGlmXG4gIC8vIEl0IGlzIG5vdCBodHRwIG9yIGh0dHBzXG4gIGlmICghL15bYS16QS1aXVthLXpBLVpcXGQrXFwtLl0qOi8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEBwYXJhbSB7VE9ET30gbW9kdWxlSWRcbiAqIEBwYXJhbSB7VE9ET30gb3B0aW9uc1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBpZiAobm9Eb2N1bWVudCkge1xuICAgIGNvbnNvbGUubG9nKFwibm8gd2luZG93LmRvY3VtZW50IGZvdW5kLCB3aWxsIG5vdCBITVIgQ1NTXCIpO1xuICAgIHJldHVybiBub29wO1xuICB9XG5cbiAgdmFyIGdldFNjcmlwdFNyYyA9IGdldEN1cnJlbnRTY3JpcHRVcmwobW9kdWxlSWQpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgc3JjID0gZ2V0U2NyaXB0U3JjKG9wdGlvbnMuZmlsZW5hbWUpO1xuICAgIHZhciByZWxvYWRlZCA9IHJlbG9hZFN0eWxlKHNyYyk7XG5cbiAgICBpZiAob3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gRGV0ZWN0ZWQgbG9jYWwgY3NzIG1vZHVsZXMuIFJlbG9hZCBhbGwgY3NzXCIpO1xuICAgICAgcmVsb2FkQWxsKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHJlbG9hZGVkKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIGNzcyByZWxvYWQgJXNcIiwgc3JjLmpvaW4oXCIgXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWJvdW5jZSh1cGRhdGUsIDUwKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aENvbXBvbmVudHNcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZVVybChwYXRoQ29tcG9uZW50cykge1xuICByZXR1cm4gcGF0aENvbXBvbmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgaXRlbSkge1xuICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgY2FzZSBcIi4uXCI6XG4gICAgICAgIGFjY3VtdWxhdG9yLnBvcCgpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIi5cIjpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFjY3VtdWxhdG9yLnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICB9LFxuICAvKiogQHR5cGUge3N0cmluZ1tdfSAqL1xuICBbXSkuam9pbihcIi9cIik7XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxTdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmxTdHJpbmcpIHtcbiAgdXJsU3RyaW5nID0gdXJsU3RyaW5nLnRyaW0oKTtcblxuICBpZiAoL15kYXRhOi9pLnRlc3QodXJsU3RyaW5nKSkge1xuICAgIHJldHVybiB1cmxTdHJpbmc7XG4gIH1cblxuICB2YXIgcHJvdG9jb2wgPSB1cmxTdHJpbmcuaW5kZXhPZihcIi8vXCIpICE9PSAtMSA/IHVybFN0cmluZy5zcGxpdChcIi8vXCIpWzBdICsgXCIvL1wiIDogXCJcIjtcbiAgdmFyIGNvbXBvbmVudHMgPSB1cmxTdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKHByb3RvY29sLCBcImlcIiksIFwiXCIpLnNwbGl0KFwiL1wiKTtcbiAgdmFyIGhvc3QgPSBjb21wb25lbnRzWzBdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFwuJC8sIFwiXCIpO1xuICBjb21wb25lbnRzWzBdID0gXCJcIjtcbiAgdmFyIHBhdGggPSBub3JtYWxpemVVcmwoY29tcG9uZW50cyk7XG4gIHJldHVybiBwcm90b2NvbCArIGhvc3QgKyBwYXRoO1xufTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjYwMzMxNjU4MDYzXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTAxYzkwYmE0NWViZjA1NTEyYTZcIikiXSwibmFtZXMiOlsibm9ybWFsaXplVXJsIiwicmVxdWlyZSIsInNyY0J5TW9kdWxlSWQiLCJPYmplY3QiLCJjcmVhdGUiLCJub0RvY3VtZW50IiwiZG9jdW1lbnQiLCJmb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJub29wIiwidXBkYXRlQ3NzIiwiZWwiLCJ1cmwiLCJocmVmIiwic3BsaXQiLCJpc1VybFJlcXVlc3QiLCJpc0xvYWRlZCIsImluZGV4T2YiLCJ2aXNpdGVkIiwibmV3RWwiLCJjbG9uZU5vZGUiLCJhZGRFdmVudExpc3RlbmVyIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY29uY2F0IiwiRGF0ZSIsIm5vdyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJyZWxvYWRTdHlsZSIsInNyYyIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsImxvYWRlZCIsImNhbGwiLCJyZXQiLCJzb21lIiwiZ2V0UmVsb2FkVXJsIiwicmVsb2FkQWxsIiwidGVzdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGVJZCIsIm9wdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiZm4iLCJ0aW1lIiwidGltZW91dCIsImdldFNjcmlwdFNyYyIsImN1cnJlbnRTY3JpcHQiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsYXN0U2NyaXB0VGFnIiwibGVuZ3RoIiwiZmlsZU1hcCIsInNwbGl0UmVzdWx0IiwiZmlsZW5hbWUiLCJtYXAiLCJtYXBSdWxlIiwicmVnIiwiUmVnRXhwIiwicmVwbGFjZSIsImdldEN1cnJlbnRTY3JpcHRVcmwiLCJyZWxvYWRlZCIsImxvY2FscyIsImpvaW4iLCJzZWxmIiwidGhpcyIsImFyZ3MiLCJhcmd1bWVudHMiLCJmdW5jdGlvbkNhbGwiLCJhcHBseSIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cmxTdHJpbmciLCJ0cmltIiwicHJvdG9jb2wiLCJjb21wb25lbnRzIiwiaG9zdCIsInRvTG93ZXJDYXNlIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJpdGVtIiwicG9wIiwicHVzaCIsImNzc1JlbG9hZCIsImlkIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==