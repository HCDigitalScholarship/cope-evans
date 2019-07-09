/*mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
  container: 'mapdiv',
  style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
  center: [-41.009088, 37.639983],
  zoom: 2
});*/

var letters = [];
var place_points = [];
var destin_points = [];
//var filtered_place = [];
//var filtered_destin = [];
// need to send in letters[i][property]!
function isEmpty(obj) {
    for(var key in obj) {
	if(obj.hasOwnProperty(key))
	    return false;
    }
    return true;
}

function preload() {
  letters = loadJSON(letters_url);
  console.log(letters.length);
}

function setup() {
//    mappie.on('load', function() {
	var parameter = 'place-coordinates';
	var layer_id = 'place'
	var my_color = '#00CED1'
	var baseurl = 'http://triptych.brynmawr.edu/cdm/compoundobject/collection/cope/id/'
	var i;
	for (i = 0; i < 5008; i++) {
	    if(!isEmpty(letters[i][parameter])) {
		place_points.push(letters[i]);
	    }
	}
	var parameter_2 = 'destin-coordinates';
	var layer_id_2 = 'destin';
	var my_color_2 = '#FF0000';
	for (i = 0; i < 5008; i++) {
	    if(!isEmpty(letters[i][parameter_2])) {
		destin_points.push(letters[i]);
	    }
	}
    var info = {};
	//console.log(place_points);
    //console.log(destin_points);
    info['place-points'] = place_points;
    info['destin-points'] = destin_points;
    var str = JSON.stringify(info);
    var fs = require('fs');
    fs.writeFile('mappable_items.json', str, 'utf8', callback);
  //  });
}
	   
/*    const place_coordinates = place_points.map((point, index) => ({
      type: 'Feature',
      properties: {
        description: 'Title: ' + (letters[index] != undefined && 'title' in letters[index] ? letters[index]['title'] : 'Untitled') + '<br><a href=' + (letters[index] != undefined && 'dmrecord' in letters[index] ? baseurl + letters[index]['dmrecord'] : '#') + ' target=newtab >See this item in Triptych</a>' + '<br>Creation: ' + (letters[index] != undefined && 'creato' in letters[index] ? letters[index]['creato'] : 'N/A') + '<br>Origin'
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
    mappie.on('click', layer_id, function(e) {
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

    const coordinates = destin_points.map((point, index) => ({
      type: 'Feature',
      properties: {
        description: 'Title: ' + (letters[index] != undefined && 'title' in letters[index] ? letters[index]['title'] : 'Untitled') + '<br><a href=' + (letters[index] != undefined && 'dmrecord' in letters[index] ? baseurl + letters[index]['dmrecord'] : '#') + ' target=newtab >See this item in Triptych</a>' + '<br>Creation: ' + (letters[index] != undefined && 'creato' in letters[index] ? letters[index]['creato'] : 'N/A') + '<br>Destination'
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

    mappie.on('click', layer_id_2, function(e) {
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
}*/
