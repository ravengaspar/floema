/*! For license information please see main.2d0b5ad14c4eb0ca76ca.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var o=s("./app/classes/Component.js"),a=s("./node_modules/lodash/each.js"),r=s("./node_modules/console-browserify/index.js");class d extends o.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number__text",images:document.querySelectorAll("img")}}),this.createLoader()}createLoader(){a(this.elements.images,(e=>{const t=new Image;t.src=e.getAttribute("data-src"),t.onloaded=e=>this.onAssetLoaded(t)}))}onAssetLoaded(e){this.length+=1,r.log(e)}}}},(function(e){e.h=()=>"ebdfc0bdfb3363eeef03"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZDBiNWFkMTRjNGViMGNhNzZjYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVFBR2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLDJCQUNSQyxPQUFRQyxTQUFTQyxpQkFBaUIsVUFHdENDLEtBQUtDLGNBQ04sQ0FFREEsZUFDRUMsRUFBS0YsS0FBS04sU0FBU0csUUFBU0osSUFDMUIsTUFBTVUsRUFBUSxJQUFJQyxNQUNsQkQsRUFBTUUsSUFBTVosRUFBUWEsYUFBYSxZQUVqQ0gsRUFBTUksU0FBWUMsR0FBTVIsS0FBS1MsY0FBY04sRUFBM0MsR0FFSCxDQUVETSxjQUFjTixHQUNaSCxLQUFLVSxRQUFVLEVBQ2ZDLEVBQVFDLElBQUlULEVBQ2Isa0JDNUJIVSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvLi9hcHAvY29tcG9uZW50cy9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcImNsYXNzZXMvQ29tcG9uZW50XCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwibG9kYXNoL2VhY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogXCIucHJlbG9hZGVyXCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICB0aXRsZTogXCIucHJlbG9hZGVyX190ZXh0XCIsXG4gICAgICAgIG51bWJlcjogXCIucHJlbG9hZGVyX19udW1iZXJfX3RleHRcIixcbiAgICAgICAgaW1hZ2VzOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0aGlzLmNyZWF0ZUxvYWRlcigpO1xuICB9XG5cbiAgY3JlYXRlTG9hZGVyKCkge1xuICAgIGVhY2godGhpcy5lbGVtZW50cy5pbWFnZXMsIChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1hZ2Uuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcblxuICAgICAgaW1hZ2Uub25sb2FkZWQgPSAoXykgPT4gdGhpcy5vbkFzc2V0TG9hZGVkKGltYWdlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uQXNzZXRMb2FkZWQoaW1hZ2UpIHtcbiAgICB0aGlzLmxlbmd0aCArPSAxO1xuICAgIGNvbnNvbGUubG9nKGltYWdlKTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZWJkZmMwYmRmYjMzNjNlZWVmMDNcIikiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdXBlciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2VzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGhpcyIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkZWQiLCJfIiwib25Bc3NldExvYWRlZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=