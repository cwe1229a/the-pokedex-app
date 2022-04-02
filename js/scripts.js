let pokemonList = [
{ name: "bulbasaur", height: 2, type: ["grass", "poison"]},
{ name: "charmander", height: 3, type:["fire"]},
{ name: "squirtle", height: 1, type: ["water"]}
];
// repository 1 for pokemon

let pokemonList2 = [
{ name: "clefable", height: 5, type: ["fairy"]},
{ name: "vulpix", height: 2, type:["fire"]},
{ name: "oddish", height: 1, type: ["grass", "poison"]}
];
// repository 2 for pokemon

//arrow function
pokemonList.forEach( item => console.log(item) );
