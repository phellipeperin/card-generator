import SpellModel from '../models/SpellModel';

import spellsLevel1 from './spells-1';
import spellsLevel2 from './spells-2';
import spellsLevel3 from './spells-3';
import spellsLevel4 from './spells-4';
import spellsLevel5 from './spells-5';
import spellsLevel6 from './spells-6';
import spellsLevel7 from './spells-7';
import spellsLevel8 from './spells-8';
import spellsLevel9 from './spells-9';

const allSpells: Array<SpellModel> = [
    ...spellsLevel1,
    ...spellsLevel2,
    ...spellsLevel3,
    ...spellsLevel4,
    ...spellsLevel5,
    ...spellsLevel6,
    ...spellsLevel7,
    ...spellsLevel8,
    ...spellsLevel9,
];

export default allSpells;