/**
 * Gets the Sheet object referenced by the sheet name
 * @param {String} sheetName The name of the sheet
 * @return {Sheet} The Sheet object that has the sheet name
 */
function getSheet(sheetName) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
}


/**
 * Removes unused columns in a sheet
 * @param {Sheet} sheet The sheet object to remove the unused columns of
 */
function removeUnusedColumns(sheet) {
  var maxCols = sheet.getMaxColumns();
  var lastCol = sheet.getLastColumn();
  
  // Removes columns past the last column with content
  if (maxCols - lastCol != 0){
    sheet.deleteColumns(lastCol + 1, maxCols - lastCol);
  }
}


/**
 * Removes unused rows in a sheet
 * @param {Sheet} sheet The sheet object to remove the unused rows of
 */
function removeUnusedRows(sheet) {
  var maxRows = sheet.getMaxRows();
  var lastRow = sheet.getLastRow();
  
  // Removes rows past the last row with content
  if (maxRows - lastRow != 0) {
    sheet.deleteRows(lastRow + 1, maxRows - lastRow); 
  }
}


/**
 * Converts an integer to a three digit string
 * @param {int} num The integer to convert to a string
 * @return {String} The string form of the three digit representation
 */
function intToThreeDigitString(num) {
  // Throws an error if the input is larger than three digits
  if (num / 1000 > 1) {
    throw EXCEPTION_INVALID_NUMBER;
  }
  return ('000' + num).substr(-3);
}


/**
 * Loads Pokemon data via fetch and stores the data in a sheet
 */
function loadPokemonNames() {
  // Fetches the data as json
  var sheet = getSheet(DATA_SHEET);
  var response = UrlFetchApp.fetch(POKEMON_JSON_URL);
  var json = JSON.parse(response.getContentText());
  var size = Object.keys(json).length;
  
  // Stores the json data 
  sheet.clear();
  for (var i = 1; i <= size; i++) {
    var pokedexNo = intToThreeDigitString(i);
    var data = [pokedexNo, json[pokedexNo]['name']['eng']]
    sheet.appendRow(data);
  }
}