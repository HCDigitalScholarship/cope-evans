# getting data about the letters.py file

import json

f = open('letters.json','r')

dict = json.load(f)

print(len(dict))
