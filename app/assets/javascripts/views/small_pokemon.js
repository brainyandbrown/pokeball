var attachSmallPokemonTemplate = function(attributes, elementAppendedTo) {
  clearRandomPokemon();
  $pokemon = $templatePokemonSmall(attributes);
  $template.appendTo(elementAppendedTo);
  // call your small template and then append it where it should go
}
var $templatePokemonSmall = function(attributes) {
  // create a small jQuery template for Pokémon
  // to insert into your Poké ball!
  var $template = $('<div class="pokemon template small animated zoomIn">')
    .attr('data-rid', attributes.id)
    .attr('data-pkdx-id', attributes.pkdx_id)
  $('<h4>').text(attributes.name)
    .appendTo($template);
  $('<img class="poke-sprite" width="120">')
    .attr('src', attributes.image_url)
    .appendTo($template);

    return $template;
}
