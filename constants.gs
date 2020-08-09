const DATA_SHEET = 'Data';
const KANTO_POKEDEX_SHEET = 'Kanto';

const POKEDEX_REGION_NUMBERS = {
  'Kanto' : [1, 151],
  'Jhoto' : [152, 251],
  'Hoenn' : [252, 386],
  'Sinnoh': [387, 493],
  'Unova' : [494, 649],
  'Kalos' : [650, 721],
  'Alola' : [722, 809],
  'Galar' : [810, 893]
};

const EXCEPTION_SHEET_NOT_FOUND = 'Exception: Sheet Name Not Found';
const EXCEPTION_INVALID_NUMBER = 'Exception: Invalid Number Input';

const HEADER_RANGE = 'A1:E1';
const HEADER_ROW = 1;
const HEADER_NUM_ROWS = 1;
const HEADER_HEIGHT = 60;
const HEADER_WIDTHS = [50, 60, 140, 40, 60];
const HEADER_DESCRIPTIONS = ['Dex No.', 'Sprite', 'Pokemon', 'Ball', 'Caught'];
const HEADER_BACKGROUND = '#000000';
const HEADER_TEXT_FONT_FAMILY = 'Arial';
const HEADER_TEXT_FONT_SIZE  = 11;
const HEADER_TEXT_FONT_WEIGHT = 'bold';
const HEADER_TEXT_COLOR = '#FFFFFF';
const HEADER_TEXT_H_ALIGNMENT = 'center';
const HEADER_TEXT_V_ALIGNMENT = 'middle';

const BODY_FIRST_ROW = 2;
const BODY_HEIGHT = 40;
const BODY_NUM_COLS = 5;
const BODY_TEXT_H_ALIGNMENT = 'center';
const BODY_BACKGROUND_WHITE = '#FFFFFF';
const BODY_BACKGROUND_GRAY = '#F2F2F2';