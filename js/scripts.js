let pokemonList = [
{ name: "bulbasaur", height: 2, type: ["grass", "poison"]},
{ name: "charmander", height: 3, type:["fire"]},
{ name: "squirtle", height: 1, type: ["water"]}
];
// repository for pokemon

for (let i=0; i <pokemonList.length; i++){
  if (pokemonList[i].height >2){
    document.write(pokemonList[i].name + ": </br> " + pokemonList[i].type + " </br>" + pokemonList[i].height + " - " + "That's big! <br/>");
} else {
    document.write(pokemonList[i].name + ": </br> " + pokemonList[i].type + " <br/>" + pokemonList[i].height + "<br/>");
}
}

//for loop for how big the pokemon are
