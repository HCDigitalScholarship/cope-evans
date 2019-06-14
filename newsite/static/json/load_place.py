# purpose: load place data into the letters.json file.
# initially will test by loading into test file
# accessing elements in the json dictionary letters.json
# writing to the file letters...
# load data into python object, edit, then write to new file

import json

f =open('letters.json','r')
dict = json.load(f)
more_json = open('place_coords.json','r')
places = json.load(more_json)
with open('update_letters.json','w') as letters:
    print(type(places))
    for elem in dict:
        for place in places:
            try:
                elem.update({'place-coords' : place['geometry']['location']})
                print(elem)
                #break
            except KeyError:
                elem.update({'place-coords' : {}})
            except TypeError:
                elem.update({'place-coords' : {}})
        for item in elem:
            letters.write("%s" % item)
        break
        letters.write(",")
    letters.write("]")

