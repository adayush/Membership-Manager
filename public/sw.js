if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(n[t])return;let c={};const r=e=>s(e,t),d={module:{uri:t},exports:c,require:r};n[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cb807e693842a29d7433127461945a2f"},{url:"/_next/static/RWwhZyeXIqCirKdn54pnR/_buildManifest.js",revision:"66a650a40453999ca40002ee32e3481e"},{url:"/_next/static/RWwhZyeXIqCirKdn54pnR/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/396-08fd650d6a9565bc.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/596-f67a4b6caa3b43cc.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/691-5fd1b4fcdf0642d9.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/749-15d35ecaea48e275.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/%5Bbranch%5D/added/page-e7ee01dbfd09d773.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/%5Bbranch%5D/expired/page-1941d97b46f3519d.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/%5Bbranch%5D/expiring/page-a1a62fdb7b326c37.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/%5Bbranch%5D/page-013785d6ec043630.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/layout-36d4687962d34897.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/login/page-6bee7916ca60fe14.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/page-3f00c67a34884072.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/search/page-4e9841aa5c2551fc.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/staff/%5Bid%5D/page-6182ad27523bf946.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/staff/new/page-f22713a356a25095.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/staff/page-b234925f1a19c98a.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/student/%5Breceipt%5D/edit/page-68a0d45963f9be0e.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/student/%5Breceipt%5D/page-baad30f2119fde38.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/student/layout-ee5995d0e8a0dff9.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/app/student/new/page-0a280511024b8d14.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/fd9d1056-186bb04d793e8055.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/main-31d03c31e9335aab.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/main-app-c1eb6a592a4bfc09.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/pages/_app-52924524f99094ab.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/pages/_error-c92d5c4bb2b49926.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-92a6dddb6d61b5a9.js",revision:"RWwhZyeXIqCirKdn54pnR"},{url:"/_next/static/css/806a467e82def304.css",revision:"806a467e82def304"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/icons/icon-192x192.png",revision:"5cd097bd9fd2fb976e3afa9df3804aa5"},{url:"/icons/icon-256x256.png",revision:"6ea8fd81eb22d18881964b94ff03fd7e"},{url:"/icons/icon-384x384.png",revision:"1f0e9a70d2260e54ea04b9acad2e2afa"},{url:"/icons/icon-512x512.png",revision:"54a28af470bb39e684f89237db5d27dc"},{url:"/images/editsmall.png",revision:"587d1380c1515b9d08876f3347c4e288"},{url:"/images/editsmally.png",revision:"a6782bbb311899faf937d257216f7012"},{url:"/images/google.png",revision:"bc69e0101521c74e6658b9661f301981"},{url:"/images/search.png",revision:"84ff337a83af56a4d2e498126d8ba059"},{url:"/images/space21-logo.png",revision:"b1e62b73dc1225666e1760b627430209"},{url:"/manifest.json",revision:"f71cb5acd74ad11e13a108e9c12cfa09"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:i})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
