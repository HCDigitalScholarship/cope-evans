console.log(url);

let data = {};

function msg(){
    alert("Hello!");
}

function preload() {
    data = loadJSON(url);
   
}
console.log(data);
function setup() {
    createCanvas(640, 360);
    loadData();
}
function loadData() {
    console.log(data[0]);
}

