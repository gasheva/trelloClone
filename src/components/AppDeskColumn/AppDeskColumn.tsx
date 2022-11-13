import React from 'react';
import {Card} from 'interfaces/Card';
import cl from 'components/AppDeskColumn/AppDeskColumn.module.scss';

interface AppDeskColumnProps extends DraggableProps {
    title: string,
    cards: Card[]
}

interface DraggableProps {
    onDragStart: Function,
    onDragEnd: Function,
    index: number,
}

const AppDeskColumn = ({title = '', cards, onDragEnd, onDragStart, index}: AppDeskColumnProps) => {
    return (
        <div className={cl.deckColumn} draggable
             onDragStart={(e) => onDragStart(e, index)}
             onDragEnd={(e) => onDragEnd(e)}>
            <div className={cl.deckColumn__header}>
                <h6>{title}</h6>
                {/*{cards.map(card=>*/}
                {/*    */}
                {/*)}*/}
            </div>
        </div>
    );
};

export default AppDeskColumn;