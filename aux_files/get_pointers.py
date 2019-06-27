# use this file to take contentdm server query and get pointers for each particular item

import json

f = open('query_morris_evans.json','r')
dict = json.load(f)
print(dict['records'][0])
#[1]['pointer']
records = dict['records']
print(len(records))
with open('morris_pointers.txt','w', encoding = 'utf-8') as out:
    for item in records:
        print(item)
        print("\n")
        json.dump(item['pointer'], out, ensure_ascii = False, indent=2)
        out.write("\n")


        
    
