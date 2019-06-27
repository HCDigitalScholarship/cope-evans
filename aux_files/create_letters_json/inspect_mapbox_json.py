# I was just experimenting and trying to figure out how the mapbox JSON was formatted
import json
f = open('place_coordinates.json','r')
dict = json.load(f)
print(dict[255]['features'][0]['geometry']['coordinates'])
