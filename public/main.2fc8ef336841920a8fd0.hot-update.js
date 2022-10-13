/*! For license information please see main.2fc8ef336841920a8fd0.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/collections-fragment.glsl":(n,a,e)=>{e.r(a),e.d(a,{default:()=>o});const o="precision highp float;\n#define GLSLIFY 1\n\nuniform float uAlpha;\nuniform sampler2D tMap;\n\nvarying vec4 vPosition;\nvarying vec2 vUv;\n\nvoid main() {\n  vec4 texture = texture2D(tMap, vUv);\n\n  gl_FragColor = vec4(1.0, 1.0);\n  gl_FragColor.a = (1.0 - (vPosition.x / 10.0)) * uAlpha;\n}\n"}},(function(n){n.h=()=>"69ddbd1df43a341f27fa"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4yZmM4ZWYzMzY4NDE5MjBhOGZkMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7bUlBQUEsZ1VDQUFBLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvc2hhZGVycy9jb2xsZWN0aW9ucy1mcmFnbWVudC5nbHNsIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIGZsb2F0IHVBbHBoYTtcXG51bmlmb3JtIHNhbXBsZXIyRCB0TWFwO1xcblxcbnZhcnlpbmcgdmVjNCB2UG9zaXRpb247XFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICB2ZWM0IHRleHR1cmUgPSB0ZXh0dXJlMkQodE1hcCwgdlV2KTtcXG5cXG4gIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjApO1xcbiAgZ2xfRnJhZ0NvbG9yLmEgPSAoMS4wIC0gKHZQb3NpdGlvbi54IC8gMTAuMCkpICogdUFscGhhO1xcbn1cXG5cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OWRkYmQxZGY0M2EzNDFmMjdmYVwiKSJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=