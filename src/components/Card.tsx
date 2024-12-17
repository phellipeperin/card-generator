import SpellModel from '../models/SpellModel';
import { translateSpellSchool } from '../services/spellService';

import './card.css';
import CardDescriptionItem from './CardDescriptionItem';

interface Props {
    spell: SpellModel;
}

const Card = ({ spell }: Props) => {
    return (
        <div className={`card card--${spell.school.toLowerCase()}`}>
            <div className='card-inner'>
                <div className='card-header'>
                    <span>{spell.name}</span>
                    <div className='badge'>{spell.level}</div>
                </div>
                <div className='card-body'>
                    <div className='card-inner-body'>
                        <CardDescriptionItem prefix='Tempo de Conjuração: ' content={spell.castingTime} />
                        <CardDescriptionItem prefix='Alcance: ' content={spell.range} />
                        <CardDescriptionItem prefix='Área: ' content={spell.area} />
                        <CardDescriptionItem prefix='Componentes: ' content={spell.components} />
                        <CardDescriptionItem prefix='Duração: ' content={spell.duration} />
                        <CardDescriptionItem content={spell.description} />
                        {spell.upCasting && <CardDescriptionItem prefix='Em níveis superiores: ' content={spell.upCasting} />}
                    </div>
                </div>
                <div className='card-footer shadow-xl'>
                    <span className=''>{translateSpellSchool(spell.school)}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;