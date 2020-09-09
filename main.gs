function setNationalDex() {  
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS['National'][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS['National'][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  sheet.clear();
  setPokedexHeader(sheet);
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  setBodyFormat(sheet);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);     
}

function setNationalDexHeader() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  sheet.clear();
  setPokedexHeader(sheet);
}

function formatNationalDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  setBodyFormat(sheet);
}

function setKantoDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[KANTO_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setJhotoDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[JHOTO_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[JHOTO_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setHoennDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[HOENN_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[HOENN_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setSinnohDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[SINNOH_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[SINNOH_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setUnovaDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[UNOVA_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[UNOVA_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setKalosDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[KALOS_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[KALOS_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setAlolaDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[ALOLA_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[ALOLA_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setGalarDex() {
  var sheet = getSheet(NATIONAL_POKEDEX_SHEET);
  var startPokedexNo = POKEDEX_REGION_NUMBERS[GALAR_REGION_DEX][0];
  var endPokedexNo = POKEDEX_REGION_NUMBERS[GALAR_REGION_DEX][1];
  var savePokeballCol = sheet.getRange(BODY_POKEBALL_RANGE).getFormulas();
  var saveCaughtCol = sheet.getRange(BODY_CAUGHT_RANGE).getValues();
  setPokemon(sheet, startPokedexNo, endPokedexNo);
  sheet.getRange(BODY_POKEBALL_RANGE).setFormulas(savePokeballCol);
  sheet.getRange(BODY_CAUGHT_RANGE).setValues(saveCaughtCol);   
}

function setEventsHeader() {
  var sheet = getSheet(EVENT_SHEET);
  sheet.clear();
  setEventHeader(sheet); 
}

function formatEventsSheet() {
  var sheet = getSheet(EVENT_SHEET);
  removeBandings(sheet.getRange(EVENT_BODY_RANGE))
  setEventFormat(sheet); 
}

function formatCacheSheet() {
  var sheet = getSheet(CACHE_SHEET);
  var allCells = sheet.getRange(ALL_CELLS_RANGE);
  setPlainTextCells(allCells);
}