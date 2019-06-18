# testing geocode request

import json
import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key = 'AIzaSyCcgY4MwelgM_TGBsyELyHxkDQ30GNnWAM')

with open('letters.json', 'r') as f:
    dict = json.load(f)
    f = open('coordinates.json', 'w')
    for elem in dict:
        x = json.dumps(elem['place'])
        if x!='{}':
            geocode_result = gmaps.geocode(x)
            print(geocode_result)
            break