# use this file to take contentdm server query and get pointers for each particular item

import json

f = open('collection_info.json','r')
dict = json.load(f)
print(len(dict))

with open('pointers.txt','w', encoding = 'utf-8') as out:
    for item in dict:
        print(item)
        json.dump(item['pointer'], out, ensure_ascii = False, indent=2)
        letters.write("\n")


        
    
