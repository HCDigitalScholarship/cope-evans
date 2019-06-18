
## Notes about the JSON files here

In letters.json, the 'destin' and 'place' attributes correspond to destination and origin respectively of the item in question. letters.json is a misnomer because this file also contains metadata concerning financial documents and other items which are not letters.

The new_coordinates.json file contains the coordinates of the 'place' or origin of the item. This file is associative to letters.json. When the 'place' attribute was empty, I appended a '{}' to new_coordinates.json. The 'message : forbidden' results from the queries seem to correspond to whenever the query (the attribute 'place') contained a ';' (semicolon).

I believe this was the mapbox API protecting against SQL injections.
