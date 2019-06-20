

import json
import ujson

f = open("mini_letters.json", "r")
dict = json.load(f)
print(len(dict))

for i in range(len(dict)):
    element = dict[i]
    if bool(element['place'])==False:
        del dict[i]
        print(dict[i])
    else:
        element.pop('dmaccess')
        element.pop('resolu')
        element.pop('cdmisnewspaper')
        element.pop('source')
        element.pop('dmmodified')
        element.pop('bitdep')
        element.pop('depart')
        element.pop('scannb')
        element.pop('modssh')
        element.pop('cdmfilesize')
        element.pop('dmoclcno')
        element.pop('collec')
        element.pop('additi')
        element.pop('cdmfilesizeformatted')
        element.pop('displa')
        element.pop('waterm')
        element.pop('emboss')
        element.pop('find')
        element.pop('scanna')
        element.pop('cdmprintpdf')
        element.pop('instit')
        element.pop('uniden')
        element.pop('owning')
        element.pop('dmimage')
        element.pop('rights')
        element.pop('qualit')
        element.pop('cdmhasocr')
    
with open("tiny_letters.json","w+") as newfile:
    ujson.dump(dict, newfile)
