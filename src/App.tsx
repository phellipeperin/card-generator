import { useState } from 'react';
import spells from './data/allSpells';
import SpellModel from './models/SpellModel';
import CardContainer from './components/CardContainer';

const App = () => {
    const [spellList] = useState<Array<SpellModel>>(spells);

    return (
        <CardContainer spellList={spellList} />
    );
}

export default App;
