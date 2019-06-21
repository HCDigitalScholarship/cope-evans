# purpose: load place data into the letters.json file.
# initially will test by loading into test file
# accessing elements in the json dictionary letters.json
# writing to the file letters...
# load data into python object, edit, then write to new file

import json

f =open('update_letters.json','r')
dict = json.load(f)
more_json = open('destin_coords.json','r')
places = json.load(more_json)
with open('complete_coords.json','w') as letters:
    letters.write('[')
    for elem in dict:
        for place in places:
            try:
                elem.update({'destin-coords' : place['geometry']['location']})
            except KeyError:
                elem.update({'destin-coords' : {}})
            except TypeError:
                elem.update({'destin-coords' : {}})
        json.dump(elem,letters)
        letters.write(",")
    letters.write("]")

