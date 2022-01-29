import React from 'react';
import { ContainerStyled, SubtitleStyled, TitleStyled } from './TitleStyles';

export enum ButtonTypes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type TitleProps = {
    title: string;
    subtitle?: string,
}

const Title: React.FunctionComponent<TitleProps> = ({ title, subtitle }) => {
    return (
        <ContainerStyled>
            <TitleStyled>
                {title}
            </TitleStyled>
            {subtitle && <SubtitleStyled>
                {subtitle}
            </SubtitleStyled>}
        </ContainerStyled>
    );
}
export default Title
