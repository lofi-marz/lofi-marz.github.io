"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[193],{8193:function(t,r,n){n.r(r),n.d(r,{PolygonMorphSketch:function(){return y},RotatingWavesSketch:function(){return k},VisualiserSketch:function(){return P},WebGlTestSketch:function(){return x}});var e=n(5893),a=(n(7294),n(4210)),o=n.n(a),i=(n(8010),{w:500,h:500}),s=220,u="#18181b",h=n(8010).theme.extend.colors;function c(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function f(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return c(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(t,r){var n=Math.PI/r;return Math.cos(n)/Math.cos(t%(2*n)-n)},l=function(t,r){var n=[];0==t&&(t=r);for(var e=0;e<2*Math.PI;e+=Math.PI/r){var a=225*p(e,t),o=a*Math.cos(e-Math.PI/2),i=a*Math.sin(e-Math.PI/2);n.push({x:o,y:i})}return n},y=function(){var t,r=0,n=0,a=!0,s=0,c=4,p=l(s,200),y=l(c,200);return(0,e.jsx)(o(),{setup:function(r,n){r.createCanvas(i.w,i.h).parent(n),t=r.color(u)},draw:function(e){e.background(t),e.translate(e.width/2,e.height/2),n>0?n-=e.deltaTime:(r+=1*e.deltaTime/1e3,e.rotate(e.map(r,0,1,0,2*Math.PI,!0))),r>=1&&(r=0,(a=!a)&&(n=1e3),s=c,c=a?0:e.round(e.random(3,10)),p=f(y),y=l(c,200)),e.noFill(),e.strokeWeight(20),e.strokeJoin(e.ROUND);e.map(r,0,1,0,e.PI);var o=e.lerpColor(e.color(h.primary),e.color(h.secondary),(Math.sin(e.map(r*Math.abs(s-c),0,7,0,1,!0)/2)+1)/2);e.stroke(o),e.beginShape();for(var i=0;i<p.length;i++){var u=e.lerp(p[i].x,y[i].x,r),d=e.lerp(p[i].y,y[i].y,r);e.vertex(u,d)}e.endShape()}})};function d(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function v(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return d(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=function(){function t(r,n,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=r,this.y=n,this.z=e}var r=t.prototype;return r.map=function(r){return new t(r(this.x),r(this.y),r(this.z))},r.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},r.normalize=function(){var t=this.length(),r=this.map((function(r){return r/t}));this.x=r.x,this.y=r.y,this.z=r.z},t.mid=function(r,n){return new t((r.x+n.x)/2,(r.y+n.y)/2,(r.z+n.z)/2)},t}();function w(t){var r=0;return t.z>0?r=Math.atan(t.x/t.z):t.z<0&&t.x>=0?r=Math.atan(t.x/t.z)+Math.PI:t.z<0&&t.x<0?r=Math.atan(t.x/t.z)-Math.PI:0==t.z&&t.x>0?r=Math.PI/2:0==t.z&&t.x<0&&(r=-Math.PI/2),Math.PI/2-r}function g(){var t=(1+Math.sqrt(5))/2,r=[];r.push(new m(-1,t,0)),r.push(new m(1,t,0)),r.push(new m(-1,-t,0)),r.push(new m(1,-t,0)),r.push(new m(0,-1,t)),r.push(new m(0,1,t)),r.push(new m(0,-1,-t)),r.push(new m(0,1,-t)),r.push(new m(t,0,-1)),r.push(new m(t,0,1)),r.push(new m(-t,0,-1)),r.push(new m(-t,0,1)),r.push(new m(0,1,0)),r.push(new m(1,0,0)),r.push(new m(0,0,1));var n=[];n.push([0,11,5]),n.push([0,5,1]),n.push([0,1,7]),n.push([0,7,10]),n.push([0,10,11]),n.push([1,5,9]),n.push([5,11,4]),n.push([11,10,2]),n.push([10,7,6]),n.push([7,1,8]),n.push([3,9,4]),n.push([3,4,2]),n.push([3,2,6]),n.push([3,6,8]),n.push([3,8,9]),n.push([4,9,5]),n.push([2,4,11]),n.push([6,2,10]),n.push([8,6,7]),n.push([9,8,1]);var e=[];return n.forEach((function(t){e.push(r[t[2]]),e.push(r[t[1]]),e.push(r[t[0]])})),e}function b(t){for(var r=[],n=0;n<t.length-2;n+=3)for(var e=t[n],a=t[n+1],o=t[n+2],i=m.mid(e,a),s=m.mid(a,o),u=m.mid(o,e),h=[e,i,u,i,a,s,u,s,o,i,s,u],c=0;c<h.length;c++)r.push(h[c]);return r}var x=function(){var t,r,n=Math.PI/16,a=function(t){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=g(),e=[],a=0;a<r;a++)n=b(n);n.forEach((function(t){e.some((function(r){return t.x==r.x&&t.y==r.y&&t.z==r.z}))||e.push(new m(t.x,t.y,t.z))})),e=e.map((function(r){return r.normalize(),r.map((function(r){return r*t}))}));var o=new Map;e.forEach((function(t){o.has(t.y)||o.set(t.y,[]);var r=o.get(t.y);r&&(r.push(t),o.set(t.y,r))}));var i=[];return o.forEach((function(t){var r;(r=i).push.apply(r,v(t.sort((function(t,r){return w(t)-w(r)}))))})),i}(200,3),i=0;return(0,e.jsx)(o(),{setup:function(n,e){if(n.createCanvas(500,500,n.WEBGL).parent(e),n.colorMode(n.HSB,255),t=n.hue(h.primary),r=n.hue(h.secondary),t>r){var a=t;t=r,r=a}},draw:function(e){i+=e.deltaTime/1e3,e.clear(),e.noStroke(),e.rotateZ(Math.PI/4),e.rotateY(n*i);for(var o=0;o<a.length;o++){var s=a[o];e.translate(s.x,s.y,s.z);var u=e.map(s.y,-100,100,0,Math.PI),h=e.map(e.sin(u+i),-1,1,t,r);e.fill(e.color(h,200,223)),e.sphere(2,8,8),e.translate(-s.x,-s.y,-s.z)}}})};function M(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var S=function(){function t(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;M(this,t),this.radius=r,this.speed=n}return t.prototype.draw=function(t,r){var n=this.speed*r/2%(2*t.PI);t.beginShape(),t.strokeJoin(t.ROUND),t.strokeWeight(8);for(var e=0;e<2*t.TAU;e+=t.TAU/1e3){var a=10*e-5*n,o=Math.pow(Math.sin(e/2+n),9)*Math.sin(a),i=this.radius+10*o,s=t.cos(e)*i,u=t.sin(e)*i,c=t.lerpColor(t.color(h.primary),t.color(h.secondary),(Math.sin(a/2)+1)/2);t.stroke(c),t.vertex(s,u)}t.endShape(t.CLOSE)},t}(),k=function(){var t=0,r=[];return(0,e.jsx)(o(),{setup:function(n,e){t=0,r=[],n.createCanvas(500,500).parent(e),r.push(new S(s,1))},draw:function(n){t+=n.deltaTime/1e3;var e=n.color(h.dark[900]);n.background(e),n.translate(n.width/2,n.height/2),n.noFill(),n.stroke(255,200),n.strokeWeight(16),r.forEach((function(r){return r.draw(n,t)})),n.noStroke()}})};function A(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}var I=function(){function t(r,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;A(this,t),this.innerRadius=r,this.outerRadius=n,this.roughness=e,this.speed=a}var r=t.prototype;return r.calcR=function(t,r,n){var e=this.speed*n/2,a=t.map(t.cos(r+e),-1,1,0,this.roughness),o=t.map(t.sin(r+e),-1,1,0,this.roughness),i=this.speed*n/2;return(t.noise(a,o,i)+1)/2*t.map(t.sin(6*r+e),-1,1,this.innerRadius,this.outerRadius)},r.draw=function(t,r){t.beginShape(),t.strokeJoin(t.ROUND);for(var n=0;n<t.TAU;n+=t.TAU/1e3){var e=this.calcR(t,n,r),a=t.cos(n)*e,o=t.sin(n)*e;t.vertex(a,o)}t.endShape(t.CLOSE)},t}(),z=function(){function t(r){A(this,t),this.layers=[],this.layers=r}var r=t.prototype;return r.calcR=function(t,r,n){var e=this.layers.map((function(e){return e.calcR(t,r,n)}));return e.reduce((function(t,r){return t+r}))/e.length},r.draw=function(t,r){t.beginShape(),t.strokeJoin(t.ROUND);for(var n=0;n<t.TAU;n+=t.TAU/1e3){var e=this.calcR(t,n,r),a=t.cos(n)*e,o=t.sin(n)*e;t.vertex(a,o)}t.endShape(t.CLOSE)},t}(),P=function(){var t=0,r=[];return(0,e.jsx)(o(),{setup:function(t,n){t.createCanvas(500,500).parent(n),r.push(new I(150,225)),r.push(new I(150,225,1,-.5)),r.push(new z([new I(150,225),new I(200,225,1,.6)]))},draw:function(n){t+=n.deltaTime/1e3,n.clear(),n.translate(n.width/2,n.height/2),n.stroke(255,200),n.strokeWeight(2),r.forEach((function(r){return r.draw(n,t)})),n.fill("black"),n.noStroke()}})}},8010:function(t,r,n){function e(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function a(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"===typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=n(9808),i=n(5874),s=n(2502);t.exports={content:["./src/pages/**/*.{js,ts,jsx,tsx}","./src/components/**/*.{js,ts,jsx,tsx}"],darkMode:"class",theme:{extend:{fontFamily:{title:["Poppins"].concat(a(i.fontFamily.sans)),text:["Inter"].concat(a(i.fontFamily.sans))},colors:{primary:o.red[500],secondary:o.pink[500],dark:o.zinc}}},plugins:[n(4863),s((function(t){var r,n,e,a=t.matchUtilities;t.theme;a((e=function(t){return{gridTemplateColumns:"repeat(auto-fill, minmax(".concat(t,", 1fr))")}},(n="auto-fill-cols")in(r={})?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r),{values:i.spacing})}))]}}}]);