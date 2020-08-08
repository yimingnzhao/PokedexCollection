/**
 * Sets the header of a Pokedex sheet
 */
function setHeader() {
  var sheet = getSheet('Sheet1');
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
  headerRange.setHorizontalAlignment(HEADER_TEXT_H_ALIGNMENT);
  headerRange.setVerticalAlignment(HEADER_TEXT_V_ALIGNMENT);
  
  // Removes unused columns and freezes header row
  removeUnusedColumns(sheet);
  sheet.setFrozenRows(HEADER_NUM_ROWS);
}