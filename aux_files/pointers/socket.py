#actually used this
import requests
f = open('pointers.txt','r')
out = open("letters.json","w+")

for word in f:
    for line in f:
        for word in line.split():
            cmd = 'http://165.106.6.76:81/dmwebservices/index.php?q=dmGetItemInfo/cope/' + word + '/json'
            response = requests.get(cmd)
            out.write(response.text + ',\n')


