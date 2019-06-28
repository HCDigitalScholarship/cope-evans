
mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630, 40.007270],
    zoom: 4
});

var letters = [];
var place_points = [];
function preload() {
    letters = loadJSON(letters_url);
    console.log(letters.length);
}

function setup() {
    mappie.on('load', function () {
	loadPoints('place-coordinates', 'place', '#00CED1');
	loadPoints('destin-coordinates', 'destin', '#FF0000');
    });
}

function loadPoints(parameter, layer_id, my_color) {
    console.log(letters.length);
    var baseurl = 'http://triptych.brynmawr.edu/cdm/compoundobject/collection/cope/id/'
    var i;
    for (i = 0; i < 5008; i++) {
	place_points.push(letters[i][parameter]);
    }

    const coordinates = place_points.map((point, index)  => ({
	type: 'Feature',
	properties: { 
	    description: 'Title: ' + ( letters[index]!=undefined && 'title' in letters[index]?  letters[index]['title'] : 'Untitled') + '\nURL: ' +(letters[index]!=undefined && 'dmrecord' in letters[index]?  baseurl + letters[index]['dmrecord']: 'N/A') +'\nCreation: ' + (letters[index]!=undefined && 'creato' in letters[index]? letters[index]['creato']:'N/A') + '\nOrigin or Destination: ' + (layer_id=='place'? 'Origin' : 'destination')
	},
	geometry: {
	    type: 'Point',
	    coordinates: point
	}
    }));

    mappie.addLayer({
	'id': layer_id,
	'type': 'circle',
	'paint': {
	    'circle-color': my_color,
	},
	'source': {
	    'type': 'geojson',
	    'data': {
		'type': 'FeatureCollection',
		'features': coordinates
	    }
	}
    });
    
    mappie.on('click', layer_id, function (e) {
	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;

	// Ensure that if the map is zoomed out such that multiple
	// copies of the feature are visible, the popup appears
	// over the copy being pointed to.
	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}

	new mapboxgl.Popup()
	    .setLngLat(coordinates)
	    .setHTML(description)
	    .addTo(mappie);
    });
}

