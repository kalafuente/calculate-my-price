import styled from 'styled-components'
import { Color, FontSize, FontWeight } from '../../theme/Theme';

export const Numeration = styled('span') <{}>`
    font-weight: ${props => props.theme.fontWeight[FontWeight.SEMIBOLD]};
    font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
    color:  ${props => props.theme.colors[Color.BLUE]};
    margin-bottom: 10px;
    display: block;
`;

export const Question = styled('div') <{}>`
    font-weight: ${props => props.theme.fontWeight[FontWeight.SEMIBOLD]};
    font-size:  ${props => props.theme.fontSize[FontSize.BASE]};
    margin-bottom: 15px;
`;