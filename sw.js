const C='ft1',L=['https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js','https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html',...L]))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);
 if(e.request.method!='GET'||!(u.origin==location.origin||u.host=='cdn.jsdelivr.net'))return;
 e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
