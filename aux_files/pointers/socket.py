#actually used this
# original code missed the first pointer for some reason...may have to manually add
# will manually add first item.. because requests is not nice!
# also add 'null' json '{}' where applicable to preserve associativity
import requests
import os
f = open('pointers.txt','r')
out = open("letters.json","w+",encoding='utf-8')
out.write('[')
for line in f:
    for word in line.split():
        print (word)
        url = 'http://165.106.6.76:81/dmwebservices/index.php?q=dmGetItemInfo/cope/' + word + '/json'
        response = requests.get(url)
        json.dump(response.json(),out, ensure_ascii = False, indent = 2)
        #out.write(response.text + ',\n')
out.seek(0, os.SEEK_END)
out.truncate()
out.write(']')

