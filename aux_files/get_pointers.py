# use this file to take contentdm server query and get pointers for each particular item

import json

f = open('collection_info.json','r')
dict = json.load(f)
# dict[0]['records'][1]['pointer']
records = dict[0]['records']
# print(len(records))
with open('pointers.txt','w', encoding = 'utf-8') as out:
    for item in records:
        print(item)
        print("\n")
        json.dump(item['pointer'], out, ensure_ascii = False, indent=2)
        out.write("\n")


        
    
