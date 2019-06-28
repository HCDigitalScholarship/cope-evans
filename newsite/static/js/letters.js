
mapboxgl.accessToken  = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
    container: 'mapdiv',
    style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
    center: [ -75.317630, 40.007270],
    zoom: 4
});

var letters = [];
var place_points = [];
var destin_points = [];
function preload() {
    letters = loadJSON(letters_url);
    console.log(letters.length);
}

function setup() {
    mappie.on('load', function () {
	//loadPoints('place-coordinates', 'place', '#00CED1');
	//loadPoints('destin-coordinates', 'destin', '#FF0000');
	    var parameter = 'place-coordinates';
	    var layer_id = 'place'
	    var my_color = '#00CED1'
	    var baseurl = 'http://triptych.brynmawr.edu/cdm/compoundobject/collection/cope/id/'
	    var i;
	    for (i = 0; i < 5008; i++) {
		    place_points.push(letters[i][parameter]);
	    }
	    const place_coordinates = place_points.map((point, index)  => ({
		    type: 'Feature',
		    properties: { 
			    description: 'Title: ' + ( letters[index]!=undefined && 'title' in letters[index]?  letters[index]['title'] : 'Untitled') + '\n<a href='+(letters[index]!=undefined && 'dmrecord' in letters[index]?  baseurl + letters[index]['dmrecord']: '#')+ '>Triptych</a>' +'\nCreation: ' + (letters[index]!=undefined && 'creato' in letters[index]? letters[index]['creato']:'N/A') + '\nOrigin or Destination: Origin' 
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
				    'features': place_coordinates
			    }
		    }
	    });
	    mappie.on('click', layer_id, function (e) {
		    var coordinates = e.features[0].geometry.coordinates.slice();
		    var description = e.features[0].properties.description;
		    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		    }

	new mapboxgl.Popup()
	    .setLngLat(coordinates)
	    .setHTML(description)
	    .addTo(mappie);
    });
	    
	    parameter_2 = 'destin-coordinates';
	    layer_id_2 = 'destin';
	    my_color_2 = '#FF0000';
	    for (i = 0; i < 5008; i++) {
	destin_points.push(letters[i][parameter_2]);
    }

    const coordinates = destin_points.map((point, index)  => ({
	type: 'Feature',
	properties: { 
	    description: 'Title: ' + ( letters[index]!=undefined && 'title' in letters[index]?  letters[index]['title'] : 'Untitled') + '\n<a href='+(letters[index]!=undefined && 'dmrecord' in letters[index]?  baseurl + letters[index]['dmrecord']: '#')+ '>Triptych</a>' +'\nCreation: ' + (letters[index]!=undefined && 'creato' in letters[index]? letters[index]['creato']:'N/A') + '\nOrigin or Destination: destination'
	},
	geometry: {
	    type: 'Point',
	    coordinates: point
	}
    }));

    mappie.addLayer({
	'id': layer_id_2,
	'type': 'circle',
	'paint': {
	    'circle-color': my_color_2,
	},
	'source': {
	    'type': 'geojson',
	    'data': {
		'type': 'FeatureCollection',
		'features': coordinates
	    }
	}
    });
    
    mappie.on('click', layer_id_2, function (e) {
	var coordinates = e.features[0].geometry.coordinates.slice();
	var description = e.features[0].properties.description;

	while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
	    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
	}

	new mapboxgl.Popup()
	    .setLngLat(coordinates)
	    .setHTML(description)
	    .addTo(mappie);
    });
	    
	    
	    
    });
}

/*function loadPoints(parameter, layer_id, my_color) {
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
}*/

