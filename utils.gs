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
