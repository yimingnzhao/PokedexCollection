const DATA_SHEET = 'Data';
const NATIONAL_POKEDEX_SHEET = 'National Dex';

const POKEDEX_REGION_NUMBERS = {
  'National' : [1, 893],
  'Kanto'    : [1, 151],
  'Jhoto'    : [152, 251],
  'Hoenn'    : [252, 386],
  'Sinnoh'   : [387, 493],
  'Unova'    : [494, 649],
  'Kalos'    : [650, 721],
  'Alola'    : [722, 809],
  'Galar'    : [810, 893]
};

const POKEMON_JSON_URL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json'

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
const BODY_POKEDEX_NUM_RANGE = 'A2:A';
const BODY_POKEMON_NAME_RANGE = 'C2:C';
const BODY_POKEBALL_RANGE = 'D2:D';
const BODY_CAUGHT_RANGE = 'E2:E';
const BODY_TEXT_H_ALIGNMENT = 'center';
const BODY_TEXT_V_ALIGNMENT = 'middle';
const BODY_BACKGROUND_WHITE = '#FFFFFF';
const BODY_BACKGROUND_GRAY = '#F2F2F2';

const BEASTBALL = () => {return 'https://serebii.net/itemdex/sprites/beastball.png'};
const CHERISHBALL = () => {return 'https://serebii.net/itemdex/sprites/cherishball.png'};
const DIVEBALL = () => {return 'https://serebii.net/itemdex/sprites/diveball.png'};
const DREAMBALL = () => {return 'https://serebii.net/itemdex/sprites/dreamball.png'};
const DUSKBALL = () => {return 'https://serebii.net/itemdex/sprites/duskball.png'};
const FASTBALL = () => {return 'https://serebii.net/itemdex/sprites/fastball.png'};
const FRIENDBALL = () => {return 'https://serebii.net/itemdex/sprites/friendball.png'};
const GREATBALL = () => {return 'https://serebii.net/itemdex/sprites/greatball.png'};
const HEALBALL = () => {return 'https://serebii.net/itemdex/sprites/healball.png'};
const HEAVYBALL = () => {return 'https://serebii.net/itemdex/sprites/heavyball.png'};
const LEVELBALL = () => {return 'https://serebii.net/itemdex/sprites/levelball.png'};
const LOVEBALL = () => {return 'https://serebii.net/itemdex/sprites/loveball.png'};
const LUREBALL = () => {return 'https://serebii.net/itemdex/sprites/lureball.png'};
const LUXURYBALL = () => {return 'https://serebii.net/itemdex/sprites/luxuryball.png'};
const MASTERBALL = () => {return 'https://serebii.net/itemdex/sprites/masterball.png'};
const MOONBALL = () => {return 'https://serebii.net/itemdex/sprites/moonball.png'};
const NESTBALL = () => {return 'https://serebii.net/itemdex/sprites/nestball.png'};
const NETBALL = () => {return 'https://serebii.net/itemdex/sprites/netball.png'};
const PARKBALL = () => {return 'https://serebii.net/itemdex/sprites/parkball.png'};
const POKEBALL = () => {return 'https://serebii.net/itemdex/sprites/pokeball.png'};
const PREMIERBALL = () => {return 'https://serebii.net/itemdex/sprites/premierball.png'};
const QUICKBALL = () => {return 'https://serebii.net/itemdex/sprites/quickball.png'};
const REPEATBALL = () => {return 'https://serebii.net/itemdex/sprites/repeatball.png'};
const SAFARIBALL = () => {return 'https://serebii.net/itemdex/sprites/safariball.png'};
const SPORTBALL = () => {return 'https://serebii.net/itemdex/sprites/sportball.png'};
const TIMERBALL = () => {return 'https://serebii.net/itemdex/sprites/timerball.png'};
const ULTRABALL = () => {return 'https://serebii.net/itemdex/sprites/ultraball.png'};