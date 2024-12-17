import SpellModel, { SpellSchool } from '../models/SpellModel';

const absorbElements: SpellModel = {
    // Basic Info
    name: 'Absorb Elements',
    level: 2,
    school: SpellSchool.CONJURATION,

    // Detailed Info
    castingTime: '1 reaction, which you take when you take acid, cold, fire, lightning, or thunder damage',
    components: 'S',
    range: 'Self',
    area: 'N/A',
    duration: '1 round',
    description: `
        The spell captures some of the incoming energy, lessening its effect on you and storing it for your next melee attack.
        You have resistance to the triggering damage type until the start of your next turn.
        Also, the first time you hit with a melee attack on your next turn, the target takes an extra 1d6 damage of the triggering type.
    `,
    upCasting: `
        When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.
    `,

    // Reference
    referenceName: 'Absorb Elements',
    referenceBook: "XGtE p.150",
};

const spells: Array<SpellModel> = [absorbElements];

export default spells;