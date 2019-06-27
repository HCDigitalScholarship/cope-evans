# ujson minifies files by default
# The purpose of this file is to minify complete_letters.json because it's so large
import json
import ujson

f = open("complete_letters.json", "r")

dict = json.load(f)

with open("mini_letters.json", "w+") as newfile:
    #newfile.write(json_minify(dict));
    ujson.dump(dict, newfile)
