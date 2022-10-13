/*! For license information please see main.586fe7953dc6b18b8e22.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t("./app/components/Canvas/Media.js"),o=t("./node_modules/lodash/map.js"),r=t("./node_modules/ogl/src/core/Transform.js"),n=t("./node_modules/ogl/src/extras/Plane.js");const l=class{constructor({gl:e,scene:s}){this.group=new r.Transform,this.gl=e,this.medias=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.s}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){o(this.medias,((e,s)=>new a.default({element:e,geometry:this.geometry,index:s,scene:this.group})))}}}},(function(e){e.h=()=>"ea7d7b92189f3931e309"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41ODZmZTc5NTNkYzZiMThiOGUyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1RBS0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLElBQ2pCQyxLQUFLQyxNQUFRLElBQUlDLEVBQUFBLFVBQ2pCRixLQUFLRixHQUFLQSxFQUVWRSxLQUFLRyxPQUFTQyxTQUFTQyxpQkFBaUIsZ0NBRXhDTCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUhQLEtBQUtRLENBQ1AsQ0FFREYsaUJBQ0NOLEtBQUtTLFNBQVcsSUFBSUMsRUFBQUEsTUFBTVYsS0FBS0YsR0FDL0IsQ0FFRFMsZ0JBQ0NJLEVBQUlYLEtBQUtHLFFBQVEsQ0FBQ1MsRUFBU0MsSUFDbkIsSUFBSUMsRUFBQUEsUUFBTSxDQUNoQkYsVUFDQUgsU0FBVVQsS0FBS1MsU0FDZkksUUFDQWQsTUFBT0MsS0FBS0MsU0FHZCxrQkMvQkZjLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSB9KSB7XG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXG5cdFx0dGhpcy5tZWRpYXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cbiAgICB0aGlzLnNcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0bWFwKHRoaXMubWVkaWFzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlYTdkN2I5MjE4OWYzOTMxZTMwOVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJ0aGlzIiwiZ3JvdXAiLCJUcmFuc2Zvcm0iLCJtZWRpYXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjcmVhdGVHZW9tZXRyeSIsImNyZWF0ZUdhbGxlcnkiLCJzIiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9