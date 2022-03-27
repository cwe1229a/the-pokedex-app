let pokemonList = [
{ name: "bulbasaur", height: 2, type: ["grass", "poison"]},
{ name: "charmander", height: 2, type:["fire"]},
{ name: "squirtle", height: 1, type: ["water"]}
];
// repository for pokemon

for (let i=0; i <pokemonList.length; i++){
  if (pokemonList[i].height >2){
    document.write(pokemonList[i].height + "That's big! <br />");
}
{
  document.write(pokemonList[i].name + "<br />");
  document.write(pokemonList[i].height + "<br />");
  document.write(pokemonList[i].type + "<br />");
}
}
//for loop for how big the pokemon are
