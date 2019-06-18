# purpose: load place data into the letters.json file.
# initially will test by loading into test file
# accessing elements in the json dictionary letters.json
# writing to the file letters...
# load data into python object, edit, then write to new file

import json

f =open('update_letters.json','r')
dict = json.load(f)
print(len(dict))
more_json = open('destin_coordinates.json','r')
destinations = json.load(more_json)
print(len(destinations))
with open('complete_letters.json','w', encoding='utf-8') as letters:
    letters.write('[')
    i = 0
    for destin in destinations:
        elem = dict[i]
        try:
            elem.update({'destin-coordinates' : destin['features'][0]['geometry']['coordinates']})
        except IndexError:
            elem.update({'destin-coordinates' : {}})
        except KeyError:
            elem.update({'destin-coordinates' : {}})
        except TypeError:
            elem.update({'destin-coordinates' : {}})
        json.dump(elem,letters,ensure_ascii=False, indent=2)
        letters.write(",")
        i = i + 1
    letters.write("]")

