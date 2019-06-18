# trying to create a nice dataset for mapbos...will we then exploit associativity??
# this whole process is a bit messy
# could try to add markers... but I'm not certain of how to do that en masse. Hopefully that's a possibility

import json

f = open('place_coordinates.json','r')
places = json.load(f)
for place in places:
    try:
        print(place['features'])
    except KeyError:
        continue
    except IndexError:
        print("Index Error")
        continue
