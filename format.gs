/**
 * Sets the header of the National Pokedex sheet
 * @param {Sheet} sheet - The sheet to set the header of
 */
function setPokedexHeader(sheet) {
  if (sheet == null) {
    throw EXCEPTION_SHEET_NOT_FOUND;
  }
  
  // Styles the dimensions of the header and adds header text
  sheet.setRowHeight(HEADER_ROW, HEADER_HEIGHT);
  for (var i = 0; i < HEADER_POKEDEX_WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, HEADER_POKEDEX_WIDTHS[i]);
    sheet.getRange(HEADER_ROW, i + 1).setValue(HEADER_POKEDEX_DESCRIPTIONS[i]);
  }
  
  // Styles the header text font and positions
  var headerRange = sheet.getRange(HEADER_POKEDEX_RANGE);
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
 * Sets the header for the Events sheet
 * @param {Sheet} sheet - The sheet to set the header of
 */
function setEventHeader(sheet) {
  if (sheet == null) {
    throw EXCEPTION_SHEET_NOT_FOUND;
  }

  // Styles the dimensions of the header and adds header text
  sheet.setRowHeight(HEADER_ROW, HEADER_HEIGHT);
  for (var i = 0; i < HEADER_EVENT_WIDTHS.length; i++) {
    sheet.setColumnWidth(i + 1, HEADER_EVENT_WIDTHS[i]);
    sheet.getRange(HEADER_ROW, i + 1).setValue(HEADER_EVENT_DESCRIPTIONS[i]);
  }
  
  // Styles the header text font and positions
  var headerRange = sheet.getRange(HEADER_EVENT_RANGE);
  headerRange.setBackground(HEADER_BACKGROUND);
  headerRange.setFontFamily(HEADER_TEXT_FONT_FAMILY);
  headerRange.setFontColor(HEADER_TEXT_COLOR);
  headerRange.setFontWeight(HEADER_TEXT_FONT_WEIGHT);
  headerRange.setHorizontalAlignment(HEADER_TEXT_H_ALIGNMENT);
  headerRange.setVerticalAlignment(HEADER_TEXT_V_ALIGNMENT);
  headerRange.setBorder(false, false, false, false, true, false, HEADER_BORDER_COLOR, SpreadsheetApp.BorderStyle.SOLID);
  
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


/**
 * Sets the format of the event sheet
 * @param {Sheet} sheet The sheet to set the event format of
 */
function setEventFormat(sheet) {
  var currentRow = BODY_FIRST_ROW;
  var lastRow = sheet.getLastRow();
  
  // Sets alternating row colors
  while (currentRow <= lastRow) {
    // Gets the range objects
    var pokemon1Range = sheet.getRange(currentRow, EVENT_POKEMON1_COLS[0], 1, EVENT_POKEMON1_COLS[1]);
    var trainerRange = sheet.getRange(currentRow, EVENT_TRAINER_COLS[0], 1, EVENT_TRAINER_COLS[1]);
    var pokemon2Range = sheet.getRange(currentRow, EVENT_POKEMON2_COLS[0], 1, EVENT_POKEMON2_COLS[1]);
    var languageRange = sheet.getRange(currentRow, EVENT_LANGUAGE_COLS[0], 1, EVENT_LANGUAGE_COLS[1]);
    var movesetRange = sheet.getRange(currentRow, EVENT_MOVESET_COLS[0], 1, EVENT_MOVESET_COLS[1]);
    var ribbonsRange = sheet.getRange(currentRow, EVENT_RIBBONS_COLS[0], 1, EVENT_RIBBONS_COLS[1]);
    var notesRange = sheet.getRange(currentRow, EVENT_NOTES_COLS[0], 1, EVENT_NOTES_COLS[1]);
    // Gets the column colors
    var pokemon1Color = (currentRow % 2 == 0) ? EVENT_POKEMON1_COLORS[0] : EVENT_POKEMON1_COLORS[1];
    var trainerColor = (currentRow % 2 == 0) ? EVENT_TRAINER_COLORS[0] : EVENT_TRAINER_COLORS[1];
    var pokemon2Color = (currentRow % 2 == 0) ? EVENT_POKEMON2_COLORS[0] : EVENT_POKEMON2_COLORS[1];
    var languageColor = (currentRow % 2 == 0) ? EVENT_LANGUAGE_COLORS[0] : EVENT_LANGUAGE_COLORS[1];
    var movesetColor = (currentRow % 2 == 0) ? EVENT_MOVESET_COLORS[0] : EVENT_MOVESET_COLORS[1];
    var ribbonsColor = (currentRow % 2 == 0) ? EVENT_RIBBONS_COLORS[0] : EVENT_RIBBONS_COLORS[1];
    var notesColor = (currentRow % 2 == 0) ? EVENT_NOTES_COLORS[0] : EVENT_NOTES_COLORS[1];
    // Sets the column colors to the range objects
    pokemon1Range.setBackground(pokemon1Color);
    trainerRange.setBackground(trainerColor);
    pokemon2Range.setBackground(pokemon2Color);
    languageRange.setBackground(languageColor);
    movesetRange.setBackground(movesetColor);
    ribbonsRange.setBackground(ribbonsColor);
    notesRange.setBackground(notesColor);
    currentRow += 1;
  }
  
  // Removes unused rows, sets alignments, and add heights
  removeUnusedRows(sheet);
  sheet.setRowHeights(BODY_FIRST_ROW, lastRow - 1, BODY_HEIGHT);
  sheet.getRange(EVENT_BODY_RANGE).setVerticalAlignment(BODY_TEXT_V_ALIGNMENT);
  sheet.getRange(EVENT_BODY_RANGE).setHorizontalAlignment(BODY_TEXT_H_ALIGNMENT);
  sheet.getRange(EVENT_BODY_RANGE).setFontWeight(EVENT_TEXT_FONT_WEIGHT);
  sheet.getRange(EVENT_SPRITE_RANGE).setVerticalAlignment(BODY_SPRITE_V_ALIGNMENT);
}