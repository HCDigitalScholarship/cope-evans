from objdict import ObjDict

def main():
    import json
    f =open('tiny_letters.json','r')
    dict = json.load(f)
    data = ObjDict()
    file = open('mappable_items.json', 'w', encoding = 'utf-8')
    origins = []
    destinations = []
    for i in range(len(dict)):
        if isEmpty(dict[i]['place'])==False:
           origins.append(dict[i])
    for i in range(len(dict)):
        if isEmpty(dict[i]['destin']) == False:
            destinations.append(dict[i]);
    print(len(origins))
    print(len(destinations))
    data.origins = origins
    data.destinations = destinations
    
    json.dump(data, file)
    
def isEmpty(obj):
    if obj:
        return True
    else:
        return False

main()
    
