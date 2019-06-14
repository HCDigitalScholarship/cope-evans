import json
import googlemaps
from datetime import datetime

gmaps = googlemaps.Client(key = 'AIzaSyCcgY4MwelgM_TGBsyELyHxkDQ30GNnWAM')
letters = open('letters.json','r')
dict = json.load(letters)
with open('destin_coords.json', 'w') as f:
    f.write("[")
    for elem in dict:
        x = json.dumps(elem['destin'])
        if x!='{}':
            geocode_result = gmaps.geocode(x)
            for item in geocode_result:
                f.write("%s" % item)
            f.write(",")
        else:
            f.write("{},")
    f.write("]")

