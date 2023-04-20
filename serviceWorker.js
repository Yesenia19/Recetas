const StaticRecetas = "Recetas-site-v1"

const assets = [
    "/Recetas/",
    "/Recetas/index.html",
    "/Recetas/css/styles.css",
    "/Recetas/css/contacto.css",
    "/Recetas/css/inicio.css",
    "/Recetas/js/app.js",
    "/Recetas/images/likibhbjn.png",
    "/Recetas/bebidas.html",
    "/Recetas/contacto.html",
    "/Recetas/destacadas.html",
    "/Recetas/platos-principales.html",
    "/Recetas/postres.html"
    
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