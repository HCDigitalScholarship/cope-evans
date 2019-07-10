mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg';

var mappie = new mapboxgl.Map({
  container: 'mapdiv',
  style: 'mapbox://styles/amaryam/cjwjclh340t991cpazyi2ruba',
  center: [-41.009088, 37.639983],
  zoom: 2
});

var letters = [];
var place_points = [];
var destin_points = [];

function preload() {
  letters = loadJSON(letters_url); // tiny_letters == smallest
  console.log(letters.length);
}

function setup() {
  mappie.on('load', function() {
    var parameter = 'place-coordinates';
    var layer_id = 'place'
    var my_color = '#00CED1'
    var baseurl = 'http://triptych.brynmawr.edu/cdm/compoundobject/collection/cope/id/'
    var i;
      for (i = 0; i < 3555; i++) {
      place_points.push(letters['origins'][i][parameter]);
      }
      console.log(place_points)
    const place_coordinates = place_points.map((point, index) => ({
      type: 'Feature',
      properties: {
        description: 'Title: ' + (letters['origins'][index] != undefined && 'title' in letters['origins'][index] ? letters['origins'][index]['title'] : 'Untitled') + '<br><a href=' + (letters['origins'][index] != undefined && 'dmrecord' in letters['origins'][index] ? baseurl + letters['origins'][index]['dmrecord'] : '#') + ' target=newtab >See this item in Triptych</a>' + '<br>Creation: ' + (letters['origins'][index] != undefined && 'creato' in letters['origins'][index] ? letters['origins'][index]['creato'] : 'N/A') + '<br>Origin'
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
      // destinations
    for (i = 0; i < 1256; i++) {
      destin_points.push(letters['destinations'][i][parameter_2]);
    }

    const coordinates = destin_points.map((point, index) => ({
      type: 'Feature',
      properties: {
        description: 'Title: ' + (letters['destinations'][index] != undefined && 'title' in letters['destinations'][index] ? letters['destinations'][index]['title'] : 'Untitled') + '<br><a href=' + (letters['destinations'][index] != undefined && 'dmrecord' in letters['destinations'][index] ? baseurl + letters['destinations'][index]['dmrecord'] : '#') + ' target=newtab >See this item in Triptych</a>' + '<br>Creation: ' + (letters['destinations'][index] != undefined && 'creato' in letters['destinations'][index] ? letters['destinations'][index]['creato'] : 'N/A') + '<br>Destination'
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
}
