
mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630, 40.007270],
    zoom: 4
});

let data = {};

function preload() {
    data = loadJSON(url);
    letters = loadJSON(letters_url);
    // just use a relative path (there was a problem with that -- but actually I had already found a 'hacky' solution)
//    hmmm = loadJSON('/geocoding/v5/mapbox.places/haverford.json');
}

function setup() {
    //createCanvas(640, 360);
    // how is the image centered
    loadData();
}

function loadData() {
    console.log(data[0]);
    console.log(letters[0]);
  //  console.log(hmmm);
}
// this will only work in static situations...maybe use for animation
// reference Daniel Shiffman, Visualizing Earthquakes with p5
// Web Mercator formulas
function mercX(lon) {
    lon = radians(lon);
    var a = (512/(2*PI)) * pow(2,zoom);
    var b = lon + PI;
    return a * b;
}

function mercY(lat) {
    lat = radians(lat);
    var a = (512/(2*PI)) * pow(2,zoom);
    var b = tan(PI/4 + lat/2);
    var c = PI - log(b); // default is ln()
    return a * c;
}
