

mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2phNzkwaGtyNDhtcjVjYm0yd2\
pmIn0.DWx8N5QUgoa9EezgnZmNbQ';
var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630,40.007270],
    zoom: 5
});

let data = {};
function msg(){
    alert("Hello!");
}

function preload() {
    data = loadJSON(url);
   
}
console.log(data);
function setup() {
    createCanvas(640, 360);
    loadData();
}
function loadData() {
    console.log(data[0]);
}

