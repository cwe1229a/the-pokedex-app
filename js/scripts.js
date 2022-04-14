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
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  button.addEventListener("click", function(event) {
    fetch("https://pokeapi.co/api/v2/pokemon/${pokemon.name}")
    .then(response=>response.json())
    .then(response=>{
      pokemon.height = response.height;
      showModal(pokemon);
    })
    .catch(err=>console.error(err))
  })
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


//add pokemon extra blissey
pokemonRepository.add({ name: "blissey", height: 5, types: ["normal"] });

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});
//modal
let modalContainer = document.querySelector("#modal-container");
function showModal(pokemon) {
  modalContainer.innerHTML = "";
 let modal = document.createElement("div");
  modal.classList.add("modal");

  let closeButtonElement = document.createElement("button");
  closeButtonElement.classList.add("modal-close");
  closeButtonElement.innerText = "Close";
  closeButtonElement.addEventListener("click", hideModal);

  let titleElement = document.createElement("h1");
  titleElement.innerText = pokemon.name;

  let contentElement = document.createElement("p");
  contentElement.innerText = "Height: " + pokemon.height;

  //let contentElement = document.creatElement("p");
  //contentElement.innerText = pokemon.imageUrl;


  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add("is-visible");
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
    hideModal();
  }
});
modalContainer.addEventListener("click", (e) => {
let target = e.target;
if (target === modalContainer) {
  hideModal();
}
});
function hideModal() {
  modalContainer.classList.remove("is-visible");
}
