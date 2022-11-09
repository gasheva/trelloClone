import React from 'react';
import {Card} from 'interfaces/Card';

interface AppDeskColumnProps {
    header: string,
    cards: Card[]
}

const AppDeskColumn = ({header = ''}: AppDeskColumnProps) => {
    return (
        <div>

        </div>
    );
};

export default AppDeskColumn;