"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{8193:function(t,n,r){r.r(n),r.d(n,{PolygonMorphSketch:function(){return p},RotatingWavesSketch:function(){return k},VisualiserSketch:function(){return T},WebGlTestSketch:function(){return x}});var e=r(5893),a=(r(7294),r(4210)),o=r.n(a),i=(r(8010),{w:500,h:500}),s=220,u="#18181b";function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function c(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return h(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(t,n){var r=Math.PI/n;return Math.cos(r)/Math.cos(t%(2*r)-r)},l=function(t,n){var r=[];0==t&&(t=n);for(var e=0;e<2*Math.PI;e+=Math.PI/n){var a=225*f(e,t),o=a*Math.cos(e-Math.PI/2),i=a*Math.sin(e-Math.PI/2);r.push({x:o,y:i})}return r},p=function(){var t,n=0,r=0,a=!0,s=0,h=4,f=l(s,200),p=l(h,200);return(0,e.jsx)(o(),{setup:function(n,r){n.colorMode(n.HSB,255),n.createCanvas(i.w,i.h).parent(r),t=n.color(u)},draw:function(e){e.background(t),e.translate(e.width/2,e.height/2),r>0?r-=e.deltaTime:(n+=1*e.deltaTime/1e3,e.rotate(e.map(n,0,1,0,2*Math.PI,!0))),n>=1&&(n=0,(a=!a)&&(r=1e3),s=h,h=a?0:e.round(e.random(3,10)),f=c(p),p=l(h,200)),e.noFill(),e.strokeWeight(10),e.strokeJoin(e.ROUND),e.stroke("white"),e.beginShape();for(var o=0;o<f.length;o++){var i=e.lerp(f[o].x,p[o].x,n),u=e.lerp(f[o].y,p[o].y,n);e.vertex(i,u)}e.endShape()}})},y=r(8010).theme.extend.colors;function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function v(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return d(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){function t(n,r,e){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=n,this.y=r,this.z=e}var n=t.prototype;return n.map=function(n){return new t(n(this.x),n(this.y),n(this.z))},n.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},n.normalize=function(){var t=this.length(),n=this.map((function(n){return n/t}));this.x=n.x,this.y=n.y,this.z=n.z},t.mid=function(n,r){return new t((n.x+r.x)/2,(n.y+r.y)/2,(n.z+r.z)/2)},t}();function w(t){var n=0;return t.z>0?n=Math.atan(t.x/t.z):t.z<0&&t.x>=0?n=Math.atan(t.x/t.z)+Math.PI:t.z<0&&t.x<0?n=Math.atan(t.x/t.z)-Math.PI:0==t.z&&t.x>0?n=Math.PI/2:0==t.z&&t.x<0&&(n=-Math.PI/2),Math.PI/2-n}function g(){var t=(1+Math.sqrt(5))/2,n=[];n.push(new m(-1,t,0)),n.push(new m(1,t,0)),n.push(new m(-1,-t,0)),n.push(new m(1,-t,0)),n.push(new m(0,-1,t)),n.push(new m(0,1,t)),n.push(new m(0,-1,-t)),n.push(new m(0,1,-t)),n.push(new m(t,0,-1)),n.push(new m(t,0,1)),n.push(new m(-t,0,-1)),n.push(new m(-t,0,1)),n.push(new m(0,1,0)),n.push(new m(1,0,0)),n.push(new m(0,0,1));var r=[];r.push([0,11,5]),r.push([0,5,1]),r.push([0,1,7]),r.push([0,7,10]),r.push([0,10,11]),r.push([1,5,9]),r.push([5,11,4]),r.push([11,10,2]),r.push([10,7,6]),r.push([7,1,8]),r.push([3,9,4]),r.push([3,4,2]),r.push([3,2,6]),r.push([3,6,8]),r.push([3,8,9]),r.push([4,9,5]),r.push([2,4,11]),r.push([6,2,10]),r.push([8,6,7]),r.push([9,8,1]);var e=[];return r.forEach((function(t){e.push(n[t[2]]),e.push(n[t[1]]),e.push(n[t[0]])})),e}function b(t){for(var n=[],r=0;r<t.length-2;r+=3)for(var e=t[r],a=t[r+1],o=t[r+2],i=m.mid(e,a),s=m.mid(a,o),u=m.mid(o,e),h=[e,i,u,i,a,s,u,s,o,i,s,u],c=0;c<h.length;c++)n.push(h[c]);return n}var x=function(){var t,n,r=Math.PI/16,a=function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=g(),e=[],a=0;a<n;a++)r=b(r);r.forEach((function(t){e.some((function(n){return t.x==n.x&&t.y==n.y&&t.z==n.z}))||e.push(new m(t.x,t.y,t.z))})),e=e.map((function(n){return n.normalize(),n.map((function(n){return n*t}))}));var o=new Map;e.forEach((function(t){o.has(t.y)||o.set(t.y,[]);var n=o.get(t.y);n&&(n.push(t),o.set(t.y,n))}));var i=[];return o.forEach((function(t){var n;(n=i).push.apply(n,v(t.sort((function(t,n){return w(t)-w(n)}))))})),i}(200,3),i=0;return(0,e.jsx)(o(),{setup:function(r,e){if(r.createCanvas(500,500,r.WEBGL).parent(e),r.colorMode(r.HSB,255),t=r.hue(y.primary),n=r.hue(y.secondary),t>n){var a=t;t=n,n=a}},draw:function(e){i+=e.deltaTime/1e3,e.clear(),e.noStroke(),e.rotateZ(Math.PI/4),e.rotateY(r*i);for(var o=0;o<a.length;o++){var s=a[o];e.translate(s.x,s.y,s.z);var u=e.map(s.y,-100,100,0,Math.PI),h=e.map(e.sin(u+i),-1,1,t,n);e.fill(e.color(h,200,223)),e.sphere(2,8,8),e.translate(-s.x,-s.y,-s.z)}}})};function M(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var S=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;M(this,t),this.radius=n,this.speed=r}return t.prototype.draw=function(t,n){var r=this.speed*n/2%(2*t.PI);t.beginShape(),t.strokeJoin(t.ROUND),t.strokeWeight(6);for(var e=0;e<2*t.TAU;e+=t.TAU/1e3){var a=10*e-5*r,o=Math.pow(Math.sin(e/2+r),9)*Math.sin(a),i=this.radius+10*o,s=t.cos(e)*i,u=t.sin(e)*i,h=t.lerpColor(t.color(y.primary),t.color(y.secondary),(Math.sin(a/2)+1)/2);t.stroke(h),t.vertex(s,u)}t.endShape(t.CLOSE)},t}(),k=function(){var t=0,n=[];return(0,e.jsx)(o(),{setup:function(r,e){t=0,n=[],r.createCanvas(500,500).parent(e),n.push(new S(s,1))},draw:function(r){t+=r.deltaTime/1e3,r.background(0,20),r.translate(r.width/2,r.height/2),r.noFill(),r.stroke(255,200),r.strokeWeight(4),n.forEach((function(n){return n.draw(r,t)})),r.noStroke()}})};function A(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var I=function(){function t(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;A(this,t),this.innerRadius=n,this.outerRadius=r,this.roughness=e,this.speed=a}var n=t.prototype;return n.calcR=function(t,n,r){var e=this.speed*r/2,a=t.map(t.cos(n+e),-1,1,0,this.roughness),o=t.map(t.sin(n+e),-1,1,0,this.roughness),i=this.speed*r/2;return(t.noise(a,o,i)+1)/2*t.map(t.sin(6*n+e),-1,1,this.innerRadius,this.outerRadius)},n.draw=function(t,n){t.beginShape(),t.strokeJoin(t.ROUND);for(var r=0;r<t.TAU;r+=t.TAU/1e3){var e=this.calcR(t,r,n),a=t.cos(r)*e,o=t.sin(r)*e;t.vertex(a,o)}t.endShape(t.CLOSE)},t}(),z=function(){function t(n){A(this,t),this.layers=[],this.layers=n}var n=t.prototype;return n.calcR=function(t,n,r){var e=this.layers.map((function(e){return e.calcR(t,n,r)}));return e.reduce((function(t,n){return t+n}))/e.length},n.draw=function(t,n){t.beginShape(),t.strokeJoin(t.ROUND);for(var r=0;r<t.TAU;r+=t.TAU/1e3){var e=this.calcR(t,r,n),a=t.cos(r)*e,o=t.sin(r)*e;t.vertex(a,o)}t.endShape(t.CLOSE)},t}(),T=function(){var t=0,n=[];return(0,e.jsx)(o(),{setup:function(t,r){t.createCanvas(500,500).parent(r),n.push(new I(150,225)),n.push(new I(150,225,1,-.5)),n.push(new z([new I(150,225),new I(200,225,1,.6)]))},draw:function(r){t+=r.deltaTime/1e3,r.clear(),r.translate(r.width/2,r.height/2),r.stroke(255,200),r.strokeWeight(2),n.forEach((function(n){return n.draw(r,t)})),r.fill("black"),r.noStroke()}})}},8010:function(t,n,r){function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function a(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=r(9808),i=r(5874),s=r(2502);t.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx}","./src/components/**/*.{js,ts,jsx,tsx}"],darkMode:"class",theme:{extend:{fontFamily:{title:["Inter"].concat(a(i.fontFamily.sans)),text:["Inter"].concat(a(i.fontFamily.sans))},colors:{primary:o.red[500],secondary:o.orange[500]}}},plugins:[r(4863),s((function(t){var n,r,e,a=t.matchUtilities;t.theme;a((e=function(t){return{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t,", 1fr))")}},(r="auto-fill-cols")in(n={})?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n),{values:i.spacing})}))]}}}]);