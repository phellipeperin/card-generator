import { spellSchoolTranslationMapping } from '../constants/translations';
import { SpellSchool } from '../models/SpellModel';

export const translateSpellSchool = (school: SpellSchool): string => {
    return spellSchoolTranslationMapping[school] ?? '';
};