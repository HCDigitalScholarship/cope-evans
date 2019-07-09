from objdict import ObjDict

def main():
    import json
    f =open('tiny_letters.json','r')
    dict = json.load(f)
    data = ObjDict()
    file = open('mappable_items.json', 'w', encoding = 'utf-8')
    print(len(dict))
    origins = []
    destinations = []
    for i in range(len(dict)):
        if isEmpty(dict[i]['place'])==False and isEmpty(dict[i]['place-coordinates'])==False:
            print(dict[i]['place'])
            print(dict[i]['place-coordinates'])
            origins.append(dict[i])
    for i in range(len(dict)):
        if isEmpty(dict[i]['destin']) == False and isEmpty(dict[i]['destin-coordinates']) == False:
            destinations.append(dict[i]);
    print(len(origins))
    print(len(destinations))
    data.origins = origins
    data.destinations = destinations
    
    json.dump(data, file)
    
def isEmpty(obj):    
    if obj and  obj!= '{}' and len(obj)!=0 and obj != None :
        return False
    else:
        return True

main()
    
