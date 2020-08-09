function setKantoPokedex() {
  var sheet = getSheet(KANTO_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_POKEDEX_SHEET][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_POKEDEX_SHEET][1];
  sheet.clear();
  setHeader(sheet);
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  setBodyFormat(sheet);
}
