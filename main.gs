function setNationalDex() {  
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS['National'][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS['National'][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  sheet.clear();
  setHeader(sheet);
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  setBodyFormat(sheet);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);     
}

function setRegionPokedex(regionName) {
  var sheet = getSheet(regionName);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[regionName][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[regionName][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  sheet.clear();
  setHeader(sheet);
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  setBodyFormat(sheet);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);
}