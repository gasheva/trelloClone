import React from 'react';
import {Card} from 'interfaces/Card';
import cl from 'components/AppDeskColumn/AppDeskColumn.module.scss'

interface AppDeskColumnProps {
    title: string,
    cards: Card[]
}

const AppDeskColumn = ({title = '', cards}: AppDeskColumnProps) => {
    return (
        <div className={cl.deckColumn}>
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