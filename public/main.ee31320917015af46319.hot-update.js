/*! For license information please see main.ee31320917015af46319.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateimmersive_website("main",{"./app/shaders/plane-vertex.glsl":(e,i,n)=>{n.r(i),n.d(i,{default:()=>t});const t="#define GLSLIFY 1\nattribute vec3 position;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n"}},(function(e){e.h=()=>"61f4d931ef00beebad32"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lZTMxMzIwOTE3MDE1YWY0NjMxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7c0lBQUEseVFDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbW1lcnNpdmUtd2Vic2l0ZS8uL2FwcC9zaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsIiwid2VicGFjazovL2ltbWVyc2l2ZS13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHZVdiA9IHV2O1xcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XFxuXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjFmNGQ5MzFlZjAwYmVlYmFkMzJcIikiXSwibmFtZXMiOlsiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9