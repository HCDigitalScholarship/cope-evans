import requests
import json
f = open('morris_pointers.txt','r')
out = open("morris_data.json","w+",encoding='utf-8')
out.write('[')
for line in f:
    for word in line.split():
        print (word)
        url = 'http://165.106.6.76:81/dmwebservices/index.php?q=dmGetItemInfo/cope/' + word + '/json'
        response = requests.get(url)
        json.dump(response.json(),out)
