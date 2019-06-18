
## Notes about the JSON files here

In letters.json, the 'destin' and 'place' attributes correspond to destination and origin respectively of the item in question. letters.json is a misnomer because this file also contains metadata concerning financial documents and other items which are not letters.

The place_coordinates.json file contains the coordinates of the 'place' or origin of the item. The destin_coordinates.json file contains the coordinates of the 'destin' or destination of the item. These files are associative to letters.json. When the 'place' attribute was empty, I appended a '{}' to new_coordinates.json. The 'message : forbidden' results from the queries seem to correspond to whenever the query (the attribute 'place') contained a ';' (semicolon).

I believe this was the mapbox API protecting against SQL injections.

### Statistics concerning place_coordinates.json
* 5008 total items
* Number of empty place attributes: 1253
* Number of forbidden place requests: 199


### Statistics concerning destin_coordinates.json
* 5008 total items
* Number of empty place attributes: 3666
* Number of forbidden place requests: 86

(generated using testing_dict.py -- change which file you open in the beginning to the file you would like stats for)

### Suggestion to librarians
Don't use semicolons in your metadata if you're considering a mass-query. It might not work well with certain APIs. It seems mapbox did not like it.
