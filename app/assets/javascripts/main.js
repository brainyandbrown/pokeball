console.log('loaded, bru.');

var $randomPokemon, // page element references (set on load below...)
    $newPokeball,
    $pokeballs,
    $pokeballListEl,
    $pokemon;

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
    // get a random pokemon from the database and
    // attach it to the DOM (with the large template)
    $.ajax({
      url:  '/pokemons?random=true',
      type: 'GET',
      // data: { id: ... },
      dataType: 'json'
    }).done(function(data){
      // console.log(data);
      attachLargePokemonTemplate(data);

        $.ajax({
          url: '/pokeballs/',
          type: 'GET',
          dataType: 'json',
        })
        .done(function(data) {
          console.log("success");

          data.forEach();


    for (var i=0, len = list_of_pokeballs.length; i<len; i++){
      var id = list_of_pokeballs[i].id;

      $.ajax({
        url: '/pokeballs/' + id,
        type: 'GET',
        dataType: 'json'
      }).done(function(list_of_pokeballs){
      console.log(pokeball);
        var pokemons = pokeball.pokemons;
        var name = pokeball.pokeball.name.toLowerCase();
        var $list = $('[data-name=' + name + ']');
        for (var j=0, len=pokemons.length; j<len; j++){
          attachSmallPokemonTemplate(pokemons[j], $list.find('.panel-body'));
          }
        }); //ends ajax
      }
    }); //ends
  }); //ends document
});
// Utility function!

var capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.substring(1);
};
