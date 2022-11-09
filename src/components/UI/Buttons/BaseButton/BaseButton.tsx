import React from 'react';
import {ButtonIconPositions} from 'interfaces/ButtonIconPositions';

interface BaseButtonProps {
    icon: string;
    iconPosition: ButtonIconPositions;
    label: string;
}

const BaseButton = ({icon = '', iconPosition = ButtonIconPositions.RIGHT, label = ''}: BaseButtonProps) => {
    return (
        <button>
            {label}
        </button>
    );
};

export default BaseButton;