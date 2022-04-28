//iife format for the pokemon list
const $ = window.$;
let pokemonRepository = (function () {
//pokemon array
	let pokemonList = [];
	let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

	function getAll() {
		return pokemonList;
	}
	//add pokemon function
	function add(pokemon) {
		if (
			typeof pokemon === "object" &&
      "name" in pokemon
		) {
			pokemonList.push(pokemon);
		} else {
			console.log("Error!");
		}
	}

	// function to pull the pokemon list and the button event
	function addListItem(pokemon){
		let pokemonList = document.querySelector(".pokemon-list");
		let listPokemon = document.createElement("li");
		listPokemon.classList.add("group-list-item");
		let button = document.createElement("button");
		button.innerText = pokemon.name;
		button.classList.add("btn-primary", "w-50");
		button.setAttribute("data-toggle", "modal");
		button.setAttribute("data-target", "#pokemonModal");
		button.onclick = () => showDetails(pokemon);
		listPokemon.append(button);
		pokemonList.append(listPokemon);
	}
	//function to load the list from the pokeAPI
	function loadList() {
		return fetch(apiUrl).then(function (response) {
			return response.json();
		}).then(function (json) {
			json.results.forEach(function (item){
				let pokemon = {
					name: item.name,
					detailsUrl: item.url,
				};
				add(pokemon);
			});
		}).catch(function (e) {
			console.error(e);
		});
	}
	//function to load the details of the pokemon from api
	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			const rv = {
				image: details.sprites.front_default,
				height:details.height,
				name: details.name,
			};
			return rv;
			//item.imageUrl = details.sprites.front_default;
			//item.height = details.height;

		}).catch(function (e) {
			console.error(e);
		});
	}
	//function to show the pokemon details from api
	function showDetails(pokemon) {
		return loadDetails(pokemon)
			.then(function (pokemon) {
				return showModal(pokemon);
			});
		//loadDetails(pokemon).then(function () {
		//showModal(pokemon);
		//});
	}

	return {
		add,
		getAll,
		addListItem,
		loadList,
		loadDetails,
		showDetails,
	};
})();


pokemonRepository.loadList().then(function() {
	pokemonRepository.getAll().forEach(function (pokemon) {
		pokemonRepository.addListItem(pokemon);
	});
});


function showModal(pokemon) {
	let modalBody = $(".modal-body");
	let modalTitle = $(".modal-title");

	let titleElement = document.createElement("h1");
	titleElement.innerText = pokemon.name;

	let contentElement = document.createElement("p");
	contentElement.innerText = "Height: " + pokemon.height;

	let pokemonImage = document.createElement("img");
	pokemonImage.src = pokemon.image;

	modalTitle.empty();
	modalBody.empty();

	modalTitle.append(titleElement);
	modalBody.append(pokemonImage);
	modalBody.append(contentElement);


}
