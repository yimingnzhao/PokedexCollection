const DATA_SHEET = 'Data';
const NATIONAL_POKEDEX_SHEET = 'National Dex';
const EVENT_SHEET = 'Events';
const CACHE_SHEET = 'Cache';
const KANTO_REGION_DEX = 'Kanto';
const JHOTO_REGION_DEX = 'Jhoto';
const HOENN_REGION_DEX = 'Hoenn';
const SINNOH_REGION_DEX = 'Sinnoh';
const UNOVA_REGION_DEX = 'Unova';
const KALOS_REGION_DEX = 'Kalos';
const ALOLA_REGION_DEX = 'Alola';
const GALAR_REGION_DEX = 'Galar';

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

const PLAINTEXT_CELL_FORMAT = '@STRING@';
const ALL_CELLS_RANGE = 'A1:Z';

const POKEMON_JSON_URL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/data/pokemon.json';
const MSIKMA_SPRITE_URL = 'https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen8/';

const EXCEPTION_SHEET_NOT_FOUND = 'Exception: Sheet Name Not Found';
const EXCEPTION_INVALID_NUMBER = 'Exception: Invalid Number Input';

const HEADER_POKEDEX_RANGE = 'A1:E1';
const HEADER_EVENT_RANGE = 'A1:X1';
const HEADER_ROW = 1;
const HEADER_NUM_ROWS = 1;
const HEADER_HEIGHT = 60;
const HEADER_POKEDEX_WIDTHS = [50, 60, 140, 40, 60];
const HEADER_POKEDEX_DESCRIPTIONS = ['Dex No.', 'Sprite', 'Pokemon', 'Ball', 'Caught'];
const HEADER_EVENT_WIDTHS = [40, 30, 20, 20, 30, 60, 140, 140, 30, 120, 100, 120, 120, 30, 100, 120, 120, 120, 120, 70, 70, 70, 70, 350];
const HEADER_EVENT_DESCRIPTIONS = ['Ball', 'FT', '★', '', 'No.', 'Sprite', 'Pokemon', 'Name', 
                                   'Lv.', 'OT', 'ID', 'Ability', 'Nature','M/F', 'Language', 
                                   'Move 1', 'Move 2', 'Move 3', 'Move 4', 'Ribbon 1',
                                   'Ribbon 2', 'Ribbon 3', 'Ribbon 4', 'Notes']; 
const HEADER_BACKGROUND = '#000000';
const HEADER_TEXT_FONT_FAMILY = 'Arial';
const HEADER_TEXT_FONT_SIZE  = 11;
const HEADER_TEXT_FONT_WEIGHT = 'bold';
const HEADER_TEXT_COLOR = '#FFFFFF';
const HEADER_BORDER_COLOR = '#999999';
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
const BODY_SPRITE_V_ALIGNMENT = 'bottom';
const BODY_BACKGROUND_WHITE = '#FFFFFF';
const BODY_BACKGROUND_GRAY = '#F2F2F2';

const EVENT_BODY_RANGE = 'A2:X';
const EVENT_POKEMON1_RANGE = 'A2:I';
const EVENT_SPRITE_RANGE = 'F2:F';
const EVENT_TRAINER_RANGE = 'J2:K';
const EVENT_POKEMON2_RANGE = 'L2:N';
const EVENT_LANGUAGE_RANGE = 'O2:O';
const EVENT_MOVESET_RANGE = 'P2:S';
const EVENT_RIBBONS_RANGE = 'T2:W';
const EVENT_NOTES_RANGE = 'X2:X';
const EVENT_TEXT_FONT_WEIGHT = 'bold';
const EVENT_BODY_HEIGHT = 50;
const EVENT_POKEMON1_COLORS = ['#ead1dc', '#d5a6bd'];
const EVENT_TRAINER_COLORS = ['#d9d2e9', '#b4a7d6']
const EVENT_POKEMON2_COLORS = ['#fff2cc', '#ffe599'];
const EVENT_LANGUAGE_COLORS = ['#d9ead3', '#b6d7a8'];
const EVENT_MOVESET_COLORS = ['#c9daf8', '#a4c2f4'];
const EVENT_RIBBONS_COLORS = ['#f4cccc', '#ea9999'];
const EVENT_NOTES_COLORS = ['#d0e0e3', '#a2c4c9'];

const EVENT_RANGES = {
  [EVENT_POKEMON1_RANGE] : EVENT_POKEMON1_COLORS,
  [EVENT_TRAINER_RANGE]  : EVENT_TRAINER_COLORS,
  [EVENT_POKEMON2_RANGE] : EVENT_POKEMON2_COLORS,
  [EVENT_LANGUAGE_RANGE] : EVENT_LANGUAGE_COLORS,
  [EVENT_MOVESET_RANGE]  : EVENT_MOVESET_COLORS,
  [EVENT_RIBBONS_RANGE]  : EVENT_RIBBONS_COLORS,
  [EVENT_NOTES_RANGE]    : EVENT_NOTES_COLORS,
}

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

const ORIGIN_GB = () => {return 'https://cdn.bulbagarden.net/upload/a/a4/GB_icon_VIII.png'};
const ORIGIN_VI = () => {return 'https://cdn.bulbagarden.net/upload/1/1b/Blue_pentagon_VIII.png'};
const ORIGIN_VII = () => {return 'https://cdn.bulbagarden.net/upload/c/c3/Black_clover_VIII.png'};
const ORIGIN_VIII = () => {return 'https://cdn.bulbagarden.net/upload/3/3e/Galar_symbol.png'};
const ORIGIN_GO = () => {return 'https://cdn.bulbagarden.net/upload/2/2e/GO_icon_VIII.png'};
const ORIGIN_LETSGO = () => {return 'https://cdn.bulbagarden.net/upload/a/a4/Let%27s_Go_icon.png'};

const RIBBON_URL = 'https://www.serebii.net/swordshield/ribbons/';
const EVENT_RIBBON = () => {return RIBBON_URL + 'eventribbon.png'};
const CLASSIC_RIBBON = () => {return RIBBON_URL + 'classicribbon.png'};
const BATTLE_CHAMPION_RIBBON = () => {return RIBBON_URL + 'battlechampionribbon.png'};
const PREMIER_RIBBON = () => {return RIBBON_URL + 'premierribbon.png'};
const WISHING_RIBBON = () => {return RIBBON_URL + 'wishingribbon.png'};