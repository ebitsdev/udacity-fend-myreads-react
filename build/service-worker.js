"use strict";var precacheConfig=[["/index.html","5d89f53f6b55a1a73395c14d9c5a5cad"],["/static/css/main.a382e8ca.css","9cac70d67b39cae5fd4248cc89e7bb99"],["/static/js/main.adeb5041.js","8f8d91481a6ecb653a574f2567fce8cd"],["/static/media/add.bb9363b8.svg","bb9363b86b02777d23523851826414e0"],["/static/media/arrow-back.3687aa98.svg","3687aa988bec28f17ae39153db1646c3"],["/static/media/arrow-drop-down.78c6f53b.svg","78c6f53b2342643639fe1cbaf171bf47"],["/static/media/roboto-condensed-v16-latin-700.1340bba6.ttf","1340bba6dad1d81e767e078b94db2fc8"],["/static/media/roboto-condensed-v16-latin-700.2f32c18a.eot","2f32c18a5cdee339bf353603cd5092d3"],["/static/media/roboto-condensed-v16-latin-700.587ed449.svg","587ed44908df84877c5a7f668eb1dfa1"],["/static/media/roboto-condensed-v16-latin-700.bf9fec98.woff","bf9fec987ff2e712826d1da62c84d86c"],["/static/media/roboto-condensed-v16-latin-700.c074f8ef.woff2","c074f8ef4aea2b67fa0ae380041dacdf"],["/static/media/roboto-condensed-v16-latin-regular.587de8ec.woff2","587de8ec039052f50e69c9654439b991"],["/static/media/roboto-condensed-v16-latin-regular.6da41a0d.woff","6da41a0de9bcf1627a01686cb1cd0d31"],["/static/media/roboto-condensed-v16-latin-regular.8cb983f9.svg","8cb983f9db2dc3cf43e7879513126a5c"],["/static/media/roboto-condensed-v16-latin-regular.b17350f6.ttf","b17350f61752fa663a53ca9759b7aa54"],["/static/media/roboto-condensed-v16-latin-regular.f1fd7015.eot","f1fd7015cb90736dbcabb1377cc6ddb2"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});