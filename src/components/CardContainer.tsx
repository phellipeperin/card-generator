import SpellModel from '../models/SpellModel';
import Card from './Card';

import './card-container.css';

interface Props {
    spellList: Array<SpellModel>;
}

const CardContainer = ({ spellList }: Props) => {
    return (
        <section className='card-container'>
            {spellList.map((spell: SpellModel) => (
                <Card key={spell.name} spell={spell} />
            ))}
        </section>
    );
};

export default CardContainer;