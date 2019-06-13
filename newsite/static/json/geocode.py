import json
import requests

with open('letters.json', 'r') as f:
    dict  = json.load(f) # pretty sure it will act as a dictionary

f = open('coordinates.json', 'w')

for elem in dict:
    x = json.dumps(elem['place'])
    if x!='{}':
        url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ x + ".json?access_token=pk.eyJ1IjoiYW1hcnlhbSIsImEiOiJjandqY2kxMTgwajRyNDlwN2N0MzJpd2FmIn0.BYTMqLbeeAG6YGSJjS1gZg"
        f.write(requests.get(url).text)

f.close()
        
