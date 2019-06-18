import json

f = open('place_coordinates.json','r')

dict = json.load(f)

print(dict[255]['features'][0]['geometry']['coordinates'])
