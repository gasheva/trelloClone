import {Card} from 'interfaces/Card';

export interface Column{
    id: string,
    title: string,
    cards: Card[],
}