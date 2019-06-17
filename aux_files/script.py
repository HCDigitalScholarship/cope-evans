# given pointers.txt
# queries the server
import socket
f = open('pointers.txt','r')
mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('165.106.6.76', 81))
for word in f:
    for line in f:
        for word in line.split():
            cmd = 'GET 165.106.6.76:81/dmwebservices/index.php?q=dmGetItemInfo/cope/' + word + '/json'
            cmd = cmd.encode()
            print(cmd)
            mysock.send(cmd)
            while True:
                data = mysock.recv(512)
                if len(data) < 1:
                    break
                print(data.decode(),end='')
mysock.close()
