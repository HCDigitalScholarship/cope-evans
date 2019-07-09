

import json
def main():
    f = open('mappable_items.json', 'r')
    dict = json.load(f)
#    print(len(dict))
    #print(dict)
    for first_key in dict.keys():
        for j in range(len(dict[first_key])):
            for elem in list(dict[first_key][j]):
                if(elem):
                    dict[first_key][j].pop(elem)

    file = open('smallest.json','w+')
    json.dump(dict, file)
                
def isEmpty(obj):
    if obj:
        return True
    else:
        return False

main()
