
// hashmap for word occurrence
morris_data = [];
//console.log(morris_data[0]);
var words = new Map();
var length = 624;
var actual_words = []; // will contain 
var occurrences = [];
function preload() {
    morris_data = loadJSON(morris_url);
}
function setup() {
    console.log(morris_data[0]);
    //console.log(morris_data.length);
//    var temp;
    for(var i=0; i < length; i++) {
	// handle key error
	// split by semicolon
	try {
	    
	    if(!words.has(morris_data[i]['subjec'])) {
		words.set(morris_data[i]['subjec'], 1);
	    }
	    else if (!isEmpty(morris_data[i]['subjec'])) {
		words.set(morris_data[i]['subjec'], words.get(morris_data[i]['subjec'])+1);
	    }
	}
	catch(TypeError) {
	    continue;
	}
	}
    }
	
    console.log(words);

    for(var j = 0; j < length; j++) {
	try {
	    actual_words.push(morris_data[i]['subjec']);
	    occurrences.push(words.get(morris_data[i]['subjec']));
	}
	catch {
	    continue;
	}
    }
    console.log(actual_words);
	
    new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
    data: {
	labels: actual_words,
      datasets: [
        {
          label: "Number of appearances",
          //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: occurrences,
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Subject tags in J. Morris Evans documents (mainly letters)'
      }
    }
    });


    function isEmpty(obj) {
	for(var key in obj) {
	    if(obj.hasOwnProperty(key))
		return false;
	    }
	    return true;
    }
