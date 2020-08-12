/**
 * Sets the header of a Pokedex sheet
 * @param {Sheet} sheet - The sheet to set the header of
 */
function setHeader(sheet) {
  if (sheet == null) {
    throw EXCEPTION_SHEET_NOT_FOUND;
  }
  
  // Styles the dimensions of the header and adds header text
  sheet.setRowHeight(HEADER_ROW, HEADER_HEIGHT);
  for (var i = 0; i < HEADER_WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, HEADER_WIDTHS[i]);
    sheet.getRange(HEADER_ROW, i + 1).setValue(HEADER_DESCRIPTIONS[i]);
  }
  
  // Styles the header text font and positions
  var headerRange = sheet.getRange(HEADER_RANGE);
  headerRange.setBackground(HEADER_BACKGROUND);
  headerRange.setFontFamily(HEADER_TEXT_FONT_FAMILY);
  headerRange.setFontColor(HEADER_TEXT_COLOR);
  headerRange.setFontWeight(HEADER_TEXT_FONT_WEIGHT);
  headerRange.setHorizontalAlignment(HEADER_TEXT_H_ALIGNMENT);
  headerRange.setVerticalAlignment(HEADER_TEXT_V_ALIGNMENT);
  
  // Removes unused columns and freezes header row
  removeUnusedColumns(sheet);
  sheet.setFrozenRows(HEADER_NUM_ROWS);
}


/**
 * Sets the body of the Pokedex sheet
 * @param {Sheet} sheet The sheet to set the Pokedex body of
 * @param {int} startNum The start number of the Pokdex
 * @param {int} endNum The end number of the Pokedex
 */
function setPokemon(sheet, startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    var pokedexNo = intToThreeDigitString(i);
    var data = [];
    data.push(pokedexNo);
    data.push('=IMAGE("https://www.serebii.net/pokedex-swsh/icon/' + pokedexNo + '.png", 3)');
    data.push('=VLOOKUP(' + pokedexNo + ', Data!A:B, 2, false)');
    sheet.appendRow(data);
  }
}


/**
 * Sets the format of the body
 * @param {Sheet} sheet The sheet to set the body format of
 */
function setBodyFormat(sheet) {
  var currentRow = BODY_FIRST_ROW;
  var lastRow = sheet.getLastRow();
  
  // Sets alternating row colors with horizontal alignment
  while (currentRow <= lastRow) {
    var range = sheet.getRange(currentRow, 1, 1, BODY_NUM_COLS);
    var backgroundColor = (currentRow % 2 == 0) ? BODY_BACKGROUND_WHITE : BODY_BACKGROUND_GRAY;
    range.setBackground(backgroundColor);
    range.setHorizontalAlignment(BODY_TEXT_H_ALIGNMENT);
    currentRow += 1;
  }
  
  // Removes unused rows, sets alignments, add heights and checkboxes
  removeUnusedRows(sheet);
  sheet.setRowHeights(BODY_FIRST_ROW, lastRow - 1, BODY_HEIGHT);
  sheet.getRange(BODY_POKEDEX_NUM_RANGE).setVerticalAlignment(BODY_TEXT_V_ALIGNMENT);
  sheet.getRange(BODY_POKEMON_NAME_RANGE).setVerticalAlignment(BODY_TEXT_V_ALIGNMENT);
  sheet.getRange(BODY_POKEBALL_RANGE).setVerticalAlignment(BODY_TEXT_V_ALIGNMENT);
  sheet.getRange(BODY_POKEBALL_RANGE).setHorizontalAlignment(BODY_TEXT_H_ALIGNMENT);
  sheet.getRange(BODY_CAUGHT_RANGE).setVerticalAlignment(BODY_TEXT_V_ALIGNMENT);
  sheet.getRange(BODY_CAUGHT_RANGE).insertCheckboxes();
}
