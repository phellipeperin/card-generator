import SpellModel from '../models/SpellModel';

import './card.css';

interface Props {
    spell: SpellModel;
}

const Card = ({ spell }: Props) => {
    return <>Card - {spell.name}</>;
};

export default Card;