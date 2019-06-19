
mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630, 40.007270],
    zoom: 4
});

var letters;
var place_points = [];
console.log(place_points);
function preload() {
    letters = loadJSON(letters_url);    
}

function setup() {
    loadPoints('place-coordinates');
    loadPoints('destin-coordinates');
}

function loadPoints(parameter) {
    var i;
    for (i = 0; i < 300; i++) {
	place_points.push(letters[i][parameter]);
    }

    const coordinates = place_points.map(point  => ({
	type: 'Feature',
	geometry: {
	    type: 'Point',
	    coordinates: point
	}
    }));

    mappie.addLayer({
	id: 'place',
	type: 'circle',
	source: {
	    type: 'geojson',
	    data: {
		type: 'FeatureCollection',
		features: coordinates
	    }
	}
    });
}
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
