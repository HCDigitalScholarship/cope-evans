# code was run from the shell
import json
import googlemaps
from datetime import datetime

#gmaps = googlemaps.Client(key = 'AIzaSyCcgY4MwelgM_TGBsyELyHxkDQ30GNnWAM')
# first do place coordinates
letters = open('letters.json','r')
dict = json.load(letters)
with open('destin_coords.json', 'w') as f:
    f.write("[")
    for elem in dict:
        x = json.dumps(elem['destin'])
        if x!='{}':
#            geocode_result = gmaps.geocode(x) # geocode_result is a list
#            for item in geocode_result:
#                f.write("%s" % item)
            print("Blah blah")
            f.write(",")
        else:
            f.write("{},")
    f.write("]")

# did not use this code:
# now do destin coordinates
with open('letters.json', 'r') as f:
    dict = json.load(f)
    f = open('destin_coords.json', 'w')
    for elem in dict:
        x = json.dumps(elem['place'])
        if x!='{}':
            geocode_result = gmaps.geocode(x) # geocode_result is a list
            for item in geocode_result:
                f.write("%s" % item)
                f.write(",")
        else:
            f.write("{},")
        f.write("]")
