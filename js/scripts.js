//iife format for the pokemon list
let pokemonRepository = (function () {
//pokemon array
let pokemonList = [
{ name: "bulbasaur", height: 2, type: ["grass", "poison"]},
{ name: "charmander", height: 3, type:["fire"]},
{ name: "squirtle", height: 1, type: ["water"]},
{ name: 'blissey', height: 5, type: ["normal"] }
];


//add pokemon to the list, return all pokemon listed
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

document.write(pokemonRepository.getAll());
pokemonRepository.add({ name: 'blissey'});
document.write(pokemonRepository.getAll());

  //arrow function
pokemonList.forEach( item => document.write(item) );
