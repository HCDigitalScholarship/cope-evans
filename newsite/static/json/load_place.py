# purpose: load place data into the letters.json file.
# initially will test by loading into test file
# accessing elements in the json dictionary letters.json
# writing to the file letters...
# load data into python object, edit, then write to new file

import json

f =open('letters.json','r')
dict = json.load(f)
print(len(dict))
more_json = open('place_coords.json','r')
places = json.load(more_json)
print(len(places))
with open('update_letters.json','w', encoding='utf-8') as letters:
    letters.write('[')
    i = 0
    for place in places:
        elem = dict[i]
        try:
            elem.update({'place-coords' : place['geometry']['location']})
        except KeyError:
            elem.update({'place-coords' : {}})
        except TypeError:
            elem.update({'place-coords' : {}})
        json.dump(elem,letters,ensure_ascii=False, indent=2)
        letters.write(",")
        i = i + 1
    letters.write("]")

