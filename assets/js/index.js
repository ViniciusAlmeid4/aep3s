var map = L.map("map", {
    zoomControl: false, // disable default position
}).setView([-23.4255, -51.944], 15);

map.on('popupclose', function() {
    document.querySelector(".send-review-icon").classList.add("invisible");
});

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a> contributors',
    maxZoom: 19,
}).addTo(map);

L.control.zoom({
    position: "bottomleft", // or 'bottomright', 'topleft', 'bottomleft'
}).addTo(map);
