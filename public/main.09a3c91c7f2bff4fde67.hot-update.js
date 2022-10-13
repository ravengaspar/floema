/*! For license information please see main.09a3c91c7f2bff4fde67.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>r});var o=t("./app/components/Canvas/Media.js"),i=t("./node_modules/lodash/map.js"),a=t("./node_modules/ogl/src/core/Transform.js"),n=t("./node_modules/ogl/src/extras/Plane.js");const r=class{constructor({gl:e,scene:s,sizes:t}){this.group=new a.Transform,this.gl=e,this.sizes=t,this.mediasElements=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new n.Plane(this.gl)}createGallery(){this.medias=i(this.mediasElements,((e,s)=>new o.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group,sizes:this.sizes})))}onResize(e){i(this.medias,(s=>s.onResize(e)))}onTouchDown({x:e,y:s}){}onTouchMove({x:e,y:s}){}onTouchUp({x:e,y:s}){}}}},(function(e){e.h=()=>"6fdbb36f04ff2dfc67e6"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOWEzYzkxYzdmMmJmZjRmZGU2Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1RBS0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLEVBQU4sTUFBYUMsSUFDeEJDLEtBQUtDLE1BQVEsSUFBSUMsRUFBQUEsVUFDakJGLEtBQUtILEdBQUtBLEVBQ1ZHLEtBQUtELE1BQVFBLEVBRWJDLEtBQUtHLGVBQWlCQyxTQUFTQyxpQkFBaUIsZ0NBRWhETCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVWLEVBQ3JCLENBRURRLGlCQUNDTixLQUFLUyxTQUFXLElBQUlDLEVBQUFBLE1BQU1WLEtBQUtILEdBQy9CLENBRURVLGdCQUNDUCxLQUFLVyxPQUFTQyxFQUFJWixLQUFLRyxnQkFBZ0IsQ0FBQ1UsRUFBU0MsSUFDekMsSUFBSUMsRUFBQUEsUUFBTSxDQUNoQkYsVUFDQUosU0FBVVQsS0FBS1MsU0FDZkssUUFDQWpCLEdBQUlHLEtBQUtILEdBQ1RDLE1BQU9FLEtBQUtDLE1BQ1pGLE1BQU9DLEtBQUtELFNBR2QsQ0FFRGlCLFNBQVNDLEdBQ1JMLEVBQUlaLEtBQUtXLFFBQVFPLEdBQVNBLEVBQU1GLFNBQVNDLElBQ3pDLENBRURFLGFBQVksRUFBRUMsRUFBRixFQUFLQyxJQUFPLENBQ3hCQyxhQUFZLEVBQUVGLEVBQUYsRUFBS0MsSUFBTyxDQUN4QkUsV0FBVSxFQUFFSCxFQUFGLEVBQUtDLElBQU8sa0JDMUN2QkcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lLCBzaXplcyB9KSB7XG5cdFx0dGhpcy5ncm91cCA9IG5ldyBUcmFuc2Zvcm0oKVxuXHRcdHRoaXMuZ2wgPSBnbFxuXHRcdHRoaXMuc2l6ZXMgPSBzaXplc1xuXG5cdFx0dGhpcy5tZWRpYXNFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0VsZW1lbnRzLCAoZWxlbWVudCwgaW5kZXgpID0+IHtcblx0XHRcdHJldHVybiBuZXcgTWVkaWEoe1xuXHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcblx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdGdsOiB0aGlzLmdsLFxuXHRcdFx0XHRzY2VuZTogdGhpcy5ncm91cCxcblx0XHRcdFx0c2l6ZXM6IHRoaXMuc2l6ZXMsXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH1cblxuXHRvblJlc2l6ZShldmVudCkge1xuXHRcdG1hcCh0aGlzLm1lZGlhcywgbWVkaWEgPT4gbWVkaWEub25SZXNpemUoZXZlbnQpKVxuXHR9XG5cblx0b25Ub3VjaERvd24oeyB4LCB5IH0pIHt9XG5cdG9uVG91Y2hNb3ZlKHsgeCwgeSB9KSB7fVxuXHRvblRvdWNoVXAoeyB4LCB5IH0pIHt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmRiYjM2ZjA0ZmYyZGZjNjdlNlwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImdsIiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJncm91cCIsIlRyYW5zZm9ybSIsIm1lZGlhc0VsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1lZGlhcyIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsIk1lZGlhIiwib25SZXNpemUiLCJldmVudCIsIm1lZGlhIiwib25Ub3VjaERvd24iLCJ4IiwieSIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9