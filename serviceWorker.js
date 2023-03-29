const staticMonedas = "Recetas-site-v1"

const assets = [
    "/",
    "/index.html",
    "/css/styles.css",
    "/js/app.js",
    "/images/icono.png",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMonedas).then(cache => {
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