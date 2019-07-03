
// hashmap for word occurrence
morris_data = [];
//console.log(morris_data[0]);
var words = new Map();
var length = 624;
function preload() {
    morris_data = loadJSON(morris_url);
}
function setup() {
    console.log(morris_data[0]);
    //console.log(morris_data.length);
    for(var i=0; i < length; i++) {
	if(!words.has(morris_data[i]['subjec'])) {
	    words.set(morris_data[i]['subjec'], 1);
	}
	else {
	}
    new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Number of appearances",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
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
