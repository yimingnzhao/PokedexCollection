function setKantoPokedex() {
  var sheet = getSheet(KANTO_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_POKEDEX_SHEET][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_POKEDEX_SHEET][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  sheet.clear();
  setHeader(sheet);
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  setBodyFormat(sheet);
  Logger.log(savePokeballCol);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);
}
