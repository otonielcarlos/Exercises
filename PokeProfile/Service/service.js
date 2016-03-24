var app = angular.module("MyApp")

app.service("PokeProfile", function () {

    this.currentPokemon  = [];

    this.searchPokemon = function (newPokemon) {
        var newPokemon = {
            name: null,
            attack: null,
            ability: null,
            img: null
        }
        $http.get("http://pokeapi.co/api/v1/pokemon/").then(function (response) {



        })


    }






});