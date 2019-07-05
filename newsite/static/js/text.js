// hashmap for word occurrence
morris_data = [];
var words = new Map();
var length = 624;
var actual_words = [];
var occurrences = [];

function preload() {
  morris_data = loadJSON(morris_url);
}

var spl = []; // for word splitting
var cleanword;
function setup() {
  console.log(morris_data[0]);
  for (var i = 0; i < length; i++) {
    if (!isEmpty(morris_data[i])) {
      try {
        spl = morris_data[i]['subjec'].split(";");
        for (var v = 0; v < spl.length; v++) {
          cleanword = spl[v].trim().toLowerCase();
          if(cleanword =="") {
            continue;
          }
          else if (!words.has(cleanword)) {
            words.set(cleanword, 1);
          } else {
            words.set(cleanword, words.get(cleanword) + 1);
          }
        }
      } catch (TypeError) {
        continue;
      }
    }
  }
  console.log(words);
  console.log(words.length);
  var iterator1 = words.keys();
  console.log(iterator1);
  var iterator_temp; // will hold iterator.next()
  for (var j = 0; j < 437; j++) {
    try {
      //console.log()
      var iterator_temp = iterator1.next().value;
      actual_words.push(iterator_temp);
      occurrences.push(words.get(iterator_temp));
    } catch {
      continue;
    }
  }
  console.log("actual words\n")
  console.log(actual_words);
  var newArray = associativeQSort(actual_words, occurrences, 0, 437-1);
  console.log(newArray);

// use js trim..

  new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: newArray[0].slice(newArray[0].length-30-1,newArray[0].length),//actual_words,
      datasets: [{
        label: "Number of appearances",
        //backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: newArray[1].slice(newArray[1].length-30-1,newArray[1].length),//occurrences,
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Subject tags in J. Morris Evans documents (mainly letters)'
      }
    }
  });
}

function isEmpty(obj) {
  if (obj.hasOwnProperty('subjec') && obj['subjec']) {
    //console.log('success');
    return false;
  }
  return true;
}

// will sort wrt to appearances and maintain associativity
// Apparently there's no way to sort hashmaps wrt to Value.
function associativeQSort(words1, appearances, left, right) {
  var length = words1.length;
  //console.log(length);
  var pivot;
  var part;

  if (left < right) {
    pivot = right;
    part = partition(words1, appearances, pivot, left, right);
    associativeQSort(words1, appearances, left, part - 1);
    associativeQSort(words1, appearances, part + 1, right)
  }

  return [
    words1,
    appearances
  ];
}

function partition(words1, appearances, pivot, left, right) {
  var pivotValue = appearances[pivot];
  var partitionIndex = left;
  for (var i = left; i < right; i++) {
    if (appearances[i] < pivotValue) {
      swap(words1, appearances, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(words1, appearances, right, partitionIndex);
  return partitionIndex;
}


function swap(words1, appearances, i, j) {
  var numTemp = appearances[i];
  var wordTemp = words1[i];

  appearances[i] = appearances[j];
  appearances[j] = numTemp;
  words1[i] = words1[j];
  words1[j] = wordTemp;
}
