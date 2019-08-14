# used this file to find the length of the dictionary to make sure the data had the correct number of elements
# can be run using 'python test.py'

import json
f = open('old_collection_info.json','r')
dict = json.load(f)
# dict[0]['records'][1]['pointer']
records = dict[0]['records']
print(len(records))
