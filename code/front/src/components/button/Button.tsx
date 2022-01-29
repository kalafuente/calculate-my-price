import React from 'react';
import { ButtonStyled } from './ButtonStyles';

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type ButtonProps = {
    text: string;
    styleType: ButtonTypes;
    type?: string,
    onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, styleType, type, onClick }) => {
    return (
        <ButtonStyled styleType={styleType} onClick={onClick} >
            { text}
        </ButtonStyled >
    );

}

export default Button
