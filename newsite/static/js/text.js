// hashmap for word occurrence
morris_data = [];
var words = new Map();
var length = 624;
var actual_words = []; // will contain
var occurrences = [];
function preload() {
    morris_data = loadJSON(morris_url);
}

var spl = []; // for word splitting
function setup() {
    console.log(morris_data[0]);
 
    for(var i=0; i < length; i++) {
	// handle key error
    // split by semicolon
        if (!isEmpty(morris_data[i]['subjec'])) {

	try {
        spl = morris_data[0]['subjec'].split(";");
        for(var v = 0; v < spl.length; v++) {
            if (!words.has(spl[i])) {
                words.set(spl[i], 1);
            }
            else {
                words.set(spl[i], words.get(spl[i]) + 1);
            }
        }
	}
	catch(TypeError) {
	    continue;
    }
}
    else {
        continue;
    }
}

    console.log(words);

    /*for(var j = 0; j < length; j++) {
	try {
	    actual_words.push(morris_data[i]['subjec']);
	    occurrences.push(words.get(morris_data[i]['subjec']));
	}
	catch {
	    continue;
	}
    }*/
    //console.log(actual_words);

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
        if (obj.hasOwnProperty('subjec') && errors['subjec']) {
		return false;
	    }
	    return true;
    }
