//iife format for the pokemon list
let pokemonRepository = (function () {
//pokemon array
let pokemonList = [
{ name: "bulbasaur", height: 2, type: ["grass", "poison"]},
{ name: "charmander", height: 3, type:["fire"]},
{ name: "squirtle", height: 1, type: ["water"]},
];


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      console.log(showDetails)
    })
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

  function showDetails(pokemon) {
    console.log();
  }

pokemonRepository.add({ name: "blissey", height: 5, types: ["normal"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
