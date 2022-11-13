import React, {useState} from 'react';
import {Column} from 'interfaces/Column';
import AppDeskColumn from 'components/AppDeskColumn/AppDeskColumn';
import cl from 'components/AppDesk/AppDesk.module.scss';

const AppDesk = () => {
    // TODO(test)
    const [columns, setColumns] = useState<Column[]>([
        {id: '1', title: 'Anime', cards: [{title: 'Naruto'}]},
        {id: '2', title: 'Anime2', cards: [{title: 'Naruto'}]},
        {id: '3', title: 'Anime3', cards: [{title: 'Naruto'}]},
    ]);


    // TODO(rewrite using id)
    const onDrop = (event: any, dropZoneIndex: number) => {
        const dropZoneEl = event.target.closest('.draggable__item');
        dropZoneEl.classList.remove('print-items__drop-zone--drag-enter');

        let itemIndex = event.dataTransfer.getData('itemIndex');

        const moveElementInPlace = (ar: any[], from: number, to: number): void => {
            const itemFrom = ar[from];
            const itemPaste = JSON.parse(JSON.stringify(ar[from]));
            ar.splice(to, 0, itemPaste);
            const idxItemToDelete = ar.findIndex((item: any) => item === itemFrom);
            ar.splice(idxItemToDelete, 1);
        };
        moveElementInPlace(columns, itemIndex, dropZoneIndex);
        setColumns([...columns]);
    };

    const onDragOver = (event: any) => {
        event.preventDefault();
    };

    const onDragEnter = (event: any, index: number) => {
        const dropZoneEl = event.target.closest('.draggable__item');
        dropZoneEl.classList.add('print-items__drop-zone--drag-enter');
    };

    const onDragLeave = (event: any) => {
        const dropZoneEl = event.target.closest('.draggable__item');
        dropZoneEl.classList.remove('print-items__drop-zone--drag-enter');
    };

    const onDragEnd = (event: any) => {
        event.target.style.opacity = '1';
        event.target.style.outline = 'none';
    };

    const onDragStart = (event: any, index: number) => {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.target.style.opacity = '0.2';
        event.target.style.outline = '3px dashed #828E9F';
        event.dataTransfer.setData('itemIndex', index);
    };


    return (
        <div className={[cl.appDesk, 'draggable__container'].join(' ')}>
            {columns.map(col => col.id)}
            {columns.map((column, index) =>
                <div
                    key={column.id}
                    className="draggable__item"
                    onDrop={(e: any) => onDrop(e, index)}
                    onDragOver={onDragOver}
                    onDragEnter={(e: any) => onDragEnter(e, index)}
                    onDragLeave={onDragLeave}
                >
                    <AppDeskColumn
                        title={column.title} cards={column.cards}
                        index={index}
                        onDragStart={onDragStart}
                        onDragEnd={onDragEnd}
                    />
                </div>
            )}
        </div>
    );
};

export default AppDesk;