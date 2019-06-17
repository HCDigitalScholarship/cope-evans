# this was part of what helped me figure out the query error
import json
f =open('letters.json','r')
dict = json.load(f)
print(len(dict))
more_json = open('place_coords.json','r')
places = json.load(more_json)
print(len(places))

for place in places:
    print(place)
