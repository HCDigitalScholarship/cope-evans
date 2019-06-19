/*
mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630, 40.007270],
    zoom: 4
});*/
// creating a new array probably isn't the best way to do this, but I just want to see if this method works
// Note: I probably do not have to load the whole JSON file for simpler visualizations. I do if I want the other metadata.

var letters = [];
var place_points = [];
console.log(place_points);
function preload() {
    letters = loadJSON(letters_url);    
}

function setup() {    
    var i;
    for (i = 0; i < letters.length; i++) {
	console.log("Hellooo");
	console.log(letters[i]['place-coordinates']);
	//place_points.push(letters[i]['place-coordinates']);
	//console.log("hi");
	//console.log(place_points[i]);
	break;
    }
    //loadData();
}

/*function loadData() {
    console.log(letters[0]['place-coordinates']);
}*/
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
