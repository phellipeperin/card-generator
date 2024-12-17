export enum SpellSchool {
    ABJURATION = 'ABJURATION',
    CONJURATION = 'CONJURATION',
    DIVINATION = 'DIVINATION',
    ENCHANTMENT = 'ENCHANTMENT',
    EVOCATION = 'EVOCATION',
    ILLUSION = 'ILLUSION',
    NECROMANCY = 'NECROMANCY',
    TRANSMUTATION = 'TRANSMUTATION',
}

export default interface SpellModel {
    // Basic Info
    name: string;
    level: number;
    school: SpellSchool;
    // Detailed Info
    castingTime: string;
    components: string;
    range: string;
    area: string;
    duration: string;
    description: string;
    upCasting?: string;
    // Reference
    referenceName: string;
    referenceBook: string;
}