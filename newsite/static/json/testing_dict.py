# test file inputs this way

import json

f = open('destin_coordinates.json','r')

dict = json.load(f)

print(len(dict))

empty = 0
forbidden = 0
for item in dict:
    if len(item) == 0:
        empty = empty + 1
    else:
        try:
            if item['message']:
                forbidden = forbidden + 1
        except KeyError:
            continue
            
print("Number of empty 'place' attributes is: " + str(empty))
print("Number of forbidden 'place' requests is: " + str(forbidden))
