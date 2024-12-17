import SpellModel from '../models/SpellModel';
import { translateSpellSchool } from '../services/spellService';

import './card.css';
import CardDescriptionItem from './CardDescriptionItem';

interface Props {
    spell: SpellModel;
}

const Card = ({ spell }: Props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <span>{spell.name}</span>
                <span className='badge shadow'>{spell.level}</span>
            </div>
            <div className='card-body'>
                <CardDescriptionItem prefix='Tempo de Conjuração: ' content={spell.castingTime} />
                <CardDescriptionItem prefix='Alcance: ' content={spell.range} />
                <CardDescriptionItem prefix='Área: ' content={spell.area} />
                <CardDescriptionItem prefix='Componentes: ' content={spell.components} />
                <CardDescriptionItem prefix='Duração: ' content={spell.duration} />
                <CardDescriptionItem content={spell.description} />
                {spell.upCasting && <CardDescriptionItem prefix='Em níveis superiores: ' content={spell.upCasting} />}
            </div>
            <div className='card-footer'>
                <span className=''>{translateSpellSchool(spell.school)}</span>
            </div>
        </div>
    );
};

export default Card;