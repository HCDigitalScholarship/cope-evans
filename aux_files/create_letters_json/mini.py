import json
#from json_minify import json_minify
import ujson

f = open("complete_letters.json", "r")

dict = json.load(f)

with open("mini_letters.json", "w+") as newfile:
    #newfile.write(json_minify(dict));
    ujson.dump(dict, newfile)
