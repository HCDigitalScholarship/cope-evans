# test file inputs this way to find size and invalid inputs

import json
file_to_test = 'destin_coordinates.json'
f = open(file_to_test,'r')

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
