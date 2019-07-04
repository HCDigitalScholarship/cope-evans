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
        if (!isEmpty(morris_data[i])) {
	    try {
		console.log("hi");
		spl = morris_data[i]['subjec'].split(";");
		for(var v = 0; v < spl.length; v++) {
		    if (!words.has(spl[v])) {
			words.set(spl[v], 1);
			console.log("Made it");
		    }
		    else {
			words.set(spl[v], words.get(spl[v]) + 1);
		    }
		}
	    }
	    catch(TypeError) {
		continue;
	    }
	}
    }

    console.log(words);
    var iterator1 = words.keys();
    for(var j = 0; j < 530; j++) {
	try {
	    actual_words.push(iterator1.next().value);
	    occurrences.push(words.get(iterator1.next().value));
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
}

    function isEmpty(obj) {
        if (obj.hasOwnProperty('subjec') && obj['subjec']) {
	    console.log('success');
	    return false;
	    }
	    return true;
    }
