import React from 'react';
import {Column} from 'interfaces/Column';
import AppDeskColumn from 'components/AppDeskColumn/AppDeskColumn';
import cl from 'components/AppDesk/AppDesk.module.scss';

interface AppDeskProps {
    columns: Column[];
}

const AppDesk = ({columns}: AppDeskProps) => {

    return (
        <div className={cl.appDesk}>
            {columns.map(column =>
                <AppDeskColumn key={column.id} title={column.title} cards={column.cards}/>
            )}
        </div>
    );
};

export default AppDesk;