!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";!function(){function e(e){var t=r.getAll(),n=document.getElementById("calculated-area");if(0<t.features.length){var o=turf.area(t),a=Math.round(100*o)/100;n.innerHTML="<p><strong>"+a+"</strong></p> <p>square meters</p>"}else n.innerHTML="","draw.delete"!==e.type&&alert("Use the draw tools to draw a polygon!")}mapboxgl.accessToken="pk.eyJ1IjoiY2hyaXNtMTIzIiwiYSI6ImNqaXoxd204bzAyaDMzcG1tb2RiYjdscnQifQ.6pE7d-kLEjSdr5g-5a0PjA";var t=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/satellite-v9",center:[-91.874,42.76],zoom:12}),r=new MapboxDraw({displayControlsDefault:!1,controls:{polygon:!0,trash:!0}});t.addControl(r),t.on("draw.create",e),t.on("draw.delete",e),t.on("draw.update",e)}()}]);
//# sourceMappingURL=app.bundle.js.map