var Party = function(population, name) {
    this.population = population;
    this.name = name;
};

var penguins = new Party(1000000, "The Penguin");
var communists = new Party(1000000, "The Communist");

var onHit = function(party) {
    var mainPopulation = Math.floor((Math.random() * 10000) + 1);
    party.population = party.population - mainPopulation
    console.log(party.name + ' got hit by nuke');
    console.log(party.name + "'s lost " + mainPopulation)
    console.log("Now it's the other party's turn");
};

var onMiss = function(party) {
    console.log(party.name + "'s missed, instead it landed on the ocean");
    console.log("Now it's the other party's turn");
};


function sendNuke(party, onHit, onMiss){
     var randNumb = Math.random() >= 0.5;
        if(randNumb === true){
            onHit(party);
        } else {
            onMiss(party);
        }
};

var randomNumber = Math.random() >= 0.5;
if(randomNumber === true){
    sendNuke(penguins, onHit, onMiss);
    sendNuke(communists, onHit, onMiss);
} else {
    sendNuke(communists, onHit, onMiss);
    sendNuke(penguins, onHit, onMiss);

};


