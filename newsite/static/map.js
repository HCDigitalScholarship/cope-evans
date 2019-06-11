mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2phNzkwaGtyNDhtcjVjYm0yd2pmIn0.DWx8N5QUgoa9EezgnZmNbQ';
var map = new mapboxgl.Map({
    container: 'map', // HTML container id
    style: 'mapbox://styles/mapbox/streets-v9', // style URL
    center: [-21.9270884, 64.1436456], // starting position as [lng, lat]
    zoom: 13
});

var marker = new mapboxgl.Marker()
    .setLngLat([-21.9270884, 64.1436456])
    .addTo(map);
