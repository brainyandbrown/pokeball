console.log('loaded, bru.');

var $randomPokemon, // page element references (set on load below...)
    $newPokeball,
    $pokeballs,
    $pokeballListEl,
    $pokemon;

// Below are the functions necessary to create the HTML for a Pokemon
// object on the screen. You need to call the first function with a
// JS object that has the attributes id, name, pkdx_id, and image_url
// (at least), and a string name of who can catch it



// Attach and template methods for new pokeballs and new pokemon in pokeballs!
var attachPokeball = function(attributes) {
  // call your pokeball template and then append it where it should go
}
var $templatePokeball = function(attributes) {
  // create a small jQuery template for pokéballs
}





$(document).ready(function() {
  $randomPokemon = $('#show-random-poke');
  $newPokeball   = $('#add-pokeball');
  $pokeballs     = $('.panel');
  $pokeballListEl = $('.pokeballs');

  $('#generate-random-poke').on('click', function(e) {
      e.preventDefault();
    $.ajax({
      url: 'http://localhost:3000/pokemons/?random=true',
      type: 'GET',
      dataType: 'json'
      // data: { random: true }
    }).done(function(data){
      attachLargePokemonTemplate(data);
    });
  });
});

// Utility function!

var capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
}
