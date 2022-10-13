/*! For license information please see main.eb0f62f58f2eea513612.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/shaders/home-vertex.glsl":(n,e,i)=>{i.r(e),i.d(e,{default:()=>o});const o="#define GLSLIFY 1\n#define PI 3.1415926535897932384626433832795\n\nattribute vec3 position;\nattribute vec2 uv;\n\nuniform float uSpeed;\nuniform vec2 uViewportSizes;\n\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n\n    vec4 newPosition = modelViewMatrix * vec4(position, 1.0);\n\n    newPosition.z *= sin((newPosition.y / uViewportSizes.y) * (newPosition.x / uViewportSizes.x) * PI + PI / 2.0) * 1.0 + abs(uSpeed);\n\n    gl_Position = projectionMatrix * newPosition;\n}\n"}},(function(n){n.h=()=>"df3d7c53b6e29611dfec"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lYjBmNjJmNThmMmVlYTUxMzYxMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MEhBQUEsMmpCQ0FBQSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL3NoYWRlcnMvaG9tZS12ZXJ0ZXguZ2xzbCIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4jZGVmaW5lIFBJIDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjQzMzgzMjc5NVxcblxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnVuaWZvcm0gZmxvYXQgdVNwZWVkO1xcbnVuaWZvcm0gdmVjMiB1Vmlld3BvcnRTaXplcztcXG5cXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xcbnVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2VXYgPSB1djtcXG5cXG4gICAgdmVjNCBuZXdQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XFxuXFxuICAgIG5ld1Bvc2l0aW9uLnogKj0gc2luKChuZXdQb3NpdGlvbi55IC8gdVZpZXdwb3J0U2l6ZXMueSkgKiAobmV3UG9zaXRpb24ueCAvIHVWaWV3cG9ydFNpemVzLngpICogUEkgKyBQSSAvIDIuMCkgKiAxLjAgKyBhYnModVNwZWVkKTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbmV3UG9zaXRpb247XFxufVxcblwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImRmM2Q3YzUzYjZlMjk2MTFkZmVjXCIpIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==