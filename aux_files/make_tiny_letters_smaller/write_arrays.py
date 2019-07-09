from objdict import ObjDict

def main():
    import json
    f =open('tiny_letters.json','r')
    dict = json.load(f)
    data = ObjDict()
    data.origins = {}
    file = open('mappable_items.json', 'w', encoding = 'utf-8')
    origins = []
    destinations = []
    for i in range(len(dict)):
        if isEmpty(dict[i]['place'])==False:
           origins.append(dict[i])
    for i in range(len(dict)):
        if isEmpty(dict[i]['destin']) == False:
            destinations.append(dict[i]);
    data.origins = origins
    data.destinations = destinations
    info = data.dumps()
    json.dump(info, file)
    
def isEmpty(obj):
    if obj:
        return True
    else:
        return False

main()
    
