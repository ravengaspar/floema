/*! For license information please see main.2d1d45f62ad2d54594f1.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var o=t("./app/components/Canvas/Media.js"),i=t("./node_modules/lodash/map.js"),a=t("./node_modules/ogl/src/core/Transform.js"),r=t("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:s,sizes:t}){this.group=new a.Transform,this.gl=e,this.sizes=t,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new r.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(s=>s.onResize(e)))}onTouchDown({x:e,y:s}){}onTouchMove({x:e,y:s}){}onTouchUp({x:e,y:s}){}update(){this.scroll.x=this.x.current,this.scroll.x=this.x.current,i(this.medias,(e=>e.update()))}}}},(function(e){e.h=()=>"e1dba943835283181429"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZDFkNDVmNjJhZDJkNTQ1OTRmMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1RBS0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEVBQ3JCLENBRURRLGlCQUNDTixLQUFLUyxTQUFXLElBQUlDLEVBQUFBLE1BQU1WLEtBQUtILEdBQy9CLENBRURVLGdCQUNDUCxLQUFLVyxPQUFTQyxFQUFJWixLQUFLRyxnQkFBZ0IsQ0FBQ1UsRUFBU0MsSUFDekMsSUFBSUMsRUFBQUEsUUFBTSxDQUNoQkYsVUFDQUosU0FBVVQsS0FBS1MsU0FDZkssUUFDQWpCLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2QsQ0FFRGlCLFNBQVNDLEdBQ1JMLEVBQUlaLEtBQUtXLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQ3pDLENBRURFLGFBQVksRUFBRUMsRUFBRixFQUFLQyxJQUFPLENBQ3hCQyxhQUFZLEVBQUVGLEVBQUYsRUFBS0MsSUFBTyxDQUN4QkUsV0FBVSxFQUFFSCxFQUFGLEVBQUtDLElBQU8sQ0FFdEJHLFNBRUd4QixLQUFLeUIsT0FBT0wsRUFBSXBCLEtBQUtvQixFQUFFTSxRQUN2QjFCLEtBQUt5QixPQUFPTCxFQUFJcEIsS0FBS29CLEVBQUVNLFFBR3pCZCxFQUFJWixLQUFLVyxRQUFRTyxHQUFTQSxFQUFNTSxVQUNoQyxrQkNuREZHLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9Ib21lLmpzIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVkaWEgZnJvbSAnLi9NZWRpYSdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IHsgUGxhbmUsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuXHRjb25zdHJ1Y3Rvcih7IGdsLCBzY2VuZSwgc2l6ZXMgfSkge1xuXHRcdHRoaXMuZ3JvdXAgPSBuZXcgVHJhbnNmb3JtKClcblx0XHR0aGlzLmdsID0gZ2xcblx0XHR0aGlzLnNpemVzID0gc2l6ZXNcblxuXHRcdHRoaXMubWVkaWFzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9fZ2FsbGVyeV9fbWVkaWFfX2ltYWdlJylcblxuXHRcdHRoaXMuY3JlYXRlR2VvbWV0cnkoKVxuXHRcdHRoaXMuY3JlYXRlR2FsbGVyeSgpXG5cblx0XHR0aGlzLmdyb3VwLnNldFBhcmVudChzY2VuZSlcblx0fVxuXG5cdGNyZWF0ZUdlb21ldHJ5KCkge1xuXHRcdHRoaXMuZ2VvbWV0cnkgPSBuZXcgUGxhbmUodGhpcy5nbClcblx0fVxuXG5cdGNyZWF0ZUdhbGxlcnkoKSB7XG5cdFx0dGhpcy5tZWRpYXMgPSBtYXAodGhpcy5tZWRpYXNFbGVtZW50cywgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRyZXR1cm4gbmV3IE1lZGlhKHtcblx0XHRcdFx0ZWxlbWVudCxcblx0XHRcdFx0Z2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG5cdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRnbDogdGhpcy5nbCxcblx0XHRcdFx0c2NlbmU6IHRoaXMuZ3JvdXAsXG5cdFx0XHRcdHNpemVzOiB0aGlzLnNpemVzLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblx0fVxuXG5cdG9uVG91Y2hEb3duKHsgeCwgeSB9KSB7fVxuXHRvblRvdWNoTW92ZSh7IHgsIHkgfSkge31cblx0b25Ub3VjaFVwKHsgeCwgeSB9KSB7fVxuXG5cdHVwZGF0ZSgpIHtcblxuICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuICAgIHRoaXMuc2Nyb2xsLnggPSB0aGlzLnguY3VycmVudFxuXG5cblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLnVwZGF0ZSgpKVxuXHR9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMWRiYTk0MzgzNTI4MzE4MTQyOVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwidXBkYXRlIiwic2Nyb2xsIiwiY3VycmVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==