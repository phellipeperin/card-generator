interface Props {
    prefix?: string;
    content: string;
}

const CardDescriptionItem = ({ prefix, content }: Props) => {
    return (
        <div className='card-desc-item'>
            {prefix && <span className='font-bold'>{prefix}</span>}
            <span>{content}</span>
        </div>
    );
};

export default CardDescriptionItem;