/*! For license information please see main.0c4412b1d147059fce9a.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/components/Canvas/Home.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var a=t("./app/components/Canvas/Media.js"),o=t("./node_modules/lodash/map.js"),r=t("./node_modules/ogl/src/core/Transform.js"),i=t("./node_modules/ogl/src/extras/Plane.js");const n=class{constructor({gl:e,scene:s}){this.group=new r.Transform,this.gl=e,this.medias=document.querySelectorAll(".home__gallery__media__image"),this.createGeometry(),this.createGallery(),this.group.setParent(s)}createGeometry(){this.geometry=new i.Plane(this.gl)}createGallery(){this.medias=o(this.mediasE,((e,s)=>new a.default({element:e,geometry:this.geometry,index:s,gl:this.gl,scene:this.group})))}onResize(e){o(this.medias,(s=>s.onResize(e)))}}}},(function(e){e.h=()=>"f7ba36e7d929b7d30355"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wYzQ0MTJiMWQxNDcwNTlmY2U5YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7b1RBS0EsY0FDQ0EsYUFBWSxHQUFFQyxFQUFGLE1BQU1DLElBQ2pCQyxLQUFLQyxNQUFRLElBQUlDLEVBQUFBLFVBQ2pCRixLQUFLRixHQUFLQSxFQUVWRSxLQUFLRyxPQUFTQyxTQUFTQyxpQkFBaUIsZ0NBRXhDTCxLQUFLTSxpQkFDTE4sS0FBS08sZ0JBRUxQLEtBQUtDLE1BQU1PLFVBQVVULEVBQ3JCLENBRURPLGlCQUNDTixLQUFLUyxTQUFXLElBQUlDLEVBQUFBLE1BQU1WLEtBQUtGLEdBQy9CLENBRURTLGdCQUNDUCxLQUFLRyxPQUFTUSxFQUFJWCxLQUFLWSxTQUFTLENBQUNDLEVBQVNDLElBQ2xDLElBQUlDLEVBQUFBLFFBQU0sQ0FDaEJGLFVBQ0FKLFNBQVVULEtBQUtTLFNBQ2ZLLFFBQ0FoQixHQUFJRSxLQUFLRixHQUNUQyxNQUFPQyxLQUFLQyxTQUdkLENBRURlLFNBQVNDLEdBQ1JOLEVBQUlYLEtBQUtHLFFBQVFlLEdBQVNBLEVBQU1GLFNBQVNDLElBQ3pDLGtCQ3BDRkUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vaW1tZXJzaXZlLXdlYnNpdGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWRpYSBmcm9tICcuL01lZGlhJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgeyBQbGFuZSwgVHJhbnNmb3JtIH0gZnJvbSAnb2dsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG5cdGNvbnN0cnVjdG9yKHsgZ2wsIHNjZW5lIH0pIHtcblx0XHR0aGlzLmdyb3VwID0gbmV3IFRyYW5zZm9ybSgpXG5cdFx0dGhpcy5nbCA9IGdsXG5cblx0XHR0aGlzLm1lZGlhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX19nYWxsZXJ5X19tZWRpYV9faW1hZ2UnKVxuXG5cdFx0dGhpcy5jcmVhdGVHZW9tZXRyeSgpXG5cdFx0dGhpcy5jcmVhdGVHYWxsZXJ5KClcblxuXHRcdHRoaXMuZ3JvdXAuc2V0UGFyZW50KHNjZW5lKVxuXHR9XG5cblx0Y3JlYXRlR2VvbWV0cnkoKSB7XG5cdFx0dGhpcy5nZW9tZXRyeSA9IG5ldyBQbGFuZSh0aGlzLmdsKVxuXHR9XG5cblx0Y3JlYXRlR2FsbGVyeSgpIHtcblx0XHR0aGlzLm1lZGlhcyA9IG1hcCh0aGlzLm1lZGlhc0UsIChlbGVtZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0cmV0dXJuIG5ldyBNZWRpYSh7XG5cdFx0XHRcdGVsZW1lbnQsXG5cdFx0XHRcdGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuXHRcdFx0XHRpbmRleCxcblx0XHRcdFx0Z2w6IHRoaXMuZ2wsXG5cdFx0XHRcdHNjZW5lOiB0aGlzLmdyb3VwLFxuXHRcdFx0fSlcblx0XHR9KVxuXHR9XG5cblx0b25SZXNpemUoZXZlbnQpIHtcblx0XHRtYXAodGhpcy5tZWRpYXMsIG1lZGlhID0+IG1lZGlhLm9uUmVzaXplKGV2ZW50KSlcblx0fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjdiYTM2ZTdkOTI5YjdkMzAzNTVcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJnbCIsInNjZW5lIiwidGhpcyIsImdyb3VwIiwiVHJhbnNmb3JtIiwibWVkaWFzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlR2VvbWV0cnkiLCJjcmVhdGVHYWxsZXJ5Iiwic2V0UGFyZW50IiwiZ2VvbWV0cnkiLCJQbGFuZSIsIm1hcCIsIm1lZGlhc0UiLCJlbGVtZW50IiwiaW5kZXgiLCJNZWRpYSIsIm9uUmVzaXplIiwiZXZlbnQiLCJtZWRpYSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==