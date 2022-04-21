//iife format for the pokemon list
let pokemonRepository = (function () {
//pokemon array
let pokemonList = [];
let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

//add pokemon function
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
function getAll() {
  return pokemonList;
}
// function to pull the pokemon list and the button event
function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listpokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("btn-primary","w-50");
  button.setAttribute("data-toggle", "modal")
  button.setAttribute("data-target", "#pokemonModal");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  }
  //function to load the list from the pokeAPI
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item){
        let pokemon = {
          name: item.name,
          detasilsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }
  //function to load the details of the pokemon from api
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
//function to show the pokemon details from api
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    showModal(item);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});


function showModal(pokemon) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");


  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement("p");
  contentElement.innerText = "Height: " + pokemon.height;

  let pokemonImage = document.createElement("img");
  pokemonImage.src = pokemon.image;

  modalTitle.empty();
  modalBody.empty();

  modalTitle.appendChild(titleElement);
  modalBody.appendChild(pokemonImage);
  modalBody.appendChild(contentElement);

}
