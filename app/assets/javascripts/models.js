var currentPokemonData = function(){
  return {
    id: $pokemon.data('rid'),
    pkdx_id: $pokemon.data('pkdx_id'),
    name: $pokemon.find('h4').text(),
    image_url: $pokemon.find('img').attr('src')
  };
}

// Click methods
var catchPokemon = function(e) {
  $chosen_player = $('.chosen').children().first();
  $pokemon       = $(e.target).parent();
  console.log($chosen_player.data('name') + ' --> ' + $pokemon.data('rid'));
  var data = currentPokemonData();

  clearRandomPokemon();
  // this is a stub...
  // fires when you click the catch button (see large template above)

  attachSmallPokemonTemplate(data, $chosen_player.find(".panel-body"));

  console.log("success");
}

// these methods change the chosen pokeball and return whose pokeball it is
var iChoseNext = function() {
  $col    = $('.pokeball-col');
  $chosen = $('.chosen');
  if ($chosen.length != 0) { // if there is a chosen pokeball!
    $next   = $chosen.next();
    if ($next.hasClass('new-pokeball')) { // start over
      $next = $next.siblings().first();
    }
    $chosen.removeClass('chosen');
    $next.addClass('chosen');

    return currentPlayer($next);
  } else if ($col.length != 0) { // no one chosen yet!
    $chosen = $col.first().addClass('chosen');

    return currentPlayer($chosen);
  } else { // no pokeballs!
    return null;
  }
}

var currentPlayer = function($chosen) {
  return $chosen.children().first().data('name');
}
