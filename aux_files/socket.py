#actually used this
import requests
#from requests import *
f = open('pointers.txt','r')
out = open("letters.json","w+")
out.write("[")
for word in f:
    for line in f:
        for word in line.split():
            cmd = 'http://165.106.6.76:81/dmwebservices/index.php?q=dmGetItemInfo/cope/' + word + '/json'
            response = requests.get(cmd)
            out.write(response.text + ',\n')
out.write("]") # update: now only need to worry about final ','
# added opening and closing brackets to the json file myself, also remove final ','
