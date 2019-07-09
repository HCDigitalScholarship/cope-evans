

import json
def main():
    f = open('mappable_items.json', 'r')
    dict = json.load(f)
    print(len(dict['origins']))
    print(len(dict['destinations']))
    for first_key in dict.keys(): # [origins, destinations]
        for j in range(len(dict[first_key])):
            try:
                dict[first_key][j].pop('relati')
            except:
                print("ok")
            try:
                dict[first_key][j].pop('notes')
            except:
                print("ok")
            try:
                dict[first_key][j].pop('langua')
            except:
                print("ok")
            try:
                dict[first_key][j].pop('fullrs')
            except:
                print("ok")
            for key in dict[first_key][j].copy().keys():
                if(isEmpty(dict[first_key][j][key])):
                    dict[first_key][j].pop(key)

    file = open('smallest.json','w+')
    json.dump(dict, file)
                
def isEmpty(obj):
    if obj:
        return False
    else:
        return True

main()
