const StaticRecetas = "Recetas-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/css/contacto.css",
    "/css/inicio.css",
    "/js/app.js",
    "/images/likibhbjn.png",
    "/bebidas.html",
    "/contacto.html",
    "/destacadas.html",
    "/platos-principales.html",
    "/postres.html"
    
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(StaticRecetas).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => { 
            return res || fetch(fetchEvent.request)
        })
    )
})