

import json
import ujson

f = open("mini_letters.json", "r")
dict = json.load(f)

for element in dict:
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
    
with open("tiny_letters.json","w+") as newfile:
    ujson.dump(dict, newfile)
